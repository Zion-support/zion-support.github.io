<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
<<<<<<< HEAD

<<<<<<< HEAD
  // Show loading while checking authentication;
  if (isLoading) {;

=======


  // Show loading while checking authentication
  if (isLoading) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

  // Show loading while checking authentication
  if (isLoading) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">;
          Loading...;
        </div>;
      </div>;
    );
  }
<<<<<<< HEAD


  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;

  }
  return (

=======


=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
  
<<<<<<< HEAD
=======

  // Show loading while checking authentication;
  if (isLoading) {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm",
import { useAuth } from "@/hooks/useAuth",

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
<<<<<<< HEAD
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/publish' }} replace />
  }
  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

=======
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;
  }
  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className="min-h-screen flex flex-col bg-zion-blue">;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      <SEO
        title="Publish Your Product"
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."
        keywords="publish product, sell online, digital marketplace, AI tools, tech services"
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO;
        title="Publish Your Product";
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals.";
        keywords="publish product, sell online, digital marketplace, AI tools, tech services";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      />;
      <Header />;
      <main className="flex-1 p-6 md:p-10">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-3xl font-bold text-white mb-2">Publish on Zion</h1>;
          <p className="text-zion-slate mb-8">;
            Share your products, services, or digital assets with the Zion community.;
          </p>;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

}
;
<<<<<<< HEAD
=======
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
=======
          ;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md:p-8">;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <ProductSubmissionForm />;
          </div>;
        </div>;
      </main>;
      <Footer />;
<<<<<<< HEAD
    </div>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
;
    </div>);
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
