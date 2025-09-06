
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useAuth} from "@/hooks/useAuth";
import {Loader2} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {useJobSuggestions} from "@/hooks/useJobSuggestions";
import {JobMatchesCard} from "./JobMatchesCard";
import {NoJobsCard} from "./NoJobsCard";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useAuth } from "@/hooks/useAuth",
import { Loader2 } from "lucide-react",
import { Badge } from "@/components/ui/badge",
import { useJobSuggestions } from "@/hooks/useJobSuggestions",
<<<<<<< HEAD
import { JobMatchesCard } from "./JobMatchesCard";
import { NoJobsCard } from "./NoJobsCard";
=======
import { JobMatchesCard } from "./JobMatchesCard",
import { NoJobsCard } from "./NoJobsCard",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface SuggestedJobsProps {
  talentId?: string
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======


>>>>>>> main
interface SuggestedJobsProps {
  talentId?: string
}

<<<<<<< HEAD
<<<<<<< HEAD
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {;
  const { user } = useAuth();
  const currentTalentId = talentId || user?.id;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {
<<<<<<< HEAD
  const { user } = useAuth();
=======
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======


export function SuggestedJobs({ talentId }: SuggestedJobsProps) {

  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,

>>>>>>> main
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main

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
    updateJobMatchStatus(matchId, 'applied'),
    // In a real app, this might redirect to application form or open a modal
<<<<<<< HEAD
  }
  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  }
=======
=======
    updateJobMatchStatus(matchId, 'applied');
    // In a real app, this might redirect to application form or open a modal

import {useAuth} from "@/hooks/useAuth";
import {Loader2} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {useJobSuggestions} from "@/hooks/useJobSuggestions";
import {JobMatchesCard} from "./JobMatchesCard";
import {NoJobsCard} from "./NoJobsCard";
=======

>>>>>>> main
  },

  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> main

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    )
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> main
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
=======

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
      newMatches, ;
      viewedMatches, ;
      appliedMatches ;
    } ;
  } = useJobSuggestions(currentTalentId);

  const handleApply = (matchId: string, jobId: string) => {;
    updateJobMatchStatus(matchId, 'applied');
    // In a real app, this might redirect to application form or open a modal;
  };

  const handleDecline = (matchId: string) => {;
    updateJobMatchStatus(matchId, 'declined');
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  if (isLoading) {;
    return (
>>>>>>> main
      <div className="flex items-center justify-center p-6">;
        <Loader2 className="w-6 h-6 animate-spin text-primary" />;
      </div>;
    );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {
    return <NoJobsCard />
  }
<<<<<<< HEAD
=======
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
              <JobMatchesCard
                key={match.id}
                match={match}
                onApply={handleApply}
                onDecline={handleDecline}
                showApplied={true}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
<<<<<<< HEAD
=======
              <JobMatchesCard 
                key={match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline}
                showApplied={true}
              />;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;
=======
              />;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }


  if (newMatches && newMatches.length === 0 && viewedMatches && viewedMatches.length === 0 && appliedMatches && appliedMatches.length === 0) {;
    return <NoJobsCard />;
  }


=======

  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
              <JobMatchesCard
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
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Previously Viewed</h3>;
          </div>;

          <div className="grid gap-4 md:grid-cols-2">;
            {viewedMatches && viewedMatches.map(match => (;
              <JobMatchesCard
                key={match && match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
              />;

            ))}
          </div>;
        </div>;
      )}


      {/* Applied Jobs Section */}
      {appliedMatches && appliedMatches.length > 0 && (;
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Applied Jobs</h3>;
          </div>;

          <div className="grid gap-4 md:grid-cols-2">;
            {appliedMatches && appliedMatches.map(match => (;
              <JobMatchesCard
                key={match && match.id} 
                match={match} 
                onApply={handleApply} 

                onDecline={handleDecline}
                showApplied={true}
              />;
            ))}
          </div>;
        </div>;
      )}

    </div>;
  );
}

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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
