import Head from 'next/head';
import Link from 'next/link';
import { 
  Building, 
  Users, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Globe,
  Database,
  Lock
} from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';

export default function Enterprise() {
  const solutions = [{
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Comprehensive cybersecurity solutions including threat detection, compliance management, and data protection.',
      features: ['Advanced Threat Detection', 'Compliance Automation', 'Data Encryption', 'Security Monitoring']
    }, {
      icon: <Users className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your enterprise infrastructure and processes.',
      features: ['Cloud Migration', 'Process Automation', 'Legacy Modernization', 'Change Management']
    }, {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI & Automation',
      description: 'Enterprise-grade AI solutions and automation platforms to optimize operations and drive innovation.',
      features: ['Machine Learning', 'Process Automation', 'Predictive Analytics', 'Intelligent Workflows']
    }, {
      icon: <Globe className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services designed for enterprise workloads and global operations.',
      features: ['Multi-Cloud Strategy', 'Infrastructure as Code', 'Disaster Recovery', 'Global Deployment']
    }
  ];

  const industries = [
    { name: 'Financial Services', clients: '50+', solutions: 'Banking, Insurance, FinTech' },
    { name: 'Healthcare', clients: '75+', solutions: 'Hospitals, Pharma, Medical Devices' },
    { name: 'Manufacturing', clients: '100+', solutions: 'Automotive, Aerospace, Industrial' },
    { name: 'Retail & E-commerce', clients: '80+', solutions: 'Omnichannel, Supply Chain, Analytics' },
    { name: 'Government', clients: '25+', solutions: 'Public Services, Security, Compliance' },
    { name: 'Education', clients: '60+', solutions: 'Universities, K-12, EdTech' }
  ];

  return (
    <>
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise technology solutions including digital transformation, AI automation, cloud services, and cybersecurity for large organizations." />
        <meta name="keywords" content="enterprise solutions, digital transformation, enterprise AI, cloud migration, cybersecurity, large organizations" />
        <link rel="canonical" href="https://ziontechgroup.com/enterprise" />
        <meta property="og:title" content="Enterprise Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive enterprise technology solutions including digital transformation, AI automation, cloud services, and cybersecurity for large organizations." />
        <meta property="og:url" content="https://ziontechgroup.com/enterprise" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <Building className="w-16 h-16 inline-block mr-4 text-blue-400" />
              Enterprise <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transform your enterprise with cutting-edge technology solutions designed for scale, security, and innovation. 
              We help large organizations navigate digital transformation and achieve sustainable growth.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Countries</div>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 text-white">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <div className="text-blue-400 text-sm mb-2">{industry.clients} Clients</div>
                  <div className="text-gray-400 text-sm">{industry.solutions}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our enterprise solutions can drive your digital transformation and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/request-quote" className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}