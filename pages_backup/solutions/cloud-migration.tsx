import React from 'react';
<<<<<<< HEAD
=======
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
  Smartphone,
  Brain;
} from 'lucide-react';
import Layout from "../../components/Layout";";

const phases = [;
  {}
    title: 'Assessment & Planning,',
    description: 'Comprehensive analysis of current infrastructure and migration strategy development.,',
    icon: BarChart3,
    steps: [;
      'Infrastructure audit,',
      'Workload analysis',',
      'Migration strategy',',
      'Risk assessment'';
    ];
  },
  {}
    title: 'Design & Architecture,',
    description: 'Cloud-native architecture design and security framework implementation.,',
    icon: Settings,
    steps: [;
      'Cloud architecture design,',
      'Security framework',',
      'Scalability planning',',
      'Cost optimization'';
    ];
  },
  {}
    title: 'Migration Execution,',
    description: 'Phased migration with minimal downtime and comprehensive testing.,',
    icon: Cloud,
    steps: [;
      'Data migration,',
      'Application migration',',
      'Testing & validation',',
      'Go-live support'';
    ];
  },
  {}
    title: 'Optimization,',
    description: 'Continuous monitoring and optimization for peak performance.,',
    icon: Zap,
    steps: [;
      'Performance monitoring,',
      'Cost optimization',',
      'Security updates',',
      'Continuous improvement'';
    ];
  }
;];

const services = [;
  {}
    title: 'AWS Migration,',
    description: 'Complete migration to Amazon Web Services with best practices and optimization.,',
    icon: Cloud,
    features: [;
      'EC2 instance migration,',
      'RDS database migration',',
      'S3 storage migration',',
      'Lambda serverless functions'';
    ];
  },
  {}
    title: 'Azure Migration,',
    description: 'Microsoft Azure cloud migration with enterprise-grade security and compliance.,',
    icon: Shield,
    features: [;
      'Azure Virtual Machines,',
      'Azure SQL Database',',
      'Azure Storage migration',',
      'Azure Functions deployment'';
    ];
  },
  {}
    title: 'Google Cloud Migration,',
    description: 'Google Cloud Platform migration with advanced AI and analytics capabilities.,',
    icon: Brain,
    features: [;
      'Compute Engine migration,',
      'Cloud SQL migration',',
      'Cloud Storage migration',',
      'Cloud Functions deployment'';
    ];
  },
  {}
    title: 'Multi-Cloud Strategy,',
    description: 'Hybrid and multi-cloud solutions for maximum flexibility and redundancy.,',
    icon: Globe,
    features: [;
      'Cross-cloud integration,',
      'Disaster recovery',',
      'Load balancing',',
      'Cost optimization'';
    ];
  }
;];

const benefits = [;
  {}
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
  }
;];

export default function CloudMigrationPage() {
  return (;
    <Layout );
      title="Cloud Migration Solutions - Zion Tech Group"";
      description="Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud with our comprehensive cloud migration services.""
      keywords="cloud migration, AWS migration, Azure migration, Google Cloud, cloud services, infrastructure migration""
    >;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white py-20 overflow-hidden">"
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;

          <div className="container mx-auto px-4 relative z-10">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto""
            >;
              <div className="flex items-center justify-center mb-6">";
                <Cloud className="w-12 h-12 text-blue-400 mr-4" />";
                <h1 className="text-5xl md:text-6xl font-bold">";
                  Cloud;
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">";
                    Migration Solutions;
                  </span>;
                </h1>;
              </div>;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">";
                Seamlessly migrate your infrastructure to the cloud with our comprehensive migration services. 
                Reduce costs, improve performance, and enhance security with AWS, Azure, or Google Cloud.,
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">";
                  Start Your Migration;
                </Link>;
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">";
                  View Migration Success Stories;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;

        {/* Process Section */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Our Cloud Migration Process;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                A proven methodology that ensures successful cloud migration;
                with minimal downtime and maximum security.;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {phases.map((phase, index) => (,
                <motion.div}),
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center""
                >;
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">";
                    <phase.icon className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{phase.description}</p>"
                  
                  <ul className="space-y-2 text-left">";
                    {phase.steps.map((step, stepIndex) => (,
                      <li key={stepIndex} className="flex items-center text-sm text-gray-600">"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />";
                        {step}
                      </li>,
                    ))}
                  </ul>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* Services Section */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Cloud Migration Services;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Choose from leading cloud providers or implement a multi-cloud strategy;
                for maximum flexibility and redundancy.;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">";
              {services.map((service, index) => (,
                <motion.div}),
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8""
                >;
                  <div className="flex items-center mb-6">";
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">";
                      <service.icon className="w-6 h-6 text-white" />";
                    </div>;
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>"
                  </div>;
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
                  
                  <div>;
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>";
                    <ul className="space-y-2">";
                      {service.features.map((feature, featureIndex) => (,
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />";
                          {feature}
                        </li>,
                      ))}
                    </ul>,
                  </div>;
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* Benefits Section */}
        <section className="py-20 bg-white">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Why Choose Our Cloud Migration?;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Our cloud migration services deliver measurable improvements in cost, 
                performance, and security.,
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {benefits.map((benefit, index) => (,
                <motion.div}),
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center""
                >;
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">";
                    <benefit.icon className="w-8 h-8 text-white" />";
                  </div>;
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>"
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>"
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default cloud-migration;