<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages_backup/solutions/cloud-migration.tsx
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Cloud, Shield, Zap, CheckCircle, ArrowRight, BarChart3, Users, Settings, Database, Globe, Lock, Smartphone, Brain } from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Cloud, 
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
  Smartphone,;
  Brain;
} from 'lucide-react';
import Layout from "../../components/Layout";";

<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

origin/cursor/integrate-build-improve-and-re-verify-c7b5
const phases = [;
  {}
<<<<<<< HEAD
=======
const phases = [;
  {}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    title: 'Assessment & Planning,',;
    description: 'Comprehensive analysis of current infrastructure and migration strategy development.,',;
    icon: BarChart3,;
    steps: [,;
      'Infrastructure audit,',;
      'Workload analysis',',;
      'Migration strategy',',;

<<<<<<< HEAD
=======
    title: 'Assessment & Planning,',
    description: 'Comprehensive analysis of current infrastructure and migration strategy development.,',
    icon: BarChart3,
    steps: [;
      'Infrastructure audit,',
      'Workload analysis',',
      'Migration strategy',',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      'Risk assessment'';
    ];
  },;
  {}
<<<<<<< HEAD
<<<<<<< HEAD

    title: 'Design & Architecture,',;
    description: 'Cloud-native architecture design and security framework implementation.,',;
    icon: Settings,;
    steps: [,;
      'Cloud architecture design,',;
      'Security framework',',;
      'Scalability planning',',;

=======
    title: 'Design & Architecture,',
    description: 'Cloud-native architecture design and security framework implementation.,',
    icon: Settings,
    steps: [;
      'Cloud architecture design,',
      'Security framework',',
      'Scalability planning',',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      'Cost optimization'';
    ];
  },;
  {}
<<<<<<< HEAD
<<<<<<< HEAD

    title: 'Migration Execution,',;
    description: 'Phased migration with minimal downtime and comprehensive testing.,',;
    icon: Cloud,;
    steps: [,;
      'Data migration,',;
      'Application migration',',;
      'Testing & validation',',;

=======
    title: 'Migration Execution,',
    description: 'Phased migration with minimal downtime and comprehensive testing.,',
    icon: Cloud,
    steps: [;
      'Data migration,',
      'Application migration',',
      'Testing & validation',',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      'Go-live support'';
    ];
  },;
  {}
<<<<<<< HEAD
<<<<<<< HEAD

    title: 'Optimization,',;
    description: 'Continuous monitoring and optimization for peak performance.,',;
    icon: Zap,;
    steps: [,;
      'Performance monitoring,',;
      'Cost optimization',',;
      'Security updates',',;

=======
    title: 'Optimization,',
    description: 'Continuous monitoring and optimization for peak performance.,',
    icon: Zap,
    steps: [;
      'Performance monitoring,',
      'Cost optimization',',
      'Security updates',',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      'Continuous improvement'';
    ];
  }
;];
const services = [;
  {}
<<<<<<< HEAD
<<<<<<< HEAD

    title: 'AWS Migration,',;
    description: 'Complete migration to Amazon Web Services with best practices and optimization.,',;
    icon: Cloud,;
    features: [,;
      'EC2 instance migration,',;
      'RDS database migration',',;
      'S3 storage migration',',;

=======
    title: 'AWS Migration,',
    description: 'Complete migration to Amazon Web Services with best practices and optimization.,',
    icon: Cloud,
    features: [;
      'EC2 instance migration,',
      'RDS database migration',',
      'S3 storage migration',',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      'Lambda serverless functions'';
    ];
  },;
  {}
<<<<<<< HEAD
<<<<<<< HEAD

    title: 'Azure Migration,',;
    description: 'Microsoft Azure cloud migration with enterprise-grade security and compliance.,',;
    icon: Shield,;
    features: [,;
      'Azure Virtual Machines,',;
      'Azure SQL Database',',;
      'Azure Storage migration',',;

=======
    title: 'Azure Migration,',
    description: 'Microsoft Azure cloud migration with enterprise-grade security and compliance.,',
    icon: Shield,
    features: [;
      'Azure Virtual Machines,',
      'Azure SQL Database',',
      'Azure Storage migration',',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      'Azure Functions deployment'';
    ];
  },;
  {}
<<<<<<< HEAD
<<<<<<< HEAD

    title: 'Google Cloud Migration,',;
    description: 'Google Cloud Platform migration with advanced AI and analytics capabilities.,',;
    icon: Brain,;
    features: [,;
      'Compute Engine migration,',;
      'Cloud SQL migration',',;
      'Cloud Storage migration',',;

=======
    title: 'Google Cloud Migration,',
    description: 'Google Cloud Platform migration with advanced AI and analytics capabilities.,',
    icon: Brain,
    features: [;
      'Compute Engine migration,',
      'Cloud SQL migration',',
      'Cloud Storage migration',',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      'Cloud Functions deployment'';
    ];
  },;
  {}
<<<<<<< HEAD
<<<<<<< HEAD

    title: 'Multi-Cloud Strategy,',;
    description: 'Hybrid and multi-cloud solutions for maximum flexibility and redundancy.,',;
    icon: Globe,;
    features: [,;
      'Cross-cloud integration,',;
      'Disaster recovery',',;
      'Load balancing',',;

=======
    title: 'Multi-Cloud Strategy,',
    description: 'Hybrid and multi-cloud solutions for maximum flexibility and redundancy.,',
    icon: Globe,
    features: [;
      'Cross-cloud integration,',
      'Disaster recovery',',
      'Load balancing',',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      'Cost optimization'';
    ];
  }
;];
const benefits = [;
  {}
<<<<<<< HEAD
<<<<<<< HEAD

    title: 'Cost Reduction,',;
    description: 'Reduce infrastructure costs by up to 40% with cloud optimization.,',;
    icon: BarChart3,;
  },;
  {}
    title: 'Enhanced Security,',;
    description: 'Enterprise-grade security with automated updates and monitoring.,',;
    icon: Shield,;
  },;
  {}
    title: 'Improved Scalability,',;
    description: 'Scale resources up or down based on demand automatically.,',;
    icon: Zap,;
  },;
  {}
    title: 'Better Performance,',;
    description: 'Faster load times and improved application performance.,',;
    icon: Smartphone,;

=======
    title: 'Cost Reduction,',
    description: 'Reduce infrastructure costs by up to 40% with cloud optimization.,',
    icon: BarChart3;
  },
  {}
    title: 'Enhanced Security,',
    description: 'Enterprise-grade security with automated updates and monitoring.,',
    icon: Shield;
  },
  {}
    title: 'Improved Scalability,',
    description: 'Scale resources up or down based on demand automatically.,',
    icon: Zap;
  },
  {}
    title: 'Better Performance,',
    description: 'Faster load times and improved application performance.,',
    icon: Smartphone;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
;];
export default function CloudMigrationPage() {;
  return (
    <Layout)
      title="Cloud Migration Solutions - Zion Tech Group""
      description="Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud with our comprehensive cloud migration services.""
      keywords="cloud migration, AWS migration, Azure migration, Google Cloud, cloud services, infrastructure migration"">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white py-20 overflow-hidden">";
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;
          <div className="container mx-auto px-4 relative z-10">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center max-w-4xl mx-auto"">;
              <div className="flex items-center justify-center mb-6">";
                <Cloud className="w-12 h-12 text-blue-400 mr-4" />";
<<<<<<< HEAD
<<<<<<< HEAD

                <h1 className="text-5xl md: text-6xl font-bold">", Cloud,;

=======
                <h1 className="text-5xl md:text-6xl font-bold">";
                  Cloud;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">";
                    Migration Solutions;
                  </span>;
                </h1>;
              </div>;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">";
                Seamlessly migrate your infrastructure to the cloud with our comprehensive migration services. ;
                Reduce costs, improve performance, and enhance security with AWS, Azure, or Google Cloud.,;
              </p>;
<<<<<<< HEAD
<<<<<<< HEAD

              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">",;
                  Start Your Migration;
                </Link>;
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover: bg-white hover:text-blue-600 transition-all duration-300 font-semibold">", View Migration Success Stories,;

=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">";
                  Start Your Migration;
                </Link>;
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">";
                  View Migration Success Stories;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Process Section */}
        <section className="py-20 bg-white">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD

              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-16"">;
              <h2 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">", Our Cloud Migration Process,;

=======
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Our Cloud Migration Process;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                A proven methodology that ensures successful cloud migration;
                with minimal downtime and maximum security.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {phases && phases.map((phase, index) => (,;
                <motion&& motion.div}),
                  key={phase && phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="text-center"">;
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">";
                    <phase && phase.icon className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{phase && phase.title}</h3>";
                  <p className="text-gray-600 mb-6 leading-relaxed">{phase && phase.description}</p>";
                  <ul className="space-y-2 text-left">";
                    {phase && phase.steps.map((step, stepIndex) => (,;
                      <li key={stepIndex} className="flex items-center text-sm text-gray-600">";
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />";
                        {step}
                      </li>,;
                    ))}
                  </ul>,;
                </motion && motion.div>;
              ))}
            </div>,;
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py-20 bg-gray-50">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD

              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-16"">;
              <h2 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">", Cloud Migration Services,;

=======
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Cloud Migration Services;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Choose from leading cloud providers or implement a multi-cloud strategy;
                for maximum flexibility and redundancy.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">";
              {services && services.map((service, index) => (,;
                <motion&& motion.div}),
                  key={service && service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD

                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover: shadow-2xl transition-all duration-300 p-8"">;
                  <div className="flex items-center mb-6">";
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">";
                      <service && service.icon className="w-6 h-6 text-white" />";
                    </div>,;
                    <h3 className="text-2xl font-bold text-gray-900">{service && service.title}</h3>";

=======
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8""
                >;
                  <div className="flex items-center mb-6">";
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">";
                      <service.icon className="w-6 h-6 text-white" />";
                    </div>;
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  </div>;
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
                  <div>;
<<<<<<< HEAD

                    <h4 className="font-semibold text-gray-900 mb-3">Key Features: </h4>", <ul className="space-y-2">",;
                      {service && service.features.map((feature, featureIndex) => (,;
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">";

=======
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>";
                    <ul className="space-y-2">";
                      {service.features.map((feature, featureIndex) => (,
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />";
                          {feature}
                        </li>,;
                      ))}
                    </ul>,;
                  </div>;
                </motion && motion.div>;
              ))}
            </div>,;
          </div>;
        </section>;
        {/* Benefits Section */}
        <section className="py-20 bg-white">";
          <div className="container mx-auto px-4">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD

              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-16"">;
              <h2 className="text-4xl md: text-5xl font-bold text-gray-900 mb-6">", Why Choose Our Cloud Migration?,;

=======
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Why Choose Our Cloud Migration?;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Our cloud migration services deliver measurable improvements in cost, ;
                performance, and security.,;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {benefits && benefits.map((benefit, index) => (,;
                <motion&& motion.div}),
                  key={benefit && benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="text-center"">;
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">";
                    <benefit && benefit.icon className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit && benefit.title}</h3>";
                  <p className="text-gray-600 leading-relaxed">{benefit && benefit.description}</p>";
                </motion && motion.div>;
              ))}
            </div>,;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">";
          <div className="container mx-auto px-4 text-center">";
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD

              transition={{ duration: 0 && 0.8 }}>,;
              <h2 className="text-4xl md: text-5xl font-bold mb-6">", Ready to Move to the Cloud?,;

=======
              transition={{ duration: 0.8 }}
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
            >,
              <h2 className="text-4xl md:text-5xl font-bold mb-6">";
                Ready to Move to the Cloud?;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">";
                Let our cloud migration experts help you seamlessly transition to the cloud;
                with minimal downtime and maximum security.;
              </p>;
<<<<<<< HEAD
<<<<<<< HEAD

              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">",;
                  Start Your Cloud Migration;
                </Link>;
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover: bg-white hover:text-blue-600 transition-all duration-300 font-semibold">", Learn About Our Expertise,;

=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">";
                  Start Your Cloud Migration;
                </Link>;
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">";
                  Learn About Our Expertise;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
<<<<<<< HEAD


<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our cloud migration experts help you seamlessly transition to the cloud 
                with minimal downtime and maximum security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Cloud Migration
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Our Expertise
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
            >;
              <h2 className="text-4xl md: text-5xl font-bold mb-6">;
                Ready to Move to the Cloud?;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;
                Let our cloud migration experts help you seamlessly transition to the cloud ;
                with minimal downtime and maximum security.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">;
                  Start Your Cloud Migration;
                </Link>;
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">;
                  Learn About Our Expertise;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  ),;
}
