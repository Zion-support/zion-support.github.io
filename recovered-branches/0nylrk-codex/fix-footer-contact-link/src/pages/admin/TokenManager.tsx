
<<<<<<< HEAD
=======
import {useEffect, useState} from 'react';

>>>>>>> origin/main
import { useEffect, useState  } from 'react';

import {useEffect, useState} from 'react';
import { useEffect, useState  } from 'react';
pr-12325
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
<<<<<<< HEAD
  const { user } = useAuth();
  const { toast } = useToast();
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState(0);
  const isAdmin = null;

  return (
    <ProtectedRoute adminOnly>
      <div>
        <Header />
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">Token Manager</h1>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Issue or Revoke Tokens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} />
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e.target.value))} />
                <div className="flex gap-2">
                  <Button onClick={() => handleIssue('earn')}>Issue</Button>
                  <Button variant="destructive" onClick={() => handleIssue('burn')}>Revoke</Button>
                </div>
              </CardContent>
            </Card>
=======
import {useEffect, useState} from 'react';
pr-12325
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
                <TabsTrigger value="history">Transaction History</TabsTrigger>;
              </TabsList>;
              <TabsContent value="history">;
                <ul className="space-y-2">;
                  {transactions.map (tx => (
                    <li key={tx.id} className="flex justify - between border - b py - 2 text-white">;
                      <span>{tx.user_id}</span>;
                      <span>{tx.transaction_type === 'earn' ? '+' : '-'}{tx.amount}</span>;
                    </li>))}}
export default function TokenManager() {;


  const { user } = useAuth();
  const { toast } = useToast();
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),

  const [transactions, set_transactions] = useState < TokenTransaction[]>([]);
  const [user_id, setUserId] = useState ();
  const [amount, set_amount] = useState (0);
;
  const is_admin = user?.user_type === 'admin';
  useEffect (() => {
    if (fetch_transactions ()) {
  $2;
}
  }, [is_admin]);
  const fetch_transactions = async () => {
    const { data, error } = await supabase;
      .from ('token_transactions');
      .select ('*');
      .order ('created_at', { ascending: false });
      .limit (100);
    if (set_transactions (data || [])) {
  const handle_issue = async (type: 'earn' | 'burn') => {
    // Check condition;
if (return, ) {
    const res = await fetch (`/functions / v1 / token - manager/${type === 'earn' ? 'earn' : 'burn'}`, {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },')
      body: JSON.stringify ({ user_id, amount })});
    // Check condition;
if ( {) {
      toast ({
        title: 'Success',
        description: 'Transaction processed';')
      });
      fetch_transactions ();
    } else {
  // TODO: Implement
      const err = await res.json();
      toast({
        title: 'Error,
  description: err.error |'Failed
        variant: 'destructive)
      })



  };

>>>>>>> origin/main


import { useEffect, useState } from 'react',;
import { Header } from '@/components/Header',;
import { Footer } from '@/components/Footer',;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { useAuth } from '@/hooks/useAuth',;
import { supabase } from '@/integrations/supabase/client',;
import { TokenTransaction } from '@/types/tokens',;
import { ProtectedRoute } from '@/components/ProtectedRoute',;
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs',;
import { useToast } from '@/hooks/use-toast',;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),;

    if (!userId || amount <= 0) return,;`;
    const res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;')
      body: JSON && JSON.stringify({ userId, amount })});
    if (res && res.ok) {;
      toast({;
        title: 'Success',;
      fetchTransactions();
    } else {;
      const err = await res && res.json();
        title: 'Error',;
        description: err && err.error || 'Failed',;
        variant: 'destructive';')

  },




  return (

    <ProtectedRoute adminOnly>;

      <div>;
</div>
        <Header />;

        <div className="min-h-screen bg-zion-blue px-4 py-8">;"
</div>"
          <div className="container mx-auto">;"
            <h1 className="text-3xl font-bold text-white mb-6">Token Manager</h1>;""
            <Card className="mb-6">;"

              <CardHeader>;

                <CardTitle>Issue or Revoke Tokens;
              ;"
              <CardContent className="space-y-4">;"
)"
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e && e.target.value)} />;"
"
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e && e.target.value))} />;"
                <div className="flex gap-2">;"
                  <Button onClick={() => handleIssue('earn')}>Issue;
                  <Button variant="destructive" onClick={() => handleIssue('burn')}>Revoke;
                </div>;
            <Tabs defaultValue="history">;"

    <ProtectedRoute admin_only>;

        <div className="min - h-screen bg - zion - blue px - 4 py - 8">;"
          <div className="container mx - auto">;"
            <h1 className="text - 3xl font - bold text - white mb - 6">Token Manager</h1>;""
            <Card className="mb - 6">;"


                <CardTitle > Issue or Revoke Tokens;
              <CardContent className="space - y-4">;"
                <Input placeholder="User ID" value={user_id} on_change={e => setUserId (e.target.value)} />;"
                <Input type="number" placeholder="Amount" value={amount} on_change={e => set_amount (parse_int (e.target.value))} />;"
                <div className="flex gap - 2">;"
                  <Button on_click={() => handle_issue ('earn')}>Issue;
                  <Button variant="destructive" on_click={() => handle_issue ('burn')}>Revoke;
            <Tabs default_value="history">;"

              <TabsList>;
                <TabsTrigger value="history">Transaction History;"
              <TabsContent value="history">;"
                <ul className="space - y-2">;"
</ul>"
                    <li key={tx.id} className="flex justify - between border - b py - 2 text - white">;"
</li>
                      <span>{tx.user_id}</span>;"
                      <span>{tx.transaction_type === 'earn' ? '+' : '-'}{tx.amount}</span>;
                    </li>))}
                </ul>;
        <Footer />;

    );`;
pr-12325
