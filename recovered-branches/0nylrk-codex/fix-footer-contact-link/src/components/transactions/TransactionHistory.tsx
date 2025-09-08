



  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
  provider?: {;





  currency:string,;

export function TransactionHistory() {;
  const { user } = useAuth(),;
  const { toast } = useToast(),;
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>('all'),;
  ;
  const { data:transactions, isLoading, error, refetch } = useQuery({;

      let query = supabase;

          service:services(title);
        `);
        .or(`user_id.eq.${user.id},provider_id.eq.${user.id}`),;
      ;
      if (filter === 'pending') {;
        query = query.eq('statuspending'),;
      } else if (filter === 'completed') {;
        query = query.eq('statuscompleted'),;
      } else if (filter === 'escrow') {;
        query = query.eq('in_escrow', true),;
      }
      ;

;
  const handleManageTransaction = async (transactionId:string, action:'release' | 'refund' | 'cancel') => {;
    try {;

      toast({;
        title:"Success",;
        description:data.message || "Transaction updated successfully"}),;
      ;
      refetch(),;
    } catch (error) {;
      console.error("Error managing transaction:", error),;
      toast({;
        title:"Error",;
        description:error.message || "Failed to update transaction",;

    switch(status) {;
      case 'pending':;
        return inEscrow ? (;
          <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500">;
            <Clock className="w-3 h-3 mr-1" /> In Escrow;
          </Badge>;
        ) :(;
          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500">;
            <Clock className="w-3 h-3 mr-1" /> Pending;
          </Badge>;
        ),;
      case 'completed':;
        return (;
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500">;
            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed;
          </Badge>;
        ),;
      case 'refunded':;
        return (;
          <Badge variant="outline" className="bg-purple-500/20 text-purple-500 border-purple-500">;
            <RefreshCcw className="w-3 h-3 mr-1" /> Refunded;
          </Badge>;
        ),;
      case 'cancelled':;
        return (;
          <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500">;
        return (;
          <Badge variant="outline" className="bg-gray-500/20 text-gray-500 border-gray-500">;

  const formatCurrency = (amount:number, currency:string) => {;
    return new Intl.NumberFormat('en-US', {;

    return (;
      <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">;
        <div className="text-center text-zion-slate-light">;
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;
          <h3 className="font-bold text-xl text-white mb-2">Failed to load transactions</h3>;
          <p className="mb-4">{error.message}</p>;
          <Button onClick={() => refetch()} variant="outline">;
  return (;
    <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light overflow-hidden">;
      <div className="p-6">;
        <div className="flex items-center justify-between mb-6">;
          <h2 className="text-2xl font-bold text-white">Transaction History</h2>;
          ;
          <div className="flex space-x-2">;
            <Button ;
              size="sm" ;
              variant={filter === 'all' ? 'default' :'outline'} ;
              onClick={() => setFilter('all')}
            <Button ;
              size="sm" ;
              variant={filter === 'pending' ? 'default' :'outline'} ;
              onClick={() => setFilter('pending')}
            <Button ;
              size="sm" ;
              variant={filter === 'completed' ? 'default' :'outline'} ;
              onClick={() => setFilter('completed')}
            <Button ;
              size="sm" ;
              variant={filter === 'escrow' ? 'default' :'outline'} ;
              onClick={() => setFilter('escrow')}
          Array(3).fill(0).map((_, i) => (;
            <div key={i} className="mb-4">;
              <Card className="bg-zion-blue-dark border-zion-blue-light">;
                <CardHeader className="pb-2">;
                  <Skeleton className="h-6 w-3/4 bg-zion-blue-light" />;
                  <Skeleton className="h-4 w-1/4 bg-zion-blue-light mt-2" />;
                </CardHeader>;
                <CardContent>;
                  <div className="flex justify-between mb-2">;
                    <Skeleton className="h-5 w-1/3 bg-zion-blue-light" />;
                    <Skeleton className="h-5 w-1/4 bg-zion-blue-light" />;
                  </div>;
                  <Skeleton className="h-4 w-2/3 bg-zion-blue-light" />;
                </CardContent>;
                <CardFooter>;

        ) :transactions && transactions.length > 0 ? (;
          <div className="space-y-4">;
            {transactions.map((transaction) => {;
              const isClient = user?.id === transaction.user_id,;
              const isPending = transaction.status === 'pending',;
              const isInEscrow = transaction.in_escrow,;
              const canRelease = !isClient && isPending && isInEscrow,;
              const canCancel = isClient && isPending,;
              const canRefund = isClient && transaction.status === 'completed',;
              ;
              const counterpartyName = isClient ;
                ? transaction.provider?.display_name || 'Service Provider' ;
                :'Client',;
;
              return (;
                <Card key={transaction.id} className="bg-zion-blue-dark border-zion-blue-light overflow-hidden">;
                  <CardHeader className="pb-3">;
                    <div className="flex justify-between items-start">;
                      <div>;
                        <CardTitle className="text-white text-lg">;
                          {transaction.service?.title || 'Service Payment'}
                        </CardTitle>;
                        <CardDescription className="text-zion-slate-light">;
                          {isClient ? (;
                            <span>Payment to <span className="text-zion-purple">{counterpartyName}</span></span>;
                          ) :(;
                  </CardHeader>;
                  <CardContent className="pb-3">;
                    <div className="flex justify-between items-center mb-1">;
                      <span className="text-zion-slate-light">Amount:</span>;
                    ;
                    <div className="flex justify-between items-center text-sm">;
                      <span className="text-zion-slate-light">Date:</span>;

                    {(transaction.completed_at || transaction.refunded_at || transaction.cancelled_at) && (;
                      <div className="flex justify-between items-center text-sm mt-1">;
                        <span className="text-zion-slate-light">;
                          {transaction.completed_at ? 'Completed:' :;
                           transaction.refunded_at ? 'Refunded:' :'Cancelled:'}
                        </span>;
const {}
  toast;
}= useToast ();'
const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'> ('all');
const {}
  data: transactions, isLoading, error, refetch;
}= useQuery ({'
  queryKey: ['transactions', user?.id, filter];
queryFn: async () => {}

  currency: string;
  status: 'pending' | 'completed' | 'refunded' | 'cancelled';
  in_escrow: boolean;
  created_at: string;
  completed_at?: string;
  refunded_at?: string;
  cancelled_at?: string;
  provider?: {

      






      console.error("Error managing transaction:", error);


  },




    }













        ) : transactions && transactions.length > 0 ? (;
          <div className="space-y-4">;

                            <span>Payment from <span className="text-zion-cyan">Client</span></span>;








                          ).toLocaleDateString()}

                        </span>;
                      </div>;
                    )}




