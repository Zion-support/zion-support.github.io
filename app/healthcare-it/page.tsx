import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { 
  Stethoscope, 
  Shield, 
  Lock, 
  FileText, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  Database,
  Cloud,
  Smartphone,
  Heart,
  Activity,
  Zap,
  BarChart,
  Settings
} from 'lucide-react';

const HealthcareITPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Fully compliant with HIPAA regulations and healthcare data protection standards.',
      benefits: ['End-to-end encryption', 'Audit trails', 'Access controls', 'Data anonymization']
    },
    {
      icon: Database,
      title: 'Electronic Health Records',
      description: 'Secure EHR integration and management with seamless data interoperability.',
      benefits: ['FHIR compliance', 'Real-time sync', 'Data migration', 'Interoperability']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure cloud infrastructure designed for healthcare organizations.',
      benefits: ['99.9% uptime', 'Auto-scaling', 'Disaster recovery', 'Global availability']
    },
    {
      icon: Smartphone,
      title: 'Mobile Health Solutions',
      description: 'Mobile-first healthcare applications for patients and providers.',
      benefits: ['Patient portals', 'Telemedicine', 'Mobile EHR', 'Remote monitoring']
    }
  ];

  const services = [
    {
      title: 'EHR Implementation',
      description: 'Complete electronic health record system implementation and migration.',
      icon: FileText
    },
    {
      title: 'Telemedicine Platform',
      description: 'Secure video conferencing and remote patient monitoring solutions.',
      icon: Video
    },
    {
      title: 'Data Analytics',
      description: 'Healthcare data analytics and business intelligence solutions.',
      icon: BarChart
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive healthcare cybersecurity and threat protection.',
      icon: Lock
    },
    {
      title: 'Integration Services',
      description: 'Seamless integration with existing healthcare systems and workflows.',
      icon: Settings
    },
    {
      title: 'Compliance Management',
      description: 'HIPAA, HITECH, and other regulatory compliance management.',
      icon: CheckCircle
=======
import { Stethoscope, Shield, Database, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Calendar, MessageSquare, Heart, Activity, FileText, Lock, Globe, Award, Star, Zap, Brain } from 'lucide-react';

export default function HealthcareITPage() {
  const services = [
    {
      icon: Stethoscope,
      title: 'HIPAA-Compliant Infrastructure',
      description: 'Secure, compliant IT infrastructure designed specifically for healthcare organizations.',
      features: ['HIPAA Compliance', 'Data Encryption', 'Access Controls', 'Audit Logging']
    },
    {
      icon: Database,
      title: 'Electronic Health Records (EHR)',
      description: 'Modern EHR systems with AI-powered insights and seamless integration capabilities.',
      features: ['Patient Records', 'Clinical Decision Support', 'Interoperability', 'Data Analytics']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Advanced security measures to protect sensitive patient data and ensure compliance.',
      features: ['Threat Detection', 'Data Protection', 'Compliance Monitoring', 'Incident Response']
    },
    {
      icon: Users,
      title: 'Telemedicine Platforms',
      description: 'Secure, scalable telemedicine solutions for remote patient care and consultations.',
      features: ['Video Consultations', 'Remote Monitoring', 'Patient Portal', 'Mobile Access']
    }
  ];

  const complianceStandards = [
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act', icon: '🛡️' },
    { name: 'HITECH', description: 'Health Information Technology for Economic and Clinical Health', icon: '💻' },
    { name: 'SOC 2', description: 'Service Organization Control 2', icon: '✅' },
    { name: 'ISO 27001', description: 'Information Security Management', icon: '🔒' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard', icon: '💳' },
    { name: 'FDA 21 CFR Part 11', description: 'Electronic Records and Signatures', icon: '📋' }
  ];

  const benefits = [
    {
      metric: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Ensures continuous access to critical healthcare systems'
    },
    {
      metric: '50%',
      label: 'Faster Implementation',
      description: 'Streamlined deployment of healthcare IT solutions'
    },
    {
      metric: '30%',
      label: 'Cost Reduction',
      description: 'Optimized IT operations reduce overall costs'
    },
    {
      metric: '24/7',
      label: 'Support',
      description: 'Round-the-clock technical support for healthcare facilities'
    }
  ];

  const solutions = [
    {
      title: 'Hospital Information Systems',
      description: 'Comprehensive HIS solutions for patient management, billing, and operations.',
      icon: '🏥'
    },
    {
      title: 'Practice Management Software',
      description: 'Complete practice management solutions for clinics and medical practices.',
      icon: '👩‍⚕️'
    },
    {
      title: 'Medical Imaging Systems',
      description: 'Advanced PACS and DICOM solutions for medical imaging and diagnostics.',
      icon: '📸'
    },
    {
      title: 'Pharmacy Management',
      description: 'Integrated pharmacy management systems with prescription tracking.',
      icon: '💊'
    },
    {
      title: 'Laboratory Information Systems',
      description: 'LIS solutions for laboratory management and test result processing.',
      icon: '🧪'
    },
    {
      title: 'Revenue Cycle Management',
      description: 'Comprehensive RCM solutions for billing and claims processing.',
      icon: '💰'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
    }
  ];

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>Healthcare IT Solutions - Zion Tech Group</title>
        <meta name="description" content="HIPAA-compliant healthcare IT solutions including EHR systems, telemedicine platforms, and secure cloud infrastructure for healthcare organizations." />
        <meta name="keywords" content="healthcare IT, HIPAA compliance, EHR systems, telemedicine, healthcare cloud, medical software" />
        <link rel="canonical" href="https://ziontechgroup.com/healthcare-it" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Stethoscope className="w-4 h-4" />
                <span>HIPAA-Compliant Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text">
                Healthcare IT
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform your healthcare organization with secure, HIPAA-compliant IT solutions. 
                From EHR systems to telemedicine platforms, we provide the technology foundation for modern healthcare.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                  Get Started
                  <Zap className="w-4 h-4 ml-2" />
                </button>
                <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all">
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-gray-300">HIPAA Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Healthcare Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Secure Healthcare Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our healthcare IT solutions are designed with security, compliance, and patient care in mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
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

        {/* Services Grid */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Comprehensive Healthcare Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From EHR implementation to telemedicine platforms, we provide complete healthcare IT solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Regulatory Compliance
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our solutions meet all major healthcare regulatory requirements and industry standards.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">HIPAA Compliant</h3>
                  <p className="text-gray-300">Full compliance with Health Insurance Portability and Accountability Act</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">HITECH Certified</h3>
                  <p className="text-gray-300">Health Information Technology for Economic and Clinical Health Act compliance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">SOC 2 Type II</h3>
                  <p className="text-gray-300">Service Organization Control 2 Type II certification for security</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Modernize Your Healthcare IT?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of healthcare organizations already using our secure, 
              compliant IT solutions to improve patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Start Free Consultation
                <Zap className="w-4 h-4 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HealthcareITPage;
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Healthcare IT Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              HIPAA-compliant IT solutions designed specifically for healthcare organizations, 
              ensuring security, compliance, and seamless patient care delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Stethoscope className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Healthcare Focused</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Lock className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare IT Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Specialized IT solutions designed to meet the unique needs of healthcare organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Compliance & Security Standards
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We ensure full compliance with all healthcare industry regulations and standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 text-center hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{standard.name}</h3>
                <p className="text-gray-300 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Healthcare IT Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Complete IT solutions tailored for different healthcare settings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Healthcare IT Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and benefits for healthcare organizations
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-xl font-bold text-white mb-2">
                  {benefit.label}
                </div>
                <div className="text-gray-300 text-sm">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Healthcare IT?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let our healthcare IT experts help you implement secure, compliant solutions that improve patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
