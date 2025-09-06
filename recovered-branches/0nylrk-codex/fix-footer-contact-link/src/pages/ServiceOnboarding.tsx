import React from "react";
<<<<<<< HEAD
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
=======
import { ServiceProviderRegistrationForm } from "@/components/profile/ServiceProviderRegistrationForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function ServiceOnboarding() {
  const { user, isLoading } = useAuth();
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
export default function ServiceOnboarding() {
  const { user, isLoading } = useAuth(),
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

<<<<<<< HEAD
  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;

<<<<<<< HEAD
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  // If not authenticated, redirect to login
  if (!isLoading && !user) {
<<<<<<< HEAD
    return <Navigate to="/login" replace />
  }
  return (
  }
  return (
=======
    return <Navigate to="/login" replace />;
  }
  return (
    <>
      <Header />
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Service Provider Network
            </h1>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Showcase your services to potential clients. Create a professional
              profile to get discovered on the Zion Marketplace.
            </p>
          </div>

          <ServiceProviderRegistrationForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
    return <Navigate to="/login" replace />;
  }
  return (
    <>;
      <Header />;
      <div className="bg - zion - blue min - h-screen py - 8 md: py - 12">;
        <div className="container mx - auto px - 4">;
          <div className="max - w-4xl mx - auto text - center mb - 8 md:mb - 12">;
            <h1 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">Join Our Service Provider Network</h1>;
            <p className="text - zion - slate - light max - w-2xl mx - auto">;
  }
  return (
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              Showcase your services to potential clients. Create a professional profile;
              to get discovered on the Zion Marketplace.;
            </p>;
          </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
          ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          <ServiceProviderRegistrationForm />;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    </>);
}

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
