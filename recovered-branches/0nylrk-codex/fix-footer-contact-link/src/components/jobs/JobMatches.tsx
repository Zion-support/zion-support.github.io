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
=======

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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {;
  Card,;
  CardHeader,;
  CardTitle,;

  CardDescription,;
  CardContent,;
<<<<<<< HEAD
} from "@/components/ui/card";"
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard";"
import { JobMatchCard } from "@/components/jobs/JobMatchCard";"
import { useJobMatches } from "@/hooks/useJobMatches";"
import { Skeleton } from "@/components/ui/skeleton";"
import React from "react";"
import {
  }
  Card,
CardHeader
  CardTitle,
CardDescription
  CardContent,
  }
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
} from "@/components/ui/card";
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard";
import { JobMatchCard } from "@/components/jobs/JobMatchCard";

import { useJobMatches } from "@/hooks/useJobMatches";
import { Skeleton } from "@/components/ui/skeleton";
<<<<<<< HEAD
=======
<<<<<<< HEAD
interface JobMatchesProps {
  jobId: string}

export function JobMatches({ jobId }: JobMatchesProps) {
  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches($2);
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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React from "react";
import {};
  Card;
  CardHeader;
  CardTitle;
  CardDescription;
  CardContent"
import React from "react";

>>>>>>> origin/chore/fix-lint-and-merge
  Card,
  CardHeader,
  CardTitle,
  CardDescription,;
  CardContent,;
<<<<<<< HEAD
  }
=======

import {;
>>>>>>> origin/chore/fix-lint-and-merge
  Card,;
  CardHeader,;
  CardTitle,;

  CardDescription,;
  CardContent,;
<<<<<<< HEAD
} from "@/components/ui/card";"
import React from "react","
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card","
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard","
import { JobMatchCard } from "@/components/jobs/JobMatchCard","
import { useJobMatches } from "@/hooks/useJobMatches","
import { Skeleton } from "@/components/ui/skeleton",    useJobMatches(jobId);"
const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),;
  if (isLoading) {
=======

import React from "react",
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",
import { JobMatchCard } from "@/components/jobs/JobMatchCard",
import { useJobMatches } from "@/hooks/useJobMatches",

interface JobMatchesProps {};
  jobId: string;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
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
interface JobMatchesProps {
  jobId: string
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

  const { matches, isLoading, isProcessing, triggerAIMatching } =;

    useJobMatches(jobId);

  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),

import { Skeleton } from "@/components/ui/skeleton",

import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",;
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",;
import { JobMatchCard } from "@/components/jobs/JobMatchCard",;
import { useJobMatches } from "@/hooks/useJobMatches",;
import { Skeleton } from "@/components/ui/skeleton",    useJobMatches(jobId);

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
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { matches, isLoading, isProcessing, triggerAIMatching } =;

    useJobMatches(jobId);

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const { matches, isLoading, isProcessing, triggerAIMatching } =;
    useJobMatches(jobId);

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),

<<<<<<< HEAD
=======

<<<<<<< HEAD

  const { matches, isLoading, isProcessing, triggerAIMatching } =
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { matches, isLoading, isProcessing, triggerAIMatching } =;
    useJobMatches(jobId);

  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),
<<<<<<< HEAD

=======
  
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  if (isLoading) {

    return (
      <Card>
        <CardHeader>"
          <CardTitle className="flex items-center gap-2">"
            <Skeleton className="h-4 w-24" />
          </CardTitle>
          <CardDescription>"
            <Skeleton className="h-4 w-full" />
          </CardDescription>
        </CardHeader>"
        <CardContent className="space-y-4">
          {[1, 2, 3].map((i) => ("
            <div key={i} className="flex items-center gap-4">"
              <Skeleton className="h-12 w-12 rounded-full" />"
              <div className="space-y-2">"
                <Skeleton className="h-4 w-48" />"
                <Skeleton className="h-4 w-32" />
              </div>

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

import React from "react",;

            </div>
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

import React from "react",;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",;

import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",;
import { JobMatchCard } from "@/components/jobs/JobMatchCard",;
import { useJobMatches } from "@/hooks/useJobMatches",;
import { Skeleton } from "@/components/ui/skeleton",;
interface JobMatchesProps {;
  jobId: string;
}

export function JobMatches(): any ({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } =;

export function JobMatches(): any ({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } =;
    useJobMatches(jobId);

  if (isLoading) {;
    return (

<<<<<<< HEAD
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",;
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",;
import { JobMatchCard } from "@/components/jobs/JobMatchCard",;
import { useJobMatches } from "@/hooks/useJobMatches",;
import { Skeleton } from "@/components/ui/skeleton",;
interface JobMatchesProps {;
  jobId: string;
}

export function JobMatches(): any ({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } =;

    useJobMatches(jobId);

  if (isLoading) {;
return (;
interface JobMatchesProps {;
  jobId: string;
}
    useJobMatches(jobId);

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
    );
  }

  if (matches && matches.length === 0) {;

if (matches && matches.length === 0) {;
=======
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
          ))}
        </CardContent>
      </Card>
    );
  }
  if (matches.length === 0) {
<<<<<<< HEAD
    return <EmptyMatchesCard onRefresh={triggerAIMatching} isProcessing={isProcessing} />
  }
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
  )
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",;
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",;
import { JobMatchCard } from "@/components/jobs/JobMatchCard",;
import { useJobMatches } from "@/hooks/useJobMatches",;
import { Skeleton } from "@/components/ui/skeleton",;
<<<<<<< HEAD
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface JobMatchesProps {;
  jobId: string;
}

export function JobMatches(): any ({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } =;

    useJobMatches(jobId);

  if (isLoading) {;
<<<<<<< HEAD
return (;
interface JobMatchesProps {;
  jobId: string;
}
    useJobMatches(jobId);

  if (isLoading) {;
    return (;
=======
    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
    );
  }

<<<<<<< HEAD
  if (matches && matches.length === 0) {;

if (matches && matches.length === 0) {;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  if (matches && matches.length === 0) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return (

export function JobMatches(): any ({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } =;
    useJobMatches(jobId);

  if (isLoading) {;
    return (    return (
      <EmptyMatchesCard

        onRefresh={triggerAIMatching}
        isProcessing={isProcessing}
      />;
    );
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
    );
  }
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
  if (matches.length === 0) {;
    return <EmptyMatchesCard onRefresh={triggerAIMatching} isProcessing={isProcessing} />;
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      ))}
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
import React from './react';'
  }
=======
=======
<<<<<<< HEAD
import React from './react';'
  }
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from './react';
import {}
>>>>>>> origin/chore/fix-lint-and-merge
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,';
} from '@/components / ui / card';'
import { EmptyMatchesCard  } from '@/components / jobs / EmptyMatchesCard';'
import { JobMatchCard  } from '@/components / jobs / JobMatchCard';'
import { useJobMatches  } from '@/hooks / useJobMatches';'
import { Skeleton  } from '@/components / ui / skeleton';

  job_id: string;
}
export /**;
 * JobMatches - Function description;
 */
function JobMatches() {}
  const { matches, is_loading, is_processing, triggerAIMatching } =;
    useJobMatches (job_id);
;
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <Card>;

            <div key={i} className="flex items - center gap-4">;
              <Skeleton className="h - 12 w - 12 rounded-full" />;
              <div className="space-y-2">;
                <Skeleton className="h - 4 w-48" />;
                <Skeleton className="h - 4 w-32" />;

              </div>;
            </div>))}
        </CardContent>;
      </Card>);
  }
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <Card>
</Card>
        <CardHeader>
</CardHeader>"
          <CardTitle className="flex items-center gap-2">"
</CardTitle>"
            <Skeleton className="h-4 w-24" />"
</Skeleton>
          </CardTitle>
          <CardDescription>
</CardDescription>"
            <Skeleton className="h-4 w-full" />"
</Skeleton>
          </CardDescription>
        </CardHeader>"
        <CardContent className="space-y-4">"
</CardContent>"
            <div key={i} className="flex items-center gap-4">"
</div>"
              <Skeleton className="h-12 w-12 rounded-full" />"
</Skeleton>"
              <div className="space-y-2">"
</div>"
                <Skeleton className="h-4 w-48" />"
</Skeleton>"
                <Skeleton className="h-4 w-32" />"
</Skeleton>
              </div>
            </div>
      <Card>;
</Card>
        <CardHeader>;
</CardHeader>"
          <CardTitle className="flex items-center gap-2">;"
</CardTitle>"
            <Skeleton className="h-4 w-24" />;"
</Skeleton>
          </CardTitle>;
          <CardDescription>;
</CardDescription>"
            <Skeleton className="h-4 w-full" />;"
</Skeleton>
          </CardDescription>;
        </CardHeader>;"
        <CardContent className="space-y-4">;"
</CardContent>"
            <div key={i} className="flex items-center gap-4">;"
</div>"
              <Skeleton className="h-12 w-12 rounded-full" />;"
</Skeleton>"
              <div className="space-y-2">;"
</div>"
                <Skeleton className="h-4 w-48" />;"
</Skeleton>"
                <Skeleton className="h-4 w-32" />;"
</Skeleton>
              </div>;
            </div>;
        </CardContent>;
      </Card>;
      <EmptyMatchesCard;
        onRefresh={triggerAIMatching}
        isProcessing={isProcessing}
      />;
</EmptyMatchesCard>
    return <EmptyMatchesCard onRefresh={triggerAIMatching} isProcessing={isProcessing} />;
</EmptyMatchesCard>"
    <div className="space-y-4">;"
</div>
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
        />;
</JobMatchCard>
    </div>;
      <Card>;
</Card>
        <CardHeader>;
</CardHeader>"
          <CardTitle className="flex items - center gap - 2">;"
</CardTitle>"
            <Skeleton className="h - 4 w - 24" />;"
</Skeleton>
          </CardTitle>;
          <CardDescription>;
</CardDescription>"
            <Skeleton className="h - 4 w - full" />;"
</Skeleton>
          </CardDescription>;
        </CardHeader>;"
        <CardContent className="space - y-4">;"
</CardContent>"
            <div key={i} className="flex items - center gap - 4">;"
</div>"
              <Skeleton className="h - 12 w - 12 rounded - full" />;"
</Skeleton>"
              <div className="space - y-2">;"
</div>"
                <Skeleton className="h - 4 w - 48" />;"
</Skeleton>"
                <Skeleton className="h - 4 w - 32" />;"
</Skeleton>
              </div>;)
            </div>))}
        </CardContent>;
      </Card>);

      <EmptyMatchesCard;
        on_refresh={triggerAIMatching}
        is_processing={is_processing}
      />);
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  return (
    <div className="space - y-4">;
      {matches.map ((match) => (
        <JobMatchCard;
          key={match.id}
          match_id={match.id}
          talent_id={match.talent_profile?.id || ""}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          talent_id={match.talent_profile?.id || ""}

  return (

    <div className="space-y-4">
      {matches.map((match) => (
        <JobMatchCard
          talent_id={match.talent_profile?.id || ""}    </div>
    </div>;

  );

        />))}
    </div>);
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

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

</EmptyMatchesCard>"
    <div className="space - y-4">;"
</div>
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
            </div>))});
        on_refresh={triggerAIMatching}
        is_processing={is_processing}
      />);
    <div className="space - y-4">;"
          key={match.id}

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
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          name={match.talent_profile?.full_name || ""}
          title={match.talent_profile?.professional_title || ""}
          company={match.talent_profile?.company_name || ""}
          avatar={match.talent_profile?.profile_picture_url || ""}
          location={match.talent_profile?.location || "Remote"}

          category={match.talent_profile?.category || "Development"}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
          match_percent={match.match_score || 0}
          skills={match.talent_profile?.skills || []}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        />
      ))}

    </div>;
    </div>
    </div>;
  );

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>

    </div>;

  );

        />))}
    </div>);
<<<<<<< HEAD
}
=======
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
