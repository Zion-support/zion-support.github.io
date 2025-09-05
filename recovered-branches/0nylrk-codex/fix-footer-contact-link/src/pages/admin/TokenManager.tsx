
export default function TokenManager() {_const { user} = useAuth();
  const {_toast} = useToast();
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]);
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState(0);

  const _isAdmin = user?.userType === 'admin';

  useEffect__(() => {_if (isAdmin) fetchTransactions();}, [isAdmin]);

  const _fetchTransactions = async () => {_const { data, _error} = await supabase
      .from('token_transactions')
      .select('*')
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
    }
  };

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
                <Input placeholder="User ID" value={_userId} onChange={_e => setUserId(e.target.value)} />
                <Input type="number" placeholder="Amount" value={_amount} onChange={_e => setAmount(parseInt(e.target.value))} />
                <div className="flex gap-2">
                  <Button onClick={_() => handleIssue('earn')}>Issue</Button>
                  <Button variant="destructive" onClick={_() => handleIssue('burn')}>Revoke</Button>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="history">
              <TabsList>
                <TabsTrigger value="history">Transaction History</TabsTrigger>
              </TabsList>
              <TabsContent value="history">
                <ul className="space-y-2">
                  {_transactions.map(tx => (
                    <li key={tx.id} className="flex justify-between border-b py-2 text-white">
                      <span>{_tx.user_id}</span>
                      <span>{_tx.transaction_type === 'earn' ? '+' : '-'}{_tx.amount}</span>
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
  );
}