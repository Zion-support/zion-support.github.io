<<<<<<< HEAD

=======
import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from "lucide-react",
import { Link } from "react-router-dom",
import { StatusBadge } from "./StatusBadge",
import { ApplicationProgress } from "./ApplicationProgress";
import { toast } from "sonner";

interface ApplicationCardProps {;
  application: JobApplication;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

export function ApplicationCard(): any ({ application }: ApplicationCardProps) {;
  const [expanded, setExpanded] = useState(false);

<<<<<<< HEAD
=======
  const handleDownloadResume = () => {;
    // This would typically download the resume file;
    toast && toast.info("Resume download functionality will be implemented soon");
  };

  const renderActionButtons = () => {;
    switch (application && application.status) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface ApplicationCardProps {
  application: JobApplication
}

export function ApplicationCard({ application }: ApplicationCardProps) {

  const [expanded, setExpanded] = useState(false),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function ApplicationCard({ application }: ApplicationCardProps) {;
  const [expanded, setExpanded] = useState(false);
export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  const handleDownloadResume = () => {
    // This would typically download the resume file

  },

  const renderActionButtons = () => {
    switch (application.status) {

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      case "shortlisted": return (

          <Button variant="default" size="sm">;

            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview;
          </Button>;
        );"
      case "interview":;
        return ("
          <Button variant="default" size="sm">;"
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details;
          </Button>;
        );"
      case "hired":;
        return ("
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">;"
            <FileText className="h-4 w-4 mr-1" /> View Offer;
          </Button>;
        );"
      case "rejected":;
        return (


<<<<<<< HEAD

=======
          <Button variant="outline" size="sm">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback;
          </Button>;
        ),;
      default:;
        return null;

<<<<<<< HEAD

    }

=======
  }

    }
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

  },


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (

import { useState } from './react';
import { formatDistanceToNow } from './date - fns';
import { JobApplication } from '@/types / jobs';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from './lucide-react';
import { Link } from './react-router-dom';
import { StatusBadge } from './StatusBadge';
import { ApplicationProgress } from './ApplicationProgress';
import { toast } from './sonner';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ApplicationCardProps {
  application: JobApplication;
}
export /**
 * ApplicationCard - Function description
 */
function ApplicationCard() {
  const [expanded, set_expanded] = useState (false);
;
  const handleDownloadResume = () =>: any {
    // This would typically download the resume file;
    toast.info ("Resume download functionality will be implemented soon");
  }
;
  const renderActionButtons = () =>: any {
    switch (application.status) {
      case "shortlisted": return (
          <Button variant="default" size="sm">;
            <Calendar className="h - 4 w - 4 mr - 1" /> Prepare for Interview;
          </Button>);
      case "interview":;
        return (
          <Button variant="default" size="sm">;
            <Calendar className="h - 4 w - 4 mr - 1" /> View Interview Details;
          </Button>);
      case "hired":;
        return (
          <Button variant="secondary" size="sm" className="bg - green - 100 text - green - 800 hover: bg - green - 200 hover:text - green - 900">;
            <FileText className="h - 4 w - 4 mr - 1" /> View Offer;
          </Button>);
      case "rejected":;
        return (
          <Button variant="outline" size="sm">;
            <HelpCircle className="h - 4 w - 4 mr - 1" /> View Feedback;
          </Button>),
      default:;
        return null;
    }
  }
;
  return (
    <Card className="overflow - hidden">;
      <CardHeader className="pb - 3">;
        <div className="flex justify - between items - start">;
          <div>;
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>;
            <div className="text - sm text - muted - foreground mt - 1">;
              Applied {formatDistanceToNow (new Date (application.created_at), { add_suffix: true })}


<<<<<<< HEAD
            </div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;

      <CardContent className="pb - 3">;
        <ApplicationProgress status={application.status} className="my - 4" />;


  return (



    }
  },;
;
  return (;


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <div className="flex justify-between items-start">;
          <div>;
<<<<<<< HEAD
=======

            <CardTitle>{application && application.job?.title || "Unknown Job"}</CardTitle>;
            <div className="text-sm text-muted-foreground mt-1">;
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix:true })}
            </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
        {expanded && (
          <div className="mt - 4 space-y-3">;
            {application.cover_letter && (    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <div className="flex justify-between items-start">;
          <div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <div className="border rounded-md p-3 bg-muted/20">;
                <div className="flex justify-between items-center">;
                  <div className="flex items-center">;
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />;
<<<<<<< HEAD

                    <span className="text-sm font-medium">{application && application.resume.title || "Resume"}</span>;

=======
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>;
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </div>;
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>;

                    <Download className="h-3 w-3 mr-1" /> Download;
                  </Button>;
                </div>;
              </div>;
            )}
<<<<<<< HEAD
=======
            ;
            {application.match_score && (;
;
            {application.match_score && (;
              <div>;
                <h4 className="text-sm font-medium mb-1">Match Score</h4>;
                <div className="flex items-center">;
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">;
                    {application.match_score}%;
                  </div>;
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>;
                </div>;
              </div>;
            )}
          </div>;
      </CardContent>;
      <CardFooter className="flex flex-col gap-3 pt-0">;
        <div className="flex justify-between items-center w-full">;
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>;
            )}
          </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba



        )}

      </CardContent>;

      <CardFooter className="flex flex-col gap-3 pt-0">;
        <div className="flex justify-between items-center w-full">;
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {expanded ? "Show Less" : "Show More"}
          </Button>;
          <div className="flex gap-2">;
            {renderActionButtons()}
            <Button
<<<<<<< HEAD




=======
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-3 pt-0">
        <div className="flex justify-between items-center w-full">
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less" : "Show More"}
          </Button>
          <div className="flex gap-2">
            {renderActionButtons()}
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <Link to={`/jobs/${application.job_id}`}>
                <ExternalLink className="h-4 w-4 mr-1" /> View Job
              </Link>
            </Button>
          </div>
        </div>

>>>>>>> origin/cursor/delete-old-data-records-6bba

        <Button 

          variant="secondary" 

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          size="sm"

          className="w-full"
          asChild;
        >
          <Link to={`/messages?jobId=${application.job_id}`}>"
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client;
          </Link>
        </Button>
      </CardFooter>
    </Card>

<<<<<<< HEAD
  )

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              variant="outline" 

              size="sm"
              asChild>;`
              <Link to={`/jobs/${application && application.job_id}`}>;"
                <ExternalLink className="h-4 w-4 mr-1" /> View Job;

<<<<<<< HEAD
              <div>;
                <h4 className="text - sm font - medium mb - 1">Your Cover Letter</h4>;

                <p className="text - sm text - muted - foreground">{application.cover_letter}</p>;
              </div>)}
            {application.resume && ("
              <div className="border rounded - md p - 3 bg - muted / 20">;"
                <div className="flex justify - between items - center">;"
                  <div className="flex items - center">;"
                    <FileText className="h - 4 w - 4 mr - 2 text - blue - 500" />;"
                    <span className="text - sm font - medium">{application.resume.title || "Resume"}</span>;
                  </div>;"
                  <Button variant="ghost" size="sm" on_click={handleDownloadResume}>;"

                    <Download className="h - 3 w - 3 mr - 1" /> Download;
                  </Button>;
                </div>;
              </div>)}
            {application.match_score && (

                  <span className="ml - 2 text - xs text - muted - foreground">Relevance to job requirements</span>;
                </div>;
              </div>)}
          </div>)}

                <ExternalLink className="h - 4 w - 4 mr - 1" /> View Job;

                    {application.match_score}%;

                  </div>;
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>;
                </div>;
              </div>;            )}
          </div>;
        )}
      </CardContent>;
      ;
      <CardFooter className="flex flex-col gap-3 pt-0">;
        <div className="flex justify-between items-center w-full">;
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>;
            {expanded ? "Show Less" :"Show More"}
          </Button>;
          <div className="flex gap-2">;
            {renderActionButtons()}
            <Button ;
              variant="outline" ;
              size="sm";
              asChild;
            >;
              <Link to={`/jobs/${application.job_id}`}>;
                <ExternalLink className="h-4 w-4 mr-1" /> View Job;
              </Link>;
            </Button>;
          </div>;
        </div>;




}
;
}
;



=======
}
;

        ;

}</CardContent> <Button variant="outline" size="sm" asChild > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w-full" asChild > </Link> </Button> </CardFooter> </Card>) 
}
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

