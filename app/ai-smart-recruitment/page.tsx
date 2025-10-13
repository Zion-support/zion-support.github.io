import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  UserGroupIcon, 
  ChartBarIcon, 
  ClockIcon, 
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const AISmartRecruitmentPage = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "AI-Powered Candidate Matching",
      description: "Advanced algorithms analyze resumes, skills, and job requirements to find the perfect match with 95% accuracy."
    },
    {
      icon: VideoCameraIcon,
      title: "Automated Video Interviews",
      description: "AI conducts initial interviews, analyzes responses, and provides detailed candidate assessments."
    },
    {
      icon: ChartBarIcon,
      title: "Predictive Analytics",
      description: "Machine learning models predict candidate success, cultural fit, and retention probability."
    },
    {
      icon: DocumentTextIcon,
      title: "Smart Resume Parsing",
      description: "Extract and structure candidate information from any resume format automatically."
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Intelligent Chatbot Screening",
      description: "24/7 AI chatbot conducts initial candidate screening and answers common questions."
    },
    {
      icon: ClockIcon,
      title: "Automated Scheduling",
      description: "AI manages interview scheduling, sends reminders, and coordinates with all stakeholders."
    }
  ];

  const benefits = [
    "Reduce hiring time by 70%",
    "Improve candidate quality by 60%",
    "Cut recruitment costs by 50%",
    "Eliminate unconscious bias",
    "Scale recruitment processes",
    "Enhance candidate experience"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 job postings",
        "Basic AI matching",
        "Video interview analysis",
        "Email support",
        "Standard reporting"
      ]
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Unlimited job postings",
        "Advanced AI matching",
        "Full video interview suite",
        "Predictive analytics",
        "Priority support",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "per month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "White-label solution",
        "Dedicated account manager",
        "Advanced analytics",
        "API access"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Smart Recruitment - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered recruitment platform that automates hiring processes, improves candidate matching, and reduces time-to-hire by 70%." />
        <meta name="keywords" content="AI recruitment, smart hiring, automated interviews, candidate matching, HR technology" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
            <UserGroupIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Smart Recruitment
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your hiring process with AI-powered recruitment that finds the right candidates 70% faster while reducing costs by 50%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Powerful AI Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Smart Recruitment?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-800/30 rounded-lg p-4">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan.name === 'Professional' 
                  ? 'border-purple-500 ring-2 ring-purple-500/20' 
                  : 'border-slate-700'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.name === 'Professional'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'border border-slate-600 text-gray-300 hover:border-purple-500 hover:text-white'
                }`}>
                  {plan.name === 'Professional' ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Revolutionize Your Hiring?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ companies already using AI Smart Recruitment to find better candidates faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Start Your Free Trial
            </button>
            <button className="border border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Contact Sales
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISmartRecruitmentPage;