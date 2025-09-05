
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
=======
import { useState } from "react",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { ApplicationCard } from "./ApplicationCard",;
import { LoadingState } from "./LoadingState",;
import { EmptyState } from "./EmptyState",;
import { ErrorState } from "./ErrorState",;
import { Button } from "@/components/ui/button",;
import { ApplicationStatus } from "@/types/jobs",;
export function ApplicationsTracker() {;
  const { applications, isLoading, error } = useJobApplications(),;
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
  if (isLoading) {;
    return <LoadingState />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
;
  if (error) {;
    return <ErrorState error={error} />;
  }
;
  if (applications.length === 0) {;
    return <EmptyState />;
  }
<<<<<<< HEAD
  
  const filteredApplications = statusFilter === 'all' 
    ? applications
    : applications.filter(app => app.status === statusFilter),
  
  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex flex-wrap gap-2&quot;>
        <Button 
          size=&quot;sm&quot;
          variant={statusFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('all')}
        >
          All
        </Button>
        <Button 
          size=&quot;sm&quot;
          variant={statusFilter === 'new' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('new')}
        >
          Submitted
        </Button>
        <Button 
          size=&quot;sm&quot;
          variant={statusFilter === 'viewed' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('viewed')}
        >
          Viewed
        </Button>
        <Button 
          size=&quot;sm&quot;
          variant={statusFilter === 'shortlisted' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('shortlisted')}
        >
          Shortlisted
        </Button>
        <Button 
          size=&quot;sm&quot;
          variant={statusFilter === 'interview' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('interview')}
        >
          Interview
        </Button>
        <Button 
          size=&quot;sm&quot;
          variant={statusFilter === 'hired' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('hired')}
        >
          Hired
        </Button>
        <Button 
          size=&quot;sm&quot;
          variant={statusFilter === 'rejected' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('rejected')}
        >
          Not Selected
        </Button>
      </div>
      
      <div className=&quot;grid gap-4 md:grid-cols-1 lg:grid-cols-2&quot;>
        {filteredApplications.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </div>
      
      {filteredApplications.length === 0 && (
        <div className=&quot;text-center p-8&quot;>
          <p className=&quot;text-muted-foreground&quot;>No applications with this status.</p>
        </div>
=======
;
  const filteredApplications = statusFilter === 'all';
    ? applications;
    : applications.filter(app => app.status === statusFilter);
  return (;
    <div className="space-y-6">;
      <div className="flex flex-wrap gap-2">;
        <Button;
          size="sm";
          variant={statusFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('all')}
        >;
          All;
        </Button>;
        <Button;
          size="sm";
          variant={statusFilter === 'new' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('new')}
        >;
          Submitted;
        </Button>;
        <Button;
          size="sm";
          variant={statusFilter === 'viewed' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('viewed')}
        >;
          Viewed;
        </Button>;
        <Button;
          size="sm";
          variant={statusFilter === 'shortlisted' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('shortlisted')}
        >;
          Shortlisted;
        </Button>;
        <Button;
          size="sm";
          variant={statusFilter === 'interview' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('interview')}
        >;
          Interview;
        </Button>;
        <Button;
          size="sm";
          variant={statusFilter === 'hired' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('hired')}
        >;
          Hired;
        </Button>;
        <Button;
          size="sm";
          variant={statusFilter === 'rejected' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('rejected')}
        >;
          Not Selected;
        </Button>;
      </div>;
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">;
        {filteredApplications.map((application) => (;
          <ApplicationCard key={application.id} application={application} />;
        ))}
      </div>;
      {filteredApplications.length === 0 && (;
        <div className="text-center p-8">;
          <p className="text-muted-foreground">No applications with this status.</p>;
        </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      )}
    </div>;
  );
}
;