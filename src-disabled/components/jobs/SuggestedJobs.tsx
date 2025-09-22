:src_backup/components/jobs/SuggestedJobs.tsx

import { useAuth } from "@/hooks/useAuth",
import { Loader2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge",
import { useJobSuggestions } from "@/hooks/useJobSuggestions",
import { JobMatchesCard } from "./JobMatchesCard",
import { NoJobsCard } from "./NoJobsCard",
interface SuggestedJobsProps {
  talentId?: string
}

export function SuggestedJobs({ talentId }: SuggestedJobsProps) {
interface SuggestedJobsProps {
  talent_id?: string;
}

interface SuggestedJobsProps {
  talent_id?: string;
}
origin/cursor/automate-test-improve-and-merge-code-2533

export /**
 * SuggestedJobs - Function description
 */
function SuggestedJobs() {
  const { user } = use_auth ();
  const currentTalentId = talent_id || user?.id;
  const {
    is_loading,
    updateJobMatchStatus,
    categorized_matches: {,
      new_matches,
      viewed_matches,
      applied_matches;
    }
  } = useJobSuggestions (currentTalentId);
  const handle_apply = (match_id: string, job_id:,  string) =>: any {,
    updateJobMatchStatus (match_id, 'applied');    // In a real app, this might redirect to application form or open a modal;
  }
  const handle_decline = (match_id:,  string) =>: any {,
    updateJobMatchStatus (match_id, 'declined');
  }
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
  const { user } = useAuth()
  const currentTalentId = talentId || user?.id
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,

:src_backup/components/jobs/SuggestedJobs.tsx
  const { 
    isLoading,
    updateJobMatchStatus, 
    categorizedMatches: { 
newMatches, 
      viewedMatches, 
      appliedMatches 
    } 
  } = useJobSuggestions(currentTalentId),

  const handleApply = (matchId: string, jobId: string) => {
    updateJobMatchStatus(matchId, 'applied'),
    // In a real app, this might redirect to application form or open a modal
  },

  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  },

  if (isLoading) {
    return (
  if (isLoading) {
  // Check condition
if ( {) {
  $2
}
    return (

    updateJobMatchStatus, ;
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from 'lucide-react'import { Badge } from "@/components/ui/badge";
import { useJobSuggestions } from "@/hooks/useJobSuggestions";
import { JobMatchesCard } from "./JobMatchesCard";
import { NoJobsCard } from "./NoJobsCard";
:src/components/jobs/SuggestedJobs.tsx
    updateJobMatchStatus
import { useAuth } from "@/hooks/useAuth"
import { Loader2 } from 'lucide-react'import { Badge } from "@/components/ui/badge"
import { useJobSuggestions } from "@/hooks/useJobSuggestions"
import { JobMatchesCard } from "./JobMatchesCard"
import { NoJobsCard } from "./NoJobsCard"
interface SuggestedJobsProps {
  talentId?: string
}
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {
  const { user } = useAuth();
  const currentTalentId = null;
  if (isLoading) {
    return (
:src/components/jobs/SuggestedJobs.tsx
      <div className="flex items-center justify-center p-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    )
:src_backup/components/jobs/SuggestedJobs.tsx

import { useAuth } from "@/hooks/useAuth",;
import { Loader2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge",;
import { useJobSuggestions } from "@/hooks/useJobSuggestions",;
import { JobMatchesCard } from "./JobMatchesCard",;
import { NoJobsCard } from "./NoJobsCard",;
interface SuggestedJobsProps {;
  talentId?: string;
}
:src_backup/components/jobs/SuggestedJobs.tsx
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
  const { user } = useAuth();
  const currentTalentId = talentId || user?.id;
  const { ;
    isLoading,;
    updateJobMatchStatus, ;
    categorizedMatches: { ;,
      newMatches,;
      viewedMatches,;
      appliedMatches ;
    } ;
  } = useJobSuggestions(currentTalentId);
:src_backup/components/jobs/SuggestedJobs.tsx

  const handleApply = (matchId: string, jobId: string) => {;
    updateJobMatchStatus(matchId, 'applied');    // In a real app, this might redirect to application form or open a modal
};

  const handleDecline = (matchId: string) => {;
    updateJobMatchStatus(matchId, 'declined')
};
  if (isLoading) {;
return (;
      <div className="flex items-center justify-center p-6">;
        <Loader2 className="w-6 h-6 animate-spin text-primary" />;
      </div>;
    );
  }
:src_backup/components/jobs/SuggestedJobs.tsx
;
  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {;
  if (newMatches && newMatches.length === 0 && viewedMatches && viewedMatches.length === 0 && appliedMatches && appliedMatches.length === 0) {;
    return <NoJobsCard />;
:src_backup/components/jobs/SuggestedJobs.tsx
  }

  }
  return (
    <div className="space-y-6">
      {/* New Matches Section */}
:src_backup/components/jobs/SuggestedJobs.tsx
{newMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">New Job Matches</h3>
            <Badge className="bg-green-100 text-green-800 border-green-300">
              {newMatches.length} New
            </Badge>
          </div>
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
                key = {match && match.id,}
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
              />;

:src_backup/components/jobs/SuggestedJobs.tsx

          <div className="grid gap-4 md:grid-cols-2">
            {newMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
              />
            ))}
          </div>;
        </div>;
      )}
:src_backup/components/jobs/SuggestedJobs.tsx
;

;

;
:src_backup/components/jobs/SuggestedJobs.tsx

      {/* Previously Viewed Section */}

;      {/* Previously Viewed Section */}
      {viewedMatches.length > 0 && (
        <div className="space-y-4">"
          <div className="flex items-center justify-between">"
            <h3 className="text-lg font-medium">Previously Viewed</h3>"
          </div>
:src_backup/components/jobs/SuggestedJobs.tsx
      {/* Previously Viewed Section */}
      {viewedMatches && viewedMatches.length > 0 && (;
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Previously Viewed</h3>;
          </div>;
          <div className="grid gap-4 md:grid-cols-2">;
            {viewedMatches && viewedMatches.map(match => (;
              <JobMatchesCard
                key = {match && match.id,}
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
              />;

:src_backup/components/jobs/SuggestedJobs.tsx

          <div className="grid gap-4 md:grid-cols-2">
            {viewedMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
              />
            ))}
          </div>;
        </div>;
      )}
:src_backup/components/jobs/SuggestedJobs.tsx
;

;

;
:src_backup/components/jobs/SuggestedJobs.tsx

      {/* Applied Jobs Section */}

;      {/* Applied Jobs Section */}
      {appliedMatches.length > 0 && (
        <div className="space-y-4">"
          <div className="flex items-center justify-between">"
            <h3 className="text-lg font-medium">Applied Jobs</h3>"
          </div>
:src_backup/components/jobs/SuggestedJobs.tsx

          <div className="grid gap-4 md:grid-cols-2">
            {appliedMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline}
                showApplied={true}

              <JobMatchesCard 

                key = {match.id,}

      {/* Applied Jobs Section */}
      {appliedMatches && appliedMatches.length > 0 && (;
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Applied Jobs</h3>;
          </div>;
          <div className="grid gap-4 md:grid-cols-2">;
            {appliedMatches && appliedMatches.map(match => (;
              <JobMatchesCard
                key = {match && match.id,}
:src_backup/components/jobs/SuggestedJobs.tsx
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
                showApplied = {true,}
:src_backup/components/jobs/SuggestedJobs.tsx
              />;

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
              />;
            ))}
          </div>;
        </div>;
      )}
:src_backup/components/jobs/SuggestedJobs.tsx
    </div>;
  );
}

    </div>;
  );
  // Check condition
if ( {) {
  $2
}
    return <NoJobsCard />;
  }
  return (
:src_backup/components/jobs/SuggestedJobs.tsx
    <div className="space-y-6">;
      {/* New Matches Section */}
      {new_matches.length > 0 && (
        <div className="space-y-4">;
          <div className="flex items - center justify-between">;
            <h3 className="text - lg font-medium">New Job Matches</h3>;
            <Badge className="bg - green - 100 text - green - 800 border - green-300">;
              {new_matches.length} New;
            </Badge>;
          </div>;
          <div className="grid gap - 4 md:grid - cols-2">;
            {new_matches.map (match => (
              <JobMatchesCard;
                key = {match.id, }
                match = {match, }
                on_apply = {handle_apply, }
                on_decline = {handle_decline, }
              />))}
          </div>;
        </div>)}
      {/* Previously Viewed Section */}
      {viewed_matches.length > 0 && (
:src_backup/components/jobs/SuggestedJobs.tsx
        <div className="space-y-4">;
          <div className="flex items - center justify-between">;
            <h3 className="text - lg font-medium">Previously Viewed</h3>;
          </div>;
          <div className="grid gap - 4 md:grid - cols-2">;
            {viewed_matches.map (match => (
              <JobMatchesCard;
                key = {match.id, }
                match = {match, }
                on_apply = {handle_apply, }
                on_decline = {handle_decline, }
              />))}
          </div>;
        </div>)}
      {/* Applied Jobs Section */}
      {applied_matches.length > 0 && (
:src_backup/components/jobs/SuggestedJobs.tsx
        <div className="space-y-4">;
          <div className="flex items - center justify-between">;
            <h3 className="text - lg font-medium">Applied Jobs</h3>;
          </div>;
          <div className="grid gap - 4 md:grid - cols-2">;
            {applied_matches.map (match => (
              <JobMatchesCard;
                key = {match.id, }
                match = {match, }
                on_apply = {handle_apply, }
                on_decline = {handle_decline, }
                show_applied = {true, }
              />))}
          </div>;
        </div>)}
    </div>);
}= useJobSuggestions (currentTalentId);
:src_backup/components/jobs/SuggestedJobs.tsx
const handle_apply = (match_id: string, job_id: string) =>: any {
  updateJobMatchStatus (match_id,  'applied');
//In a real app, this might redirect to application form or open a modal;
}
const handle_decline = (match_id: string) =>: any {';
  updateJobMatchStatus (match_id, 'declined');
}
// Check condition
if ( {) {
  $2
}
:src_backup/components/jobs/SuggestedJobs.tsx
  return (<div className="flex items - center justify - center p-6" > <Loader2 className="w - 6 h - 6 animate - spin text-primary" /> </div>);
}// Check condition
if ( {) {
  $2
}
  return <NoJobsCard /> ";
:src_backup/components/jobs/SuggestedJobs.tsx
}return (<div className="space-y-6" > {
  /* New Matches Section */;
}{";
  new_matches.length > 0 && (<div className="space-y-4" > <div className="flex items - center justify-between" > <h3 className="text - lg font-medium" >New Job Matches</h3> <Badge className="bg - green - 100 text - green - 800 border - green-300" > new_matches.length;
}New </Badge> </div> <JobMatchesCard key= {
  match.id;
}match= {
  match;
}on_apply= {
  handle_apply;
}on_decline= {
  handle_decline;
}/>) );
}</div> </div>) ";
:src_backup/components/jobs/SuggestedJobs.tsx
}</div> <div className="grid gap - 4 md:grid - cols-2" > {
  viewed_matches.map (match => (<JobMatchesCard key= {
  match.id;
}match= {
  match;
}on_apply= {
  handle_apply;
}on_decline= {
  handle_decline;
}/>) );
}</div> </div>) ";
:src_backup/components/jobs/SuggestedJobs.tsx
}</div> <div className="grid gap - 4 md:grid - cols-2" > {
  applied_matches.map (match => (<JobMatchesCard key= {
  match.id;
}match= {
  match;
}on_apply= {
  handle_apply;
}on_decline= {
  handle_decline;
}show_applied= {
  true;
}/>) );
}</div> </div>);
}</div>);
:src_backup/components/jobs/SuggestedJobs.tsx
}'"}
}
;
;

}'"}"
}
;
}}))
}
;
    </div>
  );

}= useJobSuggestions (currentTalentId);
const handleApply = (matchId: string, jobId: string) => {;
  updateJobMatchStatus (matchId,  'applied');
//In a real app, this might redirect to application form or open a modal ;
};
const handleDecline = (matchId: string) => {';
  updateJobMatchStatus (matchId, 'declined') ;
};
if (isLoading) {;
  return (<div className="flex items-center justify-center p-6" > <Loader2 className="w-6 h-6 animate-spin text-primary" /> </div>) ;
}if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {;
  return <NoJobsCard /> ";
}return (<div className="space-y-6" > {;
  /* New Matches Section */ ;
}{";
  newMatches.length > 0 && (<div className="space-y-4" > <div className="flex items-center justify-between" > <h3 className="text-lg font-medium" >New Job Matches</h3> <Badge className="bg-green-100 text-green-800 border-green-300" > newMatches.length ;
}New </Badge> </div> <JobMatchesCard key= {;
  match.id ;
}match= {;
  match ;
}onApply= {;
  handleApply ;
}onDecline= {;
  handleDecline ;
}/>) ) ;
}</div> </div>) ";
}</div> <div className="grid gap-4 md:grid-cols-2" > {;
  viewedMatches.map (match => (<JobMatchesCard key= {;
  match.id ;
}match= {;
  match ;
}onApply= {;
  handleApply ;
}onDecline= {;
  handleDecline ;
}/>) ) ;
}</div> </div>) ";
}</div> <div className="grid gap-4 md:grid-cols-2" > {;
  appliedMatches.map (match => (<JobMatchesCard key= {;
  match.id ;
}match= {;
  match ;
}onApply= {;
  handleApply ;
}onDecline= {;
  handleDecline ;
}showApplied= {;
  true ;
}/>) ) ;
}</div> </div>) ;
}</div>) ;
}'"
:src/components/jobs/SuggestedJobs.tsx
