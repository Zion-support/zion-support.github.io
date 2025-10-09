import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  BarChart, 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  Brain,
  Target,
  TrendingUp,
  Settings,
  MessageSquare,
  Image,
  FileText,
  Search,
  Lock,
  Server,
  Network,
  Monitor,
  HardDrive,
  Wifi,
  Headphones
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI Services & Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence solutions',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      services: [
        { name: 'Machine Learning', price: '$2,500/month', link: '/ai-services' },
        { name: 'Natural Language Processing', price: '$1,800/month', link: '/ai-services' },
        { name: 'Computer Vision', price: '$2,200/month', link: '/ai-services' },
        { name: 'Predictive Analytics', price: '$1,900/month', link: '/ai-services' },
        { name: 'AI Automation', price: '$1,600/month', link: '/ai-services' },
        { name: 'AI Chatbots', price: '$1,200/month', link: '/ai-services' }
      ],
      totalServices: 12,
      popular: true
    },
    {
      id: 'it-services',
      title: 'IT Services & Infrastructure',
      description: 'Comprehensive IT solutions to keep your business running smoothly',
      icon: Server,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      services: [
        { name: 'Cloud Infrastructure', price: '$2,200/month', link: '/it-services' },
        { name: 'Cybersecurity', price: '$3,500/month', link: '/it-services' },
        { name: 'Network Management', price: '$1,800/month', link: '/it-services' },
        { name: 'Data Management', price: '$2,500/month', link: '/it-services' },
        { name: 'DevOps & CI/CD', price: '$2,000/month', link: '/it-services' },
        { name: 'IT Helpdesk', price: '$1,200/month', link: '/it-services' }
      ],
      totalServices: 12,
      popular: true
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Solutions',
      description: 'Powerful, affordable AI-driven tools for modern businesses',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      services: [
        { name: 'AI Content Generator', price: '$199/month', link: '/micro-saas' },
        { name: 'Smart Analytics', price: '$299/month', link: '/micro-saas' },
        { name: 'AI Customer Support', price: '$149/month', link: '/micro-saas' },
        { name: 'Workflow Automation', price: '$399/month', link: '/micro-saas' },
        { name: 'AI Marketing Automation', price: '$249/month', link: '/micro-saas' },
        { name: 'Smart CRM Platform', price: '$199/month', link: '/micro-saas' }
      ],
      totalServices: 12,
      popular: false
    },
    {
      id: 'specialized',
      title: 'Specialized Solutions',
      description: 'Advanced technologies for cutting-edge business needs',
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      services: [
        { name: 'Quantum Computing', price: 'Custom', link: '/quantum-computing' },
        { name: 'Autonomous Systems', price: 'Custom', link: '/autonomous-systems' },
        { name: 'Blockchain & Web3', price: 'Custom', link: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', price: 'Custom', link: '/iot-edge-computing' },
        { name: 'Business Intelligence', price: '$2,800/month', link: '/business-intelligence' },
        { name: 'Robotics Solutions', price: 'Custom', link: '/robotics' }
      ],
      totalServices: 6,
      popular: false
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all' 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Our Services & Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Comprehensive AI, IT, and specialized solutions designed to transform your business. 
            From micro SAAS tools to enterprise AI platforms, we deliver results that drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Services Available</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-gray-300">Cost Savings Delivered</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  All Services
                </button>
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="mb-16">
          <div className="space-y-16">
            {filteredCategories.map((category) => (
              <div key={category.id} className="cyber-card p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mr-6`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                    <p className="text-gray-300 text-lg">{category.description}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-cyan-400 font-semibold">{category.totalServices} Services Available</span>
                      {category.popular && (
                        <span className="ml-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                          POPULAR
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {category.services.map((service, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link
                    to={category.id === 'ai-services' ? '/ai-services' : 
                         category.id === 'it-services' ? '/it-services' : 
                         category.id === 'micro-saas' ? '/micro-saas' : '/services'}
                    className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    View All {category.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We deliver comprehensive technology solutions that drive real business value, 
              backed by our expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center cyber-card p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Implementation</h3>
              <p className="text-gray-300 text-sm">
                Get up and running quickly with our streamlined implementation process and expert support.
              </p>
            </div>

            <div className="text-center cyber-card p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">
                Bank-level security with SOC 2 compliance, data encryption, and regular security audits.
              </p>
            </div>

            <div className="text-center cyber-card p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300 text-sm">
                Delivering measurable ROI with $50M+ in cost savings and 300% efficiency improvements.
              </p>
            </div>

            <div className="text-center cyber-card p-6">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300 text-sm">
                Round-the-clock technical support and regular updates to keep your business running smoothly.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Flexible Pricing Options</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Choose the pricing model that works best for your business. All plans include 
              implementation, training, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Pay-Per-Service</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Start with individual services and scale as needed</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Individual service pricing
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  No long-term contracts
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic support included
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                Get Started
              </button>
            </div>

            <div className="cyber-card p-8 text-center relative border-2 border-cyan-400">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Service Bundles</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$2,500<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Best value with multiple services bundled together</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 8 services included
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Volume discounts
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all">
                Get Started
              </button>
            </div>

            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Tailored solutions for large organizations</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-site support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SLA guarantees
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our comprehensive technology solutions. 
            Get started with a free consultation and discover how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;