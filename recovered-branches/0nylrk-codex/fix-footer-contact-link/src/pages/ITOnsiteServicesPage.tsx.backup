<<<<<<< HEAD

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


=======
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

import { EnterpriseCallToAction } from "@/components/services/PageSections/EnterpriseCallToAction";
export default function ITOnsiteServicesPage() {};
  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(
    null,
  );"
  const [searchQuery, setSearchQuery] = useState("");

  // Check for success parameter in URL"
  const success = searchParams.get("success");


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======
  }, [success]);
  // Popular countries for the featured cards
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"];
>>>>>>> origin/cursor/delete-old-data-records-6bba

  }, [success]),
  
  // Popular countries for the featured cards
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"],

<<<<<<< HEAD
  

=======

  // Popular countries for the featured cards;
  const popularCountries = ["
    "United States","
    "United Kingdom","
    "Canada","
    "Germany","
    "Japan","
    "Singapore",
  ];

>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Filter countries based on search query
  const filteredCountries = onsiteServicePricing
    .filter((country) =>
      country.country.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      // First, sort by popular status

      const aIsPopular = popularCountries.includes(a.country);
      const bIsPopular = popularCountries.includes(b.country);

      if (aIsPopular && !bIsPopular) return -1;
      if (!aIsPopular && bIsPopular) return 1;

  const handleCountrySelect = (country: CountryPricing) => {

    setSelectedCountry(country)
    // Scroll to the service details section
    setTimeout(() => {
      document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' })

  },

    (setSelectedCountry(country),
      // Scroll to the service details section;
      setTimeout(() => {}
        document"
          .getElementById("service-details")"
          ?.scrollIntoView({ behavior: "smooth" });

  }

  },
<<<<<<< HEAD



=======
  
import { ServiceProcessSteps } from "@/components/services/PageSections/ServiceProcessSteps",
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes";
import { EnterpriseCallToAction } from "@/components/services/PageSections/EnterpriseCallToAction";
export default function ITOnsiteServicesPage() {
  const [searchParams] = useSearchParams($2);
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),
  const [searchQuery, setSearchQuery] = useState($2);
  // Check for success parameter in URL
  const success = searchParams.get($2);
  // Show success toast if redirected from successful payment
  useEffect(() => {
    if (success = $2;
        description: "Your IT onsite service request has been received. Our team will contact you shortly."})
    }
  }, [success]),
  
  // Popular countries for the featured cards
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"],
  
  // Filter countries based on search query
    .filter(country =>
      country.country.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      // First, sort by popular status

      const aIsPopular = popularCountries.includes($2);
      const bIsPopular = popularCountries.includes($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (aIsPopular && !bIsPopular) return -1,
      if (!aIsPopular && bIsPopular) return 1,
      
      // Then sort alphabetically
      return a.country.localeCompare(b.country)
    }),
  

<<<<<<< HEAD

=======
    setSelectedCountry($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Scroll to the service details section
    setTimeout(() => {
      document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)

<<<<<<< HEAD



  },
  

=======
  },
  


  }

  },
  
  return (
    <AppLayout>"
      <section className="py-16 bg-zion-blue">"
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

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


  // Show success toast if redirected from successful payment;
  useEffect(() => {;
    if (success === "true") {;
      toast({;

        title: "Payment Successful",
        description: "Your IT onsite service request has been received. Our team will contact you shortly."});
        title: "Payment Successful",,
  description: "Your IT onsite service request has been received. Our team will contact you shortly."});
    }
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
          {/* Hero Section with Features */}
          <PageHero />

          {/* Country Selection Tabs */}"
          <div className="mb-12">

>>>>>>> origin/cursor/delete-old-data-records-6bba

              popularCountries={popularCountries}
              filteredCountries={filteredCountries}
              handleCountrySelect={handleCountrySelect}
              searchQuery={searchQuery}


          <ServiceDetailsSection

            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

          <div id="pricing - table" className="my-16">;
            <div className="text - center mb-8">;
              <h2 className="text - 2xl font - bold text - white mb-4">Full IT Onsite Services Pricing</h2>;
              <p className="text - zion - slate - light mb-6">;

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
  
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

}


<<<<<<< HEAD



=======
}<ServiceIncludes /> <div className="text-center mb-8"> <h2 className="text-2xl font-bold text-white mb-4">Full IT Onsite Services Pricing</h2> <p className="text-zion-slate-light mb-6"> Our per-incident prices include transportation costs and the first hour of onsite service. Additional hours are billed separately at standard rates. </p> </div> <ITServicePricingTable /> </div> <EnterpriseCallToAction /> </div> </section> <GlobalServiceSection /> <TrustedBySection /> <QuoteFormSection /> </AppLayout>) 
}
}
}
;

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
