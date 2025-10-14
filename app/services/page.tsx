import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
  Cloud, 
  Wifi, 
  BarChart3, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  Award,
  Target,
  Lightbulb,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-8 h-8" />,
      color: 'blue',
      description: 'Advanced artificial intelligence solutions for modern businesses',
      services: [
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro', price: '$299/mo' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', price: '$199/mo' },
        { name: 'AI Automation Suite', href: '/ai-automation-suite', price: '$399/mo' },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', price: '$349/mo' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', price: '$149/mo' },
        { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise', price: '$249/mo' }
      ]
    },
    {
      title: 'IT Services',
      icon: <Code className="w-8 h-8" />,
      color: 'cyan',
      description: 'Complete IT infrastructure and cloud solutions',
      services: [
        { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', price: '$399/mo' },
        { name: 'API Management', href: '/ai-api-management', price: '$199/mo' },
        { name: 'Database Solutions', href: '/database-solutions', price: '$299/mo' },
        { name: 'Advanced Security Suite', href: '/advanced-security-suite', price: '$199/mo' },
        { name: 'Performance Monitoring', href: '/performance-monitoring', price: '$149/mo' },
        { name: 'DevOps Solutions', href: '/devops-solutions', price: '$349/mo' }
      ]
    },
    {
      title: '5G Solutions',
      icon: <Wifi className="w-8 h-8" />,
      color: 'purple',
      description: 'Next-generation 5G implementation and optimization',
      services: [
        { name: '5G Implementation', href: '/5g-implementation', price: '$499/mo' },
        { name: '5G Network Infrastructure', href: '/5g-network-infrastructure', price: '$599/mo' },
        { name: '5G IoT Solutions', href: '/5g-iot-solutions', price: '$399/mo' },
        { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions', price: '$799/mo' },
        { name: '5G Edge Computing', href: '/5g-edge-computing', price: '$449/mo' },
        { name: '5G Private Networks', href: '/5g-private-networks', price: '$699/mo' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: <Cloud className="w-8 h-8" />,
      color: 'orange',
      description: 'Innovative micro SAAS solutions for specific business needs',
      services: [
        { name: 'AI Accounting Assistant', href: '/ai-accounting-assistant', price: '$99/mo' },
        { name: 'AI Content Moderation Pro', href: '/ai-content-moderation-pro', price: '$149/mo' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro', price: '$199/mo' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro', price: '$299/mo' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation', price: '$179/mo' },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', price: '$399/mo' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-900',
      cyan: 'from-cyan-50 to-cyan-100 border-cyan-200 text-cyan-900',
      purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-900',
      orange: 'from-orange-50 to-orange-100 border-orange-200 text-orange-900'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-600',
      cyan: 'bg-cyan-600',
      purple: 'bg-purple-600',
      orange: 'bg-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <>
      <Helmet>
        <title>Our Services | Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI, IT, 5G, and Micro SAAS services. From AI analytics to cloud infrastructure, we provide cutting-edge solutions for businesses of all sizes." />
        <meta name="keywords" content="AI services, IT services, 5G solutions, micro SAAS, cloud infrastructure, cybersecurity, business intelligence" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Comprehensive Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                From AI-powered micro SAAS solutions to enterprise-grade IT infrastructure, 
                we provide end-to-end technology solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Free Consultation
                </Link>
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services designed to accelerate your business growth.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {serviceCategories.map((category, index) => (
                <div key={category.title} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className={`bg-gradient-to-r ${getColorClasses(category.color)} p-8`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${getIconColor(category.color)} rounded-lg flex items-center justify-center mr-4`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                        <p className="text-sm opacity-80">{category.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="grid gap-4">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <span className="font-medium text-gray-900 group-hover:text-cyan-600 transition-colors">
                              {service.name}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-lg font-bold text-gray-900 mr-2">{service.price}</span>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional value through innovation, expertise, and unwavering dedication to your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with 10+ years of experience in AI, IT, and 5G technologies</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical support and monitoring to ensure your systems run smoothly</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">99.9% uptime guarantee and measurable ROI for all our implementations</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Cutting-edge technology and future-ready solutions that keep you ahead of the competition</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact us today to discuss your project requirements and get a custom quote for our services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                    +1 302 464 0950
                  </a>
                  <p className="text-sm text-gray-400 mt-2">24/7 Support Available</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-sm text-gray-400 mt-2">Response within 2 hours</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 text-lg">364 E Main St STE 1008</p>
                  <p className="text-gray-300 text-lg">Middletown DE 19709</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-block">
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;