

import {;
  Card,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
  CardContent,;

} from "@/components/ui/card";""
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard";""
import { JobMatchCard } from "@/components/jobs/JobMatchCard";""
import { useJobMatches } from "@/hooks/useJobMatches";""
import { Skeleton } from "@/components/ui/skeleton";""
import React from "react";"
import {
  // TODO: Implement
}
  Card;
  CardHeader;
  CardTitle;
  CardDescription;
  CardContent;"
  // TODO: Implement
  Card,
  CardHeader,
  CardTitle,
  CardDescription,


"
import React from "react",""
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",""
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",""
import { JobMatchCard } from "@/components/jobs/JobMatchCard",""
import { useJobMatches } from "@/hooks/useJobMatches",""
import { Skeleton } from "@/components/ui/skeleton","
interface JobMatchesProps {
  // TODO: Implement
  jobId: string;
export function JobMatches({ jobId }: JobMatchesProps) {

  const { matches, isLoading, isProcessing, triggerAIMatching } =;

    useJobMatches(jobId);

  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),
  



  const { matches, isLoading, isProcessing, triggerAIMatching } =

  
  if (isLoading) {
    return (
      <Card>

        <CardHeader>
          <CardTitle className="flex items-center gap-2">"
            <Skeleton className="h-4 w-24" />"

          
          <CardDescription>
            <Skeleton className="h-4 w-full" />"

          
        <CardContent className="space-y-4">"
            <div key={i} className="flex items-center gap-4">"
</div>"
              <Skeleton className="h-12 w-12 rounded-full" />"
              <div className="space-y-2">"
                <Skeleton className="h-4 w-48" />"
                <Skeleton className="h-4 w-32" />"

              </div>
      <Card>;

        <CardHeader>;
          <CardTitle className="flex items-center gap-2">;"
            <Skeleton className="h-4 w-24" />;"

          ;
          <CardDescription>;
            <Skeleton className="h-4 w-full" />;"

        ;"
        <CardContent className="space-y-4">;"
            <div key={i} className="flex items-center gap-4">;"
              <Skeleton className="h-12 w-12 rounded-full" />;"
              <div className="space-y-2">;"
                <Skeleton className="h-4 w-48" />;"
                <Skeleton className="h-4 w-32" />;"

              </div>;
      <EmptyMatchesCard;
        onRefresh={triggerAIMatching}
        isProcessing={isProcessing}
      />;

    return <EmptyMatchesCard onRefresh={triggerAIMatching} isProcessing={isProcessing} />;
    <div className="space-y-4">;"
        <JobMatchCard;
          key={match && match.id}
          matchId={match && match.id}"
          talentId={match && match.talent_profile?.id || ""}""
          name={match && match.talent_profile?.full_name || ""}""
          title={match && match.talent_profile?.professional_title || ""}""
          company={match && match.talent_profile?.company_name || ""}""
          avatar={match && match.talent_profile?.profile_picture_url || ""}""
          location={match && match.talent_profile?.location || "Remote"}""
          category={match && match.talent_profile?.category || "Development"}"
          matchPercent={match && match.match_score || 0}
          skills={match && match.talent_profile?.skills || []}


          <CardTitle className="flex items - center gap - 2">;"
            <Skeleton className="h - 4 w - 24" />;"

            <Skeleton className="h - 4 w - full" />;"

        <CardContent className="space - y-4">;"
            <div key={i} className="flex items - center gap - 4">;"
              <Skeleton className="h - 12 w - 12 rounded - full" />;"
              <div className="space - y-2">;"
                <Skeleton className="h - 4 w - 48" />;"
                <Skeleton className="h - 4 w - 32" />;"

              </div>;)
            </div>))}
      );
        on_refresh={triggerAIMatching}
        is_processing={is_processing}
      />);
    <div className="space - y-4">;"
          key={match.id}
          match_id={match.id}"
          talent_id={match.talent_profile?.id || ""}""
          talentId={match.talent_profile?.id || ""}"
  return ("
    <div className="space-y-4">"

          matchId={match.id}"
          talentId={match.talent_profile?.id |""}""
          name={match.talent_profile?.full_name |""}""
          title={match.talent_profile?.professional_title |""}""
          company={match.talent_profile?.company_name |""}""
          avatar={match.talent_profile?.profile_picture_url |""}""
          location={match.talent_profile?.location |"Remote"}""
          category={match.talent_profile?.category |"Development"}"
          matchPercent={match.match_score |0}
          skills={match.talent_profile?.skills |[]}
        />

    </div>);"