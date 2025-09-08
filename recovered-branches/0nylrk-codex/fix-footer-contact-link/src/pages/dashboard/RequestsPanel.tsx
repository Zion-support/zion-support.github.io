
<<<<<<< HEAD
=======
class ErrorBoundary extends React.Component {
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const {;


import React, { useState } from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { useTalentQuotes } from '@/hooks / useTalentQuotes';
import { use_auth } from '@/hooks / use_auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { QuoteDetails } from '@/components / quotes / QuoteDetails';
import { RequestsHeader, QuoteRequestsList } from '@/components / quotes';
import type { QuoteRequest } from "@/types / quotes";

import { ProtectedRoute } from '@/components / ProtectedRoute';
export default /**;
 * RequestsPanel - Function description;
 */
function RequestsPanel() {}
  const { user } = use_auth ();'
  const is_talent = user?.user_type === 'creator' || user?.user_type === 'job_seeker';
;
  const [selected_quote, setSelectedQuote] = useState < QuoteRequest | null>(null);
  const [show_details, setShowDetails] = useState (false);
;

<<<<<<< HEAD
  const {
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    quotes;
    unread_count;
    is_loading;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    markAsViewed;
    markAsResponded;

<<<<<<< HEAD
=======
import type { QuoteRequest } from "@/types/quotes","
import { ProtectedRoute } from "@/components/ProtectedRoute","
export default function RequestsPanel() {
}
const { user } = useAuth(),;
const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',;'
const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
const [showDetails, setShowDetails] = useState(false),;
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useTalentQuotes } from "@/hooks/useTalentQuotes",
import { useAuth } from "@/hooks/useAuth",

import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function RequestsPanel() {};
  const { user } = useAuth();

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);"
import type { QuoteRequest } from "@/types/quotes","
import { ProtectedRoute } from "@/components/ProtectedRoute",
export default function RequestsPanel() {}
  const { user } = useAuth(),'
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',
  
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),


<<<<<<< HEAD
=======
  const {

>>>>>>> origin/cursor/delete-old-data-records-6bba
    quotes,
    unreadCount,
    isLoading,
    statusFilter,
    setStatusFilter,
    archiveFilter,
    setArchiveFilter,

<<<<<<< HEAD


=======
  } = useTalentQuotes(),

  const handleViewDetails = (quote: QuoteRequest) => {}
    setSelectedQuote(quote),
    setShowDetails(true),


>>>>>>> origin/cursor/delete-old-data-records-6bba
    // If status is new, mark as viewed
    if (quote.status === 'new') {
      markAsViewed(quote.id)
    }


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },

  // Filter quotes by archive status;

  const activeQuotes = quotes.filter(q => !q.is_archived),
  const archivedQuotes = quotes.filter(q => q.is_archived),


<<<<<<< HEAD

  return (
    <ProtectedRoute>
      <div>


        <Header />
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <RequestsHeader
=======
  return (
    <ProtectedRoute>
      <div>
>>>>>>> origin/cursor/delete-old-data-records-6bba


import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useTalentQuotes } from "@/hooks/useTalentQuotes",;
import { useAuth } from "@/hooks/useAuth",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;

import { QuoteDetails } from "@/components/quotes/QuoteDetails",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {;
  RequestsHeader,;
  QuoteRequestsList;"
} from "@/components/quotes",;"
import type { QuoteRequest } from "@/types/quotes",;"
<<<<<<< HEAD

import { ProtectedRoute } from "@/components/ProtectedRoute",;
export default function RequestsPanel() { return null; }
  const { user } = useAuth(),;'
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',;
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;
  const [showDetails, setShowDetails] = useState(false),;
  const {;

=======
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
export default function RequestsPanel() {;
  }
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const handleViewDetails = (quote: QuoteRequest) => {;
    setSelectedQuote(quote);
    setShowDetails(true),;


    if (quote && quote.status === 'new') {;
      markAsViewed(quote && quote.id);
    }
  };
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  // Filter quotes by archive status;
  const activeQuotes = quotes && quotes.filter(q => !q && q.is_archived);
  const archivedQuotes = quotes && quotes.filter(q => q && q.is_archived);

<<<<<<< HEAD

    <ProtectedRoute>;
=======

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

    if (quote.status === 'new') {;
      markAsViewed(quote.id),;
    }
  },;
;

>>>>>>> origin/cursor/delete-old-data-records-6bba

      <div>;
        <Header />;"
        <div className="min-h-screen bg-zion-blue px-4 py-8">;"
          <div className="container mx-auto">;

<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              unreadCount={unreadCount}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}

<<<<<<< HEAD


=======
            />
            {/* Main Content */}
            <Tabs defaultValue="active" className="mb-6">
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">
                <TabsTrigger value="active">Active Requests</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>
              <TabsContent value="active">
                <QuoteRequestsList
                <QuoteRequestsList
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  quotes={activeQuotes}
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}

<<<<<<< HEAD


=======
                <QuoteRequestsList
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  quotes={archivedQuotes}
                  isLoading={isLoading}
                  isArchived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}

<<<<<<< HEAD

=======
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);


>>>>>>> origin/cursor/delete-old-data-records-6bba
                />;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;
        ;
<<<<<<< HEAD

        {/* Quote Details Modal */}
        <QuoteDetails;
          quote={selectedQuote}
          isOpen={showDetails}





=======


          onClose={() => {;
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
        {/* Quote Details Modal */}
        <QuoteDetails;
          quote={selectedQuote}
          isOpen={showDetails}
<<<<<<< HEAD


=======
          onClose={() => {
            setShowDetails(false);

            setSelectedQuote(null)
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);
>>>>>>> origin/cursor/delete-old-data-records-6bba
            setSelectedQuote(null)
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          }}
        />
        <Footer />
      </div>
    </ProtectedRoute>
  )
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
              unread_count={unread_count}
              status_filter={status_filter}
              archive_filter={archive_filter}

              <TabsContent value="active">;
                <QuoteRequestsList;

                  quotes={active_quotes}
                  is_loading={is_loading}
                  is_archived={false}
                  onToggleArchive={toggle_archive}

              <TabsContent value="archived">;
                <QuoteRequestsList;

                  quotes={archived_quotes}
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
