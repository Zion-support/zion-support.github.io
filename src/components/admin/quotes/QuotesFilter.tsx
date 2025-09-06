=======
interface QuotesFilterProps {;

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea


interface QuotesFilterProps {
  searchQuery: string;
<<<<<<< HEAD
  setSearchQuery: (value: string) => void;
  statusFilter: QuoteStatus | 'all';
  setStatusFilter: (value: QuoteStatus | 'all') => void;
  archiveFilter: 'active' | 'archived' | 'all';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
  onReset: () => void

}
