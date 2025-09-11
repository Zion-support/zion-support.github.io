import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain
  Cloud
  RefreshCw
  Wifi
  Shield
  BarChart3
  ArrowRight
  Zap;} from 'lucide-react';import {
  Brain,
  Cloud,
  RefreshCw,
  Wifi,
  Shield,
  BarChart3,
  ArrowRight,;
  Zap,;} from 'lucide-react';import { ;
=======
=======
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
'use client';
;
import React from 'react';
import Link from 'next / link';
import { motion } from 'framer-motion';


} from 'lucide-react';

=======
  Brain,
  Cloud,
  RefreshCw,
  Wifi,
  Shield,
  BarChart3,
  ArrowRight,
  Zap,} from 'lucide-react';import {
  Brain;
  Cloud,
  RefreshCw,
  Wifi,
  Shield,
  BarChart3;
  ArrowRight;
  Zap;

    };
=======      description:;
        'Custom AI solutions and machine learning models tailored to your business needs.',
      features: [;
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
      ],
      color: 'from - blue - 500 to - cyan - 500',
      href: '/services / ai - development',      color: 'from - blue - 500 to - cyan - 500',
      href: '/services / ai - development';
    }
const ServicesSection: React.FC = () => {_const _services = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models tailored to your business needs.',
      features: ['Machine Learning ModelsNatural Language ProcessingComputer VisionPredictive Analytics'],
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-development'
    },

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and infrastructure design for modern applications.',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    {
      icon: Wifi,
      title: 'IoT Platforms',
      description: 'Connected device solutions and IoT platform development.',
    };
==============

    };
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      features: [;
        'Sensor Networks',
        'Real - time Monitoring',
        'Data Analytics',
        'Edge Computing',
      ],
      color: 'from - orange - 500 to - red - 500',
      href: '/services / iot - platforms',      color: 'from - orange - 500 to - red - 500',
      href: '/services / iot - platforms';
    }
    {
      icon: Shield,
      title: 'Blockchain Solutions',
      description: 'Decentralized technology platforms and smart contract development.',
      features: ['Smart ContractsDeFi ApplicationsNFT PlatformsSupply Chain Solutions'],
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence solutions.',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      features: [;
        'Big Data Processing',
        'Real - time Dashboards',
        'Predictive Modeling',
        'Data Visualization',
      ],
      color: 'from - teal - 500 to - blue - 500',
      href: '/services / data - analytics',
    },  ];      features: ['Big Data ProcessingReal - time DashboardsPredictive ModelingData Visualization'],
      color: 'from - teal - 500 to - blue - 500',
      href: '/services / data - analytics';
    }
  const container_variants = {
    hidden: { opacity: 0 },

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Brain
      title: 'AI Development'
      description:
        'Custom AI solutions and machine learning models tailored to your business needs.'
      features: [
        'Machine Learning Models'
        'Natural Language Processing'
        'Computer Vision'
        'Predictive Analytics'
      ]
      color: 'from-blue-500 to-cyan-500'
      href: '/services/ai-development',      color: 'from-blue-500 to-cyan-500'
      href: '/services/ai-development'
    }
    {
      icon: Cloud
      title: 'Cloud Architecture'
      description: 'Scalable cloud solutions and infrastructure design for modern applications.'
      features: ['AWS/Azure/GCPMicroservicesServerless ArchitectureDevOps Automation']
      color: 'from-purple-500 to-pink-500'
      href: '/services/cloud-architecture'
    }
    {
      icon: RefreshCw
      title: 'Digital Transformation'
      description: 'End-to-end digital transformation services to modernize your business.'
      features: ['Process AutomationLegacy System MigrationChange ManagementDigital Strategy']
      color: 'from-green-500 to-emerald-500'
      href: '/services/digital-transformation'
    }
    {
      icon: Cloud
      title: 'Cloud Architecture'
      description:
        'Scalable cloud solutions and infrastructure design for modern applications.'
      features: [
        'AWS/Azure/GCP'
        'Microservices'
        'Serverless Architecture'
        'DevOps Automation'
      ]
      color: 'from-purple-500 to-pink-500'
      href: '/services/cloud-architecture'
    }
    {
      icon: RefreshCw
      title: 'Digital Transformation'
      description:
        'End-to-end digital transformation services to modernize your business.'
      features: [
        'Process Automation'
        'Legacy System Migration'
        'Change Management'
        'Digital Strategy'
      ]
      color: 'from-green-500 to-emerald-500'
      href: '/services/digital-transformation'
    },    {
      icon: Wifi
      title: 'IoT Platforms'
      description: 'Connected device solutions and IoT platform development.',      href: '/services/digital-transformation'
    }
    {
      icon: Wifi
      title: 'IoT Platforms'
      description: 'Connected device solutions and IoT platform development.'
      features: [
        'Sensor Networks'
        'Real-time Monitoring'
        'Data Analytics'
        'Edge Computing'
      ]
      color: 'from-orange-500 to-red-500'
      href: '/services/iot-platforms',      color: 'from-orange-500 to-red-500'
      href: '/services/iot-platforms'
    }
    {
      icon: Shield
      title: 'Blockchain Solutions'
      description: 'Decentralized technology platforms and smart contract development.'
      features: ['Smart ContractsDeFi ApplicationsNFT PlatformsSupply Chain Solutions']
      color: 'from-indigo-500 to-purple-500'
      href: '/services/blockchain-solutions'
    }
    {
      icon: Shield
      title: 'Blockchain Solutions'
      description:
        'Decentralized technology platforms and smart contract development.'
      features: [
        'Smart Contracts'
        'DeFi Applications'
        'NFT Platforms'
        'Supply Chain Solutions'
      ]
      color: 'from-indigo-500 to-purple-500'
      href: '/services/blockchain-solutions'
    },    {
      icon: BarChart3
      title: 'Data Analytics'
      description: 'Advanced analytics and business intelligence solutions.',      href: '/services/blockchain-solutions'
    }
    {
      icon: BarChart3
      title: 'Data Analytics'
      description: 'Advanced analytics and business intelligence solutions.'
      features: [
        'Big Data Processing'
        'Real-time Dashboards'
        'Predictive Modeling'
        'Data Visualization'
      ]
      color: 'from-teal-500 to-blue-500'
      href: '/services/data-analytics'
    },  ];      features: ['Big Data ProcessingReal-time DashboardsPredictive ModelingData Visualization']
      color: 'from-teal-500 to-blue-500'
      href: '/services/data-analytics'
    }
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
=======
=======    visible: {
      opacity: 1
      transition: {


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const cardVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: { opacity: 1, y: 0 },;
  };
        >
          <motion.div
        stagger_children: 0.1,
      },
    },  }
;
  const card_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: { opacity: 1, coordinate_y: 0 },        stagger_children: 0.1;
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Zap className='w-5 h-5 text-blue-400' />
            <span className='text-blue-400 font-medium'>Our Services</span>
          </motion.div>
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Comprehensive Technology
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Solutions
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            We deliver cutting-edge technology solutions that drive innovation,


            efficiency, and growth for businesses across all industries.          </p>
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </motion.div>
          ))}
        </motion.div>

        </motion && motion.div>;




        {/* Bottom CTA */}
        <motion&& motion.div
{/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-blue-500/30 transition-colors duration-300" />;
              </div>;
            </motion && motion.div>;
          ))}
        </motion && motion.div>;
        {/* Bottom CTA */}
        <motion&& motion.div

        {/* Bottom CTA */}
        <motion.div
=======
==============




==============
          className='text-center'
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        >
          <div className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-gray-300 mb-6'>
              Let&apos;s discuss how our technology solutions can drive your
              success and accelerate your growth.
            </p>

            <Link
              href='/contact'
              className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
            >
              <span>Get Started Today</span>
              <ArrowRight className='w-5 h-5' />            </Link>        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let&apos,s discuss how our technology solutions can drive your success and accelerate your growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
=======
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <Link
              href='/contact'
              className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>;
              <span>Get Started Today</span>;
              <ArrowRight className='w-5 h-5' />            </Link>        >;
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">;
            <h3 className="text-2xl font-bold text-white mb-4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text-gray-300 mb-6">;
              Let&apos,s discuss how our technology solutions can drive your success and accelerate your growth.;
            </p>;
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">;
              <span>Get Started Today</span>;
              <ArrowRight className="w-5 h-5" />;
            </Link>;
          </div>;
        </motion && motion.div>;
      </div>;
    </section>;
  );


};
export default ServicesSection;  );
};

=======                  className='inline - flex items - center space - x-2 text - blue - 400 hover:text - blue - 300 transition - colors duration - 300 group - hover:translate - x-1';
                >;
                  <span className='font - medium'>Learn More</span>;
                  <ArrowRight className='w - 4 h - 4' />;
                </Link>;
                {/* Hover Effect */}
                <div className='absolute inset - 0 border - 2 border - transparent rounded - 2xl group - hover:border - blue - 500 / 30 transition - colors duration - 300' />              </div>                >;
                  <span className="font - medium">Learn More</span>;
                  <ArrowRight className="w - 4 h - 4" />;
                </Link>;
                {/* Hover Effect */}
                <div className="absolute inset - 0 border - 2 border - transparent rounded - 2xl group - hover:border - blue - 500 / 30 transition - colors duration - 300" />;
              </div>;
            </motion.div>))}
        </motion.div>;
        {/* Bottom CTA */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='text - center';
        >;
          <div className='bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20 border border - blue - 500 / 30 rounded - 2xl p - 8 max - w-2xl mx - auto'>;
            <h3 className='text - 2xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text - gray - 300 mb - 6'>;
              Let & apos;s discuss how our technology solutions can drive your;
              success and accelerate your growth.;
            </p>;
            <Link;
              href='/contact';
              className='inline - flex items - center space - x-2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 8 py - 4 rounded - xl font - semibold hover:from - blue - 700 hover:to - purple - 700 transition - all duration - 300 shadow - lg hover:shadow - xl transform hover:-translate - y-1';
            >;
              <span > Get Started Today</span>;
              <ArrowRight className='w - 5 h - 5' />            </Link>        >;
          <div className="bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20 border border - blue - 500 / 30 rounded - 2xl p - 8 max - w-2xl mx - auto">;
            <h3 className="text - 2xl font - bold text - white mb - 4">;
              Ready to Transform Your Business?;
            </h3>;
            <p className="text - gray - 300 mb - 6">;
              Let & apos, s discuss how our technology solutions can drive your success and accelerate your growth.;
            </p>;
            <Link;
              href="/contact";
              className="inline - flex items - center space - x-2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white px - 8 py - 4 rounded - xl font - semibold hover: from - blue - 700 hover:to - purple - 700 transition - all duration - 300 shadow - lg hover:shadow - xl transform hover:-translate - y-1";
            >;
              <span > Get Started Today</span>;
              <ArrowRight className="w - 5 h - 5" />;
            </Link>;
          </div>;
        </motion.div>;
      </div>;
    </section>);
}
;
export default ServicesSection);
}
;
export default ServicesSection;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default ServicesSection;

export default ServicesSection;
;=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );

};


export default ServicesSection;  )
}
export default ServicesSection;

export default ServicesSection;
export default ServicesSection;
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
