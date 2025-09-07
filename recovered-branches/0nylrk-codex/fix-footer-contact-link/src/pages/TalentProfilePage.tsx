
class ErrorBoundary extends React.Component {


        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />;
      <BackToDirectoryButton />;

      {/* Sticky action buttons that appear when scrolling */}
      <StickyAction>;
        <div className="p-2 flex gap-2">;
          <Button
            size="sm"
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
            onClick={handleRequestHire}>;
            <Handshake className="mr-2 h-4 w-4" />;
            Hire Now;
          </Button>;
          <Button
            size="sm"
            variant="outline"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
onClick={handleMessageTalent}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Button>
        </div>
      </StickyAction>

            onClick={handleMessageTalent}>;
            <MessageSquare className="mr-2 h-4 w-4" />;
import React, { useState, useEffect } from './react';
import { use_params, use_navigate } from './react-router-dom';
import { TalentProfile } from '@/components / profile / TalentProfile';
import { ProfileLoadingState } from '@/components / profile / ProfileLoadingState';
import { ProfileErrorState } from '@/components / profile / ProfileErrorState';
import { BackToDirectoryButton } from '@/components / profile / BackToDirectoryButton';
import { useTalentProfile } from '@/hooks / useTalentProfile';
import { HireRequestModal } from '@/components / profile / hire - request';
import { useAuthStatus } from '@/hooks / talent';
import { MessageTalentModal } from '@/components / messaging / MessageTalentModal';
import { StickyAction } from '@/components / ui / sticky - action';
import { Handshake, MessageSquare } from './lucide-react';
import { Button } from '@/components / ui / button';
import { use_auth } from '@/hooks / use_auth';
import { UserProfile } from '@/types / auth';
import { toast } from '@/hooks / use - toast';
export default /**
 * TalentProfilePage - Function description
 */
function TalentProfilePage() {
  // Cast to specify the expected route param type since use_params may be untyped;
  const { id } = use_params () as { id?: string }
  const navigate = use_navigate ();
  const { profile, is_loading, error } = useTalentProfile (id);
  const [isHireModalOpen, setIsHireModalOpen] = useState (false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState (false);
  const { user_details } = useAuthStatus ();
  const { is_authenticated, user } = use_auth ();
;
  // Create a compatible UserProfile from UserDetails or the authenticated user;
  const user_profile: UserProfile = user ? {
    id: user.id || '',
    display_name: user.display_name || '',
    email: user.email || '', // Ensure email is always a string;
    user_type: user.user_type || '',
    profile_complete: user.profile_complete || false,
    created_at: user.created_at || new Date ().toISOString (),
    updated_at: user.updated_at || new Date ().toISOString (),
    role: user.role || '';
  } : {
    id: user_details?.id || '',
    display_name: user_details?.name || '',
    email: user_details?.email || '', // Ensure email is always a string;
    user_type: '', // Default empty string since user_details doesn't have this property;
    profile_complete: false, // Default value since user_details doesn't have this property;
    created_at: new Date ().toISOString (), // Default value since user_details doesn't have this property;
    updated_at: new Date ().toISOString (), // Default value since user_details doesn't have this property;
    role: '' // Default empty string since user_details doesn't have this property;
  }
;
  // Handle loading error gracefully;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Error loading profile",
        description: "There was a problem loading this talent profile. Please try again.",
        variant: "destructive"});
    }
  }, [error]);
;
  // Check condition
if ( {) {
  $2
}
    return <ProfileLoadingState />;
  }
  // Check condition
if ( {) {
  $2
}
    return <ProfileErrorState error={error} />;
  }
  const handleRequestHire = () =>: any {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Authentication required",
        description: "Please sign in to hire this talent.",
        variant: "default"}),
      navigate ('/login', { state: { from: `/talent/${id}` } }),
      return;
    }
    setIsHireModalOpen (true);
  }
;
  const handleMessageTalent = () =>: any {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Authentication required",
        description: "Please sign in to message this talent.",
        variant: "default"}),
      navigate ('/login', { state: { from: `/talent/${id}` } }),
      return;
    }
    setIsMessageModalOpen (true);
  }
;
  return (
    <div className="min - h-screen bg - zion - blue pb - 12">;
      <TalentProfile;
        profile={profile}
        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />;
      <BackToDirectoryButton />;
      {/* Sticky action buttons that appear when scrolling */}
      <StickyAction>;
        <div className="p - 2 flex gap - 2">;
          <Button;
            size="sm";
            className="bg - zion - purple text - white hover:bg - zion - purple - dark";
            on_click={handleRequestHire}
          >;
            <Handshake className="mr - 2 h - 4 w - 4" />;
            Hire Now;
          </Button>;
          <Button;
            size="sm";
            variant="outline";
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
            on_click={handleMessageTalent}
          >;
            <MessageSquare className="mr - 2 h - 4 w - 4" />;

;
      {/* Sticky action buttons that appear when scrolling */}
      <StickyAction>;
        <div className="p-2 flex gap-2">;
          <Button ;
            size="sm";
            className="bg-zion-purple text-white hover:bg-zion-purple-dark";
            onClick={handleRequestHire}
          >;
            <Handshake className="mr-2 h-4 w-4" />;
            Hire Now;
          </Button>;
          <Button ;
            size="sm";
            variant="outline";
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
            onClick={handleMessageTalent}
          >;
            <MessageSquare className="mr-2 h-4 w-4" />;
            Message;
          </Button>;
        </div>;
      </StickyAction>;


      {/* Request to Hire Modal */}
            onClick={handleMessageTalent}>;
            <MessageSquare className="mr-2 h-4 w-4" />;            Message;
          </Button>;
        </div>;
      </StickyAction>;      {/* Request to Hire Modal */}
      <HireRequestModal
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        userDetails={userProfile}
    return <ProfileLoadingState />;

    return <ProfileErrorState error={error} />

    <div className="min-h-screen bg-zion-blue pb-12">"
</div>
      <TalentProfile;
        profile={profile} 
;
  const handleRequestHire = () => {;
"
    <div className="min-h-screen bg-zion-blue pb-12">;"
        profile={profile} ;

  },

  return ("



        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />

      <BackToDirectoryButton />

      <StickyAction>
        <div className="p-2 flex gap-2">"
          <Button;"
            size="sm"""
            className="bg-zion-purple text-white hover:bg-zion-purple-dark""
            onClick={handleRequestHire}
          >
            <Handshake className="mr-2 h-4 w-4" />"


    return <ProfileErrorState error={error} />;
</ProfileErrorState>"
    <div className="min-h-screen bg-zion-blue pb-12">;"
</div>
      <TalentProfile;
        profile={profile} 

        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />;

      {/* Request to Hire Modal */}
      <BackToDirectoryButton />;

</BackToDirectoryButton>
      <StickyAction>;
        <div className="p-2 flex gap-2">;"
            onClick={handleRequestHire}>;
            <Handshake className="mr-2 h-4 w-4" />;"

            variant="outline"""
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10""
            onClick={handleMessageTalent}>;
            <MessageSquare className="mr-2 h-4 w-4" />;"


    <div className="min - h-screen bg - zion - blue pb - 12">;"


        <div className="p - 2 flex gap - 2">;"
            size="sm";""
            className="bg - zion - purple text - white hover:bg - zion - purple - dark";"
            on_click={handleRequestHire}
          >;
            <Handshake className="mr - 2 h - 4 w - 4" />;"

            variant="outline";""
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";"
            on_click={handleMessageTalent}
            <MessageSquare className="mr - 2 h - 4 w - 4" />;"

        </div>;
      <HireRequestModal;
        talent={profile}
        isOpen={isHireModalOpen})
        onClose={() => setIsHireModalOpen(false)}

        is_open={isHireModalOpen}
        on_close={() => setIsHireModalOpen (false)}

      <MessageTalentModal;
        is_open={isMessageModalOpen}
        on_close={() => setIsMessageModalOpen (false)}

    </div>);
}

;
      />
      {/* Message Talent Modal */}
      <MessageTalentModal
        talent={profile}
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}

      />;

      />
    </div>
  )
}
      />;
    </div>;
  );
}
      ;
      {/* Request to Hire Modal */}
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}

      <HireRequestModal ;
        talent={profile}        isOpen={isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}


<TalentProfile profile= {
  profile;
}onRequestHire= {
  handleRequestHire;
}onMessageTalent= {
  handleMessageTalent;
}/> <BackToDirectoryButton /> {
}<StickyAction> <div className="p-2 flex gap-2" > <Button > <Handshake className="mr-2 h-4 w-4" /> Hire Now  <Button > <MessageSquare className="mr-2 h-4 w-4" /> Message  </div>  {"
}<HireRequestModal talent= {
}isOpen= {
  isHireModalOpen;
}onClose= {
  () => setIsHireModalOpen (false) 

}<MessageTalentModal talent= {
  isMessageModalOpen;
  () => setIsMessageModalOpen (false) 
}/> </div>) 
}
;

}/> </div>) "
pr-12325

