import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  StarIcon, 
  ArrowRightIcon,
  HeartIcon,
  ShieldCheckIcon,
  BoltIcon,
  SparklesIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const AIHealthMonitorProPage: React.FC = () => {
  const features = [
    {
      icon: HeartIcon,
      title: 'AI-Powered Health Analysis',
      description: 'Advanced machine learning algorithms analyze your vital signs, symptoms, and health data to provide personalized health insights and early warning alerts.',
      benefit: 'Detect health issues 3x earlier'
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Health Modeling',
      description: 'AI models predict potential health risks based on your lifestyle, genetics, and medical history, enabling proactive healthcare.',
      benefit: 'Prevent 80% of preventable diseases'
    },
    {
      icon: ClockIcon,
      title: '24/7 Health Monitoring',
      description: 'Continuous monitoring of vital signs, sleep patterns, and activity levels with real-time alerts for any concerning changes.',
      benefit: 'Peace of mind with constant monitoring'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Medical Grade Accuracy',
      description: 'FDA-approved algorithms and medical-grade sensors ensure accurate health measurements and reliable health assessments.',
      benefit: '99.7% accuracy in health readings'
    },
    {
      icon: UserGroupIcon,
      title: 'Doctor Integration',
      description: 'Seamlessly share your health data with healthcare providers and receive personalized recommendations from medical professionals.',
      benefit: '50% more effective doctor visits'
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Emergency Response',
      description: 'Automatic emergency alerts and location sharing with emergency contacts and medical services when critical health issues are detected.',
      benefit: 'Faster emergency response times'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: 79,
      period: 'month',
      description: 'Perfect for individual health monitoring',
      features: [
        'Basic health tracking',
        'AI health analysis',
        'Mobile app access',
        'Email alerts',
        'Basic reporting',
        '1 emergency contact'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: 199,
      period: 'month',
      description: 'Ideal for family health management',
      features: [
        'Up to 6 family members',
        'Advanced AI analysis',
        'Real-time monitoring',
        'SMS & email alerts',
        'Detailed health reports',
        'Doctor integration',
        'Emergency response',
        'Health trend analysis'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 499,
      period: 'month',
      description: 'For healthcare organizations',
      features: [
        'Unlimited users',
        'Premium AI models',
        'Custom integrations',
        'Dedicated support',
        'White-label solution',
        'Advanced analytics',
        'HIPAA compliance',
        'API access'
      ],
      popular: false
    }
  ];

  const healthStats = [
    { metric: '99.7%', label: 'Accuracy Rate', color: 'text-green-400' },
    { metric: '3x', label: 'Earlier Detection', color: 'text-blue-400' },
    { metric: '80%', label: 'Disease Prevention', color: 'text-purple-400' },
    { metric: '24/7', label: 'Monitoring', color: 'text-cyan-400' }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      role: 'Cardiologist',
      company: 'MedCenter Hospital',
      content: 'AI Health Monitor Pro has revolutionized how we monitor our patients. The early detection capabilities have saved countless lives.',
      rating: 5,
      impact: 'Lives Saved'
    },
    {
      name: 'Michael Johnson',
      role: 'Patient',
      company: 'Long-term User',
      content: 'This device detected my heart condition 6 months before symptoms appeared. It literally saved my life.',
      rating: 5,
      impact: 'Life Saved'
    },
    {
      name: 'Dr. Lisa Chen',
      role: 'Family Physician',
      company: 'HealthFirst Clinic',
      content: 'The AI analysis is incredibly accurate. It helps me provide better care to my patients with real-time health insights.',
      rating: 5,
      impact: 'Better Care'
    }
  ];

  const healthConditions = [
    'Heart Disease Detection',
    'Diabetes Monitoring',
    'Blood Pressure Tracking',
    'Sleep Apnea Detection',
    'Arrhythmia Detection',
    'Stress Level Analysis',
    'Fitness Optimization',
    'Medication Adherence'
  ];

  return (
    <>
      <SEOHead
        title="AI Health Monitor Pro - Intelligent Health Monitoring | Zion Tech Group"
        description="Monitor your health 24/7 with AI-powered analysis, predictive health modeling, and medical-grade accuracy. Detect health issues 3x earlier and prevent 80% of preventable diseases."
        keywords="AI health monitoring, health tracking, medical device, health analysis, predictive health, wearable health, health AI, medical monitoring"
        canonicalUrl="https://ziontechgroup.com/ai-health-monitor-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <HeartIcon className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-red-300 text-sm font-medium">AI-Powered Health Monitoring</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                  AI Health Monitor Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Monitor your health 24/7 with AI-powered analysis, predictive health modeling, and medical-grade accuracy. Detect health issues <span className="text-red-400 font-semibold">3x earlier</span> and prevent <span className="text-blue-400 font-semibold">80% of preventable diseases</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="group relative bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              {/* Health Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {healthStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.metric}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Health AI</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to monitor, analyze, and protect your health
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-green-400 text-sm font-medium">
                    <CheckCircleIcon className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Health Conditions Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Monitor <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Health Conditions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI can detect and monitor a wide range of health conditions with medical-grade accuracy
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {healthConditions.map((condition, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <HeartIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{condition}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Affordable <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Health Monitoring</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your health monitoring needs. All plans include our core AI features and 24/7 monitoring.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-red-500 shadow-xl shadow-red-500/20' 
                    : 'border-slate-700 hover:border-red-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 text-lg">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white hover:from-red-700 hover:to-blue-700'
                      : 'border-2 border-red-400 text-red-300 hover:bg-red-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Medical Professionals</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI Health Monitor Pro is transforming healthcare and saving lives
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-lg font-bold text-red-400">{testimonial.impact}</div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-slate-800/30">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-slate-900 to-blue-900/40"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
              Take Control of Your Health Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who trust AI Health Monitor Pro to keep them healthy and safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25">
                <span className="relative z-10 flex items-center">
                  Start Your Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-red-400 hover:text-red-300">+1 (302) 464-0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">kleber@ziontechgroup.com</a></p>
              <p>🌐 <a href="https://ziontechgroup.com" className="text-red-400 hover:text-red-300">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIHealthMonitorProPage;