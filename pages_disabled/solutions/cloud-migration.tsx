import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Cloud, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  BarChart3, 
  Users, 
  Settings, 
  Database, 
  Globe, 
  Lock, 
  Smartphone, 
  Brain 
} from 'lucide-react';

const migrationSteps = [
  {
    step: '1',
    title: 'Assessment',
    description: 'Comprehensive analysis of your current infrastructure and requirements',
    icon: BarChart3,
    features: ['Infrastructure audit', 'Performance analysis', 'Cost assessment', 'Risk evaluation']
  },
  {
    step: '2',
    title: 'Planning',
    description: 'Detailed migration strategy and timeline development',
    icon: Settings,
    features: ['Migration strategy', 'Timeline planning', 'Resource allocation', 'Risk mitigation']
  },
  {
    step: '3',
    title: 'Migration',
    description: 'Seamless migration with zero downtime and minimal disruption',
    icon: Cloud,
    features: ['Zero-downtime migration', 'Data transfer', 'Application migration', 'Testing']
  },
  {
    step: '4',
    title: 'Optimization',
    description: 'Post-migration optimization and performance tuning',
    icon: Zap,
    features: ['Performance tuning', 'Cost optimization', 'Security hardening', 'Monitoring']
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Bank-level security with advanced encryption and compliance'
  },
  {
    icon: Zap,
    title: 'Improved Performance',
    description: 'Faster, more reliable infrastructure with auto-scaling capabilities'
  },
  {
    icon: BarChart3,
    title: 'Cost Savings',
    description: 'Reduce infrastructure costs by up to 40% with cloud optimization'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Deploy your applications globally with cloud infrastructure'
  }
];

export default function CloudMigrationPage() {
  return (
    <>
      <Head>
        <title>Cloud Migration Solutions - Zion Tech Group</title>
        <meta name="description" content="Seamless cloud migration solutions with zero downtime. Expert cloud migration services for AWS, Azure, and Google Cloud." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Cloud Migration</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Seamlessly migrate your infrastructure to the cloud with zero downtime 
                and maximum efficiency. Expert cloud migration services for all major platforms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Migration Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful cloud migration.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                  </div>
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Migration Benefits</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the advantages of migrating to the cloud with our expert services.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your cloud migration needs and create a customized plan.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Migration Plan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/services/cloud"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View Cloud Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}