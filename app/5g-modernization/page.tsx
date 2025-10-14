import React, { Suspense } from &apos;react&apos;;
import EnhancedSEO from &apos;../components/EnhancedSEO&apos;
import { CheckCircle, ArrowRight } from &apos;lucide-react&apos;;
import { Link } from &apos;react-router-dom&apos;;

const FiveGModernizationPage = () => {const services = [
    {
      title: &apos;5G Network Modernization&apos;,
      description: &apos;Complete modernization of legacy networks to 5G technology.&apos},
    {title: &apos;Security Modernization&apos;,
      description: &apos;Upgrade security infrastructure to support 5G requirements.&apos},
    {title: &apos;Team Training&apos;,
      description: &apos;Comprehensive training for modernized 5G network operations.&apos}
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
title="5G Modernization Services - Zion Tech Group"
        description="Professional 5G modernization services to upgrade your network infrastructure."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Modernization Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modernize your network infrastructure with cutting-edge 5G technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-blue-600 hover: text-blue-800 font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/contact";
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover: bg-blue-700";
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
</div>
  )
}

export default FiveGModernizationPage
;