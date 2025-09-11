
<<<<<<< HEAD
<<<<<<< HEAD
} from "@/components/ui/card";
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard";
import { JobMatchCard } from "@/components/jobs/JobMatchCard";
import { useJobMatches } from "@/hooks/useJobMatches";
import { Skeleton } from "@/components/ui/skeleton";

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {;
  Card,;
  CardHeader,;
  CardTitle,;
  CardDescription,;
  CardContent,;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from "@/components/ui/card";
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard";
import { JobMatchCard } from "@/components/jobs/JobMatchCard";

import { useJobMatches } from "@/hooks/useJobMatches";
import { Skeleton } from "@/components/ui/skeleton";
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react",
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",
import { JobMatchCard } from "@/components/jobs/JobMatchCard",
import { useJobMatches } from "@/hooks/useJobMatches",
import { Skeleton } from "@/components/ui/skeleton",

=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface JobMatchesProps {
  jobId: string
}
export function JobMatches({ jobId }: JobMatchesProps) {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { matches, isLoading, isProcessing, triggerAIMatching } =;

    useJobMatches(jobId);

  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),
  


<<<<<<< HEAD
<<<<<<< HEAD

  const { matches, isLoading, isProcessing, triggerAIMatching } =
  const { matches, isLoading, isProcessing, triggerAIMatching } =;
    useJobMatches(jobId);

  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),
  
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",;
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",;
import { JobMatchCard } from "@/components/jobs/JobMatchCard",;
import { useJobMatches } from "@/hooks/useJobMatches",;
import { Skeleton } from "@/components/ui/skeleton",;
<<<<<<< HEAD
<<<<<<< HEAD
export function JobMatches(): any ({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } =;
    useJobMatches(jobId);
  if (isLoading) {;
    return (

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
interface JobMatchesProps {;
  jobId: string;
}
;
export function JobMatches({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId);
  if (isLoading) {;
    return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface JobMatchesProps {;
  jobId: string;
}


export function JobMatches(): any ({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } =;

    useJobMatches(jobId);

  if (isLoading) {;
    return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
  }


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (matches && matches.length === 0) {;
=======
  if (matches && matches.length === 0) {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return (
      <EmptyMatchesCard
        onRefresh={triggerAIMatching}
        isProcessing={isProcessing}
      />;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
    );
  }
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  if (matches.length === 0) {;
    return <EmptyMatchesCard onRefresh={triggerAIMatching} isProcessing={isProcessing} />;
  }



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="space-y-4">;
      {matches && matches.map((match) => (;
        <JobMatchCard
<<<<<<< HEAD

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

          talentId={match.talent_profile?.id || ""}
<<<<<<< HEAD
  return (
    <div className="space-y-4">
      {matches.map((match) => (
        <JobMatchCard
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          name={match.talent_profile?.full_name || ""}
          title={match.talent_profile?.professional_title || ""}
          company={match.talent_profile?.company_name || ""}
          avatar={match.talent_profile?.profile_picture_url || ""}
          location={match.talent_profile?.location || "Remote"}
          category={match.talent_profile?.category || "Development"}
<<<<<<< HEAD
<<<<<<< HEAD
        />))}
    </div>);
}
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
          matchPercent={match.match_score || 0}
          skills={match.talent_profile?.skills || []}
        />
      ))}
    </div>;
    </div>
    </div>;
  );
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          match_percent={match.match_score || 0}
          skills={match.talent_profile?.skills || []}

        />
      ))}

  );

<<<<<<< HEAD
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
