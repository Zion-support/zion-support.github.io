import React from "react";
<<<<<<< HEAD
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
=======
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm";
import { useAuth } from "@/hooks/useAuth";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import { Navigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
export default function PublishProduct() {
  const { isAuthenticated, isLoading } = useAuth();
<<<<<<< HEAD

  // Show loading while checking authentication
  if (isLoading) {
=======
<<<<<<< HEAD
import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
export default function PublishProduct() {
  const { isAuthenticated, isLoading } = useAuth(),
  

  // Show loading while checking authentication;
  if (isLoading) {;



  // Show loading while checking authentication
  if (isLoading) {
=======
<<<<<<< HEAD

  // Show loading while checking authentication
  if (isLoading) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

  // Show loading while checking authentication
  if (isLoading) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
      </div>
    );
  }
<<<<<<< HEAD
          ;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md:p-8">;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">;
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: "/publish" }} replace />;
  }


  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;

  }
  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      <SEO
        title="Publish Your Product"
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."
        keywords="publish product, sell online, digital marketplace, AI tools, tech services"
<<<<<<< HEAD
=======
      />
      <Header />
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">
            Publish on Zion
          </h1>
          <p className="text-zion-slate mb-8">
            Share your products, services, or digital assets with the Zion
            community.
          </p>

          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">
            <ProductSubmissionForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <ProductSubmissionForm />;
          </div>;
        </div>;
      </main>;
      <Footer />;




}
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
    </div>);
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    </div>);
}
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
}
;
    </div>);
}
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
