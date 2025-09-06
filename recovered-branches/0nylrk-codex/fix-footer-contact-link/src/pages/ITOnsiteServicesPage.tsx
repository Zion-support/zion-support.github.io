<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD

  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),
  const [searchQuery, setSearchQuery] = useState("");



  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
import { ServiceProcessSteps } from "@/components/services/PageSections/ServiceProcessSteps",
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AppLayout } from "@/layout/AppLayout";
import { ITServicePricingTable } from "@/components/services/ITServicePricingTable";
import { GlobalServiceSection } from "@/components/GlobalServiceSection";
import { QuoteFormSection } from "@/components/QuoteFormSection";
<<<<<<< HEAD
=======
import { useState, useEffect } from "react";"
import { useSearchParams } from "react-router-dom";"
import { AppLayout } from "@/layout/AppLayout";"
import { ITServicePricingTable } from "@/components/services/ITServicePricingTable";"
import { GlobalServiceSection } from "@/components/GlobalServiceSection";"
import { QuoteFormSection } from "@/components/QuoteFormSection";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { TrustedBySection } from "@/components/TrustedBySection";
import {}
  CountryPricing,
<<<<<<< HEAD
=======
import { TrustedBySection } from "@/components/TrustedBySection";
import {
  CountryPricing,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  onsiteServicePricing,
} from "@/data/onsiteServicePricing";
import { toast } from "@/hooks/use-toast";
import { PageHero } from "@/components/services/PageSections/PageHero";
import { CountryTabs } from "@/components/services/PageSections/CountryTabs";
import { ServiceDetailsSection } from "@/components/services/PageSections/ServiceDetailsSection";
import { ServiceProcessSteps } from "@/components/services/PageSections/ServiceProcessSteps";
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes";
=======
import { ServiceProcessSteps } from "@/components/services/PageSections/ServiceProcessSteps",import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { ServiceProcessSteps } from "@/components/services/PageSections/ServiceProcessSteps",import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  // Show success toast if redirected from successful payment
  useEffect(() => {
    if (success === "true") {
      toast({
=======
  // Show success toast if redirected from successful payment;
  useEffect(() => {"
    if (success === "true") {}
      toast({"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        title: "Payment Successful",
        description:"
          "Your IT onsite service request has been received. Our team will contact you shortly.",
      });
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }, [success]);
  // Popular countries for the featured cards
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }, [success]),
  
  // Popular countries for the featured cards
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"],
  
<<<<<<< HEAD
=======
  }, [success]);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======




  // Filter countries based on search query;
  const filteredCountries = onsiteServicePricing;
    .filter((country) =>
      country.country.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {}
      // First, sort by popular status;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const aIsPopular = popularCountries.includes(a.country);
      const bIsPopular = popularCountries.includes(b.country);

      if (aIsPopular && !bIsPopular) return -1;
      if (!aIsPopular && bIsPopular) return 1;

<<<<<<< HEAD
      // Then sort alphabetically;
      return a.country.localeCompare(b.country);
    });

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleCountrySelect = (country: CountryPricing) => {
<<<<<<< HEAD
=======
  const handleCountrySelect = (country: CountryPricing) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const handleCountrySelect = (country: CountryPricing) => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    setSelectedCountry(country)
    // Scroll to the service details section
    setTimeout(() => {
      document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' })
<<<<<<< HEAD
<<<<<<< HEAD
    }, 100)
<<<<<<< HEAD

=======

<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  },
  
=======
=======
    }, 100)  const handleCountrySelect = (country: CountryPricing) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
      }, 100));
  };
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
      }, 100))
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      }, 100))
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  }

  },
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      }, 100));
  };

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <AppLayout>"
      <section className="py-16 bg-zion-blue">"
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  // Check for success parameter in URL;
  const success = searchParams && searchParams.get("success");

<<<<<<< HEAD
=======
  const [searchParams] = useSearchParams();
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Show success toast if redirected from successful payment;
  useEffect(() => {;
    if (success === "true") {;
      toast({;
        title: "Payment Successful",;
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
<<<<<<< HEAD
<<<<<<< HEAD
    }, 100);
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    }, 100);
  };

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <AppLayout>;
      <section className="py-16 bg-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
import { useState, useEffect } from "react",;"
import { useSearchParams } from "react-router-dom",;"
import { AppLayout } from "@/layout/AppLayout",;"
import { ITServicePricingTable } from "@/components/services/ITServicePricingTable",;"
import { GlobalServiceSection } from "@/components/GlobalServiceSection",;"
import { QuoteFormSection } from "@/components/QuoteFormSection",;"
import { TrustedBySection } from "@/components/TrustedBySection",;"
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",;"
import { toast } from "@/hooks/use-toast",;"
import { PageHero } from "@/components/services/PageSections/PageHero",;"
import { CountryTabs } from "@/components/services/PageSections/CountryTabs",;"
import { ServiceDetailsSection } from "@/components/services/PageSections/ServiceDetailsSection",;"
import { ServiceProcessSteps } from "@/components/services/PageSections/ServiceProcessSteps",;"
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes",;"
import { EnterpriseCallToAction } from "@/components/services/PageSections/EnterpriseCallToAction",;
export default function ITOnsiteServicesPage() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          {/* Hero Section with Features */}
          <PageHero />

          {/* Country Selection Tabs */}"
          <div className="mb-12">
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            <CountryTabs
<<<<<<< HEAD
            <CountryTabs 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          <div className="mb-12">
            <CountryTabs
            <CountryTabs 
          {/* Hero Section with Features */}
            <CountryTabs
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
              popularCountries={popularCountries}
              filteredCountries={filteredCountries}
              handleCountrySelect={handleCountrySelect}
              searchQuery={searchQuery}
<<<<<<< HEAD
<<<<<<< HEAD
              setSearchQuery={setSearchQuery}          {/* Service Details Section */}
=======
              setSearchQuery={setSearchQuery}
            />
          </div>

            />
          </div>
          {/* Service Details Section */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
          />;
          ;
          {/* How It Works Section */}
          <ServiceProcessSteps />;
          ;'
          {/* What's Included Section */}
          <ServiceIncludes />;
          ;
<<<<<<< HEAD
          {/* Complete Pricing Table */}
          <div id="pricing-table" className="my-16">
            <div className="text-center mb-8">
=======

          {/* Complete Pricing Table */}"
          <div id="pricing-table" className="my-16">"
            <div className="text-center mb-8">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
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

=======


'
import { useState, useEffect } from './react';'
import { useSearchParams } from './react-router-dom';'
import { AppLayout } from '@/layout / AppLayout';'
import { ITServicePricingTable } from '@/components / services / ITServicePricingTable';'
import { GlobalServiceSection } from '@/components / GlobalServiceSection';'
import { QuoteFormSection } from '@/components / QuoteFormSection';'
import { TrustedBySection } from '@/components / TrustedBySection';'
import { CountryPricing, onsiteServicePricing } from '@/data / onsiteServicePricing';'
import { toast } from '@/hooks / use - toast';'
import { PageHero } from '@/components / services / PageSections / PageHero';'
import { CountryTabs } from '@/components / services / PageSections / CountryTabs';'
import { ServiceDetailsSection } from '@/components / services / PageSections / ServiceDetailsSection';'
import { ServiceProcessSteps } from '@/components / services / PageSections / ServiceProcessSteps';'
import { ServiceIncludes } from '@/components / services / PageSections / ServiceIncludes';'
import { EnterpriseCallToAction } from '@/components / services / PageSections / EnterpriseCallToAction';
export default /**;
 * ITOnsiteServicesPage - Function description;
 */
function ITOnsiteServicesPage() {}
  const [search_params] = useSearchParams ();
  const [selected_country, setSelectedCountry] = useState < CountryPricing | null>(null);"
  const [search_query, setSearchQuery] = useState ("");



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
    <AppLayout>;
      <section className="py - 16 bg - zion - blue">;
        <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;
          {/* Hero Section with Features */}
          <PageHero />;
          {/* Country Selection Tabs */}
<<<<<<< HEAD
          <div className="mb-12">;
=======
    <AppLayout>;"
      <section className="py - 16 bg - zion - blue">;"
        <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;
          {/* Hero Section with Features */}
          <PageHero />;
          {/* Country Selection Tabs */}"
          <div className="mb - 12">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <div className="mb - 12">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
          {/* Complete Pricing Table */}
<<<<<<< HEAD
          <div id="pricing - table" className="my-16">;
            <div className="text - center mb-8">;
              <h2 className="text - 2xl font - bold text - white mb-4">Full IT Onsite Services Pricing</h2>;
              <p className="text - zion - slate - light mb-6">;
=======
          {/* Complete Pricing Table */}"
          <div id="pricing - table" className="my - 16">;"
            <div className="text - center mb - 8">;"
              <h2 className="text - 2xl font - bold text - white mb - 4">Full IT Onsite Services Pricing</h2>;"
              <p className="text - zion - slate - light mb - 6">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <div id="pricing - table" className="my - 16">;
            <div className="text - center mb - 8">;
              <h2 className="text - 2xl font - bold text - white mb - 4">Full IT Onsite Services Pricing</h2>;
              <p className="text - zion - slate - light mb - 6">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
}

}

  ),; //Show success toast if redirected from successful payment useEffect ( () => {
  if (success === "true") {
  toast ({
  
=======


  ),; //Show success toast if redirected from successful payment useEffect ( () => {"
  if (success === "true") {}
  toast ({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


}

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
