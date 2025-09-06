
<<<<<<< HEAD
<<<<<<< HEAD


=======
import {useAuth} from "@/hooks/useAuth";
import {Loader2} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {useJobSuggestions} from "@/hooks/useJobSuggestions";
import {JobMatchesCard} from "./JobMatchesCard";
import {NoJobsCard} from "./NoJobsCard";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface SuggestedJobsProps {
  talentId?: string
}



export function SuggestedJobs({ talentId }: SuggestedJobsProps) {

  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,

<<<<<<< HEAD
=======
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {;
  const { user } = useAuth();
  const currentTalentId = talentId || user?.id;
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {
  const { user } = useAuth();
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const currentTalentId = talentId |user?.id;
  const {
    isLoading;
    updateJobMatchStatus
    categorizedMatches: {
      newMatches
      viewedMatches
      appliedMatches
    }
  } = useJobSuggestions(currentTalentId);
  const handleApply = (matchId: string, jobId: string) => {
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
=======

=======


    updateJobMatchStatus(matchId, 'applied'),
    // In a real app, this might redirect to application form or open a modal
  }
  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },

  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  },
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    )
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { useAuth } from "@/hooks/useAuth",;
import { Loader2 } from "lucide-react",;
import { Badge } from "@/components/ui/badge",;
import { useJobSuggestions } from "@/hooks/useJobSuggestions",;
import { JobMatchesCard } from "./JobMatchesCard",;
import { NoJobsCard } from "./NoJobsCard",;

<<<<<<< HEAD
interface SuggestedJobsProps {;
  talentId?: string;
}

export function SuggestedJobs(): any ({ talentId }: SuggestedJobsProps) {;
  const { user } = useAuth();
  const currentTalentId = talentId || user?.id;
  const { ;
    isLoading;
    updateJobMatchStatus, ;
    categorizedMatches: { ;
=======
import { useAuth } from "@/hooks/useAuth",;
import { Loader2 } from "lucide-react",;
import { Badge } from "@/components/ui/badge",;
import { useJobSuggestions } from "@/hooks/useJobSuggestions",;
import { JobMatchesCard } from "./JobMatchesCard",;
import { NoJobsCard } from "./NoJobsCard",;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      newMatches, ;
      viewedMatches, ;
      appliedMatches ;
    } ;
<<<<<<< HEAD
  } = useJobSuggestions(currentTalentId);

  const handleApply = (matchId: string, jobId: string) => {;
    updateJobMatchStatus(matchId, 'applied');
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    // In a real app, this might redirect to application form or open a modal;
  };

  const handleDecline = (matchId: string) => {;
    updateJobMatchStatus(matchId, 'declined');
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  if (isLoading) {;
<<<<<<< HEAD
    return (
=======


  

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
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

  if (isLoading) {;
    return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="flex items-center justify-center p-6">;
        <Loader2 className="w-6 h-6 animate-spin text-primary" />;
      </div>;
    );
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }


  if (newMatches && newMatches.length === 0 && viewedMatches && viewedMatches.length === 0 && appliedMatches && appliedMatches.length === 0) {;
    return <NoJobsCard />;
  }
  
  return (
    <div className="space-y-6">;
      {/* New Matches Section */}
<<<<<<< HEAD

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
              <JobMatchesCard
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                key={match && match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
              />;

            ))}
<<<<<<< HEAD
          </div>;
        </div>;
      )}


      {/* Previously Viewed Section */}
      {viewedMatches && viewedMatches.length > 0 && (;
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Previously Viewed</h3>;
          </div>;
<<<<<<< HEAD

          <div className="grid gap-4 md:grid-cols-2">;
            {viewedMatches && viewedMatches.map(match => (;
              <JobMatchesCard
=======
              <JobMatchesCard 
                key={match.id} 
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                key={match && match.id} 
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
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            ))}
          </div>;
        </div>;
      )}
<<<<<<< HEAD
      ;
      {/* Applied Jobs Section */}
      {appliedMatches.length > 0 && (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Applied Jobs</h3>;
          </div>;
<<<<<<< HEAD

          <div className="grid gap-4 md:grid-cols-2">;
            {appliedMatches && appliedMatches.map(match => (;
              <JobMatchesCard
                key={match && match.id} 
                match={match} 
                onApply={handleApply} 

                onDecline={handleDecline}
=======
                onDecline={handleDecline}
          ;
          <div className="grid gap-4 md:grid-cols-2">;
            {appliedMatches.map(match => (;
              <JobMatchesCard ;
                key={match.id} ;
                match={match} ;
                onApply={handleApply} ;                onDecline={handleDecline}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                onDecline={handleDecline}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                showApplied={true}
              />;
            ))}
          </div>;
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD

    </div>;
  );
}

=======
=======
    </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
