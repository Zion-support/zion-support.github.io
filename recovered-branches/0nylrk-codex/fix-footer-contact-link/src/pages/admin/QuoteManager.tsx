class ErrorBoundary extends React.Component {


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
  }

import {
  }
  QuoteStatusCards,
  QuotesFilter,
  QuotesTable
} from "@/components/admin/quotes","
  const {
    }
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
    deleteQuote,
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { useAdminQuotes } from "@/hooks/useAdminQuotes",;"
import { useAuth } from "@/hooks/useAuth",;"
import { ;
}
import {;
  }
  Card,;
  CardContent;
} from "@/components/ui/card",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Navigate } from "react-router-dom",;"
import type { QuoteRequest } from "@/types/quotes",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
import { QuoteDetails } from "@/components/quotes/QuoteDetails",;"
import { ExportToCSV } from "@/components/quotes/ExportToCSV",;"
import {;
  }
  QuoteStatusCards,;
  QuotesFilter,;
  QuotesTable;
} from "@/components/admin/quotes",;"
export default function QuoteManager() {;
  }
  const { user } = useAuth(),;
  const isAdmin = user?.userType === 'admin',;'
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;
export default function QuoteManager() {;
  }
  const { user } = useAuth(),;
  const isAdmin = user?.userType === 'admin',;'
  ;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;
;
  // Count quotes by status;
  const statusCounts = {;
    }
    "new":quotes.filter(q => { return q.status === 'new').length,; }'
    "in_review":quotes.filter(q => { return q.status === 'in_review').length,; }'
    "accepted":quotes.filter(q => { return q.status === 'accepted').length,; }'
    "responded":quotes.filter(q => { return q.status === 'responded').length,; }'
    "closed":quotes.filter(q => { return q.status === 'closed').length; }'
  },;
;
  const handleViewDetails = ("quote":QuoteRequest) => {;
    }
    setSelectedQuote(quote),;
    setShowDetails(true);
  },;
;
    <ProtectedRoute adminOnly>;
      <div>;
        <Header />;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;"
          <div className="container mx-auto">;"
            <div className="flex flex-col "md":flex-row justify-between items-start "md":items-center mb-8">;"
              <div>;
                <h1 className="text-3xl font-bold text-white mb-2">Quote Request Manager</h1>;"
                <p className="text-zion-slate-light">Manage and respond to all talent hire requests</p>;"
              </div>;
              <ExportToCSV quotes={quotes} filename="zion-quote-requests" />;"
            </div>;

            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;

            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;
import React, { useState } from './react';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { useAdminQuotes } from '@/hooks / useAdminQuotes';'
import { use_auth } from '@/hooks / use_auth';'
import { Card, CardContent } from '@/components / ui / card';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { Navigate } from './react-router-dom';'
import type { QuoteRequest } from "@/types / quotes";"
import { ProtectedRoute } from '@/components / ProtectedRoute';'
import { QuoteDetails } from '@/components / quotes / QuoteDetails';'
import { ExportToCSV } from '@/components / quotes / ExportToCSV';'
import { QuoteStatusCards, QuotesFilter, QuotesTable } from '@/components / admin / quotes';'
;
export default /**
 * QuoteManager - Function description
 */
function QuoteManager() {
  }
  const { user } = use_auth ();
  const is_admin = user?.user_type === 'admin';'
;
  const [selected_quote, setSelectedQuote] = useState < QuoteRequest | null>(null);
  const [show_details, setShowDetails] = useState (false);
;
  const {
    }
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

  // Count quotes by status
  const statusCounts = {
    new: quotes.filter(q => q.status === 'new').length
    in_review: quotes.filter(q => q.status === 'in_review').length
    accepted: quotes.filter(q => q.status === 'accepted').length
    responded: quotes.filter(q => q.status === 'responded').length
    closed: quotes.filter(q => q.status === 'closed').length

  const handleResetFilters = () => {
    setStatusFilter('all');
    setArchiveFilter('all');
    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined })

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

    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined });
  };

    return <Navigate to="/unauthorized" replace />;
  }
  return (


import React, { useState } from "react",;

import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAdminQuotes } from "@/hooks/useAdminQuotes",;
import { useAuth } from "@/hooks/useAuth",;
import { ;


import {;
  Card,;
  CardContent;"
} from "@/components/ui/card",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Navigate } from "react-router-dom",;"
import type { QuoteRequest } from "@/types/quotes",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
import { QuoteDetails } from "@/components/quotes/QuoteDetails",;"
import { ExportToCSV } from "@/components/quotes/ExportToCSV",;"
  }
  QuoteStatusCards,;
  QuotesFilter,;
  QuotesTable;"
} from "@/components/admin/quotes",;
export default function QuoteManager() { return null; }
  const { user } = useAuth(),;'
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

    closed:quotes.filter(q => q.status === 'closed').length;
  },;
;
  const handleViewDetails = (quote:QuoteRequest) => {;
    setSelectedQuote(quote),;
    setShowDetails(true);
  },;
;


    return <Navigate to="/unauthorized" replace />;
  }
;
  return (;
    setDateRange({ from:undefined, to:undefined }),;
  },;
;
  if (!isAdmin) {;
    return <Navigate to="/unauthorized" replace />,;
  }
;
  return (;
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
            ;
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;
            ;
            {/* Filters */}
            <QuotesFilter;
              searchQuery={searchQuery}              setSearchQuery={setSearchQuery}
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />
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
    }
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

  const handleResetFilters = () => {
    setStatusFilter($2);
    setArchiveFilter($2);
    setSearchQuery($2);
    setDateRange({ from: undefined, to: undefined})
  },

  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />
  }
  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote)
    setShowDetails(true)
  }
  const handleResetFilters = () => {
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

                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}
                  />
                </Card>

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
        {/* Quote Details Modal */}
  return (                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}        {/* Quote Details Modal */}
        <QuoteDetails,
quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
            }
            setShowDetails(false);
          onClose={() => {;
            }
            setShowDetails(false);
            setSelectedQuote(null);

            setShowDetails($2);
            setSelectedQuote(null)
          }
        <QuoteDetails
          quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
            setShowDetails(false);

          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);

            setSelectedQuote(null)
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);


    </ProtectedRoute>
  )
            setShowDetails(false),;
            setSelectedQuote(null),;
          }
        />;
        ;

        <Footer />;
</Footer>
      </div>;
    </ProtectedRoute>;
  ),;}
 import {
  }
  QuoteStatusCards;
QuotesFilter;
QuotesTable export default function QuoteManager() {
  }
  const {
  }
  user
}= useAuth ();
const isAdmin = user?.userType === 'admin';'
const [showDetails, setShowDetails] = useState (false);
}min-h-screen bg-zion-blue px-4 py-8"> <div className=" container mx-auto"> <div className=" flex flex-col "md":flex-row justify-between items-start "md":items-center mb-8"> <div> <h1 className=" text-3xl font-bold text-white mb-2">Quote Request Manager</h1> <p className=" text-zion-slate-light">Manage and respond to all talent hire requests</p> </div> </div> {"
  /* Status Summary Cards */
}<QuoteStatusCards statusCounts= {
  }
  statusCounts
} /> {
  /* Filters */
}<QuotesFilter searchQuery= {
  }
  searchQuery
}setSearchQuery= {
  }
  setSearchQuery
}statusFilter= {
  }
  statusFilter
}setStatusFilter= {
  }
  setStatusFilter
}archiveFilter= {
  }
  archiveFilter
}setArchiveFilter= {
  }
  setArchiveFilter
}dateRange= {
  }
  dateRange
}setDateRange= {
  }
  setDateRange
}onReset= {
  }
  handleResetFilters
} /> <QuotesTable quotes= {
  }
  quotes.filter (quote => !quote.is archived)
}isLoading= {
  }
  isLoading
}updateStatus= {
  }
  updateStatus
}toggleArchive= {
  }
  toggleArchive
}deleteQuote= {
  }
  deleteQuote
}onViewDetails= {
  }
  handleViewDetails
}/> </Card> </TabsContent> <TabsContent value=" archived"> <Card className=" bg-zion-blue-dark border border-zion-blue-light overflow-hidden" > <QuotesTable quotes= {"
  }
  quotes.filter (quote => quote.is archived)
}isArchived= {
  }
  true
}isLoading= {
  }
  isLoading
}updateStatus= {
  }
  updateStatus
}toggleArchive= {
  }
  toggleArchive
}deleteQuote= {
  }
  deleteQuote
}onViewDetails= {
  }
  handleViewDetails
}/> </Card> </TabsContent> </Tabs> </div> </div> {
  /* Quote Details Modal */
}<QuoteDetails /> <Footer /> </div> </ProtectedRoute>)
}
}