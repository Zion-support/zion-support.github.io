import React, { useState, useEffect } from &quot;react&quot;;
import { useQuery } from &quot;@tanstack/react-query&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useToast } from &quot;@/hooks/use-toast&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import Skeleton from &quot;@/components/ui/skeleton&quot;;
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle, ShieldAlert } from 'lucide-react'
import { formatDistanceToNow } from &quot;date-fns&quot;;
import { safeStorage } from &quot;@/utils/safeStorage&quot;;
import { useCurrency } from '@/hooks/useCurrency';
import {logErrorToProduction} from '@/utils/productionLogger';


interface Transaction {
  id: string;
  user_id: string;
  provider_id: string;
  service_id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'in_escrow' | 'released' | 'disputed' | 'refunded' | 'cancelled';
  in_escrow: boolean;
  created_at: string;
  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
  provider?: {
    display_name?: string;
  };
  service?: {
    title?: string;
  };
}

export function TransactionHistory() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>(
    () => (safeStorage.getItem('transaction_filter') as any) || 'all'
  );

  useEffect(() => {
    safeStorage.setItem('transaction_filter', filter);
  }, [filter]);
  
  const { data: transactions, isLoading, error, refetch } = useQuery({
    queryKey: ['transactions', user?.id, filter],
    queryFn: async () => {
      if (!user) return [];
      
      // Build the query based on filters
      let query = supabase
        .from('transactions')
        .select(`
          *,
          provider:profiles!provider_id(display_name),
          service:services(title)
        `)
        .or(`user_id.eq.${user.id},provider_id.eq.${user.id}`);
      
      if (filter === 'pending') {
        query = query.eq('status', 'pending');
      } else if (filter === 'completed') {
        query = query.eq('status', 'released');
      } else if (filter === 'escrow') {
        query = query.eq('in_escrow', true);
      }
      
      query = query.order('created_at', { ascending: false });
      
      const { data, error } = await query;
      
      if (error) throw error;
      return data as Transaction[];
    },
    enabled: !!user});

  const handleManageTransaction = async (transactionId: string, action: 'release' | 'refund' | 'cancel') => {
    try {
      const { data, error } = await supabase.functions.invoke('manage-transaction', {
        body: { transactionId, action }
      });
      
      if (error) throw error;
      
      toast({
        title: &quot;Success&quot;,
        description: (data as any)?.message || &quot;Transaction updated successfully&quot;});
      
      refetch();
    } catch (error) {
      logErrorToProduction('Error managing transaction:', { data: error });
      toast({
        title: &quot;Error&quot;,
        description: error instanceof Error ? error.message : &quot;Failed to update transaction&quot;,
        variant: &quot;destructive&quot;});
    }
  };
  
  const getStatusBadge = (status: string, inEscrow: boolean) => {
    switch(status) {
      case 'in_escrow':
        return (
          <Badge variant=&quot;outline&quot; className=&quot;bg-yellow-500/20 text-yellow-500 border-yellow-500&quot;>
            <Clock className=&quot;w-3 h-3 mr-1&quot; /> In Escrow
          </Badge>
        );
      case 'pending':
        return inEscrow ? (
          <Badge variant=&quot;outline&quot; className=&quot;bg-yellow-500/20 text-yellow-500 border-yellow-500&quot;>
            <Clock className=&quot;w-3 h-3 mr-1&quot; /> In Escrow
          </Badge>
        ) : (
          <Badge variant=&quot;outline&quot; className=&quot;bg-blue-500/20 text-blue-500 border-blue-500&quot;>
            <Clock className=&quot;w-3 h-3 mr-1&quot; /> Pending
          </Badge>
        );
      case 'released':
        return (
          <Badge variant=&quot;outline&quot; className=&quot;bg-green-500/20 text-green-500 border-green-500&quot;>
            <CheckCircle2 className=&quot;w-3 h-3 mr-1&quot; /> Released
          </Badge>
        );
      case 'completed':
        return (
          <Badge variant=&quot;outline&quot; className=&quot;bg-green-500/20 text-green-500 border-green-500&quot;>
            <CheckCircle2 className=&quot;w-3 h-3 mr-1&quot; /> Completed
          </Badge>
        );
      case 'disputed':
        return (
          <Badge variant=&quot;outline&quot; className=&quot;bg-red-500/20 text-red-500 border-red-500&quot;>
            <ShieldAlert className=&quot;w-3 h-3 mr-1&quot; /> Disputed
          </Badge>
        );
      case 'refunded':
        return (
          <Badge variant=&quot;outline&quot; className=&quot;bg-purple-500/20 text-purple-500 border-purple-500&quot;>
            <RefreshCcw className=&quot;w-3 h-3 mr-1&quot; /> Refunded
          </Badge>
        );
      case 'cancelled':
        return (
          <Badge variant=&quot;outline&quot; className=&quot;bg-red-500/20 text-red-500 border-red-500&quot;>
            <XCircle className=&quot;w-3 h-3 mr-1&quot; /> Cancelled
          </Badge>
        );
      default:
        return (
          <Badge variant=&quot;outline&quot; className=&quot;bg-gray-500/20 text-gray-500 border-gray-500&quot;>
            <AlertCircle className=&quot;w-3 h-3 mr-1&quot; /> Unknown
          </Badge>
        );
    }
  }; 

  const { formatPrice } = useCurrency();

  const formatCurrency = (amount: number) => {
    return formatPrice(amount);
  };

  if (error) {
    return (
      <div className=&quot;bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light&quot;>
        <div className=&quot;text-center text-zion-slate-light&quot;>
          <AlertCircle className=&quot;mx-auto h-12 w-12 text-red-500 mb-4&quot; />
          <h3 className=&quot;font-bold text-xl text-white mb-2&quot;>Failed to load transactions</h3>
          <p className=&quot;mb-4&quot;>{error.message}</p>
          <Button onClick={() => refetch()} variant=&quot;outline&quot;>
            <RefreshCcw className=&quot;mr-2 h-4 w-4&quot; />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className=&quot;bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden&quot;>
      <div className=&quot;p-6&quot;>
        <div className=&quot;flex items-center justify-between mb-6&quot;>
          <h2 className=&quot;text-2xl font-bold text-white&quot;>Transaction History</h2>
          
          <div className=&quot;flex space-x-2&quot;>
            <Button 
              size=&quot;sm&quot; 
              variant={filter === 'all' ? 'default' : 'outline'} 
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >
              All
            </Button>
            <Button 
              size=&quot;sm&quot; 
              variant={filter === 'pending' ? 'default' : 'outline'} 
              onClick={() => setFilter('pending')}
              className={filter === 'pending' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >
              Pending
            </Button>
            <Button 
              size=&quot;sm&quot; 
              variant={filter === 'completed' ? 'default' : 'outline'} 
              onClick={() => setFilter('completed')}
              className={filter === 'completed' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >
              Completed
            </Button>
            <Button 
              size=&quot;sm&quot; 
              variant={filter === 'escrow' ? 'default' : 'outline'} 
              onClick={() => setFilter('escrow')}
              className={filter === 'escrow' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >
              Escrow
            </Button>
          </div>
        </div>
        
        {isLoading ? (
          Array(3).fill(0).map((_, i) => (
            <div key={i} className=&quot;mb-4&quot;>
              <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
                <CardHeader className=&quot;pb-2&quot;>
                  <Skeleton className=&quot;h-6 w-3/4 bg-zion-blue-light&quot; />
                  <Skeleton className=&quot;h-4 w-1/4 bg-zion-blue-light mt-2&quot; />
                </CardHeader>
                <CardContent>
                  <div className=&quot;flex justify-between mb-2&quot;>
                    <Skeleton className=&quot;h-5 w-1/3 bg-zion-blue-light&quot; />
                    <Skeleton className=&quot;h-5 w-1/4 bg-zion-blue-light&quot; />
                  </div>
                  <Skeleton className=&quot;h-4 w-2/3 bg-zion-blue-light&quot; />
                </CardContent>
                <CardFooter>
                  <Skeleton className=&quot;h-9 w-28 bg-zion-blue-light rounded-md&quot; />
                </CardFooter>
              </Card>
            </div>
          ))
        ) : transactions && transactions.length > 0 ? (
          <div className=&quot;space-y-4&quot;>
            {transactions.map((transaction) => {
              const isClient = user?.id === transaction.user_id;
              const isPending =
                transaction.status === 'pending' || transaction.status === 'in_escrow';
              const isInEscrow = transaction.in_escrow;
              const canRelease = !isClient && isPending && isInEscrow;
              const canCancel = isClient && isPending;
              const canRefund = isClient && transaction.status === 'released';
              
              const counterpartyName = isClient 
                ? transaction.provider?.display_name || 'Service Provider' 
                : 'Client';

              return (
                <Card key={transaction.id} className=&quot;bg-zion-blue-dark border-zion-blue-light overflow-hidden&quot;>
                  <CardHeader className=&quot;pb-3&quot;>
                    <div className=&quot;flex justify-between items-start&quot;>
                      <div>
                        <CardTitle className=&quot;text-white text-lg&quot;>
                          {transaction.service?.title || 'Service Payment'}
                        </CardTitle>
                        <CardDescription className=&quot;text-zion-slate-light&quot;>
                          {isClient ? (
                            <span>Payment to <span className=&quot;text-zion-purple&quot;>{counterpartyName}</span></span>
                          ) : (
                            <span>Payment from <span className=&quot;text-zion-cyan&quot;>Client</span></span>
                          )}
                        </CardDescription>
                      </div>
                      
                      {getStatusBadge(transaction.status, transaction.in_escrow)}
                    </div>
                  </CardHeader>
                  <CardContent className=&quot;pb-3&quot;>
                    <div className=&quot;flex justify-between items-center mb-1&quot;>
                      <span className=&quot;text-zion-slate-light&quot;>Amount:</span>
                      <span className=&quot;text-white font-medium text-lg&quot;>
                        {formatCurrency(transaction.amount)}
                      </span>
                    </div>
                    
                    <div className=&quot;flex justify-between items-center text-sm&quot;>
                      <span className=&quot;text-zion-slate-light&quot;>Date:</span>
                      <span className=&quot;text-zion-slate-light&quot;>
                        {new Date(transaction.created_at).toLocaleDateString()} 
                        ({formatDistanceToNow(new Date(transaction.created_at), { addSuffix: true })})
                      </span>
                    </div>
                    
                    {(transaction.completed_at || transaction.refunded_at || transaction.cancelled_at) && (
                      <div className=&quot;flex justify-between items-center text-sm mt-1&quot;>
                        <span className=&quot;text-zion-slate-light&quot;>
                          {transaction.completed_at ? 'Completed:' : 
                           transaction.refunded_at ? 'Refunded:' : 'Cancelled:'}
                        </span>
                        <span className=&quot;text-zion-slate-light&quot;>
                          {new Date(
                            transaction.completed_at || 
                            transaction.refunded_at || 
                            transaction.cancelled_at!
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className=&quot;flex justify-end gap-2 bg-zion-blue/20 pt-3&quot;>
                    {canRelease && (
                      <Button 
                        onClick={() => handleManageTransaction(transaction.id, 'release')}
                        size=&quot;sm&quot;
                        className=&quot;bg-green-600 hover:bg-green-700 text-white&quot;
                      >
                        <CheckCircle2 className=&quot;mr-1 h-4 w-4&quot; /> Release Funds
                      </Button>
                    )}
                    
                    {canRefund && (
                      <Button 
                        onClick={() => handleManageTransaction(transaction.id, 'refund')}
                        size=&quot;sm&quot;
                        variant=&quot;outline&quot;
                        className=&quot;text-zion-slate-light border-zion-blue-light&quot;
                      >
                        <RefreshCcw className=&quot;mr-1 h-4 w-4&quot; /> Request Refund
                      </Button>
                    )}
                    
                    {canCancel && (
                      <Button 
                        onClick={() => handleManageTransaction(transaction.id, 'cancel')}
                        size=&quot;sm&quot;
                        variant=&quot;outline&quot;
                        className=&quot;text-red-400 border-red-400/30 hover:bg-red-400/10&quot;
                      >
                        <XCircle className=&quot;mr-1 h-4 w-4&quot; /> Cancel
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className=&quot;text-center py-12 border border-dashed border-zion-blue-light rounded-lg&quot;>
            <div className=&quot;mx-auto w-16 h-16 bg-zion-blue-light/30 rounded-full flex items-center justify-center mb-4&quot;>
              <ArrowRight className=&quot;h-8 w-8 text-zion-slate-light&quot; />
              <ArrowLeft className=&quot;h-8 w-8 text-zion-slate-light -ml-4&quot; />
            </div>
            <h3 className=&quot;text-xl font-medium text-white mb-2&quot;>No transactions found</h3>
            <p className=&quot;text-zion-slate-light max-w-md mx-auto&quot;>
              {filter !== 'all' 
                ? `You don't have any ${filter} transactions. Try changing the filter or make a new transaction.`
                : &quot;You haven't made any transactions yet. Once you make a payment or receive one, it will appear here.&quot;}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
