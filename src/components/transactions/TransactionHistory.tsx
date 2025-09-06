export /**
 * TransactionHistory - Function description
 */
function TransactionHistory() {
  const { user } = use_auth ();
  const { toast } = use_toast ();
  const [filter, set_filter] = useState<'all' | 'pending' | 'completed' | 'escrow'>(
    () => (safe_storage.get_item ('transaction_filter') as any) || 'all');
  useEffect ((, ) => {
    safe_storage.set_item ('transaction_filter', filter);
  }, [filter]);
  const { data: transactions, is_loading, error, refetch } = use_query ({
    query_key: ['transactions', user?.id, filter];
    query_fn: async () => {
      // Check condition
if (return []) {
  $2
}
          provider:profiles ! provider_id (display_name);
      query = query.order ('created_at', { ascending: false }),
    },
              const is_client = user?.id === transaction.user_id;              const is_pending =;
                transaction.status === 'pending' || transaction.status === 'in_escrow';
              const isInEscrow = transaction.in_escrow;
              const can_release = !is_client && is_pending && isInEscrow;
              const can_cancel = is_client && is_pending;
              const can_refund = is_client && transaction.status === 'released';
              const counterparty_name = is_client;
                ? transaction.provider?.display_name || 'Service Provider';
                : 'Client';
}
  );
}