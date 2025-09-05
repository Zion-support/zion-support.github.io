
import React, { useState } from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { useTalentQuotes } from &quot;@/hooks/useTalentQuotes&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { QuoteDetails } from &quot;@/components/quotes/QuoteDetails&quot;;
import { 
  RequestsHeader, 
  QuoteRequestsList 
} from &quot;@/components/quotes&quot;;
import type { QuoteRequest } from &quot;@/types/quotes&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;

export default function RequestsPanel() {
  const { user } = useAuth();
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker';
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);

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
    setShowDetails(true);
    
    // If status is new, mark as viewed
    if (quote.status === 'new') {
      markAsViewed(quote.id);
    }
  };

  // Filter quotes by archive status
  const activeQuotes = quotes.filter(q => !q.is_archived);
  const archivedQuotes = quotes.filter(q => q.is_archived);

  return (
    <ProtectedRoute>
      <div>
        <Header />
        <div className=&quot;min-h-screen bg-zion-blue px-4 py-8&quot;>
          <div className=&quot;container mx-auto&quot;>
            <RequestsHeader
              unreadCount={unreadCount}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
            />
            
            {/* Main Content */}
            <Tabs defaultValue=&quot;active&quot; className=&quot;mb-6&quot;>
              <TabsList className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                <TabsTrigger value=&quot;active&quot;>Active Requests</TabsTrigger>
                <TabsTrigger value=&quot;archived&quot;>Archived</TabsTrigger>
              </TabsList>
              
              <TabsContent value=&quot;active&quot;>
                <QuoteRequestsList
                  quotes={activeQuotes}
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
                />
              </TabsContent>
              
              <TabsContent value=&quot;archived&quot;>
                <QuoteRequestsList
                  quotes={archivedQuotes}
                  isLoading={isLoading}
                  isArchived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
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
            setSelectedQuote(null);
          }}
        />
        
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
