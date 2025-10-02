import React from 'react';
import Head from 'next/head';
import ContactInfo from '../../components/ContactInfo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  MessageSquare,
  Calendar,
  Users,
  Award,
  Star,
  DollarSign,
  Target,
  Zap
} from 'lucide-react';

export default function ContactPage() {
  const title = 'Contact Us — Zion Tech Group';
  const description = 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com for a free consultation.';

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
    { day: 'Sunday', hours: 'By Appointment' }
  ];

  const services = [
    'AI Services & Solutions',
    'Micro SaaS Development',
    'IT Services & Infrastructure',
    'Cloud Migration & Architecture',
    'DevOps & CI/CD Pipeline',
    'Cybersecurity & Compliance',
    'Data Engineering & Analytics',
    'Platform Engineering'
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Average ROI', value: '340%', icon: DollarSign },
    { label: 'Response Time', value: '< 2 hours', icon: Clock }
  ];

  const consultationBenefits = [
    'Free 30-minute consultation',
    'Custom solution proposal within 48 hours',
    'Transparent pricing with no hidden costs',
    'Implementation timeline and roadmap',
    'ROI projections and success metrics',
    'Ongoing support and maintenance'
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${contactInfo.website}/contact`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <MessageSquare className="h-8 w-8 mr-3" />
              <span className="text-lg font-semibold">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Ready to transform your business with AI, micro SaaS, or IT solutions? 
              Contact us today for a free consultation and custom proposal.
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

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <ContactInfo variant="detailed" showTitle={false} />
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services We Offer */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Services We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Consultation Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Consultation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get a free 30-minute consultation to discuss your project requirements and receive a custom proposal.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">What's Included</h3>
                <div className="space-y-4">
                  {consultationBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Schedule Your Call</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Available Monday - Friday, 9 AM - 6 PM EST</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">30-minute consultation</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Meet with our technical experts</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Custom solution proposal within 48 hours</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: {contactInfo.phone}
                  </a>
                  <a 
                    href={`mailto:${contactInfo.email}?subject=Free Consultation Request`}
                    className="w-full bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center border border-blue-600"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results with transparent pricing, fast delivery, and ongoing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden fees. Clear pricing with market comparisons and guaranteed ROI.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Most projects delivered 2-3x faster than industry standards with quality assurance.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">98% client satisfaction with documented ROI improvements and case studies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and discover how our solutions can drive your success.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}?subject=Project Inquiry`}
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-colors flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>
            
            <div className="mt-8 text-blue-100">
              <p>📍 {contactInfo.address}</p>
              <p>🌐 <a href={contactInfo.website} className="hover:text-white">{contactInfo.website}</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}