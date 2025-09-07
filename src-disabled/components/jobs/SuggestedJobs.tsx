<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface SuggestedJobsProps {
  talent_id?: string;
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
=======

interface SuggestedJobsProps {
  talent_id?: string;
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/SuggestedJobs.tsx

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,

<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
  const { 
    isLoading,
    updateJobMatchStatus, 
    categorizedMatches: { 
<<<<<<< HEAD
      newMatches, 
      viewedMatches, 
      appliedMatches 
    } 
  } = useJobSuggestions(currentTalentId),

<<<<<<< HEAD
  const handleApply = (matchId: string, jobId: string) => {
    updateJobMatchStatus(matchId, 'applied'),
    // In a real app, this might redirect to application form or open a modal
  },

  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  },

  if (isLoading) {
    return (
=======

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/SuggestedJobs.tsx
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
  if (isLoading) {
    return (
<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/SuggestedJobs.tsx
      <div className="flex items-center justify-center p-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    )
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
import { useAuth } from "@/hooks/useAuth",;
import { Loader2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge",;
import { useJobSuggestions } from "@/hooks/useJobSuggestions",;
import { JobMatchesCard } from "./JobMatchesCard",;
import { NoJobsCard } from "./NoJobsCard",;
interface SuggestedJobsProps {;
  talentId?: string;
}
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD
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
=======

export function SuggestedJobs(): any ({ talentId }: SuggestedJobsProps) {;
=======
export function SuggestedJobs(): any ({ talentId }:,  SuggestedJobsProps) {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
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
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx

  const handleApply = (matchId: string, jobId: string) => {;
    updateJobMatchStatus(matchId, 'applied');    // In a real app, this might redirect to application form or open a modal
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleDecline = (matchId: string) => {;
    updateJobMatchStatus(matchId, 'declined')
};
=======
  const handleApply = (matchId: string, jobId:,  string) => {;,
    updateJobMatchStatus(matchId, 'applied');    // In a real app, this might redirect to application form or open a modal;
  };
  const handleDecline = (matchId:,  string) => {;,
    updateJobMatchStatus(matchId, 'declined');
  };
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
  if (isLoading) {;
<<<<<<< HEAD
    return (;
=======
    return (
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
  if (isLoading) {;
    return (;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
      <div className="flex items-center justify-center p-6">;
        <Loader2 className="w-6 h-6 animate-spin text-primary" />;
      </div>;
    );
  }
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD
;
  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {;
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
  if (newMatches && newMatches.length === 0 && viewedMatches && viewedMatches.length === 0 && appliedMatches && appliedMatches.length === 0) {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return <NoJobsCard />;
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  }
  
=======
  }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
  return (
    <div className="space-y-6">
      {/* New Matches Section */}
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD
      {newMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">New Job Matches</h3>
            <Badge className="bg-green-100 text-green-800 border-green-300">
              {newMatches.length} New
            </Badge>
          </div>
=======

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
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

<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
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
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/SuggestedJobs.tsx
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx


;

;
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx

<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/SuggestedJobs.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
      {/* Previously Viewed Section */}
=======
      
;      {/* Previously Viewed Section */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {viewedMatches.length > 0 && (
        <div className="space-y-4">"
          <div className="flex items-center justify-between">"
            <h3 className="text-lg font-medium">Previously Viewed</h3>"
          </div>
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
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

<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
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
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/SuggestedJobs.tsx
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx


;

;
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx

<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/SuggestedJobs.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
      {/* Applied Jobs Section */}
=======
      
;      {/* Applied Jobs Section */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {appliedMatches.length > 0 && (
        <div className="space-y-4">"
          <div className="flex items-center justify-between">"
            <h3 className="text-lg font-medium">Applied Jobs</h3>"
          </div>
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          
          <div className="grid gap-4 md:grid-cols-2">
            {appliedMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline}
                showApplied={true}
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

              <JobMatchesCard 

                key = {match.id,}

<<<<<<< HEAD
=======
              <JobMatchesCard
                key = {match.id,}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
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
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/SuggestedJobs.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
                showApplied = {true,}
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              />;
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
            ))}
          </div>;
        </div>;
      )}
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    </div>;
  );

=======
    </div>;
  );
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
  // Check condition
if ( {) {
  $2
}
    return <NoJobsCard />;
  }
  return (
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
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
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
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
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
        <div className="space-y-4">;
          <div className="flex items - center justify-between">;
            <h3 className="text - lg font-medium">Previously Viewed</h3>;
          </div>;
          <div className="grid gap - 4 md:grid - cols-2">;
=======
        <div className="space - y-4">;
          <div className="flex items - center justify - between">;
            <h3 className="text - lg font - medium">Previously Viewed</h3>;
          </div>;
          <div className="grid gap - 4 md:grid - cols - 2">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
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
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
        <div className="space-y-4">;
          <div className="flex items - center justify-between">;
            <h3 className="text - lg font-medium">Applied Jobs</h3>;
          </div>;
          <div className="grid gap - 4 md:grid - cols-2">;
=======
        <div className="space - y-4">;
          <div className="flex items - center justify - between">;
            <h3 className="text - lg font - medium">Applied Jobs</h3>;
          </div>;
          <div className="grid gap - 4 md:grid - cols - 2">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
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
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
const handle_apply = (match_id: string, job_id: string) =>: any {
  updateJobMatchStatus (match_id,  'applied');
//In a real app, this might redirect to application form or open a modal;
}
const handle_decline = (match_id: string) =>: any {';
=======
const handle_apply = (match_id: string, job_id:,  string) =>: any {,
  updateJobMatchStatus (match_id,  'applied');
//In a real app, this might redirect to application form or open a modal;
}
const handle_decline = (match_id:,  string) =>: any {';',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
  updateJobMatchStatus (match_id, 'declined');
}
// Check condition
if ( {) {
  $2
}
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
  return (<div className="flex items - center justify - center p-6" > <Loader2 className="w - 6 h - 6 animate - spin text-primary" /> </div>);
=======
  return (<div className="flex items - center justify - center p - 6" > <Loader2 className="w - 6 h - 6 animate - spin text - primary" /> </div>);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
}// Check condition
if ( {) {
  $2
}
  return <NoJobsCard /> ";
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
}return (<div className="space-y-6" > {
  /* New Matches Section */;
}{";
  new_matches.length > 0 && (<div className="space-y-4" > <div className="flex items - center justify-between" > <h3 className="text - lg font-medium" >New Job Matches</h3> <Badge className="bg - green - 100 text - green - 800 border - green-300" > new_matches.length;
=======
}return (<div className="space - y-6" > {"
  /* New Matches Section */;
}{";
  new_matches.length > 0 && (<div className="space - y-4" > <div className="flex items - center justify - between" > <h3 className="text - lg font - medium" >New Job Matches</h3> <Badge className="bg - green - 100 text - green - 800 border - green - 300" > new_matches.length;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
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
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
}</div> <div className="grid gap - 4 md:grid - cols-2" > {
=======
}</div> <div className="grid gap - 4 md:grid - cols - 2" > {",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
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
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
}</div> <div className="grid gap - 4 md:grid - cols-2" > {
=======
}</div> <div className="grid gap - 4 md:grid - cols - 2" > {",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
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
<<<<<<< HEAD:src_backup/components/jobs/SuggestedJobs.tsx
}'"}
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/SuggestedJobs.tsx
=======
}'"}"
}
;
}}))
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/jobs/SuggestedJobs.tsx
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
<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/jobs/SuggestedJobs.tsx
