
import React from 'react'"'
import { ArrowRight } from 'lucide-react'"'
import { CheckCircle } from 'lucide-react'"'
import { Star } from 'lucide-react'"'
import { Users } from 'lucide-react'"'
import { Clock } from 'lucide-react'"'
import { DollarSign } from 'lucide-react'"'
import { Shield } from 'lucide-react'"'
import { Code } from 'lucide-react'"'
import { Database } from 'lucide-react'"'
import { Mail } from 'lucide-react'"'
import { Settings } from 'lucide-react'"'
import { Target } from 'lucide-react'"'
import { TrendingUp } from 'lucide-react'"'
import { PieChart } from 'lucide-react'"'
import { MessageSquare } from 'lucide-react'"'
import { Heart } from 'lucide-react'"'
import { Globe } from 'lucide-react'"'
import { Smartphone } from 'lucide-react'"'
import { Network } from 'lucide-react'"'
import { Lock } from 'lucide-react'"'
import { Cpu } from 'lucide-react'"'
import { Wifi } from 'lucide-react'"'
import { Building2 } from 'lucide-react'"'
import { Briefcase } from 'lucide-react'"'
import { Lightbulb } from 'lucide-react'"'
import { Link } from 'react-router-dom'"'
import EnhancedSEO from '../components/EnhancedSEO'";
const Page = () => {
  const features = [
    {"
      icon: <CheckCircle className ="w-8 h-8" />,"""'
      title: 'Advanced Features','"'
      description: 'Cutting-edge technology for maximum efficiency'""
    },
    {
      icon: <Shield className ="w-8 h-8" />,"""'
      title: 'Secure & Reliable','"'
      description: 'Enterprise-grade security and 99.9% uptime'""
    },
    {
      icon: <Users className ="w-8 h-8" />,"""'
      title: 'Expert Support','"'
      description: '24/7 support from our team of specialists'";
    }
  ]"
  return (
    <>
      <EnhancedSEO title ="Page - Zion Tech Group""""
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""""
        keywords="page, business solutions, technology services, professional services""""
      />
      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""""
        {/* Hero Section */}
        <section className ="relative py-20 px-4 sm:px-6 lg:px-8">""""
          <div className ="max-w-7xl mx-auto text-center">""""
            <h1 className ="text-4xl md:text-6xl font-bold text-white mb-6">""""
              Page
              <span className ="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">""""
                Solutions
              </span>
            </h1>
            <p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""""
              Professional page services designed to help your business succeed and grow.
            </p>
            <div className ="flex flex-col sm:flex-row gap-4 justify-center">""""
              <Link to ="/contact""""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""""
              >
                Get Started
                <ArrowRight className ="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""""
              </Link>
              <Link to ="/demo""""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""""
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className ="py-20 px-4 sm:px-6 lg:px-8">""""
          <div className ="max-w-7xl mx-auto">""""
            <div className ="text-center mb-16">""""
              <h2 className ="text-3xl md:text-4xl font-bold text-white mb-4">""""
                Why Choose Our Page Services?
              </h2>
              <p className ="text-xl text-gray-300 max-w-2xl mx-auto">""""
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div className ="grid grid-cols-1 md:grid-cols-3 gap-8">""""
              {features.map((feature, index) => (
                <div key ={index} className="text-center">""""
                  <div className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""""
                    {feature.icon}
                  </div>
                  <h3 className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>""""
                  <p className ="text-gray-300">{feature.description}</p>""""
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className ="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">""""
          <div className ="max-w-4xl mx-auto text-center">""""
            <h2 className ="text-3xl md:text-4xl font-bold text-white mb-6">""""
              Ready to Get Started?
            </h2>
            <p className ="text-xl text-gray-300 mb-8">"""'
              Let's discuss how our page services can help your business succeed.'""
            </p>
            <div className ="flex flex-col sm:flex-row gap-4 justify-center">""""
              <Link to ="/contact""""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""""
              >
                Contact Us
                <ArrowRight className ="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""""
              </Link>
              <Link to ="/services""""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""";
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
const page = React.lazy(() => import('./page'));"
export default page'

import React from 'react"
import { Link } from 'react-router-dom'
import { Calendar, Users, BarChart3, CheckCircle, ArrowRight, Clock, Target, Zap, Shield, Globe } from 'lucide-react'import FuturisticCard from '../components/FuturisticCard'
import FuturisticButton from '../components/FuturisticButton'
import ResponsiveContainer from '../components/ResponsiveContainer'
import EnhancedSEO from '../components/EnhancedSEO'

import FuturisticCard from '../components/FuturisticCard',"'
      import FuturisticButton from '../components/FuturisticButton',"'
      import ResponsiveContainer from '../components/ResponsiveContainer',"'
      import EnhancedSEO from '../components/EnhancedSEO;"
,
      const ProjectManagementToolPage = () => {"}""
        """
  const features = [",""
        """
    {""}""
      title: "Task Management",""""
      description: "Create, assign, and track tasks with drag-and-drop functionality",""""
      icon: <CheckCircle className ="w-8 h-8" />,""""
      benefits: ["Visual task boards", "Priority settings", "Due date tracking", "Progress monitoring"]""
    },",""
        """
    {"}""
        """
      title: "Team Collaboration",""""
      description: "Real-time collaboration tools for seamless team communication",""""
      icon: <Users className ="w-8 h-8" />,""""
      benefits: ["Team chat", "File sharing", "Comment threads", "Notification system"]""
    },",""
        """
    {"}""
        """
      title: "Project Planning",""""
      description: "Comprehensive project planning with Gantt charts and timelines",""""
      icon: <Calendar className ="w-8 h-8" />,""""
      benefits: ["Gantt charts", "Milestone tracking", "Resource allocation", "Timeline management"]""
    },",""
        """
    {"}""
        """
      title: "Analytics & Reporting",""""
      description: "Advanced analytics to track project performance and team productivity",""""
      icon: <className="w-8 h-8" />,""""
      benefits: ["Performance metrics", "Custom reports", "Data visualization", "Export capabilities"]""
    },",""
        """
    {"}""
        """
      title: "Time Tracking",""""
      description: "Built-in time tracking for accurate project billing and productivity analysis",""""
      icon: <className="w-8 h-8" />,""""
      benefits: ["Automatic tracking", "Manual entry", "Billable hours", "Productivity insights"]""
    },",""
        """
    {"}""
        """
      title: "Integration Hub",""""
      description: "Connect with your favorite tools and services for seamless workflow",""""
      icon: <className="w-8 h-8" />,""""
      benefits: ["API integrations", "Webhook support", "Third-party apps", "Custom connectors"]";
    };
  ]"
,
      const pricing = [",""
        """
    {"}""
        """
      name: "Starter",""""
      price: "$29",""""
      period: "per month",""""
      description: "Perfect for small teams getting started",",""
        """
      features: [",""
        """
        "Up to 5 team members",""""
        "Unlimited projects",""""
        "Basic task management",""""
        "Email support",""""
        "5GB storage""
      ],",""
        """
      popular: false",""
        """
    },",""
        """
    {"}""
        """
      name: "Professional",""""
      price: "$79",""""
      period: "per month",""""
      description: "Ideal for growing teams and businesses",",""
        """
      features: [",""
        """
        "Up to 25 team members",""""
        "Advanced analytics",""""
        "Time tracking",""""
        "Priority support",""""
        "50GB storage",""""
        "API access""
      ],",""
        """
      popular: true",""
        """
    },",""
        """
    {"}""
        """
      name: "Enterprise",""""
      price: "$199",""""
      period: "per month",""""
      description: "For large organizations with advanced needs",",""
        """
      features: [",""
        """
        "Unlimited team members",""""
        "Custom integrations",""""
        "Advanced security",""""
        "Dedicated support",""""
        "Unlimited storage",""""
        "Custom reporting""
      ],",""
        """
      popular: false",""
        "";
    };
  ]"
,
      const benefits = [",""
        """
    {"}""
        """
      title: "Increase Productivity",""""
      description: "Streamline workflows and boost team efficiency by up to 40%",""""
      icon: <Target className ="w-6 h-6" />",""
        """
    },",""
        """
    {""}""
      title: "Better Visibility",""""
      description: "Get real-time insights into project progress and team performance",""""
      icon: <className="w-6 h-6" />",""
        """
    },",""
        """
    {""}""
      title: "Reduce Costs",""""
      description: "Eliminate the need for multiple tools and reduce software costs",""""
      icon: <className="w-6 h-6" />",""
        """
    },",""
        """
    {""}""
      title: "Scale Easily",""""
      description: "Grow your team and projects without changing your workflow",""""
      icon: <Globe className ="w-6 h-6" />""";
    };

const ProjectManagementToolPage = () => {
  const features = [
    {"
      title: "Task Management",""
      description: "Create, assign, and track tasks with drag-and-drop functionality",""
      icon: <CheckCircle className ="w-8 h-8" />,""
      benefits: ["Visual task boards", "Priority settings", "Due date tracking", "Progress monitoring"]""
    },
    {
      title: "Team Collaboration",""
      description: "Real-time collaboration tools for seamless team communication",""
      icon: <Users className ="w-8 h-8" />,""
      benefits: ["Team chat", "File sharing", "Comment threads", "Notification system"]""
    },
    {
      title: "Project Planning",""
      description: "Comprehensive project planning with Gantt charts and timelines",""
      icon: <Calendar className ="w-8 h-8" />,""
      benefits: ["Gantt charts", "Milestone tracking", "Resource allocation", "Timeline management"]""
    },
    {
      title: "Analytics & Reporting",""
      description: "Advanced analytics to track project performance and team productivity",""
      icon: <BarChart3 className ="w-8 h-8" />,""
      benefits: ["Performance metrics", "Custom reports", "Data visualization", "Export capabilities"]""
    },
    {
      title: "Time Tracking",""
      description: "Built-in time tracking for accurate project billing and productivity analysis",""
      icon: <Clock className ="w-8 h-8" />,""
      benefits: ["Automatic tracking", "Manual entry", "Billable hours", "Productivity insights"]""
    },
    {
      title: "Integration Hub",""
      description: "Connect with your favorite tools and services for seamless workflow",""
      icon: <Zap className ="w-8 h-8" />,""
      benefits: ["API integrations", "Webhook support", "Third-party apps", "Custom connectors"]""
    }
  ];

  const pricing = [
    {"
      name: "Starter",""
      price: "$29",""
      period: "per month",""
      description: "Perfect for small teams getting started",""
      features: [
        "Up to 5 team members",""
        "Unlimited projects",""
        "Basic task management",""
        "Email support",""
        "5GB storage"""
      ],
      popular: false
    },
    {
      name: "Professional",""
      price: "$79",""
      period: "per month",""
      description: "Ideal for growing teams and businesses",""
      features: [
        "Up to 25 team members",""
        "Advanced analytics",""
        "Time tracking",""
        "Priority support",""
        "50GB storage",""
        "API access"""
      ],
      popular: true
    },
    {
      name: "Enterprise",""
      price: "$199",""
      period: "per month",""
      description: "For large organizations with advanced needs",""
      features: [
        "Unlimited team members",""
        "Custom integrations",""
        "Advanced security",""
        "Dedicated support",""
        "Unlimited storage",""
        "Custom reporting"""
      ],
      popular: false
    }
  ];

  const benefits = [
    {"
      title: "Increase Productivity",""
      description: "Streamline workflows and boost team efficiency by up to 40%",""
      icon: <Target className ="w-6 h-6" />",""
    },
    {
      title: "Better Visibility",""
      description: "Get real-time insights into project progress and team performance",""
      icon: <BarChart3 className ="w-6 h-6" />",""
    },
    {
      title: "Reduce Costs",""
      description: "Eliminate the need for multiple tools and reduce software costs",""
      icon: <Shield className ="w-6 h-6" />",""
    },
    {
      title: "Scale Easily",""
      description: "Grow your team and projects without changing your workflow",""
      icon: <Globe className ="w-6 h-6" />",";
    }

  ]"
,
      return (<div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">",);"
        """
      <EnhancedSEO",>""
        """
        title="Project Management Tool - Zion Tech Group | Team Collaboration & Task Management",""
      description="Powerful project management tool with task management, team collaboration, _analytics, and time tracking. Streamline your workflow and boost productivity.",""
      keywords="project management tool, _task management, _team collaboration, _project planning, _time tracking, productivity software",""
      canonical="https://ziontechgroup.com/project-management-tool" />""";
      {/* Hero Section */}"
      <section className ="pt-20 pb-16 px-4 sm:px-6 lg:px-8">""""
        <ResponsiveContainer className ="text-center">""""
          <h1 className ="text-4xl md:text-6xl font-bold text-white mb-6">""""
            <span className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">",""
        """
              Project Management Tool",""
        """
            </span>",""
        """
          </h1>",""
        """
          <p className ="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">",""
        """
            Streamline your projects with our comprehensive project management solution.",""
        """
            Manage tasks, _collaborate with your team, and track progress all in one place.",""
        """
          </p>",""
        """
          <div className ="flex flex-col sm:flex-row gap-4 justify-center">",""
        """
            <FuturisticButton",>""
        """
              href="/contact",""
      variant="primary",""
      size="lg",""
      icon={<ArrowRight className ="w-5 h-5" />}"
            >",""
        """
              Start Free Trial",""
        """
            </FuturisticButton>",""
        """
            <FuturisticButton",>""
        """
              href="/demo",""
      variant="outline",""
      size="lg","'
      icon={<Globe className ="w-5 h-5" />};
            >",""
        """
              Watch Demo",""
        """
            </FuturisticButton>",""
        """
          </div>",""
        """
        </ResponsiveContainer>",""
        """
      </section>",""
        "";
      {/* Features Section */}"
      <section className ="py-20 px-4 sm:px-6 lg:px-8">",""
        """
        <ResponsiveContainer>",""
        """
          <div className ="text-center mb-16">""""
            <h2 className ="text-3xl md:text-4xl font-bold text-white mb-6">",""
        """
              Powerful Features",""
        """
            </h2>""""
            <p className ="text-xl text-gray-300 max-w-4xl mx-auto">",""
        """
              Everything you need to manage projects effectively and keep your team productive.",""
        """
            </p>",""
        """
          </div>",""
        """
          <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">""""
            {features.map((feature, index) => (<FuturisticCard key ={index} className="h-full">"");"
                <div className ="text-center mb-6">""""
                  <div className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">",""
        "";
                    {feature.icon}"
                  </div>",""
        """
                  <h3 className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>""""
                  <p className ="text-gray-300 mb-4">{feature.description}</p>",""
        """
                </div>",""
        """
                <ul className ="space-y-2">",""
        """
                  {feature.benefits.map((benefit, benefitIndex) => (",)}""
        """
                    <li key ={benefitIndex} className="flex items-center text-sm text-gray-300">""""
                      <CheckCircle className ="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />",""
        "";
                      {benefit}"
                    </li>",""
        "";
                  ))}"
                </ul>",""
        """
              </FuturisticCard>",""
        "";
            ))}"
          </div>",""
        """
        </ResponsiveContainer>",""
        """
      </section>""";
      {/* Pricing Section */}"
      <section className ="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">",""
        """
        <ResponsiveContainer>",""
        """
          <div className ="text-center mb-16">""""
            <h2 className ="text-3xl md:text-4xl font-bold text-white mb-6">",""
        """
              Simple, Transparent Pricing",""
        """
            </h2>""""
            <p className ="text-xl text-gray-300 max-w-4xl mx-auto">",""
        """
              Choose the plan that fits your team size and needs. No hidden fees, no surprises.",""
        """
            </p>",""
        """
          </div>",""
        """
          <div className ="grid grid-cols-1 md:grid-cols-3 gap-8">",""
        """
            {pricing.map((plan, index) => (",)}""
        ""'
              <FuturisticCard key ={index} className={`h-full ${plan.popular ? 'ring-2 ring-cyan-400' : '}`}>","'
        """
                {plan.popular && (",)}""
        """
                  <div className ="absolute -top-4 left-1/2 transform -translate-x-1/2">""""
                    <span className ="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">",""
        """
                      Most Popular",""
        """
                    </span>",""
        """
                  </div>",""
        "";
                )}"
                <div className ="text-center mb-6">""""
                  <h3 className ="text-2xl font-bold text-white mb-2">{plan.name}</h3>""""
                  <div className ="text-4xl font-bold text-cyan-400 mb-2">""";
                    {plan.price}"
                    <span className ="text-lg text-gray-400">{plan.period}</span>",""
        """
                  </div>",""
        """
                  <p className ="text-gray-300 text-sm">{plan.description}</p>",""
        """
                </div>",""
        """
                <ul className ="space-y-3 mb-8">",""
        """
                  {plan.features.map((feature, featureIndex) => (",)}""
        """
                    <li key ={featureIndex} className="flex items-center text-sm text-gray-300">""""
                      <CheckCircle className ="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />",""
        "";
                      {feature}"
                    </li>",""
        "";
                  ))}"
                </ul>",""
        """
                <FuturisticButton",>""
        """
                  href="/contact",""
      variant={plan.popular ? "primary" : "outline"},""
      size="sm",""
      className="w-full"
                >",""
        """
                  Get Started",""
        """
                </FuturisticButton>",""
        """
              </FuturisticCard>",""
        "";
            ))}"
          </div>",""
        """
        </ResponsiveContainer>",""
        """
      </section>""";
      {/* Benefits Section */}"
      <section className ="py-20 px-4 sm:px-6 lg:px-8">",""
        """
        <ResponsiveContainer>",""
        """
          <div className ="text-center mb-16">""""
            <h2 className ="text-3xl md:text-4xl font-bold text-white mb-6">",""
        """
              Why Choose Our Project Management Tool?",""
        """
            </h2>""""
            <p className ="text-xl text-gray-300 max-w-4xl mx-auto">",""
        """
              Join thousands of teams who have transformed their project management with our solution.",""
        """
            </p>",""
        """
          </div>",""
        """
          <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">",""
        """
            {benefits.map((benefit, index) => (",)}""
        """
              <div key ={index} className="text-center">""""
                <div className ="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">",""
        "";
                  {benefit.icon}"
                </div>",""
        """
                <h3 className ="text-lg font-semibold text-white mb-2">{benefit.title}</h3>""""
                <p className ="text-gray-300 text-sm">{benefit.description}</p>",""
        """
              </div>",""
        "";
            ))}"
          </div>",""
        """
        </ResponsiveContainer>",""
        """
      </section>""";
      {/* CTA Section */}"
      <section className ="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">""""
        <ResponsiveContainer className ="text-center">""""
          <h2 className ="text-3xl md:text-4xl font-bold text-white mb-6">",""
        """
            Ready to Transform Your Project Management?",""
        """
          </h2>""""
          <p className ="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">",""
        ""'
            Start your free trial today and see how our project management tool can boost your team's productivity.",""
        """
          </p>""""
          <div className ="flex flex-col sm:flex-row gap-4 justify-center">",""
        """
            <FuturisticButton",>""
        """
              href="/contact",""
      variant="primary",""
      size="lg",""
      icon={<ArrowRight className ="w-5 h-5" />}"
            >",""
        """
              Start Free Trial",""
        """
            </FuturisticButton>",""
        """
            <FuturisticButton",>""
        """
              href="/demo",""
      variant="outline",""
      size="lg",""
      icon={<Globe className ="w-5 h-5" />}"
            >",""
        """
              Watch Demo",""
        """
            </FuturisticButton>",""
        """
          </div>",""
        """
        </ResponsiveContainer>",""
        """
      </section>",""
        """
    </div>""";
  )
    },
    {}
,
      export default ProjectManagementToolPage;
;

const ComponentName = () => {
  return ("
    <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
      <EnhancedSEO title ="Project Management Tool - Zion Tech Group | Team Collaboration & Task Management"""
        description="Powerful project management tool with task management, team collaboration, _analytics, and time tracking. Streamline your workflow and boost productivity."""
        keywords="project management tool, _task management, _team collaboration, _project planning, _time tracking, productivity software"""
        canonical="https: //ziontechgroup.com/project-management-tool"",""
      />

      {/* Hero Section */}
      <section className ="pt-20 pb-16 px-4 sm: px-6 lg:px-8">""
        <ResponsiveContainer className ="text-center">""
          <h1 className ="text-4xl md:text-6xl font-bold text-white mb-6">""
            <span className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">""
              Project Management Tool
            </span>
          </h1>
          <p className ="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">",""
            Streamline your projects with our comprehensive project management solution. 
            Manage tasks, _collaborate with your team, and track progress all in one place.
          </p>
          <div className ="flex flex-col sm: flex-row gap-4 justify-center">""
            <FuturisticButton href ="/contact"""
              variant="primary"""
              size="lg"",""
              icon={<ArrowRight className ="w-5 h-5" />}""
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton href ="/demo"""
              variant="outline"""
              size="lg"""
              icon={<Globe className ="w-5 h-5" />}""
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className ="py-20 px-4 sm: px-6 lg:px-8">""
        <ResponsiveContainer>
          <div className ="text-center mb-16">""
            <h2 className ="text-3xl md:text-4xl font-bold text-white mb-6">""
              Powerful Features
            </h2>
            <p className ="text-xl text-gray-300 max-w-4xl mx-auto">""
              Everything you need to manage projects effectively and keep your team productive.
            </p>
          </div>
          <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">",""
            {features.map((feature, index) => (<FuturisticCard key ={index} className="h-full">""
                <div className ="text-center mb-6">""
                  <div className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">""
                    {feature.icon}
                  </div>
                  <h3 className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                  <p className ="text-gray-300 mb-4">{feature.description}</p>""
                </div>
                <ul className ="space-y-2">""
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key ={benefitIndex} className="flex items-center text-sm text-gray-300">""
                      <CheckCircle className ="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />""
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
      <section className ="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">""
        <ResponsiveContainer>
          <div className ="text-center mb-16">""
            <h2 className ="text-3xl md:text-4xl font-bold text-white mb-6">","'
              Simple, Transparent Pricing
            </h2>
            <p className ="text-xl text-gray-300 max-w-4xl mx-auto">"'
              Choose the plan that fits your team size and needs. No hidden fees, no surprises.
            </p>
          </div>
          <div className ="grid grid-cols-1 md: grid-cols-3 gap-8">","'
            {pricing.map((plan, index) => (
              <FuturisticCard key ={index} className={`h-full ${plan.popular ? 'ring-2 ring-cyan-400'  '}`}>"'
                {plan.popular && (
                  <div className ="absolute -top-4 left-1/2 transform -translate-x-1/2">""
                    <span className ="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">""
                      Most Popular
                    </span>
                  </div>
                )}
                <div className ="text-center mb-6">""
                  <h3 className ="text-2xl font-bold text-white mb-2">{plan.name}</h3>""
                  <div className ="text-4xl font-bold text-cyan-400 mb-2">""
                    {plan.price}
                    <span className ="text-lg text-gray-400">{plan.period}</span>""
                  </div>
                  <p className ="text-gray-300 text-sm">{plan.description}</p>""
                </div>
                <ul className ="space-y-3 mb-8">""
                  {plan.features.map((feature, featureIndex) => (
                    <li key ={featureIndex} className="flex items-center text-sm text-gray-300">""
                      <CheckCircle className ="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />""
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton href ="/contact"""
                  variant={plan.popular ? "primary"  "outline"}""
                  size="sm"""
                  className="w-full"""
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className ="py-20 px-4 sm: px-6 lg:px-8">""
        <ResponsiveContainer>
          <div className ="text-center mb-16">""
            <h2 className ="text-3xl md:text-4xl font-bold text-white mb-6">""
              Why Choose Our Project Management Tool?
            </h2>
            <p className ="text-xl text-gray-300 max-w-4xl mx-auto">""
              Join thousands of teams who have transformed their project management with our solution.
            </p>
          </div>
          <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">",""
            {benefits.map((benefit, index) => (
              <div key ={index} className="text-center">""
                <div className ="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">""
                  {benefit.icon}
                </div>
                <h3 className ="text-lg font-semibold text-white mb-2">{benefit.title}</h3>""
                <p className ="text-gray-300 text-sm">{benefit.description}</p>""
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className ="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">""
        <ResponsiveContainer className ="text-center">""
          <h2 className ="text-3xl md:text-4xl font-bold text-white mb-6">"""'
            Ready to Transform Your Project Management?
          </h2>
          <p className ="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">"'
            Start your free trial today and see how our project management tool can boost your team's productivity."'
          </p>
          <div className ="flex flex-col sm:flex-row gap-4 justify-center">""
            <FuturisticButton href ="/contact"""
              variant="primary"""
              size="lg"",""
              icon={<ArrowRight className ="w-5 h-5" />}""
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton href ="/demo"""
              variant="outline"""
              size="lg""""'
              icon={<Globe className ="w-5 h-5" />}"'
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
}"

export default ProjectManagementToolPage;

}


]