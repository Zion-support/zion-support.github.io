}

  },

  return (
    <>
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">
        {/* Experience or Hourly Rate */}
        <div>
          {profile.hourly_rate ? (
            <div>
              <span className="text-zion-slate-light text-xs">Hourly Rate</span>
              <div className="text-white font-bold">${profile.hourly_rate}/hr</div>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-zion-purple" />
              <span className="text-zion-slate-light">{profile.years_experience} years exp.</span>
            </div>
          )}
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="default"
            size="sm"
            onClick = {handleRequestHire,}
          <Button 
            variant="default" 
            size="sm" 

            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Hire
          </Button>

          <Button 
            variant="outline" 
            size="sm" 

            onClick = {handleViewProfile,}

          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleViewProfile}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"

            View
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>

      {/* Hire Request Modal */}
      <HireRequestModal
        talent = {profile,}
        isOpen = {isHireModalOpen,}
        onClose = {() => setIsHireModalOpen(false),}
        userDetails = {userProfile,}

      {/* Hire Request Modal */}
      <HireRequestModal;
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />;
    </>;
  );
};
}

import { use_router } from 'next / router';
interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string, ) => void,
  onRequestHire?: (profile: TalentProfile, ) => void;
}
export /**
 * TalentCardFooter - Function description
 */
function TalentCardFooter() {
  const [isHireModalOpen, setIsHireModalOpen] = useState (false);
  const { user_details } = useAuthStatus ();
  const router = use_router ();
  // Create a compatible UserProfile from UserDetails;
  const user_profile: UserProfile = {
    id: user_details?.id,
    name: user_details?.name || '',
    email: user_details?.email || '',
    user_type: null,
    profile_complete: false,
    created_at: new Date ().toISOString (),
    updated_at: new Date ().toISOString (),
    role: user_details?.user_type || '',
    display_name: user_details?.name || '',
    points: 0,
    avatar_url: user_details?.avatar || '';
  }
  // Handle request to hire;
  const handleRequestHire = (e: React.MouseEvent) =>: any {
    e.stop_propagation ();
      const handleRequestHire = (e: React.MouseEvent, ) =>: any {
    e.stop_propagation (),
    // Check condition
if ( {) {
  $2
}
      onRequestHire (profile);
    } else {
      // Open hire modal directly if no handler provided;
      setIsHireModalOpen (true);
    }
  },
  // Handle view profile;
  const handleViewProfile = (e: React.MouseEvent, ) =>: any {
    e.stop_propagation (),
    // Navigate to the talent profile page;
    router.push (`/talent/${profile.id || ''}`),
    // Also call the onViewProfile callback if provided;
    // Check condition
if ( {) {
  $2
}
      onViewProfile (profile.id || '');
    }
  },
  return (
    <>;
      <div className="mt - 4 pt - 4 border - t border - zion - blue - light flex items - center justify - between">;
        {/* Experience or Hourly Rate */}
        <div>;
          {profile.hourly_rate ? (
            <div>;
              <span className="text - zion - slate - light text - xs">Hourly Rate</span>;
              <div className="text - white font - bold">${profile.hourly_rate}/hr</div>;
            </div>) : (
            <div className="flex items - center gap - 1">;
              <Star className="h - 4 w - 4 text - zion - purple" />;
              <span className="text - zion - slate - light">{profile.years_experience} years exp.</span>;
            </div>)}
        </div>;
        {/* Action Buttons */}
        <div className="flex gap - 2">;
          <Button;
            variant="default";
            size="sm";
            on_click = {handleRequestHire, }
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
          >;
            Hire;
          </Button>;
          <Button;
            variant="outline";
            size="sm";
            on_click = {handleViewProfile, }
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
          >;
            View;
            <ExternalLink className="h - 3 w - 3 ml - 1" />;
          </Button>;
        </div>;
      </div>;
      {/* Hire Request Modal */}
      <HireRequestModal;
        talent = {profile, }
        is_open = {isHireModalOpen, }
        on_close = {() => setIsHireModalOpen (false), }
        user_details = {user_profile, }
      />;
    </>);
}

