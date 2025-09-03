import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import { 
  Brain, 
  Bot, 
  Zap, 
  Shield, 
  Database, 
  Globe, 
  Lock, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Monitor,
  Cpu,
  Network,
  Settings,
  Users,
  TrendingUp,
  MessageSquare,
  Image,
  FileText,
  Search
} from 'lucide-react';

export default function AIDevelopment() {
  const features = [
  {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced ML algorithms and models for predictive analytics and automation'
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational agents for customer service and support'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline workflows with intelligent automation solutions'
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Advanced threat detection and security solutions powered by AI'
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'Transform raw data into actionable insights with AI analytics'
    },
    {
      icon: Globe,
      title: 'Natural Language Processing',
      description: 'Understand and process human language with advanced NLP models'
    }
  ];

  const services = [
  {
      title: 'Custom AI Solutions',
      description: 'Tailored AI applications built specifically for your business needs',
      icon: Cpu,
      features: ['Machine Learning Models,Deep Learning Networks,Predictive Analytics,Custom Algorithms']
    },
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems',
      icon: Network,
      features: ['API Development,System Integration,Data Pipeline Setup,Performance Optimization']
    },
    {
      title: 'AI Consulting',
      description: 'Strategic guidance on AI implementation and digital transformation',
      icon: Settings,
      features: ['AI Strategy Planning,Technology Assessment,ROI Analysis,Implementation Roadmap']
    },
    {
      title: 'AI Training & Support',
      description: 'Comprehensive training and ongoing support for your AI initiatives',
      icon: Users,
      features: ['Team Training,Documentation,Technical Support,Model Maintenance']
    }
  ];

  const applications = [
  {
      title: 'Chatbots & Virtual Assistants',
      description: 'Intelligent conversational agents for customer service',
      icon: MessageSquare,
      useCases: ['Customer Support,Lead Generation,FAQ Automation,Appointment Scheduling']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis for various business applications',
      icon: Image,
      useCases: ['Quality Control,Object Detection,Facial Recognition,Document Processing']
    },
    {
      title: 'Natural Language Processing',
      description: 'Text analysis and language understanding solutions',
      icon: FileText,
      useCases: ['Sentiment Analysis,Text Classification,Language Translation,Content Generation']
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions',
      icon: TrendingUp,
      useCases: ['Sales Forecasting,Risk Assessment,Demand Planning,Customer Behavior Analysis']
    }
  ];

  const technologies = [
  { name: 'TensorFlow', category: 'ML Framework' },
    { name: 'PyTorch', category: 'ML Framework' },
    { name: 'OpenAI GPT', category: 'Language Model' },
    { name: 'Hugging Face', category: 'NLP Library' },
    { name: 'Scikit-learn', category: 'ML Library' },
    { name: 'Pandas', category: 'Data Analysis' },
    { name: 'NumPy', category: 'Numerical Computing' },
    { name: 'Keras', category: 'Neural Networks' },
    { name: 'Apache Spark', category: 'Big Data' },
    { name: 'Docker', category: 'Containerization' }
  ];

  const benefits = [
  {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and improve operational efficiency by up to 60%'
    },
    {
      icon: BarChart3,
      title: 'Better Insights',
      description: 'Gain deeper insights from your data with advanced analytics and predictions'
    },
    {
      icon: Users,
      title: 'Enhanced Customer Experience',
      description: 'Provide personalized experiences and 24/7 intelligent customer support'
    },
    {
      icon: Shield,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI capabilities'
    }
  ];

  return (
    <>
      <Head>
        <title>AI Development Services - Zion Tech Group</title>
        <meta name="description" content="Professional AI development services including machine learning, chatbots, automation, and custom AI solutions. Transform your business with artificial intelligence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-development" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Advanced <span className="text-blue-600">AI Development</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Harness the power of artificial intelligence to transform your business. 
                Our expert team builds custom AI solutions that drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start AI Project
                </Link>
                <Link href="/solutions" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  View AI Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Development Capabilities</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cutting-edge AI technologies to solve complex business challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Development Services</h2>
              <p className="text-lg text-gray-600">
                Comprehensive AI solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 w-fit mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
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

        {/* Applications Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Applications We Build</h2>
              <p className="text-lg text-gray-600">
                Real-world AI solutions that deliver measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 w-fit mr-4">
                      <app.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{app.title}</h3>
                      <p className="text-gray-600">{app.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {app.useCases.map((useCase, useCaseIndex) => (
                      <div key={useCaseIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of AI Implementation</h2>
              <p className="text-lg text-gray-600">
                Transform your business with artificial intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Technologies We Use</h2>
              <p className="text-lg text-gray-600">
                Cutting-edge tools and frameworks for AI development
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="text-lg font-semibold text-gray-900 mb-1">{tech.name}</div>
                  <div className="text-sm text-gray-500">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Development Process</h2>
              <p className="text-lg text-gray-600">
                A structured approach to building successful AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery & Analysis', description: 'Understand your business needs and identify AI opportunities' },
                { step: '02', title: 'Data Preparation', description: 'Collect, clean, and prepare data for AI model training' },
                { step: '03', title: 'Model Development', description: 'Build, train, and optimize AI models for your specific use case' },
                { step: '04', title: 'Deployment & Monitoring', description: 'Deploy AI solutions and continuously monitor performance' }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your AI goals and create a custom solution that drives innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get AI Consultation
              </Link>
              <Link href="/case-studies" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View AI Success Stories
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}