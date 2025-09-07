





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
  status: 'pending' | 'completed' | 'refunded' | 'cancelled'',
  in_escrow: boolean;
  created_at: string;
  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
  provider?: {
    display_name?: string;
  }
  service?: {
    title?: string;
  }
}
export function TransactionHistory() {
  const { user } = useAuth();
  const { toast } = useToast();
'
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all');'
  const { data: transactions, isLoading, error, refetch } = useQuery({'
    queryKey: ['transactions', user?.id, filter];')
    queryFn: async () => {
      if (!user) return [];
      // Build the query based on filters;
      let query = supabase;'
        .from('transactions')'
        .select(`
          *;)
          provider: profiles!provider_id(display_name),
  service:services(title)
        `)
        .or(`user_id.eq.${user.id},provider_id.eq.${user.id}`);'
      if (filter === 'pending') {''
        query = query.eq('statuspending')''
      } else if (filter === 'completed') {''
        query = query.eq('statuscompleted')''
      } else if (filter === 'escrow') {''
        query = query.eq('in_escrow', true)'
      }'
      query = query.order('created_at', { ascending: false })'
      const { data, error } = await query;
      if (error) throw error;
      return data as Transaction[]
    }
    enabled: !!user})'
  const handleManageTransaction = async (transactionId: string, action: 'release' | 'refund' | 'cancel') => {'
    try {
  // TODO: Implement
}'
      const { data, error } = await supabase.functions.invoke('manage-transaction', {'
        body: { transactionId, action })
      });
      if (error) throw error;'
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle } from "lucide-react",""
import { formatDistanceToNow } from "date-fns","
interface Transaction {
  // TODO: Implement
}
  id: string,
  user_id: string,
  provider_id: string,
  service_id: string,
  amount: number,
  currency: string,"
  status: 'pending' | 'completed' | 'refunded' | 'cancelled','
  in_escrow: boolean,
  created_at: string,
  completed_at?: string,
  refunded_at?: string,
  cancelled_at?: string,
  provider?: {
    display_name?: string;
  },
  service?: {
    title?: string;
  }
}

export function TransactionHistory() {;
  const { user } = useAuth();
  const { toast } = useToast();'
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all');'
  const { data: transactions, isLoading, error, refetch } = useQuery({'
    queryKey: ['transactions', user?.id, filter];')
    queryFn: async () => {
      if (!user) return [];
      
      // Build the query based on filters;
      let query = supabase;'
        .from('transactions')'
        .select(`
          *;)
          provider:profiles!provider_id(display_name),
          service:services(title)
        `)
        .or(`user_id.eq.${user.id},provider_id.eq.${user.id}`);
      '
      if (filter === 'pending') {''
        query = query.eq('statuspending')''
      } else if (filter === 'completed') {''
        query = query.eq('statuscompleted')''
      } else if (filter === 'escrow') {''
        query = query.eq('in_escrow', true)'
      }
      '
      query = query.order('created_at', { ascending: false }),'
      const { data, error } = await query;
      
      if (error) throw error;
      return data as Transaction[]
    };
    enabled: !!user}),
'
  const handleManageTransaction = async (transactionId: string, action: 'release' | 'refund' | 'cancel') => {'
    try {
  // TODO: Implement
}'
      const { data, error } = await supabase.functions.invoke('manage-transaction', {'
        body: { transactionId, action })
      });
      
      if (error) throw error;'
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
  status: 'pending' | 'completed' | 'refunded' | 'cancelled',;'
  in_escrow: boolean,;
  created_at: string,;
  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
  provider?: {;}
    display_name?: string}
};  service?: {;}
    title?: string;}
  }
}
export function TransactionHistory() {;}
  const { user } = useAuth();

  const { toast } = useToast();'
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all');''
import React, { useState } from './react';''
import { use_query } from '@tanstack / react - query';''
import { supabase } from '@/integrations / supabase / client';''
import { use_auth } from '@/hooks / use_auth';''
import { use_toast } from '@/hooks / use - toast';''
import { Button } from '@/components / ui / button';''
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';''
import { Badge } from '@/components / ui / badge';''
import { Skeleton } from '@/components / ui / skeleton';''
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle } from './lucide-react';''
import { formatDistanceToNow } from './date - fns';'

interface Transaction {
  // TODO: Implement
}
  id: string,
  user_id: string,
  provider_id: string,
  service_id: string,
  amount: number,

  currency: string,'
  status: 'pending' | 'completed' | 'refunded' | 'cancelled','
  in_escrow: boolean,
  created_at: string,
'
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

;
interface Transaction {;
  id:string,;
  user_id:string,;
  provider_id:string,;
  service_id:string,;
  amount:number,;
  currency:string,;"
  status:'pending' | 'completed' | 'refunded' | 'cancelled',;'
  in_escrow:boolean,;
  created_at:string,;
  completed_at?:string,;
  refunded_at?:string,;
  cancelled_at?:string,;
  provider?:{;}
    display_name?:string;}
  },;
  service?:{;}
    title?:string,;}
  },;
}
;
export function TransactionHistory() {;}
  const { user } = useAuth(),;
  const { toast } = useToast(),;'
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all'),;'
  ;
  const { data:transactions, isLoading, error, refetch } = useQuery({;'
    queryKey:['transactions', user?.id, filter],;')
    queryFn:async () => {;
      if (!user) return [],;
      ;
      // Build the query based on filters;
      let query = supabase;'
        .from('transactions');'
        .select(`;
          *,;)
          provider:profiles!provider_id(display_name),;
          service:services(title);}
        `);}
        .or(`user_id.eq.${user.id},provider_id.eq.${user.id}`),;

      ;'
      if (filter === 'pending') {;''
        query = query.eq('statuspending'),;''
      } else if (filter === 'completed') {;''
        query = query.eq('statuscompleted'),;''
      } else if (filter === 'escrow') {;''
        query = query.eq('in_escrow', true),;'

      }
      ;'
      query = query.order('created_at', { ascending:false }),;'
      ;
      const { data, error } = await query,;
      ;
      if (error) throw error,;
      return data as Transaction[],;
    },;
    enabled:!!user}),;

;'
  const handleManageTransaction = async (transactionId:string, action:'release' | 'refund' | 'cancel') => {;'
    try {;'
      const { data, error } = await supabase.functions.invoke('manage-transaction', {;'
        body:{ transactionId, action })

      }),;
      ;
      if (error) throw error,;
      ;

      toast({;'
        title:"Success",;")"
        description:data.message || "Transaction updated successfully"}),;"
      ;
      refetch(),;
    } catch (error) {;"
      console.error("Error managing transaction:", error),;"
      toast({;"
        title:"Error",;""
        description:error.message || "Failed to update transaction",;")"
        variant:"destructive"}),;"
    }
  },;
  ;
  const getStatusBadge = (status:string, inEscrow:boolean) => {;
    switch(status) {;"
      case 'pending':;'
        return inEscrow ? (;'
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">;"
</Badge>"
            <Clock className="w-3 h-3 mr-1" /> In Escrow;"
</Clock>
          </Badge>;"
          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500">;"
</Badge>"
            <Clock className="w-3 h-3 mr-1" /> Pending;"
</Clock>
          </Badge>;"
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">;"
</Badge>"
            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed;"
</CheckCircle2>
          </Badge>;"
          <Badge variant="outline" className="bg-purple-500/20 text-purple-500 border-purple-500">;"
</Badge>"
            <RefreshCcw className="w-3 h-3 mr-1" /> Refunded;"
</RefreshCcw>
          </Badge>;"
          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">;"
</Badge>"
            <XCircle className="w-3 h-3 mr-1" /> Cancelled;"
</XCircle>
          </Badge>;"
          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">;"
</Badge>"
            <AlertCircle className="w-3 h-3 mr-1" /> Unknown;"
</AlertCircle>
          </Badge>;"
      <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">;"
</div>"
        <div className="text-center text-zion-slate-light">;"
</div>"
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;"
</AlertCircle>"
          <h3 className="font-bold text-xl text-white mb-2">Failed to load transactions</h3>;""
          <p className="mb-4">{error.message}</p>;")"
          <Button onClick={() => refetch()} variant="outline">;"
</Button>"
            <RefreshCcw className="mr-2 h-4 w-4" />;"
</RefreshCcw>
          </Button>;
        </div>;
      </div>;"
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden">;"
</div>"
      <div className="p-6">;"
</div>"
        <div className="flex items-center justify-between mb-6">;"
</div>"
          <h2 className="text-2xl font-bold text-white">Transaction History</h2>;""
          <div className="flex space-x-2">;"
</div>
            <Button ;"
              size="sm" ;""
              variant={filter === 'all' ? 'default' :'outline'} ;''
              onClick={() => setFilter('all')}'
</Button>
            </Button>;
            <Button ;'
              size="sm" ;""
              variant={filter === 'pending' ? 'default' :'outline'} ;''
              onClick={() => setFilter('pending')}'
</Button>
            </Button>;
            <Button ;'
              size="sm" ;""
              variant={filter === 'completed' ? 'default' :'outline'} ;''
              onClick={() => setFilter('completed')}'
</Button>
            </Button>;
            <Button ;'
              size="sm" ;""
              variant={filter === 'escrow' ? 'default' :'outline'} ;''
              onClick={() => setFilter('escrow')}'
</Button>
            </Button>;
          </div>;
        </div>;'
            <div key={i} className="mb-4">;"
</div>"
              <Card className="bg-zion-blue-dark border-zion-blue-light">;"
</Card>"
                <CardHeader className="pb-2">;"
</CardHeader>"
                  <Skeleton className="h-6 w-3/4 bg-zion-blue-light" />;"
</Skeleton>"
                  <Skeleton className="h-4 w-1/4 bg-zion-blue-light mt-2" />;"
</Skeleton>
                </CardHeader>;
                <CardContent>;
</CardContent>"
                  <div className="flex justify-between mb-2">;"
</div>"
                    <Skeleton className="h-5 w-1/3 bg-zion-blue-light" />;"
</Skeleton>"
                    <Skeleton className="h-5 w-1/4 bg-zion-blue-light" />;"
</Skeleton>
                  </div>;"
                  <Skeleton className="h-4 w-2/3 bg-zion-blue-light" />;"
</Skeleton>
                </CardContent>;
                <CardFooter>;
</CardFooter>"
                  <Skeleton className="h-9 w-28 bg-zion-blue-light rounded-md" />;"
</Skeleton>
                </CardFooter>;
              </Card>;
            </div>;"
          <div className="space-y-4">;"
</div>"
                <Card key={transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;"
</Card>"
                  <CardHeader className="pb-3">;"
</CardHeader>"
                    <div className="flex justify-between items-start">;"
</div>
                      <div>;
</div>"
                        <CardTitle className="text-white text-lg">;"
</CardTitle>
                        </CardTitle>;"
                        <CardDescription className="text-zion-slate-light">;"
</CardDescription>"
                            <span>Payment to <span className="text-zion-purple">{counterpartyName}</span></span>;""
                            <span>Payment from <span className="text-zion-cyan">Client</span></span>;"

                        </CardDescription>;
                      </div>;
                    </div>;

                  </CardHeader>;"
                  <CardContent className="pb-3">;"
</CardContent>"
                    <div className="flex justify-between items-center mb-1">;"
</div>"
                      <span className="text-zion-slate-light">Amount:</span>;""
                      <span className="text-white font-medium text-lg">;"
</span>
                      </span>;
                    </div>;"
                    <div className="flex justify-between items-center text-sm">;"
</div>"
                      <span className="text-zion-slate-light">Date:</span>;""
                      <span className="text-zion-slate-light">;"
</span>
                      </span>;
                    </div>;"
                      <div className="flex justify-between items-center text-sm mt-1">;"
</div>"
                        <span className="text-zion-slate-light">;"
</span>
                        </span>;"
                        <span className="text-zion-slate-light">;"
</span>"
const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'> ('all');'
const {
  // TODO: Implement
}
  data: transactions, isLoading, error, refetch;
}= useQuery ({'
  queryKey: ['transactions', user?.id, filter];')

queryFn: async () => {
  if (!user) return [];}
return data as Transaction[] }
};
enabled: !!user;
});
if (error) throw error;
refetch () 

}catch (error) {
  
  const { data: transactions, isLoading, error, refetch } = useQuery({'
    queryKey: ['transactions', user?.id, filter],')
    queryFn: async () => {
      if (!user) return [],'
import React, {_useState} from "react";"
interface Transaction {_id: string;,

  user_id: string;
  provider_id: string;,
  service_id: string;
  amount: number;,
  currency: string;"
  status: 'pending' | 'completed' | 'refunded' | 'cancelled';',
  in_escrow: boolean;
  created_at: string;
  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
  provider?: {

      

      
      toast({'
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
    }


  },
  


  const getStatusBadge = (status: string, inEscrow: boolean) => {
    switch(status) {"
      case 'pending':'
        return inEscrow ? ('
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">"
</Badge>"
            <Clock className="w-3 h-3 mr-1" /> In Escrow;"
</Clock>
          </Badge>"
          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500">"
</Badge>"
            <Clock className="w-3 h-3 mr-1" /> Pending;"
</Clock>
          </Badge>"
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">"
</Badge>"
            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed;"
</CheckCircle2>
          </Badge>"
          <Badge variant="outline" className="bg-purple-500/20 text-purple-500 border-purple-500">"
</Badge>"
            <RefreshCcw className="w-3 h-3 mr-1" /> Refunded;"
</RefreshCcw>
          </Badge>"
          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">"
</Badge>"
            <XCircle className="w-3 h-3 mr-1" /> Cancelled;"
</XCircle>
          </Badge>"
          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">"
</Badge>"
            <AlertCircle className="w-3 h-3 mr-1" /> Unknown;"
</AlertCircle>
          </Badge>"
      <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">;"
</div>"
        <div className="text-center text-zion-slate-light">;"
</div>"
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;"
</AlertCircle>"
          <h3 className="font-bold text-xl text-white mb-2">Failed to load transactions</h3>;""
          <p className="mb-4">{error && error.message}</p>;")"
          <Button onClick={() => refetch()} variant="outline">;"
</Button>"
            <RefreshCcw className="mr-2 h-4 w-4" />;"
</RefreshCcw>
          </Button>;
        </div>;
      </div>;"
                <Card key={transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">"
</Card>"
                  <CardHeader className="pb-3">"
</CardHeader>"
                    <div className="flex justify-between items-start">"
</div>
                      <div>
</div>"
                        <CardTitle className="text-white text-lg">"
</CardTitle>
                        </CardTitle>"
                        <CardDescription className="text-zion-slate-light">"
</CardDescription>"
                            <span>Payment to <span className="text-zion-purple">{counterpartyName}</span></span>""
                            <span>Payment from <span className="text-zion-cyan">Client</span></span>""
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">;"
</Badge>"
            <Clock className="w-3 h-3 mr-1" /> In Escrow;"
</Clock>
          </Badge>;"
          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500">;"
</Badge>"
            <Clock className="w-3 h-3 mr-1" /> Pending;"
</Clock>
          </Badge>;"
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">;"
</Badge>"
            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed;"
</CheckCircle2>
          </Badge>;"
          <Badge variant="outline" className="bg-purple-500/20 text-purple-500 border-purple-500">;"
</Badge>"
            <RefreshCcw className="w-3 h-3 mr-1" /> Refunded;"
</RefreshCcw>
          </Badge>;"
          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">;"
</Badge>"
            <XCircle className="w-3 h-3 mr-1" /> Cancelled;"
</XCircle>
          </Badge>;"
          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">;"
</Badge>"
            <AlertCircle className="w-3 h-3 mr-1" /> Unknown;"
</AlertCircle>
          </Badge>;"
      <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">;"
</div>"
        <div className="text-center text-zion-slate-light">;"
</div>"
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;"
</AlertCircle>"
          <h3 className="font-bold text-xl text-white mb-2">Failed to load transactions</h3>;""
          <p className="mb-4">{error.message}</p>;""
          <Button onClick={() => refetch()} variant="outline">;"
</Button>"
            <RefreshCcw className="mr-2 h-4 w-4" />;"
</RefreshCcw>
          </Button>;
        </div>;
      </div>;"
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden">;"
</div>"
      <div className="p-6">;"
</div>"
        <div className="flex items-center justify-between mb-6">;"
</div>"
          <h2 className="text-2xl font-bold text-white">Transaction History</h2>;""
          <div className="flex space-x-2">;"
</div>
            <Button;"
              size="sm"""
              variant={filter === 'all' ? 'default' : 'outline'}''
              onClick={() => setFilter('all')}'
</Button>
            </Button>;
            <Button;'
              size="sm"""
              variant={filter === 'pending' ? 'default' : 'outline'}''
              onClick={() => setFilter('pending')}'
</Button>
            </Button>;
            <Button;'
              size="sm"""
              variant={filter === 'completed' ? 'default' : 'outline'}''
              onClick={() => setFilter('completed')}'
</Button>
            </Button>;
            <Button;'
              size="sm"""
              variant={filter === 'escrow' ? 'default' : 'outline'}''
              onClick={() => setFilter('escrow')}'
</Button>
            </Button>;
          </div>;
        </div>;'
            <div key={i} className="mb-4">;"
</div>"
              <Card className="bg-zion-blue-dark border-zion-blue-light">;"
</Card>"
                <CardHeader className="pb-2">;"
</CardHeader>"
                  <Skeleton className="h-6 w-3/4 bg-zion-blue-light" />;"
</Skeleton>"
                  <Skeleton className="h-4 w-1/4 bg-zion-blue-light mt-2" />;"
</Skeleton>
                </CardHeader>;
                <CardContent>;
</CardContent>"
                  <div className="flex justify-between mb-2">;"
</div>"
                    <Skeleton className="h-5 w-1/3 bg-zion-blue-light" />;"
</Skeleton>"
                    <Skeleton className="h-5 w-1/4 bg-zion-blue-light" />;"
</Skeleton>
                  </div>;"
                  <Skeleton className="h-4 w-2/3 bg-zion-blue-light" />;"
</Skeleton>
                </CardContent>;
                <CardFooter>;
</CardFooter>"
                  <Skeleton className="h-9 w-28 bg-zion-blue-light rounded-md" />;"
</Skeleton>
                </CardFooter>;
              </Card>;
            </div>;"
          <div className="space-y-4">;"
</div>"
                <Card key={transaction && transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;"
</Card>"
                  <CardHeader className="pb-3">;"
</CardHeader>"
                    <div className="flex justify-between items-start">;"
</div>
                      <div>;
</div>"
                        <CardTitle className="text-white text-lg">;"
</CardTitle>
                        </CardTitle>;"
                        <CardDescription className="text-zion-slate-light">;"
</CardDescription>"
                            <span>Payment to <span className="text-zion-purple">{counterpartyName}</span></span>;""
                            <span>Payment from <span className="text-zion-cyan">Client</span></span>;"

                        </CardDescription>
                      </div>
                    </div>

                  </CardHeader>"
                  <CardContent className="pb-3">"
</CardContent>"
                    <div className="flex justify-between items-center mb-1">"
</div>"
                      <span className="text-zion-slate-light">Amount:</span>""
                      <span className="text-white font-medium text-lg">"
</span>
                      </span>
                    </div>"
                    <div className="flex justify-between items-center text-sm">"
</div>"
                      <span className="text-zion-slate-light">Date:</span>""
                      <span className="text-zion-slate-light">"
</span>
                      </span>
                    </div>"
                      <div className="flex justify-between items-center text-sm mt-1">"
</div>"
                        <span className="text-zion-slate-light">"
</span>
                        </span>"
                        <span className="text-zion-slate-light">"
</span>
                        </CardDescription>;
                      </div>;
                    </div>;
                  </CardHeader>;"
                  <CardContent className="pb-3">;"
</CardContent>"
                    <div className="flex justify-between items-center mb-1">;"
</div>"
                      <span className="text-zion-slate-light">Amount:</span>;""
                      <span className="text-white font-medium text-lg">;"
</span>
                      </span>;
                    </div>;"
                    <div className="flex justify-between items-center text-sm">;"
</div>"
                      <span className="text-zion-slate-light">Date:</span>;""
                      <span className="text-zion-slate-light">;"
</span>
                      </span>;
                    </div>;"
                      <div className="flex justify-between items-center text-sm mt-1">;"
</div>"
                        <span className="text-zion-slate-light">;"
</span>
                        </span>;"
                        <span className="text-zion-slate-light">;"
</span>
    <div className=&quot;bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden&quot;>
</div>
      <div className=&quot;p-6&quot;>
</div>
        <div className=&quot;flex items-center justify-between mb-6&quot;>
</div>
          <h2 className=&quot;text-2xl font-bold text-white&quot;>Transaction History</h2>          
          <div className=&quot;flex space-x-2&quot;>
</div>
            <Button;
              size=&quot;sm&quot; "
              variant={filter === 'all' ? 'default' : 'outline'}''
              onClick={() => setFilter('all')}'
</Button>
            </Button>
            <Button;
              size=&quot;sm&quot; '
              variant={filter === 'pending' ? 'default' : 'outline'}''
              onClick={() => setFilter('pending')}'
</Button>
            </Button>
            <Button;
              size=&quot;sm&quot; '
              variant={filter === 'completed' ? 'default' : 'outline'}''
              onClick={() => setFilter('completed')}'
</Button>
            </Button>
            <Button;
              size=&quot;sm&quot; '
              variant={filter === 'escrow' ? 'default' : 'outline'}''
              onClick={() => setFilter('escrow')}'
</Button>
            </Button>
          </div>
        </div>
            <div key={i} className=&quot;mb-4&quot;>
</div>
              <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
</Card>
                <CardHeader className=&quot;pb-2&quot;>
</CardHeader>
                  <Skeleton className=&quot;h-6 w-3/4 bg-zion-blue-light&quot; />
</Skeleton>
                  <Skeleton className=&quot;h-4 w-1/4 bg-zion-blue-light mt-2&quot; />                </CardHeader>
</Skeleton>
                <CardContent>
</CardContent>
                  <div className=&quot;flex justify-between mb-2&quot;>
</div>
                    <Skeleton className=&quot;h-5 w-1/3 bg-zion-blue-light&quot; />
</Skeleton>
                    <Skeleton className=&quot;h-5 w-1/4 bg-zion-blue-light&quot; />
</Skeleton>
                  </div>
                  <Skeleton className=&quot;h-4 w-2/3 bg-zion-blue-light&quot; />
</Skeleton>
                </CardContent>
                <CardFooter>
</CardFooter>
                  <Skeleton className=&quot;h-9 w-28 bg-zion-blue-light rounded-md&quot; />
</Skeleton>
                </CardFooter>
              </Card>
            </div>
          <div className=&quot;space-y-4&quot;>
</div>
                <Card key={transaction.id} className=&quot;bg-zion-blue-dark border-zion-blue-light overflow-hidden&quot;>
</Card>
                  <CardHeader className=&quot;pb-3&quot;>
</CardHeader>
                    <div className=&quot;flex justify-between items-start&quot;>
</div>
                      <div>
</div>
                        <CardTitle className=&quot;text-white text-lg&quot;>
</CardTitle>
                        </CardTitle>
                        <CardDescription className=&quot;text-zion-slate-light&quot;>
</CardDescription>
                            <span>Payment to <span className=&quot;text-zion-purple&quot;>{counterpartyName}</span></span>                          ) : (
                            <span>Payment from <span className=&quot;text-zion-cyan&quot;>Client</span></span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className=&quot;pb-3&quot;>
</CardContent>
                    <div className=&quot;flex justify-between items-center mb-1&quot;>
</div>
                      <span className=&quot;text-zion-slate-light&quot;>Amount:</span>
                      <span className=&quot;text-white font-medium text-lg&quot;>
</span>
                      </span>
                    </div>
                    
                    <div className=&quot;flex justify-between items-center text-sm&quot;>
</div>
                      <span className=&quot;text-zion-slate-light&quot;>Date:</span>
                      <span className=&quot;text-zion-slate-light&quot;>
</span>
                      </span>
                    </div>
                      <div className=&quot;flex justify-between items-center text-sm mt-1&quot;>
</div>
                        <span className=&quot;text-zion-slate-light&quot;>
</span>
                        </span>
                        <span className=&quot;text-zion-slate-light&quot;>
</span>
                        </span>;
                      </div>;
                  </CardContent>;'
                  <CardFooter className="flex justify-end gap-2 bg-zion-blue/20 pt-3">;"
</CardFooter>
                      <Button;)"
                        onClick={() => handleManageTransaction(transaction && transaction.id, 'release')}'
</Button>'
                        <CheckCircle2 className="mr-1 h-4 w-4" /> Release Funds;"
</CheckCircle2>
                      </Button>;
                      <Button;"
                        onClick={() => handleManageTransaction(transaction && transaction.id, 'refund')}'
</Button>'
                        <RefreshCcw className="mr-1 h-4 w-4" /> Request Refund;"
</RefreshCcw>
                      </Button>;
                      <Button;"
                        onClick={() => handleManageTransaction(transaction && transaction.id, 'cancel')}'
</Button>'
                        <XCircle className="mr-1 h-4 w-4" /> Cancel;"
</XCircle>
                      </Button>;
                  </CardFooter>;
                </Card>;
          </div>;"
          <div className="text-center py-12 border border-dashed border-zion-blue-light rounded-lg">;"
</div>"
            <div className="mx-auto w-16 h-16 bg-zion-blue-light/30 rounded-full flex items-center justify-center mb-4">;"
</div>"
              <ArrowRight className="h-8 w-8 text-zion-slate-light" />;"
</ArrowRight>"
              <ArrowLeft className="h-8 w-8 text-zion-slate-light -ml-4" />;"
</ArrowLeft>
            </div>;"
            <h3 className="text-xl font-medium text-white mb-2">No transactions found</h3>;""
            <p className="text-zion-slate-light max-w-md mx-auto">;"
</p>
            </p>;
          </div>;"
          <Badge variant="outline" className="bg - yellow - 500 / 20 text - yellow - 500 border - yellow - 500">;"
</Badge>"
            <Clock className="w - 3 h - 3 mr - 1" /> In Escrow;"
</Clock>
          </Badge>) : ("
          <Badge variant="outline" className="bg - blue - 500 / 20 text - blue - 500 border - blue - 500">;"
</Badge>"
            <Clock className="w - 3 h - 3 mr - 1" /> Pending;"
</Clock>)
          </Badge>);"
          <Badge variant="outline" className="bg - green - 500 / 20 text - green - 500 border - green - 500">;"
</Badge>"
            <CheckCircle2 className="w - 3 h - 3 mr - 1" /> Completed;"
</CheckCircle2>
          </Badge>);"
          <Badge variant="outline" className="bg - purple - 500 / 20 text - purple - 500 border - purple - 500">;"
</Badge>"
            <RefreshCcw className="w - 3 h - 3 mr - 1" /> Refunded;"
</RefreshCcw>
          </Badge>);"
          <Badge variant="outline" className="bg - red - 500 / 20 text - red - 500 border - red - 500">;"
</Badge>"
            <XCircle className="w - 3 h - 3 mr - 1" /> Cancelled;"
</XCircle>
          </Badge>),"
          <Badge variant="outline" className="bg - gray - 500 / 20 text - gray - 500 border - gray - 500">;"
</Badge>"
            <AlertCircle className="w - 3 h - 3 mr - 1" /> Unknown;"
</AlertCircle>
          </Badge>);"
      <div className="bg - zion - blue - dark p - 6 rounded - lg border border - zion - blue - light">;"
</div>"
        <div className="text - center text - zion - slate - light">;"
</div>"
          <AlertCircle className="mx - auto h - 12 w - 12 text - red - 500 mb - 4" />;"
</AlertCircle>"
          <h3 className="font - bold text - xl text - white mb - 2">Failed to load transactions</h3>;""
          <p className="mb - 4">{error.message}</p>;""
          <Button on_click={() => refetch ()} variant="outline">;"
</Button>"
            <RefreshCcw className="mr - 2 h - 4 w - 4" />;"
</RefreshCcw>
          </Button>;
        </div>;
      </div>);"
    <div className="bg - zion - blue - dark rounded - lg border border - zion - blue - light overflow - hidden">;"
</div>"
      <div className="p - 6">;"
</div>"
        <div className="flex items - center justify - between mb - 6">;"
</div>"
          <h2 className="text - 2xl font - bold text - white">Transaction History</h2>;""
          <div className="flex space - x-2">;"
</div>
            <Button;"
              size="sm";""
              variant={filter === 'all' ? 'default' : 'outline'}''
              on_click={() => set_filter ('all')}'
</Button>
            </Button>;
            <Button;'
              size="sm";""
              variant={filter === 'pending' ? 'default' : 'outline'}''
              on_click={() => set_filter ('pending')}'
</Button>
            </Button>;
            <Button;'
              size="sm";""
              variant={filter === 'completed' ? 'default' : 'outline'}''
              on_click={() => set_filter ('completed')}'
</Button>
            </Button>;
            <Button;'
              size="sm";""
              variant={filter === 'escrow' ? 'default' : 'outline'}''
              on_click={() => set_filter ('escrow')}'
</Button>
            </Button>;
          </div>;
        </div>;'
            <div key={i} className="mb - 4">;"
</div>"
              <Card className="bg - zion - blue - dark border - zion - blue - light">;"
</Card>"
                <CardHeader className="pb - 2">;"
</CardHeader>"
                  <Skeleton className="h - 6 w - 3/4 bg - zion - blue - light" />;"
</Skeleton>"
                  <Skeleton className="h - 4 w - 1/4 bg - zion - blue - light mt - 2" />;"
</Skeleton>
                </CardHeader>;
                <CardContent>;
</CardContent>"
                  <div className="flex justify - between mb - 2">;"
</div>"
                    <Skeleton className="h - 5 w - 1/3 bg - zion - blue - light" />;"
</Skeleton>"
                    <Skeleton className="h - 5 w - 1/4 bg - zion - blue - light" />;"
</Skeleton>
                  </div>;"
                  <Skeleton className="h - 4 w - 2/3 bg - zion - blue - light" />;"
</Skeleton>
                </CardContent>;
                <CardFooter>;
</CardFooter>"
                  <Skeleton className="h - 9 w - 28 bg - zion - blue - light rounded - md" />;"
</Skeleton>
                </CardFooter>;
              </Card>;
            </div>))) : transactions && transactions.length > 0 ? ("
          <div className="space - y-4">;"
</div>"
                <Card key={transaction.id} className="bg - zion - blue - dark border - zion - blue - light overflow - hidden">;"
</Card>"
                  <CardHeader className="pb - 3">;"
</CardHeader>"
                    <div className="flex justify - between items - start">;"
</div>
                      <div>;
</div>"
                        <CardTitle className="text - white text - lg">;"
</CardTitle>
                        </CardTitle>;"
                        <CardDescription className="text - zion - slate - light">;"
</CardDescription>)"
                            <span > Payment to <span className="text - zion - purple">{counterparty_name}</span></span>) : (")"
                            <span > Payment from <span className="text - zion - cyan">Client</span></span>)}"

                        </CardDescription>;
                      </div>;
                    </div>;

                  </CardHeader>;"
                  <CardContent className="pb - 3">;"
</CardContent>"
                    <div className="flex justify - between items - center mb - 1">;"
</div>"
                      <span className="text - zion - slate - light">Amount:</span>;""
                      <span className="text - white font - medium text - lg">;"
</span>
                      </span>;
                    </div>;"
                    <div className="flex justify - between items - center text - sm">;"
</div>"
                      <span className="text - zion - slate - light">Date:</span>;""
                      <span className="text - zion - slate - light">;"
</span>
                      </span>;
                    </div>;"
                      <div className="flex justify - between items - center text - sm mt - 1">;"
</div>"
                        <span className="text - zion - slate - light">;"
</span>
                        </span>;"
                        <span className="text - zion - slate - light">;"
</span>
                        </span>;
                      </div>)}
                  </CardContent>;"
                  <CardFooter className="flex justify - end gap - 2 bg - zion - blue / 20 pt - 3">;"
</CardFooter>
                      <Button;"
                        on_click={() => handleManageTransaction (transaction.id, 'release')}'
</Button>'
                        <CheckCircle2 className="mr - 1 h - 4 w - 4" /> Release Funds;"
</CheckCircle2>
                      </Button>)}
                      <Button;"
                        on_click={() => handleManageTransaction (transaction.id, 'refund')}'
</Button>'
                        <RefreshCcw className="mr - 1 h - 4 w - 4" /> Request Refund;"
</RefreshCcw>
                      </Button>)}
                      <Button;"
                        on_click={() => handleManageTransaction (transaction.id, 'cancel')}'
</Button>'
                        <XCircle className="mr - 1 h - 4 w - 4" /> Cancel;"
</XCircle>
                      </Button>)}
                  </CardFooter>;
                </Card>);
          </div>) : ("
          <div className="text - center py - 12 border border - dashed border - zion - blue - light rounded - lg">;"
</div>"
            <div className="mx - auto w - 16 h - 16 bg - zion - blue - light / 30 rounded - full flex items - center justify - center mb - 4">;"
</div>"
              <ArrowRight className="h - 8 w - 8 text - zion - slate - light" />;"
</ArrowRight>"
              <ArrowLeft className="h - 8 w - 8 text - zion - slate - light -ml - 4" />;"
</ArrowLeft>
            </div>;"
            <h3 className="text - xl font - medium text - white mb - 2">No transactions found</h3>;""
            <p className="text - zion - slate - light max - w-md mx - auto">;"
</p>
            </p>;)
          </div>)}
      </div>;
    </div>);
                        </span>
                      </div>
                  </CardContent>"
                  <CardFooter className="flex justify-end gap-2 bg-zion-blue/20 pt-3">"
</CardFooter>
                      <Button;"
                        onClick={() => handleManageTransaction(transaction.id, 'release')}'
</Button>'
                        <CheckCircle2 className="mr-1 h-4 w-4" /> Release Funds;"
</CheckCircle2>
                      </Button>
                      <Button;"
                        onClick={() => handleManageTransaction(transaction.id, 'refund')}'
</Button>'
                        <RefreshCcw className="mr-1 h-4 w-4" /> Request Refund;"
</RefreshCcw>
                      </Button>
                      <Button;"
                        onClick={() => handleManageTransaction(transaction.id, 'cancel')}'
</Button>'
                        <XCircle className="mr-1 h-4 w-4" /> Cancel;"
</XCircle>
                      </Button>
                  </CardFooter>
                </Card>
          </div>"
          <div className="text-center py-12 border border-dashed border-zion-blue-light rounded-lg">"
</div>"
            <div className="mx-auto w-16 h-16 bg-zion-blue-light/30 rounded-full flex items-center justify-center mb-4">"
</div>"
              <ArrowRight className="h-8 w-8 text-zion-slate-light" />"
</ArrowRight>"
              <ArrowLeft className="h-8 w-8 text-zion-slate-light -ml-4" />"
</ArrowLeft>
            </div>"
            <h3 className="text-xl font-medium text-white mb-2">No transactions found</h3>""
            <p className="text-zion-slate-light max-w-md mx-auto">"
</p>
            </p>
          </div>
      </div>
    </div>
      </div>;
    </div>;"

