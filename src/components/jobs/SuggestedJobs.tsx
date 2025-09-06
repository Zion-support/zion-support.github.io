<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

    updateJobMatchStatus
    updateJobMatchStatus, 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useAuth } from "@/hooks/useAuth"
import { Loader2 } from 'lucide-react'import { Badge } from "@/components/ui/badge"
import { useJobSuggestions } from "@/hooks/useJobSuggestions"
import { JobMatchesCard } from "./JobMatchesCard"
import { NoJobsCard } from "./NoJobsCard"
<<<<<<< HEAD
<<<<<<< HEAD
=======
    updateJobMatchStatus
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
updateJobMatchStatus, 

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useAuth } from "@/hooks/useAuth",
import { Loader2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge",
import { useJobSuggestions } from "@/hooks/useJobSuggestions",
import { JobMatchesCard } from "./JobMatchesCard",
import { NoJobsCard } from "./NoJobsCard",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

interface SuggestedJobsProps {
=======
>>>>>>> interface SuggestedJobsProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  talentId?: string
}
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface SuggestedJobsProps {
  talentId?: string
}
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {

  const { user } = useAuth()
  const currentTalentId = talentId |user?.id
  const {
    isLoading
    updateJobMatchStatus
    categorizedMatches: {
      newMatches
      viewedMatches
      appliedMatches
    }
  } = useJobSuggestions(currentTalentId)
  const handleApply = (matchId: string, jobId: string) => {
    updateJobMatchStatus(matchId, 'applied');    // In a real app, this might redirect to application form or open a modal
  }
  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  }
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
  const { user } = useAuth()
  const currentTalentId = talentId || user?.id
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const { 
    isLoading,
    updateJobMatchStatus, 
    categorizedMatches: { 
<<<<<<< HEAD
<<<<<<< HEAD

=======
========
updateJobMatchStatus,
import { use_auth  } from '@/hooks / use_auth';
import { Loader2 } from 'lucide-react'import { Badge  } from '@/components / ui / badge';
import { useJobSuggestions  } from '@/hooks / useJobSuggestions';
import { JobMatchesCard  } from './JobMatchesCard';
import { NoJobsCard  } from './NoJobsCard';
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
interface SuggestedJobsProps {
  talent_id?: string;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/SuggestedJobs.tsx
export /**
 * SuggestedJobs - Function description
 */
function SuggestedJobs() {
  const { user } = use_auth ();
  const currentTalentId = talent_id || user?.id;
  const {
    is_loading,
    updateJobMatchStatus,
    categorized_matches: {
      new_matches,
      viewed_matches,
      applied_matches;
    }
  } = useJobSuggestions (currentTalentId);
  const handle_apply = (match_id: string, job_id: string) =>: any {
    updateJobMatchStatus (match_id, 'applied');    // In a real app, this might redirect to application form or open a modal;
<<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/SuggestedJobs.tsx
  }
  const handle_decline = (match_id: string) =>: any {
    updateJobMatchStatus (match_id, 'declined');
  }
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
>>>>>>>   const { 
    isLoading,
    updateJobMatchStatus, 
    categorizedMatches: { 
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      newMatches,
      viewedMatches,
      appliedMatches ;
    } ;
  } = useJobSuggestions(currentTalentId);
  const handleApply = (matchId: string, jobId: string) => {;
    updateJobMatchStatus(matchId, 'applied');    // In a real app, this might redirect to application form or open a modal
  }
  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>>   if (isLoading) {
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (isLoading) {
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/SuggestedJobs.tsx
=======

  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
  const { user } = useAuth()
  const currentTalentId = talentId || user?.id
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,


  const { 
    isLoading,
    updateJobMatchStatus, 
    categorizedMatches: { 





  if (isLoading) {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>>     return (


========
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    return (
      <div className="flex items - center justify - center p - 6">;
        <Loader2 className="w - 6 h - 6 animate - spin text - primary" />;
      </div>);
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/SuggestedJobs.tsx
    updateJobMatchStatus, ;
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from 'lucide-react'import { Badge } from "@/components/ui/badge";
import { useJobSuggestions } from "@/hooks/useJobSuggestions";
import { JobMatchesCard } from "./JobMatchesCard";
import { NoJobsCard } from "./NoJobsCard";
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  if (isLoading) {
    return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      <div className="flex items-center justify-center p-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {
    return <NoJobsCard />
  }
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { useAuth } from "@/hooks/useAuth",;
import { Loader2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge",;
import { useJobSuggestions } from "@/hooks/useJobSuggestions",;
import { JobMatchesCard } from "./JobMatchesCard",;
import { NoJobsCard } from "./NoJobsCard",;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
interface SuggestedJobsProps {;
  talentId?: string;
}
export function SuggestedJobs(): any ({ talentId }: SuggestedJobsProps) {;
  const { user } = useAuth();
  const currentTalentId = talentId || user?.id;
  const { ;
    isLoading,;
    updateJobMatchStatus, ;
    categorizedMatches: { ;
      newMatches,;
      viewedMatches,;
      appliedMatches ;
    } ;
  } = useJobSuggestions(currentTalentId);
  const handleApply = (matchId: string, jobId: string) => {;
    updateJobMatchStatus(matchId, 'applied');    // In a real app, this might redirect to application form or open a modal;
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
    // In a real app, this might redirect to application form or open a modal;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  };
  const handleDecline = (matchId: string) => {;
    updateJobMatchStatus(matchId, 'declined');
  };
  if (isLoading) {;
<<<<<<< HEAD
    return (
=======
    return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="flex items-center justify-center p-6">;
        <Loader2 className="w-6 h-6 animate-spin text-primary" />;
      </div>;
    );
  }
<<<<<<< HEAD
  if (newMatches && newMatches.length === 0 && viewedMatches && viewedMatches.length === 0 && appliedMatches && appliedMatches.length === 0) {;
    return <NoJobsCard />;
<<<<<<< HEAD

  }
<<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/SuggestedJobs.tsx
  return (
=======
>>>>>>>   }
  
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <div className="space-y-6">
      {/* New Matches Section */}
<<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
=======
;
  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {;
    return <NoJobsCard />;
  }
  
  return (
    <div className="space-y-6">
      {/* New Matches Section */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {newMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">New Job Matches</h3>
            <Badge className="bg-green-100 text-green-800 border-green-300">
              {newMatches.length} New
            </Badge>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
          <div className="grid gap-4 md:grid-cols-2">
=======
          <div className="grid gap-4 md:grid-cols-2">
            {newMatches.map(match => (
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  }

  return (
    <div className="space-y-6">;
      {/* New Matches Section */}

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/SuggestedJobs.tsx
      {newMatches && newMatches.length > 0 && (;
=======

import { useAuth } from "@/hooks/useAuth",;
import { Loader2 } from 'lucide-react';
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
      newMatches, ;
      viewedMatches, ;
      appliedMatches ;
    } ;
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
      <div className="flex items-center justify-center p-6">;
        <Loader2 className="w-6 h-6 animate-spin text-primary" />;
      </div>;
    ),;
  }
;
  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {;
    return <NoJobsCard />,;
  }
  ;
  return (;
    <div className="space-y-6">;
      {/* New Matches Section */}
      {newMatches.length > 0 && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">New Job Matches</h3>;
            <Badge className="bg-green-100 text-green-800 border-green-300">;
<<<<<<< HEAD
              {newMatches && newMatches.length} New;
            </Badge>;
          </div>;
          <div className="grid gap-4 md:grid-cols-2">;
            {newMatches && newMatches.map(match => (;
>>>>>>>               <JobMatchesCard
                key = {match && match.id,}
<<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx

                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
<<<<<<< HEAD
          
>>>>>>>           <div className="grid gap-4 md:grid-cols-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
              />;


          
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <div className="grid gap-4 md:grid-cols-2">
            {newMatches.map(match => (
              <JobMatchesCard
                key = {match.id,}
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
          
          <div className="grid gap-4 md:grid-cols-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {newMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>               />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>             ))}
========
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
              />;
=======
              />
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            ))}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/SuggestedJobs.tsx
          </div>;
        </div>;
      )}
      ;
      {/* Previously Viewed Section */}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx

;

      
;
<<<<<<< HEAD
>>>>>>> >>>>>>>       {/* Previously Viewed Section */}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {/* Previously Viewed Section */}
>>>>>>>       {viewedMatches.length > 0 && (
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              />
            ))}
          </div>
        </div>
      )}
;
      
;
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      {/* Previously Viewed Section */}
      {viewedMatches.length > 0 && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Previously Viewed</h3>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          <div className="grid gap-4 md:grid-cols-2">
=======
          <div className="grid gap-4 md:grid-cols-2">
            {viewedMatches.map(match => (
              <JobMatchesCard
                key = {match && match.id,}

                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
<<<<<<< HEAD
          
>>>>>>>           <div className="grid gap-4 md:grid-cols-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
              />;


          
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <div className="grid gap-4 md:grid-cols-2">
            {viewedMatches.map(match => (
              <JobMatchesCard
                key = {match.id,}
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
          
          <div className="grid gap-4 md:grid-cols-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {viewedMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>               />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>             ))}
========
      {viewedMatches && viewedMatches.length > 0 && (;
=======
      {viewedMatches.length > 0 && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Previously Viewed</h3>;
          </div>;
<<<<<<< HEAD
          <div className="grid gap-4 md:grid-cols-2">;
            {viewedMatches && viewedMatches.map(match => (;
              <JobMatchesCard
                key = {match && match.id,}
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
              />;
=======
              />
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            ))}
=======
          ;
          <div className="grid gap-4 md:grid-cols-2">;
            {viewedMatches.map(match => (;
              <JobMatchesCard ;
                key={match.id} ;
                match={match} ;
                onApply={handleApply} ;
                onDecline={handleDecline} ;
              />;            ))}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/SuggestedJobs.tsx
          </div>;
        </div>;
      )}
      ;
      {/* Applied Jobs Section */}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx

;

      
;
<<<<<<< HEAD
>>>>>>> >>>>>>>       {/* Applied Jobs Section */}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {/* Applied Jobs Section */}
>>>>>>>       {appliedMatches.length > 0 && (
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              />
            ))}
          </div>
        </div>
      )}
;
      
;
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      {/* Applied Jobs Section */}
      {appliedMatches.length > 0 && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Applied Jobs</h3>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
              <JobMatchesCard
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                key = {match.id,}
=======

              <JobMatchesCard 


                key = {match.id,}

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      {/* Applied Jobs Section */}
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/SuggestedJobs.tsx
      {appliedMatches && appliedMatches.length > 0 && (;
=======
      {appliedMatches.length > 0 && (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Applied Jobs</h3>;
          </div>;
<<<<<<< HEAD
          <div className="grid gap-4 md:grid-cols-2">;
            {appliedMatches && appliedMatches.map(match => (;
              <JobMatchesCard
                key = {match && match.id,}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className="grid gap-4 md:grid-cols-2">
            {appliedMatches.map(match => (
              <JobMatchesCard
              <JobMatchesCard 
                key = {match.id,}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
                showApplied = {true,}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
              />
<<<<<<< HEAD

=======
          
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              />
          
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="grid gap-4 md:grid-cols-2">
            {appliedMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline}
                showApplied={true}
              />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            ))}
          </div>
        </div>
      )}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>             ))}
          </div>
        </div>
      )}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>
  )
}= useJobSuggestions (currentTalentId)
const handleApply = (matchId: string, jobId: string) => {
  updateJobMatchStatus (matchId,  'applied')
//In a real app, this might redirect to application form or open a modal
}
const handleDecline = (matchId: string) => {'
  updateJobMatchStatus (matchId, 'declined')
}
if (isLoading) {
  return (<div className="flex items-center justify-center p-6" > <Loader2 className="w-6 h-6 animate-spin text-primary" /> </div>)
}if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {
  return <NoJobsCard /> "
}return (<div className="space-y-6" > {
  /* New Matches Section */
}{"
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
}</div> </div>) "
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
}</div> </div>) "
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
}'"}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
========
=======
          ;
          <div className="grid gap-4 md:grid-cols-2">;
            {appliedMatches.map(match => (;
              <JobMatchesCard ;
                key={match.id} ;
                match={match} ;
                onApply={handleApply} ;                onDecline={handleDecline}
                showApplied={true}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              />;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/SuggestedJobs.tsx
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            ))}
          </div>;
        </div>;
      )}
<<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/SuggestedJobs.tsx
    </div>;
<<<<<<< HEAD
  );
<<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
=======
  ),; interface SuggestedJobsProps {;
  talentId?: string ;
}export function SuggestedJobs ({;
  talentId ;
}: SuggestedJobsProps) {;
  const {;
  user ;
}= useAuth ();
const currentTalentId = talentId || user?.id;
const {;
  isLoading;
updateJobMatchStatus;
categorizedMatches: {;
  newMatches;
viewedMatches;
appliedMatches ;
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
}if (newMatches && newMatches.length === 0 && viewedMatches && viewedMatches.length === 0 && appliedMatches && appliedMatches.length === 0) {;
=======
}if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return <NoJobsCard /> ";
}return (<div className="space-y-6" > {;
  /* New Matches Section */ ;
}{";
<<<<<<< HEAD
  newMatches && newMatches.length > 0 && (<div className="space-y-4" > <div className="flex items-center justify-between" > <h3 className="text-lg font-medium" >New Job Matches</h3> <Badge className="bg-green-100 text-green-800 border-green-300" > newMatches && newMatches.length ;
}New </Badge> </div> <JobMatchesCardkey= {
  match && match.id 
}match= {
  match 
}onApply= {
  handleApply 
}onDecline= {
  handleDecline 
}/>) ) ;
}</div> </div>) ";
}</div> <div className="grid gap-4 md:grid-cols-2" > {;
  viewedMatches && viewedMatches.map (match => (<JobMatchesCardkey= {
  match && match.id 
}match= {
  match 
}onApply= {
  handleApply 
}onDecline= {
  handleDecline 
}/>) ) ;
}</div> </div>) ";
}</div> <div className="grid gap-4 md:grid-cols-2" > {;
  appliedMatches && appliedMatches.map (match => (<JobMatchesCardkey= {
  match && match.id 
}match= {
  match 
}onApply= {
  handleApply 
}onDecline= {
  handleDecline 
}showApplied= {
  true 
}/>) ) ;
}</div> </div>) ;
}</div>) ;
}'"}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/SuggestedJobs.tsx
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
                key = {match.id, }
                match = {match, }
                on_apply = {handle_apply, }
                on_decline = {handle_decline, }
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
                key = {match.id, }
                match = {match, }
                on_apply = {handle_apply, }
                on_decline = {handle_decline, }
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
  return (<div className="flex items - center justify - center p - 6" > <Loader2 className="w - 6 h - 6 animate - spin text - primary" /> </div>);
}// Check condition
if ( {) {
  $2
}
  return <NoJobsCard /> ";
}return (<div className="space - y-6" > {
  /* New Matches Section */;
}{";
  new_matches.length > 0 && (<div className="space - y-4" > <div className="flex items - center justify - between" > <h3 className="text - lg font - medium" >New Job Matches</h3> <Badge className="bg - green - 100 text - green - 800 border - green - 300" > new_matches.length;
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
}</div> <div className="grid gap - 4 md:grid - cols - 2" > {
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
}</div> <div className="grid gap - 4 md:grid - cols - 2" > {
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
}'"}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/jobs/SuggestedJobs.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/jobs/SuggestedJobs.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
