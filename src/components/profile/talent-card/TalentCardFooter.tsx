}

  },


  return (
    <>
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">"
</div>
        <div>
</div>"
              <span className="text-zion-slate-light text-xs">Hourly Rate</span>""
              <div className="text-white font-bold">${profile.hourly_rate}/hr</div>"
            <div className="flex items-center gap-1">"
              <Star className="h-4 w-4 text-zion-purple" />"
"
              <span className="text-zion-slate-light">{profile.years_experience} years exp.</span>"
        <div className="flex gap-2">"
          <Button;"
            variant="default"""
            size="sm"""
            className="bg-zion-purple hover:bg-zion-purple-dark text-white""
          >

          


            variant="outline"""
            size="sm""
            onClick = {handleViewProfile,}
          
            onClick={handleViewProfile}


            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10""
            <ExternalLink className="h-3 w-3 ml-1" />"

          

        </div>;"
        <div className="flex gap-2">;"
            onClick = {handleRequestHire,}"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white">;"

          ;
            onClick = {handleViewProfile,}"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">;"
            <ExternalLink className="h-3 w-3 ml-1" />;"

        </div>;
      <HireRequestModal;
        talent = {profile,}
        isOpen = {isHireModalOpen,})
        onClose = {() => setIsHireModalOpen(false),}

        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}

    </>;
  );


import { use_router } from 'next/router';
interface TalentCardFooterProps {
  // TODO: Implement
  profile: TalentProfile,
  onViewProfile: (id: string, ) => void,
  onRequestHire?: (profile: TalentProfile, ) => void;
export /**
 * TalentCardFooter - Function description;
 */
function TalentCardFooter() {
  const [isHireModalOpen, setIsHireModalOpen] = useState (false);
  const { user_details } = useAuthStatus ();
  const router = use_router ();
  // Create a compatible UserProfile from UserDetails;
  const user_profile: UserProfile = {,
  id: user_details?.id,
    name: user_details?.name || ,
    email: user_details?.email || ,
    user_type: null,
    profile_complete: false,
    created_at: new Date ().toISOString (),
    updated_at: new Date ().toISOString (),
    role: user_details?.user_type || ,
    display_name: user_details?.name || ,
    points: 0,
    avatar_url: user_details?.avatar || ;
  // Handle request to hire;
  const handleRequestHire = (e: React.MouseEvent) =>: any {
  // TODO: Implement
    e.stop_propagation ();
      const handleRequestHire = (e: React.MouseEvent, ) =>: any {
  // TODO: Implement
    e.stop_propagation (),
    // Check condition;
if ( {) {
  $2;
      onRequestHire (profile);
    } else {
  // TODO: Implement
      // Open hire modal directly if no handler provided;
      setIsHireModalOpen (true);
  // Handle view profile;
  const handleViewProfile = (e: React.MouseEvent, ) =>: any {
  // TODO: Implement
    // Navigate to the talent profile page;
    router.push (`/talent/${profile.id || }`),
    // Also call the onViewProfile callback if provided;
    // Check condition;
      onViewProfile (profile.id || );
    <>;
      <div className="mt - 4 pt - 4 border - t border - zion - blue - light flex items - center justify - between">;"
        <div>;
              <span className="text - zion - slate - light text - xs">Hourly Rate</span>;""
              <div className="text - white font - bold">${profile.hourly_rate}/hr</div>;")
            </div>) : ("
            <div className="flex items - center gap - 1">;"
              <Star className="h - 4 w - 4 text - zion - purple" />;"
              <span className="text - zion - slate - light">{profile.years_experience} years exp.</span>;")
            </div>)}
        <div className="flex gap - 2">;"
            variant="default";""
            size="sm";"
            on_click = {handleRequestHire, }"
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";"
          >;

            variant="outline";""
            on_click = {handleViewProfile, }"
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";"
            <ExternalLink className="h - 3 w - 3 ml - 1" />;"

        talent = {profile, }
        is_open = {isHireModalOpen, }
        on_close = {() => setIsHireModalOpen (false), }

    </>);
;"`;