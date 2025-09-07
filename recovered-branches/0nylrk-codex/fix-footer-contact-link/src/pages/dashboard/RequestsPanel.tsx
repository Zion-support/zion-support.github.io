
class ErrorBoundary extends React.Component {
  // TODO: Implement
}
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);

  const [selected_quote, setSelectedQuote] = useState < QuoteRequest | null>(null);
  const [show_details, setShowDetails] = useState (false);
;
  const {
  // TODO: Implement
    quotes;
    unread_count;
    is_loading;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    markAsViewed;
    markAsResponded;
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
  RequestsHeader;
  QuoteRequestsList;"
} from "@/components/quotes",""
import type { QuoteRequest } from "@/types/quotes";""
import { ProtectedRoute } from "@/components/ProtectedRoute";"
export default function RequestsPanel() {
  const { user } = useAuth();


  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),

    <ProtectedRoute>

      <div>
</div>
        <Header />
"
        <div className="min-h-screen bg-zion-blue px-4 py-8">"
</div>"
          <div className="container mx-auto">"
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
} from "@/components/quotes",;""
import type { QuoteRequest } from "@/types/quotes",;""
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
export default function RequestsPanel() {;
  const { user } = useAuth(),;"
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;


  // TODO: Implement
  return (
    <ProtectedRoute>;

      <div>;
        <Header />;

        <div className="min-h-screen bg-zion-blue px-4 py-8">;"
          <div className="container mx-auto">;"
            <RequestsHeader;


              unreadCount={unreadCount}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}

            />;
            <Tabs defaultValue="active" className="mb-6">;"
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;"
                <TabsTrigger value="active">Active Requests;""
                <TabsTrigger value="archived">Archived;"
              ;"
              <TabsContent value="active">;"

                <QuoteRequestsList;
                  quotes={activeQuotes}
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}


              <TabsContent value="archived">;"

                  quotes={archivedQuotes}
                  isArchived={true}


          </div>;
        <QuoteDetails;
          quote={selectedQuote}
          isOpen={showDetails}

)
          onClose={() => {;




              
            
          onClose={() => {

        <Footer />

    

        <div className="min - h-screen bg - zion - blue px - 4 py - 8">;"
          <div className="container mx - auto">;"
              unread_count={unread_count}
              status_filter={status_filter}
              archive_filter={archive_filter}
            <Tabs default_value="active" className="mb - 6">;"
              <TabsList className="bg - zion - blue - dark border border - zion - blue - light">;"

                  quotes={active_quotes}
                  is_loading={is_loading}
                  is_archived={false}
                  onToggleArchive={toggle_archive}


                  quotes={archived_quotes}
                  is_archived={true}

          quote={selected_quote}
          is_open={show_details}
          on_close={() => {

        <Footer />;

    );

  return (<ProtectedRoute> <div> <Header /> <div className="min-h-screen bg-zion-blue px-4 py-8" > <div className="container mx-auto" > <RequestsHeader unreadCount= {"
}/>  <TabsContent value="active" > <QuoteRequestsList quotes= {"
}/>  <TabsContent value="archived" > <QuoteRequestsList quotes= {"

}/>   </div> </div> {)
}<QuoteDetails /> <Footer /> </div> ) 