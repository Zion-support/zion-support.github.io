
<<<<<<< HEAD
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",;
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",;
import { JobMatchCard } from "@/components/jobs/JobMatchCard",;
import { useJobMatches } from "@/hooks/useJobMatches",;
import { Skeleton } from "@/components/ui/skeleton",;
;
interface JobMatchesProps {;
  jobId:string;
}
;
export function JobMatches({ jobId } JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),;
  ;
  if (isLoading) {;
    return (;
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;
            <Skeleton className="h-4 w-24" />;
          </CardTitle>;
          <CardDescription>;
            <Skeleton className="h-4 w-full" />;
          </CardDescription>;
        </CardHeader>;
        <CardContent className="space-y-4">;
          {[1, 2, 3].map((i) => (;
            <div key={i} className="flex items-center gap-4">;
              <Skeleton className="h-12 w-12 rounded-full" />;
              <div className="space-y-2">;
                <Skeleton className="h-4 w-48" />;
                <Skeleton className="h-4 w-32" />;
              </div>;
            </div>;
          ))}
        </CardContent>;
      </Card>;
    ),;
  }
;
  if (matches.length === 0) {;
    return <EmptyMatchesCard onRefresh={triggerAIMatching} isProcessing={isProcessing} />,;
  }
;
  return (;
    <div className="space-y-4">;
      {matches.map((match) => (;
        <JobMatchCard;
=======
import React from "react",
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",
import { JobMatchCard } from "@/components/jobs/JobMatchCard",
import { useJobMatches } from "@/hooks/useJobMatches",
import { Skeleton } from "@/components/ui/skeleton",interface JobMatchesProps {
  jobId: string
}

export function JobMatches({ jobId }: JobMatchesProps) {
  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),
import React from "react";

interface JobMatchesProps {_jobId: string;}

export function JobMatches(_{_jobId}: JobMatchesProps) {_const { matches, _isLoading, _isProcessing, _triggerAIMatching} = useJobMatches(jobId);
  
  if (isLoading) {_return (_<Card>
        <CardHeader>
          <CardTitle className=&quot;flex items-center gap-2&quot;>
            <Skeleton className=&quot;h-4 w-24&quot; />
          </CardTitle>
          <CardDescription>
            <Skeleton className=&quot;h-4 w-full&quot; />
          </CardDescription>
        </CardHeader>
        <CardContent className=&quot;space-y-4&quot;>
          {[1, 2, 3].map((i) => (
            <div key={i} className=&quot;flex items-center gap-4&quot;>
              <Skeleton className=&quot;h-12 w-12 rounded-full&quot; />
              <div className=&quot;space-y-2&quot;>
                <Skeleton className=&quot;h-4 w-48&quot; />
                <Skeleton className=&quot;h-4 w-32&quot; />              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }

  if (matches.length === 0) {
    return <EmptyMatchesCard onRefresh={triggerAIMatching} isProcessing={isProcessing} />
  }

  return (
    <div className=&quot;space-y-4&quot;>
      {matches.map((match) => (
        <JobMatchCard
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          key={match.id}
          matchId={match.id}
          talentId={match.talent_profile?.id || "&quot;}
          name={match.talent_profile?.full_name || "&quot;}
          title={match.talent_profile?.professional_title || "&quot;}
          company={match.talent_profile?.company_name || "&quot;}
          avatar={match.talent_profile?.profile_picture_url || "&quot;}
          location={match.talent_profile?.location || &quot;Remote&quot;}
          category={match.talent_profile?.category || &quot;Development"}
          matchPercent={match.match_score || 0}
<<<<<<< HEAD
          skills={match.talent_profile?.skills || []}
        />;
      ))}
    </div>;
  ),;
=======
          skills={match.talent_profile?.skills || []}        />
      ))}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
