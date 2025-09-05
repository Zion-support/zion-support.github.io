
import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { ProductSubmissionForm } from &quot;@/components/ProductSubmissionForm&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Navigate } from &quot;react-router-dom&quot;;
import { SEO } from &quot;@/components/SEO&quot;;

export default function PublishProduct() {
  const { isAuthenticated, isLoading } = useAuth();
  
  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className=&quot;flex justify-center items-center min-h-screen bg-zion-blue&quot;>
        <div className=&quot;animate-pulse text-zion-purple text-lg&quot;>
          Loading...
        </div>
      </div>
    );
  }
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to=&quot;/login&quot; state={{ from: '/publish' }} replace />;
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
          
          <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 md:p-8&quot;>
            <ProductSubmissionForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
