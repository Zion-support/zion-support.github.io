

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




  useEffect(() => {;
    if (isAdmin) fetchTransactions();
  }, [isAdmin]);



      .limit(100);
    if (!error) setTransactions(data || []);
  };


  const handleIssue = async (type: 'earn' | 'burn') => {;
    if (!userId || amount <= 0) return,;'`
    const res = await fetch(`/functions/v1/token-manager/${type === 'earn' ? 'earn' : 'burn'}`, {;'
      method: 'POST',;'
      headers: { 'Content-Type': 'application/json' },;





                <Input placeholder="User ID" value={userId} onChange={e => setUserId(e && e.target.value)} />;
                <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(parseInt(e && e.target.value))} />;


              <TabsList>;
                <TabsTrigger value="history>Transaction History</TabsTrigger>;
              </TabsList>;

              <TabsContent value="history">;
