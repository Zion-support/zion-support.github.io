
<<<<<<< HEAD
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useTalentQuotes } from "@/hooks/useTalentQuotes",
import { useAuth } from "@/hooks/useAuth",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuoteDetails } from "@/components/quotes/QuoteDetails";
import { 
  RequestsHeader;
  QuoteRequestsList 
} from "@/components/quotes",
import type { QuoteRequest } from "@/types/quotes";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function RequestsPanel() {
  const { user } = useAuth();

  const isTalent = user?.userType === 'creator' |user?.userType === 'jobSeeker';
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const {
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

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    quotes;
    unreadCount;
    isLoading;
    statusFilter;
    setStatusFilter;
    archiveFilter;
    setArchiveFilter;
    markAsViewed;
    markAsResponded;
    toggleArchive;
  } = useTalentQuotes();
<<<<<<< HEAD
  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote);
    setShowDetails(true)
    // If status is new, mark as viewed
    if (quote.status === 'new') {
      markAsViewed(quote.id)
    }
  }
  // Filter quotes by archive status
  const activeQuotes = quotes.filter(q => !q.is_archived);
  const archivedQuotes = quotes.filter(q => q.is_archived);
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
    <ProtectedRoute>;
      <div>;
        <Header />;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;
          <div className="container mx-auto">;
            <RequestsHeader
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        {/* Quote Details Modal */}
        <QuoteDetails
          quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {;
            setShowDetails(false);
<<<<<<< HEAD

            setSelectedQuote(null)
          }}
        />
        <Footer />
      </div>
    </ProtectedRoute>
  )
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
