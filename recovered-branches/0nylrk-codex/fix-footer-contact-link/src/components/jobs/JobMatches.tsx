
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",
import { JobMatchCard } from "@/components/jobs/JobMatchCard",
import { useJobMatches } from "@/hooks/useJobMatches",
import { Skeleton } from "@/components/ui/skeleton",
=======
import React from &quot;react&quot;;
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from &quot;@/components/ui/card&quot;;
import { EmptyMatchesCard } from &quot;@/components/jobs/EmptyMatchesCard&quot;;
import { JobMatchCard } from &quot;@/components/jobs/JobMatchCard&quot;;
import { useJobMatches } from &quot;@/hooks/useJobMatches&quot;;
import { Skeleton } from &quot;@/components/ui/skeleton&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface JobMatchesProps {
  jobId: string
}

export function JobMatches({ jobId }: JobMatchesProps) {
  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),
=======
import React from "react";

interface JobMatchesProps {_jobId: string;}

export function JobMatches(_{_jobId}: JobMatchesProps) {_const { matches, _isLoading, _isProcessing, _triggerAIMatching} = useJobMatches(jobId);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  if (isLoading) {_return (_<Card>
        <CardHeader>
          <CardTitle className=&quot;flex items-center gap-2&quot;>
            <Skeleton className=&quot;h-4 w-24&quot; />
          </CardTitle>
          <CardDescription>
            <Skeleton className=&quot;h-4 w-full&quot; />
          </CardDescription>
        </CardHeader>
<<<<<<< HEAD
        <CardContent className=&quot;space-y-4&quot;>
          {[1, 2, 3].map((i) => (
            <div key={i} className=&quot;flex items-center gap-4&quot;>
              <Skeleton className=&quot;h-12 w-12 rounded-full&quot; />
              <div className=&quot;space-y-2&quot;>
                <Skeleton className=&quot;h-4 w-48&quot; />
                <Skeleton className=&quot;h-4 w-32&quot; />
=======
        <CardContent className="space-y-4">
          {[1, _2, _3].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-32" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }

<<<<<<< HEAD
  if (matches.length === 0) {
    return <EmptyMatchesCard onRefresh={triggerAIMatching} isProcessing={isProcessing} />
  }

  return (
    <div className=&quot;space-y-4&quot;>
      {matches.map((match) => (
        <JobMatchCard
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
          skills={match.talent_profile?.skills || []}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
      ))}
    </div>
  )
}
