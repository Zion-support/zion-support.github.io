import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../src/components/seo/SEOHead';
import { ArrowRight, CheckCircle, Brain, Cloud, Shield, Zap, Users, BarChart3, Target, Globe } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      solutions: [
        {
          title: 'AI Content Creation',
          description: 'Automated content generation for blogs, social media, and marketing materials',
          features: ['Natural language processing', 'Content optimization', 'Multi-language support', 'Brand voice consistency'],
          href: '/solutions/ai-content-creation'
        },
        {
          title: 'Predictive Analytics',
          description: 'Data-driven insights and forecasting for better business decisions',
          features: ['Machine learning models', 'Real-time predictions', 'Custom dashboards', 'Automated reporting'],
          href: '/solutions/predictive-analytics'
        },
        {
          title: 'Intelligent Automation',
          description: 'Smart process automation that learns and adapts to your business needs',
          features: ['Workflow optimization', 'Error reduction', 'Cost savings', 'Scalable processes'],
          href: '/solutions/intelligent-automation'
        }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      solutions: [
        {
          title: 'Cloud Migration',
          description: 'Seamless transition to cloud infrastructure with zero downtime',
          features: ['Assessment & planning', 'Data migration', 'Performance optimization', 'Cost reduction'],
          href: '/solutions/cloud-migration'
        },
        {
          title: 'Microservices Architecture',
          description: 'Scalable, maintainable applications built with modern architecture patterns',
          features: ['Service decomposition', 'API management', 'Container orchestration', 'Monitoring & logging'],
          href: '/solutions/microservices-architecture'
        },
        {
          title: 'DevOps Automation',
          description: 'Streamlined development and deployment processes with CI/CD pipelines',
          features: ['Automated testing', 'Continuous deployment', 'Infrastructure as code', 'Monitoring & alerting'],
          href: '/solutions/devops-automation'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      solutions: [
        {
          title: 'Cybersecurity Framework',
          description: 'Comprehensive security strategy to protect your digital assets',
          features: ['Risk assessment', 'Security monitoring', 'Incident response', 'Compliance management'],
          href: '/solutions/cybersecurity-framework'
        },
        {
          title: 'Data Protection',
          description: 'Advanced data security and privacy protection solutions',
          features: ['Encryption at rest & transit', 'Access controls', 'Data classification', 'Privacy compliance'],
          href: '/solutions/data-protection'
        },
        {
          title: 'Compliance Management',
          description: 'Automated compliance monitoring and reporting for various standards',
          features: ['SOC 2 compliance', 'GDPR compliance', 'HIPAA compliance', 'Automated reporting'],
          href: '/solutions/compliance-management'
        }
      ]
    },
    {
      category: 'Business Process',
      icon: Zap,
      color: 'from-purple-500 to-violet-500',
      solutions: [
        {
          title: 'Workflow Automation',
          description: 'Streamline business processes with intelligent automation',
          features: ['Process mapping', 'Automation design', 'Integration setup', 'Performance monitoring'],
          href: '/solutions/workflow-automation'
        },
        {
          title: 'Customer Experience',
          description: 'Enhanced customer interactions through technology and data insights',
          features: ['Customer journey mapping', 'Personalization', 'Omnichannel support', 'Feedback analysis'],
          href: '/solutions/customer-experience'
        },
        {
          title: 'Revenue Operations',
          description: 'Optimize revenue generation through data-driven sales and marketing',
          features: ['Sales automation', 'Lead scoring', 'Revenue forecasting', 'Performance analytics'],
          href: '/solutions/revenue-operations'
        }
      ]
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      icon: '🏥',
      description: 'HIPAA-compliant solutions for healthcare providers and organizations',
      solutions: ['Patient data management', 'Telemedicine platforms', 'Medical AI diagnostics', 'Compliance automation']
    },
    {
      industry: 'Finance',
      icon: '🏦',
      description: 'Secure financial technology solutions for banks and fintech companies',
      solutions: ['Fraud detection', 'Risk management', 'Payment processing', 'Regulatory compliance']
    },
    {
      industry: 'E-commerce',
      icon: '🛒',
      description: 'Scalable e-commerce platforms and optimization solutions',
      solutions: ['Platform development', 'Inventory management', 'Customer analytics', 'Payment integration']
    },
    {
      industry: 'Manufacturing',
      icon: '🏭',
      description: 'IoT and automation solutions for manufacturing operations',
      solutions: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production monitoring']
    },
    {
      industry: 'Education',
      icon: '🎓',
      description: 'Technology solutions for educational institutions and e-learning',
      solutions: ['Learning management systems', 'Student analytics', 'Virtual classrooms', 'Assessment tools']
    },
    {
      industry: 'Real Estate',
      icon: '🏠',
      description: 'Property management and real estate technology solutions',
      solutions: ['Property management systems', 'Virtual tours', 'Market analytics', 'Transaction automation']
    }
  ];

  return (
    <>
      <SEOHead
        title="Solutions - Zion Tech Group | Technology Solutions for Every Industry"
        description="Discover comprehensive technology solutions for AI, cloud computing, cybersecurity, and business process automation. Tailored solutions for every industry."
        keywords="technology solutions, AI solutions, cloud solutions, cybersecurity solutions, business automation, industry solutions"
        canonical="https://ziontechgroup.com/solutions"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive technology solutions designed to transform your business operations, enhance security, and drive innovation across every industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#solutions"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Explore Solutions
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
                >
                  Get Custom Solution
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions by Category */}
        <section id="solutions" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Solutions by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI and machine learning to cloud infrastructure and cybersecurity, we provide comprehensive solutions for every aspect of your technology needs.
              </p>
            </div>
            
            <div className="space-y-16">
              {solutions.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <div key={categoryIndex} className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{category.category}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                      {category.solutions.map((solution, solutionIndex) => (
                        <div
                          key={solutionIndex}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                        >
                          <h4 className="text-xl font-bold text-white mb-3">{solution.title}</h4>
                          <p className="text-gray-300 mb-4 leading-relaxed">{solution.description}</p>
                          
                          <ul className="space-y-2 mb-6">
                            {solution.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          
                          <Link
                            href={solution.href}
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored technology solutions designed for the unique challenges and requirements of different industries.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.industry}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{industry.description}</p>
                  
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={`/contact?industry=${encodeURIComponent(industry.industry)}`}
                    className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    Get Industry Solution
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Solution Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful implementation and maximum value from your technology investments.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Discovery & Analysis',
                    description: 'We analyze your current systems, identify pain points, and understand your business objectives.',
                    icon: Target
                  },
                  {
                    step: '02',
                    title: 'Solution Design',
                    description: 'Our experts design a customized solution architecture that aligns with your goals and requirements.',
                    icon: Brain
                  },
                  {
                    step: '03',
                    title: 'Implementation',
                    description: 'We implement the solution with minimal disruption to your operations and maximum attention to detail.',
                    icon: Zap
                  },
                  {
                    step: '04',
                    title: 'Optimization & Support',
                    description: 'Continuous monitoring, optimization, and support to ensure your solution delivers maximum value.',
                    icon: BarChart3
                  }
                ].map((process, index) => {
                  const IconComponent = process.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-blue-400 mb-2">{process.step}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{process.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our technology solutions can help you achieve your business goals and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact?type=consultation"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Solutions;