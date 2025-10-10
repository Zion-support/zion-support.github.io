'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Brain, Cpu, Shield, Globe, Users, Award, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Phone, Mail, MapPin, Clock, Star, Zap, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity } from 'lucide-react';

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
=======
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Database, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b629

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
<<<<<<< HEAD
      description: 'Cutting-edge artificial intelligence solutions to transform your business',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      pricing: 'Starting at $5,000/month',
      path: '/ai-solutions'
=======
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance and reliability.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats.',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance']
    },
    {
<<<<<<< HEAD
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to your exact specifications',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
      pricing: 'Starting at $8,000/project',
      path: '/custom-development'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics platforms',
      features: ['Real-time Dashboards', 'Data Visualization', 'Business Intelligence', 'Custom Reports'],
      pricing: 'Starting at $3,000/month',
      path: '/data-analytics'
    },
    {
      icon: Globe,
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure setup and management services',
      features: ['Network Design', 'Server Management', 'Backup Solutions', 'Disaster Recovery'],
      pricing: 'Starting at $4,000/month',
      path: '/it-infrastructure'
=======
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Business Intelligence', 'Real-time Analytics', 'Data Visualization', 'Reporting']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      features: ['Native Apps', 'Cross-platform', 'UI/UX Design', 'App Store Optimization']
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Database design, optimization, and management for optimal performance.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline your workflows with intelligent automation solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'RPA', 'Integration']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: ['React/Next.js', 'Full-stack Development', 'API Development', 'Performance Optimization']
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services designed to transform your business. From AI solutions to cloud services and data analytics." />
        <meta name="keywords" content="AI services, IT services, cloud services, data analytics, cybersecurity, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business and drive growth.
              </p>
            </div>
=======
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <service.icon className="w-12 h-12 text-cyan-400 mr-4 group-hover:text-cyan-300 transition-colors" />
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
=======
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
                        {feature}
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{service.pricing}</span>
                    <Link
                      to={service.path}
                      className="text-white hover:text-cyan-400 transition-colors flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
=======
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a free consultation and discover how our services can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/about"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View Portfolio
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </div>
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD
}
=======
};

export default ServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
