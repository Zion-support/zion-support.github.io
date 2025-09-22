:src_backup/components/jobs/applications/ApplicationCard.tsx
application: JobApplication
:src_backup/components/jobs/applications/ApplicationCard.tsx
}

:src_backup/components/jobs/applications/ApplicationCard.tsx
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
import { useState } from 'react';
import { formatDistanceToNow } from 'date - fns';
import { JobApplication } from '@/types / jobs';
import { Button } from '@/components / ui / button';
:src_backup/components/jobs/applications/ApplicationCard.tsx
import {
import { useState } from 'react';'
import { formatDistanceToNow } from 'date - fns';'
import { JobApplication } from '@/types / jobs';'
import { Button } from '@/components / ui / button';
import {}
import {
import { JobApplication } from '@/types/ jobs';
import { Button } from '@/components/ui/ button';
import {
  // TODO: Implement
pr-12325
  Card,
  CardContent,
  CardFooter,
  CardHeader,
:src_backup/components/jobs/applications/ApplicationCard.tsx
  CardTitle,';
} from '@/components / ui / card';
  FileText,
  MessageSquare,
  HelpCircle,
  Calendar,
  ExternalLink,
:src_backup/components/jobs/applications/ApplicationCard.tsx
  Download,'
} from 'lucide-react';'
import Link from 'next / link';'
import { StatusBadge } from './StatusBadge';'
import { ApplicationProgress } from './ApplicationProgress';'
import { toast } from 'sonner';'
import { useState  } from './react';'
import { formatDistanceToNow  } from './date - fns';'
import { JobApplication  } from '@/types / jobs';'
import { Button  } from '@/components / ui / button';'
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';'
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react'; import Link from './next / link';'
import { StatusBadge  } from './StatusBadge';'
import { ApplicationProgress  } from './ApplicationProgress';'
import { toast  } from './sonner';
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
:src_backup/components/jobs/applications/ApplicationCard.tsx

export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),

  const handleDownloadResume = () => {
    // This would typically download the resume file
:src_backup/components/jobs/applications/ApplicationCard.tsx

  const [expanded, setExpanded] = useState(false)
  const handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon")
  }
:src_backup/components/jobs/applications/ApplicationCard.tsx
  const renderActionButtons = () =>: any {
    switch (application.status) {
interface ApplicationCardProps {}
  application: JobApplication;
export /**;
 * ApplicationCard - Function description;
 */
:src_backup/components/jobs/applications/ApplicationCard.tsx
function ApplicationCard() {}
  const [ expanded, set_expanded ] = useState (false),
  const handleDownloadResume = () =>: any {}
    // This would typically download the resume file;'
    toast.info ('Resume download functionality will be implemented soon') }
  const renderActionButtons = () =>: any {}
    switch (application.status) {interface ApplicationCardProps {}
  application: JobApplication;
}
export /**;
 * ApplicationCard - Function description;
 */
function ApplicationCard() {}
  const [expanded, set_expanded] = useState (false);
  const handleDownloadResume = () =>: any {}
    // This would typically download the resume file;
    toast.info ("Resume download functionality will be implemented soon");
:src_backup/components/jobs/applications/ApplicationCard.tsx

export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),
  }
  const renderActionButtons = () => {}
    switch (application.status) {'
      case 'shortlisted':;
:src_backup/components/jobs/applications/ApplicationCard.tsx
    toast.info('Resume download functionality will be implemented soon') }
  const renderActionButtons = () => {
    switch (application.status) {interface ApplicationCardProps {
  application: JobApplication
}
export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false);
  const handleDownloadResume = null;
:src/components/jobs/applications/ApplicationCard.tsx
        return (
          <Button variant='default' size='sm'>;
            <Calendar className='h - 4 w - 4 mr - 1' /> Prepare for,  Interview);
      case 'interview':;
        return (
:src_backup/components/jobs/applications/ApplicationCard.tsx

  const handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon")
  },
          <Button variant='default' size='sm'>;
        return ('
          <Button variant='default' size='sm'>;'
            <Calendar className='h - 4 w - 4 mr - 1' /> Prepare for Interview);'
      case 'interview':;
        return (
'
          <Button variant='default' size='sm'>;'
            <Calendar className='h - 4 w - 4 mr - 1' /> View Interview Details;
          </Button>);'
      case 'hired':;
          >;'
            <FileText className='h - 4 w - 4 mr - 1' /> View Offer;
          </Button>);'
      case 'rejected':;
:src_backup/components/jobs/applications/ApplicationCard.tsx

        return (
          <Button variant='outline' size='sm'>
            <HelpCircle className='h-4 w-4 mr-1' /> View Feedback
          </Button>
        )
      default:
        return null;
    }
  }
:src_backup/components/jobs/applications/ApplicationCard.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
  };
:src_backup/components/jobs/applications/ApplicationCard.tsx

:src_backup/components/jobs/applications/ApplicationCard.tsx
  const renderActionButtons = () => {
    switch (application.status) {
  }
  const renderActionButtons = () => {
    switch (application.status) {


  }
  const renderActionButtons = () => {
    switch (application.status) {
      case "shortlisted": return (
          <Button variant="default" size="sm">
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview
          </Button>
:src/components/jobs/applications/ApplicationCard.tsx

  const renderActionButtons = () => {}
    switch (application.status) {"
      case "shortlisted": return ("
          <Button variant="default" size="sm">"
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview;
          </Button>
        ),"
      case "interview":
        return ("
          <Button variant="default" size="sm">"
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details;
          </Button>
:src_backup/components/jobs/applications/ApplicationCard.tsx

      case "hired":
        return ("
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">"
            <FileText className="h-4 w-4 mr-1" /> View Offer;
          </Button>
:src_backup/components/jobs/applications/ApplicationCard.tsx

      case "rejected":
        return ("
          <Button variant="outline" size="sm">"
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback;
          </Button>
:src/components/jobs/applications/ApplicationCard.tsx
  return (
    <Card className="overflow-hidden">"
      <CardHeader className="pb-3">"
        <div className="flex justify-between items-start">"
          <div>
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>"
export function ApplicationCard({ application }:,  ApplicationCardProps) {,
  const [expanded, setExpanded] = useState(false),
  const handleDownloadResume = () => {
    // This would typically download the resume file
            <div className="text-sm text-muted-foreground mt-1">"

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
:src_backup/components/jobs/applications/ApplicationCard.tsx
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>
            <div className="text-sm text-muted-foreground mt-1">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>
            <div className="text-sm text-muted-foreground mt-1">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            <CardTitle>{application.job?.title |'Unknown Job'}</CardTitle>
            <div className='text-sm text-muted-foreground mt-1'>
              Applied{' '}
              {formatDistanceToNow(new Date(application.created_at), {
                addSuffix: true,
              })}
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
          </div>
          <StatusBadge status={application.status} />
        </div>
      </CardHeader>
:src_backup/components/jobs/applications/ApplicationCard.tsx

    <Card className='overflow - hidden'>;
      <CardHeader className='pb - 3'>;
'
    <Card className='overflow - hidden'>;'
      <CardHeader className='pb - 3'>;'
        <div className='flex justify - between items - start'>;
:src_backup/components/jobs/applications/ApplicationCard.tsx
          <div>;'
            <CardTitle>{application.job?.title || 'Unknown Job'}</CardTitle>;'
            <div className='text - sm text - muted - foreground mt - 1'>;'
              Applied{' '}
              {formatDistanceToNow (new Date (application.created_at), {}
                add_suffix: true,"
              })}            </div>            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>;"
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

:src_backup/components/jobs/applications/ApplicationCard.tsx
      <CardContent className="pb-3">
      "
      <CardContent className="pb-3">"
        <ApplicationProgress status={application.status} className="my-4" />
:src_backup/components/jobs/applications/ApplicationCard.tsx

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
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>
                  </div>

<CardContent className='pb-3'>
        <ApplicationProgress status={application.status} className='my-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
        {expanded && (
        {expanded && ('
          <div className='mt - 4 space - y-3'>;
            {application.cover_letter && (
              <div>;'
                <h4 className='text - sm font - medium mb - 1'>Your Cover Letter</h4>;'
                <p className='text - sm text - muted - foreground'>;
                  {application.cover_letter}
:src_backup/components/jobs/applications/ApplicationCard.tsx

import { useState } from 'react';
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
import {;
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
:src_backup/components/jobs/applications/ApplicationCard.tsx
"
import { useState } from "react";"
import { formatDistanceToNow } from "date-fns";"
import { JobApplication } from "@/types/jobs";"
import { Button } from "@/components/ui/button";"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";'"
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react';import Link from "next/link";"
import { StatusBadge } from "./StatusBadge";"
import { ApplicationProgress } from "./ApplicationProgress";"
import { toast } from "sonner";
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
  const [expanded, setExpanded] = useState(false);

:src_backup/components/jobs/applications/ApplicationCard.tsx
  const handleDownloadResume = () => {;
    // This would typically download the resume file;"
    toast && toast.info("Resume download functionality will be implemented soon");
  };

  const renderActionButtons = () => {;
    switch (application && application.status) {;'
      case 'shortlisted':;
        return ('
          <Button variant='default' size='sm'>;'
            <Calendar className='h-4 w-4 mr-1' /> Prepare for Interview;
        );'
      case 'interview':;
        return ('
          <Button variant='default' size='sm'>;'
            <Calendar className='h-4 w-4 mr-1' /> View Interview Details;
          </Button>;
        );'
      case 'hired':;

          >;'
            <FileText className='h-4 w-4 mr-1' /> View Offer;
          </Button>;
        );'
      case 'rejected':;
        return ('
          <Button variant='outline' size='sm'>;'
            <HelpCircle className='h-4 w-4 mr-1' /> View Feedback;
          </Button>;
        );
      default:;
        return null;
    }
  };

  return ('
    <Card className='overflow-hidden'>;'
      <CardHeader className='pb-3'>;'
        <div className='flex justify-between items-start'>;
          <div>;'
            <CardTitle>{application && application.job?.title || 'Unknown Job'}</CardTitle>;'
            <div className='text-sm text-muted-foreground mt-1'>;'
              Applied{' '}
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
:src_backup/components/jobs/applications/ApplicationCard.tsx
'
      <CardContent className='pb-3'>;'
        <ApplicationProgress status={application && application.status} className='my-4' />;

        {expanded && (;'
          <div className='mt-4 space-y-3'>;
            {application && application.cover_letter && (;
              <div>;'
                <h4 className='text-sm font-medium mb-1'>Your Cover Letter</h4>;'
                <p className='text-sm text-muted-foreground'>;
                  {application && application.cover_letter}
                </p>;
              </div>;
            )}
:src_backup/components/jobs/applications/ApplicationCard.tsx

            {application && application.resume && (;'
              <div className='border rounded-md p-3 bg-muted/20'>;'
                <div className='flex justify-between items-center'>;'
                  <div className='flex items-center'>;'
                    <FileText className='h-4 w-4 mr-2 text-blue-500' />;'
                    <span className='text-sm font-medium'>;'
                      {application && application.resume.title || 'Resume'}
                    </span>;
                  </div>;
                  <Button'
                    variant='ghost''
                    size='sm'
                    onClick={handleDownloadResume}
:src_backup/components/jobs/applications/ApplicationCard.tsx
                  >
                    <Download className='h-3 w-3 mr-1' /> Download                  </Button>
                </div>
              </div>
            )}

:src_backup/components/jobs/applications/ApplicationCard.tsx
<CardContent className="pb-3">
        <ApplicationProgress status={application.status} className="my-4" />

                </p>;
              </div>)}
:src_backup/components/jobs/applications/ApplicationCard.tsx
            {application.resume && ('
              <div className='border rounded - md p - 3 bg - muted / 20'>;'
                <div className='flex justify - between items - center'>;'
                  <div className='flex items - center'>;'
                    <FileText className='h - 4 w - 4 mr - 2 text - blue - 500' />;'
                    <span className='text - sm font - medium'>;'
                      {application.resume.title || 'Resume'}
                    </span>;
                  </div>;
                  <Button;'
                    variant='ghost';'
                    size='sm';
                    on_click={handleDownloadResume}
                  >;'
                    <Download className='h - 3 w - 3 mr - 1' /> Download                  </Button>;
                </div>;
              </div>)}
:src_backup/components/jobs/applications/ApplicationCard.tsx
        {expanded && ("
          <div className="mt-4 space-y-3">
            {application.cover_letter && (


        {expanded && (
          <div className="mt-4 space-y-3">"
            {application.cover_letter && (
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>"
                    <Download className="h-3 w-3 mr-1" /> Download"
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
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>
                    <Download className="h-3 w-3 mr-1" /> Download
                    <Download className='h-3 w-3 mr-1' /> Download
origin/cursor/automate-test-improve-and-merge-code-2533
:src_backup/components/jobs/applications/ApplicationCard.tsx
                  </Button>
                </div>
              </div>
            )}
:src_backup/components/jobs/applications/ApplicationCard.tsx

              <div>;"
                <h4 className="text - sm font - medium mb - 1">Your Cover Letter</h4>;"
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
:src_backup/components/jobs/applications/ApplicationCard.tsx

{application.match_score && (
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
:src_backup/components/jobs/applications/ApplicationCard.tsx
              <div>;
                <h4 className='text - sm font - medium mb - 1'>Match Score</h4>;
                <div className='flex items - center'>;
              <div>;'
                <h4 className='text - sm font - medium mb - 1'>Match Score</h4>;'
                <div className='flex items - center'>;'
                  <div className='h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium'>;
                    {application.match_score}%;
                  </div>;'
                  <span className='ml - 2 text - xs text - muted - foreground'>;
                    Relevance to job requirements;
                  </span>                </div>            {application.match_score && (

:src_backup/components/jobs/applications/ApplicationCard.tsx
            {application.match_score && (

              <div>

              <div>

:src_backup/components/jobs/applications/ApplicationCard.tsx
                <h4 className="text-sm font-medium mb-1">Match Score</h4>
                <div className="flex items-center">

"
                <h4 className="text-sm font-medium mb-1">Match Score</h4>"
                <div className="flex items-center">"
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">
                    {application.match_score}%
                  </div>"
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>
                  </span>
origin/cursor/automate-test-improve-and-merge-code-2533
                </div>
              </div>
:src_backup/components/jobs/applications/ApplicationCard.tsx

:src_backup/components/jobs/applications/ApplicationCard.tsx

import { useState } from "react",;
import { formatDistanceToNow } from "date-fns",;
import { JobApplication } from "@/types/jobs",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react';
import Link from "next/link",;
import { StatusBadge } from "./StatusBadge",;
import { ApplicationProgress } from "./ApplicationProgress",;
import { toast } from "sonner",;
interface ApplicationCardProps {;
  application: JobApplication;
}
;
:src_backup/components/jobs/applications/ApplicationCard.tsx
export function ApplicationCard() { return null; }
  },;
  const renderActionButtons = () => {;
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
:src_backup/components/jobs/applications/ApplicationCard.tsx

        {expanded && (;
        {expanded && (;"
          <div className="mt-4 space-y-3">;
            {application.cover_letter && (;
              <div>;"
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>;"
                <p className="text-sm text-muted-foreground">{application.cover_letter}</p>;
              </div>;
            )}
:src_backup/components/jobs/applications/ApplicationCard.tsx
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
:src_backup/components/jobs/applications/ApplicationCard.tsx

            )}
;
            {application.match_score && (;
              <div>;"
                <h4 className="text-sm font-medium mb-1">Match Score</h4>;"
                <div className="flex items-center">;"
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">;
                    {application.match_score}%;
                  </div>;"
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>;
                </div>;
              </div>;
            )}
          </div>;
        )}
:src/components/jobs/applications/ApplicationCard.tsx

      </CardContent>
<CardFooter className='flex flex-col gap-3 pt-0'>
        <div className='flex justify-between items-center w-full'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <Button
:src_backup/components/jobs/applications/ApplicationCard.tsx
            variant='ghost'
            size='sm'
            onClick={() => setExpanded(!expanded)}
          >;'
            {expanded ? 'Show Less' : 'Show More'}
          </Button>;'
          <div className='flex gap-2'>;
            {renderActionButtons()}
:src/components/jobs/applications/ApplicationCard.tsx

          </div>
        )}

      </CardContent>
      "
      <CardFooter className="flex flex-col gap-3 pt-0">"
        <div className="flex justify-between items-center w-full">"
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>"
            {expanded ? "Show Less" : "Show More"}

          </Button>
          </Button>"
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
:src_backup/components/jobs/applications/ApplicationCard.tsx
<ExternalLink className="h-4 w-4 mr-1" /> View Job
                <ExternalLink className="h-4 w-4 mr-1" /> View Job
            <Button variant='outline' size='sm' asChild>
              <Link href={`/jobs/${application.job_id}`}>
                <ExternalLink className='h-4 w-4 mr-1' /> View Job
origin/cursor/automate-test-improve-and-merge-code-2533
:src_backup/components/jobs/applications/ApplicationCard.tsx
              </Link>
            </Button>
          </div>
        </div>
:src/components/jobs/applications/ApplicationCard.tsx


            <MessageSquare className='h-4 w-4 mr-1' /> Message Client        
:src/components/jobs/applications/ApplicationCard.tsx


        <Button 
          variant="secondary" 
          size="sm"
          className="w-full"
          asChild
        >
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client
:src_backup/components/jobs/applications/ApplicationCard.tsx
          </Link>

        </Button>
      </CardFooter>
    </Card>
  )
:src_backup/components/jobs/applications/ApplicationCard.tsx
'
            <Button variant='outline' size='sm' asChild>;`
              <Link href={`/jobs/${application && application.job_id}`}>;'
                <ExternalLink className='h-4 w-4 mr-1' /> View Job              </Link>;
            </Button>;
          </div>;
        </div>;
:src_backup/components/jobs/applications/ApplicationCard.tsx
'
        <Button variant='secondary' size='sm' className='w-full' asChild>;`
          <Link href={`/messages?jobId=${application && application.job_id}`}>;'
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client          </Link>          </Button>;"
          <div className="flex gap-2">;
            {renderActionButtons()}
            <Button"
              variant="outline" "
              size="sm"
              asChild>;`
              <Link href={`/jobs/${application && application.job_id}`}>;"
                <ExternalLink className="h-4 w-4 mr-1" /> View Job;
}
;
:src_backup/components/jobs/applications/ApplicationCard.tsx

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
:src_backup/components/jobs/applications/ApplicationCard.tsx
          >;'
            {expanded ? 'Show Less' : 'Show More'}
          </Button>;'
          <div className='flex gap - 2'>;
            {renderActionButtons ()}'
            <Button variant='outline' size='sm' as_child>;`
              <Link href={`/jobs/${application.job_id}`}>;'
                <ExternalLink className='h - 4 w - 4 mr - 1' /> View Job              </Link>;
            </Button>;
          </div>;
        </div>;'
        <Button variant='secondary' size='sm' className='w - full' as_child>;`
          <Link href={`/messages?job_id=${application.job_id}`}>;'
            <MessageSquare className='h - 4 w - 4 mr - 1' /> Message Client          </Link>          </Button>;"
          <div className="flex gap - 2">;
            {renderActionButtons ()}
            <Button;"
              variant="outline";"
              size="sm";
              as_child;
:src_backup/components/jobs/applications/ApplicationCard.tsx
            >;`
              <Link href={`/jobs/${application.job_id}`}>;"
                <ExternalLink className="h - 4 w - 4 mr - 1" /> View Job;
              </Link>;
            </Button>;
          </div>;
        </div>;
}
:src_backup/components/jobs/applications/ApplicationCard.tsx

          </Link>
        </Button>
      </CardFooter>
    </Card>
:src_backup/components/jobs/applications/ApplicationCard.tsx
  )
}
;
            <MessageSquare className='h - 4 w - 4 mr - 1' /> Message Client;
        <Button;"
          variant="secondary";"
          size="sm";"
          className="w - full";
          as_child;
:src_backup/components/jobs/applications/ApplicationCard.tsx
        >;`
          <Link href={`/messages?job_id=${application.job_id}`}>;"
            <MessageSquare className="h - 4 w - 4 mr - 1" /> Message Client;
        </Button>;
      </CardFooter>;
    </Card>);"
default: return (<Card className="overflow - hidden" > <CardHeader className="pb - 3" > <div className="flex justify - between items - start" > <div> </div> </div> <StatusBadge status= {}
  application.status;"
}/> </div> </CardHeader> {";"
  application.cover letter && (<div> <h4 className="text - sm font - medium mb - 1" >Your Cover Letter</h4> <p className="text - sm text - muted - foreground" > {}
  application.cover letter;
}</p> </div>);
}</Button> </div> </div>);"
}{";"
  application.match score && (<div> <h4 className="text - sm font - medium mb - 1" >Match Score</h4> <div className="flex items - center" > <div className="h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium" > {"
  application.match score ";"
}% </div> <span className="ml - 2 text - xs text - muted - foreground" >Relevance to job requirements</span> </div> </div>);"
}</div>) ";"
}</CardContent> <Button variant="outline" size="sm" as_child > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w - full" as_child > </Link> </Button> </CardFooter> </Card>);"
}";
}
        >;
          <Link href={`/messages?job_id=${application.job_id}`} />;`
            <MessageSquare className="h - 4 w - 4 mr - 1" /> Message Client;
        </Button>;
      </CardFooter>;
    </Card>);
default: return (<Card className="overflow - hidden" > <CardHeader className="pb - 3" > <div className="flex justify - between items - start" > <div> </div> </div> <StatusBadge status= {",
  application.status;
}/> </div> </CardHeader> {";
  application.cover letter && (<div> <h4 className="text - sm font - medium mb - 1" >Your Cover Letter</h4> <p className="text - sm text - muted - foreground" > {"
  application.cover letter;
}</p> </div>);
}</Button> </div> </div>);
}{";
  application.match score && (<div> <h4 className="text - sm font - medium mb - 1" >Match Score</h4> <div className="flex items - center" > <div className="h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium" > {"
  application.match score ";
}% </div> <span className="ml - 2 text - xs text - muted - foreground" >Relevance to job requirements</span> </div> </div>);
}</div>) ";
}</CardContent> <Button variant="outline" size="sm" as_child > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w - full" as_child > </Link> </Button> </CardFooter> </Card>);
}";
}
}}}}
}
;
}
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
}% </div> <span className="ml-2 text-xs text-muted-foreground" >Relevance to job requirements</span> </div> </div>) ;
}</div>) ";
}</CardContent> <Button variant="outline" size="sm" asChild > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w-full" asChild > </Link> </Button> </CardFooter> </Card>) ;
}"
:src/components/jobs/applications/ApplicationCard.tsx
}'"`
                <ExternalLink className="h-4 w-4 mr-1" /> View Job;"

            <MessageSquare className='h-4 w-4 mr-1' /> Message Client;

          variant="secondary"""
          size="sm"""
          className="w-full""
`;
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client;"

            <Button variant='outline' size='sm' asChild>;
              <Link href={`/jobs/${application && application.job_id}`}>;

                <ExternalLink className='h-4 w-4 mr-1' /> View Job              ;

        <Button variant='secondary' size='sm' className='w-full' asChild>;
          <Link href={`/messages?jobId=${application && application.job_id}`}>;

            <MessageSquare className='h-4 w-4 mr-1' /> Message Client                    ;

          <div className="flex gap-2">;"
              asChild>;

                <h4 className="text - sm font - medium mb - 1">Match Score</h4>;""
                  <div className="h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium">;"
                  <span className="ml - 2 text - xs text - muted - foreground">Relevance to job requirements</span>;"
      <CardFooter className='flex flex - col gap - 3 pt - 0'>;

        <div className='flex justify - between items - center w - full'>;
            on_click={() => set_expanded (!expanded)}

          <div className='flex gap - 2'>;
            <Button variant='outline' size='sm' as_child>;
              <Link href={`/jobs/${application.job_id}`}>;

                <ExternalLink className='h - 4 w - 4 mr - 1' /> View Job              ;

        <Button variant='secondary' size='sm' className='w - full' as_child>;
          <Link href={`/messages?job_id=${application.job_id}`}>;

            <MessageSquare className='h - 4 w - 4 mr - 1' /> Message Client                    ;

          <div className="flex gap - 2">;"
              variant="outline";""
              size="sm";"
              as_child;
                <ExternalLink className="h - 4 w - 4 mr - 1" /> View Job;"

            <MessageSquare className='h - 4 w - 4 mr - 1' /> Message Client;

          variant="secondary";""
          size="sm";""
          className="w - full";"
            <MessageSquare className="h - 4 w - 4 mr - 1" /> Message Client;"

    );"
default: return (<Card className="overflow - hidden" > <CardHeader className="pb - 3" > <div className="flex justify - between items - start" > <div> </div> </div> <StatusBadge status= {"
}/> </div>  {";""
  application.cover letter && (<div> <h4 className="text - sm font - medium mb - 1" >Your Cover Letter</h4> <p className="text - sm text - muted - foreground" > {"
</div>)
}</p> </div>);
} </div> </div>);"
  application.match score && (<div> <h4 className="text - sm font - medium mb - 1" >Match Score</h4> <div className="flex items - center" > <div className="h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium" > {"
</div>)"
}% </div> <span className="ml - 2 text - xs text - muted - foreground" >Relevance to job requirements</span> </div> </div>);""
}</div>) ";""
} <Button variant="outline" size="sm" as_child >   </div> </div> <Button variant="secondary" size="sm" className="w - full" as_child >    );""`;
pr-12325
