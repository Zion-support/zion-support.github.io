import React from './react';
import Link from './next / link';
import { motion  } from './framer-motion';
import {=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Brain,
  Network,
  Cloud,
  Shield,
  Zap,
  Target,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const stats = [  { number: "500+", label: "Projects Completed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24 / 7", label: "Support Available" },
  { number: "50+", label: "Countries Served" },
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Shield, Zap, Target, Users, BarChart3, ArrowRight, CheckCircle, Star, Award, Clock, Globe } from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const serviceCategories = [
  {
    title: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions for modern businesses',
    icon: Brain,
    services: ['AI Analytics', 'Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    link: '/ai-services',
    color: 'from-blue-500 to-purple-600'
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT solutions and infrastructure management',
    icon: Network,
    services: ['Cloud Migration', 'System Integration', 'Network Security', 'Data Management'],
    link: '/it-services',
    color: 'from-green-500 to-blue-600'
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative micro software solutions for specific business needs',
    icon: Cloud,
    services: ['Workflow Automation', 'Project Management', 'Customer Analytics', 'API Integration'],
    link: '/micro-saas',
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Security',
    description: 'Advanced cybersecurity and data protection solutions',
    icon: Shield,
    services: ['Threat Detection', 'Data Encryption', 'Access Control', 'Compliance Management'],
    link: '/security',
    color: 'from-red-500 to-orange-600'
  },
  {
    title: 'Automation',
    description: 'Intelligent automation solutions to streamline operations',
    icon: Zap,
    services: ['Process Automation', 'Workflow Optimization', 'Task Scheduling', 'Integration Hub'],
    link: '/automation',
    color: 'from-yellow-500 to-red-600'
  },
  {
    title: 'Analytics',
    description: 'Data-driven insights and business intelligence solutions',
    icon: BarChart3,
    services: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'Reporting'],
    link: '/analytics',
    color: 'from-indigo-500 to-purple-600'
  }
];

];
const benefits = [
;
const benefits = [;
  {=======    title: "Expert Team"
    description: "Experienced professionals with deep industry knowledge"
    icon: Users
  }
  {
=======

  {
=======
  {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    title: "Cutting - Edge Technology",
    description: "Latest technologies and innovative solutions",
    icon: Target,
  },
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  {
    title: "Scalable Solutions"
    description: "Solutions that grow with your business"
    icon: Globe
  }
  {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======    title: 'Expert Team',
    description: 'Experienced professionals with deep industry knowledge',
    icon: Users
  },
  {
    title: 'Cutting-Edge Technology',
    description: 'Latest technologies and innovative solutions',
    icon: Target
  },
  {
    title: 'Scalable Solutions',
    description: 'Solutions that grow with your business',
    icon: Globe
  },
  {
    title: 'Proven Results',
    description: 'Track record of successful implementations',
    icon: Award
  }
==============
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    title: "Proven Results"
    description: "Track record of successful implementations"
    icon: Award
  }
];
export default function ServicesOverviewPage() {
          



          
origin/automation-improvements-final
=======
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
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {;
  Brain,;
  Network,;
  Cloud,;
  Shield,;
  Zap,;
  Target,;
  Users,;
  BarChart3,;
  ArrowRight,;
  CheckCircle,;
  Star,;
  Award,;
  Clock,;
  Globe,;
} from "lucide-react";
import Layout from "../components/Layout";

const serviceCategories = [;
  {;
    title: "AI Services",;
    description:;
      "Cutting-edge artificial intelligence solutions for modern businesses",;
    icon: Brain,;
    services: [;
      "AI Analytics",;
      "Machine Learning",;
      "Natural Language Processing",;
      "Computer Vision",;
    ],;
    link: "/ai-services",;
    color: "from-blue-500 to-purple-600",;
  },;
  {;
    title: "IT Services",;
    description: "Comprehensive IT solutions and infrastructure management",;
    icon: Network,;
    services: [;
      "Cloud Migration",;
      "System Integration",;
      "Network Security",;
      "Data Management",;
    ],;
    link: "/it-services",;
    color: "from-green-500 to-blue-600",;
  },;
  {;
    title: "Micro SAAS",;
    description:;
      "Innovative micro software solutions for specific business needs",;
    icon: Cloud,;
    services: [;
      "Workflow Automation",;
      "Project Management",;
      "Customer Analytics",;
      "API Integration",;
    ],;
    link: "/micro-saas",;
    color: "from-purple-500 to-pink-600",;
  },;
  {;
    title: "Security",;
    description: "Advanced cybersecurity and data protection solutions",;
    icon: Shield,;
    services: [;
      "Threat Detection",;
      "Data Encryption",;
      "Access Control",;
      "Compliance Management",;
    ],;
    link: "/security",;
    color: "from-red-500 to-orange-600",;
  },;
  {;
    title: "Automation",;
    description: "Intelligent automation solutions to streamline operations",;
    icon: Zap,;
    services: [;
      "Process Automation",;
      "Workflow Optimization",;
      "Task Scheduling",;
      "Integration Hub",;
    ],;
    link: "/automation",;
    color: "from-yellow-500 to-red-600",;
  },;
  {;
    title: "Analytics",;
    description: "Data-driven insights and business intelligence solutions",;
    icon: BarChart3,;
    services: [;
      "Business Intelligence",;
      "Predictive Analytics",;
      "Data Visualization",;
      "Reporting",;
    ],;
    link: "/analytics",;
    color: "from-indigo-500 to-purple-600",;
  },;
];
          

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technology services designed to transform your business operations, 
                enhance security, and drive innovation across all technology domains.

origin/automation-improvements-final
=======

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </p>
            </motion.div>
          </div>
        </section>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="container mx-auto px-4 relative z-10">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">;
                  Services;
                </span>;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  <div className={`h-32 bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-16 h-16 text-white" />
                  </div>
                  

origin/automation-improvements-final
=======
==============


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
=======


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>



=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-gray-900 text-sm">
                        Key Services:
                      </h4>
                      <ul className="space-y-1">
                        {category.services.map((service, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
==============                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>

                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
=======
origin/automation-improvements-final
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-12">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Service Categories;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                We offer a comprehensive range of technology services to meet;
                all your business needs.;
              </p>;
            </motion && motion.div>;
                    


origin/automation-improvements-final
=======

                      </ul>;
                    </div>;


=======
                    =======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                    
>>>>>>> origin/automation-improvements-final
=======
=======


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Link
                      href={category && category.link}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center group">;
                      Learn More;
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />;
                    </Link>;
                  </div>;
                </motion && motion.div>;
              ))}
            </div>;
          </div>;
        </section>;




=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {benefits && benefits.map((benefit, index) => (;
                <motion&& motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="text-center">;
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <benefit && benefit.icon className="w-8 h-8 text-blue-600" />;
                  </div>;
                  <h3 className="text-lg font-bold text-gray-900 mb-3">;
                    {benefit && benefit.title}
                  </h3>;
                  <p className="text-gray-600">{benefit && benefit.description}</p>;
                </motion && motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
=======                Let's discuss how our comprehensive services can help you
                achieve your business goals.
                Let's discuss how our comprehensive services can help you
                achieve your business goals.
                Let's discuss how our comprehensive services can help you achieve your business goals.
origin/automation-improvements-final
                Let's discuss how our comprehensive services can help you achieve your business goals.

=======
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0 && 0.8 }}>;
              <h2 className="text-3xl md:text-4xl font-bold mb-6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl mb-8 max-w-2xl mx-auto">;
                Let's discuss how our comprehensive services can help you;
                achieve your business goals.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center">;
                  <ArrowRight className="w-5 h-5 mr-2" />;
                  Get Started;
                </Link>;
                <Link
                  href="/case-studies"
<<<<<<< HEAD
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>;
  );
=======
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">;
                  View Case Studies;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="text - center";
                >;
                  <div className="w - 16 h - 16 bg - blue - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                    <benefit.icon className="w - 8 h - 8 text - blue - 600" />;
                  </div>;
                  <h3 className="text - lg font - bold text - gray - 900 mb - 3">;
                    {benefit.title}
                  </h3>;
                  <p className="text - gray - 600">{benefit.description}</p>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white">;
          <div className="container mx - auto px - 4 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text - xl mb - 8 max - w-2xl mx - auto">;
                Let's discuss how our comprehensive services can help you;
                achieve your business goals.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <Link;
                  href="/contact";
                  className="px - 8 py - 4 bg - white text - blue - 600 rounded - lg hover:bg - gray - 100 transition - all duration - 300 font - semibold inline - flex items - center justify - center";
                >;
                  <ArrowRight className="w - 5 h - 5 mr - 2" />;
                  Get Started;
                </Link>;
                <Link;
                  href="/case - studies";
                  className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - blue - 600 transition - all duration - 300 font - semibold";
                >;
                  View Case Studies;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}