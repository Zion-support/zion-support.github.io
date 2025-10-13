import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, Code, Cloud, Shield, Zap, Users, Award, BarChart3 } from 'lucide-react';

const TaskAutomationWorkflowPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Task Automation Workflow - Zion Tech Group | Professional Technology Solutions</title>
        <meta name="description" content="Professional task automation workflow services and solutions. Expert implementation and support for your business needs." />
        <meta name="keywords" content="task automation workflow, professional services, business solutions, technology consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
=======
import { ArrowRight, CheckCircle, Zap, Workflow, Clock, Target, BarChart3, Shield, Cloud, Settings, Users, TrendingUp } from 'lucide-react';

const TaskAutomationWorkflowPage = () => {
  const features = [
    {
      title: "Visual Workflow Builder",
      description: "Create complex automation workflows with our intuitive drag-and-drop interface",
      icon: <Workflow className="w-8 h-8" />,
      benefits: ["Drag & drop interface", "Pre-built templates", "Conditional logic", "Multi-step workflows"]
    },
    {
      title: "Task Automation",
      description: "Automate repetitive tasks and processes to save time and reduce errors",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Rule-based automation", "Scheduled tasks", "Event triggers", "Custom actions"]
    },
    {
      title: "Process Optimization",
      description: "Identify bottlenecks and optimize your business processes for maximum efficiency",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Process mapping", "Bottleneck analysis", "Performance metrics", "Optimization suggestions"]
    },
    {
      title: "Team Collaboration",
      description: "Enable seamless collaboration with workflow sharing and team management features",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Team workspaces", "Workflow sharing", "Role management", "Collaboration tools"]
    },
    {
      title: "Analytics & Reporting",
      description: "Track workflow performance and generate detailed reports on automation effectiveness",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Performance metrics", "Usage analytics", "Custom reports", "ROI tracking"]
    },
    {
      title: "Integration Hub",
      description: "Connect with your existing tools and services for seamless workflow integration",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["API integrations", "Third-party apps", "Data synchronization", "Custom connectors"]
    }
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Automate repetitive tasks and focus on high-value work",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Reduce Errors",
      description: "Eliminate human errors with automated processes",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Increase Productivity",
      description: "Streamline workflows and boost team productivity",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Scale Operations",
      description: "Handle more work without proportional increase in resources",
      icon: <Cloud className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Task Automation Workflow - Zion Tech Group | Business Process Automation & Workflow Management</title>
        <meta name="description" content="Advanced task automation and workflow management platform. Automate business processes, optimize workflows, and boost team productivity with visual workflow builder." />
        <meta name="keywords" content="task automation, workflow management, business process automation, workflow builder, process optimization, team collaboration" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
              Task Automation Workflow
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
<<<<<<< HEAD
            Professional task automation workflow services and solutions. Expert implementation and support for your business needs.
=======
            Streamline your business processes with powerful automation workflows. 
            Save time, reduce errors, and boost productivity with our comprehensive workflow management platform.
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
<<<<<<< HEAD
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
=======
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Watch Demo
            </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Service",
                description: "Expert task automation workflow solutions tailored to your business needs.",
                icon: <Code className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes to ensure excellence.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock support and maintenance for your peace of mind.",
                icon: <Users className="w-8 h-8" />,
                color: "from-purple-500 to-indigo-500"
              }
            ].map((service, index) => (
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Workflow Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to automate tasks, optimize processes, and streamline your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
<<<<<<< HEAD
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
=======
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Workflow Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business operations with powerful automation and workflow management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our expert team to discuss your task automation workflow requirements and get a customized solution.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
=======
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and see how our workflow automation platform can transform your business processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/micro-saas"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View All Micro SAAS
            </Link>
          </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default TaskAutomationWorkflowPage;
=======
export default TaskAutomationWorkflowPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-fdb6
