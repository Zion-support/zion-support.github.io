import Head from 'next/head';
import Link from 'next/link';
import { Shield, Users, Zap, CheckCircle, ArrowRight, Building, Globe, Lock } from 'lucide-react';

export default function Enterprise() {
  const solutions = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Comprehensive cybersecurity solutions including threat detection, compliance management, and data protection.',
      features: ['Advanced Threat Detection', 'Compliance Automation', 'Data Encryption', 'Security Monitoring']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your enterprise infrastructure and processes.',
      features: ['Cloud Migration', 'Process Automation', 'Legacy Modernization', 'Change Management']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI & Automation',
      description: 'Enterprise-grade AI solutions and automation platforms to optimize operations and drive innovation.',
      features: ['Machine Learning', 'Process Automation', 'Predictive Analytics', 'Intelligent Workflows']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to support your enterprise growth and global operations.',
      features: ['Multi-Cloud Strategy', 'Infrastructure as Code', 'Disaster Recovery', 'Global Deployment']
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Enterprise Integration',
      description: 'Seamless integration of systems and data across your entire enterprise ecosystem.',
      features: ['API Management', 'Data Integration', 'System Orchestration', 'Real-time Sync']
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Compliance & Governance',
      description: 'Ensure regulatory compliance and maintain governance standards across all enterprise operations.',
      features: ['Regulatory Compliance', 'Audit Management', 'Risk Assessment', 'Policy Enforcement']
    }
  ];

  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise solutions including security, digital transformation, AI automation, and cloud services for large organizations." />
        <link rel="canonical" href={`${contact.site}/enterprise`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform your enterprise with our comprehensive suite of security, digital transformation, 
                AI automation, and cloud solutions designed for large organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Get Enterprise Quote
                </Link>
                <Link 
                  href="/docs" 
                  className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors font-semibold"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Enterprise Solutions</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive solutions designed to address the unique challenges and opportunities 
              of enterprise-scale operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-blue-400 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-blue-100 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-blue-100">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We understand the complexities of enterprise operations and deliver solutions 
                that scale with your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Scale</h3>
                <p className="text-blue-100">Solutions designed for organizations with thousands of users and complex requirements.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
                <p className="text-blue-100">Enterprise-grade security with compliance certifications and audit support.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-blue-100">Round-the-clock support with dedicated enterprise account managers.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
                <p className="text-blue-100">Worldwide deployment capabilities with local compliance and support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our enterprise solutions can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`mailto:${contact.email}?subject=Enterprise Solutions Inquiry`}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Contact Enterprise Team
              </a>
              <a 
                href={`tel:${contact.phone}`}
                className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors font-semibold"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}