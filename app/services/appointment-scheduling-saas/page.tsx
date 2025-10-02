import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle, 
  Star, 
  DollarSign, 
  Clock,
  Phone,
  Mail,
  MapPin,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Calendar,
  Clock3,
  CreditCard,
  BarChart3,
  Smartphone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Smart Appointment Scheduler - Zion Tech Group',
  description: 'Streamline bookings with intelligent scheduling. Comprehensive appointment scheduling platform with AI-powered optimization and automated reminders.',
  keywords: 'appointment scheduling, booking system, calendar integration, automated reminders, healthcare scheduling',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AppointmentSchedulingSaaS() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    'AI-powered time optimization for maximum efficiency',
    'Automated reminders via SMS, email, and push notifications',
    'Seamless calendar synchronization with Google, Outlook, and Apple',
    'Integrated payment processing with Stripe and PayPal',
    'Comprehensive client management and history tracking',
    'Custom booking forms and intake questionnaires',
    'Advanced analytics and performance reporting',
    'Multi-timezone support for global businesses'
  ];

  const benefits = [
    'Reduce no-shows by 50% with automated reminders',
    'Save 10+ hours per week on scheduling tasks',
    'Increase booking rates by 35% with optimized availability',
    'Automated payment collection reduces administrative work',
    'Professional client experience builds trust and loyalty',
    'Real-time availability prevents double bookings'
  ];

  const capabilities = [
    'Handles unlimited appointments and clients',
    'Real-time availability updates across all channels',
    'Advanced scheduling rules and business logic',
    'Custom branding and white-label options',
    'Mobile-responsive design for all devices',
    'API integration with existing systems'
  ];

  const useCases = [
    'Medical and dental appointments',
    'Professional consultation booking',
    'Beauty and wellness services',
    'Fitness and personal training',
    'Legal consultations',
    'Real estate property viewings'
  ];

  const integrations = [
    'Google Calendar',
    'Microsoft Outlook',
    'Apple Calendar',
    'Zoom for video consultations',
    'Stripe for payments',
    'PayPal for payments',
    'Mailchimp for email marketing',
    'Slack for team notifications'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="text-6xl mb-6">📅</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Smart Appointment Scheduler
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
            Streamline bookings with intelligent scheduling. AI-powered optimization, automated reminders, and seamless calendar integration.
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

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">No setup fees, no hidden costs</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-green-600 mb-2">$49</div>
                <div className="text-xl text-gray-600 mb-4">per month</div>
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="h-4 w-4 mr-1" />
                  Most Popular
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">250%</div>
                  <div className="text-gray-600">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">30</div>
                  <div className="text-gray-600">Days Free Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">1-2</div>
                  <div className="text-gray-600">Weeks Setup</div>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Features</h2>
            <p className="text-xl text-gray-600">Everything you need for efficient appointment management</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Benefits</h2>
            <p className="text-xl text-gray-600">Real results from our customers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-gray-600">Enterprise-grade performance and reliability</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{capability}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
            <p className="text-xl text-gray-600">Industries and businesses we serve</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600">Connect with your existing tools and workflows</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{integration}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Position Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Position</h2>
            <p className="text-xl text-gray-600">Leading the appointment scheduling revolution</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$1.8B</div>
              <div className="text-gray-600">Market Size by 2025</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">20%</div>
              <div className="text-gray-600">Annual Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50%</div>
              <div className="text-gray-600">No-Show Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Streamline Your Scheduling?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our smart appointment scheduler to reduce no-shows and increase efficiency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {contactInfo.phone}
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-green-400">{contactInfo.phone}</a>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-green-400">{contactInfo.email}</a>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}