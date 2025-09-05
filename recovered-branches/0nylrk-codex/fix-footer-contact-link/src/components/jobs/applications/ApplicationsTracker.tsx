

export function ApplicationsTracker() {_const { applications, _isLoading, _error} = useJobApplications();
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
  
  if (isLoading) {_return <LoadingState />;}
  
  if (error) {_return <ErrorState error={error} />;
  }
  
  if (applications.length === 0) {_return <EmptyState />;}
  
  const _filteredApplications = statusFilter === 'all' 
    ? applications
    : applications.filter(app => app.status === statusFilter);
  
  return (_<div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Button 
          size="sm"
          variant={_statusFilter === 'all' ? 'default' : 'outline'}
          onClick={_() => setStatusFilter('all')}
        >
          All
        </Button>
        <Button 
          size="sm"
          variant={_statusFilter === 'new' ? 'default' : 'outline'}
          onClick={_() => setStatusFilter('new')}
        >
          Submitted
        </Button>
        <Button 
          size="sm"
          variant={_statusFilter === 'viewed' ? 'default' : 'outline'}
          onClick={_() => setStatusFilter('viewed')}
        >
          Viewed
        </Button>
        <Button 
          size="sm"
          variant={_statusFilter === 'shortlisted' ? 'default' : 'outline'}
          onClick={_() => setStatusFilter('shortlisted')}
        >
          Shortlisted
        </Button>
        <Button 
          size="sm"
          variant={_statusFilter === 'interview' ? 'default' : 'outline'}
          onClick={_() => setStatusFilter('interview')}
        >
          Interview
        </Button>
        <Button 
          size="sm"
          variant={_statusFilter === 'hired' ? 'default' : 'outline'}
          onClick={_() => setStatusFilter('hired')}
        >
          Hired
        </Button>
        <Button 
          size="sm"
          variant={_statusFilter === 'rejected' ? 'default' : 'outline'}
          onClick={_() => setStatusFilter('rejected')}
        >
          Not Selected
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        {_filteredApplications.map(_(application) => (
          <ApplicationCard key={application.id} application={_application} />
        ))}
      </div>
      
      {_filteredApplications.length === 0 && (
        <div className="text-center p-8">
          <p className="text-muted-foreground">No applications with this status.</p>
        </div>
      )}
    </div>
  );
}
