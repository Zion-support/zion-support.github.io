import React from "react";
import { ServiceProviderRegistrationForm } from "@/components/profile/ServiceProviderRegistrationForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function ServiceOnboarding() {
  const { user, isLoading } = useAuth();
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              Showcase your services to potential clients. Create a professional profile;
              to get discovered on the Zion Marketplace.;
            </p>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD


=======
          ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <ServiceProviderRegistrationForm />;
        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD

    </>);
}

=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
