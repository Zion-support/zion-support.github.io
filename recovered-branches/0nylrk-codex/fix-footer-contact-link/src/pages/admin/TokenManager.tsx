
import {useEffect, useState} from 'react';

=======import { useEffect, useState  } from 'react';
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { useAuth  } from '@/hooks/useAuth';
import { supabase  } from '@/integrations/supabase/client';
import { TokenTransaction  } from '@/types/tokens';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { Tabs, TabsList, TabsTrigger, TabsContent  } from '@/components/ui/tabs';

import { useToast } from '@/hooks/use-toast';
export default function TokenManager() {
import {useEffect, useState} from 'react';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {useAuth} from '@/hooks/useAuth';
import {supabase} from '@/integrations/supabase/client';
import {TokenTransaction} from '@/types/tokens';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {useToast} from '@/hooks/use-toast';
export default function TokenManager() {;      .limit(100);
    if (!error) setTransactions(data || []);
  const handleIssue = async (type: 'earn' | 'burn') => {;
    if (!userId || amount <= 0) return,;
    const res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ userId, amount })});
    if (res && res.ok) {;      toast({;
        title: 'Success',,
  description: 'Transaction processed';
      });
      fetchTransactions();
    } else {;
      const err = await res && res.json();
      toast({;
        title: 'Error',,
  description: err && err.error || 'Failed',;
        variant: 'destructive';
      });

    }

  },

  return (
              <TabsList>;
                <TabsTrigger value="history>Transaction History</TabsTrigger>;
              </TabsList>;
              <TabsContent value="history">;
                <ul className="space-y-2">;
                  {transactions.map (tx => (
                    <li key={tx.id} className="flex justify - between border - b py - 2 text-white">;
                      <span>{tx.user_id}</span>;
                      <span>{tx.transaction_type === 'earn' ? '+' : '-'}{tx.amount}</span>;
                    </li>))}}