
import { useState } from "react",
import { formatDistanceToNow } from "date-fns",
import { JobApplication } from "@/types/jobs",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { FileText, MessageSquare, HelpCircle, Calendar, ExternalLink, Download } from 'lucide-react'
import Link from "next/link",
import { StatusBadge } from "./StatusBadge",
import { ApplicationProgress } from "./ApplicationProgress",
import { toast } from "sonner",interface ApplicationCardProps {
  application: JobApplication
}

export function ApplicationCard({ application }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false),
import Link from "next/link";

interface ApplicationCardProps {_application: JobApplication;}

export function ApplicationCard(_{_application}: ApplicationCardProps) {_const [expanded, _setExpanded] = useState(false);

  const _handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon")
  },

  const renderActionButtons = () => {
    switch (application.status) {
      case "shortlisted": return (
          <Button variant="default" size="sm">
            <Calendar className="h-4 w-4 mr-1" /> Prepare for Interview
          </Button>
        ),
      case "interview":        return (
          <Button variant=&quot;default&quot; size=&quot;sm&quot;>
            <Calendar className=&quot;h-4 w-4 mr-1&quot; /> Prepare for Interview
          </Button>
        );
      case &quot;interview&quot;:
        return (
          <Button variant=&quot;default&quot; size=&quot;sm&quot;>
            <Calendar className=&quot;h-4 w-4 mr-1&quot; /> View Interview Details
          </Button>
        ),
      case "hired":
        return (
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover: bg-green-200 hover:text-green-900">
            <FileText className="h-4 w-4 mr-1" /> View Offer
          </Button>
        ),
      case "rejected":        return (
          <Button variant=&quot;outline&quot; size=&quot;sm&quot;>
            <HelpCircle className=&quot;h-4 w-4 mr-1&quot; /> View Feedback
          </Button>
        ),
      default:
        return null
    }
  },
  return (
    <Card className=&quot;overflow-hidden&quot;>
      <CardHeader className=&quot;pb-3&quot;>
        <div className=&quot;flex justify-between items-start&quot;>
          <div>
            <CardTitle>{application.job?.title || &quot;Unknown Job&quot;}</CardTitle>
            <div className=&quot;text-sm text-muted-foreground mt-1&quot;>
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}            </div>
          </div>
          <StatusBadge status={_application.status} />
        </div>
      </CardHeader>
      
      <CardContent className=&quot;pb-3&quot;>
        <ApplicationProgress status={application.status} className=&quot;my-4&quot; />
        
        {expanded && (
          <div className=&quot;mt-4 space-y-3&quot;>            {application.cover_letter && (
              <div>
                <h4 className=&quot;text-sm font-medium mb-1&quot;>Your Cover Letter</h4>
                <p className=&quot;text-sm text-muted-foreground&quot;>{application.cover_letter}</p>
              </div>
            )}
            
            {application.resume && (
              <div className=&quot;border rounded-md p-3 bg-muted/20&quot;>
                <div className=&quot;flex justify-between items-center&quot;>
                  <div className=&quot;flex items-center&quot;>
                    <FileText className=&quot;h-4 w-4 mr-2 text-blue-500&quot; />
                    <span className=&quot;text-sm font-medium&quot;>{application.resume.title || &quot;Resume&quot;}</span>
                  </div>
                  <Button variant=&quot;ghost&quot; size=&quot;sm&quot; onClick={handleDownloadResume}>
                    <Download className=&quot;h-3 w-3 mr-1&quot; /> Download                  </Button>
                </div>
              </div>
            )}
            
            {_application.match_score && (
              <div>
                <h4 className=&quot;text-sm font-medium mb-1&quot;>Match Score</h4>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium&quot;>
                    {application.match_score}%
                  </div>
                  <span className=&quot;ml-2 text-xs text-muted-foreground&quot;>Relevance to job requirements</span>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className=&quot;flex flex-col gap-3 pt-0&quot;>
        <div className=&quot;flex justify-between items-center w-full&quot;>
          <Button variant=&quot;ghost&quot; size=&quot;sm&quot; onClick={() => setExpanded(!expanded)}>
            {expanded ? &quot;Show Less&quot; : &quot;Show More&quot;}
          </Button>
          <div className=&quot;flex gap-2&quot;>
            {renderActionButtons()}            <Button 
              variant=&quot;outline&quot; 
              size=&quot;sm&quot;
              asChild
            >
              <Link href={`/jobs/${application.job_id}`}>
                <ExternalLink className=&quot;h-4 w-4 mr-1&quot; /> View Job              </Link>
            </Button>
          </div>
        </div>
        
        <Button 
          variant=&quot;secondary&quot; 
          size=&quot;sm&quot;
          className=&quot;w-full&quot;
          asChild
        >
          <Link href={`/messages?jobId=${application.job_id}`}>
            <MessageSquare className=&quot;h-4 w-4 mr-1&quot; /> Message Client          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
