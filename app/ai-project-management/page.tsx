'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CogIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserGroupIcon,
  CalendarIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export default function AIProjectManagementPage() {
  const features = [
    "AI-powered task prioritization and scheduling",
    "Intelligent resource allocation and workload balancing",
    "Automated deadline prediction and risk assessment",
    "Smart team collaboration and communication",
    "Real-time project health monitoring",
    "Predictive analytics for project success",
    "Automated progress tracking and reporting",
    "AI-driven project recommendations",
    "Integration with 100+ project management tools",
    "Custom workflow automation",
    "Budget optimization and cost tracking",
    "Client communication automation"
  ];

  const benefits = [
    "40% faster project completion",
    "60% reduction in project delays",
    "25% cost savings",
    "95% on-time delivery rate",
    "Real-time visibility",
    "Automated reporting"
  ];

  const industries = [
    { name: "Software Development", icon: "💻", description: "Agile project management with AI sprint planning" },
    { name: "Marketing Agencies", icon: "📈", description: "Campaign management and client reporting automation" },
    { name: "Construction", icon: "🏗️", description: "Timeline optimization and resource management" },
    { name: "Healthcare", icon: "🏥", description: "Compliance tracking and patient care coordination" },
    { name: "Education", icon: "🎓", description: "Curriculum planning and student progress tracking" },
    { name: "Consulting", icon: "💼", description: "Client project delivery and resource optimization" }
  ];

  const pricing = {
    starter: {
      price: "$149",
      period: "month",
      projects: 5,
      users: 10,
      features: [
        "Up to 5 active projects",
        "10 team members",
        "Basic AI task management",
        "Standard integrations",
        "Email support",
        "Basic reporting"
      ]
    },
    professional: {
      price: "$299",
      period: "month",
      projects: 25,
      users: 50,
      features: [
        "Up to 25 active projects",
        "50 team members",
        "Advanced AI analytics",
        "All integrations",
        "Priority support",
        "Advanced reporting",
        "Custom workflows",
        "API access"
      ]
    },
    enterprise: {
      price: "$599",
      period: "month",
      projects: "Unlimited",
      users: "Unlimited",
      features: [
        "Unlimited projects",
        "Unlimited team members",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Project Management Suite - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered project management that automates planning, resource allocation, and risk assessment. Complete projects 40% faster with intelligent automation." />
        <meta name="keywords" content="AI project management, project automation, resource allocation, risk assessment, project planning, team collaboration" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Project Management Suite
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Intelligent project management that thinks ahead and delivers results
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Transform your project delivery with AI-powered planning, resource optimization, 
              and risk prediction. Our intelligent system learns from your team's patterns 
              and automatically optimizes workflows for maximum efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Intelligent Project Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI capabilities that revolutionize how you manage and deliver projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-orange-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized AI models tailored to your industry's unique project management needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of teams achieving unprecedented project success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChartBarIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Process Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-orange-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How Our AI Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A four-step process that transforms your project management approach
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Analyze</h3>
              <p className="text-gray-300">
                AI analyzes your project data, team patterns, and historical performance to understand your workflow.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Optimize</h3>
              <p className="text-gray-300">
                Intelligent algorithms optimize task allocation, timelines, and resource distribution for maximum efficiency.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Predict</h3>
              <p className="text-gray-300">
                Advanced prediction models identify potential risks and bottlenecks before they impact your project.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Deliver</h3>
              <p className="text-gray-300">
                Automated workflows and real-time monitoring ensure your projects are delivered on time and on budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing that scales with your project management needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([plan, details], index) => (
              <div key={plan} className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${index === 1 ? 'border-orange-500 relative' : 'border-slate-600'}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan}</h3>
                <div className="text-4xl font-bold text-orange-400 mb-6">
                  {details.price}<span className="text-lg text-gray-400">/{details.period}</span>
                </div>
                <div className="mb-6">
                  <div className="text-gray-300 mb-2">
                    <span className="font-semibold">{details.projects}</span> projects
                  </div>
                  <div className="text-gray-300">
                    <span className="font-semibold">{details.users}</span> team members
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {details.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-orange-400 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`w-full ${index === 1 ? 'bg-white text-orange-900' : 'bg-gradient-to-r from-orange-600 to-red-600 text-white'} px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-all`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-orange-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Start your free trial and experience the future of intelligent project management
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Watch Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-orange-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-orange-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}