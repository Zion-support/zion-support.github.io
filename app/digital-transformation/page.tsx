import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

export default function DigitalTransformationPage() {
  const transformationServices = [
    {
      title: "Digital Strategy",
      description: "Comprehensive digital strategy development to align technology with business objectives and drive growth.",
      icon: ChartBarIcon,
      features: [
        "Business process analysis",
        "Technology roadmap",
        "Digital maturity assessment",
        "Change management planning",
        "ROI analysis",
        "Implementation timeline"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $10,000",
      benefits: ["Clear roadmap", "Measurable ROI", "Risk mitigation"],
      useCases: ["Strategic planning", "Digital readiness", "Competitive advantage"]
    },
    {
      title: "Process Automation",
      description: "Automate repetitive business processes to improve efficiency, reduce errors, and free up resources.",
      icon: CogIcon,
      features: [
        "Workflow analysis",
        "RPA implementation",
        "API integration",
        "Process optimization",
        "Performance monitoring",
        "Continuous improvement"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $5,000",
      benefits: ["50% efficiency gain", "Error reduction", "Cost savings"],
      useCases: ["Operations optimization", "Cost reduction", "Quality improvement"]
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights to drive data-driven decision making across your organization.",
      icon: CpuChipIcon,
      features: [
        "Data collection & integration",
        "Analytics dashboard development",
        "Predictive modeling",
        "Real-time reporting",
        "Data visualization",
        "Insight generation"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $7,500",
      benefits: ["Data-driven decisions", "Predictive insights", "Competitive advantage"],
      useCases: ["Business intelligence", "Performance optimization", "Market analysis"]
    },
    {
      title: "Customer Experience",
      description: "Enhance customer experience through digital channels and personalized interactions.",
      icon: LightBulbIcon,
      features: [
        "Customer journey mapping",
        "Digital channel optimization",
        "Personalization engines",
        "Omnichannel integration",
        "Customer analytics",
        "Feedback systems"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $6,000",
      benefits: ["Higher satisfaction", "Increased loyalty", "Revenue growth"],
      useCases: ["Customer retention", "Revenue growth", "Brand differentiation"]
    },
    {
      title: "Cloud Transformation",
      description: "Migrate and modernize your infrastructure to leverage cloud technologies for scalability and agility.",
      icon: CloudIcon,
      features: [
        "Cloud strategy development",
        "Infrastructure migration",
        "Application modernization",
        "Security implementation",
        "Performance optimization",
        "Cost management"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $8,000",
      benefits: ["Scalability", "Cost efficiency", "Agility"],
      useCases: ["Scalability needs", "Cost optimization", "Modernization"]
    },
    {
      title: "Change Management",
      description: "Support your team through digital transformation with comprehensive change management strategies.",
      icon: DocumentTextIcon,
      features: [
        "Change impact assessment",
        "Training programs",
        "Communication strategies",
        "Resistance management",
        "Adoption monitoring",
        "Success measurement"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $4,000",
      benefits: ["Smooth transition", "High adoption", "Minimal disruption"],
      useCases: ["Team readiness", "Adoption success", "Change resistance"]
    }
  ];

  const transformationStats = [
    { label: "Efficiency Gain", value: "40%", color: "text-green-400" },
    { label: "Cost Reduction", value: "35%", color: "text-blue-400" },
    { label: "Customer Satisfaction", value: "95%", color: "text-purple-400" },
    { label: "ROI", value: "300%", color: "text-yellow-400" }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services including strategy, automation, analytics, and change management." />
        <meta name="keywords" content="digital transformation, process automation, data analytics, customer experience, cloud transformation, change management" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business for the digital age with comprehensive technology solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From strategy to implementation, we help businesses embrace digital technologies 
              to improve efficiency, enhance customer experience, and drive sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
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
          </div>
        </div>
      </section>

      {/* Transformation Stats */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {transformationStats.map((stat, _index) => (
              <div key={stat.label} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Transformation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end digital transformation solutions designed to modernize your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {transformationServices.map((service, _index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">Starting price</div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Link 
                      to="/contact" 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center"
                    >
                      Get Started
                    </Link>
                    <Link 
                      to="/demo" 
                      className="w-full border border-purple-400 text-purple-300 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Transformation */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Digital Transformation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive transformation services with proven methodologies and expert guidance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChartBarIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Proven Methodology</h3>
                <p className="text-gray-300">
                  Our structured approach ensures successful transformation with measurable results and clear milestones.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CogIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">End-to-End Support</h3>
                <p className="text-gray-300">
                  From strategy to implementation and beyond, we support your entire transformation journey.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Risk Mitigation</h3>
                <p className="text-gray-300">
                  Minimize transformation risks with careful planning, testing, and change management strategies.
                </p>
              </div>
            </div>
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
              Get a free digital transformation assessment and discover your path to digital success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Assessment
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
          </div>
        </div>
      </section>
    </>
  );
}