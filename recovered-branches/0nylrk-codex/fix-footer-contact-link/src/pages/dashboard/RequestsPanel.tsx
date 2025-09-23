






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

import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useTalentQuotes } from "@/hooks/useTalentQuotes",
import { useAuth } from "@/hooks/useAuth",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuoteDetails } from "@/components/quotes/QuoteDetails";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { QuoteDetails } from "@/components/quotes/QuoteDetails",
import { 
  RequestsHeader;
  QuoteRequestsList 
} from "@/components/quotes",
import type { QuoteRequest } from "@/types/quotes";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function RequestsPanel() {
  const { user } = useAuth();


  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
import type { QuoteRequest } from "@/types/quotes",
import { ProtectedRoute } from "@/components/ProtectedRoute",
export default function RequestsPanel() {
  const { user } = useAuth(),
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',
  

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),

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

  } = useTalentQuotes();
  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote);
    setShowDetails(true)
  } = useTalentQuotes(),

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote),
    setShowDetails(true),
    

    // If status is new, mark as viewed
    if (quote.status === 'new') {
      markAsViewed(quote.id)
    }

  }
  // Filter quotes by archive status
  const activeQuotes = quotes.filter(q => !q.is_archived);
  const archivedQuotes = quotes.filter(q => q.is_archived);
  },

  // Filter quotes by archive status
  const activeQuotes = quotes.filter(q => !q.is_archived),
  const archivedQuotes = quotes.filter(q => q.is_archived),


  return (
    <ProtectedRoute>
      <div>
        <Header />
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <RequestsHeader

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

  return (
    <ProtectedRoute>;
      <div>;
        <Header />;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;
          <div className="container mx-auto">;

            <RequestsHeader;






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


              unreadCount={unreadCount}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}

            />;

            {/* Main Content */}
            <Tabs defaultValue="active" className="mb-6">;
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;
                <TabsTrigger value="active">Active Requests</TabsTrigger>;
                <TabsTrigger value="archived">Archived</TabsTrigger>;
              </TabsList>;

              <TabsContent value="active">;

                <QuoteRequestsList
                  quotes={activeQuotes}
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}

                />;
              </TabsContent>;

              <TabsContent value="archived">;

                <QuoteRequestsList
                  quotes={archivedQuotes}
                  isLoading={isLoading}
                  isArchived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}

                />;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;


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






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


          }}
        />
        <Footer />
      </div>
    </ProtectedRoute>
  )
}

            setSelectedQuote(null);
          }}
        />;

        <Footer />;
      </div>;
    </ProtectedRoute>;
  );
}
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

