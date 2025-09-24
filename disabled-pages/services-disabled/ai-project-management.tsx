import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Calendar, Brain, Users, Target, BarChart3, Clock, Star, Zap, FileText, TrendingUp } from 'lucide-react';

const AIProjectManagementPage: NextPage = () => {
  const features = [
    'AI-powered task prioritization and scheduling',
    'Intelligent resource allocation and workload balancing',
    'Automated progress tracking and milestone management',
    'Smart deadline prediction and risk assessment',
    'Team collaboration tools with real-time updates',
    'Customizable project templates and workflows',
    'Advanced reporting and analytics dashboard',
    'Integration with popular tools (Slack, Jira, Trello)'
  ];

  const benefits = [
    'Complete projects 25% faster on average',
    'Reduce project overruns by 40%',
    'Improve team productivity by 35%',
    'Better resource utilization and planning',
    'Enhanced project visibility and control'
  ];

  const useCases = [
    'Software development projects',
    'Marketing campaign management',
    'Event planning and coordination',
    'Product launch management',
    'Client project delivery'
  ];

  const pricingPlans = [
    {
      name: 'Team',
      price: 89,
      period: 'month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 team members',
        'Unlimited projects',
        'Basic AI features',
        'Task management',
        'Team collaboration',
        'Email support'
      ]
    },
    {
      name: 'Business',
      price: 199,
      period: 'month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 team members',
        'Advanced AI features',
        'Resource management',
        'Custom workflows',
        'Advanced analytics',
        'Priority support',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 399,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced reporting',
        'SLA guarantee'
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Innovations",
      role: "Project Manager",
      content: "We've reduced project delivery time by 30% since implementing this AI project management tool. The predictive scheduling is game-changing.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Digital Agency Pro",
      role: "Operations Director",
      content: "The resource allocation features have optimized our team's workload perfectly. Our productivity has increased significantly.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>AI Project Management - Zion Tech Group</title>
        <meta name="description" content="Intelligent project management with AI-powered scheduling, resource allocation, and progress tracking. Complete projects 25% faster."  />
        <meta name="keywords" content="AI project management, project planning, team collaboration, task management, resource allocation, project tracking"  />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-project-management"  />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-90o0 via-cyan-90o0 to-blue-90o0 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-teal-60o0 p-4 rounded-full">
                  <Calendar className="w-12 h-12"  />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Project Management
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-20o0 max-w-4xl mx-auto">
                Intelligent project management that automates scheduling, optimizes resources, and predicts project outcomes. 
                Complete projects 25% faster with AI-powered planning and execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <span className="bg-teal-60o0 hover:bg-teal-70o0 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5"  />
                  </span>
                </Link>
                <Link href="#demo">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-90o0 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                    Watch Demo
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-90o0 mb-4">
                Smart Project Management Features
              </h2>
              <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
                Advanced AI technology that understands project dynamics and optimizes every aspect of project delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-50o0 mb-4"  />
                  <h3 className="text-lg font-semibold text-gray-90o0 mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-90o0 mb-4">
                Proven Project Success
              </h2>
              <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
                Join thousands of teams delivering projects faster and more efficiently
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-teal-10o0 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-teal-60o0"  />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-90o0 mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-90o0 mb-4">
                Perfect for Every Project Type
              </h2>
              <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
                From software development to marketing campaigns, manage any project with confidence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-10o0">
                  <Target className="w-8 h-8 text-teal-60o0 mb-4"  />
                  <h3 className="text-lg font-semibold text-gray-90o0 mb-2">{useCase}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-90o0 mb-4">
                Flexible Team Pricing
              </h2>
              <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
                Scale your project management as your team grows
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-lg shadow-lg ${index === 1 ? 'ring-2 ring-teal-50o0 transform scale-10o5' : ''}`}>
                  {index === 1 && (
                    <div className="bg-teal-50o0 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-90o0 mb-2">{plan.name}</h3>
                  <p className="text-gray-60o0 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-90o0">${plan.price}</span>
                    <span className="text-gray-60o0">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-50o0 mr-3"  />
                        <span className="text-gray-70o0">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <span className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors cursor-pointer inline-block ${
                      index === 1 
                        ? 'bg-teal-60o0 hover:bg-teal-70o0 text-white' 
                        : 'bg-gray-20o0 hover:bg-gray-30o0 text-gray-90o0'
                    }`}>
                      Get Started
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-90o0 mb-4">
                Trusted by Project Managers
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-40o0 fill-current"  />
                    ))}
                  </div>
                  <p className="text-gray-70o0 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-90o0">{testimonial.name}</p>
                    <p className="text-gray-60o0">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-90o0 via-cyan-90o0 to-blue-90o0 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Managing Projects Smarter Today
            </h2>
            <p className="text-xl mb-8 text-gray-20o0 max-w-3xl mx-auto">
              Join thousands of teams using AI to deliver projects faster, more efficiently, and with better outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="bg-teal-60o0 hover:bg-teal-70o0 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5"  />
                </span>
              </Link>
              <a href="tel:+130o24640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-90o0 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Call +1 30o2 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-30o0">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-teal-30o0">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 10o08, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIProjectManagementPage;