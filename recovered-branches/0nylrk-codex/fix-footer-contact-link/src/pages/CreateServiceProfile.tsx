
import React from &quot;react&quot;;
import { ServiceProviderRegistrationForm } from &quot;@/components/profile/ServiceProviderRegistrationForm&quot;;

export default function CreateServiceProfile() {
  return (
    <div className=&quot;bg-zion-blue min-h-screen py-8 md:py-12&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center mb-8 md:mb-12&quot;>
          <h1 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>Create Your Service Provider Profile</h1>
          <p className=&quot;text-zion-slate-light max-w-2xl mx-auto&quot;>
            Showcase your services to potential clients. Create a professional profile 
            to get discovered on the Zion Marketplace.
          </p>
        </div>
        
        <ServiceProviderRegistrationForm />
      </div>
    </div>
  );
}
