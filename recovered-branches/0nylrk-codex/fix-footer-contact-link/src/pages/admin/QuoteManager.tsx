class ErrorBoundary extends React.Component {

<<<<<<< HEAD

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
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { QuoteDetails } from "@/components/quotes/QuoteDetails";
import { ExportToCSV } from "@/components/quotes/ExportToCSV";
import {
  QuoteStatusCards;
  QuotesFilter;
  QuotesTable
} from "@/components/admin/quotes",

export default function QuoteManager() {
  const { user } = useAuth();
  const isAdmin = null;

            setSelectedQuote(null)
          }}
        />
        
=======
  // TODO: Implement
}
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }

  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  // TODO: Implement
}
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
pr-12325
  
    console.error('Error caught by boundary:', error, errorInfo);'

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
import {Navigate} from "react-router-dom";import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAdminQuotes } from "@/hooks/useAdminQuotes";
import { useAuth } from "@/hooks/useAuth";
import { 
  Card;
  CardContent
} from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Navigate } from "react-router-dom",;
import type { QuoteRequest } from "@/types/quotes";

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);    quotes;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
</QuoteRequest>
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
</QuoteRequest>
  const [selected_quote, setSelectedQuote] = useState < QuoteRequest | null>(null);
  const [show_details, setShowDetails] = useState (false);
;
  const {
  // TODO: Implement
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
import type { QuoteRequest } from "@/types/quotes",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import { QuoteDetails } from "@/components/quotes/QuoteDetails",;
import { ExportToCSV } from "@/components/quotes/ExportToCSV",;
import {
  QuoteStatusCards,
  QuotesFilter,
  QuotesTable
} from "@/components/admin/quotes",
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
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAdminQuotes } from "@/hooks/useAdminQuotes",;
import { useAuth } from "@/hooks/useAuth",;
import { ;
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
export default function QuoteManager() {;
  const { user } = useAuth(),;
  const isAdmin = user?.userType === 'admin',;
  ;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;
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

            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;

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
export default /**
 * QuoteManager - Function description
 */
function QuoteManager() {
  const { user } = use_auth ();
  const is_admin = user?.user_type === 'admin';
;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);


pr-12325

    setDateRange;'
import type { QuoteRequest } from "@/types/quotes",""
import { ProtectedRoute } from "@/components/ProtectedRoute",""
import { QuoteDetails } from "@/components/quotes/QuoteDetails",""
import { ExportToCSV } from "@/components/quotes/ExportToCSV","

import {
  // TODO: Implement
}
  QuoteStatusCards,

  QuotesFilter,
  QuotesTable;"
} from "@/components/admin/quotes","
export default function QuoteManager() {
  const { user } = useAuth(),"
  const isAdmin = user?.userType === 'admin','
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
</QuoteRequest>'
    return <Navigate to="/unauthorized" replace />"
</Navigate>"
    return <Navigate to="/unauthorized" replace />;"
</Navigate>
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
</QuoteRequest>
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
</QuoteRequest>"
    return <Navigate to="/unauthorized" replace />;"
</Navigate>
    <ProtectedRoute adminOnly>;
</ProtectedRoute>
      <div>;
</div>
        <Header />;
</Header>"
        <div className="min-h-screen bg-zion-blue px-4 py-8">;"
</div>"
          <div className="container mx-auto">;"
</div>"
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">;"
</div>
              <div>;
</div>"
                <h1 className="text-3xl font-bold text-white mb-2">Quote Request Manager</h1>;""
                <p className="text-zion-slate-light">Manage and respond to all talent hire requests</p>;"
              </div>;"
              <ExportToCSV quotes={quotes} filename="zion-quote-requests" />;"
</ExportToCSV>
            </div>;
            <QuoteStatusCards statusCounts={statusCounts} />;
</QuoteStatusCards>
            <QuoteStatusCards statusCounts={statusCounts} />;
</QuoteStatusCards>
            <QuotesFilter;
              searchQuery={searchQuery}              setSearchQuery={setSearchQuery}
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />
</QuotesFilter>
            <QuoteStatusCards statusCounts={statusCounts} />;
</QuoteStatusCards>

  const [selected_quote, setSelectedQuote] = useState < QuoteRequest | null>(null);
  const [show_details, setShowDetails] = useState (false);
;
  const {
  // TODO: Implement
pr-12325
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
    date_range;}
    setDateRange;}
  }
  return (                    isLoading={isLoading}
                    updateStatus={updateStatus}
                    toggleArchive={toggleArchive}
                    deleteQuote={deleteQuote}
                    onViewDetails={handleViewDetails}        {/* Quote Details Modal */}
        <QuoteDetails
          quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
            setShowDetails(false);

          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);

          }}
        />
        <Footer />
      </div>
    </ProtectedRoute>
  )
            setShowDetails(false),;
            setSelectedQuote(null),;
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
import type { QuoteRequest } from "@/types/quotes",""
import { ProtectedRoute } from "@/components/ProtectedRoute",""
import { QuoteDetails } from "@/components/quotes/QuoteDetails",""
import { ExportToCSV } from "@/components/quotes/ExportToCSV","
import {
  // TODO: Implement
  QuoteStatusCards,
  QuotesFilter,
  QuotesTable;"
} from "@/components/admin/quotes","
export default function QuoteManager() {
  const { user } = useAuth(),"
  const isAdmin = user?.userType === 'admin',
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),

    return <Navigate to="/unauthorized" replace />"
"
    return <Navigate to="/unauthorized" replace />;"

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;


    <ProtectedRoute adminOnly>;

      <div>;
</div>
        <Header />;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;"
</div>"
          <div className="container mx-auto">;"
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">;"
                <h1 className="text-3xl font-bold text-white mb-2">Quote Request Manager</h1>;""
                <p className="text-zion-slate-light">Manage and respond to all talent hire requests</p>;"
              </div>;"
              <ExportToCSV quotes={quotes} filename="zion-quote-requests" />;"

            </div>;
            <QuoteStatusCards statusCounts={statusCounts} />;


            <QuotesFilter;
              searchQuery={searchQuery}              setSearchQuery={setSearchQuery}
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />


  // TODO: Implement

  return (
            {/* Filters */}
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
            <Tabs defaultValue="active" className="mb-6">;"
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;"
                <TabsTrigger value="active">Active Quotes;""
                <TabsTrigger value="archived">Archived Quotes;"
              ;"
              <TabsContent value="active">;"
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;"

                  <QuotesTable;)
                    quotes={quotes && quotes.filter(quote => !quote && quote.is_archived)}

              <TabsContent value="archived">;"

                  <QuotesTable;
                    quotes={quotes && quotes.filter(quote => quote && quote.is_archived)}


                
              <TabsContent value="archived">"
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">"

                    quotes={quotes.filter(quote => quote.is_archived)}
</QuotesTable>
            </Tabs>;
          </div>;
        </div>;

        <QuoteDetails;
quote={selectedQuote}
          isOpen={showDetails}



          onClose={() => {;

                
              
            
          onClose={() => {

>>>>>>> origin/main
        <Footer />


</QuoteDetails>

        <Footer />
</Footer>
      </div>

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

            <QuoteStatusCards status_counts={status_counts} />;

              search_query={search_query}
              status_filter={status_filter}
              archive_filter={archive_filter}
              date_range={date_range}
              on_reset={handleResetFilters}
            <Tabs default_value="active" className="mb - 6">;"
              <TabsList className="bg - zion - blue - dark border border - zion - blue - light">;"
                <Card className="bg - zion - blue - dark border border - zion - blue - light overflow - hidden">;"

                    quotes={quotes.filter (quote => !quote.is_archived)}


                    quotes={quotes.filter (quote => quote.is_archived)}

          quote={selected_quote}
          is_open={show_details}
          on_close={() => {

        <Footer />;

    );

</Footer>
      </div>;
    </ProtectedRoute>);

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
