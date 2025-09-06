<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx

<<<<<<< HEAD

import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from "lucide-react",
import { Link } from "react-router-dom",
import { StatusBadge } from "./StatusBadge",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from "lucide-react",
import { Link } from "react-router-dom",
import { StatusBadge } from "./StatusBadge",
<<<<<<< HEAD
import { ApplicationProgress } from "./ApplicationProgress";
import { toast } from "sonner";
=======
import { ApplicationProgress } from "./ApplicationProgress",
import { toast } from "sonner",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface ApplicationCardProps {
  application: JobApplication
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ApplicationCardProps {
  application: JobApplication
}

<<<<<<< HEAD
<<<<<<< HEAD
interface ApplicationCardProps {
  application: JobApplication
}
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),
=======
export function ApplicationCard({ application }: ApplicationCardProps) {;
  const [expanded, setExpanded] = useState(false);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon")
<<<<<<< HEAD
<<<<<<< HEAD

=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const renderActionButtons = () => {
    switch (application.status) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx
      case "shortlisted": return (
          <Button variant="default" size="sm">;
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview;
          </Button>;
        );
      case "interview":;
        return (
          <Button variant="default" size="sm">;
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details;
          </Button>;
        );
      case "hired":;
        return (
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">;
            <FileText className="h-4 w-4 mr-1" /> View Offer;
          </Button>;
        );
      case "rejected":;
        return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx

========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx
          <Button variant="outline" size="sm">;
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback;
          </Button>;
        ),;
      default:;
        return null;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx

    }
<<<<<<< HEAD
=======
  }
=======
    }

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  return (

========
    }
<<<<<<< HEAD
  }
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;
<<<<<<< HEAD
      <CardContent className="pb - 3">;
        <ApplicationProgress status={application.status} className="my - 4" />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx

        {expanded && (
          <div className="mt - 4 space - y-3">;
            {application.cover_letter && (
<<<<<<< HEAD
=======
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======

=======

=======
<<<<<<< HEAD
            )}
          </div>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    }
  };
  return (;
<<<<<<< HEAD

========
        {expanded && (
          <div className="mt - 4 space - y-3">;
            {application.cover_letter && (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <div className="flex justify-between items-start">;
          <div>;
<<<<<<< HEAD
            <CardTitle>{application && application.job?.title || "Unknown Job"}</CardTitle>;
            <div className="text-sm text-muted-foreground mt-1">;
              Applied {formatDistanceToNow(new Date(application && application.created_at), { addSuffix: true })}
            </div>;
          </div>;
          <StatusBadge status={application && application.status} />;
        </div>;
      </CardHeader>;
      <CardContent className="pb-3">;
        <ApplicationProgress status={application && application.status} className="my-4" />;
        {expanded && (;
          <div className="mt-4 space-y-3">;
            {application && application.cover_letter && (;
              <div>;
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>;
                <p className="text-sm text-muted-foreground">{application && application.cover_letter}</p>;
              </div>;
            )}
            {application && application.resume && (;
=======
      ;
      <CardContent className="pb-3">;
        <ApplicationProgress status={application.status} className="my-4" />;
        ;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {expanded && (;
          <div className="mt-4 space-y-3">;
            {application.cover_letter && (;
              <div>;
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>;
                <p className="text-sm text-muted-foreground">{application.cover_letter}</p>;
              </div>;
            )}
<<<<<<< HEAD
            ;
            {application.resume && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
;
            {application.resume && (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className="border rounded-md p-3 bg-muted/20">;
                <div className="flex justify-between items-center">;
                  <div className="flex items-center">;
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />;
<<<<<<< HEAD
<<<<<<< HEAD
                    <span className="text-sm font-medium">{application && application.resume.title || "Resume"}</span>;
=======
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>;
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>;
                    <Download className="h-3 w-3 mr-1" /> Download;
                  </Button>;
                </div>;
              </div>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD
            {application && application.match_score && (;
=======
            ;
            {application.match_score && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
;
            {application.match_score && (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div>;
                <h4 className="text-sm font-medium mb-1">Match Score</h4>;
                <div className="flex items-center">;
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">;
<<<<<<< HEAD
<<<<<<< HEAD
                    {application && application.match_score}%;
=======
                    {application.match_score}%;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>;
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>;
                </div>;
              </div>;
            )}
          </div>;
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx
      </CardContent>;
      <CardFooter className="flex flex-col gap-3 pt-0">;
        <div className="flex justify-between items-center w-full">;
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx
            {expanded ? "Show Less" : "Show More"}
          </Button>;
          <div className="flex gap-2">;
            {renderActionButtons()}
            <Button
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======


        <Button 
          variant="secondary" 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
        <Button
          variant="secondary"
=======
        <Button 
          variant="secondary" 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          size="sm"
          className="w-full"
          asChild
        >
          <Link to={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx
              variant="outline" 
              size="sm"
              asChild>;
              <Link to={`/jobs/${application && application.job_id}`}>;
                <ExternalLink className="h-4 w-4 mr-1" /> View Job;
              <div>;
                <h4 className="text - sm font - medium mb - 1">Your Cover Letter</h4>;
                <p className="text - sm text - muted - foreground">{application.cover_letter}</p>;
              </div>)}
            {application.resume && (
              <div className="border rounded - md p - 3 bg - muted / 20">;
                <div className="flex justify - between items - center">;
                  <div className="flex items - center">;
                    <FileText className="h - 4 w - 4 mr - 2 text - blue - 500" />;
                    <span className="text - sm font - medium">{application.resume.title || "Resume"}</span>;
                  </div>;
                  <Button variant="ghost" size="sm" on_click={handleDownloadResume}>;
                    <Download className="h - 3 w - 3 mr - 1" /> Download;
                  </Button>;
                </div>;
              </div>)}
            {application.match_score && (
              <div>;
                <h4 className="text - sm font - medium mb - 1">Match Score</h4>;
                <div className="flex items - center">;
                  <div className="h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium">;
                    {application.match_score}%;
                  </div>;
                  <span className="ml - 2 text - xs text - muted - foreground">Relevance to job requirements</span>;
                </div>;
              </div>)}
          </div>)}
      </CardContent>;
      <CardFooter className="flex flex - col gap - 3 pt - 0">;
        <div className="flex justify - between items - center w - full">;
          <Button variant="ghost" size="sm" on_click={() => set_expanded (!expanded)}>;
            {expanded ? "Show Less" : "Show More"}
          </Button>;
          <div className="flex gap - 2">;
            {renderActionButtons ()}
            <Button;
              variant="outline";
              size="sm";
              as_child;
            >;
              <Link to={`/jobs/${application.job_id}`}>;
                <ExternalLink className="h - 4 w - 4 mr - 1" /> View Job;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx

========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx
              </Link>;
            </Button>;
          </div>;
        </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx
        <Button;
          variant="secondary";
          size="sm";
          className="w - full";
          as_child;
        >;
          <Link to={`/messages?job_id=${application.job_id}`}>;
            <MessageSquare className="h - 4 w - 4 mr - 1" /> Message Client;
          </Link>;
        </Button>;
      </CardFooter>;
    </Card>);
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx

=======

}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
        ;
        <Button ;
          variant="secondary" ;
          size="sm";
          className="w-full";
          asChild;
        >;
          <Link to={`/messages?jobId=${application.job_id}`}>;
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client;
          </Link>;
        </Button>;
      </CardFooter>;
    </Card>;
  ),;}
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
}</p> </div>) 
}</Button> </div> </div>) 
}{
  application.match score && (<div> <h4 className="text-sm font-medium mb-1" >Match Score</h4> <div className="flex items-center" > <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium" > {
  application.match score 
}% </div> <span className="ml-2 text-xs text-muted-foreground" >Relevance to job requirements</span> </div> </div>) 
}</div>) 
}</CardContent> <Button variant="outline" size="sm" asChild > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w-full" asChild > </Link> </Button> </CardFooter> </Card>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/applications/ApplicationCard.tsx
=======
<<<<<<< HEAD
}
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
