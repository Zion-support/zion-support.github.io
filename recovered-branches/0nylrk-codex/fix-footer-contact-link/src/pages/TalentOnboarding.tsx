import React from "react";
import {TalentOnboardingForm} from "@/components/profile/TalentOnboardingForm";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
export default function TalentOnboarding() {;
  const { user, isLoading } = useAuth();
import React from "react",
import { TalentOnboardingForm } from "@/components/profile/TalentOnboardingForm",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function TalentOnboarding() {
  const { user, isLoading } = useAuth();
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
export default function TalentOnboarding() {
  const { user, isLoading } = useAuth(),
  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;

  // If not authenticated, redirect to login
  if (!isLoading && !user) {
    return <Navigate to="/login" replace />
  }
  return (
  }
  return (          <TalentOnboardingForm />;
        </div>;
      </div>;
      <Footer />;

    </>);
}
