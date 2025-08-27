import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Rocket, 
  Target, 
  TrendingUp, 
  Users, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Star,
  ArrowRight,
  CheckCircle,
  BarChart3,
  MessageCircle,
  BookOpen,
  ShoppingCart,
  DollarSign,
  Gauge,
  HelpCircle,
  Search,
  PenTool,
  Workflow,
  Atom,
  Truck,
  Building
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function AISolutions() {
  const aiSolutions = [
    {
      category: 'AI Business Intelligence',
      solutions: [
        {
          name: 'AI Business Intelligence',
          href: '/services/ai-business-intelligence',
          icon: Brain,
          description: 'Advanced AI-powered analytics and business intelligence',
          features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards']
        },
        {
          name: 'AI Data Analytics',
          href: '/services/ai-data-analytics',
          icon: BarChart3,
          description: 'Intelligent data processing and visualization',
          features: ['Data mining', 'Pattern recognition', 'Automated reporting']
        },
        {
          name: 'AI Financial Analytics',
          href: '/services/ai-financial-analytics',
          icon: DollarSign,
          description: 'AI-driven financial insights and forecasting',
          features: ['Risk assessment', 'Portfolio optimization', 'Fraud detection']
        }
      ]
    },
    {
      category: 'AI Workflow Automation',
      solutions: [
        {
          name: 'AI Workflow Automation',
          href: '/services/ai-workflow-automation',
          icon: Workflow,
          description: 'Intelligent process automation and optimization',
          features: ['Process mining', 'Automated workflows', 'Performance optimization']
        },
        {
          name: 'AI Project Manager',
          href: '/services/ai-project-manager',
          icon: Target,
          description: 'AI-powered project management and planning',
          features: ['Resource optimization', 'Risk prediction', 'Timeline automation']
        },
        {
          name: 'AI Content Generator',
          href: '/services/ai-content-generator',
          icon: PenTool,
          description: 'AI-powered content creation and management',
          features: ['Content optimization', 'SEO enhancement', 'Brand consistency']
        }
      ]
    },
    {
      category: 'AI Cybersecurity',
      solutions: [
        {
          name: 'AI Cybersecurity',
          href: '/services/ai-cybersecurity',
          icon: Shield,
          description: 'AI-powered security and threat detection',
          features: ['Threat intelligence', 'Behavioral analysis', 'Incident response']
        },
        {
          name: 'AI Compliance Assistant',
          href: '/services/ai-compliance-assistant',
          icon: Lock,
          description: 'Automated compliance monitoring and reporting',
          features: ['SOC2 automation', 'GDPR compliance', 'Audit preparation']
        },
        {
          name: 'AI Compliance Copilot',
          href: '/services/ai-compliance-copilot',
          icon: Shield,
          description: 'Intelligent compliance management platform',
          features: ['Policy automation', 'Risk assessment', 'Compliance tracking']
        }
      ]
    },
    {
      category: 'AI Customer Experience',
      solutions: [
        {
          name: 'AI Customer Support',
          href: '/services/ai-customer-support',
          icon: MessageCircle,
          description: '24/7 intelligent customer support automation',
          features: ['Chatbot integration', 'Ticket automation', 'Knowledge management']
        },
        {
          name: 'AI Sales Copilot',
          href: '/services/ai-sales-copilot',
          icon: Users,
          description: 'AI-powered sales assistance and optimization',
          features: ['Lead scoring', 'Sales forecasting', 'Customer insights']
        },
        {
          name: 'AI Marketing Automation',
          href: '/services/ai-marketing-automation',
          icon: Target,
          description: 'Intelligent marketing campaign optimization',
          features: ['Audience targeting', 'Content optimization', 'ROI tracking']
        }
      ]
    },
    {
      category: 'AI Content & Communication',
      solutions: [
        {
          name: 'LLM Content Studio',
          href: '/services/llm-content-studio',
          icon: BookOpen,
          description: 'AI-powered content creation and management',
          features: ['Content generation', 'Brand consistency', 'SEO optimization']
        },
        {
          name: 'AI Auto Email Responder',
          href: '/services/ai-auto-email-responder',
          icon: MessageCircle,
          description: 'Intelligent email automation and responses',
          features: ['Smart categorization', 'Auto-responses', 'CRM integration']
        },
        {
          name: 'Email Sequencer',
          href: '/services/email-sequencer',
          icon: MessageCircle,
          description: 'Automated email follow-up sequences',
          features: ['Sequence automation', 'Personalization', 'Performance tracking']
        }
      ]
    },
    {
      category: 'AI Business Operations',
      solutions: [
        {
          name: 'AI HR Talent Platform',
          href: '/services/ai-hr-talent-platform',
          icon: Users,
          description: 'AI-powered HR and talent management',
          features: ['Candidate screening', 'Performance analytics', 'Employee engagement']
        },
        {
          name: 'AI Supply Chain Optimization',
          href: '/services/ai-supply-chain-optimization',
          icon: Truck,
          description: 'Intelligent supply chain management',
          features: ['Demand forecasting', 'Inventory optimization', 'Route planning']
        },
        {
          name: 'Micro CRM',
          href: '/services/micro-crm',
          icon: Building,
          description: 'AI-enhanced customer relationship management',
          features: ['Contact management', 'Sales tracking', 'Customer insights']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize workflows'
    },
    {
      icon: Brain,
      title: 'Intelligent Insights',
      description: 'Get actionable insights from your data'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'AI-powered threat detection and prevention'
    },
    {
      icon: TrendingUp,
      title: 'Better ROI',
      description: 'Improve business outcomes and reduce costs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Solutions - Zion Tech Group"
        description="Discover our comprehensive AI solutions including business intelligence, workflow automation, cybersecurity, and customer experience optimization."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Solutions That
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Transform</span>
              <br />Your Business
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Leverage the power of artificial intelligence to automate workflows, gain insights, 
              and create competitive advantages across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI solutions are designed to deliver measurable business value with 
              cutting-edge technology and expert implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions by Category */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our AI solutions organized by business function and industry vertical.
            </p>
          </div>

          <div className="space-y-16">
            {aiSolutions.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.solutions.map((solution, solutionIndex) => (
                    <Link
                      key={solutionIndex}
                      to={solution.href}
                      className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105 hover:bg-slate-700/50"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                          <solution.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                            {solution.name}
                          </h4>
                          <p className="text-slate-300 text-sm mb-3">
                            {solution.description}
                          </p>
                          <ul className="space-y-1">
                            {solution.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-xs text-slate-400">
                                <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 border border-cyan-400/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our AI solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
