<<<<<<< HEAD

<<<<<<< HEAD

=======
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useTalentQuotes} from "@/hooks/useTalentQuotes";
import {useAuth} from "@/hooks/useAuth";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {QuoteDetails} from "@/components/quotes/QuoteDetails";
import {RequestsHeader, QuoteRequestsList} from "@/components/quotes";
import type { QuoteRequest } from "@/types/quotes";
<<<<<<< HEAD
import {ProtectedRoute} from "@/components/ProtectedRoute";
export default function RequestsPanel() {;
  const { user } = useAuth();
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker';
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const {;

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React, { useState } from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { useTalentQuotes } from '@/hooks / useTalentQuotes';
import { use_auth } from '@/hooks / use_auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { QuoteDetails } from '@/components / quotes / QuoteDetails';
import { RequestsHeader, QuoteRequestsList } from '@/components / quotes';
import type { QuoteRequest } from "@/types / quotes";
import { ProtectedRoute } from '@/components / ProtectedRoute';
export default /**
 * RequestsPanel - Function description
 */
function RequestsPanel() {
  const { user } = use_auth ();
  const is_talent = user?.user_type === 'creator' || user?.user_type === 'job_seeker';
;
  const [selected_quote, setSelectedQuote] = useState < QuoteRequest | null>(null);
  const [show_details, setShowDetails] = useState (false);
;
  const {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    quotes;
    unread_count;
    is_loading;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    markAsViewed;
    markAsResponded;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useTalentQuotes } from "@/hooks/useTalentQuotes",
import { useAuth } from "@/hooks/useAuth",

import {
  RequestsHeader;
  QuoteRequestsList
} from "@/components/quotes",
<<<<<<< HEAD

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),

    quotes;
    unread_count;
    is_loading;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    markAsViewed;
    markAsResponded;


=======
import type { QuoteRequest } from "@/types/quotes";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function RequestsPanel() {
  const { user } = useAuth();
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
import type { QuoteRequest } from "@/types/quotes",
import { ProtectedRoute } from "@/components/ProtectedRoute",
export default function RequestsPanel() {
  const { user } = useAuth(),
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const {
    quotes,
    unreadCount,
    isLoading,
    statusFilter,
    setStatusFilter,
    archiveFilter,
    setArchiveFilter,
    markAsViewed,
    markAsResponded,
    toggleArchive
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
  } = useTalentQuotes();
  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote);
    setShowDetails(true)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  } = useTalentQuotes(),

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote),
    setShowDetails(true),
    
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // If status is new, mark as viewed
    if (quote.status === 'new') {
      markAsViewed(quote.id)
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======

=======

  }
  // Filter quotes by archive status
  const activeQuotes = quotes.filter(q => !q.is_archived);
  const archivedQuotes = quotes.filter(q => q.is_archived);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },

  // Filter quotes by archive status
  const activeQuotes = quotes.filter(q => !q.is_archived),
  const archivedQuotes = quotes.filter(q => q.is_archived),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <ProtectedRoute>
      <div>
        <Header />
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <RequestsHeader
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useTalentQuotes } from "@/hooks/useTalentQuotes",;
import { useAuth } from "@/hooks/useAuth",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { QuoteDetails } from "@/components/quotes/QuoteDetails",;
import {;
  RequestsHeader,;
  QuoteRequestsList;
} from "@/components/quotes",;
import type { QuoteRequest } from "@/types/quotes",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
export default function RequestsPanel() {;
  const { user } = useAuth(),;
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;
  const {;
    quotes,;
    unreadCount,;
    isLoading,;
    statusFilter,;
    setStatusFilter,;
    archiveFilter,;
    setArchiveFilter,;
    markAsViewed,;
    markAsResponded,;
    toggleArchive;
  } = useTalentQuotes(),;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleViewDetails = (quote: QuoteRequest) => {;
    setSelectedQuote(quote);
    setShowDetails(true),;

    // If status is new, mark as viewed;
    if (quote && quote.status === 'new') {;
      markAsViewed(quote && quote.id);
    }
  };

  // Filter quotes by archive status;
  const activeQuotes = quotes && quotes.filter(q => !q && q.is_archived);
  const archivedQuotes = quotes && quotes.filter(q => q && q.is_archived);
<<<<<<< HEAD

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
=======
  return (

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useTalentQuotes } from "@/hooks/useTalentQuotes",;
import { useAuth } from "@/hooks/useAuth",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { QuoteDetails } from "@/components/quotes/QuoteDetails",;
import { ;
  RequestsHeader,;
  QuoteRequestsList ;
} from "@/components/quotes",;
import type { QuoteRequest } from "@/types/quotes",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
;
export default function RequestsPanel() {;
  const { user } = useAuth(),;
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',;
  ;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;
;
  const {;
    quotes,;
    unreadCount,;
    isLoading,;
    statusFilter,;
    setStatusFilter,;
    archiveFilter,;
    setArchiveFilter,;
    markAsViewed,;
    markAsResponded,;
    toggleArchive;
  } = useTalentQuotes(),;
;
  const handleViewDetails = (quote:QuoteRequest) => {;
    setSelectedQuote(quote),;
    setShowDetails(true),;
    ;
    // If status is new, mark as viewed;
    if (quote.status === 'new') {;
      markAsViewed(quote.id),;
    }
  },;
;
  // Filter quotes by archive status;
import React, { useState } from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { useTalentQuotes } from '@/hooks / useTalentQuotes';
import { use_auth } from '@/hooks / use_auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { QuoteDetails } from '@/components / quotes / QuoteDetails';
import { RequestsHeader, QuoteRequestsList } from '@/components / quotes';
import type { QuoteRequest } from "@/types / quotes";
import { ProtectedRoute } from '@/components / ProtectedRoute';
export default /**
 * RequestsPanel - Function description
 */
function RequestsPanel() {
  const { user } = use_auth ();
  const is_talent = user?.user_type === 'creator' || user?.user_type === 'job_seeker';
;
<<<<<<< HEAD
  return (;
  const handleViewDetails = (quote: QuoteRequest) => {;
    setSelectedQuote(quote),;
    setShowDetails(true),;
    // If status is new, mark as viewed;
    if (quote.status === 'new') {;
      markAsViewed(quote.id);
    }
  },;
  // Filter quotes by archive status;
  const activeQuotes = quotes.filter(q => !q.is_archived),;
  const archivedQuotes = quotes.filter(q => q.is_archived);
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  const [selected_quote, setSelectedQuote] = useState < QuoteRequest | null>(null);
  const [show_details, setShowDetails] = useState (false);
;
  const {
    quotes;
    unread_count;
    is_loading;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    markAsViewed;
    markAsResponded;
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <ProtectedRoute>;
      <div>;
        <Header />;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;
          <div className="container mx-auto">;
<<<<<<< HEAD
<<<<<<< HEAD

            <RequestsHeader;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            <RequestsHeader
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              unreadCount={unreadCount}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
<<<<<<< HEAD

            />;

=======
            <RequestsHeader;
              unreadCount={unreadCount}              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
            />;
            ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            {/* Main Content */}
            <Tabs defaultValue="active" className="mb-6">;
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;
                <TabsTrigger value="active">Active Requests</TabsTrigger>;
                <TabsTrigger value="archived">Archived</TabsTrigger>;
              </TabsList>;
<<<<<<< HEAD

              <TabsContent value="active">;

=======
                <QuoteRequestsList
                  quotes={activeQuotes}
                  isLoading={isLoading}
              ;
              <TabsContent value="active">;
                <QuoteRequestsList;
                  quotes={activeQuotes}                  isLoading={isLoading}
            <RequestsHeader;
              unreadCount={unreadCount}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
            />
            {/* Main Content */}
            <Tabs defaultValue="active" className="mb-6">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
                <TabsTrigger value="active">Active Requests</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>
              <TabsContent value="active">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <QuoteRequestsList
                  quotes={activeQuotes}
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
<<<<<<< HEAD
<<<<<<< HEAD

                />;
              </TabsContent>;

              <TabsContent value="archived">;

=======
                />;
              </TabsContent>;
                <QuoteRequestsList
                  quotes={archivedQuotes}
                  isLoading={isLoading}
              ;
              <TabsContent value="archived">;
                <QuoteRequestsList;
                  quotes={archivedQuotes}                  isLoading={isLoading}
                />
              </TabsContent>
              <TabsContent value="archived">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <QuoteRequestsList
                  quotes={archivedQuotes}
                  isLoading={isLoading}
                  isArchived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
<<<<<<< HEAD
<<<<<<< HEAD

                />;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        {/* Quote Details Modal */}
        <QuoteDetails
          quote={selectedQuote}
          isOpen={showDetails}
<<<<<<< HEAD


          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                />;
              </TabsContent>;
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

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
            setSelectedQuote(null)
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
          onClose={() => {;
            setShowDetails(false);
    toggle_archive;
  } = useTalentQuotes ();
;
  const handleViewDetails = (quote: QuoteRequest) =>: any {
    setSelectedQuote (quote);
    setShowDetails (true),
    // If status is new, mark as viewed;
    // Check condition
if ( {) {
  $2
}
      markAsViewed (quote.id);
    }
  }
;
  // Filter quotes by archive status;
  const active_quotes = quotes.filter (q => !q.is_archived);
  const archived_quotes = quotes.filter (q => q.is_archived);
;
  return (
    <ProtectedRoute>;
      <div>;
        <Header />;
        <div className="min - h-screen bg - zion - blue px - 4 py - 8">;
          <div className="container mx - auto">;
            <RequestsHeader;
              unread_count={unread_count}
              status_filter={status_filter}
              setStatusFilter={setStatusFilter}
              archive_filter={archive_filter}
              setArchiveFilter={setArchiveFilter}
            />;
            {/* Main Content */}
            <Tabs default_value="active" className="mb - 6">;
              <TabsList className="bg - zion - blue - dark border border - zion - blue - light">;
                <TabsTrigger value="active">Active Requests</TabsTrigger>;
                <TabsTrigger value="archived">Archived</TabsTrigger>;
              </TabsList>;
              <TabsContent value="active">;
                <QuoteRequestsList;
                  quotes={active_quotes}
                  is_loading={is_loading}
                  is_archived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggle_archive}
                />;
              </TabsContent>;
              <TabsContent value="archived">;
                <QuoteRequestsList;
                  quotes={archived_quotes}
                  is_loading={is_loading}
                  is_archived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggle_archive}
                />;
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
  RequestsHeader;
QuoteRequestsList export default function RequestsPanel () {
  const {
  user 
}= useAuth ();
const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker';
const [showDetails, setShowDetails] = useState (false);
//If status is new, mark as viewed if (quote.status === 'new') {
  return (<ProtectedRoute> <div> <Header /> <div className="min-h-screen bg-zion-blue px-4 py-8" > <div className="container mx-auto" > <RequestsHeader unreadCount= {
  unreadCount 
}statusFilter= {
  statusFilter 
}setStatusFilter= {
  setStatusFilter 
}archiveFilter= {
  archiveFilter 
}setArchiveFilter= {
  setArchiveFilter 
}/> </TabsList> <TabsContent value="active" > <QuoteRequestsList quotes= {
  activeQuotes 
}isLoading= {
  isLoading 
}isArchived= {
  false 
}onViewDetails= {
  handleViewDetails 
}onMarkAsResponded= {
  markAsResponded 
}onToggleArchive= {
  toggleArchive 
}/> </TabsContent> <TabsContent value="archived" > <QuoteRequestsList quotes= {
  archivedQuotes 
}isLoading= {
  isLoading 
}isArchived= {
  true 
}onViewDetails= {
  handleViewDetails 
}onMarkAsResponded= {
  markAsResponded 
}onToggleArchive= {
  toggleArchive 
}/> </TabsContent> </Tabs> </div> </div> {
  /* Quote Details Modal */ 
}<QuoteDetails /> <Footer /> </div> </ProtectedRoute>) 
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
