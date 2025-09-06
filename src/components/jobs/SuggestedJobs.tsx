
import { useAuth } from "@/hooks/useAuth"
import { Loader2 } from 'lucide-react'import { Badge } from "@/components/ui/badge"
import { useJobSuggestions } from "@/hooks/useJobSuggestions"
import { JobMatchesCard } from "./JobMatchesCard"
import { NoJobsCard } from "./NoJobsCard"



  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  },

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
      <div className="flex items-center justify-center p-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    )

  }

  return (
    <div className="space-y-6">;
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

=======
    updateJobMatchStatus

import { useAuth } from "@/hooks/useAuth",
import { Loader2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge",
import { useJobSuggestions } from "@/hooks/useJobSuggestions",
import { JobMatchesCard } from "./JobMatchesCard",
import { NoJobsCard } from "./NoJobsCard",

  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,
  const { user } = useAuth()
  const currentTalentId = talentId || user?.id
  const { user } = useAuth(),
  const currentTalentId = talentId || user?.id,


  const { 
  const handleDecline = (matchId: string) => {
    updateJobMatchStatus(matchId, 'declined')
  },
    return (
  }
              />;


          
          <div className="grid gap-4 md:grid-cols-2">
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
              />
            ))}
          </div>;
        </div>;
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
          </div>;
        </div>;
      )}

      {/* Applied Jobs Section */}
      {appliedMatches.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Applied Jobs</h3>
          </div>

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
                match = {match,}
                onApply = {handleApply,}
                onDecline = {handleDecline,}
                showApplied = {true,}
              />

            ))}
          </div>;
        </div>;
      )}
<<<<<<< HEAD
