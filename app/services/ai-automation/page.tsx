import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Zap, Target, Users, TrendingUp, Clock, Shield, Brain, Settings, BarChart3, Play } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Automation Services | Zion Tech Group',
  description: 'Transform your business with cutting-edge AI automation solutions. 90% faster processing, 60% cost reduction, and 300% ROI guaranteed.',
  keywords: 'AI automation, business automation, AI services, process automation, AI implementation',
  openGraph: {
    title: 'AI Automation Services | Zion Tech Group',
    description: 'Transform your business with cutting-edge AI automation solutions.',
    type: 'website',
  },
};

export default function AIAutomationService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/services" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Automation Services
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform your business operations with our cutting-edge AI automation solutions. 
            Achieve 90% faster processing, 60% cost reduction, and guaranteed 300% ROI.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-2xl mb-12">
          <h2 className="text-3xl font-bold mb-4">Revolutionize Your Business with AI</h2>
          <p className="text-xl leading-relaxed mb-6">
            Our AI automation services help businesses across industries achieve unprecedented 
            efficiency gains, cost savings, and competitive advantages through intelligent automation.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-3xl font-bold">90%</div>
              <div className="text-sm">Faster Processing</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-3xl font-bold">60%</div>
              <div className="text-sm">Cost Reduction</div>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <div className="text-3xl font-bold">300%</div>
              <div className="text-sm">ROI Guaranteed</div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our AI Automation Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Intelligent Process Automation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Automate complex business processes with AI-powered decision making, 
                reducing manual work by up to 80%.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Document processing and analysis</li>
                <li>• Workflow optimization</li>
                <li>• Decision automation</li>
                <li>• Exception handling</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Customer Service Automation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Deploy AI chatbots and virtual assistants that provide 24/7 customer 
                support with 95% accuracy.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AI-powered chatbots</li>
                <li>• Voice assistants</li>
                <li>• Ticket routing and resolution</li>
                <li>• Sentiment analysis</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Data Analytics Automation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Transform raw data into actionable insights with automated analytics 
                and predictive modeling.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Automated reporting</li>
                <li>• Predictive analytics</li>
                <li>• Real-time dashboards</li>
                <li>• Anomaly detection</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                <Settings className="w-8 h-8 text-orange-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">IT Operations Automation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Streamline IT operations with intelligent monitoring, automated 
                maintenance, and self-healing systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Infrastructure monitoring</li>
                <li>• Automated troubleshooting</li>
                <li>• Performance optimization</li>
                <li>• Security automation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Marketing Automation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Personalize customer experiences and optimize marketing campaigns 
                with AI-driven automation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Personalized content</li>
                <li>• Campaign optimization</li>
                <li>• Lead scoring</li>
                <li>• Customer segmentation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-indigo-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Security Automation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Protect your business with AI-powered security systems that detect 
                and respond to threats in real-time.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Threat detection</li>
                <li>• Automated response</li>
                <li>• Compliance monitoring</li>
                <li>• Risk assessment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Implementation Process</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Discovery & Assessment</h3>
                <p className="text-gray-700 mb-4">
                  We analyze your current processes, identify automation opportunities, 
                  and develop a comprehensive AI strategy tailored to your business needs.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Process mapping and analysis</li>
                  <li>• Technology assessment</li>
                  <li>• ROI calculation and business case</li>
                  <li>• Implementation roadmap</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Design & Development</h3>
                <p className="text-gray-700 mb-4">
                  Our expert team designs and develops custom AI automation solutions 
                  using cutting-edge technologies and best practices.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Custom AI model development</li>
                  <li>• Integration with existing systems</li>
                  <li>• User interface design</li>
                  <li>• Testing and validation</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Deployment & Training</h3>
                <p className="text-gray-700 mb-4">
                  We deploy your AI automation solutions and provide comprehensive 
                  training to ensure smooth adoption and maximum value.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Phased deployment strategy</li>
                  <li>• Staff training and support</li>
                  <li>• Change management</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">4</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Optimization & Support</h3>
                <p className="text-gray-700 mb-4">
                  We continuously monitor and optimize your AI systems, providing 
                  ongoing support and updates to ensure peak performance.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Performance monitoring</li>
                  <li>• Continuous optimization</li>
                  <li>• Regular updates and maintenance</li>
                  <li>• 24/7 technical support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Proven Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-gray-600">Faster Processing</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$5,000<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic process automation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>AI chatbot implementation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Monthly reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Email support</span>
                </li>
              </ul>
              <button className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-6">$15,000<span className="text-lg text-purple-200">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span>Advanced process automation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span>Custom AI model development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span>Real-time analytics dashboard</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span>Monthly optimization</span>
                </li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 px-6 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Most Popular
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Full-scale AI transformation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Dedicated AI team</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 support and monitoring</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Guaranteed ROI</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Join hundreds of companies that have already achieved remarkable results with our AI automation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}