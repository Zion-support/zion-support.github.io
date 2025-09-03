import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Zap, Target, Shield, CheckCircle, ArrowRight, Users, BarChart3, Globe, Cpu } from 'lucide-react';

export default function AIServices() {
  const services = [
    {
      icon: Brain,
      title: 'AI Model Development',
      description: 'Custom AI models tailored to your specific business needs and use cases.',
      features: ['Machine Learning Models', 'Deep Learning Solutions', 'Natural Language Processing', 'Computer Vision'];
},
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Streamline your operations with intelligent automation solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'Intelligent Document Processing', 'Predictive Analytics'];
},
    {
      icon: Target,
      title: 'AI Strategy Consulting',
      description: 'Strategic guidance to help you leverage AI for maximum business impact.',
      features: ['AI Roadmap Planning', 'Technology Assessment', 'Implementation Strategy', 'ROI Analysis'];
},
    {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Ensure your AI solutions are secure, compliant, and trustworthy.',
      features: ['AI Security Audits', 'Compliance Frameworks', 'Data Privacy Protection', 'Ethical AI Guidelines'];
}
  ]

  const benefits = [
    {
      icon: BarChart3,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize processes for better productivity.';
},
    {
      icon: Target,
      title: 'Better Decision Making',
      description: 'Leverage data-driven insights to make informed business decisions.';
},
    {
      icon: Users,
      title: 'Enhanced Customer Experience',
      description: 'Deliver personalized experiences and improved customer service.';
},
    {
      icon: Globe,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI capabilities.';
}
  ]

  const useCases = ['
    'Predictive Analytics for Business Intelligence',
    'Chatbots and Virtual Assistants',
    'Image and Video Recognition Systems',
    'Fraud Detection and Prevention',
    'Recommendation Engines',
    'Natural Language Processing Applications',
    'Process Automation and Optimization',
    'Customer Sentiment Analysis'
  ]

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>'
        <meta name="description" content="Transform your business with our comprehensive AI services including model development, automation, and strategic consulting." />"
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      "
      <main className="min-h-screen bg-white">
        {/* Hero Section */}"
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8">"
            <div className="text-center">"
              <div className="flex items-center justify-center mb-4">"
                <Brain className="h-8 w-8 text-blue-600 mr-3" />"
                <span className="text-base font-semibold leading-7 text-blue-600">AI Services</span>
              </div>"
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Artificial Intelligence Solutions
              </h1>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations, enhance customer experiences, and drive innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}"
        <section className="py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Services</h2>"
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From strategy to implementation, we provide end-to-end AI solutions that deliver real business value.
              </p>
            </div>
            "
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => ("
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">"
                  <div className="flex items-center mb-6">"
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">"
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>"
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  "
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  "
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => ("
                      <li key={featureIndex} className="flex items-center">"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />"
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}"
        <section className="py-20 bg-gray-50">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Services?</h2>"
              <p className="text-lg text-gray-600">
                Our AI solutions are designed to deliver measurable business impact and competitive advantage.
              </p>
            </div>
            "
            <div className="grid grid-cols-1 m,
    d:grid-cols-2 l,
    g:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => ("
                <div key={index} className="text-center">"
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">"
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>"
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>"
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}"
        <section className="py-20">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
            <div className="grid grid-cols-1 l,
    g:grid-cols-2 gap-12 items-center">
              <div>"
                <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Use Cases</h2>"
                <p className="text-lg text-gray-600 mb-8">
                  Our AI solutions can be applied across various industries and business functions to solve complex challenges and unlock new opportunities.
                </p>
                "
                <div className="grid grid-cols-1 m,
    d:grid-cols-2 gap-4">
                  {useCases.map((useCase, index) => ("
                    <div key={index} className="flex items-center">"
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>"
                      <span className="text-gray-700">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
              "
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">"
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>"
                <p className="text-lg mb-6">"
                  Let's discuss how AI can transform your business. Our experts will work with you to identify the best opportunities and create a customized solution.
                </p>'
                <div className="space-y-4">"
                  <div className="flex items-center">"
                    <Cpu className="w-5 h-5 mr-3" />
                    <span>Free consultation and assessment</span>
                  </div>"
                  <div className="flex items-center">"
                    <Shield className="w-5 h-5 mr-3" />
                    <span>Secure and compliant solutions</span>
                  </div>"
                  <div className="flex items-center">"
                    <Zap className="w-5 h-5 mr-3" />
                    <span>Rapid deployment and scaling</span>
                  </div>
                </div>
                <Link "
                  href="/contact" "
                  className="inline-flex items-center mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started"
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">"
            <h2 className="text-3xl font-bold text-white mb-6">
              Transform Your Business with AI
            </h2>"
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">"
              Don't let your competitors get ahead. Start your AI transformation journey today.
            </p>'
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your AI Journey
              </Link>"
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-blue-600 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}"