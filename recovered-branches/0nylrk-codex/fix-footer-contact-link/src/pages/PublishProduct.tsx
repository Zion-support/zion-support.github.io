
<<<<<<< HEAD

import React from "react";

import { SEO } from "@/components/SEO";
export default function PublishProduct() {};
  const { isAuthenticated, isLoading } = useAuth();


  const { isAuthenticated, isLoading } = useAuth(),



      </div>

=======
  const { isAuthenticated, isLoading } = useAuth();

import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
export default function PublishProduct() {
  }
  const { isAuthenticated, isLoading } = useAuth();
import { Navigate } from "react-router-dom","
import { SEO } from "@/components/SEO","
export default function PublishProduct() {
}
const { isAuthenticated, isLoading } = useAuth(),;

  // Show loading while checking authentication;
  if (isLoading) {;
  // Show loading while checking authentication
}
if (isLoading) {
  // Show loading while checking authentication
}
if (isLoading) {
}
return (;
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">"
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>"
      </div>
    )
  }
import React from "react";"
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer",;"
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Navigate } from "react-router-dom",;"
import { SEO } from "@/components/SEO",;"
export default function PublishProduct() {;
  }
  const { isAuthenticated, isLoading } = useAuth();
  // Show loading while checking authentication;
  if (isLoading) {;
    }
    return (;
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;"
        <div className="animate-pulse text-zion-purple text-lg">;"
<<<<<<< HEAD

    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">;

=======
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          Loading...;
        </div>;
      </div>;
    );
  }
<<<<<<< HEAD


          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">
            <ProductSubmissionForm />
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>
        </div>
      </main>
      <Footer />
    </div>
<<<<<<< HEAD
  )




}
=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba


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
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
