  const [showDetails, setShowDetails] = useState(false);    quotes;
    is_loading;
    error;
    status_filter;
    setStatusFilter;
    archive_filter;
    setArchiveFilter;
    search_query;
    setSearchQuery;
    date_range;
    setDateRange;
import type { QuoteRequest } from "@/types/quotes",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import { QuoteDetails } from "@/components/quotes/QuoteDetails",
import { ExportToCSV } from "@/components/quotes/ExportToCSV",
import {
  }
  QuoteStatusCards,
  QuotesFilter,
  QuotesTable
} from "@/components/admin/quotes",
  const {
    }
    quotes,
    isLoading,
    error,
    statusFilter,
    setStatusFilter,
    archiveFilter,
    setArchiveFilter,
    searchQuery,
    setSearchQuery,
    dateRange,
    setDateRange,
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;
            ;
            {/* Filters */}
            <QuotesFilter;
              searchQuery={searchQuery}              setSearchQuery={setSearchQuery}
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />;


            setShowDetails(false),;
            setSelectedQuote(null),;
          }
        />;
        ;

        <Footer />;
</Footer>
      </div>;
    </ProtectedRoute>;
  ),;}
 import {
  }
  QuoteStatusCards;
QuotesFilter;
QuotesTable export default function QuoteManager() {
  }
  const {
  }
  user
}= useAuth ();
const isAdmin = user?.userType === 'admin';'
const [showDetails, setShowDetails] = useState (false);
}min-h-screen bg-zion-blue px-4 py-8"> <div className=" container mx-auto"> <div className=" flex flex-col "md":flex-row justify-between items-start "md":items-center mb-8"> <div> <h1 className=" text-3xl font-bold text-white mb-2">Quote Request Manager</h1> <p className=" text-zion-slate-light">Manage and respond to all talent hire requests</p> </div> </div> {"
  /* Status Summary Cards */
}<QuoteStatusCards statusCounts= {
  }
  statusCounts
} /> {
  /* Filters */
}<QuotesFilter searchQuery= {
  }
  searchQuery
}setSearchQuery= {
  }
  setSearchQuery
}statusFilter= {
  }
  statusFilter
}setStatusFilter= {
  }
  setStatusFilter
}archiveFilter= {
  }
  archiveFilter
}setArchiveFilter= {
  }
  setArchiveFilter
}dateRange= {
  }
  dateRange
}setDateRange= {
  }
  setDateRange
}onReset= {
  }
  handleResetFilters
} /> <QuotesTable quotes= {
  }
  quotes.filter (quote => !quote.is archived)
}isLoading= {
  }
  isLoading
}updateStatus= {
  }
  updateStatus
}toggleArchive= {
  }
  toggleArchive
}deleteQuote= {
  }
  deleteQuote
}onViewDetails= {
  }
  handleViewDetails
}/> </Card> </TabsContent> <TabsContent value=" archived"> <Card className=" bg-zion-blue-dark border border-zion-blue-light overflow-hidden" > <QuotesTable quotes= {"
  }
  quotes.filter (quote => quote.is archived)
}isArchived= {
  }
  true
}isLoading= {
  }
  isLoading
}updateStatus= {
  }
  updateStatus
}toggleArchive= {
  }
  toggleArchive
}deleteQuote= {
  }
  deleteQuote
}onViewDetails= {
  }
  handleViewDetails
}/> </Card> </TabsContent> </Tabs> </div> </div> {
  /* Quote Details Modal */
}<QuoteDetails /> <Footer /> </div> </ProtectedRoute>)
}
}
