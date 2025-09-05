
import React, {_useState} from "react";
import {_RequestsHeader, _QuoteRequestsList} from "@/components/quotes";
import type {_QuoteRequest} from "@/types/quotes";

export default function RequestsPanel() {_const { user} = useAuth();
  const _isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker';
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const {_quotes, _unreadCount, _isLoading, _statusFilter, _setStatusFilter, _archiveFilter, _setArchiveFilter, _markAsViewed, _markAsResponded, _toggleArchive} = useTalentQuotes();

  const _handleViewDetails = (_quote: QuoteRequest) => {_setSelectedQuote(quote);
    setShowDetails(true);
    
    // If status is new, _mark as viewed
    if (quote.status === 'new') {
      markAsViewed(quote.id);}
  };

  // Filter quotes by archive status
  const _activeQuotes = quotes.filter(q => !q.is_archived);
  const _archivedQuotes = quotes.filter(q => q.is_archived);

  return (_<ProtectedRoute>
      <div>
        <Header />
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <RequestsHeader
              unreadCount={_unreadCount}
              statusFilter={_statusFilter}
              setStatusFilter={_setStatusFilter}
              archiveFilter={_archiveFilter}
              setArchiveFilter={_setArchiveFilter}
            />
            
            {_/* Main Content */}
            <Tabs defaultValue="active" className="mb-6">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
                <TabsTrigger value="active">Active Requests</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>
              
              <TabsContent value="active">
                <QuoteRequestsList
                  quotes={_activeQuotes}
                  isLoading={_isLoading}
                  isArchived={_false}
                  onViewDetails={_handleViewDetails}
                  onMarkAsResponded={_markAsResponded}
                  onToggleArchive={_toggleArchive}
                />
              </TabsContent>
              
              <TabsContent value="archived">
                <QuoteRequestsList
                  quotes={_archivedQuotes}
                  isLoading={_isLoading}
                  isArchived={_true}
                  onViewDetails={_handleViewDetails}
                  onMarkAsResponded={_markAsResponded}
                  onToggleArchive={_toggleArchive}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {_/* Quote Details Modal */}
        <QuoteDetails
          quote={_selectedQuote}
          isOpen={_showDetails}
          onClose={_() => {
            setShowDetails(false);
            setSelectedQuote(null);}}
        />
        
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
