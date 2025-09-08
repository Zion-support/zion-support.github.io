
<<<<<<< HEAD

=======
import { Badge } from "@/components/ui/badge";
import React, { useState } from 'react'
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
  Select
  SelectContent
  SelectItem
  SelectTrigger
  SelectValue
} from '@/components/ui/select'
  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Search, Filter } from 'lucide-react'
import { SEO } from "@/components/SEO";
// Mock data for support requests
const MOCK_SUPPORT_REQUESTS = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <>;

          <div className="mt-4 md:mt-0">
            <Button className="bg-zion-purple hover:bg-zion-purple-light">

              New Support Case
            </Button>
          </div>
        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">"
          <Card>
            <CardHeader className="pb-2">"
              <CardTitle className="text-2xl font-bold">{openCount}</CardTitle>"
              <CardDescription>Open Requests</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">"
              <CardTitle className="text-2xl font-bold">{inProgressCount}</CardTitle>"
              <CardDescription>In Progress</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">"
              <CardTitle className="text-2xl font-bold">{resolvedCount}</CardTitle>"
              <CardDescription>Resolved</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">"
              <CardTitle className="text-2xl font-bold">{totalCount}</CardTitle>"
        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{openCount}</CardTitle>
              <CardDescription>Open Requests</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{inProgressCount}</CardTitle>
              <CardDescription>In Progress</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{resolvedCount}</CardTitle>
              <CardDescription>Resolved</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold">{totalCount}</CardTitle>

        {/* Status Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-2xl font-bold'>{openCount}</CardTitle>
              <CardDescription>Open Requests</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-2xl font-bold'>
                {inProgressCount}
              </CardTitle>
              <CardDescription>In Progress</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-2xl font-bold'>
                {resolvedCount}
              </CardTitle>
              <CardDescription>Resolved</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-2xl font-bold'>{totalCount}</CardTitle>
              <CardDescription>Total Requests</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <Tabs defaultValue="all" className="mb-8">"
          <TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>"
            <TabsTrigger value="escalated">Escalated</TabsTrigger>"
            <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>"
            <TabsTrigger value="need-response">Need Response</TabsTrigger>"
          </TabsList>

        <Tabs defaultValue="all" className="mb-8">

          <TabsList>
            <TabsTrigger value='all'>All Requests</TabsTrigger>
            <TabsTrigger value='escalated'>Escalated</TabsTrigger>
            <TabsTrigger value='ai-flagged'>AI Flagged</TabsTrigger>
            <TabsTrigger value='need-response'>Need Response</TabsTrigger>
          </TabsList>

      />;
      <div className='container mx-auto px-4 py-8'>;
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-8'>;
          <div>;
            <h1 className='text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent'>;
              Support Requests;
            </h1>;
            <p className='text-zion-slate-light mt-2'>;
              Manage and respond to user support requests and issues;
            </p>;
          </div>;
          <div className='mt-4 md:mt-0'>;
            <Button className='bg-zion-purple hover:bg-zion-purple-light'>;',

          <div className='mt-4 md:mt-0'>;
            <Button className='bg-zion-purple hover:bg-zion-purple-light'>;
              New Support Case;
            </Button>;
          </div>;

        {/* Status Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>;
          <Card>;
            <CardHeader className='pb-2'>;
              <CardTitle className='text-2xl font-bold'>{openCount}</CardTitle>;
              <CardDescription>Open Requests</CardDescription>;
            </CardHeader>;
          </Card>;

          <Card>;
            <CardHeader className='pb-2'>;
              <CardTitle className='text-2xl font-bold'>;
                {inProgressCount}
              </CardTitle>;
              <CardDescription>In Progress</CardDescription>;
            </CardHeader>;
          </Card>;

          <Card>;
            <CardHeader className='pb-2'>;
              <CardTitle className='text-2xl font-bold'>;
                {resolvedCount}
              </CardTitle>;
              <CardDescription>Resolved</CardDescription>;
            </CardHeader>;
          </Card>;

          <Card>;
            <CardHeader className='pb-2'>;
              <CardTitle className='text-2xl font-bold'>{totalCount}</CardTitle>;
              <CardDescription>Total Requests</CardDescription>;
            </CardHeader>;
          </Card>;
        </div>;

        <Tabs defaultValue='all' className='mb-8'>;
          <TabsList>;
            <TabsTrigger value='all'>All Requests</TabsTrigger>;
            <TabsTrigger value='escalated'>Escalated</TabsTrigger>;
            <TabsTrigger value='ai-flagged'>AI Flagged</TabsTrigger>;
            <TabsTrigger value='need-response'>Need Response</TabsTrigger>;
          </TabsList>;
          <TabsContent value='all' className='mt-6'>;
          <TabsContent value="all" className="mt-6">"
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">"
              <div className="relative flex-1">"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />"
                <Input value={statusFilter || ''}'
                onValueChange={value = /> setStatusFilter(value ||,  null)}
              >
                <SelectTrigger className='w-[180px]'>',
                  <SelectValue placeholder='Status' />'
                  placeholder="Search by ID, user or issue...""
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10""
                />
              </div>
              <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value ||,  null)}>",
                <SelectTrigger className="w-[180px]">"
                  <SelectValue placeholder="Status" />"
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Statuses</SelectItem>"
                  <SelectItem value="open">Open</SelectItem>"
                  <SelectItem value="in-progress">In Progress</SelectItem>"
                  <SelectItem value="resolved">Resolved</SelectItem>"
                </SelectContent>
              </Select>
                value={priorityFilter || ''}'
                onValueChange={value => setPriorityFilter(value ||,  null)}
              >
                <SelectTrigger className='w-[180px]'>',
                  <SelectValue placeholder='Priority' />'
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value ||,  null)}>",
                <SelectTrigger className="w-[180px]">"
                  <SelectValue placeholder="Priority" />"
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Priorities</SelectItem>"
                  <SelectItem value="high">High</SelectItem>"
                  <SelectItem value="medium">Medium</SelectItem>"
                  <SelectItem value="low">Low</SelectItem>"
                </SelectContent>
              </Select>
                value={categoryFilter || ''}'
                onValueChange={value => setCategoryFilter(value ||,  null)}
              >
                <SelectTrigger className='w-[180px]'>',
                  <SelectValue placeholder='Category' />'
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value ||,  null)}>",
                <SelectTrigger className="w-[180px]">"
                  <SelectValue placeholder="Category" />"
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>"
                  <SelectItem value="authentication">Authentication</SelectItem>"
                  <SelectItem value="billing">Billing</SelectItem>"
                  <SelectItem value="api">API</SelectItem>"
                  <SelectItem value="disputes">Disputes</SelectItem>"
                  <SelectItem value="verification">Verification</SelectItem>"
                  <SelectItem value="profile">Profile</SelectItem>"
                </SelectContent>
              </Select>
                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='pl-10'                />;
              </div>;
              <Select
                value={statusFilter || ''}'
                onValueChange={value => setStatusFilter(value ||,  null)}
              <Button variant="outline" onClick={resetFilters} className="md:w-auto">"
                <Filter className="h-4 w-4 mr-2" /> Reset Filters"
              </Button>
            </div>
            {/* Support Requests Table */}
            <Card>
              <CardContent className="p-0">"
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="escalated">Escalated</TabsTrigger>
            <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>
            <TabsTrigger value="need-response">Need Response</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input

          <TabsContent value='all' className='mt-6'>;

          <TabsContent value="all" className="mt-6">

            {/* Search and Filters */}
            <div className='flex flex-col md:flex-row gap-4 mb-6'>;
              <div className='relative flex-1'>;
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />;
                <Input

                value={statusFilter || ''}
                onValueChange={value => setStatusFilter(value || null)}

              >
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Status' />
                  placeholder="Search by ID, user or issue..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>

                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=''>All Statuses</SelectItem>
                  <SelectItem value='open'>Open</SelectItem>
                  <SelectItem value='in-progress'>In Progress</SelectItem>
                  <SelectItem value='resolved'>Resolved</SelectItem>
                </SelectContent>
              </Select>

                value={priorityFilter || ''}
                onValueChange={value => setPriorityFilter(value || null)}

              >
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Priority' />
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>

                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=''>All Priorities</SelectItem>
                  <SelectItem value='high'>High</SelectItem>
                  <SelectItem value='medium'>Medium</SelectItem>
                  <SelectItem value='low'>Low</SelectItem>
                </SelectContent>
              </Select>

                value={categoryFilter || ''}
                onValueChange={value => setCategoryFilter(value || null)}

              >
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Category' />
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  <SelectItem value="authentication">Authentication</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="api">API</SelectItem>
                  <SelectItem value="disputes">Disputes</SelectItem>
                  <SelectItem value="verification">Verification</SelectItem>
                  <SelectItem value="profile">Profile</SelectItem>
                </SelectContent>
              </Select>

                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=''>All Categories</SelectItem>
                  <SelectItem value='authentication'>Authentication</SelectItem>
                  <SelectItem value='billing'>Billing</SelectItem>
                  <SelectItem value='api'>API</SelectItem>
                  <SelectItem value='disputes'>Disputes</SelectItem>
                  <SelectItem value='verification'>Verification</SelectItem>
                  <SelectItem value='profile'>Profile</SelectItem>
                </SelectContent>
              </Select>

                  onChange={e => setSearchQuery(e && e.target.value)}
                  className='pl-10'                />;
              </div>;

              <Select
                value={statusFilter || ''}
                onValueChange={value => setStatusFilter(value || null)}

              <Button variant="outline" onClick={resetFilters} className="md:w-auto">
                <Filter className="h-4 w-4 mr-2" /> Reset Filters
              </Button>
            </div>

            {/* Support Requests Table */}
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Issue</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>"
                        <TableCell>{request.user}</TableCell>
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>"
                        <TableCell>
                          <Badge variant={
                            request.status === 'open' '
                              ? 'default' '
                              : request.status === 'in-progress' '
                              ? 'secondary' '
                              : 'outline''
                        <TableCell className="font-medium">{request.id}</TableCell>
                        <TableCell>{request.user}</TableCell>
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>
                        <TableCell>

                    {filteredRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>

                        <TableCell>{request.user}</TableCell>
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>
                        <TableCell>

                          <Badge variant={
                            request.status === 'open' 
                              ? 'default' 
                              : request.status === 'in-progress' 
                              ? 'secondary' 
                              : 'outline'
                          }>
;
    return true;
  }),;
  // Count by status for the summary dashboard;
  const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length,;
  const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length,;
  const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length,;
  const totalCount = MOCK_SUPPORT_REQUESTS.length,;
  const resetFilters = () => {;
    setSearchQuery(""),;
    setStatusFilter(null),;
    setPriorityFilter(null);
    setCategoryFilter(null);
  };
  return (;
    <>;
      <SEO;
        title="Support Requests | Admin Dashboard";
        description="Manage and track user support requests and issues";
      />;
      <div className="container mx-auto px-4 py-8">;
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">;
          <div>;
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
              Support Requests;
            </h1>;
            <p className="text-zion-slate-light mt-2">;
              Manage and respond to user support requests and issues;
            </p>;
          </div>;
          <div className="mt-4 md:mt-0">;
            <Button className="bg-zion-purple hover:bg-zion-purple-light">;",
            <Button className="bg-zion-purple hover:bg-zion-purple-light">;
        title='Support Requests | Admin Dashboard';
        description='Manage and track user support requests and issues';
      />;
      <div className='container mx - auto px - 4 py - 8'>;
        <div className='flex flex - col md:flex - row items - start md:items - center justify - between mb - 8'>;
          <div>;
            <h1 className='text - 3xl font - bold bg - gradient - to - r from - zion - cyan to - zion - purple bg - clip - text text - transparent'>;
              Support Requests;
            </h1>;
            <p className='text - zion - slate - light mt - 2'>;
              Manage and respond to user support requests and issues;
            </p>;
          </div>;
          <div className='mt - 4 md:mt - 0'>;
            <Button className='bg - zion - purple hover:bg - zion - purple - light'>;
              New Support Case;
            </Button>;
          </div>;
        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{openCount}</CardTitle>;
              <CardDescription>Open Requests</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{inProgressCount}</CardTitle>;
              <CardDescription>In Progress</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{resolvedCount}</CardTitle>;
              <CardDescription>Resolved</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className="pb-2">;
              <CardTitle className="text-2xl font-bold">{totalCount}</CardTitle>;
              <CardDescription>Total Requests</CardDescription>;
            </CardHeader>;
          </Card>;
        </div>;
        <Tabs defaultValue="all" className="mb-8">;
          <TabsList>;
            <TabsTrigger value="all">All Requests</TabsTrigger>;
            <TabsTrigger value="escalated">Escalated</TabsTrigger>;
            <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>;
            <TabsTrigger value="need-response">Need Response</TabsTrigger>;
          </TabsList>;
          <TabsContent value="all" className="mt-6">;
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">;
              <div className="relative flex-1">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;
                <Input ;
                  placeholder="Search by ID, user or issue...";
                  value={searchQuery}
                  onChange={(e) = /> setSearchQuery(e.target.value)}
                  className="pl-10";
                />;
              </div>;
              <Select;
                value={status_filter || ''}'
                onValueChange={value => setStatusFilter (value ||,  null)}
              >;
                <SelectTrigger className='w-[180px]'>;,
        <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 4 gap - 4 mb - 8'>;
          <Card>;
            <CardHeader className='pb - 2'>;
              <CardTitle className='text - 2xl font - bold'>{open_count}</CardTitle>;
              <CardDescription > Open Requests</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className='pb - 2'>;
              <CardTitle className='text - 2xl font - bold'>;
                {inProgressCount}
              </CardTitle>;
              <CardDescription > In Progress</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className='pb - 2'>;
              <CardTitle className='text - 2xl font - bold'>;
                {resolved_count}
              </CardTitle>;
              <CardDescription > Resolved</CardDescription>;
            </CardHeader>;
          </Card>;
          <Card>;
            <CardHeader className='pb - 2'>;
              <CardTitle className='text - 2xl font - bold'>{total_count}</CardTitle>;
              <CardDescription > Total Requests</CardDescription>;
            </CardHeader>;
          </Card>;
        </div>;
        <Tabs default_value='all' className='mb - 8'>;
          <TabsList>;
            <TabsTrigger value='all'>All Requests</TabsTrigger>;
            <TabsTrigger value='escalated'>Escalated</TabsTrigger>;
            <TabsTrigger value='ai - flagged'>AI Flagged</TabsTrigger>;
            <TabsTrigger value='need - response'>Need Response</TabsTrigger>;
          </TabsList>;
          <TabsContent value='all' className='mt - 6'>;
            {/* Search and Filters */}
            <div className='flex flex - col md:flex - row gap - 4 mb - 6'>;
              <div className='relative flex - 1'>;
                <Search className='absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - gray - 400' />;
                <Input;
                  placeholder='Search by ID, user or issue...';
                  value={search_query}
                  on_change={e => setSearchQuery (e.target.value)}
                  className='pl - 10'                />;
              </div>;
              <Select;
                value={status_filter || ''}
                onValueChange={value => setStatusFilter (value || null)}
              >;
                <SelectTrigger className='w-[180px]'>;
                  <SelectValue placeholder='Status' />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value=''>All Statuses</SelectItem>;
                  <SelectItem value='open'>Open</SelectItem>;

                  <SelectItem value='in - progress'>In Progress</SelectItem>;
                  <SelectItem value='resolved'>Resolved</SelectItem>;
                </SelectContent>;
              </Select>;
              <Select;
                value={priority_filter || ''}'
                onValueChange={value => setPriorityFilter (value ||,  null)}
              >;
                <SelectTrigger className='w-[180px]'>;,
                  <SelectValue placeholder='Priority' />;
                <Input;
                  placeholder="Search by ID, user or issue...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10";
                />;
              </div>;
              <Select value={statusFilter || ""} onValueChange={value => setStatusFilter(value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Status" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="">All Statuses</SelectItem>;
                  <SelectItem value="open">Open</SelectItem>;
                  <SelectItem value="in-progress">In Progress</SelectItem>;
                  <SelectItem value="resolved">Resolved</SelectItem>;
                </SelectContent>;
              </Select>;
              <Select value={priorityFilter || ""} onValueChange={value => setPriorityFilter(value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Priority" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="">All Priorities</SelectItem>;
                  <SelectItem value="high">High</SelectItem>;
                  <SelectItem value="medium">Medium</SelectItem>;
                  <SelectItem value="low">Low</SelectItem>;
                </SelectContent>;
              </Select>;
              <Select;
                value={category_filter || ''}'
                onValueChange={value => setCategoryFilter (value ||,  null)}
              >;
                <SelectTrigger className='w-[180px]'>;,
                  <SelectValue placeholder='Category' />;
              <Select value={categoryFilter || ""} onValueChange={value => setCategoryFilter(value || null)}>;
                <SelectTrigger className="w-[180px]">;
                  <SelectValue placeholder="Category" />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value="">All Categories</SelectItem>;
                  <SelectItem value="authentication">Authentication</SelectItem>;
                  <SelectItem value="billing">Billing</SelectItem>;
                  <SelectItem value="api">API</SelectItem>;
                  <SelectItem value="disputes">Disputes</SelectItem>;
                  <SelectItem value="verification">Verification</SelectItem>;
                  <SelectItem value="profile">Profile</SelectItem>;
                </SelectContent>;
              </Select>;
                value={priority_filter || ''}
                onValueChange={value => setPriorityFilter (value || null)}

              >;
                <SelectTrigger className='w-[180px]'>;
                  <SelectValue placeholder='Priority' />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value=''>All Priorities</SelectItem>;
                  <SelectItem value='high'>High</SelectItem>;
                  <SelectItem value='medium'>Medium</SelectItem>;
                  <SelectItem value='low'>Low</SelectItem>;
                </SelectContent>;
              </Select>;

              <Select;
                value={category_filter || ''}
                onValueChange={value => setCategoryFilter (value || null)}

              >;
                <SelectTrigger className='w-[180px]'>;
                  <SelectValue placeholder='Category' />;
                </SelectTrigger>;
                <SelectContent>;
                  <SelectItem value=''>All Categories</SelectItem>;
                  <SelectItem value='authentication'>Authentication</SelectItem>;
                  <SelectItem value='billing'>Billing</SelectItem>;
                  <SelectItem value='api'>API</SelectItem>;
                  <SelectItem value='disputes'>Disputes</SelectItem>;
                  <SelectItem value='verification'>Verification</SelectItem>;
                  <SelectItem value='profile'>Profile</SelectItem>;
                </SelectContent>;
              </Select>;

              <Button;
                variant='outline';
                on_click={reset_filters}
                className='md:w - auto';
              >;
                <Filter className='h - 4 w - 4 mr - 2' /> Reset Filters;
              <Button variant="outline" onClick={resetFilters} className="md:w-auto">;
                <Filter className="h-4 w-4 mr-2" /> Reset Filters;
              </Button>;
            </div>;
            {/* Support Requests Table */}
            <Card>;
              <CardContent className='p - 0'>;
                <Table>;
                  <TableHeader>;
                    <TableRow>;
                      <TableHead > ID</TableHead>;
                      <TableHead > User</TableHead>;
                      <TableHead > Issue</TableHead>;
                      <TableHead > Status</TableHead>;
                      <TableHead > Priority</TableHead>;
                      <TableHead > Category</TableHead>;
                      <TableHead > Created</TableHead>;
                      <TableHead > Last Updated</TableHead>;
                      <TableHead > Actions</TableHead>;
                    </TableRow>;
                  </TableHeader>;
                  <TableBody>;
                    {filtered_requests.map (request => (                      <TableRow key={request.id}>;
                        <TableCell className='font - medium'>;
                          {request.id}
                        </TableCell>;
              <CardContent className="p-0">;
                <Table>;
                  <TableHeader>;
                    <TableRow>;
                      <TableHead>ID</TableHead>;
                      <TableHead>User</TableHead>;
                      <TableHead>Issue</TableHead>;
                      <TableHead>Status</TableHead>;
                      <TableHead>Priority</TableHead>;
                      <TableHead>Category</TableHead>;
                      <TableHead>Created</TableHead>;
                      <TableHead>Last Updated</TableHead>;
                      <TableHead>Actions</TableHead>;
                    </TableRow>;
                  </TableHeader>;
                  <TableBody>;
                    {filteredRequests.map((request) => (;
                      <TableRow key={request.id}>;
                        <TableCell className="font-medium">{request.id}</TableCell>;
                        <TableCell>{request.user}</TableCell>;
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>;
                        <TableCell>;
                          <Badge variant={;
                            request.status === 'open';
                              ? 'default';
                              : request.status === 'in-progress';
                              ? 'secondary';
                              : 'outline';
                          }>;
                        <TableCell>{request.user}</TableCell>;
                        <TableCell className='max - w-xs truncate'>;
                          {request.issue}
                        </TableCell>;
                        <TableCell>;
                          <Badge;
                            variant={
                              request.status === 'open';
                                ? 'default';
                                : request.status === 'in - progress';
                                  ? 'secondary';
                                  : 'outline';
                            }
                          >;
                            {request.status}
                          </Badge>;
                        </TableCell>;
                        <TableCell>;

                            {request.priority}
                          </Badge>;
                        </TableCell>;
                        <TableCell>{request.category}</TableCell>;
                        <TableCell>;
                          {new Date (request.created_at).toLocaleDateString ()}
                        </TableCell>;
                        <TableCell>;
                          {new Date (request.last_updated).toLocaleDateString ()}
                        </TableCell>;
                        <TableCell>;
                          <Button variant='ghost' size='sm'>;
                            View;
                          </Button>;
                          <Button variant='ghost' size='sm'>;
                            Assign;
                          </Button>;
                        </TableCell>;
          <TabsContent value="escalated" className="mt-6">"
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">"
              <h3 className="text-xl font-medium mb-4">Escalated Requests</h3>"
              <p className="text-zion-slate-light">"
                          <Badge variant={;
                            request.priority === 'high';
                              ? 'destructive';
                              : request.priority === 'medium';
                              ? 'default';
                              : 'outline';
                          }>;
                            {request.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>{request.category}</TableCell>
                        <TableCell>{new Date(request.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>{new Date(request.lastUpdated).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Assign</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="escalated" className="mt-6">
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">Escalated Requests</h3>
              <p className="text-zion-slate-light">
                This tab will show support requests that have been escalated by agents or the system.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="ai-flagged" className="mt-6">
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">AI Flagged Issues</h3>
              <p className="text-zion-slate-light">
                This tab shows issues that our AI system has identified as requiring human attention.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="need-response" className="mt-6">
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">Awaiting Response</h3>
              <p className="text-zion-slate-light">
                These support requests have been waiting for an agent response for over 24 hours.

              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>


origin/cursor/automate-test-improve-and-merge-code-2533
  );

  return true;
});
//Count by status for the summary dashboard Support Requests | Admin Dashboard"description=" Manage and track user support requests and issues"/> <div className=" container mx-auto px-4 py-8"> <div className=" flex flex-col md:flex-row items-start md:items-center justify-between mb-8"> <div> <h1 className=" text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> Support Requests </h1> <p className=" text-zion-slate-light mt-2"> Manage and respond to user support requests and issues </p> </div> <div className=" mt-4 md:mt-0"> <Button className=" bg-zion-purple hover:bg-zion-purple-light"> New Support Case </Button> </div> </div> <CardDescription>Open Requests</CardDescription> </CardHeader> </Card> <Card> <CardDescription>In Progress</CardDescription> </CardHeader> </Card> <Card> <CardDescription>Resolved</CardDescription> </CardHeader> </Card> <Card> <CardDescription>Total Requests</CardDescription> </CardHeader> </Card> </div> <Tabs defaultValue=" all"className=" mb-8"> <TabsList> <TabsTrigger value=" all">All Requests</TabsTrigger> <TabsTrigger value=" escalated">Escalated</TabsTrigger> <TabsTrigger value=" ai-flagged">AI Flagged</TabsTrigger> <TabsTrigger value=" need-response">Need Response</TabsTrigger> </TabsList> </SelectTrigger> <SelectContent> <SelectItem value="">All Statuses</SelectItem> <SelectItem value=" open">Open</SelectItem> <SelectItem value=" in-progress">In Progress</SelectItem> <SelectItem value=" resolved">Resolved</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Priorities</SelectItem> <SelectItem value=" high">High</SelectItem> <SelectItem value=" medium">Medium</SelectItem> <SelectItem value=" low">Low</SelectItem> </SelectContent> </Select> </SelectTrigger> <SelectContent> <SelectItem value="">All Categories</SelectItem> <SelectItem value=" authentication">Authentication</SelectItem> <SelectItem value=" billing">Billing</SelectItem> <SelectItem value=" api">API</SelectItem> <SelectItem value=" disputes">Disputes</SelectItem> <SelectItem value=" verification">Verification</SelectItem> <SelectItem value=" profile">Profile</SelectItem> </SelectContent> </Select> </Button> </div> {;
  /* Support Requests Table */ ";
}<Card> <CardContent className=" p-0"> <Table> <TableHeader> <TableRow> <TableHead>ID</TableHead> <TableHead>User</TableHead> <TableHead>Issue</TableHead> <TableHead>Status</TableHead> <TableHead>Priority</TableHead> <TableHead>Category</TableHead> <TableHead>Created</TableHead> <TableHead>Last Updated</TableHead> <TableHead>Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
:src_backup/pages/admin/SupportRequests.tsx

  filteredRequests.map ( (request) => (<TableRow key= {;
  request.id ;
}> <TableCell> <Badge variant= {;
  request.status === 'open' ? 'default' : request.status === 'in-progress' ? 'secondary' : 'outline' ;
}> {;
  request.status ;
}</Badge> </TableCell> <TableCell> <Badge variant= {';
  request.priority === 'high' ? 'destructive' : request.priority === 'medium' ? 'default' : 'outline' ;
}> {;
  request.priority ;
}</Badge> </TableCell> <TableCell> {;
  request.category ;
}</TableCell> <TableCell> {;
  new Date (request.createdAt) .toLocaleDateString () ;
}</TableCell> <TableCell> {;
  new Date (request.lastUpdated) .toLocaleDateString () ";
}</TableCell> <TableCell> <Button variant=" ghost"size=" sm">View</Button> <Button variant=" ghost"size=" sm">Assign</Button> </TableCell> </TableRow>) ) ";
}</TableBody> </Table> </CardContent> </Card> </TabsContent> <TabsContent value=" escalated"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">Escalated Requests</h3> <p className=" text-zion-slate-light"> This tab will show support requests that have been escalated by agents or the system. </p> </div> </TabsContent> <TabsContent value=" ai-flagged"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">AI Flagged Issues</h3> <p className=" text-zion-slate-light"> This tab shows issues that our AI system has identified as requiring human attention. </p> </div> </TabsContent> <TabsContent value=" need-response"className=" mt-6"> <div className=" bg-zion-blue-light/20 p-8 rounded-lg text-center"> <h3 className=" text-xl font-medium mb-4">Awaiting Response</h3> <p className=" text-zion-slate-light" > These support requests have been waiting for an agent response for over 24 hours. </p> </div> </TabsContent> </Tabs> </div> </>) ;
}'"
<<<<<<< HEAD


=======
:src_backup/pages/admin/SupportRequests.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/delete-old-data-records-6bba
