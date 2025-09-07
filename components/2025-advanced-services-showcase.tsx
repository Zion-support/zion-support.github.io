};

const getServiceFeatures = ("service": any) => {
  }
  if (service.features);
  return service.features;
  if (service.keyFeatures) return service.keyFeatures;
return [];
};



export default function AdvancedServicesShowcase() {

  }

  const [selectedCategory, setSelectedCategory] = useState('all');'

const [searchTerm, setSearchTerm] = useState('');'

const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');'

  const ServiceCard = ({ service }: { service: any }) => (;
    <motion&& motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 && 0.5 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 ${


  useEffect(() => {

    }

    let filtered = allServices;

    // Filter by category,
if (selectedCategory !== 'all') {'
      }
      filtered = filtered.filter((service) => {
       ;
  }
  const category = getServiceCategory(service).toLowerCase();
        if (selectedCategory = == 'enterprise');'
  return category.includes('enterprise') || category.includes('legal') || category.includes('financial');'
        if (selectedCategory = == 'micro-saas');'
  return category.includes('marketing') || category.includes('social') || category.includes('customer') || category.includes('project');'
        if (selectedCategory = == 'infrastructure');'
  return category.includes('infrastructure') || category.includes('network') || category.includes('data center') || category.includes('edge');'
        if (selectedCategory = == 'ai-ml');'
  return category.includes('ai') || category.includes('machine learning') || category.includes('nlp') || category.includes('ml');'
        if (selectedCategory = == 'quantum');'
  return category.includes('quantum') || category.includes('quantum-resistant');'
        return false;
      });
    }

    // Filter by search term,
if (searchTerm) {
      }
      filtered = filtered.filter(service => { return service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase())
      ); }
    }

    setFilteredServices(filtered)
  }, [selectedCategory, searchTerm]);

const ServiceCard = ({ service }: { "service": any,;
}) => (
    <motion.div,
initial={{ "opacity": 0, "y": 20 
}
      animate={{ "opacity": 1, "y": 0 }}
      transition={{ "duration": 0.5 }}
      className={`relative bg-white "dark":bg-gray-800 rounded-2xl shadow-lg "hover":shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 "dark":border-gray-700 ${service.popular ? 'ring-2 ring-blue-500' : '';'
      }`}`    >;
      transition={{ "duration": 0.5 
}
      className={`relative bg-white "dark":bg-gray-800 rounded-2xl shadow-lg "hover":shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 "dark":border-gray-700 ${service.popular ? 'ring-2 ring-blue-500' : '';'
      }`}>`
      {service.popular && (<div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">;"
          <Star className="w-4 h-4" />;"
          }
          Popular;
        </div>;
      )}<div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>;`      )}<div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>`
        <span className="text-4xl">{service.icon}</span>;"
      </div>;
      <div className="p-6">;"
        <div className="flex items-start justify-between mb-3">;"
          <h3 className="text-xl font-bold text-gray-900 "dark":text-white mb-2">;"
    >
      {service.popular && (
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">"
          <Star className="w-4 h-4" />"
          }
          Popular
        </div>
      )}
      
      <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>`        <span className="text-4xl">{service.icon}</span>"
      </div>
      
      <div className="p-6">"
        <div className="flex items-start justify-between mb-3">"
          <h3 className="text-xl font-bold text-gray-900 "dark":text-white mb-2">"
            {service.name}
          <h3 className="text-xl font-bold text-gray-900 "dark": text-white mb-2">"
            {service.nam
}
          </h3>;
        </div>;
        <p className="text-gray-600 "dark":text-gray-300 mb-4 line-clamp-2">;"
          {service.tagline}
        </p>;
        <div className="flex items-center justify-between mb-4">;"
          <span className="text-2xl font-bold text-gray-900 "dark":text-white">;"
            {getServicePricing(service)}
          </span>;
          <span className="text-sm text-gray-500 "dark":text-gray-400">;"
            {service.trialDays} day trial;
          </span>;
        </div>;
        <div className="space-y-3 mb-6">;"
          <div className="flex items-center gap-2">;"
            <CheckCircle className="w-4 h-4 text-green-500" />;"
            <span className="text-sm text-gray-600 "dark":text-gray-400">;"
              {service.setupTime} setup;
            </span>;
          </div>;
          <div className="flex items-center gap-2">;"
            <Users className="w-4 h-4 text-blue-500" />;"
            <span className="text-sm text-gray-600 "dark":text-gray-400">;"
              {service.customers ? service.customers.toLocaleString() : '1000'}+ customers;'
            </span>;
          </div>;
          <div className="flex items-center gap-2">;"
            <Star className="w-4 h-4 text-yellow-500" />;"
            <span className="text-sm text-gray-600 "dark":text-gray-400">;"
<div className='absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1'>;'
          <Star className='w-4 h-4' />;'
          Popular;
        </div>;
      )}
      <div;
        className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}`      >;
        className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>`
        <span className='text-4xl'>{service.icon}</span>;'
      </div>;
      <div className='p-6'>;'
        <div className='flex items-start justify-between mb-3'>;'
          <h3 className='text-xl font-bold text-gray-900 "dark":text-white mb-2'>;'
            {service.name}
          </h3>;
        </div>;
        <p className='text-gray-600 "dark":text-gray-300 mb-4 line-clamp-2'>;'
          {service.tagline}
        </p>;
        <div className='flex items-center justify-between mb-4'>;'
          <span className='text-2xl font-bold text-gray-900 "dark":text-white'>;'
            {getServicePricing(service)}
          </span>;
          <span className='text-sm text-gray-500 "dark":text-gray-400'>;'
            {service.trialDays} day trial;
          </span>;
        </div>;
        <div className='space-y-3 mb-6'>;'
          <div className='flex items-center gap-2'>;'
            <CheckCircle className='w-4 h-4 text-green-500' />;'
            <span className='text-sm text-gray-600 "dark":text-gray-400'>;'
              {service.setupTime} setup;
            </span>;
          </div>;
          <div className='flex items-center gap-2'>;'
            <Users className='w-4 h-4 text-blue-500' />;'
            <span className='text-sm text-gray-600 "dark":text-gray-400'>;'
              {service.customers ? service.customers.toLocaleString() : '1000'}+;'
              customers;
            </span>;
          </div>;
          <div className='flex items-center gap-2'>;'
            <Star className='w-4 h-4 text-yellow-500' />;'
            <span className='text-sm text-gray-600 "dark":text-gray-400'>;'
              {service.rating}/5 ({service.reviews} reviews)</span>;
          </div>;
        <div className="mb-6">;"
          <h4 className="font-semibold text-gray-900 "dark":text-white mb-2">Key "Features":</h4>;"
          <div className="space-y-1">;"
            {getServiceFeatures(service).slice(0, 3).map(("feature": string, "index": number) => (<div key={index} className="flex items-center gap-2">;"
                <Check className="w-3 h-3 text-green-500" />;"
                <span className="text-sm text-gray-600 "dark":text-gray-400">{feature}</span>;"
            {getServiceFeatures(service).slice(0, 3).map(("feature": string, "index": number) => (<div key={inde
} className="flex items-center gap-2">;"
                <Check className="w-3 h-3 text-green-500" />;"
                <span className="text-sm text-gray-600 "dark": text-gray-400">{featur,"
}</span>;
              </div>;
            ))}
            {getServiceFeatures(service).length > 3 && (<span className="text-sm text-gray-500 "dark":text-gray-400">;"
<div className='mb-6'>;'
          <h4 className='font-semibold text-gray-900 "dark":text-white mb-2'>;'
            }
            Key "Features":;
          </h4>;
          <div className='space-y-1'>;'
            {getServiceFeatures(service).slice(0, 3).map(("feature": string, "index": number) => (<div key={index} className='flex items-center gap-2'>;'
            {getServiceFeatures(service).slice(0, 3).map(("feature": string, "index": number) => (<div key={inde
} className='flex items-center gap-2'>;'
                  <Check className='w-3 h-3 text-green-500' />;'
                  <span className='text-sm text-gray-600 "dark":text-gray-400'>;'
                    {feature}
                  </span>;
                </div>;
              ))}
            {getServiceFeatures(service).length > 3 && (<span className='text-sm text-gray-500 "dark":text-gray-400'>;'
                +{getServiceFeatures(service).length - 3} more features;
              </span>;
            )}
          </div>;
        <div className="mb-6">;"
          <h4 className="font-semibold text-gray-900 "dark":text-white mb-2">ROI & "Benefits":</h4>;"
          <p className="text-sm text-gray-600 "dark":text-gray-400">;"
            {service.roi}
          </p>;
        </div>;
<div className='mb-6'>;'
          <h4 className='font-semibold text-gray-900 "dark":text-white mb-2'>;'
            ROI & "Benefits":;
          </h4>;
          <p className='text-sm text-gray-600 "dark":text-gray-400'>;'
            {service.roi}
          </p>;
        </div>;
  }, [selectedCategory, searchTerm])const ServiceCard = ({ service }: { "service": any }) => (<motion&& motion.div;
      initial={{ "opacity": 0, "y": 20 }}
      animate={{ "opacity": 1, "y": 0 }}
      transition={{ "duration": 0 && 0.5 }}
  }, [selectedCategory, searchTerm])const ServiceCard = ({ service }: { "service": any
}) => (<motion&& motion.div;
      initial={{ "opacity": 0, "y": 20 
}
      animate={{ "opacity": 1, "y": 0 }}
      transition={{ "duration": 0 && 0.5 
}
      className={`relative bg-white "dark":bg-gray-800 rounded-2xl shadow-lg "hover":shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 "dark":border-gray-700 ${</p>;`        </div>;
}
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
        <div className="mb-6">;"
          <h4 className="font-semibold text-gray-900 "dark":text-white mb-2">Market "Position":</h4>;"
          <p className="text-sm text-gray-600 "dark":text-gray-400">;"
            {service.marketPosition}
          </p>;
        </div>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
        <div className="flex items-center justify-between">;"
          <a;
            href={service.link}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold "hover":from-blue-700 "hover":to-purple-700 transition-all duration-300 transform "hover":scale-105";"
          >;
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold "hover":from-blue-700 "hover":to-purple-700 transition-all duration-300 transform "hover":scale-105">"

            Learn More;
            <ArrowRight className="w-4 h-4" />;"
          </a>;
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
          <a;
            href={`"mailto":${contactInfo.email}?subject=Inquiry about ${service.name}`}`            className="inline-flex items-center gap-2 bg-gray-100 "dark": bg-gray-700 text-gray-700 "dark":text-gray-300 px-4 py-3 rounded-lg font-semibold "hover":bg-gray-200 "dark":"hover":bg-gray-600 transition-all duration-300";"
ursor/fix-netlify-build-and-merge-to-main-9571;
          <a;
            href={`"mailto":${contactInfo.email}?subject=Inquiry about ${service.name}`}`            href={`"mailto": ${contactInfo.email}?subject=Inquiry about ${service.name},`}
            className="inline-flex items-center gap-2 bg-gray-100 "dark": bg-gray-700 text-gray-700 "dark":text-gray-300 px-4 py-3 rounded-lg font-semibold "hover":bg-gray-200 "dark":"hover":bg-gray-600 transition-all duration-300";"
ursor/fix-netlify-build-and-merge-to-main-9571;
          <a;
            href={`"mailto": ${contactInfo.email}?subject=Inquiry about ${service.name},`}
            className="inline-flex items-center gap-2 bg-gray-100 "dark": bg-gray-700 text-gray-700 "dark":text-gray-300 px-4 py-3 rounded-lg font-semibold "hover":bg-gray-200 "dark":"hover":bg-gray-600 transition-all duration-300";"
        <div className='mb-6'>;'
          <h4 className='font-semibold text-gray-900 "dark":text-white mb-2'>;'
            Market "Position":;
          </h4>;
          <p className='text-sm text-gray-600 "dark":text-gray-400'>;'
            {service.marketPosition}
          </p>;
        </div>;
        <div className='flex items-center justify-between'>;'
          <a;
            href={service.link}
            className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold "hover":from-blue-700 "hover":to-purple-700 transition-all duration-300 transform "hover":scale-105';'
          >;
            className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold "hover":from-blue-700 "hover":to-purple-700 transition-all duration-300 transform "hover":scale-105'>'

            Learn More;
            <ArrowRight className='w-4 h-4' />;'
          </a>;
          <a;
            href={`"mailto":${contactInfo.email}?subject=Inquiry about ${service.name}`}`            className='inline-flex items-center gap-2 bg-gray-100 "dark":bg-gray-700 text-gray-700 "dark":text-gray-300 px-4 py-3 rounded-lg font-semibold "hover":bg-gray-200 "dark":"hover":bg-gray-600 transition-all duration-300';'
          >;
            href={`"mailto": ${contactInfo.email}?subject=Inquiry about ${service.name},`}
            className='inline-flex items-center gap-2 bg-gray-100 "dark":bg-gray-700 text-gray-700 "dark":text-gray-300 px-4 py-3 rounded-lg font-semibold "hover":bg-gray-200 "dark":"hover":bg-gray-600 transition-all duration-300'>'

            Contact;
          </a>;
        </div>;
    </motion.div>;
  )const ServiceList = ({ service }: { "service": any }) => (<motion.div;
  )const ServiceList = ({ service }: { "service": any
}) => (<motion.div;
          </span>
          <span className="text-sm text-gray-500 "dark": text-gray-400">"
            {service.trialDays} day trial
          </span>
        </div>
        
        <div className="space-y-3 mb-6">"
          <div className="flex items-center gap-2">"
            <CheckCircle className="w-4 h-4 text-green-500" />"
            <span className="text-sm text-gray-600 "dark":text-gray-400">"
              {service.setupTime} setup
            </span>
          </div>
          <div className="flex items-center gap-2">"
            <Users className="w-4 h-4 text-blue-500" />"
            <span className="text-sm text-gray-600 "dark":text-gray-400">"
              {service.customers ? service.customers.toLocaleString() : '1000'}+ customers'
            </span>
          </div>
          <div className="flex items-center gap-2">"
            <Star className="w-4 h-4 text-yellow-500" />"
            <span className="text-sm text-gray-600 "dark":text-gray-400">"
              {service.rating}/5 ({service.review
} reviews)
            </span>
          </div>
        
        <div className="mb-6">"
          <h4 className="font-semibold text-gray-900 "dark":text-white mb-2">Key "Features":</h4>"
          <div className="space-y-1">"
            {getServiceFeatures(service).slice(0, 3).map(("feature": string, "index": number) => (
              <div key={index} className="flex items-center gap-2">"
                <Check className="w-3 h-3 text-green-500" />"
                <span className="text-sm text-gray-600 "dark":text-gray-400">{feature}</span>"
              </div>
            ))}
            {getServiceFeatures(service).length > 3 && (
              <span className="text-sm text-gray-500 "dark":text-gray-400">"
                +{getServiceFeatures(service).length - 3} more features
              </span>
            )}
          </div>
        
        <div className="mb-6">"
          <h4 className="font-semibold text-gray-900 "dark":text-white mb-2">ROI & "Benefits":</h4>"
          <p className="text-sm text-gray-600 "dark":text-gray-400">"
            {service.roi}
          </p>
        </div>
        
        <div className="mb-6">"
          <h4 className="font-semibold text-gray-900 "dark":text-white mb-2">Market "Position":</h4>"
          <p className="text-sm text-gray-600 "dark":text-gray-400">"
            {service.marketPosition}
          </p>
        </div>
        
              </a>
            </div>
    </motion.div>
  );
          {/* Category Filters */}
          <div className="mt-6">"
            <div className="flex flex-wrap gap-3">"
              {categories.map((category) => (
                <button
}
key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id;`                      ? 'bg-gradient-to-r text-white shadow-lg';'
                      : 'bg-white "dark":bg-gray-800 text-gray-700 "dark":text-gray-300 border border-gray-200 "dark":border-gray-600 "hover":bg-gray-50 "dark":"hover":bg-gray-700';'
                  } ${category.color}`}`                >;
                  } ${category.color}`}>`
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>

        {/* Results Summary */}
        <div className="mb-8">;"
          <div className="bg-white "dark":bg-gray-800 rounded-xl p-6 border border-gray-200 "dark":border-gray-700">;"
            <div className="flex flex-col "md":flex-row items-start "md":items-center justify-between gap-4">;"
              <div>;
        <div className="mb-8">;"
          <div className="bg-white "dark":bg-gray-800 rounded-xl p-6 border border-gray-200 "dark":border-gray-700">;"
            <div className="flex flex-col "md":flex-row items-start "md":items-center justify-between gap-4">;"
<div className='mb-8'>;'
          <div className='bg-white "dark":bg-gray-800 rounded-xl p-6 border border-gray-200 "dark":border-gray-700'>;'
            <div className='flex flex-col "md":flex-row items-start "md":items-center justify-between gap-4'>;'
              <div>;
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 4 py - 2 rounded - lg font - medium transition - all duration - 300 flex items - center gap - 2 ${selected_category === category.id;`                      ? 'bg - gradient - to - r text - white shadow - lg';'
                      : 'bg - white "dark":bg - gray - 800 text - gray - 700 "dark":text - gray - 300 border border - gray - 200 "dark":border - gray - 600 "hover":bg - gray - 50 "dark":"hover":bg - gray - 700';'
                  } ${category.color}`}`                >;
                  } ${category.color}`}>`
                  {category.icon}
                  {category.name}
              ))}
        {/* Results Summary */}
        <div className='mb-8'>;'
          <div className='bg-white "dark":bg-gray-800 rounded-xl p-6 border border-gray-200 "dark":border-gray-700'>;'
            <div className='flex flex-col "md":flex-row items-start "md":items-center justify-between gap-4'>;'
              <div>;
                <h2 className='text-2xl font-bold text-gray-900 "dark":text-white mb-2'>;'
                  {filteredServices && filteredServices.length} Services Found;
                </h2>;
                <p className='text-gray-600 "dark":text-gray-400'>;'
                  {selectedCategory !== 'all' &&;'
                    `Filtered "by": ${categories && categories.find(c => c && c.id === selectedCategory)?.name}`}`                  {searchTerm && ` • "Search": "${searchTerm}"`}`                  {searchTerm && ` • "Search": "${searchTerm}","
}
ursor/fix-netlify-build-and-merge-to-main-9571;
ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-netlify-build-and-merge-to-main-9571;
                <h2 className="text-2xl font-bold text-gray-900 "dark":text-white mb-2">;"
                  {filteredServices.length} Services Found;
                </h2>;
                <p className="text-gray-600 "dark":text-gray-400">;"
                  {selectedCategory !== 'all' && `Filtered "by": ${categories.find(c => c.id === selectedCategory)?.name}`}`                  {searchTerm && ` • "Search": "${searchTerm}"`}`        <div className="mb-8">"
          <div className="bg-white "dark":bg-gray-800 rounded-xl p-6 border border-gray-200 "dark":border-gray-700">"
            <div className="flex flex-col "md":flex-row items-start "md":items-center justify-between gap-4">"
              <div>
                <h2 className="text-2xl font-bold text-gray-900 "dark":text-white mb-2">"
                  {filteredServices.length} Services Found
                </h2>
                <p className="text-gray-600 "dark":text-gray-400">"
                  {selectedCategory !== 'all' && `Filtered "by": ${categories.find(c => c.id === selectedCategory)?.name}`}`                  {searchTerm && ` • "Search": "${searchTerm}"`}`                </p>
              </div>
              
