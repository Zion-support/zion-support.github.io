
<<<<<<< HEAD
import React, { useState, useEffect } from "react",
import { useParams, useNavigate } from "react-router-dom",
import { TalentProfile } from "@/components/profile/TalentProfile",
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState",
import { ProfileErrorState } from "@/components/profile/ProfileErrorState",
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton",
import { useTalentProfile } from "@/hooks/useTalentProfile",
import { HireRequestModal } from "@/components/profile/hire-request",
import { useAuthStatus } from "@/hooks/talent",
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal",
import { StickyAction } from "@/components/ui/sticky-action",
import { Handshake, MessageSquare } from "lucide-react",
import { Button } from "@/components/ui/button",
import { useAuth } from "@/hooks/useAuth",
import { UserProfile } from "@/types/auth",
import { toast } from "@/hooks/use-toast",
=======
import React, { useState, useEffect } from &quot;react&quot;;
import { useParams, useNavigate } from &quot;react-router-dom&quot;;
import { TalentProfile } from &quot;@/components/profile/TalentProfile&quot;;
import { ProfileLoadingState } from &quot;@/components/profile/ProfileLoadingState&quot;;
import { ProfileErrorState } from &quot;@/components/profile/ProfileErrorState&quot;;
import { BackToDirectoryButton } from &quot;@/components/profile/BackToDirectoryButton&quot;;
import { useTalentProfile } from &quot;@/hooks/useTalentProfile&quot;;
import { HireRequestModal } from &quot;@/components/profile/hire-request&quot;;
import { useAuthStatus } from &quot;@/hooks/talent&quot;;
import { MessageTalentModal } from &quot;@/components/messaging/MessageTalentModal&quot;;
import { StickyAction } from &quot;@/components/ui/sticky-action&quot;;
import { Handshake, MessageSquare } from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { UserProfile } from &quot;@/types/auth&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function TalentProfilePage() {
  // Cast to specify the expected route param type since useParams may be untyped
  const { id } = useParams() as { id?: string },
  const navigate = useNavigate(),
  const { profile, isLoading, error } = useTalentProfile(id),
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false),
  const { userDetails } = useAuthStatus(),
  const { isAuthenticated, user } = useAuth(),

  // Create a compatible UserProfile from UserDetails or the authenticated user
  const userProfile: UserProfile = user ? {
    id: user.id || '',
    displayName: user.displayName || '',
    email: user.email || '', // Ensure email is always a string
    userType: user.userType || '',
    profileComplete: user.profileComplete || false,
    createdAt: user.createdAt || new Date().toISOString(),
    updatedAt: user.updatedAt || new Date().toISOString(),
    role: user.role || ''
  } : {
    id: userDetails?.id || '',
    displayName: userDetails?.name || '',
    email: userDetails?.email || '', // Ensure email is always a string
    userType: '', // Default empty string since userDetails doesn't have this property
    profileComplete: false, // Default value since userDetails doesn't have this property
    createdAt: new Date().toISOString(), // Default value since userDetails doesn't have this property
    updatedAt: new Date().toISOString(), // Default value since userDetails doesn't have this property
    role: '' // Default empty string since userDetails doesn't have this property
  },

  // Handle loading error gracefully
  useEffect(() => {
    if (error) {
      toast({
<<<<<<< HEAD
        title: "Error loading profile",
        description: "There was a problem loading this talent profile. Please try again.",
        variant: "destructive"})
=======
        title: &quot;Error loading profile&quot;,
        description: &quot;There was a problem loading this talent profile. Please try again.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  }, [error]),

  if (isLoading) {
    return <ProfileLoadingState />
  }

  if (error || !profile) {
    return <ProfileErrorState error={error} />
  }

  const handleRequestHire = () => {
    if (!isAuthenticated) {
      toast({
<<<<<<< HEAD
        title: "Authentication required",
        description: "Please sign in to hire this talent.",
        variant: "default"}),
      navigate('/login', { state: { from: `/talent/${id}` } }),
      return
=======
        title: &quot;Authentication required&quot;,
        description: &quot;Please sign in to hire this talent.&quot;,
        variant: &quot;default&quot;});
      navigate('/login', { state: { from: `/talent/${id}` } });
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    setIsHireModalOpen(true)
  },

  const handleMessageTalent = () => {
    if (!isAuthenticated) {
      toast({
<<<<<<< HEAD
        title: "Authentication required",
        description: "Please sign in to message this talent.",
        variant: "default"}),
      navigate('/login', { state: { from: `/talent/${id}` } }),
      return
=======
        title: &quot;Authentication required&quot;,
        description: &quot;Please sign in to message this talent.&quot;,
        variant: &quot;default&quot;});
      navigate('/login', { state: { from: `/talent/${id}` } });
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    setIsMessageModalOpen(true)
  },

  return (
    <div className=&quot;min-h-screen bg-zion-blue pb-12&quot;>
      <TalentProfile 
        profile={profile} 
        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />
      <BackToDirectoryButton />
      
      {/* Sticky action buttons that appear when scrolling */}
      <StickyAction>
        <div className=&quot;p-2 flex gap-2&quot;>
          <Button 
            size=&quot;sm&quot;
            className=&quot;bg-zion-purple text-white hover:bg-zion-purple-dark&quot;
            onClick={handleRequestHire}
          >
            <Handshake className=&quot;mr-2 h-4 w-4&quot; />
            Hire Now
          </Button>
          <Button 
            size=&quot;sm&quot;
            variant=&quot;outline&quot;
            className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
            onClick={handleMessageTalent}
          >
            <MessageSquare className=&quot;mr-2 h-4 w-4&quot; />
            Message
          </Button>
        </div>
      </StickyAction>
      
      {/* Request to Hire Modal */}
      <HireRequestModal 
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />
      
      {/* Message Talent Modal */}
      <MessageTalentModal
        talent={profile}
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
      />
    </div>
  )
}
