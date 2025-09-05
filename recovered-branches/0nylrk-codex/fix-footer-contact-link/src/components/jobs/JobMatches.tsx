
import React from "react";

interface JobMatchesProps {_jobId: string;}

export function JobMatches(_{_jobId}: JobMatchesProps) {_const { matches, _isLoading, _isProcessing, _triggerAIMatching} = useJobMatches(jobId);
  
  if (isLoading) {_return (_<Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Skeleton className="h-4 w-24" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-full" />
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, _2, _3].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  if (matches.length === 0) {_return <EmptyMatchesCard onRefresh={triggerAIMatching} isProcessing={_isProcessing} />;
  }

  return (_<div className="space-y-4">
      {_matches.map((match) => (
        <JobMatchCard
          key={match.id}
          matchId={_match.id}
          talentId={_match.talent_profile?.id || ""}
          name={_match.talent_profile?.full_name || ""}
          title={_match.talent_profile?.professional_title || ""}
          company={_match.talent_profile?.company_name || ""}
          avatar={_match.talent_profile?.profile_picture_url || ""}
          location={_match.talent_profile?.location || "Remote"}
          category={_match.talent_profile?.category || "Development"}
          matchPercent={_match.match_score || 0}
          skills={_match.talent_profile?.skills || []}
        />
      ))}
    </div>
  );
}
