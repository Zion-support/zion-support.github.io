


import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useTalentQuotes} from "@/hooks/useTalentQuotes";
import {useAuth} from "@/hooks/useAuth";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {QuoteDetails} from "@/components/quotes/QuoteDetails";
import {RequestsHeader, QuoteRequestsList} from "@/components/quotes";
import type { QuoteRequest } from "@/types/quotes";


    quotes;
    unread_count;
    is_loading;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    markAsViewed;
    markAsResponded;


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



                <QuoteRequestsList
                  quotes={activeQuotes}
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}

                />;
              </TabsContent>;
                <QuoteRequestsList
                  quotes={archivedQuotes}
                  isLoading={isLoading}
              ;
              <TabsContent value="archived">;
                <QuoteRequestsList;
                  quotes={archivedQuotes}                  isLoading={isLoading}
                />
              </TabsContent>
              <TabsContent value="archived">


                <QuoteRequestsList
                  quotes={archivedQuotes}
                  isLoading={isLoading}
                  isArchived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}


        {/* Quote Details Modal */}
        <QuoteDetails
          quote={selectedQuote}
          isOpen={showDetails}

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

            setSelectedQuote(null)
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);


          }}
        />
        <Footer />
      </div>
    </ProtectedRoute>
  )


}
          onClose={() => {;
            setShowDetails(false);
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

            setShowDetails(false),;
            setSelectedQuote(null),;
          }}
        />;
        ;
        <Footer />;
      </div>;
    </ProtectedRoute>;
  ),;}
 import {
  RequestsHeader;
QuoteRequestsList export default function RequestsPanel () {
  const {
  user 
}= useAuth ();
const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker';
const [showDetails, setShowDetails] = useState (false);
//If status is new, mark as viewed if (quote.status === 'new') {
  return (<ProtectedRoute> <div> <Header /> <div className="min-h-screen bg-zion-blue px-4 py-8" > <div className="container mx-auto" > <RequestsHeader unreadCount= {
  unreadCount 
}statusFilter= {
  statusFilter 
}setStatusFilter= {
  setStatusFilter 
}archiveFilter= {
  archiveFilter 
}setArchiveFilter= {
  setArchiveFilter 
}/> </TabsList> <TabsContent value="active" > <QuoteRequestsList quotes= {
  activeQuotes 
}isLoading= {
  isLoading 
}isArchived= {
  false 
}onViewDetails= {
  handleViewDetails 
}onMarkAsResponded= {
  markAsResponded 
}onToggleArchive= {
  toggleArchive 
}/> </TabsContent> <TabsContent value="archived" > <QuoteRequestsList quotes= {
  archivedQuotes 
}isLoading= {
  isLoading 
}isArchived= {
  true 
}onViewDetails= {
  handleViewDetails 
}onMarkAsResponded= {
  markAsResponded 
}onToggleArchive= {
  toggleArchive 
}/> </TabsContent> </Tabs> </div> </div> {
  /* Quote Details Modal */ 
}<QuoteDetails /> <Footer /> </div> </ProtectedRoute>) 
}
}


