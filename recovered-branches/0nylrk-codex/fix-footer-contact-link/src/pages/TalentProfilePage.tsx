
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
import {toast} from "@/hooks/use-toast";  const navigate = useNavigate();
=======
import {toast} from "@/hooks/use-toast";
export default function TalentProfilePage() {;
  // Cast to specify the expected route param type since useParams may be untyped;
  const { id } = useParams() as { id?: string };

  const navigate = useNavigate();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { profile, isLoading, error } = useTalentProfile(id);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
<<<<<<< HEAD
  const { isAuthenticated, user } = useAuth();
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState, useEffect } from "react",
=======
  const { isAuthenticated, user } = useAuth();import React, { useState, useEffect } from "react",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const { isAuthenticated, user } = useAuth();

import React, { useState, useEffect } from "react",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
import React, { useState, useEffect } from "react","
import { useParams, useNavigate } from "react-router-dom","
import { TalentProfile } from "@/components/profile/TalentProfile","
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState","
import { ProfileErrorState } from "@/components/profile/ProfileErrorState","
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton","
import { useTalentProfile } from "@/hooks/useTalentProfile","
import { HireRequestModal } from "@/components/profile/hire-request","
import { useAuthStatus } from "@/hooks/talent","
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal","
import { StickyAction } from "@/components/ui/sticky-action","
import { Handshake, MessageSquare } from "lucide-react","
import { Button } from "@/components/ui/button","
import { useAuth } from "@/hooks/useAuth","
import { UserProfile } from "@/types/auth",";
import { toast } from "@/hooks/use-toast";
export default function TalentProfilePage() {};
  // Cast to specify the expected route param type since useParams may be untyped;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { id } = useParams() as { id?: string }
  const navigate = useNavigate();
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
<<<<<<< HEAD
  const { isAuthenticated, user } = useAuth(),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
},

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // Handle loading error gracefully
=======
  const { isAuthenticated, user } = useAuth(),  // Handle loading error gracefully
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const { isAuthenticated, user } = useAuth(),  // Handle loading error gracefully
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  // Handle loading error gracefully
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading profile"
        description: "There was a problem loading this talent profile. Please try again."
        variant: "destructive"})
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
  } : {'
    id: userDetails?.id |'''
    displayName: userDetails?.name |'''
    email: userDetails?.email |'', // Ensure email is always a string'
    userType: '', // Default empty string since userDetails doesn't have this property'
    profileComplete: false, // Default value since userDetails doesn't have this property'
    createdAt: new Date().toISOString(), // Default value since userDetails doesn't have this property'
    updatedAt: new Date().toISOString(), // Default value since userDetails doesn't have this property'
    role: '' // Default empty string since userDetails doesn't have this property;
  // Handle loading error gracefully;
  useEffect(() => {}
    if (error) {}
      toast({"
        title: "Error loading profile""
        description: "There was a problem loading this talent profile. Please try again.""
        variant: "destructive"})
"
import React, { useState, useEffect } from "react",;"
import { useParams, useNavigate } from "react-router-dom",;"
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from "@/hooks/use-toast",;
export default function TalentProfilePage() { return null; }
  const { id } = useParams() as { id?: string },;
  const navigate = useNavigate(),;
  const { profile, isLoading, error } = useTalentProfile(id),;
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),;
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false),;
  const { userDetails } = useAuthStatus(),;
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
toast({;
title: "Error loading profile",,
  description: "There was a problem loading this talent profile. Please try again.",;
        variant: "destructive"});
    }
  }, [error]),;
  if (isLoading) {;
    return <ProfileLoadingState />;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleMessageTalent = () => {
=======

  }
  if (error |!profile) {
    return <ProfileErrorState error={error} />
}  const handleMessageTalent = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }

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

  },

  const handleMessageTalent = () => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please sign in to message this talent."
        variant: "default"})
=======

  const handleMessageTalent = () => {}
    if (!isAuthenticated) {}
      toast({"
        title: "Authentication required""
        description: "Please sign in to message this talent.""
        variant: "default"})'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      navigate('/login', { state: { from: `/talent/${id}` } })
      return;
    }
<<<<<<< HEAD
    setIsMessageModalOpen(true)

<<<<<<< HEAD
  },

  return ("
    <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile;
        profile={profile} 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
  const handleRequestHire = () => {;
    if (!isAuthenticated) {;
      toast({;"
        title: "Authentication required",;"
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
        title: "Authentication required",;"
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
},

  return (
    <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile 
        profile={profile} 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />
      <BackToDirectoryButton />
      {/* Sticky action buttons that appear when scrolling */}
<StickyAction>"
        <div className="p-2 flex gap-2">
          <Button"
            size="sm""
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
            onClick={handleRequestHire}
          >"
            <Handshake className="mr-2 h-4 w-4" />
            Hire Now;
          </Button>
<<<<<<< HEAD

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

  // Handle loading error gracefully;
=======
    setIsMessageModalOpen(true)  // Handle loading error gracefully;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    setIsMessageModalOpen(true)  // Handle loading error gracefully;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  useEffect(() => {;
    if (error) {;
      toast({;

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
toast({;"
        title: "Authentication required",;"
        description: "Please sign in to hire this talent.",;"
        variant: "default"}),;'`
      navigate('/login', { state: { from: `/talent/${id}` } }),;
      return;
    }
    setIsHireModalOpen(true);
  };

  const handleMessageTalent = () => {;
    if (!isAuthenticated) {;
toast({;"
        title: "Authentication required",;"
        description: "Please sign in to message this talent.",;"
        variant: "default"}),;'`
      navigate('/login', { state: { from: `/talent/${id}` } }),;
      return;
    }
    setIsMessageModalOpen(true);
  };

return ("
    <div className="min-h-screen bg-zion-blue pb-12">;
      <TalentProfile;
        profile={profile} 

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />;
      <BackToDirectoryButton />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      {/* Sticky action buttons that appear when scrolling */}
      <StickyAction>;"
        <div className="p-2 flex gap-2">;
          <Button"
            size="sm""
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
            onClick={handleRequestHire}>;"
            <Handshake className="mr-2 h-4 w-4" />;
            Hire Now;
          </Button>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Button
            size="sm"
            variant="outline"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Button>
        </div>
      </StickyAction>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            onClick={handleMessageTalent}>;
            <MessageSquare className="mr-2 h-4 w-4" />;            Message;
=======

          <Button"
            size="sm""
            variant="outline""
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"

            onClick={handleMessageTalent}>;"
            <MessageSquare className="mr-2 h-4 w-4" />;
'
import React, { useState, useEffect } from './react';'
import { use_params, use_navigate } from './react-router-dom';'
import { TalentProfile } from '@/components / profile / TalentProfile';'
import { ProfileLoadingState } from '@/components / profile / ProfileLoadingState';'
import { ProfileErrorState } from '@/components / profile / ProfileErrorState';'
import { BackToDirectoryButton } from '@/components / profile / BackToDirectoryButton';'
import { useTalentProfile } from '@/hooks / useTalentProfile';'
import { HireRequestModal } from '@/components / profile / hire - request';'
import { useAuthStatus } from '@/hooks / talent';'
import { MessageTalentModal } from '@/components / messaging / MessageTalentModal';'
import { StickyAction } from '@/components / ui / sticky - action';'
import { Handshake, MessageSquare } from './lucide-react';'
import { Button } from '@/components / ui / button';'
import { use_auth } from '@/hooks / use_auth';'
import { UserProfile } from '@/types / auth';'
import { toast } from '@/hooks / use - toast';
export default /**;
 * TalentProfilePage - Function description;
 */
function TalentProfilePage() {}
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
const user_profile: UserProfile = user ? {'
    id: user.id || '','
    display_name: user.display_name || '','
    email: user.email || '', // Ensure email is always a string;'
    user_type: user.user_type || '',
    profile_complete: user.profile_complete || false,
    created_at: user.created_at || new Date ().toISOString (),
    updated_at: user.updated_at || new Date ().toISOString (),'
    role: user.role || '';
  } : {'
    id: user_details?.id || '','
    display_name: user_details?.name || '','
    email: user_details?.email || '', // Ensure email is always a string;'
    user_type: '', // Default empty string since user_details doesn't have this property;'
    profile_complete: false, // Default value since user_details doesn't have this property;'
    created_at: new Date ().toISOString (), // Default value since user_details doesn't have this property;'
    updated_at: new Date ().toISOString (), // Default value since user_details doesn't have this property;'
    role: '' // Default empty string since user_details doesn't have this property;
  }
;
  // Handle loading error gracefully;
useEffect (() => {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Error loading profile","
        description: "There was a problem loading this talent profile. Please try again.","
        variant: "destructive"});
    }
  }, [error]);
;
// Check condition;
if ( {) {}
  $2;
}
    return <ProfileLoadingState />;
  }
  // Check condition;
if ( {) {}
  $2;
}
    return <ProfileErrorState error={error} />;
  }
  const handleRequestHire = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Authentication required","
        description: "Please sign in to hire this talent.","
        variant: "default"}),'`
      navigate ('/login', { state: { from: `/talent/${id}` } }),
      return;
    }
    setIsHireModalOpen (true);
  }
;
const handleMessageTalent = () =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      toast ({"
        title: "Authentication required","
        description: "Please sign in to message this talent.","
        variant: "default"}),'`
      navigate ('/login', { state: { from: `/talent/${id}` } }),
      return;
    }
    setIsMessageModalOpen (true);
  }
;
return ("
    <div className="min - h-screen bg - zion - blue pb - 12">;
      <TalentProfile;
        profile={profile}
        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />;
      <BackToDirectoryButton />;
      {/* Sticky action buttons that appear when scrolling */}
<StickyAction>;"
        <div className="p - 2 flex gap - 2">;
          <Button;"
            size="sm";"
            className="bg - zion - purple text - white hover:bg - zion - purple - dark";
            on_click={handleRequestHire}
          >;"
            <Handshake className="mr - 2 h - 4 w - 4" />;
            Hire Now;
          </Button>;
          <Button;"
            size="sm";"
            variant="outline";"
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
            on_click={handleMessageTalent}
          >;"
            <MessageSquare className="mr - 2 h - 4 w - 4" />;

            Message;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </Button>;
        </div>;
<<<<<<< HEAD
      </StickyAction>;

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Request to Hire Modal */}
=======
      </StickyAction>;      {/* Request to Hire Modal */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </StickyAction>;      {/* Request to Hire Modal */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

      {/* Request to Hire Modal */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <HireRequestModal
=======
      {/* Request to Hire Modal */}
      <HireRequestModal;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
<<<<<<< HEAD
        userDetails={userProfile}
<<<<<<< HEAD
<<<<<<< HEAD
      />
      {/* Message Talent Modal */}
      <MessageTalentModal
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
user_details={user_profile}
      />;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Message Talent Modal */}
      <MessageTalentModal;
        is_open={isMessageModalOpen}
        on_close={() => setIsMessageModalOpen (false)}

    </div>);
}

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      />
      {/* Message Talent Modal */}
      <MessageTalentModal;
=======
=======
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      />
      {/* Message Talent Modal */}
      <MessageTalentModal
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
),; export default function TalentProfilePage () {}
  //Cast to specify the expected route param type since useParams may be untyped const {};
  id;
}= useParams () as {}
  id?: string;
};
const navigate = useNavigate ();
const {}
  profile, isLoading, error;
}= useTalentProfile (id);
const [isHireModalOpen, setIsHireModalOpen] = useState (false);
const [isMessageModalOpen, setIsMessageModalOpen] = useState (false);
const {}
  userDetails;
}= useAuthStatus ();
const {}
  isAuthenticated, user;
}= useAuth ();
//Create a compatible UserProfile from UserDetails or the authenticated user const userProfile: UserProfile = user ? {'
  id: user.id || '';'
displayName: user.displayName || '';'
email: user.email || '', //Ensure email is always a string userType: user.userType || '';
profileComplete: user.profileComplete || false;
createdAt: user.createdAt || new Date () .toISOString ();
updatedAt: user.updatedAt || new Date () .toISOString ();'
role: user.role || '' 
}: {'
  id: userDetails?.id || '';'
displayName: userDetails?.name || '';'
email: userDetails?.email || '', //Ensure email is always a string userType: '', //Default empty string since userDetails doesn't have this property profileComplete: false, //Default value since userDetails doesn't have this property createdAt: new Date () .toISOString (), //Default value since userDetails doesn't have this property updatedAt: new Date () .toISOString (), //Default value since userDetails doesn't have this property role: ''//Default empty string since userDetails doesn't have this property;
};
if (error) {}
  toast ({}
}
;

}, [error]);
return;
}setIsHireModalOpen (true) 
};
const handleMessageTalent = () => {}
  if (!isAuthenticated) {}
  toast ({}
  return;
}setIsMessageModalOpen (true) 
};
<TalentProfile profile= {}
  profile;
}onRequestHire= {}
  handleRequestHire;
}onMessageTalent= {}
  handleMessageTalent;
}/> <BackToDirectoryButton /> {}
  /* Sticky action buttons that appear when scrolling */ "
}<StickyAction> <div className="p-2 flex gap-2" > <Button > <Handshake className="mr-2 h-4 w-4" /> Hire Now </Button> <Button > <MessageSquare className="mr-2 h-4 w-4" /> Message </Button> </div> </StickyAction> {}
  /* Request to Hire Modal */ 
}<HireRequestModal talent= {}
  profile;
}isOpen= {}
  isHireModalOpen;
}onClose= {}
  () => setIsHireModalOpen (false) 
}userDetails= {}
  userProfile;
}/> {}
  /* Message Talent Modal */ 
}<MessageTalentModal talent= {}
  profile;
}isOpen= {}
  isMessageModalOpen;
}onClose= {}
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
profile 
}isOpen= {
  isMessageModalOpen 
}onClose= {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  () => setIsMessageModalOpen (false) 
}/> </div>) 
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        userDetails={userProfile}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

}/> </div>) "
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
