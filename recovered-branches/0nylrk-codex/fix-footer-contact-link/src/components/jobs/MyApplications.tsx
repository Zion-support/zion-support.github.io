
import { useState } from &quot;react&quot;;
import { useJobApplications } from &quot;@/hooks/useJobApplications&quot;;
import { Card, CardContent, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Loader2, MessageSquare, ExternalLink } from &quot;lucide-react&quot;;
import { formatDistanceToNow } from &quot;date-fns&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { ApplicationStatus } from &quot;@/types/jobs&quot;;

export function MyApplications() {
  const { applications, isLoading, error } = useJobApplications();
  
  const getStatusBadge = (status: ApplicationStatus) => {
    switch (status) {
      case &quot;new&quot;:
        return <Badge variant=&quot;secondary&quot;>New</Badge>;
      case &quot;viewed&quot;:
        return <Badge variant=&quot;outline&quot;>Viewed</Badge>;
      case &quot;shortlisted&quot;:
        return <Badge className=&quot;bg-blue-100 text-blue-800&quot;>Shortlisted</Badge>;
      case &quot;interview&quot;:
        return <Badge className=&quot;bg-purple-100 text-purple-800&quot;>Interview</Badge>;
      case &quot;hired&quot;:
        return <Badge className=&quot;bg-green-100 text-green-800&quot;>Hired</Badge>;
      case &quot;rejected&quot;:
        return <Badge className=&quot;bg-red-100 text-red-800&quot;>Rejected</Badge>;
      default:
        return <Badge variant=&quot;outline&quot;>{status}</Badge>;
    }
  };
  
  if (isLoading) {
    return (
      <div className=&quot;flex justify-center items-center p-8&quot;>
        <Loader2 className=&quot;h-8 w-8 animate-spin text-primary&quot; />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className=&quot;text-center p-6 border rounded-md bg-red-50 text-red-800&quot;>
        <p>{error}</p>
      </div>
    );
  }
  
  if (applications.length === 0) {
    return (
      <Card className=&quot;bg-muted/30&quot;>
        <CardContent className=&quot;pt-6 text-center&quot;>
          <p className=&quot;text-muted-foreground&quot;>
            You haven't submitted any applications yet.
          </p>
          <Button className=&quot;mt-4&quot; asChild>
            <Link to=&quot;/jobs&quot;>Browse Jobs</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className=&quot;grid gap-4 md:grid-cols-2&quot;>
      {applications.map((application) => (
        <Card key={application.id}>
          <CardHeader className=&quot;pb-2&quot;>
            <div className=&quot;flex justify-between items-start&quot;>
              <CardTitle className=&quot;text-lg&quot;>
                {application.job?.title || &quot;Unknown Job&quot;}
              </CardTitle>
              {getStatusBadge(application.status)}
            </div>
            <p className=&quot;text-sm text-muted-foreground&quot;>
              Applied {formatDistanceToNow(new Date(application.created_at), { addSuffix: true })}
            </p>
          </CardHeader>
          <CardContent>
            <div className=&quot;space-y-3&quot;>
              {application.cover_letter && (
                <p className=&quot;text-sm text-muted-foreground line-clamp-2 mb-2&quot;>
                  {application.cover_letter}
                </p>
              )}
              
              <div className=&quot;flex justify-between items-center&quot;>
                <Button 
                  variant=&quot;outline&quot; 
                  size=&quot;sm&quot; 
                  className=&quot;text-xs&quot;
                  asChild
                >
                  <Link to={`/jobs/${application.job_id}`}>
                    <ExternalLink className=&quot;h-3 w-3 mr-1&quot; /> View Job
                  </Link>
                </Button>
                
                <Button 
                  variant=&quot;default&quot; 
                  size=&quot;sm&quot;
                  className=&quot;text-xs&quot;
                  asChild
                >
                  <Link to={`/messages?jobId=${application.job_id}`}>
                    <MessageSquare className=&quot;h-3 w-3 mr-1&quot; /> Contact Client
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
