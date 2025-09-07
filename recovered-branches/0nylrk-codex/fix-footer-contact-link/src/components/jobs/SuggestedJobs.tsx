import {useAuth} from "@/hooks/useAuth";
import {Loader2} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {useJobSuggestions} from "@/hooks/useJobSuggestions";
import {JobMatchesCard} from "./JobMatchesCard";
import {NoJobsCard} from "./NoJobsCard";

import { useAuth } from "@/hooks/useAuth",
import { Loader2 } from "lucide-react",
import { Badge } from "@/components/ui/badge",
import { useJobSuggestions } from "@/hooks/useJobSuggestions",
import { JobMatchesCard } from "./JobMatchesCard";
import { NoJobsCard } from "./NoJobsCard";
import { JobMatchesCard } from "./JobMatchesCard",

import { NoJobsCard } from "./NoJobsCard",
interface SuggestedJobsProps {
  talentId?: string
}

interface SuggestedJobsProps {
  talentId?: string
}

export function SuggestedJobs({ talentId }: SuggestedJobsProps) {

  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,

export function SuggestedJobs({ talentId }: SuggestedJobsProps) {
  const { user } = useAuth();
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,

  const { 

    isLoading,

    updateJobMatchStatus, 
    categorizedMatches: { 
      newMatches, 
      viewedMatches, 
      appliedMatches 
    } 
  } = useJobSuggestions(currentTalentId),

  const currentTalentId = talentId |user?.id;
  const {
    isLoading;
    updateJobMatchStatus

    categorizedMatches: {
      newMatches,
      viewedMatches,
      appliedMatches
    }

import {useAuth} from "@/hooks/useAuth";
import {Loader2} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {useJobSuggestions} from "@/hooks/useJobSuggestions";
import {JobMatchesCard} from "./JobMatchesCard";
import {NoJobsCard} from "./NoJobsCard";

  },

  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  },

import { useAuth } from "@/hooks/useAuth",;
import { Loader2 } from "lucide-react",;
import { Badge } from "@/components/ui/badge",;
import { useJobSuggestions } from "@/hooks/useJobSuggestions",;
import { JobMatchesCard } from "./JobMatchesCard",;
import { NoJobsCard } from "./NoJobsCard",;

  talentId?: string;
}

export function SuggestedJobs({ talentId }: SuggestedJobsProps) {};
  const { user } = useAuth();
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,

  const {}
    isLoading,
    updateJobMatchStatus, 
    categorizedMatches: {}
      newMatches, 
      viewedMatches, 
      appliedMatches;
    } 
  } = useJobSuggestions(currentTalentId),

  const currentTalentId = talentId |user?.id;
  const {}
    isLoading;
    updateJobMatchStatus;
    categorizedMatches: {}
      newMatches;
      viewedMatches;
      appliedMatches;
    }
  } = useJobSuggestions(currentTalentId);
  const handleApply = (matchId: string, jobId: string) => {}
  },

  const handleDecline = (matchId: string) => {}
    updateJobMatchStatus(matchId, 'declined')
  },

  if (isLoading) {}
    return ("
      <div className="flex items-center justify-center p-6">"
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    )
"
import { useAuth } from "@/hooks/useAuth",;"
import { Loader2 } from "lucide-react",;"
import { Badge } from "@/components/ui/badge",;"
import { useJobSuggestions } from "@/hooks/useJobSuggestions",;"
import { JobMatchesCard } from "./JobMatchesCard",;"
import { NoJobsCard } from "./NoJobsCard",;

}
interface SuggestedJobsProps {
  talentId?: string
  // TODO: Implement
}
  talentId?: string;
  // TODO: Implement

export function SuggestedJobs({ talentId }: SuggestedJobsProps) {

  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,

export function SuggestedJobs({ talentId }: SuggestedJobsProps) {;
  const { user } = useAuth();
  const currentTalentId = talentId || user?.id;

  if (isLoading) {;

  if (isLoading) {;
    return (
"
      <div className="flex items-center justify-center p-6">;"
        <Loader2 className="w-6 h-6 animate-spin text-primary" />;
      </div>;
    );

  }

  if (newMatches && newMatches.length === 0 && viewedMatches && viewedMatches.length === 0 && appliedMatches && appliedMatches.length === 0) {;
    return <NoJobsCard />;

  }

  return (
    <div className="space-y-6">;
      {/* New Matches Section */}

      {newMatches && newMatches.length > 0 && (;
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">New Job Matches</h3>;
            <Badge className="bg-green-100 text-green-800 border-green-300">;
              {newMatches && newMatches.length} New;
            </Badge>;
          </div>;

          <div className="grid gap-4 md:grid-cols-2">;
            {newMatches && newMatches.map(match => (;

                key={match.id}
                match={match}
                onApply={handleApply}
                onDecline={handleDecline}
              />

              />

            ))}
          </div>
        </div>
      )}
      {/* Previously Viewed Section */}
      {viewedMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Previously Viewed</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {viewedMatches.map(match => (
              <JobMatchesCard
                key={match.id}
                match={match}
                onApply={handleApply}
                onDecline={handleDecline}
              />
            ))}
          </div>
        </div>
      )}
      {/* Applied Jobs Section */}
      {appliedMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Applied Jobs</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {appliedMatches.map(match => (
              <JobMatchesCard
                key={match.id}
                match={match}
                onApply={handleApply}
                onDecline={handleDecline}
                showApplied={true}
              />
              <JobMatchesCard              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

                key={match && match.id} 

                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
              />;

            ))}
          </div>;
        </div>;
      )}

      {/* Previously Viewed Section */}
      {viewedMatches && viewedMatches.length > 0 && (;
</div>;
        </div>;
      )}

      {/* Previously Viewed Section */}
                key={match && match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
              />;
            ))}
              {newMatches.length} New;
            </Badge>;
          </div>;
          ;
          <div className="grid gap-4 md:grid-cols-2">;
            {newMatches.map(match => (;
              <JobMatchesCard ;
                key={match.id} ;
                match={match} ;
                onApply={handleApply} ;
                onDecline={handleDecline} ;
              />;            ))}
          </div>;
        </div>;
      )}
      ;
      {/* Previously Viewed Section */}
      {viewedMatches.length > 0 && (;
        <div className="space-y-4">;
      {viewedMatches && viewedMatches.length > 0 && (;        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Previously Viewed</h3>;
          </div>;

          <div className="grid gap-4 md:grid-cols-2">;
            {viewedMatches && viewedMatches.map(match => (;

      {/* Applied Jobs Section */}
      {appliedMatches && appliedMatches.length > 0 && (;
            ))}
      {appliedMatches && appliedMatches.length > 0 && (;            ))}
          </div>;
        </div>;
      )}
      ;
      {/* Applied Jobs Section */}
      {appliedMatches.length > 0 && (;
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Applied Jobs</h3>;
          </div>;