<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx

<<<<<<< HEAD

import { useState } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Loader2, MessageSquare, ExternalLink } from "lucide-react",
import { formatDistanceToNow } from "date-fns",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {useState} from "react";
import {useJobApplications} from "@/hooks/useJobApplications";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Loader2, MessageSquare, ExternalLink} from "lucide-react";
import {formatDistanceToNow} from "date-fns";
import {Link} from "react-router-dom";
import {ApplicationStatus} from "@/types/jobs";
export function MyApplications() {;
  const { applications, isLoading, error } = useJobApplications();
<<<<<<< HEAD
<<<<<<< HEAD
  const getStatusBadge = (status: ApplicationStatus) => {;
    switch (status) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx
import { useState } from './react';
import { useJobApplications } from '@/hooks / useJobApplications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Loader2, MessageSquare, ExternalLink } from './lucide-react';
import { formatDistanceToNow } from './date - fns';
import { Link } from './react-router-dom';
import { ApplicationStatus } from '@/types / jobs';
export /**
 * MyApplications - Function description
 */
function MyApplications() {
  const { applications, is_loading, error } = useJobApplications ();
;
  const getStatusBadge = (status: ApplicationStatus) =>: any {
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const getStatusBadge = (status: ApplicationStatus) => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    switch (status) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Loader2, MessageSquare, ExternalLink } from "lucide-react",
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom";
import { ApplicationStatus } from "@/types/jobs";
export function MyApplications() {
  const { applications, isLoading, error } = useJobApplications();

import { Link } from "react-router-dom",
import { ApplicationStatus } from "@/types/jobs",
export function MyApplications() {
  const { applications, isLoading, error } = useJobApplications(),
  
  const getStatusBadge = (status: ApplicationStatus) => {
    switch (status) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      case "new": return <Badge variant="secondary">New</Badge>,
      case "viewed":
        return <Badge variant="outline">Viewed</Badge>,
      case "shortlisted":
        return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,
      case "interview":
        return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,
      case "hired":
        return <Badge className="bg-green-100 text-green-800">Hired</Badge>,
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
<<<<<<< HEAD
<<<<<<< HEAD

  if (isLoading) {
========
      case "new": return <Badge variant="secondary">New</Badge>;
      case "viewed":;
        return <Badge variant="outline">Viewed</Badge>;
      case "shortlisted":;
      case "rejected":;
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  if (isLoading) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }

  },
  
  if (isLoading) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx
  if (error) {
========
  if (error) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx
=======
  if (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return (
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">
        <p>{error}</p>
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx
  if (applications.length === 0) {
========
  if (applications && applications.length === 0) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx
=======
  if (applications.length === 0) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return (
      <Card className="bg-muted/30">
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground">
            You haven't submitted any applications yet.
          </p>
          <Button className="mt-4" asChild>
            <Link to="/jobs">Browse Jobs</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {applications.map((application) => (
        <Card key={application.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">
                {application.job?.title |"Unknown Job"}
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      case "new": return <Badge variant="secondary">New</Badge>;
      case "viewed":;
        return <Badge variant="outline">Viewed</Badge>;
      case "shortlisted":;


  },
  


  if (isLoading) {
=======
      case "rejected":;
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>;
    }
  };

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
            <Link to="/jobs">Browse Jobs</Link>;
          </Button>;
        </CardContent>;
      </Card>;
    );
  }



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  {application.cover_letter}
                </p>
              )}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                  {application.cover_letter}
                </p>
              )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useState } from "react",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Loader2, MessageSquare, ExternalLink } from "lucide-react",;
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { ApplicationStatus } from "@/types/jobs",;
export function MyApplications() {;
  const { applications, isLoading, error } = useJobApplications(),;
  const getStatusBadge = (status: ApplicationStatus) => {;
    switch (status) {;
      case "new": return <Badge variant="secondary">New</Badge>,;
      case "viewed":;
        return <Badge variant="outline">Viewed</Badge>,;
      case "shortlisted":;
        return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,;
      case "interview":;
        return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,;
      case "hired":;
        return <Badge className="bg-green-100 text-green-800">Hired</Badge>,;
      case "rejected":;
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:;
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center p-8">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    );
  }
;
  if (error) {;
    return (;
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">;
        <p>{error}</p>;
      </div>;
    );
  }
;
  if (applications.length === 0) {;
    return (;
      <Card className="bg-muted/30">;
        <CardContent className="pt-6 text-center">;
          <p className="text-muted-foreground">;
            You haven't submitted any applications yet.;
          </p>;
          <Button className="mt-4" asChild>;
            <Link to="/jobs">Browse Jobs</Link>;
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
              </CardTitle>
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
                  {application.cover_letter}
                </p>
              )}

=======


=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  {application.cover_letter}
                </p>
              )}
              
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  asChild
                >
                  <Link to={`/jobs/${application.job_id}`}>
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job
                  </Link>
                </Button>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx
  return (
    <div className="grid gap-4 md:grid-cols-2">;
      {applications && applications.map((application) => (;
        <Card key={application && application.id}>;
          <CardHeader className="pb-2">;
            <div className="flex justify-between items-start">;
              <CardTitle className="text-lg">;
                {application && application.job?.title || "Unknown Job"}
              </CardTitle>;
              {getStatusBadge(application && application.status)}
            </div>;
            <p className="text-sm text-muted-foreground">;
              Applied {formatDistanceToNow(new Date(application && application.created_at), { addSuffix: true })}
=======

import { useState } from "react",;
import { useJobApplications } from "@/hooks/useJobApplications",;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Loader2, MessageSquare, ExternalLink } from "lucide-react",;
import { formatDistanceToNow } from "date-fns",;
import { Link } from "react-router-dom",;
import { ApplicationStatus } from "@/types/jobs",;
;
export function MyApplications() {;
  const { applications, isLoading, error } = useJobApplications(),;
  ;
  const getStatusBadge = (status:ApplicationStatus) => {;
    switch (status) {;
      case "new":return <Badge variant="secondary">New</Badge>,;
      case "viewed":;
        return <Badge variant="outline">Viewed</Badge>,;
      case "shortlisted":;
        return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,;
      case "interview":;
        return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,;
      case "hired":;
        return <Badge className="bg-green-100 text-green-800">Hired</Badge>,;
      case "rejected":;
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>,;
      default:;
        return <Badge variant="outline">{status}</Badge>,;
    }
  },;
  ;
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center p-8">;
        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
      </div>;
    ),;
  }
  ;
  if (error) {;
    return (;
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">;
        <p>{error}</p>;
      </div>;
    ),;
  }
  ;
  if (applications.length === 0) {;
    return (;
      <Card className="bg-muted/30">;
        <CardContent className="pt-6 text-center">;
          <p className="text-muted-foreground">;
            You haven't submitted any applications yet.;
          </p>;
          <Button className="mt-4" asChild>;
            <Link to="/jobs">Browse Jobs</Link>;
          </Button>;
        </CardContent>;
      </Card>;
    ),;
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
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix:true })}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </p>;
          </CardHeader>;
          <CardContent>;
            <div className="space-y-3">;
<<<<<<< HEAD
              {application && application.cover_letter && (;
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">;
                  {application && application.cover_letter}
                </p>;
              )}
              <div className="flex justify-between items-center">;
                <Button
                  variant="outline" 
                  size="sm" 
                  className="text-xs"
                  asChild>;
                  <Link to={`/jobs/${application && application.job_id}`}>;
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job;
                  </Link>;
                </Button>;
                <Button
                  variant="default" 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx

=======

                <Button 
                  variant="default" 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx
                  size="sm"
                  className="text-xs"
                  asChild>;
                  <Link to={`/messages?jobId=${application && application.job_id}`}>;
=======
              {application.cover_letter && (;
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">;
                  {application.cover_letter}
                </p>;
              )}
              ;
              <div className="flex justify-between items-center">;
                <Button ;
                  variant="outline" ;
                  size="sm" ;
                  className="text-xs";
                  asChild;
                >;
                  <Link to={`/jobs/${application.job_id}`}>;
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job;
                  </Link>;
                </Button>;
                ;
                <Button ;
                  variant="default" ;
                  size="sm";
                  className="text-xs";
                  asChild;
                >;
                  <Link to={`/messages?jobId=${application.job_id}`}>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    <MessageSquare className="h-3 w-3 mr-1" /> Contact Client;
                  </Link>;
                </Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx
    </div>;
<<<<<<< HEAD
  );
}
        return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;
      case "interview":;
        return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;
      case "hired":;
        return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;
      case "rejected":;
        return <Badge className="bg - red - 100 text - red - 800">Rejected</Badge>,
      default:;
        return <Badge variant="outline">{status}</Badge>;
    }
  }
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center p - 8">;
        <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="text - center p - 6 border rounded - md bg - red - 50 text - red - 800">;
        <p>{error}</p>;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <Card className="bg - muted / 30">;
        <CardContent className="pt - 6 text - center">;
          <p className="text - muted - foreground">;
            You haven't submitted any applications yet.;
          </p>;
          <Button className="mt - 4" as_child>;
            <Link to="/jobs">Browse Jobs</Link>;
          </Button>;
        </CardContent>;
      </Card>);
  }
  return (
    <div className="grid gap - 4 md:grid - cols - 2">;
      {applications.map ((application) => (
        <Card key={application.id}>;
          <CardHeader className="pb - 2">;
            <div className="flex justify - between items - start">;
              <CardTitle className="text - lg">;
                {application.job?.title || "Unknown Job"}
              </CardTitle>;
              {getStatusBadge (application.status)}
            </div>;
            <p className="text - sm text - muted - foreground">;
              Applied {formatDistanceToNow (new Date (application.created_at), { add_suffix: true })}
            </p>;
          </CardHeader>;
          <CardContent>;
            <div className="space - y-3">;
              {application.cover_letter && (
                <p className="text - sm text - muted - foreground line - clamp - 2 mb - 2">;
                  {application.cover_letter}
                </p>)}
              <div className="flex justify - between items - center">;
                <Button;
                  variant="outline";
                  size="sm";
                  className="text - xs";
                  as_child;
                >;
                  <Link to={`/jobs/${application.job_id}`}>;
                    <ExternalLink className="h - 3 w - 3 mr - 1" /> View Job;
                  </Link>;
                </Button>;
                <Button;
                  variant="default";
                  size="sm";
                  className="text - xs";
                  as_child;
                >;
                  <Link to={`/messages?job_id=${application.job_id}`}>;
                    <MessageSquare className="h - 3 w - 3 mr - 1" /> Contact Client;
                  </Link>;
                </Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>))}
    </div>);
=======
  ),; export function MyApplications () {
  const {
  applications, isLoading, error 
}= useJobApplications ();
const getStatusBadge = (status: ApplicationStatus) => {
  switch (status) {
  case "viewed": return <Badge variant="outline">Viewed</Badge>;
case "shortlisted": return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>;
case "interview": return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>;
case "hired": return <Badge className="bg-green-100 text-green-800">Hired</Badge>;
case "rejected": return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
default: return <Badge variant="outline"> {
  status 
}</Badge> 
}
};
<p> {
  error 
}</p> </div>) 
}You haven't submitted any applications yet. </p> <Button className="mt-4" asChild> <Link to="/jobs" >Browse Jobs</Link> </Button> </CardContent> </Card> </CardTitle> {
  getStatusBadge (application.status) 
}</div> {
  application.cover letter 
}</p>) 
}<div className="flex justify-between items-center" > <Button variant="outline" size="sm" className="text-xs" asChild > </Link> </Button> <Button variant="default" size="sm" className="text-xs" asChild > </Link> </Button> </div> </div> </CardContent> </Card>) ) 
}</div>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/MyApplications.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <Button
                  variant="default"
                <Button 
                  variant="default" 
                  size="sm"
                  className="text-xs"
                  asChild
                >
                  <Link to={`/messages?jobId=${application.job_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Contact Client
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
