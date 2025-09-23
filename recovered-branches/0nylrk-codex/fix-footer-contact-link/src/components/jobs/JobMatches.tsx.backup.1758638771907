
import React from "react";
<<<<<<< HEAD
import { CardHeaderCardTitleCardDescriptionCardContent } from "@/components/ui/card";
=======
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
>>>>>>> origin/auto/autonomy-17186719616
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard";
import { JobMatchCard } from "@/components/jobs/JobMatchCard";
import { useJobMatches } from "@/hooks/useJobMatches";
import { Skeleton } from "@/components/ui/skeleton";

interface JobMatchesProps {
  jobId: string;
}

export function JobMatches({ jobId }: JobMatchesProps) {
<<<<<<< HEAD
  const { matchesisLoadingisProcessingtriggerAIMatching } = useJobMatches(jobId);
=======
  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId);
>>>>>>> origin/auto/autonomy-17186719616
  
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Skeleton className="h-4 w-24" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-full" />
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
<<<<<<< HEAD
          {[123].map((i) => (
=======
          {[1, 2, 3].map((i) => (
>>>>>>> origin/auto/autonomy-17186719616
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

  if (matches.length === 0) {
    return <EmptyMatchesCard onRefresh={triggerAIMatching} isProcessing={isProcessing} />;
  }

  return (
    <div className="space-y-4">
      {matches.map((match) => (
        <JobMatchCard
          key={match.id}
          matchId={match.id}
          talentId={match.talent_profile?.id || ""}
          name={match.talent_profile?.full_name || ""}
          title={match.talent_profile?.professional_title || ""}
          company={match.talent_profile?.company_name || ""}
          avatar={match.talent_profile?.profile_picture_url || ""}
          location={match.talent_profile?.location || "Remote"}
          category={match.talent_profile?.category || "Development"}
          matchPercent={match.match_score || 0}
          skills={match.talent_profile?.skills || []}
        />
      ))}
    </div>
  );
}
