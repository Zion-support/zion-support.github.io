// import React from 'react';
// Metadata interface for React Helmet
interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
}
import { Link } from 'react-router-dom';
import { 
  Users, 
  Clock, 
  Calendar, 
  Shield, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  MapPin,
  Activity,
  Heart,
  AlertCircle,
  Smartphone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthcare Appointment AI Scheduler | Zion Tech Group',
  description: 'Intelligent healthcare scheduling system with AI-powered optimization, patient preference learning, and HIPAA-compliant automation. Reduce no-show rates by 50%.',
  keywords: 'healthcare scheduling, AI appointment system, medical scheduling, HIPAA compliant, patient management',
};

export default function HealthcareSchedulerPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Appointment Optimization',
      description: 'Machine learning algorithms analyze patient patterns and provider schedules to optimize appointment timing',
      benefits: ['50% reduction in no-shows', 'Optimized provider utilization', 'Reduced wait times']
    },
    {
      icon: Users,
      title: 'Patient Preference Learning',
      description: 'AI system learns individual patient preferences for appointment times, locations, and providers',
      benefits: ['Personalized scheduling', 'Improved patient satisfaction', 'Higher retention rates']
    },
    {
      icon: Clock,
      title: 'Automated Rescheduling & Reminders',
      description: 'Intelligent reminder system with automated rescheduling capabilities and multi-channel notifications',
      benefits: ['Automated follow-ups', 'Multi-channel reminders', 'Smart conflict resolution']
    },
    {
      icon: Activity,
      title: 'Provider Availability Optimization',
      description: 'Dynamic scheduling that adapts to provider availability, workload, and patient demand patterns',
      benefits: ['Balanced provider workload', 'Reduced burnout', 'Improved efficiency']
    },
    {
      icon: Shield,
      title: 'HIPAA-Compliant Communication',
      description: 'Secure, encrypted communication system that meets all healthcare privacy and security requirements',
      benefits: ['Full HIPAA compliance', 'Secure messaging', 'Audit trail maintenance']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Patient Experience',
      description: 'Intuitive mobile interface that allows patients to easily book, reschedule, and manage appointments',
      benefits: ['24/7 accessibility', 'Mobile-optimized', 'Patient self-service']
    }
  ];

  const pricingTiers = [
    {
      name: 'Small Practice',
      price: '$899/month',
      description: 'Perfect for small clinics and individual practitioners',
      features: [
        'Up to 5 providers',
        'Up to 1,000 patients',
        'Basic AI optimization',
        'Email/SMS reminders',
        'Standard reporting',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Medical Group',
      price: '$2,499/month',
      description: 'Ideal for multi-provider practices and medical groups',
      features: [
        'Up to 25 providers',
        'Up to 10,000 patients',
        'Advanced AI optimization',
        'Multi-channel reminders',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Patient portal'
      ],
      popular: true
    },
    {
      name: 'Healthcare System',
      price: '$4,999/month',
      description: 'For large healthcare systems and hospitals',
      features: [
        'Unlimited providers',
        'Unlimited patients',
        'Full AI optimization suite',
        'Enterprise integrations',
        'Custom reporting',
        'Dedicated support',
        'API access',
        'Multi-location support',
        'Advanced security features'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: '50% Reduction in No-Shows',
      description: 'AI-powered scheduling optimization significantly reduces missed appointments'
    },
    {
      icon: Clock,
      title: '30% Increase in Efficiency',
      description: 'Automated scheduling and optimization improves overall practice efficiency'
    },
    {
      icon: Users,
      title: '40% Higher Patient Satisfaction',
      description: 'Personalized scheduling and improved communication boost patient experience'
    },
    {
      icon: Activity,
      title: '25% Reduction in Administrative Costs',
      description: 'Automation reduces manual scheduling tasks and administrative overhead'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Star className="h-8 w-8 text-yellow-400 mr-3" />
            <span className="text-lg font-semibold text-blue-100">Healthcare Innovation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Healthcare Appointment AI Scheduler
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Revolutionize your healthcare practice with AI-powered scheduling that reduces no-shows, 
            optimizes provider utilization, and enhances patient experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Healthcare Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered scheduling system delivers measurable improvements in efficiency and patient satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence capabilities designed specifically for healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIPAA Compliance */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 text-green-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">HIPAA Compliant & Secure</h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Our platform meets all healthcare privacy and security requirements, ensuring your patient data is protected
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <AlertCircle className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">HIPAA Compliant</h3>
                <p className="text-gray-600">Full compliance with healthcare privacy regulations</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">End-to-End Encryption</h3>
                <p className="text-gray-600">All data encrypted in transit and at rest</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Activity className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Audit Trails</h3>
                <p className="text-gray-600">Comprehensive logging for compliance reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your practice size. All plans include HIPAA compliance and core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg ${tier.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom solution for your healthcare system? Contact us for enterprise pricing.</p>
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              <span>Call {contactInfo.phone}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quick Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your AI-powered scheduling system up and running in just 3-4 weeks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">System Integration</h3>
              <p className="text-gray-600">Connect with your existing EMR and practice management systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Migration</h3>
              <p className="text-gray-600">Safely migrate patient data and appointment history</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Training</h3>
              <p className="text-gray-600">Configure AI optimization rules and train the system</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Staff Training</h3>
              <p className="text-gray-600">Train your staff and launch the new system</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare providers already using our AI-powered scheduling system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 {contactInfo.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
}