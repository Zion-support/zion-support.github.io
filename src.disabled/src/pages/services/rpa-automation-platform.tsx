import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Bot, 
  Zap, 
  Shield, 
  Database, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  ExternalLink,
  Globe,
  FileText,
  BarChart3,
  Network,
  Monitor,
  Settings,
  Workflow
} from 'lucide-react';

export default function RPAAutomationPlatform() {
  const features = [
    {
      icon: Bot,
      title: "Intelligent Automation",
      description: "AI-powered bots that learn and adapt to your processes"
    },
    {
      icon: Workflow,
      title: "Process Orchestration",
      description: "Design and manage complex automation workflows"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with role-based access control"
    },
    {
      icon: BarChart3,
      title: "Analytics & Monitoring",
      description: "Real-time insights into automation performance"
    }
  ];

  const benefits = [
    "Reduce manual work by 80% through automation",
    "Increase productivity by 65% with intelligent bots",
    "Eliminate human errors and improve accuracy",
    "Scale operations without proportional staff increases",
    "Free up employees for higher-value tasks"
  ];

  const useCases = [
    {
      title: "Finance & Accounting",
      description: "Automate invoice processing, expense management, and financial reporting",
      icon: FileText
    },
    {
      title: "Human Resources",
      description: "Streamline recruitment, onboarding, and employee data management",
      icon: Users
    },
    {
      title: "Customer Service",
      description: "Automate ticket routing, response generation, and follow-up processes",
      icon: Monitor
    },
    {
      title: "Data Management",
      description: "Automate data entry, validation, and migration processes",
      icon: Database
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$199/month",
      features: ["Up to 5 bots", "Basic automation", "Email support", "Standard integrations"],
      popular: false
    },
    {
      name: "Professional",
      price: "$499/month",
      features: ["Up to 25 bots", "Advanced automation", "Priority support", "Custom workflows", "Analytics dashboard"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      features: ["Unlimited bots", "AI-powered automation", "Dedicated support", "Custom development", "On-premise deployment"],
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>RPA Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Intelligent RPA automation platform for businesses. Reduce manual work by 80% with AI-powered bots and workflow automation." />
        <meta name="keywords" content="RPA, robotic process automation, workflow automation, business process automation, AI bots" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Bot className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                RPA Automation Platform
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-teal-100 max-w-3xl mx-auto">
                Automate repetitive tasks with intelligent robotic process automation. 
                Reduce manual work by 80% and increase productivity by 65% with AI-powered bots.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="#demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced RPA Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built with cutting-edge automation technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <feature.icon className="h-12 w-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Business Process Automation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Automate processes across all departments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl">
                  <useCase.icon className="h-12 w-12 text-teal-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-gray-700">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your operations with intelligent automation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">80%</div>
                  <div className="text-lg text-gray-700 mb-4">Manual Work Reduction</div>
                  <div className="text-4xl font-bold text-cyan-600 mb-2">65%</div>
                  <div className="text-lg text-gray-700 mb-4">Productivity Increase</div>
                  <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-lg text-gray-700">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                RPA Platform Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Automate your processes with flexible pricing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-lg border-2 ${plan.popular ? 'border-teal-500 relative' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-teal-600 mb-2">{plan.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-teal-600 text-white hover:bg-teal-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Success?
            </h2>
            <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">
              Join forward-thinking businesses using RPA to streamline operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-teal-100">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}