
<<<<<<< HEAD
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
  const activeQuotes = quotes.filter(q => !q.is_archived),;
  const archivedQuotes = quotes.filter(q => q.is_archived),;
;
  return (;
    <ProtectedRoute>;
      <div>;
        <Header />;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;
          <div className="container mx-auto">;
            <RequestsHeader;
              unreadCount={unreadCount}
=======
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useTalentQuotes } from "@/hooks/useTalentQuotes",
import { useAuth } from "@/hooks/useAuth",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { QuoteDetails } from "@/components/quotes/QuoteDetails",import { 
  RequestsHeader,
  QuoteRequestsList 
} from "@/components/quotes",
import type { QuoteRequest } from "@/types/quotes",
import { ProtectedRoute } from "@/components/ProtectedRoute",export default function RequestsPanel() {
  const { user } = useAuth(),
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',
import React, {useState} from "react";
import {RequestsHeader, QuoteRequestsList} from "@/components/quotes";
import type {QuoteRequest} from "@/types/quotes";

export default function RequestsPanel() {const { user} = useAuth();
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker';
  
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
  } = useTalentQuotes(),

  const handleViewDetails = (quote: QuoteRequest) => {
    setSelectedQuote(quote),
    setShowDetails(true),    
    // If status is new, mark as viewed,
if (quote.status === 'new') {
      markAsViewed(quote.id)
    }
  },

  // Filter quotes by archive status,
const activeQuotes = quotes.filter(q => !q.isarchived),
  const archivedQuotes = quotes.filter(q => q.isarchived),
  return (_<ProtectedRoute>
      <div>
        <Header />
        <div className=&quot;min-h-screen bg-zion-blue px-4 py-8&quot;>
          <div className=&quot;container mx-auto&quot;>
            <RequestsHeader,
unreadCount={unreadCount}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
            />;
            ;
            {/* Main Content */}
<<<<<<< HEAD
            <Tabs defaultValue="active" className="mb-6">;
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;
                <TabsTrigger value="active">Active Requests</TabsTrigger>;
                <TabsTrigger value="archived">Archived</TabsTrigger>;
              </TabsList>;
              ;
              <TabsContent value="active">;
                <QuoteRequestsList;
                  quotes={activeQuotes}
=======
            <Tabs defaultValue=&quot;active&quot; className=&quot;mb-6&quot;>
              <TabsList className=&quot;bg-zion-blue-dark border border-zion-blue-light&quot;>
                <TabsTrigger value=&quot;active&quot;>Active Requests</TabsTrigger>
                <TabsTrigger value=&quot;archived&quot;>Archived</TabsTrigger>              </TabsList>
              
              <TabsContent value=&quot;active&quot;>
                <QuoteRequestsList,
quotes={activeQuotes}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
<<<<<<< HEAD
                />;
              </TabsContent>;
              ;
              <TabsContent value="archived">;
                <QuoteRequestsList;
                  quotes={archivedQuotes}
=======
                />
              </TabsContent>
              
              <TabsContent value=&quot;archived&quot;>
                <QuoteRequestsList,
quotes={archivedQuotes}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  isLoading={isLoading}
                  isArchived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}
<<<<<<< HEAD
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
            setShowDetails(false),;
            setSelectedQuote(null),;
          }}
        />;
        ;
        <Footer />;
      </div>;
    </ProtectedRoute>;
  ),;
=======
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {_/* Quote Details Modal */}
        <QuoteDetails,
quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
            setShowDetails(false),
            setSelectedQuote(null)
          }}        />
        
        <Footer />
      </div>
    </ProtectedRoute>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
