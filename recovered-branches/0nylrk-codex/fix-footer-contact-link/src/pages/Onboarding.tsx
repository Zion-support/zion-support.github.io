
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "@/hooks/useAuth";
import {Button} from "@/components/ui/button";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {UserTypeSelection} from "@/components/onboarding/UserTypeSelection";
import {ProfileSetup} from "@/components/onboarding/ProfileSetup";
import {Steps, Step} from "@/components/ui/steps";
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export default function Onboarding() {;
import { useState } from "react",
import { useNavigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { Button } from "@/components/ui/button",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { UserTypeSelection } from "@/components/onboarding/UserTypeSelection",
import { ProfileSetup } from "@/components/onboarding/ProfileSetup",
import { Steps, Step } from "@/components/ui/steps",
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
export default function Onboarding() {
  const { user, updateProfile, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);

  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);
  const navigate = useNavigate();

  // Convert our user types to match what's expected in the database
  const mapUserTypeToDatabase = (type: "serviceProvider" | "talent" | "client") => {
    switch (type) {
      case "serviceProvider": return "creator",
      case "talent":
        return "jobSeeker",
      case "client":
        return "employer"
      default:
        return "buyer"
    }
  }
  const handleUserTypeSelect = (type: "serviceProvider" | "talent" | "client") => {
    setUserType(type);
    // Direct to specific registration page based on user type
    if (type === "serviceProvider") {
      navigate('/service-onboarding')
      return
    } else if (type === "talent") {
    try {
      await updateProfile({
        id: user.id
        displayName: data.displayName
        bio: data.bio, // This is now valid since we added bio to UserDetails
        userType: dbUserType
        headline: data.headline
        profileComplete: true
      // Update onboarding milestone
      await supabase.rpc('update_onboarding_milestone', {
        _user_id: user.id
        _milestone: 'profile_completed'
        _status: true
      toast({
        title: 'Profile completed!'
        description: 'Your profile has been set up successfully.'})
      // Get the appropriate dashboard route based on user type
      // Redirect to dashboard
      navigate(dashboardRoute)
    } catch (error) {
      console.error('Error updating profile:', error),
      toast({
        title: 'Error'
        description: 'There was a problem updating your profile. Please try again.'
        variant: 'destructive'})
    }
  const steps = [
    { label: "Select Role", description: "Choose how you'll use the platform" }
    { label: "Create Profile", description: "Tell us about yourself" }]
  if (!user) {
    return null

    const dbUserType = mapUserTypeToDatabase(userType);

    try {;
      await updateProfile({ ;
        id: user && user.id,;
        displayName: data && data.displayName,;
        bio: data && data.bio, // This is now valid since we added bio to UserDetails;
        userType: dbUserType,;
        headline: data && data.headline,;
        profileComplete: true;
      });
      // Update onboarding milestone;
      await supabase && supabase.rpc('update_onboarding_milestone', {;
        _user_id: user && user.id,;
        _milestone: 'profile_completed',;
        _status: true;
      });
      // Get the appropriate dashboard route based on user type;
      const dashboardRoute = userType === "client" ;
        ? "/client-dashboard" ;
        : "/talent-dashboard";
    } catch (error) {;
      console && console.error('Error updating profile:', error);
      toast({;
        title: 'Error',;
        description: 'There was a problem updating your profile. Please try again.',;
        variant: 'destructive'});
    }
  };
  if (!user) {;
    navigate('/login');
    return null;
  }
  return (
                <Step
                  key={index}
                  status={
                    currentStep> index;
                      ? "complete";
            </Steps>;
          </div>;
                      : currentStep === index;
                      ? "current";
                      : "incomplete";
                  }
                  label={step && step.label}
                  description={step && step.description}
                />;
              ))}
                <Button
                  variant="outline"
                  className="w-full border-zion-blue-light text-white hover:bg-zion-blue-light"
                  onClick={() => setCurrentStep(0)}
                >;
                  Back to Role Selection;
                </Button>;
              </div>)}
          </div>;
        </div>;
      </div>;
      <Footer />;
}
;
