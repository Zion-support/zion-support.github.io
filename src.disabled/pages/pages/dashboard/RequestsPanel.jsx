import React, { useState } from 'react';''';
import { useTalentQuotes } from '@/hooks/useTalentQuotes';''';
import { useAuth } from '@/hooks/useAuth';''';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';''';
import { QuoteDetails } from '@/components/quotes/QuoteDetails';''';
import { RequestsHeader, QuoteRequestsList } from '@/components/quotes';''';
import { ProtectedRoute } from '@/components/ProtectedRoute';
export {};
  return null;
}
  const { user } = useAuth();';
  const isTalent ='';
    user?.userType === 'creator' || user?.userType === 'jobSeeker';
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const {}
    quotes,;
    unreadCount,;
    isLoading,;
    statusFilter,;
    setStatusFilter,;
    archiveFilter,;
    setArchiveFilter,;
    markAsViewed,;
    markAsResponded,;
    toggleArchive} = useTalentQuotes();
  const handleViewDetails = quote => {}
    setSelectedQuote(quote);
    setShowDetails(true);';
    // If status is new, mark as viewed'';
    if (quote.status === 'new') {}
      markAsViewed(quote.id)}
  }
  // Filter quotes by archive status;
  const archivedQuotes = quotes.filter(q => q.is_archived);
  return();
    <ProtectedRoute>;
      <div>;
        <div className="min-h-screen bg-zion-blue px-4 py-8">"";
          <div className="container mx-auto">;
            <div>Broken JSX</div>
            />;
";
            {/* Main Content */}"";
            <Tabs defaultValue="active" className="mb-6">"";
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">"";
                <TabsTrigger value="active">Active Requests</TabsTrigger>"";
                <TabsTrigger value="archived">Archived</TabsTrigger>;
              </TabsList>";
"";
              <TabsContent value="active">;
                <div>Broken JSX</div>
                />;
              </TabsContent>";
"";
              <TabsContent value="archived">;
                <div>Broken JSX</div>
                />;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;

        {/* Quote Details Modal */}
        <div>Broken JSX</div>
          onClose={() => {}
            setShowDetails(false);
            setSelectedQuote(null)}}
        />;
      </div>;
    </ProtectedRoute>)}


export { RequestsPanel }
export { RequestsPanel }
export { RequestsPanel }
export { RequestsPanel }
export { RequestsPanel }