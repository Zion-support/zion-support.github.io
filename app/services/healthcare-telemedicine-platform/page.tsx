// import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';
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
  Heart,
  Video,
  FileText,
  Calendar,
  CreditCard,
  Smartphone,
  Stethoscope
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Telemedicine Platform - Zion Tech Group',
  description: 'Complete virtual healthcare solution with video consultations, patient management, and integrated billing. HIPAA compliant telemedicine platform.',
  keywords: 'telemedicine, virtual healthcare, video consultations, patient management, HIPAA compliant, healthcare platform',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TelemedicinePlatform() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    'HD video consultations with screen sharing',
    'Comprehensive patient portal and medical records',
    'Prescription management and e-prescribing',
    'Appointment scheduling and calendar integration',
    'Billing and insurance integration',
    'Mobile app for patients and providers',
    'HIPAA compliant and secure platform',
    'Analytics and reporting dashboard'
  ];

  const benefits = [
    'Increase patient reach by 200%',
    'Reduce no-shows by 60%',
    'Improve patient satisfaction scores',
    'Streamline healthcare operations',
    'HIPAA compliant and secure',
    'Cost-effective healthcare delivery'
  ];

  const capabilities = [
    'Unlimited consultations',
    'Secure video calls',
    'Patient data management',
    'Insurance integration',
    'Mobile accessibility',
    'Real-time collaboration'
  ];

  const useCases = [
    'Remote patient consultations',
    'Follow-up visits and check-ups',
    'Mental health therapy sessions',
    'Chronic care management',
    'Specialist consultations',
    'Emergency telemedicine'
  ];

  const integrations = [
    'EMR Systems',
    'Pharmacy APIs',
    'Insurance Providers',
    'Payment Gateways',
    'Calendar Systems',
    'Lab Results'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="text-6xl mb-6">🏥</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Telemedicine Platform
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-4xl mx-auto">
            Complete virtual healthcare solution with video consultations, patient management, and integrated billing. HIPAA compliant platform.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Healthcare-Focused Pricing</h2>
            <p className="text-xl text-gray-600">Affordable telemedicine for all healthcare providers</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 border-2 border-teal-200">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-teal-600 mb-2">$149</div>
                <div className="text-xl text-gray-600 mb-4">per month</div>
                <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Star className="h-4 w-4 mr-1" />
                  Most Popular
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">300%</div>
                  <div className="text-gray-600">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">30</div>
                  <div className="text-gray-600">Days Free Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">2-4</div>
                  <div className="text-gray-600">Weeks Setup</div>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Healthcare Features</h2>
            <p className="text-xl text-gray-600">Everything you need for virtual healthcare delivery</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-teal-600" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Healthcare Benefits</h2>
            <p className="text-xl text-gray-600">Real results from healthcare providers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Healthcare Capabilities</h2>
            <p className="text-xl text-gray-600">Enterprise-grade telemedicine technology</p>
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
            <p className="text-xl text-gray-600">Healthcare specialties and use cases</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-6 w-6 text-teal-600" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Healthcare Integrations</h2>
            <p className="text-xl text-gray-600">Connect with your existing healthcare systems</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <p className="text-xl text-gray-600">Leading the telemedicine revolution</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">$5.2B</div>
              <div className="text-gray-600">Market Size by 2025</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">28%</div>
              <div className="text-gray-600">Annual Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">200%</div>
              <div className="text-gray-600">Patient Reach Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Healthcare Delivery?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare providers already using our telemedicine platform to deliver better patient care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
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
              <a href={`tel:${contactInfo.phone}`} className="hover:text-teal-400">{contactInfo.phone}</a>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-teal-400">{contactInfo.email}</a>
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