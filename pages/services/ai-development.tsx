import type { NextPage } from 'next';
import Head from 'next/head';
import { Brain, Zap, Shield, BarChart3, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const AIDevelopment: NextPage = () => {
  const aiSolutions = [
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Custom ML models tailored to your specific business needs and data.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making']
    },
    {
      icon: Zap,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
      features: ['Sentiment Analysis', 'Text Classification', 'Language Translation']
    },
    {
      icon: BarChart3,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for automation and quality control.',
      features: ['Object Detection', 'Image Classification', 'Video Analytics']
    },
    {
      icon: Shield,
      title: 'AI-Powered Security',
      description: 'Intelligent threat detection and cybersecurity solutions.',
      features: ['Anomaly Detection', 'Fraud Prevention', 'Security Monitoring']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Data Assessment',
      description: 'We analyze your data quality, structure, and availability to determine AI feasibility.'
    },
    {
      number: '02',
      title: 'Solution Design',
      description: 'Our team designs a custom AI solution architecture tailored to your requirements.'
    },
    {
      number: '03',
      title: 'Model Development',
      description: 'We develop, train, and validate AI models using industry best practices.'
    },
    {
      number: '04',
      title: 'Integration & Deployment',
      description: 'Seamless integration with your existing systems and production deployment.'
    },
    {
      number: '05',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and model optimization for optimal performance.'
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      applications: ['Medical Diagnosis', 'Drug Discovery', 'Patient Care Optimization'],
      benefits: ['Improved Accuracy', 'Faster Diagnosis', 'Cost Reduction']
    },
    {
      industry: 'Finance',
      applications: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading'],
      benefits: ['Enhanced Security', 'Better Risk Management', 'Increased Efficiency']
    },
    {
      industry: 'Manufacturing',
      applications: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization'],
      benefits: ['Reduced Downtime', 'Higher Quality', 'Cost Savings']
    },
    {
      industry: 'Retail',
      applications: ['Customer Segmentation', 'Demand Forecasting', 'Personalized Marketing'],
      benefits: ['Better Customer Experience', 'Increased Sales', 'Improved Inventory Management']
    }
  ];

  return (
    <>
      <Head>
        <title>AI Development Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with custom AI solutions from Zion Tech Group. Machine learning, NLP, computer vision, and more." />
        <meta name="keywords" content="AI development, machine learning, natural language processing, computer vision, artificial intelligence, Zion Tech Group" />
      </Head>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-12 h-12" />
            </div>
            <h1 className="text-5xl font-bold mb-6">AI Development Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning models to natural language processing, we help you 
              harness the power of AI to drive innovation and growth.
            </p>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our AI Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive AI development services across all major domains, 
                helping businesses leverage artificial intelligence for competitive advantage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiSolutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{solution.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our AI Development Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology that ensures successful AI project delivery 
                and maximum value for your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases by Industry */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">AI Use Cases by Industry</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how AI is transforming different industries and creating new 
                opportunities for innovation and growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{useCase.industry}</h3>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-3">Applications:</h4>
                    <ul className="space-y-2">
                      {useCase.applications.map((app, appIndex) => (
                        <li key={appIndex} className="text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-gray-600 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Zion Tech Group for AI Development?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We combine deep AI expertise with business acumen to deliver solutions 
                that drive real business value and competitive advantage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Expert AI Team</h3>
                <p className="text-gray-600">
                  Our team includes PhD-level AI researchers and experienced ML engineers 
                  with proven track records in delivering successful AI solutions.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Enterprise-Grade Security</h3>
                <p className="text-gray-600">
                  We implement robust security measures and ensure compliance with 
                  industry standards and regulations for AI systems.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Ongoing Support</h3>
                <p className="text-gray-600">
                  We provide continuous monitoring, maintenance, and optimization 
                  to ensure your AI solutions perform at their best.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how artificial intelligence can transform your business 
              and create new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><span className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </span></Link>
              <Link href="/services"><span className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore All Services
              </span></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIDevelopment;