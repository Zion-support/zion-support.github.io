import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code,
  Globe,
  Smartphone,
  Monitor,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Zap,
  Shield,
  BarChart3,
  Cloud,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  FileText,
  Clock,
  Settings,
  Target,
  PieChart,
  Mail,
  Search,
  Lock,
  Activity,
  Server,
  ShoppingCart
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      name: 'Frontend Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      icon: <Monitor className="w-8 h-8" />,
      features: ['React & Next.js', 'Vue.js & Angular', 'Progressive Web Apps', 'Mobile-First Design'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Backend Development',
      description: 'Robust server-side solutions and API development',
      icon: <Server className="w-8 h-8" />,
      features: ['Node.js & Express', 'Python & Django', 'RESTful APIs', 'Microservices Architecture'],
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Full-Stack Development',
      description: 'End-to-end web solutions from concept to deployment',
      icon: <Code className="w-8 h-8" />,
      features: ['Complete Web Applications', 'Database Design', 'Cloud Integration', 'DevOps Implementation'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'E-commerce Solutions',
      description: 'Custom online stores and marketplace platforms',
      icon: <ShoppingCart className="w-8 h-8" />,
      features: ['Custom E-commerce', 'Payment Integration', 'Inventory Management', 'Multi-vendor Platforms'],
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'CMS Development',
      description: 'Content management systems tailored to your needs',
      icon: <FileText className="w-8 h-8" />,
      features: ['Custom CMS', 'Headless CMS', 'Content Migration', 'Admin Dashboards'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Web Performance Optimization',
      description: 'Speed and performance optimization for better user experience',
      icon: <Zap className="w-8 h-8" />,
      features: ['Performance Audits', 'Code Optimization', 'CDN Setup', 'Caching Strategies'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const technologies = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Sass', 'Webpack']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Django', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Monitoring']
    },
    {
      category: 'Mobile',
      items: ['React Native', 'Flutter', 'Ionic', 'PWA', 'App Store', 'Google Play', 'Cross-platform']
    }
  ];

  const process = [
    {
      step: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap',
      icon: <Search className="w-6 h-6" />
    },
    {
      step: 'Design & Prototyping',
      description: 'Create wireframes and interactive prototypes for user validation',
      icon: <Monitor className="w-6 h-6" />
    },
    {
      step: 'Development & Testing',
      description: 'Build your application with rigorous testing and quality assurance',
      icon: <Code className="w-6 h-6" />
    },
    {
      step: 'Deployment & Launch',
      description: 'Deploy to production with monitoring and ongoing support',
      icon: <Cloud className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Web Development Services | Zion Tech Group - Custom Web Solutions"
        description="Professional web development services including custom websites, web applications, e-commerce solutions, and performance optimization. Modern technologies and agile development process."
        keywords="web development, custom websites, web applications, e-commerce, CMS, frontend development, backend development, full-stack development"
        canonical="https://ziontechgroup.com/web-development"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Web Development
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ideas into powerful web applications with our expert development team. 
              We build scalable, secure, and high-performance web solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </FuturisticButton>
              <FuturisticButton
                href="#services"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View Our Work
              </FuturisticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Web Development Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your business needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We work with the latest and most reliable technologies to build exceptional web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">{tech.category}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full"
                    >
                      {item}
                    </span>
                  ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{step.step}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Next Web Application?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss your project and create something amazing together. 
            Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Portfolio
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
