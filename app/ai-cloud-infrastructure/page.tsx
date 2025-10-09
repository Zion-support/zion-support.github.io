import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Cloud, 
  Server, 
  Zap, 
  Shield, 
  Brain,
  Target,
  TrendingUp,
  Users,
  Database,
  Smartphone,
  Globe,
  Clock,
  Star,
  Award,
  Phone,
  Mail,
  MapPin,
  Activity,
  FileText,
  Settings,
  BarChart,
  Lock,
  RefreshCw
} from 'lucide-react';

const AICloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Intelligent cloud resource optimization using machine learning to automatically scale, allocate, and optimize your infrastructure for maximum performance and cost efficiency.',
      benefits: ['40% cost reduction', 'Auto-scaling capabilities', 'Performance optimization', 'Predictive scaling']
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Management',
      description: 'Seamlessly manage and orchestrate workloads across AWS, Azure, Google Cloud, and private clouds with unified AI-driven management.',
      benefits: ['Multi-cloud visibility', 'Unified management', 'Vendor lock-in prevention', 'Cost optimization']
    },
    {
      icon: Shield,
      title: 'Intelligent Security',
      description: 'AI-powered security monitoring and threat detection across your entire cloud infrastructure with automated response and compliance management.',
      benefits: ['Real-time threat detection', 'Automated security patching', 'Compliance automation', 'Zero-trust architecture']
    },
    {
      icon: Zap,
      title: 'Automated DevOps',
      description: 'Fully automated CI/CD pipelines, infrastructure as code, and deployment automation powered by AI for faster, more reliable releases.',
      benefits: ['Automated deployments', 'Infrastructure as code', 'Continuous monitoring', 'Self-healing systems']
    }
  ];

  const cloudServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud with zero downtime and AI-powered optimization.',
      price: 'Starting at $2,999/month',
      features: ['Zero-downtime migration', 'AI optimization', 'Cost analysis', 'Performance tuning'],
      icon: RefreshCw
    },
    {
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, secure cloud architectures tailored to your business needs.',
      price: 'Starting at $1,999/month',
      features: ['Architecture design', 'Security planning', 'Scalability planning', 'Best practices'],
      icon: Server
    },
    {
      title: 'Cloud Monitoring',
      description: '24/7 AI-powered monitoring and alerting for your cloud infrastructure and applications.',
      price: 'Starting at $799/month',
      features: ['Real-time monitoring', 'AI alerts', 'Performance analytics', 'Capacity planning'],
      icon: Activity
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive cloud security services including compliance, threat detection, and incident response.',
      price: 'Starting at $1,499/month',
      features: ['Security assessment', 'Threat detection', 'Compliance management', 'Incident response'],
      icon: Lock
    }
  ];

  const cloudProviders = [
    { name: 'Amazon Web Services (AWS)', description: 'Full AWS expertise with AI optimization', coverage: '100%' },
    { name: 'Microsoft Azure', description: 'Complete Azure cloud solutions and migration', coverage: '100%' },
    { name: 'Google Cloud Platform', description: 'GCP services with machine learning integration', coverage: '100%' },
    { name: 'IBM Cloud', description: 'IBM cloud services and hybrid cloud solutions', coverage: '95%' },
    { name: 'Oracle Cloud', description: 'Oracle cloud infrastructure and database services', coverage: '90%' },
    { name: 'Private Cloud', description: 'On-premise and hybrid cloud solutions', coverage: '100%' }
  ];

  const industries = [
    { name: 'Healthcare', description: 'HIPAA-compliant cloud infrastructure for medical data and applications' },
    { name: 'Finance', description: 'PCI DSS compliant cloud solutions for financial services and fintech' },
    { name: 'E-commerce', description: 'Scalable cloud infrastructure for online retail and marketplaces' },
    { name: 'Manufacturing', description: 'Industrial cloud solutions with IoT and edge computing integration' },
    { name: 'Education', description: 'Secure cloud infrastructure for educational institutions and e-learning' },
    { name: 'Government', description: 'FedRAMP compliant cloud solutions for government agencies' }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: Clock },
    { number: '40%', label: 'Cost Reduction', icon: TrendingUp },
    { number: '50%', label: 'Faster Deployments', icon: Zap },
    { number: '24/7', label: 'AI Monitoring', icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cloud className="w-4 h-4 mr-2" />
            AI-Powered Cloud Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Cloud Infrastructure
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with intelligent cloud infrastructure that automatically optimizes, scales, and secures your applications.
            Experience the future of cloud computing with AI-driven automation and optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-600 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
            >
              Get Cloud Assessment
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Cloud Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered cloud infrastructure platform provides intelligent automation, optimization, and management capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud infrastructure services powered by AI and machine learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cloud Providers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We support all major cloud providers with AI-powered optimization and management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{provider.name}</h3>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {provider.coverage}
                  </span>
                </div>
                <p className="text-gray-300">{provider.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized cloud infrastructure solutions for different industries and compliance requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cloud Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for cloud infrastructure services. All plans include AI optimization and 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$2,999<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic cloud migration
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  AI optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all text-center block"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">$4,999<span className="text-lg text-blue-200">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Full cloud migration
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Advanced AI optimization
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  24/7 monitoring
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Security management
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-all text-center block"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">Custom<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Multi-cloud management
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Full AI suite
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated team
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise hybrid
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all text-center block"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Cloud Infrastructure
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the power of AI-driven cloud infrastructure that automatically optimizes, scales, and secures your applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICloudInfrastructurePage;