<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { JobApplication } from '@/types/jobs';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import {
  FileText,
  MessageSquare,
  HelpCircle,
  Calendar,
  ExternalLink,
  Download,;
} from 'lucide-react';
import Link from 'next/link';
import { StatusBadge } from './StatusBadge';
import { ApplicationProgress } from './ApplicationProgress';
import { toast } from 'sonner';
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ApplicationCardProps {
  application: JobApplication;

export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleDownloadResume = () => {
    // This would typically download the resume file
<<<<<<< HEAD
    toast.info('Resume download functionality will be implemented soon');  };

  const renderActionButtons = () => {
    switch (application.status) {
=======
<<<<<<< HEAD
    toast.info('Resume download functionality will be implemented soon');
=======

import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { JobApplication } from "@/types/jobs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react'
import Link from "next/link";
import { StatusBadge } from "./StatusBadge";
import { ApplicationProgress } from "./ApplicationProgress";
import { toast } from "sonner";
interface ApplicationCardProps {
  application: JobApplication
}

export function ApplicationCard({ application }: ApplicationCardProps) {

  const [ expanded, setExpanded ] = useState(false),


  const handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon")
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    toast.info("Resume download functionality will be implemented soon")
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const renderActionButtons = () => {
    switch (application.status) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      case 'shortlisted':
        return (
          <Button variant='default' size='sm'>
            <Calendar className='h-4 w-4 mr-1' /> Prepare for Interview
<<<<<<< HEAD
=======
=======
      case "shortlisted": return (
          <Button variant="default" size="sm">
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </Button>
        );
      case 'interview':
        return (
          <Button variant='default' size='sm'>
            <Calendar className='h-4 w-4 mr-1' /> View Interview Details
          </Button>
        );
      case 'hired':
        
          >
            <FileText className='h-4 w-4 mr-1' /> View Offer
          </Button>
        );
      case 'rejected':
        return (
          <Button variant='outline' size='sm'>
            <HelpCircle className='h-4 w-4 mr-1' /> View Feedback
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <Card className='overflow-hidden'>
      <CardHeader className='pb-3'>
        <div className='flex justify-between items-start'>
          <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <CardTitle>{application.job?.title || 'Unknown Job'}</CardTitle>
            <div className='text-sm text-muted-foreground mt-1'>
              Applied{' '}
              {formatDistanceToNow(new Date(application.created_at), {
                addSuffix: true,
<<<<<<< HEAD
              })}            </div>
=======
              })}
=======
      case "shortlisted": return (
          <Button variant="default" size="sm">
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview
          </Button>
        );
      case "interview":
        return (
          <Button variant="default" size="sm">
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details
          </Button>
        );
      case "hired":
        return (
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">
            <FileText className="h-4 w-4 mr-1" /> View Offer
          </Button>
        );
      case "rejected":
        return (
          <Button variant="outline" size="sm">
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback
          </Button>
        );
      default:
        return null
    }
  };


  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>
            <div className="text-sm text-muted-foreground mt-1">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>
            <div className="text-sm text-muted-foreground mt-1">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
          <StatusBadge status={application.status} />
        </div>
      </CardHeader>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      <CardContent className='pb-3'>
        <ApplicationProgress status={application.status} className='my-4' />

<<<<<<< HEAD
=======
=======
      
      <CardContent className="pb-3">
        <ApplicationProgress status={application.status} className="my-4" />
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {expanded && (
          <div className='mt-4 space-y-3'>
            {application.cover_letter && (
              <div>
                <h4 className='text-sm font-medium mb-1'>Your Cover Letter</h4>
                <p className='text-sm text-muted-foreground'>
                  {application.cover_letter}
                </p>
              </div>
            )}

            {application.resume && (
              <div className='border rounded-md p-3 bg-muted/20'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center'>
                    <FileText className='h-4 w-4 mr-2 text-blue-500' />
                    <span className='text-sm font-medium'>
                      {application.resume.title || 'Resume'}
                    </span>
                  </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={handleDownloadResume}
                  >
<<<<<<< HEAD
                    <Download className='h-3 w-3 mr-1' /> Download                  </Button>
                </div>
              </div>
            )}

=======
                    <Download className='h-3 w-3 mr-1' /> Download
=======
      
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>
                    <Download className="h-3 w-3 mr-1" /> Download
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </Button>
                </div>
              </div>
            )}
<<<<<<< HEAD
<<<<<<< HEAD

=======
            
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            {application.match_score && (
              <div>
                <h4 className='text-sm font-medium mb-1'>Match Score</h4>
                <div className='flex items-center'>
                  <div className='h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium'>
                    {application.match_score}%
                  </div>
<<<<<<< HEAD
                  <span className='ml-2 text-xs text-muted-foreground'>
                    Relevance to job requirements
                  </span>                </div>
=======
<<<<<<< HEAD
                  <span className='ml-2 text-xs text-muted-foreground'>
                    Relevance to job requirements
                  </span>
=======
            
            {application.match_score && (
              <div>
                <h4 className="text-sm font-medium mb-1">Match Score</h4>
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">
                    {application.match_score}%
                  </div>
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            )}
          </div>
        )}
      </CardContent>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      <CardFooter className='flex flex-col gap-3 pt-0'>
        <div className='flex justify-between items-center w-full'>
          <Button
            variant='ghost'
            size='sm'
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show Less' : 'Show More'}
<<<<<<< HEAD
=======
=======
      
      <CardFooter className="flex flex-col gap-3 pt-0">
        <div className="flex justify-between items-center w-full">
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less" : "Show More"}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </Button>
          <div className='flex gap-2'>
            {renderActionButtons()}
            <Button variant='outline' size='sm' asChild>
              <Link href={`/jobs/${application.job_id}`}>
<<<<<<< HEAD
                <ExternalLink className='h-4 w-4 mr-1' /> View Job              </Link>
            </Button>
          </div>
        </div>

        <Button variant='secondary' size='sm' className='w-full' asChild>
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client          </Link>
=======
<<<<<<< HEAD
                <ExternalLink className='h-4 w-4 mr-1' /> View Job
=======
      
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
              <Link href={`/jobs/${application.job_id}`}>
                <ExternalLink className="h-4 w-4 mr-1" /> View Job
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <ExternalLink className="h-4 w-4 mr-1" /> View Job
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </Link>
            </Button>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

        <Button variant='secondary' size='sm' className='w-full' asChild>
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client
=======
        
        <Button 
          variant="secondary" 
          size="sm"
          className="w-full"
          asChild
        >
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        <Button 
          variant="secondary" 
          size="sm"
          className="w-full"
          asChild
        >
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </Link>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </Button>
      </CardFooter>
    </Card>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
<<<<<<< HEAD
}"
=======
}"
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
