<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import {
  Card
  CardHeader
  CardTitle
  CardDescription
  CardContent
=======
<<<<<<< HEAD
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


import {;
  Card,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
  CardContent,;

>>>>>>> main
} from "@/components/ui/card";
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard";
import { JobMatchCard } from "@/components/jobs/JobMatchCard";

import { useJobMatches } from "@/hooks/useJobMatches";
import { Skeleton } from "@/components/ui/skeleton";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",
import { JobMatchCard } from "@/components/jobs/JobMatchCard",
import { useJobMatches } from "@/hooks/useJobMatches",
import { Skeleton } from "@/components/ui/skeleton",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> main
interface JobMatchesProps {
  jobId: string
}
export function JobMatches({ jobId }: JobMatchesProps) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  const { matches, isLoading, isProcessing, triggerAIMatching } =
=======
  const { matches, isLoading, isProcessing, triggerAIMatching } =;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

  const { matches, isLoading, isProcessing, triggerAIMatching } =;

>>>>>>> main
    useJobMatches(jobId);

=======
  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======


>>>>>>> main
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main
=======
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",;
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",;
import { JobMatchCard } from "@/components/jobs/JobMatchCard",;
import { useJobMatches } from "@/hooks/useJobMatches",;
import { Skeleton } from "@/components/ui/skeleton",;
<<<<<<< HEAD
interface JobMatchesProps {;
  jobId: string;
}
;
export function JobMatches({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId);
  if (isLoading) {;
    return (;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface JobMatchesProps {;
  jobId: string;
}


export function JobMatches(): any ({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } =;

    useJobMatches(jobId);

  if (isLoading) {;
    return (
>>>>>>> main
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
=======


  if (matches && matches.length === 0) {;

    return (
      <EmptyMatchesCard
        onRefresh={triggerAIMatching}
        isProcessing={isProcessing}
      />;
    );
  }
=======
>>>>>>> main
;
  if (matches.length === 0) {;
    return <EmptyMatchesCard onRefresh={triggerAIMatching} isProcessing={isProcessing} />;
  }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <div className="space-y-4">
      {matches.map((match) => (
        <JobMatchCard
          key={match.id}
          matchId={match.id}
<<<<<<< HEAD
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
=======
          talentId={match.talent_profile?.id || ""}
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <div className="space-y-4">;
      {matches && matches.map((match) => (;
        <JobMatchCard

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

      ))}
    </div>;
  );
=======
import React from './react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components / ui / card';
import { EmptyMatchesCard  } from '@/components / jobs / EmptyMatchesCard';
import { JobMatchCard  } from '@/components / jobs / JobMatchCard';
import { useJobMatches  } from '@/hooks / useJobMatches';
import { Skeleton  } from '@/components / ui / skeleton';
interface JobMatchesProps {
  job_id: string;
}
export /**
 * JobMatches - Function description
 */
function JobMatches() {
  const { matches, is_loading, is_processing, triggerAIMatching } =;
    useJobMatches (job_id);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <Card>;
        <CardHeader>;
          <CardTitle className="flex items - center gap - 2">;
            <Skeleton className="h - 4 w - 24" />;
          </CardTitle>;
          <CardDescription>;
            <Skeleton className="h - 4 w - full" />;
          </CardDescription>;
        </CardHeader>;
        <CardContent className="space - y-4">;
          {[1, 2, 3].map ((i) => (
            <div key={i} className="flex items - center gap - 4">;
              <Skeleton className="h - 12 w - 12 rounded - full" />;
              <div className="space - y-2">;
                <Skeleton className="h - 4 w - 48" />;
                <Skeleton className="h - 4 w - 32" />;
              </div>;
            </div>))}
        </CardContent>;
      </Card>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <EmptyMatchesCard;
        on_refresh={triggerAIMatching}
        is_processing={is_processing}
      />);
  }
  return (
    <div className="space - y-4">;
      {matches.map ((match) => (
        <JobMatchCard;
          key={match.id}
          match_id={match.id}
          talent_id={match.talent_profile?.id || ""}
=======

          talentId={match.talent_profile?.id || ""}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
          name={match.talent_profile?.full_name || ""}
          title={match.talent_profile?.professional_title || ""}
          company={match.talent_profile?.company_name || ""}
          avatar={match.talent_profile?.profile_picture_url || ""}
          location={match.talent_profile?.location || "Remote"}
          category={match.talent_profile?.category || "Development"}
<<<<<<< HEAD
          matchPercent={match.match_score || 0}
          skills={match.talent_profile?.skills || []}
        />
      ))}
<<<<<<< HEAD
    </div>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
    </div>
=======
    </div>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
=======
          match_percent={match.match_score || 0}
          skills={match.talent_profile?.skills || []}

        />
      ))}

  );

>>>>>>> main
}