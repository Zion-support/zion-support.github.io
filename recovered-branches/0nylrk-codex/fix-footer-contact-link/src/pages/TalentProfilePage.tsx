<<<<<<< HEAD
import React, { useState, useEffect } from "react",
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
class ErrorBoundary extends React.Component {

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
import {toast} from "@/hooks/use-toast";
<<<<<<< HEAD
export default function TalentProfilePage() {
  // Cast to specify the expected route param type since useParams may be untyped;
  const { id } = useParams() as { id?: string };
=======
export default function TalentProfilePage() {;
  // Cast to specify the expected route param type since useParams may be untyped;
  const { id } = useParams() as { id?: string };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const navigate = useNavigate();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { profile, isLoading, error } = useTalentProfile(id);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();

import React, { useState, useEffect } from "react",

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const { id } = useParams() as { id?: string },
  const navigate = useNavigate($2);
  const { profile, isLoading, error } = useTalentProfile($2);
  const [isHireModalOpen, setIsHireModalOpen] = useState($2);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState($2);
  const { userDetails } = useAuthStatus($2);
  const { isAuthenticated, user } = useAuth($2);
  // Create a compatible UserProfile from UserDetails or the authenticated user
  const userProfile: UserProfile = $2;
    displayName: user.displayName || '',
    email: user.email || '', // Ensure email is always a string
    userType: user.userType || '',
    profileComplete: user.profileComplete || false,
    createdAt: user.createdAt || new Date().toISOString($2);
    updatedAt: user.updatedAt || new Date().toISOString($2);
    role: user.role || ''
  } : {
    id: userDetails ?.id || '',
    displayName: userDetails ?.name || '',
    email: userDetails ?.email || '', // Ensure email is always a string
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const { id } = useParams() as { id?: string }
  const navigate = useNavigate();
<<<<<<< HEAD
  const { isAuthenticated, user } = useAuth();
<<<<<<< HEAD
import { toast } from "@/hooks/use-toast","
export default function TalentProfilePage() {
  // Cast to specify the expected route param type since useParams may be untyped
}
const { id } = useParams() as { id?: string },;
const navigate = useNavigate(),;
const { profile, isLoading, error } = useTalentProfile(id),;
const [isHireModalOpen, setIsHireModalOpen] = useState(false),;
const [isMessageModalOpen, setIsMessageModalOpen] = useState(false),;
const { userDetails } = useAuthStatus(),;
const { isAuthenticated, user } = useAuth(),  // Handle loading error gracefully;
  useEffect(() => {
    }
    if (error) {
      }
      toast({
        }
        "title": "title","
    "description": "There was a problem loading this talent profile. Please try again.""
"variant": "destructive"});"
import { useParams, useNavigate } from "react-router-dom";"
import { TalentProfile } from "@/components/profile/TalentProfile",;"
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState",;"
import { ProfileErrorState } from "@/components/profile/ProfileErrorState",;"
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton",;"
import { useTalentProfile } from "@/hooks/useTalentProfile",;"
import { HireRequestModal } from "@/components/profile/hire-request",;"
import { useAuthStatus } from "@/hooks/talent",;"
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal",;"
import { StickyAction } from "@/components/ui/sticky-action",;"
import { Handshake, MessageSquare } from "lucide-react",;"
import { Button } from "@/components/ui/button",;"
import { useAuth } from "@/hooks/useAuth",;"
import { UserProfile } from "@/types/auth",;"
import { toast } from "@/hooks/use-toast",;"
export default function TalentProfilePage() {;
  // Cast to specify the expected route param type since useParams may be untyped;
  }
=======
<<<<<<< HEAD
  const { profile, isLoading, error } = useTalentProfile(id);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
  const { isAuthenticated, user } = useAuth();"
import { toast } from "@/hooks/use-toast",
export default function TalentProfilePage() {};
  // Cast to specify the expected route param type since useParams may be untyped;
  const { id } = useParams() as { id?: string },
  const navigate = useNavigate(),
  const { profile, isLoading, error } = useTalentProfile(id),
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false),
  const { userDetails } = useAuthStatus(),

  // Create a compatible UserProfile from UserDetails or the authenticated user;
  const userProfile: UserProfile = user ? {}
    id: user.id |'''
    displayName: user.displayName |'''
    email: user.email |'', // Ensure email is always a string'
    userType: user.userType |''
    profileComplete: user.profileComplete |false;
    createdAt: user.createdAt |new Date().toISOString()
    updatedAt: user.updatedAt |new Date().toISOString()'
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

=======
=======
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

  const { id } = useParams() as { id?: string }
  const navigate = useNavigate();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { profile, isLoading, error } = useTalentProfile(id);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
<<<<<<< HEAD
  const { isAuthenticated, user } = useAuth();"
import { toast } from "@/hooks/use-toast",
export default function TalentProfilePage() {};
  // Cast to specify the expected route param type since useParams may be untyped;
=======
  const { isAuthenticated, user } = useAuth();
import { toast } from "@/hooks/use-toast",
export default function TalentProfilePage() {
  // Cast to specify the expected route param type since useParams may be untyped
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const { id } = useParams() as { id?: string },
  const navigate = useNavigate(),
  const { profile, isLoading, error } = useTalentProfile(id),
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false),
  const { userDetails } = useAuthStatus(),
<<<<<<< HEAD

  // Create a compatible UserProfile from UserDetails or the authenticated user;
  const userProfile: UserProfile = user ? {}
    id: user.id |'''
    displayName: user.displayName |'''
    email: user.email |'', // Ensure email is always a string'
=======
  const { isAuthenticated, user } = useAuth(),
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  // Create a compatible UserProfile from UserDetails or the authenticated user
  const userProfile: UserProfile = user ? {
    id: user.id |''
    displayName: user.displayName |''
    email: user.email |'', // Ensure email is always a string
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    userType: user.userType |''
    profileComplete: user.profileComplete |false;
    createdAt: user.createdAt |new Date().toISOString()
    updatedAt: user.updatedAt |new Date().toISOString()'
    role: user.role |''

  } : {
    id: userDetails?.id |''
    displayName: userDetails?.name |''
    email: userDetails?.email |'', // Ensure email is always a string
>>>>>>> merged-prs-20250907-203621
    userType: '', // Default empty string since userDetails doesn't have this property
    profileComplete: false, // Default value since userDetails doesn't have this property
    createdAt: new Date().toISOString(), // Default value since userDetails doesn't have this property
    updatedAt: new Date().toISOString(), // Default value since userDetails doesn't have this property
    role: '' // Default empty string since userDetails doesn't have this property
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },

  // Handle loading error gracefully

  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading profile"
        description: "There was a problem loading this talent profile. Please try again."
        variant: "destructive"})

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
export default function TalentProfilePage() { return null; }
  const { id } = useParams() as { id?: string },;
  const navigate = useNavigate(),;
  const { profile, isLoading, error } = useTalentProfile(id),;
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),;
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false),;
  const { userDetails } = useAuthStatus(),;
>>>>>>> origin/chore/fix-lint-and-merge
  const { isAuthenticated, user } = useAuth(),;
  // Create a compatible UserProfile from UserDetails or the authenticated user;
  const userProfile: UserProfile = user ? {;'
    id: user.id || '',;'
    displayName: user.displayName || '',;'
    email: user.email || '', // Ensure email is always a string;'
    userType: user.userType || '',;
    profileComplete: user.profileComplete || false,;
    createdAt: user.createdAt || new Date().toISOString(),;
    updatedAt: user.updatedAt || new Date().toISOString(),;'
    role: user.role || '';
  } : {;'
    id: userDetails?.id || '',;'
    displayName: userDetails?.name || '',;'
    email: userDetails?.email || '', // Ensure email is always a string;'
    userType: '', // Default empty string since userDetails doesn't have this property;'
    profileComplete: false, // Default value since userDetails doesn't have this property;'
    createdAt: new Date().toISOString(), // Default value since userDetails doesn't have this property;'
    updatedAt: new Date().toISOString(), // Default value since userDetails doesn't have this property;'
    role: '' // Default empty string since userDetails doesn't have this property;
  },;
  // Handle loading error gracefully;
  useEffect(() => {;
    if (error) {;

        variant: "destructive"});
    }
  }, [error]),;
  if (isLoading) {;
    return <ProfileLoadingState />;

  }
<<<<<<< HEAD
  if (error |!profile) {}
    return <ProfileErrorState error={error} />
  }

  const handleRequestHire = () => {}
    if (!isAuthenticated) {}
      toast({"
        title: "Authentication required""
        description: "Please sign in to hire this talent.""
        variant: "default"})'
      navigate('/login', { state: { from: `/talent/${id}` } })
      return;
    }
    setIsHireModalOpen(true)

  const handleMessageTalent = () => {

    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please sign in to message this talent."
        variant: "default"})

      navigate('/login', { state: { from: `/talent/${id}` } })
      return;
    }

  },

  return ("
    <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile;
        profile={profile} 

;
  const handleRequestHire = () => {;
    if (!isAuthenticated) {;
      toast({;"
        title: "Authentication required","
        description: "Please sign in to hire this talent.",;"
        variant: "default"}),;'`
      navigate('/login', { state: { from: `/talent/${id}` } }),;
      return;
    }
    setIsHireModalOpen(true);
  },;
  const handleMessageTalent = () => {;
    if (!isAuthenticated) {;
      toast({;"
        title: "Authentication required","
        description: "Please sign in to message this talent.",;"
        variant: "default"}),;'`
      navigate('/login', { state: { from: `/talent/${id}` } });
      return;
    }
    setIsMessageModalOpen(true);
  };
  return (;"
    <div className="min-h-screen bg-zion-blue pb-12">;
      <TalentProfile;
        profile={profile} ;

=======

  if (error || !profile) {
=======

  },

<<<<<<< HEAD
=======


<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Handle loading error gracefully

  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading profile"
        description: "There was a problem loading this talent profile. Please try again."
        variant: "destructive"})

<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
  }, [error]);
  if (isLoading) {
    return <ProfileLoadingState />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
export default function TalentProfilePage() { return null; }
  const { id } = useParams() as { id?: string },;
  const navigate = useNavigate(),;
  const { profile, isLoading, error } = useTalentProfile(id),;
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),;
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false),;
  const { userDetails } = useAuthStatus(),;
>>>>>>> origin/chore/fix-lint-and-merge
  const { isAuthenticated, user } = useAuth(),;
  // Create a compatible UserProfile from UserDetails or the authenticated user;
  const userProfile: UserProfile = user ? {;'
    id: user.id || '',;'
    displayName: user.displayName || '',;'
    email: user.email || '', // Ensure email is always a string;'
    userType: user.userType || '',;
    profileComplete: user.profileComplete || false,;
    createdAt: user.createdAt || new Date().toISOString(),;
    updatedAt: user.updatedAt || new Date().toISOString(),;'
    role: user.role || '';
  } : {;'
    id: userDetails?.id || '',;'
    displayName: userDetails?.name || '',;'
    email: userDetails?.email || '', // Ensure email is always a string;'
    userType: '', // Default empty string since userDetails doesn't have this property;'
    profileComplete: false, // Default value since userDetails doesn't have this property;'
    createdAt: new Date().toISOString(), // Default value since userDetails doesn't have this property;'
    updatedAt: new Date().toISOString(), // Default value since userDetails doesn't have this property;'
    role: '' // Default empty string since userDetails doesn't have this property;
  },;
  // Handle loading error gracefully;
  useEffect(() => {;
    if (error) {;

        variant: "destructive"});
    }
  }, [error]),;
  if (isLoading) {;
    return <ProfileLoadingState />;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
  if (error |!profile) {}
>>>>>>> merged-prs-20250907-203621
    return <ProfileErrorState error={error} />
  }

<<<<<<< HEAD
  const handleRequestHire = () => {}
    if (!isAuthenticated) {}
      toast({"
        title: "Authentication required""
        description: "Please sign in to hire this talent.""
        variant: "default"})'
=======




<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleRequestHire = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please sign in to hire this talent."
        variant: "default"})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      navigate('/login', { state: { from: `/talent/${id}` } })
      return;
    }
    setIsHireModalOpen(true)

<<<<<<< HEAD
=======

  },



<<<<<<< HEAD
  }
  },

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleMessageTalent = () => {

    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please sign in to message this talent."
        variant: "default"})
<<<<<<< HEAD

      navigate('/login', { state: { from: `/talent/${id}` } })
      return;
    }

  },

  return ("
    <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile;
        profile={profile} 

;
  const handleRequestHire = () => {;
    if (!isAuthenticated) {;
      toast({;"
        title: "Authentication required","
        description: "Please sign in to hire this talent.",;"
        variant: "default"}),;'`
=======
      navigate('/login', { state: { from: `/talent/${id}` } })
      return
    }
    setIsMessageModalOpen(true)
<<<<<<< HEAD
  }

  return (
    <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile
        profile={profile}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  },

  return (
    <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile 
        profile={profile} 
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
  const handleRequestHire = () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to hire this talent.",;
        variant: "default"}),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      navigate('/login', { state: { from: `/talent/${id}` } }),;
      return;
    }
    setIsHireModalOpen(true);
  },;
  const handleMessageTalent = () => {;
    if (!isAuthenticated) {;
<<<<<<< HEAD
      toast({;"
        title: "Authentication required","
        description: "Please sign in to message this talent.",;"
        variant: "default"}),;'`
=======
      toast({;
        title: "Authentication required",;
        description: "Please sign in to message this talent.",;
        variant: "default"}),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      navigate('/login', { state: { from: `/talent/${id}` } });
      return;
    }
    setIsMessageModalOpen(true);
  };
<<<<<<< HEAD
  return (;"
=======
  return (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />
      <BackToDirectoryButton />
      {/* Sticky action buttons that appear when scrolling */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  // Create a compatible UserProfile from UserDetails or the authenticated user;
  const userProfile: UserProfile = user ? {;'
    id: user && user.id || '',;'
    displayName: user && user.displayName || '',;'
    email: user && user.email || '', // Ensure email is always a string;'
    userType: user && user.userType || '',;
    profileComplete: user && user.profileComplete || false,;
    createdAt: user && user.createdAt || new Date().toISOString(),;
    updatedAt: user && user.updatedAt || new Date().toISOString(),;'
    role: user && user.role || '';
  } : {;'
    id: userDetails?.id || '',;'
    displayName: userDetails?.name || '',;'
    email: userDetails?.email || '', // Ensure email is always a string;'
    userType: '', // Default empty string since userDetails doesn't have this property;'
    profileComplete: false, // Default value since userDetails doesn't have this property;'
    createdAt: new Date().toISOString(), // Default value since userDetails doesn't have this property;'
    updatedAt: new Date().toISOString(), // Default value since userDetails doesn't have this property;'
    role: '' // Default empty string since userDetails doesn't have this property;
  };

<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Handle loading error gracefully;

  useEffect(() => {;
    if (error) {;
      toast({;
<<<<<<< HEAD

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

      navigate('/login', { state: { from: `/talent/${id}` } }),;
      return;
    }
    setIsHireModalOpen(true);
  };

  const handleMessageTalent = () => {;
    if (!isAuthenticated) {;
=======
<<<<<<< HEAD

        variant: "destructive"});
=======
        title:"Error loading profile",;
        description:"There was a problem loading this talent profile. Please try again.",;
        variant:"destructive"}),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

      navigate('/login', { state: { from: `/talent/${id}` } }),;
      return;
=======
      toast({;
        title:"Authentication required",;
        description:"Please sign in to hire this talent.",;
        variant:"default"}),;
      navigate('/login', { state:{ from:`/talent/${id}` } }),;
      return,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
    setIsHireModalOpen(true),;
  },;
;
  const handleMessageTalent = () => {;
    if (!isAuthenticated) {;
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      navigate('/login', { state: { from: `/talent/${id}` } }),;
      return;
    }
    setIsMessageModalOpen(true);
  };

<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />;
      <BackToDirectoryButton />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      {/* Sticky action buttons that appear when scrolling */}
      <StickyAction>;"
        <div className="p-2 flex gap-2">;
          <Button"
            size="sm""
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
            onClick={handleRequestHire}>;"
            <Handshake className="mr-2 h-4 w-4" />;
            Hire Now;
<<<<<<< HEAD
          </Button>;

          <Button
            size="sm"
            variant="outline"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"

          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Button>
        </div>
      </StickyAction>

            onClick={handleMessageTalent}>;
            <MessageSquare className="mr-2 h-4 w-4" />;            Message;

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

    role: '' // Default empty string since user_details doesn't have this property;
  }
;
  // Handle loading error gracefully;

        variant: "destructive"});
    }
  }, [error]);
;

      navigate ('/login', { state: { from: `/talent/${id}` } }),
      return;
    }
    setIsHireModalOpen (true);
  }
;

      navigate ('/login', { state: { from: `/talent/${id}` } }),
      return;
    }
    setIsMessageModalOpen (true);
  }
;

    <div className="min - h-screen bg - zion - blue pb - 12">;
      <TalentProfile;
        profile={profile}
        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />;
      <BackToDirectoryButton />;
      {/* Sticky action buttons that appear when scrolling */}

      {/* Request to Hire Modal */}

        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
=======
          </Button>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
          <Button
            size="sm"
            variant="outline"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
            onClick={handleMessageTalent}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Button>
        </div>
      </StickyAction>
<<<<<<< HEAD
      {/* Request to Hire Modal */}
      <HireRequestModal
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Button>
        </div>
      </StickyAction>

            onClick={handleMessageTalent}>;
            <MessageSquare className="mr-2 h-4 w-4" />;            Message;

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

    role: '' // Default empty string since user_details doesn't have this property;
  }
;
  // Handle loading error gracefully;

        variant: "destructive"});
    }
  }, [error]);
;

      navigate ('/login', { state: { from: `/talent/${id}` } }),
      return;
    }
    setIsHireModalOpen (true);
  }
;

      navigate ('/login', { state: { from: `/talent/${id}` } }),
      return;
    }
    setIsMessageModalOpen (true);
  }
;

    <div className="min - h-screen bg - zion - blue pb - 12">;
      <TalentProfile;
        profile={profile}
        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />;
      <BackToDirectoryButton />;
      {/* Sticky action buttons that appear when scrolling */}
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Request to Hire Modal */}

>>>>>>> merged-prs-20250907-203621
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      <MessageTalentModal;
        is_open={isMessageModalOpen}
        on_close={() => setIsMessageModalOpen (false)}

    </div>);
}

      />
      {/* Message Talent Modal */}
      <MessageTalentModal;

<<<<<<< HEAD
=======
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

}
;

=======
        userDetails={userProfile}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      />
      {/* Message Talent Modal */}
      <MessageTalentModal

        talent={profile}
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
<<<<<<< HEAD

      />;

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      />;


<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      />
    </div>
  )
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      />;
    </div>;
  );
}
      ;
<<<<<<< HEAD
      {/* Request to Hire Modal */}
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}

      <HireRequestModal ;
        talent={profile}        isOpen={isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}

}
;

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}, [error]);
return;
}setIsHireModalOpen (true) 
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

  () => setIsMessageModalOpen (false) 
}/> </div>) 
}
<<<<<<< HEAD
;
=======
;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
