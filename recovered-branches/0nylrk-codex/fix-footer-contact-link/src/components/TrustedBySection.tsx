
import { GradientHeading } from &quot;./GradientHeading&quot;;
import { useState } from &quot;react&quot;;

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
];

export function TrustedBySection() {
  // Use state to track logos that failed to load
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  const handleImageError = (companyName: string) => {
    setFailedLogos(prev => ({
      ...prev,
      [companyName]: true
    }));
  };

  return (
    <section className=&quot;py-16 bg-zion-blue-dark&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <GradientHeading className=&quot;mb-2&quot;>Trusted By Industry Leaders</GradientHeading>
          <p className=&quot;text-zion-slate-light&quot;>Join the growing network of companies relying on Zion's marketplace</p>
        </div>
        
        <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center max-w-7xl mx-auto&quot;>
          {trustedCompanies.map((company, index) => (
            <div 
              key={index} 
              className=&quot;flex items-center justify-center bg-zion-blue-light p-5 rounded-lg border border-zion-purple/10 h-20 transition-all duration-300 hover:border-zion-purple/30 hover:bg-zion-blue group&quot;
            >
              {failedLogos[company.name] ? (
                // Fallback to text if image fails to load
                <div className=&quot;text-white font-semibold text-center&quot;>
                  {company.name}
                </div>
              ) : (
                <img 
                  src={company.logo} 
                  alt={company.alt} 
                  className=&quot;max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert&quot;
                  onError={() => handleImageError(company.name)}
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
  );
}
