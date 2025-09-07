// Show success toast if redirected from successful payment;
  useEffect(() => {;
    if (success === "true") {;
      toast({;

    <AppLayout>;
      <section className="py-16 bg-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          {/* Hero Section with Features */}
          <PageHero />;

              handleCountrySelect={handleCountrySelect}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />;
          </div>;

          {/* Service Details Section */}
          <ServiceDetailsSection ;
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />;

          {/* Complete Pricing Table */}
          <div id="pricing-table" className="my-16">;
            <div className="text-center mb-8">;
              <h2 className="text-2xl font-bold text-white mb-4">Full IT Onsite Services Pricing</h2>;
              <p className="text-zion-slate-light mb-6">;
                Our per-incident prices include transportation costs and the first hour of onsite service.;
                Additional hours are billed separately at standard rates.;
              </p>;
            </div>;

      <GlobalServiceSection />;
      <TrustedBySection />;
      <QuoteFormSection />;
    </AppLayout>;

}