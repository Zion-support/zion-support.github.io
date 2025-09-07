<<<<<<< HEAD


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

interface ApplicationCardProps {
  application: JobApplication
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
import {useState} from "react";""
import {formatDistanceToNow} from "date-fns";""
import {JobApplication} from "@/types/jobs";""
import {Button} from "@/components/ui/button";""
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download} from "lucide-react";""
import {Link} from "react-router-dom";""
import {StatusBadge} from "./StatusBadge";""
import {ApplicationProgress} from "./ApplicationProgress";""
import {toast} from "sonner";"
pr-12325
interface ApplicationCardProps {;
  application: JobApplication;
>>>>>>> origin/main
}

export function ApplicationCard(): any ({ application }: ApplicationCardProps) {;
  const [expanded, setExpanded] = useState(false);

<<<<<<< HEAD
  const handleDownloadResume = null;

=======
  const handleDownloadResume = () => {;
    // This would typically download the resume file;
    toast && toast.info("Resume download functionality will be implemented soon")
};

  const renderActionButtons = () => {;
    switch (application && application.status) {;
import { useState } from "react",;
import { formatDistanceToNow } from "date-fns",;
import { JobApplication } from "@/types/jobs",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from "lucide-react",;
import { Link } from "react-router-dom",;
import { StatusBadge } from "./StatusBadge",;
import { ApplicationProgress } from "./ApplicationProgress";
import { toast } from "sonner";
import { ApplicationProgress } from "./ApplicationProgress",;
import { toast } from "sonner",;
interface ApplicationCardProps {
  application: JobApplication
}export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),

  const handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon")      case "shortlisted": return (
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

            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback;
          </Button>;
        ),;
      default:;
        return null;

    }
  }    }

  },

>>>>>>> origin/main
  return (
        {expanded && (
          <div className="mt - 4 space-y-3">;
            {application.cover_letter && (            </div>;
          </div>;
          <StatusBadge status={application.status} />;
        </div>;
      </CardHeader>;
      <CardContent className="pb-3">;
        <ApplicationProgress status={application.status} className="my-4" />;

        {expanded && (
          <div className="mt - 4 space-y-3">;
            {application.cover_letter && (    <Card className="overflow-hidden">;
      <CardHeader className="pb-3">;
        <div className="flex justify-between items-start">;
          <div>;
              <div className="border rounded-md p-3 bg-muted/20">;
                <div className="flex justify-between items-center">;
                  <div className="flex items-center">;
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />;
                    <span className="text-sm font-medium">{application && application.resume.title || "Resume"}</span>;                    <span className="text-sm font-medium">{application && application.resume.title || "Resume"}</span>;
                  </div>;
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>;
                    <Download className="h-3 w-3 mr-1" /> Download;
                  </Button>;
                </div>;
              </div>;
            )}

            {application && application.match_score && (;
            {application && application.match_score && (;
              <div>;
                <h4 className="text-sm font-medium mb-1">Match Score</h4>;
                <div className="flex items-center">;
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">;
                    {application && application.match_score}%;                    {application && application.match_score}%;
                  </div>;
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>;
                </div>;
              </div>;
            )}
          </div>;
            {expanded ? "Show Less" : "Show More"}
          </Button>;
          <div className="flex gap-2">;
            {renderActionButtons()}
            <Button

        <Button 
          variant="secondary" 

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
    // This would typically download the resume file;"
    toast && toast.info("Resume download functionality will be implemented soon");"
  };

  const renderActionButtons = () => {;
    switch (application && application.status) {;
"
import { useState } from "react",""
import { formatDistanceToNow } from "date-fns",""
import { JobApplication } from "@/types/jobs",""
import { Button } from "@/components/ui/button",""
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from "lucide-react",""
import { Link } from "react-router-dom",""
import { StatusBadge } from "./StatusBadge",""
import { ApplicationProgress } from "./ApplicationProgress";""
import { toast } from "sonner";""
import { ApplicationProgress } from "./ApplicationProgress",""
import { toast } from "sonner","
interface ApplicationCardProps {
  // TODO: Implement


    // This would typically download the resume file;"




  // TODO: Implement



export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),

  const handleDownloadResume = () => {
    // This would typically download the resume file;"
    toast.info("Resume download functionality will be implemented soon")"
  },


  const renderActionButtons = () => {
    switch (application.status) {"
      case "shortlisted": return (""
          <Button variant="default" size="sm">;"
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview;"

          ;"
            <Calendar className="h-4 w-4 mr-1" /> View Interview Details;"

          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">;"
            <FileText className="h-4 w-4 mr-1" /> View Offer;"

          <Button variant="outline" size="sm">;"
            <HelpCircle className="h-4 w-4 mr-1" /> View Feedback;"

            <Calendar className="h - 4 w - 4 mr - 1" /> Prepare for Interview;"
)
          );"
            <Calendar className="h - 4 w - 4 mr - 1" /> View Interview Details;"

          <Button variant="secondary" size="sm" className="bg - green - 100 text - green - 800 hover: bg - green - 200 hover:text - green - 900">;"
            <FileText className="h - 4 w - 4 mr - 1" /> View Offer;"

            <HelpCircle className="h - 4 w - 4 mr - 1" /> View Feedback;"

          ),"
    <Card className="overflow - hidden">;"
      <CardHeader className="pb - 3">;"
        <div className="flex justify - between items - start">;"
</div>
          <div>;
</div>"
            <CardTitle>{application.job?.title || "Unknown Job"};""
            <div className="text - sm text - muted - foreground mt - 1">;"
    <Card className="overflow-hidden">;"
      <CardHeader className="pb-3">;"
        <div className="flex justify-between items-start">;"
            <div className="text-sm text-muted-foreground mt-1">;"
            </div>;
          <StatusBadge status={application.status} />;

      <CardContent className="pb - 3">;"
        <ApplicationProgress status={application.status} className="my - 4" />;"
          <div className="mt - 4 space - y-3">;"




            <CardTitle>{application && application.job?.title || "Unknown Job"};""
          <StatusBadge status={application && application.status} />;

      <CardContent className="pb-3">;"
        <ApplicationProgress status={application && application.status} className="my-4" />;"
          <div className="mt-4 space-y-3">;"
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>;""
                <p className="text-sm text-muted-foreground">{application && application.cover_letter}</p>;"
              </div>;"
              <div className="border rounded-md p-3 bg-muted/20">;"
                <div className="flex justify-between items-center">;"
                  <div className="flex items-center">;"
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />;"
                    <span className="text-sm font-medium">{application && application.resume.title || "Resume"}</span>;""
                    <span className="text-sm font-medium">{application && application.resume.title || "Resume"}</span>;"
                  <Button variant="ghost" size="sm" onClick={handleDownloadResume}>;"
                    <Download className="h-3 w-3 mr-1" /> Download;"

                  ;
                <h4 className="text-sm font-medium mb-1">Match Score</h4>;""
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">;"
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>;"
      <CardFooter className="flex flex-col gap-3 pt-0">;"
        <div className="flex justify-between items-center w-full">;"
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>;"

          <div className="flex gap-2">;"
            <Button;
        <Button;"
          variant="secondary"""
          size="sm"""
          className="w-full""
          asChild;
        >

          <Link to={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client;"

          
        
      
    `;
              <Link to={`/jobs/${application && application.job_id}`}>;
                <ExternalLink className="h-4 w-4 mr-1" /> View Job;"

                <h4 className="text - sm font - medium mb - 1">Your Cover Letter</h4>;""
                <p className="text - sm text - muted - foreground">{application.cover_letter}</p>;"
              </div>)}"
              <div className="border rounded - md p - 3 bg - muted / 20">;"
                <div className="flex justify - between items - center">;"
                  <div className="flex items - center">;"
                    <FileText className="h - 4 w - 4 mr - 2 text - blue - 500" />;"
                    <span className="text - sm font - medium">{application.resume.title || "Resume"}</span>;"
                  <Button variant="ghost" size="sm" on_click={handleDownloadResume}>;"
                    <Download className="h - 3 w - 3 mr - 1" /> Download;"

              </div>)}
                <h4 className="text - sm font - medium mb - 1">Match Score</h4>;""
                  <div className="h - 6 w - 6 rounded - full bg - blue - 100 text - blue - 800 flex items - center justify - center text - xs font - medium">;"
                  <span className="ml - 2 text - xs text - muted - foreground">Relevance to job requirements</span>;"
      <CardFooter className="flex flex - col gap - 3 pt - 0">;"
        <div className="flex justify - between items - center w - full">;"
          <Button variant="ghost" size="sm" on_click={() => set_expanded (!expanded)}>;"

          <div className="flex gap - 2">;"
              variant="outline";""
              size="sm";"
              as_child;
            >;
              <Link to={`/jobs/${application.job_id}`}>;
                <ExternalLink className="h - 4 w - 4 mr - 1" /> View Job;"

          variant="secondary";""
          size="sm";""
          className="w - full";"
          <Link to={`/messages?job_id=${application.job_id}`}>;
            <MessageSquare className="h - 4 w - 4 mr - 1" /> Message Client;"

    );
        <Button ;"
          variant="secondary" ;""
          className="w-full";"
          <Link to={`/messages?jobId=${application.job_id}`}>;

//This would typically download the resume file return (<Button variant="default" size="sm" > <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview );""
case "interview" : default: return (<Card className="overflow-hidden" > <CardHeader className="pb-3" > <div className="flex justify-between items-start" > <div> </div> </div> <StatusBadge status= {"

}/> </div>  {"
  application.cover letter && (<div> <h4 className="text-sm font-medium mb-1" >Your Cover Letter</h4> <p className="text-sm text-muted-foreground" > {"
</div>)
}</p> </div>) 
} </div> </div>) "
  application.match score && (<div> <h4 className="text-sm font-medium mb-1" >Match Score</h4> <div className="flex items-center" > <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium" > {"
</div>)"
}% </div> <span className="ml-2 text-xs text-muted-foreground" >Relevance to job requirements</span> </div> </div>)"
}</div>) "
} <Button variant="outline" size="sm" asChild >   </div> </div> <Button variant="secondary" size="sm" className="w-full" asChild >    )""`;
pr-12325
