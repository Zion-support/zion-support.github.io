
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAdminQuotes} from "@/hooks/useAdminQuotes";
import {useAuth} from "@/hooks/useAuth";
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Navigate} from "react-router-dom";

import type { QuoteRequest } from "@/types/quotes";

import {ProtectedRoute} from "@/components/ProtectedRoute";
import {QuoteDetails} from "@/components/quotes/QuoteDetails";
import {ExportToCSV} from "@/components/quotes/ExportToCSV";
import {QuoteStatusCards, QuotesFilter, QuotesTable} from "@/components/admin/quotes";


export default function QuoteManager() {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
import type { QuoteRequest } from "@/types/quotes",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { QuoteDetails } from "@/components/quotes/QuoteDetails",
import { ExportToCSV } from "@/components/quotes/ExportToCSV",
import {
  QuoteStatusCards,
  QuotesFilter,
  QuotesTable
} from "@/components/admin/quotes",

export default function QuoteManager() {
  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin',
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),

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
  } = useAdminQuotes(),

  // Count quotes by status
  const statusCounts = {
    new: quotes.filter(q => q.status === 'new').length
    in_review: quotes.filter(q => q.status === 'in_review').length
    accepted: quotes.filter(q => q.status === 'accepted').length
    responded: quotes.filter(q => q.status === 'responded').length
    closed: quotes.filter(q => q.status === 'closed').length
  }
  },

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote)
    setShowDetails(true)
  }
  },

  const handleResetFilters = () => {
    setStatusFilter('all');
    setArchiveFilter('all');
    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined })
  }
  },

  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />
=======

  // Count quotes by status;
  const statusCounts = {;
    new: quotes && quotes.filter(q => q && q.status === 'new').length,;
    in_review: quotes && quotes.filter(q => q && q.status === 'in_review').length,;
    accepted: quotes && quotes.filter(q => q && q.status === 'accepted').length,;
    responded: quotes && quotes.filter(q => q && q.status === 'responded').length,;
    closed: quotes && quotes.filter(q => q && q.status === 'closed').length;
  };

  const handleViewDetails = (quote: QuoteRequest) => {;
    setSelectedQuote(quote),;
    setShowDetails(true);
  };

  const handleResetFilters = () => {;
    setStatusFilter('all');
    setArchiveFilter('all');
    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined });
  };

  if (!isAdmin) {;
    return <Navigate to="/unauthorized" replace />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
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
              <ExportToCSV quotes={quotes} filename="zion-quote-requests" />
            </div>
            
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAdminQuotes } from "@/hooks/useAdminQuotes",;
import { useAuth } from "@/hooks/useAuth",;
import {;
  Card,;
  CardContent;
} from "@/components/ui/card",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Navigate } from "react-router-dom",;
import type { QuoteRequest } from "@/types/quotes",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { QuoteDetails } from "@/components/quotes/QuoteDetails",;
import { ExportToCSV } from "@/components/quotes/ExportToCSV",;
import {;
  QuoteStatusCards,;
  QuotesFilter,;
  QuotesTable;
} from "@/components/admin/quotes",;
export default function QuoteManager() {;
  const { user } = useAuth(),;
  const isAdmin = user?.userType === 'admin',;
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
    updateStatus,;
    toggleArchive,;
    deleteQuote;
  } = useAdminQuotes(),;
  // Count quotes by status;
  const statusCounts = {;
    new: quotes.filter(q => q.status === 'new').length,;
    in_review: quotes.filter(q => q.status === 'in_review').length,;
    accepted: quotes.filter(q => q.status === 'accepted').length,;
    responded: quotes.filter(q => q.status === 'responded').length,;
    closed: quotes.filter(q => q.status === 'closed').length;
  },;
  const handleViewDetails = (quote: QuoteRequest) => {;
    setSelectedQuote(quote),;
    setShowDetails(true);
  },;
  const handleResetFilters = () => {;
    setStatusFilter('all'),;
    setArchiveFilter('all'),;
    setSearchQuery(''),;
    setDateRange({ from: undefined, to: undefined });
  };
  if (!isAdmin) {;
    return <Navigate to="/unauthorized" replace />;
  }
;
  return (;

    <ProtectedRoute adminOnly>;
      <div>;
        <Header />;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;
          <div className="container mx-auto">;
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">;
              <div>;
                <h1 className="text-3xl font-bold text-white mb-2">Quote Request Manager</h1>;
                <p className="text-zion-slate-light">Manage and respond to all talent hire requests</p>;
              </div>;
              <ExportToCSV quotes={quotes} filename="zion-quote-requests" />;
            </div>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

            />;

            {/* Tabs for Active/Archived */}
            <Tabs defaultValue="active" className="mb-6">;
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;
                <TabsTrigger value="active">Active Quotes</TabsTrigger>;
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>;
              </TabsList>;

              <TabsContent value="active">;

                {/* Quotes Table */}
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
                  <QuotesTable
                    quotes={quotes && quotes.filter(quote => !quote && quote.is_archived)}
                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}

                  />;
                </Card>;
              </TabsContent>;

              <TabsContent value="archived">;
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;

                  <QuotesTable
                    quotes={quotes && quotes.filter(quote => quote && quote.is_archived)}
                    isArchived={true}

                  />;
                </Card>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Quote Details Modal */}
        <QuoteDetails
          quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
            setShowDetails(false);

            setSelectedQuote(null)
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          }}
        />
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
=======
            setSelectedQuote(null);
          }}
        />;

        <Footer />;
      </div>;
    </ProtectedRoute>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    update_status;
    toggle_archive;
    delete_quote;
  } = useAdminQuotes ();
;
  // Count quotes by status;
  const status_counts = {
    new: quotes.filter (q => q.status === 'new').length,
    in_review: quotes.filter (q => q.status === 'in_review').length,
    accepted: quotes.filter (q => q.status === 'accepted').length,
    responded: quotes.filter (q => q.status === 'responded').length,
    closed: quotes.filter (q => q.status === 'closed').length;
  }
;
  const handleViewDetails = (quote: QuoteRequest) =>: any {
    setSelectedQuote (quote),
    setShowDetails (true);
  }
;
  const handleResetFilters = () =>: any {
    setStatusFilter ('all');
    setArchiveFilter ('all');
    setSearchQuery ('');
    setDateRange ({ from: undefined, to: undefined });
  }
;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/unauthorized" replace />;
  }
  return (
    <ProtectedRoute admin_only>;
      <div>;
        <Header />;
        <div className="min - h-screen bg - zion - blue px - 4 py - 8">;
          <div className="container mx - auto">;
            <div className="flex flex - col md:flex - row justify - between items - start md:items - center mb - 8">;
              <div>;
                <h1 className="text - 3xl font - bold text - white mb - 2">Quote Request Manager</h1>;
                <p className="text - zion - slate - light">Manage and respond to all talent hire requests</p>;
              </div>;
              <ExportToCSV quotes={quotes} filename="zion - quote - requests" />;
            </div>;
            {/* Status Summary Cards */}
            <QuoteStatusCards status_counts={status_counts} />;
            {/* Filters */}
            <QuotesFilter;
              search_query={search_query}
              setSearchQuery={setSearchQuery}
              status_filter={status_filter}
              setStatusFilter={setStatusFilter}
              archive_filter={archive_filter}
              setArchiveFilter={setArchiveFilter}
              date_range={date_range}
              setDateRange={setDateRange}
              on_reset={handleResetFilters}
            />;
            {/* Tabs for Active / Archived */}
            <Tabs default_value="active" className="mb - 6">;
              <TabsList className="bg - zion - blue - dark border border - zion - blue - light">;
                <TabsTrigger value="active">Active Quotes</TabsTrigger>;
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>;
              </TabsList>;
              <TabsContent value="active">;
                {/* Quotes Table */}
                <Card className="bg - zion - blue - dark border border - zion - blue - light overflow - hidden">;
                  <QuotesTable;
                    quotes={quotes.filter (quote => !quote.is_archived)}
                    is_loading={is_loading}
                    update_status={update_status}
                    toggle_archive={toggle_archive}
                    delete_quote={delete_quote}
                    onViewDetails={handleViewDetails}
                  />;
                </Card>;
              </TabsContent>;
              <TabsContent value="archived">;
                <Card className="bg - zion - blue - dark border border - zion - blue - light overflow - hidden">;
                  <QuotesTable;
                    quotes={quotes.filter (quote => quote.is_archived)}
                    is_archived={true}
                    is_loading={is_loading}
                    update_status={update_status}
                    toggle_archive={toggle_archive}
                    delete_quote={delete_quote}
                    onViewDetails={handleViewDetails}
                  />;
                </Card>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
        {/* Quote Details Modal */}
        <QuoteDetails;
          quote={selected_quote}
          is_open={show_details}
          on_close={() => {
            setShowDetails (false);
            setSelectedQuote (null);
          }}
        />;
        <Footer />;
      </div>;
    </ProtectedRoute>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
