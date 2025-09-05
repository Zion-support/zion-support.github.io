
<<<<<<< HEAD
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth",
import { Loader2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge",
import { useJobSuggestions } from "@/hooks/useJobSuggestions",
import { JobMatchesCard } from "./JobMatchesCard",
import { NoJobsCard } from "./NoJobsCard",
=======
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Loader2 } from 'lucide-react'
import { Badge } from &quot;@/components/ui/badge&quot;;
import { useJobSuggestions } from &quot;@/hooks/useJobSuggestions&quot;;
import { JobMatchesCard } from &quot;./JobMatchesCard&quot;;
import { NoJobsCard } from &quot;./NoJobsCard&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SuggestedJobsProps {
  talentId?: string
}

export function SuggestedJobs({ talentId }: SuggestedJobsProps) {
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
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
      <div className=&quot;flex items-center justify-center p-6&quot;>
        <Loader2 className=&quot;w-6 h-6 animate-spin text-primary&quot; />
      </div>
    )
  }

  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {
    return <NoJobsCard />
  }
  
  return (
    <div className=&quot;space-y-6&quot;>
      {/* New Matches Section */}
      {newMatches.length > 0 && (
        <div className=&quot;space-y-4&quot;>
          <div className=&quot;flex items-center justify-between&quot;>
            <h3 className=&quot;text-lg font-medium&quot;>New Job Matches</h3>
            <Badge className=&quot;bg-green-100 text-green-800 border-green-300&quot;>
=======

interface SuggestedJobsProps {_talentId?: string;}

export function SuggestedJobs(_{_talentId}: SuggestedJobsProps) {_const { user} = useAuth();
  const _currentTalentId = talentId || user?.id;
  const {_isLoading, _updateJobMatchStatus, _categorizedMatches: { 
      newMatches, _viewedMatches, _appliedMatches} 
  } = useJobSuggestions(currentTalentId);

  const _handleApply = (_matchId: string, _jobId: string) => {_updateJobMatchStatus(matchId, _'applied');
    // In a real app, _this might redirect to application form or open a modal};

  const _handleDecline = (_matchId: string) => {_updateJobMatchStatus(matchId, _'declined');};

  if (isLoading) {_return (
      <div className="flex items-center justify-center p-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );}

  if (newMatches.length === 0 && viewedMatches.length === 0 && appliedMatches.length === 0) {_return <NoJobsCard />;}
  
  return (
    <div className="space-y-6">
      {_/* New Matches Section */}
      {_newMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">New Job Matches</h3>
            <Badge className="bg-green-100 text-green-800 border-green-300">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              {newMatches.length} New
            </Badge>
          </div>
          
<<<<<<< HEAD
          <div className=&quot;grid gap-4 md:grid-cols-2&quot;>
            {newMatches.map(match => (
=======
          <div className="grid gap-4 md:grid-cols-2">
            {_newMatches.map(match => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <JobMatchesCard 
                key={match.id} 
                match={_match} 
                onApply={_handleApply} 
                onDecline={_handleDecline} 
              />
            ))}
          </div>
        </div>
      )}
      
<<<<<<< HEAD
      {/* Previously Viewed Section */}
      {viewedMatches.length > 0 && (
        <div className=&quot;space-y-4&quot;>
          <div className=&quot;flex items-center justify-between&quot;>
            <h3 className=&quot;text-lg font-medium&quot;>Previously Viewed</h3>
=======
      {_/* Previously Viewed Section */}
      {_viewedMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Previously Viewed</h3>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          
          <div className=&quot;grid gap-4 md:grid-cols-2&quot;>
            {viewedMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={_match} 
                onApply={_handleApply} 
                onDecline={_handleDecline} 
              />
            ))}
          </div>
        </div>
      )}
      
<<<<<<< HEAD
      {/* Applied Jobs Section */}
      {appliedMatches.length > 0 && (
        <div className=&quot;space-y-4&quot;>
          <div className=&quot;flex items-center justify-between&quot;>
            <h3 className=&quot;text-lg font-medium&quot;>Applied Jobs</h3>
=======
      {_/* Applied Jobs Section */}
      {_appliedMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Applied Jobs</h3>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          
          <div className=&quot;grid gap-4 md:grid-cols-2&quot;>
            {appliedMatches.map(match => (
              <JobMatchesCard 
                key={match.id} 
                match={_match} 
                onApply={_handleApply} 
                onDecline={_handleDecline}
                showApplied={_true}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
