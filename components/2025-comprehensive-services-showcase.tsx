import SEO from './seo/Seo';
import { motion } from 'framer-motion';
import { 
  Brain, Building, Circle, Monitor, Shield, 
  Check, Phone, Mail, MapPin,
  TrendingUp, Zap, Globe
} from 'lucide-react';

    return 'N/A';) => {
  return $3;}
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

const ComprehensiveServicesShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Helper function to get service pricing
  const getServicePricing = (service: any) => {
    if (service.pricing?.starter) return service.pricing.starter;
    if (service.price?.monthly) return `$${service.price.monthly}/month`;
    if (typeof service.price === 'string') return service.price;
    return 'Contact for pricing'
};

  // Helper function to get service features
  const getServiceFeatures = (service: any) => {
    return service.keyFeatures || service.features || []
};

  // Helper function to get service setup time
  const getServiceSetupTime = (service: any) => {
    if (service.setupTime) return service.setupTime;
    if (service.pricing?.setupTime) return service.pricing.setupTime;
    if (service.price?.setupTime) return service.price.setupTime;
    return 'N/A'
};

  // Helper function to get service trial days
  const getServiceTrialDays = (service: any) => {
    if (service.trialDays) return service.trialDays;
    if (service.pricing?.trialDays) return service.pricing.trialDays;
    if (service.price?.trialDays) return service.price.trialDays;
    return 'N/A'
};

    return 'N/A';) => {
  return $3;}
}
=======
    return 'N/A';'
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }// All services combined;
  const allServices = [;
    ...advancedAIServices2025,...advancedCybersecurityServices2025,...advancedITServices2025;
  ];const categories = [;
    { "id": 'all', "name": 'All Services', "icon": <Circle className="w-5 h-5" /> },{ "id": 'business-intelligence', "name": 'Business Intelligence', "icon": <TrendingUp className="w-5 h-5" /> },{ "id": 'ai-automation', "name": 'AI Automation', "icon": <Brain className="w-5 h-5" /> },{ "id": 'it-infrastructure', "name": 'IT Infrastructure', "icon": <Building className="w-5 h-5" /> },{ "id": 'micro-saas', "name": 'Micro SAAS', "icon": <Zap className="w-5 h-5" /> },{ "id": 'ai-services', "name": 'AI Services', "icon": <Monitor className="w-5 h-5" /> }"
  ];const filteredServices = activeTab === 'all';'
    ? allServices;
<<<<<<< HEAD
    : allServices.filter(service => {if (activeTab === 'business-intelligence') return service.category?.includes('Business Intelligence') || service.category?.includes('Analytics')if (activeTab === 'ai-automation') return service.category?.includes('AI Automation')if (activeTab === 'it-infrastructure') return service.category?.includes('IT Infrastructure')if (activeTab === 'micro-saas') return service.category?.includes('Micro SAAS')if (activeTab === 'ai-services') return service.category?.includes('AI Services')return true;

=======
    : allServices.filter((service) => {if (activeTab === 'business-intelligence') return service.category?.includes('Business Intelligence') || service.category?.includes('Analytics')if (activeTab === 'ai-automation') return service.category?.includes('AI Automation')if (activeTab === 'it-infrastructure') return service.category?.includes('IT Infrastructure')if (activeTab === 'micro-saas') return service.category?.includes('Micro SAAS')if (activeTab === 'ai-services') return service.category?.includes('AI Services')return true;'
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

const allServices = [;
  ...advancedAIServices2025,...advancedCybersecurityServices2025,...advancedITServices2025
];


const categories = [;
  { "id": 'all', "name": 'All Services', "icon": <Circle className="w-5 h-5" />,"
},{ "id": 'business-intelligence', "name": 'Business Intelligence', "icon": <TrendingUp className="w-5 h-5" />,"
},{ "id": 'ai-automation', "name": 'AI Automation', "icon": <Brain className="w-5 h-5" />,"
},{ "id": 'it-infrastructure', "name": 'IT Infrastructure', "icon": <Building className="w-5 h-5" />,"
},{ "id": 'micro-saas', "name": 'Micro SAAS', "icon": <Zap className="w-5 h-5" />,"
},{ "id": 'ai-services', "name": 'AI Services', "icon": <Monitor className="w-5 h-5" />,"
}
  ];

<<<<<<< HEAD

const filteredServices = activeTab === 'all';
=======
const filteredServices = activeTab === 'all';'
>>>>>>> origin/cursor/delete-old-data-records-6bba
    ? allServices;
    : allServices.filter(service = > {if (activeTab === 'business-intelligence') return service.category?.includes('Business Intelligence') || service.category?.includes('Analytics')if (activeTab === 'ai-automation') return service.category?.includes('AI Automation')if (activeTab === 'it-infrastructure') return service.category?.includes('IT Infrastructure')if (activeTab === 'micro-saas') return service.category?.includes('Micro SAAS')if (activeTab === 'ai-services') return service.category?.includes('AI Services';'
  }
  return true;
      })return (<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">;"
      <SEO;
        title="2025 Comprehensive Services Showcase - Zion Tech Group";"
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Transform your business with cutting-edge solutions.";"
        keywords={["micro SAAS", "IT services", "AI services", "business intelligence", "automation", "cloud infrastructure"]}" />;
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">;"
        <div className="absolute inset-0 bg-black/20"></div>;"
        <div className="relative max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 py-24">;"
          <motion.div;
            initial={ "opacity": 0, "y": 20 }
            animate={ "opacity": 1, "y": 0 }
            transition={ "duration": 0.8 }
            className="text-center";"
          >;
            initial={ "opacity": 0, "y": 20 
}
            animate={ "opacity": 1, "y": 0 }
            transition={ "duration": 0.8 
}
<<<<<<< HEAD
            className=\"text-center\">

=======
            className="text-center">"

            <h1 className="text-4xl "md":text-6xl font-bold mb-6">;"
>>>>>>> origin/cursor/delete-old-data-records-6bba

            <h1 className=\"text-4xl md:text-6xl font-bold mb-6\"    />;
              2025 Comprehensive Services Showcase;
            </h1>;
            <p className="text-xl "md":text-2xl mb-8 text-blue-100">;"
              Transform your business with our innovative portfolio of micro SAAS, IT infrastructure, and AI services;
            </p>;
            <div className="flex flex-wrap justify-center gap-4 text-sm">;"
              <span className="bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30">;"
                {allServices.length}+ Services;
              </span>;
              <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30">;"
                AI-Powered Solutions;
              </span>;
              <span className="bg-green-600/20 px-4 py-2 rounded-full border border-green-400/30">;"
                Enterprise Ready;
              </span>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Contact Banner */}
<<<<<<< HEAD

      <section className=\"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8\"    />;
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    />;
          <div className=\"flex flex-col md:flex-row items-center justify-between gap-4\"    />;
            <div className=\"text-center md:text-left\"    />;
              <h3 className=\"text-xl font-semibold mb-2\"    />Ready to Transform Your Business?</h3>;
              <p className=\"text-blue-100\"    />Get in touch with our experts today</p>;
=======
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">;"
        <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">;"
          <div className="flex flex-col "md":flex-row items-center justify-between gap-4">;"
            <div className="text-center "md":text-left">;"
              <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3>;"
              <p className="text-blue-100">Get in touch with our experts today</p>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </div>;
            <div className="flex flex-col "sm":flex-row items-center gap-4">;"
              <div className="flex items-center gap-2">;"
                <Phone className="w-4 h-4" />;"
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center gap-2">;"
                <Mail className="w-4 h-4" />;"
                <span>kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center gap-2">;"
                <MapPin className="w-4 h-4" />;"
                <span>Middletown DE 19709</span>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Category Tabs */}
      <section className="py-12 bg-white">;"
        <div className="max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8">;"
          <div className="flex flex-wrap justify-center gap-2">;"
            {categories.map((category) => (<button;
                }
                key={category.id}
<<<<<<< HEAD
                onClick={() =    /> setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${activeTab === category.id;
                    ? 'bg-blue-600 text-white border-blue-600';}
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600';}
                }`}
              >;
                }`}>

=======
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${activeTab === category.id;`                    ? 'bg-blue-600 text-white border-blue-600';'
                    : 'bg-white text-gray-700 border-gray-300 "hover":border-blue-300 "hover":text-blue-600';'
                }`}`              >;
                }`}>`
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
>>>>>>> origin/cursor/delete-old-data-records-6bba

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Pricing</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Starting at:</span>
                        <span className="font-semibold text-green-600">
                          {service.pricing ? service.pricing.starter : `${(service as any).price}${(service as any).period}`}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {(service as any).trialDays ? `${(service as any).trialDays} days free trial` : ''} • {(service as any).setupTime ? `${(service as any).setupTime} setup` : 'Custom setup'}
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.features?.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Market Size:</span>
                      <span className="font-semibold text-gray-900">{service.marketSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Target Audience:</span>
                      <span className="font-semibold text-gray-900">{service.targetAudience}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex flex-col gap-2">
                    <a
                      href={`mailto:${(service as any).contact || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name}`}                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                          {getCategoryIcon(service.category)}
                          <span className="ml-1">{service.category}</span>
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Setup:</span> {getServiceSetupTime(service)}
                        </div>
                        <div>
                          <span className="font-medium">Trial:</span> {getServiceTrialDays(service)} days
                        </div>
                      </div>

                      {/* ROI and Popularity */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm">
                          <span className="text-gray-500">Expected ROI:</span>
                          <span className="text-green-600 font-semibold ml-1">
                            {service.roi.split(' ')[0]} ROI
                          </span>
                        </div>
                        {service.popular && (
                          <div className="flex items-center gap-1 text-yellow-600">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">Popular</span>
                          </div>
                        </div>

                        {/* Price and Features */}
                        <div className="lg:w-1/3">
                          <div className="text-right mb-4">
                            <span className="text-3xl font-bold text-gray-900">
                              {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                            </span>
                            <span className="text-gray-500">
                              {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                            </span>
                          </div>
                                                  </div>;
                        <div>;
                          <span className="font-medium">Trial:</span> {getServiceTrialDays(service)} days;
                        </div>;
                      </div>;
                      {/* Category Badge */}
                      <div className="mb-4">;
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                          {getCategoryIcon(service && service.category)}
                          <span className="ml-1">{service && service.category}</span>;
                        </span>;
                      </div>;


                      {/* Service Info */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">;
                        <div>;
                          <span className="font-medium">Setup:</span> {getServiceSetupTime(service)}


                        </span>;
                      </div>;
                    </div>;
                    {/* Service Content */}

                    <div className=\"p-6\"    />;
                      <p className=\"text-gray-600 mb-4 line-clamp-3\"    />{service.description}</p>;
=======
                {filteredServices.map((service, index) => (<motion.div;
            {viewMode === 'grid' ? (;'
              <motion&& motion.div 

          {/* Services Display */}
          <AnimatePresence mode="wait">"
            {viewMode === 'grid' ? ('
              <motion.div
}
key="grid""
                initial={ "opacity": 0 }
                animate={ "opacity": 1 }
                exit={ "opacity": 0 
}
                className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-8""
              >
                {filteredServices.map((service, index) => (
                  <motion.div
}
key={service.id}
                    initial={ "opacity": 0, "y": 20 
}
                    animate={ "opacity": 1, "y": 0 
}
                    transition={ "duration": 0.5, "delay": index * 0.1 }
                    className="bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100";"
                  >;
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>;`                    className="bg-white rounded-xl shadow-lg "hover":shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">"

                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service.color} text-white,`}>

                      <div className="flex items-center justify-between mb-4">;"
                        <span className="text-4xl">{service.icon}</span>;"
                        {service.popular && (<span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">;"
                            }
                            POPULAR;
                          </span>;
                        </div>;
                        {service && service.popular && (;
                          <div className="flex items-center gap-1 text-yellow-600">;
                            <Star className="w-4 h-4 fill-current" />;
                            <span className="text-sm font-medium">Popular</span>;
                          </div>;
                        </div>;

                        {/* Price and Features */}
                        <div className="lg:w-1/3">;
                          <div className="text-right mb-4">;
                            <span className="text-3xl font-bold text-gray-900">;
                              {typeof service && service.price === 'string' ? service && service.price : `$${service && service.price.monthly}/month`}
                            </span>;
                            <span className="text-gray-500">;
                              {typeof service && service.price === 'string' ? (service as any).period || '/month' : '/month'}
                            </span>;
                          </div>;

                          <div className="mb-4">;
                            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>;
                            <ul className="space-y-1 text-sm text-gray-600">;
                              {service && service.features.slice(0, 4).map((feature, idx) => (;
                                <li key={idx} className="flex items-center">;
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                                  {feature}
                                </li>
                              ))}
                          {/* Category and Action */}
                          <div className="flex flex-col items-end space-y-3">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                              {getCategoryIcon(service.category)}
                              <span className="ml-1">{service.category}</span>
                            </span>
                            
                            <a
                              href={service.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">;"
                      <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      {/* Price */}
                      <div className="mb-4">;"
                        <span className="text-3xl font-bold text-gray-900">;"
                          {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}`                        </span>;
                        <span className="text-gray-500">;"
                          {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}'
                        </span>;
                      </div>;
                      {/* Features */}
<<<<<<< HEAD
                      <div className=\"mb-6\"    />;
                        <h4 className=\"font-semibold text-gray-900 mb-2\"    />Key Features:</h4>;
                        <ul className=\"space-y-1\"    />;
                          {getServiceFeatures(service).slice(0, 4).map((feature, idx) => (<li key={idx} className=\"flex items-center text-sm text-gray-600\"    />;
                              <Check className=\"w-4 h-4 text-green-500 mr-2 flex-shrink-0\"    />;

                            </ul>;
                          </div>;
                        </div>;


=======
                        {service.popular && ({/* Price and Features */}
                        <div className=\"lg:w - 1/3\"    />;
                          <div className=\"text - right mb - 4\"    />;
                            <span className=\"text - 3xl font - bold text - gray - 900\"    />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        {/* Price and Features */}
                        <div className="lg:w - 1/3">;
                          <div className="text - right mb - 4">;
                            <span className="text - 3xl font - bold text - gray - 900">;
<<<<<<< HEAD

                              {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                          <span className=\"ml-1\"    />{service.category}</span>

=======
                              {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                          <span className=\"ml-1\"    />{service.category}</span>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        </span>
                      </div>



                      {/* Service Info */}
ursor/automate-test-improve-and-merge-code-646c;
                      {/* Service Info */}
<<<<<<< HEAD

                      <div className=\"grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600\"    />;
                        <div    />;
                          <span className=\"font-medium\"    />Setup:</span> {getServiceSetupTime(service)}

                            <a
                              href={service && service.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center">;
                              Learn More;
                              <ArrowRight className="w-4 h-4 ml-2" />;

                            </span>;
                            <span className="text-gray-500">;
                              {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                            </span>;
                          </div>;
                          <div className="mb-4">;
                            <h4 className="font - semibold text - gray-900 mb-2">Features:</h4>;
                            <ul className="space - y-1 text - sm text-gray-600">;
                              {service.features.slice (0, 4).map ((feature, idx) => (
                                <li key={idx} className="flex items-center">;
                                  <Check className="w - 4 h - 4 text - green - 500 mr - 2 flex-shrink-0" />;
                                  {feature}
                                </li>))}
                            </ul>;
                          </div>;
                          {/* Category and Action */}
                          <div className="flex flex - col items-end space-y-3">;
                            <span className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}>;
                              {getCategoryIcon (service.category)}
                              <span className="ml-1">{service.category}</span>;
                            </span>;
                            <a;
                              href={service.link}
                              target="_blank";
                              rel="noopener noreferrer";
                              className="bg - blue - 600 text - white py - 2 px - 4 rounded - lg hover:bg - blue - 700 transition - colors text - sm font-medium flex items-center";
                            >;
                              Learn More;
                              <ArrowRight className="w - 4 h-4 ml-2" />;
                            </a>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
          {/* No Results */}
          {filteredServices && filteredServices.length === 0 && (<div className="text-center py-12">;"
              <div className="text-gray-400 mb-4">;"
                <Search className="w-16 h-16 mx-auto" />;"
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>;"
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>;"
            </div>;
          )}            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"><Mail className="w-5 h-5" />
              Start Consultation
            </a>
            <a