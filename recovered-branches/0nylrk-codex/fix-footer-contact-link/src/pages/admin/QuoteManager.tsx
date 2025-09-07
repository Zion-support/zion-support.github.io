<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
class ErrorBoundary extends React.Component {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAdminQuotes} from "@/hooks/useAdminQuotes";
import {useAuth} from "@/hooks/useAuth";
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {Navigate} from "react-router-dom";
<<<<<<< HEAD
import type { QuoteRequest } from "@/types/quotes";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {QuoteDetails} from "@/components/quotes/QuoteDetails";
import {ExportToCSV} from "@/components/quotes/ExportToCSV";
import {QuoteStatusCards, QuotesFilter, QuotesTable} from "@/components/admin/quotes";

<<<<<<< HEAD
"
=======
export default function QuoteManager() {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';
>>>>>>> merged-prs-20250907-203621
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAdminQuotes } from "@/hooks/useAdminQuotes";
import { useAuth } from "@/hooks/useAuth";
import { 
  Card;
  CardContent
} from "@/components/ui/card",
<<<<<<< HEAD
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigate } from "react-router-dom";
import type { QuoteRequest } from "@/types/quotes";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { QuoteDetails } from "@/components/quotes/QuoteDetails";
import { ExportToCSV } from "@/components/quotes/ExportToCSV";
import {
  QuoteStatusCards;
  QuotesFilter;
  QuotesTable
} from "@/components/admin/quotes",

import {ProtectedRoute} from "@/components/ProtectedRoute";
import {QuoteDetails} from "@/components/quotes/QuoteDetails";
import {ExportToCSV} from "@/components/quotes/ExportToCSV";
import {QuoteStatusCards, QuotesFilter, QuotesTable} from "@/components/admin/quotes";
export default function QuoteManager() {
  const { user } = useAuth($2);
  const isAdmin = $2;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState($2);
  const {
=======
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Navigate } from "react-router-dom",
import type { QuoteRequest } from "@/types/quotes";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import type { QuoteRequest } from "@/types/quotes";
"
import {ProtectedRoute} from "@/components/ProtectedRoute";"
import {QuoteDetails} from "@/components/quotes/QuoteDetails";"
import {ExportToCSV} from "@/components/quotes/ExportToCSV";"
import {QuoteStatusCards, QuotesFilter, QuotesTable} from "@/components/admin/quotes";
<<<<<<< HEAD
=======

<<<<<<< HEAD
export default function QuoteManager() { return null; }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function QuoteManager() {;
export default function QuoteManager() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
<<<<<<< HEAD

  const {;

import React, { useState } from "react",

import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAdminQuotes } from "@/hooks/useAdminQuotes";
import { useAuth } from "@/hooks/useAuth";
import {
  Card;
  CardContent
} from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Navigate } from "react-router-dom",

    is_loading;
    error;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    search_query;
    setSearchQuery;
    date_range;
    setDateRange;
<<<<<<< HEAD
import type { QuoteRequest } from "@/types/quotes","
import { ProtectedRoute } from "@/components/ProtectedRoute","
import { QuoteDetails } from "@/components/quotes/QuoteDetails","
import { ExportToCSV } from "@/components/quotes/ExportToCSV","
  }
=======

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useState } from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { useAdminQuotes } from '@/hooks / useAdminQuotes';
import { use_auth } from '@/hooks / use_auth';
import { Card, CardContent } from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Navigate } from './react-router-dom';
import type { QuoteRequest } from "@/types / quotes";
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { QuoteDetails } from '@/components / quotes / QuoteDetails';
import { ExportToCSV } from '@/components / quotes / ExportToCSV';
import { QuoteStatusCards, QuotesFilter, QuotesTable } from '@/components / admin / quotes';
;
export default /**
 * QuoteManager - Function description
 */
function QuoteManager() {
  const { user } = use_auth ();
  const is_admin = user?.user_type === 'admin';
;
  const [selected_quote, setSelectedQuote] = useState < QuoteRequest | null>(null);
  const [show_details, setShowDetails] = useState (false);
;
  const {
    quotes;
    is_loading;
    error;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    search_query;
    setSearchQuery;
    date_range;
    setDateRange;
import type { QuoteRequest } from "@/types/quotes",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { QuoteDetails } from "@/components/quotes/QuoteDetails",
import { ExportToCSV } from "@/components/quotes/ExportToCSV",
import {
  QuoteStatusCards,
  QuotesFilter,
  QuotesTable
} from "@/components/admin/quotes",

<<<<<<< HEAD
import type { QuoteRequest } from "@/types/quotes",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { QuoteDetails } from "@/components/quotes/QuoteDetails",

import { ExportToCSV } from "@/components/quotes/ExportToCSV",
import {}
>>>>>>> origin/chore/fix-lint-and-merge
  QuoteStatusCards,
  QuotesFilter,
  QuotesTable"
} from "@/components/admin/quotes",

export default function QuoteManager() {}
  const { user } = useAuth(),'

  const isAdmin = user?.userType === 'admin',
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),
=======
export default function QuoteManager() {
  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin',
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const {

>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
    updateStatus,
    toggleArchive,
    deleteQuote
  } = useAdminQuotes($2);
  // Count quotes by status
  const statusCounts = $2;
    in_review: quotes.filter(q = $2;
    accepted: quotes.filter(q = $2;
    responded: quotes.filter(q = $2;
    closed: quotes.filter(q = $2;
  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote($2);
    setShowDetails(true)
  },
=======

  } = useAdminQuotes(),

<<<<<<< HEAD
=======


<<<<<<< HEAD
  } = useAdminQuotes();
  } = useAdminQuotes(),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Count quotes by status
  const statusCounts = {
    new: quotes.filter(q => q.status === 'new').length
    in_review: quotes.filter(q => q.status === 'in_review').length
    accepted: quotes.filter(q => q.status === 'accepted').length
    responded: quotes.filter(q => q.status === 'responded').length
    closed: quotes.filter(q => q.status === 'closed').length
<<<<<<< HEAD

  const handleResetFilters = () => {
    setStatusFilter('all');
    setArchiveFilter('all');
    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined })

    return <Navigate to="/unauthorized" replace />
<<<<<<< HEAD
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
  }
  return (
  }
  },

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote)
    setShowDetails(true)
  }
  },

  const handleResetFilters = () => {
    setStatusFilter('all'),
    setArchiveFilter('all'),
    setSearchQuery(''),
    setDateRange({ from: undefined, to: undefined })
  }
  },

  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


            

<<<<<<< HEAD
=======

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote)
    setShowDetails(true)

  },



  const handleResetFilters = () => {
    setStatusFilter('all');
    setArchiveFilter('all');
    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined })


  },



  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  // Count quotes by status;
  const statusCounts = {;'
    new: quotes && quotes.filter(q => q && q.status === 'new').length,;'
    in_review: quotes && quotes.filter(q => q && q.status === 'in_review').length,;'
    accepted: quotes && quotes.filter(q => q && q.status === 'accepted').length,;'
    responded: quotes && quotes.filter(q => q && q.status === 'responded').length,;'

    closed: quotes && quotes.filter(q => q && q.status === 'closed').length;
  };

  const handleViewDetails = (quote: QuoteRequest) => {;
    setSelectedQuote(quote),;
    setShowDetails(true);
  };

    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined });
  };

    return <Navigate to="/unauthorized" replace />;
  }
  return (

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useState } from "react",;

import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAdminQuotes } from "@/hooks/useAdminQuotes",;
import { useAuth } from "@/hooks/useAuth",;
import { ;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {;
  Card,;
  CardContent;"
} from "@/components/ui/card",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Navigate } from "react-router-dom",;"
import type { QuoteRequest } from "@/types/quotes",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
import { QuoteDetails } from "@/components/quotes/QuoteDetails",;"
<<<<<<< HEAD
import { ExportToCSV } from "@/components/quotes/ExportToCSV",;"
  }
=======
import { ExportToCSV } from "@/components/quotes/ExportToCSV",;
import {;
>>>>>>> origin/chore/fix-lint-and-merge
  QuoteStatusCards,;
  QuotesFilter,;
  QuotesTable;"
} from "@/components/admin/quotes",;
export default function QuoteManager() { return null; }
  const { user } = useAuth(),;'
  const isAdmin = user?.userType === 'admin',;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;
<<<<<<< HEAD

export default function QuoteManager() {;
<<<<<<< HEAD
  }
=======
  const { user } = useAuth(),;

  const isAdmin = user?.userType === 'admin',;
>>>>>>> origin/chore/fix-lint-and-merge
  ;
;

=======
;
export default function QuoteManager() {;
  const { user } = useAuth(),;
  const isAdmin = user?.userType === 'admin',;
  ;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  const statusCounts = {;'
    new: quotes.filter(q => q.status === 'new').length,;'
    in_review: quotes.filter(q => q.status === 'in_review').length,;'
    accepted: quotes.filter(q => q.status === 'accepted').length,;'
    responded: quotes.filter(q => q.status === 'responded').length,;'
    closed: quotes.filter(q => q.status === 'closed').length;
  },;
  const handleViewDetails = (quote: QuoteRequest) => {;
    setSelectedQuote(quote),;
    setShowDetails(true);
  },;
<<<<<<< HEAD

;

  // Count quotes by status;
  const statusCounts = {;'
    new:quotes.filter(q => q.status === 'new').length,;'
    in_review:quotes.filter(q => q.status === 'in_review').length,;'
    accepted:quotes.filter(q => q.status === 'accepted').length,;'
    responded:quotes.filter(q => q.status === 'responded').length,;'
=======
;
  // Count quotes by status;
  const statusCounts = {;
    new:quotes.filter(q => q.status === 'new').length,;
    in_review:quotes.filter(q => q.status === 'in_review').length,;
    accepted:quotes.filter(q => q.status === 'accepted').length,;
    responded:quotes.filter(q => q.status === 'responded').length,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    closed:quotes.filter(q => q.status === 'closed').length;
  },;
;
  const handleViewDetails = (quote:QuoteRequest) => {;
    setSelectedQuote(quote),;
    setShowDetails(true);
  },;
;
<<<<<<< HEAD

=======
  const handleResetFilters = () => {;
    setStatusFilter('all'),;
    setArchiveFilter('all'),;
    setSearchQuery(''),;
    setDateRange({ from: undefined, to: undefined });
  };
  if (!isAdmin) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return <Navigate to="/unauthorized" replace />;
  }
;
  return (;
<<<<<<< HEAD
    setDateRange({ from:undefined, to:undefined }),;
  },;
;
  if (!isAdmin) {;
    return <Navigate to="/unauthorized" replace />,;
  }
;
  return (;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <ProtectedRoute adminOnly>;
      <div>;
        <Header />;"
        <div className="min-h-screen bg-zion-blue px-4 py-8">;"
          <div className="container mx-auto">;"
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">;
              <div>;"
                <h1 className="text-3xl font-bold text-white mb-2">Quote Request Manager</h1>;"
                <p className="text-zion-slate-light">Manage and respond to all talent hire requests</p>;
              </div>;"
              <ExportToCSV quotes={quotes} filename="zion-quote-requests" />;
            </div>;
<<<<<<< HEAD
            ;
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;
            ;
            {/* Filters */}
            <QuotesFilter;
              searchQuery={searchQuery}              setSearchQuery={setSearchQuery}
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />
=======

            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;

<<<<<<< HEAD
            ;
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;
            ;
            {/* Filters */}
            <QuotesFilter;
              searchQuery={searchQuery}              setSearchQuery={setSearchQuery}
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;

import React, { useState } from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { useAdminQuotes } from '@/hooks / useAdminQuotes';
import { use_auth } from '@/hooks / use_auth';
import { Card, CardContent } from '@/components / ui / card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Navigate } from './react-router-dom';
import type { QuoteRequest } from "@/types / quotes";
import { ProtectedRoute } from '@/components / ProtectedRoute';
import { QuoteDetails } from '@/components / quotes / QuoteDetails';
import { ExportToCSV } from '@/components / quotes / ExportToCSV';

import { QuoteStatusCards, QuotesFilter, QuotesTable } from '@/components / admin / quotes';
;
export default /**;
 * QuoteManager - Function description;
 */
function QuoteManager() {}
  const { user } = use_auth ();'
  const is_admin = user?.user_type === 'admin';
;
  const [selected_quote, setSelectedQuote] = useState < QuoteRequest | null>(null);
  const [show_details, setShowDetails] = useState (false);
;
<<<<<<< HEAD
    }
=======
  const {}
>>>>>>> origin/chore/fix-lint-and-merge
    quotes;
    is_loading;
    error;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    search_query;
    setSearchQuery;
    date_range;
    setDateRange;
  }
>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
  const handleResetFilters = () => {
    setStatusFilter($2);
    setArchiveFilter($2);
    setSearchQuery($2);
    setDateRange({ from: undefined, to: undefined})
  },

  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />
  }
    setSelectedQuote(quote)
    setShowDetails(true)
  }
    setStatusFilter('all'),
    setArchiveFilter('all'),
    setSearchQuery(''),
    setDateRange({ from: undefined, to: undefined })
  }
  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />
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
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
            />
            {/* Tabs for Active/Archived */}
            <Tabs defaultValue="active" className="mb-6">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
                <TabsTrigger value="active">Active Quotes</TabsTrigger>
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>
              </TabsList>
              <TabsContent value="active">
=======
<<<<<<< HEAD
            />;
            ;
=======

            />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Tabs for Active/Archived */}
            <Tabs defaultValue="active" className="mb-6">;
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;
                <TabsTrigger value="active">Active Quotes</TabsTrigger>;
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>;
              </TabsList>;
<<<<<<< HEAD
=======

              <TabsContent value="active">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                {/* Quotes Table */}
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
                  <QuotesTable
<<<<<<< HEAD
                    quotes={quotes.filter(quote => !quote.is_archived)}
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
                    quotes={quotes && quotes.filter(quote => !quote && quote.is_archived)}
<<<<<<< HEAD
              ;
              <TabsContent value="active">;
                {/* Quotes Table */}
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
                  <QuotesTable;
                    quotes={quotes.filter(quote => !quote.is_archived)}                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}
                  />;
                </Card>;
              </TabsContent>;
              ;
              <TabsContent value="archived">;
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
                  <QuotesTable;
                    quotes={quotes.filter(quote => quote.is_archived)}                    isArchived={true}
            />
            {/* Tabs for Active/Archived */}
            <Tabs defaultValue="active" className="mb-6">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
                <TabsTrigger value="active">Active Quotes</TabsTrigger>
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>
              </TabsList>
              <TabsContent value="active">
                {/* Quotes Table */}
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
                  <QuotesTable
                    quotes={quotes.filter(quote => !quote.is_archived)}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}
<<<<<<< HEAD
                  />;
                </Card>;
              </TabsContent>;
                  <QuotesTable
                    quotes={quotes && quotes.filter(quote => quote && quote.is_archived)}
                    isArchived={true}
                  />
                </Card>
              </TabsContent>
              <TabsContent value="archived">
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
                  <QuotesTable
                    quotes={quotes.filter(quote => quote.is_archived)}
                    isArchived={true}
                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}


            </Tabs>;
          </div>;
        </div>;
        ;
        {/* Quote Details Modal */}
        <QuoteDetails;
          quote={selectedQuote}
          isOpen={showDetails}


          onClose={() => {;
                  />
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
<<<<<<< HEAD
        {/* Quote Details Modal */}
=======
=======

                  />;
                </Card>;
              </TabsContent>;

              <TabsContent value="archived">;
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;

                  <QuotesTable
                    quotes={quotes && quotes.filter(quote => quote && quote.is_archived)}
                    isArchived={true}

                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}

                  />;
                </Card>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;

                    quotes={quotes && quotes.filter(quote => quote && quote.is_archived)}
                    isArchived={true}
                  />
                </Card>

                    quotes={quotes.filter(quote => quote.is_archived)}
                    isArchived={true}
                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}

<<<<<<< HEAD
            </Tabs>;
          </div>;
        </div>;
        ;
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Quote Details Modal */}
        <QuoteDetails;
          quote={selectedQuote}
          isOpen={showDetails}
<<<<<<< HEAD
          onClose={() => {
            setShowDetails(false);

            setSelectedQuote(null)
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);
=======

          onClose={() => {;

                  />
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Quote Details Modal */}

>>>>>>> merged-prs-20250907-203621
        <QuoteDetails
          quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
<<<<<<< HEAD
            setShowDetails($2);
=======
            setShowDetails(false);

          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);

>>>>>>> merged-prs-20250907-203621
            setSelectedQuote(null)
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);

<<<<<<< HEAD
          }}
        />

        <Footer />

</QuoteDetails>

        <Footer />
</Footer>
      </div>

}
          onClose={() => {;
            setShowDetails(false);
    update_status;
    toggle_archive;
    delete_quote;
  } = useAdminQuotes ();
;
  // Count quotes by status;

    setSelectedQuote (quote),
    setShowDetails (true);
  }
;

    setSearchQuery ('');
    setDateRange ({ from: undefined, to: undefined });
  }
;

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
        />
        <Footer />
      </div>
    </ProtectedRoute>
  )
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
            setShowDetails(false),;
            setSelectedQuote(null),;
=======
}
=======
            setSelectedQuote(null);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
        />;
        ;
        <Footer />;
      </div>;
    </ProtectedRoute>;
  ),;}
 import {
  QuoteStatusCards;
QuotesFilter;
QuotesTable export default function QuoteManager () {
  const {
  user 
}= useAuth ();
const isAdmin = user?.userType === 'admin';
const [showDetails, setShowDetails] = useState (false);
}min-h-screen bg-zion-blue px-4 py-8"> <div className=" container mx-auto"> <div className=" flex flex-col md:flex-row justify-between items-start md:items-center mb-8"> <div> <h1 className=" text-3xl font-bold text-white mb-2">Quote Request Manager</h1> <p className=" text-zion-slate-light">Manage and respond to all talent hire requests</p> </div> </div> {
  /* Status Summary Cards */ 
}<QuoteStatusCards statusCounts= {
  statusCounts 
}/> {
  /* Filters */ 
}<QuotesFilter searchQuery= {
  searchQuery 
}setSearchQuery= {
  setSearchQuery 
}statusFilter= {
  statusFilter 
}setStatusFilter= {
  setStatusFilter 
}archiveFilter= {
  archiveFilter 
}setArchiveFilter= {
  setArchiveFilter 
}dateRange= {
  dateRange 
}setDateRange= {
  setDateRange 
}onReset= {
  handleResetFilters 
}/> <QuotesTable quotes= {
  quotes.filter (quote => !quote.is archived) 
}isLoading= {
  isLoading 
}updateStatus= {
  updateStatus 
}toggleArchive= {
  toggleArchive 
}deleteQuote= {
  deleteQuote 
}onViewDetails= {
  handleViewDetails 
}/> </Card> </TabsContent> <TabsContent value=" archived"> <Card className=" bg-zion-blue-dark border border-zion-blue-light overflow-hidden" > <QuotesTable quotes= {
  quotes.filter (quote => quote.is archived) 
}isArchived= {
  true 
}isLoading= {
  isLoading 
}updateStatus= {
  updateStatus 
}toggleArchive= {
  toggleArchive 
}deleteQuote= {
  deleteQuote 
}onViewDetails= {
  handleViewDetails 
}/> </Card> </TabsContent> </Tabs> </div> </div> {
  /* Quote Details Modal */ 
}<QuoteDetails /> <Footer /> </div> </ProtectedRoute>) 
}
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return <Navigate to="/unauthorized" replace />;
  }
  return (
    <ProtectedRoute admin_only>;
      <div>;

              <ExportToCSV quotes={quotes} filename="zion - quote - requests" />;
            </div>;
            {/* Status Summary Cards */}

            <QuoteStatusCards status_counts={status_counts} />;

              search_query={search_query}
              status_filter={status_filter}
              archive_filter={archive_filter}
              date_range={date_range}
              on_reset={handleResetFilters}

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

                <Card className="bg - zion - blue - dark border border - zion - blue - light overflow - hidden">;
                  <QuotesTable;

                    quotes={quotes.filter (quote => quote.is_archived)}

          quote={selected_quote}
          is_open={show_details}

            setShowDetails (false);
            setSelectedQuote (null);
          }}
        />;

        <Footer />;

    );

</Footer>
      </div>;
    </ProtectedRoute>);

            setShowDetails(false),;
            setSelectedQuote(null),;
          }}
        />;
        ;

        <Footer />;
</Footer>
      </div>;
<<<<<<< HEAD
    </ProtectedRoute>;
  ),;}
  }
  QuoteStatusCards;
QuotesFilter;
QuotesTable export default function QuoteManager() {
  }
  }
  user
}= useAuth ();
const isAdmin = user?.userType === 'admin';'
const [showDetails, setShowDetails] = useState (false);
}min-h-screen bg-zion-blue px-4 py-8"> <div className=" container mx-auto"> <div className=" flex flex-col "md":flex-row justify-between items-start "md":items-center mb-8"> <div> <h1 className=" text-3xl font-bold text-white mb-2">Quote Request Manager</h1> <p className=" text-zion-slate-light">Manage and respond to all talent hire requests</p> </div> </div> {"
  /* Status Summary Cards */
=======

    </ProtectedRoute>;"
}min-h-screen bg-zion-blue px-4 py-8"> <div className=" container mx-auto"> <div className=" flex flex-col md:flex-row justify-between items-start md:items-center mb-8"> <div> <h1 className=" text-3xl font-bold text-white mb-2">Quote Request Manager</h1> <p className=" text-zion-slate-light">Manage and respond to all talent hire requests</p> </div> </div> {"
>>>>>>> origin/chore/fix-lint-and-merge
}<QuoteStatusCards statusCounts= {
  statusCounts;
}/> {

}<QuotesFilter searchQuery= {
  searchQuery;
}setSearchQuery= {
}statusFilter= {
  statusFilter;
}setStatusFilter= {
}archiveFilter= {
  archiveFilter;
}setArchiveFilter= {
}dateRange= {
  dateRange;
}setDateRange= {
}onReset= {
  handleResetFilters;
}/> <QuotesTable quotes= {
}/>   <TabsContent value=" archived"> <Card className=" bg-zion-blue-dark border border-zion-blue-light overflow-hidden" > <QuotesTable quotes= {"

}/>    </div> </div> {
}<QuoteDetails /> <Footer /> </div> ) 
pr-12325
</QuotesFilter>"
}/> </Card> </TabsContent> <TabsContent value=" archived"> <Card className=" bg-zion-blue-dark border border-zion-blue-light overflow-hidden" > <QuotesTable quotes= {"
</TabsContent>
}/> </Card> </TabsContent> </Tabs> </div> </div> {
}<QuoteDetails /> <Footer /> </div> </ProtectedRoute>) 
}
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
