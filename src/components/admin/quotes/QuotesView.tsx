import React, { useState, useEffect } from 'react',
import { QuotesStats } from './QuotesStats',
import { QuotesFilter } from './QuotesFilter',
import { QuotesBulkActions } from './QuotesBulkActions',
import { QuotesTable } from './QuotesTable',
import { QuotesPagination } from './QuotesPagination',
import { Button } from '@/components/ui/button',
import { Plus } from 'lucide-react',
interface Quote {
  id: string,
  clientName: string,
  projectTitle: string,
  amount: number,
  status: 'pending' | 'approved' | 'rejected' | 'expired',
  createdAt: string,
  validUntil: string,
  isArchived: boolean}

type QuoteStatus = 'pending' | 'approved' | 'rejected' | 'expired';

type QuoteStatus = 'pending' | 'approved' | 'rejected' | 'expired',
export const QuotesView: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>([]);
  const [selectedQuotes, setSelectedQuotes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');
  const [archiveFilter, setArchiveFilter] = useState<'active' | 'archived' | 'all'>('active');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockQuotes: Quote[] = [
      {
        id: '1',
        clientName: 'Acme Corp',
        projectTitle: 'Website Redesign',
        amount: 15000,
        status: 'pending',
        createdAt: '2024-01-15',
        validUntil: '2024-02-15',
        isArchived: false
      },
      {
        id: '2',
        clientName: 'TechStart Inc',
        projectTitle: 'Mobile App Development',
        amount: 25000,
        status: 'approved',
        createdAt: '2024-01-10',
        validUntil: '2024-02-10',
        isArchived: false
      },
      {
        id: '3',
        clientName: 'Global Solutions',
        projectTitle: 'Cloud Migration',
        amount: 50000,
        status: 'rejected',
        createdAt: '2024-01-05',
        validUntil: '2024-02-05',
        isArchived: false
      }
    ],
    setQuotes(mockQuotes);
  }, []);

  // Filter quotes based on search and filters
  useEffect(() => {
    let filtered = quotes;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(quote =>
        quote.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quote.projectTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(quote => quote.status === statusFilter);

    // Archive filter
    if (archiveFilter !== 'all') {
      filtered = filtered.filter(quote => 
        archiveFilter === 'archived' ? quote.isArchived : !quote.isArchived
      );

    setFilteredQuotes(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [quotes, searchQuery, statusFilter, archiveFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredQuotes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentQuotes = filteredQuotes.slice(startIndex, endIndex);

  // Stats calculation
  const totalQuotes = quotes.length;
  const pendingQuotes = quotes.filter(q => q.status === 'pending').length;
  const approvedQuotes = quotes.filter(q => q.status === 'approved').length;
  const totalValue = quotes.reduce((sum, quote) => sum + quote.amount, 0);
  const averageValue = totalQuotes > 0 ? totalValue / totalQuotes : 0;
  const conversionRate = totalQuotes > 0 ? (approvedQuotes / totalQuotes) * 100 : 0;

  // Event handlers
  const handleSelectQuote = (id: string) => {
    setSelectedQuotes(prev =>
      prev.includes(id)
        ? prev.filter(quoteId => quoteId !== id)
        : [...prev, id]
    );;

  const handleSelectAll = () => {
    if (selectedQuotes.length === currentQuotes.length) {
      setSelectedQuotes([]); else {
      setSelectedQuotes(currentQuotes.map(quote => quote.id));
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setStatusFilter('all');
    setArchiveFilter('active');;

  const handleViewQuote = (id: string) => {
    console.log('View quote:', id);;

  const handleEditQuote = (id: string) => {
    console.log('Edit quote:', id);;

  const handleArchiveQuote = (id: string) => {
    setQuotes(prev =>
      prev.map(quote =>
        quote.id === id ? { ...quote, isArchived: !quote.isArchived } : quote
      )
    )};

  const handleDeleteQuote = (id: string) => {
    setQuotes(prev => prev.filter(quote => quote.id !== id))};

  const handleArchiveSelected = () => {
    setQuotes(prev =>
      prev.map(quote =>
        selectedQuotes.includes(quote.id)
          ? { ...quote, isArchived: true }
          : quote
      )
    ),
    setSelectedQuotes([]);
  };

  const handleDeleteSelected = () => {
    setQuotes(prev => prev.filter(quote => !selectedQuotes.includes(quote.id)));
    setSelectedQuotes([]);;

  const handleExportSelected = () => {
    console.log('Export selected quotes:', selectedQuotes);;

  const handleEmailSelected = () => {
    console.log('Email selected quotes:', selectedQuotes);;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Quotes Management</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Quote
        </Button>
      </div>

      <QuotesStats
        totalQuotes={totalQuotes}
        pendingQuotes={pendingQuotes}
        approvedQuotes={approvedQuotes}
        totalValue={totalValue}
        averageValue={averageValue}
        conversionRate={conversionRate}
      />

      <QuotesFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        archiveFilter={archiveFilter}
        setArchiveFilter={setArchiveFilter}
        dateRange={undefined}
        setDateRange={() => {}}
        onReset={handleResetFilters}
      />

      <QuotesBulkActions
        selectedCount={selectedQuotes.length}
        onArchiveSelected={handleArchiveSelected}
        onDeleteSelected={handleDeleteSelected}
        onExportSelected={handleExportSelected}
        onEmailSelected={handleEmailSelected}
      />

      <QuotesTable
        quotes={currentQuotes}
        selectedQuotes={selectedQuotes}
        onSelectQuote={handleSelectQuote}
        onSelectAll={handleSelectAll}
        onViewQuote={handleViewQuote}
        onEditQuote={handleEditQuote}
        onArchiveQuote={handleArchiveQuote}
        onDeleteQuote={handleDeleteQuote}
      />

      <QuotesPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalItems={filteredQuotes.length}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );;