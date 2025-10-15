import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mail, Zap, Shield, Clock, Users, BarChart3, CheckCircle, Star, ArrowRight, Brain, Target, Globe, Smartphone, Cloud, Database, Settings, MessageSquare, FileText, Calendar, Search, Filter, Download, Upload, Share, Edit, Trash, Plus, Minus, Refresh, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from 'lucide-react';

const AiEmailAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: 'Smart Classification',
      description: 'Automatically categorize and prioritize emails using AI'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Auto-Responses',
      description: 'Generate intelligent responses based on email content'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Spam Protection',
      description: 'Advanced filtering to keep your inbox clean and secure'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      title: 'Scheduling',
      description: 'Smart scheduling and follow-up reminders'
    }
  ];

  const useCases = [
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: 'Customer Support',
      description: 'Handle customer inquiries efficiently'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Sales Follow-up',
      description: 'Automate sales pipeline communications'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: 'Lead Generation',
      description: 'Identify and nurture potential leads'
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: 'Marketing Campaigns',
      description: 'Personalize and optimize email marketing'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49/mo',
      originalPrice: '$79/mo',
      description: 'Perfect for small teams',
      features: [
        'Up to 1,000 emails/month',
        'Basic AI responses',
        'Email classification',
        'Spam protection',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99/mo',
      originalPrice: '$149/mo',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 emails/month',
        'Advanced AI capabilities',
        'Priority support',
        'Advanced analytics',
        'Custom templates',
        'Team collaboration',
        'API access',
        'Integration support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199/mo',
      originalPrice: '$299/mo',
      description: 'For large organizations',
      features: [
        'Unlimited emails',
        'Full AI suite',
        'Dedicated account manager',
        'Custom integrations',
        'White-label options',
        'Advanced security',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      content: 'The AI Email Assistant has revolutionized our email management. We save 5 hours per week on email tasks.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Sales Manager',
      company: 'SalesPro',
      content: 'Our response time improved by 80% and customer satisfaction increased significantly.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'This tool has been a game-changer for our small team. Highly recommended!',
      rating: 5
    }
  ];

  return (<>
      <Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your email management with AI-powered automation, smart classification, and intelligent responses."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Email <span className="text-blue-600">Assistant</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your email management with AI-powered automation, _smart
              classification, and intelligent responses that boost productivity
              and improve communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Use Cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? "ring-2 ring-cyan-500" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-300">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-gray-300 flex items-center"
                      >
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600"
                        : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map(( i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="text-white font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Email Management?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us to learn more about our AI email solutions and how we
              can help your business communicate more effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiEmailAssistantPage;
