import React from 'react';
import React from 'react';
import React from 'react';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  ChartBarIcon,
  CogIcon,
  LightBulbIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function DigitalTransformationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Transformation Services",
    "description": "Comprehensive digital transformation services to modernize your business processes and enhance customer experiences.",
    "url": "https://ziontechgroup.com/digital-transformation",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const services = [
    {
      icon: CogIcon,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['Workflow Analysis', 'Process Mapping', 'Automation Implementation', 'Performance Monitoring']
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights to drive informed business decisions.',
      features: ['Data Collection', 'Analytics Dashboard', 'Predictive Modeling', 'Business Intelligence']
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation Strategy',
      description: 'Develop and implement innovative strategies to stay competitive in the digital age.',
      features: ['Technology Assessment', 'Innovation Roadmap', 'Change Management', 'Digital Culture']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security Integration',
      description: 'Ensure security is built into every aspect of your digital transformation journey.',
      features: ['Security Assessment', 'Compliance Planning', 'Risk Management', 'Security Training']
    }
  ];

  return (
    <>
      <SEOHead 
        title="Digital Transformation Services - Zion Tech Group"
        description="Transform your business with our comprehensive digital transformation services. Process automation, data analytics, and innovation strategy."
        keywords="digital transformation, process automation, data analytics, business innovation, technology strategy"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Digital Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Modernize Your Business for the Digital Age
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your business processes, enhance customer experiences, and drive growth 
              with our comprehensive digital transformation services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Digital Transformation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We help businesses embrace digital technologies and transform their operations 
                for sustainable growth and competitive advantage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our digital transformation services can help your business 
              thrive in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Your Transformation
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
