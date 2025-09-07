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
    return ("
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">"
</div>"
        <div className="animate-pulse text-zion-purple text-lg">Loading...</div>"
    return <Navigate to="/login" state={{ from: "/publish" }} replace />;"
"
    return <Navigate to="/login" state={{ from: '/publish' }} replace />;

    <div className="min-h-screen flex flex-col bg-zion-blue">"
</div>
      <SEO;"
        title="Publish Your Product"""
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."""
        keywords="publish product, sell online, digital marketplace, AI tools, tech services""
      />

      <Header />
      <main className="flex-1 p-6 md:p-10">"
</main>"
        <div className="max-w-4xl mx-auto">"
          <h1 className="text-3xl font-bold text-white mb-2">"
</h1>
          </h1>"
          <p className="text-zion-slate mb-8">"
</p>
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">"
            <ProductSubmissionForm />

      </main>
      <Footer />

      <div className="flex justify - center items - center min - h-screen bg - zion - blue">;"
        <div className="animate - pulse text - zion - purple text - lg">;"
        </div>;)
      </div>);"

    <div className="min - h-screen flex flex - col bg - zion - blue">;"
        title="Publish Your Product";""
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals.";""
        keywords="publish product, sell online, digital marketplace, AI tools, tech services";"
      />;

      <Header />;
      <main className="flex - 1 p - 6 md:p - 10">;"
        <div className="max - w-4xl mx - auto">;"
          <h1 className="text - 3xl font - bold text - white mb - 2">Publish on Zion</h1>;""
          <p className="text - zion - slate mb - 8">;"
          </p>;"
          <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 md: p - 8">;"
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md:p-8">;"
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">;"
            <ProductSubmissionForm />;

          </div>;
      </main>;
      <Footer />;

    </div>);
    </div>;"
  return (<div className="flex justify-center items-center min-h-screen bg-zion-blue" > <div className="animate-pulse text-zion-purple text-lg" > Loading... </div> </div>)""
}return (<div className="min-h-screen flex flex-col bg-zion-blue" > <SEO title="Publish Your Product" description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals." keywords="publish product, sell online, digital marketplace, AI tools, tech services" /> <Header /> <main className="flex-1 p-6 md:p-10" > <div className="max-w-4xl mx-auto" > <h1 className="text-3xl font-bold text-white mb-2" >Publish on Zion</h1> <p className="text-zion-slate mb-8" > Share your products, services, or digital assets with the Zion community. </p> <ProductSubmissionForm /> </div> </div> </main> <Footer /> </div>)"