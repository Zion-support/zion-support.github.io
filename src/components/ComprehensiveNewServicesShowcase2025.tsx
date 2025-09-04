<<<<<<< HEAD
import React, { useState } from 'react';';
export default ComprehensiveNewServicesShowcase2025;';';
import { comprehensiveNewServices2025 } from '../data/comprehensiveNewServices2025';
export default function Page(props: any) {
;
  return ()
    <div className="min-h-screen py-8 bg-gray-900">"
      <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
        {/* Header Section */}"
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 2 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >"
            <h1 className="text-5xl font-bold text-white mb-6">
              Revolutionary New Services 2025
            </h1>"
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge micro SAAS services, IT solutions, and AI-powered platforms.Each service is designed to transform your business with innovative technology and proven ROI.</p>
          </motion.div>
=======
import React, { useState } from 'react';
import { 
  NEW_MICRO_SAAS_SERVICES_2025,
  NEW_IT_SERVICES_2025,
  NEW_INNOVATIVE_SERVICES_2025
} from '../data/servicesData';
import { 
  Zap, 
  Brain, 
  Server, 
  Mail, 
  MessageCircle, 
  Calendar, 
  BarChart3, 
  Shield, 
  Cloud, 
  Cpu,
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail as MailIcon,
  MapPin,
  Globe
} from 'lucide-react';

interface ServiceShowcaseProps {
  className?: string;
}

export function ComprehensiveNewServicesShowcase2025({ className = '' }: ServiceShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'micro-saas' | 'it-services' | 'ai-services'>('micro-saas');
  const [selectedService, setSelectedService] = useState<any>(null);

  const tabs = [
    { id: 'micro-saas', name: 'Micro SAAS', icon: Zap, count: NEW_MICRO_SAAS_SERVICES_2025.length },
    { id: 'it-services', name: 'IT Services', icon: Server, count: NEW_IT_SERVICES_2025.length },
    { id: 'ai-services', name: 'AI Services', icon: Brain, count: NEW_INNOVATIVE_SERVICES_2025.length }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'micro-saas':
        return NEW_MICRO_SAAS_SERVICES_2025;
      case 'it-services':
        return NEW_IT_SERVICES_2025;
      case 'ai-services':
        return NEW_INNOVATIVE_SERVICES_2025;
      default:
        return [];
    }
  };

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') {
      return `$${price.toLocaleString()}/month`;
    } else if (model === 'hourly') {
      return `$${price}/hour`;
    } else if (model === 'project') {
      return `$${price.toLocaleString()}`;
    }
    return `$${price.toLocaleString()}`;
  };

  const getInnovationBadge = (level: string) => {
    const colors = {
      'Revolutionary': 'bg-purple-100 text-purple-800 border-purple-200',
      'Advanced': 'bg-blue-100 text-blue-800 border-blue-200',
      'Professional': 'bg-green-100 text-green-800 border-green-200'
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${colors[level as keyof typeof colors] || colors.Professional}`}>
        {level}
      </span>
    );
  };

  return (
    <div className={`bg-gray-50 py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Services 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of innovative Micro SAAS, IT Infrastructure, and AI services 
            designed to transform your business and drive unprecedented growth.
          </p>
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
        </div>

        {/* Contact Info Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 mb-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-blue-100">Contact our experts for personalized solutions and pricing</p>
            </div>
<<<<<<< HEAD

            {/* Category Filter */}"
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}';
                  onClick={() => setSelectedCategory(category.id)}';';
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${selectedCategory === category.id'';';
                      ? 'bg-cyan-600 text-white''';';
                      : 'bg-gray-800 text-gray-300 hover: b g-gray-700'`
                  }`}
                >"
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>) ) }
=======
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <MailIcon className="w-5 h-5" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Middletown, DE</span>
              </div>
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-3 m-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.name}</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentServices().map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Service Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{service.category}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  {getInnovationBadge(service.innovationLevel)}
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      {formatPrice(service.price, service.pricingModel)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {service.marketPrice}
                    </span>
                  </div>
                  {service.userLimit && (
                    <p className="text-sm text-gray-600 mt-1">{service.userLimit}</p>
                  )}
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
<<<<<<< HEAD
                {service.featured && ("
                  <div className="flex items-center space-x-1 text-yellow-400">"
                    <Star className="w-4 h-4 fill-current"   />"                    <span className="text-xs">Featured</span>
                      </div>
  );
}
              </div>
=======
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b

                {/* ROI and Setup Time */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">ROI</p>
                    <p className="font-semibold text-green-600">{service.roi}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Setup Time</p>
                    <p className="font-semibold text-blue-600">{service.setupTime}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
<<<<<<< HEAD
                  {service.features.length > 3 && ("
                    <div className="text-xs text-gray-500">
                      +{service.features.length-3} more features
                        </div>
  );
}
=======
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
                </div>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedService.name}
                    </h2>
                    <p className="text-gray-600 mb-4">{selectedService.description}</p>
                    <div className="flex items-center space-x-4">
                      {getInnovationBadge(selectedService.innovationLevel)}
                      <span className="text-2xl font-bold text-blue-600">
                        {formatPrice(selectedService.price, selectedService.pricingModel)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Get Started Today</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-gray-600">+1 302 464 0950</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MailIcon className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-600">kleber@ziontechgroup.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold">Website</p>
                        <p className="text-gray-600">ziontechgroup.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
"
          <div className="text-center mt-8">
            <a"
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 rounded-lg hover: b g-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover: shado w-xl transform hover: scal e-105"
            >"
              <Globe className="w-5 h-5"   />              <span>Visit Our Website</span>
            </a>
          </div>
        </motion.div>

        {/* Stats Section */}"
        <div className="mt-20">"
          <div className="grid grid-cols-2 md: gri d-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 2 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}"
              className="text-center"
            >"
              <div className="flex justify-center mb-4">"
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">"
                  <Rocket className="w-8 h-8 text-white"   />                </div>
              </div>"
              <div className="text-3xl font-bold text-white mb-2">15+</div>"
              <div className="text-gray-400">New Services</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 2 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}"
              className="text-center"
            >"
              <div className="flex justify-center mb-4">"
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">"
                  <Brain className="w-8 h-8 text-white"   />                </div>
              </div>"
              <div className="text-3xl font-bold text-white mb-2">10+</div>"
              <div className="text-gray-400">AI-Powered</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 2 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}"
              className="text-center"
            >"
              <div className="flex justify-center mb-4">"
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">"
                  <Shield className="w-8 h-8 text-white"   />                </div>
              </div>"
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>"
              <div className="text-gray-400">Uptime</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 2 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}"
              className="text-center"
            >"
              <div className="flex justify-center mb-4">"
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">"
                  <Zap className="w-8 h-8 text-white"   />                </div>
              </div>"
              <div className="text-3xl font-bold text-white mb-2">24/7</div>"
              <div className="text-gray-400">Support</div>
            </motion.div>
          </div>
        </div>
      </div>';
    </div>) }';';
export default ComprehensiveNewServicesShowcase2025;'"`

</motion>
</motion>';
</motion>;';;';
=======
        )}
      </div>
    </div>
  );
}

export default ComprehensiveNewServicesShowcase2025;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
