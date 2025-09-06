
<<<<<<< HEAD

=======
import { useState } from "react"
import { useJobApplications } from "@/hooks/useJobApplications"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Loader2, MessageSquare, ExternalLink } from 'lucide-react'import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import {ApplicationStatus} from "@/types/jobs"
export function MyApplications() {
  const { applications, isLoading, error } = useJobApplications()
  const getStatusBadge = (status: ApplicationStatus,) => {
    switch (status) {
      case "new": return <Badge variant="secondary">New</Badge>
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { useState } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Loader2, MessageSquare, ExternalLink } from 'lucide-react'
import { formatDistanceToNow } from "date-fns",
<<<<<<< HEAD

      default:
=======
import Link from "next/link";
import { ApplicationStatus } from "@/types/jobs";
export function MyApplications() {

  const { applications, isLoading, error } = useJobApplications()
  const getStatusBadge = (status: ApplicationStatus,) => {
    switch (status) {
      case "new": return <Badge variant="secondary">New</Badge>
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
>>>>>>>       default:
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        return <Badge variant="outline">{status}</Badge>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
    }

import {ApplicationStatus} from "@/types/jobs";
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
  if (error) {
    return (
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">
        <p>{error}</p>
      </div>
    )
  }
  if (applications.length === 0) {
    return (
      <Card className="bg-muted/30">
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground">
            You haven't submitted any applications yet.
          </p>
          <Button className="mt-4" asChild>
            <Link href="/jobs">Browse Jobs</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }
  return (
    <div className="grid gap-4 md:grid-cols-2">
<<<<<<< HEAD

        <Card key={application.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">

=======
      {applications.map((application,) => (
>>>>>>>         <Card key={application.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">
                {application.job?.title |"Unknown Job"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              </CardTitle>
              {getStatusBadge(application.status)}
            </div>
            <p className="text-sm text-muted-foreground">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {application.cover_letter && (
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
<<<<<<< HEAD
=======
>>>>>>>                   {application.cover_letter}
                </p>
              )}
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
ursor/fix-website-loading-errors-and-merge-6662
export function MyApplications() {;
  const { applications, isLoading, error } = useJobApplications();

  const getStatusBadge = (status: ApplicationStatus,) => {;
    switch (status) {;
      case "new": return <Badge variant="secondary">New</Badge>;
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:;
        return <Badge variant="outline">{status}</Badge>;
    }
  },;

  if (isLoading) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <div className="flex justify-center items-center p-8">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }


  if (error) {;

    return (
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">;
        <p>{error}</p>;
      </div>;
    );
  }


  if (applications && applications.length === 0) {;

    return (
      <Card className="bg-muted/30">;
        <CardContent className="pt-6 text-center">;
          <p className="text-muted-foreground">;
            You haven't submitted any applications yet.;
          </p>;
          <Button className="mt-4" asChild>;
            <Link href="/jobs">Browse Jobs</Link>;
          </Button>;
        </CardContent>;
      </Card>;
    );
  }

;
  return (;
    <div className="grid gap-4 md:grid-cols-2">;
      {applications.map((application) => (;
        <Card key={application.id}>;
          <CardHeader className="pb-2">;
            <div className="flex justify-between items-start">;
              <CardTitle className="text-lg">;
                {application.job?.title || "Unknown Job"}
              </CardTitle>;
              {getStatusBadge(application.status)}
            </div>;
            <p className="text-sm text-muted-foreground">;
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </p>;
          </CardHeader>;
          <CardContent>;
            <div className="space-y-3">;
              {application.cover_letter && (;
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                  {application.cover_letter}
                </p>
              )}

<<<<<<< HEAD
                  className="text-xs"
=======
              
              <div className="flex justify-between items-center">
                <Button 
                  variant="outline" 
                  size="sm" 

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>                   className="text-xs"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  asChild
                >
                  <Link href={`/jobs/${application.job_id}`}>
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job
                  </Link>
                </Button>
<<<<<<< HEAD

=======
                <Button
                  variant="default"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <Button 

                  variant="default" 
<<<<<<< HEAD

                  size="sm"
=======
>>>>>>>                   size="sm"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  className="text-xs"
                  asChild>;
                  <Link href={`/messages?jobId=${application && application.job_id}`}>;
                    <MessageSquare className="h-3 w-3 mr-1" /> Contact Client;
                  </Link>;
                </Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD
=======
    </div>
  )
}
    </div>;
  );
};
>>>>>>> 
    </div>;
  );
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    </div>;
  );

<<<<<<< HEAD
=======
}
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
