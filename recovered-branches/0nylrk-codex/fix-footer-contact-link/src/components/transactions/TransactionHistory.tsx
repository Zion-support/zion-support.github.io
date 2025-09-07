




import React, { useState } from "react";""
import {useQuery} from "@tanstack/react-query";""
import {supabase} from "@/integrations/supabase/client";""
import {useAuth} from "@/hooks/useAuth";""
import {useToast} from "@/hooks/use-toast";""
import {Button} from "@/components/ui/button";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Badge} from "@/components/ui/badge";""
import {Skeleton} from "@/components/ui/skeleton";""
import {ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle} from "lucide-react";""
import {formatDistanceToNow} from "date-fns";""
import React, { useState } from "react",""
import { useQuery } from "@tanstack/react-query",""
import { supabase } from "@/integrations/supabase/client",""
import { useAuth } from "@/hooks/useAuth",""
import { useToast } from "@/hooks/use-toast",""
import { Button } from "@/components/ui/button",""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Badge } from "@/components/ui/badge",""
import { Skeleton } from "@/components/ui/skeleton",""
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle } from "lucide-react";""
import { formatDistanceToNow } from "date-fns";"
interface Transaction {
  // TODO: Implement
}
  id: string;,
  user_id: string;
  provider_id: string;,
  service_id: string;
  amount: number;,
  currency: string;"
  status: 'pending' | 'completed' | 'refunded' | 'cancelled,
  in_escrow: boolean;
  created_at: string;
  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
  provider?: {
    display_name?: string;
  service?: {
    title?: string;
export function TransactionHistory() {
  const { user } = useAuth();
  const { toast } = useToast();

  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all');
  const { data: transactions, isLoading, error, refetch } = useQuery({
    queryKey: ['transactions', user?.id, filter];')
    queryFn: async () => {
      if (!user) return [];
      // Build the query based on filters;
      let query = supabase;
        .from('transactions')
        .select(`
          *;)
          provider: profiles!provider_id(display_name),
  service:services(title)`;
        `)`;
        .or(`user_id.eq.${user.id},provider_id.eq.${user.id}`);
      if (filter === 'pending') {
        query = query.eq('statuspending')
      } else if (filter === 'completed') {
        query = query.eq('statuscompleted')
      } else if (filter === 'escrow') {
        query = query.eq('in_escrow', true)
      query = query.order('created_at', { ascending: false })
      const { data, error } = await query;
      if (error) throw error;
      return data as Transaction[]
    enabled: !!user})
  const handleManageTransaction = async (transactionId: string, action: 'release' | 'refund' | 'cancel') => {
    try {
  // TODO: Implement
      const { data, error } = await supabase.functions.invoke('manage-transaction', {
        body: { transactionId, action })
      });
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle } from "lucide-react",""
import { formatDistanceToNow } from "date-fns","
  // TODO: Implement
  id: string,
  user_id: string,
  provider_id: string,
  service_id: string,
  amount: number,
  currency: string,"
  status: 'pending' | 'completed' | 'refunded' | 'cancelled',
  in_escrow: boolean,
  created_at: string,
  completed_at?: string,
  refunded_at?: string,
  cancelled_at?: string,
  },

export function TransactionHistory() {;
      
      // Build the query based on filters;
        .from('transactions')`;
          provider:profiles!provider_id(display_name),
      
      
      query = query.order('created_at', { ascending: false }),
      
    };
    enabled: !!user}),

  // TODO: Implement
      
import React, { useState } from "react",;""
import { useQuery } from "@tanstack/react-query",;""
import { supabase } from "@/integrations/supabase/client",;""
import { useAuth } from "@/hooks/useAuth",;""
import { useToast } from "@/hooks/use-toast",;""
import { Button } from "@/components/ui/button",;""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;""
import { Badge } from "@/components/ui/badge",;""
import { Skeleton } from "@/components/ui/skeleton",;""
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle } from "lucide-react",;""
import { formatDistanceToNow } from "date-fns",;"
interface Transaction {;
  id: string,;
  user_id: string,;
  provider_id: string,;
  service_id: string,;
  amount: number,;
  currency: string,;"
  status: 'pending' | 'completed' | 'refunded' | 'cancelled',;
  in_escrow: boolean,;
  created_at: string,;
  provider?: {;
  service?: {;


import React, { useState } from './react';
import { use_query } from '@tanstack / react - query';
import { supabase } from '@/integrations / supabase / client';
import { use_auth } from '@/hooks / use_auth';
import { use_toast } from '@/hooks / use - toast';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Skeleton } from '@/components / ui / skeleton';
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle } from './lucide-react';
import { formatDistanceToNow } from './date - fns';
  // TODO: Implement
  currency: string,

;
  id:string,;
  user_id:string,;
  provider_id:string,;
  service_id:string,;
  amount:number,;
  currency:string,;"
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
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all'),;
  const { data:transactions, isLoading, error, refetch } = useQuery({;
    queryKey:['transactions', user?.id, filter],;')
    queryFn:async () => {;
      if (!user) return [],;
      // Build the query based on filters;
        .from('transactions');`;
        .select(`;
          *,;)
          provider:profiles!provider_id(display_name),;
          service:services(title);`;
        `);`;
        .or(`user_id.eq.${user.id},provider_id.eq.${user.id}`),;
      if (filter === 'pending') {;
        query = query.eq('statuspending'),;
      } else if (filter === 'completed') {;
        query = query.eq('statuscompleted'),;
      } else if (filter === 'escrow') {;
        query = query.eq('in_escrow', true),;
      query = query.order('created_at', { ascending:false }),;
      const { data, error } = await query,;
      if (error) throw error,;
      return data as Transaction[],;
    enabled:!!user}),;
  const handleManageTransaction = async (transactionId:string, action:'release' | 'refund' | 'cancel') => {;
    try {;
      const { data, error } = await supabase.functions.invoke('manage-transaction', {;
        body:{ transactionId, action })
      }),;
      toast({;
        title:"Success",;")"
        description:data.message || "Transaction updated successfully"}),;"
      refetch(),;
    } catch (error) {;"
      console.error("Error managing transaction:", error),;"
      toast({;"
        title:"Error",;""
        description:error.message || "Failed to update transaction",;")"
        variant:"destructive"}),;"
  const getStatusBadge = (status:string, inEscrow:boolean) => {;
    switch(status) {;"
      case 'pending':;
        return inEscrow ? (;
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">;"
"
            <Clock className="w-3 h-3 mr-1" /> In Escrow;"

          ;"
          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500">;"
            <Clock className="w-3 h-3 mr-1" /> Pending;"

          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">;"
            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed;"
</CheckCircle2>
          <Badge variant="outline" className="bg-purple-500/20 text-purple-500 border-purple-500">;"
            <RefreshCcw className="w-3 h-3 mr-1" /> Refunded;"

          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">;"
            <XCircle className="w-3 h-3 mr-1" /> Cancelled;"

          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">;"
            <AlertCircle className="w-3 h-3 mr-1" /> Unknown;"

      <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">;"
</div>"
        <div className="text-center text-zion-slate-light">;"
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;"
          <h3 className="font-bold text-xl text-white mb-2">Failed to load transactions</h3>;""
          <p className="mb-4">{error.message}</p>;")"
          <Button onClick={() => refetch()} variant="outline">;"
            <RefreshCcw className="mr-2 h-4 w-4" />;"

        </div>;
      </div>;"
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden">;"
      <div className="p-6">;"
        <div className="flex items-center justify-between mb-6">;"
          <h2 className="text-2xl font-bold text-white">Transaction History</h2>;""
          <div className="flex space-x-2">;"
</div>
            <Button ;"
              size="sm" ;""
              variant={filter === 'all' ? 'default' :'outline'} ;
              onClick={() => setFilter('all')}

            <Button ;
              variant={filter === 'pending' ? 'default' :'outline'} ;
              onClick={() => setFilter('pending')}

              variant={filter === 'completed' ? 'default' :'outline'} ;
              onClick={() => setFilter('completed')}

              variant={filter === 'escrow' ? 'default' :'outline'} ;
              onClick={() => setFilter('escrow')}

            <div key={i} className="mb-4">;"
              <Card className="bg-zion-blue-dark border-zion-blue-light">;"
                <CardHeader className="pb-2">;"
                  <Skeleton className="h-6 w-3/4 bg-zion-blue-light" />;"
                  <Skeleton className="h-4 w-1/4 bg-zion-blue-light mt-2" />;"

                <CardContent>;
                  <div className="flex justify-between mb-2">;"
                    <Skeleton className="h-5 w-1/3 bg-zion-blue-light" />;"
                    <Skeleton className="h-5 w-1/4 bg-zion-blue-light" />;"

                  <Skeleton className="h-4 w-2/3 bg-zion-blue-light" />;"

                <CardFooter>;
                  <Skeleton className="h-9 w-28 bg-zion-blue-light rounded-md" />;"

          <div className="space-y-4">;"
                <Card key={transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;"
                  <CardHeader className="pb-3">;"
                    <div className="flex justify-between items-start">;"
                      <div>;
                        <CardTitle className="text-white text-lg">;"

                        <CardDescription className="text-zion-slate-light">;"
                            <span>Payment to <span className="text-zion-purple">{counterpartyName}</span></span>;""
                            <span>Payment from <span className="text-zion-cyan">Client</span></span>;"
                  <CardContent className="pb-3">;"
                    <div className="flex justify-between items-center mb-1">;"
                      <span className="text-zion-slate-light">Amount:</span>;""
                      <span className="text-white font-medium text-lg">;"
</span>
                      </span>;
                    <div className="flex justify-between items-center text-sm">;"
                      <span className="text-zion-slate-light">Date:</span>;""
                      <span className="text-zion-slate-light">;"
                      <div className="flex justify-between items-center text-sm mt-1">;"
                        </span>;"
</span>"
const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'> ('all');
const {
  // TODO: Implement
  data: transactions, isLoading, error, refetch;
}= useQuery ({
enabled: !!user;
refetch () 
}catch (error) {
  
    queryKey: ['transactions', user?.id, filter],')
      if (!user) return [],
import React, {_useState} from "react";"
interface Transaction {_id: string;,
  status: 'pending' | 'completed' | 'refunded' | 'cancelled';',
      

      
      toast({
        title: "Success"",)"
  description: data.message |"Transaction updated successfully"})"
      refetch()
    } catch (error) {"
      console.error("Error managing transaction:", error);""
      console.error("Error managing transaction:", error),"
      toast({"
        title: "Error"","
  description: error.message |"Failed to update transaction"")"
        variant: "destructive"})"


  


  const getStatusBadge = (status: string, inEscrow: boolean) => {
    switch(status) {"
      case 'pending':
        return inEscrow ? (
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">"

          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500">"

          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">"
          <Badge variant="outline" className="bg-purple-500/20 text-purple-500 border-purple-500">"

          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">"

          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">"

          <p className="mb-4">{error && error.message}</p>;")"

                <Card key={transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">"
                  <CardHeader className="pb-3">"
                    <div className="flex justify-between items-start">"
                      <div>
                        <CardTitle className="text-white text-lg">"

                        <CardDescription className="text-zion-slate-light">"
                            <span>Payment to <span className="text-zion-purple">{counterpartyName}</span></span>""
                            <span>Payment from <span className="text-zion-cyan">Client</span></span>""





          <p className="mb-4">{error.message}</p>;""

            <Button;"
              size="sm"""
              variant={filter === 'all' ? 'default' : 'outline'}

            <Button;
              variant={filter === 'pending' ? 'default' : 'outline'}

              variant={filter === 'completed' ? 'default' : 'outline'}

              variant={filter === 'escrow' ? 'default' : 'outline'}





                <Card key={transaction && transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;"

                        
                  <CardContent className="pb-3">"
                    <div className="flex justify-between items-center mb-1">"
                      <span className="text-zion-slate-light">Amount:</span>""
                      <span className="text-white font-medium text-lg">"
                    <div className="flex justify-between items-center text-sm">"
                      <span className="text-zion-slate-light">Date:</span>""
                      <span className="text-zion-slate-light">"
                      <div className="flex justify-between items-center text-sm mt-1">"
    <div className=&quot;bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden&quot;>
      <div className=&quot;p-6&quot;>
        <div className=&quot;flex items-center justify-between mb-6&quot;>
          <h2 className=&quot;text-2xl font-bold text-white&quot;>Transaction History</h2>          
          <div className=&quot;flex space-x-2&quot;>
              size=&quot;sm&quot; "

            
              size=&quot;sm&quot; 

            

            

            
            <div key={i} className=&quot;mb-4&quot;>
              <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>

                <CardHeader className=&quot;pb-2&quot;>

                  <Skeleton className=&quot;h-6 w-3/4 bg-zion-blue-light&quot; />

                  <Skeleton className=&quot;h-4 w-1/4 bg-zion-blue-light mt-2&quot; />                

                <CardContent>

                  <div className=&quot;flex justify-between mb-2&quot;>
                    <Skeleton className=&quot;h-5 w-1/3 bg-zion-blue-light&quot; />

                    <Skeleton className=&quot;h-5 w-1/4 bg-zion-blue-light&quot; />

                  <Skeleton className=&quot;h-4 w-2/3 bg-zion-blue-light&quot; />

                
                <CardFooter>

                  <Skeleton className=&quot;h-9 w-28 bg-zion-blue-light rounded-md&quot; />

                
              
          <div className=&quot;space-y-4&quot;>
                <Card key={transaction.id} className=&quot;bg-zion-blue-dark border-zion-blue-light overflow-hidden&quot;>

                  <CardHeader className=&quot;pb-3&quot;>

                    <div className=&quot;flex justify-between items-start&quot;>
                        <CardTitle className=&quot;text-white text-lg&quot;>

                        
                        <CardDescription className=&quot;text-zion-slate-light&quot;>

                            <span>Payment to <span className=&quot;text-zion-purple&quot;>{counterpartyName}</span></span>                          ) : (
                            <span>Payment from <span className=&quot;text-zion-cyan&quot;>Client</span></span>
                        
                  
                  <CardContent className=&quot;pb-3&quot;>

                    <div className=&quot;flex justify-between items-center mb-1&quot;>
                      <span className=&quot;text-zion-slate-light&quot;>Amount:</span>
                      <span className=&quot;text-white font-medium text-lg&quot;>
                    
                    <div className=&quot;flex justify-between items-center text-sm&quot;>
                      <span className=&quot;text-zion-slate-light&quot;>Date:</span>
                      <span className=&quot;text-zion-slate-light&quot;>
                      <div className=&quot;flex justify-between items-center text-sm mt-1&quot;>
                  <CardFooter className="flex justify-end gap-2 bg-zion-blue/20 pt-3">;"

                      <Button;)"
                        onClick={() => handleManageTransaction(transaction && transaction.id, 'release')}

                        <CheckCircle2 className="mr-1 h-4 w-4" /> Release Funds;"
                        onClick={() => handleManageTransaction(transaction && transaction.id, 'refund')}

                        <RefreshCcw className="mr-1 h-4 w-4" /> Request Refund;"

                        onClick={() => handleManageTransaction(transaction && transaction.id, 'cancel')}

                        <XCircle className="mr-1 h-4 w-4" /> Cancel;"

          <div className="text-center py-12 border border-dashed border-zion-blue-light rounded-lg">;"
            <div className="mx-auto w-16 h-16 bg-zion-blue-light/30 rounded-full flex items-center justify-center mb-4">;"
              <ArrowRight className="h-8 w-8 text-zion-slate-light" />;"
              <ArrowLeft className="h-8 w-8 text-zion-slate-light -ml-4" />;"

            <h3 className="text-xl font-medium text-white mb-2">No transactions found</h3>;""
            <p className="text-zion-slate-light max-w-md mx-auto">;"
</p>
            </p>;
          <Badge variant="outline" className="bg - yellow - 500 / 20 text - yellow - 500 border - yellow - 500">;"
            <Clock className="w - 3 h - 3 mr - 1" /> In Escrow;"

          ) : ("
          <Badge variant="outline" className="bg - blue - 500 / 20 text - blue - 500 border - blue - 500">;"
            <Clock className="w - 3 h - 3 mr - 1" /> Pending;"
)
          );"
          <Badge variant="outline" className="bg - green - 500 / 20 text - green - 500 border - green - 500">;"
            <CheckCircle2 className="w - 3 h - 3 mr - 1" /> Completed;"
          <Badge variant="outline" className="bg - purple - 500 / 20 text - purple - 500 border - purple - 500">;"
            <RefreshCcw className="w - 3 h - 3 mr - 1" /> Refunded;"

          <Badge variant="outline" className="bg - red - 500 / 20 text - red - 500 border - red - 500">;"
            <XCircle className="w - 3 h - 3 mr - 1" /> Cancelled;"

          ),"
          <Badge variant="outline" className="bg - gray - 500 / 20 text - gray - 500 border - gray - 500">;"
            <AlertCircle className="w - 3 h - 3 mr - 1" /> Unknown;"

      <div className="bg - zion - blue - dark p - 6 rounded - lg border border - zion - blue - light">;"
        <div className="text - center text - zion - slate - light">;"
          <AlertCircle className="mx - auto h - 12 w - 12 text - red - 500 mb - 4" />;"
          <h3 className="font - bold text - xl text - white mb - 2">Failed to load transactions</h3>;""
          <p className="mb - 4">{error.message}</p>;""
          <Button on_click={() => refetch ()} variant="outline">;"
            <RefreshCcw className="mr - 2 h - 4 w - 4" />;"

      </div>);"
    <div className="bg - zion - blue - dark rounded - lg border border - zion - blue - light overflow - hidden">;"
      <div className="p - 6">;"
        <div className="flex items - center justify - between mb - 6">;"
          <h2 className="text - 2xl font - bold text - white">Transaction History</h2>;""
          <div className="flex space - x-2">;"
              size="sm";""
              on_click={() => set_filter ('all')}

              on_click={() => set_filter ('pending')}

              on_click={() => set_filter ('completed')}

              on_click={() => set_filter ('escrow')}

            <div key={i} className="mb - 4">;"
              <Card className="bg - zion - blue - dark border - zion - blue - light">;"
                <CardHeader className="pb - 2">;"
                  <Skeleton className="h - 6 w - 3/4 bg - zion - blue - light" />;"
                  <Skeleton className="h - 4 w - 1/4 bg - zion - blue - light mt - 2" />;"

                  <div className="flex justify - between mb - 2">;"
                    <Skeleton className="h - 5 w - 1/3 bg - zion - blue - light" />;"
                    <Skeleton className="h - 5 w - 1/4 bg - zion - blue - light" />;"

                  <Skeleton className="h - 4 w - 2/3 bg - zion - blue - light" />;"

                  <Skeleton className="h - 9 w - 28 bg - zion - blue - light rounded - md" />;"

            </div>))) : transactions && transactions.length > 0 ? ("
          <div className="space - y-4">;"
                <Card key={transaction.id} className="bg - zion - blue - dark border - zion - blue - light overflow - hidden">;"
                  <CardHeader className="pb - 3">;"
                    <div className="flex justify - between items - start">;"
                        <CardTitle className="text - white text - lg">;"

                        <CardDescription className="text - zion - slate - light">;"
)"
                            <span > Payment to <span className="text - zion - purple">{counterparty_name}</span></span>) : (")"
                            <span > Payment from <span className="text - zion - cyan">Client</span></span>)}"
                  <CardContent className="pb - 3">;"
                    <div className="flex justify - between items - center mb - 1">;"
                      <span className="text - zion - slate - light">Amount:</span>;""
                      <span className="text - white font - medium text - lg">;"
                    <div className="flex justify - between items - center text - sm">;"
                      <span className="text - zion - slate - light">Date:</span>;""
                      <span className="text - zion - slate - light">;"
                      <div className="flex justify - between items - center text - sm mt - 1">;"
                      </div>)}
                  <CardFooter className="flex justify - end gap - 2 bg - zion - blue / 20 pt - 3">;"

                        on_click={() => handleManageTransaction (transaction.id, 'release')}

                        <CheckCircle2 className="mr - 1 h - 4 w - 4" /> Release Funds;"
                      )}
                        on_click={() => handleManageTransaction (transaction.id, 'refund')}

                        <RefreshCcw className="mr - 1 h - 4 w - 4" /> Request Refund;"

                        on_click={() => handleManageTransaction (transaction.id, 'cancel')}

                        <XCircle className="mr - 1 h - 4 w - 4" /> Cancel;"

                );
          </div>) : ("
          <div className="text - center py - 12 border border - dashed border - zion - blue - light rounded - lg">;"
            <div className="mx - auto w - 16 h - 16 bg - zion - blue - light / 30 rounded - full flex items - center justify - center mb - 4">;"
              <ArrowRight className="h - 8 w - 8 text - zion - slate - light" />;"
              <ArrowLeft className="h - 8 w - 8 text - zion - slate - light -ml - 4" />;"

            <h3 className="text - xl font - medium text - white mb - 2">No transactions found</h3>;""
            <p className="text - zion - slate - light max - w-md mx - auto">;"
            </p>;)
    </div>);
                  <CardFooter className="flex justify-end gap-2 bg-zion-blue/20 pt-3">"

                        onClick={() => handleManageTransaction(transaction.id, 'release')}

                      
                        onClick={() => handleManageTransaction(transaction.id, 'refund')}


                      
                        onClick={() => handleManageTransaction(transaction.id, 'cancel')}


                      
                  
                
          <div className="text-center py-12 border border-dashed border-zion-blue-light rounded-lg">"
            <div className="mx-auto w-16 h-16 bg-zion-blue-light/30 rounded-full flex items-center justify-center mb-4">"
              <ArrowRight className="h-8 w-8 text-zion-slate-light" />"
              <ArrowLeft className="h-8 w-8 text-zion-slate-light -ml-4" />"

            <h3 className="text-xl font-medium text-white mb-2">No transactions found</h3>""
            <p className="text-zion-slate-light max-w-md mx-auto">"
    </div>;"`;