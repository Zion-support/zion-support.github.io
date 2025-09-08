

  onViewProfile: (id: string) => void,
  onRequestHire?: (profile: TalentProfile) => void;
}

  const [isHireModalOpen, setIsHireModalOpen] = useState (false);
  const { user_details } = useAuthStatus ();
  const navigate = use_navigate ();
;
  // Create a compatible UserProfile from UserDetails;

    user_type: '',
    profile_complete: false,
    created_at: new Date ().toISOString (),
    updated_at: new Date ().toISOString ();
  }

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


      {/* Hire Request Modal */}

      <HireRequestModal

        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}

        userDetails={userProfile}

      />;
    </>;
  );
}


;

      ;
      {/* Hire Request Modal */}
      <HireRequestModal;
        talent={profile}        isOpen={isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />;
    </>;

  // Handle view profile;
  const handleViewProfile = (e: React.MouseEvent) =>: any {}
    e.stop_propagation (),
    // Navigate to the talent profile page;'`
    navigate (`/talent/${profile.id || ''}`);
;
    // Also call the onViewProfile callback if provided;
    // Check condition;
if ( {) {}
  $2;
}'
      onViewProfile (profile.id || '');
</Button>"
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">;"
</div>
        <div>;
</div>
            <div>;
</div>"
              <span className="text-zion-slate-light text-xs">Hourly Rate</span>;""
              <div className="text-white font-bold">${profile && profile.hourly_rate}/hr</div>;"
            </div>;"
            <div className="flex items-center gap-1">;"
</div>"
              <Star className="h-4 w-4 text-zion-purple" />;"
</Star>"
              <span className="text-zion-slate-light">{profile && profile.years_experience} years exp.</span>;"
            </div>;
        </div>"
        <div className="flex gap-2">"
</div>
          <Button;"
            variant="default"""
            size="sm""
          <Button;"
            variant="default"""
            size="sm""
            onClick={handleRequestHire}"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white""
          >
</Button>
          </Button>





