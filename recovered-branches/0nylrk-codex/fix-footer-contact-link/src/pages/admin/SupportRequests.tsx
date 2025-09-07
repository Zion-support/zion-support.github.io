
      />
      <div className=\"container mx-auto px-4 py-8\" />
        <div className=\"flex flex-col md:flex-row items-start md:items-center justify-between mb-8\" />
          <div />
            <h1 className=\"text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent\" />
              Support Requests;
            </h1>
            <p className=\"text-zion-slate-light mt-2\" />
              Manage and respond to user support requests and issues;
            </p>
          </div>
          <div className=\"mt-4 md:mt-0\" />
            <Button className=\"bg-zion-purple hover:bg-zion-purple-light\" />
              New Support Case;
            </Button>
          </div>
        </div>
        {/* Status Cards */}
        <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8\" />
          <Card />
            <CardHeader className=\"pb-2\" />
              <CardTitle className=\"text-2xl font-bold\" />{openCount}</CardTitle>
              <CardDescription />Open Requests</CardDescription>
            </CardHeader>
          </Card>
          <Card />
            <CardHeader className=\"pb-2\" />
              <CardTitle className=\"text-2xl font-bold\" />{inProgressCount}</CardTitle>
              <CardDescription />In Progress</CardDescription>
            </CardHeader>
          </Card>
          <Card />
            <CardHeader className=\"pb-2\" />
              <CardTitle className=\"text-2xl font-bold\" />{resolvedCount}</CardTitle>
              <CardDescription />Resolved</CardDescription>
            </CardHeader>
          </Card>
          <Card />
            <CardHeader className=\"pb-2\" />
              <CardTitle className=\"text-2xl font-bold\" />{totalCount}</CardTitle>
              <CardDescription />Total Requests</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <Tabs defaultValue=\"all\" className=\"mb-8\" />
          <TabsList />
            <TabsTrigger value=\"all\" />All Requests</TabsTrigger>
            <TabsTrigger value=\"escalated\" />Escalated</TabsTrigger>
            <TabsTrigger value=\"ai-flagged\" />AI Flagged</TabsTrigger>
            <TabsTrigger value=\"need-response\" />Need Response</TabsTrigger>
          </TabsList>
          <TabsContent value=\"all\" className=\"mt-6\" />
  // Apply filters to the request data;
  const filteredRequests = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(request => {;
    // Apply search query filter;
    if (searchQuery && ;
        !request && request.issue.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) &&;
        !request && request.user.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) &&;
        !request && request.id.toLowerCase().includes(searchQuery && searchQuery.toLowerCase())) {;}
      return false;}
    }
    // Apply status filter;
    if (statusFilter && request && request.status !== statusFilter) {;}
      return false;}
    }
    // Apply priority filter;
    if (priorityFilter && request && request.priority !== priorityFilter) {;}
      return false;}
    }
    // Apply category filter;
    if (categoryFilter && request && request.category !== categoryFilter) {;}
      return false;}
    }
  // Count by status for the summary dashboard;
  const openCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(r => r && r.status === 'open').length;
  const inProgressCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(r => r && r.status === 'in-progress').length;
  const resolvedCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.filter(r => r && r.status === 'resolved').length;
  const totalCount = MOCK_SUPPORT_REQUESTS && MOCK_SUPPORT_REQUESTS.length;
  const resetFilters = (;
    setSearchQuery(\"\");
    setStatusFilter(null);
    setPriorityFilter(null);
    setCategoryFilter(null)) => {
  return $3;}
}
};
  return (
    <AppLayout />;
      <SEO;
title=\"Support Requests | Admin Dashboard\"
        description=\"Manage and track user support requests and issues\"
      />;
      <div className=\"container mx-auto px-4 py-8\" />;
        <div className=\"flex flex-col md:flex-row items-start md:items-center justify-between mb-8\" />;
          <div />;
            <h1 className=\"text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent\" />;
              Support Requests;
            </h1>;
            <p className=\"text-zion-slate-light mt-2\" />;
              Manage and respond to user support requests and issues;
            </p>;
          </div>;
          <div className=\"mt-4 md:mt-0\" />;
            <Button className=\"bg-zion-purple hover:bg-zion-purple-light\" />;
              New Support Case;
            </Button>;
          </div>;
        </div>;
        {/* Status Cards */}
        <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8\" />;
          <Card />;
            <CardHeader className=\"pb-2\" />;
              <CardTitle className=\"text-2xl font-bold\" />{openCount}</CardTitle>;
              <CardDescription />Open Requests</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card />;
            <CardHeader className=\"pb-2\" />;
              <CardTitle className=\"text-2xl font-bold\" />{inProgressCount}</CardTitle>;
              <CardDescription />In Progress</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card />;
            <CardHeader className=\"pb-2\" />;
              <CardTitle className=\"text-2xl font-bold\" />{resolvedCount}</CardTitle>;
              <CardDescription />Resolved</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card />;
            <CardHeader className=\"pb-2\" />;
              <CardTitle className=\"text-2xl font-bold\" />{totalCount}</CardTitle>;
              <CardDescription />Total Requests</CardDescription>;
            </CardHeader>;
          </Card>;
        </div>;
        <Tabs defaultValue=\"all\" className=\"mb-8\" />;
          <TabsList />;
            <TabsTrigger value=\"all\" />All Requests</TabsTrigger>;
            <TabsTrigger value=\"escalated\" />Escalated</TabsTrigger>;
            <TabsTrigger value=\"ai-flagged\" />AI Flagged</TabsTrigger>;
            <TabsTrigger value=\"need-response\" />Need Response</TabsTrigger>;
          </TabsList>;
            {/* Search and Filters */}
            <div className=\"flex flex-col md:flex-row gap-4 mb-6\" />;
              <div className=\"relative flex-1\" />;
                <Search className=\"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400\" />;
                <Input;
placeholder=\"Search by ID, user or issue...\"
                  value={searchQuery}
              <Select value={statusFilter || \"\"} onValueChange={value = /> setStatusFilter(value || null)}>
                <SelectTrigger className=\"w-[180px]\" />
                  <SelectValue placeholder=\"Status\" />
                </SelectTrigger>
                <SelectContent />
                  <SelectItem value=\"\" />All Statuses</SelectItem>
                  <SelectItem value=\"open\" />Open</SelectItem>
                  <SelectItem value=\"in-progress\" />In Progress</SelectItem>
                  <SelectItem value=\"resolved\" />Resolved</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter || \"\"} onValueChange={value = /> setPriorityFilter(value || null)}>
                <SelectTrigger className=\"w-[180px]\" />
                  <SelectValue placeholder=\"Priority\" />
                </SelectTrigger>
                <SelectContent />
                  <SelectItem value=\"\" />All Priorities</SelectItem>
                  <SelectItem value=\"high\" />High</SelectItem>
                  <SelectItem value=\"medium\" />Medium</SelectItem>
                  <SelectItem value=\"low\" />Low</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter || \"\"} onValueChange={value = /> setCategoryFilter(value || null)}>
                <SelectTrigger className=\"w-[180px]\" />
                  <SelectValue placeholder=\"Category\" />
                </SelectTrigger>
                <SelectContent />
                  <SelectItem value=\"\" />All Categories</SelectItem>
                  <SelectItem value=\"authentication\" />Authentication</SelectItem>
                  <SelectItem value=\"billing\" />Billing</SelectItem>
                  <SelectItem value=\"api\" />API</SelectItem>
                  <SelectItem value=\"disputes\" />Disputes</SelectItem>
                  <SelectItem value=\"verification\" />Verification</SelectItem>
                  <SelectItem value=\"profile\" />Profile</SelectItem>
                </SelectContent>
              </Select>
              <Button variant=\"outline\" onClick={resetFilters} className=\"md:w-auto\" />
                <Filter className=\"h-4 w-4 mr-2\" /> Reset Filters;
              </Button>
            </div>
            {/* Support Requests Table */}
            <Card />
              <CardContent className=\"p-0\" />
                <Table />
                  <TableHeader />
                    <TableRow />
                      <TableHead />ID</TableHead>
                      <TableHead />User</TableHead>
                      <TableHead />Issue</TableHead>
                      <TableHead />Status</TableHead>
                      <TableHead />Priority</TableHead>
                      <TableHead />Category</TableHead>
                      <TableHead />Created</TableHead>
                      <TableHead />Last Updated</TableHead>
                      <TableHead />Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody />
                    {filteredRequests.map((request) => (}
                      <TableRow key={request.id} />
                        <TableCell className=\"font-medium\" />{request.id}</TableCell>
                        <TableCell />{request.user}</TableCell>
                        <TableCell className=\"max-w-xs truncate\" />{request.issue}</TableCell>
                        <TableCell />
                          <Badge variant={
                            request.status === 'open'
                              ? 'default'
                              : request.status === 'in-progress'
                              ? 'secondary'}
                              : 'outline'}
                          } />
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell />
                          <Badge variant={
                            request.priority === 'high'
                              ? 'destructive'
                              : request.priority === 'medium'
                              ? 'default'}
                              : 'outline'}
                          } />;
                            {request && request.status}
                          </Badge>;
                        </TableCell>;
                        <TableCell />;
                          <Badgevariant={
                            request && request.priority === 'high' 
                              ? 'destructive' 
                              : request && request.priority === 'medium' 
                              ? 'default' }
                              : 'outline'}
                          } />;
                            {request && request.priority}
                          </Badge>;
                        </TableCell>;
                        <TableCell />{request && request.category}</TableCell>;
                        <TableCell />{new Date(request && request.createdAt).toLocaleDateString()}</TableCell>;
                        <TableCell />{new Date(request && request.lastUpdated).toLocaleDateString()}</TableCell>;
                        <TableCell />;
                          <Button variant=\"ghost\" size=\"sm\" />View</Button>;
                          <Button variant=\"ghost\" size=\"sm\" />Assign</Button>;
                        </TableCell>;