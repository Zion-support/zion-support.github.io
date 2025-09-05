

interface JobMatchCardProps {_match: JobMatch;
  onApply: (_matchId: string, _jobId: string) => void;
  onDecline: (_matchId: string) => void;
  showApplied?: boolean;}

export function JobMatchesCard(_{_match, _onApply, _onDecline, _showApplied = false}: JobMatchCardProps) {_const _job = match.job;
  
  if (!job) return null;
  
  return (
    <Card className="overflow-hidden border-l-4 border-l-blue-500">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{job.title}</CardTitle>
            <CardDescription>
              Posted {_format(new Date(job.created_at), _"MMM d")}
              {_match.status === 'viewed' && match.viewed_at && (
                <span className="ml-2 text-xs text-muted-foreground">
                  (Viewed {format(new Date(match.viewed_at), _"MMM d")})
                </span>
              )}
            </CardDescription>
          </div>
          <Badge variant="outline" className="flex items-center">
            {_match.match_score}% Match
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {_job.description}
        </p>
        
        {_match.matched_skills?.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1">Matched skills:</p>
            <div className="flex flex-wrap gap-1">
              {match.matched_skills.slice(0, _5).map(_(skill, _i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {_skill}
                </Badge>
              ))}
              {_match.matched_skills.length > 5 && (
                <Badge variant="secondary" className="text-xs">
                  +{match.matched_skills.length - 5}
                </Badge>
              )}
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-2 mb-2 mt-3">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
            ${_job.budget.min} - ${_job.budget.max}
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
            Due: {_format(new Date(job.deadline), _"MMM d, _yyyy")}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {_match.status === 'applied' || showApplied ? (
          <div className="w-full flex items-center justify-center p-2 bg-green-50 text-green-700 rounded-md">
            <CheckCircle className="h-4 w-4 mr-2" />
            Applied
          </div>
        ) : match.status === 'declined' ? (
          <div className="w-full flex items-center justify-center p-2 bg-red-50 text-red-700 rounded-md">
            <XCircle className="h-4 w-4 mr-2" />
            Declined
          </div>
        ) : (_<div className="flex gap-2 w-full">
            <Button 
              className="flex-1" 
              onClick={() => onApply(match.id, _job.id)}
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={_() => onDecline(match.id)}
            >
              Decline
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
