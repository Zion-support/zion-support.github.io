<<<<<<< HEAD
=======
import {useEffect, useState} from 'react';

import { useEffect, useState  } from react';
import { useEffect, useState  } from 'react;
import { Header  } from @/components/Header';
import { Footer  } from '@/components/Footer;
import { Card, CardContent, CardHeader, CardTitle  } from @/components/ui/card';
import { Button  } from '@/components/ui/button;
import { Input  } from @/components/ui/input';
import { useAuth  } from '@/hooks/useAuth;
import { supabase  } from @/integrations/supabase/client';
import { TokenTransaction  } from '@/types/tokens;
import { ProtectedRoute  } from @/components/ProtectedRoute';
import { Tabs, TabsList, TabsTrigger, TabsContent  } from '@/components/ui/tabs;
import { useToast } from @/hooks/use-toast';
export default function TokenManager() {
  const { user } = useAuth($2);
  const { toast } = useToast($2);
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),
  const [userId, setUserId] = useState($2);
  const [amount, setAmount] = useState($2);
  const isAdmin = $2;
  useEffect(() => {
    if (isAdmin) fetchTransactions()
  }, [isAdmin]),

  const fetchTransactions = async () => {
    const { data, error } = await supabase
      .from('token_transactions')
      .select('*')
      .order('created_at', { ascending: false})
      .limit($2);
    if (!error) setTransactions(data || [])
  },

  const handleIssue = $2;
    const res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, amount })}),
    if (res.ok) {
      toast($2);
      fetchTransactions()
    } else {
      const err = await res.json($2);
      toast({
import { useEffect, useState  } from 'react';

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

import {useEffect, useState} from 'react';
>>>>>>> origin/cursor/delete-old-data-records-6bba


  const { user } = useAuth();
  const { toast } = useToast();
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),'
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState(0);
<<<<<<< HEAD


=======

'
import {Header} from '@/components / Header';'
import {Footer} from '@/components / Footer';'
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';'
import {Button} from '@/components / ui / button';'
import {Input} from '@/components / ui / input';'
import {use_auth} from '@/hooks / use_auth';'
import {supabase} from '@/integrations / supabase / client';'
import {TokenTransaction} from '@/types / tokens';'
import {ProtectedRoute} from '@/components / ProtectedRoute';'
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components / ui / tabs';'

>>>>>>> origin/cursor/delete-old-data-records-6bba
import {use_toast} from '@/hooks / use - toast';
export default /**;
 * TokenManager - Function description;
 */
function TokenManager() {}
  const { user } = use_auth ();
  const { toast } = use_toast ();
  const [transactions, set_transactions] = useState < TokenTransaction[]>([]);'
  const [user_id, setUserId] = useState ('');
  const [amount, set_amount] = useState (0);
;'
  const is_admin = user?.user_type === 'admin';
;
  useEffect (() => {}
    if (fetch_transactions ()) {}
  $2;
}
  }, [is_admin]);
;
  const fetch_transactions = async () => {}
    const { data, error } = await supabase;'
      .from ('token_transactions');'
      .select ('*');'
      .order ('created_at', { ascending: false });
      .limit (100);
    if (set_transactions (data || [])) {}
  $2;
}
  }
;'
  const handle_issue = async (type: 'earn' | 'burn') => {}
    // Check condition;
if (return, ) {}
  $2;
}'
    const res = await fetch (`/functions / v1 / token - manager/${type === 'earn' ? 'earn' : 'burn'}`, {'
      method: 'POST','
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ user_id, amount })});
    // Check condition;
if ( {) {}
  $2;
}
      toast ({'
        title: 'Success','
        description: 'Transaction processed';


<<<<<<< HEAD
  const isAdmin = user?.userType === 'admin';
  useEffect(() => {
    if (isAdmin) fetchTransactions()
  }, [isAdmin]);
  const fetchTransactions = async () => {
    const { data, error } = await supabase
      .from('token_transactions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);
    if (!error) setTransactions(data |[])
  }
  const handleIssue = async (type: 'earn' | 'burn') => {
    if (!userId |amount <= 0) return
    const res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ userId, amount })});
    if (res.ok) {
      toast({
        title: 'Success'
        description: 'Transaction processed'
      });
      fetchTransactions()
    } else {
      const err = await res.json();
      toast({
        title: 'Error'
        description: err.error |'Failed'
=======
    } else {}
      const err = await res.json();
      toast({'
        title: 'Error''
        description: err.error |'Failed''
>>>>>>> origin/cursor/delete-old-data-records-6bba

        variant: 'destructive'
      })
    }

<<<<<<< HEAD


=======
    }

  };

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
export default function TokenManager() { return null; }
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),;'
  const [userId, setUserId] = useState(''),;
  const [amount, setAmount] = useState(0),;'

  const isAdmin = user?.userType === 'admin',;
<<<<<<< HEAD


  useEffect(() => {;
    if (isAdmin) fetchTransactions();
  }, [isAdmin]);


=======
      });
      fetch_transactions ();
    } else {
  useEffect(() => {;
    if (isAdmin) fetchTransactions();
  }, [isAdmin]);
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
;
export default function TokenManager() {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),;
  const [userId, setUserId] = useState(''),;
  const [amount, setAmount] = useState(0),;
;
  const isAdmin = user?.userType === 'admin',;
;
  useEffect(() => {;
    if (isAdmin) fetchTransactions(),;
  }, [isAdmin]),;
;
  useEffect(() => {;
    if (isAdmin) fetchTransactions();
  }, [isAdmin]),;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const fetchTransactions = async () => {;
    const { data, error } = await supabase;
      .from('token_transactions');
      .select('*');
      .order('created_at', { ascending: false });
<<<<<<< HEAD

      .limit(100);
    if (!error) setTransactions(data || []);
  };


  const handleIssue = async (type: 'earn' | 'burn') => {;
    if (!userId || amount <= 0) return,;'`
    const res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {;'
      method: 'POST',;'
      headers: { 'Content-Type': 'application/json' },;


=======
      .limit(100),;
    if (!error) setTransactions(data || []);
  },;
      body: JSON && JSON.stringify({ userId, amount })});
    if (res && res.ok) {;      toast({;
        title: 'Success',,
  description: 'Transaction processed';
>>>>>>> origin/cursor/delete-old-data-records-6bba
      });

    }

  },

  return (

<<<<<<< HEAD


=======
}
  return (
      .order('created_at', { ascending:false });
      .limit(100),;
    if (!error) setTransactions(data || []),;
  },;
;
  const handleIssue = async (type:'earn' | 'burn') => {;
    if (!userId || amount <= 0) return,;
    const res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' :'burn'}`, {;
      method:'POST',;
      headers:{ 'Content-Type':'application/json' },;
      body:JSON.stringify({ userId, amount })}),;
    if (res.ok) {;
      toast({;
        title:'Success',;
        description:'Transaction processed';
      }),;
      fetchTransactions(),;
    } else {;
      const err = await res.json(),;
      toast({;
        title:'Error',;
        description:err.error || 'Failed',;
        variant:'destructive';
      }),;
    }
  },;
;
  return (;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <ProtectedRoute adminOnly>;
      <div>;
        <Header />;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;
          <div className="container mx-auto">;
            <h1 className="text-3xl font-bold text-white mb-6">Token Manager</h1>;
            <Card className="mb-6">;
              <CardHeader>;
                <CardTitle>Issue or Revoke Tokens</CardTitle>;
              </CardHeader>;
              <CardContent className="space-y-4">;
<<<<<<< HEAD

                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e && e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e && e.target.value))} />;
=======
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e && e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e && e.target.value))} />;
<Input placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e.target.value))} />;
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e && e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e && e.target.value))} />;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <div className="flex gap-2">;
                  <Button onClick={() => handleIssue('earn')}>Issue</Button>;
                  <Button variant="destructive" onClick={() => handleIssue('burn')}>Revoke</Button>;
                </div>;
              </CardContent>;
            </Card>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <Tabs defaultValue="history">;
      const err = await res.json ();
      toast ({
        title: 'Error',
        description: err.error || 'Failed',
        variant: 'destructive';
      });
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
;
  return (
    <ProtectedRoute admin_only>;
      <div>;
        <Header />;
        <div className="min - h-screen bg - zion - blue px - 4 py - 8">;
          <div className="container mx - auto">;
            <h1 className="text - 3xl font - bold text - white mb - 6">Token Manager</h1>;
            <Card className="mb - 6">;
              <CardHeader>;
                <CardTitle > Issue or Revoke Tokens</CardTitle>;
              </CardHeader>;
              <CardContent className="space - y-4">;
                <Input placeholder="User ID" value={user_id} on_change={e => setUserId (e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} on_change={e => set_amount (parse_int (e.target.value))} />;
                <div className="flex gap - 2">;
                  <Button on_click={() => handle_issue ('earn')}>Issue</Button>;
                  <Button variant="destructive" on_click={() => handle_issue ('burn')}>Revoke</Button>;
                </div>;
              </CardContent>;
            </Card>;
            <Tabs default_value="history">;
<<<<<<< HEAD
=======

;
            <Tabs defaultValue="history">;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
              <TabsList>;
                <TabsTrigger value="history>Transaction History</TabsTrigger>;
              </TabsList>;

              <TabsContent value="history">;
=======
  return (
    <ProtectedRoute admin_only>;
      <div>;
        <Header />;"
        <div className="min - h-screen bg - zion - blue px - 4 py - 8">;"
          <div className="container mx - auto">;"
            <h1 className="text - 3xl font - bold text - white mb - 6">Token Manager</h1>;"
            <Card className="mb - 6">;
              <CardHeader>;
                <CardTitle > Issue or Revoke Tokens</CardTitle>;
              </CardHeader>;"
              <CardContent className="space - y-4">;"
                <Input placeholder="User ID" value={user_id} on_change={e => setUserId (e.target.value)} />;"
                <Input type="number" placeholder="Amount" value={amount} on_change={e => set_amount (parse_int (e.target.value))} />;"
                <div className="flex gap - 2">;'
                  <Button on_click={() => handle_issue ('earn')}>Issue</Button>;'"
                  <Button variant="destructive" on_click={() => handle_issue ('burn')}>Revoke</Button>;
                </div>;
              </CardContent>;
            </Card>;"
            <Tabs default_value="history">;

  return (


              <TabsList>;
                <TabsTrigger value="history>Transaction History</TabsTrigger>;
              </TabsList>;
              <TabsContent value=history">;
                <ul className="space-y-2>;
                  {transactions.map (tx => (
                    <li key={tx.id} className=flex justify - between border - b py - 2 text-white">;
                      <span>{tx.user_id}</span>;
                      <span>{tx.transaction_type === earn' ? '+ : -'}{tx.amount}</span>;
                    </li>))}}
  },

  return (
    <ProtectedRoute adminOnly>
      <div>
        <Header />
        <div className="min-h-screen bg-zion-blue px-4 py-8>
          <div className=container mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6>Token Manager</h1>
            <Card className=mb-6">
              <CardHeader>
                <CardTitle>Issue or Revoke Tokens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4>
                <Input placeholder=User ID" value={userId} onChange={e => setUserId(e.target.value)} />
                <Input type="number placeholder=Amount" value={amount} onChange={e => setAmount(parseInt(e.target.value))} />
                <div className="flex gap-2>
                  <Button onClick={() => handleIssue('earn)}>Issue</Button>
                  <Button variant=destructive" onClick={() => handleIssue(burn')}>Revoke</Button>
                </div>
              </CardContent>
            </Card>
            <Tabs defaultValue="history>
              <TabsList>
                <TabsTrigger value=history">Transaction History</TabsTrigger>
              </TabsList>
              <TabsContent value="history>
                <ul className=space-y-2">
                  {transactions.map(tx => (
                    <li key={tx.id} className="flex justify-between border-b py-2 text-white">
                      <span>{tx.user_id}</span>
                      <span>{tx.transaction_type === 'earn ? +' : '-'}{tx.amount}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
                </ul>;
        <Footer />;
      </div>;
                </ul>;
        <Footer />;
      </div>;

>>>>>>> origin/cursor/delete-old-data-records-6bba
