
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { ApplicationCard } from "./ApplicationCard",
import { LoadingState } from "./LoadingState",
import { EmptyState } from "./EmptyState",
import { ErrorState } from "./ErrorState",
import { Button } from "@/components/ui/button",
import { ApplicationStatus } from "@/types/jobs",
=======
import { useState } from &quot;react&quot;;
import { useJobApplications } from &quot;@/hooks/useJobApplications&quot;;
import { ApplicationCard } from &quot;./ApplicationCard&quot;;
import { LoadingState } from &quot;./LoadingState&quot;;
import { EmptyState } from &quot;./EmptyState&quot;;
import { ErrorState } from &quot;./ErrorState&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { ApplicationStatus } from &quot;@/types/jobs&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function ApplicationsTracker() {
  const { applications, isLoading, error } = useJobApplications(),
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all'),
  
  if (isLoading) {
    return <LoadingState />
  }
  
  if (error) {
    return <ErrorState error={error} />
  }
  
  if (applications.length === 0) {
    return <EmptyState />
  }
  
  const filteredApplications = statusFilter === 'all' 
=======

export function ApplicationsTracker() {_const { applications, _isLoading, _error} = useJobApplications();
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
  
  if (isLoading) {_return <LoadingState />;}
  
  if (error) {_return <ErrorState error={error} />;
  }
  
  if (applications.length === 0) {_return <EmptyState />;}
  
  const _filteredApplications = statusFilter === 'all' 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    ? applications
    : applications.filter(app => app.status === statusFilter),
  
<<<<<<< HEAD
  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex flex-wrap gap-2&quot;>
        <Button 
          size=&quot;sm&quot;
          variant={statusFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('all')}
=======
  return (_<div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Button 
          size="sm"
          variant={_statusFilter === 'all' ? 'default' : 'outline'}
          onClick={_() => setStatusFilter('all')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          All
        </Button>
        <Button 
<<<<<<< HEAD
          size=&quot;sm&quot;
          variant={statusFilter === 'new' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('new')}
=======
          size="sm"
          variant={_statusFilter === 'new' ? 'default' : 'outline'}
          onClick={_() => setStatusFilter('new')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Submitted
        </Button>
        <Button 
<<<<<<< HEAD
          size=&quot;sm&quot;
          variant={statusFilter === 'viewed' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('viewed')}
=======
          size="sm"
          variant={_statusFilter === 'viewed' ? 'default' : 'outline'}
          onClick={_() => setStatusFilter('viewed')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Viewed
        </Button>
        <Button 
<<<<<<< HEAD
          size=&quot;sm&quot;
          variant={statusFilter === 'shortlisted' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('shortlisted')}
=======
          size="sm"
          variant={_statusFilter === 'shortlisted' ? 'default' : 'outline'}
          onClick={_() => setStatusFilter('shortlisted')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Shortlisted
        </Button>
        <Button 
<<<<<<< HEAD
          size=&quot;sm&quot;
          variant={statusFilter === 'interview' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('interview')}
=======
          size="sm"
          variant={_statusFilter === 'interview' ? 'default' : 'outline'}
          onClick={_() => setStatusFilter('interview')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Interview
        </Button>
        <Button 
<<<<<<< HEAD
          size=&quot;sm&quot;
          variant={statusFilter === 'hired' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('hired')}
=======
          size="sm"
          variant={_statusFilter === 'hired' ? 'default' : 'outline'}
          onClick={_() => setStatusFilter('hired')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Hired
        </Button>
        <Button 
<<<<<<< HEAD
          size=&quot;sm&quot;
          variant={statusFilter === 'rejected' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('rejected')}
=======
          size="sm"
          variant={_statusFilter === 'rejected' ? 'default' : 'outline'}
          onClick={_() => setStatusFilter('rejected')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Not Selected
        </Button>
      </div>
      
<<<<<<< HEAD
      <div className=&quot;grid gap-4 md:grid-cols-1 lg:grid-cols-2&quot;>
        {filteredApplications.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </div>
      
      {filteredApplications.length === 0 && (
        <div className=&quot;text-center p-8&quot;>
          <p className=&quot;text-muted-foreground&quot;>No applications with this status.</p>
=======
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        {_filteredApplications.map(_(application) => (
          <ApplicationCard key={application.id} application={_application} />
        ))}
      </div>
      
      {_filteredApplications.length === 0 && (
        <div className="text-center p-8">
          <p className="text-muted-foreground">No applications with this status.</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      )}
    </div>
  )
}
