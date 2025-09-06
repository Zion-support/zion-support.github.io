<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx

<<<<<<< HEAD

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

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx

  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),
  const [searchQuery, setSearchQuery] = useState("");



  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Check for success parameter in URL
  const success = searchParams.get("success");
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes";
import { EnterpriseCallToAction } from "@/components/services/PageSections/EnterpriseCallToAction";
export default function ITOnsiteServicesPage() {
  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),
  const [searchQuery, setSearchQuery] = useState("");
  // Check for success parameter in URL

  const success = searchParams.get("success");
=======
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes",
import { EnterpriseCallToAction } from "@/components/services/PageSections/EnterpriseCallToAction",
export default function ITOnsiteServicesPage() {
  const [searchParams] = useSearchParams(),
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),
  const [searchQuery, setSearchQuery] = useState(""),
  
  // Check for success parameter in URL
  const success = searchParams.get("success"),
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Show success toast if redirected from successful payment
  useEffect(() => {
    if (success === "true") {
      toast({
        title: "Payment Successful"
        description: "Your IT onsite service request has been received. Our team will contact you shortly."})
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
  }, [success]);
  // Popular countries for the featured cards
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"];
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }, [success]),
  
  // Popular countries for the featured cards
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"],
  
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Filter countries based on search query
  const filteredCountries = onsiteServicePricing
    .filter(country =>
      country.country.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      // First, sort by popular status
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
      const aIsPopular = popularCountries.includes(a.country);
      const bIsPopular = popularCountries.includes(b.country);
      if (aIsPopular && !bIsPopular) return -1;
      if (!aIsPopular && bIsPopular) return 1;
      // Then sort alphabetically
      return a.country.localeCompare(b.country)
    });
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      const aIsPopular = popularCountries.includes(a.country),
      const bIsPopular = popularCountries.includes(b.country),
      
      if (aIsPopular && !bIsPopular) return -1,
      if (!aIsPopular && bIsPopular) return 1,
      
      // Then sort alphabetically
      return a.country.localeCompare(b.country)
    }),
  
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleCountrySelect = (country: CountryPricing) => {
    setSelectedCountry(country)
    // Scroll to the service details section
    setTimeout(() => {
      document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
<<<<<<< HEAD
<<<<<<< HEAD

=======


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
    <AppLayout>
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
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

========
  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),
  const [searchQuery, setSearchQuery] = useState("");
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx
  // Check for success parameter in URL;
  const success = searchParams && searchParams.get("success");
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  // Check for success parameter in URL;
  const success = searchParams.get("success"),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Show success toast if redirected from successful payment;
  useEffect(() => {;
    if (success === "true") {;
      toast({;
<<<<<<< HEAD
<<<<<<< HEAD
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
    }, 100);
  };
  return (
=======
        title:"Payment Successful",;
        description:"Your IT onsite service request has been received. Our team will contact you shortly."}),;
    }
  }, [success]),;
  ;
  // Popular countries for the featured cards;
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"],;
  ;
  // Filter countries based on search query;
  const filteredCountries = onsiteServicePricing;
    .filter(country => ;
=======
        title: "Payment Successful",;
        description: "Your IT onsite service request has been received. Our team will contact you shortly."});
    }
  }, [success]),;
  // Popular countries for the featured cards;
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"],;
  // Filter countries based on search query;
  const filteredCountries = onsiteServicePricing;
    .filter(country =>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      country.country.toLowerCase().includes(searchQuery.toLowerCase());
    );
    .sort((a, b) => {;
      // First, sort by popular status;
      const aIsPopular = popularCountries.includes(a.country),;
      const bIsPopular = popularCountries.includes(b.country),;
<<<<<<< HEAD
      ;
      if (aIsPopular && !bIsPopular) return -1,;
      if (!aIsPopular && bIsPopular) return 1,;
      ;
      // Then sort alphabetically;
      return a.country.localeCompare(b.country),;
    }),;
  ;
  const handleCountrySelect = (country:CountryPricing) => {;
    setSelectedCountry(country),;
    ;
    // Scroll to the service details section;
    setTimeout(() => {;
      document.getElementById('service-details')?.scrollIntoView({ behavior:'smooth' }),;
    }, 100),;
  },;
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <AppLayout>;
      <section className="py-16 bg-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {/* Hero Section with Features */}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx
          <PageHero />;
<<<<<<< HEAD
          {/* Country Selection Tabs */}
<<<<<<< HEAD
          <div className="mb-12">

=======
          <div className="mb-12">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx
            <CountryTabs
=======

            <CountryTabs 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              popularCountries={popularCountries}
              filteredCountries={filteredCountries}
=======
          ;
          {/* Country Selection Tabs */}
          <div className="mb-12">;
            <CountryTabs ;
              popularCountries={popularCountries}              filteredCountries={filteredCountries}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              handleCountrySelect={handleCountrySelect}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx

            />;
          </div>;


========
            />;
          </div>;
<<<<<<< HEAD
=======
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx
          {/* Service Details Section */}
          <ServiceDetailsSection ;
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx

          />;

          {/* How It Works Section */}
          <ServiceProcessSteps />;

          {/* What's Included Section */}
          <ServiceIncludes />;

          {/* Complete Pricing Table */}
<<<<<<< HEAD
=======
      if (aIsPopular && !bIsPopular) return -1,;
      if (!aIsPopular && bIsPopular) return 1,;
      // Then sort alphabetically;
      return a.country.localeCompare(b.country);
    }),;
  const handleCountrySelect = (country: CountryPricing) => {;
    setSelectedCountry(country);
    // Scroll to the service details section;
    setTimeout(() => {;
      document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  return (;
    <AppLayout>;
      <section className="py-16 bg-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {/* Hero Section with Features */}
          <PageHero />
          {/* Country Selection Tabs */}
          <div className="mb-12">
<<<<<<< HEAD
            <CountryTabs
=======
            <CountryTabs 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              popularCountries={popularCountries}
              filteredCountries={filteredCountries}
              handleCountrySelect={handleCountrySelect}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          {/* Service Details Section */}
          <ServiceDetailsSection
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
          {/* How It Works Section */}
          <ServiceProcessSteps />
          {/* What's Included Section */}
          <ServiceIncludes />
          {/* Complete Pricing Table */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div id="pricing-table" className="my-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Full IT Onsite Services Pricing</h2>
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

=======
========
          />;
<<<<<<< HEAD
          {/* How It Works Section */}
          <ServiceProcessSteps />;
          {/* What's Included Section */}
          <ServiceIncludes />;
=======
          ;
          {/* How It Works Section */}
          <ServiceProcessSteps />;
          ;
          {/* What's Included Section */}
          <ServiceIncludes />;
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          {/* Complete Pricing Table */}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx
          <div id="pricing-table" className="my-16">;
            <div className="text-center mb-8">;
              <h2 className="text-2xl font-bold text-white mb-4">Full IT Onsite Services Pricing</h2>;
              <p className="text-zion-slate-light mb-6">;
                Our per-incident prices include transportation costs and the first hour of onsite service.;
                Additional hours are billed separately at standard rates.;
              </p>;
            </div>;
<<<<<<< HEAD
            <ITServicePricingTable />;
          </div>;
          <EnterpriseCallToAction />;
        </div>;
      </section>;
=======
            ;
            <ITServicePricingTable />;
          </div>;
          ;
          <EnterpriseCallToAction />;
        </div>;
      </section>;
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <GlobalServiceSection />;
      <TrustedBySection />;
      <QuoteFormSection />;
    </AppLayout>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx
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
  // Check for success parameter in URL;
  const success = search_params.get ("success");
;
  // Show success toast if redirected from successful payment;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: "Payment Successful",
        description: "Your IT onsite service request has been received. Our team will contact you shortly."});
    }
  }, [success]);
;
  // Popular countries for the featured cards;
  const popular_countries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"];
;
  // Filter countries based on search query;
  const filtered_countries = onsiteServicePricing;
    .filter (country =>;
      country.country.toLowerCase ().includes (search_query.toLowerCase ()));
    .sort ((a, b) => {
      // First, sort by popular status;
      const aIsPopular = popular_countries.includes (a.country);
      const bIsPopular = popular_countries.includes (b.country);
;
      // Check condition
if (return -1) {
  $2
}
      // Check condition
if (return 1) {
  $2
}
      // Then sort alphabetically;
      return a.country.locale_compare (b.country);
    });
;
  const handleCountrySelect = (country: CountryPricing) =>: any {
    setSelectedCountry (country),
    // Scroll to the service details section;
    set_timeout (() => {
      document.getElementById ('service - details')?.scrollIntoView ({ behavior: 'smooth' });
    }, 100);
  }
;
  return (
    <AppLayout>;
      <section className="py - 16 bg - zion - blue">;
        <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;
          {/* Hero Section with Features */}
          <PageHero />;
          {/* Country Selection Tabs */}
          <div className="mb - 12">;
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
          <ServiceProcessSteps />;
          {/* What's Included Section */}
          <ServiceIncludes />;
          {/* Complete Pricing Table */}
          <div id="pricing - table" className="my - 16">;
            <div className="text - center mb - 8">;
              <h2 className="text - 2xl font - bold text - white mb - 4">Full IT Onsite Services Pricing</h2>;
              <p className="text - zion - slate - light mb - 6">;
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
=======
  ),; //Show success toast if redirected from successful payment useEffect ( () => {
  if (success === "true") {
  toast ({
  
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}, [success]);
//Popular countries for the featured cards if (!aIsPopular && bIsPopular) return 1;
//Then sort alphabetically return (<AppLayout> <section className="py-16 bg-zion-blue"> <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {
  /* Hero Section with Features */ 
}<PageHero /> <CountryTabs popularCountries= {
  popularCountries 
}filteredCountries= {
  filteredCountries 
}handleCountrySelect= {
  handleCountrySelect 
}searchQuery= {
  searchQuery 
}setSearchQuery= {
  setSearchQuery 
}/> </div> {
  /* Service Details Section */ 
}<ServiceDetailsSection selectedCountry= {
  selectedCountry 
}setSelectedCountry= {
  setSelectedCountry 
}/> {
  /* How It Works Section */ 
}<ServiceProcessSteps /> {
  /* What's Included Section */ 
}<ServiceIncludes /> <div className="text-center mb-8"> <h2 className="text-2xl font-bold text-white mb-4">Full IT Onsite Services Pricing</h2> <p className="text-zion-slate-light mb-6"> Our per-incident prices include transportation costs and the first hour of onsite service. Additional hours are billed separately at standard rates. </p> </div> <ITServicePricingTable /> </div> <EnterpriseCallToAction /> </div> </section> <GlobalServiceSection /> <TrustedBySection /> <QuoteFormSection /> </AppLayout>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ITOnsiteServicesPage.tsx
=======
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
