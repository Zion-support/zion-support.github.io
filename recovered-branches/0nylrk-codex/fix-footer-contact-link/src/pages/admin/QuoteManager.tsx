
class ErrorBoundary extends React.Component {


        <Footer />


</QuoteDetails>

        <Footer />
</Footer>
      </div>

    </ProtectedRoute>"
    return <Navigate to="/unauthorized" replace />;"
</Navigate>
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

</Footer>
      </div>;
    </ProtectedRoute>);

        <Footer />;
</Footer>
      </div>;

    </ProtectedRoute>;"
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
pr-12325
</QuotesFilter>"
}/> </Card> </TabsContent> <TabsContent value=" archived"> <Card className=" bg-zion-blue-dark border border-zion-blue-light overflow-hidden" > <QuotesTable quotes= {"
</TabsContent>
}/> </Card> </TabsContent> </Tabs> </div> </div> {
}<QuoteDetails /> <Footer /> </div> </ProtectedRoute>) 
}
}
