



  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),






import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",;
    return (



    );
  }






  return (
    <div className="space - y-4">;
      {matches.map ((match) => (
        <JobMatchCard;
          key={match.id}
          match_id={match.id}
          talent_id={match.talent_profile?.id || ""}



