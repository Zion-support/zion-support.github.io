import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Stethoscope, 
  Shield, 
  Database, 
  Users, 
  FileText, 
  Lock, 
  CheckCircle, 
  ArrowRight,
  Heart,
  Activity,
  AlertTriangle,
  Settings,
  Monitor,
  Zap,
  Globe
} from 'lucide-react';

const HealthcareITPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Fully compliant healthcare IT solutions that meet all HIPAA requirements and healthcare regulations.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Risk assessments']
    },
    {
      icon: Database,
      title: 'Electronic Health Records',
      description: 'Secure, scalable EHR systems that integrate seamlessly with existing healthcare workflows.',
      benefits: ['Patient data management', 'Clinical workflows', 'Interoperability', 'Data analytics']
    },
    {
      icon: Stethoscope,
      title: 'Clinical Decision Support',
      description: 'AI-powered clinical decision support systems that improve patient outcomes and reduce errors.',
      benefits: ['Diagnostic assistance', 'Treatment recommendations', 'Drug interaction checks', 'Clinical guidelines']
    },
    {
      icon: Users,
      title: 'Patient Engagement',
      description: 'Comprehensive patient portal and engagement solutions that improve care coordination.',
      benefits: ['Patient portals', 'Telehealth integration', 'Appointment scheduling', 'Health monitoring']
    }
  ];

  const solutions = [
    'Electronic Health Records (EHR) Systems',
    'Practice Management Software',
    'Telehealth and Remote Monitoring',
    'Medical Imaging and PACS',
    'Laboratory Information Systems (LIS)',
    'Pharmacy Management Systems',
    'Revenue Cycle Management',
    'Clinical Decision Support Systems',
    'Patient Portal Development',
    'Healthcare Data Analytics',
    'Interoperability Solutions',
    'Mobile Health Applications'
  ];

  const complianceFeatures = [
    'HIPAA Privacy and Security Rules',
    'HITECH Act Compliance',
    'SOC 2 Type II Certification',
    'ISO 27001 Security Management',
    'FDA 21 CFR Part 11 Compliance',
    'GxP Validation Services',
    'Risk Assessment and Management',
    'Security Incident Response'
  ];

  return (
    <>
      <Helmet>
        <title>Healthcare IT Solutions - Zion Tech Group</title>
        <meta name="description" content="HIPAA-compliant healthcare IT solutions including EHR systems, telehealth platforms, and clinical decision support. Secure, scalable, and interoperable." />
        <meta name="keywords" content="healthcare IT, HIPAA compliance, EHR, electronic health records, telehealth, clinical decision support, healthcare software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Stethoscope className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Healthcare IT</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                HIPAA-Compliant
                <span className="block bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Healthcare IT
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Secure, scalable, and interoperable healthcare IT solutions that improve patient care 
                while ensuring full HIPAA compliance and regulatory adherence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">
                  Start Healthcare IT Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-blue-400 text-blue-300 hover:bg-blue-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Compliance Guide
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">HIPAA Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300">Healthcare Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
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
                Comprehensive Healthcare IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From electronic health records to telehealth platforms, we provide end-to-end 
                healthcare IT solutions that improve patient care and operational efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{benefit}</span>
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

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Healthcare IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete suite of healthcare technology solutions designed to streamline operations 
                and improve patient outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Heart className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-white font-medium">{solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Regulatory Compliance & Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our healthcare IT solutions are built with security and compliance at their core, 
                ensuring you meet all regulatory requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Healthcare IT?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations that trust us with their critical IT infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-blue-400 text-blue-300 hover:bg-blue-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HealthcareITPage;