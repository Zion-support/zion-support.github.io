import React, { useState } from "react"
import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useTalentQuotes } from "@/hooks/useTalentQuotes"
import { useAuth } from "@/hooks/useAuth"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QuoteDetails } from "@/components/quotes/QuoteDetails"
import {;
  RequestsHeader,;
  QuoteRequestsList;
} from "@/components/quotes"
import type { QuoteRequest } from "@/types/quotes"
import { ProtectedRoute } from "@/components/ProtectedRoute"
export default function RequestsPanel() {;
  const { user } = useAuth(),;

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
    markAsViewed;
    markAsResponded;
    toggleArchive;
  } = useTalentQuotes()
  const handleViewDetails = (quote: QuoteRequest) => {;
    setSelectedQuote(quote)
    setShowDetails(true),;

    //[^;]*
    if (quote.status === 'new') {;
      markAsViewed(quote.id),;
    };
  },;

  //[^;]*
  const activeQuotes = quotes.filter((q: QuoteRequest) => !q.is_archived);
  const archivedQuotes = quotes.filter((q: QuoteRequest) => q.is_archived);
  return (
    <ProtectedRoute>;
      <div>;

        <div className="min-h-screen bg-zion-blue px-4 py-8">;
          <div className="container mx-auto">;
            <RequestsHeader;
              unreadCount={unreadCount};
              statusFilter={statusFilter};
              setStatusFilter={setStatusFilter};
              archiveFilter={archiveFilter};
              setArchiveFilter={setArchiveFilter};
            />;

            {/* Main Content */};
            <Tabs defaultValue="active" className="mb-6">;
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;
                <TabsTrigger value="active">Active Requests</[^>]*>
                <TabsTrigger value="archived">Archived</[^>]*>
              </[^>]*>

              <TabsContent value="active">;
                <QuoteRequestsList;
                  quotes={activeQuotes};
                  isLoading={isLoading};
                  isArchived={false};
                  onViewDetails={handleViewDetails};
                  onMarkAsResponded={markAsResponded};
                  onToggleArchive={toggleArchive};
                />;
              </[^>]*>

              <TabsContent value="archived">;
                <QuoteRequestsList;
                  quotes={archivedQuotes};
                  isLoading={isLoading};
                  isArchived={true};
                  onViewDetails={handleViewDetails};
                  onMarkAsResponded={markAsResponded};
                  onToggleArchive={toggleArchive};
                />;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Quote Details Modal */};
        <QuoteDetails;
          quote={selectedQuote};
          isOpen={showDetails};
          onClose={() => {;
            setShowDetails(false),;
            setSelectedQuote(null),;
          }};
        />;


      </[^>]*>
    </[^>]*>
  );
};
