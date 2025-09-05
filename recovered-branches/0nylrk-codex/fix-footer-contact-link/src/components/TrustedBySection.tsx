
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",;
import { useState } from "react",;
;
// Real company logos for trusted partners - with more reliable image URLs;
const trustedCompanies = [;
  {;
    name:"NVIDIA",;
    logo:"/logos/nvidia-logo.svg",;
    alt:"NVIDIA logo";
  },;
  {;
    name:"American Express",;
    logo:"/logos/amex-logo.svg",;
    alt:"American Express logo";
  },;
  {;
    name:"Walt Disney",;
    logo:"/logos/disney-logo.svg",;
    alt:"Walt Disney logo";
  },;
  {;
    name:"AMD",;
    logo:"/logos/amd-logo.svg",;
    alt:"AMD logo";
  },;
  {;
    name:"Apple",;
    logo:"/logos/apple-logo.svg",;
    alt:"Apple logo";
  },;
  {;
    name:"EA Games",;
    logo:"/logos/ea-logo.svg",;
    alt:"EA Games logo";
  },;
  {;
    name:"Louis Vuitton",;
    logo:"/logos/lv-logo.svg",;
    alt:"Louis Vuitton logo";
  },;
  {;
    name:"Nike",;
    logo:"/logos/nike-logo.svg",;
    alt:"Nike logo";
  },;
  {;
    name:"Pandora",;
    logo:"/logos/pandora-logo.svg",;
    alt:"Pandora logo";
  },;
  {;
    name:"Huawei",;
    logo:"/logos/huawei-logo.svg",;
    alt:"Huawei logo";
  },;
  {;
    name:"Johnson & Johnson",;
    logo:"/logos/jnj-logo.svg",;
    alt:"Johnson & Johnson logo";
  },;
  {;
    name:"Universal",;
    logo:"/logos/universal-logo.svg",;
    alt:"Universal Studios logo";
  },;
  {;
    name:"Ubisoft",;
    logo:"/logos/ubisoft-logo.svg",;
    alt:"Ubisoft logo";
  },;
  {;
    name:"Bayer",;
    logo:"/logos/bayer-logo.svg",;
    alt:"Bayer logo";
  },;
  {;
    name:"Avaya",;
    logo:"/logos/avaya-logo.svg",;
    alt:"Avaya logo";
  },;
  {;
    name:"Silicon Valley Bank",;
    logo:"/logos/svb-logo.svg",;
    alt:"Silicon Valley Bank logo";
  },;
  {;
    name:"Dell",;
    logo:"/logos/dell-logo.svg",;
    alt:"Dell logo";
  },;
  {;
    name:"Lenovo",;
    logo:"/logos/lenovo-logo.svg",;
    alt:"Lenovo logo";
  },;
  {;
    name:"Citi Bank",;
    logo:"/logos/citi-logo.svg",;
    alt:"Citi Bank logo";
  },;
  {;
    name:"Thomson Reuters",;
    logo:"/logos/thomson-reuters-logo.svg",;
    alt:"Thomson Reuters logo";
  }
],;
;
export function TrustedBySection() {;
  // Use state to track logos that failed to load;
  const [failedLogos, setFailedLogos] = useState<Record<string boolean>>({}),;
;
  const handleImageError = (companyName:string) => {;
    setFailedLogos(prev => ({;
      ...prev,;
      [companyName]:true;
    })),;
  },;
;
  return (;
    <section className="py-16 bg-zion-blue-dark">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <GradientHeading className="mb-2">Trusted By Industry Leaders</GradientHeading>;
          <p className="text-zion-slate-light">Join the growing network of companies relying on Zion's marketplace</p>;
        </div>;
        ;
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center max-w-7xl mx-auto">;
          {trustedCompanies.map((company, index) => (;
            <div ;
              key={index} ;
              className="flex items-center justify-center bg-zion-blue-light p-5 rounded-lg border border-zion-purple/10 h-20 transition-all duration-300 hover:border-zion-purple/30 hover:bg-zion-blue group";
            >;
              {failedLogos[company.name] ? (;
                // Fallback to text if image fails to load;
                <div className="text-white font-semibold text-center">;
                  {company.name}
                </div>;
              ) :(;
                <img ;
                  src={company.logo} ;
                  alt={company.alt} ;
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert";
                  onError={() => handleImageError(company.name)}
                />;
=======
import { GradientHeading } from "./GradientHeading",
import { useState } from "react",
// Real company logos for trusted partners - with more reliable image URLs
const trustedCompanies = [
  {
    name: &quot;NVIDIA&quot;,
    logo: &quot;/logos/nvidia-logo.svg&quot;,
    alt: &quot;NVIDIA logo&quot;
  },
  {
    name: &quot;American Express&quot;,
    logo: &quot;/logos/amex-logo.svg&quot;,
    alt: &quot;American Express logo&quot;
  },
  {
    name: &quot;Walt Disney&quot;,
    logo: &quot;/logos/disney-logo.svg&quot;,
    alt: &quot;Walt Disney logo&quot;
  },
  {
    name: &quot;AMD&quot;,
    logo: &quot;/logos/amd-logo.svg&quot;,
    alt: &quot;AMD logo&quot;
  },
  {
    name: &quot;Apple&quot;,
    logo: &quot;/logos/apple-logo.svg&quot;,
    alt: &quot;Apple logo&quot;
  },
  {
    name: &quot;EA Games&quot;,
    logo: &quot;/logos/ea-logo.svg&quot;,
    alt: &quot;EA Games logo&quot;
  },
  {
    name: &quot;Louis Vuitton&quot;,
    logo: &quot;/logos/lv-logo.svg&quot;,
    alt: &quot;Louis Vuitton logo&quot;
  },
  {
    name: &quot;Nike&quot;,
    logo: &quot;/logos/nike-logo.svg&quot;,
    alt: &quot;Nike logo&quot;
  },
  {
    name: &quot;Pandora&quot;,
    logo: &quot;/logos/pandora-logo.svg&quot;,
    alt: &quot;Pandora logo&quot;
  },
  {
    name: &quot;Huawei&quot;,
    logo: &quot;/logos/huawei-logo.svg&quot;,
    alt: &quot;Huawei logo&quot;
  },
  {
    name: &quot;Johnson & Johnson&quot;,
    logo: &quot;/logos/jnj-logo.svg&quot;,
    alt: &quot;Johnson & Johnson logo&quot;
  },
  {
    name: &quot;Universal&quot;,
    logo: &quot;/logos/universal-logo.svg&quot;,
    alt: &quot;Universal Studios logo&quot;
  },
  {
    name: &quot;Ubisoft&quot;,
    logo: &quot;/logos/ubisoft-logo.svg&quot;,
    alt: &quot;Ubisoft logo&quot;
  },
  {
    name: &quot;Bayer&quot;,
    logo: &quot;/logos/bayer-logo.svg&quot;,
    alt: &quot;Bayer logo&quot;
  },
  {
    name: &quot;Avaya&quot;,
    logo: &quot;/logos/avaya-logo.svg&quot;,
    alt: &quot;Avaya logo&quot;
  },
  {
    name: &quot;Silicon Valley Bank&quot;,
    logo: &quot;/logos/svb-logo.svg&quot;,
    alt: &quot;Silicon Valley Bank logo&quot;
  },
  {
    name: &quot;Dell&quot;,
    logo: &quot;/logos/dell-logo.svg&quot;,
    alt: &quot;Dell logo&quot;
  },
  {
    name: &quot;Lenovo&quot;,
    logo: &quot;/logos/lenovo-logo.svg&quot;,
    alt: &quot;Lenovo logo&quot;
  },
  {
    name: &quot;Citi Bank&quot;,
    logo: &quot;/logos/citi-logo.svg&quot;,
    alt: &quot;Citi Bank logo&quot;
  },
  {
    name: &quot;Thomson Reuters&quot;,
    logo: &quot;/logos/thomson-reuters-logo.svg&quot;,
    alt: &quot;Thomson Reuters logo&quot;
  }
],

export function TrustedBySection() {
  // Use state to track logos that failed to load
  const [failedLogos, setFailedLogos] = useState<Record<string boolean>>({}),

  const handleImageError = (companyName: string) => {
    setFailedLogos(prev => ({
      ...prev,
      [companyName]: true
    }))
  },

  return (
    <section className=&quot;py-16 bg-zion-blue-dark&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <GradientHeading className=&quot;mb-2&quot;>Trusted By Industry Leaders</GradientHeading>
          <p className=&quot;text-zion-slate-light&quot;>Join the growing network of companies relying on Zion's marketplace</p>
        </div>
        
        <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center max-w-7xl mx-auto&quot;>
          {trustedCompanies.map((company, index) => (            <div 
              key={index} 
              className=&quot;flex items-center justify-center bg-zion-blue-light p-5 rounded-lg border border-zion-purple/10 h-20 transition-all duration-300 hover:border-zion-purple/30 hover:bg-zion-blue group&quot;
            >
              {_failedLogos[company.name] ? (
                // Fallback to text if image fails to load
                <div className=&quot;text-white font-semibold text-center&quot;>
                  {company.name}
                </div>
              ) : (
                <img 
                  src={company.logo} 
                  alt={company.alt} 
                  className=&quot;max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert&quot;
                  onError={() => handleImageError(company.name)}                />
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              )}
            </div>;
          ))}
<<<<<<< HEAD
        </div>;
        ;
        <div className="text-center mt-10">;
          <p className="text-zion-slate-light text-sm">And many more enterprises worldwide...</p>;
        </div>;
      </div>;
    </section>;
  ),;
=======
        </div>
        
        <div className=&quot;text-center mt-10&quot;>
          <p className=&quot;text-zion-slate-light text-sm&quot;>And many more enterprises worldwide...</p>
        </div>
      </div>
    </section>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
