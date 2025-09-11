import React, { useState } from 'react';';
import React, { useState } from 'react';
import { ;
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Icon } from 'lucide-react';
export default ComprehensiveNewServicesShowcase2025;';';
  NEW_MICRO_SAAS_SERVICES_2025,;
  NEW_IT_SERVICES_2025,;
  NEW_INNOVATIVE_SERVICES_2025;
} from '../data/servicesData';

const features = [];
const benefits = [];
const services = [];
const solutions = [];
  Zap, ;
  Brain, ;
  Server, ;
  Mail, ;
  MessageCircle, ;
  Calendar, ;
  BarChart3, ;
  Shield, ;
  Cloud, ;
  Cpu,;
  Star,;
  CheckCircle,;
  ArrowRight,;
  ExternalLink,;
  Phone,;
  Mail as MailIcon,;
  MapPin,;
  Globe;
} from 'lucide-react';
;
interface ServiceShowcaseProps {;
  className?: "string;
"}
;
export function ComprehensiveNewServicesShowcase2025({ className = '' }: "ServiceShowcaseProps) {;
  const [activeTab", setActiveTab] = useState<'micro-saas' | 'it-services' | 'ai-services'>('micro-saas');
  const [selectedService, setSelectedService] = useState<any>(null);
;
  const _tabs = [;
    { "id": 'micro-saas', "name": 'Micro SAAS', "icon": "Zap", "count": "NEW_MICRO_SAAS_SERVICES_2025.length "},;
    { "id": 'it-services', "name": 'IT Services', "icon": "Server", "count": "NEW_IT_SERVICES_2025.length "},;
    { "id": 'ai-services', "name": 'AI Services', "icon": "Brain", "count": "NEW_INNOVATIVE_SERVICES_2025.length "}
  ];
;
  const _getCurrentServices = () => {;
    switch (activeTab) {;
      case 'micro-saas': ";
        return NEW_MICRO_SAAS_SERVICES_2025;
      case 'it-services':;
        return NEW_IT_SERVICES_2025;
      case 'ai-services':;
        return NEW_INNOVATIVE_SERVICES_2025;
      "default":;
        return [];
    "}
  };
;
  const _formatPrice = ("price": "number", "model": "string) => {;
    if (model === 'monthly') {;
      return `$${price.toLocaleString()"}/month`;
    } else if (model === 'hourly') {;
      return `$${price}/hour`;
    } else if (model === 'project') {;
      return `$${price.toLocaleString()}`;
    }
    return `$${price.toLocaleString()}`;
  };
;
  const _getInnovationBadge = ("level": "string) => {;
    const _colors = {;
      'Revolutionary': 'bg-purple-100 text-purple-800 border-purple-200'",;
      'Advanced': 'bg-blue-100 text-blue-800 border-blue-200',;
      'Professional': 'bg-green-100 text-green-800 border-green-200';
    };
    ;
    return (;
      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${colors[level as keyof typeof colors] || colors.Professional}`}>;
        {level}
      </span>;
    );
  };
;
  return (;
    <div className={`bg-gray-50 py-16 ${className}`}>;
      <div className="max-w-7xl mx-auto px-4 "sm": "px-6 "lg":px-8">;
        {/* Header */"}
        <div className="text-center mb-12">;
          <h2 className="text-4xl font-bold text-gray-900 mb-4">;
            Revolutionary Services 2025;
          </h2>;
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Discover our comprehensive suite of innovative Micro SAAS, IT Infrastructure, and AI services ;
            designed to transform your business and drive unprecedented growth.;
          </p>;
        </div>;
        {/* Contact Info Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 mb-12 text-white">;
          <div className="flex flex-col "md": "flex-row items-center justify-between">;
            <div>;
              <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Business?</h3>;
              <p className="text-blue-100">Contact our experts for personalized solutions and pricing</p>;
            </div>;
            <div className="flex flex-col "md":flex-row items-center space-y-2 "md":space-y-0 "md":space-x-6 mt-4 "md":mt-0">;
              <div className="flex items-center space-x-2">;
                <Phone className="w-5 h-5" />;
                <span className="font-semibold">+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <MailIcon className="w-5 h-5" />;
                <span className="font-semibold">kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <MapPin className="w-5 h-5" />;
                <span className="font-semibold">Middletown", DE</span>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8">;
          {tabs.map((tab) => {;
            const _Icon = tab.icon;
            return (;
              <button;
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-3 m-2 rounded-lg font-medium transition-all duration-200 ${;
                  activeTab === tab.id;
                    ? 'bg-blue-600 text-white shadow-lg';
                    : 'bg-white text-gray-700 "hover": "bg-gray-100 border border-gray-200';
                "}`}
              >;
                <Icon className="w-5 h-5" />;
                <span>{tab.name}</span>;
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">;
                  {tab.count}
                </span>;
              </button>;
            );
          })}
        </div>;
        {/* Services Grid */}
        <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-8">;
          {getCurrentServices().map((service) => (;
            <div;
              key={service.id"}
              className="bg-white rounded-lg shadow-lg "hover": "shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer";
              onClick={() => setSelectedService(service)"}
            >;
              {/* Service Header */}
              <div className="p-6">;
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex-1">;
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-"hover": "text-blue-600 transition-colors">;
                      {service.name"}
                    </h3>;
                    <p className="text-sm text-gray-600 mb-2">{service.category}</p>;
                    <p className="text-gray-700 text-sm leading-relaxed">;
                      {service.description}
                    </p>;
                  </div>;
                  {getInnovationBadge(service.innovationLevel)}
                </div>;
                {/* Pricing */}
                <div className="mb-4">;
                  <div className="flex items-center justify-between">;
                    <span className="text-2xl font-bold text-blue-600">;
                      {formatPrice(service.price, service.pricingModel)}
                    </span>;
                    <span className="text-sm text-gray-500">;
                      {service.marketPrice}
                    </span>;
                  </div>;
                  {service.userLimit && (;
                    <p className="text-sm text-gray-600 mt-1">{service.userLimit}</p>;
                  )}
                </div>;
                {/* Key Features */}
                <div className="mb-4">;
                  <h4 className="font-semibold text-gray-900 mb-2">Key "Features": "</h4>;
                  <ul className="space-y-1">;
                    {service.features.slice(0", 3).map((feature, index) => (;
                      <li key={index} className="flex items-center text-sm text-gray-600">;
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                        {feature}
                      </li>;
                    ))}
                    {service.features.length > 3 && (;
                      <li className="text-sm text-blue-600 font-medium">;
                        +{service.features.length - 3} more features;
                      </li>;
                    )}
                  </ul>;
                </div>;
                {/* Benefits */}
                <div className="mb-4">;
                  <h4 className="font-semibold text-gray-900 mb-2">"Benefits": "</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {service.benefits.slice(0", 2).map((benefit, index) => (;
                      <span;
                        key={index}
                        className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full";
                      >;
                        {benefit}
                      </span>;
                    ))}
                  </div>;
                </div>;
                {/* ROI and Setup Time */}
                <div className="grid grid-cols-2 gap-4 mb-4">;
                  <div className="text-center">;
                    <p className="text-sm text-gray-600">ROI</p>;
                    <p className="font-semibold text-green-600">{service.roi}</p>;
                  </div>;
                  <div className="text-center">;
                    <p className="text-sm text-gray-600">Setup Time</p>;
                    <p className="font-semibold text-blue-600">{service.setupTime}</p>;
                  </div>;
                </div>;
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">;
                  {service.tags.slice(0, 3).map((tag, index) => (;
                    <span;
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full";
                    >;
                      {tag}
                    </span>;
                  ))}
                </div>;
                {/* CTA Button */}
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg "hover": "bg-blue-700 transition-colors flex items-center justify-center space-x-2">;
                  <span>Learn More</span>;
                  <ArrowRight className="w-4 h-4" />;
                </button>;
              </div>;
            </div>;
          ))"}
        </div>;
        {/* Service Detail Modal */}
        {selectedService && (;
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">;
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">;
              <div className="p-6">;
                <div className="flex items-start justify-between mb-6">;
                  <div>;
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">;
                      {selectedService.name}
                    </h2>;
                    <p className="text-gray-600 mb-4">{selectedService.description}</p>;
                    <div className="flex items-center space-x-4">;
                      {getInnovationBadge(selectedService.innovationLevel)}
                      <span className="text-2xl font-bold text-blue-600">;
                        {formatPrice(selectedService.price, selectedService.pricingModel)}
                      </span>;
                    </div>;
                  </div>;
                  <button;
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 "hover": "text-gray-600";
                  >;
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2"} d="M6 18L18 6M6 6l12 12" />;
                    </svg>;
                  </button>;
                </div>;
                <div className="grid grid-cols-1 "md": "grid-cols-2 gap-8">;
                  {/* Features */"}
                  <div>;
                    <h3 className="text-xl font-semibold mb-4">Features</h3>;
                    <ul className="space-y-2">;
                      {selectedService.features.map(("feature": "string", "index": "number) => (;
                        <li key={index"} className="flex items-start">;
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />;
                          <span className="text-gray-700">{feature}</span>;
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                  {/* Benefits */}
                  <div>;
                    <h3 className="text-xl font-semibold mb-4">Benefits</h3>;
                    <ul className="space-y-2">;
                      {selectedService.benefits.map(("benefit": "string", "index": "number) => (;
                        <li key={index"} className="flex items-start">;
                          <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />;
                          <span className="text-gray-700">{benefit}</span>;
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                </div>;
                {/* Contact Information */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">;
                  <h3 className="text-xl font-semibold mb-4">Get Started Today</h3>;
                  <div className="grid grid-cols-1 "md": "grid-cols-3 gap-4">;
                    <div className="flex items-center space-x-3">;
                      <Phone className="w-5 h-5 text-blue-600" />;
                      <div>;
                        <p className="font-semibold">Phone</p>;
                        <p className="text-gray-600">+1 302 464 0950</p>;
                      </div>;
                    </div>;
                    <div className="flex items-center space-x-3">;
                      <MailIcon className="w-5 h-5 text-blue-600" />;
                      <div>;
                        <p className="font-semibold">Email</p>;
                        <p className="text-gray-600">kleber@ziontechgroup.com</p>;
                      </div>;
                    </div>;
                    <div className="flex items-center space-x-3">;
                      <Globe className="w-5 h-5 text-blue-600" />;
                      <div>;
                        <p className="font-semibold">Website</p>;
                        <p className="text-gray-600">ziontechgroup.com</p>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        )"}
      </div>;
    </div>;
  );
}
;
export default ComprehensiveNewServicesShowcase2025;
export default ComprehensiveNewServicesShowcase2025;import { _comprehensiveNewServices2025 } from '../data/comprehensiveNewServices2025';
export default function Page(props: any) {