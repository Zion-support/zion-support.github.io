

import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Settings, Code, Zap, Users } from 'lucide-react';

import React from 'react';
import Link from 'next/link';';

import { motion } from 'framer-motion';

import { Settings, Code, Zap, Users, ArrowRight, CheckCircle, Clock, Target, Wrench } from 'lucide-react';
import Layout from "../../components/Layout";";

const features = [;
  {}'
    title: 'Tailored Solutions,','
    description: 'Bespoke software solutions designed specifically for your unique business needs,',
    icon: Settings,'
    benefits: ['Custom Architecture, 'Unique Features', 'Business Logic Integration', 'Scalable Design']',
  },
  {}'
    title: 'Full Stack Development,','
    description: 'Complete end-to-end development from frontend to backend and everything in between,',
    icon: Code,'
    benefits: ['Frontend Development, 'Backend APIs', 'Database Design', 'Cloud Integration']',
  },
  {}'
    title: 'API Integration,','
    description: 'Seamless integration with existing systems and third-party services,',
    icon: Zap,'
    benefits: ['RESTful APIs, 'GraphQL', 'Third-party Integrations', 'Data Synchronization']',
  },
  {}'
    title: 'Ongoing Support,','
    description: 'Continuous support and maintenance to ensure your solution remains optimal,',
    icon: Users,'
    benefits: ['24/7 Support, 'Regular Updates', 'Performance Monitoring', 'Bug Fixes']',
  }
;];

const technologies = [;
  { category: 'Frontend, techs: ['_React, 'Next.js', 'Vue.js', 'Angular', 'TypeScript'] },',
  { category: 'Backend, techs: ['Node.js, 'Python', 'Java', 'C#', 'Go'] },',
  { category: 'Database, techs: ['PostgreSQL, 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'] },',
  { category: 'Cloud, techs: ['AWS, 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'] },',

  { category: 'Mobile, techs: ['_React Native, 'Flutter', 'iOS', 'Android', 'PWA'] }',
;];

const process = [;
  { step: 'Discovery, description: 'Understanding your requirements and business goals' },',
  { step: 'Planning, description: 'Creating detailed project roadmap and architecture' },',
  { step: 'Development, description: 'Agile development with regular feedback and iterations' },',
  { step: 'Testing, description: 'Comprehensive testing and quality assurance' },',
  { step: 'Deployment, description: 'Smooth deployment and go-live support' },',

  { step: 'Maintenance, description: 'Ongoing support and continuous improvement' }',
;];

const stats = [;
  { number: '150+, label: 'Custom Projects' },',
  { number: '98%, label: 'Client Satisfaction' },',
  { number: 'On Time, label: 'Delivery Rate' },',

  { number: '5+, label: 'Years Experience' }',
;];
}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">";
              {stats.map((stat, index) => (,
                <motion.div}),
                  key={stat.label}

                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}"
                  className="text-center""
                >;"
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{stat.number}</div>""
                  <div className="text-gray-600 font-medium">{stat.label}</div>"
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* Features Section */}
        <section className="py-20 bg-gray-50">"

          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8 }}

              className="text-center mb-16""
            >;"
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";"
                Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Capabilities</span>";

              </h2>;

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                We build custom solutions that perfectly match your business requirements and integrate seamlessly with your existing systems;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">";
              {features.map((feature, index) => (,
                <motion.div}),
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}"
                  className="bg-white rounded-2xl shadow-xl p-8""
                >;"
                  <div className="flex items-center mb-6">";"
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4">";"
                      <feature.icon className="w-8 h-8 text-white" />";
                    </div>;
                    <div>;"
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>""
                      <p className="text-gray-600">{feature.description}</p>"
                    </div>;
                  </div>;

                  <ul className="space-y-3">";
                    {feature.benefits.map((benefit, benefitIndex) => (,"
                      <li key={benefitIndex} className="flex items-center text-gray-600">""
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />";
                        {benefit}
                      </li>,
                    ))}
                  </ul>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* Technologies Section */}
        <section className="py-20 bg-white">"

          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              className="text-center mb-16""
            >;"
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";"
                Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Stack</span>";

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                We use the latest technologies and frameworks to build robust, scalable, and maintainable custom solutions,
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {technologies.map((category, index) => (,
                <motion.div}),
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}"
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6""
                >;"
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>""
                  <div className="flex flex-wrap gap-2">";
                    {category.techs.map((tech, techIndex) => (,
                      <span}),
                        key={techIndex}"
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm""
                      >;
                        {tech}
                      </span>,
                    ))}
                  </div>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* Process Section */}
        <section className="py-20 bg-gray-50">"

          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8 }}

              className="text-center mb-16""
            >;"
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";"
                Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Process</span>";

              </h2>;

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Our proven development process ensures your custom solution is delivered on time, on budget, and exceeds expectations,
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {process.map((step, index) => (,
                <motion.div}),
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}

                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300""
                >;"
                  <div className="flex items-center mb-4">";"
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mr-4">";"
                      <span className="text-white font-bold text-lg">{index + 1}</span>"

                    <h3 className="text-xl font-bold text-gray-900">{step.step}</h3>"
                  </div>;"
                  <p className="text-gray-600">{step.description}</p>"
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">"

          <div className="container mx-auto px-4 text-center">";
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8 }}
            >,"
              <h2 className="text-4xl md:text-5xl font-bold mb-6">";
                Ready to Build Something Custom?;

              </h2>;
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">";
                Let's discuss your unique requirements and create a custom solution that perfectly fits your business needs';
              </p>;

              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link;"
                  href="/contact"";"
                  className="px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"";
                >;
                  Start Custom Project;"
                  <ArrowRight className="ml-2 w-5 h-5" />";
                </Link>;
                <Link;"
                  href="/solutions"";"
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-purple-600 rounded-lg font-semibold transition-colors"";
                >;

                  View All Solutions;

                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );