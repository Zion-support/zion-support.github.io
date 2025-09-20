import { useSearchParams  } from 'react-router-dom',
export default function Page() {
) ,
  const handleCountrySelect = country => {
    setSelectedCountry(country) ,
    // Scroll to the service details section
    setTimeout(() => {
      document
        .getElementById('service - details') ?.scrollIntoView({ behavior: 'smooth' }) ,
    }, 100) ,
  },
  return ((<section className="py-16 bg-zion -blue">
        <div className="container mx - auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section with Features */}
          <PageHero />

          {/* Country Selection Tabs */}
          <div className="mb-12">
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
          <div id="pricing - table" className="my -16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font - bold text-white mb-4">
                Full IT Onsite Services Pricing
              </h2>
              <p className="text-zion - slate - light mb-6">
                Our per - incident prices include transportation costs and the
                first hour of onsite service.Additional hours are billed
                separately at standard rates.</p>
            </div>

            <ITServicePricingTable />
          </div>

          <EnterpriseCallToAction />
        </div>
      </section>) , (<GlobalServiceSection />) , (<TrustedBySection />) , (<QuoteFormSection />) ) ,
}
