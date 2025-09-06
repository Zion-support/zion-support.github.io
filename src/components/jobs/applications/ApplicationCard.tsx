<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function ApplicationCard({ application }: ApplicationCardProps) {
  const [ expanded, setExpanded ] = useState(false)
  const handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info('Resume download functionality will be implemented soon') }
  const renderActionButtons = () => {
    switch (application.status) {interface ApplicationCardProps {
<<<<<<< HEAD
  application: JobApplication;
}
export function ApplicationCard({ application }: ApplicationCardProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  application: JobApplication
}
export function ApplicationCard({ application }: ApplicationCardProps) {

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
=======
application: JobApplication
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function ApplicationCard({ application }: ApplicationCardProps) {
=======
xport function ApplicationCard({ application }: ApplicationCardProps) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function ApplicationCard({ application }: ApplicationCardProps) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [expanded, setExpanded] = useState(false),

  const handleDownloadResume = () => {
    // This would typically download the resume file
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    toast.info("Resume download functionality will be implemented soon")
  },
    toast.info('Resume download functionality will be implemented soon') }
  const renderActionButtons = () => {
    switch (application.status) {interface ApplicationCardProps {
  application: JobApplication
}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  const [expanded, setExpanded] = useState(false)
  const handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon")
  }
<<<<<<< HEAD
  const renderActionButtons = () => {
    switch (application.status) {

=======
    toast.info("Resume download functionality will be implemented soon")
  },
                addSuffix: true
              })}            </div>            <CardTitle>{application.job?.title |"Unknown Job"}</CardTitle>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  const renderActionButtons = () => {
    switch (application.status) {
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

  const renderActionButtons = () => {
    switch (application.status) {
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>             <div className="text-sm text-muted-foreground mt-1">
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),

  const handleDownloadResume = () => {
    // This would typically download the resume file


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <div className="text-sm text-muted-foreground mt-1">
>>>>>>>               Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </div>
          </div>
          <StatusBadge status={application.status} />
        </div>
      </CardHeader>
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

<<<<<<< HEAD
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={handleDownloadResume}
                  >
                    <Download className='h-3 w-3 mr-1' /> Download                  </Button>
                </div>
              </div>
            )}
=======
      <CardContent className='pb-3'>
        <ApplicationProgress status={application.status} className='my-4' />
<<<<<<< HEAD
>>>>>>>         {expanded && (
          <div className="mt-4 space-y-3">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======

      
      <CardContent className="pb-3">
        <ApplicationProgress status={application.status} className="my-4" />
        

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        {expanded && (
          <div className='mt - 4 space - y-3'>;
>>>>>>>             {application.cover_letter && (
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
=======
=======
=======
      <CardContent className='pb-3'>
        <ApplicationProgress status={application.status} className='my-4' />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {application.resume && (
              <div className="border rounded-md p-3 bg-muted/20">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>
=======
>>>>>>>                   <Button variant="ghost" size="sm" onClick={handleDownloadResume}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    <Download className="h-3 w-3 mr-1" /> Download
                  </Button>
                </div>
              </div>
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>             {application.match_score && (
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
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {application.match_score && (

              <div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>                 <h4 className="text-sm font-medium mb-1">Match Score</h4>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
            
            {application.match_score && (
              <div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            
            {application.match_score && (
              <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                <h4 className="text-sm font-medium mb-1">Match Score</h4>
>>>>>>>                 <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">
                    {application.match_score}%
                  </div>
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
          </Button>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className='flex flex-col gap-3 pt-0'>
        <div className='flex justify-between items-center w-full'>
<<<<<<< HEAD
=======
          <Button
            variant='ghost'
            size='sm'
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show Less' : 'Show More'}
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
              <div className="border rounded-md p-3 bg-muted/20">;
                <div className="flex justify-between items-center">;
                  <div className="flex items-center">;
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />;
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>;
=======


            )}

            {application && application.match_score && (;
              <div>;
                <h4 className='text-sm font-medium mb-1'>Match Score</h4>;
                <div className='flex items-center'>;
                  <div className='h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium'>;
                    {application && application.match_score}%;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  </div>;
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>;
                    <Download className="h-3 w-3 mr-1" /> Download;
                  </Button>;
                </div>;
              </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


>>>>>>>           <Button
            variant='ghost'
            size='sm'
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show Less' : 'Show More'}
<<<<<<< HEAD
>>>>>>>           </Button>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
          </Button>;
          <div className='flex gap-2'>;
            {renderActionButtons()}

          </div>
        )}

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      </CardContent>
      
      <CardFooter className="flex flex-col gap-3 pt-0">
        <div className="flex justify-between items-center w-full">
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less" : "Show More"}
          </Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="flex gap-2">
            {renderActionButtons()}
            <Button 
              variant="outline" 
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              size="sm"
              asChild
            >
              <Link href={`/jobs/${application.job_id}`}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 <ExternalLink className="h-4 w-4 mr-1" /> View Job
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <ExternalLink className="h-4 w-4 mr-1" /> View Job
>>>>>>>               </Link>
            </Button>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



                <ExternalLink className="h-4 w-4 mr-1" /> View Job
              </Link>
            </Button>
          </div>
        </div>

        

        
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client        
        
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

        <Button 
          variant="secondary" 

<<<<<<< HEAD
=======
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client
        <Button
          variant="secondary"
>>>>>>>         <Button 
          variant="secondary" 
>>>>>>>           size="sm"
ursor/fix-website-loading-errors-and-merge-6662
        <Button 
          variant="secondary" 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Button variant='secondary' size='sm' className='w-full' asChild>
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client
        <Button
          variant="secondary"
        
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client        
        
        <Button 
          variant="secondary" 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
        <Button 
          variant="secondary" 
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          size="sm"
>>>>>>>           className="w-full"
          asChild
        >
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         </Button>
      </CardFooter>
    </Card>
  )
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </Link>
<<<<<<< HEAD
        </Button>
      </CardFooter>
    </Card>
  )
default: return (<Card className="overflow-hidden" > <CardHeader className="pb-3" > <div className="flex justify-between items-start" > <div> </div> </div> <StatusBadge status= {
  application.status
}/> </div> </CardHeader> {"
  application.cover letter && (<div> <h4 className="text-sm font-medium mb-1" >Your Cover Letter</h4> <p className="text-sm text-muted-foreground" > {
  application.cover letter
}</p> </div>)
}</Button> </div> </div>)
}{"
  application.match score && (<div> <h4 className="text-sm font-medium mb-1" >Match Score</h4> <div className="flex items-center" > <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium" > {
  application.match score "
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}% </div> <span className="ml-2 text-xs text-muted-foreground" >Relevance to job requirements</span> </div> </div>)
}</div>) "
}</CardContent> <Button variant="outline" size="sm" asChild > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w-full" asChild > </Link> </Button> </CardFooter> </Card>)
}"
}
<<<<<<< HEAD
}% </div> <span className="ml-2 text-xs text-muted-foreground" >Relevance to job requirements</span> </div> </div>) 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        </Button>
      </CardFooter>
    </Card>
  )

<<<<<<< HEAD
}% </div> <span className="ml-2 text-xs text-muted-foreground" >Relevance to job requirements</span> </div> </div>) 
}</div>) ";
}</CardContent> <Button variant="outline" size="sm" asChild > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w-full" asChild > </Link> </Button> </CardFooter> </Card>) ;
=======
<<<<<<< HEAD
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
>>>>>>> }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
>>>>>>> }</div>) ";
}</CardContent> <Button variant="outline" size="sm" as_child > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w - full" as_child > </Link> </Button> </CardFooter> </Card>);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}";
<<<<<<< HEAD
}
}
<<<<<<< HEAD

}
;

=======
}
;
>>>>>>> >>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
