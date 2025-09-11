<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { DollarSign, Zap, Users, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { DollarSign, Zap, Users, Building2 } from 'lucide-react';
import React from 'react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import { Building2, Users, DollarSign, Zap, CheckCircle, ArrowRight } from 'lucide-react';
export default function SMBSolutionsPage() {
  const smbServices = [;
    {}
      title: "Cost-Effective IT","
      description: "Affordable technology solutions for small and medium businesses","
      icon: DollarSign,
      features: ["Budget-Friendly", "Scalable Solutions", "ROI Focused"]"
    },
    {}
      title: "Quick Setup","
      description: "Rapid deployment of essential business systems","
      icon: Zap,
      features: ["Fast Implementation", "Minimal Downtime", "Easy Migration"]"
    },
    {}
      title: "Team Collaboration","
      description: "Tools and systems to enhance team productivity","
      icon: Users,
      features: ["Communication Tools", "Project Management", "File Sharing"]"
    },
    {}
      title: "Business Growth","
      description: "Technology solutions that grow with your business","
      icon: Building2,
      features: ["Scalable Infrastructure", "Future-Proof", "Growth Support"]"
    }
;  ];
  return (;
    <Layout );
      title="SMB Solutions - Zion Tech Group"";
      description="Tailored technology solutions for small and medium businesses to drive growth and efficiency."";
    >;
      <div className="min-h-screen bg-gray-50">";
  ];
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { DollarSign, Zap, Users, Building2 } from 'lucide-react';

import React from 'react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { DollarSign, Zap, Users, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';
import { DollarSign, Zap, Users, Building2 } from 'lucide-react';
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
import React from 'react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  DollarSign, 
  Zap, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const smbServices = [
  {
    icon: DollarSign,
    title: 'Cost-Effective IT',
    description: 'Affordable technology solutions for small and medium businesses'
  },
  {
    icon: Zap,
    title: 'Quick Setup',
    description: 'Fast implementation to get you up and running quickly'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Personal support team for your business needs'
  },
  {
    icon: Building2,
    title: 'Scalable Solutions',
    description: 'Grow with your business as it expands'
  }
];

export default function SMBSolutionsPage() {
ursor/fix-syntax-push-and-merge-to-main-40de
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Building2, Users, DollarSign, Zap, CheckCircle, ArrowRight } from 'lucide-react';
export default function SMBSolutionsPage() {
  const smbServices = [;
    {}
      title: "Cost-Effective IT","
      description: "Affordable technology solutions for small and medium businesses","
      icon: DollarSign,
      features: ["Budget-Friendly", "Scalable Solutions", "ROI Focused"]"
    },
    {}
      title: "Quick Setup","
      description: "Rapid deployment of essential business systems","
      icon: Zap,
      features: ["Fast Implementation", "Minimal Downtime", "Easy Migration"]"
    },
    {}
      title: "Team Collaboration","
      description: "Tools and systems to enhance team productivity","
      icon: Users,
      features: ["Communication Tools", "Project Management", "File Sharing"]"
    },
    {}
      title: "Business Growth","
      description: "Technology solutions that grow with your business","
      icon: Building2,
      features: ["Scalable Infrastructure", "Future-Proof", "Growth Support"]"
    }
;  ];
  return (;
    <Layout );
      title="SMB Solutions - Zion Tech Group"";
      description="Tailored technology solutions for small and medium businesses to drive growth and efficiency."";
    >;
      <div className="min-h-screen bg-gray-50">";
  ];


ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
  return (
    <Layout
      title="SMB Solutions - Zion Tech Group"
<<<<<<< HEAD
      description="Tailored technology solutions for small and medium businesses to drive growth and efficiency."
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  

  
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20">"
          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8 }}
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
              className="text-center""
            >;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">";
                SMB Solutions;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">";
                Technology solutions designed specifically for small and medium businesses. 
=======

              transition={{ duration: 0 && 0.8 }}
              className="text-center"">;
              <h1 className="text-4xl md: text-6xl font-bold mb-6">", SMB Solutions,;
              </h1>;
              <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">",;
                Technology solutions designed specifically for small and medium businesses. ;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Get enterprise-level capabilities at SMB-friendly prices.;
              </p>;
            </motion.div>;
          </div>;
        </section>;


<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">SMB Solutions</h1>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Technology solutions designed specifically for small and medium businesses.
              </p>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Services Section */}
        <section className="py-20">"
          <div className="container mx-auto px-4">";
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {smbServices.map((service, index) => {}
                const IconComponent = service.icon;
                return (;
                  <motion.div);
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300""
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >,
                    <div className="text-orange-600 mb-4">";
                      <IconComponent className="w-10 h-10" />";
                    </div>;
                    <h3 className="text-xl font-bold text-gray-900 mb-4">";
                      {service.title}
                    </h3>,
                    <p className="text-gray-600 mb-4">";
                      {service.description}
                    </p>,
                    <ul className="space-y-2">";
                      {service.features.map((feature, featureIndex) => (,
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">"
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />";
                          {feature}
                        </li>,
                      ))}
                    </ul>,
                  </motion.div>;
                );
              })}
            </div>,
          </div>;
        </section>;
            </div>
          </div>
        </section>
origin/cursor/integrate-build-improve-and-re-verify-c7b5

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">SMB Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Affordable technology solutions that grow with your business.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {smbServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our SMB solutions can help your business succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold"
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">"
          <div className="container mx-auto px-4 text-center">";
            <h2 className="text-3xl md:text-4xl font-bold mb-6">";
              Grow Your Business Today;
=======


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages_backup/solutions/smb.tsx
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">"
          <div className="container mx-auto px-4 text-center">";

            <h2 className="text-3xl md: text-4xl font-bold mb-6">", Grow Your Business Today,;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </h2>;
            <p className="text-xl mb-8 max-w-2xl mx-auto">";
              Ready to take your SMB to the next level? Let our experts help you choose the right technology solutions.;
            </p>;
<<<<<<< HEAD
            <motion.a;
              href="/contact"";
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"";
              whileHover={{ scale: 1.05 }}
            >,
=======

            <motion&& motion.a
              href="/contact""
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg hover: bg-gray-100 transition-all duration-300 font-semibold"",
              whileHover={{ scale: 1 && 1.05 }}>,;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Get SMB Consultation;
              <ArrowRight className="w-5 h-5 ml-2" />";
            </motion.a>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
}