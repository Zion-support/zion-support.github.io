import React, { useState, useEffect } from "react",
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import Skeleton from "@/components/ui/skeleton",
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle, ShieldAlert } from 'lucide-react'
import { formatDistanceToNow } from "date-fns",
import { safeStorage } from "@/utils/safeStorage";
import { useCurrency  } from '@/hooks/useCurrency';
import {logErrorToProduction} from '@/utils/productionLogger';
interface Transaction {
<<<<<<< HEAD
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
=======
  id: string
  user_id: string
  provider_id: string
  service_id: string
  amount: number
  currency: string
  status: 'pending' | 'in_escrow' | 'released' | 'disputed' | 'refunded' | 'cancelled'
  in_escrow: boolean
  created_at: string
  completed_at?: string
  refunded_at?: string
  cancelled_at?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  provider?: {
    display_name?: string
  }
  service?: {
    title?: string
  }
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
<<<<<<< HEAD
      if (!user) return [];
      // Build the query based on filters
      let query = null;
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
                        {formatCurrency(transaction.amount)}
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
                      <div className="flex justify-between items-center text-sm mt-1">
                        <span className="text-zion-slate-light">
                          {transaction.completed_at ? 'Completed:' : 
                           transaction.refunded_at ? 'Refunded:' : 'Cancelled:'}
                        </span>
                        <span className="text-zion-slate-light">
                          {new Date(
                            transaction.completed_at || 
                            transaction.refunded_at || 
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
                        className="bg-green-600 hover:bg-green-700 text-white"><CheckCircle2 className="mr-1 h-4 w-4" /> Release Funds
                      </Button>
                    )}
                    
                    {canRefund && (
                      <Button 
                        onClick={() => handleManageTransaction(transaction.id, 'refund')}
                        size="sm"
                        variant="outline"
                        className="text-zion-slate-light border-zion-blue-light"><RefreshCcw className="mr-1 h-4 w-4" /> Request Refund
                      </Button>
                    )}
                    
                    {canCancel && (
                      <Button 
                        onClick={() => handleManageTransaction(transaction.id, 'cancel')}
                        size="sm"
                        variant="outline"
                        className="text-red-400 border-red-400/30 hover:bg-red-400/10"><XCircle className="mr-1 h-4 w-4" /> Cancel
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
=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  )
}