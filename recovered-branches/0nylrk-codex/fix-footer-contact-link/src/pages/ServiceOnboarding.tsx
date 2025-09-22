<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

import React from "react",
import { ServiceProviderRegistrationForm } from "@/components/profile/ServiceProviderRegistrationForm",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from "react";
import {ServiceProviderRegistrationForm} from "@/components/profile/ServiceProviderRegistrationForm";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
export default function ServiceOnboarding() {;
const { user, isLoading } = useAuth();
<<<<<<< HEAD
  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  // If not authenticated, redirect to login
  if (!isLoading && !user) {
return <Navigate to="/login" replace />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  // If not authenticated, redirect to login
  if (!isLoading && !user) {
=======
import React from "react";"
import { ServiceProviderRegistrationForm } from "@/components/profile/ServiceProviderRegistrationForm";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { useAuth } from "@/hooks/useAuth";"
import { Navigate } from "react-router-dom";
export default function ServiceOnboarding() {};
  const { user, isLoading } = useAuth();

  // If not authenticated, redirect to login;
  if (!isLoading && !user) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Header />"
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">"
        <div className="container mx-auto px-4">"
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">"
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Service Provider Network;
            </h1>"
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Showcase your services to potential clients. Create a professional;
              profile to get discovered on the Zion Marketplace.
            </p>
          </div>

          <ServiceProviderRegistrationForm />
        </div>
      </div>
      <Footer />
    </>
)
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
    return <Navigate to="/login" replace />;
  }
  return (
    <>;
      <Header />;"
      <div className="bg - zion - blue min - h-screen py - 8 md: py - 12">;"
        <div className="container mx - auto px - 4">;"
          <div className="max - w-4xl mx - auto text - center mb - 8 md:mb - 12">;"
            <h1 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">Join Our Service Provider Network</h1>;"
            <p className="text - zion - slate - light max - w-2xl mx - auto">;

  }
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              Showcase your services to potential clients. Create a professional profile;
              to get discovered on the Zion Marketplace.;
            </p>;
          </div>;

          <ServiceProviderRegistrationForm />;
=======
=======
  // If not authenticated, redirect to login
  if (!isLoading && !user) {
    return <Navigate to="/login" replace />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    return <Navigate to="/login" replace />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    return <Navigate to="/login" replace />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
  return (
  }
return (          <ServiceProviderRegistrationForm />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        </div>;
      </div>;
      <Footer />;
  return (          <ServiceProviderRegistrationForm />;
        </div>;
      </div>;
      <Footer />;

</>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    </>;
  ); export default function ServiceOnboarding () {}
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

          <ServiceProviderRegistrationForm />

      <Footer />

    </>
  );
}"

    <>;
      <Header />;
      <div className="bg - zion - blue min - h-screen py - 8 md: py - 12">;"
        <div className="container mx - auto px - 4">;"
          <div className="max - w-4xl mx - auto text - center mb - 8 md:mb - 12">;"
            <h1 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">Join Our Service Provider Network</h1>;""
            <p className="text - zion - slate - light max - w-2xl mx - auto">;"
            </p>;
          </div>;
          <ServiceProviderRegistrationForm />;

      <Footer />;

    </>);
}

;
    </>;
  ); export default function ServiceOnboarding () {
  const {
  // TODO: Implement
  user, isLoading;
}= useAuth ();
// If not authenticated, redirect to login if (!isLoading && !user) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
;

}
    </>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
