<<<<<<< HEAD
<<<<<<< HEAD
    updateJobMatchStatus
=======

    updateJobMatchStatus
    updateJobMatchStatus, 
import { useAuth } from "@/hooks/useAuth"
import { Loader2 } from 'lucide-react'import { Badge } from "@/components/ui/badge"
import { useJobSuggestions } from "@/hooks/useJobSuggestions"
import { JobMatchesCard } from "./JobMatchesCard"
import { NoJobsCard } from "./NoJobsCard"
    updateJobMatchStatus

updateJobMatchStatus, 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { useAuth } from "@/hooks/useAuth",
import { Loader2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge",
import { useJobSuggestions } from "@/hooks/useJobSuggestions",
import { JobMatchesCard } from "./JobMatchesCard",
import { NoJobsCard } from "./NoJobsCard",
<<<<<<< HEAD

=======
  talentId?: string
}
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface SuggestedJobsProps {
  talentId?: string
}

<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
  const { user } = useAuth()
  const currentTalentId = talentId || user?.id
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
<<<<<<< HEAD


  const { 
  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  },
    return (
  }
=======
  const { 
    isLoading,
    updateJobMatchStatus, 
    categorizedMatches: { 
updateJobMatchStatus,
import { use_auth  } from '@/hooks / use_auth';
import { Loader2 } from 'lucide-react'import { Badge  } from '@/components / ui / badge';
import { useJobSuggestions  } from '@/hooks / useJobSuggestions';
import { JobMatchesCard  } from './JobMatchesCard';
import { NoJobsCard  } from './NoJobsCard';
interface SuggestedJobsProps {
  talent_id?: string;
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
  const handle_decline = (match_id: string) =>: any {
    updateJobMatchStatus (match_id, 'declined');
  }
<<<<<<< HEAD
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
=======
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
  const { user } = useAuth()
  const currentTalentId = talentId || user?.id
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {
  const { 
    isLoading,
    updateJobMatchStatus, 
    categorizedMatches: { 
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  if (isLoading) {

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
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex items - center justify - center p - 6">;
        <Loader2 className="w - 6 h - 6 animate - spin text - primary" />;
      </div>);
  }
    updateJobMatchStatus, ;
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from 'lucide-react'import { Badge } from "@/components/ui/badge";
import { useJobSuggestions } from "@/hooks/useJobSuggestions";
import { JobMatchesCard } from "./JobMatchesCard";
import { NoJobsCard } from "./NoJobsCard";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    )
<<<<<<< HEAD
  }
  }
  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {
    return <NoJobsCard />
  }
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useAuth } from "@/hooks/useAuth",;
import { Loader2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge",;
import { useJobSuggestions } from "@/hooks/useJobSuggestions",;
import { JobMatchesCard } from "./JobMatchesCard",;
import { NoJobsCard } from "./NoJobsCard",;
interface SuggestedJobsProps {;
  talentId?: string;
}
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleDecline = (matchId: string) => {;
    updateJobMatchStatus(matchId, 'declined');
  };
  if (isLoading) {;
<<<<<<< HEAD
    return (;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="flex items-center justify-center p-6">;
        <Loader2 className="w-6 h-6 animate-spin text-primary" />;
      </div>;
    );
  }
<<<<<<< HEAD
  return (
  
    <div className="space-y-6">
      {/* New Matches Section */}
;
  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {;
    return <NoJobsCard />;
=======




>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
          <div className="grid gap-4 md:grid-cols-2">
            {newMatches.map(match => (
ursor/fix-website-loading-errors-and-merge-6662

  }

  return (
    <div className="space-y-6">;
      {/* New Matches Section */}

      {newMatches && newMatches.length > 0 && (;

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
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">New Job Matches</h3>;
            <Badge className="bg-green-100 text-green-800 border-green-300">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              <JobMatchesCard
                key = {match && match.id,}

                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              />;


          
          <div className="grid gap-4 md:grid-cols-2">
<<<<<<< HEAD
<<<<<<< HEAD
              />
            ))}
          </div>;
        </div>;
      )}


;

      
;

              />;


          
          <div className="grid gap-4 md:grid-cols-2">
              />
            ))}
          </div>;
        </div>;
      )}


;

      
;

=======
            {newMatches.map(match => (
              <JobMatchesCard
                key = {match.id,}
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
          
          <div className="grid gap-4 md:grid-cols-2">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            {newMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
<<<<<<< HEAD
              />
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
              />;
              />
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              />
            ))}
          </div>
        </div>
      )}
<<<<<<< HEAD
;
      
;

=======
      
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Previously Viewed Section */}
      {viewedMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Previously Viewed</h3>
          </div>
<<<<<<< HEAD
          <div className="grid gap-4 md:grid-cols-2">
            {viewedMatches.map(match => (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <JobMatchesCard
                key = {match && match.id,}

                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
              />;


          
          <div className="grid gap-4 md:grid-cols-2">
            {viewedMatches.map(match => (
<<<<<<< HEAD
              <JobMatchesCard
                key = {match.id,}
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
          
          <div className="grid gap-4 md:grid-cols-2">
            {viewedMatches.map(match => (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <JobMatchesCard 
                key={match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
<<<<<<< HEAD
              />
      {viewedMatches && viewedMatches.length > 0 && (;
      {viewedMatches.length > 0 && (;
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Previously Viewed</h3>;
          </div>;
              />
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              />
            ))}
          </div>
        </div>
      )}
<<<<<<< HEAD
;
      
;

=======
      
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      {/* Applied Jobs Section */}
      {appliedMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Applied Jobs</h3>
          </div>
<<<<<<< HEAD
              <JobMatchesCard
                key = {match.id,}

              <JobMatchesCard 


                key = {match.id,}

      {/* Applied Jobs Section */}
      {appliedMatches && appliedMatches.length > 0 && (;
      {appliedMatches.length > 0 && (;
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Applied Jobs</h3>;
          </div>;
          <div className="grid gap-4 md:grid-cols-2">
            {appliedMatches.map(match => (
              <JobMatchesCard
              <JobMatchesCard 
                key = {match.id,}
=======
                key = {match.id,}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
                showApplied = {true,}
<<<<<<< HEAD
          
              />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          
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
          </div>
        </div>
      )}

<<<<<<< HEAD

            ))}
          </div>;
        </div>;
      )}
    </div>;
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    </div>;
  );
}
<<<<<<< HEAD
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
