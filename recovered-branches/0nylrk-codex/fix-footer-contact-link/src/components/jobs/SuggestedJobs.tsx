<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useAuth} from "@/hooks/useAuth";
import {Loader2} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {useJobSuggestions} from "@/hooks/useJobSuggestions";
import {JobMatchesCard} from "./JobMatchesCard";
import {NoJobsCard} from "./NoJobsCard";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useAuth } from "@/hooks/useAuth",
import { Loader2 } from "lucide-react",
import { Badge } from "@/components/ui/badge",
import { useJobSuggestions } from "@/hooks/useJobSuggestions",
import { JobMatchesCard } from "./JobMatchesCard";
import { NoJobsCard } from "./NoJobsCard";
import { JobMatchesCard } from "./JobMatchesCard",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { NoJobsCard } from "./NoJobsCard",
interface SuggestedJobsProps {
  talentId?: string
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface SuggestedJobsProps {
  talentId?: string
}

<<<<<<< HEAD
<<<<<<< HEAD
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {;
  const { user } = useAuth();
  const currentTalentId = talentId || user?.id;
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


export function SuggestedJobs({ talentId }: SuggestedJobsProps) {

  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,

<<<<<<< HEAD
<<<<<<< HEAD
=======
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {;
  const { user } = useAuth();
  const currentTalentId = talentId || user?.id;
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {
  const { user } = useAuth();
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const { 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    isLoading,
<<<<<<< HEAD
    updateJobMatchStatus,
=======
=======
import { NoJobsCard } from "./NoJobsCard",    isLoading,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { NoJobsCard } from "./NoJobsCard",    isLoading,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const { 
    isLoading,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    categorizedMatches: {
      newMatches,
      viewedMatches,
      appliedMatches
    }
<<<<<<< HEAD
  } = useJobSuggestions(currentTalentId),
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
  } = useJobSuggestions(currentTalentId);
  const handleApply = (matchId: string, jobId: string) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    updateJobMatchStatus(matchId, 'applied');
    // In a real app, this might redirect to application form or open a modal

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {useAuth} from "@/hooks/useAuth";
import {Loader2} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {useJobSuggestions} from "@/hooks/useJobSuggestions";
import {JobMatchesCard} from "./JobMatchesCard";
import {NoJobsCard} from "./NoJobsCard";
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======


    updateJobMatchStatus(matchId, 'applied'),
    // In a real app, this might redirect to application form or open a modal
  }
  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  },

  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useAuth } from "@/hooks/useAuth",
import { Loader2 } from "lucide-react",
import { Badge } from "@/components/ui/badge",
import { useJobSuggestions } from "@/hooks/useJobSuggestions",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    )
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useAuth } from "@/hooks/useAuth",;
import { Loader2 } from "lucide-react",;
import { Badge } from "@/components/ui/badge",;
import { useJobSuggestions } from "@/hooks/useJobSuggestions",;
import { JobMatchesCard } from "./JobMatchesCard",;
import { NoJobsCard } from "./NoJobsCard",;

<<<<<<< HEAD
<<<<<<< HEAD
interface SuggestedJobsProps {;
=======

import { useAuth } from "@/hooks/useAuth","
import { Loader2 } from "lucide-react","
import { Badge } from "@/components/ui/badge","
import { useJobSuggestions } from "@/hooks/useJobSuggestions",";
import { JobMatchesCard } from "./JobMatchesCard";"
import { NoJobsCard } from "./NoJobsCard";"
import { JobMatchesCard } from "./JobMatchesCard","
import { NoJobsCard } from "./NoJobsCard",
interface SuggestedJobsProps {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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


=======
interface SuggestedJobsProps {;
  talentId?: string;
=======

interface SuggestedJobsProps {
  talentId?: string
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
  const { ;
    isLoading;
    updateJobMatchStatus, ;
    categorizedMatches: { ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      newMatches, ;
      viewedMatches, ;
      appliedMatches ;
    } ;
<<<<<<< HEAD

    // In a real app, this might redirect to application form or open a modal;
  };

  const handleDecline = (matchId: string) => {;'
    updateJobMatchStatus(matchId, 'declined');
  };
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  if (isLoading) {;



  if (isLoading) {;
    return (
"
      <div className="flex items-center justify-center p-6">;"
        <Loader2 className="w-6 h-6 animate-spin text-primary" />;
      </div>;
    );
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  } = useJobSuggestions(currentTalentId);

  const handleApply = (matchId: string, jobId: string) => {;
    updateJobMatchStatus(matchId, 'applied');
    // In a real app, this might redirect to application form or open a modal;
  };

  const handleDecline = (matchId: string) => {;
    updateJobMatchStatus(matchId, 'declined');
  };

  if (isLoading) {;
    return (

  if (isLoading) {;
    return (
      <div className="flex items-center justify-center p-6">;
        <Loader2 className="w-6 h-6 animate-spin text-primary" />;
      </div>;
    );



  }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  if (newMatches && newMatches.length === 0 && viewedMatches && viewedMatches.length === 0 && appliedMatches && appliedMatches.length === 0) {;
    return <NoJobsCard />;
=======
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {
  const { user } = useAuth();
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
  const { 
  const { user } = useAuth();

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <JobMatchesCard
<<<<<<< HEAD
=======
=======
  }
  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {
    return <NoJobsCard />
  }
  
  return (
    <div className="space-y-6">
      {/* New Matches Section */}
      {newMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">New Job Matches</h3>
            <Badge className="bg-green-100 text-green-800 border-green-300">
              {newMatches.length} New
            </Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {newMatches.map(match => (
              <JobMatchesCard
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                key={match.id}
                match={match}
                onApply={handleApply}
                onDecline={handleDecline}
              />
<<<<<<< HEAD
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  return ("
    <div className="space-y-6">;
      {/* New Matches Section */}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              />
=======
              <JobMatchesCard              />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              <JobMatchesCard              />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              <JobMatchesCard
}
  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {
    return <NoJobsCard />
  }
  return (
    <div className="space-y-6">
      {/* New Matches Section */}
      {newMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">New Job Matches</h3>
            <Badge className="bg-green-100 text-green-800 border-green-300">
              {newMatches.length} New
            </Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {newMatches.map(match => (
              <JobMatchesCard
                key={match.id}
                match={match}
                onApply={handleApply}
                onDecline={handleDecline}
              />
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
      appliedMatches;
      appliedMatches;

    } 
  } = useJobSuggestions(currentTalentId),
  const currentTalentId = talentId |user?.id;
  // TODO: Implement
    isLoading;
    updateJobMatchStatus;
      newMatches;

      viewedMatches;
  } = useJobSuggestions(currentTalentId);
  const handleApply = (matchId: string, jobId: string) => {"
    updateJobMatchStatus(matchId, 'applied');
    // In a real app, this might redirect to application form or open a modal;
import {useAuth} from "@/hooks/useAuth";""
import {Loader2} from "lucide-react";""
import {Badge} from "@/components/ui/badge";""
import {useJobSuggestions} from "@/hooks/useJobSuggestions";""
import {JobMatchesCard} from "./JobMatchesCard";""
import {NoJobsCard} from "./NoJobsCard";"
  },

  const handleDecline = (matchId: string) => {"
    updateJobMatchStatus(matchId, 'declined')


  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6">"
</div>"
        <Loader2 className="w-6 h-6 animate-spin text-primary" />"
</Loader2>
      <div className="flex items-center justify-center p-6">;"
        <Loader2 className="w-6 h-6 animate-spin text-primary" />;"
      </div>;
    return <NoJobsCard />;
"
    <div className="space-y-6">;"
        <div className="space-y-4">;"
          <div className="flex items-center justify-between">;"
            <h3 className="text-lg font-medium">New Job Matches</h3>;""
            <Badge className="bg-green-100 text-green-800 border-green-300">;"

            ;
          </div>;"
          <div className="grid gap-4 md:grid-cols-2">;"
</div>
              <JobMatchesCard;
              />

            <h3 className="text-lg font-medium">Previously Viewed</h3>;"
pr-12325
</JobMatchesCard>

          </div>
        </div>
    </div>
          </div>;
        </div>;"
        <div className="space-y-4">;"
</div>"
          <div className="flex items-center justify-between">;"
</div>"
            <h3 className="text-lg font-medium">Previously Viewed</h3>;"
          </div>;"
          <div className="grid gap-4 md:grid-cols-2">;"
</div>
              <JobMatchesCard;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                key={match && match.id} 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
              <JobMatchesCard                key={match && match.id} 
=======
"
        <div className="space-y-4">;"
          <div className="flex items-center justify-between">;"
            <h3 className="text-lg font-medium">Previously Viewed</h3>;
          </div>;

                key={match && match.id} 
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <JobMatchesCard
<JobMatchesCard 
                key={match.id}
                key={match && match.id} 
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              <JobMatchesCard                key={match && match.id} 
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
              />;

            ))}
          </div>;
        </div>;
      )}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======
            ))}
          </div>;
        </div>;
      )}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
=======
          <div className="grid gap-4 md:grid-cols-2">;
            {appliedMatches && appliedMatches.map(match => (;
              <JobMatchesCard
</JobMatchesCard>
          </div>;
        </div>;
          </div>;
        </div>;"
        <div className="space-y-4">;"
</div>"
          <div className="flex items-center justify-between">;"
</div>"
            <h3 className="text-lg font-medium">Applied Jobs</h3>;"
          </div>;"
          <div className="grid gap-4 md:grid-cols-2">;"
</div>
              <JobMatchesCard;
                key={match && match.id} 

                match={match} 
                onApply={handleApply} 
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<< HEAD
                onDecline={handleDecline}                onDecline={handleDecline}
=======
                onDecline={handleDecline}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                onDecline={handleDecline}
                onDecline={handleDecline}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
;
          <div className="grid gap-4 md:grid-cols-2">;
            {appliedMatches.map(match => (;
              <JobMatchesCard ;
                key={match.id} ;
                match={match} ;
                onApply={handleApply} ;                onDecline={handleDecline}
                onDecline={handleDecline}
                onDecline={handleDecline}                onDecline={handleDecline}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                showApplied={true}
              />;
<<<<<<< HEAD
;
              />;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            ))}
          </div>;
        </div>;
      )}

<<<<<<< HEAD
    </div>;
  );
}

</div>;
import { use_auth } from '@/hooks / use_auth';
import { Loader2 } from './lucide-react';
import { Badge } from '@/components / ui / badge';
import { useJobSuggestions } from '@/hooks / useJobSuggestions';
import { JobMatchesCard } from './JobMatchesCard';
import { NoJobsCard } from './NoJobsCard';
interface SuggestedJobsProps {
  talent_id?: string;
}
export /**
 * SuggestedJobs - Function description
 */
function SuggestedJobs() {
  const { user } = use_auth ();
  const currentTalentId = talent_id || user?.id;
  const {
    is_loading;
    updateJobMatchStatus,
    categorized_matches: {
      new_matches,
      viewed_matches,
      applied_matches;
    }
  } = useJobSuggestions (currentTalentId);
;
  const handle_apply = (match_id: string, job_id: string) =>: any {
    updateJobMatchStatus (match_id, 'applied');
    // In a real app, this might redirect to application form or open a modal;
  }
;
  const handle_decline = (match_id: string) =>: any {
    updateJobMatchStatus (match_id, 'declined');
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex items - center justify - center p - 6">;
        <Loader2 className="w - 6 h - 6 animate - spin text - primary" />;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return <NoJobsCard />;
  }
  return (
    <div className="space - y-6">;
      {/* New Matches Section */}
      {new_matches.length > 0 && (
        <div className="space - y-4">;
          <div className="flex items - center justify - between">;
            <h3 className="text - lg font - medium">New Job Matches</h3>;
            <Badge className="bg - green - 100 text - green - 800 border - green - 300">;
              {new_matches.length} New;
            </Badge>;
          </div>;
          <div className="grid gap - 4 md:grid - cols - 2">;
            {new_matches.map (match => (
              <JobMatchesCard;
                key={match.id}
                match={match}
                on_apply={handle_apply}
                on_decline={handle_decline}
              />))}
          </div>;
        </div>)}
      {/* Previously Viewed Section */}
      {viewed_matches.length > 0 && (
        <div className="space - y-4">;
          <div className="flex items - center justify - between">;
            <h3 className="text - lg font - medium">Previously Viewed</h3>;
          </div>;
          <div className="grid gap - 4 md:grid - cols - 2">;
            {viewed_matches.map (match => (
              <JobMatchesCard;
                key={match.id}
                match={match}
                on_apply={handle_apply}
                on_decline={handle_decline}
              />))}
          </div>;
        </div>)}
      {/* Applied Jobs Section */}
      {applied_matches.length > 0 && (
        <div className="space - y-4">;
          <div className="flex items - center justify - between">;
            <h3 className="text - lg font - medium">Applied Jobs</h3>;
          </div>;
          <div className="grid gap - 4 md:grid - cols - 2">;
            {applied_matches.map (match => (
              <JobMatchesCard;
                key={match.id}
                match={match}
                on_apply={handle_apply}
                on_decline={handle_decline}
                show_applied={true}
              />))}
          </div>;
        </div>)}
    </div>);
}

  ),; interface SuggestedJobsProps {
}  ),; interface SuggestedJobsProps {
  talentId?: string 
}export function SuggestedJobs ({
  talentId 
}: SuggestedJobsProps) {
  const {
  user 
=======

'
import { use_auth } from '@/hooks / use_auth';'
import { Loader2 } from './lucide-react';'
import { Badge } from '@/components / ui / badge';'
import { useJobSuggestions } from '@/hooks / useJobSuggestions';'
import { JobMatchesCard } from './JobMatchesCard';'
import { NoJobsCard } from './NoJobsCard';
interface SuggestedJobsProps {}
  talent_id?: string;
}
export /**;
 * SuggestedJobs - Function description;
 */
function SuggestedJobs() {}
  const { user } = use_auth ();
  const currentTalentId = talent_id || user?.id;
  const {}
    is_loading;
    updateJobMatchStatus,
    categorized_matches: {}
      new_matches,
      viewed_matches,
      applied_matches;
    }
  } = useJobSuggestions (currentTalentId);
;
  const handle_apply = (match_id: string, job_id: string) =>: any {'
    updateJobMatchStatus (match_id, 'applied');
    // In a real app, this might redirect to application form or open a modal;
  }
;
  const handle_decline = (match_id: string) =>: any {'
    updateJobMatchStatus (match_id, 'declined');
  }
;
  // Check condition;
if ( {) {}
  $2;
}
    return ("
      <div className="flex items - center justify - center p - 6">;"
        <Loader2 className="w - 6 h - 6 animate - spin text - primary" />;
      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
}
    return <NoJobsCard />;
  }
  return ("
    <div className="space - y-6">;
      {/* New Matches Section */}
      {new_matches.length > 0 && ("
        <div className="space - y-4">;"
          <div className="flex items - center justify - between">;"
            <h3 className="text - lg font - medium">New Job Matches</h3>;"
            <Badge className="bg - green - 100 text - green - 800 border - green - 300">;
              {new_matches.length} New;
            </Badge>;
          </div>;"
          <div className="grid gap - 4 md:grid - cols - 2">;
            {new_matches.map (match => (
              <JobMatchesCard;
                key={match.id}
                match={match}
                on_apply={handle_apply}
                on_decline={handle_decline}
              />))}
          </div>;
        </div>)}
      {/* Previously Viewed Section */}
      {viewed_matches.length > 0 && ("
        <div className="space - y-4">;"
          <div className="flex items - center justify - between">;"
            <h3 className="text - lg font - medium">Previously Viewed</h3>;
          </div>;"
          <div className="grid gap - 4 md:grid - cols - 2">;
            {viewed_matches.map (match => (
              <JobMatchesCard;
                key={match.id}
                match={match}
                on_apply={handle_apply}
                on_decline={handle_decline}
              />))}
          </div>;
        </div>)}
      {/* Applied Jobs Section */}
      {applied_matches.length > 0 && ("
        <div className="space - y-4">;"
          <div className="flex items - center justify - between">;"
            <h3 className="text - lg font - medium">Applied Jobs</h3>;
          </div>;"
          <div className="grid gap - 4 md:grid - cols - 2">;
            {applied_matches.map (match => (
              <JobMatchesCard;
                key={match.id}
                match={match}
                on_apply={handle_apply}
                on_decline={handle_decline}
                show_applied={true}
              />))}
          </div>;
        </div>)}
    </div>);



  ),; interface SuggestedJobsProps {}
  talentId?: string;
}export function SuggestedJobs ({};
  talentId;
}: SuggestedJobsProps) {}
  const {}
  user;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}= useAuth ();
const currentTalentId = talentId || user?.id;
const {}
  isLoading;
updateJobMatchStatus;
categorizedMatches: {}
  newMatches;
viewedMatches;
appliedMatches;
}

}= useJobSuggestions (currentTalentId);
const handleApply = (matchId: string, jobId: string) => {'
  updateJobMatchStatus (matchId, 'applied');
//In a real app, this might redirect to application form or open a modal;
};
const handleDecline = (matchId: string) => {'
  updateJobMatchStatus (matchId, 'declined') 
};
if (isLoading) {"
  return (<div className="flex items-center justify-center p-6" > <Loader2 className="w-6 h-6 animate-spin text-primary" /> </div>) 
}if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {}
  return <NoJobsCard /> "
}return (<div className="space-y-6" > {}
  /* New Matches Section */ 
}{"
  newMatches.length > 0 && (<div className="space-y-4" > <div className="flex items-center justify-between" > <h3 className="text-lg font-medium" >New Job Matches</h3> <Badge className="bg-green-100 text-green-800 border-green-300" > newMatches.length;
}New </Badge> </div> <JobMatchesCard key= {}
  match.id;
}match= {}
  match;
}onApply= {}
  handleApply;
}onDecline= {}
  handleDecline;
}/>) ) 
}</div> </div>) "
}</div> <div className="grid gap-4 md:grid-cols-2" > {}
  viewedMatches.map (match => (<JobMatchesCard key= {}
  match.id;
}match= {}
  match;
}onApply= {}
  handleApply;
}onDecline= {}
  handleDecline;
}/>) ) 
}</div> </div>) "
}</div> <div className="grid gap-4 md:grid-cols-2" > {}
  appliedMatches.map (match => (<JobMatchesCard key= {}
  match.id;
}match= {}
  match;
}onApply= {}
  handleApply;
}onDecline= {}
  handleDecline;
}showApplied= {}
  true;
}/>) ) 
}</div> </div>) 
}</div>) 
}
<<<<<<< HEAD
=======
              <JobMatchesCard 
                onDecline={handleDecline}                onDecline={handleDecline}
                showApplied={true}
              />;
</JobMatchesCard>
          </div>;
        </div>;

    </div>;"
      <div className="flex items - center justify - center p - 6">;"
</div>"
        <Loader2 className="w - 6 h - 6 animate - spin text - primary" />;"
</Loader2>)
      </div>);
    return <NoJobsCard />;
</NoJobsCard>"
    <div className="space - y-6">;"
</div>"
        <div className="space - y-4">;"
</div>"
          <div className="flex items - center justify - between">;"
</div>"
            <h3 className="text - lg font - medium">New Job Matches</h3>;""
            <Badge className="bg - green - 100 text - green - 800 border - green - 300">;"
</Badge>
            </Badge>;
          </div>;"
          <div className="grid gap - 4 md:grid - cols - 2">;"
</div>
              <JobMatchesCard;
                key={match.id}
                match={match}
                on_apply={handle_apply}
                on_decline={handle_decline}
              />))}
</JobMatchesCard>
          </div>;
        </div>)}"
        <div className="space - y-4">;"
</div>"
          <div className="flex items - center justify - between">;"
</div>"
            <h3 className="text - lg font - medium">Previously Viewed</h3>;"
          </div>;"
          <div className="grid gap - 4 md:grid - cols - 2">;"
</div>
              <JobMatchesCard;
                key={match.id}
                match={match}
                on_apply={handle_apply}
                on_decline={handle_decline}
              />))}
</JobMatchesCard>
          </div>;
        </div>)}"
        <div className="space - y-4">;"
</div>"
          <div className="flex items - center justify - between">;"
</div>"
            <h3 className="text - lg font - medium">Applied Jobs</h3>;"
          </div>;"
          <div className="grid gap - 4 md:grid - cols - 2">;"
</div>
              <JobMatchesCard;
                key={match.id}
                match={match}
                on_apply={handle_apply}
                on_decline={handle_decline}
                show_applied={true}
              />))}
</JobMatchesCard>
          </div>;
        </div>)}
    </div>);"
  return (<div className="flex items-center justify-center p-6" > <Loader2 className="w-6 h-6 animate-spin text-primary" /> </div>)"
  return <NoJobsCard /> 
</NoJobsCard>"
}return (<div className="space-y-6" > {"
</div>"
  newMatches.length > 0 && (<div className="space-y-4" > <div className="flex items-center justify-between" > <h3 className="text-lg font-medium" >New Job Matches</h3> <Badge className="bg-green-100 text-green-800 border-green-300" > newMatches.length;"
</div>
}New </Badge> </div> <JobMatchesCard key= {
  match.id;
}match= {
  match;
}onApply= {
  handleApply;
}onDecline= {
  handleDecline;)
}/>) ) 
</JobMatchesCard>
}</div> </div>) "
}</div> <div className="grid gap-4 md:grid-cols-2" > {"
</div>
  viewedMatches.map (match => (<JobMatchesCard key= {
  match.id;
}match= {
  match;
}onApply= {
  handleApply;
}onDecline= {
  handleDecline;)
}/>) ) 
</JobMatchesCard>
}</div> </div>) "
}</div> <div className="grid gap-4 md:grid-cols-2" > {"
</div>
  appliedMatches.map (match => (<JobMatchesCard key= {
  match.id;
}match= {
  match;
}onApply= {
  handleApply;
}onDecline= {
  handleDecline;
}showApplied= {
  true;)

}/>) ) 
</JobMatchesCard>
}</div> </div>) 
}</div>) 

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <JobMatchesCard;
                key={match.id} 

                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline}
                showApplied={true}
              />;
;
/>;
              />;
            <h3 className="text-lg font-medium">Applied Jobs</h3>;"

                showApplied={true}

      <div className="flex items - center justify - center p - 6">;"
        <Loader2 className="w - 6 h - 6 animate - spin text - primary" />;"
</Loader2>)
      </div>);
    <div className="space - y-6">;"
        <div className="space - y-4">;"
          <div className="flex items - center justify - between">;"
            <h3 className="text - lg font - medium">New Job Matches</h3>;""
            <Badge className="bg - green - 100 text - green - 800 border - green - 300">;"

          <div className="grid gap - 4 md:grid - cols - 2">;"
                key={match.id}
                on_apply={handle_apply}
                on_decline={handle_decline}
              />))}

        </div>)}"
            <h3 className="text - lg font - medium">Previously Viewed</h3>;"

            <h3 className="text - lg font - medium">Applied Jobs</h3>;"
                show_applied={true}

        </div>)}
    </div>);"
  return (<div className="flex items-center justify-center p-6" > <Loader2 className="w-6 h-6 animate-spin text-primary" /> </div>)"
  return <NoJobsCard /> 
}return (<div className="space-y-6" > {"
  newMatches.length > 0 && (<div className="space-y-4" > <div className="flex items-center justify-between" > <h3 className="text-lg font-medium" >New Job Matches</h3> <Badge className="bg-green-100 text-green-800 border-green-300" > newMatches.length;"
}New  </div> <JobMatchesCard key= {
  match.id;
}match= {
  match;
}onApply= {
  handleApply;
}onDecline= {
  handleDecline;)
}/>) ) 

}</div> </div>) "
}</div> <div className="grid gap-4 md:grid-cols-2" > {"
  viewedMatches.map (match => (<JobMatchesCard key= {

  appliedMatches.map (match => (<JobMatchesCard key= {
  handleDecline;
}showApplied= {
  true;)

}</div> </div>) 
}</div>) 
pr-12325
              />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
