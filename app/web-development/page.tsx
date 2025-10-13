import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Code, 
  Smartphone, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Monitor,
  Database,
  Cloud,
  Search,
  ShoppingCart
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      id: 'responsive-web-design',
      title: 'Responsive Web Design',
      description: 'Create beautiful, mobile-first websites that work perfectly on all devices.',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Mobile-First Design', 'Cross-Browser Compatibility', 'Fast Loading', 'SEO Optimized'],
      price: 'Starting at $2,999',
      rating: 4.9,
      reviews: 156
    },
    {
      id: 'e-commerce-development',
      title: 'E-Commerce Development',
      description: 'Build powerful online stores with advanced features and seamless user experience.',
      icon: <ShoppingCart className="w-8 h-8" />,
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Admin Dashboard'],
      price: 'Starting at $4,999',
      rating: 4.8,
      reviews: 134
    },
    {
      id: 'web-applications',
      title: 'Web Applications',
      description: 'Develop custom web applications tailored to your specific business needs.',
      icon: <Code className="w-8 h-8" />,
      features: ['Custom Development', 'API Integration', 'User Authentication', 'Real-time Features'],
      price: 'Starting at $7,999',
      rating: 4.9,
      reviews: 98
    },
    {
      id: 'cms-development',
      title: 'CMS Development',
      description: 'Create content management systems that make it easy to manage your website.',
      icon: <Monitor className="w-8 h-8" />,
      features: ['Easy Content Management', 'User Roles', 'Media Library', 'SEO Tools'],
      price: 'Starting at $3,999',
      rating: 4.8,
      reviews: 89
    },
    {
      id: 'api-development',
      title: 'API Development',
      description: 'Build robust APIs that power your applications and integrate with third-party services.',
      icon: <Database className="w-8 h-8" />,
      features: ['RESTful APIs', 'GraphQL', 'Authentication', 'Rate Limiting'],
      price: 'Starting at $2,499',
      rating: 4.9,
      reviews: 67
    },
    {
      id: 'cloud-deployment',
      title: 'Cloud Deployment',
      description: 'Deploy and manage your web applications on scalable cloud infrastructure.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['AWS/Azure/GCP', 'Auto Scaling', 'Load Balancing', 'SSL Certificates'],
      price: 'Starting at $1,999',
      rating: 4.8,
      reviews: 112
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', description: 'Modern UI library for building interactive user interfaces' },
    { name: 'Next.js', icon: '▲', description: 'Full-stack React framework for production-ready applications' },
    { name: 'Node.js', icon: '🟢', description: 'JavaScript runtime for building scalable server-side applications' },
    { name: 'TypeScript', icon: '🔷', description: 'Type-safe JavaScript for better development experience' },
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL database for flexible data storage' },
    { name: 'PostgreSQL', icon: '🐘', description: 'Reliable relational database for complex applications' },
    { name: 'AWS', icon: '☁️', description: 'Cloud platform for scalable and secure deployments' },
    { name: 'Docker', icon: '🐳', description: 'Containerization for consistent development and deployment' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan.',
      icon: <Search className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your project.',
      icon: <Monitor className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your website using the latest technologies and best practices.',
      icon: <Code className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thoroughly test your website and launch it with full support.',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Web Development Services - Zion Tech Group | Custom Website Development"
        description="Professional web development services including responsive design, e-commerce, web applications, and more. Expert developers using modern technologies."
        keywords="web development, website design, e-commerce development, web applications, responsive design, custom websites"
        canonical="https://ziontechgroup.com/web-development"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-16 h-16 text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Development</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning, high-performance websites and web applications that drive business growth. 
              Our expert developers use cutting-edge technologies to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technologies We Use</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We work with the latest technologies and frameworks to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-800/50 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Web Development Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From simple websites to complex web applications, we deliver solutions that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-blue-400">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">
                        {service.rating} ({service.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{service.price}</span>
                  <Link
                    to="/contact"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Development Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We follow a proven process to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-400">
                    {step.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-400 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;