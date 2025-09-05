
<<<<<<< HEAD
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",
import { useState } from "react",
=======
import { GradientHeading } from &quot;./GradientHeading&quot;;
import { useState } from &quot;react&quot;;
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// Real company logos for trusted partners - with more reliable image URLs
<<<<<<< HEAD
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
          {trustedCompanies.map((company, index) => (
=======
const _trustedCompanies = [
  {_name: "NVIDIA", _logo: "/logos/nvidia-logo.svg", _alt: "NVIDIA logo"},
  {_name: "American Express", _logo: "/logos/amex-logo.svg", _alt: "American Express logo"},
  {_name: "Walt Disney", _logo: "/logos/disney-logo.svg", _alt: "Walt Disney logo"},
  {_name: "AMD", _logo: "/logos/amd-logo.svg", _alt: "AMD logo"},
  {_name: "Apple", _logo: "/logos/apple-logo.svg", _alt: "Apple logo"},
  {_name: "EA Games", _logo: "/logos/ea-logo.svg", _alt: "EA Games logo"},
  {_name: "Louis Vuitton", _logo: "/logos/lv-logo.svg", _alt: "Louis Vuitton logo"},
  {_name: "Nike", _logo: "/logos/nike-logo.svg", _alt: "Nike logo"},
  {_name: "Pandora", _logo: "/logos/pandora-logo.svg", _alt: "Pandora logo"},
  {_name: "Huawei", _logo: "/logos/huawei-logo.svg", _alt: "Huawei logo"},
  {_name: "Johnson & Johnson", _logo: "/logos/jnj-logo.svg", _alt: "Johnson & Johnson logo"},
  {_name: "Universal", _logo: "/logos/universal-logo.svg", _alt: "Universal Studios logo"},
  {_name: "Ubisoft", _logo: "/logos/ubisoft-logo.svg", _alt: "Ubisoft logo"},
  {_name: "Bayer", _logo: "/logos/bayer-logo.svg", _alt: "Bayer logo"},
  {_name: "Avaya", _logo: "/logos/avaya-logo.svg", _alt: "Avaya logo"},
  {_name: "Silicon Valley Bank", _logo: "/logos/svb-logo.svg", _alt: "Silicon Valley Bank logo"},
  {_name: "Dell", _logo: "/logos/dell-logo.svg", _alt: "Dell logo"},
  {_name: "Lenovo", _logo: "/logos/lenovo-logo.svg", _alt: "Lenovo logo"},
  {_name: "Citi Bank", _logo: "/logos/citi-logo.svg", _alt: "Citi Bank logo"},
  {_name: "Thomson Reuters", _logo: "/logos/thomson-reuters-logo.svg", _alt: "Thomson Reuters logo"}
];

export function TrustedBySection() {_// Use state to track logos that failed to load
  const [failedLogos, _setFailedLogos] = useState<Record<string, _boolean>>({});

  const _handleImageError = (_companyName: string) => {_setFailedLogos(prev => ({
      ...prev, _[companyName]: true}));
  };

  return (_<section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading className="mb-2">Trusted By Industry Leaders</GradientHeading>
          <p className="text-zion-slate-light">Join the growing network of companies relying on Zion's marketplace</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center max-w-7xl mx-auto">
          {_trustedCompanies.map((company, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <div 
              key={index} 
              className=&quot;flex items-center justify-center bg-zion-blue-light p-5 rounded-lg border border-zion-purple/10 h-20 transition-all duration-300 hover:border-zion-purple/30 hover:bg-zion-blue group&quot;
            >
              {_failedLogos[company.name] ? (
                // Fallback to text if image fails to load
                <div className=&quot;text-white font-semibold text-center&quot;>
                  {company.name}
                </div>
<<<<<<< HEAD
              ) : (
                <img 
                  src={company.logo} 
                  alt={company.alt} 
                  className=&quot;max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert&quot;
                  onError={() => handleImageError(company.name)}
=======
              ) : (_<img 
                  src={_company.logo} 
                  alt={_company.alt} 
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
                  onError={_() => handleImageError(company.name)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              )}
            </div>
          ))}
        </div>
        
        <div className=&quot;text-center mt-10&quot;>
          <p className=&quot;text-zion-slate-light text-sm&quot;>And many more enterprises worldwide...</p>
        </div>
      </div>
    </section>
  )
}
