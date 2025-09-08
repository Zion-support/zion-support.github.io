import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { BookOpen, Brain, Users, CheckCircle, ArrowRight, GraduationCap, BarChart3, FileText, Video, Globe, Database } from 'lucide-react';
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';import Layout from '../../components/Layout';
const services = [
  {
    title: Learning Management Systems,
    description: 'Comprehensive LMS platforms for educational institutions and corporate training.',
    icon: BookOpen,
    features: [;

    title: 'Educational AI Tutors,',
    description: 'AI-powered tutoring systems for personalized learning experiences.,',
    icon: Brain,
    features: [;
      'Adaptive learning paths,',
      'Intelligent tutoring',',
      'Progress monitoring',',
      'Personalized feedback'';
      'Personalized feedback';
    ];
  },
  {}
    ];
    ];
  }];
  },
  {}
    title: 'Online Assessment Tools,',
    description: 'Secure and comprehensive online testing and evaluation systems.,',
    icon: FileText,
    features: [;
      'Automated grading,',
      'Plagiarism detection',',
      'Secure testing',',
      'Performance reports'';
      Performance reports';
    ];
  },
  {}
;];
const benefits = [;
  {}
    title: 'Improved Learning Outcomes,',,
  description: 'Personalized learning experiences lead to better student performance.,',;
    icon: GraduationCap;  {}
    title: 'Enhanced Engagement,',
    description: 'Interactive tools and gamification increase student participation.,',
    icon: Users;
  },
  {}
    title: 'Better Accessibility,',
    description: 'Online platforms make education accessible to more students.,',
    icon: Globe;
  },
  {}
    title: 'Data-Driven Insights,',
    description: 'Analytics help educators make informed decisions about teaching methods.,',
    icon: BarChart3;

    title: 'Enhanced Engagement,',

    description: Interactive tools and gamification increase student participation.,,
    icon: Users;
  },
  {}'
    title: 'Better Accessibility,,
    description: 'Online platforms make education accessible to more students.,',
    icon: Globe;
  },
  {}
    title: Data-Driven Insights,','
    description: 'Analytics help educators make informed decisions about teaching methods.,',
    icon: BarChart3;
  }
;];
export default function EducationPage() {
  return (;
    <Layout );
      title="Education Technology Solutions - Zion Tech Group"";
      description="Transform education with learning management systems, virtual classrooms, AI tutors, and student analytics platforms.""
      keywords="education technology, LMS, virtual classrooms, AI tutoring, student analytics, edtech""
    >;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 text-white py-20 overflow-hidden">"
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;
          <div className="container mx-auto px-4 relative z-10">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;              className="text-center mb-16"
            >

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6>
                Education Technology Services;
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive edtech solutions designed for schools, universities,
                and corporate training programs.
              </p>
            </motion.div>
            <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div;
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100""
                >;
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center mb-6">";
                    <service.icon className="w-6 h-6 text-white" />";
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
                  <ul className="space-y-3">";
                    {service && service.features.map((feature, featureIndex) => (,;
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">";
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />";                        {feature}
                      </li>,
                    ))}
                  </ul>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;
            </div>
          </div>
        </section>
            </div>,;
          </div>;
        </section>;
            </div>,;
          </div>;
        </section>;
            </div>,;
          </div>;
        </section>;
            </div>;
          </div>;
        </section>;              className="text-center mb-16"
            >

              <h2 className=text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Education Solutions?
              </h2>"
              <p className=text-xl text-gray-600 max-w-3xl mx-auto>
                Our education technology solutions deliver measurable improvements in learning outcomes,
                student engagement, and educational efficiency.
              </p>
            </motion.div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>
              {benefits.map((benefit, index) => (
                <motion.div;
                  key={benefit.title}
            </motion && motion.div>;
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">",;
              {benefits && benefits.map((benefit, index) => (,;
                <motion&& motion.div}),
              className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">;
                Why Choose Our Education Solutions?;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                Our education technology solutions deliver measurable improvements in learning outcomes,;
                student engagement, and educational efficiency.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {benefits && benefits.map((benefit, index) => (;
                <motion&& motion.div
                  key={benefit && benefit.title}        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">"
          <div className="container mx-auto px-4 text-center">";

