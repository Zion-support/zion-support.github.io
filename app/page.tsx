import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  SparklesIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function HomePage() {
  const services = [
    {
      name: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for business automation and intelligence.',
      icon: CpuChipIcon,
      href: '/ai-solutions',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      icon: CloudIcon,
      href: '/cloud-infrastructure',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'IT Services',
      description: 'Comprehensive IT services to support your digital transformation journey.',
      icon: CogIcon,
      href: '/it-services',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: '5G Solutions',
      description: 'Next-generation 5G technology solutions for enhanced connectivity.',
      icon: BoltIcon,
      href: '/5g-solutions',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const microSaasApps = [
    {
      name: 'AI Content Generator',
      description: 'Generate high-quality content using advanced AI technology.',
      href: '/ai-content-generator',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting dashboard for your business.',
      href: '/analytics-dashboard',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Task Manager',
      description: 'Efficient task management and project tracking application.',
      href: '/task-manager',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const features = [
    {
      name: 'Expert Team',
      description: 'Experienced professionals with deep industry expertise.',
      icon: ShieldCheckIcon
    },
    {
      name: 'Cutting-edge Technology',
      description: 'Latest technologies and innovative solutions.',
      icon: RocketLaunchIcon
    },
    {
      name: '24/7 Support',
      description: 'Round-the-clock support for all your needs.',
      icon: GlobeAltIcon
    },
    {
      name: 'Scalable Solutions',
      description: 'Solutions that grow with your business.',
      icon: ChartBarIcon
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '100+', label: 'Happy Clients' },
    { value: '50+', label: 'Team Members' },
    { value: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link 
                key={service.name}
                href={service.href}
                className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Micro SAAS Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our innovative micro SAAS applications designed to solve specific business challenges with real functionality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasApps.map((app, index) => (
              <div 
                key={app.name}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className={`h-2 w-full bg-gradient-to-r ${app.gradient} rounded-full mb-4`}></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {app.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {app.description}
                </p>
                <Link 
                  href={app.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Try Free Trial
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.name}
                className="text-center"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help you achieve your business goals.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center font-semibold"
          >
            Schedule Demo
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}