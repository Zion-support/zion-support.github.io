import Head from 'next/head';
import Link from 'next/link';
import { Check, Star, Zap, Shield, Globe, Users, Award, Clock } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2,000',
      duration: 'Assessment & Strategy',
      description: 'Perfect for organizations starting their digital transformation journey',
      features: [
        'Technology Assessment',
        'Security Audit',
        'Cloud Migration Strategy',
        'AI Readiness Evaluation',
        'ROI Projection',
        'Implementation Roadmap',
        '30-day support',
        'Follow-up consultation'
      ],
      cta: 'Get Started',
      popular: false,
      color: 'border-gray-300',
      bgColor: 'bg-gray-50'
    },
    {
      name: 'Professional',
      price: '$6,000',
      duration: 'Project Implementation',
      description: 'Comprehensive solution development and deployment',
      features: [
        'Everything in Starter',
        'Custom AI Solution Development',
        'Cloud Infrastructure Setup',
        'Security Implementation',
        'API Integration',
        'Performance Optimization',
        '90-day support',
        'Training & Documentation',
        'Monthly maintenance',
        'Priority support'
      ],
      cta: 'Start Project',
      popular: true,
      color: 'border-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Enterprise',
      price: '$2,500',
      duration: 'per month (Retainer)',
      description: 'Ongoing support and continuous innovation for large organizations',
      features: [
        'Everything in Professional',
        '24/7 Dedicated Support',
        'Continuous Monitoring',
        'Regular Updates & Patches',
        'Performance Tuning',
        'Security Audits',
        'Strategic Consulting',
        'Custom Development',
        'Priority Response (2 hours)',
        'Quarterly Business Reviews'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'border-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const services = [
    {
      category: 'AI & Machine Learning',
      items: [
        { name: 'AI Strategy Consulting', price: '$150/hour', duration: 'Ongoing' },
        { name: 'Custom AI Model Development', price: '$15,000+', duration: 'Project-based' },
        { name: 'AI Integration Services', price: '$5,000+', duration: 'Project-based' },
        { name: 'Machine Learning Platform Setup', price: '$8,000+', duration: 'Project-based' }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      items: [
        { name: 'Cloud Migration', price: '$10,000+', duration: 'Project-based' },
        { name: 'Infrastructure as Code', price: '$3,000+', duration: 'Project-based' },
        { name: 'DevOps Implementation', price: '$6,000+', duration: 'Project-based' },
        { name: 'Cloud Optimization', price: '$2,000/month', duration: 'Ongoing' }
      ]
    },
    {
      category: 'Cybersecurity',
      items: [
        { name: 'Security Assessment', price: '$3,000', duration: 'One-time' },
        { name: 'Zero-Trust Implementation', price: '$12,000+', duration: 'Project-based' },
        { name: 'Compliance Consulting', price: '$200/hour', duration: 'Ongoing' },
        { name: 'Security Monitoring', price: '$1,500/month', duration: 'Ongoing' }
      ]
    },
    {
      category: 'Quantum Computing',
      items: [
        { name: 'Quantum Strategy Assessment', price: '$5,000', duration: 'One-time' },
        { name: 'Quantum Algorithm Development', price: '$25,000+', duration: 'Project-based' },
        { name: 'Quantum Security Implementation', price: '$15,000+', duration: 'Project-based' },
        { name: 'Quantum Computing Training', price: '$500/person', duration: 'Per session' }
      ]
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Proven Track Record',
      description: '150+ successful projects with 98% client satisfaction rate'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II certified with zero security breaches'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fast Implementation',
      description: 'Average project completion 30% faster than industry standard'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'ROI Guarantee',
      description: 'Average 320% ROI within 12 months of implementation'
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing & Plans - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI, cloud, cybersecurity, and quantum computing solutions. Choose from flexible plans designed for organizations of all sizes." />
        <meta name="keywords" content="pricing, AI solutions, cloud services, cybersecurity, quantum computing, enterprise pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pricing & Plans - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for cutting-edge technology solutions" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing & Plans - Zion Tech Group" />
        <meta name="twitter:description" content="Transparent pricing for technology solutions" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Pricing & Plans",
              "description": "Transparent pricing for AI, cloud, cybersecurity, and quantum computing solutions",
              "url": "https://ziontechgroup.com/pricing",
              "offers": plans.map(plan => ({
                "@type": "Offer",
                "name": plan.name,
                "description": plan.description,
                "price": plan.price,
                "priceCurrency": "USD"
              }))
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your organization. From assessments to full implementations, we have you covered.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Monthly
              </button>
              <button className="px-6 py-2 text-blue-300 hover:text-white transition-colors">
                Annual (Save 20%)
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Start with an assessment, scale with implementation, or maintain with ongoing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative rounded-xl border-2 ${plan.color} ${plan.bgColor} p-8 hover:shadow-xl transition-shadow`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.duration}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Service Pricing</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Custom solutions tailored to your specific needs and requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Globe className="w-6 h-6 mr-2 text-blue-600" />
                    {service.category}
                  </h3>
                  <div className="space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.duration}</p>
                        </div>
                        <span className="font-bold text-blue-600">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We deliver exceptional value and results that exceed expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center text-blue-600 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer custom pricing for enterprise clients?</h3>
                <p className="text-gray-600">Yes, we provide custom pricing and enterprise packages for large organizations with specific requirements. Contact our sales team for a tailored quote.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in the support package?</h3>
                <p className="text-gray-600">Our support packages include technical assistance, bug fixes, performance monitoring, security updates, and regular maintenance. Response times vary by plan.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. We'll prorate the difference and ensure a smooth transition.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a money-back guarantee?</h3>
                <p className="text-gray-600">We offer a 30-day satisfaction guarantee for all our services. If you're not completely satisfied, we'll work to make it right or provide a refund.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and custom quote tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/case-studies"
                className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
