
<<<<<<< HEAD
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
=======

import React, { useState } from "react";"
import {Header} from "@/components/Header";"
import {Footer} from "@/components/Footer";"
import {useTalentQuotes} from "@/hooks/useTalentQuotes";"
import {useAuth} from "@/hooks/useAuth";"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";"
import {QuoteDetails} from "@/components/quotes/QuoteDetails";"
import {RequestsHeader, QuoteRequestsList} from "@/components/quotes";"
import type { QuoteRequest } from "@/types/quotes";

import React, { useState } from './react';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { useTalentQuotes } from '@/hooks / useTalentQuotes';'
import { use_auth } from '@/hooks / use_auth';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { QuoteDetails } from '@/components / quotes / QuoteDetails';'
import { RequestsHeader, QuoteRequestsList } from '@/components / quotes';"
import type { QuoteRequest } from "@/types / quotes";'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
const {
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useTalentQuotes } from "@/hooks/useTalentQuotes",
import { useAuth } from "@/hooks/useAuth",
import {
  RequestsHeader;
  QuoteRequestsList
} from "@/components/quotes",
const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),

    quotes;
    unread_count;
    is_loading;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    markAsViewed;
    markAsResponded;
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function RequestsPanel() {};
  const { user } = useAuth();
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuoteDetails } from "@/components/quotes/QuoteDetails";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { QuoteDetails } from "@/components/quotes/QuoteDetails",
import { 
  RequestsHeader;
  QuoteRequestsList 
} from "@/components/quotes",
import type { QuoteRequest } from "@/types/quotes";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function RequestsPanel() {
  const { user } = useAuth();

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [showDetails, setShowDetails] = useState(false);"
import type { QuoteRequest } from "@/types/quotes","
import { ProtectedRoute } from "@/components/ProtectedRoute",
export default function RequestsPanel() {}
  const { user } = useAuth(),'
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),
  const [showDetails, setShowDetails] = useState(false),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const {
=======

  const {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    markAsViewed,;
    markAsResponded,;
    toggleArchive;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  } = useTalentQuotes(),

  const handleViewDetails = (quote: QuoteRequest) => {}
    setSelectedQuote(quote),
    setShowDetails(true),

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    // If status is new, mark as viewed
    if (quote.status === 'new') {
      markAsViewed(quote.id)
    }
<<<<<<< HEAD

  },
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  // Filter quotes by archive status;
=======

  },

  // Filter quotes by archive status
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const activeQuotes = quotes.filter(q => !q.is_archived),
  const archivedQuotes = quotes.filter(q => q.is_archived),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  return (
    <ProtectedRoute>
      <div>
<Header />"
        <div className="min-h-screen bg-zion-blue px-4 py-8">"
          <div className="container mx-auto">
<RequestsHeader
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        <Header />
        <div className="min-h-screen bg-zion-blue px-4 py-8">
          <div className="container mx-auto">
            <RequestsHeader

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useTalentQuotes } from "@/hooks/useTalentQuotes",;
import { useAuth } from "@/hooks/useAuth",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
=======
            <RequestsHeader;
"
import React, { useState } from "react",;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { useTalentQuotes } from "@/hooks/useTalentQuotes",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { QuoteDetails } from "@/components/quotes/QuoteDetails",;
import {;
  RequestsHeader,;
  QuoteRequestsList;"
} from "@/components/quotes",;"
import type { QuoteRequest } from "@/types/quotes",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;
export default function RequestsPanel() { return null; }
  const { user } = useAuth(),;'
  const isTalent = user?.userType === 'creator' || user?.userType === 'jobSeeker',;
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
    markAsViewed,;
    markAsResponded,;
    toggleArchive;
  } = useTalentQuotes(),;
return (    <ProtectedRoute>;

  const handleViewDetails = (quote: QuoteRequest) => {;
    setSelectedQuote(quote);
    setShowDetails(true),;

// If status is new, mark as viewed;'
    if (quote && quote.status === 'new') {;
      markAsViewed(quote && quote.id);
    }
  };

  // Filter quotes by archive status;
  const activeQuotes = quotes && quotes.filter(q => !q && q.is_archived);
  const archivedQuotes = quotes && quotes.filter(q => q && q.is_archived);
"
import React, { useState } from "react",;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { useTalentQuotes } from "@/hooks/useTalentQuotes",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { QuoteDetails } from "@/components/quotes/QuoteDetails",;
import { ;
  RequestsHeader,;
  QuoteRequestsList ;"
} from "@/components/quotes",;"
import type { QuoteRequest } from "@/types/quotes",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;
;
export default function RequestsPanel() { return null; }
  const { user } = useAuth(),;'
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
// If status is new, mark as viewed;'
    if (quote.status === 'new') {;
      markAsViewed(quote.id),;
    }
  },;
;
// Filter quotes by archive status;'
import React, { useState } from './react';'
import { Header } from '@/components / Header';'
import { Footer } from '@/components / Footer';'
import { useTalentQuotes } from '@/hooks / useTalentQuotes';'
import { use_auth } from '@/hooks / use_auth';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { QuoteDetails } from '@/components / quotes / QuoteDetails';'
import { RequestsHeader, QuoteRequestsList } from '@/components / quotes';"
import type { QuoteRequest } from "@/types / quotes";'
import { ProtectedRoute } from '@/components / ProtectedRoute';
export default /**;
 * RequestsPanel - Function description;
 */
function RequestsPanel() {}
  const { user } = use_auth ();'
  const is_talent = user?.user_type === 'creator' || user?.user_type === 'job_seeker';
;

    <ProtectedRoute>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <div>;
        <Header />;"
        <div className="min-h-screen bg-zion-blue px-4 py-8">;"
          <div className="container mx-auto">;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            <RequestsHeader;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            <RequestsHeader            <RequestsHeader
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            <RequestsHeader            <RequestsHeader
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

            <RequestsHeader;

            <RequestsHeader
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              unreadCount={unreadCount}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}

/>;

            {/* Main Content */}
            <Tabs defaultValue="active" className="mb-6">;
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;
                <TabsTrigger value="active">Active Requests</TabsTrigger>;
                <TabsTrigger value="archived">Archived</TabsTrigger>;
              </TabsList>;

<TabsContent value="active">;                <QuoteRequestsList
                  quotes={activeQuotes}
                  isLoading={isLoading}
                  isArchived={false}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}

<QuoteRequestsList;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  quotes={archivedQuotes}
                  isLoading={isLoading}
                  isArchived={true}
                  onViewDetails={handleViewDetails}
                  onMarkAsResponded={markAsResponded}
                  onToggleArchive={toggleArchive}

/>;
              </TabsContent>;
            </Tabs>;
          </div>;
        </div>;

        {/* Quote Details Modal */}
        <QuoteDetails
          quote={selectedQuote}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          isOpen={showDetails}
<<<<<<< HEAD

          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            setSelectedQuote(null)
          onClose={() => {;
            setShowDetails(false);
            setSelectedQuote(null);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          }}
        />
        <Footer />
      </div>
    </ProtectedRoute>
  )
<<<<<<< HEAD
}
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
          onClose={() => {;
            setShowDetails(false);
    toggle_archive;
  } = useTalentQuotes ();
;
const handleViewDetails = (quote: QuoteRequest) =>: any {}
    setSelectedQuote (quote);
    setShowDetails (true),
    // If status is new, mark as viewed;
    // Check condition;
if ( {) {}
  $2;
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
<Header />;"
        <div className="min - h-screen bg - zion - blue px - 4 py - 8">;"
          <div className="container mx - auto">;
            <RequestsHeader;
=======

        <Footer />

        <div className="min - h-screen bg - zion - blue px - 4 py - 8">;"
          <div className="container mx - auto">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              unread_count={unread_count}
              status_filter={status_filter}
              archive_filter={archive_filter}
setArchiveFilter={setArchiveFilter}
            />;
{/* Main Content */}"
            <Tabs default_value="active" className="mb - 6">;"
              <TabsList className="bg - zion - blue - dark border border - zion - blue - light">;"
                <TabsTrigger value="active">Active Requests</TabsTrigger>;"
                <TabsTrigger value="archived">Archived</TabsTrigger>;
              </TabsList>;"
              <TabsContent value="active">;
                <QuoteRequestsList;
                  quotes={active_quotes}
                  is_loading={is_loading}
                  is_archived={false}
                  onToggleArchive={toggle_archive}
/>;
</TabsContent>;"
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
on_close={() => {}
            setShowDetails (false);
            setSelectedQuote (null);
          }}
        />;
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <Footer />;
      </div>;
    </ProtectedRoute>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          isOpen={showDetails}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

    );

  return (<ProtectedRoute> <div> <Header /> <div className="min-h-screen bg-zion-blue px-4 py-8" > <div className="container mx-auto" > <RequestsHeader unreadCount= {"
}/>  <TabsContent value="active" > <QuoteRequestsList quotes= {"
}/>  <TabsContent value="archived" > <QuoteRequestsList quotes= {"

}/>   </div> </div> {)
}<QuoteDetails /> <Footer /> </div> ) 
pr-12325
</ProtectedRoute>"
}/> </TabsList> <TabsContent value="active" > <QuoteRequestsList quotes= {"
</TabsContent>"
}/> </TabsContent> <TabsContent value="archived" > <QuoteRequestsList quotes= {"
</TabsContent>
}/> </TabsContent> </Tabs> </div> </div> {)
}<QuoteDetails /> <Footer /> </div> </ProtectedRoute>) 
</QuoteDetails>"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
