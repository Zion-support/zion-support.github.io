title='Hiring Tracker | Zion AI Marketplace'
        description='Manage your candidate pipeline in the Zion AI Marketplace.'

  return (
    <>
      <SEO 
        title="Hiring Tracker | Zion AI Marketplace" 
        description="Manage your candidate pipeline in the Zion AI Marketplace." 

function HiringTrackerContent() {
            <p className='text-muted-foreground mt-1'>
  return (
    <>
      <SEO
        title="Hiring Tracker | Zion AI Marketplace"
        description="Manage your candidate pipeline in the Zion AI Marketplace."

      />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-primary" />
              Hiring Pipeline
            </h1>

            <p className="text-muted-foreground mt-1">
              Track and manage your candidates through the hiring process;
            </p>
          </div>
        </div>

        <Tabs defaultValue="kanban" onValueChange={setActiveTab} className="mb-8">

<Tabs
          defaultValue='kanban'
          onValueChange={setActiveTab}
          className='mb-8'
        >

            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>"
          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>

          <TabsContent value="kanban" className="mt-6">
            <KanbanBoard jobId={jobId} />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">

          <TabsContent value='kanban' className='mt-6'>
            <KanbanBoard jobId={jobId} />
          </TabsContent>

          <TabsContent value='analytics' className='mt-6'>

            <HiringAnalytics jobId={jobId} />
          </TabsContent>
        </Tabs>
      </main>
    </>

const HiringTracker: React.FC = () => {
  return (
    <MainLayout title="Hiring Tracker - Zion Tech Group" description="Track and manage your hiring process efficiently.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Hiring Tracker</h1>
        <p className="text-lg">This is the Hiring Tracker page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default HiringTracker;