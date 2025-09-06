<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import {
  Card
  CardHeader
  CardTitle
  CardDescription
  CardContent
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,;
=======


import {;
  Card,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
  CardContent,;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
} from "@/components/ui/card";
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard";
import { JobMatchCard } from "@/components/jobs/JobMatchCard";

import { useJobMatches } from "@/hooks/useJobMatches";
import { Skeleton } from "@/components/ui/skeleton";
<<<<<<< HEAD

import React from "react",
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",
import { JobMatchCard } from "@/components/jobs/JobMatchCard",
import { useJobMatches } from "@/hooks/useJobMatches",
import { Skeleton } from "@/components/ui/skeleton",
=======
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface JobMatchesProps {
  jobId: string
}
export function JobMatches({ jobId }: JobMatchesProps) {
<<<<<<< HEAD
<<<<<<< HEAD

  const { matches, isLoading, isProcessing, triggerAIMatching } =
  const { matches, isLoading, isProcessing, triggerAIMatching } =;
=======

  const { matches, isLoading, isProcessing, triggerAIMatching } =;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    useJobMatches(jobId);

  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),
  
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
<<<<<<< HEAD
          ))}
        </CardContent>
      </Card>
    );
  }
  if (matches.length === 0) {
    return (
      <EmptyMatchesCard
        onRefresh={triggerAIMatching}
        isProcessing={isProcessing}
      />
    );
  }

=======



=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",;
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",;
import { JobMatchCard } from "@/components/jobs/JobMatchCard",;
import { useJobMatches } from "@/hooks/useJobMatches",;
import { Skeleton } from "@/components/ui/skeleton",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface JobMatchesProps {;
  jobId: string;
}


export function JobMatches(): any ({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } =;

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


  if (matches && matches.length === 0) {;

    return (
      <EmptyMatchesCard
        onRefresh={triggerAIMatching}
        isProcessing={isProcessing}
      />;
    );
  }
=======
;
  if (matches.length === 0) {;
    return <EmptyMatchesCard onRefresh={triggerAIMatching} isProcessing={isProcessing} />;
  }

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return (
    <div className="space-y-4">;
      {matches && matches.map((match) => (;
        <JobMatchCard
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
      ))}
    </div>
          talentId={match.talent_profile?.id || ""}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          name={match.talent_profile?.full_name || ""}
          title={match.talent_profile?.professional_title || ""}
          company={match.talent_profile?.company_name || ""}
          avatar={match.talent_profile?.profile_picture_url || ""}
          location={match.talent_profile?.location || "Remote"}
          category={match.talent_profile?.category || "Development"}
          match_percent={match.match_score || 0}
          skills={match.talent_profile?.skills || []}

        />
      ))}
<<<<<<< HEAD
    </div>;
    </div>
    </div>;
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  );

}