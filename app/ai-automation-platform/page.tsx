import { Right, Circle, Workflow, Brain, Settings, Zap, Play } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIAutomationPlatform = () => {
  const features = [
    {
      title: "Workflow Automation",
      description: "Automate complex business processes with AI-powered workflows",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
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
    "Reduce manual work by up to 80%",
    "Improve process accuracy by 95%",
    "Scale operations without linear cost increase",
    "Real-time monitoring and optimization",
    "Seamless integration with existing systems",
    "24/7 automated operations"
  ];

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "AI-powered chatbots and automated ticket routing",
      icon: <Circle className="w-8 h-8" />
    },
    {
      title: "Financial Process Automation",
      description: "Automated invoice processing and financial reporting",
      icon: <Circle className="w-8 h-8" />
    },
    {
      title: "HR Process Automation",
      description: "Automated recruitment and employee onboarding",
      icon: <Circle className="w-8 h-8" />
    },
    {
      title: "Marketing Automation",
      description: "AI-driven campaign management and lead scoring",
      icon: <Circle className="w-8 h-8" />
    }
  ];

  return (
    <>
      <EnhancedSEO
        title="AI Automation Platform - Zion Tech Group"
        description="Transform your business with our advanced AI automation platform. Automate workflows, optimize processes, and scale operations with cutting-edge AI technology."
        keywords="AI automation, workflow automation, business process automation, AI platform, machine learning automation"
        canonicalUrl="/ai-automation-platform"
      />
      
      <ResponsiveContainer>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 rounded-3xl"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Automation
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business operations with our comprehensive AI automation platform. 
              Automate complex workflows, optimize processes, and scale your operations with 
              cutting-edge artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              >
                Get Started
                <Right className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </FuturisticButton>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI automation platform provides everything you need to transform your business processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-2xl">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Right className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI automation platform transforms different industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our AI automation platform 
              to transform their operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              >
                Start Your Journey
                <Right className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </section>
      </ResponsiveContainer>
    </>
  );
};

export default AIAutomationPlatform;