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
interface ApplicationCardProps {;
  application: JobApplication;
}

export function ApplicationCard(): any ({ application }: ApplicationCardProps) {;
  const [expanded, setExpanded] = useState(false);

  const handleDownloadResume = () => {;
    // This would typically download the resume file;
    toast && toast.info("Resume download functionality will be implemented soon")
};

  const renderActionButtons = () => {;
    switch (application && application.status) {;
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
import { ApplicationProgress } from "./ApplicationProgress",
import { toast } from "sonner",
interface ApplicationCardProps {
  application: JobApplication
}export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),

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
          asChild;
        >
          <Link to={`/messages?jobId=${application.job_id}`}>"
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client;
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
