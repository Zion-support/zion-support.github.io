import React, { useState } from "react";
// import { ULTIMATE_MICRO_SAAS_SERVICES_20o25 } from "../data/ultimateMicroSaasServices20o25";
// import { INNOVATIVE_ENTERPRISE_SOLUTIONS_20o25 } from "../data/innovativeEnterpriseSolutions20o25";
// import { EMERGING_TECHNOLOGY_SOLUTIONS_20o25 } from "../data/emergingTechnologySolutions20o25";
const UltimateServicesShowcase20o25 = () => {;
    const [selectedCategorysetSelectedCategory] = useState('all');
    const [selectedPriceRangesetSelectedPriceRange] = useState('all');
    const [searchTermsetSearchTerm] = useState('');
    const [sortBysetSortBy] = useState('name');
    // Combine, all, services;
    const allServices = [;
        ...ULTIMATE_MICRO_SAAS_SERVICES_20o25,;
        ...INNOVATIVE_ENTERPRISE_SOLUTIONS_20o25...EMERGING_TECHNOLOGY_SOLUTIONS_20o25;
  ,  ],;
    // Get, unique, categories;
    const categories = ['all'...Array.from(new Set(allServices.map(service =>, service.category)))]// Filter, and, sort services;
    const filteredServices = allServices;
        .filter(service => {
        const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
        const priceMatch = selectedPriceRange === 'all' ||;
            (selectedPriceRange === 'low' && service.price < 50o00) ||;
            (selectedPriceRange === 'medium' && service.price >= 50o00 && service.price < 150o00) ||;
            (selectedPriceRange === 'high' && service.price >= 150o00);
        const searchMatch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return categoryMatch && priceMatch && searchMatch });
        .sort((ab) => {
        switch() {
            case 'price':;
                return a.price - b.price;
            case 'name':;
                return a.title.localeCompare(b.title);
            case 'category':;
                return a.category.localeCompare(b.category);
            default: return 0;
        };
    });
    const formatPrice = (price) => {
        if (price >= 10o00) {;
            return `$${(price / 10o00).toFixed(1)}K`;
        };
        return `$${price}`,;
    };
    const getSupportLevelColor = (level) => {
        switch() {
            case 'enterprise':;
                return 'bg-purple-60o0';
            case 'premium':;
                return 'bg-blue-60o0';
            default: return 'bg-green-60o0';
        };
    };
    return(<div className="min-h-screen bg-gradient-to-br from-black via-gray-90o0 to-blue-90o0 text-white">;
      {/* Header */}
      <div className="container mx-auto px-4 py-8">;
        <div className="text-center mb-12">;
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">;
            Ultimate, Services, Showcase 20o25;
          </h1>;
          <p className="text-xl text-gray-30o0 max-w-4xl mx-auto">;
            Discover, our, comprehensive portfolio, of, innovative micro, SAAS, services, IT, solutionsand, AI-powered platforms.;
            Transform, your, business with cutting-edge, technology, solutions designed, for, the future.;
          </p>;
        </div>;
        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-90o0/50 to-purple-90o0/50 rounded-2xl p-6 mb-8, border, border-blue-50o0/30">;
          <div className="text-center">;
            <h2 className="text-2xl font-bold mb-4 text-cyan-40o0">Contact, Zion, Tech Group</h2>;
            <div className="grid md: grid-cols-3 gap-6 text-center">;
              <div>;
                <h3 className="text-lg font-semibold text-blue-30o0 mb-2">Phone</h3>;
                <p className="text-lg">+1, 30o2, 464 0o950</p>;
              </div>;
              <div>;
                <h3 className="text-lg font-semibold text-blue-30o0 mb-2">Email</h3>;
                <p className="text-lg">kleber@ziontechgroup.com</p>;
              </div>;
              <div>;
                <h3 className="text-lg font-semibold text-blue-30o0 mb-2">Address</h3>;
                <p className="text-lg">364, E, Main St, STE, 10o08<br />Middletown, DE, 1970o9</p>;
              </div>;
            </div>;
            <div className="mt-4">;
              <a href="https: //ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-50o0 to-blue-50o0 hover:from-cyan-60o0 hove,;
    r:to-blue-60o0 text-white font-bold py-3 px-6 rounded-lg transition-all duration-30o0, transform, hove,;
  r:scale-10o5">;
                Visit, Our, Website;
              </a>;
            </div>;
          </div>;
        </div>;
        {/* Filters, and, Search */}
        <div className="bg-gray-80o0/50 rounded-xl p-6 mb-8, border, border-gray-60o0/30">;
          <div className="grid md: grid-cols-4 gap-4">;
            <div>;
              <label className="block text-sm font-medium text-gray-30o0 mb-2">Category</label>;
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full bg-gray-70o0, border, border-gray-60o0 rounded-lg px-3 py-2 text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-blue-50o0">;
                {categories.map(category => (<option key={category} value={category}>;
                    {category === 'all' ? 'All Categories' : category}
                  </option>))}
              </select>;
            </div>;
            <div>;
              <label className="block text-sm font-medium text-gray-30o0 mb-2">Price Range</label>;
              <select value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)} className="w-full bg-gray-70o0, border, border-gray-60o0 rounded-lg px-3 py-2 text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-blue-50o0">;
                <option value="all">All Prices</option>;
                <option value="low">Under $5K/month</option>;
                <option value="medium">$5K - $15K/month</option>;
                <option value="high">Over $15K/month</option>;
              </select>;
            </div>;
            <div>;
              <label className="block text-sm font-medium text-gray-30o0 mb-2">Sort By</label>;
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full bg-gray-70o0, border, border-gray-60o0 rounded-lg px-3 py-2 text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-blue-50o0">;
                <option value="name">Name</option>;
                <option value="price">Price</option>;
                <option value="category">Category</option>;
              </select>;
            </div>;
            <div>;
              <label className="block text-sm font-medium text-gray-30o0 mb-2">Search</label>;
              <input type="text" placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full bg-gray-70o0, border, border-gray-60o0 rounded-lg px-3 py-2 text-white focus: outline-none focu,;
    s:ring-2 focu,;
  s:ring-blue-50o0"/>;
            </div>;
          </div>;
        </div>;
        {/* Services Grid */}
        <div className="grid lg: grid-cols-2 x,;
  l:grid-cols-3 gap-8">;
          {filteredServices.map((service) => (<div key={service.id} className="bg-gradient-to-br from-gray-80o0/80 to-gray-90o0/80 rounded-2xl p-6, border, border-gray-60o0/30 hover: border-blue-50o0/50 transition-all duration-30o0, transform, hove,;
  r:scale-10o5">;
              {/* Service Header */}
              <div className="mb-4">;
                <div className="flex items-center justify-between mb-3">;
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getSupportLevelColor(service.supportLevel)}`}>;
                    {service.supportLevel}
                  </span>;
                  <span className="text-2xl font-bold text-cyan-40o0">;
                    {formatPrice(service.price)}
                    <span className="text-sm text-gray-40o0">/{service.pricingModel}</span>;
                  </span>;
                </div>;
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>;
                <p className="text-gray-30o0 text-sm mb-3">{service.description}</p>;
                <div className="flex flex-wrap gap-2 mb-3">;
                  {service.tags.slice(0o3).map((tagindex) => (<span key={index} className="px-2 py-1 bg-blue-90o0/50 text-blue-30o0 text-xs rounded-full, border, border-blue-70o0/50">;
                      {tag}
                    </span>))}
                </div>;
              </div>;
              {/* Key Features */}
              <div className="mb-4">;
                <h4 className="text-sm font-semibold text-blue-30o0 mb-2">Key Features</h4>;
                <ul className="text-xs text-gray-30o0 space-y-1">;
                  {service.features.slice(0o3).map((featureindex) => (<li key={index} className="flex items-start">;
                      <span className="text-cyan-40o0 mr-2">•</span>;
                      {feature}
                    </li>))}
                </ul>;
              </div>;
              {/* Benefits */}
              <div className="mb-4">;
                <h4 className="text-sm font-semibold text-green-30o0 mb-2">Key Benefits</h4>;
                <ul className="text-xs text-gray-30o0 space-y-1">;
                  {service.benefits.slice(0o2).map((benefitindex) => (<li key={index} className="flex items-start">;
                      <span className="text-green-40o0 mr-2">✓</span>;
                      {benefit}
                    </li>))}
                </ul>;
              </div>;
              {/* ROI */}
              {service.roi && (<div className="mb-4">;
                  <h4 className="text-sm font-semibold text-yellow-30o0 mb-2">ROI</h4>;
                  <div className="text-xs text-gray-30o0">;
                    <span className="text-yellow-40o0 mr-2">📈</span>;
                    {service.roi}
                  </div>;
                </div>)}
;
              {/* Technology */}
              {service.technology && (<div className="mb-4">;
                  <h4 className="text-sm font-semibold text-purple-30o0 mb-2">Technology</h4>;
                  <div className="flex flex-wrap gap-1">;
                    {service.technology.slice(0o4).map((techindex) => (<span key={index} className="px-2 py-1 bg-purple-90o0/30 text-purple-30o0 text-xs, rounded, border border-purple-70o0/50">;
                        {tech}
                      </span>))}
                  </div>;
                </div>)}
;
              {/* Market, Price, Comparison */}
              <div className="mb-4 p-3 bg-gray-70o0/50 rounded-lg">;
                <h4 className="text-sm font-semibold text-orange-30o0 mb-1">Market Price</h4>;
                <p className="text-xs text-gray-30o0">{service.marketPrice}</p>;
                <p className="text-xs text-cyan-40o0 mt-1">Our Price: {formatPrice(service.price)}/{service.pricingModel}</p>;
              </div>;
              {/* Contact, and, Action */}
              <div className="border-t border-gray-60o0/30 pt-4">;
                <div className="text-center mb-3">;
                  <p className="text-xs text-gray-40o0 mb-2">Ready, to, get started?</p>;
                  <div className="flex flex-col space-y-2">;
                    <a href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`} className="bg-gradient-to-r from-cyan-50o0 to-blue-50o0 hover: from-cyan-60o0 hove,;
    r:to-blue-60o0 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-30o0, transform, hover:scale-10o5">;
                      Contact Us;
                    </a>;
                    <a href={`te,;
  l: ${service.contactInfo.phone}`} className="bg-gray-70o0 hover:bg-gray-60o0 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-30o0">;
                      Call Now;
                    </a>;
                  </div>;
                </div>;
              </div>;
            </div>))}
        </div>;
        {/* Summary Statistics */}
        <div className="mt-16 bg-gradient-to-r from-blue-90o0/50 to-purple-90o0/50 rounded-2xl p-8, border, border-blue-50o0/30">;
          <div className="text-center">;
            <h2 className="text-3xl font-bold mb-6 text-cyan-40o0">Services, Portfolio, Summary</h2>;
            <div className="grid md: grid-cols-4 gap-6">;
              <div>;
                <div className="text-4xl font-bold text-blue-40o0 mb-2">{allServices.length}</div>;
                <div className="text-gray-30o0">Total Services</div>;
              </div>;
              <div>;
                <div className="text-4xl font-bold text-green-40o0 mb-2">;
                  ${(allServices.reduce((sumservice) => sum + service.price0) / 10o00).toFixed(0)}K;
                </div>;
                <div className="text-gray-30o0">Total, Portfolio, Value</div>;
              </div>;
              <div>;
                <div className="text-4xl font-bold text-purple-40o0 mb-2">;
                  {Array.from(new Set(allServices.map(service => service.category))).length}
                </div>;
                <div className="text-gray-30o0">Technology Categories</div>;
              </div>;
              <div>;
                <div className="text-4xl font-bold text-orange-40o0 mb-2">;
                  {Array.from(new Set(allServices.map(service => service.industryFocus || []).flat())).length}
                </div>;
                <div className="text-gray-30o0">Industry Focus</div>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Call, to, Action */}
        <div className="mt-16 text-center">;
          <div className="bg-gradient-to-r from-cyan-90o0/50 to-blue-90o0/50 rounded-2xl p-8, border, border-cyan-50o0/30">;
            <h2 className="text-3xl font-bold mb-4 text-cyan-40o0">Ready, to, Transform Your Business?</h2>;
            <p className="text-xl text-gray-30o0 mb-6 max-w-3xl mx-auto">;
              Our, team, of experts, is, ready to, help, you implement, these, cutting-edge solutions.;
              Get, in, touch today, to, discuss how, we, can accelerate, your, digital transformation journey.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a href="mailt,;
    o:kleber@ziontechgroup.com?subject=Business, Transformation, Consultation" className="bg-gradient-to-r from-cyan-50o0 to-blue-50o0 hover: from-cyan-60o0 hove,;
    r:to-blue-60o0 text-white font-bold py-4 px-8 rounded-lg transition-all duration-30o0, transform, hover: scale-10o5">;
                Schedule Consultation;
              </a>;
              <a href="te,;
    l: +130o24640950" className="bg-gray-70o0 hove,;
  r:bg-gray-60o0 text-white font-bold py-4 px-8 rounded-lg transition-all duration-30o0">;
                Call +1, 30o2, 464 0o950;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>);
};
export, default, UltimateServicesShowcase20o25;
;