
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
  const { profile, isLoading, error } = useTalentProfile(id);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
  const { isAuthenticated, user } = useAuth();import React, { useState, useEffect } from "react",
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
  const { isAuthenticated, user } = useAuth();

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
  const { isAuthenticated, user } = useAuth(),  // Handle loading error gracefully
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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



  }
  if (error |!profile) {}

=======
  }

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

  }
  if (error |!profile) {}
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return <ProfileErrorState error={error} />
  }  const handleMessageTalent = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required"
        description: "Please sign in to message this talent."
        variant: "default"})

<<<<<<< HEAD
      navigate('/login', { state: { from: `/talent/${id}` } })
      return
    }
    setIsMessageModalOpen(true)  // Handle loading error gracefully;
  useEffect(() => {;
    if (error) {;
      toast({;
        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />;
      <BackToDirectoryButton />;
          <Button
            size="sm"
            variant="outline"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
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