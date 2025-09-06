import { useCurrency } from '@/hooks/useCurrency'
import {logErrorToProduction} from '@/utils/productionLogger'
interface Transaction {
  id: string,
  user_id: string,
  provider_id: string,
  service_id: string,
  amount: number,
  currency: string,
  status: 'pending' | 'in_escrow' | 'released' | 'disputed' | 'refunded' | 'cancelled',
  in_escrow: boolean,
  created_at: string,
  completed_at?: string
  refunded_at?: string
  cancelled_at?: string
  provider?: {
    display_name?: string
  }
  service?: {
    title?: string
  }
}

export function TransactionHistory() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed' | 'escrow'>(
    () => (safeStorage.getItem('transaction_filter') as any) || 'all'
  )
  useEffect((,) => {
    safeStorage.setItem('transaction_filter', filter)
  }, [filter])
  const { data: transactions, isLoading, error, refetch } = useQuery({
    queryKey: ['transactions', user?.id, filter]
    queryFn: async () => {
      if (!user) return []
          provider:profiles!provider_id(display_name)
      query = query.order('created_at', { ascending: false }),
      
    }, 

              const isClient = user?.id === transaction.user_id;              const isPending =
                transaction.status === 'pending' || transaction.status === 'in_escrow'
              const isInEscrow = transaction.in_escrow
              const canRelease = !isClient && isPending && isInEscrow
              const canCancel = isClient && isPending
              const canRefund = isClient && transaction.status === 'released'
              const counterpartyName = isClient 
                ? transaction.provider?.display_name || 'Service Provider' 
                : 'Client'
}
  )
}
;