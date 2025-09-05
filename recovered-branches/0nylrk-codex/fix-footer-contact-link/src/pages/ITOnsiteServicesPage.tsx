
<<<<<<< HEAD
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
import { ServiceIncludes } from "@/components/services/PageSections/ServiceIncludes",
import { EnterpriseCallToAction } from "@/components/services/PageSections/EnterpriseCallToAction",
export default function ITOnsiteServicesPage() {
  const [searchParams] = useSearchParams(),
  const [selectedCountry, setSelectedCountry] = useState<CountryPricing | null>(null),
  const [searchQuery, setSearchQuery] = useState(""),
  
  // Check for success parameter in URL
  const success = searchParams.get("success"),
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // Show success toast if redirected from successful payment
  useEffect(() => {
    if (success === &quot;true&quot;) {
      toast({
<<<<<<< HEAD
        title: "Payment Successful",
        description: "Your IT onsite service request has been received. Our team will contact you shortly."})
=======
        title: &quot;Payment Successful&quot;,
        description: &quot;Your IT onsite service request has been received. Our team will contact you shortly.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======

export default function ITOnsiteServicesPage() {_const [searchParams] = useSearchParams();
  const [selectedCountry, _setSelectedCountry] = useState<CountryPricing | null>(null);
  const [searchQuery, _setSearchQuery] = useState("");
  
  // Check for success parameter in window.URL
  const _success = searchParams.get("success");
  
  // Show success toast if redirected from successful payment
  useEffect__(() => {
    if (success === "true") {
      toast({
        title: "Payment Successful", _description: "Your IT onsite service request has been received. Our team will contact you shortly."});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, [success]),
  
  // Popular countries for the featured cards
<<<<<<< HEAD
<<<<<<< HEAD
  const popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"],
=======
  const popularCountries = [&quot;United States&quot;, &quot;United Kingdom&quot;, &quot;Canada&quot;, &quot;Germany&quot;, &quot;Japan&quot;, &quot;Singapore"];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _popularCountries = ["United States", "United Kingdom", "Canada", "Germany", "Japan", "Singapore"];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Filter countries based on search query
  const _filteredCountries = onsiteServicePricing
    .filter(country => 
      country.country.toLowerCase().includes(searchQuery.toLowerCase())
    )
<<<<<<< HEAD
    .sort((a, b) => {
      // First, sort by popular status
      const aIsPopular = popularCountries.includes(a.country),
      const bIsPopular = popularCountries.includes(b.country),
=======
    .sort(_(a, _b) => {_// First, _sort by popular status
      const _aIsPopular = popularCountries.includes(a.country);
      const _bIsPopular = popularCountries.includes(b.country);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      if (aIsPopular && !bIsPopular) return -1,
      if (!aIsPopular && bIsPopular) return 1,
      
      // Then sort alphabetically
<<<<<<< HEAD
      return a.country.localeCompare(b.country)
    }),
  
  const handleCountrySelect = (country: CountryPricing) => {
    setSelectedCountry(country),
    
    // Scroll to the service details section
    setTimeout(() => {
      document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  },
=======
      return a.country.localeCompare(b.country);});
  
  const _handleCountrySelect = (_country: CountryPricing) => {_setSelectedCountry(country);
    
    // Scroll to the service details section
    setTimeout__(() => {
      document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth'});
    }, 100);
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <AppLayout>
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {_/* Hero Section with Features */}
          <PageHero />
          
<<<<<<< HEAD
          {/* Country Selection Tabs */}
          <div className="mb-12&quot;>
=======
          {_/* Country Selection Tabs */}
          <div className="mb-12">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <CountryTabs 
              popularCountries={_popularCountries}
              filteredCountries={_filteredCountries}
              handleCountrySelect={_handleCountrySelect}
              searchQuery={_searchQuery}
              setSearchQuery={_setSearchQuery}
            />
          </div>
          
          {_/* Service Details Section */}
          <ServiceDetailsSection 
            selectedCountry={_selectedCountry}
            setSelectedCountry={_setSelectedCountry}
          />
          
          {_/* How It Works Section */}
          <ServiceProcessSteps />
          
          {_/* What's Included Section */}
          <ServiceIncludes />
          
<<<<<<< HEAD
          {/* Complete Pricing Table */}
          <div id=&quot;pricing-table" className="my-16">
=======
          {_/* Complete Pricing Table */}
          <div id="pricing-table" className="my-16">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
}
