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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react";

<<<<<<< HEAD
=======
  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;

<<<<<<< HEAD
  // If not authenticated, redirect to login
  if (!isLoading && !user) {

import React from "react",
import { ServiceProviderRegistrationForm } from "@/components/profile/ServiceProviderRegistrationForm",
import { Header } from "@/components/Header",

import { useAuth } from "@/hooks/useAuth";

import { Navigate } from "react-router-dom";
export default function ServiceOnboarding() {
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  // If not authenticated, redirect to login
  if (!isLoading && !user) {
    return <Navigate to="/login" replace />
<<<<<<< HEAD
  }
  return (
import React from "react",
import { ServiceProviderRegistrationForm } from "@/components/profile/ServiceProviderRegistrationForm",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function ServiceOnboarding() {
  const { user, isLoading } = useAuth();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
export default function ServiceOnboarding() {
  const { user, isLoading } = useAuth(),

<<<<<<< HEAD
  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;
    return <Navigate to="/login" replace />;

<<<<<<< HEAD
import { Footer } from "@/components/Footer",
import { useAuth } from "@/hooks/useAuth";
export default function ServiceOnboarding() {
  const { user, isLoading } = useAuth($2);
=======
>>>>>>> origin/chore/fix-lint-and-merge
  // If not authenticated, redirect to login
  if (!isLoading && !user) {

    return <Navigate to="/login" replace />;
=======
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
  }
  return (
    <>;
      <Header />;
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">;

<<<<<<< HEAD
=======
import React from "react",;
import { ServiceProviderRegistrationForm } from "@/components/profile/ServiceProviderRegistrationForm",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
;
export default function ServiceOnboarding() {;
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <>;
      <Header />;
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">;
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Service Provider Network</h1>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
import React from './react';
import { ServiceProviderRegistrationForm } from '@/components / profile / ServiceProviderRegistrationForm';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { use_auth } from '@/hooks / use_auth';
import { Navigate } from './react-router-dom';
export default /**
 * ServiceOnboarding - Function description
 */
function ServiceOnboarding() {
  const { user, is_loading } = use_auth ();
;
  // If not authenticated, redirect to login;
  // Check condition
if ( {) {
  $2
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

  }
  return (

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              Showcase your services to potential clients. Create a professional profile;
              to get discovered on the Zion Marketplace.;
            </p>;
          </div>;
<<<<<<< HEAD
          ;
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <ServiceProviderRegistrationForm />;

  }
  return (
  }

        </div>;
      </div>;
      <Footer />;
<<<<<<< HEAD
  return (          <ServiceProviderRegistrationForm />;
        </div>;
      </div>;
      <Footer />;

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
=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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

;

<<<<<<< HEAD
}
    </>;
  );
}
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
