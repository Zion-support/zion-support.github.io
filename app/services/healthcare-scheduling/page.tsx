import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Calendar, 
  Video, 
  Shield, 
  Bell, 
  CreditCard, 
  CheckCircle, 
  ArrowRight, 
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Clock,
  FileText,
  Database,
  Smartphone,
  Globe,
  Lock,
  Zap,
  Target,
  Award
} from 'lucide-react';

export default function HealthcareSchedulingPage() {
  const title = 'Healthcare Appointment Scheduling Platform — Zion Tech Group';
  const description = 'Complete appointment management system with telemedicine integration, patient portal, and HIPAA-compliant security. Reduce no-shows by 40% and improve patient satisfaction.';

  const features = [
    {
      icon: Calendar,
      title: 'Online Appointment Booking',
      description: '24/7 online booking with real-time availability and instant confirmation'
    },
    {
      icon: Video,
      title: 'Telemedicine Integration',
      description: 'Built-in video consultation platform with screen sharing and recording'
    },
    {
      icon: Heart,
      title: 'Patient Portal',
      description: 'Secure access to medical history, prescriptions, and test results'
    },
    {
      icon: Bell,
      title: 'Automated Reminders',
      description: 'SMS, email, and phone call reminders to reduce no-shows'
    },
    {
      icon: CreditCard,
      title: 'Insurance Verification',
      description: 'Real-time insurance verification and automated billing integration'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Enterprise-grade security with full HIPAA compliance and audit trails'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299/month',
      description: 'Perfect for small practices',
      features: [
        'Up to 500 appointments/month',
        'Basic patient portal',
        'Email reminders',
        'Calendar integration',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$999/month',
      description: 'Ideal for growing practices',
      features: [
        'Up to 2,000 appointments/month',
        'Advanced patient portal',
        'SMS & email reminders',
        'Telemedicine integration',
        'Insurance verification',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999/month',
      description: 'For large healthcare systems',
      features: [
        'Unlimited appointments',
        'Multi-location support',
        'Custom integrations',
        'White-label solution',
        'Priority support',
        'Custom reporting'
      ],
      popular: false
    }
  ];

  const benefits = [
    { metric: '40%', description: 'Reduction in no-shows' },
    { metric: '60%', description: 'Improvement in patient satisfaction' },
    { metric: '3 weeks', description: 'Average delivery time' },
    { metric: '98%', description: 'Client satisfaction rate' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services/micro-saas/healthcare-scheduling" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 mr-3" />
              <span className="text-lg font-semibold">Healthcare Technology</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Healthcare Appointment Scheduling Platform
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Complete appointment management system with telemedicine integration, patient portal, and HIPAA-compliant security
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transform Your Healthcare Practice
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform helps healthcare providers streamline operations, improve patient experience, and reduce administrative overhead.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-600">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Healthcare Management
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage appointments, patients, and practice operations in one integrated platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your practice size and needs. All plans include our core features and support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-lg shadow-lg border-2 ${plan.popular ? 'border-blue-500 relative' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${contactInfo.email}?subject=Healthcare Scheduling Platform - ${plan.name} Plan`}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Healthcare Practice?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of healthcare providers who have improved their operations with our platform. 
              Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=Healthcare Scheduling Platform Inquiry`}
                className="flex items-center bg-white/20 hover:bg-white/30 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center">
                <Phone className="h-6 w-6 mr-3" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-6 w-6 mr-3" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-6 w-6 mr-3" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}