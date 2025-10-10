'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Heart, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

<<<<<<< HEAD
export default function HealthcareITPage() {
  const features = [
    {
=======
const $1: React.FC = () => {
  const features = [,
    {,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
      icon: Heart,
<<<<<<< HEAD
      title: 'HIPAA Compliance',
      description: 'Full HIPAA compliance solutions with automated controls, monitoring, and reporting capabilities.',
      benefits: ['Automated compliance', 'Audit trails', 'Risk management']
    },
    {
      icon: Zap,
      title: 'Patient Data Security',
      description: 'Bank-level security for patient data with encryption, access controls, and monitoring.',
      benefits: ['Data encryption', 'Access controls', 'Security monitoring']
    },
    {
      icon: Clock,
      title: '24/7 System Monitoring',
      description: 'Continuous monitoring of healthcare systems with real-time alerts and notifications.',
      benefits: ['Always-on monitoring', 'Instant alerts', 'System health']
    },
    {
      icon: Users,
      title: 'Interoperability',
      description: 'Seamless integration with EHR systems, medical devices, and healthcare applications.',
      benefits: ['EHR integration', 'Device connectivity', 'Data exchange']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced cybersecurity measures designed specifically for healthcare environments.',
      benefits: ['Threat detection', 'Incident response', 'Security training']
=======
      title: 'Patient Management',
      description: 'Comprehensive patient management systems with electronic health records and care coordination.',
      benefits: ['Electronic health records', 'Care coordination', 'Patient tracking']
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Full HIPAA compliance with advanced security measures and data protection.',
      benefits: ['HIPAA compliant', 'Data encryption', 'Access controls']
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
    },
    {
      icon: BarChart,
      title: 'Healthcare Analytics',
<<<<<<< HEAD
      description: 'Comprehensive analytics and reporting for healthcare operations and patient outcomes.',
      benefits: ['Patient insights', 'Operational metrics', 'Outcome tracking']
    }
  ];

<<<<<<< HEAD
  const stats = [
    { number: '99.9%', label: 'System Uptime', icon: Clock },
    { number: '500+', label: 'Healthcare Clients', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Heart }
=======
      description: 'Advanced analytics for patient outcomes, operational efficiency, and clinical insights.',
      benefits: ['Patient analytics', 'Operational insights', 'Clinical reporting']
    },
    {
      icon: Clock,
      title: 'Real-Time Monitoring',
      description: 'Real-time patient monitoring and alert systems for critical care situations.',
      benefits: ['Real-time alerts', 'Critical care monitoring', 'Automated notifications']
    },
    {
      icon: Users,
      title: 'Staff Management',
      description: 'Comprehensive staff scheduling, training, and performance management systems.',
      benefits: ['Staff scheduling', 'Training management', 'Performance tracking']
    },
    {
      icon: Zap,
      title: 'Telemedicine',
      description: 'Secure telemedicine platforms for remote patient consultations and care.',
      benefits: ['Remote consultations', 'Video conferencing', 'Digital prescriptions']
    }
  ];

  const benefits = [
    'Improve patient outcomes by 40%',
    'Reduce administrative costs by 60%',
    'Enhance data security and compliance',
    'Streamline healthcare workflows',
    'Enable remote patient care',
    'Real-time clinical insights'
  ];

  const services = [
    {
      title: 'Electronic Health Records',
      description: 'Comprehensive EHR systems for patient data management',
      icon: '📋'
    },
    {
      title: 'Telemedicine Platforms',
      description: 'Secure video consultation and remote care solutions',
      icon: '📹'
    },
    {
      title: 'Medical Imaging',
      description: 'Advanced medical imaging and diagnostic tools',
      icon: '🔬'
    },
    {
      title: 'Pharmacy Management',
      description: 'Integrated pharmacy and medication management systems',
      icon: '💊'
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
  ];
=======
  return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigation>
      </Navigation><section className="relative py-20 px-4 overflow-hidden">
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">)</div>
      <Navigation />)
      {/* Hero Section */})
      <section className="relative py-20 px-4 overflow-hidden">)
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Healthcare<span className="block bg-gradient-to-r from-red-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Solutions<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">Specialized IT solutions for healthcare with HIPAA compliance, security, and interoperability.</p>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" /></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEOOptimizer 
        title="Healthcare IT Solutions - Zion Tech Group"
        description="Comprehensive healthcare IT solutions including HIPAA compliance, patient data security, and system integration for healthcare organizations."
        keywords="healthcare IT, HIPAA compliance, patient data security, EHR integration, healthcare analytics, medical technology"
      />
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Healthcare IT - Zion Tech Group | Medical Technology Solutions</title>
        <meta name="description" content="Transform healthcare delivery with advanced IT solutions. Secure, compliant, and efficient healthcare technology for hospitals and medical practices." />
        <meta name="keywords" content="healthcare IT, medical technology, EHR, telemedicine, HIPAA compliance, patient management, healthcare analytics" />
      </Helmet>
      
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Healthcare
            <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              IT Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
<<<<<<< HEAD
            Secure, compliant, and innovative IT solutions designed specifically for healthcare organizations. 
            Protect patient data while improving operational efficiency.
=======
            Transform healthcare delivery with secure, compliant, and efficient IT solutions. 
            Modernize your medical practice and improve patient care.
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
          </p>
<<<<<<< HEAD
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              Get Started
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">Get Started Today</button>
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Schedule Demo</button>
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
            Healthcare;</h1>
            <span className="block bg-gradient-to-r from-red-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              IT Solutions;
            </span>,
          </h1>,
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">,
            Specialized IT solutions for healthcare with HIPAA compliance, security, and interoperability.
            Built for hospitals, clinics, medical practices, and healthcare organizations.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              Get Started Today;
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
<<<<<<< HEAD
</div>
=======
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
        </div>
      </section>

{/* Features Section */}
      <section className="py-20 px-4">
<<<<<<< HEAD
<<<<<<< HEAD

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
=======
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Healthcare IT Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive healthcare technology solutions for modern medical practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-bold text-white mb-12 text-center">Our Healthcare IT Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
</div>

=======
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Healthcare IT?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform healthcare delivery with proven technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare Services
            </h2>
=======
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Healthcare IT Solutions<p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive IT solutions designed specifically for healthcare industry<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300 group"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Healthcare IT Solutions</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive IT solutions designed specifically for healthcare industry</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-400/50 transition-all duration-300 group"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <feature.icon className="w-6 h-6 text-white" />
            <h2 className="text-4xl font-bold text-white mb-4">Healthcare IT Solutions</h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
=======
            <h2 className="text-4xl font-bold text-white mb-4">Healthcare Services</h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive healthcare technology solutions for every medical need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Healthcare IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of modern healthcare technology with our proven solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>

<<<<<<< HEAD
=======
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover: border-red-400/50 transition-all duration-300 group">,</div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">,</div>
                  <feature.icon className="w-6 h-6 text-white" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{benefit}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-20 px-4">
<<<<<<< HEAD

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare IT?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Let's discuss how our healthcare IT solutions can improve your operations and patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
=======
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Healthcare IT Excellence?<p className="text-xl text-gray-300 mb-8">Join leading healthcare organizations using our specialized IT solutions for compliance and security</p>
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Healthcare IT Excellence?</h2><p className="text-xl text-gray-300 mb-8">Join leading healthcare organizations using our specialized IT solutions for compliance and security</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Start Free Trial<button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Contact Sales</button>
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Healthcare IT Excellence?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading healthcare organizations using our specialized IT solutions for compliance and security;
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial;
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-colors">
              View Case Studies
=======
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Healthcare Delivery?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Get started with healthcare IT solutions today and modernize your medical practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
            </button>
          </div>
        </div>
      </section>

      <Footer />
<<<<<<< HEAD
</div>

  );
}
=======
    </div>
  );
};

export default HealthcareITPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
