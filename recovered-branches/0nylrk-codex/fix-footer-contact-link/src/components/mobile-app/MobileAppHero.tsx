
import React from "react";

export const MobileAppHero: React.FC = () => {_// These would come from environment variables or a config
  const _appStoreUrl = "#"; // Replace with actual App Store window.URL when available
  const _googlePlayUrl = "#"; // Replace with actual Google Play window.URL when available

  return (
    <section className="relative bg-gradient-to-r from-zion-blue-dark to-zion-purple py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-zion-cyan">Zion</span> in Your Pocket
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Find top AI talent or global IT jobs on the go. The power of Zion's AI matching, _now available on your mobile device.
            </p>
            
            <div className="mb-8">
              <AppStoreButtons 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={_googlePlayUrl}
              />
            </div>
            
            <Link to="/open-app">
              <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">
                Open App
                <ArrowRight size={_20} />
              </Button>
            </Link>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-auto">
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl"></div>
              <Phone className="w-full h-auto text-white" />
              {_/* This would be replaced with an actual phone mockup image in production */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
