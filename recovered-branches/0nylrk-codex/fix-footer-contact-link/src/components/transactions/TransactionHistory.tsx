import React, { useState } from "react",
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Skeleton } from "@/components/ui/skeleton",
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
interface Transaction {
  id: string,
  user_id: string,
  provider_id: string,
  service_id: string,
  amount: number,
  currency: string,
  status: 'pending' | 'completed' | 'refunded' | 'cancelled',
  in_escrow: boolean,
  created_at: string,
  completed_at?: string,
  refunded_at?: string,
  cancelled_at?: string,
  provider?: {
    display_name?: string
  },
  service?: {
    title?: string
  }
}
export function TransactionHistory() {
  const { user } = useAuth($2);
  const { toast } = useToast($2);
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all'),
  
  const { data: transactions, isLoading, error, refetch } = useQuery({
    queryKey: ['transactions', user?.id, filter],
    queryFn: async() => {
      if (!user) return [],
      
      // Build the query based on filters

      let query = supabase
        .from('transactions')
        .select($2);
          service: services(title)
        `)
        .or($2);
      if (filter === 'pending') {
        query = query.eq('statuspending')
      } else if (filter === 'completed') {
        query = query.eq('statuscompleted')
      } else if (filter === 'escrow') {
        query = query.eq('in_escrow', true)
      }
      
      query = query.order($2);
      const { data, error } = await query,
      
      if (error) throw error,
      return data as Transaction[]
    },
    enabled: !!user}),

  const handleManageTransaction = async (transactionId: string, action: 'release' | 'refund' | 'cancel') => {
    try {
      const { data, error } = await supabase.functions.invoke($2);
      if (error) throw error,
      
      toast($2);
      refetch()
    } catch (error) {
      console.error($2);
      toast({
        title: "Error",
        description: error.message || "Failed to update transaction",
        variant: "destructive"})
    }
  },
  
  const getStatusBadge = (status: string, inEscrow: boolean) => {
    switch(status) {
      case 'pending':
        return inEscrow ? (
          <Badge variant = $2;
      case 'completed':
        return($2);
      case 'refunded':
        return($2);
      case 'cancelled':
        return($2);
      default: return(
          <Badge variant = $2;
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency'
      currency: currency.toUpperCase()
    }).format(amount)
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
            <div key = $2;
              const isPending = $2;
              const isInEscrow = $2;
              const canRelease = $2;
              const canCancel = $2;
              const canRefund = $2;
              const counterpartyName = $2;
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
                        ({formatDistanceToNow(new Date(transaction.created_at), { addSuffix: true})})
                      </span>
                    </div>
                    {(transaction.completed_at |transaction.refunded_at |transaction.cancelled_at) && (
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
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 bg-zion-blue/20 pt-3">
                    {canRelease && (
                      <Button
                        onClick={() => handleManageTransaction(transaction.id, 'release')}
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <CheckCircle2 className="mr-1 h-4 w-4" /> Release Funds
                      </Button>
                    )}
                    {canRefund && (
                      <Button
                        onClick={() => handleManageTransaction(transaction.id, 'refund')}
                        size="sm"
                        variant="outline"
                        className="text-zion-slate-light border-zion-blue-light"
                      >
                        <RefreshCcw className="mr-1 h-4 w-4" /> Request Refund
                      </Button>
                    )}
                    {canCancel && (
                      <Button
                        onClick={() => handleManageTransaction(transaction.id, 'cancel')}
                        size="sm"
                        variant="outline"
                        className="text-red-400 border-red-400/30 hover:bg-red-400/10"
                      >
                        <XCircle className="mr-1 h-4 w-4" /> Cancel
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-zion-blue-light rounded-lg">
            <div className="mx-auto w-16 h-16 bg-zion-blue-light/30 rounded-full flex items-center justify-center mb-4">
              <ArrowRight className="h-8 w-8 text-zion-slate-light" />
              <ArrowLeft className="h-8 w-8 text-zion-slate-light -ml-4" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">No transactions found</h3>
            <p className="text-zion-slate-light max-w-md mx-auto">
              {filter !== 'all'
                ? `You don't have any ${filter} transactions. Try changing the filter or make a new transaction.`
                : "You haven't made any transactions yet. Once you make a payment or receive one, it will appear here."}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
