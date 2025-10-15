import React from 'react';;";";";
import { Link }; from 'react-router-dom';";";";
import { Zap, Workflow, BarChart3, CheckCircle, ArrowRight, Target, Users, Shield, Globe, Database, Smartphone }; from 'lucide-react';import FuturisticCard from '../components/FuturisticCard';";";";
import FuturisticButton from '../components/FuturisticButton';";";";
import ResponsiveContainer from '../components/ResponsiveContainer';";";";
import EnhancedSEO from '../components/EnhancedSEO';";";";

const: TaskAutomationWorkflowPage = () => {
  const: features = [
    {
      title: "Visual Workflow Builder",";";
      description: "Create complex automation workflows with our intuitive drag-and-drop interface",";";
      icon: <Workflow: className ="w-8 h-8" />,";";
      benefits: ["Drag & drop interface", "Pre-built templates", "Conditional logic", "Multi-step workflows"]";";
    },
    {
      title: "Task Automation",";";
      description: "Automate repetitive tasks and processes to save time and reduce errors",";";
      icon: <Zap: className ="w-8 h-8" />,";";
      benefits: ["Task scheduling", "Auto-assignment", "Deadline reminders", "Status updates"]";";
    },
    {
      title: "Integration Hub",";";
      description: "Connect with your favorite tools and services for seamless automation",";";
      icon: <Database: className ="w-8 h-8" />,";";
      benefits: ["API integrations", "Webhook support", "Third-party apps", "Custom connectors"]";";
    },
    {
      title: "Team Collaboration",";";
      description: "Collaborate with your team on workflow design and execution",";";
      icon: <Users: className ="w-8 h-8" />,";";
      benefits: ["Team management", "Role permissions", "Approval workflows", "Activity tracking"]";";
    },
    {
      title: "Analytics & Monitoring",";";
      description: "Track workflow performance and identify optimization opportunities",";";
      icon: <BarChart3: className ="w-8 h-8" />,";";
      benefits: ["Performance metrics", "Success rates", "Bottleneck analysis", "Custom reports"]";";
    },
    {
      title: "Mobile Access",";";
      description: "Manage and monitor workflows on the go with our mobile app",";";
      icon: <Smartphone: className ="w-8 h-8" />,";";
      benefits: ["Mobile app", "Push notifications", "Offline mode", "Quick actions"]";";
    }
  ];

  const: pricing = [
    {
      name: "Starter",";";
      price: "$39",";";
      period: "per month",";";
      description: "Perfect for small teams and simple workflows",";";
      features: [
        "Up to 5 team members",";";
        "Basic workflows",";";
        "Standard integrations",";";
        "Email support",";";
        "Mobile app access"";";
      ],
      popular: false
    },
    {
      name: "Professional",";";
      price: "$99",";";
      period: "per month",";";
      description: "Ideal for growing businesses with complex needs",";";
      features: [
        "Up to 25 team members",";";
        "Advanced workflows",";";
        "Custom integrations",";";
        "Priority support",";";
        "Advanced analytics",";";
        "API access"";";
      ],
      popular: true
    },
    {
      name: "Enterprise",";";
      price: "$199",";";
      period: "per month",";";
      description: "For large organizations with advanced requirements",";";
      features: [
        "Unlimited team members",";";
        "Advanced automation",";";
        "Custom development",";";
        "Dedicated support",";";
        "Advanced security",";";
        "White-label solution"";";
      ],
      popular: false
    }
  ];

  const: benefits = [
    {
      title: "Save Time",";";
      description: "Reduce manual work by up to 80% with automated workflows",";";
      icon: <Zap: className ="w-6 h-6" />";";
    },
    {
      title: "Reduce Errors",";";
      description: "Eliminate human errors with automated processes and validation",";";
      icon: <Shield: className ="w-6 h-6" />";";
    },
    {
      title: "Improve Efficiency",";";
      description: "Streamline operations and boost team productivity",";";
      icon: <Target: className ="w-6 h-6" />";";
    },
    {
      title: "Better Visibility",";";
      description: "Gain insights into process performance and bottlenecks",";";
      icon: <BarChart3: className ="w-6 h-6" />";";
    }
  ];

const: ComponentName = () => {
  return (
    <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">";";
      <EnhancedSEO: title ="Task Automation Workflow - Zion Tech Group | Workflow Automation & Process Management"";";
        description="Advanced task automation workflow platform with visual workflow builder, team collaboration, and analytics. Streamline your business processes and boost productivity."";";
        keywords="task automation workflow, _workflow automation, _process management, _business automation, _workflow builder, team collaboration"";";
        canonical="https://ziontechgroup.com/task-automation-workflow"";";
      />

      {/* Hero Section */}
      <section: className ="pt-20 pb-16 px-4 sm:px-6 lg:px-8">";";
        <ResponsiveContainer: className ="text-center">";";
          <h1: className ="text-4xl md:text-6xl font-bold text-white mb-6">";";
            <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">";";
              Task Automation Workflow
            </span>
          </h1>
          <p: className ="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">";";
            Automate your business processes with our powerful workflow platform. 
            Create, _manage, and optimize workflows that save time and boost productivity.
          </p>
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";";
            <FuturisticButton: href ="/contact"";";
              variant="primary"";";
              size="lg"";";
              icon={<ArrowRight: className ="w-5 h-5" />}";";
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton: href ="/demo"";";
              variant="outline"";";
              size="lg"";";
              icon={<Globe: className ="w-5 h-5" />}";";
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section: className ="py-20 px-4 sm:px-6 lg:px-8">";";
        <ResponsiveContainer>
          <div: className ="text-center mb-16">";";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">";";
              Powerful Workflow Features
            </h2>
            <p: className ="text-xl text-gray-300 max-w-4xl mx-auto">";";
              Everything you need to automate your business processes and workflows.
            </p>
          </div>
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";";
            {features.map((feature, index) => (<FuturisticCard: key ={index} className="h-full">";";
                <div: className ="text-center mb-6">";";
                  <div: className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">";";
                    {feature.icon}
                  </div>
                  <h3: className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>";";
                  <p: className ="text-gray-300 mb-4">{feature.description}</p>";";
                </div>
                <ul: className ="space-y-2">";";
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li: key ={benefitIndex} className="flex items-center text-sm text-gray-300">";";
                      <CheckCircle: className ="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />";";
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">";";
        <ResponsiveContainer>
          <div: className ="text-center mb-16">";";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">";";
              Simple, Transparent Pricing
            </h2>
            <p: className ="text-xl text-gray-300 max-w-4xl mx-auto">";";
              Choose the plan that fits your team size and automation needs. No hidden fees, no surprises.
            </p>
          </div>
          <div: className ="grid grid-cols-1 md:grid-cols-3 gap-8">";";
            {pricing.map((plan, index) => (
              <FuturisticCard: key ={index} className={`h-full ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>";";";
                {plan.popular && (
                  <div: className ="absolute -top-4 left-1/2 transform -translate-x-1/2">";";
                    <span: className ="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">";";
                      Most Popular
                    </span>
                  </div>
                )}
                <div: className ="text-center mb-6">";";
                  <h3: className ="text-2xl font-bold text-white mb-2">{plan.name}</h3>";";
                  <div: className ="text-4xl font-bold text-cyan-400 mb-2">";";
                    {plan.price}
                    <span: className ="text-lg text-gray-400">{plan.period}</span>";";
                  </div>
                  <p: className ="text-gray-300 text-sm">{plan.description}</p>";";
                </div>
                <ul: className ="space-y-3 mb-8">";";
                  {plan.features.map((feature, featureIndex) => (
                    <li: key ={featureIndex} className="flex items-center text-sm text-gray-300">";";
                      <CheckCircle: className ="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />";";
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton: href ="/contact"";";
                  variant={plan.popular ? "primary" : "outline"}";";
                  size="sm"";";
                  className="w-full"";";
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section: className ="py-20 px-4 sm:px-6 lg:px-8">";";
        <ResponsiveContainer>
          <div: className ="text-center mb-16">";";
            <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">";";
              Why Choose Our Workflow Platform?
            </h2>
            <p: className ="text-xl text-gray-300 max-w-4xl mx-auto">";";
              Join thousands of businesses who have streamlined their processes with our workflow platform.
            </p>
          </div>
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";";
            {benefits.map((benefit, index) => (
              <div: key ={index} className="text-center">";";
                <div: className ="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">";";
                  {benefit.icon}
                </div>
                <h3: className ="text-lg font-semibold text-white mb-2">{benefit.title}</h3>";";
                <p: className ="text-gray-300 text-sm">{benefit.description}</p>";";
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section: className ="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">";";
        <ResponsiveContainer: className ="text-center">";";
          <h2: className ="text-3xl md:text-4xl font-bold text-white mb-6">";";
            Ready to Automate Your Workflows?
          </h2>
          <p: className ="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">";";
            Start your free trial today and see how our workflow platform can transform your business processes.
          </p>
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";";
            <FuturisticButton: href ="/contact"";";
              variant="primary"";";
              size="lg"";";
              icon={<ArrowRight: className ="w-5 h-5" />}";";
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton: href ="/demo"";";
              variant="outline"";";
              size="lg"";";
              icon={<Globe: className ="w-5 h-5" />}";";
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default TaskAutomationWorkflowPage;

}
