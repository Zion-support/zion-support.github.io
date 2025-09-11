
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {useEffect, useState} from 'react';



<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { user } = useAuth();
  const { toast } = useToast();
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState(0);
<<<<<<< HEAD
<<<<<<< HEAD
=======

  const isAdmin = user?.userType === 'admin';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  const isAdmin = user?.userType === 'admin';

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
      });
      fetch_transactions ();
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } else {
      const err = await res.json();
      toast({
        title: 'Error'
        description: err.error |'Failed'
        variant: 'destructive'
      })
    }

<<<<<<< HEAD

    }

  };

<<<<<<< HEAD
  }
  };
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
export default function TokenManager() {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),;
  const [userId, setUserId] = useState(''),;
  const [amount, setAmount] = useState(0),;
  const isAdmin = user?.userType === 'admin',;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  useEffect(() => {;
    if (isAdmin) fetchTransactions();
  }, [isAdmin]);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const fetchTransactions = async () => {;
    const { data, error } = await supabase;
      .from('token_transactions');
      .select('*');
      .order('created_at', { ascending: false });
<<<<<<< HEAD
<<<<<<< HEAD
      .limit(100),;
    if (!error) setTransactions(data || []);
  },;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      .limit(100);
    if (!error) setTransactions(data || []);
  };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleIssue = async (type: 'earn' | 'burn') => {;
    if (!userId || amount <= 0) return,;
    const res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      body: JSON && JSON.stringify({ userId, amount })});
    if (res && res.ok) {;
      toast({;
        title: 'Success',;
        description: 'Transaction processed';
      });
      fetchTransactions();
    } else {;
      const err = await res && res.json();
      toast({;
        title: 'Error',;
        description: err && err.error || 'Failed',;
        variant: 'destructive';
      });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }

  },



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e.target.value))} />;
=======
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e && e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e && e.target.value))} />;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e && e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e && e.target.value))} />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="flex gap-2">;
                  <Button onClick={() => handleIssue('earn')}>Issue</Button>;
                  <Button variant="destructive" onClick={() => handleIssue('burn')}>Revoke</Button>;
                </div>;
              </CardContent>;
            </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <Tabs defaultValue="history">;
=======
      const err = await res.json ();
      toast ({
        title: 'Error',
        description: err.error || 'Failed',
        variant: 'destructive';
      });
    }
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
;
            <Tabs defaultValue="history">;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <TabsList>;
                <TabsTrigger value="history">Transaction History</TabsTrigger>;
              </TabsList>;
              <TabsContent value="history">;
<<<<<<< HEAD
<<<<<<< HEAD
                <ul className="space-y-2">;
                  {transactions.map(tx => (;
                    <li key={tx.id} className="flex justify-between border-b py-2 text-white">;
                      <span>{tx.user_id}</span>;
                      <span>{tx.transaction_type === 'earn' ? '' :'-'}{tx.amount}</span>;
                    </li>;
                  ))}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                <ul className="space - y-2">;
                  {transactions.map (tx => (
                    <li key={tx.id} className="flex justify - between border - b py - 2 text - white">;
                      <span>{tx.user_id}</span>;
                      <span>{tx.transaction_type === 'earn' ? '+' : '-'}{tx.amount}</span>;
                    </li>))}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </ul>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
        <Footer />;
      </div>;
<<<<<<< HEAD
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
=======

    </ProtectedRoute>);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    </ProtectedRoute>);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}