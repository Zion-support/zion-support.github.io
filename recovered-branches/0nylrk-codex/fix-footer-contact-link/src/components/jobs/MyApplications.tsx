<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useState} from "react";
import {useJobApplications} from "@/hooks/useJobApplications";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Loader2, MessageSquare, ExternalLink} from "lucide-react";
import {formatDistanceToNow} from "date-fns";
import {Link} from "react-router-dom";

import {ApplicationStatus} from "@/types/jobs";
export function MyApplications() { return null; }
  const { applications, isLoading, error } = useJobApplications();

<<<<<<< HEAD
=======
  const getStatusBadge = (status: ApplicationStatus) => {;
    switch (status) {;


    switch (status) {

      </div>
    )
  }
  if (error) {

import { Link } from "react-router-dom";
import { ApplicationStatus } from "@/types/jobs";
export function MyApplications() {
  const { applications, isLoading, error } = useJobApplications();

import { useState } from "react",

import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Loader2, MessageSquare, ExternalLink } from "lucide-react",
import { formatDistanceToNow } from "date-fns",
import { Link } from "react-router-dom";

import { ApplicationStatus } from "@/types/jobs";
export function MyApplications() {};
  const { applications, isLoading, error } = useJobApplications();

import { Link } from "react-router-dom",

import { ApplicationStatus } from "@/types/jobs",
export function MyApplications() {}
  const { applications, isLoading, error } = useJobApplications(),
  
  const getStatusBadge = (status: ApplicationStatus) => {}
    switch (status) {"
      case "new": return <Badge variant="secondary">New</Badge>,"
      case "viewed":"
        return <Badge variant="outline">Viewed</Badge>,"
      case "shortlisted":"
        return <Badge className="bg-blue-100 text-blue-800">Shortlisted</Badge>,"
      case "interview":"
        return <Badge className="bg-purple-100 text-purple-800">Interview</Badge>,"
      case "hired":"
        return <Badge className="bg-green-100 text-green-800">Hired</Badge>,"
      case "rejected":"
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
      default:"
        return <Badge variant="outline">{status}</Badge>
    }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">

        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
  if (error) {}
    return ("
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">

>>>>>>> origin/cursor/delete-old-data-records-6bba
        <p>{error}</p>
      </div>
    )
  }
<<<<<<< HEAD


=======
  if (applications.length === 0) {

  if (applications.length === 0) {}
    return ("
      <Card className="bg-muted/30">"
        <CardContent className="pt-6 text-center">"
          <p className="text-muted-foreground">'
            You haven't submitted any applications yet.
          </p>"
          <Button className="mt-4" asChild>"
            <Link to="/jobs">Browse Jobs</Link>
>>>>>>> origin/cursor/delete-old-data-records-6bba

          </Button>
        </CardContent>
      </Card>
    )

<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      case "new": return <Badge variant="secondary">New</Badge>;

      case "viewed":;
        return <Badge variant="outline">Viewed</Badge>;
      case "shortlisted":;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },

  if (isLoading) {

<<<<<<< HEAD


=======
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>,;
      default:;"
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (isLoading) {;


        <Loader2 className="h-8 w-8 animate-spin text-primary" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </div>;
    );
  }


<<<<<<< HEAD
  if (error) {;

    return ("
      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800">;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <p>{error}</p>;
      </div>;
    );
  }


<<<<<<< HEAD
  if (applications && applications.length === 0) {;

    return ("
      <Card className="bg-muted/30">;"
        <CardContent className="pt-6 text-center">;"
          <p className="text-muted-foreground">;'
            You haven't submitted any applications yet.;
          </p>;"
          <Button className="mt-4" asChild>;"
            <Link to="/jobs">Browse Jobs</Link>;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </Button>;
        </CardContent>;
      </Card>;
    );
  }

<<<<<<< HEAD


          </Button>;
        </CardContent>;
      </Card>;
    );
  }


                  {application.cover_letter}
                </p>
              )}

              


=======
        <p>{error}</p>;
      </div>;
    );
  }



                  {application.cover_letter}
                </p>
              )}

>>>>>>> origin/cursor/delete-old-data-records-6bba

              <div className="flex justify-between items-center">

                <Button
                  variant="outline"
                  size="sm"

                  className="text-xs"
                  asChild;
                >
                  <Link to={`/jobs/${application.job_id}`}>"
                    <ExternalLink className="h-3 w-3 mr-1" /> View Job;
                  </Link>
                </Button>


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (

    <div className="grid gap-4 md:grid-cols-2">;
      {applications && applications.map((application) => (;
        <Card key={application && application.id}>;"
          <CardHeader className="pb-2">;"
            <div className="flex justify-between items-start">;"
              <CardTitle className="text-lg">;"
                {application && application.job?.title || "Unknown Job"}
              </CardTitle>;
              {getStatusBadge(application && application.status)}
            </div>;"
            <p className="text-sm text-muted-foreground">;
              Applied {formatDistanceToNow(new Date(application && application.created_at), { addSuffix: true })}


<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </p>;
          </CardHeader>;
          <CardContent>;"
            <div className="space-y-3">;


<<<<<<< HEAD
                <Button 

=======
                <Button "
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  variant="default" 

                  size="sm"

                  className="text-xs"
                  asChild>;`
                  <Link to={`/messages?jobId=${application && application.job_id}`}>;
<<<<<<< HEAD

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

=======


"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <MessageSquare className="h-3 w-3 mr-1" /> Contact Client;
                  </Link>;
                </Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD

    </div>;
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
}
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


=======


        return <Badge className="bg - blue - 100 text - blue - 800">Shortlisted</Badge>;
      case "interview":;
        return <Badge className="bg - purple - 100 text - purple - 800">Interview</Badge>;
      case "hired":;
        return <Badge className="bg - green - 100 text - green - 800">Hired</Badge>;
      case "rejected":;

        return <Badge className="bg - red - 100 text - red - 800">Rejected</Badge>,
      default:;"
        return <Badge variant="outline">{status}</Badge>;
    }
  }
;

>>>>>>> origin/cursor/delete-old-data-records-6bba
