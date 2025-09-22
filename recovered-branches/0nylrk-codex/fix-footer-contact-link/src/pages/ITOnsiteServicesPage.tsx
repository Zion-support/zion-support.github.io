<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {useState, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {AppLayout} from "@/layout/AppLayout";
import {ITServicePricingTable} from "@/components/services/ITServicePricingTable";
import {GlobalServiceSection} from "@/components/GlobalServiceSection";
import {QuoteFormSection} from "@/components/QuoteFormSection";
import {TrustedBySection} from "@/components/TrustedBySection";
import {CountryPricing, onsiteServicePricing} from "@/data/onsiteServicePricing";
import {toast} from "@/hooks/use-toast";
import {PageHero} from "@/components/services/PageSections/PageHero";
import {CountryTabs} from "@/components/services/PageSections/CountryTabs";
import {ServiceDetailsSection} from "@/components/services/PageSections/ServiceDetailsSection";
import {ServiceProcessSteps} from "@/components/services/PageSections/ServiceProcessSteps";
import {ServiceIncludes} from "@/components/services/PageSections/ServiceIncludes";
import {EnterpriseCallToAction} from "@/components/services/PageSections/EnterpriseCallToAction";
export default function ITOnsiteServicesPage() {;
<<<<<<< HEAD

  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),
  const [searchQuery, setSearchQuery] = useState("");

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Check for success parameter in URL
  const success = searchParams.get("success");
import { useState, useEffect } from "react",
import { useSearchParams } from "react-router-dom",
import { AppLayout } from "@/layout/AppLayout",
import { ITServicePricingTable } from "@/components/services/ITServicePricingTable",
import { GlobalServiceSection } from "@/components/GlobalServiceSection",
import { QuoteFormSection } from "@/components/QuoteFormSection",
import { TrustedBySection } from "@/components/TrustedBySection",
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",
import { toast } from "@/hooks/use-toast",
import { PageHero } from "@/components/services/PageSections/PageHero",
import { CountryTabs } from "@/components/services/PageSections/CountryTabs",
import { ServiceDetailsSection } from "@/components/services/PageSections/ServiceDetailsSection",
import { ServiceProcessSteps } from "@/components/services/PageSections/ServiceProcessSteps",
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AppLayout } from "@/layout/AppLayout";
import { ITServicePricingTable } from "@/components/services/ITServicePricingTable";
import { GlobalServiceSection } from "@/components/GlobalServiceSection";
import { QuoteFormSection } from "@/components/QuoteFormSection";

import { TrustedBySection } from "@/components/TrustedBySection";
import {}
  CountryPricing,

  onsiteServicePricing,
} from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";
import { PageHero } from "@/components/services/PageSections/PageHero";
import { CountryTabs } from "@/components/services/PageSections/CountryTabs";
import { ServiceDetailsSection } from "@/components/services/PageSections/ServiceDetailsSection";
import { ServiceProcessSteps } from "@/components/services/PageSections/ServiceProcessSteps";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes";
=======
  onsiteServicePricing,";
} from "@/data/onsiteServicePricing";"
import { toast } from "@/hooks/use-toast";"
import { PageHero } from "@/components/services/PageSections/PageHero";"
import { CountryTabs } from "@/components/services/PageSections/CountryTabs";"
import { ServiceDetailsSection } from "@/components/services/PageSections/ServiceDetailsSection";"
import { ServiceProcessSteps } from "@/components/services/PageSections/ServiceProcessSteps";"
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { EnterpriseCallToAction } from "@/components/services/PageSections/EnterpriseCallToAction";
export default function ITOnsiteServicesPage() {};
  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(
    null,
  );"
  const [searchQuery, setSearchQuery] = useState("");

  // Check for success parameter in URL"
  const success = searchParams.get("success");

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Show success toast if redirected from successful payment
  useEffect(() => {
    if (success === "true") {
      toast({
        title: "Payment Successful",
        description:"
          "Your IT onsite service request has been received. Our team will contact you shortly.",
      });
    }
<<<<<<< HEAD
  }, [success]);
  // Popular countries for the featured cards
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }, [success]),

  // Popular countries for the featured cards
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"],

  // Popular countries for the featured cards;
  const popularCountries = ["
    "United States","
    "United Kingdom","
    "Canada","
    "Germany","
    "Japan","
    "Singapore",
  ];
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Filter countries based on search query
  const filteredCountries = onsiteServicePricing
    .filter((country) =>
      country.country.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      // First, sort by popular status
<<<<<<< HEAD
      const aIsPopular = popularCountries.includes(a.country);
      const bIsPopular = popularCountries.includes(b.country);

      if (aIsPopular && !bIsPopular) return -1;
      if (!aIsPopular && bIsPopular) return 1;

// Then sort alphabetically;
      return a.country.localeCompare(b.country);
    });

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleCountrySelect = (country: CountryPricing) => {

=======
  const handleCountrySelect = (country: CountryPricing) => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    setSelectedCountry(country)
    // Scroll to the service details section
    setTimeout(() => {
      document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' })
}, 100)
<<<<<<< HEAD

  },
=======
    }, 100)  const handleCountrySelect = (country: CountryPricing) => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  const handleCountrySelect = (country: CountryPricing) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      // Then sort alphabetically
      return a.country.localeCompare(b.country);
    });

  const handleCountrySelect = (country: CountryPricing) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    (setSelectedCountry(country),
      // Scroll to the service details section;
      setTimeout(() => {}
        document"
          .getElementById("service-details")"
          ?.scrollIntoView({ behavior: "smooth" });
<<<<<<< HEAD
      }, 100));
  };
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  }

  },

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      }, 100));
  };
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <AppLayout>"
      <section className="py-16 bg-zion-blue">"
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { useState, useEffect } from "react",;
import { useSearchParams } from "react-router-dom",;
import { AppLayout } from "@/layout/AppLayout",;
import { ITServicePricingTable } from "@/components/services/ITServicePricingTable",;
import { GlobalServiceSection } from "@/components/GlobalServiceSection",;
import { QuoteFormSection } from "@/components/QuoteFormSection",;
import { TrustedBySection } from "@/components/TrustedBySection",;
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;
import { toast } from "@/hooks/use-toast",;
import { PageHero } from "@/components/services/PageSections/PageHero",;
import { CountryTabs } from "@/components/services/PageSections/CountryTabs",;
import { ServiceDetailsSection } from "@/components/services/PageSections/ServiceDetailsSection",;
import { ServiceProcessSteps } from "@/components/services/PageSections/ServiceProcessSteps",;
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes",;
import { EnterpriseCallToAction } from "@/components/services/PageSections/EnterpriseCallToAction",;
export default function ITOnsiteServicesPage() {;
  const [searchParams] = useSearchParams(),;
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),;
  const [searchQuery, setSearchQuery] = useState(""),;
// Check for success parameter in URL;
  const success = searchParams && searchParams.get("success");

<<<<<<< HEAD
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),
  const [searchQuery, setSearchQuery] = useState("");
  // Check for success parameter in URL;
  const success = searchParams && searchParams.get("success");

import { useState, useEffect } from "react",;
import { useSearchParams } from "react-router-dom",;
import { AppLayout } from "@/layout/AppLayout",;
import { ITServicePricingTable } from "@/components/services/ITServicePricingTable",;
import { GlobalServiceSection } from "@/components/GlobalServiceSection",;
import { QuoteFormSection } from "@/components/QuoteFormSection",;
import { TrustedBySection } from "@/components/TrustedBySection",;
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;
import { toast } from "@/hooks/use-toast",;
import { PageHero } from "@/components/services/PageSections/PageHero",;
import { CountryTabs } from "@/components/services/PageSections/CountryTabs",;
import { ServiceDetailsSection } from "@/components/services/PageSections/ServiceDetailsSection",;
import { ServiceProcessSteps } from "@/components/services/PageSections/ServiceProcessSteps",;
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes",;
import { EnterpriseCallToAction } from "@/components/services/PageSections/EnterpriseCallToAction",;
;
export default function ITOnsiteServicesPage() {;
  const [searchParams] = useSearchParams(),;
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),;
  const [searchQuery, setSearchQuery] = useState(""),;
  ;
  // Check for success parameter in URL;
  const success = searchParams.get("success"),;
  ;
  // Check for success parameter in URL;
  const success = searchParams.get("success"),;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Show success toast if redirected from successful payment;
  useEffect(() => {;
    if (success === "true") {;
      toast({;
        title: "Payment Successful",;
        description: "Your IT onsite service request has been received. Our team will contact you shortly."});
        title: "Payment Successful",,
  description: "Your IT onsite service request has been received. Our team will contact you shortly."});
    }
  }, [success]);

  // Popular countries for the featured cards;
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"];

  // Filter countries based on search query;
  const filteredCountries = onsiteServicePricing;
    .filter(country => ;
      country && country.country.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
    );
    .sort((a, b) => {;
      // First, sort by popular status;
      const aIsPopular = popularCountries && popularCountries.includes(a && a.country);
      const bIsPopular = popularCountries && popularCountries.includes(b && b.country);

      if (aIsPopular && !bIsPopular) return -1;
      if (!aIsPopular && bIsPopular) return 1;

      // Then sort alphabetically;
      return a && a.country.localeCompare(b && b.country);
    });

  const handleCountrySelect = (country: CountryPricing) => {;
    setSelectedCountry(country),;

    // Scroll to the service details section;
    setTimeout(() => {;
      document && document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' });
<<<<<<< HEAD
    }, 100);
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
<AppLayout>;
      <section className="py-16 bg-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          {/* Hero Section with Features */}
          <PageHero />

          {/* Country Selection Tabs */}"
          <div className="mb-12">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
    }, 100)
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }, 100)
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            <CountryTabs;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          {/* Hero Section with Features */}
          <PageHero />

          {/* Country Selection Tabs */}
          <div className="mb-12">
            <CountryTabs
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    }, 100)
};
import { useState, useEffect } from "react";""
import { useSearchParams } from "react-router-dom";""
import { AppLayout } from "@/layout/AppLayout";""
import { ITServicePricingTable } from "@/components/services/ITServicePricingTable";""
import { GlobalServiceSection } from "@/components/GlobalServiceSection";""
import { QuoteFormSection } from "@/components/QuoteFormSection";""
import { TrustedBySection } from "@/components/TrustedBySection";"
import {
  // TODO: Implement
}
  CountryPricing,
  onsiteServicePricing,"
} from "@/data/onsiteServicePricing";""
import { toast } from "@/hooks/use-toast";""
import { PageHero } from "@/components/services/PageSections/PageHero";""
import { CountryTabs } from "@/components/services/PageSections/CountryTabs";""
import { ServiceDetailsSection } from "@/components/services/PageSections/ServiceDetailsSection";""
import { ServiceProcessSteps } from "@/components/services/PageSections/ServiceProcessSteps";""
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes";""
import { EnterpriseCallToAction } from "@/components/services/PageSections/EnterpriseCallToAction";"
export default function ITOnsiteServicesPage() {
  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(

    <AppLayout>
"
      <section className="py-16 bg-zion-blue">"
</section>"
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
</div>)
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),;

    <AppLayout>;
      <section className="py-16 bg-zion-blue">;"
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
</div>
          <PageHero />
          <div className="mb-12">"
            <CountryTabs;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              popularCountries={popularCountries}
              filteredCountries={filteredCountries}
              handleCountrySelect={handleCountrySelect}
              searchQuery={searchQuery}
setSearchQuery={setSearchQuery}          {/* Service Details Section */}
          <ServiceDetailsSection
=======
              setSearchQuery={setSearchQuery}
            />
          </div>

            />
          </div>

          {/* Service Details Section */}
          <ServiceDetailsSection;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />

          {/* How It Works Section */}
          <ServiceProcessSteps />

          {/* What's Included Section */}
          <ServiceIncludes />

          />
          {/* How It Works Section */}
          <ServiceProcessSteps />'
          {/* What's Included Section */}
          <ServiceIncludes />
          {/* Complete Pricing Table */}"
          <div id="pricing-table" className="my-16">"
            <div className="text-center mb-8">"
              <h2 className="text-2xl font-bold text-white mb-4">Full IT Onsite Services Pricing</h2>"
              <p className="text-zion-slate-light mb-6">
                Our per-incident prices include transportation costs and the first hour of onsite service.
                Additional hours are billed separately at standard rates.
              </p>
            </div>
            <ITServicePricingTable />
          </div>
          <EnterpriseCallToAction />
        </div>
      </section>
      <GlobalServiceSection />
      <TrustedBySection />
      <QuoteFormSection />
    </AppLayout>
  )
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              <h2 className="text-2xl font-bold text-white mb-4">
                Full IT Onsite Services Pricing;
              </h2>"
              <p className="text-zion-slate-light mb-6">
                Our per-incident prices include transportation costs and the;
                first hour of onsite service. Additional hours are billed;
                separately at standard rates.
              </p>
            </div>

            <ITServicePricingTable />
          </div>

          <EnterpriseCallToAction />
        </div>
      </section>

      <GlobalServiceSection />
      <TrustedBySection />
      <QuoteFormSection />
    </AppLayout>
  );
}

import { useState, useEffect } from './react';
import { useSearchParams } from './react-router-dom';
import { AppLayout } from '@/layout / AppLayout';
import { ITServicePricingTable } from '@/components / services / ITServicePricingTable';
import { GlobalServiceSection } from '@/components / GlobalServiceSection';
import { QuoteFormSection } from '@/components / QuoteFormSection';
import { TrustedBySection } from '@/components / TrustedBySection';
import { CountryPricing, onsiteServicePricing } from '@/data / onsiteServicePricing';
import { toast } from '@/hooks / use - toast';
import { PageHero } from '@/components / services / PageSections / PageHero';
import { CountryTabs } from '@/components / services / PageSections / CountryTabs';
import { ServiceDetailsSection } from '@/components / services / PageSections / ServiceDetailsSection';
import { ServiceProcessSteps } from '@/components / services / PageSections / ServiceProcessSteps';
import { ServiceIncludes } from '@/components / services / PageSections / ServiceIncludes';
import { EnterpriseCallToAction } from '@/components / services / PageSections / EnterpriseCallToAction';
export default /**
 * ITOnsiteServicesPage - Function description
 */
function ITOnsiteServicesPage() {
  const [search_params] = useSearchParams ();
  const [selected_country, setSelectedCountry] = useState < CountryPricing | null>(null);
  const [search_query, setSearchQuery] = useState ("");
;
      toast ({"
        title: "Payment Successful","
        description: "Your IT onsite service request has been received. Our team will contact you shortly."});
    }
  }, [success]);
;
  // Popular countries for the featured cards;"
  const popular_countries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"];
;
  // Filter countries based on search query;
  const filtered_countries = onsiteServicePricing;
    .filter (country =>;
              setSearchQuery={setSearchQuery}
            />

          <ServiceDetailsSection;
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}

          <ServiceProcessSteps />

          <ServiceIncludes />

          <div id="pricing-table" className="my-16">"
</div>"
            <div className="text-center mb-8">"
              <h2 className="text-2xl font-bold text-white mb-4">Full IT Onsite Services Pricing</h2>""
              <p className="text-zion-slate-light mb-6">"
</p>
            <ITServicePricingTable />

          <EnterpriseCallToAction />

      </section>
      <GlobalServiceSection />

      <TrustedBySection />

      <QuoteFormSection />

          <ServiceProcessSteps />;

          <ServiceIncludes />;
              <h2 className="text-2xl font-bold text-white mb-4">"
</h2>
              </h2>"

  const [selected_country, setSelectedCountry] = useState < CountryPricing | null>(null);"
  const [search_query, setSearchQuery] = useState ("");"
;
      toast ({"
        title: "Payment Successful",")"
        description: "Your IT onsite service request has been received. Our team will contact you shortly."});"
  }, [success]);
  // Popular countries for the featured cards;"
  const popular_countries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"];"
  // Filter countries based on search query;
  const filtered_countries = onsiteServicePricing;
    .filter (country =>;)
pr-12325
      country.country.toLowerCase ().includes (search_query.toLowerCase ()));
    .sort ((a, b) => {}
      // First, sort by popular status;
      const aIsPopular = popular_countries.includes (a.country);
      const bIsPopular = popular_countries.includes (b.country);
;
      // Check condition;
if (return -1) {}
  $2;
}
      // Check condition;
if (return 1) {}
  $2;
}
      // Then sort alphabetically;
      return a.country.locale_compare (b.country);
    });
;
  const handleCountrySelect = (country: CountryPricing) =>: any {}
    setSelectedCountry (country),
    // Scroll to the service details section;
    set_timeout (() => {'
      document.getElementById ('service - details')?.scrollIntoView ({ behavior: 'smooth' });
    }, 100);
  }
;
  return (
<AppLayout>;
      <section className="py - 16 bg - zion-blue">;
        <div className="container mx - auto px - 4 sm:px - 6 lg:px-8">;
          {/* Hero Section with Features */}
          <PageHero />;
          {/* Country Selection Tabs */}
<<<<<<< HEAD
          <div className="mb-12">;
=======
          <div className="mb-12">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <CountryTabs;
              popular_countries={popular_countries}
              filtered_countries={filtered_countries}
              handleCountrySelect={handleCountrySelect}
              search_query={search_query}
              setSearchQuery={setSearchQuery}
            />;
          </div>;
          {/* Service Details Section */}
          <ServiceDetailsSection;
            selected_country={selected_country}
            setSelectedCountry={setSelectedCountry}
          />;
          {/* How It Works Section */}
          <ServiceProcessSteps />;'
          {/* What's Included Section */}
          <ServiceIncludes />;
{/* Complete Pricing Table */}
<<<<<<< HEAD
          <div id="pricing - table" className="my-16">;
            <div className="text - center mb-8">;
              <h2 className="text - 2xl font - bold text - white mb-4">Full IT Onsite Services Pricing</h2>;
              <p className="text - zion - slate - light mb-6">;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                Our per - incident prices include transportation costs and the first hour of onsite service.;
                Additional hours are billed separately at standard rates.;
              </p>;
            </div>;
            <ITServicePricingTable />;
          </div>;
          <EnterpriseCallToAction />;
        </div>;
      </section>;
      <GlobalServiceSection />;
      <TrustedBySection />;
      <QuoteFormSection />;
    </AppLayout>);
}
}
  ),; //Show success toast if redirected from successful payment useEffect ( () => {
  if (success === "true") {
  toast ({

}

}

}, [success]);
//Popular countries for the featured cards if (!aIsPopular && bIsPopular) return 1;"
//Then sort alphabetically return (<AppLayout> <section className="py-16 bg-zion-blue"> <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {}
  /* Hero Section with Features */ 
}<PageHero /> <CountryTabs popularCountries= {}
  popularCountries;
}filteredCountries= {}
  filteredCountries;
}handleCountrySelect= {}
  handleCountrySelect;
}searchQuery= {}
  searchQuery;
}setSearchQuery= {}
  setSearchQuery;
}/> </div> {}
  /* Service Details Section */ 
}<ServiceDetailsSection selectedCountry= {}
  selectedCountry;
}setSelectedCountry= {}
  setSelectedCountry;
}/> {}
  /* How It Works Section */ 
}<ServiceProcessSteps /> {'
  /* What's Included Section */ "
}<ServiceIncludes /> <div className="text-center mb-8"> <h2 className="text-2xl font-bold text-white mb-4">Full IT Onsite Services Pricing</h2> <p className="text-zion-slate-light mb-6"> Our per-incident prices include transportation costs and the first hour of onsite service. Additional hours are billed separately at standard rates. </p> </div> <ITServicePricingTable /> </div> <EnterpriseCallToAction /> </div> </section> <GlobalServiceSection /> <TrustedBySection /> <QuoteFormSection /> </AppLayout>) 
}
}
}
;
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      // Check condition;
if (return -1) {
  $2;
      // Check condition;
if (return 1) {
      // Then sort alphabetically;
      return a.country.locale_compare (b.country);
    });
  const handleCountrySelect = (country: CountryPricing) =>: any {
  // TODO: Implement
    setSelectedCountry (country),
    // Scroll to the service details section;
    set_timeout (() => {"
      document.getElementById ('service - details')?.scrollIntoView ({ behavior: 'smooth' });
    }, 100);
  return (

      <section className="py - 16 bg - zion - blue">;"
        <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
          <PageHero />;
          <div className="mb - 12">;"
              popular_countries={popular_countries}
              filtered_countries={filtered_countries}
              search_query={search_query}
            />;

          </div>;
            selected_country={selected_country}

          <div id="pricing - table" className="my - 16">;"
            <div className="text - center mb - 8">;"
              <h2 className="text - 2xl font - bold text - white mb - 4">Full IT Onsite Services Pricing</h2>;""
              <p className="text - zion - slate - light mb - 6">;"
              </p>;
            <ITServicePricingTable />;

          <EnterpriseCallToAction />;

      </section>;
      <GlobalServiceSection />;

      <TrustedBySection />;

      <QuoteFormSection />;
)
    );"
//Then sort alphabetically return (<AppLayout> <section className="py-16 bg-zion-blue"> <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {"

}<PageHero /> <CountryTabs popularCountries= {

}/> </div> {
}<ServiceDetailsSection selectedCountry= {
  selectedCountry;
}setSelectedCountry= {
  setSelectedCountry;
}/> {

}<ServiceProcessSteps /> {
)"
}<ServiceIncludes /> <div className="text-center mb-8"> <h2 className="text-2xl font-bold text-white mb-4">Full IT Onsite Services Pricing</h2> <p className="text-zion-slate-light mb-6"> Our per-incident prices include transportation costs and the first hour of onsite service. Additional hours are billed separately at standard rates. </p> </div> <ITServicePricingTable /> </div> <EnterpriseCallToAction /> </div> </section> <GlobalServiceSection /> <TrustedBySection /> <QuoteFormSection /> )"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
