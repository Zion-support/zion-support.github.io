
<<<<<<< HEAD
import React from "react",
import { TalentOnboardingForm } from "@/components/profile/TalentOnboardingForm",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function TalentOnboarding() {
  const { user, isLoading } = useAuth();
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {TalentOnboardingForm} from "@/components/profile/TalentOnboardingForm";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
export default function TalentOnboarding() {;
  const { user, isLoading } = useAuth();
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

  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;

=======


>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
}
              Showcase your skills to top clients and employers. Create a professional profile;
              to get discovered for AI and tech projects on the Zion Marketplace.;
            </p>;
          </div>;

          <TalentOnboardingForm />;
        </div>;
      </div>;
      <Footer />;
    </>;
  );
}
    </>);
}
<<<<<<< HEAD
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
