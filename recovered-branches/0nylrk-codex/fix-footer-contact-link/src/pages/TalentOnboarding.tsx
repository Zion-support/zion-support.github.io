
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
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

>>>>>>> main
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { TalentOnboardingForm } from "@/components/profile/TalentOnboardingForm",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function TalentOnboarding() {
  const { user, isLoading } = useAuth();
=======
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
export default function TalentOnboarding() {
  const { user, isLoading } = useAuth(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // If not authenticated, redirect to login
  if (!isLoading && !user) {
    return <Navigate to="/login" replace />
  }
  return (
    <>
      <Header />
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Talent Network</h1>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Showcase your skills to top clients and employers. Create a professional profile
              to get discovered for AI and tech projects on the Zion Marketplace.
            </p>
          </div>
          <TalentOnboardingForm />
        </div>
      </div>
      <Footer />
    </>
  )
<<<<<<< HEAD
}
=======
=======

  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;

=======


  // If not authenticated, redirect to login
  if (!isLoading && !user) {
    return <Navigate to="/login" replace />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  return (

=======

>>>>>>> main
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
=======

>>>>>>> main
    <>;
      <Header />;
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">;
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Talent Network</h1>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
<<<<<<< HEAD
=======
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
>>>>>>> main
              Showcase your skills to top clients and employers. Create a professional profile;
              to get discovered for AI and tech projects on the Zion Marketplace.;
            </p>;
          </div>;
<<<<<<< HEAD
=======


>>>>>>> main
          <TalentOnboardingForm />;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
    </>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

    </>);
}

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
