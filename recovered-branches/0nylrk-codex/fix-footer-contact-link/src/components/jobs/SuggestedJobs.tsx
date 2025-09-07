import {useAuth} from "@/hooks/useAuth";
import {Loader2} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {useJobSuggestions} from "@/hooks/useJobSuggestions";
import {JobMatchesCard} from "./JobMatchesCard";
import {NoJobsCard} from "./NoJobsCard";

<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useAuth} from "@/hooks/useAuth";
import {Loader2} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {useJobSuggestions} from "@/hooks/useJobSuggestions";
import {JobMatchesCard} from "./JobMatchesCard";
import {NoJobsCard} from "./NoJobsCard";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useAuth } from "@/hooks/useAuth",
import { Loader2 } from "lucide-react",
import { Badge } from "@/components/ui/badge",
import { useJobSuggestions } from "@/hooks/useJobSuggestions",
<<<<<<< HEAD
import { JobMatchesCard } from "./JobMatchesCard";
import { NoJobsCard } from "./NoJobsCard";
import { JobMatchesCard } from "./JobMatchesCard",

import { NoJobsCard } from "./NoJobsCard",
=======

import { JobMatchesCard } from "./JobMatchesCard";
import { NoJobsCard } from "./NoJobsCard";
import { JobMatchesCard } from "./JobMatchesCard",
import { NoJobsCard } from "./NoJobsCard",
interface SuggestedJobsProps {
  talentId?: string
}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface SuggestedJobsProps {
  talentId?: string
}

interface SuggestedJobsProps {
  talentId?: string
}

export function SuggestedJobs({ talentId }: SuggestedJobsProps) {

  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,

<<<<<<< HEAD
=======
<<<<<<< HEAD
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {;
  const { user } = useAuth();
  const currentTalentId = talentId || user?.id;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {
  const { user } = useAuth();
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { 

    isLoading,

    updateJobMatchStatus, 
    categorizedMatches: { 
      newMatches, 
      viewedMatches, 
      appliedMatches 
    } 
  } = useJobSuggestions(currentTalentId),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const currentTalentId = talentId |user?.id;
  const {
    isLoading;
    updateJobMatchStatus

    categorizedMatches: {
      newMatches,
      viewedMatches,
      appliedMatches
    }
<<<<<<< HEAD
=======
  } = useJobSuggestions(currentTalentId);
  const handleApply = (matchId: string, jobId: string) => {
<<<<<<< HEAD


    updateJobMatchStatus(matchId, 'applied'),
    // In a real app, this might redirect to application form or open a modal
  }
  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  }
=======
    updateJobMatchStatus(matchId, 'applied');
    // In a real app, this might redirect to application form or open a modal
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import {useAuth} from "@/hooks/useAuth";
import {Loader2} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {useJobSuggestions} from "@/hooks/useJobSuggestions";
import {JobMatchesCard} from "./JobMatchesCard";
import {NoJobsCard} from "./NoJobsCard";

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },

  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  },
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    )
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { useAuth } from "@/hooks/useAuth",;
import { Loader2 } from "lucide-react",;
import { Badge } from "@/components/ui/badge",;
import { useJobSuggestions } from "@/hooks/useJobSuggestions",;
import { JobMatchesCard } from "./JobMatchesCard",;
import { NoJobsCard } from "./NoJobsCard",;
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useAuth } from "@/hooks/useAuth",;
import { Loader2 } from "lucide-react",;
import { Badge } from "@/components/ui/badge",;
import { useJobSuggestions } from "@/hooks/useJobSuggestions",;
import { JobMatchesCard } from "./JobMatchesCard",;
import { NoJobsCard } from "./NoJobsCard",;
<<<<<<< HEAD

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

=======
;
interface SuggestedJobsProps {;
  talentId?:string,;
}
;
export function SuggestedJobs({ talentId } SuggestedJobsProps) {;
  const { user } = useAuth(),;
  const currentTalentId = talentId || user?.id,;
  const { ;
    isLoading,;
    updateJobMatchStatus, ;
    categorizedMatches:{ ;
      newMatches, ;
      viewedMatches, ;
      appliedMatches ;
    } ;
interface SuggestedJobsProps {;
  talentId?: string;
}
;
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {;
  const { user } = useAuth(),;
  const currentTalentId = talentId || user?.id,;
  const {;
    isLoading,;
    updateJobMatchStatus,;
    categorizedMatches: {;
      newMatches,;
      viewedMatches,;
      appliedMatches;
    } ;
  } = useJobSuggestions(currentTalentId),;
  const handleApply = (matchId: string, jobId: string) => {;
    updateJobMatchStatus(matchId, 'applied'),;
    // In a real app, this might redirect to application form or open a modal;
  };
  const handleDecline = (matchId: string) => {;
    updateJobMatchStatus(matchId, 'declined');
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  if (isLoading) {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  

  return (
    <div className="space-y-6">;
      {/* New Matches Section */}

  if (newMatches && newMatches.length === 0 && viewedMatches && viewedMatches.length === 0 && appliedMatches && appliedMatches.length === 0) {;
    return <NoJobsCard />;
  }
  return (
    <div className="space-y-6">;
      {/* New Matches Section */}
      {newMatches && newMatches.length > 0 && (;
  } = useJobSuggestions(currentTalentId),;
;
  const handleApply = (matchId:string, jobId:string) => {;
    updateJobMatchStatus(matchId, 'applied'),;
    // In a real app, this might redirect to application form or open a modal;
  },;
;
  const handleDecline = (matchId:string) => {;
    updateJobMatchStatus(matchId, 'declined'),;
  },;
;
  if (isLoading) {;
<<<<<<< HEAD
    return (;
=======
    return (
<<<<<<< HEAD
"
      <div className="flex items-center justify-center p-6">;"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="flex items-center justify-center p-6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <Loader2 className="w-6 h-6 animate-spin text-primary" />;
      </div>;
    );
<<<<<<< HEAD
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
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
=======

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
<<<<<<< HEAD
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
      {viewedMatches && viewedMatches.length > 0 && (;
</div>;
        </div>;
      )}

      {/* Previously Viewed Section */}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
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
<<<<<<< HEAD
        <div className="space-y-4">;"
          <div className="flex items-center justify-between">;"
            <h3 className="text-lg font-medium">Applied Jobs</h3>;"
          </div>;
          <div className="grid gap-4 "md":grid-cols-2">;"
            {appliedMatches && appliedMatches.map(match => { return (; }
              <JobMatchesCard
}
key={match && match.id}
                match={match}
                onApply={handleApply}
                onDecline={handleDecline}                onDecline={handleDecline}
                showApplied={true} />;
=======
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Previously Viewed</h3>;
          </div>;
            ))}
          ;
          <div className="grid gap-4 md:grid-cols-2">;
            {viewedMatches.map(match => (;
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
      {/* Applied Jobs Section */}
      {appliedMatches.length > 0 && (;
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Applied Jobs</h3>;
          </div>;
                onDecline={handleDecline}
          ;
          <div className="grid gap-4 md:grid-cols-2">;
            {appliedMatches.map(match => (;
              <JobMatchesCard ;
                key={match.id} ;
                match={match} ;
                onApply={handleApply} ;                onDecline={handleDecline}
                showApplied={true}
              />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            ))}
          </div>;
        </div>;
      )}
    </div>;
<<<<<<< HEAD
  );
}  ),; interface SuggestedJobsProps {
  }
  talentId?: string
}export function SuggestedJobs() {
  }
  }
  user
}= useAuth ();
const currentTalentId = talentId || user?.id;
  }
  isLoading;
updateJobMatchStatus;
"categorizedMatches": {
  }
  newMatches;
viewedMatches;
appliedMatches
}

}= useJobSuggestions (currentTalentId);
  }
  updateJobMatchStatus (matchId, 'applied');'
//In a real app, this might redirect to application form or open a modal
};
const handleDecline = ("matchId": string) => {
  }
  updateJobMatchStatus (matchId, 'declined')'
};
if (isLoading) {
  }
  return (<div className="flex items-center justify-center p-6" > <Loader2 className="w-6 h-6 animate-spin text-primary" /> </div>)"
}if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {
}
return <NoJobsCard />;
}return (<div className="space-y-6" > {"
  /* New Matches Section */
}{
  }
  newMatches.length > 0 && (<div className="space-y-4" > <div className="flex items-center justify-between" > <h3 className="text-lg font-medium" >New Job Matches</h3> <Badge className="bg-green-100 text-green-800 border-green-300" > newMatches.length"
}New </Badge> </div> <JobMatchesCard key= {
  }
  match.id
}match= {
  }
  match
}onApply= {
  }
  handleApply
}onDecline= {
  }
  handleDecline
} />) )
}</div> </div>)
}</div> <div className="grid gap-4 "md":grid-cols-2" > {"
  }
  viewedMatches.map (match => (<JobMatchesCard key= {
  }
  match.id
}match= {
  }
  match
}onApply= {
  }
  handleApply
}onDecline= {
  }
  handleDecline
} />) )
}</div> </div>)
}</div> <div className="grid gap-4 "md":grid-cols-2" > {"
  }
  appliedMatches.map (match => (<JobMatchesCard key= {
  }
  match.id
}match= {
  }
  match
}onApply= {
  }
  handleApply
}onDecline= {
  }
  handleDecline
}showApplied= {
  }
  true
} />) )
}</div> </div>)
}</div>)
}
              <JobMatchesCard,
key={match.id}
                match={match}
                onApply={handleApply}
                onDecline={handleDecline}
                showApplied={true} />;
;
              />;
=======
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Applied Jobs</h3>;
          </div>;
>>>>>>> origin/chore/fix-lint-and-merge
=======
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
  ),; interface SuggestedJobsProps {
  talentId?: string 
}export function SuggestedJobs ({
  talentId 
}: SuggestedJobsProps) {
  const {
  user 
}= useAuth ();
const currentTalentId = talentId || user?.id;
const {
  isLoading;
updateJobMatchStatus;
categorizedMatches: {
  newMatches;
viewedMatches;
appliedMatches 
}


<<<<<<< HEAD
}= useJobSuggestions (currentTalentId);
const handleApply = (matchId: string, jobId: string) => {
  updateJobMatchStatus (matchId, 'applied');
//In a real app, this might redirect to application form or open a modal 
};
const handleDecline = (matchId: string) => {
  updateJobMatchStatus (matchId, 'declined') 
};
if (isLoading) {
  return (<div className="flex items-center justify-center p-6" > <Loader2 className="w-6 h-6 animate-spin text-primary" /> </div>) 
}if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {
  return <NoJobsCard /> 
}return (<div className="space-y-6" > {
  /* New Matches Section */ 
}{
  newMatches.length > 0 && (<div className="space-y-4" > <div className="flex items-center justify-between" > <h3 className="text-lg font-medium" >New Job Matches</h3> <Badge className="bg-green-100 text-green-800 border-green-300" > newMatches.length 
}New </Badge> </div> <JobMatchesCard key= {
  match.id 
}match= {
  match 
}onApply= {
  handleApply 
}onDecline= {
  handleDecline 
}/>) ) 
}</div> </div>) 
}</div> <div className="grid gap-4 md:grid-cols-2" > {
  viewedMatches.map (match => (<JobMatchesCard key= {
  match.id 
}match= {
  match 
}onApply= {
  handleApply 
}onDecline= {
  handleDecline 
}/>) ) 
}</div> </div>) 
}</div> <div className="grid gap-4 md:grid-cols-2" > {
  appliedMatches.map (match => (<JobMatchesCard key= {
  match.id 
}match= {
  match 
}onApply= {
  handleApply 
}onDecline= {
  handleDecline 
}showApplied= {
  true 
}/>) ) 
}</div> </div>) 
}</div>) 
}
              <JobMatchesCard 
                key={match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline}
                showApplied={true}
              />;
;
              />;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
