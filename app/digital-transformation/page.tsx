import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRightIcon, 
  ChartBarIcon, 
  CogIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

export default function DigitalTransformationPage() {
  const services = [
    {
      title: "Process Automation",
      description: "Streamline your business processes with intelligent automation solutions",
      icon: CogIcon,
      features: ["Workflow automation", "Document processing", "Task optimization", "ROI tracking"]
    },
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud for better scalability",
      icon: CloudIcon,
      features: ["Cloud strategy", "Data migration", "Security implementation", "Performance optimization"]
    },
    {
      title: "AI Integration",
      description: "Integrate artificial intelligence into your existing systems and workflows",
      icon: CpuChipIcon,
      features: ["AI strategy", "Model deployment", "Data integration", "Performance monitoring"]
    },
    {
      title: "Security Enhancement",
      description: "Strengthen your cybersecurity posture with modern security solutions",
      icon: ShieldCheckIcon,
      features: ["Security audit", "Threat detection", "Compliance management", "Incident response"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services. Modernize processes, improve efficiency, and drive growth." />
        <meta name="keywords" content="digital transformation, business modernization, process automation, cloud migration, AI integration" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Modernize your business with cutting-edge technology solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Transform your business operations, improve efficiency, and drive growth with our comprehensive 
              digital transformation services designed for the modern enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Digital Transformation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to modernize your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 flex items-center">
                        <ArrowRightIcon className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Transformation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to ensure successful digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Assessment", description: "Analyze current systems and identify opportunities" },
              { step: "02", title: "Strategy", description: "Develop a comprehensive transformation roadmap" },
              { step: "03", title: "Implementation", description: "Execute the transformation plan with expert guidance" },
              { step: "04", title: "Optimization", description: "Monitor, refine, and optimize for continuous improvement" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how we can help you modernize your operations and drive growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Your Transformation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}