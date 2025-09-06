
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

  id: string
  user_id: string
  provider_id: string
  service_id: string
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'refunded' | 'cancelled'
  in_escrow: boolean
  created_at: string

  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
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

  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all');

  const { data: transactions, isLoading, error, refetch } = useQuery({
    queryKey: ['transactions', user?.id, filter];
    queryFn: async () => {
      if (!user) return [];
      // Build the query based on filters

      let query = supabase
        .from('transactions')
        .select(`
          *;
          provider:profiles!provider_id(display_name)
          service:services(title)
        `)
        .or(`user_id.eq.${user.id},provider_id.eq.${user.id}`);
      if (filter === 'pending') {
        query = query.eq('statuspending')
      } else if (filter === 'completed') {
        query = query.eq('statuscompleted')
      } else if (filter === 'escrow') {
        query = query.eq('in_escrow', true)
      }
      query = query.order('created_at', { ascending: false })
      const { data, error } = await query;
      if (error) throw error;
      return data as Transaction[]
    }
    enabled: !!user})
  const handleManageTransaction = async (transactionId: string, action: 'release' | 'refund' | 'cancel') => {
    try {
      const { data, error } = await supabase.functions.invoke('manage-transaction', {
        body: { transactionId, action }
      });
      if (error) throw error;
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle } from "lucide-react",
import { formatDistanceToNow } from "date-fns",
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

export function TransactionHistory() {;
  const { user } = useAuth();
  const { toast } = useToast();
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all');
  
  const { data: transactions, isLoading, error, refetch } = useQuery({
    queryKey: ['transactions', user?.id, filter];
    queryFn: async () => {
      if (!user) return [];
      
      // Build the query based on filters
      let query = supabase
        .from('transactions')
        .select(`
          *;
          provider:profiles!provider_id(display_name),
          service:services(title)
        `)
        .or(`user_id.eq.${user.id},provider_id.eq.${user.id}`);
      
      if (filter === 'pending') {
        query = query.eq('statuspending')
      } else if (filter === 'completed') {
        query = query.eq('statuscompleted')
      } else if (filter === 'escrow') {
        query = query.eq('in_escrow', true)
      }
      
      query = query.order('created_at', { ascending: false }),
      
      const { data, error } = await query;
      
      if (error) throw error;
      return data as Transaction[]
    };
    enabled: !!user}),

  const handleManageTransaction = async (transactionId: string, action: 'release' | 'refund' | 'cancel') => {
    try {
      const { data, error } = await supabase.functions.invoke('manage-transaction', {
        body: { transactionId, action }
      });
      
      if (error) throw error;
import React, { useState } from "react",;
import { useQuery } from "@tanstack/react-query",;
import { supabase } from "@/integrations/supabase/client",;
import { useAuth } from "@/hooks/useAuth",;
import { useToast } from "@/hooks/use-toast",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Skeleton } from "@/components/ui/skeleton",;
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle } from "lucide-react",;
import { formatDistanceToNow } from "date-fns",;
interface Transaction {;
  id: string,;
  user_id: string,;
  provider_id: string,;
  service_id: string,;
  amount: number,;
  currency: string,;
  status: 'pending' | 'completed' | 'refunded' | 'cancelled',;
  in_escrow: boolean,;
  created_at: string,;
  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
      

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
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency'
      currency: currency.toUpperCase()
    }).format(amount)
    return (
      <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">;
        <div className="text-center text-zion-slate-light">;
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;
          <h3 className="font-bold text-xl text-white mb-2">Failed to load transactions</h3>;
          <p className="mb-4">{error && error.message}</p>;
          <Button onClick={() => refetch()} variant="outline">;
            <RefreshCcw className="mr-2 h-4 w-4" />;
            Try Again;
          </Button>;
        </div>;
      </div>;
    );
  }
  return (

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
                        </span>;
                      </div>;
                    )}
                : "You haven't made any transactions yet. Once you make a payment or receive one, it will appear here."}
            </p>;
          </div>;
        )}
}
;
