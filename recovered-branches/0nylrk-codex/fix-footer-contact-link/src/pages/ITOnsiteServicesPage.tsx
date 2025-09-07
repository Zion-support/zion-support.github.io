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
              popularCountries={popularCountries}
              filteredCountries={filteredCountries}
              handleCountrySelect={handleCountrySelect}
              searchQuery={searchQuery}
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
      country.country.toLowerCase ().includes (search_query.toLowerCase ()));
    .sort ((a, b) => {
      // First, sort by popular status;
      const aIsPopular = popular_countries.includes (a.country);
      const bIsPopular = popular_countries.includes (b.country);
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