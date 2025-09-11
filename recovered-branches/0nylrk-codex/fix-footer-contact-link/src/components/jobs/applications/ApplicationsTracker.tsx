
=======

import { Button } from "@/components/ui/button";
import { ApplicationStatus } from "@/types/jobs";

export function ApplicationsTracker() {


  const { applications, isLoading, error } = useJobApplications();

=======  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | "all">(;
    "all",;

  );



=======
    return <ErrorState error={error} />;
  }
  if (applications.length === 0) {
    return <EmptyState />;
  }
  const filteredApplications =
    statusFilter === "all"
      ? applications
      : applications.filter((app) => app.status === statusFilter);

  return (
    <div className="space-y-6">;
      <div className="flex flex-wrap gap-2">;
        <Button
          size="sm"
          variant={statusFilter === "all" ? "default" : "outline"}
          onClick={() => setStatusFilter("all")}
        >;
          All;
        </Button>;
        <Button
          size="sm"
          variant={statusFilter === "new" ? "default" : "outline"}
          onClick={() => setStatusFilter("new")}
        >;
          Submitted;
        </Button>;
        <Button
          size="sm"
          variant={statusFilter === "viewed" ? "default" : "outline"}
          onClick={() => setStatusFilter("viewed")}
        >;
          Viewed;
        </Button>;
        <Button
          size="sm"
          variant={statusFilter === "shortlisted" ? "default" : "outline"}
          onClick={() => setStatusFilter("shortlisted")}
        >;
          Shortlisted;
        </Button>;
        <Button
          size="sm"
          variant={statusFilter === "interview" ? "default" : "outline"}
          onClick={() => setStatusFilter("interview")}
        >;
          Interview;
        </Button>;
        <Button
          size="sm"
          variant={statusFilter === "hired" ? "default" : "outline"}
          onClick={() => setStatusFilter("hired")}
        >;
          Hired;
        </Button>;
        <Button
          size="sm"

      


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        {filteredApplications.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


=======
      

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {filteredApplications.length === 0 && (
        <div className="text-center p-8">
          <p className="text-muted-foreground">
            No applications with this status.
          </p>
        </div>

    </div>;


=======
=======
      )}
    </div>
    </div>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
;
  // Check condition
if ( {) {
  $2
}
    return <LoadingState />;
  }
  // Check condition
if ( {) {
  $2
}
    return <ErrorState error={error} />;
  }
  // Check condition
if ( {) {
  $2
}
    return <EmptyState />;
  }
  const filtered_applications =;
    status_filter === "all";
      ? applications;
      : applications.filter ((app) => app.status === status_filter);
;
  return (
    <div className="space - y-6">;
      <div className="flex flex - wrap gap - 2">;
        <Button;
          size="sm";
          variant={status_filter === "all" ? "default" : "outline"}
          on_click={() => setStatusFilter ("all")}
        >;
          All;
        </Button>;
        <Button;
          size="sm";
          variant={status_filter === "new" ? "default" : "outline"}
          on_click={() => setStatusFilter ("new")}
        >;
          Submitted;
        </Button>;
        <Button;
          size="sm";
          variant={status_filter === "viewed" ? "default" : "outline"}
          on_click={() => setStatusFilter ("viewed")}
        >;
          Viewed;
        </Button>;
        <Button;
          size="sm";
          variant={status_filter === "shortlisted" ? "default" : "outline"}
          on_click={() => setStatusFilter ("shortlisted")}
        >;
          Shortlisted;
        </Button>;
        <Button;
          size="sm";
          variant={status_filter === "interview" ? "default" : "outline"}
          on_click={() => setStatusFilter ("interview")}
        >;
          Interview;
        </Button>;
        <Button;
          size="sm";
          variant={status_filter === "hired" ? "default" : "outline"}
          on_click={() => setStatusFilter ("hired")}
        >;
          Hired;
        </Button>;
        <Button;
          size="sm";
          variant={status_filter === "rejected" ? "default" : "outline"}
          on_click={() => setStatusFilter ("rejected")}
      <div className="grid gap - 4 md:grid - cols - 1 lg:grid - cols - 2">;
        {filtered_applications.map ((application) => (
          <ApplicationCard key={application.id} application={application} />))}
      </div>;      {filtered_applications.length === 0 && (
        <div className="text - center p - 8">;
          <p className="text - muted - foreground">;
            No applications with this status.;
          </p>;
        </div>)}
    </div>);

<<<<<<< HEAD
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
