import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        'Basic AI Chatbot',
        'Email Automation',
        'Analytics Dashboard',
        'Email Support',
        '5GB Storage'
      ],
      color: "blue",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        'Advanced AI Solutions',
        'Custom Integrations',
        'Priority Support',
        'Advanced Analytics',
        '50GB Storage',
        'API Access',
        'Custom Training'
      ],
      color: "purple",
      popular: true
    },
    { name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        'Custom AI Development',
        'Dedicated Support Team',
        'On-premise Deployment',
        'Unlimited Storage',
        'Custom Integrations',
        '24/7 Support',
        'SLA Guarantee'
      ],
      color: "green",
      popular: false }
  ];
=======

export default function Page() {
>>>>>>> origin/main
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Helmet>

      { /* Hero Section */ }
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Flexible Pricing Plans
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      { /* Pricing Cards */ }
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                { plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                ) }
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  { plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started' }
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      { /* FAQ Section */ }
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
=======
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Learn more about page" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Page</h1>
          <p className="text-gray-300 text-xl mb-8">Learn more about page</p>
>>>>>>> origin/main
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                This page is currently under development. We're working hard to bring you the best experience.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="/" 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Go Home
                </a>
                <a 
                  href="/contact" 
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};
export default PricingPage;
=======
}
>>>>>>> origin/main
