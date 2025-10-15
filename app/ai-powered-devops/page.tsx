import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, CheckCircle, ArrowRight, Settings, Zap, Activity, Code } from 'lucide-react';

const AiPoweredDevopsPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Automation",
      description: "Intelligent automation of deployment pipelines and infrastructure management.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["90% faster deployments", "Zero-downtime updates", "Automated rollbacks"]
    },
    {
      title: "Predictive Monitoring",
      description: "AI-driven monitoring that predicts issues before they impact users.",
      icon: <Activity className="w-8 h-8" />,
      benefits: ["Proactive issue detection", "Performance optimization", "Cost reduction"]
    },
    {
      title: "Smart Scaling",
      description: "Automatically scale resources based on AI predictions and real-time demand.",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Auto-scaling", "Cost optimization", "Performance tuning"]
    },
    {
      title: "Security Integration",
      description: "Built-in security scanning and vulnerability assessment powered by AI.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Threat detection", "Vulnerability scanning", "Compliance monitoring"]
    }
  ];

  const services = [
    {
      name: "CI/CD Pipeline Optimization",
      price: "$3,999",
      description: "Streamline your deployment process with AI-powered pipeline optimization.",
      features: ["Automated testing", "Smart deployments", "Performance monitoring"]
    },
    {
      name: "Infrastructure as Code",
      price: "$2,999",
      description: "Manage your infrastructure with AI-enhanced automation and monitoring.",
      features: ["Terraform automation", "Cloud optimization", "Cost management"]
    },
    {
      name: "Monitoring & Alerting",
      price: "$1,999",
      description: "Advanced monitoring solutions with AI-powered insights and predictions.",
      features: ["Real-time monitoring", "Predictive alerts", "Performance analytics"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI-Powered DevOps - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered DevOps solutions for automated deployment, monitoring, and infrastructure management." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              AI-Powered DevOps
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your DevOps practices with AI-powered automation, monitoring, and infrastructure management. 
            Deploy faster, scale smarter, and maintain higher reliability.
          </p>
          <div className="flex items-center justify-center space-x-4 text-cyan-400">
            <Settings className="w-6 h-6" />
            <span className="text-lg font-semibold">Trusted by 200+ Development Teams</span>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-cyan-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our AI DevOps Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  <Code className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Revolutionize Your DevOps?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join leading development teams who have transformed their DevOps with our AI solutions.
          </p>
          <button className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center mx-auto">
            Start Your Transformation
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiPoweredDevopsPage;