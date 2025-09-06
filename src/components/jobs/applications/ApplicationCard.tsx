

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
}

import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { JobApplication } from '@/types/jobs'
import { Button } from '@/components/ui/button'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),

  const handleDownloadResume = () => {
    // This would typically download the resume file

  const [expanded, setExpanded] = useState(false)
  const handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon")
  }
  const renderActionButtons = () => {
    switch (application.status) {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
}

>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
  }
  const renderActionButtons = () => {
    switch (application.status) {
      case 'shortlisted':
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        {expanded && (
          <div className='mt - 4 space - y-3'>;
            {application.cover_letter && (
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
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={handleDownloadResume}
                  >
                    <Download className='h-3 w-3 mr-1' /> Download                  </Button>
                </div>
              </div>
            )}

      
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
        

        
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client        
        


        <Button 
          variant="secondary" 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          size="sm"
          className="w-full"
          asChild
        >
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client
<<<<<<< HEAD

        </Button>
      </CardFooter>
    </Card>
  )
<<<<<<< HEAD
}</div>) ";
}</CardContent> <Button variant="outline" size="sm" as_child > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w - full" as_child > </Link> </Button> </CardFooter> </Card>);
}";
}
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
