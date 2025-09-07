class ErrorBoundary extends React.Component {

  // TODO: Implement
}
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }

  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);'

  }
  render() {

    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
</QuoteRequest>

  const [selected_quote, setSelectedQuote] = useState < QuoteRequest | null>(null);
  const [show_details, setShowDetails] = useState (false);
;
  const {
  // TODO: Implement
}
    quotes;
    unread_count;
    is_loading;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    markAsViewed;

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null />(null);}
  const [showDetails, setShowDetails] = useState(false);}
import type { QuoteRequest } from \"@/types/quotes\",
import { ProtectedRoute } from \"@/components/ProtectedRoute\",
export default function RequestsPanel() {}
  const { user } = useAuth(),
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null />(null),
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
    markAsResponded,}
    toggleArchive}
  } = useTalentQuotes(),
  const handleViewDetails = (
    setSelectedQuote(quote),
    setShowDetails(true),
    // If status is new, mark as viewed;
if (quote.status === 'new') {
      markAsViewed(quote.id)) => {
  return $3;}
}
    }
  // Filter quotes by archive status;
const activeQuotes = quotes.filter(q => !q.is_archived),
  const archivedQuotes = quotes.filter(q => q.is_archived),
import React, { useState } from \"react\";
import { Header } from \"@/components/Header\";
import { Footer } from \"@/components/Footer\",;
import { useTalentQuotes } from \"@/hooks/useTalentQuotes\",;
import { useAuth } from \"@/hooks/useAuth\",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from \"@/components/ui/tabs\",;
import { QuoteDetails } from \"@/components/quotes/QuoteDetails\",;
import {;
  RequestsHeader,;}
  QuoteRequestsList;}
} from \"@/components/quotes\",;
import type { QuoteRequest } from \"@/types/quotes\",;
import { ProtectedRoute } from \"@/components/ProtectedRoute\",;
export default function RequestsPanel() {;}
  const { user } = useAuth(),;
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null />(null),;
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
    markAsResponded,;}
    toggleArchive;}
  } = useTalentQuotes(),;
  return (    <ProtectedRoute />;
      <div />;
        <Header />;
        <div className=\"min-h-screen bg-zion-blue px-4 py-8\" />;
          <div className=\"container mx-auto\" />;
            <RequestsHeader            <RequestsHeader;
unreadCount={unreadCount}

    markAsResponded;'
import React, { useState } from "react",""
import { Header } from "@/components/Header",""
import { Footer } from "@/components/Footer",""
import { useTalentQuotes } from "@/hooks/useTalentQuotes",""
import { useAuth } from "@/hooks/useAuth",""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""
import { QuoteDetails } from "@/components/quotes/QuoteDetails";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",""
import { QuoteDetails } from "@/components/quotes/QuoteDetails","
import {
  // TODO: Implement
}
  RequestsHeader;
  QuoteRequestsList;"
} from "@/components/quotes",""
import type { QuoteRequest } from "@/types/quotes";""
import { ProtectedRoute } from "@/components/ProtectedRoute";"
export default function RequestsPanel() {
  const { user } = useAuth();

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
</QuoteRequest>
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
</QuoteRequest>
    <ProtectedRoute>
</ProtectedRoute>
      <div>
</div>
        <Header />
</Header>"
        <div className="min-h-screen bg-zion-blue px-4 py-8">"
</div>"
          <div className="container mx-auto">"
</div>
            <RequestsHeader;"
import React, { useState } from "react",;""
import { Header } from "@/components/Header",;""
import { Footer } from "@/components/Footer",;""
import { useTalentQuotes } from "@/hooks/useTalentQuotes",;""
import { useAuth } from "@/hooks/useAuth",;""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;""
import { QuoteDetails } from "@/components/quotes/QuoteDetails",;"
import {;
  RequestsHeader,;
  QuoteRequestsList;"
} from "@/components/quotes",;""
import type { QuoteRequest } from "@/types/quotes",;""
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
export default function RequestsPanel() {;
  const { user } = useAuth(),;"
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',;'
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
</RequestsHeader>
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
</QuoteRequest>
  const [selected_quote, setSelectedQuote] = useState < QuoteRequest | null>(null);
  const [show_details, setShowDetails] = useState (false);
;
  const {
  // TODO: Implement
}
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
    <ProtectedRoute>;
</ProtectedRoute>
      <div>;
</div>
        <Header />;
</Header>'
        <div className="min-h-screen bg-zion-blue px-4 py-8">;"
</div>"
          <div className="container mx-auto">;"
</div>
            <RequestsHeader;


            <RequestsHeader;
              unreadCount={unreadCount}

              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
            />;

</RequestsHeader>"
            <Tabs defaultValue="active" className="mb-6">;"
</Tabs>"
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;"
</TabsList>"
                <TabsTrigger value="active">Active Requests</TabsTrigger>;""
                <TabsTrigger value="archived">Archived</TabsTrigger>;"
              </TabsList>;"
              <TabsContent value="active">;"
</TabsContent>
                <QuoteRequestsList;
                  quotes={activeQuotes}
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}

                />;
</QuoteRequestsList>
              </TabsContent>;"
              <TabsContent value="archived">;"
</TabsContent>
                <QuoteRequestsList;
                  quotes={archivedQuotes}

                  isLoading={isLoading}
                  isArchived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}


                />;
</QuoteRequestsList>
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
        <QuoteDetails;
          quote={selectedQuote}
          isOpen={showDetails}

)
          onClose={() => {;
</QuoteDetails>
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
        <QuoteDetails;
          quote={selectedQuote}
          isOpen={showDetails}


          onClose={() => {;
</QuoteDetails>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <QuoteDetails;
          quote={selectedQuote}
          isOpen={showDetails}
          onClose={() => {
</QuoteDetails>
        <Footer />
</Footer>
      </div>
    </ProtectedRoute>
    <ProtectedRoute>;
</ProtectedRoute>
      <div>;
</div>
        <Header />;
</Header>"
        <div className="min - h-screen bg - zion - blue px - 4 py - 8">;"
</div>"
          <div className="container mx - auto">;"
</div>
            <RequestsHeader;
              unread_count={unread_count}
              status_filter={status_filter}
              setStatusFilter={setStatusFilter}
              archive_filter={archive_filter}
              setArchiveFilter={setArchiveFilter}
            />;
</RequestsHeader>"
            <Tabs default_value="active" className="mb - 6">;"
</Tabs>"
              <TabsList className="bg - zion - blue - dark border border - zion - blue - light">;"
</TabsList>"
                <TabsTrigger value="active">Active Requests</TabsTrigger>;""
                <TabsTrigger value="archived">Archived</TabsTrigger>;"
              </TabsList>;"
              <TabsContent value="active">;"
</TabsContent>
                <QuoteRequestsList;
                  quotes={active_quotes}
                  is_loading={is_loading}
                  is_archived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggle_archive}
                />;
</QuoteRequestsList>
              </TabsContent>;"
              <TabsContent value="archived">;"
</TabsContent>
                <QuoteRequestsList;
                  quotes={archived_quotes}
                  is_loading={is_loading}
                  is_archived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggle_archive}

                />;
</QuoteRequestsList>
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
        <QuoteDetails;

          quote={selected_quote}
          is_open={show_details}
          on_close={() => {
</QuoteDetails>
        <Footer />;
</Footer>
      </div>;
    </ProtectedRoute>);
        <Footer />;
</Footer>
      </div>;
    </ProtectedRoute>;"
  return (<ProtectedRoute> <div> <Header /> <div className="min-h-screen bg-zion-blue px-4 py-8" > <div className="container mx-auto" > <RequestsHeader unreadCount= {"
</ProtectedRoute>"
}/> </TabsList> <TabsContent value="active" > <QuoteRequestsList quotes= {"
</TabsContent>"
}/> </TabsContent> <TabsContent value="archived" > <QuoteRequestsList quotes= {"
</TabsContent>
}/> </TabsContent> </Tabs> </div> </div> {)
}<QuoteDetails /> <Footer /> </div> </ProtectedRoute>) 
</QuoteDetails>"

