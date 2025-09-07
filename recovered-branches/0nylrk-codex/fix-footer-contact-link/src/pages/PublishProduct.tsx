<<<<<<< HEAD
import React from "react";

import { SEO } from "@/components/SEO";
export default function PublishProduct() {};
  const { isAuthenticated, isLoading } = useAuth();

import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
export default function PublishProduct() {
=======
<<<<<<< HEAD
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
export default function PublishProduct() {
  const { isAuthenticated, isLoading } = useAuth($2);
  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">
          Loading...
        </div>
=======
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

import { SEO } from "@/components/SEO";
export default function PublishProduct() {};
  const { isAuthenticated, isLoading } = useAuth();

<<<<<<< HEAD
import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
export default function PublishProduct() {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
  }
import { Navigate } from "react-router-dom","
import { SEO } from "@/components/SEO","
export default function PublishProduct() {
}
const { isAuthenticated, isLoading } = useAuth(),;
=======
  const { isAuthenticated, isLoading } = useAuth(),

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

  // Show loading while checking authentication
  if (isLoading) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  // Show loading while checking authentication;
  if (isLoading) {;

  // Show loading while checking authentication
  if (isLoading) {

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">

        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>
<<<<<<< HEAD
    )
  }
<<<<<<< HEAD
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/publish' }} replace />
  }
=======
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer",;"
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Navigate } from "react-router-dom",;"
import { SEO } from "@/components/SEO",;"
export default function PublishProduct() {;
  }
  // Show loading while checking authentication;
  if (isLoading) {;
    }
    return (;
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;"
        <div className="animate-pulse text-zion-purple text-lg">;"
=======
    );
  }

;
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;

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

import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm",
import { useAuth } from "@/hooks/useAuth",

  // Show loading while checking authentication
  if (isLoading) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">;
>>>>>>> origin/chore/fix-lint-and-merge
          Loading...;
        </div>;
      </div>;
    );
  }
<<<<<<< HEAD

    <div className="min-h-screen flex flex-col bg-zion-blue">

;
  return (;

    <div className="min-h-screen flex flex-col bg-zion-blue">;      <SEO

=======
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
>>>>>>> merged-prs-20250907-203621
  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        title="Publish Your Product"
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."
        keywords="publish product, sell online, digital marketplace, AI tools, tech services"
      />
      <Header />
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
<<<<<<< HEAD
          <h1 className="text-3xl font-bold text-white mb-2">
            Publish on Zion
          </h1>
          <p className="text-zion-slate mb-8">
            Share your products, services, or digital assets with the Zion
            community.
          </p>

          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">
            <ProductSubmissionForm />

import React from "react";""
import { Header } from "@/components/Header";""
import { Footer } from "@/components/Footer";""
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm";""
import { useAuth } from "@/hooks/useAuth";""
import { Navigate } from "react-router-dom";""
import { SEO } from "@/components/SEO";"
export default function PublishProduct() {
  const { isAuthenticated, isLoading } = useAuth();

  // Show loading while checking authentication;
  if (isLoading) {

  // Show loading while checking authentication;
  if (isLoading) {
    return ("
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">"
</div>"
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>"
      </div>"
    return <Navigate to="/login" state={{ from: "/publish" }} replace />;"
</Navigate>"
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;'
</Navigate>'
    <div className="min-h-screen flex flex-col bg-zion-blue">"
</div>
      <SEO;"
        title="Publish Your Product"""
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."""
        keywords="publish product, sell online, digital marketplace, AI tools, tech services""

      />
</SEO>
      <Header />

</Header>"
      <main className="flex-1 p-6 md:p-10">"
</main>"
        <div className="max-w-4xl mx-auto">"
</div>"
          <h1 className="text-3xl font-bold text-white mb-2">"
</h1>
          </h1>"
          <p className="text-zion-slate mb-8">"
</p>
          </p>
"
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">"
</div>

            <ProductSubmissionForm />
</ProductSubmissionForm>
          </div>
        </div>
      </main>
      <Footer />
    </div>

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

  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;

    <div className="min-h-screen flex flex-col bg-zion-blue">;

      <SEO
        title="Publish Your Product"
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."
        keywords="publish product, sell online, digital marketplace, AI tools, tech services"

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
=======
          <h1 className="text-3xl font-bold text-white mb-2">Publish on Zion</h1>
          <p className="text-zion-slate mb-8">
            Share your products, services, or digital assets with the Zion community.
          </p>
<<<<<<< HEAD
          
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}
}
;
=======



}
=======

    <div className="min-h-screen flex flex-col bg-zion-blue">

;
  return (;

    <div className="min-h-screen flex flex-col bg-zion-blue">;      <SEO

        title="Publish Your Product"
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."
        keywords="publish product, sell online, digital marketplace, AI tools, tech services"
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

import React from "react";""
import { Header } from "@/components/Header";""
import { Footer } from "@/components/Footer";""
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm";""
import { useAuth } from "@/hooks/useAuth";""
import { Navigate } from "react-router-dom";""
import { SEO } from "@/components/SEO";"
export default function PublishProduct() {
  const { isAuthenticated, isLoading } = useAuth();

  // Show loading while checking authentication;
  if (isLoading) {

  // Show loading while checking authentication;
  if (isLoading) {
    return ("
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">"
</div>"
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>"
      </div>"
    return <Navigate to="/login" state={{ from: "/publish" }} replace />;"
</Navigate>"
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;'
</Navigate>'
    <div className="min-h-screen flex flex-col bg-zion-blue">"
</div>
      <SEO;"
        title="Publish Your Product"""
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."""
        keywords="publish product, sell online, digital marketplace, AI tools, tech services""

      />
</SEO>
      <Header />

</Header>"
      <main className="flex-1 p-6 md:p-10">"
</main>"
        <div className="max-w-4xl mx-auto">"
</div>"
          <h1 className="text-3xl font-bold text-white mb-2">"
</h1>
          </h1>"
          <p className="text-zion-slate mb-8">"
</p>
          </p>
"
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">"
</div>

            <ProductSubmissionForm />
</ProductSubmissionForm>
          </div>
        </div>
      </main>
      <Footer />
    </div>

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;
<<<<<<< HEAD
=======
  }
;
  return (;
<<<<<<< HEAD
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;
  }
  return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="min-h-screen flex flex-col bg-zion-blue">;

      <SEO
        title="Publish Your Product"
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."
        keywords="publish product, sell online, digital marketplace, AI tools, tech services"
<<<<<<< HEAD
=======
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
      />;
      <Header />;
      <main className="flex-1 p-6 md:p-10">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-3xl font-bold text-white mb-2">Publish on Zion</h1>;
          <p className="text-zion-slate mb-8">;
            Share your products, services, or digital assets with the Zion community.;
          </p>;
<<<<<<< HEAD
          ;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md:p-8">;
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  }
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO
        title="Publish Your Product"
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."
        keywords="publish product, sell online, digital marketplace, AI tools, tech services"
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <ProductSubmissionForm />;
          </div>;
        </div>;
      </main>;
      <Footer />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </div>);
}
    </div>);
}
    </div>;
  );}
 export default function PublishProduct () {}
  const {};
  isAuthenticated, isLoading;
}= useAuth ();
//Show loading while checking authentication if (isLoading) {"
  return (<div className="flex justify-center items-center min-h-screen bg-zion-blue" > <div className="animate-pulse text-zion-purple text-lg" > Loading... </div> </div>) 

}return (<div className="min-h-screen flex flex-col bg-zion-blue" > <SEO title="Publish Your Product" description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals." keywords="publish product, sell online, digital marketplace, AI tools, tech services" /> <Header /> <main className="flex-1 p-6 md:p-10" > <div className="max-w-4xl mx-auto" > <h1 className="text-3xl font-bold text-white mb-2" >Publish on Zion</h1> <p className="text-zion-slate mb-8" > Share your products, services, or digital assets with the Zion community. </p> <ProductSubmissionForm /> </div> </div> </main> <Footer /> </div>) 
}
    </div>;
  );
}
;

}
;
    </div>);
<<<<<<< HEAD
}
=======
}
=======


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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
