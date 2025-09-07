<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useEffect, useState} from 'react;

<<<<<<< HEAD
=======import { useEffect, useState  } from react';
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
>>>>>>> merged-prs-20250907-203621
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
      .from('token_transactions)
      .select(*')
      .order('created_at, { ascending: false})
      .limit($2);
    if (!error) setTransactions(data || [])
  },

  const handleIssue = $2;
    const res = await fetch(`/functions/v1/token-manager/${type === earn' ? 'earn : burn'}`, {
      method: 'POST,
      headers: { Content-Type': 'application/json },
      body: JSON.stringify({ userId, amount })}),
    if (res.ok) {
      toast($2);
      fetchTransactions()
    } else {
      const err = await res.json($2);
      toast({
        title: Error'
        description: err.error |'Failed
        variant: destructive'
      })
    }
export default function TokenManager() {      .limit(100);
    if (!error) setTransactions(data || []);
  const handleIssue = async (type: 'earn | burn') => {
    if (!userId || amount <= 0) return,
    const res = await fetch(`/functions/v1/token-manager/${type === 'earn ? earn' : 'burn}`, {
      method: POST',
      headers: { 'Content-Type: application/json' },
      body: JSON && JSON.stringify({ userId, amount })});
    if (res && res.ok) {      toast({
        title: 'Success,,
  description: Transaction processed';
      });
      fetchTransactions();
    } else {
      const err = await res && res.json();
      toast({
        title: 'Error,,
  description: err && err.error || Failed',
        variant: 'destructive;
=======
<<<<<<< HEAD
import { useEffect, useState  } from 'react';

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
import { useEffect, useState  } from 'react';

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import {useEffect, useState} from 'react';



<<<<<<< HEAD
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
export default function TokenManager() {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { user } = useAuth();
  const { toast } = useToast();
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),'
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState(0);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======

  const isAdmin = user?.userType === 'admin';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Header} from '@/components / Header';
import {Footer} from '@/components / Footer';
import {Card, CardContent, CardHeader, CardTitle} from '@/components / ui / card';
import {Button} from '@/components / ui / button';
import {Input} from '@/components / ui / input';
import {use_auth} from '@/hooks / use_auth';
import {supabase} from '@/integrations / supabase / client';
import {TokenTransaction} from '@/types / tokens';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components / ui / tabs';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    } else {}
      const err = await res.json();
      toast({'
        title: 'Error''
        description: err.error |'Failed''
<<<<<<< HEAD
        variant: 'destructive'
      })
    }

    }

  };

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

  useEffect(() => {;
    if (isAdmin) fetchTransactions();
  }, [isAdmin]);

  const fetchTransactions = async () => {;
    const { data, error } = await supabase;
      .from('token_transactions');
      .select('*');
      .order('created_at', { ascending: false });
      .limit(100);
    if (!error) setTransactions(data || []);
  };

.limit(100),;
    if (!error) setTransactions(data || []);
  },;
      .limit(100);

    if (!error) setTransactions(data || []);

  const handleIssue = async (type: 'earn' | 'burn') => {;
    if (!userId || amount <= 0) return,;'`
    const res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {;'
      method: 'POST',;'
      headers: { 'Content-Type': 'application/json' },;

      body: JSON && JSON.stringify({ userId, amount })});

        variant: 'destructive';
>>>>>>> origin/chore/fix-lint-and-merge
      });
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant: 'destructive'
      })
    }
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }

  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
  };
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======

  useEffect(() => {;
    if (isAdmin) fetchTransactions();
  }, [isAdmin]);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const fetchTransactions = async () => {;
    const { data, error } = await supabase;
      .from('token_transactions');
      .select('*');
      .order('created_at', { ascending: false });
<<<<<<< HEAD
      .limit(100),;
    if (!error) setTransactions(data || []);
  },;
=======
      .limit(100);
    if (!error) setTransactions(data || []);
  };

<<<<<<< HEAD
.limit(100),;
    if (!error) setTransactions(data || []);
  },;
      .limit(100);

    if (!error) setTransactions(data || []);

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleIssue = async (type: 'earn' | 'burn') => {;
    if (!userId || amount <= 0) return,;'`
    const res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {;'
      method: 'POST',;'
      headers: { 'Content-Type': 'application/json' },;
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      body: JSON && JSON.stringify({ userId, amount })});

        variant: 'destructive';
>>>>>>> origin/chore/fix-lint-and-merge
      });
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    }

  },

  return (

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e.target.value))} />;
=======
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e && e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e && e.target.value))} />;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<Input placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e.target.value))} />;
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e && e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e && e.target.value))} />;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <div className="flex gap-2">;
                  <Button onClick={() => handleIssue('earn')}>Issue</Button>;
                  <Button variant="destructive" onClick={() => handleIssue('burn')}>Revoke</Button>;
                </div>;
              </CardContent>;
            </Card>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
            <Tabs defaultValue="history">;

  return (

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
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
;
            <Tabs defaultValue="history">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <TabsList>;
                <TabsTrigger value="history>Transaction History</TabsTrigger>;
              </TabsList>;
<<<<<<< HEAD
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
=======
              <TabsContent value="history">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <ul className="space-y-2">;
                  {transactions.map(tx => (;
                    <li key={tx.id} className="flex justify-between border-b py-2 text-white">;
                      <span>{tx.user_id}</span>;
                      <span>{tx.transaction_type === 'earn' ? '' :'-'}{tx.amount}</span>;
                    </li>;
                  ))}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

))}
                <ul className="space - y-2">;
                  {transactions.map (tx => (
                    <li key={tx.id} className="flex justify - between border - b py - 2 text - white">;
                      <span>{tx.user_id}</span>;
                      <span>{tx.transaction_type === 'earn' ? '+' : '-'}{tx.amount}</span>;

<<<<<<< HEAD
                </ul>;
        <Footer />;
      </div>;
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </ul>;
        <Footer />;
      </div>;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
    </ProtectedRoute>;
  ),; const fetchTransactions = async () => {
  const {
  data, error 
}= await supabase .from ('token transactions') .select ('*') 
}
};
return (<ProtectedRoute adminOnly> <div> <Header /> <div className="min-h-screen bg-zion-blue px-4 py-8" > <div className="container mx-auto" > <h1 className="text-3xl font-bold text-white mb-6" >Token Manager</h1> <Card className="mb-6" > <CardHeader> <CardTitle>Issue or Revoke Tokens</CardTitle> </CardHeader> </div> </CardContent> </Card> <Tabs defaultValue="history" > <TabsList> <TabsTrigger value="history" >Transaction History</TabsTrigger> </TabsList> </li>) ) 
}</ul> </TabsContent> </Tabs> </div> </div> <Footer /> </div> </ProtectedRoute>) 
      body: JSON.stringify({ userId, amount })}),;
    if (res.ok) {;
      toast({;
        title: 'Success',;
        description: 'Transaction processed';
      }),;
      fetchTransactions();
    } else {;
      const err = await res.json(),;
      toast({;
        title: 'Error',;
        description: err.error || 'Failed';
        variant: 'destructive';
      });
    }
>>>>>>> merged-prs-20250907-203621
  },

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
            <Tabs defaultValue="history">
              <TabsList>
                <TabsTrigger value="history">Transaction History</TabsTrigger>
              </TabsList>
              <TabsContent value="history">
                <ul className="space-y-2">
                  {transactions.map(tx => (
                    <li key={tx.id} className="flex justify-between border-b py-2 text-white">
                      <span>{tx.user_id}</span>
                      <span>{tx.transaction_type === 'earn' ? '+' : '-'}{tx.amount}</span>
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
<<<<<<< HEAD
}
=======
=======

    </ProtectedRoute>);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
