
import React from &quot;react&quot;;
import { ServiceProviderRegistrationForm } from &quot;@/components/profile/ServiceProviderRegistrationForm&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Navigate } from &quot;react-router-dom&quot;;

export default function ServiceOnboarding() {
  const { user, isLoading } = useAuth();

  // If not authenticated, redirect to login
  if (!isLoading && !user) {
    return <Navigate to=&quot;/login&quot; replace />;
  }

  return (
    <>
      <Header />
      <div className=&quot;bg-zion-blue min-h-screen py-8 md:py-12&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center mb-8 md:mb-12&quot;>
            <h1 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>Join Our Service Provider Network</h1>
            <p className=&quot;text-zion-slate-light max-w-2xl mx-auto&quot;>
              Showcase your services to potential clients. Create a professional profile
              to get discovered on the Zion Marketplace.
            </p>
          </div>
          
          <ServiceProviderRegistrationForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
