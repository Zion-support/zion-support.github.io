<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobMatches.tsx

<<<<<<< HEAD
=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobMatches.tsx
import {;
  Card,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
  CardContent,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobMatches.tsx

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobMatches.tsx
} from "@/components/ui/card";
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard";
import { JobMatchCard } from "@/components/jobs/JobMatchCard";
import { useJobMatches } from "@/hooks/useJobMatches";
import { Skeleton } from "@/components/ui/skeleton";
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
} from "@/components/ui/card";
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard";
import { JobMatchCard } from "@/components/jobs/JobMatchCard";

import { useJobMatches } from "@/hooks/useJobMatches";
import { Skeleton } from "@/components/ui/skeleton";

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",
import { JobMatchCard } from "@/components/jobs/JobMatchCard",
import { useJobMatches } from "@/hooks/useJobMatches",
import { Skeleton } from "@/components/ui/skeleton",
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface JobMatchesProps {
  jobId: string
}
export function JobMatches({ jobId }: JobMatchesProps) {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  const { matches, isLoading, isProcessing, triggerAIMatching } =;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    useJobMatches(jobId);

  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),
<<<<<<< HEAD

=======
  


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  const { matches, isLoading, isProcessing, triggerAIMatching } =
  const { matches, isLoading, isProcessing, triggerAIMatching } =;
    useJobMatches(jobId);

  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",;
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",;
import { JobMatchCard } from "@/components/jobs/JobMatchCard",;
import { useJobMatches } from "@/hooks/useJobMatches",;
import { Skeleton } from "@/components/ui/skeleton",;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface JobMatchesProps {;
  jobId: string;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobMatches.tsx


export function JobMatches(): any ({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } =;

========
export function JobMatches(): any ({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } =;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobMatches.tsx
    useJobMatches(jobId);
  if (isLoading) {;
    return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
interface JobMatchesProps {;
  jobId: string;
}
;
export function JobMatches({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId);
  if (isLoading) {;
    return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobMatches.tsx


  if (matches && matches.length === 0) {;

========
  if (matches && matches.length === 0) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobMatches.tsx
    return (
      <EmptyMatchesCard
        onRefresh={triggerAIMatching}
        isProcessing={isProcessing}
      />;
    );
  }
=======
=======
    );
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
  if (matches.length === 0) {;
    return <EmptyMatchesCard onRefresh={triggerAIMatching} isProcessing={isProcessing} />;
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <div className="space-y-4">;
      {matches && matches.map((match) => (;
        <JobMatchCard
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobMatches.tsx
<<<<<<< HEAD
          key={match.id}
          matchId={match.id}
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobMatches.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobMatches.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobMatches.tsx
      ))}
    </div>;
  );
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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="space-y-4">
      {matches.map((match) => (
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          name={match.talent_profile?.full_name || ""}
          title={match.talent_profile?.professional_title || ""}
          company={match.talent_profile?.company_name || ""}
          avatar={match.talent_profile?.profile_picture_url || ""}
          location={match.talent_profile?.location || "Remote"}
          category={match.talent_profile?.category || "Development"}
<<<<<<< HEAD
          match_percent={match.match_score || 0}
          skills={match.talent_profile?.skills || []}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobMatches.tsx

        />
      ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  );

}
========
        />))}
    </div>);
}
=======
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
        <JobMatchCard;          key={match.id}
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
        />;
      ))}
    </div>;
  ),;}
 interface JobMatchesProps {
  jobId: string 
}export function JobMatches ({
  jobId 
}: JobMatchesProps) {
  const {
  matches, isLoading, isProcessing, triggerAIMatching 
}= useJobMatches (jobId);
return (<Card> <CardHeader> <CardTitle className="flex items-center gap-2" > <Skeleton className="h-4 w-24" /> </CardTitle> <CardDescription> <Skeleton className="h-4 w-full" /> </CardDescription> </CardHeader> </div> </div>) ) 
}</CardContent> </Card>) 
}/>) ) 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/jobs/JobMatches.tsx
=======
          matchPercent={match.match_score || 0}
          skills={match.talent_profile?.skills || []}
        />
      ))}
    </div>;
    </div>
    </div>;
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
