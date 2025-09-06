
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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React from "react";
import {ServiceProviderRegistrationForm} from "@/components/profile/ServiceProviderRegistrationForm";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
export default function ServiceOnboarding() {;
  const { user, isLoading } = useAuth();

<<<<<<< HEAD
import React from "react",
import { ServiceProviderRegistrationForm } from "@/components/profile/ServiceProviderRegistrationForm",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function ServiceOnboarding() {
  const { user, isLoading } = useAuth();
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
export default function ServiceOnboarding() {
  const { user, isLoading } = useAuth(),
=======
  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  // If not authenticated, redirect to login
  if (!isLoading && !user) {
    return <Navigate to="/login" replace />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  return (
    <>
      <Header />
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Service Provider Network</h1>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Showcase your services to potential clients. Create a professional profile
              to get discovered on the Zion Marketplace.
            </p>
          </div>
          <ServiceProviderRegistrationForm />
        </div>
      </div>
      <Footer />
    </>
  )
}
import React from "react",;
import { ServiceProviderRegistrationForm } from "@/components/profile/ServiceProviderRegistrationForm",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
export default function ServiceOnboarding() {;
  const { user, isLoading } = useAuth();
  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;
  }
;
  return (;

    <>;
      <Header />;
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">;
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Service Provider Network</h1>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;

              Showcase your services to potential clients. Create a professional profile;
              to get discovered on the Zion Marketplace.;
            </p>;
          </div>;


          <ServiceProviderRegistrationForm />;
        </div>;
      </div>;
      <Footer />;

    </>);
}
<<<<<<< HEAD
;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
