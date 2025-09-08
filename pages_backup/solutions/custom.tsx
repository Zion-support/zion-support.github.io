import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Settings, Code, Zap, Users } from 'lucide-react';
import React from 'react';import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Settings, Code, Zap, Users, ArrowRight, CheckCircle, Clock, Target, Wrench } from 'lucide-react';
import Layout from "../../components/Layout";";
const features = [;
  {}
    title: 'Tailored Solutions,',
    description: 'Bespoke software solutions designed specifically for your unique business needs,',
    icon: Settings,
    benefits: ['Custom Architecture, 'Unique Features', 'Business Logic Integration', 'Scalable Design']',
  },
  {}
    title: 'Full Stack Development,',
    description: 'Complete end-to-end development from frontend to backend and everything in between,',
    icon: Code,
    benefits: ['Frontend Development, 'Backend APIs', 'Database Design', 'Cloud Integration']',
  },
  {}
    title: 'API Integration,',
    description: 'Seamless integration with existing systems and third-party services,',
    icon: Zap,
    benefits: ['RESTful APIs, 'GraphQL', 'Third-party Integrations', 'Data Synchronization']',
  },
  {}
    title: 'Ongoing Support,',
    description: 'Continuous support and maintenance to ensure your solution remains optimal,',
    icon: Users,
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
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Capabilities</span>";
              </h2>;

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                We build custom solutions that perfectly match your business requirements and integrate seamlessly with your existing systems;
              </p>;
            </motion.div>;
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

              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Process</span>";
              </h2>;
              {process.map((step, index) => (,
                <motion.div}),
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                    <h3 className="text-xl font-bold text-gray-900">{step.step}</h3>"
                  </div>;
                  <p className="text-gray-600">{step.description}</p>"
                    <h3 className=text-xl font-bold text-gray-900>{step.step}</h3>"
                  </div>;"
                  <p className=text-gray-600>{step.description}</p>"
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;
        {/* CTA Section */}
              transition={{ duration: 0.8 }}
            >,
              <h2 className="text-4xl md:text-5xl font-bold mb-6">";
                Ready to Build Something Custom?;
              </h2>;
              <p className=text-xl text-purple-100 mb-8 max-w-3xl mx-auto">";
                Let's discuss your unique requirements and create a custom solution that perfectly fits your business needs';
              </p>;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
