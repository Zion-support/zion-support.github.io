
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

  // Show loading while checking authentication
  if (isLoading) {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Show loading while checking authentication;
  if (isLoading) {;

=======


  // Show loading while checking authentication
  if (isLoading) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">;
          Loading...;
        </div>;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
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



}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;

  }
  return (

=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;
  }
  return (
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO
        title="Publish Your Product" 
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."
        keywords="publish product, sell online, digital marketplace, AI tools, tech services"
<<<<<<< HEAD
<<<<<<< HEAD

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
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO;
        title="Publish Your Product";
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals.";
        keywords="publish product, sell online, digital marketplace, AI tools, tech services";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          ;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md:p-8">;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <ProductSubmissionForm />;
          </div>;
        </div>;
      </main>;
      <Footer />;




<<<<<<< HEAD
<<<<<<< HEAD
}
    </div>);
}
    </div>);
}
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
