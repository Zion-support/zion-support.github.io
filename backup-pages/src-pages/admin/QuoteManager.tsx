<<<<<<< HEAD
import {

  Card,
  CardContent
 } from '@/components/ui/card';
import { QuoteStatusCards,
=======
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
  QuotesFilter,
  QuotesTable'
 } from '@/components/admin/quotes';
export { function };
export default function QuoteManager(...args[]):  {

<<<<<<< HEAD
  const { user } = useAuth();
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
=======
  const { user } = useAuth();'
  const isAdmin = user?.userType === 'admin';  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
  const [showDetails, setShowDetails] = useState<typeof false>(false);
  const {

    quotes,
    isLoading,
    error,
    statusFilter,
    setStatusFilter,
    archiveFilter,
    setArchiveFilter,
    searchQuery,
    setSearchQuery,
    dateRange,
    setDateRange,
    updateStatus,
    toggleArchive,
    deleteQuote
  } = useAdminQuotes();
  // Count quotes by status
  const statusCounts = {
'"