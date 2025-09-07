
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
import type { QuoteRequest } from "@/types/quotes",""
import { ProtectedRoute } from "@/components/ProtectedRoute",""
import { QuoteDetails } from "@/components/quotes/QuoteDetails",""
import { ExportToCSV } from "@/components/quotes/ExportToCSV","
import {
  // TODO: Implement
  QuoteStatusCards,
  QuotesFilter,
  QuotesTable;"
} from "@/components/admin/quotes","
export default function QuoteManager() {
  const { user } = useAuth(),"
  const isAdmin = user?.userType === 'admin',
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),

    return <Navigate to="/unauthorized" replace />"
"
    return <Navigate to="/unauthorized" replace />;"

  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null),;


    <ProtectedRoute adminOnly>;

      <div>;
</div>
        <Header />;
        <div className="min-h-screen bg-zion-blue px-4 py-8">;"
</div>"
          <div className="container mx-auto">;"
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">;"
                <h1 className="text-3xl font-bold text-white mb-2">Quote Request Manager</h1>;""
                <p className="text-zion-slate-light">Manage and respond to all talent hire requests</p>;"
              </div>;"
              <ExportToCSV quotes={quotes} filename="zion-quote-requests" />;"

            </div>;
            <QuoteStatusCards statusCounts={statusCounts} />;


            <QuotesFilter;
              searchQuery={searchQuery}              setSearchQuery={setSearchQuery}
            {/* Status Summary Cards */}
            <QuoteStatusCards statusCounts={statusCounts} />


  // TODO: Implement
  return (
            {/* Filters */}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              archiveFilter={archiveFilter}
              setArchiveFilter={setArchiveFilter}
              dateRange={dateRange}
              setDateRange={setDateRange}
              onReset={handleResetFilters}

            />;
            <Tabs defaultValue="active" className="mb-6">;"
              <TabsList className="bg-zion-blue-dark border border-zion-blue-light">;"
                <TabsTrigger value="active">Active Quotes;""
                <TabsTrigger value="archived">Archived Quotes;"
              ;"
              <TabsContent value="active">;"
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">;"

                  <QuotesTable;)
                    quotes={quotes && quotes.filter(quote => !quote && quote.is_archived)}

              <TabsContent value="archived">;"

                  <QuotesTable;
                    quotes={quotes && quotes.filter(quote => quote && quote.is_archived)}


                
              <TabsContent value="archived">"
                <Card className="bg-zion-blue-dark border border-zion-blue-light overflow-hidden">"

                    quotes={quotes.filter(quote => quote.is_archived)}

        <QuoteDetails;
          quote={selectedQuote}
          isOpen={showDetails}


          onClose={() => {;

                
              
            
          onClose={() => {

        <Footer />


    <ProtectedRoute admin_only>;

        <div className="min - h-screen bg - zion - blue px - 4 py - 8">;"
          <div className="container mx - auto">;"
            <div className="flex flex - col md:flex - row justify - between items - start md:items - center mb - 8">;"
                <h1 className="text - 3xl font - bold text - white mb - 2">Quote Request Manager</h1>;""
                <p className="text - zion - slate - light">Manage and respond to all talent hire requests</p>;"
              <ExportToCSV quotes={quotes} filename="zion - quote - requests" />;"

            <QuoteStatusCards status_counts={status_counts} />;

              search_query={search_query}
              status_filter={status_filter}
              archive_filter={archive_filter}
              date_range={date_range}
              on_reset={handleResetFilters}
            <Tabs default_value="active" className="mb - 6">;"
              <TabsList className="bg - zion - blue - dark border border - zion - blue - light">;"
                <Card className="bg - zion - blue - dark border border - zion - blue - light overflow - hidden">;"

                    quotes={quotes.filter (quote => !quote.is_archived)}


                    quotes={quotes.filter (quote => quote.is_archived)}

          quote={selected_quote}
          is_open={show_details}
          on_close={() => {

        <Footer />;

    );

}min-h-screen bg-zion-blue px-4 py-8"> <div className=" container mx-auto"> <div className=" flex flex-col md:flex-row justify-between items-start md:items-center mb-8"> <div> <h1 className=" text-3xl font-bold text-white mb-2">Quote Request Manager</h1> <p className=" text-zion-slate-light">Manage and respond to all talent hire requests</p> </div> </div> {"
}<QuoteStatusCards statusCounts= {
  statusCounts;
}/> {

}<QuotesFilter searchQuery= {
  searchQuery;
}setSearchQuery= {
}statusFilter= {
  statusFilter;
}setStatusFilter= {
}archiveFilter= {
  archiveFilter;
}setArchiveFilter= {
}dateRange= {
  dateRange;
}setDateRange= {
}onReset= {
  handleResetFilters;
}/> <QuotesTable quotes= {
}/>   <TabsContent value=" archived"> <Card className=" bg-zion-blue-dark border border-zion-blue-light overflow-hidden" > <QuotesTable quotes= {"

}/>    </div> </div> {
}<QuoteDetails /> <Footer /> </div> ) 