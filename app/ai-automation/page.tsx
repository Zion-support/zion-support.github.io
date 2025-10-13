import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Bot, Workflow, Clock, CheckCircle, ArrowRight, Star, Users } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AiAutomationPage = () => {
  const features = [
    {
      title: "Workflow Automation",
      description: "Automate complex business processes with intelligent workflow management",
      icon: <Workflow className="w-8 h-8" />,
      benefits: ["Process optimization", "Error reduction", "Time savings", "Consistency"]
    },
    {
      title: "Document Processing",
      description: "Automatically extract, analyze, and process documents with AI",
      icon: <Bot className="w-8 h-8" />,
      benefits: ["Data extraction", "Document classification", "Content analysis", "Batch processing"]
    },
    {
      title: "Email Automation",
      description: "Intelligent email management and automated responses",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Smart routing", "Auto-responses", "Sentiment analysis", "Priority handling"]
    },
    {
      title: "Task Scheduling",
      description: "AI-powered task management and resource optimization",
      icon: <Clock className="w-8 h-8" />,
      benefits: ["Smart scheduling", "Resource allocation", "Deadline management", "Progress tracking"]
    }
  ];

  const automationTypes = [
    {
      title: "Customer Service Automation",
      description: "Automate customer inquiries, support tickets, and service requests",
      icon: <Users className="w-6 h-6" />,
      examples: ["Chatbot responses", "Ticket routing", "FAQ automation", "Escalation management"]
    },
    {
      title: "Marketing Automation",
      description: "Automate marketing campaigns, lead nurturing, and customer engagement",
      icon: <Zap className="w-6 h-6" />,
      examples: ["Email campaigns", "Social media posting", "Lead scoring", "Content distribution"]
    },
    {
      title: "Sales Automation",
      description: "Streamline sales processes and improve conversion rates",
      icon: <Star className="w-6 h-6" />,
      examples: ["Lead qualification", "Follow-up sequences", "Proposal generation", "Contract management"]
    },
    {
      title: "HR Automation",
      description: "Automate human resources processes and employee management",
      icon: <Bot className="w-6 h-6" />,
      examples: ["Resume screening", "Interview scheduling", "Onboarding", "Performance tracking"]
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Reduce manual work by up to 80% with intelligent automation",
      stat: "80%"
    },
    {
      title: "Cost Reduction",
      description: "Lower operational costs through automated processes",
      stat: "60%"
    },
    {
      title: "Error Reduction",
      description: "Minimize human errors with consistent automated workflows",
      stat: "95%"
    },
    {
      title: "Time Savings",
      description: "Free up your team to focus on strategic initiatives",
      stat: "50+ hours/week"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Process Analysis",
      description: "We analyze your current processes to identify automation opportunities"
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Design custom automation workflows tailored to your business needs"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy and configure automation solutions with minimal disruption"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuously monitor and optimize automation performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Automation - Intelligent Business Process Automation | Zion Tech Group"
        description="Streamline your business processes with AI-powered automation. Workflow automation, document processing, email automation, and task scheduling solutions."
        keywords="AI automation, business process automation, workflow automation, document processing, email automation, task scheduling"
        canonical="https://ziontechgroup.com/ai-automation"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Automation
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Streamline your business processes with intelligent automation. Reduce manual work, 
            improve efficiency, and scale your operations with AI-powered solutions.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful automation tools to transform your business processes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Types of Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive automation solutions for every business function
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mr-4">
                    <div className="text-cyan-400">
                      {type.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {type.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proven Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from our automation implementations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-cyan-400">{benefit.stat}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology for successful automation implementation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-cyan-400">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your automation needs and create a custom solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiAutomationPage;