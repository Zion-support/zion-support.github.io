import React from &apos;react&apos;;
import { Helmet } from &apos;react-helmet-async&apos;;
import { Brain, Bot, BarChart3, Shield, Zap, Target } from &apos;lucide-react&apos;;

const AIServicesPage: React.FC = () => {
  const services = [{
      icon: Brain,
      title: &apos;AI Strategy & Consulting&apos;,
      description: &apos;Develop comprehensive AI strategies tailored to your business objectives and industry requirements.&apos;,
      features: [&apos;AI Readiness Assessment&apos;, &apos;Technology Roadmap&apos;, &apos;ROI Analysis&apos;, &apos;Implementation Planning&apos]
    },
    {
      icon: Bot,
      title: &apos;Conversational AI&apos;,
      description: &apos;Build intelligent chatbots and virtual assistants that enhance customer experience and automate support.&apos;,
      features: [&apos;Natural Language Processing&apos;, &apos;Multi-channel Integration&apos;, &apos;Sentiment Analysis&apos;, &apos;24/7 Availability&apos]
    },
    {
      icon: BarChart3,
      title: &apos;Predictive Analytics&apos;,
      description: &apos;Leverage machine learning to predict trends, behaviors, and outcomes for better decision making.&apos;,
      features: [&apos;Data Mining&apos;, &apos;Pattern Recognition&apos;, &apos;Forecasting Models&apos;, &apos;Real-time Insights&apos]
    },
    {
      icon: Shield,
      title: &apos;AI Security Solutions&apos;,
      description: &apos;Advanced AI-powered security systems to protect your digital assets and detect threats in real-time.&apos;,
      features: [&apos;Threat Detection&apos;, &apos;Anomaly Detection&apos;, &apos;Automated Response&apos;, &apos;Compliance Monitoring&apos]
    },
    {
      icon: Zap,
      title: &apos;Process Automation&apos;,
      description: &apos;Streamline operations with intelligent automation that reduces costs and improves efficiency.&apos;,
      features: [&apos;Workflow Automation&apos;, &apos;Document Processing&apos;, &apos;Data Entry Automation&apos;, &apos;Quality Control&apos]
    },
    {
      icon: Target,
      title: &apos;Custom AI Development&apos;,
      description: &apos;Bespoke AI solutions designed specifically for your unique business challenges and opportunities.&apos;,
      features: [&apos;Custom Algorithms&apos;, &apos;API Development&apos;, &apos;Integration Services&apos;, &apos;Ongoing Support&apos]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including strategy consulting, machine learning, predictive analytics, and custom AI development solutions." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, predictive analytics, AI consulting, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From strategy to implementation, we deliver AI that drives real results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI services can transform your business and give you a competitive edge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Start Your AI Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>;
  );
};

export default AIServicesPage;