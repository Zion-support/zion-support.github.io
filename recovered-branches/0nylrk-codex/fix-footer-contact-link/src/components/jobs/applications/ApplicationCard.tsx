<<<<<<< HEAD
=======
}

export function ApplicationCard(): any ({ application }: ApplicationCardProps) {;
  const [expanded, setExpanded] = useState(false);

<<<<<<< HEAD
=======
import {useState} from "react";
import {formatDistanceToNow} from "date-fns";
import {JobApplication} from "@/types/jobs";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download} from "lucide-react";
import {Link} from "react-router-dom";
import {StatusBadge} from "./StatusBadge";
import {ApplicationProgress} from "./ApplicationProgress";
import {toast} from "sonner";
<<<<<<< HEAD


>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
import { ApplicationProgress } from "./ApplicationProgress",
import { toast } from "sonner",
interface ApplicationCardProps {
  application: JobApplication
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ApplicationCardProps {;
  application: JobApplication;
}

export function ApplicationCard(): any ({ application }: ApplicationCardProps) {;
  const [expanded, setExpanded] = useState(false);

  const handleDownloadResume = () => {;
    // This would typically download the resume file;
    toast && toast.info("Resume download functionality will be implemented soon");
  };

  const renderActionButtons = () => {;
    switch (application && application.status) {;

<<<<<<< HEAD
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface ApplicationCardProps {
  application: JobApplication
}

export function ApplicationCard({ application }: ApplicationCardProps) {

  const [expanded, setExpanded] = useState(false),
<<<<<<< HEAD
=======
export function ApplicationCard({ application }: ApplicationCardProps) {;
  const [expanded, setExpanded] = useState(false);
export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const handleDownloadResume = () => {
    // This would typically download the resume file

  },

  const renderActionButtons = () => {
    switch (application.status) {
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
import { useState } from "react",;
import { formatDistanceToNow } from "date-fns",;
import { JobApplication } from "@/types/jobs",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from "lucide-react",;
import { Link } from "react-router-dom",;
import { StatusBadge } from "./StatusBadge",;
import { ApplicationProgress } from "./ApplicationProgress",;
import { toast } from "sonner",;
;
interface ApplicationCardProps {;
  application:JobApplication;
}
;
export function ApplicationCard({ application } ApplicationCardProps) {;
  const [expanded, setExpanded] = useState(false),;
;
  const handleDownloadResume = () => {;
    // This would typically download the resume file;
    toast.info("Resume download functionality will be implemented soon"),;
  },;
;
  const renderActionButtons = () => {;
    switch (application.status) {;
      case "shortlisted":return (;
          <Button variant="default" size="sm">;
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview;
          </Button>;
        ),;
      case "interview":;
        return (;
          <Button variant="default" size="sm">;
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details;
          </Button>;
        ),;
      case "hired":;
        return (;
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900">;
            <FileText className="h-4 w-4 mr-1" /> View Offer;
          </Button>;
        ),;
      case "rejected":;
        return (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Button variant="outline" size="sm">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback;
          </Button>;
        ),;
      default:;
        return null;
<<<<<<< HEAD
  }
=======

    }
<<<<<<< HEAD

=======
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }

  },

<<<<<<< HEAD
            </div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;

  return (
=======
<<<<<<< HEAD

  return (

    }
  },;
;
  return (;
    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <div className="flex justify-between items-start">;
          <div>;
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>;
            <div className="text-sm text-muted-foreground mt-1">;
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix:true })}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> merged-prs-20250907-203621
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;
<<<<<<< HEAD
  }
  },

  const renderActionButtons = () => {
    switch (application.status) {
      case "shortlisted": return (
          <Button variant="default" size="sm">
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview
          </Button>
        ),
      case "interview":
        return (
          <Button variant="default" size="sm">
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details
          </Button>
        ),
      case "hired":
        return (
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">
            <FileText className="h-4 w-4 mr-1" /> View Offer
          </Button>
        ),
      case "rejected":
        return (
          <Button variant="outline" size="sm">
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback
          </Button>
        )
      default:
        return null
    }
  }
  },

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{application.job?.title |"Unknown Job"}</CardTitle>
            <div className="text-sm text-muted-foreground mt-1">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </div>
          </div>
          <StatusBadge status={application.status} />
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <ApplicationProgress status={application.status} className="my-4" />
        {expanded && (
          <div className="mt-4 space-y-3">
            {application.cover_letter && (
              <div>
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>
                <p className="text-sm text-muted-foreground">{application.cover_letter}</p>
              </div>
            )}
            {application.resume && (
              <div className="border rounded-md p-3 bg-muted/20">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm font-medium">{application.resume.title |"Resume"}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>
                    <Download className="h-3 w-3 mr-1" /> Download
                  </Button>
                </div>
              </div>
            )}
            {application.match_score && (
              <div>
                <h4 className="text-sm font-medium mb-1">Match Score</h4>
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">
                    {application.match_score}%
                  </div>
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>
                </div>
              </div>


            )}
          </div>
=======
      <CardContent className="pb - 3">;
        <ApplicationProgress status={application.status} className="my - 4" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  return (

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from "react",;
import { formatDistanceToNow } from "date-fns",;
import { JobApplication } from "@/types/jobs",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from "lucide-react",;
import { Link } from "react-router-dom",;
import { StatusBadge } from "./StatusBadge",;
import { ApplicationProgress } from "./ApplicationProgress",;
import { toast } from "sonner",;
interface ApplicationCardProps {;
  application: JobApplication;
}
;
export function ApplicationCard({ application }: ApplicationCardProps) {;
  const [expanded, setExpanded] = useState(false),;
  const handleDownloadResume = () => {;
    // This would typically download the resume file;
    toast.info("Resume download functionality will be implemented soon");
  },;
  const renderActionButtons = () => {;
    switch (application.status) {;
      case "shortlisted": return (;
          <Button variant="default" size="sm">;
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview;
          </Button>;
        ),;
      case "interview":;
        return (;
          <Button variant="default" size="sm">;
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details;
          </Button>;
        ),;
      case "hired":;
        return (;
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">;
            <FileText className="h-4 w-4 mr-1" /> View Offer;
          </Button>;
        ),;
      case "rejected":;
        return (;
          <Button variant="outline" size="sm">;
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback;
          </Button>;
        );
      default:;
        return null;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
  },;
;
  return (;
<<<<<<< HEAD
=======
<<<<<<< HEAD
        {expanded && (
          <div className="mt - 4 space - y-3">;
            {application.cover_letter && (
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <div className="flex justify-between items-start">;
          <div>;
<<<<<<< HEAD
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>;
=======
<<<<<<< HEAD
      ;
      <CardContent className="pb-3">;
        <ApplicationProgress status={application.status} className="my-4" />;
        ;
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>;
            <div className="text-sm text-muted-foreground mt-1">;
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;
      <CardContent className="pb-3">;
        <ApplicationProgress status={application.status} className="my-4" />;
        {expanded && (;
          <div className="mt-4 space-y-3">;
            {application.cover_letter && (;
              <div>;
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>;
                <p className="text-sm text-muted-foreground">{application.cover_letter}</p>;
              </div>;
            )}
;
            {application.resume && (;
=======
            <CardTitle>{application && application.job?.title || "Unknown Job"}</CardTitle>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <div className="text-sm text-muted-foreground mt-1">;
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix:true })}
            </div>;

          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;
      <CardContent className="pb-3">;
        <ApplicationProgress status={application.status} className="my-4" />;
        {expanded && (;
          <div className="mt-4 space-y-3">;
            {application.cover_letter && (;
              <div>;
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>;
                <p className="text-sm text-muted-foreground">{application.cover_letter}</p>;
              </div>;
            )}
;
            {application.resume && (;

<<<<<<< HEAD
        {expanded && (
          <div className="mt - 4 space-y-3">;
            {application.cover_letter && (    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <div className="flex justify-between items-start">;
          <div>;
=======
            {application && application.resume && (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <div className="border rounded-md p-3 bg-muted/20">;
                <div className="flex justify-between items-center">;
                  <div className="flex items-center">;
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />;
<<<<<<< HEAD
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>;
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>;
=======
                    <span className="text-sm font-medium">{application && application.resume.title || "Resume"}</span>;
<<<<<<< HEAD
<span className="text-sm font-medium">{application.resume.title || "Resume"}</span>;
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>;
                    <span className="text-sm font-medium">{application && application.resume.title || "Resume"}</span>;
                    <span className="text-sm font-medium">{application && application.resume.title || "Resume"}</span>;                    <span className="text-sm font-medium">{application && application.resume.title || "Resume"}</span>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </div>;
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>;

                    <Download className="h-3 w-3 mr-1" /> Download;
                  </Button>;
                </div>;
              </div>;
            )}
<<<<<<< HEAD
            ;
            {application.match_score && (;
;
            {application.match_score && (;
=======

<<<<<<< HEAD
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>;
                </div>;
              </div>;
            )}
          </div>;

            )}
          </div>;
=======
            {application && application.match_score && (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div>;
                <h4 className="text-sm font-medium mb-1">Match Score</h4>;
                <div className="flex items-center">;
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">;
<<<<<<< HEAD
                    {application.match_score}%;
=======
                    {application && application.match_score}%;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </div>;
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>;
                </div>;
              </div>;
<<<<<<< HEAD
            )}
          </div>;
      </CardContent>;
      <CardFooter className="flex flex-col gap-3 pt-0">;
        <div className="flex justify-between items-center w-full">;
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            )}
          </div>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        )}

      </CardContent>;

      <CardFooter className="flex flex-col gap-3 pt-0">;
        <div className="flex justify-between items-center w-full">;
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {expanded ? "Show Less" : "Show More"}
          </Button>;
          <div className="flex gap-2">;
            {renderActionButtons()}
            <Button
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        <Button 

          variant="secondary" 

<<<<<<< HEAD
=======

<<<<<<< HEAD
        <Button
          variant="secondary"
        <Button 
          variant="secondary" 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              variant="outline" 

              size="sm"
              asChild>;`
              <Link to={`/jobs/${application && application.job_id}`}>;"
                <ExternalLink className="h-4 w-4 mr-1" /> View Job;
<<<<<<< HEAD

              <div>;"
                <h4 className="text - sm font - medium mb - 1">Your Cover Letter</h4>;"
=======
              <div>;
                <h4 className="text - sm font - medium mb - 1">Your Cover Letter</h4>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

{application.match_score}%;
=======
                    {application.match_score}%;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
          variant="secondary";""
          size="sm";""
          className="w - full";"
          <Link to={`/messages?job_id=${application.job_id}`}>;
            <MessageSquare className="h - 4 w - 4 mr - 1" /> Message Client;"

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
}
;
}
;

<<<<<<< HEAD
        ;

=======
<<<<<<< HEAD
        ;
        <Button ;
          variant="secondary" ;
          size="sm";
          className="w-full";
          asChild;
        >;
          <Link to={`/messages?jobId=${application.job_id}`}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client;
          </Link>;
        </Button>;
      </CardFooter>;
    </Card>;
  ),;}
<<<<<<< HEAD

=======
 interface ApplicationCardProps {
  application: JobApplication 
}export function ApplicationCard ({
  application 
}: ApplicationCardProps) {
  const [expanded, setExpanded] = useState (false);
//This would typically download the resume file return (<Button variant="default" size="sm" > <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview </Button>);
case "interview" : default: return (<Card className="overflow-hidden" > <CardHeader className="pb-3" > <div className="flex justify-between items-start" > <div> </div> </div> <StatusBadge status= {
  application.status 
}/> </div> </CardHeader> {
  application.cover letter && (<div> <h4 className="text-sm font-medium mb-1" >Your Cover Letter</h4> <p className="text-sm text-muted-foreground" > {
  application.cover letter 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}</p> </div>) 
}</Button> </div> </div>) 
}{
  application.match score && (<div> <h4 className="text-sm font-medium mb-1" >Match Score</h4> <div className="flex items-center" > <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium" > {
  application.match score 
}% </div> <span className="ml-2 text-xs text-muted-foreground" >Relevance to job requirements</span> </div> </div>) 
}</div>) 
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}</CardContent> <Button variant="outline" size="sm" asChild > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w-full" asChild > </Link> </Button> </CardFooter> </Card>) 
}
}
}
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
