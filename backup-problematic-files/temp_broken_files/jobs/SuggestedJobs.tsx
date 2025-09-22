
import { useAuth } from "@/hooks/useAuth",;
import { Loader2 } from "lucide-react",;
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

        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">New Job Matches</h3>;
            <Badge className="bg-green-100 text-green-800 border-green-300">;

          </div>;
        </div>;
      )}
      ;
      {/* Previously Viewed Section */}

        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Previously Viewed</h3>;
          </div>;

          </div>;
        </div>;
      )}
      ;
      {/* Applied Jobs Section */}

        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <h3 className="text-lg font-medium">Applied Jobs</h3>;
          </div>;

                showApplied={true}
              />;
            ))}
          </div>;
        </div>;
      )}
    </div>;

}