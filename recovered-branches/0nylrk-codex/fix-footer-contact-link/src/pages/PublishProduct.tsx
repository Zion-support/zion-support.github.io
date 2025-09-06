<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/PublishProduct.tsx

<<<<<<< HEAD

import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm",
import { useAuth } from "@/hooks/useAuth",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/PublishProduct.tsx
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {ProductSubmissionForm} from "@/components/ProductSubmissionForm";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
import {SEO} from "@/components/SEO";
export default function PublishProduct() {;
  const { isAuthenticated, isLoading } = useAuth();
<<<<<<< HEAD
  // Show loading while checking authentication;
  if (isLoading) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/PublishProduct.tsx

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  // Show loading while checking authentication
  if (isLoading) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/PublishProduct.tsx
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">;
          Loading...;
        </div>;
      </div>;
    );
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/PublishProduct.tsx


  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;

  }
  return (
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
import { Navigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
export default function PublishProduct() {
  const { isAuthenticated, isLoading } = useAuth();
=======
import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
export default function PublishProduct() {
  const { isAuthenticated, isLoading } = useAuth(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">
          Loading...
        </div>
      </div>
    )
  }
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/publish' }} replace />
  }
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO
        title="Publish Your Product"
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."
        keywords="publish product, sell online, digital marketplace, AI tools, tech services"
      />
      <Header />
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Publish on Zion</h1>
          <p className="text-zion-slate mb-8">
            Share your products, services, or digital assets with the Zion community.
          </p>
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">
            <ProductSubmissionForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
<<<<<<< HEAD

=======

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
export default function PublishProduct() {;
  const { isAuthenticated, isLoading } = useAuth();
  // Show loading while checking authentication;
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">;
          Loading...;
        </div>;
      </div>;
    );
  }
;
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;
  }
;
  return (;
<<<<<<< HEAD

========
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;
  }
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/PublishProduct.tsx
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO
        title="Publish Your Product" 
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."
        keywords="publish product, sell online, digital marketplace, AI tools, tech services"
=======

import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
;
export default function PublishProduct() {;
  const { isAuthenticated, isLoading } = useAuth(),;
  ;
  // Show loading while checking authentication;
  if (isLoading) {;
    return (;
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">;
          Loading...;
        </div>;
      </div>;
    ),;
  }
  ;
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from:'/publish' }} replace />,;
  }
;
  return (;
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO ;
        title="Publish Your Product" ;
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals.";
        keywords="publish product, sell online, digital marketplace, AI tools, tech services";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO;
        title="Publish Your Product";
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals.";
        keywords="publish product, sell online, digital marketplace, AI tools, tech services";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />;
      <Header />;
      <main className="flex-1 p-6 md:p-10">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-3xl font-bold text-white mb-2">Publish on Zion</h1>;
          <p className="text-zion-slate mb-8">;
            Share your products, services, or digital assets with the Zion community.;
          </p>;
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">;
import React from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { ProductSubmissionForm } from '@/components / ProductSubmissionForm';
import { use_auth } from '@/hooks / use_auth';
import { Navigate } from './react-router-dom';
import { SEO } from '@/components / SEO';
export default /**
 * PublishProduct - Function description
 */
function PublishProduct() {
  const { is_authenticated, is_loading } = use_auth ();
;
  // Show loading while checking authentication;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center min - h-screen bg - zion - blue">;
        <div className="animate - pulse text - zion - purple text - lg">;
          Loading...;
        </div>;
      </div>);
  }
  // Redirect to login if not authenticated;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;
  }
  return (
    <div className="min - h-screen flex flex - col bg - zion - blue">;
      <SEO;
        title="Publish Your Product";
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals.";
        keywords="publish product, sell online, digital marketplace, AI tools, tech services";
      />;
      <Header />;
      <main className="flex - 1 p - 6 md:p - 10">;
        <div className="max - w-4xl mx - auto">;
          <h1 className="text - 3xl font - bold text - white mb - 2">Publish on Zion</h1>;
          <p className="text - zion - slate mb - 8">;
            Share your products, services, or digital assets with the Zion community.;
          </p>;
          <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 md: p - 8">;
=======
          ;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md:p-8">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <ProductSubmissionForm />;
          </div>;
        </div>;
      </main>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/PublishProduct.tsx
    </div>;
  );

}
;

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </div>);
}
=======
    </div>;
  );}
 export default function PublishProduct () {
  const {
  isAuthenticated, isLoading 
}= useAuth ();
//Show loading while checking authentication if (isLoading) {
  return (<div className="flex justify-center items-center min-h-screen bg-zion-blue" > <div className="animate-pulse text-zion-purple text-lg" > Loading... </div> </div>) 
}//Redirect to login if not authenticated if (!isAuthenticated) {
  
}return (<div className="min-h-screen flex flex-col bg-zion-blue" > <SEO title="Publish Your Product" description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals." keywords="publish product, sell online, digital marketplace, AI tools, tech services" /> <Header /> <main className="flex-1 p-6 md:p-10" > <div className="max-w-4xl mx-auto" > <h1 className="text-3xl font-bold text-white mb-2" >Publish on Zion</h1> <p className="text-zion-slate mb-8" > Share your products, services, or digital assets with the Zion community. </p> <ProductSubmissionForm /> </div> </div> </main> <Footer /> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/PublishProduct.tsx
=======
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
