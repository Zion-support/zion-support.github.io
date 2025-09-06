        .eq("id", flagId);
      if (error) throw error;
          <TabsList>;
            <TabsTrigger value="all">All Flags</TabsTrigger>;
            <TabsTrigger value="pending">Pending Review</TabsTrigger>;
            <TabsTrigger value="dangerous">Dangerous</TabsTrigger>;
            <TabsTrigger value="actioned">Actioned</TabsTrigger>;
          </TabsList>;
=======
          <TabsContent value="all" className="mt - 6">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            {/* Search and Filters */}
            <FraudFilters;
              search_query={search_query}
              setSearchQuery={setSearchQuery}
              status_filter={status_filter}
              setStatusFilter={setStatusFilter}
              severity_filter={severity_filter}
              setSeverityFilter={setSeverityFilter}
              contentTypeFilter={contentTypeFilter}
              setContentTypeFilter={setContentTypeFilter}
            {/* Flags Table */}
            <Card>;
              <CardContent className="p-0">;
                <FraudFlagsTable
                  flags={filteredFlags}
                  isLoading={isLoading}
                  hasFilters={hasFilters}
                  resetFilters={resetFilters}
                  onAction={handleAction}
                />;
              </CardContent>;
            </Card>;
          </TabsContent>;
=======
          <TabsContent value="pending">;
            <FraudTabContent tab_value="pending" />;
          </TabsContent>;
          <TabsContent value="dangerous">;
            <FraudTabContent tab_value="dangerous" />;
          </TabsContent>;
          <TabsContent value="actioned">;
            <FraudTabContent tab_value="actioned" />;
          </TabsContent>;
        </Tabs>;
      </div>;
    </AppLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
