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

}
;
