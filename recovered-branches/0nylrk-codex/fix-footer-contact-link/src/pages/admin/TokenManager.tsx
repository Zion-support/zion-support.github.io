<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
import {useEffect, useState} from 'react';



<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useEffect, useState  } from 'react';
=======


import {useEffect, useState} from 'react';

<<<<<<< HEAD
=======import { useEffect, useState  } from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

import {useEffect, useState} from 'react';

=======import { useEffect, useState  } from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


import { useEffect, useState  } from 'react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import { useEffect, useState  } from 'react';

import {useEffect, useState} from 'react';
import { useEffect, useState  } from 'react';
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======
'
import { useEffect, useState  } from 'react';'
import { Header  } from '@/components/Header';'
import { Footer  } from '@/components/Footer';'
import { Card, CardContent, CardHeader, CardTitle  } from '@/components/ui/card';'
import { Button  } from '@/components/ui/button';'
import { Input  } from '@/components/ui/input';'
import { useAuth  } from '@/hooks/useAuth';'
import { supabase  } from '@/integrations/supabase/client';'
import { TokenTransaction  } from '@/types/tokens';'
import { ProtectedRoute  } from '@/components/ProtectedRoute';'
import { Tabs, TabsList, TabsTrigger, TabsContent  } from '@/components/ui/tabs';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useToast } from '@/hooks/use-toast';
<<<<<<< HEAD
export default function TokenManager() { return null; }
import {useEffect, useState} from 'react';'
import {Header} from '@/components/Header';'
import {Footer} from '@/components/Footer';'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';'
import {Button} from '@/components/ui/button';'
import {Input} from '@/components/ui/input';'
import {useAuth} from '@/hooks/useAuth';'
import {supabase} from '@/integrations/supabase/client';'
import {TokenTransaction} from '@/types/tokens';'
import {ProtectedRoute} from '@/components/ProtectedRoute';'
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';'
import {useToast} from '@/hooks/use-toast';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function TokenManager() {;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
export default function TokenManager() {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


import {useEffect, useState} from 'react';



<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default function TokenManager() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();
  const { toast } = useToast();
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),'
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState(0);
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


    } else {}
      const err = await res.json();
      toast({'
        title: 'Error''
        description: err.error |'Failed''
        variant: 'destructive'
      })
    }
<<<<<<< HEAD
  }
  };
=======
=======
  const { user } = useAuth();
  const { toast } = useToast();
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState(0);

  const isAdmin = user?.userType === 'admin';

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
import {use_toast} from '@/hooks / use - toast';
export default /**
 * TokenManager - Function description
 */
function TokenManager() {
  const { user } = use_auth ();
  const { toast } = use_toast ();
  const [transactions, set_transactions] = useState < TokenTransaction[]>([]);
  const [user_id, setUserId] = useState ('');
  const [amount, set_amount] = useState (0);
;
  const is_admin = user?.user_type === 'admin';
;
  useEffect (() => {
    if (fetch_transactions ()) {
  $2
}
  }, [is_admin]);
;
  const fetch_transactions = async () => {
    const { data, error } = await supabase;
      .from ('token_transactions');
      .select ('*');
      .order ('created_at', { ascending: false });
      .limit (100);
    if (set_transactions (data || [])) {
  $2
}
  }
;
  const handle_issue = async (type: 'earn' | 'burn') => {
    // Check condition
if (return, ) {
  $2
}
    const res = await fetch (`/functions / v1 / token - manager/${type === 'earn' ? 'earn' : 'burn'}`, {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ user_id, amount })});
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Success',
        description: 'Transaction processed';

      });
      fetch_transactions ();
    } else {
      const err = await res.json();
      toast({
        title: 'Error'
        description: err.error |'Failed'
        variant: 'destructive'
      })
    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


    }

  };


<<<<<<< HEAD


  };
=======
export default function TokenManager() {


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  };

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
'
import { useEffect, useState } from 'react',;'
import { Header } from '@/components/Header',;'
import { Footer } from '@/components/Footer',;'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',;'
import { Button } from '@/components/ui/button',;'
import { Input } from '@/components/ui/input',;'
import { useAuth } from '@/hooks/useAuth',;'
import { supabase } from '@/integrations/supabase/client',;'
import { TokenTransaction } from '@/types/tokens',;'
import { ProtectedRoute } from '@/components/ProtectedRoute',;'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useToast } from '@/hooks/use-toast',;
export default function TokenManager() { return null; }
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),;'
  const [userId, setUserId] = useState(''),;
  const [amount, setAmount] = useState(0),;'
=======
import { useToast } from '@/hooks/use-toast',;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),;
  const [userId, setUserId] = useState(''),;
  const [amount, setAmount] = useState(0),;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const isAdmin = user?.userType === 'admin',;

  useEffect(() => {;
    if (isAdmin) fetchTransactions();
  }, [isAdmin]);

<<<<<<< HEAD
<<<<<<< HEAD



  const fetchTransactions = async () => {;
    const { data, error } = await supabase;'
      .from('token_transactions');'
      .select('*');'
      .order('created_at', { ascending: false });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      .limit(100);
=======
export default function TokenManager() {;      .limit(100);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export default function TokenManager() {;      .limit(100);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (!error) setTransactions(data || []);
=======


      .limit(100);
    if (!error) setTransactions(data || []);
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const handleIssue = async (type: 'earn' | 'burn') => {;
    if (!userId || amount <= 0) return,;'`
    const res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {;'
      method: 'POST',;'
      headers: { 'Content-Type': 'application/json' },;
<<<<<<< HEAD
<<<<<<< HEAD
=======

    if (!userId || amount <= 0) return,;`;
    const res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;')
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      body: JSON && JSON.stringify({ userId, amount })});
<<<<<<< HEAD
    if (res && res.ok) {;      toast({;
        title: 'Success',,
  description: 'Transaction processed';
=======

      toast({;'
        title: 'Success',;'
        description: 'Transaction processed';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    if (res && res.ok) {;
      toast({;
        title: 'Success',;
<<<<<<< HEAD
        description: 'Transaction processed';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      });
      fetchTransactions();
    } else {;
      const err = await res && res.json();
<<<<<<< HEAD
      toast({;
<<<<<<< HEAD
        title: 'Error',,
  description: err && err.error || 'Failed',;
=======
      toast({;'
        title: 'Error',;'
        description: err && err.error || 'Failed',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        title: 'Error',;
        description: err && err.error || 'Failed',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: 'destructive';
      });
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
=======
      fetchTransactions();
    } else {;
      const err = await res && res.json();
        title: 'Error',;
        description: err && err.error || 'Failed',;
        variant: 'destructive';')
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  },

  return (

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
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e && e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e && e.target.value))} />;
<Input placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e.target.value))} />;
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e && e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e && e.target.value))} />;
                <div className="flex gap-2">;
                  <Button onClick={() => handleIssue('earn')}>Issue</Button>;
                  <Button variant="destructive" onClick={() => handleIssue('burn')}>Revoke</Button>;
                </div>;
              </CardContent>;
            </Card>;

            <Tabs defaultValue="history">;
      const err = await res.json ();
      toast ({
        title: 'Error',
        description: err.error || 'Failed',
        variant: 'destructive';
      });
    }
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
;
            <Tabs defaultValue="history">;

  return (
<<<<<<< HEAD
<<<<<<< HEAD




    <ProtectedRoute adminOnly>;
      <div>;
        <Header />;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;"
          <div className="container mx-auto">;"
            <h1 className="text-3xl font-bold text-white mb-6">Token Manager</h1>;"
            <Card className="mb-6">;
              <CardHeader>;
                <CardTitle>Issue or Revoke Tokens</CardTitle>;
              </CardHeader>;"
              <CardContent className="space-y-4">;

"
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e && e.target.value)} />;"
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e && e.target.value))} />;
"
                <div className="flex gap-2">;'
                  <Button onClick={() => handleIssue('earn')}>Issue</Button>;'"
                  <Button variant="destructive" onClick={() => handleIssue('burn')}>Revoke</Button>;
                </div>;
              </CardContent>;
            </Card>;

"
            <Tabs defaultValue="history">;
      const err = await res.json ();
      toast ({'
        title: 'Error','
        description: err.error || 'Failed','
        variant: 'destructive';
      });
    }
<<<<<<< HEAD
<<<<<<< HEAD
  },

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  }
;


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <TabsList>;
                <TabsTrigger value="history">Transaction History</TabsTrigger>;
              </TabsList>;
              <TabsContent value="history">;

))}
                <ul className="space - y-2">;
                  {transactions.map (tx => (
                    <li key={tx.id} className="flex justify - between border - b py - 2 text - white">;
                      <span>{tx.user_id}</span>;
                      <span>{tx.transaction_type === 'earn' ? '+' : '-'}{tx.amount}</span>;
<<<<<<< HEAD
                    </li>))}}
=======

              <TabsList>;"
                <TabsTrigger value="history">Transaction History</TabsTrigger>;
              </TabsList>;"
              <TabsContent value="history">;
"
                <ul className="space - y-2">;
                  {transactions.map (tx => ("
                    <li key={tx.id} className="flex justify - between border - b py - 2 text - white">;
                      <span>{tx.user_id}</span>;'
                      <span>{tx.transaction_type === 'earn' ? '+' : '-'}{tx.amount}</span>;
                    </li>))}

<<<<<<< HEAD


=======
                    </li>))}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<ul className="space-y-2">;
                  {transactions.map(tx => (;
                    <li key={tx.id} className="flex justify-between border-b py-2 text-white">;
                      <span>{tx.user_id}</span>;
                      <span>{tx.transaction_type === 'earn' ? '' :'-'}{tx.amount}</span>;
                    </li>;
                  ))}
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                </ul>;
        <Footer />;
      </div>;

<<<<<<< HEAD


}'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    </ProtectedRoute>);

<<<<<<< HEAD
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
}

    );`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
