<<<<<<< HEAD
import { useEffect, useState } from 'react',
import { Header } from '@/components/Header',
import { Footer } from '@/components/Footer',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { useAuth } from '@/hooks/useAuth',
import { supabase } from '@/integrations/supabase/client',
import { TokenTransaction } from '@/types/tokens',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs',
import { useToast } from '@/hooks/use-toast',
export default function TokenManager() {
  const { user } = useAuth(),
  const { toast } = useToast(),
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]),
  const [userId, setUserId] = useState(''),
  const [amount, setAmount] = useState(0),

  const isAdmin = user?.userType === 'admin',

  useEffect(() => {
    if (isAdmin) fetchTransactions()
  }, [isAdmin]),
=======

export default function TokenManager() {_const { user} = useAuth();
  const {_toast} = useToast();
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]);
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState(0);

  const _isAdmin = user?.userType === 'admin';

  useEffect__(() => {_if (isAdmin) fetchTransactions();}, [isAdmin]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _fetchTransactions = async () => {_const { data, _error} = await supabase
      .from('token_transactions')
      .select('*')
<<<<<<< HEAD
      .order('created_at', { ascending: false })
      .limit(100),
    if (!error) setTransactions(data || [])
  },

  const handleIssue = async (type: 'earn' | 'burn') => {
    if (!userId || amount <= 0) return,
    const res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, amount })}),
    if (res.ok) {
      toast({
        title: 'Success',
        description: 'Transaction processed'
      }),
      fetchTransactions()
    } else {
      const err = await res.json(),
      toast({
        title: 'Error',
        description: err.error || 'Failed',
        variant: 'destructive'
      })
=======
      .order('created_at', {_ascending: false})
      .limit(100);
    if (!error) setTransactions(data || []);
  };

  const _handleIssue = async (_type: 'earn' | 'burn') => {_if (!userId || amount <= 0) return;
    const _res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {_method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_userId, _amount})});
    if (res.ok) {_toast({
        title: 'Success', _description: 'Transaction processed'});
      fetchTransactions();
    } else {_const _err = await res.json();
      toast({
        title: 'Error', _description: err.error || 'Failed', _variant: 'destructive'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  return (
    <ProtectedRoute adminOnly>
      <div>
        <Header />
        <div className=&quot;min-h-screen bg-zion-blue px-4 py-8&quot;>
          <div className=&quot;container mx-auto&quot;>
            <h1 className=&quot;text-3xl font-bold text-white mb-6&quot;>Token Manager</h1>
            <Card className=&quot;mb-6&quot;>
              <CardHeader>
                <CardTitle>Issue or Revoke Tokens</CardTitle>
              </CardHeader>
<<<<<<< HEAD
              <CardContent className=&quot;space-y-4&quot;>
                <Input placeholder=&quot;User ID&quot; value={userId} onChange={e => setUserId(e.target.value)} />
                <Input type=&quot;number&quot; placeholder=&quot;Amount&quot; value={amount} onChange={e => setAmount(parseInt(e.target.value))} />
                <div className=&quot;flex gap-2&quot;>
                  <Button onClick={() => handleIssue('earn')}>Issue</Button>
                  <Button variant=&quot;destructive&quot; onClick={() => handleIssue('burn')}>Revoke</Button>
=======
              <CardContent className="space-y-4">
                <Input placeholder="User ID" value={_userId} onChange={_e => setUserId(e.target.value)} />
                <Input type="number" placeholder="Amount" value={_amount} onChange={_e => setAmount(parseInt(e.target.value))} />
                <div className="flex gap-2">
                  <Button onClick={_() => handleIssue('earn')}>Issue</Button>
                  <Button variant="destructive" onClick={_() => handleIssue('burn')}>Revoke</Button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue=&quot;history&quot;>
              <TabsList>
                <TabsTrigger value=&quot;history&quot;>Transaction History</TabsTrigger>
              </TabsList>
<<<<<<< HEAD
              <TabsContent value=&quot;history&quot;>
                <ul className=&quot;space-y-2&quot;>
                  {transactions.map(tx => (
                    <li key={tx.id} className=&quot;flex justify-between border-b py-2 text-white&quot;>
                      <span>{tx.user_id}</span>
                      <span>{tx.transaction_type === 'earn' ? '+' : '-'}{tx.amount}</span>
=======
              <TabsContent value="history">
                <ul className="space-y-2">
                  {_transactions.map(tx => (
                    <li key={tx.id} className="flex justify-between border-b py-2 text-white">
                      <span>{_tx.user_id}</span>
                      <span>{_tx.transaction_type === 'earn' ? '+' : '-'}{_tx.amount}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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