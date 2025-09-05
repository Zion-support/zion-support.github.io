
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useTalentQuotes } from "@/hooks/useTalentQuotes",
import { useAuth } from "@/hooks/useAuth",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { QuoteDetails } from "@/components/quotes/QuoteDetails",
=======
import React, { useState } from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { useTalentQuotes } from &quot;@/hooks/useTalentQuotes&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { QuoteDetails } from &quot;@/components/quotes/QuoteDetails&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { 
  RequestsHeader,
  QuoteRequestsList 
<<<<<<< HEAD
} from "@/components/quotes",
import type { QuoteRequest } from "@/types/quotes",
import { ProtectedRoute } from "@/components/ProtectedRoute",
=======
} from &quot;@/components/quotes&quot;;
import type { QuoteRequest } from &quot;@/types/quotes&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function RequestsPanel() {
  const { user } = useAuth(),
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',
=======
import React, {_useState} from "react";
import {_RequestsHeader, _QuoteRequestsList} from "@/components/quotes";
import type {_QuoteRequest} from "@/types/quotes";

export default function RequestsPanel() {_const { user} = useAuth();
  const _isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),

<<<<<<< HEAD
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
  } = useTalentQuotes(),

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote),
    setShowDetails(true),
=======
  const {_quotes, _unreadCount, _isLoading, _statusFilter, _setStatusFilter, _archiveFilter, _setArchiveFilter, _markAsViewed, _markAsResponded, _toggleArchive} = useTalentQuotes();

  const _handleViewDetails = (_quote: QuoteRequest) => {_setSelectedQuote(quote);
    setShowDetails(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // If status is new, _mark as viewed
    if (quote.status === 'new') {
<<<<<<< HEAD
      markAsViewed(quote.id)
    }
  },

  // Filter quotes by archive status
  const activeQuotes = quotes.filter(q => !q.is_archived),
  const archivedQuotes = quotes.filter(q => q.is_archived),
=======
      markAsViewed(quote.id);}
  };

  // Filter quotes by archive status
  const _activeQuotes = quotes.filter(q => !q.is_archived);
  const _archivedQuotes = quotes.filter(q => q.is_archived);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<ProtectedRoute>
      <div>
        <Header />
        <div className=&quot;min-h-screen bg-zion-blue px-4 py-8&quot;>
          <div className=&quot;container mx-auto&quot;>
            <RequestsHeader
              unreadCount={_unreadCount}
              statusFilter={_statusFilter}
              setStatusFilter={_setStatusFilter}
              archiveFilter={_archiveFilter}
              setArchiveFilter={_setArchiveFilter}
            />
            
<<<<<<< HEAD
            {/* Main Content */}
            <Tabs defaultValue=&quot;active&quot; className=&quot;mb-6&quot;>
              <TabsList className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                <TabsTrigger value=&quot;active&quot;>Active Requests</TabsTrigger>
                <TabsTrigger value=&quot;archived&quot;>Archived</TabsTrigger>
=======
            {_/* Main Content */}
            <Tabs defaultValue="active" className="mb-6">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
                <TabsTrigger value="active">Active Requests</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </TabsList>
              
              <TabsContent value=&quot;active&quot;>
                <QuoteRequestsList
                  quotes={_activeQuotes}
                  isLoading={_isLoading}
                  isArchived={_false}
                  onViewDetails={_handleViewDetails}
                  onMarkAsResponded={_markAsResponded}
                  onToggleArchive={_toggleArchive}
                />
              </TabsContent>
              
              <TabsContent value=&quot;archived&quot;>
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
<<<<<<< HEAD
          quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
            setShowDetails(false),
            setSelectedQuote(null)
          }}
=======
          quote={_selectedQuote}
          isOpen={_showDetails}
          onClose={_() => {
            setShowDetails(false);
            setSelectedQuote(null);}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
        
        <Footer />
      </div>
    </ProtectedRoute>
  )
}
