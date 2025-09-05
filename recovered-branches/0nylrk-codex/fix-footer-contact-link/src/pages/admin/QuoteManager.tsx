
import React, {_useState} from "react";
import {_Card, _CardContent} from "@/components/ui/card";
import type {_QuoteRequest} from "@/types/quotes";
import {_QuoteStatusCards, _QuotesFilter, _QuotesTable} from "@/components/admin/quotes";

export default function QuoteManager() {_const { user} = useAuth();
  const _isAdmin = user?.userType === 'admin';
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const {_quotes, _isLoading, _error, _statusFilter, _setStatusFilter, _archiveFilter, _setArchiveFilter, _searchQuery, _setSearchQuery, _dateRange, _setDateRange, _updateStatus, _toggleArchive, _deleteQuote} = useAdminQuotes();

  // Count quotes by status
  const _statusCounts = {_new: quotes.filter(q => q.status === 'new').length, _in_review: quotes.filter(q => q.status === 'in_review').length, _accepted: quotes.filter(q => q.status === 'accepted').length, _responded: quotes.filter(q => q.status === 'responded').length, _closed: quotes.filter(q => q.status === 'closed').length};

  const _handleViewDetails = (_quote: QuoteRequest) => {_setSelectedQuote(quote);
    setShowDetails(true);};

  const _handleResetFilters = () => {_setStatusFilter('all');
    setArchiveFilter('all');
    setSearchQuery('');
    setDateRange({ from: undefined, _to: undefined});
  };

  if (!isAdmin) {_return <Navigate to="/unauthorized" replace />;}

  return (
    <ProtectedRoute adminOnly>
      <div>
        <Header />
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Quote Request Manager</h1>
                <p className="text-zion-slate-light">Manage and respond to all talent hire requests</p>
              </div>
              <ExportToCSV quotes={_quotes} filename="zion-quote-requests" />
            </div>
            
            {_/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={_statusCounts} />
            
            {_/* Filters */}
            <QuotesFilter
              searchQuery={_searchQuery}
              setSearchQuery={_setSearchQuery}
              statusFilter={_statusFilter}
              setStatusFilter={_setStatusFilter}
              archiveFilter={_archiveFilter}
              setArchiveFilter={_setArchiveFilter}
              dateRange={_dateRange}
              setDateRange={_setDateRange}
              onReset={_handleResetFilters}
            />
            
            {_/* Tabs for Active/Archived */}
            <Tabs defaultValue="active" className="mb-6">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
                <TabsTrigger value="active">Active Quotes</TabsTrigger>
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="active">
                {_/* Quotes Table */}
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
                  <QuotesTable
                    quotes={_quotes.filter(quote => !quote.is_archived)}
                    isLoading={_isLoading}
                    updateStatus={_updateStatus}
                    toggleArchive={_toggleArchive}
                    deleteQuote={_deleteQuote}
                    onViewDetails={_handleViewDetails}
                  />
                </Card>
              </TabsContent>
              
              <TabsContent value="archived">
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
                  <QuotesTable
                    quotes={_quotes.filter(quote => quote.is_archived)}
                    isArchived={_true}
                    isLoading={_isLoading}
                    updateStatus={_updateStatus}
                    toggleArchive={_toggleArchive}
                    deleteQuote={_deleteQuote}
                    onViewDetails={_handleViewDetails}
                  />
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {_/* Quote Details Modal */}
        <QuoteDetails
          quote={_selectedQuote}
          isOpen={_showDetails}
          onClose={_() => {
            setShowDetails(false);
            setSelectedQuote(null);}}
        />
        
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
