
import React, { useState } from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { useAdminQuotes } from &quot;@/hooks/useAdminQuotes&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { 
  Card,
  CardContent
} from &quot;@/components/ui/card&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Navigate } from &quot;react-router-dom&quot;;
import type { QuoteRequest } from &quot;@/types/quotes&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
import { QuoteDetails } from &quot;@/components/quotes/QuoteDetails&quot;;
import { ExportToCSV } from &quot;@/components/quotes/ExportToCSV&quot;;
import {
  QuoteStatusCards,
  QuotesFilter,
  QuotesTable
} from &quot;@/components/admin/quotes&quot;;

export default function QuoteManager() {
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);

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
    new: quotes.filter(q => q.status === 'new').length,
    in_review: quotes.filter(q => q.status === 'in_review').length,
    accepted: quotes.filter(q => q.status === 'accepted').length,
    responded: quotes.filter(q => q.status === 'responded').length,
    closed: quotes.filter(q => q.status === 'closed').length
  };

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote);
    setShowDetails(true);
  };

  const handleResetFilters = () => {
    setStatusFilter('all');
    setArchiveFilter('all');
    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined });
  };

  if (!isAdmin) {
    return <Navigate to=&quot;/unauthorized&quot; replace />;
  }

  return (
    <ProtectedRoute adminOnly>
      <div>
        <Header />
        <div className=&quot;min-h-screen bg-zion-blue px-4 py-8&quot;>
          <div className=&quot;container mx-auto&quot;>
            <div className=&quot;flex flex-col md:flex-row justify-between items-start md:items-center mb-8&quot;>
              <div>
                <h1 className=&quot;text-3xl font-bold text-white mb-2&quot;>Quote Request Manager</h1>
                <p className=&quot;text-zion-slate-light&quot;>Manage and respond to all talent hire requests</p>
              </div>
              <ExportToCSV quotes={quotes} filename=&quot;zion-quote-requests&quot; />
            </div>
            
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />
            
            {/* Filters */}
            <QuotesFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
              dateRange={dateRange}
              setDateRange={setDateRange}
              onReset={handleResetFilters}
            />
            
            {/* Tabs for Active/Archived */}
            <Tabs defaultValue=&quot;active&quot; className=&quot;mb-6&quot;>
              <TabsList className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                <TabsTrigger value=&quot;active&quot;>Active Quotes</TabsTrigger>
                <TabsTrigger value=&quot;archived&quot;>Archived Quotes</TabsTrigger>
              </TabsList>
              
              <TabsContent value=&quot;active&quot;>
                {/* Quotes Table */}
                <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light overflow-hidden&quot;>
                  <QuotesTable
                    quotes={quotes.filter(quote => !quote.is_archived)}
                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}
                  />
                </Card>
              </TabsContent>
              
              <TabsContent value=&quot;archived&quot;>
                <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light overflow-hidden&quot;>
                  <QuotesTable
                    quotes={quotes.filter(quote => quote.is_archived)}
                    isArchived={true}
                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}
                  />
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Quote Details Modal */}
        <QuoteDetails
          quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
            setShowDetails(false);
            setSelectedQuote(null);
          }}
        />
        
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
