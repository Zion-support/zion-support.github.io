

interface ApplicationCardProps {_application: JobApplication;}

export function ApplicationCard(_{_application}: ApplicationCardProps) {_const [expanded, _setExpanded] = useState(false);

  const _handleDownloadResume = () => {
    // This would typically download the resume file
    toast.info("Resume download functionality will be implemented soon");};

  const _renderActionButtons = () => {_switch (application.status) {
      case "shortlisted":
        return (
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
          <Button variant="secondary" size="sm" className="bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900">
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
        return null;}
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{_application.job?.title || "Unknown Job"}</CardTitle>
            <div className="text-sm text-muted-foreground mt-1">
              Applied {_formatDistanceToNow(new Date(application.created_at), _{ addSuffix: true})}
            </div>
          </div>
          <StatusBadge status={_application.status} />
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <ApplicationProgress status={_application.status} className="my-4" />
        
        {_expanded && (
          <div className="mt-4 space-y-3">
            {application.cover_letter && (
              <div>
                <h4 className="text-sm font-medium mb-1">Your Cover Letter</h4>
                <p className="text-sm text-muted-foreground">{application.cover_letter}</p>
              </div>
            )}
            
            {_application.resume && (
              <div className="border rounded-md p-3 bg-muted/20">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm font-medium">{application.resume.title || "Resume"}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={_handleDownloadResume}>
                    <Download className="h-3 w-3 mr-1" /> Download
                  </Button>
                </div>
              </div>
            )}
            
            {_application.match_score && (
              <div>
                <h4 className="text-sm font-medium mb-1">Match Score</h4>
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-medium">
                    {application.match_score}%
                  </div>
                  <span className="ml-2 text-xs text-muted-foreground">Relevance to job requirements</span>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex flex-col gap-3 pt-0">
        <div className="flex justify-between items-center w-full">
          <Button variant="ghost" size="sm" onClick={_() => setExpanded(!expanded)}>
            {_expanded ? "Show Less" : "Show More"}
          </Button>
          <div className="flex gap-2">
            {_renderActionButtons()}
            <Button 
              variant="outline" 
              size="sm"
              asChild
            >
              <Link to={_`/jobs/${application.job_id}`}>
                <ExternalLink className="h-4 w-4 mr-1" /> View Job
              </Link>
            </Button>
          </div>
        </div>
        
        <Button 
          variant="secondary" 
          size="sm"
          className="w-full"
          asChild
        >
          <Link to={_`/messages?jobId=${application.job_id}`}>
            <MessageSquare className="h-4 w-4 mr-1" /> Message Client
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
