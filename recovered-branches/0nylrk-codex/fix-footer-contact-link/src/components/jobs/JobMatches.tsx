
<<<<<<< HEAD

=======
import {;
  Card,;
  CardHeader,;
  CardTitle,;

  CardDescription,;
  CardContent,;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
} from "@/components/ui/card";
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard";
import { JobMatchCard } from "@/components/jobs/JobMatchCard";

import { useJobMatches } from "@/hooks/useJobMatches";
import { Skeleton } from "@/components/ui/skeleton";


<<<<<<< HEAD
=======
import React from "react";
import {};
  Card;
  CardHeader;
  CardTitle;
  CardDescription;
  CardContent"
import React from "react";

  Card,
  CardHeader,
  CardTitle,
  CardDescription,;
  CardContent,;
  }
  Card,;
  CardHeader,;
  CardTitle,;

  CardDescription,;
  CardContent,;
} from "@/components/ui/card";"
import React from "react","
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card","
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard","
import { JobMatchCard } from "@/components/jobs/JobMatchCard","
import { useJobMatches } from "@/hooks/useJobMatches","
import { Skeleton } from "@/components/ui/skeleton",    useJobMatches(jobId);"
const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),;
  if (isLoading) {

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { matches, isLoading, isProcessing, triggerAIMatching } =;

    useJobMatches(jobId);


<<<<<<< HEAD

  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),




=======
  const { matches, isLoading, isProcessing, triggerAIMatching } =;
    useJobMatches(jobId);

  const { matches, isLoading, isProcessing, triggerAIMatching } = useJobMatches(jobId),

>>>>>>> origin/cursor/delete-old-data-records-6bba

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


import React from "react",;
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",;
=======

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card",;

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { EmptyMatchesCard } from "@/components/jobs/EmptyMatchesCard",;
import { JobMatchCard } from "@/components/jobs/JobMatchCard",;
import { useJobMatches } from "@/hooks/useJobMatches",;
import { Skeleton } from "@/components/ui/skeleton",;
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba


interface JobMatchesProps {;
  jobId: string;
}

export function JobMatches(): any ({ jobId }: JobMatchesProps) {;
  const { matches, isLoading, isProcessing, triggerAIMatching } =;

    useJobMatches(jobId);

  if (isLoading) {;

<<<<<<< HEAD
    return (


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

    );
  }


=======
  if (matches && matches.length === 0) {;
  if (matches && matches.length === 0) {;

if (matches && matches.length === 0) {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


;
  if (matches.length === 0) {;
    return <EmptyMatchesCard onRefresh={triggerAIMatching} isProcessing={isProcessing} />;
  }


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

=======
import React from './react';
import {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
  return (
    <div className="space - y-4">;
      {matches.map ((match) => (
        <JobMatchCard;
          key={match.id}
          match_id={match.id}
          talent_id={match.talent_profile?.id || ""}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
          name={match.talent_profile?.full_name || ""}
          title={match.talent_profile?.professional_title || ""}
          company={match.talent_profile?.company_name || ""}
          avatar={match.talent_profile?.profile_picture_url || ""}
          location={match.talent_profile?.location || "Remote"}

          category={match.talent_profile?.category || "Development"}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
    </div>;
    </div>
    </div>;
  );


    </div>

    </div>;

  );

        />))}
    </div>);

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
