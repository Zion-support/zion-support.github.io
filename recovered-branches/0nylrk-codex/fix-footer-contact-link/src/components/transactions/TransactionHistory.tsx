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
<<<<<<< HEAD
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
interface Transaction {
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  id: string
  user_id: string
  provider_id: string
  service_id: string
  amount: number
  currency: string
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  status: 'pending' | 'completed' | 'refunded' | 'cancelled'
  in_escrow: boolean;
  created_at: string;
<<<<<<< HEAD
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
  provider?: {;

=======
  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
  provider?: {}
    display_name?: string;
  }
  service?: {}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
  }
}

<<<<<<< HEAD
  const { user } = useAuth();
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  completed_at?: string,;
  refunded_at?: string,;
  cancelled_at?: string,;
  provider?: {;
    display_name?: string;
  },;
=======
  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
  provider?: {;
<<<<<<< HEAD

=======
    display_name?: string;
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  service?: {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    title?: string;
  }
}
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
  const { user } = useAuth();
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
import { formatDistanceToNow } from './date - fns';'
=======
export function TransactionHistory() {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const { user } = useAuth();
  const { toast } = useToast();
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all');
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
import { formatDistanceToNow } from './date - fns';

interface Transaction {}
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  id: string,
  user_id: string,
  provider_id: string,
  service_id: string,
  amount: number,
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  currency: string,'
  status: 'pending' | 'completed' | 'refunded' | 'cancelled',
  in_escrow: boolean,
  created_at: string,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
"
import React, { useState } from "react",;"
import { useQuery } from "@tanstack/react-query",;"
>>>>>>> origin/chore/fix-lint-and-merge
import { supabase } from "@/integrations/supabase/client",;"
import { useAuth } from "@/hooks/useAuth",;"
import { useToast } from "@/hooks/use-toast",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { Skeleton } from "@/components/ui/skeleton",;"
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle } from "lucide-react",;"
<<<<<<< HEAD
=======
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { formatDistanceToNow } from "date-fns",;
;
interface Transaction {;
  id:string,;
  user_id:string,;
  provider_id:string,;
  service_id:string,;
  amount:number,;
<<<<<<< HEAD
  currency:string,;'
=======
<<<<<<< HEAD
  currency:string,;'
=======
  currency:string,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
export function TransactionHistory() { return null; }
  const { user } = useAuth(),;
  const { toast } = useToast(),;'
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all'),;
  ;
  const { data:transactions, isLoading, error, refetch } = useQuery({;'
=======
<<<<<<< HEAD
export function TransactionHistory() { return null; }
  const { user } = useAuth(),;
  const { toast } = useToast(),;'
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all'),;
  ;
  const { data:transactions, isLoading, error, refetch } = useQuery({;'
=======
export function TransactionHistory() {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all'),;
  ;
  const { data:transactions, isLoading, error, refetch } = useQuery({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    queryKey:['transactions', user?.id, filter],;
    queryFn:async () => {;
      if (!user) return [],;
      ;
      // Build the query based on filters;
<<<<<<< HEAD
      let query = supabase;'
=======
<<<<<<< HEAD
      let query = supabase;'
=======
      let query = supabase;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        .from('transactions');
        .select(`;
          *,;
          provider:profiles!provider_id(display_name),;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
      }
      ;'
=======
      }
      ;'
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      query = query.order('created_at', { ascending:false }),;
      ;
      const { data, error } = await query,;
      ;
      if (error) throw error,;
      return data as Transaction[],;
    },;
    enabled:!!user}),;
<<<<<<< HEAD
;'
  const handleManageTransaction = async (transactionId:string, action:'release' | 'refund' | 'cancel') => {;
    try {;'
=======
<<<<<<< HEAD
;'
  const handleManageTransaction = async (transactionId:string, action:'release' | 'refund' | 'cancel') => {;
    try {;'
=======
;
  const handleManageTransaction = async (transactionId:string, action:'release' | 'refund' | 'cancel') => {;
    try {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      const { data, error } = await supabase.functions.invoke('manage-transaction', {;
        body:{ transactionId, action }
      }),;
      ;
      if (error) throw error,;
      ;
<<<<<<< HEAD

      ;
      refetch(),;
    } catch (error) {;"
      console.error("Error managing transaction:", error),;

=======
<<<<<<< HEAD

      ;
      refetch(),;
    } catch (error) {;"
      console.error("Error managing transaction:", error),;

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        variant:"destructive"}),;
    }
  },;
  ;
  const getStatusBadge = (status:string, inEscrow:boolean) => {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    switch(status) {;'
      case 'pending':;
        return inEscrow ? (;"
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">;"
            <Clock className="w-3 h-3 mr-1" /> In Escrow;
<<<<<<< HEAD
          </Badge>;
        ) :(;"
          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500">;"
            <Clock className="w-3 h-3 mr-1" /> Pending;
          </Badge>;
        ),;'
      case 'completed':;
        return (;"
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">;"
            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed;
          </Badge>;
        ),;'
      case 'refunded':;
        return (;"
          <Badge variant="outline" className="bg-purple-500/20 text-purple-500 border-purple-500">;"
            <RefreshCcw className="w-3 h-3 mr-1" /> Refunded;
          </Badge>;
        ),;'
      case 'cancelled':;
        return (;"
          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">;"
=======
          </Badge>;
        ) :(;"
          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500">;"
            <Clock className="w-3 h-3 mr-1" /> Pending;
          </Badge>;
        ),;'
      case 'completed':;
        return (;"
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">;"
            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed;
          </Badge>;
        ),;'
      case 'refunded':;
        return (;"
          <Badge variant="outline" className="bg-purple-500/20 text-purple-500 border-purple-500">;"
            <RefreshCcw className="w-3 h-3 mr-1" /> Refunded;
          </Badge>;
        ),;'
      case 'cancelled':;
        return (;"
          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">;"
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <XCircle className="w-3 h-3 mr-1" /> Cancelled;
          </Badge>;
        ),;
      default:;
<<<<<<< HEAD
        return (;"
          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">;"
=======
<<<<<<< HEAD
        return (;"
          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">;"
=======
        return (;
          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <AlertCircle className="w-3 h-3 mr-1" /> Unknown;
          </Badge>;
        );
    }
  },;
  ;
<<<<<<< HEAD
  const formatCurrency = (amount:number, currency:string) => {;'
    return new Intl.NumberFormat('en-US', {;'
=======
<<<<<<< HEAD
  const formatCurrency = (amount:number, currency:string) => {;'
    return new Intl.NumberFormat('en-US', {;'
=======
  const formatCurrency = (amount:number, currency:string) => {;
    return new Intl.NumberFormat('en-US', {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      style:'currency',;
      currency:currency.toUpperCase();
    }).format(amount),;
  },;
;
  if (error) {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return (;"
      <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">;"
        <div className="text-center text-zion-slate-light">;"
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;"
          <h3 className="font-bold text-xl text-white mb-2">Failed to load transactions</h3>;"
          <p className="mb-4">{error.message}</p>;"
          <Button onClick={() => refetch()} variant="outline">;"
<<<<<<< HEAD
=======
=======
    return (;
      <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">;
        <div className="text-center text-zion-slate-light">;
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;
          <h3 className="font-bold text-xl text-white mb-2">Failed to load transactions</h3>;
          <p className="mb-4">{error.message}</p>;
          <Button onClick={() => refetch()} variant="outline">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <RefreshCcw className="mr-2 h-4 w-4" />;
            Try Again;
          </Button>;
        </div>;
      </div>;
    ),;
  }
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              className={filter === 'all' ? 'bg-zion-purple text-white' :'text-zion-slate-light'}
            >;
              All;
            </Button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Button ;"
              size="sm" ;'
              variant={filter === 'pending' ? 'default' :'outline'} ;'
              onClick={() => setFilter('pending')}'
<<<<<<< HEAD
=======
=======
            <Button ;
              size="sm" ;
              variant={filter === 'pending' ? 'default' :'outline'} ;
              onClick={() => setFilter('pending')}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              className={filter === 'pending' ? 'bg-zion-purple text-white' :'text-zion-slate-light'}
            >;
              Pending;
            </Button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Button ;"
              size="sm" ;'
              variant={filter === 'completed' ? 'default' :'outline'} ;'
              onClick={() => setFilter('completed')}'
<<<<<<< HEAD
=======
=======
            <Button ;
              size="sm" ;
              variant={filter === 'completed' ? 'default' :'outline'} ;
              onClick={() => setFilter('completed')}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              className={filter === 'completed' ? 'bg-zion-purple text-white' :'text-zion-slate-light'}
            >;
              Completed;
            </Button>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <Button ;"
              size="sm" ;'
              variant={filter === 'escrow' ? 'default' :'outline'} ;'
              onClick={() => setFilter('escrow')}'
<<<<<<< HEAD
=======
=======
            <Button ;
              size="sm" ;
              variant={filter === 'escrow' ? 'default' :'outline'} ;
              onClick={() => setFilter('escrow')}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              className={filter === 'escrow' ? 'bg-zion-purple text-white' :'text-zion-slate-light'}
            >;
              Escrow;
            </Button>;
          </div>;
        </div>;
        ;
        {isLoading ? (;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
                </CardContent>;
                <CardFooter>;"
=======
                </CardContent>;
                <CardFooter>;"
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <Skeleton className="h-9 w-28 bg-zion-blue-light rounded-md" />;
                </CardFooter>;
              </Card>;
            </div>;
          ));
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                            <span>Payment from <span className="text-zion-cyan">Client</span></span>;
                          )}
                        </CardDescription>;
                      </div>;
                      ;
                      {getStatusBadge(transaction.status, transaction.in_escrow)}
                    </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  </CardHeader>;"
                  <CardContent className="pb-3">;"
                    <div className="flex justify-between items-center mb-1">;"
                      <span className="text-zion-slate-light">Amount:</span>;"
<<<<<<< HEAD
=======
=======
                  </CardHeader>;
                  <CardContent className="pb-3">;
                    <div className="flex justify-between items-center mb-1">;
                      <span className="text-zion-slate-light">Amount:</span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      <span className="text-white font-medium text-lg">;
                        {formatCurrency(transaction.amount, transaction.currency)}
                      </span>;
                    </div>;
<<<<<<< HEAD
                    ;"
                    <div className="flex justify-between items-center text-sm">;"
                      <span className="text-zion-slate-light">Date:</span>;"
=======
<<<<<<< HEAD
                    ;"
                    <div className="flex justify-between items-center text-sm">;"
                      <span className="text-zion-slate-light">Date:</span>;"
=======
                    ;
                    <div className="flex justify-between items-center text-sm">;
                      <span className="text-zion-slate-light">Date:</span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      <span className="text-zion-slate-light">;
                        {new Date(transaction.created_at).toLocaleDateString()} ;
                        ({formatDistanceToNow(new Date(transaction.created_at), { addSuffix:true })});
                      </span>;
                    </div>;
                    ;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    {(transaction.completed_at || transaction.refunded_at || transaction.cancelled_at) && (;"
                      <div className="flex justify-between items-center text-sm mt-1">;"
                        <span className="text-zion-slate-light">;'
                          {transaction.completed_at ? 'Completed:' :;'
                           transaction.refunded_at ? 'Refunded:' :'Cancelled:'}
                        </span>;"
<<<<<<< HEAD
=======
=======
                    {(transaction.completed_at || transaction.refunded_at || transaction.cancelled_at) && (;
                      <div className="flex justify-between items-center text-sm mt-1">;
                        <span className="text-zion-slate-light">;
                          {transaction.completed_at ? 'Completed:' :;
                           transaction.refunded_at ? 'Refunded:' :'Cancelled:'}
                        </span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        <span className="text-zion-slate-light">;
                          {new Date(;
                            transaction.completed_at || ;
                            transaction.refunded_at || ;
                            transaction.cancelled_at!;}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}export function TransactionHistory () {}
  const {};
  user;
}= useAuth ();
<<<<<<< HEAD
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
=======
const {}
  toast;
}= useToast ();'
const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'> ('all');
const {}
  data: transactions, isLoading, error, refetch;
}= useQuery ({'
  queryKey: ['transactions', user?.id, filter];
queryFn: async () => {}
>>>>>>> origin/chore/fix-lint-and-merge
  if (!user) return [];
return data as Transaction[] 
};
enabled: !!user;
<<<<<<< HEAD
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

=======
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

=======
}export function TransactionHistory () {
  const {
  user 
}= useAuth ();
const {
  toast 
}= useToast ();
const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'> ('all');
const {
  data: transactions, isLoading, error, refetch 
}= useQuery ({
  queryKey: ['transactions', user?.id, filter];
queryFn: async () => {
  if (!user) return [];
return data as Transaction[] 
};
enabled: !!user 
});
if (error) throw error;
refetch () 
}catch (error) {
  
  const { data: transactions, isLoading, error, refetch } = useQuery({
    queryKey: ['transactions', user?.id, filter],
    queryFn: async () => {
      if (!user) return [],
import React, {_useState} from "react";

interface Transaction {_id: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  user_id: string;
  provider_id: string;
  service_id: string;
  amount: number;
<<<<<<< HEAD
  currency: string;'
  status: 'pending' | 'completed' | 'refunded' | 'cancelled';

  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;

=======
<<<<<<< HEAD
  currency: string;'
  status: 'pending' | 'completed' | 'refunded' | 'cancelled';

  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;

=======
  currency: string;
  status: 'pending' | 'completed' | 'refunded' | 'cancelled';
  in_escrow: boolean;
  created_at: string;
  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
  provider?: {
>>>>>>> merged-prs-20250907-203621
      
<<<<<<< HEAD
      
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      toast({
        title: "Success"
        description: data.message |"Transaction updated successfully"})
      refetch()
    } catch (error) {
<<<<<<< HEAD
      console.error("Error managing transaction:", error);
      console.error("Error managing transaction:", error),
=======
<<<<<<< HEAD
      console.error("Error managing transaction:", error),
=======
      console.error("Error managing transaction:", error);
<<<<<<< HEAD
      console.error("Error managing transaction:", error),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      toast({
        title: "Error"
        description: error.message |"Failed to update transaction"

<<<<<<< HEAD
        variant: "destructive"})

  },

=======
<<<<<<< HEAD
        variant: "destructive"})
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },

<<<<<<< HEAD
  }
  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
        ),
=======
        );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      case 'completed':
        return ("
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">"
            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed;
          </Badge>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
        ),
=======
        );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      case 'refunded':
        return ("
          <Badge variant="outline" className="bg-purple-500/20 text-purple-500 border-purple-500">"
            <RefreshCcw className="w-3 h-3 mr-1" /> Refunded;
          </Badge>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
        ),
=======
        );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

  },

=======
<<<<<<< HEAD
=======
    }

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },

<<<<<<< HEAD
  }
  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency'
      currency: currency.toUpperCase()
    }).format(amount)

<<<<<<< HEAD
=======
  },

  if (error) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    display_name?: string;};
  service?: {_title?: string;};
}

export function TransactionHistory() {_const { user} = useAuth();
  const {_toast} = useToast();
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all');
  
  const {_data: transactions, _isLoading, _error, _refetch} = useQuery(_{_queryKey: ['transactions', _user?.id, _filter], _queryFn: async () => {
      if (!user) return [];
      
      // Build the query based on filters
      let _query = supabase
        .from('transactions')
        .select(`
          *, _provider:profiles!provider_id(display_name), _service:services(title)
        `)
        .or(`user_id.eq.${user.id},provider_id.eq.${user.id}`),
      
      if (filter === 'pending') {
        query = query.eq('statuspending')
      } else if (filter === 'completed') {
        query = query.eq('statuscompleted')
      } else if (filter === 'escrow') {
        query = query.eq('in_escrow', true)
      }
      
      query = query.order('created_at', { ascending: false }),
      
      const { data, error } = await query,      
      if (error) throw error,
      return data as Transaction[]
    },
    enabled: !!user}),

  const handleManageTransaction = async (transactionId: string, action: 'release' | 'refund' | 'cancel') => {
    try {
      const { data, error } = await supabase.functions.invoke('manage-transaction', {
        body: { transactionId, action }
      }),      
      if (error) throw error,
      
      toast({
        title: "Success",
        description: data.message || "Transaction updated successfully"}),      
      refetch()
    } catch (error) {
      console.error("Error managing transaction:", error),
      toast({
        title: "Error",
        description: error.message || "Failed to update transaction",
        variant: "destructive"})      toast({_title: "Success", _description: data.message || "Transaction updated successfully"});
      
      refetch();
    } catch (error) {_toast({
        title: "Error", _description: error.message || "Failed to update transaction", _variant: "destructive"});
    }
  },
  
  const _getStatusBadge = (_status: string, _inEscrow: boolean) => {_switch(status) {
      case 'pending':
        return inEscrow ? (
          <Badge variant=&quot;outline&quot; className=&quot;bg-yellow-500/20 text-yellow-500 border-yellow-500&quot;>
            <Clock className=&quot;w-3 h-3 mr-1&quot; /> In Escrow
          </Badge>
        ) : (
          <Badge variant=&quot;outline&quot; className=&quot;bg-blue-500/20 text-blue-500 border-blue-500&quot;>
            <Clock className=&quot;w-3 h-3 mr-1&quot; /> Pending
          </Badge>
        ),
      case 'completed':
        return (
          <Badge variant=&quot;outline&quot; className=&quot;bg-green-500/20 text-green-500 border-green-500&quot;>
            <CheckCircle2 className=&quot;w-3 h-3 mr-1&quot; /> Completed
          </Badge>
        ),
      case 'refunded':
        return (
          <Badge variant=&quot;outline&quot; className=&quot;bg-purple-500/20 text-purple-500 border-purple-500&quot;>
            <RefreshCcw className=&quot;w-3 h-3 mr-1&quot; /> Refunded
          </Badge>
        ),
      case 'cancelled':
        return (
          <Badge variant=&quot;outline&quot; className=&quot;bg-red-500/20 text-red-500 border-red-500&quot;>
            <XCircle className=&quot;w-3 h-3 mr-1&quot; /> Cancelled
          </Badge>
        ),
      default:
        return (
          <Badge variant=&quot;outline&quot; className=&quot;bg-gray-500/20 text-gray-500 border-gray-500&quot;>
            <AlertCircle className=&quot;w-3 h-3 mr-1&quot; /> Unknown
          </Badge>
        )
    }
  },
  
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase()
    }).format(amount)
  },

  if (error) {
    return (
      <div className=&quot;bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light&quot;>
        <div className=&quot;text-center text-zion-slate-light&quot;>
          <AlertCircle className=&quot;mx-auto h-12 w-12 text-red-500 mb-4&quot; />
          <h3 className=&quot;font-bold text-xl text-white mb-2&quot;>Failed to load transactions</h3>
          <p className=&quot;mb-4&quot;>{error.message}</p>
          <Button onClick={() => refetch()} variant=&quot;outline&quot;>
            <RefreshCcw className=&quot;mr-2 h-4 w-4&quot; />            Try Again
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },

  if (error) {

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

              const isClient = user?.id === transaction.user_id,

              const isPending = transaction.status === 'pending',
              const isInEscrow = transaction.in_escrow,
              const canRelease = !isClient && isPending && isInEscrow,
              const canCancel = isClient && isPending,'
              const canRefund = isClient && transaction.status === 'completed',
              
              const counterpartyName = isClient '
                ? transaction.provider?.display_name || 'Service Provider' '
                : 'Client',

              return ("
                <Card key={transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">"
                  <CardHeader className="pb-3">"
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

              className={filter === 'all' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              All;
            </Button>;

              className={filter === 'pending' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              Pending;
            </Button>;

              className={filter === 'completed' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              Completed;
            </Button>;

              className={filter === 'escrow' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              Escrow;
            </Button>;
          </div>;
        </div>;

        {isLoading ? (;

                  <Skeleton className="h-9 w-28 bg-zion-blue-light rounded-md" />;
                </CardFooter>;
              </Card>;
            </div>;
          ));

                            <span>Payment from <span className="text-zion-cyan">Client</span></span>;

                          )}

                        </CardDescription>
                      </div>
                      {getStatusBadge(transaction.status, transaction.in_escrow)}
                    </div>
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
                        <span className="text-zion-slate-light">
                          {new Date(
                            transaction.completed_at |
                            transaction.refunded_at |
                            transaction.cancelled_at!

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
<<<<<<< HEAD
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
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </CardFooter>
              </Card>
            </div>
          ))
        ) : transactions && transactions.length > 0 ? (
<<<<<<< HEAD
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
=======
          <div className="space-y-4">
            {transactions.map((transaction) => {


              const isClient = user?.id === transaction.user_id;
              const isPending = transaction.status === 'pending';
              const isInEscrow = transaction.in_escrow;
              const canRelease = !isClient && isPending && isInEscrow;
              const canCancel = isClient && isPending;
              const canRefund = isClient && transaction.status === 'completed';
              const counterpartyName = isClient
                ? transaction.provider?.display_name |'Service Provider'
                : 'Client';
=======
=======
  const { data: transactions, isLoading, error, refetch } = useQuery({;
    queryKey: ['transactions', user?.id, filter];
    queryFn: async () => {;
      if (!user) return [];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
              return ("
                <Card key={transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">"
                  <CardHeader className="pb-3">"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              return (
                <Card key={transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">
                  <CardHeader className="pb-3">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden">;
      <div className="p-6">;
        <div className="flex items-center justify-between mb-6">;
          <h2 className="text-2xl font-bold text-white">Transaction History</h2>;
<<<<<<< HEAD
          <div className="flex space-x-2">;
            <Button;
              size="sm";
              variant={filter === 'all' ? 'default' : 'outline'} ;
=======

          <div className="flex space-x-2">;
            <Button
              size="sm" 
              variant={filter === 'all' ? 'default' : 'outline'} 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              onClick={() => setFilter('all')}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              className={filter === 'all' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              All;
            </Button>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
            <Button;
              size="sm";
              variant={filter === 'pending' ? 'default' : 'outline'} ;
=======
            <Button
              size="sm" 
              variant={filter === 'pending' ? 'default' : 'outline'} 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              onClick={() => setFilter('pending')}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              className={filter === 'pending' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              Pending;
            </Button>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
            <Button;
              size="sm";
              variant={filter === 'completed' ? 'default' : 'outline'} ;
=======
            <Button
              size="sm" 
              variant={filter === 'completed' ? 'default' : 'outline'} 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              onClick={() => setFilter('completed')}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              className={filter === 'completed' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              Completed;
            </Button>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
            <Button;
              size="sm";
              variant={filter === 'escrow' ? 'default' : 'outline'} ;
=======
            <Button
              size="sm" 
              variant={filter === 'escrow' ? 'default' : 'outline'} 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              onClick={() => setFilter('escrow')}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              className={filter === 'escrow' ? 'bg-zion-purple text-white' : 'text-zion-slate-light'}
            >;
              Escrow;
            </Button>;
          </div>;
        </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {isLoading ? (;

                  <Skeleton className="h-9 w-28 bg-zion-blue-light rounded-md" />;
                </CardFooter>;
              </Card>;
            </div>;
          ));
<<<<<<< HEAD

=======
        ) : transactions && transactions.length > 0 ? (;
          <div className="space-y-4">;
<<<<<<< HEAD
            {transactions.map((transaction) => {;
              const isClient = user?.id === transaction.user_id,;
              const isPending = transaction.status === 'pending',;
              const isInEscrow = transaction.in_escrow,;
              const canRelease = !isClient && isPending && isInEscrow,;
              const canCancel = isClient && isPending,;
              const canRefund = isClient && transaction.status === 'completed';
              const counterpartyName = isClient;
                ? transaction.provider?.display_name || 'Service Provider';
                : 'Client';
              return (;
                <Card key={transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;
=======
            {transactions && transactions.map((transaction) => {;
              const isClient = user?.id === transaction && transaction.user_id;
              const isPending = transaction && transaction.status === 'pending';
              const isInEscrow = transaction && transaction.in_escrow;
              const canRelease = !isClient && isPending && isInEscrow;
              const canCancel = isClient && isPending;
              const canRefund = isClient && transaction && transaction.status === 'completed';

              const counterpartyName = isClient ;
                ? transaction && transaction.provider?.display_name || 'Service Provider' ;
                : 'Client';

              return (
                <Card key={transaction && transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <CardHeader className="pb-3">;
                    <div className="flex justify-between items-start">;
                      <div>;
                        <CardTitle className="text-white text-lg">;
<<<<<<< HEAD
                          {transaction.service?.title || 'Service Payment'}
=======
                          {transaction && transaction.service?.title || 'Service Payment'}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        </CardTitle>;
                        <CardDescription className="text-zion-slate-light">;
                          {isClient ? (;
                            <span>Payment to <span className="text-zion-purple">{counterpartyName}</span></span>;
                          ) : (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                            <span>Payment from <span className="text-zion-cyan">Client</span></span>;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          )}

                        </CardDescription>
                      </div>
                      {_getStatusBadge(transaction.status, _transaction.in_escrow)}
                    </div>
<<<<<<< HEAD
                  </CardHeader>
<<<<<<< HEAD
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

=======
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
=======
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
<<<<<<< HEAD
=======
                    </div>
<<<<<<< HEAD
                    {(transaction.completed_at || transaction.refunded_at || transaction.cancelled_at) && (

                    {(transaction.completed_at |transaction.refunded_at |transaction.cancelled_at) && (
                    {(transaction.completed_at || transaction.refunded_at || transaction.cancelled_at) && (
=======

                    {(transaction.completed_at || transaction.refunded_at || transaction.cancelled_at) && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <div className="flex justify-between items-center text-sm mt-1">

                           transaction.refunded_at ? 'Refunded:' : 'Cancelled:'}
                        </span>"
>>>>>>> merged-prs-20250907-203621
                        <span className="text-zion-slate-light">
                          {new Date(
                            transaction.completed_at |
                            transaction.refunded_at |
                            transaction.cancelled_at!
<<<<<<< HEAD

=======
<<<<<<< HEAD
                        </CardDescription>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
                      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
                    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <div className=&quot;flex justify-between items-center text-sm&quot;>
                      <span className=&quot;text-zion-slate-light&quot;>Date:</span>
                      <span className=&quot;text-zion-slate-light&quot;>
                        {new Date(transaction.created_at).toLocaleDateString()} 
                        ({formatDistanceToNow(new Date(transaction.created_at) { addSuffix: true })})
                      </span>
                    </div>
<<<<<<< HEAD
=======
                    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          ).toLocaleDateString()}
<<<<<<< HEAD
=======
                        </span>;
                      </div>;
                    )}
<<<<<<< HEAD

                : "You haven't made any transactions yet. Once you make a payment or receive one, it will appear here."}
            </p>;
          </div>;
        )}

=======
<<<<<<< HEAD
                  </CardContent>;
                  <CardFooter className="flex justify-end gap-2 bg-zion-blue/20 pt-3">;
                    {canRelease && (;
                      <Button ;
                        onClick={() => handleManageTransaction(transaction.id, 'release')}
=======

<<<<<<< HEAD
=======
                  </CardContent>;
                  <CardFooter className="flex justify-end gap-2 bg-zion-blue/20 pt-3">;
                    {canRelease && (;
                      <Button
                        onClick={() => handleManageTransaction(transaction && transaction.id, 'release')}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        size="sm";
                        className="bg-green-600 hover:bg-green-700 text-white";
                      >;
                        <CheckCircle2 className="mr-1 h-4 w-4" /> Release Funds;
<<<<<<< HEAD
                      </Button>;                    )}
                    ;
                    {canRefund && (;
                      <Button ;
                        onClick={() => handleManageTransaction(transaction.id, 'refund')}
=======
                      </Button>;
                    )}

                    {canRefund && (;
                      <Button
                        onClick={() => handleManageTransaction(transaction && transaction.id, 'refund')}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        size="sm";
                        variant="outline";
                        className="text-zion-slate-light border-zion-blue-light";
                      >;
                        <RefreshCcw className="mr-1 h-4 w-4" /> Request Refund;
<<<<<<< HEAD
                      </Button>;                    )}
                    ;
                    {canCancel && (;
                      <Button ;
                        onClick={() => handleManageTransaction(transaction.id, 'cancel')}
=======
                      </Button>;
                    )}

                    {canCancel && (;
                      <Button
                        onClick={() => handleManageTransaction(transaction && transaction.id, 'cancel')}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        size="sm";
                        variant="outline";
                        className="text-red-400 border-red-400/30 hover:bg-red-400/10";
                      >;
                        <XCircle className="mr-1 h-4 w-4" /> Cancel;
                      </Button>;
<<<<<<< HEAD
                    )}
                  </CardFooter>;
                </Card>;
          </div>;
        ) : (;
              ),;
            })}
          </div>;
        ) :(;
=======

                    )}
                  </CardFooter>;
                </Card>;
              );
            })}

          </div>;
        ) : (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="text-center py-12 border border-dashed border-zion-blue-light rounded-lg">;
            <div className="mx-auto w-16 h-16 bg-zion-blue-light/30 rounded-full flex items-center justify-center mb-4">;
              <ArrowRight className="h-8 w-8 text-zion-slate-light" />;
              <ArrowLeft className="h-8 w-8 text-zion-slate-light -ml-4" />;
            </div>;
            <h3 className="text-xl font-medium text-white mb-2">No transactions found</h3>;
            <p className="text-zion-slate-light max-w-md mx-auto">;
              {filter !== 'all' ;
                ? `You don't have any ${filter} transactions. Try changing the filter or make a new transaction.`;
<<<<<<< HEAD
                :"You haven't made any transactions yet. Once you make a payment or receive one, it will appear here."}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </p>;
          </div>;
        )}
      </div>;
    </div>;
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      // Check condition
if (throw error) {
  $2

}
<<<<<<< HEAD
      toast ({"
        title: "Success","
        description: data.message || "Transaction updated successfully"}),
      refetch ();
    } catch (error) {"
      console.error ("Error managing transaction:", error);
      toast ({"
        title: "Error","
        description: error.message || "Failed to update transaction","
=======
      toast ({
        title: "Success",
        description: data.message || "Transaction updated successfully"}),
      refetch ();
    } catch (error) {
      console.error ("Error managing transaction:", error);
      toast ({
        title: "Error",
        description: error.message || "Failed to update transaction",
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        variant: "destructive"});
    }
  }
;
<<<<<<< HEAD
  const getStatusBadge = (status: string, in_escrow: boolean) =>: any {}
    switch (status) {'
      case 'pending':;

=======
  const getStatusBadge = (status: string, in_escrow: boolean) =>: any {
    switch (status) {
      case 'pending':;
        return in_escrow ? (
          <Badge variant="outline" className="bg - yellow - 500 / 20 text - yellow - 500 border - yellow - 500">;
            <Clock className="w - 3 h - 3 mr - 1" /> In Escrow;
          </Badge>) : (
          <Badge variant="outline" className="bg - blue - 500 / 20 text - blue - 500 border - blue - 500">;
            <Clock className="w - 3 h - 3 mr - 1" /> Pending;
          </Badge>);
      case 'completed':;
        return (
          <Badge variant="outline" className="bg - green - 500 / 20 text - green - 500 border - green - 500">;
            <CheckCircle2 className="w - 3 h - 3 mr - 1" /> Completed;
          </Badge>);
      case 'refunded':;
        return (
          <Badge variant="outline" className="bg - purple - 500 / 20 text - purple - 500 border - purple - 500">;
            <RefreshCcw className="w - 3 h - 3 mr - 1" /> Refunded;
          </Badge>);
      case 'cancelled':;
        return (
          <Badge variant="outline" className="bg - red - 500 / 20 text - red - 500 border - red - 500">;
            <XCircle className="w - 3 h - 3 mr - 1" /> Cancelled;
          </Badge>),
      default:;
        return (
          <Badge variant="outline" className="bg - gray - 500 / 20 text - gray - 500 border - gray - 500">;
            <AlertCircle className="w - 3 h - 3 mr - 1" /> Unknown;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </Badge>);
    }
  }
;
<<<<<<< HEAD
  const format_currency = (amount: number, currency: string) =>: any {'
    return new Intl.NumberFormat ('en - US', {'
=======
  const format_currency = (amount: number, currency: string) =>: any {
    return new Intl.NumberFormat ('en - US', {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      style: 'currency',
      currency: currency.toUpperCase ();
    }).format (amount);
  }
;
<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
}

=======
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="bg - zion - blue - dark p - 6 rounded - lg border border - zion - blue - light">;
        <div className="text - center text - zion - slate - light">;
          <AlertCircle className="mx - auto h - 12 w - 12 text - red - 500 mb - 4" />;
          <h3 className="font - bold text - xl text - white mb - 2">Failed to load transactions</h3>;
          <p className="mb - 4">{error.message}</p>;
          <Button on_click={() => refetch ()} variant="outline">;
            <RefreshCcw className="mr - 2 h - 4 w - 4" />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            Try Again;
          </Button>;
        </div>;
      </div>);
  }
<<<<<<< HEAD

=======
  return (
    <div className="bg - zion - blue - dark rounded - lg border border - zion - blue - light overflow - hidden">;
      <div className="p - 6">;
        <div className="flex items - center justify - between mb - 6">;
          <h2 className="text - 2xl font - bold text - white">Transaction History</h2>;
          <div className="flex space - x-2">;
            <Button;
              size="sm";
              variant={filter === 'all' ? 'default' : 'outline'}
              on_click={() => set_filter ('all')}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              className={filter === 'all' ? 'bg - zion - purple text - white' : 'text - zion - slate - light'}
            >;
              All;
            </Button>;
<<<<<<< HEAD
            <Button;"
              size="sm";'
              variant={filter === 'pending' ? 'default' : 'outline'}'
              on_click={() => set_filter ('pending')}'
=======
            <Button;
              size="sm";
              variant={filter === 'pending' ? 'default' : 'outline'}
              on_click={() => set_filter ('pending')}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              className={filter === 'pending' ? 'bg - zion - purple text - white' : 'text - zion - slate - light'}
            >;
              Pending;
            </Button>;
<<<<<<< HEAD
            <Button;"
              size="sm";'
              variant={filter === 'completed' ? 'default' : 'outline'}'
              on_click={() => set_filter ('completed')}'
=======
            <Button;
              size="sm";
              variant={filter === 'completed' ? 'default' : 'outline'}
              on_click={() => set_filter ('completed')}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              className={filter === 'completed' ? 'bg - zion - purple text - white' : 'text - zion - slate - light'}
            >;
              Completed;
            </Button>;
<<<<<<< HEAD
            <Button;"
              size="sm";'
              variant={filter === 'escrow' ? 'default' : 'outline'}'
              on_click={() => set_filter ('escrow')}'
=======
            <Button;
              size="sm";
              variant={filter === 'escrow' ? 'default' : 'outline'}
              on_click={() => set_filter ('escrow')}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              className={filter === 'escrow' ? 'bg - zion - purple text - white' : 'text - zion - slate - light'}
            >;
              Escrow;
            </Button>;
          </div>;
        </div>;
        {is_loading ? (
<<<<<<< HEAD

              const is_pending = transaction.status === 'pending';
              const isInEscrow = transaction.in_escrow;
              const can_release = !is_client && is_pending && isInEscrow;
              const can_cancel = is_client && is_pending;'
              const can_refund = is_client && transaction.status === 'completed';
;
              const counterparty_name = is_client;'
                ? transaction.provider?.display_name || 'Service Provider';'
                : 'Client';
;

=======
          Array (3).fill (0).map ((_, i) => (
            <div key={i} className="mb - 4">;
              <Card className="bg - zion - blue - dark border - zion - blue - light">;
                <CardHeader className="pb - 2">;
                  <Skeleton className="h - 6 w - 3/4 bg - zion - blue - light" />;
                  <Skeleton className="h - 4 w - 1/4 bg - zion - blue - light mt - 2" />;
                </CardHeader>;
                <CardContent>;
                  <div className="flex justify - between mb - 2">;
                    <Skeleton className="h - 5 w - 1/3 bg - zion - blue - light" />;
                    <Skeleton className="h - 5 w - 1/4 bg - zion - blue - light" />;
                  </div>;
                  <Skeleton className="h - 4 w - 2/3 bg - zion - blue - light" />;
                </CardContent>;
                <CardFooter>;
                  <Skeleton className="h - 9 w - 28 bg - zion - blue - light rounded - md" />;
                </CardFooter>;
              </Card>;
            </div>))) : transactions && transactions.length > 0 ? (
          <div className="space - y-4">;
            {transactions.map ((transaction) => {
              const is_client = user?.id === transaction.user_id;
              const is_pending = transaction.status === 'pending';
              const isInEscrow = transaction.in_escrow;
              const can_release = !is_client && is_pending && isInEscrow;
              const can_cancel = is_client && is_pending;
              const can_refund = is_client && transaction.status === 'completed';
;
              const counterparty_name = is_client;
                ? transaction.provider?.display_name || 'Service Provider';
                : 'Client';
;
              return (
                <Card key={transaction.id} className="bg - zion - blue - dark border - zion - blue - light overflow - hidden">;
                  <CardHeader className="pb - 3">;
                    <div className="flex justify - between items - start">;
                      <div>;
                        <CardTitle className="text - white text - lg">;
                          {transaction.service?.title || 'Service Payment'}
                        </CardTitle>;
                        <CardDescription className="text - zion - slate - light">;
                          {is_client ? (
                            <span > Payment to <span className="text - zion - purple">{counterparty_name}</span></span>) : (
                            <span > Payment from <span className="text - zion - cyan">Client</span></span>)}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        </CardDescription>;
                      </div>;
                      {getStatusBadge (transaction.status, transaction.in_escrow)}
                    </div>;
<<<<<<< HEAD

=======
                  </CardHeader>;
                  <CardContent className="pb - 3">;
                    <div className="flex justify - between items - center mb - 1">;
                      <span className="text - zion - slate - light">Amount:</span>;
                      <span className="text - white font - medium text - lg">;
                        {format_currency (transaction.amount, transaction.currency)}
                      </span>;
                    </div>;
                    <div className="flex justify - between items - center text - sm">;
                      <span className="text - zion - slate - light">Date:</span>;
                      <span className="text - zion - slate - light">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                        {new Date (transaction.created_at).toLocaleDateString ()}
                        ({formatDistanceToNow (new Date (transaction.created_at), { add_suffix: true })});
                      </span>;
                    </div>;
<<<<<<< HEAD

=======
                    {(transaction.completed_at || transaction.refunded_at || transaction.cancelled_at) && (
                      <div className="flex justify - between items - center text - sm mt - 1">;
                        <span className="text - zion - slate - light">;
                          {transaction.completed_at ? 'Completed:' :;
                          transaction.refunded_at ? 'Refunded:' : 'Cancelled:'}
                        </span>;
                        <span className="text - zion - slate - light">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          {new Date (
                            transaction.completed_at ||;
                            transaction.refunded_at ||;
                            transaction.cancelled_at!).toLocaleDateString ()}
                        </span>;
                      </div>)}
<<<<<<< HEAD

=======
                  </CardContent>;
                  <CardFooter className="flex justify - end gap - 2 bg - zion - blue / 20 pt - 3">;
                    {can_release && (
                      <Button;
                        on_click={() => handleManageTransaction (transaction.id, 'release')}
                        size="sm";
                        className="bg - green - 600 hover:bg - green - 700 text - white";
                      >;
                        <CheckCircle2 className="mr - 1 h - 4 w - 4" /> Release Funds;
                      </Button>)}
                    {can_refund && (
                      <Button;
                        on_click={() => handleManageTransaction (transaction.id, 'refund')}
                        size="sm";
                        variant="outline";
                        className="text - zion - slate - light border - zion - blue - light";
                      >;
                        <RefreshCcw className="mr - 1 h - 4 w - 4" /> Request Refund;
                      </Button>)}
                    {can_cancel && (
                      <Button;
                        on_click={() => handleManageTransaction (transaction.id, 'cancel')}
                        size="sm";
                        variant="outline";
                        className="text - red - 400 border - red - 400 / 30 hover:bg - red - 400 / 10";
                      >;
                        <XCircle className="mr - 1 h - 4 w - 4" /> Cancel;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      </Button>)}
                  </CardFooter>;
                </Card>);
            })}
<<<<<<< HEAD

=======
          </div>) : (
          <div className="text - center py - 12 border border - dashed border - zion - blue - light rounded - lg">;
            <div className="mx - auto w - 16 h - 16 bg - zion - blue - light / 30 rounded - full flex items - center justify - center mb - 4">;
              <ArrowRight className="h - 8 w - 8 text - zion - slate - light" />;
              <ArrowLeft className="h - 8 w - 8 text - zion - slate - light -ml - 4" />;
            </div>;
            <h3 className="text - xl font - medium text - white mb - 2">No transactions found</h3>;
            <p className="text - zion - slate - light max - w-md mx - auto">;
              {filter !== 'all';
                ? `You don't have any ${filter} transactions. Try changing the filter or make a new transaction.`;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                : "You haven't made any transactions yet. Once you make a payment or receive one, it will appear here."}
            </p>;
          </div>)}
      </div>;
    </div>);
<<<<<<< HEAD

=======
  ),;}
};
const getStatusBadge = (status: string, inEscrow: boolean) => {
  switch (status) {
  case 'pending': return inEscrow ? (<Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500" > <Clock className="w-3 h-3 mr-1" /> In Escrow </Badge>) : (<Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500" > <Clock className="w-3 h-3 mr-1" /> Pending </Badge>);
case 'completed': return (<Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500" > <CheckCircle2 className="w-3 h-3 mr-1" /> Completed </Badge>);
case 'refunded': return (<Badge variant="outline" className="bg-purple-500/20 text-purple-500 border-purple-500" > <RefreshCcw className="w-3 h-3 mr-1" /> Refunded </Badge>);
case 'cancelled': return (<Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500" > <XCircle className="w-3 h-3 mr-1" /> Cancelled </Badge>);
default: return (<Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500" > <AlertCircle className="w-3 h-3 mr-1" /> Unknown </Badge> Try Again </Button> </div> </div>) 
}<div className="flex space-x-2" > <Button > All </Button> <Button > Pending </Button> <Button > Completed </Button> <Button > Escrow </Button> </div> </div> </CardHeader> <CardContent> <div className="flex justify-between mb-2" > <Skeleton className="h-5 w-1/3 bg-zion-blue-light" /> <Skeleton className="h-5 w-1/4 bg-zion-blue-light" /> </div> <Skeleton className="h-4 w-2/3 bg-zion-blue-light" /> </CardContent> <CardFooter> <Skeleton className="h-9 w-28 bg-zion-blue-light rounded-md" /> </CardFooter> </Card> </div>) ) const counterpartyName = isClient ? transaction.provider?.display name || 'Service Provider' : 'Client';
return (<Card key= {
  transaction.id 
}className="bg-zion-blue-dark border-zion-blue-light overflow-hidden" > <CardHeader className="pb-3" > <div className="flex justify-between items-start" > <div>) : (<span>Payment from <span className="text-zion-cyan" >Client</span></span>) 
}</CardDescription> </div> {
  getStatusBadge (transaction.status, transaction.in escrow) 
}</div> </CardHeader> transaction.completed at || transaction.refunded at || transaction.cancelled at!) .toLocaleDateString () 
}</span> </div>) 
}</CardContent> > <CheckCircle2 className="mr-1 h-4 w-4" /> Release Funds </Button>) 
}> <RefreshCcw className="mr-1 h-4 w-4" /> Request Refund </Button>) 
}> <XCircle className="mr-1 h-4 w-4" /> Cancel </Button>) 
}</CardFooter> </Card>) 
}) 
}</div>) : (<div className="text-center py-12 border border-dashed border-zion-blue-light rounded-lg" > <div className="mx-auto w-16 h-16 bg-zion-blue-light/30 rounded-full flex items-center justify-center mb-4" > <ArrowRight className="h-8 w-8 text-zion-slate-light" /> <ArrowLeft className="h-8 w-8 text-zion-slate-light -ml-4" /> </div> ? `You don't have any $ {
  filter 
}transactions. Try changing the filter or make a new transaction.` : "You haven't made any transactions yet. Once you make a payment or receive one, it will appear here." 
}</p> </div>) 
}</div> </div>) 
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                          ).toLocaleDateString()}
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                : "You haven't made any transactions yet. Once you make a payment or receive one, it will appear here."}
            </p>;
          </div>;
        )}

<<<<<<< HEAD
            </p>;
          </div>;
        )}
      </div>;
    </div>;

      // Check condition
if (throw error) {
  $2

}
      toast ({"
        title: "Success","
        description: data.message || "Transaction updated successfully"}),
      refetch ();
    } catch (error) {"
      console.error ("Error managing transaction:", error);
      toast ({"
        title: "Error","
        description: error.message || "Failed to update transaction","
        variant: "destructive"});
    }
  }
;
  const getStatusBadge = (status: string, in_escrow: boolean) =>: any {}
    switch (status) {'
      case 'pending':;

          </Badge>);
    }
  }
;
  const format_currency = (amount: number, currency: string) =>: any {'
    return new Intl.NumberFormat ('en - US', {'
      style: 'currency',
      currency: currency.toUpperCase ();
    }).format (amount);
  }
;
  // Check condition;
if ( {) {}
  $2;
}

            Try Again;
          </Button>;
        </div>;
      </div>);
  }

              className={filter === 'all' ? 'bg - zion - purple text - white' : 'text - zion - slate - light'}
            >;
              All;
            </Button>;
            <Button;"
              size="sm";'
              variant={filter === 'pending' ? 'default' : 'outline'}'
              on_click={() => set_filter ('pending')}'
              className={filter === 'pending' ? 'bg - zion - purple text - white' : 'text - zion - slate - light'}
            >;
              Pending;
            </Button>;
            <Button;"
              size="sm";'
              variant={filter === 'completed' ? 'default' : 'outline'}'
              on_click={() => set_filter ('completed')}'
              className={filter === 'completed' ? 'bg - zion - purple text - white' : 'text - zion - slate - light'}
            >;
              Completed;
            </Button>;
            <Button;"
              size="sm";'
              variant={filter === 'escrow' ? 'default' : 'outline'}'
              on_click={() => set_filter ('escrow')}'
              className={filter === 'escrow' ? 'bg - zion - purple text - white' : 'text - zion - slate - light'}
            >;
              Escrow;
            </Button>;
          </div>;
        </div>;
        {is_loading ? (

              const is_pending = transaction.status === 'pending';
              const isInEscrow = transaction.in_escrow;
              const can_release = !is_client && is_pending && isInEscrow;
              const can_cancel = is_client && is_pending;'
              const can_refund = is_client && transaction.status === 'completed';
;
              const counterparty_name = is_client;'
                ? transaction.provider?.display_name || 'Service Provider';'
                : 'Client';
;

                        </CardDescription>;
                      </div>;
                      {getStatusBadge (transaction.status, transaction.in_escrow)}
                    </div>;

                        {new Date (transaction.created_at).toLocaleDateString ()}
                        ({formatDistanceToNow (new Date (transaction.created_at), { add_suffix: true })});
                      </span>;
                    </div>;

                          {new Date (
                            transaction.completed_at ||;
                            transaction.refunded_at ||;
                            transaction.cancelled_at!).toLocaleDateString ()}
                        </span>;
                      </div>)}

                      </Button>)}
                  </CardFooter>;
                </Card>);
            })}

                : "You haven't made any transactions yet. Once you make a payment or receive one, it will appear here."}
            </p>;
          </div>)}
      </div>;
    </div>);

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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
;

;
=======
<<<<<<< HEAD
;

;
=======
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
