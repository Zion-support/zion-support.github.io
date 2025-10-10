'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Zap,;
  Settings,;
  CheckCircle,;
  BarChart,;
  Clock,;
  Users,;
  Phone,;
  Mail,;
  MapPin,;
  ArrowRight,;
  Brain,;
  Globe,;
  Lock,;
  Activity,;
  TrendingUp,;
  Target,;
  Eye,;
  Database,;
  Workflow,;
  Bot}
} from 'lucide-react';
const ProcessAutomationPage: React.FC = () => {
  const features = [;
    {
      icon: Zap,
      title: '[^']*',
      description: 'Streamline your business processes with intelligent automation that reduces manual work and errors.'}
    },;
    {
      icon: Bot,
      title: '[^']*',
      description: 'Leverage artificial intelligence to create smart, adaptive automation solutions for complex processes.'}
    },;
    {
      icon: Settings,
      title: '[^']*',
      description: 'Seamlessly integrate with your existing systems and tools for a unified automation experience.'}
    },;
    {
      icon: BarChart,
      title: '[^']*',
      description: 'Track and optimize your automated processes with real-time analytics and reporting.'}
    }
  ];
  const benefits = [;
    '[^']*',
    '[^']*',
    '[^']*',
    '[^']*',
    '[^']*',
    '[^']*',
    '[^']*',
    'Custom automation solutions';
  ];
  return (
    <></>;
      <Helmet>;
        <title>Process Automation Services - Zion Tech Group | Workflow Automation</title>;
        <meta name="description" content="Professional process automation services by Zion Tech Group. Streamline workflows, reduce costs, and improve efficiency with AI-powered automation." />;
        <meta name="keywords" content="process automation, workflow automation, business automation, AI automation, Zion Tech Group" />;
      </Helmet>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>;
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section>;
          <div className="max-w-7xl mx-auto"></div>;
            <div className="text-center mb-16"></div>;
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
                Process Automation Services;
              </h1>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                Streamline your business operations with intelligent automation solutions.;
                Reduce costs, improve efficiency, and scale your business with AI-powered process automation.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>;
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">;
                  <Zap className="mr-2 h-5 w-5" />;
                  Automate Now;
                </button>;
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">;
                  <Phone className="mr-2 h-5 w-5" />;
                  Call (302) 464-0950;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>;
          <div className="max-w-7xl mx-auto"></div>;
            <div className="text-center mb-16"></div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                Our Automation Solutions;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                We provide comprehensive process automation services to transform your business operations.;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>;
              {features.map((feature, index) => (}
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div>;
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>;
                    <feature.icon className="h-6 w-6 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                  <p className="text-gray-300">{feature.description}</p>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>;
          <div className="max-w-7xl mx-auto"></div>;
            <div className="text-center mb-16"></div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                Key Benefits;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Transform your business with our comprehensive process automation services.;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>;
              {benefits.map((benefit, index) => (}
                <div key={index} className="flex items-start space-x-3"></div>;
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />;
                  <p className="text-gray-300 text-lg">{benefit}</p>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>;
          <div className="max-w-4xl mx-auto text-center"></div>;
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                Ready to Automate Your Processes?;
              </h2>;
              <p className="text-xl text-purple-100 mb-8">;
                Contact our automation experts to discuss your process optimization needs.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>;
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">;
                  <Phone className="mr-2 h-5 w-5" />;
                  Call (302) 464-0950;
                </button>;
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">;
                  <Mail className="mr-2 h-5 w-5" />;
                  Email Us;
                </button>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  )}
export default ProcessAutomationPage;
