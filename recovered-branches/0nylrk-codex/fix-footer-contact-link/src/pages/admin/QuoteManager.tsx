
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
import { ExportToCSV } from "@/components/quotes/ExportToCSV",import {
  QuoteStatusCards,
  QuotesFilter,
  QuotesTable
} from "@/components/admin/quotes",
export default function QuoteManager() {
  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin',
import React, {useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import type {QuoteRequest} from "@/types/quotes";
import {QuoteStatusCards, QuotesFilter, QuotesTable} from "@/components/admin/quotes";

export default function QuoteManager() {const { user} = useAuth();
  const isAdmin = user?.userType === 'admin';
  
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
  } = useAdminQuotes(),

  // Count quotes by status,
const statusCounts = {
    new: quotes.filter(q => q.status === 'new').length,
    inreview: quotes.filter(q => q.status === 'inreview').length,
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
    return <Navigate to="/unauthorized" replace />  }
  const {quotes, isLoading, error, statusFilter, setStatusFilter, archiveFilter, setArchiveFilter, searchQuery, setSearchQuery, dateRange, setDateRange, updateStatus, toggleArchive, deleteQuote} = useAdminQuotes();

  // Count quotes by status,
const statusCounts = {new: quotes.filter(q => q.status === 'new').length, in_review: quotes.filter(q => q.status === 'inreview').length, accepted: quotes.filter(q => q.status === 'accepted').length, responded: quotes.filter(q => q.status === 'responded').length, closed: quotes.filter(q => q.status === 'closed').length};

  const handleViewDetails = (quote: QuoteRequest) => {setSelectedQuote(quote);
    setShowDetails(true)};

  const handleResetFilters = () => {setStatusFilter('all');
    setArchiveFilter('all');
    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined})
  };

  if (!isAdmin) {return <Navigate to="/unauthorized" replace />}

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
              <ExportToCSV quotes={quotes} filename=&quot;zion-quote-requests&quot; />            </div>
            
            {_/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />
            
            {_/* Filters */}
            <QuotesFilter,
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
                <Card className=&quot;bg-zion-blue-dark border border-zion-blue-light overflow-hidden&quot;>                  <QuotesTable,
quotes={quotes.filter(quote => !quote.isarchived)}
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
                  <QuotesTable,
quotes={quotes.filter(quote => quote.isarchived)}
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
        
        {_/* Quote Details Modal */}
        <QuoteDetails,
quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
            setShowDetails(false),
            setSelectedQuote(null)
          }}        />
        
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
