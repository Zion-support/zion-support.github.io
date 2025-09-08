

import { useAuth } from "@/hooks/useAuth",
import { Loader2 } from "lucide-react",
import { Badge } from "@/components/ui/badge",
import { useJobSuggestions } from "@/hooks/useJobSuggestions",

<<<<<<< HEAD
=======
import { JobMatchesCard } from "./JobMatchesCard";
import { NoJobsCard } from "./NoJobsCard";
import { JobMatchesCard } from "./JobMatchesCard",
import { NoJobsCard } from "./NoJobsCard",    isLoading,
    updateJobMatchStatus, 
    categorizedMatches: { 
      newMatches, 
      viewedMatches, 
      appliedMatches 
    } 
<<<<<<< HEAD

  } = useJobSuggestions(currentTalentId),
  const currentTalentId = talentId |user?.id;
  const {
    isLoading;
    updateJobMatchStatus

    categorizedMatches: {
      newMatches,
      viewedMatches,
      appliedMatches
    }
<<<<<<< HEAD

  } = useJobSuggestions(currentTalentId);
  const handleApply = (matchId: string, jobId: string) => {

  if (newMatches && newMatches.length === 0 && viewedMatches && viewedMatches.length === 0 && appliedMatches && appliedMatches.length === 0) {;
    return <NoJobsCard />;
  }

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
              <JobMatchesCard              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
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
      {viewedMatches && viewedMatches.length > 0 && (;        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Previously Viewed</h3>;
          </div>;

          <div className="grid gap-4 md:grid-cols-2">;
            {viewedMatches && viewedMatches.map(match => (;
              <JobMatchesCard                key={match && match.id} 
                match={match} 
                onApply={handleApply} 
                onDecline={handleDecline} 
              />;

            ))}
          </div>;
        </div>;
      )}

      {/* Applied Jobs Section */}
      {appliedMatches && appliedMatches.length > 0 && (;            ))}
          </div>;
        </div>;
      )}
      ;
      {/* Applied Jobs Section */}
      {appliedMatches.length > 0 && (;
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

                onDecline={handleDecline}                onDecline={handleDecline}
                showApplied={true}
              />;
            ))}
          </div>;
        </div>;
      )}

    </div>;
  );
}  ),; interface SuggestedJobsProps {
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