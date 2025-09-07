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

  const renderActionButtons = () => {
    switch (application.status) {
      case 'shortlisted':
        return (
          <Button variant='default' size='sm'>;
            <Calendar className='h - 4 w - 4 mr - 1' /> Prepare for Interview);
      case 'interview':;

            <Calendar className='h - 4 w - 4 mr - 1' /> View Interview Details;
          </Button>);
      case 'hired':;
          >;
            <FileText className='h - 4 w - 4 mr - 1' /> View Offer;
      case 'rejected':;

          <Button variant='outline' size='sm'>
            <HelpCircle className='h-4 w-4 mr-1' /> View Feedback
          </Button>
        )
      default:
        return null

      case "shortlisted": return (
          <Button variant="default" size="sm">
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview
        ),
      case "interview":
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details
      case "hired":
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">
            <FileText className="h-4 w-4 mr-1" /> View Offer
      case "rejected":
          <Button variant="outline" size="sm">
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback
  },

    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>

export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),

  const handleDownloadResume = () => {
    // This would typically download the resume file

            <div className="text-sm text-muted-foreground mt-1">
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </div>
          <StatusBadge status={application.status} />
      </CardHeader>

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
          <StatusBadge status={application.status} />;
      </CardHeader>;
      <CardContent className='pb - 3'>;
        <ApplicationProgress status={application.status} className='my - 4' />;

      <CardContent className="pb-3">
        <ApplicationProgress status={application.status} className="my-4" />

        {expanded && (
          <div className='mt - 4 space - y-3'>;
            {application.cover_letter && (
                <h4 className='text - sm font - medium mb - 1'>Your Cover Letter</h4>;
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
  CardTitle,;
} from '@/components/ui/card';
  FileText,;
  MessageSquare,;
  HelpCircle,;
  Calendar,;
  ExternalLink,;
  Download,;
import Link from 'next/link';

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

  const [expanded, setExpanded] = useState(false);

    toast && toast.info("Resume download functionality will be implemented soon");
  };

    switch (application && application.status) {;
      case 'shortlisted':;
            <Calendar className='h-4 w-4 mr-1' /> Prepare for Interview;
        );
            <Calendar className='h-4 w-4 mr-1' /> View Interview Details;
          </Button>;

            <FileText className='h-4 w-4 mr-1' /> View Offer;
          <Button variant='outline' size='sm'>;
            <HelpCircle className='h-4 w-4 mr-1' /> View Feedback;
      default:;
        return null;

    <Card className='overflow-hidden'>;
      <CardHeader className='pb-3'>;
        <div className='flex justify-between items-start'>;
            <CardTitle>{application && application.job?.title || 'Unknown Job'}</CardTitle>;
            <div className='text-sm text-muted-foreground mt-1'>;
              {formatDistanceToNow(new Date(application && application.created_at), {;
                addSuffix: true,;
              })}            </div>            <CardTitle>{application && application.job?.title || "Unknown Job"}</CardTitle>;
            <div className="text-sm text-muted-foreground mt-1">;
              Applied {formatDistanceToNow(new Date(application && application.created_at), { addSuffix: true })}
          <StatusBadge status={application && application.status} />;

      <CardContent className='pb-3'>;
        <ApplicationProgress status={application && application.status} className='my-4' />;

        {expanded && (;
          <div className='mt-4 space-y-3'>;
            {application && application.cover_letter && (;
                <h4 className='text-sm font-medium mb-1'>Your Cover Letter</h4>;
                <p className='text-sm text-muted-foreground'>;
                  {application && application.cover_letter}
                </p>;
            )}

            {application && application.resume && (;
              <div className='border rounded-md p-3 bg-muted/20'>;
                <div className='flex justify-between items-center'>;
                  <div className='flex items-center'>;
                    <FileText className='h-4 w-4 mr-2 text-blue-500' />;
                    <span className='text-sm font-medium'>;
                      {application && application.resume.title || 'Resume'}
                    </span>;
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={handleDownloadResume}
                  >
                    <Download className='h-3 w-3 mr-1' /> Download                  </Button>

              </div>)}
            {application.resume && (
              <div className='border rounded - md p - 3 bg - muted / 20'>;
                <div className='flex justify - between items - center'>;
                  <div className='flex items - center'>;
                    <FileText className='h - 4 w - 4 mr - 2 text - blue - 500' />;
                    <span className='text - sm font - medium'>;
                      {application.resume.title || 'Resume'}
                  <Button;
                    variant='ghost';
                    size='sm';
                    on_click={handleDownloadResume}
                    <Download className='h - 3 w - 3 mr - 1' /> Download                  </Button>;
          <div className="mt-4 space-y-3">

                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>
                    <Download className="h-3 w-3 mr-1" /> Download

                <h4 className="text - sm font - medium mb - 1">Your Cover Letter</h4>;
                <p className="text - sm text - muted - foreground">{application.cover_letter}</p>;
              <div className="border rounded - md p - 3 bg - muted / 20">;
                <div className="flex justify - between items - center">;
                  <div className="flex items - center">;
                    <FileText className="h - 4 w - 4 mr - 2 text - blue - 500" />;
                    <span className="text - sm font - medium">{application.resume.title || "Resume"}</span>;
                  <Button variant="ghost" size="sm" on_click={handleDownloadResume}>;
                    <Download className="h - 3 w - 3 mr - 1" /> Download;

            {application.match_score && (
                <h4 className='text - sm font - medium mb - 1'>Match Score</h4>;
                  <div className='h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium'>;
                    {application.match_score}%;
                  <span className='ml - 2 text - xs text - muted - foreground'>;
                    Relevance to job requirements;
                  </span>                </div>            {application.match_score && (

                <h4 className="text-sm font-medium mb-1">Match Score</h4>
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">
                    {application.match_score}%
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>

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
;
export function ApplicationCard({ application }: ApplicationCardProps) {;
  const [expanded, setExpanded] = useState(false),;
    toast.info("Resume download functionality will be implemented soon");
  },;
    switch (application.status) {;
      case "shortlisted": return (;
          <Button variant="default" size="sm">;
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview;
        ),;
      case "interview":;
        return (;
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details;
      case "hired":;
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">;
            <FileText className="h-4 w-4 mr-1" /> View Offer;
      case "rejected":;
          <Button variant="outline" size="sm">;
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback;
    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <div className="flex justify-between items-start">;
            <CardTitle>{application.job?.title || "Unknown Job"}</CardTitle>;
      <CardContent className="pb-3">;
        <ApplicationProgress status={application.status} className="my-4" />;

          <div className="mt-4 space-y-3">;
            {application.cover_letter && (;
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>;
                <p className="text-sm text-muted-foreground">{application.cover_letter}</p>;

            {application.match_score && (;
                <h4 className="text-sm font-medium mb-1">Match Score</h4>;
                <div className="flex items-center">;
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">;
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>;

            onClick={() => setExpanded(!expanded)}
            {expanded ? 'Show Less' : 'Show More'}
          <div className='flex gap-2'>;
            {renderActionButtons()}

      </CardContent>

      <CardFooter className="flex flex-col gap-3 pt-0">
        <div className="flex justify-between items-center w-full">
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less" : "Show More"}

          <div className="flex gap-2">
              variant="outline" 
              size="sm"
              asChild
              <Link href={`/jobs/${application.job_id}`}>

                <ExternalLink className="h-4 w-4 mr-1" /> View Job
              </Link>

            <MessageSquare className='h-4 w-4 mr-1' /> Message Client        

      </CardFooter>
    </Card>

            <Button variant='outline' size='sm' asChild>;
              <Link href={`/jobs/${application && application.job_id}`}>;
                <ExternalLink className='h-4 w-4 mr-1' /> View Job              </Link>;

        <Button variant='secondary' size='sm' className='w-full' asChild>;
          <Link href={`/messages?jobId=${application && application.job_id}`}>;
            <MessageSquare className='h-4 w-4 mr-1' /> Message Client          </Link>          </Button>;
          <div className="flex gap-2">;
              asChild>;
                <ExternalLink className="h-4 w-4 mr-1" /> View Job;

                <h4 className="text - sm font - medium mb - 1">Match Score</h4>;
                  <div className="h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium">;
                  <span className="ml - 2 text - xs text - muted - foreground">Relevance to job requirements</span>;
      </CardContent>;
      <CardFooter className='flex flex - col gap - 3 pt - 0'>;
        <div className='flex justify - between items - center w - full'>;
            on_click={() => set_expanded (!expanded)}
          <div className='flex gap - 2'>;
            {renderActionButtons ()}
            <Button variant='outline' size='sm' as_child>;
              <Link href={`/jobs/${application.job_id}`}>;
                <ExternalLink className='h - 4 w - 4 mr - 1' /> View Job              </Link>;
        <Button variant='secondary' size='sm' className='w - full' as_child>;
          <Link href={`/messages?job_id=${application.job_id}`}>;
            <MessageSquare className='h - 4 w - 4 mr - 1' /> Message Client          </Link>          </Button>;
          <div className="flex gap - 2">;
              variant="outline";
              size="sm";
              as_child;
                <ExternalLink className="h - 4 w - 4 mr - 1" /> View Job;
              </Link>;

            <MessageSquare className='h - 4 w - 4 mr - 1' /> Message Client;
          variant="secondary";
          className="w - full";
            <MessageSquare className="h - 4 w - 4 mr - 1" /> Message Client;
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

}</div>) ";
}</CardContent> <Button variant="outline" size="sm" as_child > </Link> </Button> </div> </div> <Button variant="secondary" size="sm" className="w - full" as_child > </Link> </Button> </CardFooter> </Card>);
}";