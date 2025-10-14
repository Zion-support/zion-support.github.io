
import { Right, Circle, Workflow, Brain, Settings, Zap, Play } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO'
import ResponsiveContainer from '../components/ResponsiveContainer'
import FuturisticCard from '../components/FuturisticCard'
import FuturisticButton from '../components/FuturisticButton'

const AIAutomationPlatform = () => {
  const features = [
    {
      title: 'Workflow Automation',
      description: 'Automate complex business processes with AI-powered workflows',
      icon: <Workflow className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {

      title: "Smart Decision Making",
      description: "AI-driven decision making for automated business processes",
      icon: <Brain className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Process Optimization",
      description: "Continuously optimize processes using machine learning",
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Integration Hub",
      description: "Connect and automate across all your business systems",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"

    }
  ];

  const benefits = [
    '70% process efficiency gain',
    'Automated decision making',
    'Seamless integrations',
    'Real-time optimization',
    'Scalable workflows',
    'Cost reduction'
  ];

  return (
    <>
      <EnhancedSEO
        title="AI Automation Platform - Intelligent Process Automation | Zion Tech Group"
        description="Transform your business with AI-powered automation. Workflow automation, smart decision making, and process optimization for modern enterprises."
        keywords="AI automation, workflow automation, process optimization, business automation, intelligent automation, RPA"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                AI Automation Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with intelligent automation. 
                Streamline processes, reduce costs, and accelerate growth with AI-powered workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <FuturisticButton size="lg">
                  Start Automation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton variant="outline" size="lg">
                  Watch Demo
                  <Play className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Platform Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI automation tools designed to transform your business processes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className={`text-${feature.color.split('-')[1]}-400 mb-4 flex justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our AI automation platform delivers measurable results and transforms 
                  how your business operates.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-300">
                      <Circle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Automate?</h3>
                <p className="text-gray-300 mb-6">
                  Start your automation journey today and see the difference 
                  AI can make in your business processes.
                </p>
                <FuturisticButton size="lg" className="w-full">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Transform Your Business Today</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using our AI automation platform 
                to streamline operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton size="lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton variant="outline" size="lg">
                  Schedule Demo
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default AIAutomationPlatform;