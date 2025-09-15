
<<<<<<< HEAD






import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {ProductSubmissionForm} from "@/components/ProductSubmissionForm";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
import {SEO} from "@/components/SEO";
export default function PublishProduct() {;
  const { isAuthenticated, isLoading } = useAuth();

import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
export default function PublishProduct() {
  const { isAuthenticated, isLoading } = useAuth();
import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
export default function PublishProduct() {
  const { isAuthenticated, isLoading } = useAuth(),
  

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">;
          Loading...;
        </div>;
      </div>;
    );
  }


  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;

  }
  return (

    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO
        title="Publish Your Product"
=======
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { SEO } from "@/components/SEO";

export default function PublishProduct() {
  const { isAuthenticated, isLoading } = useAuth();
  
  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">
          Loading...
        </div>
      </div>
    );
  }
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO 
        title="Publish Your Product" 
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">
=======
          
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md:p-8">
>>>>>>> origin/auto/autonomy-17186719616
            <ProductSubmissionForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
<<<<<<< HEAD
  )




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

    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO
        title="Publish Your Product"
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."
        keywords="publish product, sell online, digital marketplace, AI tools, tech services"
      />;
      <Header />;
      <main className="flex-1 p-6 md:p-10">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-3xl font-bold text-white mb-2">Publish on Zion</h1>;
          <p className="text-zion-slate mb-8">;
            Share your products, services, or digital assets with the Zion community.;
          </p>;

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

            <ProductSubmissionForm />;
          </div>;
        </div>;
      </main>;
      <Footer />;









>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


}
;

=======
  );
}
>>>>>>> origin/auto/autonomy-17186719616
