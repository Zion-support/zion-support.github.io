<<<<<<< HEAD
import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { JobApplication } from '@/types/jobs'
import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
  FileText
  MessageSquare
  HelpCircle
  Calendar
  ExternalLink
  Download
} from 'lucide-react'
import Link from 'next/link'
import { StatusBadge } from './StatusBadge'
import { ApplicationProgress } from './ApplicationProgress'
import { toast } from 'sonner'
import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { JobApplication } from "@/types/jobs"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react'; import Link from "next/link"
import { StatusBadge } from "./StatusBadge"
import { ApplicationProgress } from "./ApplicationProgress"
import { toast } from "sonner"

interface ApplicationCardProps {
  application: JobApplication
export function ApplicationCard({ application }: ApplicationCardProps) {
  const [ expanded, setExpanded ] = useState(false)
  const handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info('Resume download functionality will be implemented soon') }
  const renderActionButtons = () => {
    switch (application.status) {interface ApplicationCardProps {
  application: JobApplication
}
export function ApplicationCard({ application }: ApplicationCardProps) {

import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react'
import Link from "next/link",
import { StatusBadge } from "./StatusBadge",
import { ApplicationProgress } from "./ApplicationProgress",
import { toast } from "sonner",
interface ApplicationCardProps {
  application: JobApplication
application: JobApplication
}

xport function ApplicationCard({ application }: ApplicationCardProps) {
export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),

  const handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon")
  },
    toast.info('Resume download functionality will be implemented soon') }
  const renderActionButtons = () => {
    switch (application.status) {interface ApplicationCardProps {
  application: JobApplication
}

  const [expanded, setExpanded] = useState(false)
  const handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon")
=======
application: JobApplication

}

import { useState } from 'react';
import { formatDistanceToNow } from 'date - fns';
import { JobApplication } from '@/types / jobs';
import { Button } from '@/components / ui / button';

import {

  Card,
  CardContent,
  CardFooter,
  CardHeader,

  FileText,
  MessageSquare,
  HelpCircle,
  Calendar,
  ExternalLink,

import { useState } from "react",;
import { formatDistanceToNow } from "date-fns",;
import { JobApplication } from "@/types/jobs",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react'
import Link from "next/link",;
import { StatusBadge } from "./StatusBadge",;
import { ApplicationProgress } from "./ApplicationProgress";
import { toast } from "sonner";
origin/cursor/automate-test-improve-and-merge-code-2533
interface ApplicationCardProps {
<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
=======
  application: JobApplication;
export /**
 * ApplicationCard - Function description
 */
function ApplicationCard() {
  const [ expanded, set_expanded ] = useState (false),
  const handleDownloadResume = () =>: any {
    // This would typically download the resume file;
    toast.info ('Resume download functionality will be implemented soon') }
  const renderActionButtons = () =>: any {
    switch (application.status) {interface ApplicationCardProps {
  application: JobApplication;
}
export /**
 * ApplicationCard - Function description
 */
function ApplicationCard() {
  const [expanded, set_expanded] = useState (false);
  const handleDownloadResume = () =>: any {
    // This would typically download the resume file;
    toast.info ("Resume download functionality will be implemented soon");

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
    toast.info("Resume download functionality will be implemented soon")
  },
                addSuffix: true
              })}            </div>            <CardTitle>{application.job?.title |"Unknown Job"}</CardTitle>
  const renderActionButtons = () => {
    switch (application.status) {
<<<<<<< HEAD
      case 'shortlisted':
        return (
          <Button variant='default' size='sm'>
            <Calendar className='h-4 w-4 mr-1' /> Prepare for Interview
        )
      case 'interview':
        return (
          <Button variant='default' size='sm'>
            <Calendar className='h-4 w-4 mr-1' /> View Interview Details
          </Button>
        )
      case 'hired':
          >
            <FileText className='h-4 w-4 mr-1' /> View Offer
          </Button>
        )
      case 'rejected':
=======
      case 'shortlisted':;
        return (
          <Button variant='default' size='sm'>;
            <Calendar className='h - 4 w - 4 mr - 1' /> Prepare for Interview);
      case 'interview':;
        return (

          <Button variant='default' size='sm'>;
            <Calendar className='h - 4 w - 4 mr - 1' /> View Interview Details;
          </Button>);
      case 'hired':;
          >;
            <FileText className='h - 4 w - 4 mr - 1' /> View Offer;
          </Button>);
      case 'rejected':;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return (
          <Button variant='outline' size='sm'>
            <HelpCircle className='h-4 w-4 mr-1' /> View Feedback
          </Button>
        )
      default:
        return null
    }
  }

  return (
<<<<<<< HEAD
    <Card className='overflow-hidden'>
      <CardHeader className='pb-3'>
        <div className='flex justify-between items-start'>
          <div>
            <CardTitle>{application.job?.title |'Unknown Job'}</CardTitle>
            <div className='text-sm text-muted-foreground mt-1'>
              Applied{' '}
              {formatDistanceToNow(new Date(application.created_at), {
                addSuffix: true
              })}            </div>            <CardTitle>{application.job?.title |"Unknown Job"}</CardTitle>
                addSuffix: true,
              })}            </div>            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>
    toast.info("Resume download functionality will be implemented soon")
  },
=======

  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
        ),
      default:
        return null
    }
  },

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx

export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),

  const handleDownloadResume = () => {
    // This would typically download the resume file

  const [expanded, setExpanded] = useState(false)
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon")
  }

  const renderActionButtons = () =>: any {
    switch (application.status) {

  application: JobApplication;
export /**;
 * ApplicationCard - Function description;
 */

  const [expanded, set_expanded] = useState (false);
  const handleDownloadResume = () =>: any {}
    // This would typically download the resume file;
    toast.info ("Resume download functionality will be implemented soon");

  }
  const renderActionButtons = () => {}
    switch (application.status) {'
      case 'shortlisted':;

    toast.info('Resume download functionality will be implemented soon') }
  const renderActionButtons = () => {
    switch (application.status) {interface ApplicationCardProps {
  application: JobApplication
}
export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false);
  const handleDownloadResume = null;

        return (
          <Button variant='default' size='sm'>;
            <Calendar className='h - 4 w - 4 mr - 1' /> Prepare for,  Interview);
      case 'interview':;
        return (

          <Button variant='default' size='sm'>;

            <Calendar className='h - 4 w - 4 mr - 1' /> View Interview Details;
          </Button>);'
      case 'hired':;
          >;'
            <FileText className='h - 4 w - 4 mr - 1' /> View Offer;
          </Button>);'
      case 'rejected':;

          </Button>
        )
      default:
        return null;
    }
  }

origin/cursor/automate-test-improve-and-merge-code-2533
  return (
  };

      case "shortlisted": return (
          <Button variant="default" size="sm">
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview
          </Button>

      case "interview":
        return ("
          <Button variant="default" size="sm">"
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details;
          </Button>

      case "hired":
        return ("
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">"
            <FileText className="h-4 w-4 mr-1" /> View Offer;
          </Button>

      case "rejected":
        return ("
          <Button variant="outline" size="sm">"
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback;
          </Button>

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>

            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>

            <div className="text-sm text-muted-foreground mt-1">
<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}

            <CardTitle>{application.job?.title |'Unknown Job'}</CardTitle>
            <div className='text-sm text-muted-foreground mt-1'>
              Applied{' '}
              {formatDistanceToNow(new Date(application.created_at), {
                addSuffix: true,
              })}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
            </div>
          </div>
          <StatusBadge status={application.status} />
        </div>
      </CardHeader>
<<<<<<< HEAD
      <CardContent className='pb-3'>
        <ApplicationProgress status={application.status} className='my-4' />

=======

    <Card className='overflow - hidden'>;
      <CardHeader className='pb - 3'>;

        <div className='flex justify - between items - start'>;

            <div className="text - sm text - muted - foreground mt - 1">;
              Applied {formatDistanceToNow (new Date (application.created_at), { add_suffix: true })}
            </div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;'
      <CardContent className='pb - 3'>;'
        <ApplicationProgress status={application.status} className='my - 4' />;
      <CardContent className="pb-3">"
        <ApplicationProgress status={application.status} className="my-4" />"

<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
      <CardContent className="pb-3">

        <ApplicationProgress status={application.status} className="my-4" />

<CardContent className='pb-3'>
        <ApplicationProgress status={application.status} className='my-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
        {expanded && (

          <div className='mt - 4 space - y-3'>;
<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
            {application.cover_letter && (
              <div>;'
                <h4 className='text - sm font - medium mb - 1'>Your Cover Letter</h4>;'
=======
              <div>;
                <h4 className='text - sm font - medium mb - 1'>Your Cover Letter</h4>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
                <p className='text - sm text - muted - foreground'>;
                  {application.cover_letter}

import { formatDistanceToNow } from 'date-fns';
import { JobApplication } from '@/types/jobs';

import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
  CardTitle,;'
} from '@/components/ui/card';
  FileText,;
  MessageSquare,;
  HelpCircle,;
  Calendar,;
  ExternalLink,;
  Download,;'
} from 'lucide-react';'
import Link from 'next/link';'
import { StatusBadge } from './StatusBadge';'
import { ApplicationProgress } from './ApplicationProgress';'
import { toast } from 'sonner';

interface ApplicationCardProps {;
  application: JobApplication;,
export function ApplicationCard(): any ({ application }:,  ApplicationCardProps) {;,
  const [ expanded, setExpanded ] = useState(false),;
  const handleDownloadResume = () => {;
    // This would typically download the resume file;'
    toast && toast.info('Resume download functionality will be implemented soon');  };
  const renderActionButtons = () => {;
    switch (application && application.status) {interface ApplicationCardProps {;
  application: JobApplication;
}
export function ApplicationCard(): any ({ application }:,  ApplicationCardProps) {;,

              {formatDistanceToNow(new Date(application && application.created_at), {;
                addSuffix: true,;"
              })}            </div>            <CardTitle>{application && application.job?.title || "Unknown Job"}</CardTitle>;"
            <div className="text-sm text-muted-foreground mt-1">;
              Applied {formatDistanceToNow(new Date(application && application.created_at), { addSuffix: true })}
            </div>;
          </div>;
          <StatusBadge status={application && application.status} />;
        </div>;
      </CardHeader>;

          <div className='mt-4 space-y-3'>;
            {application && application.cover_letter && (;
              <div>;'
                <h4 className='text-sm font-medium mb-1'>Your Cover Letter</h4>;'
                <p className='text-sm text-muted-foreground'>;
                  {application && application.cover_letter}
                </p>;
              </div>;
            )}
      <CardContent className='pb-3'>
        <ApplicationProgress status={application.status} className='my-4' />
      
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
              <div className='border rounded-md p-3 bg-muted/20'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center'>
                    <FileText className='h-4 w-4 mr-2 text-blue-500' />
                    <span className='text-sm font-medium'>
                      {application.resume.title |'Resume'}
                    </span>
                  </div>

<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
                    onClick={handleDownloadResume}

=======
            {application && application.resume && (;
              <div className='border rounded-md p-3 bg-muted/20'>;
                <div className='flex justify-between items-center'>;
                  <div className='flex items-center'>;
                    <FileText className='h-4 w-4 mr-2 text-blue-500' />;
                    <span className='text-sm font-medium'>;
                      {application && application.resume.title || 'Resume'}
                    </span>;
                  </div>;
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={handleDownloadResume}
                  >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
                    <Download className='h-3 w-3 mr-1' /> Download                  </Button>
                </div>
              </div>
            )}
<<<<<<< HEAD
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
            
            {application.resume && (
              <div className="border rounded-md p-3 bg-muted/20">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>
                  </div>
=======

      <CardContent className="pb-3">

        <ApplicationProgress status={application.status} className="my-4" />

                </p>;
              </div>)}

                    size='sm';
                    on_click={handleDownloadResume}
                  >;'
                    <Download className='h - 3 w - 3 mr - 1' /> Download                  </Button>;
                </div>;
              </div>)}
<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
=======
        {expanded && (
          <div className="mt-4 space-y-3">
            {application.cover_letter && (



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>
                    <Download className="h-3 w-3 mr-1" /> Download
                    <Download className='h-3 w-3 mr-1' /> Download
origin/cursor/automate-test-improve-and-merge-code-2533

                  </Button>
                </div>
              </div>
            )}

<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
              <div>;"
                <h4 className="text - sm font - medium mb - 1">Your Cover Letter</h4>;"
=======
<<<<<<< HEAD


            {application.match_score && (
              <div>
                <h4 className='text-sm font-medium mb-1'>Match Score</h4>
                <div className='flex items-center'>
                  <div className='h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium'>
                    {application.match_score}%
                  </div>
                  <span className='ml-2 text-xs text-muted-foreground'>
                    Relevance to job requirements
                  </span>                </div>            {application.match_score && (
              <div>
ursor/fix-website-loading-errors-and-merge-6662
=======
              <div>;
                <h4 className="text - sm font - medium mb - 1">Your Cover Letter</h4>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
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
origin/cursor/automate-test-improve-and-merge-code-2533
              <div>
                <h4 className='text-sm font-medium mb-1'>Match Score</h4>
                <div className='flex items-center'>
                  <div className='h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium'>
                    {application.match_score}%
                  </div>
                  <span className='ml-2 text-xs text-muted-foreground'>
                    Relevance to job requirements

<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
=======


            {application.match_score && (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
              <div>;
                <h4 className='text - sm font - medium mb - 1'>Match Score</h4>;
                <div className='flex items - center'>;

                  <div className='h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium'>;
                    {application.match_score}%;
                  </div>;'
                  <span className='ml - 2 text - xs text - muted - foreground'>;
                    Relevance to job requirements;
                  </span>                </div>            {application.match_score && (
<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx

=======
              <div>
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
            {application.match_score && (

              <div>
ursor/fix-website-loading-errors-and-merge-6662
            
            {application.match_score && (
              <div>
            
            {application.match_score && (
              <div>

<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
              <div>
=======


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <h4 className="text-sm font-medium mb-1">Match Score</h4>
<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
                <div className="flex items-center">

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">
                    {application.match_score}%
                  </div>"
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>
                  </span>
origin/cursor/automate-test-improve-and-merge-code-2533
                </div>
              </div>
<<<<<<< HEAD
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className='flex flex-col gap-3 pt-0'>
        <div className='flex justify-between items-center w-full'>
          <Button
            variant='ghost'
            size='sm'
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show Less' : 'Show More'}

=======

<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useState } from "react",;
import { formatDistanceToNow } from "date-fns",;
import { JobApplication } from "@/types/jobs",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react';
import { ApplicationProgress } from "./ApplicationProgress",;

import { toast } from "sonner",;
interface ApplicationCardProps {;
  application: JobApplication;
}
;

  },;
    switch (application.status) {;"
      case "shortlisted": return (;"
          <Button variant="default" size="sm">;"
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview;
          </Button>;
        ),;"
      case "interview":;
        return (;"
          <Button variant="default" size="sm">;"
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details;
          </Button>;
        ),;"
      case "hired":;
        return (;"
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">;"
            <FileText className="h-4 w-4 mr-1" /> View Offer;
          </Button>;
        ),;"
      case "rejected":;
        return (;"
          <Button variant="outline" size="sm">;"
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback;
          </Button>;
        );
      default:;,
      default:;
        return null;
    }
  };
  return (;"
    <Card className="overflow-hidden">;"
      <CardHeader className="pb-3">;"
        <div className="flex justify-between items-start">;
          <div>;"
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>;"
            <div className="text-sm text-muted-foreground mt-1">;
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;"
      <CardContent className="pb-3">;"
        <ApplicationProgress status={application.status} className="my-4" />;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {expanded && (;

          <div className="mt-4 space-y-3">;
            {application.cover_letter && (;
<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
              <div>;"
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>;"
=======
              <div>;
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
                <p className="text-sm text-muted-foreground">{application.cover_letter}</p>;
              </div>;
            )}

;
            {application.resume && (;
              <div className="border rounded-md p-3 bg-muted/20">;
                <div className="flex justify-between items-center">;
                  <div className="flex items-center">;
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />;
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>;
                  </div>;
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>;
                    <Download className="h-3 w-3 mr-1" /> Download;
                  </Button>;
                </div>;
              </div>;

<<<<<<< HEAD
            )}
<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
;
            {application.match_score && (;
              <div>;"
                <h4 className="text-sm font-medium mb-1">Match Score</h4>;"
                <div className="flex items-center">;"
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">;
                    {application.match_score}%;
                  </div>;"
=======

            {application && application.match_score && (;
              <div>;
                <h4 className='text-sm font-medium mb-1'>Match Score</h4>;
                <div className='flex items-center'>;
                  <div className='h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium'>;
                    {application && application.match_score}%;
                  </div>;
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>;
                    <Download className="h-3 w-3 mr-1" /> Download;
                  </Button>;
                </div>;
              </div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            )}
;
            {application.match_score && (;
              <div>;
                <h4 className="text-sm font-medium mb-1">Match Score</h4>;
                <div className="flex items-center">;
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">;
                    {application.match_score}%;
                  </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>;
                </div>;
              </div>;
            )}
          </div>;
        )}
<<<<<<< HEAD
=======

      </CardContent>
<CardFooter className='flex flex-col gap-3 pt-0'>
        <div className='flex justify-between items-center w-full'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <Button

            size='sm'
            onClick={() => setExpanded(!expanded)}
          >;'
            {expanded ? 'Show Less' : 'Show More'}
<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
          </Button>;'
          <div className='flex gap-2'>;
            {renderActionButtons()}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </Button>;
          <div className='flex gap-2'>;
            {renderActionButtons()}

          </div>
        )}

      </CardContent>
      
      <CardFooter className="flex flex-col gap-3 pt-0">
        <div className="flex justify-between items-center w-full">
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less" : "Show More"}
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
          </Button>

          <div className="flex gap-2">
            {renderActionButtons()}
            <Button "
              variant="outline" "
              size="sm"
              asChild;
            >

                    <Download className='h - 3 w - 3 mr - 1' /> Download                  ;

              </div>)}
          <div className="mt-4 space-y-3">"
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>"
                    <Download className="h-3 w-3 mr-1" /> Download;"

                <h4 className="text - sm font - medium mb - 1">Your Cover Letter</h4>;""
                <p className="text - sm text - muted - foreground">{application.cover_letter}</p>;"
              <div className="border rounded - md p - 3 bg - muted / 20">;"
                <div className="flex justify - between items - center">;"
                  <div className="flex items - center">;"
                    <FileText className="h - 4 w - 4 mr - 2 text - blue - 500" />;"
                    <span className="text - sm font - medium">{application.resume.title || "Resume"}</span>;"
                  </div>;"
                  <Button variant="ghost" size="sm" on_click={handleDownloadResume}>;"
                    <Download className="h - 3 w - 3 mr - 1" /> Download;"

                <h4 className='text - sm font - medium mb - 1'>Match Score</h4>;
                  <div className='h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium'>;
                  <span className='ml - 2 text - xs text - muted - foreground'>;
                  </span>                </div>            {application.match_score && (

                <h4 className="text-sm font-medium mb-1">Match Score</h4>""
                <div className="flex items-center">"
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">"
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>"
          <Button variant="default" size="sm">;"

          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">;"

          <Button variant="outline" size="sm">;"

    <Card className="overflow-hidden">;"
      <CardHeader className="pb-3">;"
        <div className="flex justify-between items-start">;"
            <CardTitle>{application.job?.title || "Unknown Job"};""

      <CardContent className="pb-3">;"
        <ApplicationProgress status={application.status} className="my-4" />;"
          <div className="mt-4 space-y-3">;"
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>;""
                <p className="text-sm text-muted-foreground">{application.cover_letter}</p>;"
                <h4 className="text-sm font-medium mb-1">Match Score</h4>;""
                <div className="flex items-center">;"
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">;"
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>;"
          <Button;"
            size='sm)
            onClick={() => setExpanded(!expanded)}

          <div className='flex gap-2'>;
      <CardFooter className="flex flex-col gap-3 pt-0">"
        <div className="flex justify-between items-center w-full">"
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>"

          <div className="flex gap-2">"
              variant="outline"""
              size="sm""
              asChild;

pr-12325
              <Link href={`/jobs/${application.job_id}`}>
<<<<<<< HEAD
                <ExternalLink className='h-4 w-4 mr-1' /> View Job              </Link>
            </Button>
          </div>
        </div>
        <Button variant='secondary' size='sm' className='w-full' asChild>
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client          </Link>          </Button>
          <div className="flex gap-2">
            {renderActionButtons()}
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <Link href={`/jobs/${application.job_id}`}>
                <ExternalLink className="h-4 w-4 mr-1" /> View Job
            </Button>
          </div>
        </div>



=======

<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
                <ExternalLink className="h-4 w-4 mr-1" /> View Job

            <Button variant='outline' size='sm' asChild>
              <Link href={`/jobs/${application.job_id}`}>
                <ExternalLink className='h-4 w-4 mr-1' /> View Job
origin/cursor/automate-test-improve-and-merge-code-2533

              </Link>
            </Button>
          </div>
        </div>

<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client        
=======
        

<<<<<<< HEAD
        
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client        
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx

        <Button 
          variant="secondary" 

            <MessageSquare className='h-4 w-4 mr-1' /> Message Client
        <Button
          variant="secondary"
          variant="secondary" 
ursor/fix-website-loading-errors-and-merge-6662
        <Button 
          variant="secondary" 
        <Button variant='secondary' size='sm' className='w-full' asChild>
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client
        <Button
          variant="secondary"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client        
        
        <Button 
          variant="secondary" 
<<<<<<< HEAD
        <Button 
          variant="secondary" 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          size="sm"
          asChild
        >
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client
<<<<<<< HEAD
      </CardFooter>
    </Card>
  )
          </Link>
}% </div> <span className="ml-2 text-xs text-muted-foreground" >Relevance to job requirements</span> </div> </div>)
}</div>) "
}</CardContent> <Button variant="outline" size="sm" asChild > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w-full" asChild > </Link> </Button> </CardFooter> </Card>)
}"
}
=======

          </Link>

        </Button>
      </CardFooter>
    </Card>
  )
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
                <ExternalLink className='h-4 w-4 mr-1' /> View Job              </Link>;
            </Button>;
          </div>;
        </div>;

                <ExternalLink className="h-4 w-4 mr-1" /> View Job;
=======

        </Button>
      </CardFooter>
    </Card>
  )


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
}
;

              <div>;
                <h4 className="text - sm font - medium mb - 1">Match Score</h4>;
                <div className="flex items - center">;

                  <div className="h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium">;
                    {application.match_score}%;
                  </div>;"
                  <span className="ml - 2 text - xs text - muted - foreground">Relevance to job requirements</span>;
                </div>;
              </div>)}
          </div>)}
      </CardContent>;'
      <CardFooter className='flex flex - col gap - 3 pt - 0'>;'
        <div className='flex justify - between items - center w - full'>;
          <Button;'
            variant='ghost';'
            size='sm';
            on_click={() => set_expanded (!expanded)}

          <div className="flex gap - 2">;
            {renderActionButtons ()}
            <Button;"
              variant="outline";"
              size="sm";
              as_child;

                <ExternalLink className="h - 4 w - 4 mr - 1" /> View Job;
              </Link>;
            </Button>;
          </div>;
        </div>;
}

          </Link>
        </Button>
      </CardFooter>
    </Card>

            <MessageSquare className='h - 4 w - 4 mr - 1' /> Message Client;
        <Button;"
          variant="secondary";"
          size="sm";"
          className="w - full";
          as_child;

<Button variant='secondary' size='sm' className='w-full' asChild>
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
default: return (<Card className="overflow-hidden" > <CardHeader className="pb-3" > <div className="flex justify-between items-start" > <div> </div> </div> <StatusBadge status= {;
  application.status ;
}/> </div> </CardHeader> {";
  application.cover letter && (<div> <h4 className="text-sm font-medium mb-1" >Your Cover Letter</h4> <p className="text-sm text-muted-foreground" > {;
  application.cover letter ;
}</p> </div>) ;
}</Button> </div> </div>) ;
}{";
  application.match score && (<div> <h4 className="text-sm font-medium mb-1" >Match Score</h4> <div className="flex items-center" > <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium" > {;
  application.match score ";
<<<<<<< HEAD:src-disabled/components/jobs/applications/ApplicationCard.tsx
}% </div> <span className="ml-2 text-xs text-muted-foreground" >Relevance to job requirements</span> </div> </div>) ;
}</div>) ";
}</CardContent> <Button variant="outline" size="sm" asChild > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w-full" asChild > </Link> </Button> </CardFooter> </Card>) ;
}"
=======
}% </div> <span className="ml - 2 text - xs text - muted - foreground" >Relevance to job requirements</span> </div> </div>);
}</CardContent> <Button variant="outline" size="sm" as_child > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w - full" as_child > </Link> </Button> </CardFooter> </Card>);
}";
<<<<<<< HEAD
}
;
}
;
}% </div> <span className="ml-2 text-xs text-muted-foreground" >Relevance to job requirements</span> </div> </div>) 
}</div>) ";
}</CardContent> <Button variant="outline" size="sm" asChild > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w-full" asChild > </Link> </Button> </CardFooter> </Card>) ;
}";
};
}
}
}
;
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/components/jobs/applications/ApplicationCard.tsx
