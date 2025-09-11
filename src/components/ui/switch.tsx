import {
  SERVICE_CATEGORIES
  ALL_SERVICES
  AI_SERVICES
  IT_SERVICES
  MICRO_SAAS_SERVICES
  CYBERSECURITY_SERVICES
  DATA_ANALYTICS_SERVICES
  CLOUD_SOLUTIONS;} from '@/data/servicesData';import {
  SERVICE_CATEGORIES,
  ALL_SERVICES,
  AI_SERVICES,
  IT_SERVICES,
  MICRO_SAAS_SERVICES,
  CYBERSECURITY_SERVICES,
  DATA_ANALYTICS_SERVICES,;
  CLOUD_SOLUTIONS,;} from '@/data/servicesData';import { ;
import React, { useState } from 'react';


  SERVICE_CATEGORIES;
  ALL_SERVICES
  AI_SERVICES
  IT_SERVICES
  MICRO_SAAS_SERVICES;
  CYBERSECURITY_SERVICES;
  DATA_ANALYTICS_SERVICES;
  CLOUD_SOLUTIONS
} from '@/data/servicesData';
import { ServiceCategory, ServiceSolution } from '@/types/services';


export function ServicesPage() {
import { ServiceCategory, ServiceSolution } from '@/types/services';
export function ServicesPage() {;



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Zion Tech Group Services
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Comprehensive IT, AI, and Micro SAAS solutions to transform your business. 
              From cutting-edge artificial intelligence to robust infrastructure support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                📞 Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
import React, { useState } from 'react',;
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Info Banner */}
      <div className='bg-white border-b'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex flex-wrap justify-center items-center gap-8 text-gray-600'>
            <div className='flex items-center gap-2'>
              <span className='text-blue-600'>📍</span>


      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">📍</span>
  return (
    <div className="min - h-screen bg - gradient - to - br from - gray - 50 to - gray - 100">;
      {/* Hero Section */}




              <span className="text-blue-600">🌐</span>
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline">
                ziontechgroup.com

              </a>
              </Link>

              </Link>

              </a>
              </Link>


            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input


          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}


        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />

          ))}
        </div>

        {selectedServices.length === 0 && (
          <div className="text-center py-12">

          <div className="text-center py-12">

          </div>;
        </div>;


        {/* Services Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {selectedServices.map(service => (            <ServiceCard key={service.id} service={service} />        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">


          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />          ))}


        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />

          ))}
        </div>
        {selectedServices.length === 0 && (
          <div className='text-center py-12'>
            <h3 className='text-xl text-gray-600 mb-4'>No services found</h3>
            <p className='text-gray-500'>
              Try adjusting your search or filter criteria
            </p>          </div>          <div className="text-center py-12">
          <div className="text-center py-12">
            </div>;
          </div>;
        </div>;


        {/* Services Grid */}


        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">


          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}


        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {selectedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />

          ))}
        </div>

        {selectedServices.length === 0 && (
          <div className='text-center py-12'>
            <h3 className='text-xl text-gray-600 mb-4'>No services found</h3>
            <p className='text-gray-500'>
              Try adjusting your search or filter criteria
            </p>          </div>          <div className="text-center py-12">
          <div className="text-center py-12">

          <div className="text-center py-12">

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>
            </div>
            <div className='text-center'>
              <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🛡️</span>            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>


              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2, HIPAA, GDPR compliant solutions</p>
            </div>
            <div className='text-center'>
              <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>⚡</span>            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>


              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>
              <p className="text-gray-600">Quick setup and implementation</p>
            </div>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?

        </div>;
        {selectedServices && selectedServices.length === 0 && (;
          <div className='text-center py-12'>;
            <h3 className='text-xl text-gray-600 mb-4'>No services found</h3>;
            <p className='text-gray-500'>;
              Try adjusting your search or filter criteria;
            </p>          </div>          <div className="text-center py-12">;
            <h3 className="text-xl text-gray-600 mb-4">No services found</h3>;
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>;
          </div>;
        )}
      </div>;
      {/* Why Choose Zion Tech Group */}
      <div className='bg-white py-16'>;
        <div className='container mx-auto px-4'>;
          <div className='text-center mb-12'>;
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>;
          </h2>
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-6'>

          </h2>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel: +13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              📞 Call +1 302 464 0950
            </Link>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
            >
              ✉️ Get Free Consultation
            </a>
            <a
              href='https://ziontechgroup.com'
              className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'            >            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get started with Zion Tech Group today and discover how our innovative solutions can drive growth, efficiency, and success for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel: +13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              📞 Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
            >
              ✉️ Get Free Consultation
            </a>
            <a
            </Link>
            </Link>
            </Link>
            <a 
            <a
              href="https://ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              🌐 Visit Website
            </Link>
          </div>
        </div>
      </div>
    </div>

}
interface ServiceCardProps {
  service: ServiceSolution
              href="tel: +13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">;
              📞 Call +1 302 464 0950;
            </a>;
            <a
              href="mailto:kleber@ziontechgroup && ziontechgroup.com"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors">;
              ✉️ Get Free Consultation;
            </a>;
            <a
              href="https://ziontechgroup && ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">;
              🌐 Visit Website;
            </a>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
interface ServiceCardProps {;
  service: ServiceSolution;  );
}
interface ServiceCardProps {;
  service: ServiceSolution;




}
function ServiceCard(): any ({ service }: ServiceCardProps) {;
  const [showDetails, setShowDetails] = useState(false);




}
function ServiceCard(): any ({ service }: ServiceCardProps) {;
  const [showDetails, setShowDetails] = useState(false);


  const getPopularPlan = () => {
  const popularPlan = getPopularPlan();

  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
    if (service.pricing.professional.popular) return service.pricing.professional,
    if (service.pricing.basic.popular) return service.pricing.basic,
    if (service.pricing.enterprise.popular) return service.pricing.enterprise,
    if (service.pricing.professional.popular) return service.pricing.professional;
    if (service.pricing.basic.popular) return service.pricing.basic;
    if (service.pricing.enterprise.popular) return service.pricing.enterprise;    return service.pricing.professional
  };


  const getPopularPlan = () => {;
    if (service && service.pricing.professional && professional.popular);
      return service && service.pricing.professional;
    if (service && service.pricing.basic && basic.popular) return service && service.pricing.basic;
    if (service && service.pricing.enterprise && enterprise.popular) return service && service.pricing.enterprise;
    return service && service.pricing.professional;  };    if (service && service.pricing.professional && professional.popular) return service && service.pricing.professional;
    if (service && service.pricing.basic && basic.popular) return service && service.pricing.basic;
    if (service && service.pricing.enterprise && enterprise.popular) return service && service.pricing.enterprise;
    return service && service.pricing.professional;
  const popularPlan = getPopularPlan();
  return (


            </span>;
          </div>;
          <div>          </div>;
        </div>;


        {/* Provider Info */}
        <div className="flex items-center gap-3 mb-4">;
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">;
            <span className="text-blue-600 font-semibold text-sm">;
              {service && service.provider.name && name.charAt(0)}
            </span>;
          </div>;
          <div>;
            <p className='font-medium text-gray-900'>{service && service.provider.name}</p>;
            <p className='text-sm text-gray-500'>{service && service.provider.location}</p>;
          </div>;
          {service && service.provider.verified && (;
            <span className='text-blue-600 text-sm'>✓ Verified</span>          )}

    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Service Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {service.category}
          </span>
        </div>
        {service.aiScore && (
          <div className='absolute bottom-4 left-4'>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>              AI Score: {service.aiScore}      {/* Service Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img
          src={service.images[0]}
          alt={service.title}
          className="w - full h - full object - cover";
        />;
        <div className="absolute top - 4 right - 4">;
          <span className="bg - white text - blue - 600 px - 3 py - 1 rounded - full text - sm font - semibold">;
            {service.category}
          </span>;
        </div>;
        {service.ai_score && (
          <div className='absolute bottom - 4 left - 4'>;
            <span className='bg - green - 500 text - white px - 3 py - 1 rounded - full text - sm font - semibold'>          <div className="absolute bottom - 4 left - 4">;
            <span className="bg - green - 500 text - white px - 3 py - 1 rounded - full text - sm font - semibold">;
              AI Score: {service.ai_score}
            </span>;
          </div>)}
      </div>;
      {/* Service Content */}
      <div className='p - 6'>;
        <div className='flex items - start justify - between mb - 3'>;
          <h3 className='text - xl font - bold text - gray - 900 mb - 2'>;
            {service.title}
          </h3>;
          <div className='flex items - center gap - 1'>;
            <span className='text - yellow - 500'>⭐</span>;
            <span className='text - sm font - medium'>;
              {service.provider.rating}
      </div>;
      {/* Service Content */}
      <div className='p-6'>;
        <div className='flex items-start justify-between mb-3'>;
          <h3 className='text-xl font-bold text-gray-900 mb-2'>;
            {service && service.title}
          </h3>;
          <div className='flex items-center gap-1'>;
            <span className='text-yellow-500'>⭐</span>;
            <span className='text-sm font-medium'>;
              {service && service.provider.rating}
            </span>;
            <span className='text-gray-500 text-sm'>;
              ({service && service.provider.reviewCount});
            </span>;
          </div>;
        </div>;
        <p className='text-gray-600 mb-4 line-clamp-3'>{service && service.description}</p>;
        {/* Provider Info */}
        <div className='flex items-center gap-3 mb-4'>;
          <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>;
            <span className='text-blue-600 font-semibold text-sm'>              {service && service.provider.name && name.charAt(0)}
            </span>;
            <span className='text - gray - 500 text - sm'>;
              ({service.provider.review_count});
            </span>;
          </div>;
        </div>;
        <p className='text - gray - 600 mb - 4 line - clamp - 3'>{service.description}</p>;
        {/* Provider Info */}
        <div className='flex items - center gap - 3 mb - 4'>;
          <div className='w - 8 h - 8 bg - blue - 100 rounded - full flex items - center justify - center'>;
            <span className='text - blue - 600 font - semibold text - sm'>              {service.provider.name.char_at (0)}


            </span>;
          </div>;
          <div>          </div>;
        </div>;

        {/* Provider Info */}
        <div className="flex items-center gap-3 mb-4">;
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">;
            <span className="text-blue-600 font-semibold text-sm">;
              {service && service.provider.name && name.charAt(0)}
            </span>;
          </div>;
          <div>;
            <p className='font-medium text-gray-900'>{service && service.provider.name}</p>;
            <p className='text-sm text-gray-500'>{service && service.provider.location}</p>;
          </div>;
          {service && service.provider.verified && (;
            <span className='text-blue-600 text-sm'>✓ Verified</span>          )}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Service Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {service.category}
          </span>
        </div>
        {service.aiScore && (
          <div className="absolute bottom-4 left-4">
          <div className='absolute bottom-4 left-4'>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>          <div className="absolute bottom-4 left-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AI Score: {service.aiScore}
            </span>
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AI Score: {service.aiScore}
            </span>;
          </div>;
        )}
      </div>
      {/* Service Content */}

      {/* Service Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-full object-cover"
        />



        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {service.category}
          </span>
        </div>
        {service.aiScore && (

          <div className="absolute bottom-4 left-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AI Score: {service.aiScore}
            </span>;
          </div>;

        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

        {/* Provider Info */}
            <p className="font-medium text-gray-900">{service.provider.name}</p>
            <p className="text-sm text-gray-500">{service.provider.location}</p>
          </div>
          {service.provider.verified && (
            <span className="text-blue-600 text-sm">✓ Verified</span>
          )}
        </div>;
        {/* Pricing */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {popularPlan.currency}{popularPlan.price}
              <span className="text-sm font-normal text-gray-500">
                /{popularPlan.period}
              </span>
            </div>
            {popularPlan.popular && (
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                Most Popular
              </span>            )}

          </div>;
        </div>;


        {/* Features Preview */}


              </span>;
            </div>;
            {popular_plan.popular && (
              <span className='bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium'>                Most Popular        <div className="bg - gray - 50 rounded - lg p - 4 mb - 4">;
          <div className="text - center">;
            <div className="text - 2xl font - bold text - gray - 900">;
              {popular_plan.currency}{popular_plan.price}
              <span className="text - sm font - normal text - gray - 500">;
              </span>;
            </div>;
            {popular_plan.popular && (
              <span className='bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium'>              <span className="bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium">;
                Most Popular;
              </span>)}
          </div>;
        </div>;
        {/* Features Preview */}
                Most Popular
              </span>>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            )}

          </div>;
        </div>;


        {/* Features Preview */}


              </span>;
            </div>;
            {popular_plan.popular && (
              <span className='bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium'>                Most Popular        <div className="bg - gray - 50 rounded - lg p - 4 mb - 4">;
          <div className="text - center">;
            <div className="text - 2xl font - bold text - gray - 900">;
              {popular_plan.currency}{popular_plan.price}
              <span className="text - sm font - normal text - gray - 500">;
              </span>;
            </div>;
            {popular_plan.popular && (
              <span className='bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium'>              <span className="bg - blue - 600 text - white px - 2 py - 1 rounded - full text - xs font - medium">;
                Most Popular;
              </span>)}
          </div>;
        </div>;
        {/* Features Preview */}
        <div className='mb - 4'>;
          <h4 className='font - semibold text - gray - 900 mb - 2'>Key Features:</h4>;
          <div className='flex flex - wrap gap - 2'>;
            {service.features.slice (0, 3).map ((feature, index) => (
              <span;
                key={index}
        <div className='mb - 4'>;
          <h4 className='font - semibold text - gray - 900 mb - 2'>Key Features:</h4>;
          <div className='flex flex - wrap gap - 2'>;
            {service.features.slice (0, 3).map ((feature, index) => (
              <span;
                key={index}
                className='bg - blue - 100 text - blue - 800 px - 2 py - 1 rounded text - xs'              >            {service.features.slice (0, 3).map ((feature, index) => (
              <span;
                key={index}
                className="bg - blue - 100 text - blue - 800 px - 2 py - 1 rounded text - xs";
              >;

            )}

          </div>;
        </div>;


        {/* Action Buttons */}

        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"

          >
            Call Now
          </Link>
        </div>


        {/* Detailed Information */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              {/* Benefits */}
              <div>                    <li key={index}>{benefit}</li>                  ))}

                </ul>;
              </div>;


              {/* Use Cases */}

                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >

                    <li key={index}>{benefit}</li>>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  ))}

                </ul>;
              </div>;


              {/* Use Cases */}


                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >
                      {useCase}
                    </span>;
                  ))}

                </div>;
              </div>;


              {/* Technologies */}
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >
                      {useCase}
                    </span>;
                  ))}

                </div>;
              </div>;


              {/* Technologies */}

                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                    >
                      className='bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs'                    >                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}

                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>;
                  ))}
                </div>
              </div>
              {/* Deployment & Support */}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>;
                  ))}


              <div className="grid grid-cols-2 gap-4 text-sm">


              <div className='grid grid-cols-2 gap-4 text-sm'>
              <div className="grid grid-cols-2 gap-4 text-sm">


                <div>
                  <span className='font-medium text-gray-900'>Deployment:</span>
                  <p className='text-gray-600'>{service.deploymentTime}</p>
                </div>
                <div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Deployment:</span>
                  <p className="text-gray-600">{service.deploymentTime}</p>
                </div>
                <div>

                  <span className='font-medium text-gray-900'>Support:</span>
                  <p className='text-gray-600'>
                    {service.support.slice(0, 2).join(', ')}
                  </p>                </div>                <div>
                  <span className="font-medium text-gray-900">Deployment:</span>
                  <p className="text-gray-600">{service.deploymentTime}</p>
                </div>
                <div>



                  <span className="font-medium text-gray-900">Support:</span>
                  <p className="text-gray-600">{service.support.slice(0, 2).join(', ')}</p>
                </div>
              </div>
                </div>;
              </div>;
              {/* Deployment & Support */}
              <div className='grid grid-cols-2 gap-4 text-sm'>;
                <div>;
                  <span className='font-medium text-gray-900'>Deployment:</span>;
                  <p className='text-gray-600'>{service && service.deploymentTime}</p>;
                </div>;
                <div>;
                  <span className='font-medium text-gray-900'>Support:</span>;
                  <p className='text-gray-600'>;
                    {service && service.support.slice(0, 2).join(', ')}
                  </p>                </div>                <div>;
                  <span className="font-medium text-gray-900">Deployment:</span>;
                  <p className="text-gray-600">{service && service.deploymentTime}</p>;
                </div>;
                <div>;
                  <span className="font-medium text-gray-900">Support:</span>;
                  <p className="text-gray-600">{service && service.support.slice(0, 2).join(', ')}</p>;
                </div>;
              </div>;

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pricing Plans:</h4>
                <div className="space-y-2">
                  {Object.entries(service.pricing).map(([plan, details]) => (
                  ))}

                </div>;
              </div>;


              {/* Contact CTA */}


                  Ready to get started with {service.title}?
                </p>
              <div className='bg-blue-50 rounded-lg p-4 text-center'>
                <p className='text-sm text-blue-800 mb-2'>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-800 mb-2">

                  ))}

                </div>;
              </div>;


              {/* Contact CTA */}

                  Ready to get started with {service.title}?
                </p>
                <div className="flex gap-2 justify-center">
                  <a
                    href={`tel:+13024640950`}




                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    📞 Call +1 302 464 0950
                  </Link>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}

                    className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'                  >                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"

                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"

                    className='bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors'                  >                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                    className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"


                  >
                    ✉️ Email Inquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}



}
}
}
}
}
}
}
}
}
}


  )
}

  )
}

        {show_details && (
          <div className='mt - 6 pt - 6 border - t border - gray - 200'>;
            <div className='space - y-4'>;
              {/* Benefits */}
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>Benefits:</h4>;
                <ul className='list - disc list - inside text - sm text - gray - 600 space - y-1'>                  {service.benefits.slice (0, 3).map ((benefit, index) => (          <div className="mt - 6 pt - 6 border - t border - gray - 200">;
            <div className="space - y-4">;
              {/* Benefits */}
              <div>;
                <h4 className="font - semibold text - gray - 900 mb - 2">Benefits:</h4>;
                <ul className="list - disc list - inside text - sm text - gray - 600 space - y-1">;
                    <li key={index}>{benefit}</li>))}
                </ul>;
              </div>;
              {/* Use Cases */}
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>Use Cases:</h4>;
                <div className='flex flex - wrap gap - 2'>;
                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                    <span;
                      key={index}
                      className='bg - green - 100 text - green - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                    <span;
                      key={index}
                      className="bg - green - 100 text - green - 800 px - 2 py - 1 rounded text - xs";
                    >;
                      {use_case}
                    </span>))}
                </div>;
              </div>;
              {/* Technologies */}
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>;
                  Technologies:;
                </h4>;
                <div className='flex flex - wrap gap - 2'>;
                  {service.technologies.slice (0, 4).map ((tech, index) => (
                    <span;
                      key={index}
                      className='bg - purple - 100 text - purple - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.technologies.slice (0, 4).map ((tech, index) => (
                    <span;
                      key={index}
                      className="bg - purple - 100 text - purple - 800 px - 2 py - 1 rounded text - xs";
                    >;
                      {tech}
                    </span>))}
                </div>;
              </div>;
              {/* Deployment & Support */}
              <div className='grid grid - cols - 2 gap - 4 text - sm'>;
                <div>;
                  <span className='font - medium text - gray - 900'>Deployment:</span>;
                  <p className='text - gray - 600'>{service.deployment_time}</p>;
                </div>;
                <div>;
                  <span className='font - medium text - gray - 900'>Support:</span>;
                  <p className='text - gray - 600'>;
                    {service.support.slice (0, 2).join (', ')}
                  </p>                </div>                <div>;
                  <span className="font - medium text - gray - 900">Deployment:</span>;
                  <p className="text - gray - 600">{service.deployment_time}</p>;
                </div>;
                <div>;
                  <span className="font - medium text - gray - 900">Support:</span>;
                  <p className="text - gray - 600">{service.support.slice (0, 2).join (', ')}</p>;
                </div>;
              </div>;
              {/* All Pricing Plans */}
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>;
                  Pricing Plans:;
                </h4>;
                <div className='space - y-2'>;
                  {Object.entries (service.pricing).map (([plan, details]) => (
                    <div;
                      key={plan}
                      className='flex justify - between items - center text - sm';
                    >;
                      <span className='capitalize font - medium'>{plan}</span>;
                      <span className='text - gray - 600'>;
                        {details.currency}
                        {details.price}/{details.period}                      </span>                    <div key={plan} className="flex justify - between items - center text - sm">;
                      <span className="capitalize font - medium">{plan}</span>;
                      <span className="text - gray - 600">;
                        {details.currency}{details.price}/{details.period}
                    </div>))}
                </div>;
              </div>;
              {/* Contact CTA */}
              <div className='bg - blue - 50 rounded - lg p - 4 text - center'>;
                <p className='text - sm text - blue - 800 mb - 2'>;
                  Ready to get started with {service.title}?;
                </p>;
                <div className='flex gap - 2 justify - center'>;
                  <a;
                    href={`tel:+13024640950`}
                    className='bg - blue - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - blue - 700 transition - colors'                  >                  Ready to get started with {service.title}?;
                </p>;
                <div className="flex gap - 2 justify - center">;
                  <a;
                    href={`tel:+13024640950`}
                    className="bg - blue - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - blue - 700 transition - colors";
                  >;
                    📞 Call +1 302 464 0950;
                  </a>;
                  <a;
                    href={`mailto:kleber@ziontechgroup.com?subject = Inquiry about ${service.title}`}
                    className='bg - green - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - green - 700 transition - colors'                  >                    className="bg - green - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - green - 700 transition - colors";
                  >;
                    ✉️ Email Inquiry;
                  </a>;
                </div>;
              </div>;
            </div>;
          </div>)}
      </div>;
    </div>));
}
      </div>
    </div>
);  )
}

}
}
}
}
}
}
}
}
}
}
    </div>;
  );  );
}
  )
}

        {/* Detailed Information */}
        {show_details && (
          <div className='mt - 6 pt - 6 border - t border - gray - 200'>;
            <div className='space - y-4'>;
              {/* Benefits */}
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>Benefits:</h4>;
                <ul className='list - disc list - inside text - sm text - gray - 600 space - y-1'>                  {service.benefits.slice (0, 3).map ((benefit, index) => (          <div className="mt - 6 pt - 6 border - t border - gray - 200">;
            <div className="space - y-4">;
              {/* Benefits */}
              <div>;
                <h4 className="font - semibold text - gray - 900 mb - 2">Benefits:</h4>;
                <ul className="list - disc list - inside text - sm text - gray - 600 space - y-1">;
                    <li key={index}>{benefit}</li>))}
                </ul>;
              </div>;
              {/* Use Cases */}
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>Use Cases:</h4>;
                <div className='flex flex - wrap gap - 2'>;
                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                    <span;
                      key={index}
                      className='bg - green - 100 text - green - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.use_cases.slice (0, 3).map ((use_case, index) => (
                    <span;
                      key={index}
                      className="bg - green - 100 text - green - 800 px - 2 py - 1 rounded text - xs";
                    >;
                      {use_case}
                    </span>))}
                </div>;
              </div>;
              {/* Technologies */}
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>;
                  Technologies:;
                </h4>;
                <div className='flex flex - wrap gap - 2'>;
                  {service.technologies.slice (0, 4).map ((tech, index) => (
                    <span;
                      key={index}
                      className='bg - purple - 100 text - purple - 800 px - 2 py - 1 rounded text - xs'                    >                  {service.technologies.slice (0, 4).map ((tech, index) => (
                    <span;
                      key={index}
                      className="bg - purple - 100 text - purple - 800 px - 2 py - 1 rounded text - xs";
                    >;
                      {tech}
                    </span>))}
                </div>;
              </div>;
              {/* Deployment & Support */}
              <div className='grid grid - cols - 2 gap - 4 text - sm'>;
                <div>;
                  <span className='font - medium text - gray - 900'>Deployment:</span>;
                  <p className='text - gray - 600'>{service.deployment_time}</p>;
                </div>;
                <div>;
                  <span className='font - medium text - gray - 900'>Support:</span>;
                  <p className='text - gray - 600'>;
                    {service.support.slice (0, 2).join (', ')}
                  </p>                </div>                <div>;
                  <span className="font - medium text - gray - 900">Deployment:</span>;
                  <p className="text - gray - 600">{service.deployment_time}</p>;
                </div>;
                <div>;
                  <span className="font - medium text - gray - 900">Support:</span>;
                  <p className="text - gray - 600">{service.support.slice (0, 2).join (', ')}</p>;
                </div>;
              </div>;
              {/* All Pricing Plans */}
              <div>;
                <h4 className='font - semibold text - gray - 900 mb - 2'>;
                  Pricing Plans:;
                </h4>;
                <div className='space - y-2'>;
                  {Object.entries (service.pricing).map (([plan, details]) => (
                    <div;
                      key={plan}
                      className='flex justify - between items - center text - sm';
                    >;
                      <span className='capitalize font - medium'>{plan}</span>;
                      <span className='text - gray - 600'>;
                        {details.currency}
                        {details.price}/{details.period}                      </span>                    <div key={plan} className="flex justify - between items - center text - sm">;
                      <span className="capitalize font - medium">{plan}</span>;
                      <span className="text - gray - 600">;
                        {details.currency}{details.price}/{details.period}
                    </div>))}
                </div>;
              </div>;
              {/* Contact CTA */}
              <div className='bg - blue - 50 rounded - lg p - 4 text - center'>;
                <p className='text - sm text - blue - 800 mb - 2'>;
                  Ready to get started with {service.title}?;
                </p>;
                <div className='flex gap - 2 justify - center'>;
                  <a;
                    href={`tel:+13024640950`}
                    className='bg - blue - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - blue - 700 transition - colors'                  >                  Ready to get started with {service.title}?;
                </p>;
                <div className="flex gap - 2 justify - center">;
                  <a;
                    href={`tel:+13024640950`}
                    className="bg - blue - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - blue - 700 transition - colors";
                  >;
                    📞 Call +1 302 464 0950;
                  </a>;
                  <a;
                    href={`mailto:kleber@ziontechgroup.com?subject = Inquiry about ${service.title}`}
                    className='bg - green - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - green - 700 transition - colors'                  >                    className="bg - green - 600 text - white px - 4 py - 2 rounded text - sm font - medium hover:bg - green - 700 transition - colors";
                  >;
                    ✉️ Email Inquiry;
                  </a>;
                </div>;
              </div>;
            </div>;
          </div>)}
      </div>;
    </div>));
}>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4


