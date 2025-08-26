import React from "react";
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
<<<<<<< HEAD:src/pages/PublishProduct.tsx
import { NextSeo } from "@/components/NextSeo";

=======
import { SEO } from "@/components/SEO";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/PublishProduct.tsx
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
<<<<<<< HEAD:src/pages/PublishProduct.tsx
      <NextSeo 
        title="Publish Your Product" 
=======
      <SEO
        title="Publish Your Product"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/PublishProduct.tsx
        description="Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."
        keywords="publish product, sell online, digital marketplace, AI tools, tech services"
      />
      
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Publish on Zion</h1>
          <p className="text-zion-slate mb-8">
            Share your products, services, or digital assets with the Zion community.
          </p>
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md:p-8">
            <ProductSubmissionForm />
          </div>
        </div>
      </main>
      
    </div>
  );
}
