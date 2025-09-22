<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import {useAuth} from "@/hooks/useAuth";
import {Loader2} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {useJobSuggestions} from "@/hooks/useJobSuggestions";
import {JobMatchesCard} from "./JobMatchesCard";
import {NoJobsCard} from "./NoJobsCard";
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
import { NoJobsCard } from "./NoJobsCard",
interface SuggestedJobsProps {
  talentId?: string
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface SuggestedJobsProps {
  talentId?: string
}

export function SuggestedJobs({ talentId }: SuggestedJobsProps) {;
  const { user } = useAuth();
  const currentTalentId = talentId || user?.id;

export function SuggestedJobs({ talentId }: SuggestedJobsProps) {

  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {
  const { user } = useAuth();
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const { 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    isLoading,
updateJobMatchStatus,
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
} = useJobSuggestions(currentTalentId),
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
  } = useJobSuggestions(currentTalentId);
  const handleApply = (matchId: string, jobId: string) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    updateJobMatchStatus(matchId, 'applied');
    // In a real app, this might redirect to application form or open a modal
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    )
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { useAuth } from "@/hooks/useAuth",;
import { Loader2 } from "lucide-react",;
import { Badge } from "@/components/ui/badge",;
import { useJobSuggestions } from "@/hooks/useJobSuggestions",;
import { JobMatchesCard } from "./JobMatchesCard",;
import { NoJobsCard } from "./NoJobsCard",;

interface SuggestedJobsProps {;
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
const { ;
    isLoading;
    updateJobMatchStatus, ;
    categorizedMatches: { ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      newMatches, ;
      viewedMatches, ;
      appliedMatches ;
    } ;
// In a real app, this might redirect to application form or open a modal;
  };

  const handleDecline = (matchId: string) => {;'
    updateJobMatchStatus(matchId, 'declined');
  };
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  if (isLoading) {;

  if (isLoading) {;
    return (
"
      <div className="flex items-center justify-center p-6">;"
        <Loader2 className="w-6 h-6 animate-spin text-primary" />;
      </div>;
    );
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
              <JobMatchesCard
<<<<<<< HEAD
                key={match.id}
                match={match}
                onApply={handleApply}
                onDecline={handleDecline}
              />
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
<JobMatchesCard                key={match && match.id}
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
              />;

            ))}
          </div>;
        </div>;
      )}

<<<<<<< HEAD
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

onDecline={handleDecline}                onDecline={handleDecline}
                showApplied={true}
              />;
;
              />;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
