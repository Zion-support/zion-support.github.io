


import React, { useState } from "react";
import {useQuery} from "@tanstack/react-query";
import {supabase} from "@/integrations/supabase/client";
import {useAuth} from "@/hooks/useAuth";
import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Skeleton} from "@/components/ui/skeleton";
import {ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle} from "lucide-react";
import {formatDistanceToNow} from "date-fns";


      toast({
        title: "Success"
        description: data.message |"Transaction updated successfully"})
      refetch()
    } catch (error) {

      console.error("Error managing transaction:", error),


      toast({
        title: "Error"
        description: error.message |"Failed to update transaction"
        variant: "destructive"})
    }


  }
  



  }
  },
  


  const getStatusBadge = (status: string, inEscrow: boolean) => {
    switch(status) {
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


      case 'completed':
        return (
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">
            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed
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
        )
      default:
        return (
          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">
            <AlertCircle className="w-3 h-3 mr-1" /> Unknown
          </Badge>
        )
    }


  }
  



  }
  },
  


  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency'
      currency: currency.toUpperCase()
    }).format(amount)

  const { data: transactions, isLoading, error, refetch } = useQuery({;
    queryKey: ['transactions', user?.id, filter];
    queryFn: async () => {;
      if (!user) return [];

      // Build the query based on filters;
      let query = supabase;
        .from('transactions');
        .select(`;
          *;
          provider:profiles!provider_id(display_name),;
          service:services(title);
        `);
        .or(`user_id && user_id.eq.${user && user.id},provider_id && provider_id.eq.${user && user.id}`);

      if (filter === 'pending') {;
        query = query && query.eq('statuspending');
      } else if (filter === 'completed') {;
        query = query && query.eq('statuscompleted');
      } else if (filter === 'escrow') {;
        query = query && query.eq('in_escrow', true);
      }

      query = query && query.order('created_at', { ascending: false }),;

      const { data, error } = await query;

      if (error) throw error;
      return data as Transaction[];
    };
    enabled: !!user}),;

  const handleManageTransaction = async (transactionId: string, action: 'release' | 'refund' | 'cancel') => {;
    try {;
      const { data, error } = await supabase && supabase.functions.invoke('manage-transaction', {;
        body: { transactionId, action }

              return (
                <Card key={transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-lg">
                          {transaction.service?.title |'Service Payment'}
                        </CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {isClient ? (
                            <span>Payment to <span className="text-zion-purple">{counterpartyName}</span></span>
                          ) : (
                            <span>Payment from <span className="text-zion-cyan">Client</span></span>



                          )}
                        </CardDescription>
                      </div>
                      {getStatusBadge(transaction.status, transaction.in_escrow)}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-zion-slate-light">Amount:</span>
                      <span className="text-white font-medium text-lg">
                        {formatCurrency(transaction.amount, transaction.currency)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zion-slate-light">Date:</span>
                      <span className="text-zion-slate-light">
                        {new Date(transaction.created_at).toLocaleDateString()}
                        ({formatDistanceToNow(new Date(transaction.created_at), { addSuffix: true })})
                      </span>
                    </div>

                    {(transaction.completed_at || transaction.refunded_at || transaction.cancelled_at) && (

                    {(transaction.completed_at |transaction.refunded_at |transaction.cancelled_at) && (
                    {(transaction.completed_at || transaction.refunded_at || transaction.cancelled_at) && (


                      <div className="flex justify-between items-center text-sm mt-1">
                        <span className="text-zion-slate-light">
                          {transaction.completed_at ? 'Completed:' :
                           transaction.refunded_at ? 'Refunded:' : 'Cancelled:'}
                        </span>
                        <span className="text-zion-slate-light">
                          {new Date(
                            transaction.completed_at |
                            transaction.refunded_at |
                            transaction.cancelled_at!

                        </CardDescription>;
                      </div>;
                      {getStatusBadge(transaction && transaction.status, transaction && transaction.in_escrow)}
                    </div>;
                  </CardHeader>;
                  <CardContent className="pb-3">;
                    <div className="flex justify-between items-center mb-1">;
                      <span className="text-zion-slate-light">Amount:</span>;
                      <span className="text-white font-medium text-lg">;
                        {formatCurrency(transaction && transaction.amount, transaction && transaction.currency)}
                      </span>;
                    </div>;
                    <div className="flex justify-between items-center text-sm">;
                      <span className="text-zion-slate-light">Date:</span>;
                      <span className="text-zion-slate-light">;
                        {new Date(transaction && transaction.created_at).toLocaleDateString()} ;
                        ({formatDistanceToNow(new Date(transaction && transaction.created_at), { addSuffix: true })});
                      </span>;
                    </div>;
                    {(transaction && transaction.completed_at || transaction && transaction.refunded_at || transaction && transaction.cancelled_at) && (;
                      <div className="flex justify-between items-center text-sm mt-1">;
                        <span className="text-zion-slate-light">;
                          {transaction && transaction.completed_at ? 'Completed:' : ;
                           transaction && transaction.refunded_at ? 'Refunded:' : 'Cancelled:'}
                        </span>;
                        <span className="text-zion-slate-light">;
                          {new Date(;
                            transaction && transaction.completed_at || ;
                            transaction && transaction.refunded_at || ;
                            transaction && transaction.cancelled_at!;
    <div className=&quot;bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden&quot;>
      <div className=&quot;p-6&quot;>
        <div className=&quot;flex items-center justify-between mb-6&quot;>
          <h2 className=&quot;text-2xl font-bold text-white&quot;>Transaction History</h2>          
          <div className=&quot;flex space-x-2&quot;>
            <Button 
              size=&quot;sm&quot; 
              variant={filter === 'all' ? 'default' : 'outline'} 
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}            >
              All
            </Button>
            <Button 
              size=&quot;sm&quot; 
              variant={filter === 'pending' ? 'default' : 'outline'} 
              onClick={() => setFilter('pending')}
              className={filter === 'pending' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}            >
              Pending
            </Button>
            <Button 
              size=&quot;sm&quot; 
              variant={filter === 'completed' ? 'default' : 'outline'} 
              onClick={() => setFilter('completed')}
              className={filter === 'completed' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}            >
              Completed
            </Button>
            <Button 
              size=&quot;sm&quot; 
              variant={filter === 'escrow' ? 'default' : 'outline'} 
              onClick={() => setFilter('escrow')}
              className={filter === 'escrow' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}            >
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
                  <Skeleton className=&quot;h-4 w-1/4 bg-zion-blue-light mt-2&quot; />                </CardHeader>
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
              const isClient = user?.id === transaction.user_id,
              const isPending = transaction.status === 'pending',
              const isInEscrow = transaction.in_escrow,
              const canRelease = !isClient && isPending && isInEscrow,
              const canCancel = isClient && isPending,
              const canRefund = isClient && transaction.status === 'completed',              
              const _counterpartyName = isClient 
                ? transaction.provider?.display_name || 'Service Provider' 
                : 'Client',

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
                            <span>Payment to <span className=&quot;text-zion-purple&quot;>{counterpartyName}</span></span>                          ) : (
                            <span>Payment from <span className=&quot;text-zion-cyan&quot;>Client</span></span>
                          )}
                        </CardDescription>
                      </div>
                      
                      {_getStatusBadge(transaction.status, _transaction.in_escrow)}
                    </div>
                  </CardHeader>
                  <CardContent className=&quot;pb-3&quot;>
                    <div className=&quot;flex justify-between items-center mb-1&quot;>
                      <span className=&quot;text-zion-slate-light&quot;>Amount:</span>
                      <span className=&quot;text-white font-medium text-lg&quot;>
                        {formatCurrency(transaction.amount, transaction.currency)}
                      </span>
                    </div>
                    
                    <div className=&quot;flex justify-between items-center text-sm&quot;>
                      <span className=&quot;text-zion-slate-light&quot;>Date:</span>
                      <span className=&quot;text-zion-slate-light&quot;>
                        {new Date(transaction.created_at).toLocaleDateString()} 
                        ({formatDistanceToNow(new Date(transaction.created_at) { addSuffix: true })})
                      </span>
                    </div>
                    
                    {(transaction.completed_at || transaction.refunded_at || transaction.cancelled_at) && (
                      <div className=&quot;flex justify-between items-center text-sm mt-1&quot;>
                        <span className=&quot;text-zion-slate-light&quot;>
                          {transaction.completed_at ? 'Completed:' : 
                           transaction.refunded_at ? 'Refunded:' : 'Cancelled:'}
                        </span>
                        <span className=&quot;text-zion-slate-light&quot;>
                          {new Date(                            transaction.completed_at || 
                            transaction.refunded_at || 
                            transaction.cancelled_at!


                          ).toLocaleDateString()}
                        </span>;
                      </div>;
                    )}

                  </CardContent>;
                  <CardFooter className="flex justify-end gap-2 bg-zion-blue/20 pt-3">;
                    {canRelease && (;
                      <Button ;
                        onClick={() => handleManageTransaction(transaction.id, 'release')}

                        size="sm";
                        className="bg-green-600 hover:bg-green-700 text-white";
                      >;
                        <CheckCircle2 className="mr-1 h-4 w-4" /> Release Funds;

                      </Button>;                    )}
                    ;
                    {canRefund && (;
                      <Button ;
                        onClick={() => handleManageTransaction(transaction.id, 'refund')}

                        size="sm";
                        variant="outline";
                        className="text-zion-slate-light border-zion-blue-light";
                      >;
                        <RefreshCcw className="mr-1 h-4 w-4" /> Request Refund;

                      </Button>;                    )}
                    ;
                    {canCancel && (;
                      <Button ;
                        onClick={() => handleManageTransaction(transaction.id, 'cancel')}

                        size="sm";
                        variant="outline";
                        className="text-red-400 border-red-400/30 hover:bg-red-400/10";
                      >;
                        <XCircle className="mr-1 h-4 w-4" /> Cancel;
                      </Button>;

                    )}
                  </CardFooter>;
                </Card>;
          </div>;
        ) : (;
              ),;
            })}
          </div>;
        ) :(;

          <div className="text-center py-12 border border-dashed border-zion-blue-light rounded-lg">;
            <div className="mx-auto w-16 h-16 bg-zion-blue-light/30 rounded-full flex items-center justify-center mb-4">;
              <ArrowRight className="h-8 w-8 text-zion-slate-light" />;
              <ArrowLeft className="h-8 w-8 text-zion-slate-light -ml-4" />;
            </div>;
            <h3 className="text-xl font-medium text-white mb-2">No transactions found</h3>;
            <p className="text-zion-slate-light max-w-md mx-auto">;
              {filter !== 'all' ;
                ? `You don't have any ${filter} transactions. Try changing the filter or make a new transaction.`;


                : "You haven't made any transactions yet. Once you make a payment or receive one, it will appear here."}
            </p>;
          </div>;
        )}

                :"You haven't made any transactions yet. Once you make a payment or receive one, it will appear here."}
            </p>;
          </div>;
        )}
      </div>;
    </div>;

