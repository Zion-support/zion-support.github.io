
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
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes";
import { EnterpriseCallToAction } from "@/components/services/PageSections/EnterpriseCallToAction";
export default function ITOnsiteServicesPage() {
  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),
  const [searchQuery, setSearchQuery] = useState("");
  // Check for success parameter in URL
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const success = searchParams.get("success");
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes",
import { EnterpriseCallToAction } from "@/components/services/PageSections/EnterpriseCallToAction",
export default function ITOnsiteServicesPage() {
  const [searchParams] = useSearchParams(),
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState(""),
  
  // Check for success parameter in URL
  const success = searchParams.get("success"),
  
=======

  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [searchQuery, setSearchQuery] = useState("");



  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Show success toast if redirected from successful payment
  useEffect(() => {
    if (success === "true") {
      toast({
        title: "Payment Successful"
        description: "Your IT onsite service request has been received. Our team will contact you shortly."})
    }
<<<<<<< HEAD

<<<<<<< HEAD
  }, [success]);
  // Popular countries for the featured cards
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"];
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }, [success]);
  // Popular countries for the featured cards
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }, [success]),
  
  // Popular countries for the featured cards
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"],
  
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const aIsPopular = popularCountries.includes(a.country);
      const bIsPopular = popularCountries.includes(b.country);
      if (aIsPopular && !bIsPopular) return -1;
      if (!aIsPopular && bIsPopular) return 1;
      // Then sort alphabetically
      return a.country.localeCompare(b.country)
    });
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const aIsPopular = popularCountries.includes(a.country),
      const bIsPopular = popularCountries.includes(b.country),
      
      if (aIsPopular && !bIsPopular) return -1,
      if (!aIsPopular && bIsPopular) return 1,
      
      // Then sort alphabetically
      return a.country.localeCompare(b.country)
    }),
  
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  },
  

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }

  },
  
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <AppLayout>
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  // Check for success parameter in URL;
  const success = searchParams && searchParams.get("success");

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Show success toast if redirected from successful payment;
  useEffect(() => {;
    if (success === "true") {;
      toast({;
<<<<<<< HEAD
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
        title: "Payment Successful",;
        description: "Your IT onsite service request has been received. Our team will contact you shortly."});
    }
<<<<<<< HEAD
  }, [success]),;
  // Popular countries for the featured cards;
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"],;
  // Filter countries based on search query;
  const filteredCountries = onsiteServicePricing;
    .filter(country =>;
      country.country.toLowerCase().includes(searchQuery.toLowerCase());
    );
    .sort((a, b) => {;
      // First, sort by popular status;
      const aIsPopular = popularCountries.includes(a.country),;
      const bIsPopular = popularCountries.includes(b.country),;
          <PageHero />;
          <div className="mb-12">;
            <CountryTabs

            <CountryTabs 

              popularCountries={popularCountries}
              filteredCountries={filteredCountries}
          ;
          {/* Country Selection Tabs */}
          <div className="mb-12">;
            <CountryTabs ;
              popularCountries={popularCountries}              filteredCountries={filteredCountries}
              handleCountrySelect={handleCountrySelect}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />;
          </div>;
          ;
          {/* Service Details Section */}
          <ServiceDetailsSection ;
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
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
          {/* Hero Section with Features */}
          <PageHero />
          {/* Country Selection Tabs */}
          <div className="mb-12">
            <CountryTabs
            <CountryTabs 
=======
=======
        title: "Payment Successful",;
        description: "Your IT onsite service request has been received. Our team will contact you shortly."});
    }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
    <AppLayout>;
      <section className="py-16 bg-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Hero Section with Features */}

          <PageHero />;

          {/* Country Selection Tabs */}
<<<<<<< HEAD
          <div className="mb-12">;

            <CountryTabs
=======

            <CountryTabs 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <div className="mb-12">
            <CountryTabs
            <CountryTabs 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              popularCountries={popularCountries}
              filteredCountries={filteredCountries}
              handleCountrySelect={handleCountrySelect}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
<<<<<<< HEAD
<<<<<<< HEAD
            />
          </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            />;
          </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Service Details Section */}
          <ServiceDetailsSection
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
<<<<<<< HEAD
<<<<<<< HEAD
          />
          {/* How It Works Section */}
          <ServiceProcessSteps />
          {/* What's Included Section */}
          <ServiceIncludes />
=======

          />;

          {/* How It Works Section */}
          <ServiceProcessSteps />;

          {/* What's Included Section */}
          <ServiceIncludes />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Complete Pricing Table */}
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          />;
          ;
          {/* How It Works Section */}
          <ServiceProcessSteps />;
          ;
          {/* What's Included Section */}
          <ServiceIncludes />;
          ;
          {/* Complete Pricing Table */}
          <div id="pricing-table" className="my-16">;
            <div className="text-center mb-8">;
              <h2 className="text-2xl font-bold text-white mb-4">Full IT Onsite Services Pricing</h2>;
              <p className="text-zion-slate-light mb-6">;
                Our per-incident prices include transportation costs and the first hour of onsite service.;
                Additional hours are billed separately at standard rates.;
              </p>;
            </div>;
            ;
            <ITServicePricingTable />;
          </div>;
          ;
          <EnterpriseCallToAction />;
        </div>;
      </section>;
      ;
      <GlobalServiceSection />;
      <TrustedBySection />;
      <QuoteFormSection />;
    </AppLayout>;
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
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  ),; //Show success toast if redirected from successful payment useEffect ( () => {
  if (success === "true") {
  toast ({
  
}

}

<<<<<<< HEAD
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
}
}
}
;
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
