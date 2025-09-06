import React from "react";
import {ServiceProviderRegistrationForm} from "@/components/profile/ServiceProviderRegistrationForm";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
export default function ServiceOnboarding() {;
  const { user, isLoading } = useAuth();
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

  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;



  // If not authenticated, redirect to login
  if (!isLoading && !user) {
    return <Navigate to="/login" replace />
  }
  return (
  }
  return (
  }
  return (
              Showcase your services to potential clients. Create a professional profile;
              to get discovered on the Zion Marketplace.;
            </p>;
          </div>;
          <ServiceProviderRegistrationForm />;
        </div>;
      </div>;
      <Footer />;
    </>;
  ); export default function ServiceOnboarding () {
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
