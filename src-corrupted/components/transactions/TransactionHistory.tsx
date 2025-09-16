export /**
 * TransactionHistory - Function description
 */
function TransactionHistory() {
  const { user } = use_auth ();
  const { toast } = use_toast ();
  const [filter, set_filter] = useState<'all' | 'pending' | 'completed' | 'escrow'>(
    () => (safe_storage.get_item ('transaction_filter') as any) || 'all');
  useEffect ((, ) => {
    safe_storage.set_item ('transaction_filter', filter);
  }, [filter]);
  const { data: transactions, is_loading, error, refetch } = use_query ({
    query_key: ['transactions', user?.id, filter];
    query_fn: async () => {
      // Check condition
if (return []) {
  $2

}
export function TransactionHistory() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>(
    () => (safeStorage.getItem('transaction_filter') as any) |'all'
  )
  useEffect((,) => {
    safeStorage.setItem('transaction_filter', filter)
  }, [filter])
  const { data: transactions, isLoading, error, refetch } = useQuery({
    queryKey: ['transactions', user?.id, filter]
    queryFn: async () => {

      if (!user) return []
          provider:profiles!provider_id(display_name)
      query = query.order('created_at', { ascending: false })
    }
              const isClient = user?.id === transaction.user_id;              const isPending =
                transaction.status === 'pending' |transaction.status === 'in_escrow'
              const isInEscrow = transaction.in_escrow
              const canRelease = !isClient && isPending && isInEscrow
              const canCancel = isClient && isPending
              const canRefund = isClient && transaction.status === 'released'
              const counterpartyName = isClient
                ? transaction.provider?.display_name |'Service Provider'
                : 'Client'
}

  )
}
import { safeStorage } from "@/utils/safeStorage",
import { useCurrency } from '@/hooks/useCurrency',
import {logErrorToProduction} from '@/utils/productionLogger',
interface Transaction {
  id: string,
  user_id: string,
  provider_id: string,
  service_id: string,
  amount: number,
  currency: string,
  status: 'pending' | 'in_escrow' | 'released' | 'disputed' | 'refunded' | 'cancelled',
  in_escrow: boolean,
  created_at: string,
  completed_at?: string
  refunded_at?: string
  cancelled_at?: string
  provider?: {
    display_name?: string
  }
  service?: {
    title?: string
  }
}
;
export function TransactionHistory() {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>(;
    () => (safeStorage.getItem('transaction_filter') as any) || 'all';
  ),;
  useEffect(() => {;
    safeStorage.setItem('transaction_filter', filter);
  }, [filter]),;
  const { data: transactions, isLoading, error, refetch } = useQuery({;
    queryKey: ['transactions', user?.id, filter],;
    queryFn: async () => {;
      if (!user) return [],;
      // Build the query based on filters;
      let query = supabase;
        .from('transactions');
        .select(`;
          *,;
          provider:profiles!provider_id(display_name),;
          service:services(title);
        `);
        .or(`user_id.eq.${user.id},provider_id.eq.${user.id}`),;
      if (filter === 'pending') {;
        query = query.eq('statuspending');
      } else if (filter === 'completed') {;
        query = query.eq('statusreleased');
      } else if (filter === 'escrow') {;
        query = query.eq('in_escrow', true);
      }
;
      query = query.order('created_at', { ascending: false }),;
      const { data, error } = await query,;
      if (error) throw error,;
      return data as Transaction[];
    },;
    enabled: !!user}),;
  const handleManageTransaction = async (transactionId: string, action: 'release' | 'refund' | 'cancel') => {;
    try {;
      const { data, error } = await supabase.functions.invoke('manage-transaction', {;
        body: { transactionId, action }
      }),
      
      if (error) throw error,
      
      toast({
        title: "Success",
        description: (data as any)?.message || "Transaction updated successfully"}),
      
      refetch()
    } catch (error) {
      logErrorToProduction('Error managing transaction:', { data: error }),
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update transaction",
        variant: "destructive"})
    }
  },
  
  const getStatusBadge = (status: string, inEscrow: boolean) => {
    switch(status) {
      case 'in_escrow':
        return (
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">
            <Clock className="w-3 h-3 mr-1" /> In Escrow
          </Badge>
        ),
      case 'pending':
        return inEscrow ? (
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">
            <Clock className="w-3 h-3 mr-1" /> In Escrow
          </Badge>
        ) : (
          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500">
            <Clock className="w-3 h-3 mr-1" /> Pending
          </Badge>
        ),
      case 'released':
        return (
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">
            <CheckCircle2 className="w-3 h-3 mr-1" /> Released
          </Badge>
        ),
      case 'completed':
        return (
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">
            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed
          </Badge>
        ),
      case 'disputed':
        return (
          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">
            <ShieldAlert className="w-3 h-3 mr-1" /> Disputed
          </Badge>
        ),
      case 'refunded':
        return (
          <Badge variant="outline" className="bg-purple-500/20 text-purple-500 border-purple-500">
            <RefreshCcw className="w-3 h-3 mr-1" /> Refunded
          </Badge>
        ),
      case 'cancelled':
        return (
          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">
            <XCircle className="w-3 h-3 mr-1" /> Cancelled
          </Badge>
        ),
      default:
        return (
          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">
            <AlertCircle className="w-3 h-3 mr-1" /> Unknown
          </Badge>
        )
    }
  }, 

export function TransactionHistory() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>(
    () => (safeStorage.getItem('transaction_filter') as any) || 'all'
  )
  useEffect((,) => {
    safeStorage.setItem('transaction_filter', filter)
  }, [filter])
  const { data: transactions, isLoading, error, refetch } = useQuery({
    queryKey: ['transactions', user?.id, filter]
    queryFn: async () => {
      if (!user) return []
          provider:profiles!provider_id(display_name)
      query = query.order('created_at', { ascending: false }),;
      ;
    };
              const isClient = user?.id === transaction.user_id;              const isPending = null;
                transaction.status === 'pending' || transaction.status === 'in_escrow'
              const isInEscrow = transaction.in_escrow
              const canRelease = !isClient && isPending && isInEscrow
              const canCancel = isClient && isPending
              const canRefund = isClient && transaction.status === 'released'
              const counterpartyName = isClient 
                ? transaction.provider?.display_name || 'Service Provider' 
                : 'Client'
}
  )
}
;
  completed_at?: string,
  refunded_at?: string,
  cancelled_at?: string,
  provider?: {
    display_name?: string
  },
  service?: {
    title?: string
import React, { useState, useEffect } from "react",;
import { useQuery } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import Skeleton from "@/components/ui/skeleton",;
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle, ShieldAlert } from 'lucide-react';
import { formatDistanceToNow } from "date-fns",;
import { safeStorage } from "@/utils/safeStorage",;
import { useCurrency } from '@/hooks/useCurrency',;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface Transaction {;
  id: string,;
  user_id: string,;
  provider_id: string,;
  service_id: string,;
  amount: number,;
  currency: string,;
  status: 'pending' | 'in_escrow' | 'released' | 'disputed' | 'refunded' | 'cancelled',;
  in_escrow: boolean,;
  created_at: string,;
  completed_at?: string,;
  refunded_at?: string,;
  cancelled_at?: string,;
  provider?: {;
    display_name?: string;
  },;
  service?: {;
    title?: string;
  }
}
;
export function TransactionHistory() {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>(;
    () => (safeStorage.getItem('transaction_filter') as any) || 'all';
  ),;
  useEffect(() => {;
    safeStorage.setItem('transaction_filter', filter);
  }, [filter]),;
  const { data: transactions, isLoading, error, refetch } = useQuery({;
    queryKey: ['transactions', user?.id, filter],;
    queryFn: async () => {;
      if (!user) return [],;
      // Build the query based on filters;
      let query = supabase;
        .from('transactions');
        .select(`;
          *,;
          provider:profiles!provider_id(display_name),;
          service:services(title);
        `);
        .or(`user_id.eq.${user.id},provider_id.eq.${user.id}`),;
      if (filter === 'pending') {;
        query = query.eq('statuspending');
      } else if (filter === 'completed') {;
        query = query.eq('statusreleased');
      } else if (filter === 'escrow') {;
        query = query.eq('in_escrow', true);
      }
;
      query = query.order('created_at', { ascending: false }),;
      const { data, error } = await query,;
      if (error) throw error,;
      return data as Transaction[];
    },;
    enabled: !!user}),;
  const handleManageTransaction = async (transactionId: string, action: 'release' | 'refund' | 'cancel') => {;
    try {;
      const { data, error } = await supabase.functions.invoke('manage-transaction', {;
        body: { transactionId, action }
      }),
      
      if (error) throw error,
      
      toast({
        title: "Success",
        description: (data as any)?.message || "Transaction updated successfully"}),
      
      refetch()
    } catch (error) {
      logErrorToProduction('Error managing transaction:', { data: error }),
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update transaction",
        variant: "destructive"})
    }
  },
  
  const getStatusBadge = (status: string, inEscrow: boolean) => {
    switch(status) {
      case 'in_escrow':
        return (
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">
            <Clock className="w-3 h-3 mr-1" /> In Escrow
          </Badge>
        ),
      case 'pending':
        return inEscrow ? (
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">
            <Clock className="w-3 h-3 mr-1" /> In Escrow
          </Badge>
        ) : (
          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500">
            <Clock className="w-3 h-3 mr-1" /> Pending
          </Badge>
        ),
      case 'released':
        return (
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">
            <CheckCircle2 className="w-3 h-3 mr-1" /> Released
          </Badge>
        ),
      case 'completed':
        return (
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">
            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed
          </Badge>
        ),
      case 'disputed':
        return (
          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">
            <ShieldAlert className="w-3 h-3 mr-1" /> Disputed
          </Badge>
        ),
      case 'refunded':
        return (
          <Badge variant="outline" className="bg-purple-500/20 text-purple-500 border-purple-500">
            <RefreshCcw className="w-3 h-3 mr-1" /> Refunded
          </Badge>
        ),
      case 'cancelled':
        return (
          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">
            <XCircle className="w-3 h-3 mr-1" /> Cancelled
          </Badge>
        ),
      default:
        return (
          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">
            <AlertCircle className="w-3 h-3 mr-1" /> Unknown
          </Badge>
        )
    }
  }, 

  const { formatPrice } = useCurrency(),

  const formatCurrency = (amount: number) => {
    return formatPrice(amount)
  },

  if (error) {
    return (
      <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">
        <div className="text-center text-zion-slate-light">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h3 className="font-bold text-xl text-white mb-2">Failed to load transactions</h3>
          <p className="mb-4">{error.message}</p>
          <Button onClick={() => refetch()} variant="outline">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Transaction History</h2>
          
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              variant={filter === 'all' ? 'default' : 'outline'} 
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >
              All
            </Button>
            <Button 
              size="sm" 
              variant={filter === 'pending' ? 'default' : 'outline'} 
              onClick={() => setFilter('pending')}
              className={filter === 'pending' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >
              Pending
            </Button>
            <Button 
              size="sm" 
              variant={filter === 'completed' ? 'default' : 'outline'} 
              onClick={() => setFilter('completed')}
              className={filter === 'completed' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >
              Completed
            </Button>
            <Button 
              size="sm" 
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
            <div key={i} className="mb-4">
              <Card className="bg-zion-blue-dark border-zion-blue-light">
                <CardHeader className="pb-2">
                  <Skeleton className="h-6 w-3/4 bg-zion-blue-light" />
                  <Skeleton className="h-4 w-1/4 bg-zion-blue-light mt-2" />
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-2">
                    <Skeleton className="h-5 w-1/3 bg-zion-blue-light" />
                    <Skeleton className="h-5 w-1/4 bg-zion-blue-light" />
                  </div>
                  <Skeleton className="h-4 w-2/3 bg-zion-blue-light" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-9 w-28 bg-zion-blue-light rounded-md" />
                </CardFooter>
              </Card>
            </div>
          ))
        ) : transactions && transactions.length > 0 ? (
          <div className="space-y-4">
            {transactions.map((transaction) => {
              const isClient = user?.id === transaction.user_id,
              const isPending =
                transaction.status === 'pending' || transaction.status === 'in_escrow',
              const isInEscrow = transaction.in_escrow,
              const canRelease = !isClient && isPending && isInEscrow,
              const canCancel = isClient && isPending,
              const canRefund = isClient && transaction.status === 'released',
              
              const counterpartyName = isClient 
                ? transaction.provider?.display_name || 'Service Provider' 
                : 'Client',

              return (
                <Card key={transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-lg">
                          {transaction.service?.title || 'Service Payment'}
                        </CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {isClient ? (
                            <span>Payment to <span className="text-zion-purple">{counterpartyName}</span></span>
                          ) : (
                            <span>Payment from <span className="text-zion-cyan">Client</span></span>
      }),;
      if (error) throw error,;
      toast({;
        title: "Success",;
        description: (data as any)?.message || "Transaction updated successfully"}),;
      refetch();
    } catch (error) {;
      logErrorToProduction('Error managing transaction:', { data: error }),;
      toast({;
        title: "Error",;
        description: error instanceof Error ? error.message : "Failed to update transaction",;
        variant: "destructive"});
    }
  },;
  const getStatusBadge = (status: string, inEscrow: boolean) => {;
    switch(status) {;
      case 'in_escrow':;
        return (;
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">;
            <Clock className="w-3 h-3 mr-1" /> In Escrow;
          </Badge>;
        ),;
      case 'pending':;
        return inEscrow ? (;
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">;
            <Clock className="w-3 h-3 mr-1" /> In Escrow;
          </Badge>;
        ) : (;
          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500">;
            <Clock className="w-3 h-3 mr-1" /> Pending;
          </Badge>;
        ),;
      case 'released':;
        return (;
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">;
            <CheckCircle2 className="w-3 h-3 mr-1" /> Released;
          </Badge>;
        ),;
      case 'completed':;
        return (;
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">;
            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed;
          </Badge>;
        ),;
      case 'disputed':;
        return (;
          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">;
            <ShieldAlert className="w-3 h-3 mr-1" /> Disputed;
          </Badge>;
        ),;
      case 'refunded':;
        return (;
          <Badge variant="outline" className="bg-purple-500/20 text-purple-500 border-purple-500">;
            <RefreshCcw className="w-3 h-3 mr-1" /> Refunded;
          </Badge>;
        ),;
      case 'cancelled':;
        return (;
          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">;
            <XCircle className="w-3 h-3 mr-1" /> Cancelled;
          </Badge>;
        ),;
      default:;
        return (;
          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">;
            <AlertCircle className="w-3 h-3 mr-1" /> Unknown;
          </Badge>;
        );
    }
  },;
  const { formatPrice } = useCurrency(),;
  const formatCurrency = (amount: number) => {;
    return formatPrice(amount);
  },;
  if (error) {;
    return (;
      <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">;
        <div className="text-center text-zion-slate-light">;
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;
          <h3 className="font-bold text-xl text-white mb-2">Failed to load transactions</h3>;
          <p className="mb-4">{error.message}</p>;
          <Button onClick={() => refetch()} variant="outline">;
            <RefreshCcw className="mr-2 h-4 w-4" />;
            Try Again;
          </Button>;
        </div>;
      </div>;
    );
  }
;
  return (;
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden">;
      <div className="p-6">;
        <div className="flex items-center justify-between mb-6">;
          <h2 className="text-2xl font-bold text-white">Transaction History</h2>;
          <div className="flex space-x-2">;
            <Button;
              size="sm";
              variant={filter === 'all' ? 'default' : 'outline'} ;
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              All;
            </Button>;
            <Button;
              size="sm";
              variant={filter === 'pending' ? 'default' : 'outline'} ;
              onClick={() => setFilter('pending')}
              className={filter === 'pending' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              Pending;
            </Button>;
            <Button;
              size="sm";
              variant={filter === 'completed' ? 'default' : 'outline'} ;
              onClick={() => setFilter('completed')}
              className={filter === 'completed' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              Completed;
            </Button>;
            <Button;
              size="sm";
              variant={filter === 'escrow' ? 'default' : 'outline'} ;
              onClick={() => setFilter('escrow')}
              className={filter === 'escrow' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              Escrow;
            </Button>;
          </div>;
        </div>;
        {isLoading ? (;
          Array(3).fill(0).map((_, i) => (;
            <div key={i} className="mb-4">;
              <Card className="bg-zion-blue-dark border-zion-blue-light">;
                <CardHeader className="pb-2">;
                  <Skeleton className="h-6 w-3/4 bg-zion-blue-light" />;
                  <Skeleton className="h-4 w-1/4 bg-zion-blue-light mt-2" />;
                </CardHeader>;
                <CardContent>;
                  <div className="flex justify-between mb-2">;
                    <Skeleton className="h-5 w-1/3 bg-zion-blue-light" />;
                    <Skeleton className="h-5 w-1/4 bg-zion-blue-light" />;
                  </div>;
                  <Skeleton className="h-4 w-2/3 bg-zion-blue-light" />;
                </CardContent>;
                <CardFooter>;
                  <Skeleton className="h-9 w-28 bg-zion-blue-light rounded-md" />;
                </CardFooter>;
              </Card>;
            </div>;
          ));
        ) : transactions && transactions.length > 0 ? (;
          <div className="space-y-4">;
            {transactions.map((transaction) => {;
              const isClient = user?.id === transaction.user_id,;
              const isPending =;
                transaction.status === 'pending' || transaction.status === 'in_escrow',;
              const isInEscrow = transaction.in_escrow,;
              const canRelease = !isClient && isPending && isInEscrow,;
              const canCancel = isClient && isPending,;
              const canRefund = isClient && transaction.status === 'released';
              const counterpartyName = isClient;
                ? transaction.provider?.display_name || 'Service Provider';
                : 'Client';
}
  );
}

