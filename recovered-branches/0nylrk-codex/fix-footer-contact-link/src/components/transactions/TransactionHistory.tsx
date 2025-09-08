import React, { useState } from "react",
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Skeleton } from "@/components/ui/skeleton",
<<<<<<< HEAD



=======


  id: string
  user_id: string
  provider_id: string
  service_id: string
  amount: number
  currency: string


  status: 'pending' | 'completed' | 'refunded' | 'cancelled'
  in_escrow: boolean;
  created_at: string;
  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
  provider?: {}
    display_name?: string;
  }
  service?: {}
    title?: string;
  }
}
export function TransactionHistory() {};
  const { user } = useAuth();
  const { toast } = useToast();
'
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all');

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


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
  provider?: {;
=======
  completed_at?: string,;
  refunded_at?: string,;
  cancelled_at?: string,;
  provider?: {;
    display_name?: string;
  },;
  service?: {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    title?: string;
  }
}
<<<<<<< HEAD



=======
;
export function TransactionHistory() {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all'),;
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
        query = query.eq('statuscompleted');
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
  const { user } = useAuth();
  const { toast } = useToast();'
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all');'
import React, { useState } from './react';'
import { use_query } from '@tanstack / react - query';'
import { supabase } from '@/integrations / supabase / client';'
import { use_auth } from '@/hooks / use_auth';'
import { use_toast } from '@/hooks / use - toast';'
import { Button } from '@/components / ui / button';'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';'
import { Badge } from '@/components / ui / badge';'
import { Skeleton } from '@/components / ui / skeleton';'
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle } from './lucide-react';'
import { formatDistanceToNow } from './date - fns';'

>>>>>>> origin/cursor/delete-old-data-records-6bba
interface Transaction {
  }
  "id": string,
  "user_id": string,
  "provider_id": string,
  "service_id": string,
  "amount": number,
  "currency": string,
  "status": 'pending' | 'completed' | 'refunded' | 'cancelled','
  "in_escrow": boolean,
  "created_at": string,
import { useQuery } from "@tanstack/react-query";"
<<<<<<< HEAD

=======
import { formatDistanceToNow } from './date - fns';

interface Transaction {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string,
  user_id: string,
  provider_id: string,
  service_id: string,
  amount: number,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  currency: string,'
  status: 'pending' | 'completed' | 'refunded' | 'cancelled',
  in_escrow: boolean,
  created_at: string,
<<<<<<< HEAD
=======

"
import React, { useState } from "react",;"
import { useQuery } from "@tanstack/react-query",;"
import { supabase } from "@/integrations/supabase/client",;"
import { useAuth } from "@/hooks/useAuth",;"
import { useToast } from "@/hooks/use-toast",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { Skeleton } from "@/components/ui/skeleton",;"
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle } from "lucide-react",;"
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { formatDistanceToNow } from "date-fns",;
;
interface Transaction {;
  id:string,;
  user_id:string,;
  provider_id:string,;
  service_id:string,;
  amount:number,;

<<<<<<< HEAD
  currency:string,;

=======
  currency:string,;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
  status:'pending' | 'completed' | 'refunded' | 'cancelled',;
  in_escrow:boolean,;
  created_at:string,;
  completed_at?:string,;
  refunded_at?:string,;
  cancelled_at?:string,;
  provider?:{;
    display_name?:string;
  },;
  service?:{;
    title?:string,;
  },;
}
;

<<<<<<< HEAD
export function TransactionHistory() {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all'),;
  ;
  const { data:transactions, isLoading, error, refetch } = useQuery({;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    queryKey:['transactions', user?.id, filter],;
    queryFn:async () => {;
      if (!user) return [],;
      ;
      // Build the query based on filters;

<<<<<<< HEAD
      let query = supabase;

=======
      let query = supabase;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .from('transactions');
        .select(`;
          *,;
          provider:profiles!provider_id(display_name),;

<<<<<<< HEAD
          service:services(title);
        `);
        .or(`user_id.eq.${user.id},provider_id.eq.${user.id}`),;
      ;
      if (filter === 'pending') {;
        query = query.eq('statuspending'),;
      } else if (filter === 'completed') {;
        query = query.eq('statuscompleted'),;
      } else if (filter === 'escrow') {;
        query = query.eq('in_escrow', true),;
      }
      ;

=======
          service:services(title);`
        `);`
        .or(`user_id.eq.${user.id},provider_id.eq.${user.id}`),;
      ;'
      if (filter === 'pending') {;'
        query = query.eq('statuspending'),;'
      } else if (filter === 'completed') {;'
        query = query.eq('statuscompleted'),;'
      } else if (filter === 'escrow') {;'
        query = query.eq('in_escrow', true),;

      }
      ;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
      query = query.order('created_at', { ascending:false }),;
      ;
      const { data, error } = await query,;
      ;
      if (error) throw error,;
      return data as Transaction[],;
    },;
    enabled:!!user}),;

<<<<<<< HEAD
;
  const handleManageTransaction = async (transactionId:string, action:'release' | 'refund' | 'cancel') => {;
    try {;

=======
;'
  const handleManageTransaction = async (transactionId:string, action:'release' | 'refund' | 'cancel') => {;
    try {;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
      const { data, error } = await supabase.functions.invoke('manage-transaction', {;
        body:{ transactionId, action }
      }),;
      ;
      if (error) throw error,;
      ;

<<<<<<< HEAD
      toast({;
        title:"Success",;
        description:data.message || "Transaction updated successfully"}),;
      ;
      refetch(),;
    } catch (error) {;
      console.error("Error managing transaction:", error),;
      toast({;
        title:"Error",;
        description:error.message || "Failed to update transaction",;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        variant:"destructive"}),;
    }
  },;
  ;
  const getStatusBadge = (status:string, inEscrow:boolean) => {;

<<<<<<< HEAD
    switch(status) {;
      case 'pending':;
        return inEscrow ? (;
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">;
            <Clock className="w-3 h-3 mr-1" /> In Escrow;
          </Badge>;
        ) :(;
          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500">;
            <Clock className="w-3 h-3 mr-1" /> Pending;
          </Badge>;
        ),;
      case 'completed':;
        return (;
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">;
            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed;
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
=======
    switch(status) {;'
      case 'pending':;
        return inEscrow ? (;"
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">;"
            <Clock className="w-3 h-3 mr-1" /> In Escrow;
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <XCircle className="w-3 h-3 mr-1" /> Cancelled;
          </Badge>;
        ),;
      default:;

<<<<<<< HEAD
        return (;
          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">;

=======
        return (;"
          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <AlertCircle className="w-3 h-3 mr-1" /> Unknown;
          </Badge>;
        );
    }
  },;
  ;

<<<<<<< HEAD
  const formatCurrency = (amount:number, currency:string) => {;
    return new Intl.NumberFormat('en-US', {;

=======
  const formatCurrency = (amount:number, currency:string) => {;'
    return new Intl.NumberFormat('en-US', {;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
      style:'currency',;
      currency:currency.toUpperCase();
    }).format(amount),;
  },;
;
  if (error) {;

<<<<<<< HEAD
    return (;
      <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">;
        <div className="text-center text-zion-slate-light">;
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;
          <h3 className="font-bold text-xl text-white mb-2">Failed to load transactions</h3>;
          <p className="mb-4">{error.message}</p>;
          <Button onClick={() => refetch()} variant="outline">;
=======
    return (;"
      <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">;"
        <div className="text-center text-zion-slate-light">;"
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;"
          <h3 className="font-bold text-xl text-white mb-2">Failed to load transactions</h3>;"
          <p className="mb-4">{error.message}</p>;"
          <Button onClick={() => refetch()} variant="outline">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <RefreshCcw className="mr-2 h-4 w-4" />;
            Try Again;
          </Button>;
        </div>;
      </div>;
    ),;
  }
;

<<<<<<< HEAD
  return (;
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden">;
      <div className="p-6">;
        <div className="flex items-center justify-between mb-6">;
          <h2 className="text-2xl font-bold text-white">Transaction History</h2>;
          ;
          <div className="flex space-x-2">;
            <Button ;
              size="sm" ;
              variant={filter === 'all' ? 'default' :'outline'} ;
              onClick={() => setFilter('all')}
=======
  return (;"
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden">;"
      <div className="p-6">;"
        <div className="flex items-center justify-between mb-6">;"
          <h2 className="text-2xl font-bold text-white">Transaction History</h2>;
          ;"
          <div className="flex space-x-2">;
            <Button ;"
              size="sm" ;'
              variant={filter === 'all' ? 'default' :'outline'} ;'
              onClick={() => setFilter('all')}'
>>>>>>> origin/cursor/delete-old-data-records-6bba

              className={filter === 'all' ? 'bg-zion-purple text-white' :'text-zion-slate-light'}
            >;
              All;
            </Button>;

<<<<<<< HEAD
            <Button ;
              size="sm" ;
              variant={filter === 'pending' ? 'default' :'outline'} ;
              onClick={() => setFilter('pending')}
=======
            <Button ;"
              size="sm" ;'
              variant={filter === 'pending' ? 'default' :'outline'} ;'
              onClick={() => setFilter('pending')}'
>>>>>>> origin/cursor/delete-old-data-records-6bba

              className={filter === 'pending' ? 'bg-zion-purple text-white' :'text-zion-slate-light'}
            >;
              Pending;
            </Button>;

<<<<<<< HEAD
            <Button ;
              size="sm" ;
              variant={filter === 'completed' ? 'default' :'outline'} ;
              onClick={() => setFilter('completed')}
=======
            <Button ;"
              size="sm" ;'
              variant={filter === 'completed' ? 'default' :'outline'} ;'
              onClick={() => setFilter('completed')}'
>>>>>>> origin/cursor/delete-old-data-records-6bba

              className={filter === 'completed' ? 'bg-zion-purple text-white' :'text-zion-slate-light'}
            >;
              Completed;
            </Button>;

<<<<<<< HEAD
            <Button ;
              size="sm" ;
              variant={filter === 'escrow' ? 'default' :'outline'} ;
              onClick={() => setFilter('escrow')}
=======
            <Button ;"
              size="sm" ;'
              variant={filter === 'escrow' ? 'default' :'outline'} ;'
              onClick={() => setFilter('escrow')}'
>>>>>>> origin/cursor/delete-old-data-records-6bba

              className={filter === 'escrow' ? 'bg-zion-purple text-white' :'text-zion-slate-light'}
            >;
              Escrow;
            </Button>;
          </div>;
        </div>;
        ;
        {isLoading ? (;

<<<<<<< HEAD
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

=======
          Array(3).fill(0).map((_, i) => (;"
            <div key={i} className="mb-4">;"
              <Card className="bg-zion-blue-dark border-zion-blue-light">;"
                <CardHeader className="pb-2">;"
                  <Skeleton className="h-6 w-3/4 bg-zion-blue-light" />;"
                  <Skeleton className="h-4 w-1/4 bg-zion-blue-light mt-2" />;
                </CardHeader>;
                <CardContent>;"
                  <div className="flex justify-between mb-2">;"
                    <Skeleton className="h-5 w-1/3 bg-zion-blue-light" />;"
                    <Skeleton className="h-5 w-1/4 bg-zion-blue-light" />;
                  </div>;"
                  <Skeleton className="h-4 w-2/3 bg-zion-blue-light" />;

                </CardContent>;
                <CardFooter>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <Skeleton className="h-9 w-28 bg-zion-blue-light rounded-md" />;
                </CardFooter>;
              </Card>;
            </div>;
          ));

<<<<<<< HEAD
        ) :transactions && transactions.length > 0 ? (;
          <div className="space-y-4">;
            {transactions.map((transaction) => {;
              const isClient = user?.id === transaction.user_id,;
              const isPending = transaction.status === 'pending',;
              const isInEscrow = transaction.in_escrow,;
              const canRelease = !isClient && isPending && isInEscrow,;
              const canCancel = isClient && isPending,;
              const canRefund = isClient && transaction.status === 'completed',;
              ;
              const counterpartyName = isClient ;
                ? transaction.provider?.display_name || 'Service Provider' ;
                :'Client',;
;
              return (;
                <Card key={transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;
                  <CardHeader className="pb-3">;
                    <div className="flex justify-between items-start">;
                      <div>;
                        <CardTitle className="text-white text-lg">;
                          {transaction.service?.title || 'Service Payment'}
                        </CardTitle>;
                        <CardDescription className="text-zion-slate-light">;
                          {isClient ? (;
                            <span>Payment to <span className="text-zion-purple">{counterpartyName}</span></span>;
                          ) :(;
=======
        ) :transactions && transactions.length > 0 ? (;"
          <div className="space-y-4">;
            {transactions.map((transaction) => {;
              const isClient = user?.id === transaction.user_id,;'
              const isPending = transaction.status === 'pending',;
              const isInEscrow = transaction.in_escrow,;
              const canRelease = !isClient && isPending && isInEscrow,;
              const canCancel = isClient && isPending,;'
              const canRefund = isClient && transaction.status === 'completed',;
              ;
              const counterpartyName = isClient ;'
                ? transaction.provider?.display_name || 'Service Provider' ;'
                :'Client',;
;
              return (;"
                <Card key={transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;"
                  <CardHeader className="pb-3">;"
                    <div className="flex justify-between items-start">;
                      <div>;"
                        <CardTitle className="text-white text-lg">;'
                          {transaction.service?.title || 'Service Payment'}
                        </CardTitle>;"
                        <CardDescription className="text-zion-slate-light">;
                          {isClient ? (;"
                            <span>Payment to <span className="text-zion-purple">{counterpartyName}</span></span>;
                          ) :(;"
>>>>>>> origin/cursor/delete-old-data-records-6bba

                            <span>Payment from <span className="text-zion-cyan">Client</span></span>;
                          )}
                        </CardDescription>;
                      </div>;
                      ;
                      {getStatusBadge(transaction.status, transaction.in_escrow)}
                    </div>;

<<<<<<< HEAD
                  </CardHeader>;
                  <CardContent className="pb-3">;
                    <div className="flex justify-between items-center mb-1">;
                      <span className="text-zion-slate-light">Amount:</span>;
=======
                  </CardHeader>;"
                  <CardContent className="pb-3">;"
                    <div className="flex justify-between items-center mb-1">;"
                      <span className="text-zion-slate-light">Amount:</span>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba

                      <span className="text-white font-medium text-lg">;
                        {formatCurrency(transaction.amount, transaction.currency)}
                      </span>;
                    </div>;

<<<<<<< HEAD
                    ;
                    <div className="flex justify-between items-center text-sm">;
                      <span className="text-zion-slate-light">Date:</span>;

=======
                    ;"
                    <div className="flex justify-between items-center text-sm">;"
                      <span className="text-zion-slate-light">Date:</span>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      <span className="text-zion-slate-light">;
                        {new Date(transaction.created_at).toLocaleDateString()} ;
                        ({formatDistanceToNow(new Date(transaction.created_at), { addSuffix:true })});
                      </span>;
                    </div>;
                    ;

<<<<<<< HEAD
                    {(transaction.completed_at || transaction.refunded_at || transaction.cancelled_at) && (;
                      <div className="flex justify-between items-center text-sm mt-1">;
                        <span className="text-zion-slate-light">;
                          {transaction.completed_at ? 'Completed:' :;
                           transaction.refunded_at ? 'Refunded:' :'Cancelled:'}
                        </span>;
=======
                    {(transaction.completed_at || transaction.refunded_at || transaction.cancelled_at) && (;"
                      <div className="flex justify-between items-center text-sm mt-1">;"
                        <span className="text-zion-slate-light">;'
                          {transaction.completed_at ? 'Completed:' :;'
                           transaction.refunded_at ? 'Refunded:' :'Cancelled:'}
                        </span>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba

                        <span className="text-zion-slate-light">;
                          {new Date(;
                            transaction.completed_at || ;
                            transaction.refunded_at || ;
                            transaction.cancelled_at!;}

<<<<<<< HEAD
const {}
  toast;
}= useToast ();'
const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'> ('all');
const {}
  data: transactions, isLoading, error, refetch;
}= useQuery ({'
  queryKey: ['transactions', user?.id, filter];
queryFn: async () => {}

=======
}export function TransactionHistory () {}
  const {};
  user;
}= useAuth ();
  }
  toast 
}= useToast ();
const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'> ('all');'
  }
  "data": transactions, isLoading, error, refetch 
}= useQuery ({
  }
  "queryKey": ['transactions', user?.id, filter];'
"queryFn": async () => {
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (!user) return [];
return data as Transaction[] 
};
enabled: !!user;
});
if (error) throw error;
refetch () 
}catch (error) {}
  const { data: transactions, isLoading, error, refetch } = useQuery({'
    queryKey: ['transactions', user?.id, filter],
    queryFn: async () => {}
      if (!user) return [],"
import React, {_useState} from "react";

interface Transaction {_id: string;


  user_id: string;
  provider_id: string;
  service_id: string;
  amount: number;

<<<<<<< HEAD
  currency: string;
  status: 'pending' | 'completed' | 'refunded' | 'cancelled';
  in_escrow: boolean;
  created_at: string;
  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
  provider?: {

      





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast({
        title: "Success"
        description: data.message |"Transaction updated successfully"})
      refetch()
    } catch (error) {
<<<<<<< HEAD

      console.error("Error managing transaction:", error);

=======
      console.error("Error managing transaction:", error);
      console.error("Error managing transaction:", error),
      console.error("Error managing transaction:", error),
>>>>>>> origin/cursor/delete-old-data-records-6bba
      toast({
        title: "Error"
        description: error.message |"Failed to update transaction"


<<<<<<< HEAD

  },



=======
        variant: "destructive"})

  },

  }
  },
  
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const getStatusBadge = (status: string, inEscrow: boolean) => {

    switch(status) {

      case 'pending':
        return inEscrow ? ("
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">"
            <Clock className="w-3 h-3 mr-1" /> In Escrow;
          </Badge>
        ) : ("
          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500">"
            <Clock className="w-3 h-3 mr-1" /> Pending;
          </Badge>


      case 'completed':
        return ("
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">"
            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed;
          </Badge>


      case 'refunded':
        return ("
          <Badge variant="outline" className="bg-purple-500/20 text-purple-500 border-purple-500">"
            <RefreshCcw className="w-3 h-3 mr-1" /> Refunded;
          </Badge>


      case 'cancelled':
        return ("
          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">"
            <XCircle className="w-3 h-3 mr-1" /> Cancelled;
          </Badge>
        )
      default:
        return ("
          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">"
            <AlertCircle className="w-3 h-3 mr-1" /> Unknown;
          </Badge>
        )
<<<<<<< HEAD

    }
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


  },

<<<<<<< HEAD


=======
  }
  },
  
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency'
      currency: currency.toUpperCase()
    }).format(amount)

  },

  if (error) {

<<<<<<< HEAD
=======
      });

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

              const isClient = user?.id === transaction.user_id,

              const isPending = transaction.status === 'pending',
              const isInEscrow = transaction.in_escrow,
              const canRelease = !isClient && isPending && isInEscrow,
              const canCancel = isClient && isPending,'
              const canRefund = isClient && transaction.status === 'completed',
              
              const counterpartyName = isClient '
                ? transaction.provider?.display_name || 'Service Provider' '
                : 'Client',

<<<<<<< HEAD


=======
              return ("
                <Card key={transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">"
                  <CardHeader className="pb-3">"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <div className="flex justify-between items-start">
                      <div>"
                        <CardTitle className="text-white text-lg">'
                          {transaction.service?.title |'Service Payment'}
                        </CardTitle>"
                        <CardDescription className="text-zion-slate-light">
                          {isClient ? ("
                            <span>Payment to <span className="text-zion-purple">{counterpartyName}</span></span>
                          ) : ("
                            <span>Payment from <span className="text-zion-cyan">Client</span></span>

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }),;
      if (error) throw error,;
      toast({;"
        title: "Success","
        description: data.message || "Transaction updated successfully"}),;
      refetch();
    } catch (error) {;"
      console.error("Error managing transaction:", error),;
      toast({;"
        title: "Error","
        description: error.message || "Failed to update transaction",;"

        variant: "destructive"});
    }
  },;
  const getStatusBadge = (status: string, inEscrow: boolean) => {;

            <XCircle className="w-3 h-3 mr-1" /> Cancelled;
          </Badge>;
        ),;
      default:;

            <AlertCircle className="w-3 h-3 mr-1" /> Unknown;
          </Badge>;
        );
    }
  },;

      style: 'currency',;
      currency: currency.toUpperCase();
    }).format(amount);
  },;
  if (error) {;

            <RefreshCcw className="mr-2 h-4 w-4" />;
            Try Again;
          </Button>;
        </div>;
      </div>;
    );
  }
;
  return (;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              className={filter === 'all' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              All;
            </Button>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              className={filter === 'pending' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              Pending;
            </Button>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              className={filter === 'completed' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              Completed;
            </Button>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              className={filter === 'escrow' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              Escrow;
            </Button>;
          </div>;
        </div>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {isLoading ? (;

                  <Skeleton className="h-9 w-28 bg-zion-blue-light rounded-md" />;
                </CardFooter>;
              </Card>;
            </div>;
          ));

<<<<<<< HEAD
        ) : transactions && transactions.length > 0 ? (;
          <div className="space-y-4">;

                            <span>Payment from <span className="text-zion-cyan">Client</span></span>;




=======
                            <span>Payment from <span className="text-zion-cyan">Client</span></span>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
                          )}

                        </CardDescription>
                      </div>
                      {getStatusBadge(transaction.status, transaction.in_escrow)}
                    </div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </CardHeader>"
                  <CardContent className="pb-3">"
                    <div className="flex justify-between items-center mb-1">"
                      <span className="text-zion-slate-light">Amount:</span>"
                      <span className="text-white font-medium text-lg">
                        {formatCurrency(transaction.amount, transaction.currency)}
                      </span>
                    </div>"
                    <div className="flex justify-between items-center text-sm">"
                      <span className="text-zion-slate-light">Date:</span>"
                      <span className="text-zion-slate-light">
                        {new Date(transaction.created_at).toLocaleDateString()}
                        ({formatDistanceToNow(new Date(transaction.created_at), { addSuffix: true })})
                      </span>

                      <div className="flex justify-between items-center text-sm mt-1">

                           transaction.refunded_at ? 'Refunded:' : 'Cancelled:'}
                        </span>"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        <span className="text-zion-slate-light">
                          {new Date(
                            transaction.completed_at |
                            transaction.refunded_at |
                            transaction.cancelled_at!

<<<<<<< HEAD


                          ).toLocaleDateString()}

                        </span>;
                      </div>;
                    )}
=======
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
                :"You haven't made any transactions yet. Once you make a payment or receive one, it will appear here."}
            </p>;
          </div>;
        )}
      </div>;
    </div>;

                : "You haven't made any transactions yet. Once you make a payment or receive one, it will appear here."}
            </p>;
          </div>;
        )}

>>>>>>> origin/cursor/delete-old-data-records-6bba

      </div>;
    </div>;
  );
}
<<<<<<< HEAD




=======

;



;

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
