<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  CardTitle,
} from '@/components / ui / card';
  FileText,
  MessageSquare,
  HelpCircle,
  Calendar,
  ExternalLink,
  Download,
} from 'lucide-react';
import Link from 'next / link';
import { StatusBadge } from './StatusBadge';
import { ApplicationProgress } from './ApplicationProgress';
import { toast } from 'sonner';
import { useState  } from './react';
import { formatDistanceToNow  } from './date - fns';
import { JobApplication  } from '@/types / jobs';
import { Button  } from '@/components / ui / button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle  } from '@/components / ui / card';
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react'; import Link from './next / link';
import { StatusBadge  } from './StatusBadge';
import { ApplicationProgress  } from './ApplicationProgress';
import { toast  } from './sonner';
interface ApplicationCardProps {
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
<<<<<<< HEAD
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
=======

  }
  const renderActionButtons = () => {
    switch (application.status) {
      case 'shortlisted':
        return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

  };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),

  const handleDownloadResume = () => {
    // This would typically download the resume file


            <div className="text-sm text-muted-foreground mt-1">
<<<<<<< HEAD
=======
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </div>
          <StatusBadge status={application.status} />
        </div>
      </CardHeader>
<<<<<<< HEAD
<<<<<<< HEAD
      <CardContent className='pb-3'>
        <ApplicationProgress status={application.status} className='my-4' />

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    <Card className='overflow - hidden'>;
      <CardHeader className='pb - 3'>;
        <div className='flex justify - between items - start'>;
          <div>;
            <CardTitle>{application.job?.title || 'Unknown Job'}</CardTitle>;
            <div className='text - sm text - muted - foreground mt - 1'>;
              Applied{' '}
              {formatDistanceToNow (new Date (application.created_at), {
                add_suffix: true,
              })}            </div>            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>;
            <div className="text - sm text - muted - foreground mt - 1">;
              Applied {formatDistanceToNow (new Date (application.created_at), { add_suffix: true })}
            </div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;
      <CardContent className='pb - 3'>;
        <ApplicationProgress status={application.status} className='my - 4' />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      <CardContent className="pb-3">
        <ApplicationProgress status={application.status} className="my-4" />
        

        {expanded && (
          <div className='mt - 4 space - y-3'>;
<<<<<<< HEAD
=======
            {application.cover_letter && (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div>;
                <h4 className='text - sm font - medium mb - 1'>Your Cover Letter</h4>;
                <p className='text - sm text - muted - foreground'>;
                  {application.cover_letter}


import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { JobApplication } from '@/types/jobs';
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import {;
  FileText,;
  MessageSquare,;
  HelpCircle,;
  Calendar,;
  ExternalLink,;
  Download,;
} from 'lucide-react';
import Link from 'next/link';
import { StatusBadge } from './StatusBadge';
import { ApplicationProgress } from './ApplicationProgress';
import { toast } from 'sonner';

import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { JobApplication } from "@/types/jobs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react';import Link from "next/link";
import { StatusBadge } from "./StatusBadge";
import { ApplicationProgress } from "./ApplicationProgress";
import { toast } from "sonner";
interface ApplicationCardProps {;
  application: JobApplication;

export function ApplicationCard(): any ({ application }: ApplicationCardProps) {;

  const [ expanded, setExpanded ] = useState(false),;

  const handleDownloadResume = () => {;
    // This would typically download the resume file;
    toast && toast.info('Resume download functionality will be implemented soon');  };

  const renderActionButtons = () => {;
    switch (application && application.status) {interface ApplicationCardProps {;
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
      case 'shortlisted':;
        return (
          <Button variant='default' size='sm'>;
            <Calendar className='h-4 w-4 mr-1' /> Prepare for Interview;
        );
      case 'interview':;
        return (
          <Button variant='default' size='sm'>;
            <Calendar className='h-4 w-4 mr-1' /> View Interview Details;
          </Button>;
        );
      case 'hired':;

          >;
            <FileText className='h-4 w-4 mr-1' /> View Offer;
          </Button>;
        );
      case 'rejected':;
        return (
          <Button variant='outline' size='sm'>;
            <HelpCircle className='h-4 w-4 mr-1' /> View Feedback;
          </Button>;
        );
      default:;
        return null;
    }
  };

  return (
    <Card className='overflow-hidden'>;
      <CardHeader className='pb-3'>;
        <div className='flex justify-between items-start'>;
          <div>;
            <CardTitle>{application && application.job?.title || 'Unknown Job'}</CardTitle>;
            <div className='text-sm text-muted-foreground mt-1'>;
              Applied{' '}
              {formatDistanceToNow(new Date(application && application.created_at), {;
                addSuffix: true,;
              })}            </div>            <CardTitle>{application && application.job?.title || "Unknown Job"}</CardTitle>;
            <div className="text-sm text-muted-foreground mt-1">;
              Applied {formatDistanceToNow(new Date(application && application.created_at), { addSuffix: true })}
            </div>;
          </div>;
          <StatusBadge status={application && application.status} />;
        </div>;
      </CardHeader>;

      <CardContent className='pb-3'>;
        <ApplicationProgress status={application && application.status} className='my-4' />;

        {expanded && (;
          <div className='mt-4 space-y-3'>;
            {application && application.cover_letter && (;
              <div>;
                <h4 className='text-sm font-medium mb-1'>Your Cover Letter</h4>;
                <p className='text-sm text-muted-foreground'>;
                  {application && application.cover_letter}
                </p>;
              </div>;
            )}
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
                    <Download className='h-3 w-3 mr-1' /> Download                  </Button>
                </div>
              </div>
            )}
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      
      <CardContent className="pb-3">
        <ApplicationProgress status={application.status} className="my-4" />
        

                </p>;
              </div>)}
            {application.resume && (
              <div className='border rounded - md p - 3 bg - muted / 20'>;
                <div className='flex justify - between items - center'>;
                  <div className='flex items - center'>;
                    <FileText className='h - 4 w - 4 mr - 2 text - blue - 500' />;
                    <span className='text - sm font - medium'>;
                      {application.resume.title || 'Resume'}
                    </span>;
                  </div>;
                  <Button;
                    variant='ghost';
                    size='sm';
                    on_click={handleDownloadResume}
                  >;
                    <Download className='h - 3 w - 3 mr - 1' /> Download                  </Button>;
                </div>;
              </div>)}
        {expanded && (
          <div className="mt-4 space-y-3">
            {application.cover_letter && (




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>
                    <Download className="h-3 w-3 mr-1" /> Download
                  </Button>
                </div>
              </div>
            )}

<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div>;
                <h4 className='text - sm font - medium mb - 1'>Match Score</h4>;
                <div className='flex items - center'>;
                  <div className='h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium'>;
                    {application.match_score}%;
                  </div>;
                  <span className='ml - 2 text - xs text - muted - foreground'>;
                    Relevance to job requirements;
                  </span>                </div>            {application.match_score && (
              <div>
            
            {application.match_score && (

              <div>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
            
            {application.match_score && (
              <div>
            
            {application.match_score && (
              <div>



<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <h4 className="text-sm font-medium mb-1">Match Score</h4>
=======




                <h4 className="text-sm font-medium mb-1">Match Score</h4>
                <div className="flex items-center">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">
                    {application.match_score}%
                  </div>
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>
                </div>
              </div>
<<<<<<< HEAD
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <div className="flex justify-between items-start">;
          <div>;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {expanded && (;
          <div className="mt-4 space-y-3">;
            {application.cover_letter && (;
              <div>;
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>;
                <p className="text-sm text-muted-foreground">{application.cover_letter}</p>;
              </div>;
            )}


<<<<<<< HEAD
<<<<<<< HEAD
            )}

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            )}
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
        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          <Button
            variant='ghost'
            size='sm'
            onClick={() => setExpanded(!expanded)}
          >;
            {expanded ? 'Show Less' : 'Show More'}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </Button>
          <div className="flex gap-2">
            {renderActionButtons()}
            <Button 
              variant="outline" 
              size="sm"
              asChild
            >
              <Link href={`/jobs/${application.job_id}`}>
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <ExternalLink className="h-4 w-4 mr-1" /> View Job
              </Link>
            </Button>
          </div>
        </div>

        

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client        
        

<<<<<<< HEAD
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        </Button>
      </CardFooter>
    </Card>
  )

<<<<<<< HEAD
=======
            <Button variant='outline' size='sm' asChild>;
              <Link href={`/jobs/${application && application.job_id}`}>;
                <ExternalLink className='h-4 w-4 mr-1' /> View Job              </Link>;
            </Button>;
          </div>;
        </div>;

        <Button variant='secondary' size='sm' className='w-full' asChild>;
          <Link href={`/messages?jobId=${application && application.job_id}`}>;
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client          </Link>          </Button>;
          <div className="flex gap-2">;
            {renderActionButtons()}
            <Button
              variant="outline" 
              size="sm"
              asChild>;
              <Link href={`/jobs/${application && application.job_id}`}>;
                <ExternalLink className="h-4 w-4 mr-1" /> View Job;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}
;


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
      <CardFooter className='flex flex - col gap - 3 pt - 0'>;
        <div className='flex justify - between items - center w - full'>;
          <Button;
            variant='ghost';
            size='sm';
            on_click={() => set_expanded (!expanded)}
          >;
            {expanded ? 'Show Less' : 'Show More'}
          </Button>;
          <div className='flex gap - 2'>;
            {renderActionButtons ()}
            <Button variant='outline' size='sm' as_child>;
              <Link href={`/jobs/${application.job_id}`}>;
                <ExternalLink className='h - 4 w - 4 mr - 1' /> View Job              </Link>;
            </Button>;
          </div>;
        </div>;
        <Button variant='secondary' size='sm' className='w - full' as_child>;
          <Link href={`/messages?job_id=${application.job_id}`}>;
            <MessageSquare className='h - 4 w - 4 mr - 1' /> Message Client          </Link>          </Button>;
          <div className="flex gap - 2">;
            {renderActionButtons ()}
            <Button;
              variant="outline";
              size="sm";
              as_child;
            >;
              <Link href={`/jobs/${application.job_id}`}>;
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
  );
}
        <Button variant='secondary' size='sm' className='w - full' as_child>;
          <Link href={`/messages?job_id=${application.job_id}`}>;
            <MessageSquare className='h - 4 w - 4 mr - 1' /> Message Client;
        <Button;
          variant="secondary";
          size="sm";
          className="w - full";
          as_child;
        >;
          <Link href={`/messages?job_id=${application.job_id}`}>;
            <MessageSquare className="h - 4 w - 4 mr - 1" /> Message Client;
        </Button>;
      </CardFooter>;
    </Card>);
default: return (<Card className="overflow - hidden" > <CardHeader className="pb - 3" > <div className="flex justify - between items - start" > <div> </div> </div> <StatusBadge status= {
  application.status;
}/> </div> </CardHeader> {";
  application.cover letter && (<div> <h4 className="text - sm font - medium mb - 1" >Your Cover Letter</h4> <p className="text - sm text - muted - foreground" > {
  application.cover letter;
}</p> </div>);
}</Button> </div> </div>);
}{";
  application.match score && (<div> <h4 className="text - sm font - medium mb - 1" >Match Score</h4> <div className="flex items - center" > <div className="h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium" > {
  application.match score ";
}% </div> <span className="ml - 2 text - xs text - muted - foreground" >Relevance to job requirements</span> </div> </div>);
<<<<<<< HEAD
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
=======
}% </div> <span className="ml-2 text-xs text-muted-foreground" >Relevance to job requirements</span> </div> </div>) 
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
}</div>) ";
}</CardContent> <Button variant="outline" size="sm" as_child > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w - full" as_child > </Link> </Button> </CardFooter> </Card>);
}";
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
