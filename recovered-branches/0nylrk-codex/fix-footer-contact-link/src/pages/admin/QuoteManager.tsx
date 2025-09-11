
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAdminQuotes} from "@/hooks/useAdminQuotes";
import {useAuth} from "@/hooks/useAuth";
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Navigate} from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import type { QuoteRequest } from "@/types/quotes";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import {QuoteDetails} from "@/components/quotes/QuoteDetails";
import {ExportToCSV} from "@/components/quotes/ExportToCSV";
import {QuoteStatusCards, QuotesFilter, QuotesTable} from "@/components/admin/quotes";

export default function QuoteManager() {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';
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
import type { QuoteRequest } from "@/types/quotes";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { QuoteRequest } from "@/types/quotes";

import {ProtectedRoute} from "@/components/ProtectedRoute";
import {QuoteDetails} from "@/components/quotes/QuoteDetails";
import {ExportToCSV} from "@/components/quotes/ExportToCSV";
import {QuoteStatusCards, QuotesFilter, QuotesTable} from "@/components/admin/quotes";
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function QuoteManager() {;
export default function QuoteManager() {
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';
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
=======


export default function QuoteManager() {;
  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

  } = useAdminQuotes(),



<<<<<<< HEAD
  } = useAdminQuotes();
  } = useAdminQuotes(),

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  } = useAdminQuotes();
  } = useAdminQuotes(),

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Count quotes by status
  const statusCounts = {
    new: quotes.filter(q => q.status === 'new').length
    in_review: quotes.filter(q => q.status === 'in_review').length
    accepted: quotes.filter(q => q.status === 'accepted').length
    responded: quotes.filter(q => q.status === 'responded').length
    closed: quotes.filter(q => q.status === 'closed').length
<<<<<<< HEAD
<<<<<<< HEAD


  },


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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  },

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote)
    setShowDetails(true)
  }
  },

  const handleResetFilters = () => {
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setStatusFilter('all');
    setArchiveFilter('all');
    setSearchQuery('');
    setDateRange({ from: undefined, to: undefined })
<<<<<<< HEAD


  },



=======
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAdminQuotes } from "@/hooks/useAdminQuotes",;
import { useAuth } from "@/hooks/useAuth",;
<<<<<<< HEAD
import { ;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
;
export default function QuoteManager() {;
  const { user } = useAuth(),;
  const isAdmin = user?.userType === 'admin',;
  ;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;
;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
;
  // Count quotes by status;
  const statusCounts = {;
    new:quotes.filter(q => q.status === 'new').length,;
    in_review:quotes.filter(q => q.status === 'in_review').length,;
    accepted:quotes.filter(q => q.status === 'accepted').length,;
    responded:quotes.filter(q => q.status === 'responded').length,;
    closed:quotes.filter(q => q.status === 'closed').length;
  },;
;
  const handleViewDetails = (quote:QuoteRequest) => {;
    setSelectedQuote(quote),;
    setShowDetails(true);
  },;
;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            />;
            ;
=======

            />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Tabs for Active/Archived */}
            <Tabs defaultValue="active" className="mb-6">;
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;
                <TabsTrigger value="active">Active Quotes</TabsTrigger>;
                <TabsTrigger value="archived">Archived Quotes</TabsTrigger>;
              </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

              <TabsContent value="active">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              <TabsContent value="active">;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Quotes Table */}
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;
                  <QuotesTable
                    quotes={quotes && quotes.filter(quote => !quote && quote.is_archived)}
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Quote Details Modal */}
        <QuoteDetails
          quote={selectedQuote}
          isOpen={showDetails}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          onClose={() => {
            setShowDetails(false);

            setSelectedQuote(null)
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);
<<<<<<< HEAD
=======


          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
        />
        <Footer />
      </div>
    </ProtectedRoute>
  )
<<<<<<< HEAD
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
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
