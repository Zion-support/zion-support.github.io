import React from 'react;
import { Helmet } from 'react-helmet-async;
import { Link } from 'react-router-dom;
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
  EnvelopeIcon;
} from '@heroicons/react/24/outline';
export default function ServicesPage() {
  const services = [{
      title: "AI Solutions",
      description: "Advanced artificial intelligence services including machine learning, natural language processing, and predictive analytics.",
      icon: CpuChipIcon,
      features: ["Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Chatbots",
        "Automated Decision Making";
      ],
      color: "from-purple-500 to-pink-500",
      href: "/ai-solutions",
      price: "Starting at $2,500/month",
      benefits: ["40% faster decision making", "60% cost reduction", "99.9% accuracy"];
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets, data, and infrastructure from evolving threats.",
      icon: ShieldCheckIcon,
      features: ["Security Audits",
        "Threat Detection",
        "Data Encryption",
        "Access Management",
        "Incident Response",
        "Compliance Support";
      ],
      color: "from-cyan-500 to-blue-500",
      href: "/cybersecurity",
      price: "Starting at $1,800/month",
      benefits: ["24/7 monitoring", "Zero breach guarantee", "SOC 2 compliance"];
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and infrastructure management to optimize performance and reduce operational costs.",
      icon: CloudIcon,
      features: ["Cloud Migration",
        "Infrastructure as Code",
        "Auto-scaling",
        "Disaster Recovery",
        "Cost Optimization",
        "Multi-cloud Strategy";
      ],
      color: "from-green-500 to-emerald-500",
      href: "/cloud-solutions",
      price: "Starting at $1,200/month",
      benefits: ["50% cost savings", "99.99% uptime", "Auto-scaling"];
    },
    {
      title: "Digital Transformation",
      description: "Strategic digital transformation services to modernize your business processes and enhance customer experiences.",
      icon: ChartBarIcon,
      features: ["Process Automation",
        "Legacy System Modernization",
        "Digital Strategy",
        "Change Management",
        "Technology Integration",
        "Performance Optimization";
      ],
      color: "from-yellow-500 to-orange-500",
      href: "/digital-transformation",
      price: "Starting at $3,000/month",
      benefits: ["300% ROI increase", "80% process efficiency", "Digital-first approach"];
    },
    {
      title: "Micro SaaS Solutions",
      description: "Custom micro SaaS solutions designed to solve specific business challenges with scalable, cost-effective applications.",
      icon: GlobeAltIcon,
      features: ["Custom Web Applications",
        "API Development",
        "Database Design",
        "User Management",
        "Payment Integration",
        "Analytics Dashboard";
      ],
      color: "from-pink-500 to-rose-500",
      href: "/micro-saas",
      price: "Starting at $500/month",
      benefits: ["Rapid deployment", "Scalable architecture", "Low maintenance"];
    },
    {
      title: "5G Solutions",
      description: "Next-generation 5G technology solutions for enhanced connectivity, IoT applications, and ultra-low latency services.",
      icon: RocketLaunchIcon,
      features: ["5G Network Planning",
        "IoT Integration",
        "Edge Computing",
        "Real-time Applications",
        "Network Optimization",
        "Smart City Solutions";
      ],
      color: "from-indigo-500 to-purple-500",
      href: "/5g-solutions",
      price: "Starting at $4,000/month",
      benefits: ["Ultra-low latency", "Massive IoT support", "Enhanced security"];
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced analytics solutions powered by AI to extract actionable insights from your data and drive business growth.",
      icon: ChartBarIcon,
      features: ["Real-time Analytics",
        "Predictive Modeling",
        "Data Visualization",
        "Business Intelligence",
        "Custom Dashboards",
        "Automated Reporting";
      ],
      color: "from-emerald-500 to-teal-500",
      href: "/ai-analytics",
      price: "Starting at $1,500/month",
      benefits: ["Real-time insights", "Predictive accuracy", "Automated reports"];
    },
    {
      title: "Blockchain Solutions",
      description: "Secure blockchain technology solutions for transparent, immutable, and decentralized business processes.",
      icon: ShieldCheckIcon,
      features: ["Smart Contracts",
        "Decentralized Applications",
        "Cryptocurrency Integration",
        "Supply Chain Tracking",
        "Identity Management",
        "Tokenization";
      ],
      color: "from-orange-500 to-red-500",
      href: "/blockchain-solutions",
      price: "Starting at $2,200/month",
      benefits: ["Enhanced security", "Transparency", "Cost reduction"];
    },
    {
      title: "IoT Edge Computing",
      description: "Internet of Things solutions with edge computing capabilities for real-time data processing and decision making.",
      icon: CpuChipIcon,
      features: ["IoT Device Management",
        "Edge Analytics",
        "Real-time Processing",
        "Sensor Integration",
        "Data Streaming",
        "Remote Monitoring";
      ],
      color: "from-violet-500 to-purple-500",
      href: "/iot-edge-computing",
      price: "Starting at $1,800/month",
      benefits: ["Real-time processing", "Reduced latency", "Cost efficiency"];
    },
    {
      title: "AI Content Generation",
      description: "AI-powered content creation tools for automated content generation, optimization, and personalization.",
      icon: GlobeAltIcon,
      features: ["Automated Content Creation",
        "SEO Optimization",
        "Multi-language Support",
        "Content Personalization",
        "Brand Voice Consistency",
        "Performance Analytics";
      ],
      color: "from-rose-500 to-pink-500",
      href: "/ai-content-generation",
      price: "Starting at $800/month",
      benefits: ["80% time savings", "Consistent quality", "SEO optimized"];
    },
    {
      title: "AI Customer Support",
      description: "Intelligent customer support solutions with AI chatbots, sentiment analysis, and automated ticket routing.",
      icon: PhoneIcon,
      features: ["AI Chatbots",
        "Sentiment Analysis",
        "Automated Routing",
        "Knowledge Base",
        "Multi-channel Support",
        "Performance Analytics";
      ],
      color: "from-blue-500 to-indigo-500",
      href: "/ai-customer-support",
      price: "Starting at $1,200/month",
      benefits: ["24/7 availability", "Instant responses", "Customer satisfaction"];
    },
    {
      title: "AI Cybersecurity Suite",
      description: "Advanced AI-powered cybersecurity solutions for threat detection, prevention, and automated response.",
      icon: ShieldCheckIcon,
      features: ["AI Threat Detection",
        "Behavioral Analysis",
        "Automated Response",
        "Vulnerability Assessment",
        "Compliance Monitoring",
        "Security Analytics";
      ],
      color: "from-red-500 to-orange-500",
      href: "/ai-cybersecurity-suite",
      price: "Starting at $2,800/month",
      benefits: ["Proactive protection", "Zero false positives", "Automated response"];
    }
  ];

  return (
    <>;
      <Helmet>;
        <title>Our Services - Zion Tech Group</title>;
        <meta name="description" content="Explore our comprehensive AI and IT services including cybersecurity, cloud infrastructure, digital transformation, and more." />;
        <meta name="keywords" content="AI services, cybersecurity, cloud computing, digital transformation, micro SaaS, 5G solutions, IT services" />;
      </Helmet>;
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Our Services;
            </h1>;
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
              Comprehensive technology solutions designed to accelerate your business growth;
            </p>;
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">;
              From artificial intelligence to cybersecurity, we provide end-to-end technology services;
              that help businesses thrive in the digital age.;
            </p>;
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className="py-20 bg-slate-900">;
        <div className="container mx-auto px-4">;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">;
            {services.map((service, _index) => {
              const Icon = service.icon;
              return (
                <div key={service.title}>;
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105";
                >;
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>;
                    <Icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>;
                  <p className="text-gray-300 mb-4 leading-relaxed">;
                    {service.description}
                  </p>;
                  {/* Pricing */}
                  <div className="mb-4">;
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>;
                  </div>;
                  {/* Benefits */}
                  <div className="mb-6">;
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>;
                    <div className="flex flex-wrap gap-2">;
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">;
                          {benefit}
                        </span>;
                      ))}
                    </div>;
                  </div>;
                  <ul className="space-y-2 mb-6">;
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">;
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;
                        <span className="text-sm">{feature}</span>;
                      </li>;
                    ))}
                  </ul>;
                  <Link;
                    to={service.href}
                    className={`inline-flex items-center gap-2 text-${service.color.split(' ')[1].split('-')[1]}-400 hover:text-${service.color.split(' ')[1].split('-')[1]}-300 font-semibold group-hover:gap-3 transition-all`}';
                  >;
                    Learn More <ArrowRightIcon className="w-4 h-4" />;
                  </Link>;
                </div>;
              );
            })}
          </div>;
        </div>;
      </section>;
      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Our Process;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              A proven methodology that ensures successful project delivery and client satisfaction;
            </p>;
          </div>;
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                <span className="text-white font-bold text-xl">1</span>;
              </div>;
              <h3 className="text-xl font-bold text-white mb-4">Discovery</h3>;
              <p className="text-gray-300">;
                We analyze your business needs, challenges, and goals to understand your requirements.;
              </p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                <span className="text-white font-bold text-xl">2</span>;
              </div>;
              <h3 className="text-xl font-bold text-white mb-4">Strategy</h3>;
              <p className="text-gray-300">;
                We develop a comprehensive strategy and roadmap tailored to your specific objectives.;
              </p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                <span className="text-white font-bold text-xl">3</span>;
              </div>;
              <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>;
              <p className="text-gray-300">;
                Our expert team implements the solution with regular updates and transparent communication.;
              </p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                <span className="text-white font-bold text-xl">4</span>;
              </div>;
              <h3 className="text-xl font-bold text-white mb-4">Support</h3>;
              <p className="text-gray-300">;
                We provide ongoing support, maintenance, and optimization to ensure long-term success.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              We combine technical expertise with business acumen to deliver exceptional results;
            </p>;
          </div>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">;
            <div className="text-center">;
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                <CheckCircleIcon className="w-10 h-10 text-white" />;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">Proven Expertise</h3>;
              <p className="text-gray-300">;
                Over 4 years of experience delivering successful technology solutions across various industries.;
              </p>;
            </div>;
            <div className="text-center">;
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                <RocketLaunchIcon className="w-10 h-10 text-white" />;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>;
              <p className="text-gray-300">;
                We stay ahead of the curve with the latest technologies and industry best practices.;
              </p>;
            </div>;
            <div className="text-center">;
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                <ChartBarIcon className="w-10 h-10 text-white" />;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">Measurable Results</h3>;
              <p className="text-gray-300">;
                We focus on delivering measurable business value and ROI for all our clients.;
              </p>;
            </div>;
            <div className="text-center">;
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                <ShieldCheckIcon className="w-10 h-10 text-white" />;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>;
              <p className="text-gray-300">;
                Security and compliance are built into every solution we design and implement.;
              </p>;
            </div>;
            <div className="text-center">;
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                <GlobeAltIcon className="w-10 h-10 text-white" />;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>;
              <p className="text-gray-300">;
                Our solutions are designed to grow with your business and adapt to changing needs.;
              </p>;
            </div>;
            <div className="text-center">;
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">;
                <PhoneIcon className="w-10 h-10 text-white" />;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>;
              <p className="text-gray-300">;
                Round-the-clock support to ensure your systems run smoothly and efficiently.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">;
              Ready to Get Started?;
            </h2>;
            <p className="text-xl text-gray-300 mb-12">;
              Let's discuss your project and find the perfect solution for your business needs';
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">;
              <Link;
                to="/contact";
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2";
              >;
                Get Free Consultation;
                <ArrowRightIcon className="w-5 h-5" />;
              </Link>;
              <Link;
                to="/demo";
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2";
              >;
                Schedule Demo;
                <ArrowRightIcon className="w-5 h-5" />;
              </Link>;
            </div>;
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">;
              <div className="flex items-center gap-3">;
                <PhoneIcon className="w-6 h-6 text-purple-400" />;
                <span>+1-302-464-0950</span>;
              </div>;
              <div className="flex items-center gap-3">;
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />;
                <span>kleber@ziontechgroup.com</span>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
    </>;
  );
}