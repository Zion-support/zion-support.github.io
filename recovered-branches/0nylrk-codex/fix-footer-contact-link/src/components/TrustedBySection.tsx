
import { GradientHeading } from "./GradientHeading";
import { useState } from "react";
// Real company logos for trusted partners - with more reliable image URLs
const trustedCompanies = null;
  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading className="mb-2">Trusted By Industry Leaders</GradientHeading>
          <p className="text-zion-slate-light">Join the growing network of companies relying on Zion's marketplace</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center max-w-7xl mx-auto">
          {trustedCompanies.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center bg-zion-blue-light p-5 rounded-lg border border-zion-purple/10 h-20 transition-all duration-300 hover:border-zion-purple/30 hover:bg-zion-blue group"
            >
              {failedLogos[company.name] ? (
                // Fallback to text if image fails to load
                <div className="text-white font-semibold text-center">
                  {company.name}
                </div>
              ) : (
                <img 
                  src={company.logo} 
                  alt={company.alt} 
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
                  onError={() => handleImageError(company.name)}
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-zion-slate-light text-sm">And many more enterprises worldwide...</p>
        </div>
      </div>
    </section>
  )
}
;