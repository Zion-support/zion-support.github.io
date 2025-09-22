

import React from "react",
import { TalentOnboardingForm } from "@/components/profile/TalentOnboardingForm",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import React from "react";
import {TalentOnboardingForm} from "@/components/profile/TalentOnboardingForm";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
export default function TalentOnboarding() {;
const { user, isLoading } = useAuth();
  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;

  // If not authenticated, redirect to login
  if (!isLoading && !user) {
return <Navigate to="/login" replace />
  }
  return (
import React from "react",
import { TalentOnboardingForm } from "@/components/profile/TalentOnboardingForm",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAuth } from "@/hooks/useAuth";
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
import React from "react";"
import { TalentOnboardingForm } from "@/components/profile/TalentOnboardingForm";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { useAuth } from "@/hooks/useAuth";"
import { Navigate } from "react-router-dom";
export default function TalentOnboarding() {};
  const { user, isLoading } = useAuth();

  // If not authenticated, redirect to login;
  if (!isLoading && !user) {"
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Header />"
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">"
        <div className="container mx-auto px-4">"
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">"
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Talent Network;
            </h1>"
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Showcase your skills to top clients and employers. Create a;
              professional profile to get discovered for AI and tech projects on;
              the Zion Marketplace.
            </p>
          </div>

          <TalentOnboardingForm />
        </div>
      </div>
      <Footer />
    </>
)
}
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
<>;
      <Header />;
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">;
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Talent Network</h1>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
}
    return <Navigate to="/login" replace />;
  }
  return (
    <>;
      <Header />;"
      <div className="bg - zion - blue min - h-screen py - 8 md: py - 12">;"
        <div className="container mx - auto px - 4">;"
          <div className="max - w-4xl mx - auto text - center mb - 8 md:mb - 12">;"
            <h1 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">Join Our Talent Network</h1>;"
            <p className="text - zion - slate - light max - w-2xl mx - auto">;

  }
  return (
              Showcase your skills to top clients and employers. Create a professional profile;
              to get discovered for AI and tech projects on the Zion Marketplace.;
            </p>;
          </div>;

          <TalentOnboardingForm />;
  // If not authenticated, redirect to login
  if (!isLoading && !user) {
    return <Navigate to="/login" replace />
    return <Navigate to="/login" replace />;
    return <Navigate to="/login" replace />
  }
  return (
  }
return (          <TalentOnboardingForm />;
        </div>;
      </div>;
      <Footer />;
  return (          <TalentOnboardingForm />;
        </div>;
      </div>;
      <Footer />;

</>);
}
;
    </>;
  ); export default function TalentOnboarding () {}
  const {};
  user, isLoading;
}= useAuth ();
// If not authenticated, redirect to login if (!isLoading && !user) {}

  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;"
    return <Navigate to="/login" replace />;"
"

    <>
      <Header />
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">"
</div>"
        <div className="container mx-auto px-4">"
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">"
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">"
</h1>
            </h1>"
            <p className="text-zion-slate-light max-w-2xl mx-auto">"
</p>
          </div>

          <TalentOnboardingForm />

      <Footer />

    </>
  );
}"

    <>;
      <Header />;
      <div className="bg - zion - blue min - h-screen py - 8 md: py - 12">;"
        <div className="container mx - auto px - 4">;"
          <div className="max - w-4xl mx - auto text - center mb - 8 md:mb - 12">;"
            <h1 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">Join Our Talent Network</h1>;""
            <p className="text - zion - slate - light max - w-2xl mx - auto">;"
            </p>;
          </div>;
          <TalentOnboardingForm />;

      <Footer />;

    </>);
}

;
    </>;
  ); export default function TalentOnboarding () {
  const {
  // TODO: Implement
  user, isLoading;
}= useAuth ();
// If not authenticated, redirect to login if (!isLoading && !user) {
}
;

}
    </>;
  );
}
;

"
pr-12325
