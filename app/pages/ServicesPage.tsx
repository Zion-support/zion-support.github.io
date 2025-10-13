import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ShareIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const services = [
    {
      title: "AI Smart Document Processor",
      description: "Transform your document workflow with intelligent AI-powered processing. Extract, classify, and analyze documents with 99.5% accuracy.",
      icon: CpuChipIcon,
      features: [
        "Intelligent OCR & Text Extraction",
        "Smart Data Classification",
        "Real-time Processing",
        "Enterprise Security",
        "Multi-format Support",
        "API Integration"
      ],
      color: "from-purple-500 to-pink-500",
      href: "/ai-smart-document-processor",
      pricing: "Starting at $29/month"
    },
    {
      title: "AI Social Media Manager",
      description: "Transform your social media presence with AI-powered content generation, smart scheduling, and comprehensive analytics across all platforms.",
      icon: ShareIcon,
      features: [
        "AI Content Generation",
        "Smart Scheduling",
        "Analytics & Insights",
        "Multi-Platform Management",
        "Hashtag Optimization",
        "Engagement Tracking"
      ],
      color: "from-blue-500 to-cyan-500",
      href: "/ai-social-media-manager",
      pricing: "Starting at $49/month"
    },
    {
      title: "AI Email Marketing Automation",
      description: "Transform your email marketing with AI-powered automation, personalization, and analytics that increase open rates by 40% and conversions by 35%.",
      icon: EnvelopeIcon,
      features: [
        "AI-Powered Subject Lines",
        "Smart Segmentation",
        "Predictive Analytics",
        "Automated Workflows",
        "A/B Testing",
        "Advanced Analytics"
      ],
      color: "from-green-500 to-emerald-500",
      href: "/ai-email-marketing-automation",
      pricing: "Starting at $39/month"
    },
    {
      title: "AI Customer Support Chatbot",
      description: "Transform your customer support with intelligent AI chatbots that provide 24/7 assistance, multi-language support, and 95% response accuracy.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Natural Language Processing",
        "24/7 Availability",
        "Multi-Language Support",
        "Seamless Handoff",
        "Sentiment Analysis",
        "Knowledge Base Integration"
      ],
      color: "from-yellow-500 to-orange-500",
      href: "/ai-customer-support-chatbot",
      pricing: "Starting at $79/month"
    },
    {
      title: "AI Business Intelligence Dashboard",
      description: "Transform your business with AI-powered analytics and insights. Make data-driven decisions with real-time dashboards and predictive analytics.",
      icon: ChartBarIcon,
      features: [
        "AI-Powered Insights",
        "Real-time Analytics",
        "Predictive Analytics",
        "Custom Visualizations",
        "Data Integration",
        "Mobile Access"
      ],
      color: "from-indigo-500 to-purple-500",
      href: "/ai-business-intelligence-dashboard",
      pricing: "Starting at $99/month"
    },
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence services including machine learning, natural language processing, and predictive analytics.",
      icon: CpuChipIcon,
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Chatbots",
        "Automated Decision Making"
      ],
      color: "from-purple-500 to-pink-500",
      href: "/ai-solutions"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets, data, and infrastructure from evolving threats.",
      icon: ShieldCheckIcon,
      features: [
        "Security Audits",
        "Threat Detection",
        "Data Encryption",
        "Access Management",
        "Incident Response",
        "Compliance Support"
      ],
      color: "from-cyan-500 to-blue-500",
      href: "/cybersecurity"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and infrastructure management to optimize performance and reduce operational costs.",
      icon: CloudIcon,
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Auto-scaling",
        "Disaster Recovery",
        "Cost Optimization",
        "Multi-cloud Strategy"
      ],
      color: "from-green-500 to-emerald-500",
      href: "/cloud-solutions"
    },
    {
      title: "Digital Transformation",
      description: "Strategic digital transformation services to modernize your business processes and enhance customer experiences.",
      icon: ChartBarIcon,
      features: [
        "Process Automation",
        "Legacy System Modernization",
        "Digital Strategy",
        "Change Management",
        "Technology Integration",
        "Performance Optimization"
      ],
      color: "from-yellow-500 to-orange-500",
      href: "/digital-transformation"
    },
    {
      title: "Micro SaaS",
      description: "Custom micro SaaS solutions designed to solve specific business challenges with scalable, cost-effective applications.",
      icon: GlobeAltIcon,
      features: [
        "Custom Web Applications",
        "API Development",
        "Database Design",
        "User Management",
        "Payment Integration",
        "Analytics Dashboard"
      ],
      color: "from-pink-500 to-rose-500",
      href: "/micro-saas"
    },
    {
      title: "5G Solutions",
      description: "Next-generation 5G technology solutions for enhanced connectivity, IoT applications, and ultra-low latency services.",
      icon: RocketLaunchIcon,
      features: [
        "5G Network Planning",
        "IoT Integration",
        "Edge Computing",
        "Real-time Applications",
        "Network Optimization",
        "Smart City Solutions"
      ],
      color: "from-indigo-500 to-purple-500",
      href: "/5g-solutions"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive AI and IT services including cybersecurity, cloud infrastructure, digital transformation, and more." />
        <meta name="keywords" content="AI services, cybersecurity, cloud computing, digital transformation, micro SaaS, 5G solutions, IT services" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From artificial intelligence to cybersecurity, we provide end-to-end technology services 
              that help businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
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
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {service.pricing && (
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-green-400">{service.pricing}</span>
                    </div>
                  )}
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Discovery</h3>
              <p className="text-gray-300">
                We analyze your business needs, challenges, and goals to understand your requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategy</h3>
              <p className="text-gray-300">
                We develop a comprehensive strategy and roadmap tailored to your specific objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
              <p className="text-gray-300">
                Our expert team implements the solution with regular updates and transparent communication.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Support</h3>
              <p className="text-gray-300">
                We provide ongoing support, maintenance, and optimization to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Expertise</h3>
              <p className="text-gray-300">
                Over 4 years of experience delivering successful technology solutions across various industries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We stay ahead of the curve with the latest technologies and industry best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Measurable Results</h3>
              <p className="text-gray-300">
                We focus on delivering measurable business value and ROI for all our clients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
              <p className="text-gray-300">
                Security and compliance are built into every solution we design and implement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GlobeAltIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300">
                Our solutions are designed to grow with your business and adapt to changing needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock support to ensure your systems run smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss your project and find the perfect solution for your business needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Consultation
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