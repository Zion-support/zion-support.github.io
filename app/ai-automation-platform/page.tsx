<<<<<<< HEAD
import { Right, Circle, Workflow, Brain, Settings, Zap, Play   } from '''lucide-react;
import EnhancedSEO from '../components/EnhancedSEO';';
import ResponsiveContainer from '../components/ResponsiveContainer';';
import FuturisticCard from '../components/FuturisticCard';';
import FuturisticButton from '../components/FuturisticButton';
const AIAutomationPlatform = () => {;
  const features = [;
    {;
      title: "Workflow Automation,;
      description: "Automate complex business processes with AI-powered workflows",;
      icon: "<Workflow className="w-6" h-6 />",;
      color: from-blue-500 to-cyan-500"}
    },;
    {;
      title: "Smart Decision Making,;
      description: "AI-driven decision making for automated business processes",;
icon: "<Brain className="w-6" h-6 />",;
      color: "from-green-500 to-emerald-500"",;
    },;
    {;
      title: "Process Optimization"",;
      description: "Continuously optimize processes using machine learning",;
icon: "<Settings className="w-6" h-6 />",;
      color: "from-purple-500 to-pink-500;
    },;
    {;
      title: "Integration Hub,;
      description: "Connect and automate across all your business systems",;
icon: "<Zap className="w-6" h-6 />",;
      color: "from-orange-500 to-red-500"",;
    }
  ];
  const benefits = [;
    70% process efficiency gain",;
    Automated decision making,;
    Seamless integrations,;
    "Real-time optimization,;
    Scalable workflows",;
    Cost reduction;
  ];
  return (
    <><EnhancedSEO;
        title='AI' Automation Platform - Intelligent Process Automation | Zion Tech Group;
        description="Transform your business with AI-powered automation. Workflow automation, smart decision making, and process optimization for modern enterprises.;
        keywords='AI' automation, workflow automation, process optimization, business automation, intelligent automation, RPA";
      />;<div className="min-h-screen" bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900>;
        {/* Hero Section */}
        <section className="relative" overflow-hidden>;<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10></div><ResponsiveContainer><div className="relative" z-10 text-center py-20">;<div className="flex" items-center justify-center mb-6>;<Brain className="w-4" h-4 text-cyan-400 mr-2 />>;
                  View Demo;
                </FuturisticButton></div></div></ResponsiveContainer></section>
        {/* Features Section */}
        <section className="py-20>;<ResponsiveContainer><div className="text-center" mb-16">;<h2 className="text-3xl" md: "text-4xl font-bold text-white mb-4>Advanced Automation Features;</h2><p className="text-xl" text-gray-300 max-w-4xl mx-auto leading-relaxed>Everything you need to automate and optimize your business processes.;</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>",;
              {features.map((feature, index) => (}
                <FuturisticCard key={index} className="text-center"">;<div className="{`w-16" h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>;
                    {feature.icon}
                  </div><h3 className="text-xl" font-semibold text-white mb-4>;
                    {feature.title}
                  </h3><p className="text-gray-300" text-center mb-4 leading-relaxed text-sm md: "text-base>",;
                    {feature.description}
                  </p></FuturisticCard>
              ))}
            </div></ResponsiveContainer></section>
        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/5 to-purple-500/5>;<ResponsiveContainer><div className="text-center" mb-16">;<h2 className="text-3xl" md: "text-4xl font-bold text-white mb-4>Why Choose AI Automation Platform?;</h2><p className="text-xl" text-gray-300 max-w-3xl mx-auto>Experience intelligent automation that transforms your business operations.;</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6>",;
              {benefits.map((benefit, index) => (}
                <div key={index} className="flex" items-center space-x-4 p-4 bg-white/10 rounded-lg">;<Circle className="w-6" h-6 text-green-400 flex-shrink-0 />;<span className="text-white" font-medium>{benefit}</span></div>
              ))}
            </div></ResponsiveContainer></section>
        {/* CTA Section */}
        <section className="py-20>;<ResponsiveContainer><div className="text-center"">;<h2 className="text-3xl" md: "text-4xl font-bold text-white mb-6>Ready to Automate Your Business?;</h2><p className="text-xl" text-gray-300 mb-8 max-w-2xl mx-auto>Join thousands of businesses already using AI automation to streamline their operations.;</p><FuturisticButton;
                size="lg",;
icon={<Zap className="w-6" h-6" />}
};
export default AIAutomationPlatform;
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai automation platform - Zion Tech Group</title>
        <meta name="description" content="Professional Ai automation platform solutions and services" />
        <meta name="keywords" content="ai, automation, platform" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Ai automation platform</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional Ai automation platform solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const LazyPage: React.LazyExoticComponent<React.ComponentType<any>> = React.lazy(() => import('./page'));
export default LazyPage;

>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce
