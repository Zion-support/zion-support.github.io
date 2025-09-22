
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAdminQuotes} from "@/hooks/useAdminQuotes";
import {useAuth} from "@/hooks/useAuth";
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
<<<<<<< HEAD
import {Navigate} from "react-router-dom";

"
import type { QuoteRequest } from "@/types/quotes";
"
import {ProtectedRoute} from "@/components/ProtectedRoute";"
import {QuoteDetails} from "@/components/quotes/QuoteDetails";"
import {ExportToCSV} from "@/components/quotes/ExportToCSV";"
import {QuoteStatusCards, QuotesFilter, QuotesTable} from "@/components/admin/quotes";

export default function QuoteManager() { return null; }
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",
=======
import {Navigate} from "react-router-dom";import React, { useState } from "react",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React, { useState } from "react",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
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
=======
"
import React, { useState } from "react","
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer",";
import { useAdminQuotes } from "@/hooks/useAdminQuotes";"
import { useAuth } from "@/hooks/useAuth";
import {};
  Card;
  CardContent"
} from "@/components/ui/card","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { Navigate } from "react-router-dom",";
import type { QuoteRequest } from "@/types/quotes";

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
"
import type { QuoteRequest } from "@/types/quotes","
import { ProtectedRoute } from "@/components/ProtectedRoute","
import { QuoteDetails } from "@/components/quotes/QuoteDetails","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ExportToCSV } from "@/components/quotes/ExportToCSV",
import {}
  QuoteStatusCards,
  QuotesFilter,
  QuotesTable"
} from "@/components/admin/quotes",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export default function QuoteManager() {}
  const { user } = useAuth(),'
=======

export default function QuoteManager() {
  const { user } = useAuth(),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const isAdmin = user?.userType === 'admin',

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const {
=======

  const {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
    deleteQuote
<<<<<<< HEAD

  } = useAdminQuotes(),

<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Count quotes by status
  const statusCounts = {
    new: quotes.filter(q => q.status === 'new').length
    in_review: quotes.filter(q => q.status === 'in_review').length
    accepted: quotes.filter(q => q.status === 'accepted').length
    responded: quotes.filter(q => q.status === 'responded').length
    closed: quotes.filter(q => q.status === 'closed').length
const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote)
    setShowDetails(true)
  const handleResetFilters = () => {
    setStatusFilter('all');
    setArchiveFilter('all');
    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined })
if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />
    return <Navigate to="/unauthorized" replace />

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

const handleResetFilters = () => {;'
    setStatusFilter('all');'
    setArchiveFilter('all');'
    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined });
  };

if (!isAdmin) {;"
    return <Navigate to="/unauthorized" replace />;
  }
  return (

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React, { useState } from "react",;
=======
    deleteQuote            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    deleteQuote            
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import React, { useState } from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAdminQuotes } from "@/hooks/useAdminQuotes",;
import { useAuth } from "@/hooks/useAuth",;
import { ;
=======
"
import React, { useState } from "react",;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { useAdminQuotes } from "@/hooks/useAdminQuotes",;"
import { useAuth } from "@/hooks/useAuth",;

import { ;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {;
  Card,;
  CardContent;"
} from "@/components/ui/card",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Navigate } from "react-router-dom",;"
import type { QuoteRequest } from "@/types/quotes",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
import { QuoteDetails } from "@/components/quotes/QuoteDetails",;"
import { ExportToCSV } from "@/components/quotes/ExportToCSV",;
import {;
  QuoteStatusCards,;
  QuotesFilter,;
  QuotesTable;"
} from "@/components/admin/quotes",;
export default function QuoteManager() { return null; }
  const { user } = useAuth(),;'
  const isAdmin = user?.userType === 'admin',;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;
export default function QuoteManager() {;
  const { user } = useAuth(),;
  const isAdmin = user?.userType === 'admin',;
  ;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;
;
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

;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  // Count quotes by status;
  const statusCounts = {;'
    new:quotes.filter(q => q.status === 'new').length,;'
    in_review:quotes.filter(q => q.status === 'in_review').length,;'
    accepted:quotes.filter(q => q.status === 'accepted').length,;'
    responded:quotes.filter(q => q.status === 'responded').length,;'
    closed:quotes.filter(q => q.status === 'closed').length;
  },;
;
  const handleViewDetails = (quote:QuoteRequest) => {;
    setSelectedQuote(quote),;
    setShowDetails(true);
  },;
;
<<<<<<< HEAD
    return <Navigate to="/unauthorized" replace />;
  }
;
  return (;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;

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
=======
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;
'
import React, { useState } from './react';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { useAdminQuotes } from '@/hooks / useAdminQuotes';'
import { use_auth } from '@/hooks / use_auth';'
import { Card, CardContent } from '@/components / ui / card';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { Navigate } from './react-router-dom';"
import type { QuoteRequest } from "@/types / quotes";'
import { ProtectedRoute } from '@/components / ProtectedRoute';'
import { QuoteDetails } from '@/components / quotes / QuoteDetails';'
import { ExportToCSV } from '@/components / quotes / ExportToCSV';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  const {}
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
return (                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

                  />;
                </Card>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;

/>;
                </Card>;
              </TabsContent>;
                  <QuotesTable;
                    quotes={quotes && quotes.filter(quote => quote && quote.is_archived)}
                    isArchived={true}
                  />
                </Card>
</TabsContent>"
              <TabsContent value="archived">"
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">
                  <QuotesTable;
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  />
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Quote Details Modal */}
=======
                    onViewDetails={handleViewDetails}        {/* Quote Details Modal */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    onViewDetails={handleViewDetails}        {/* Quote Details Modal */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        {/* Quote Details Modal */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <QuoteDetails
          quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
            setShowDetails(false);

<<<<<<< HEAD
<<<<<<< HEAD
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            setSelectedQuote(null)
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          }}
        />
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Footer />

</QuoteDetails>

        <Footer />
</Footer>
      </div>
</ProtectedRoute>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
          onClose={() => {;
            setShowDetails(false);
    update_status;
    toggle_archive;
    delete_quote;
  } = useAdminQuotes ();
;
  // Count quotes by status;
const status_counts = {'
    new: quotes.filter (q => q.status === 'new').length,'
    in_review: quotes.filter (q => q.status === 'in_review').length,'
    accepted: quotes.filter (q => q.status === 'accepted').length,'
    responded: quotes.filter (q => q.status === 'responded').length,'
    closed: quotes.filter (q => q.status === 'closed').length;
  }
;
  const handleViewDetails = (quote: QuoteRequest) =>: any {}
    setSelectedQuote (quote),
    setShowDetails (true);
  }
;
const handleResetFilters = () =>: any {'
    setStatusFilter ('all');'
    setArchiveFilter ('all');'
    setSearchQuery ('');
    setDateRange ({ from: undefined, to: undefined });
  }
;
// Check condition;
if ( {) {}
  $2;
}"
    return <Navigate to="/unauthorized" replace />;
  }
  return (
    <ProtectedRoute admin_only>;
      <div>;
<Header />;"
        <div className="min - h-screen bg - zion - blue px - 4 py - 8">;"
          <div className="container mx - auto">;"
            <div className="flex flex - col md:flex - row justify - between items - start md:items - center mb - 8">;
              <div>;"
                <h1 className="text - 3xl font - bold text - white mb - 2">Quote Request Manager</h1>;"
                <p className="text - zion - slate - light">Manage and respond to all talent hire requests</p>;
              </div>;"
              <ExportToCSV quotes={quotes} filename="zion - quote - requests" />;
            </div>;
            {/* Status Summary Cards */}
=======

    </ProtectedRoute>"
    return <Navigate to="/unauthorized" replace />;"
</Navigate>
    <ProtectedRoute admin_only>;

        <div className="min - h-screen bg - zion - blue px - 4 py - 8">;"
          <div className="container mx - auto">;"
            <div className="flex flex - col md:flex - row justify - between items - start md:items - center mb - 8">;"
                <h1 className="text - 3xl font - bold text - white mb - 2">Quote Request Manager</h1>;""
                <p className="text - zion - slate - light">Manage and respond to all talent hire requests</p>;"
              <ExportToCSV quotes={quotes} filename="zion - quote - requests" />;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <QuoteStatusCards status_counts={status_counts} />;

              search_query={search_query}
              status_filter={status_filter}
              archive_filter={archive_filter}
              date_range={date_range}
              on_reset={handleResetFilters}
/>;
{/* Tabs for Active / Archived */}"
            <Tabs default_value="active" className="mb - 6">;"
              <TabsList className="bg - zion - blue - dark border border - zion - blue - light">;"
                <TabsTrigger value="active">Active Quotes</TabsTrigger>;"
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>;
              </TabsList>;"
              <TabsContent value="active">;
                {/* Quotes Table */}"
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
</TabsContent>;"
              <TabsContent value="archived">;"
                <Card className="bg - zion - blue - dark border border - zion - blue - light overflow - hidden">;
                  <QuotesTable;
                    quotes={quotes.filter (quote => quote.is_archived)}

          quote={selected_quote}
          is_open={show_details}
on_close={() => {}
            setShowDetails (false);
            setSelectedQuote (null);
          }}
        />;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Footer />;

    );

</Footer>
      </div>;
    </ProtectedRoute>);
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            setShowDetails(false),;
            setSelectedQuote(null),;
          }}
        />;
        ;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Footer />;
</Footer>
      </div>;

    </ProtectedRoute>;"
}min-h-screen bg-zion-blue px-4 py-8"> <div className=" container mx-auto"> <div className=" flex flex-col md:flex-row justify-between items-start md:items-center mb-8"> <div> <h1 className=" text-3xl font-bold text-white mb-2">Quote Request Manager</h1> <p className=" text-zion-slate-light">Manage and respond to all talent hire requests</p> </div> </div> {"
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
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
