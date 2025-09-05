
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAdminQuotes } from "@/hooks/useAdminQuotes",
import { useAuth } from "@/hooks/useAuth",
import { 
  Card,
  CardContent
} from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Navigate } from "react-router-dom",
import type { QuoteRequest } from "@/types/quotes",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { QuoteDetails } from "@/components/quotes/QuoteDetails",
import { ExportToCSV } from "@/components/quotes/ExportToCSV",
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  QuoteStatusCards,
  QuotesFilter,
  QuotesTable
<<<<<<< HEAD
} from "@/components/admin/quotes",
=======
} from &quot;@/components/admin/quotes&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export default function QuoteManager() {
  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin',
=======
import React, {_useState} from "react";
import {_Card, _CardContent} from "@/components/ui/card";
import type {_QuoteRequest} from "@/types/quotes";
import {_QuoteStatusCards, _QuotesFilter, _QuotesTable} from "@/components/admin/quotes";

export default function QuoteManager() {_const { user} = useAuth();
  const _isAdmin = user?.userType === 'admin';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),

<<<<<<< HEAD
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
  } = useAdminQuotes(),

  // Count quotes by status
  const statusCounts = {
    new: quotes.filter(q => q.status === 'new').length,
    in_review: quotes.filter(q => q.status === 'in_review').length,
    accepted: quotes.filter(q => q.status === 'accepted').length,
    responded: quotes.filter(q => q.status === 'responded').length,
    closed: quotes.filter(q => q.status === 'closed').length
  },

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote),
    setShowDetails(true)
  },

  const handleResetFilters = () => {
    setStatusFilter('all'),
    setArchiveFilter('all'),
    setSearchQuery(''),
    setDateRange({ from: undefined, to: undefined })
  },

  if (!isAdmin) {
<<<<<<< HEAD
    return <Navigate to="/unauthorized" replace />
=======
    return <Navigate to=&quot;/unauthorized&quot; replace />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
<<<<<<< HEAD
              <ExportToCSV quotes={quotes} filename=&quot;zion-quote-requests&quot; />
=======
              <ExportToCSV quotes={_quotes} filename="zion-quote-requests" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
            
<<<<<<< HEAD
            {/* Tabs for Active/Archived */}
            <Tabs defaultValue=&quot;active&quot; className=&quot;mb-6&quot;>
              <TabsList className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                <TabsTrigger value=&quot;active&quot;>Active Quotes</TabsTrigger>
                <TabsTrigger value=&quot;archived&quot;>Archived Quotes</TabsTrigger>
              </TabsList>
              
              <TabsContent value=&quot;active&quot;>
                {/* Quotes Table */}
                <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light overflow-hidden&quot;>
=======
            {_/* Tabs for Active/Archived */}
            <Tabs defaultValue="active" className="mb-6">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
                <TabsTrigger value="active">Active Quotes</TabsTrigger>
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="active">
                {_/* Quotes Table */}
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
              
              <TabsContent value=&quot;archived&quot;>
                <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light overflow-hidden&quot;>
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
<<<<<<< HEAD
          quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
            setShowDetails(false),
            setSelectedQuote(null)
          }}
=======
          quote={_selectedQuote}
          isOpen={_showDetails}
          onClose={_() => {
            setShowDetails(false);
            setSelectedQuote(null);}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
        
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
