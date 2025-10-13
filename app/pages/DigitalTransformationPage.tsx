import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CloudIcon,
  ServerIcon,
  CogIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChartBarIcon,
  CpuChipIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function DigitalTransformationPage() {
  const transformationServices = [
    {
      title: "Digital Strategy & Planning",
      description: "Comprehensive digital transformation strategy development to align technology with business goals and drive innovation.",
      icon: ChartBarIcon,
      features: [
        "Digital maturity assessment",
        "Technology roadmap development",
        "Change management planning",
        "ROI analysis and forecasting",
        "Stakeholder alignment",
        "Implementation planning"
      ],
      pricing: {
        basic: { price: 299, period: "hour", features: ["Strategy sessions", "Basic assessment", "Email support"] },
        professional: { price: 499, period: "hour", features: ["Comprehensive analysis", "Detailed roadmap", "Priority support"] },
        enterprise: { price: 799, period: "hour", features: ["Full transformation plan", "Dedicated team", "Ongoing support"] }
      },
      color: "from-blue-500 to-cyan-500",
      href: "/digital-strategy",
      marketPrice: "$299-799/hour",
      benefits: [
        "Align technology with business goals",
        "Identify transformation opportunities",
        "Reduce implementation risks",
        "Maximize ROI on technology investments"
      ]
    },
    {
      title: "Process Automation & Optimization",
      description: "Streamline and automate business processes to improve efficiency, reduce costs, and enhance customer experience.",
      icon: CogIcon,
      features: [
        "Process mapping and analysis",
        "Workflow automation",
        "RPA implementation",
        "Integration development",
        "Performance monitoring",
        "Continuous optimization"
      ],
      pricing: {
        basic: { price: 199, period: "month", features: ["5 automated processes", "Basic monitoring", "Email support"] },
        professional: { price: 599, period: "month", features: ["25 automated processes", "Advanced analytics", "Priority support"] },
        enterprise: { price: 1499, period: "month", features: ["Unlimited processes", "Custom development", "Dedicated team"] }
      },
      color: "from-green-500 to-emerald-500",
      href: "/process-automation",
      marketPrice: "$199-1,499/month",
      benefits: [
        "Reduce manual work by 80%",
        "Improve process accuracy by 99%",
        "Save 100+ hours per month",
        "Scale operations without additional staff"
      ]
    },
    {
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern, scalable solutions that support current and future business needs.",
      icon: ServerIcon,
      features: [
        "Legacy system assessment",
        "Modernization planning",
        "Data migration",
        "API development",
        "Cloud migration",
        "User training and support"
      ],
      pricing: {
        basic: { price: 399, period: "month", features: ["Single system", "Basic migration", "Email support"] },
        professional: { price: 999, period: "month", features: ["Multiple systems", "Advanced migration", "Priority support"] },
        enterprise: { price: 2499, period: "month", features: ["Full modernization", "Custom solutions", "Dedicated team"] }
      },
      color: "from-purple-500 to-pink-500",
      href: "/legacy-modernization",
      marketPrice: "$399-2,499/month",
      benefits: [
        "Improve system performance",
        "Reduce maintenance costs",
        "Enhance security and compliance",
        "Enable new business capabilities"
      ]
    },
    {
      title: "Customer Experience Transformation",
      description: "Enhance customer interactions through digital channels, personalized experiences, and omnichannel solutions.",
      icon: UserGroupIcon,
      features: [
        "Customer journey mapping",
        "Omnichannel integration",
        "Personalization engines",
        "Customer analytics",
        "Mobile app development",
        "Digital marketing automation"
      ],
      pricing: {
        basic: { price: 299, period: "month", features: ["Basic CX tools", "Standard analytics", "Email support"] },
        professional: { price: 799, period: "month", features: ["Advanced CX platform", "Custom analytics", "Priority support"] },
        enterprise: { price: 1999, period: "month", features: ["Full CX suite", "Custom development", "Dedicated team"] }
      },
      color: "from-yellow-500 to-orange-500",
      href: "/customer-experience",
      marketPrice: "$299-1,999/month",
      benefits: [
        "Increase customer satisfaction by 40%",
        "Improve customer retention by 30%",
        "Reduce support costs by 50%",
        "Drive revenue growth"
      ]
    },
    {
      title: "Data & Analytics Transformation",
      description: "Unlock the power of your data with advanced analytics, AI, and machine learning solutions for better decision making.",
      icon: CpuChipIcon,
      features: [
        "Data strategy development",
        "Data lake and warehouse setup",
        "Advanced analytics implementation",
        "AI and ML model development",
        "Real-time dashboards",
        "Predictive analytics"
      ],
      pricing: {
        basic: { price: 199, period: "month", features: ["Basic analytics", "Standard reports", "Email support"] },
        professional: { price: 599, period: "month", features: ["Advanced analytics", "Custom dashboards", "Priority support"] },
        enterprise: { price: 1499, period: "month", features: ["Full analytics suite", "AI/ML capabilities", "Dedicated team"] }
      },
      color: "from-indigo-500 to-purple-500",
      href: "/data-analytics",
      marketPrice: "$199-1,499/month",
      benefits: [
        "Make data-driven decisions",
        "Identify new business opportunities",
        "Improve operational efficiency",
        "Predict future trends"
      ]
    },
    {
      title: "Cloud-First Transformation",
      description: "Migrate to cloud-native architectures and adopt cloud-first strategies for scalability, agility, and cost optimization.",
      icon: CloudIcon,
      features: [
        "Cloud strategy development",
        "Application modernization",
        "Microservices architecture",
        "Container orchestration",
        "DevOps implementation",
        "Cost optimization"
      ],
      pricing: {
        basic: { price: 249, period: "month", features: ["Basic cloud setup", "Standard monitoring", "Email support"] },
        professional: { price: 699, period: "month", features: ["Advanced cloud services", "Custom architecture", "Priority support"] },
        enterprise: { price: 1799, period: "month", features: ["Full cloud transformation", "Custom solutions", "Dedicated team"] }
      },
      color: "from-cyan-500 to-blue-500",
      href: "/cloud-transformation",
      marketPrice: "$249-1,799/month",
      benefits: [
        "Improve scalability and agility",
        "Reduce infrastructure costs",
        "Enhance security and compliance",
        "Enable remote work capabilities"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services including strategy, process automation, legacy modernization, customer experience, and data analytics." />
        <meta name="keywords" content="digital transformation, process automation, legacy modernization, customer experience, data analytics, cloud transformation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with comprehensive digital solutions that drive innovation and growth
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our digital transformation services help you modernize processes, enhance customer experiences, 
              and leverage data and technology to achieve competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {transformationServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.marketPrice}</div>
                      <div className="text-sm text-gray-400">Starting price</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <StarIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(service.pricing).map(([plan, details]) => (
                      <div key={plan} className="text-center p-3 bg-slate-700 rounded-lg">
                        <div className="text-lg font-bold text-white">${details.price}</div>
                        <div className="text-xs text-gray-400">/{details.period}</div>
                        <div className="text-xs text-gray-300 capitalize">{plan}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.href}
                    className={`inline-flex items-center gap-2 text-${service.color.split(' ')[1].split('-')[1]}-400 hover:text-${service.color.split(' ')[1].split('-')[1]}-300 font-semibold group-hover:gap-3 transition-all`}
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transformation Process Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Transformation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful digital transformation 
              that delivers measurable business value.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
              <p className="text-gray-300">
                Analyze current state, identify gaps, and assess digital maturity to understand transformation needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategy</h3>
              <p className="text-gray-300">
                Develop comprehensive digital strategy and roadmap aligned with business objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
              <p className="text-gray-300">
                Execute transformation initiatives with agile methodology and continuous monitoring.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
              <p className="text-gray-300">
                Continuously optimize and scale solutions to maximize value and drive innovation.
              </p>
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
              Let's discuss your digital transformation goals and create a roadmap for success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Transformation Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Transformation Demo
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