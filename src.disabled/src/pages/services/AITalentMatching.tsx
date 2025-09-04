import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Users, 
  Brain, 
  Target, 
  BarChart3, 
  Check, 
  ArrowRight, 
  Star, 
  Zap,
  Globe,
  Smartphone,
  Mail,
  Phone,
  Clock,
  TrendingUp,
  Shield,
  Video,
  FileText
} from 'lucide-react';

export default function AITalentMatching() {
  const features = [
    {
      title: "AI Candidate Matching",
      description: "Advanced AI algorithms that match candidates with job requirements based on skills, experience, and cultural fit.",
      icon: Brain,
      benefits: [
        "95% matching accuracy",
        "Skills-based matching",
        "Cultural fit analysis",
        "Experience evaluation"
      ]
    },
    {
      title: "Skills Assessment Tools",
      description: "Comprehensive skills testing platform with automated coding challenges and technical assessments.",
      icon: Target,
      benefits: [
        "Automated skill testing",
        "Technical assessments",
        "Coding challenges",
        "Performance analytics"
      ]
    },
    {
      title: "Video Interview Platform",
      description: "Integrated video interviewing with AI-powered analysis of candidate responses and body language.",
      icon: Video,
      benefits: [
        "AI-powered analysis",
        "Body language detection",
        "Response evaluation",
        "Interview scheduling"
      ]
    },
    {
      title: "Background Verification",
      description: "Automated background checks and reference verification with AI-powered fraud detection.",
      icon: Shield,
      benefits: [
        "Automated verification",
        "Fraud detection",
        "Reference checking",
        "Compliance tracking"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 job postings",
        "Basic AI matching",
        "Standard assessments",
        "Email support",
        "Mobile app access",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 200 job postings",
        "Advanced AI features",
        "Video interviews",
        "Priority support",
        "All integrations",
        "Advanced analytics",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999/month",
      description: "For large organizations",
      features: [
        "Unlimited job postings",
        "Custom AI models",
        "White-label options",
        "24/7 dedicated support",
        "Custom development",
        "Advanced security",
        "API access"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>AI Talent Matching Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary recruitment platform that uses AI to match perfect candidates with job requirements. Reduce hiring time by 75% and improve candidate quality by 60%." />
        <meta name="keywords" content="ai recruitment, talent matching, candidate screening, video interviews, skills assessment, hiring automation" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-500 via-blue-500 to-indigo-500 py-20 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI Talent Matching Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Revolutionary AI Recruitment Platform
            </h1>
            <p className="text-teal-100 text-xl max-w-3xl mx-auto mb-8">
              Transform your hiring process with AI-powered candidate matching. Reduce hiring time by 75%, improve candidate quality by 60%, and decrease recruitment costs by 40%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#pricing" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                View Pricing
              </Link>
              <Link href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Get Started Today
              </Link>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Talent Matching Platform?</h2>
              <p className="text-gray-600 text-lg">Revolutionary AI technology that transforms recruitment</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">75% Faster Hiring</h3>
                <p className="text-gray-600">Reduce time-to-hire significantly</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">60% Better Quality</h3>
                <p className="text-gray-600">Improve candidate quality and fit</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">40% Cost Reduction</h3>
                <p className="text-gray-600">Decrease recruitment costs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">35% Higher Retention</h3>
                <p className="text-gray-600">Improve employee retention rates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
              <p className="text-gray-600 text-lg">Everything you need to find the perfect candidates</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <Check className="w-4 h-4 text-green-500 mr-2" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
              <p className="text-gray-600 text-lg">Choose the plan that fits your hiring needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white border border-gray-200 rounded-xl p-6 shadow-lg ${plan.popular ? 'ring-2 ring-teal-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-teal-600 mb-6">{plan.price}</div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="#contact" className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center block">
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-teal-600">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Hiring Process?</h2>
            <p className="text-teal-100 text-lg mb-8">
              Contact us today to learn more about our AI Talent Matching Platform and start finding better candidates faster.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-teal-100 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-teal-100 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <Globe className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                <a href="https://ziontechgroup.com" className="text-teal-100 hover:text-white transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-teal-100">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}