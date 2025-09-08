


    }

import { useState } from 'react;
import { useJobApplications } from @/hooks/useJobApplications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card;
import { Badge } from @/components/ui/badge';
import { Button } from '@/components/ui/button;
import { Loader2, MessageSquare, ExternalLink } from lucide-react';
import { formatDistanceToNow } from 'date-fns;
import Link from next/link';
import { ApplicationStatus } from '@/types/jobs;


import { useState } from "react",
import { useJobApplications } from "@/hooks/useJobApplications",
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Loader2, MessageSquare, ExternalLink } from 'lucide-react'
import { formatDistanceToNow } from "date-fns",
import Link from "next/link",
import { ApplicationStatus } from "@/types/jobs",

export function MyApplications() {
  const { applications, isLoading, error } = useJobApplications(),
  const getStatusBadge = (status: ApplicationStatus) => {
    switch (status) {
      case "new: return <Badge variant=secondary">New</Badge>,
      case "viewed:
        return <Badge variant=outline">Viewed</Badge>,
      case "shortlisted:
        return <Badge className=bg-blue-100 text-blue-800">Shortlisted</Badge>,
      case "interview:
        return <Badge className=bg-purple-100 text-purple-800">Interview</Badge>,
      case "hired:
        return <Badge className=bg-green-100 text-green-800">Hired</Badge>,
      case "rejected:
        return <Badge className=bg-red-100 text-red-800">Rejected</Badge>,
      default:
        return <Badge variant="outline>{status}</Badge>
    }
  },
  if (isLoading) {

import { Loader2, MessageSquare, ExternalLink } from 'lucide-react
import { formatDistanceToNow } from date-fns",
import Link from "next/link;
import { ApplicationStatus } from @/types/jobs";
export function MyApplications() {
  const { applications, isLoading, error } = useJobApplications();
  const getStatusBadge = null;

  if (isLoading) {



    return (
      <div className="flex justify-center items-center p-8>

        <Loader2 className=h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

      <div className="text-center p-6 border rounded-md bg-red-50 text-red-800>
        <p>{error}</p>
      </div>
    )
  }

          <p className=text-muted-foreground">
            You havent submitted any applications yet.
          </p>"
          <Button className=mt-4 asChild>"
            <Link href="/jobs>Browse Jobs</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }


    <div className="grid gap-4 md:grid-cols-2">


      {applications.map((application) => (

        <Card key={application.id}>

          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">


                {application.job?.title || "Unknown Job}
              </CardTitle>
              {getStatusBadge(application.status)}
            </div>
            <p className="text-sm text-muted-foreground">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </p>
          </CardHeader>

            <div className=space-y-3>
              {application.cover_letter && ("

                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">


import { Loader2, MessageSquare, ExternalLink } from 'lucide-react';
import { formatDistanceToNow } from "date-fns",;
import Link from "next/link",;
import { ApplicationStatus } from "@/types/jobs",;
export function MyApplications() {;
  const { applications, isLoading, error } = useJobApplications(),;
  const getStatusBadge = (status: ApplicationStatus) => {;
    switch (status) {;




  if (isLoading) {


      </div>;
    );
  }

  if (error) {

      <div className=text-center p-6 border rounded-md bg-red-50 text-red-800">;
        <p>{error}</p>;
      </div>;
    );
  }

  if (applications && applications.length === 0) {

      <Card className="bg-muted/30>;
        <CardContent className=pt-6 text-center">;
          <p className="text-muted-foreground>;

            You havent submitted any applications yet.;

            <Link href=/jobs">Browse Jobs</Link>;
          </Button>;
        </CardContent>;
      </Card>;


    );
  }
  return (;"
    <div className=grid gap-4 md:grid-cols-2>;
      {applications.map((application) => (;

                {application.job?.title || "Unknown Job"}
              </CardTitle>;
              {getStatusBadge(application.status)}
            </div>;
            <p className=text-sm text-muted-foreground">;
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </p>;
          </CardHeader>;
          <CardContent>;"
            <div className="space-y-3">;


              {application.cover_letter && (;"
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2>;

                  {application.cover_letter}
                </p>;
              )}


              <div className="flex justify-between items-center">

                <Button "
                  variant=outline "
                  size="sm 




              </CardTitle>;
              {getStatusBadge(application && application.status)}
            </div>;
            <p className="text-sm text-muted-foreground">;
              Applied {formatDistanceToNow(new Date(application && application.created_at), { addSuffix: true })}
            </p>;
          </CardHeader>;


          <CardContent>;"
            <div className="space-y-3>;
              {application && application.cover_letter && (;
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">;
                  {application && application.cover_letter}
                </p>;
              )}

                <Button 
                  variant=default 
                  size="sm"
                  className=text-xs
                  asChild
                >
                  <Link href={`/messages?jobId=${application.job_id}`}>
                    <MessageSquare className="h-3 w-3 mr-1" /> Contact Client
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

                    <MessageSquare className=h-3 w-3 mr-1 /> Contact Client;
                  </Link>;
                </Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>;

    </div>;
  );
}

  },
  // Check condition;
if ( {) {}
  $2;
}
    return ("
      <div className="flex justify - center items - center p - 8>;
        <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}
    return (

      <div className=text - center p - 6 border rounded - md bg - red - 50 text - red - 800">;
        <p>{error}</p>;
      </div>);
  }

          </Button>;
        </CardContent>;
      </Card>);
  }

            <p className="text - sm text - muted - foreground>;
              Applied {formatDistanceToNow (new Date (application.created_at), { add_suffix: true })}
            </p>;
          </CardHeader>;

                    <MessageSquare className=h - 3 w - 3 mr - 1" /> Contact Client;
                  </Link>;
                </Button>;
              </div>;
            </div>;
          </CardContent>;
        </Card>))}
    </div>);
}

    </div>
  );

}
<p> {
  error ;


