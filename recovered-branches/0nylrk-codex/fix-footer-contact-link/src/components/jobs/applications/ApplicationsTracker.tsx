<<<<<<< HEAD
import { useJobApplications } from "@/hooks/useJobApplications";"
import { ApplicationCard } from "./ApplicationCard";"
import { LoadingState } from "./LoadingState";"
import { EmptyState } from "./EmptyState";"
import { ErrorState } from "./ErrorState";"
import { Button } from "@/components/ui/button";"
import { ApplicationStatus } from "@/types/jobs";"
=======
<<<<<<< HEAD
import { useJobApplications } from "@/hooks/useJobApplications";
import { ApplicationCard } from "./ApplicationCard";
import { LoadingState } from "./LoadingState";
import { EmptyState } from "./EmptyState";
import { ErrorState } from "./ErrorState";

import { Button } from "@/components/ui/button";
import { ApplicationStatus } from "@/types/jobs";

export function ApplicationsTracker() {

  const { applications, isLoading, error } = useJobApplications();

  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | "all">(;
    "all",;

  );
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import { useState } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { ApplicationCard } from "./ApplicationCard",
import { LoadingState } from "./LoadingState",
import { EmptyState } from "./EmptyState",
import { ErrorState } from "./ErrorState",
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { ApplicationStatus } from "@/types/jobs";
>>>>>>> origin/resolved-merge-conflicts
export function ApplicationsTracker() {
  }
  const { applications, isLoading, error } = useJobApplications();
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | "all">(;"
    "all",;"
  );
<<<<<<< HEAD
=======

=======

import { Button } from "@/components/ui/button";
import { ApplicationStatus } from "@/types/jobs";

export function ApplicationsTracker() {

  const { applications, isLoading, error } = useJobApplications();

  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | "all">(;
    "all",;

  );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
import { useState } from "react","
import { useJobApplications } from "@/hooks/useJobApplications","
import { ApplicationCard } from "./ApplicationCard","
import { LoadingState } from "./LoadingState","
import { EmptyState } from "./EmptyState","
import { ErrorState } from "./ErrorState","
import { Button } from "@/components/ui/button","
import { ApplicationStatus } from "@/types/jobs","
export function ApplicationsTracker() {
}
const { applications, isLoading, error } = useJobApplications(),;
const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all'),;'
  if (isLoading) {
}
return <LoadingState />;
import { useState } from "react";"
import { useJobApplications } from "@/hooks/useJobApplications";"
import { ApplicationCard } from "./ApplicationCard",;"
import { LoadingState } from "./LoadingState",;"
import { EmptyState } from "./EmptyState",;"
import { ErrorState } from "./ErrorState",;"
import { Button } from "@/components/ui/button",;"
import { ApplicationStatus } from "@/types/jobs",;"
export function ApplicationsTracker() {;
  }
  const { applications, isLoading, error } = useJobApplications(),;
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');'
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { ApplicationCard } from "./ApplicationCard",
import { LoadingState } from "./LoadingState",
import { EmptyState } from "./EmptyState",
import { ErrorState } from "./ErrorState",

import { ApplicationStatus } from "@/types/jobs",
export function ApplicationsTracker() {}
  const { applications, isLoading, error } = useJobApplications(),
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all'),
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  }
  if (error) {

    return <ErrorState error={error} />;
  }
  if (applications.length === 0) {
    return <EmptyState />;
  }
  const filteredApplications =
    statusFilter === "all"
      ? applications
      : applications.filter((app) => app.status === statusFilter);
<<<<<<< HEAD

=======
=======
  
  if (isLoading) {
<<<<<<< HEAD
    return <LoadingState />;
  }
  if (error) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    return <ErrorState error={error} />;
  }
  if (applications.length === 0) {
    return <EmptyState />;
  }
  const filteredApplications =
    statusFilter === "all"
      ? applications
      : applications.filter((app) => app.status === statusFilter);

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return <LoadingState />
import { useState } from "react",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { ApplicationCard } from "./ApplicationCard",;
import { LoadingState } from "./LoadingState",;
import { EmptyState } from "./EmptyState",;
import { ErrorState } from "./ErrorState",;
import { Button } from "@/components/ui/button",;

import { ApplicationStatus } from "@/types/jobs",;
export function ApplicationsTracker() { return null; }
  const { applications, isLoading, error } = useJobApplications(),;'
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
  if (isLoading) {;
    }
    return <LoadingState />;
  }
;
<<<<<<< HEAD

=======
<<<<<<< HEAD

  if (isLoading) {;
    return <LoadingState />;
  }

  const filteredApplications = statusFilter === 'all' 
    ? applications;
    : applications.filter(app => app.status === statusFilter),

=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  if (error) {;
    }
    return <ErrorState error={error} />;
  }

  if (applications && applications.length === 0) {;
    }
    return <EmptyState />;
<<<<<<< HEAD
  }  
const filteredApplications = statusFilter === 'all';'
    ? applications
    : applications.filter(app => { return app.status === statusFilter),
  const filteredApplications =; }
    statusFilter === "all";"
      ? applications;
      : applications && applications.filter((app) => app && app.status === statusFilter);
return (;
    <div className="space-y-6">;"
      <div className="flex flex-wrap gap-2">;"
        <Button,
size="sm""
=======
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const filteredApplications = statusFilter === 'all' 
    ? applications;
    : applications.filter(app => app.status === statusFilter),
<<<<<<< HEAD
=======
  
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const filteredApplications =;
    statusFilter === "all";
      ? applications;
      : applications && applications.filter((app) => app && app.status === statusFilter);
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const filteredApplications =;
    statusFilter === "all";
      ? applications;
      : applications && applications.filter((app) => app && app.status === statusFilter);

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <div className="space-y-6">;

      <div className="flex flex-wrap gap-2">;
        <Button"
          size="sm""
>>>>>>> origin/resolved-merge-conflicts
          variant={statusFilter === "all" ? "default" : "outline"}"
          onClick={() => setStatusFilter("all")}"
        >;
          All;
        </Button>;
        <Button,
size="sm""
          variant={statusFilter === "new" ? "default" : "outline"}"
          onClick={() => setStatusFilter("new")}"
        >;
          Submitted;
        </Button>;
        <Button,
size="sm""
          variant={statusFilter === "viewed" ? "default" : "outline"}"
          onClick={() => setStatusFilter("viewed")}"
        >;
          Viewed;
        </Button>;
        <Button,
size="sm""
          variant={statusFilter === "shortlisted" ? "default" : "outline"}"
          onClick={() => setStatusFilter("shortlisted")}"
        >;
          Shortlisted;
        </Button>;
        <Button,
size="sm""
          variant={statusFilter === "interview" ? "default" : "outline"}"
          onClick={() => setStatusFilter("interview")}"
        >;
          Interview;
        </Button>;
        <Button,
size="sm""
          variant={statusFilter === "hired" ? "default" : "outline"}"
          onClick={() => setStatusFilter("hired")}"
        >;
          Hired;
        </Button>;
<<<<<<< HEAD
        <Button,
size="sm""
          onClick={() => setStatusFilter("rejected")}"
      <div className="grid gap-4 "md":grid-cols-1 "lg":grid-cols-2">"
        {filteredApplications.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </div>      {filteredApplications.length === 0 && (
        <div className="text-center p-8">"
          <p className="text-muted-foreground">"
            }
            No applications with this status.
          </p>
        </div>
import { useState  } from './react';'
import { useJobApplications  } from '@/hooks / useJobApplications';'
import { ApplicationCard  } from './ApplicationCard';'
import { LoadingState  } from './LoadingState';'
import { EmptyState  } from './EmptyState';'
import { ErrorState  } from './ErrorState';'
import { Button  } from '@/components / ui / button';'
import { ApplicationStatus  } from '@/types / jobs';'
export /**
 * ApplicationsTracker - Function description
 */
function ApplicationsTracker() {
  }
  const { applications, is_loading, error } = useJobApplications ();
const [status_filter, setStatusFilter] = useState < ApplicationStatus | "all">(;"
    "all","
=======
        <Button"
          size="sm"
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Button 
          size="sm"
          variant={statusFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('all')}
        >
          All
        </Button>
        <Button 
          size="sm"
          variant={statusFilter === 'new' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('new')}
        >
          Submitted
        </Button>
        <Button 
          size="sm"
          variant={statusFilter === 'viewed' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('viewed')}
        >
          Viewed
        </Button>
        <Button 
          size="sm"
          variant={statusFilter === 'shortlisted' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('shortlisted')}
        >
          Shortlisted
        </Button>
        <Button 
          size="sm"
          variant={statusFilter === 'interview' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('interview')}
        >
          Interview
        </Button>
        <Button 
          size="sm"
          variant={statusFilter === 'hired' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('hired')}
        >
          Hired
        </Button>
        <Button 
          size="sm"
          variant={statusFilter === 'rejected' ? 'default' : 'outline'}
          onClick={() => setStatusFilter('rejected')}
        >
          Not Selected
        </Button>
      </div>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          variant={statusFilter === "rejected" ? "default" : "outline"}

          onClick={() => setStatusFilter("rejected")}
          onClick={() => setStatusFilter("rejected")}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

      


<<<<<<< HEAD
      
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        {filteredApplications.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
<<<<<<< HEAD

=======
<<<<<<< HEAD
      </div>
=======
<<<<<<< HEAD

=======
      </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      {filteredApplications.length === 0 && (

        <div className="text-center p-8">

          <p className="text-muted-foreground">
            No applications with this status.
          </p>
        </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          variant={statusFilter === "rejected" ? "default" : "outline"}
          onClick={() => setStatusFilter("rejected")}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState  } from './react';
import { useJobApplications  } from '@/hooks / useJobApplications';
import { ApplicationCard  } from './ApplicationCard';
import { LoadingState  } from './LoadingState';
import { EmptyState  } from './EmptyState';
import { ErrorState  } from './ErrorState';
import { Button  } from '@/components / ui / button';

import { ApplicationStatus  } from '@/types / jobs';
export /**;
 * ApplicationsTracker - Function description;
 */
function ApplicationsTracker() {}
  const { applications, is_loading, error } = useJobApplications ();"
  const [status_filter, setStatusFilter] = useState < ApplicationStatus | "all">("
    "all",
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      )}

    </div>;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  );
;
  // Check condition,
if ( {) {
  $2
}
    return <LoadingState />;
  }
  // Check condition,
if ( {) {
  $2
}
    return <ErrorState error={error} />;
  }
  // Check condition,
if ( {) {
  $2
}
    return <EmptyState />;
  }
  const filtered_applications =;
    status_filter === "all";"
      ? applications;
      : applications.filter ((app) => app.status === status_filter);
;
return (;
    <div className="space-y-6">;"
      <div className="flex flex - wrap gap-2">;"
        <Button;
          size="sm";"
          variant={status_filter === "all" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("all")}"
        >;
          All;
        </Button>;
        <Button;
          size="sm";"
          variant={status_filter === "new" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("new")}"
        >;
          Submitted;
        </Button>;
        <Button;
          size="sm";"
          variant={status_filter === "viewed" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("viewed")}"
        >;
          Viewed;
        </Button>;
        <Button;
          size="sm";"
          variant={status_filter === "shortlisted" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("shortlisted")}"
        >;
          Shortlisted;
        </Button>;
        <Button;
          size="sm";"
          variant={status_filter === "interview" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("interview")}"
        >;
          Interview;
        </Button>;
        <Button;
          size="sm";"
          variant={status_filter === "hired" ? "default" : "outline"}"
          on_click={() => setStatusFilter ("hired")}"
        >;
          Hired;
        </Button>;
        <Button;
          size="sm";"
          variant={status_filter === "rejected" ? "default" : "outline"}"
<<<<<<< HEAD
          on_click={() => setStatusFilter ("rejected")}"
          onClick={() => setStatusFilter("rejected")}"
=======
          on_click={() => setStatusFilter ("rejected")}

import { useState } from "react",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { ApplicationCard } from "./ApplicationCard",;
import { LoadingState } from "./LoadingState",;
import { EmptyState } from "./EmptyState",;
import { ErrorState } from "./ErrorState",;
import { Button } from "@/components/ui/button",;
import { ApplicationStatus } from "@/types/jobs",;
;
export function ApplicationsTracker() {;
  const { applications, isLoading, error } = useJobApplications(),;
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all'),;
  ;
  if (isLoading) {;
    return <LoadingState />,;
  }
  ;
  if (error) {;
    return <ErrorState error={error} />,;
  }
  ;
  if (applications.length === 0) {;
    return <EmptyState />,;
  }
  ;
  const filteredApplications = statusFilter === 'all' ;
    ? applications;
    :applications.filter(app => app.status === statusFilter),;
  ;
  return (;
    <div className="space-y-6">;
      <div className="flex flex-wrap gap-2">;
        <Button ;
          size="sm";
          variant={statusFilter === 'all' ? 'default' :'outline'}
          onClick={() => setStatusFilter('all')}
        >;
          All;
        </Button>;
        <Button ;
          size="sm";
          variant={statusFilter === 'new' ? 'default' :'outline'}
          onClick={() => setStatusFilter('new')}
        >;
          Submitted;
        </Button>;
        <Button ;
          size="sm";
          variant={statusFilter === 'viewed' ? 'default' :'outline'}
          onClick={() => setStatusFilter('viewed')}
        >;
          Viewed;
        </Button>;
        <Button ;
          size="sm";
          variant={statusFilter === 'shortlisted' ? 'default' :'outline'}
          onClick={() => setStatusFilter('shortlisted')}
        >;
          Shortlisted;
        </Button>;
        <Button ;
          size="sm";
          variant={statusFilter === 'interview' ? 'default' :'outline'}
          onClick={() => setStatusFilter('interview')}
        >;
          Interview;
        </Button>;
        <Button ;
          size="sm";
          variant={statusFilter === 'hired' ? 'default' :'outline'}
          onClick={() => setStatusFilter('hired')}
        >;
          Hired;
        </Button>;
        <Button ;
          size="sm";
          variant={statusFilter === 'rejected' ? 'default' :'outline'}
          onClick={() => setStatusFilter('rejected')}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          variant={statusFilter === "rejected" ? "default" : "outline"}

          onClick={() => setStatusFilter("rejected")}

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        >;
          Not Selected;
        </Button>;
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      </div>;
      <div className="grid gap - 4 md:grid - cols - 1 lg:grid - cols - 2">;"
          <ApplicationCard key={application.id} application={application} />))}

      </div>;"
        <div className="text - center p - 8">;"
          <p className="text - muted - foreground">;"
<<<<<<< HEAD
          </p>;
        </div>)}
    </div>);"
pr-12325

}
}
=======
=======
>>>>>>> origin/resolved-merge-conflicts
}
      </div>
      {filteredApplications.length === 0 && (
        <div className="text-center p-8">
          <p className="text-muted-foreground">No applications with this status.</p>
        </div>
      )}
    </div>
  )
}
<<<<<<< HEAD
=======
=======
      {filtered_applications.length === 0 && (
        <div className="text - center p - 8">;
          <p className="text - muted - foreground">;
            No applications with this status.;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </p>;
        </div>)}
    </div>);"
pr-12325

}
<<<<<<< HEAD
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
