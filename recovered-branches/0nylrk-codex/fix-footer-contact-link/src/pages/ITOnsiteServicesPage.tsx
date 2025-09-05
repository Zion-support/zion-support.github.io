
import { useState, useEffect } from &quot;react&quot;;
import { useSearchParams } from &quot;react-router-dom&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;
import { ITServicePricingTable } from &quot;@/components/services/ITServicePricingTable&quot;;
import { GlobalServiceSection } from &quot;@/components/GlobalServiceSection&quot;;
import { QuoteFormSection } from &quot;@/components/QuoteFormSection&quot;;
import { TrustedBySection } from &quot;@/components/TrustedBySection&quot;;
import { CountryPricing, onsiteServicePricing } from &quot;@/data/onsiteServicePricing&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { PageHero } from &quot;@/components/services/PageSections/PageHero&quot;;
import { CountryTabs } from &quot;@/components/services/PageSections/CountryTabs&quot;;
import { ServiceDetailsSection } from &quot;@/components/services/PageSections/ServiceDetailsSection&quot;;
import { ServiceProcessSteps } from &quot;@/components/services/PageSections/ServiceProcessSteps&quot;;
import { ServiceIncludes } from &quot;@/components/services/PageSections/ServiceIncludes&quot;;
import { EnterpriseCallToAction } from &quot;@/components/services/PageSections/EnterpriseCallToAction&quot;;

export default function ITOnsiteServicesPage() {
  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null);
  const [searchQuery, setSearchQuery] = useState("&quot;);
  
  // Check for success parameter in URL
  const success = searchParams.get(&quot;success&quot;);
  
  // Show success toast if redirected from successful payment
  useEffect(() => {
    if (success === &quot;true&quot;) {
      toast({
        title: &quot;Payment Successful&quot;,
        description: &quot;Your IT onsite service request has been received. Our team will contact you shortly.&quot;});
    }
  }, [success]);
  
  // Popular countries for the featured cards
  const popularCountries = [&quot;United States&quot;, &quot;United Kingdom&quot;, &quot;Canada&quot;, &quot;Germany&quot;, &quot;Japan&quot;, &quot;Singapore"];
  
  // Filter countries based on search query
  const filteredCountries = onsiteServicePricing
    .filter(country => 
      country.country.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      // First, sort by popular status
      const aIsPopular = popularCountries.includes(a.country);
      const bIsPopular = popularCountries.includes(b.country);
      
      if (aIsPopular && !bIsPopular) return -1;
      if (!aIsPopular && bIsPopular) return 1;
      
      // Then sort alphabetically
      return a.country.localeCompare(b.country);
    });
  
  const handleCountrySelect = (country: CountryPricing) => {
    setSelectedCountry(country);
    
    // Scroll to the service details section
    setTimeout(() => {
      document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <AppLayout>
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section with Features */}
          <PageHero />
          
          {/* Country Selection Tabs */}
          <div className="mb-12&quot;>
            <CountryTabs 
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
          <div id=&quot;pricing-table" className="my-16">
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
  );
}
