import * as React from 'react'
import Link from 'next/link'
import {
  Heart, 
  Brain, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Stethoscope,
  Activity,
  Database,
  Camera,
  FileText
} from 'lucide-react'
import Layout from '../../components/Layout'

const services = [
  {
    title: 'AI-Powered Medical Diagnostics',
    description: 'Advanced machine learning algorithms for accurate disease detection and diagnosis.',
    icon: Brain,
    features: [
      'Medical image analysis',
      'Symptom assessment',
      'Treatment recommendations',
      'Risk prediction'
    ]
  },
  {
    title: 'Electronic Health Records',
    description: 'Comprehensive EHR systems for efficient patient data management and care coordination.',
    icon: Database,
    features: [
      'Patient records management',
      'Interoperability',
      'Clinical decision support',
      'Data analytics'
    ]
  },
  {
    title: 'Telemedicine Platforms',
    description: 'Secure video conferencing and remote consultation solutions for healthcare providers.',
    icon: Camera,
    features: [
      'Video consultations',
      'Remote monitoring',
      'Prescription management',
      'Appointment scheduling'
    ]
  },
  {
    title: 'Healthcare Analytics',
    description: 'Advanced analytics solutions for population health management and operational insights.',
    icon: BarChart3,
    features: [
      'Population health analytics',
      'Clinical outcomes tracking',
      'Resource optimization',
      'Predictive modeling'
    ]
  }
];

const benefits = [
  {
    title: 'Improved Patient Care',
    description: 'Enhance patient outcomes through better diagnosis, treatment, and care coordination.',
    icon: Heart
  },
  {
    title: 'HIPAA Compliance',
    description: 'Ensure full compliance with healthcare regulations and data protection standards.',
    icon: Shield
  },
  {
    title: 'Operational Efficiency',
    description: 'Streamline healthcare operations and reduce administrative burden.',
    icon: Activity
  },
  {
    title: 'Data Security',
    description: 'Protect sensitive patient data with enterprise-grade security measures.',
    icon: Database
  }
];

export default function HealthcarePage() {
  return (
    <Layout
      title="Healthcare Technology Solutions - Zion Tech Group"
      description="Transform healthcare delivery with secure, efficient technology solutions including AI diagnostics, EHR systems, telemedicine, and healthcare analytics."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-red-900 via-pink-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Healthcare Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform healthcare delivery with secure, efficient technology solutions designed for modern healthcare providers
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Healthcare Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We provide comprehensive technology solutions for healthcare organizations, 
                  from hospitals and clinics to research institutions and healthcare startups.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-red-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8 mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Why Choose Our Healthcare Solutions?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ready to Transform Healthcare?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our technology solutions can enhance your healthcare organization's capabilities and improve patient care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/ai-services"
                    className="bg-white text-red-600 px-8 py-4 rounded-lg border border-red-600 hover:bg-red-50 transition-colors duration-200 flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
  );
};