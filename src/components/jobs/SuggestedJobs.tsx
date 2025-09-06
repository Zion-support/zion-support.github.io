<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useJobSuggestions } from '@/hooks/useJobSuggestions';
import { JobMatchesCard } from './JobMatchesCard';
import { NoJobsCard } from './NoJobsCard';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

import { useAuth } from "@/hooks/useAuth",
import { Loader2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge",
import { useJobSuggestions } from "@/hooks/useJobSuggestions",
import { JobMatchesCard } from "./JobMatchesCard";
import { NoJobsCard } from "./NoJobsCard";
=======
    updateJobMatchStatus
import { useAuth } from "@/hooks/useAuth"
import { Loader2 } from 'lucide-react'import { Badge } from "@/components/ui/badge"
import { useJobSuggestions } from "@/hooks/useJobSuggestions"
import { JobMatchesCard } from "./JobMatchesCard"
import { NoJobsCard } from "./NoJobsCard"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
interface SuggestedJobsProps {
<<<<<<< HEAD
  talentId?: string
}
=======
  talentId?: string;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function SuggestedJobs({ talentId }: SuggestedJobsProps) {
<<<<<<< HEAD
  const { user } = useAuth();
  const currentTalentId = null;
=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    )
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
                key = {match.id,}
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
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
                key = {match.id,}
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
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
                key = {match.id,}
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
                showApplied = {true,}
              />
            ))}
          </div>
        </div>
      )}
    </div>
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
