<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

import React from "react",
import { TalentOnboardingForm } from "@/components/profile/TalentOnboardingForm",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
=======
<<<<<<< HEAD
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import {TalentOnboardingForm} from "@/components/profile/TalentOnboardingForm";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
export default function TalentOnboarding() {;
  const { user, isLoading } = useAuth();
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;

=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  // If not authenticated, redirect to login
  if (!isLoading && !user) {
    return <Navigate to="/login" replace />
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  return (

=======

=======
  }
  return (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",
import { TalentOnboardingForm } from "@/components/profile/TalentOnboardingForm",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
=======
import React from "react";
import { TalentOnboardingForm } from "@/components/profile/TalentOnboardingForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function TalentOnboarding() {
  const { user, isLoading } = useAuth();
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
export default function TalentOnboarding() {
  const { user, isLoading } = useAuth(),
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

<<<<<<< HEAD
  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;

=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  // If not authenticated, redirect to login
  if (!isLoading && !user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Header />
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Talent Network
            </h1>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Showcase your skills to top clients and employers. Create a
              professional profile to get discovered for AI and tech projects on
              the Zion Marketplace.
            </p>
          </div>

          <TalentOnboardingForm />
        </div>
      </div>
      <Footer />
    </>
<<<<<<< HEAD
  )
<<<<<<< HEAD
=======
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",;
import { TalentOnboardingForm } from "@/components/profile/TalentOnboardingForm",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
export default function TalentOnboarding() {;
  const { user, isLoading } = useAuth();
  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;
  }
;
  return (;
<<<<<<< HEAD

    <>;
      <Header />;
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">;
=======
  }
  return (
    <>;
      <Header />;
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">;

import React from "react",;
import { TalentOnboardingForm } from "@/components/profile/TalentOnboardingForm",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
;
export default function TalentOnboarding() {;
  const { user, isLoading } = useAuth(),;
;
  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />,;
  }
;
  return (;
    <>;
      <Header />;
      <div className="bg-zion-blue min-h-screen py-8 md:py-12">;
    <>;
      <Header />;
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">;
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Talent Network</h1>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
import React from './react';
import { TalentOnboardingForm } from '@/components / profile / TalentOnboardingForm';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { use_auth } from '@/hooks / use_auth';
import { Navigate } from './react-router-dom';
export default /**
 * TalentOnboarding - Function description
 */
function TalentOnboarding() {
  const { user, is_loading } = use_auth ();
;
  // If not authenticated, redirect to login;
  // Check condition
if ( {) {
  $2
=======
  );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
    return <Navigate to="/login" replace />;
  }
  return (
    <>;
      <Header />;
      <div className="bg - zion - blue min - h-screen py - 8 md: py - 12">;
        <div className="container mx - auto px - 4">;
          <div className="max - w-4xl mx - auto text - center mb - 8 md:mb - 12">;
            <h1 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">Join Our Talent Network</h1>;
            <p className="text - zion - slate - light max - w-2xl mx - auto">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              Showcase your skills to top clients and employers. Create a professional profile;
              to get discovered for AI and tech projects on the Zion Marketplace.;
            </p>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD


=======
          ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <TalentOnboardingForm />;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD

    </>);
}
<<<<<<< HEAD
;
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
    </>;
  ); export default function TalentOnboarding () {
  const {
  user, isLoading 
}= useAuth ();
// If not authenticated, redirect to login if (!isLoading && !user) {
  
}
;

}
    </>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
