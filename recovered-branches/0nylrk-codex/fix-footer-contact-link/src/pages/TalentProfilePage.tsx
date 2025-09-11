
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";
import {TalentProfile} from "@/components/profile/TalentProfile";
import {ProfileLoadingState} from "@/components/profile/ProfileLoadingState";
import {ProfileErrorState} from "@/components/profile/ProfileErrorState";
import {BackToDirectoryButton} from "@/components/profile/BackToDirectoryButton";
import {useTalentProfile} from "@/hooks/useTalentProfile";
import {HireRequestModal} from "@/components/profile/hire-request";
import {useAuthStatus} from "@/hooks/talent";
import {MessageTalentModal} from "@/components/messaging/MessageTalentModal";
import {StickyAction} from "@/components/ui/sticky-action";
import {Handshake, MessageSquare} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useAuth} from "@/hooks/useAuth";
import {UserProfile} from "@/types/auth";
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
<<<<<<< HEAD
export default function TalentProfilePage() {
  // Cast to specify the expected route param type since useParams may be untyped;
  const { id } = useParams() as { id?: string };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function TalentProfilePage() {;
  // Cast to specify the expected route param type since useParams may be untyped;
  const { id } = useParams() as { id?: string };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const navigate = useNavigate();
  const { profile, isLoading, error } = useTalentProfile(id);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
  const { isAuthenticated, user } = useAuth();
<<<<<<< HEAD
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
import { toast } from "@/hooks/use-toast";
export default function TalentProfilePage() {
  // Cast to specify the expected route param type since useParams may be untyped
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const { id } = useParams() as { id?: string }
  const navigate = useNavigate();
  const { profile, isLoading, error } = useTalentProfile(id);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
  const { isAuthenticated, user } = useAuth();
import { toast } from "@/hooks/use-toast",
export default function TalentProfilePage() {
  // Cast to specify the expected route param type since useParams may be untyped
  const { id } = useParams() as { id?: string },
  const navigate = useNavigate(),
  const { profile, isLoading, error } = useTalentProfile(id),
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false),
  const { userDetails } = useAuthStatus(),
  const { isAuthenticated, user } = useAuth(),
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  // Create a compatible UserProfile from UserDetails or the authenticated user
  const userProfile: UserProfile = user ? {
    id: user.id |''
    displayName: user.displayName |''
    email: user.email |'', // Ensure email is always a string
    userType: user.userType |''
    profileComplete: user.profileComplete |false
    createdAt: user.createdAt |new Date().toISOString()
    updatedAt: user.updatedAt |new Date().toISOString()
    role: user.role |''
  } : {
    id: userDetails?.id |''
    displayName: userDetails?.name |''
    email: userDetails?.email |'', // Ensure email is always a string
    userType: '', // Default empty string since userDetails doesn't have this property
    profileComplete: false, // Default value since userDetails doesn't have this property
    createdAt: new Date().toISOString(), // Default value since userDetails doesn't have this property
    updatedAt: new Date().toISOString(), // Default value since userDetails doesn't have this property
    role: '' // Default empty string since userDetails doesn't have this property
<<<<<<< HEAD


  },



<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Handle loading error gracefully
  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading profile"
        description: "There was a problem loading this talent profile. Please try again."
        variant: "destructive"})
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }, [error]);
  if (isLoading) {
    return <ProfileLoadingState />
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useEffect } from "react",;
import { useParams, useNavigate } from "react-router-dom",;
import { TalentProfile } from "@/components/profile/TalentProfile",;
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState",;
import { ProfileErrorState } from "@/components/profile/ProfileErrorState",;
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton",;
import { useTalentProfile } from "@/hooks/useTalentProfile",;
import { HireRequestModal } from "@/components/profile/hire-request",;
import { useAuthStatus } from "@/hooks/talent",;
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal",;
import { StickyAction } from "@/components/ui/sticky-action",;
import { Handshake, MessageSquare } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
import { UserProfile } from "@/types/auth",;
import { toast } from "@/hooks/use-toast",;
export default function TalentProfilePage() {;
  // Cast to specify the expected route param type since useParams may be untyped;
  const { id } = useParams() as { id?: string },;
  const navigate = useNavigate(),;
  const { profile, isLoading, error } = useTalentProfile(id),;
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),;
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false),;
  const { userDetails } = useAuthStatus(),;
  const { isAuthenticated, user } = useAuth(),;
  // Create a compatible UserProfile from UserDetails or the authenticated user;
  const userProfile: UserProfile = user ? {;
    id: user.id || '',;
    displayName: user.displayName || '',;
    email: user.email || '', // Ensure email is always a string;
    userType: user.userType || '',;
    profileComplete: user.profileComplete || false,;
    createdAt: user.createdAt || new Date().toISOString(),;
    updatedAt: user.updatedAt || new Date().toISOString(),;
    role: user.role || '';
  } : {;
    id: userDetails?.id || '',;
    displayName: userDetails?.name || '',;
    email: userDetails?.email || '', // Ensure email is always a string;
    userType: '', // Default empty string since userDetails doesn't have this property;
    profileComplete: false, // Default value since userDetails doesn't have this property;
    createdAt: new Date().toISOString(), // Default value since userDetails doesn't have this property;
    updatedAt: new Date().toISOString(), // Default value since userDetails doesn't have this property;
    role: '' // Default empty string since userDetails doesn't have this property;
  },;
  // Handle loading error gracefully;
  useEffect(() => {;
    if (error) {;
      toast({;
        title: "Error loading profile",;
        description: "There was a problem loading this talent profile. Please try again.",;
        variant: "destructive"});
    }
  }, [error]),;
  if (isLoading) {;
    return <ProfileLoadingState />;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  if (error |!profile) {
    return <ProfileErrorState error={error} />
  }

<<<<<<< HEAD




<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleRequestHire = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please sign in to hire this talent."
        variant: "default"})
      navigate('/login', { state: { from: `/talent/${id}` } })
      return
    }
    setIsHireModalOpen(true)
<<<<<<< HEAD


  },



<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleMessageTalent = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please sign in to message this talent."
        variant: "default"})
      navigate('/login', { state: { from: `/talent/${id}` } })
      return
    }
    setIsMessageModalOpen(true)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }

  return (
    <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile
        profile={profile}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

  return (
    <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile 
        profile={profile} 
<<<<<<< HEAD
<<<<<<< HEAD
;
  const handleRequestHire = () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to hire this talent.",;
        variant: "default"}),;
      navigate('/login', { state: { from: `/talent/${id}` } }),;
      return;
    }
    setIsHireModalOpen(true);
  },;
  const handleMessageTalent = () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to message this talent.",;
        variant: "default"}),;
      navigate('/login', { state: { from: `/talent/${id}` } });
      return;
    }
    setIsMessageModalOpen(true);
  };
  return (;
    <div className="min-h-screen bg-zion-blue pb-12">;
      <TalentProfile;
        profile={profile} ;

  },

  return (
    <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile 
        profile={profile} 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />
      <BackToDirectoryButton />
      {/* Sticky action buttons that appear when scrolling */}
      <StickyAction>
        <div className="p-2 flex gap-2">
          <Button
            size="sm"
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
            onClick={handleRequestHire}
          >
            <Handshake className="mr-2 h-4 w-4" />
            Hire Now
          </Button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  // Create a compatible UserProfile from UserDetails or the authenticated user;
  const userProfile: UserProfile = user ? {;
    id: user && user.id || '',;
    displayName: user && user.displayName || '',;
    email: user && user.email || '', // Ensure email is always a string;
    userType: user && user.userType || '',;
    profileComplete: user && user.profileComplete || false,;
    createdAt: user && user.createdAt || new Date().toISOString(),;
    updatedAt: user && user.updatedAt || new Date().toISOString(),;
    role: user && user.role || '';
  } : {;
    id: userDetails?.id || '',;
    displayName: userDetails?.name || '',;
    email: userDetails?.email || '', // Ensure email is always a string;
    userType: '', // Default empty string since userDetails doesn't have this property;
    profileComplete: false, // Default value since userDetails doesn't have this property;
    createdAt: new Date().toISOString(), // Default value since userDetails doesn't have this property;
    updatedAt: new Date().toISOString(), // Default value since userDetails doesn't have this property;
    role: '' // Default empty string since userDetails doesn't have this property;
  };

<<<<<<< HEAD
import React, { useState, useEffect } from "react",;
import { useParams, useNavigate } from "react-router-dom",;
import { TalentProfile } from "@/components/profile/TalentProfile",;
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState",;
import { ProfileErrorState } from "@/components/profile/ProfileErrorState",;
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton",;
import { useTalentProfile } from "@/hooks/useTalentProfile",;
import { HireRequestModal } from "@/components/profile/hire-request",;
import { useAuthStatus } from "@/hooks/talent",;
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal",;
import { StickyAction } from "@/components/ui/sticky-action",;
import { Handshake, MessageSquare } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
import { UserProfile } from "@/types/auth",;
import { toast } from "@/hooks/use-toast",;
;
export default function TalentProfilePage() {;
  // Cast to specify the expected route param type since useParams may be untyped;
  const { id } = useParams() as { id?:string },;
  const navigate = useNavigate(),;
  const { profile, isLoading, error } = useTalentProfile(id),;
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),;
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false),;
  const { userDetails } = useAuthStatus(),;
  const { isAuthenticated, user } = useAuth(),;
;
  // Create a compatible UserProfile from UserDetails or the authenticated user;
  const userProfile:UserProfile = user ? {;
    id:user.id || '',;
    displayName:user.displayName || '',;
    email:user.email || '', // Ensure email is always a string;
    userType:user.userType || '',;
    profileComplete:user.profileComplete || false,;
    createdAt:user.createdAt || new Date().toISOString(),;
    updatedAt:user.updatedAt || new Date().toISOString(),;
    role:user.role || '';
  } {;
    id:userDetails?.id || '',;
    displayName:userDetails?.name || '',;
    email:userDetails?.email || '', // Ensure email is always a string;
    userType:'', // Default empty string since userDetails doesn't have this property;
    profileComplete:false, // Default value since userDetails doesn't have this property;
    createdAt:new Date().toISOString(), // Default value since userDetails doesn't have this property;
    updatedAt:new Date().toISOString(), // Default value since userDetails doesn't have this property;
    role:'' // Default empty string since userDetails doesn't have this property;
  },;
;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Handle loading error gracefully;
  useEffect(() => {;
    if (error) {;
      toast({;
<<<<<<< HEAD
        title:"Error loading profile",;
        description:"There was a problem loading this talent profile. Please try again.",;
        variant:"destructive"}),;
    }
  }, [error]),;
;
  if (isLoading) {;
    return <ProfileLoadingState />,;
  }
;
  if (error || !profile) {;
    return <ProfileErrorState error={error} />,;
  }
;
  const handleRequestHire = () => {;
    if (!isAuthenticated) {;
      toast({;
        title:"Authentication required",;
        description:"Please sign in to hire this talent.",;
        variant:"default"}),;
      navigate('/login', { state:{ from:`/talent/${id}` } }),;
      return,;
    }
    setIsHireModalOpen(true),;
  },;
;
  const handleMessageTalent = () => {;
    if (!isAuthenticated) {;
      toast({;
        title:"Authentication required",;
        description:"Please sign in to message this talent.",;
        variant:"default"}),;
      navigate('/login', { state:{ from:`/talent/${id}` } }),;
      return,;
    }
    setIsMessageModalOpen(true),;
  },;
;
  return (;
    <div className="min-h-screen bg-zion-blue pb-12">;
      <TalentProfile ;
        profile={profile} ;
=======
        title: "Error loading profile",;
        description: "There was a problem loading this talent profile. Please try again.",;
        variant: "destructive"});
    }
  }, [error]);

  if (isLoading) {;
    return <ProfileLoadingState />;
  }

  if (error || !profile) {;
    return <ProfileErrorState error={error} />;
  }

  const handleRequestHire = () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to hire this talent.",;
        variant: "default"}),;
      navigate('/login', { state: { from: `/talent/${id}` } }),;
      return;
    }
    setIsHireModalOpen(true);
  };

  const handleMessageTalent = () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to message this talent.",;
        variant: "default"}),;
      navigate('/login', { state: { from: `/talent/${id}` } }),;
      return;
    }
    setIsMessageModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-zion-blue pb-12">;
      <TalentProfile
        profile={profile} 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />;
      <BackToDirectoryButton />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Button
            size="sm"
            variant="outline"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            onClick={handleMessageTalent}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Button>
        </div>
      </StickyAction>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
      
<<<<<<< HEAD
      
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Request to Hire Modal */}
      <HireRequestModal
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        userDetails={userProfile}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />
      {/* Message Talent Modal */}
      <MessageTalentModal
        talent={profile}
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      />;


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />
    </div>
  )
}
      />;
<<<<<<< HEAD
    </div>;
  );
}
      ;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Request to Hire Modal */}
      <HireRequestModal ;
        talent={profile}        isOpen={isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />;
      ;
      {/* Message Talent Modal */}
      <MessageTalentModal;
        talent={profile}
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
      />;
    </div>;
  ),; export default function TalentProfilePage () {
  //Cast to specify the expected route param type since useParams may be untyped const {
  id 
}= useParams () as {
  id?: string 
};
const navigate = useNavigate ();
const {
  profile, isLoading, error 
}= useTalentProfile (id);
const [isHireModalOpen, setIsHireModalOpen] = useState (false);
const [isMessageModalOpen, setIsMessageModalOpen] = useState (false);
const {
  userDetails 
}= useAuthStatus ();
const {
  isAuthenticated, user 
}= useAuth ();
//Create a compatible UserProfile from UserDetails or the authenticated user const userProfile: UserProfile = user ? {
  id: user.id || '';
displayName: user.displayName || '';
email: user.email || '', //Ensure email is always a string userType: user.userType || '';
profileComplete: user.profileComplete || false;
createdAt: user.createdAt || new Date () .toISOString ();
updatedAt: user.updatedAt || new Date () .toISOString ();
role: user.role || '' 
}: {
  id: userDetails?.id || '';
displayName: userDetails?.name || '';
email: userDetails?.email || '', //Ensure email is always a string userType: '', //Default empty string since userDetails doesn't have this property profileComplete: false, //Default value since userDetails doesn't have this property createdAt: new Date () .toISOString (), //Default value since userDetails doesn't have this property updatedAt: new Date () .toISOString (), //Default value since userDetails doesn't have this property role: ''//Default empty string since userDetails doesn't have this property 
};
if (error) {
  toast ({
  
}
;

<<<<<<< HEAD
}, [error]);
return;
}setIsHireModalOpen (true) 
};
const handleMessageTalent = () => {
  if (!isAuthenticated) {
  toast ({
  return;
}setIsMessageModalOpen (true) 
};
<TalentProfile profile= {
  profile 
}onRequestHire= {
  handleRequestHire 
}onMessageTalent= {
  handleMessageTalent 
}/> <BackToDirectoryButton /> {
  /* Sticky action buttons that appear when scrolling */ 
}<StickyAction> <div className="p-2 flex gap-2" > <Button > <Handshake className="mr-2 h-4 w-4" /> Hire Now </Button> <Button > <MessageSquare className="mr-2 h-4 w-4" /> Message </Button> </div> </StickyAction> {
  /* Request to Hire Modal */ 
}<HireRequestModal talent= {
  profile 
}isOpen= {
  isHireModalOpen 
}onClose= {
  () => setIsHireModalOpen (false) 
}userDetails= {
  userProfile 
}/> {
  /* Message Talent Modal */ 
}<MessageTalentModal talent= {
  profile 
}isOpen= {
  isMessageModalOpen 
}onClose= {
  () => setIsMessageModalOpen (false) 
}/> </div>) 
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
      {/* Request to Hire Modal */}
      <HireRequestModal;
        talent={profile}
        is_open={isHireModalOpen}
        on_close={() => setIsHireModalOpen (false)}
        user_details={user_profile}
      />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {/* Message Talent Modal */}
      <MessageTalentModal;
        talent={profile}

        is_open={isMessageModalOpen}
        on_close={() => setIsMessageModalOpen (false)}
      />;
    </div>);
}

=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
