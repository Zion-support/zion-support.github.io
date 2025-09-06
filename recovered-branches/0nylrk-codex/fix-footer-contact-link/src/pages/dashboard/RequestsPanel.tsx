
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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

>>>>>>> main
import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useTalentQuotes} from "@/hooks/useTalentQuotes";
import {useAuth} from "@/hooks/useAuth";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {QuoteDetails} from "@/components/quotes/QuoteDetails";
import {RequestsHeader, QuoteRequestsList} from "@/components/quotes";
import type { QuoteRequest } from "@/types/quotes";
import {ProtectedRoute} from "@/components/ProtectedRoute";
export default function RequestsPanel() {;
  const { user } = useAuth();
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker';
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useTalentQuotes } from "@/hooks/useTalentQuotes",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuoteDetails } from "@/components/quotes/QuoteDetails";
=======
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { QuoteDetails } from "@/components/quotes/QuoteDetails",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { 
  RequestsHeader;
  QuoteRequestsList 
} from "@/components/quotes",
<<<<<<< HEAD
import type { QuoteRequest } from "@/types/quotes";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function RequestsPanel() {
  const { user } = useAuth();

  const isTalent = user?.userType === 'creator' |user?.userType === 'jobSeeker';
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
=======
import type { QuoteRequest } from "@/types/quotes",
import { ProtectedRoute } from "@/components/ProtectedRoute",
export default function RequestsPanel() {
  const { user } = useAuth(),
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const {;

=======
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



>>>>>>> main
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
<<<<<<< HEAD
  } = useTalentQuotes();
  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote);
    setShowDetails(true)
=======
=======

>>>>>>> main
  } = useTalentQuotes(),

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote),
    setShowDetails(true),
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> main
    // If status is new, mark as viewed
    if (quote.status === 'new') {
      markAsViewed(quote.id)
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
  // Filter quotes by archive status
  const activeQuotes = quotes.filter(q => !q.is_archived);
  const archivedQuotes = quotes.filter(q => q.is_archived);
=======
=======


=======

>>>>>>> main
  },

  // Filter quotes by archive status
  const activeQuotes = quotes.filter(q => !q.is_archived),
  const archivedQuotes = quotes.filter(q => q.is_archived),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> main
  return (
    <ProtectedRoute>
      <div>
        <Header />
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <RequestsHeader
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> main
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
=======

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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
>>>>>>> main
    <ProtectedRoute>;
      <div>;
        <Header />;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;
          <div className="container mx-auto">;
<<<<<<< HEAD
            <RequestsHeader;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

            <RequestsHeader;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
              unreadCount={unreadCount}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
<<<<<<< HEAD
            />
            {/* Main Content */}
            <Tabs defaultValue="active" className="mb-6">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
                <TabsTrigger value="active">Active Requests</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>
              <TabsContent value="active">
=======

            />;

            {/* Main Content */}
            <Tabs defaultValue="active" className="mb-6">;
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;
                <TabsTrigger value="active">Active Requests</TabsTrigger>;
                <TabsTrigger value="archived">Archived</TabsTrigger>;
              </TabsList>;

              <TabsContent value="active">;

>>>>>>> main
                <QuoteRequestsList
                  quotes={activeQuotes}
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
<<<<<<< HEAD
                />
              </TabsContent>
              <TabsContent value="archived">
=======

                />;
              </TabsContent>;

              <TabsContent value="archived">;

>>>>>>> main
                <QuoteRequestsList
                  quotes={archivedQuotes}
                  isLoading={isLoading}
                  isArchived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
<<<<<<< HEAD
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
=======

                />;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;


>>>>>>> main
        {/* Quote Details Modal */}
        <QuoteDetails
          quote={selectedQuote}
          isOpen={showDetails}
<<<<<<< HEAD
<<<<<<< HEAD
          onClose={() => {
            setShowDetails(false);

            setSelectedQuote(null)
=======
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
          }}
        />
        <Footer />
      </div>
    </ProtectedRoute>
  )
<<<<<<< HEAD
}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
