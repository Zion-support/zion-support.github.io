<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/TrustedBySection.tsx


<<<<<<< HEAD
import {GradientHeading} from "./GradientHeading";
import {useState} from "react";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import { GradientHeading } from "./GradientHeading",
import { useState } from "react",

<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading";
import { useState } from "react";
=======
import { GradientHeading } from "./GradientHeading",
import { useState } from "react",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import {GradientHeading} from "./GradientHeading";
import {useState} from "react";
=======
import { GradientHeading } from "./GradientHeading",
import { useState } from "react",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Real company logos for trusted partners - with more reliable image URLs

const trustedCompanies = [
  {
    name: "NVIDIA"
    logo: "/logos/nvidia-logo.svg"
    alt: "NVIDIA logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "American Express"
    logo: "/logos/amex-logo.svg"
    alt: "American Express logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Walt Disney"
    logo: "/logos/disney-logo.svg"
    alt: "Walt Disney logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "AMD"
    logo: "/logos/amd-logo.svg"
    alt: "AMD logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Apple"
    logo: "/logos/apple-logo.svg"
    alt: "Apple logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "EA Games"
    logo: "/logos/ea-logo.svg"
    alt: "EA Games logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Louis Vuitton"
    logo: "/logos/lv-logo.svg"
    alt: "Louis Vuitton logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Nike"
    logo: "/logos/nike-logo.svg"
    alt: "Nike logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Pandora"
    logo: "/logos/pandora-logo.svg"
    alt: "Pandora logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Huawei"
    logo: "/logos/huawei-logo.svg"
    alt: "Huawei logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Johnson & Johnson"
    logo: "/logos/jnj-logo.svg"
    alt: "Johnson & Johnson logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Universal"
    logo: "/logos/universal-logo.svg"
    alt: "Universal Studios logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Ubisoft"
    logo: "/logos/ubisoft-logo.svg"
    alt: "Ubisoft logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Bayer"
    logo: "/logos/bayer-logo.svg"
    alt: "Bayer logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Avaya"
    logo: "/logos/avaya-logo.svg"
    alt: "Avaya logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Silicon Valley Bank"
    logo: "/logos/svb-logo.svg"
    alt: "Silicon Valley Bank logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Dell"
    logo: "/logos/dell-logo.svg"
    alt: "Dell logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Lenovo"
    logo: "/logos/lenovo-logo.svg"
    alt: "Lenovo logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Citi Bank"
    logo: "/logos/citi-logo.svg"
    alt: "Citi Bank logo"
<<<<<<< HEAD

<<<<<<< HEAD
=======

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    name: "Thomson Reuters"
    logo: "/logos/thomson-reuters-logo.svg"
    alt: "Thomson Reuters logo"
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======


],

export function TrustedBySection() {


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
];
export function TrustedBySection() {
  // Use state to track logos that failed to load
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});
=======
],

export function TrustedBySection() {
<<<<<<< HEAD
  // Use state to track logos that failed to load;
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});
=======
  // Use state to track logos that failed to load
  const [failedLogos, setFailedLogos] = useState<Record<string boolean>>({}),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleImageError = (companyName: string) => {
    setFailedLogos(prev => ({
      ...prev
      [companyName]: true
    }))
<<<<<<< HEAD
<<<<<<< HEAD
=======


  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD

<<<<<<< HEAD
import { GradientHeading } from "./GradientHeading",;
import { useState } from "react",;
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/TrustedBySection.tsx
import {GradientHeading} from "./GradientHeading";
import {useState} from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
=======
                <img 
                  src={company.logo} 
                  alt={company.alt} 
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { GradientHeading } from "./GradientHeading",;
import { useState } from "react",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Real company logos for trusted partners - with more reliable image URLs;
const trustedCompanies = [;
  {;
    name: "NVIDIA",;
<<<<<<< HEAD
    logo: "/logos/nvidia-logo && logo.svg",;
    alt: "NVIDIA logo";
  };
  {;
    name: "American Express",;
    logo: "/logos/amex-logo && logo.svg",;
    alt: "American Express logo";
  };
  {;
    name: "Walt Disney",;
    logo: "/logos/disney-logo && logo.svg",;
    alt: "Walt Disney logo";
  };
  {;
    name: "AMD",;
    logo: "/logos/amd-logo && logo.svg",;
    alt: "AMD logo";
  };
  {;
    name: "Apple",;
    logo: "/logos/apple-logo && logo.svg",;
    alt: "Apple logo";
  };
  {;
    name: "EA Games",;
    logo: "/logos/ea-logo && logo.svg",;
    alt: "EA Games logo";
  };
  {;
    name: "Louis Vuitton",;
    logo: "/logos/lv-logo && logo.svg",;
    alt: "Louis Vuitton logo";
  };
  {;
    name: "Nike",;
    logo: "/logos/nike-logo && logo.svg",;
    alt: "Nike logo";
  };
  {;
    name: "Pandora",;
    logo: "/logos/pandora-logo && logo.svg",;
    alt: "Pandora logo";
  };
  {;
    name: "Huawei",;
    logo: "/logos/huawei-logo && logo.svg",;
    alt: "Huawei logo";
  };
  {;
    name: "Johnson & Johnson",;
    logo: "/logos/jnj-logo && logo.svg",;
    alt: "Johnson & Johnson logo";
  };
  {;
    name: "Universal",;
    logo: "/logos/universal-logo && logo.svg",;
    alt: "Universal Studios logo";
  };
  {;
    name: "Ubisoft",;
    logo: "/logos/ubisoft-logo && logo.svg",;
    alt: "Ubisoft logo";
  };
  {;
    name: "Bayer",;
    logo: "/logos/bayer-logo && logo.svg",;
    alt: "Bayer logo";
  };
  {;
    name: "Avaya",;
    logo: "/logos/avaya-logo && logo.svg",;
    alt: "Avaya logo";
  };
  {;
    name: "Silicon Valley Bank",;
    logo: "/logos/svb-logo && logo.svg",;
    alt: "Silicon Valley Bank logo";
  };
  {;
    name: "Dell",;
    logo: "/logos/dell-logo && logo.svg",;
    alt: "Dell logo";
  };
  {;
    name: "Lenovo",;
    logo: "/logos/lenovo-logo && logo.svg",;
    alt: "Lenovo logo";
  };
  {;
    name: "Citi Bank",;
    logo: "/logos/citi-logo && logo.svg",;
    alt: "Citi Bank logo";
  };
  {;
    name: "Thomson Reuters",;
    logo: "/logos/thomson-reuters-logo && logo.svg",;
    alt: "Thomson Reuters logo";
  }
];
export function TrustedBySection() {;
  // Use state to track logos that failed to load;
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});
  const handleImageError = (companyName: string) => {;
    setFailedLogos(prev => ({;
      ...prev,;
      [companyName]: true;
    }));
  };
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    logo: "/logos/nvidia-logo.svg",;
    alt: "NVIDIA logo";
  },;
  {;
    name: "American Express",;
    logo: "/logos/amex-logo.svg",;
    alt: "American Express logo";
  },;
  {;
    name: "Walt Disney",;
    logo: "/logos/disney-logo.svg",;
    alt: "Walt Disney logo";
  },;
  {;
    name: "AMD",;
    logo: "/logos/amd-logo.svg",;
    alt: "AMD logo";
  },;
  {;
    name: "Apple",;
    logo: "/logos/apple-logo.svg",;
    alt: "Apple logo";
  },;
  {;
    name: "EA Games",;
    logo: "/logos/ea-logo.svg",;
    alt: "EA Games logo";
  },;
  {;
    name: "Louis Vuitton",;
    logo: "/logos/lv-logo.svg",;
    alt: "Louis Vuitton logo";
  },;
  {;
    name: "Nike",;
    logo: "/logos/nike-logo.svg",;
    alt: "Nike logo";
  },;
  {;
    name: "Pandora",;
    logo: "/logos/pandora-logo.svg",;
    alt: "Pandora logo";
  },;
  {;
    name: "Huawei",;
    logo: "/logos/huawei-logo.svg",;
    alt: "Huawei logo";
  },;
  {;
    name: "Johnson & Johnson",;
    logo: "/logos/jnj-logo.svg",;
    alt: "Johnson & Johnson logo";
  },;
  {;
    name: "Universal",;
    logo: "/logos/universal-logo.svg",;
    alt: "Universal Studios logo";
  },;
  {;
    name: "Ubisoft",;
    logo: "/logos/ubisoft-logo.svg",;
    alt: "Ubisoft logo";
  },;
  {;
    name: "Bayer",;
    logo: "/logos/bayer-logo.svg",;
    alt: "Bayer logo";
  },;
  {;
    name: "Avaya",;
    logo: "/logos/avaya-logo.svg",;
    alt: "Avaya logo";
  },;
  {;
    name: "Silicon Valley Bank",;
    logo: "/logos/svb-logo.svg",;
    alt: "Silicon Valley Bank logo";
  },;
  {;
    name: "Dell",;
    logo: "/logos/dell-logo.svg",;
    alt: "Dell logo";
  },;
  {;
    name: "Lenovo",;
    logo: "/logos/lenovo-logo.svg",;
    alt: "Lenovo logo";
  },;
  {;
    name: "Citi Bank",;
    logo: "/logos/citi-logo.svg",;
    alt: "Citi Bank logo";
  },;
  {;
    name: "Thomson Reuters",;
    logo: "/logos/thomson-reuters-logo.svg",;
    alt: "Thomson Reuters logo";
  }
],;
export function TrustedBySection() {;
  // Use state to track logos that failed to load;
  const [failedLogos, setFailedLogos] = useState<Record<string boolean>>({}),;
  const handleImageError = (companyName: string) => {;
    setFailedLogos(prev => ({;
      ...prev;
      [companyName]: true;
    }));
  };
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <section className="py-16 bg-zion-blue-dark">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <GradientHeading className="mb-2">Trusted By Industry Leaders</GradientHeading>;
          <p className="text-zion-slate-light">Join the growing network of companies relying on Zion's marketplace</p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center max-w-7xl mx-auto">;
          {trustedCompanies && trustedCompanies.map((company, index) => (;
            <div
              key={index} 
              className="flex items-center justify-center bg-zion-blue-light p-5 rounded-lg border border-zion-purple/10 h-20 transition-all duration-300 hover:border-zion-purple/30 hover:bg-zion-blue group">;
              {failedLogos[company && company.name] ? (;
                // Fallback to text if image fails to load;
                <div className="text-white font-semibold text-center">;
                  {company && company.name}
                </div>;
              ) : (;
<<<<<<< HEAD
                <img;
                  src={company.logo} ;
                  alt={company.alt} ;
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert";
=======
                <img
                  src={company && company.logo} 
                  alt={company && company.alt} 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/TrustedBySection.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/TrustedBySection.tsx
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
                  onError={() => handleImageError(company && company.name)}
                />;
=======

                <img 
                  src={company.logo} 
                  alt={company.alt} 
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                  onError={() => handleImageError(company.name)}
                />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              )}
            </div>;
          ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/TrustedBySection.tsx
<<<<<<< HEAD
        </div>
        <div className="text-center mt-10">
          <p className="text-zion-slate-light text-sm">And many more enterprises worldwide...</p>
        </div>
      </div>
    </section>
  )
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/TrustedBySection.tsx
        </div>;
=======
        ;
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center max-w-7xl mx-auto">;
          {trustedCompanies.map((company, index) => (;
            <div ;
=======
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center max-w-7xl mx-auto">;
          {trustedCompanies.map((company, index) => (;
            <div;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              key={index} ;
              className="flex items-center justify-center bg-zion-blue-light p-5 rounded-lg border border-zion-purple/10 h-20 transition-all duration-300 hover:border-zion-purple/30 hover:bg-zion-blue group";
            >;
              {failedLogos[company.name] ? (;
                // Fallback to text if image fails to load;
                <div className="text-white font-semibold text-center">;
                  {company.name}
                </div>;
<<<<<<< HEAD
              ) :(;
                <img ;
                  src={company.logo} ;
                  alt={company.alt} ;
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert";
                  onError={() => handleImageError(company.name)}
                />;              )}
            </div>;
          ))}
        </div>;
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="text-center mt-10">;
          <p className="text-zion-slate-light text-sm">And many more enterprises worldwide...</p>;
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
  );
=======


}
import { GradientHeading } from './GradientHeading';
import { useState } from './react';
// Real company logos for trusted partners - with more reliable image URLs;
const trusted_companies = [;
  {
    name: "NVIDIA",
    logo: "/logos / nvidia - logo.svg",
    alt: "NVIDIA logo";
  }
  {
    name: "American Express",
    logo: "/logos / amex - logo.svg",
    alt: "American Express logo";
  }
  {
    name: "Walt Disney",
    logo: "/logos / disney - logo.svg",
    alt: "Walt Disney logo";
  }
  {
    name: "AMD",
    logo: "/logos / amd - logo.svg",
    alt: "AMD logo";
  }
  {
    name: "Apple",
    logo: "/logos / apple - logo.svg",
    alt: "Apple logo";
  }
  {
    name: "EA Games",
    logo: "/logos / ea - logo.svg",
    alt: "EA Games logo";
  }
  {
    name: "Louis Vuitton",
    logo: "/logos / lv - logo.svg",
    alt: "Louis Vuitton logo";
  }
  {
    name: "Nike",
    logo: "/logos / nike - logo.svg",
    alt: "Nike logo";
  }
  {
    name: "Pandora",
    logo: "/logos / pandora - logo.svg",
    alt: "Pandora logo";
  }
  {
    name: "Huawei",
    logo: "/logos / huawei - logo.svg",
    alt: "Huawei logo";
  }
  {
    name: "Johnson & Johnson",
    logo: "/logos / jnj - logo.svg",
    alt: "Johnson & Johnson logo";
  }
  {
    name: "Universal",
    logo: "/logos / universal - logo.svg",
    alt: "Universal Studios logo";
  }
  {
    name: "Ubisoft",
    logo: "/logos / ubisoft - logo.svg",
    alt: "Ubisoft logo";
  }
  {
    name: "Bayer",
    logo: "/logos / bayer - logo.svg",
    alt: "Bayer logo";
  }
  {
    name: "Avaya",
    logo: "/logos / avaya - logo.svg",
    alt: "Avaya logo";
  }
  {
    name: "Silicon Valley Bank",
    logo: "/logos / svb - logo.svg",
    alt: "Silicon Valley Bank logo";
  }
  {
    name: "Dell",
    logo: "/logos / dell - logo.svg",
    alt: "Dell logo";
  }
  {
    name: "Lenovo",
    logo: "/logos / lenovo - logo.svg",
    alt: "Lenovo logo";
  }
  {
    name: "Citi Bank",
    logo: "/logos / citi - logo.svg",
    alt: "Citi Bank logo";
  }
  {
    name: "Thomson Reuters",
    logo: "/logos / thomson - reuters - logo.svg",
    alt: "Thomson Reuters logo";
  }
];
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/TrustedBySection.tsx


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
export /**
 * TrustedBySection - Function description
 */
function TrustedBySection() {
  // Use state to track logos that failed to load;
  const [failed_logos, setFailedLogos] = useState < Record < string, boolean>>({});
;
  const handleImageError = (company_name: string) =>: any {
    setFailedLogos (prev => ({
      ...prev,
      [company_name]: true;
    }));
  }
;
  return (
    <section className="py - 16 bg - zion - blue - dark">;
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="text - center mb - 12">;
          <GradientHeading className="mb - 2">Trusted By Industry Leaders</GradientHeading>;
          <p className="text - zion - slate - light">Join the growing network of companies relying on Zion's marketplace</p>;
        </div>;
        <div className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 5 gap - 6 items - center max - w-7xl mx - auto">;
          {trusted_companies.map ((company, index) => (
            <div;
              key={index}
              className="flex items - center justify - center bg - zion - blue - light p - 5 rounded - lg border border - zion - purple / 10 h - 20 transition - all duration - 300 hover:border - zion - purple / 30 hover:bg - zion - blue group";
            >;
              {failed_logos[company.name] ? (
                // Fallback to text if image fails to load;
                <div className="text - white font - semibold text - center">;
                  {company.name}
                </div>) : (
                <img;
                  src={company.logo}
                  alt={company.alt}
                  className="max - h-10 max - w-full opacity - 70 group - hover:opacity - 100 transition - opacity duration - 300 filter invert";
                  on_error={() => handleImageError (company.name)}
                />)}
            </div>))}
        </div>;
        <div className="text - center mt - 10">;
          <p className="text - zion - slate - light text - sm">And many more enterprises worldwide...</p>;
        </div>;
      </div>;
    </section>);
}
=======
  ),;}
   index 
}className="flex items-center justify-center bg-zion-blue-light p-5 rounded-lg border border-zion-purple/10 h-20 transition-all duration-300 hover:border-zion-purple/30 hover:bg-zion-blue group" > {
  failedLogos[company.name] ? (//Fallback to text if image fails to load <div className="text-white font-semibold text-center" > {
  company.name 
}</div> />) 
}</div>) ) 
}</div> <div className="text-center mt-10" > <p className="text-zion-slate-light text-sm" >And many more enterprises worldwide...</p> </div> </div> </section>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/TrustedBySection.tsx
=======
              ) : (;
                <img;
                  src={company.logo} ;
                  alt={company.alt} ;
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert";
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
}
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
