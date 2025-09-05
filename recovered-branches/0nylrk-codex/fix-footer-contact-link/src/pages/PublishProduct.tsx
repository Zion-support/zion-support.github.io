
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { ProductSubmissionForm } from "@/components/ProductSubmissionForm",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
import { SEO } from "@/components/SEO",export default function PublishProduct() {
  const { isAuthenticated, isLoading } = useAuth(),
  
  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className=&quot;flex justify-center items-center min-h-screen bg-zion-blue&quot;>
        <div className=&quot;animate-pulse text-zion-purple text-lg&quot;>
          Loading...
        </div>
      </div>
    )
  }
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/publish' }} replace />import React from "react";

export default function PublishProduct() {_const { isAuthenticated, _isLoading} = useAuth();
  
  // Show loading while checking authentication
  if (isLoading) {_return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">
          Loading...
        </div>
      </div>
    );}
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {_return <Navigate to="/login" state={{ from: '/publish'}} replace />;
  }

  return (
    <div className=&quot;min-h-screen flex flex-col bg-zion-blue&quot;>
      <SEO 
        title=&quot;Publish Your Product&quot; 
        description=&quot;Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals.&quot;
        keywords=&quot;publish product, sell online, digital marketplace, AI tools, tech services&quot;
      />
      <Header />
      <main className=&quot;flex-1 p-6 md:p-10&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <h1 className=&quot;text-3xl font-bold text-white mb-2&quot;>Publish on Zion</h1>
          <p className=&quot;text-zion-slate mb-8&quot;>
            Share your products, services, or digital assets with the Zion community.
          </p>
          
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md: p-8">            <ProductSubmissionForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
