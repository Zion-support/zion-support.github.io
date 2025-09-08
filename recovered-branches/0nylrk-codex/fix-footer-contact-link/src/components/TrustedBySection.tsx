
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {GradientHeading} from "./GradientHeading";
import {useState} from "react";
import { GradientHeading } from "./GradientHeading",
import { useState } from "react",

<<<<<<< HEAD




// Real company logos for trusted partners - with more reliable image URLs

const trustedCompanies = [

=======
// Real company logos for trusted partners - with more reliable image URLs

const trustedCompanies = [
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    name: "NVIDIA"
    logo: "/logos/nvidia-logo.svg"
    alt: "NVIDIA logo"


<<<<<<< HEAD

  {
    name: "American Express"
    logo: "/logos/amex-logo.svg"
    alt: "American Express logo"



  {
    name: "Walt Disney"
    logo: "/logos/disney-logo.svg"
    alt: "Walt Disney logo"



  {
    name: "AMD"
    logo: "/logos/amd-logo.svg"
    alt: "AMD logo"



  {
    name: "Apple"
    logo: "/logos/apple-logo.svg"
    alt: "Apple logo"



  {
    name: "EA Games"
    logo: "/logos/ea-logo.svg"
    alt: "EA Games logo"



  {
    name: "Louis Vuitton"
    logo: "/logos/lv-logo.svg"
    alt: "Louis Vuitton logo"



  {
    name: "Nike"
    logo: "/logos/nike-logo.svg"
    alt: "Nike logo"



  {
    name: "Pandora"
    logo: "/logos/pandora-logo.svg"
    alt: "Pandora logo"



  {
    name: "Huawei"
    logo: "/logos/huawei-logo.svg"
    alt: "Huawei logo"



  {
    name: "Johnson & Johnson"
    logo: "/logos/jnj-logo.svg"
    alt: "Johnson & Johnson logo"



  {
    name: "Universal"
    logo: "/logos/universal-logo.svg"
    alt: "Universal Studios logo"



  {
    name: "Ubisoft"
    logo: "/logos/ubisoft-logo.svg"
    alt: "Ubisoft logo"



  {
    name: "Bayer"
    logo: "/logos/bayer-logo.svg"
    alt: "Bayer logo"



  {
    name: "Avaya"
    logo: "/logos/avaya-logo.svg"
    alt: "Avaya logo"



  {
    name: "Silicon Valley Bank"
    logo: "/logos/svb-logo.svg"
    alt: "Silicon Valley Bank logo"



  {
    name: "Dell"
    logo: "/logos/dell-logo.svg"
    alt: "Dell logo"



  {
    name: "Lenovo"
    logo: "/logos/lenovo-logo.svg"
    alt: "Lenovo logo"



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  {
    name: "Citi Bank"
    logo: "/logos/citi-logo.svg"
    alt: "Citi Bank logo"
<<<<<<< HEAD


=======
  }
  },

  },


  },
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba

  {
    name: "Thomson Reuters"
    logo: "/logos/thomson-reuters-logo.svg"
    alt: "Thomson Reuters logo"
  }

<<<<<<< HEAD


],

export function TrustedBySection() {



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleImageError = (companyName: string) => {
    setFailedLogos(prev => ({
      ...prev
      [companyName]: true
<<<<<<< HEAD


=======
    }))// Real company logos for trusted partners - with more reliable image URLs;
  {;
    }
    "name": "NVIDIA",;"
    "logo": "/logos/nvidia-logo && logo.svg",;"
    "alt": "NVIDIA logo""
};
  {;
    }
    "name": "American Express",;"
    "logo": "/logos/amex-logo && logo.svg",;"
    "alt": "American Express logo""
};
  {;
    }
    "name": "Walt Disney",;"
    "logo": "/logos/disney-logo && logo.svg",;"
    "alt": "Walt Disney logo""
};
  {;
    }
    "name": "AMD",;"
    "logo": "/logos/amd-logo && logo.svg",;"
    "alt": "AMD logo""
};
  {;
    }
    "name": "Apple",;"
    "logo": "/logos/apple-logo && logo.svg",;"
    "alt": "Apple logo""
};
  {;
    }
    "name": "EA Games",;"
    "logo": "/logos/ea-logo && logo.svg",;"
    "alt": "EA Games logo""
};
  {;
    }
    "name": "Louis Vuitton",;"
    "logo": "/logos/lv-logo && logo.svg",;"
    "alt": "Louis Vuitton logo""
};
  {;
    }
    "name": "Nike",;"
    "logo": "/logos/nike-logo && logo.svg",;"
    "alt": "Nike logo""
};
  {;
    }
    "name": "Pandora",;"
    "logo": "/logos/pandora-logo && logo.svg",;"
    "alt": "Pandora logo""
};
  {;
    }
    "name": "Huawei",;"
    "logo": "/logos/huawei-logo && logo.svg",;"
    "alt": "Huawei logo""
};
  {;
    }
    "name": "Johnson & Johnson",;"
    "logo": "/logos/jnj-logo && logo.svg",;"
    "alt": "Johnson & Johnson logo""
};
  {;
    }
    "name": "Universal",;"
    "logo": "/logos/universal-logo && logo.svg",;"
    "alt": "Universal Studios logo""
};
  {;
    }
    "name": "Ubisoft",;"
    "logo": "/logos/ubisoft-logo && logo.svg",;"
    "alt": "Ubisoft logo""
};
  {;
    }
    "name": "Bayer",;"
    "logo": "/logos/bayer-logo && logo.svg",;"
    "alt": "Bayer logo""
};
  {;
    }
    "name": "Avaya",;"
    "logo": "/logos/avaya-logo && logo.svg",;"
    "alt": "Avaya logo""
};
  {;
    }
    "name": "Silicon Valley Bank",;"
    "logo": "/logos/svb-logo && logo.svg",;"
    "alt": "Silicon Valley Bank logo""
};
  {;
    }
    "name": "Dell",;"
    "logo": "/logos/dell-logo && logo.svg",;"
    "alt": "Dell logo""
};
  {;
    }
    "name": "Lenovo",;"
    "logo": "/logos/lenovo-logo && logo.svg",;"
    "alt": "Lenovo logo""
};
  {;
    }
    "name": "Citi Bank",;"
    "logo": "/logos/citi-logo && logo.svg",;"
    "alt": "Citi Bank logo""
};
  {;
    }
    "name": "Thomson Reuters",;"
    "logo": "/logos/thomson-reuters-logo && logo.svg",;"
    "alt": "Thomson Reuters logo";"
  }
];
>>>>>>> origin/cursor/delete-old-data-records-6bba

    }))


<<<<<<< HEAD

  },



  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GradientHeading className="mb-2">Trusted By Industry Leaders</GradientHeading>


=======
  return ("
    <section className="py-16 bg-zion-blue-dark">"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="text-center mb-12">"
          <GradientHeading className="mb-2">Trusted By Industry Leaders</GradientHeading>"

>>>>>>> origin/cursor/delete-old-data-records-6bba
          <p className="text-zion-slate-light">Join the growing network of companies relying on Zion's marketplace</p>
        </div>"
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center max-w-7xl mx-auto">
          {trustedCompanies.map((company, index) => (
            <div;
              key={index}"
              className="flex items-center justify-center bg-zion-blue-light p-5 rounded-lg border border-zion-purple/10 h-20 transition-all duration-300 hover:border-zion-purple/30 hover:bg-zion-blue group"
            >
              {failedLogos[company.name] ? (
                // Fallback to text if image fails to load"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <div className="text-white font-semibold text-center">
                  {company.name}
                </div>
              ) : (

<<<<<<< HEAD

// Real company logos for trusted partners - with more reliable image URLs;
const trustedCompanies = [;
  {;
    name: "NVIDIA",;


    <section className="py-16 bg-zion-blue-dark">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <GradientHeading className="mb-2">Trusted By Industry Leaders</GradientHeading>;
          <p className="text-zion-slate-light">Join the growing network of companies relying on Zion's marketplace</p>;
        </div>;
=======
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
import { GradientHeading } from "./GradientHeading",;
import { useState } from "react",;
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
                <img 
                  src={company.logo} 
                  alt={company.alt} 
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
import { GradientHeading } from "./GradientHeading",;
import { useState } from "react",;

// Real company logos for trusted partners - with more reliable image URLs;

                <img
                  src={company.logo}
                  alt={company.alt}
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
                <img 
                  src={company.logo} 
                  alt={company.alt} 
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
import { GradientHeading } from "./GradientHeading",;
import { useState } from "react",;

// Real company logos for trusted partners - with more reliable image URLs;

          <p className="text-zion-slate-light">Join the growing network of companies relying on Zion's marketplace</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center max-w-7xl mx-auto">"
            <div;
              key={index}"
              className="flex items-center justify-center bg-zion-blue-light p-5 rounded-lg border border-zion-purple/10 h-20 transition-all duration-300 hover:border-zion-purple/30 hover:bg-zion-blue group""
            >

"
    <section className="py-16 bg-zion-blue-dark">;"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
        <div className="text-center mb-12">;"


          <p className="text-zion-slate-light">Join the growing network of companies relying on Zion's marketplace</p>;
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
                  src={company && company.logo} 
                  alt={company && company.alt} 

"

                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
                  onError={() => handleImageError(company && company.name)}
                />;


                  onError={() => handleImageError(company.name)}
                />
>>>>>>> origin/cursor/delete-old-data-records-6bba
              )}
            </div>;
          ))}

<<<<<<< HEAD

        </div>;
=======

          <p className="text-zion-slate-light text-sm">And many more enterprises worldwide...</p>
        </div>
      </div>
    </section>
  )

}

}
}"
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"
                  onError={() => handleImageError(company && company.name)}
                />;
              )}
            </div>;
          ))}'
import { GradientHeading } from './GradientHeading';'
>>>>>>> origin/cursor/delete-old-data-records-6bba

import { useState } from './react';
// Real company logos for trusted partners - with more reliable image URLs;
const trusted_companies = [;
  {"
    name: "NVIDIA","
    logo: "/logos / nvidia - logo.svg","
    alt: "NVIDIA logo";
  }
  {"
    name: "American Express","
    logo: "/logos / amex - logo.svg","
    alt: "American Express logo";
  }
  {"
    name: "Walt Disney","
    logo: "/logos / disney - logo.svg","
    alt: "Walt Disney logo";
  }
  {"
    name: "AMD","
    logo: "/logos / amd - logo.svg","
    alt: "AMD logo";
  }
  {"
    name: "Apple","
    logo: "/logos / apple - logo.svg","
    alt: "Apple logo";
  }
  {"
    name: "EA Games","
    logo: "/logos / ea - logo.svg","
    alt: "EA Games logo";
  }
  {"
    name: "Louis Vuitton","
    logo: "/logos / lv - logo.svg","
    alt: "Louis Vuitton logo";
  }
  {"
    name: "Nike","
    logo: "/logos / nike - logo.svg","
    alt: "Nike logo";
  }
  {"
    name: "Pandora","
    logo: "/logos / pandora - logo.svg","
    alt: "Pandora logo";
  }
  {"
    name: "Huawei","
    logo: "/logos / huawei - logo.svg","
    alt: "Huawei logo";
  }
  {"
    name: "Johnson & Johnson","
    logo: "/logos / jnj - logo.svg","
    alt: "Johnson & Johnson logo";
  }
  {"
    name: "Universal","
    logo: "/logos / universal - logo.svg","
    alt: "Universal Studios logo";
  }
  {"
    name: "Ubisoft","
    logo: "/logos / ubisoft - logo.svg","
    alt: "Ubisoft logo";
  }
  {"
    name: "Bayer","
    logo: "/logos / bayer - logo.svg","
    alt: "Bayer logo";
  }
  {"
    name: "Avaya","
    logo: "/logos / avaya - logo.svg","
    alt: "Avaya logo";
  }
  {"
    name: "Silicon Valley Bank","
    logo: "/logos / svb - logo.svg","
    alt: "Silicon Valley Bank logo";
  }
  {"
    name: "Dell","
    logo: "/logos / dell - logo.svg","
    alt: "Dell logo";
  }
  {"
    name: "Lenovo","
    logo: "/logos / lenovo - logo.svg","
    alt: "Lenovo logo";
  }
  {"
    name: "Citi Bank","
    logo: "/logos / citi - logo.svg","
    alt: "Citi Bank logo";
  }
  {"
    name: "Thomson Reuters","
    logo: "/logos / thomson - reuters - logo.svg","
    alt: "Thomson Reuters logo";
  }
];
;
<<<<<<< HEAD

=======
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
  ),;}
   index 
}className="flex items-center justify-center bg-zion-blue-light p-5 rounded-lg border border-zion-purple/10 h-20 transition-all duration-300 hover:border-zion-purple/30 hover:bg-zion-blue group" > {
  failedLogos[company.name] ? (//Fallback to text if image fails to load <div className="text-white font-semibold text-center" > {
  company.name 
}</div> />) 
}</div>) ) 
}</div> <div className="text-center mt-10" > <p className="text-zion-slate-light text-sm" >And many more enterprises worldwide...</p> </div> </div> </section>) 
}
              ) : (;
                <img;
                  src={company.logo} ;
                  alt={company.alt} ;
                  className="max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert";
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

    </section>
  )
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
