
import React from "react";
<<<<<<< HEAD
import {
  Card
  CardHeader
  CardTitle
  CardDescription
  CardContent
=======
import {;
  Card,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
  CardContent,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from "@/components/ui/card";
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard";
import { JobMatchCard } from "@/components/jobs/JobMatchCard";

import { useJobMatches } from "@/hooks/useJobMatches";
import { Skeleton } from "@/components/ui/skeleton";
interface JobMatchesProps {;
  jobId: string;
}
<<<<<<< HEAD
export function JobMatches({ jobId }: JobMatchesProps) {

  const { matches, isLoading, isProcessing, triggerAIMatching } =
=======

export function JobMatches(): any ({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } =;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    useJobMatches(jobId);

  if (isLoading) {;
    return (
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
    );
  }
<<<<<<< HEAD
  if (matches.length === 0) {
=======

  if (matches && matches.length === 0) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <EmptyMatchesCard
        onRefresh={triggerAIMatching}
        isProcessing={isProcessing}
      />;
    );
  }
  return (
    <div className="space-y-4">;
      {matches && matches.map((match) => (;
        <JobMatchCard
<<<<<<< HEAD
          key={match.id}
          matchId={match.id}
          talentId={match.talent_profile?.id |""}
          name={match.talent_profile?.full_name |""}
          title={match.talent_profile?.professional_title |""}
          company={match.talent_profile?.company_name |""}
          avatar={match.talent_profile?.profile_picture_url |""}
          location={match.talent_profile?.location |"Remote"}
          category={match.talent_profile?.category |"Development"}
          matchPercent={match.match_score |0}
          skills={match.talent_profile?.skills |[]}
        />
=======
          key={match && match.id}
          matchId={match && match.id}
          talentId={match && match.talent_profile?.id || ""}
          name={match && match.talent_profile?.full_name || ""}
          title={match && match.talent_profile?.professional_title || ""}
          company={match && match.talent_profile?.company_name || ""}
          avatar={match && match.talent_profile?.profile_picture_url || ""}
          location={match && match.talent_profile?.location || "Remote"}
          category={match && match.talent_profile?.category || "Development"}
          matchPercent={match && match.match_score || 0}
          skills={match && match.talent_profile?.skills || []}
        />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      ))}
    </div>;
  );
}