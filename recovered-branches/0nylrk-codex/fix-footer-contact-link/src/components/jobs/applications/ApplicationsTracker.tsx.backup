
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
import { Button } from "@/components/ui/button";
import { ApplicationStatus } from "@/types/jobs";
export function ApplicationsTracker() {
  }
  const { applications, isLoading, error } = useJobApplications();
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | "all">(;"
    "all",;"
  );


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  
  if (isLoading) {

=======


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


    return <ErrorState error={error} />;
  }
  if (applications.length === 0) {
    return <EmptyState />;
  }
  const filteredApplications =
    statusFilter === "all"
      ? applications
      : applications.filter((app) => app.status === statusFilter);


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (isLoading) {;
    }
    return <LoadingState />;
  }
;

<<<<<<< HEAD

  if (isLoading) {;
    return <LoadingState />;
  }


  const filteredApplications = statusFilter === 'all' 
    ? applications;
    : applications.filter(app => app.status === statusFilter),

  
=======
  if (error) {;
    }
    return <ErrorState error={error} />;
  }

  if (applications && applications.length === 0) {;
    }
    return <EmptyState />;
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
  
  const filteredApplications = statusFilter === 'all' 
    ? applications;
    : applications.filter(app => app.status === statusFilter),
  const filteredApplications =;
    statusFilter === "all";
      ? applications;
      : applications && applications.filter((app) => app && app.status === statusFilter);

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <div className="space-y-6">;

      <div className="flex flex-wrap gap-2">;
        <Button"
          size="sm""
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
        <Button"
          size="sm"

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

          variant={statusFilter === "rejected" ? "default" : "outline"}

          onClick={() => setStatusFilter("rejected")}
          onClick={() => setStatusFilter("rejected")}

<<<<<<< HEAD


      





=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        {filteredApplications.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}


      {filteredApplications.length === 0 && (

        <div className="text-center p-8">

          <p className="text-muted-foreground">
            No applications with this status.
          </p>
        </div>


<<<<<<< HEAD
          variant={statusFilter === "rejected" ? "default" : "outline"}
          onClick={() => setStatusFilter("rejected")}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

      )}

    </div>;



=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======
          on_click={() => setStatusFilter ("rejected")}"
          onClick={() => setStatusFilter("rejected")}"
          variant={statusFilter === "rejected" ? "default" : "outline"}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
        >;
          Not Selected;
        </Button>;
      </div>;
<<<<<<< HEAD

}
      ;
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">;
        {filteredApplications.map((application) => (;
          <ApplicationCard key={application.id} application={application} />;
        ))}
      </div>;

          </p>;
        </div>)}
    </div>);"
pr-12325

}



=======


      </div>;
      <div className="grid gap - 4 md:grid - cols - 1 lg:grid - cols - 2">;"
          <ApplicationCard key={application.id} application={application} />))}

      </div>;"
        <div className="text - center p - 8">;"
          <p className="text - muted - foreground">;"

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
