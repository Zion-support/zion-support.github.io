<<<<<<< HEAD
<<<<<<< HEAD

    updateJobMatchStatus
    updateJobMatchStatus, 
import { useAuth } from "@/hooks/useAuth"
import { Loader2 } from 'lucide-react'import { Badge } from "@/components/ui/badge"
import { useJobSuggestions } from "@/hooks/useJobSuggestions"
import { JobMatchesCard } from "./JobMatchesCard"
import { NoJobsCard } from "./NoJobsCard"
    updateJobMatchStatus

updateJobMatchStatus, 

import { useAuth } from "@/hooks/useAuth",
import { Loader2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge",
import { useJobSuggestions } from "@/hooks/useJobSuggestions",
import { JobMatchesCard } from "./JobMatchesCard",
import { NoJobsCard } from "./NoJobsCard",
  talentId?: string
}
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface SuggestedJobsProps {
  talent_id?: string;
}
=======
interface SuggestedJobsProps {
  talent_id?: string;
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  const handle_decline = (match_id: string) =>: any {
    updateJobMatchStatus (match_id, 'declined');
  }
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      <div className="flex items - center justify - center p - 6">;
        <Loader2 className="w - 6 h - 6 animate - spin text - primary" />;
      </div>);
  }
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    updateJobMatchStatus, ;
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from 'lucide-react'import { Badge } from "@/components/ui/badge";
import { useJobSuggestions } from "@/hooks/useJobSuggestions";
import { JobMatchesCard } from "./JobMatchesCard";
import { NoJobsCard } from "./NoJobsCard";
<<<<<<< HEAD
<<<<<<< HEAD

  if (isLoading) {
    return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="flex items-center justify-center p-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    )
<<<<<<< HEAD
<<<<<<< HEAD
  }
  }
  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {
    return <NoJobsCard />
  }
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleApply = (matchId: string, jobId: string) => {;
    updateJobMatchStatus(matchId, 'applied');    // In a real app, this might redirect to application form or open a modal;
  };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleDecline = (matchId: string) => {;
    updateJobMatchStatus(matchId, 'declined');
  };
  if (isLoading) {;
<<<<<<< HEAD
<<<<<<< HEAD
    return (;
=======
    return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="flex items-center justify-center p-6">;
        <Loader2 className="w-6 h-6 animate-spin text-primary" />;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
  return (
  
    <div className="space-y-6">
      {/* New Matches Section */}
;
  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {;
    return <NoJobsCard />;
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
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (newMatches && newMatches.length === 0 && viewedMatches && viewedMatches.length === 0 && appliedMatches && appliedMatches.length === 0) {;
    return <NoJobsCard />;



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }

  return (
    <div className="space-y-6">;
      {/* New Matches Section */}

      {newMatches && newMatches.length > 0 && (;
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">New Job Matches</h3>;
            <Badge className="bg-green-100 text-green-800 border-green-300">;
<<<<<<< HEAD
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              />;


          
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="grid gap-4 md:grid-cols-2">
            {newMatches.map(match => (
              <JobMatchesCard
                key = {match.id,}
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
          
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="grid gap-4 md:grid-cols-2">
            {newMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
              />
<<<<<<< HEAD
<<<<<<< HEAD
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
              />
            ))}
          </div>
        </div>
      )}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}
          </div>;
        </div>;
      )}


;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
;

      {/* Previously Viewed Section */}
      {viewedMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Previously Viewed</h3>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="grid gap-4 md:grid-cols-2">
            {viewedMatches.map(match => (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      {/* Previously Viewed Section */}
      {viewedMatches && viewedMatches.length > 0 && (;
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Previously Viewed</h3>;
          </div>;

          <div className="grid gap-4 md:grid-cols-2">;
            {viewedMatches && viewedMatches.map(match => (;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <JobMatchesCard
                key = {match && match.id,}

                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
              />;


          
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="grid gap-4 md:grid-cols-2">
            {viewedMatches.map(match => (
              <JobMatchesCard
                key = {match.id,}
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
          
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="grid gap-4 md:grid-cols-2">
            {viewedMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
              />
<<<<<<< HEAD
<<<<<<< HEAD
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
              />
            ))}
          </div>
        </div>
      )}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}
          </div>;
        </div>;
      )}


;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
;

      {/* Applied Jobs Section */}
      {appliedMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Applied Jobs</h3>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
              <JobMatchesCard
                key = {match.id,}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <JobMatchesCard 


                key = {match.id,}

      {/* Applied Jobs Section */}
      {appliedMatches && appliedMatches.length > 0 && (;
<<<<<<< HEAD
      {appliedMatches.length > 0 && (;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Applied Jobs</h3>;
          </div>;
<<<<<<< HEAD
          <div className="grid gap-4 md:grid-cols-2">
            {appliedMatches.map(match => (
              <JobMatchesCard
<<<<<<< HEAD
              <JobMatchesCard 
                key = {match.id,}
=======
                key = {match && match.id,}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          <div className="grid gap-4 md:grid-cols-2">;
            {appliedMatches && appliedMatches.map(match => (;
              <JobMatchesCard
                key = {match && match.id,}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
                showApplied = {true,}
<<<<<<< HEAD
<<<<<<< HEAD
          
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              />
          
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
            ))}
          </div>
        </div>
      )}
          </div>
        </div>
=======




            ))}
          </div>;
        </div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      )}
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
          ;
          <div className="grid gap-4 md:grid-cols-2">;
            {appliedMatches.map(match => (;
              <JobMatchesCard ;
                key={match.id} ;
                match={match} ;
                onApply={handleApply} ;                onDecline={handleDecline}
                showApplied={true}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              />;


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
    </div>;
  );


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
;
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
