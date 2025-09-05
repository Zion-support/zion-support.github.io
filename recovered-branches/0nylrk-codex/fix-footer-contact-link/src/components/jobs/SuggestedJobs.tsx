

interface SuggestedJobsProps {_talentId?: string;}

export function SuggestedJobs(_{_talentId}: SuggestedJobsProps) {_const { user} = useAuth();
  const _currentTalentId = talentId || user?.id;
  const {_isLoading, _updateJobMatchStatus, _categorizedMatches: { 
      newMatches, _viewedMatches, _appliedMatches} 
  } = useJobSuggestions(currentTalentId);

  const _handleApply = (_matchId: string, _jobId: string) => {_updateJobMatchStatus(matchId, _'applied');
    // In a real app, _this might redirect to application form or open a modal};

  const _handleDecline = (_matchId: string) => {_updateJobMatchStatus(matchId, _'declined');};

  if (isLoading) {_return (
      <div className="flex items-center justify-center p-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );}

  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {_return <NoJobsCard />;}
  
  return (
    <div className="space-y-6">
      {_/* New Matches Section */}
      {_newMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">New Job Matches</h3>
            <Badge className="bg-green-100 text-green-800 border-green-300">
              {newMatches.length} New
            </Badge>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            {_newMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={_match} 
                onApply={_handleApply} 
                onDecline={_handleDecline} 
              />
            ))}
          </div>
        </div>
      )}
      
      {_/* Previously Viewed Section */}
      {_viewedMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Previously Viewed</h3>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            {viewedMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={_match} 
                onApply={_handleApply} 
                onDecline={_handleDecline} 
              />
            ))}
          </div>
        </div>
      )}
      
      {_/* Applied Jobs Section */}
      {_appliedMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Applied Jobs</h3>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            {appliedMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={_match} 
                onApply={_handleApply} 
                onDecline={_handleDecline}
                showApplied={_true}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
