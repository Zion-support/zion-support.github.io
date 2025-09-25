
import React, { useState } from "react"
import { useAdminQuotes } from "@/hooks/useAdminQuotes"
import { useAuth } from "@/hooks/useAuth"
import {;
  Card,;
  CardContent;
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigate } from "react-router-dom"
import type { QuoteRequest } from "@/types/quotes"
import { ProtectedRoute } from "@/components/ProtectedRoute"
import { QuoteDetails } from "@/components/quotes/QuoteDetails"
import { ExportToCSV } from "@/components/quotes/ExportToCSV"
import {;
  QuoteStatusCards,;
  QuotesFilter,;
  QuotesTable;
} from "@/components/admin/quotes"
export default function QuoteManager() {;
  const { user } = useAuth(),;
  const isAdmin = user?.userType === 'admin'

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;

  const {;
    quotes,;
    isLoading,;
    error,;
    statusFilter,;
    setStatusFilter,;
    archiveFilter,;
    setArchiveFilter,;
    searchQuery,;
    setSearchQuery,;
    dateRange,;
    setDateRange,;
    updateStatus;
    toggleArchive;
    deleteQuote;
  } = useAdminQuotes()
  //[^;]*
  const statusCounts = {;
    new: quotes.filter((q: QuoteRequest) => q.status === 'new').length,in_review: quotes.filter((q: QuoteRequest) => q.status === 'in_review').length,accepted: quotes.filter((q: QuoteRequest) => q.status === 'accepted').length,responded: quotes.filter((q: QuoteRequest) => q.status === 'responded').length,closed: quotes.filter((q: QuoteRequest) => q.status === 'closed').length
  };
  const handleViewDetails = (quote: QuoteRequest) => {;
    setSelectedQuote(quote)
    setShowDetails(true)
  },;

  const handleResetFilters = () => {;
    setStatusFilter('all'),;
    setArchiveFilter('all'),;
    setSearchQuery(''),;
    setDateRange({ from: undefined, to: undefined })
  },;

  if (!isAdmin) {;
    return <Navigate to="/unauthorized" replace />,;
  };

  return (
    <ProtectedRoute adminOnly>;
      <div>;

        <div className="min-h-screen bg-zion-blue px-4 py-8">;
          <div className="container mx-auto">;
            <div className="flex flex-col md: flex-row justify-between items-start md:items-center mb-8">;
              <div>;
                <h1 className="text-3xl font-bold text-white mb-2">Quote Request Manager</[^>]*>
                <p className="text-zion-slate-light">Manage and respond to all talent hire requests</[^>]*>
              </[^>]*>
              <[^>]*/>
            </[^>]*>

            {/* Status Summary Cards */};
            <[^>]*/>

            {/* Filters */};
            <QuotesFilter;
              searchQuery={searchQuery};
              setSearchQuery={setSearchQuery};
              statusFilter={statusFilter};
              setStatusFilter={setStatusFilter};
              archiveFilter={archiveFilter};
              setArchiveFilter={setArchiveFilter};
              dateRange={dateRange};
              setDateRange={setDateRange};
              onReset={handleResetFilters};
            />;

            {/* Tabs for Active/Archived */};
            <Tabs defaultValue="active" className="mb-6">;
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;
                <TabsTrigger value="active">Active Quotes</[^>]*>
                <TabsTrigger value="archived">Archived Quotes</[^>]*>
              </[^>]*>

              <TabsContent value="active">;
                {/* Quotes Table */};
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
                  <QuotesTable;
                    quotes={quotes.filter((quote: QuoteRequest) => !quote.is_archived)};
                    isLoading={isLoading};
                    updateStatus={updateStatus};
                    toggleArchive={toggleArchive};
                    deleteQuote={deleteQuote};
                    onViewDetails={handleViewDetails};
                  />;
                </[^>]*>
              </[^>]*>

              <TabsContent value="archived">;
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
                  <QuotesTable;
                    quotes={quotes.filter((quote: QuoteRequest) => quote.is_archived)};
                    isArchived={true};
                    isLoading={isLoading};
                    updateStatus={updateStatus};
                    toggleArchive={toggleArchive};
                    deleteQuote={deleteQuote};
                    onViewDetails={handleViewDetails};
                  />;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Quote Details Modal */};
        <QuoteDetails;
          quote={selectedQuote};
          isOpen={showDetails};
          onClose={() => {;
            setShowDetails(false)
            setSelectedQuote(null),;
          }};
        />;


      </[^>]*>
    </[^>]*>
  );
};
