

    e.stopPropagation()
    // Navigate to the talent profile page,
navigate(`/talent/${profile.id |''}`);`    // Also call the onViewProfile callback if provided,
if (onViewProfile) {
      }
      onViewProfile(profile.id |'')'
    }
  }
interface TalentCardFooterProps {
  }
  "profile": TalentProfile,
  "onViewProfile": ("id": string) => void,
  onRequestHire?: ("profile": TalentProfile) => void
  };
import { Star } from "lucide-react";"
import { Button } from "@/components/ui/button",;"
import { ExternalLink } from "lucide-react",;"
import { TalentProfile } from "@/types/talent",;"
import { HireRequestModal } from "@/components/profile/hire-request",;"
import { useAuthStatus } from "@/hooks/talent",;"
import { UserProfile } from "@/types/auth",;"
import { useNavigate } from "react-router-dom",;"
interface TalentCardFooterProps {;
  }
  "profile": TalentProfile,;
  "onViewProfile": ("id": string) => void,;
  onRequestHire?: ("profile": TalentProfile) => void;
}
export function TalentCardFooter(): any ({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {;
  }
    } else {
        userDetails={userProfile}
