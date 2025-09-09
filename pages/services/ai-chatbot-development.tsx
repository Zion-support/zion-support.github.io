import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, MessageSquare, Zap, Shield, Globe, Clock, Users } from 'lucide-react';

const AIChatbotDevelopment: NextPage = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for understanding and responding to user queries naturally"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-language Support",
      description: "Support for multiple languages to serve global audiences"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Round-the-clock customer support without human intervention"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Integration",
      description: "Secure integration with your existing systems and databases"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "CRM Integration",
      description: "Seamless integration with popular CRM systems"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Comprehensive analytics and reporting for performance insights"
    }
  ];

  const benefits = [
    "Reduce customer service costs by up to 70%",
    "Improve response time from hours to seconds",
    "Handle multiple conversations simultaneously",
    "Provide consistent service quality",
    "Scale support without additional staff",
    "Collect valuable customer insights"
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your business needs and design the chatbot strategy"
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Custom chatbot development with your brand voice and requirements"
    },
    {
      step: "03",
      title: "Testing & Integration",
      description: "Thorough testing and integration with your existing systems"
    },
    {
      step: "04",
      title: "Deployment & Training",
      description: "Launch and train your team on managing the chatbot"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>AI Chatbot Development - Zion Tech Group</title>
        <meta name="description" content="Custom AI-powered chatbots for customer service, sales, and support. Reduce costs and improve customer experience with intelligent automation." />
        <meta name="keywords" content="AI chatbot development, customer service automation, NLP, machine learning, Zion Tech Group" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">AI Chatbot Development</h1>
            <p className="text-xl mb-8">
              Transform your customer service with intelligent AI-powered chatbots that provide 
              24/7 support, reduce costs, and enhance customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <a 
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose AI Chatbots?</h2>
              <p className="text-xl text-gray-600">
                AI chatbots are revolutionizing customer service by providing instant, accurate, 
                and personalized responses to customer inquiries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Business Benefits</h2>
              <p className="text-xl text-gray-600">
                Discover how AI chatbots can transform your business operations and customer service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Cost Reduction</h3>
                <ul className="space-y-4">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Experience</h3>
                <ul className="space-y-4">
                  {benefits.slice(3).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Development Process</h2>
              <p className="text-xl text-gray-600">
                We follow a proven methodology to ensure successful chatbot implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Pricing Plans</h2>
              <p className="text-xl text-gray-600">
                Choose the plan that best fits your business needs and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">$2,500 - $5,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Basic NLP capabilities
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Single language support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Basic integrations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    2-4 weeks delivery
                  </li>
                </ul>
                <Link href="/contact">
                  <span className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer">
                    Get Started
                  </span>
                </Link>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">$5,000 - $12,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Advanced NLP & ML
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Multi-language support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    CRM & API integrations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Analytics dashboard
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    3-6 weeks delivery
                  </li>
                </ul>
                <Link href="/contact">
                  <span className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer">
                    Get Started
                  </span>
                </Link>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">$12,000 - $25,000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Custom AI models
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Unlimited languages
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Advanced integrations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Custom analytics
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    4-8 weeks delivery
                  </li>
                </ul>
                <Link href="/contact">
                  <span className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors cursor-pointer">
                    Get Started
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Customer Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI chatbot solutions can help you improve customer experience 
            and reduce operational costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
            <a 
              href="tel:+13024640950"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIChatbotDevelopment;