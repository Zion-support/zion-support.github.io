

// Real company logos for trusted partners - with more reliable image URLs
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
            <div 
              key={index} 
              className="flex items-center justify-center bg-zion-blue-light p-5 rounded-lg border border-zion-purple/10 h-20 transition-all duration-300 hover:border-zion-purple/30 hover:bg-zion-blue group"
            >
              {_failedLogos[company.name] ? (
                // Fallback to text if image fails to load
                <div className="text-white font-semibold text-center">
                  {company.name}
                </div>
              ) : (_<img 
                  src={_company.logo} 
                  alt={_company.alt} 
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
                  onError={_() => handleImageError(company.name)}
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
  );
}
