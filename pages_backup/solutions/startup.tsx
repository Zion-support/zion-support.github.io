import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Zap, DollarSign, TrendingUp, Users } from 'lucide-react';
import React from 'react';import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Rocket, Zap, DollarSign, Users, ArrowRight, CheckCircle, Clock, Target, TrendingUp } from 'lucide-react';
import Layout from "../../components/Layout";";
const features = [;
  {}
    title: 'Rapid Prototyping,',
    description: 'Quick MVP development to validate your ideas and get to market fast,',
    icon: Zap,
    benefits: ['2-4 Week MVPs, 'Agile Development', 'User Feedback Integration', 'Iterative Improvement']',
  },
  {}
    title: 'Cost Optimization,',
    description: 'Budget-friendly solutions that maximize your startup resources,',
    icon: DollarSign,
    benefits: ['Flexible Pricing, 'Pay-as-you-grow', 'No Hidden Costs', 'ROI Focused']',
  },
  {}
    title: 'Scalable Infrastructure,',
    description: 'Technology that grows with your startup from day one,',
    icon: TrendingUp,
    benefits: ['Auto-scaling, 'Cloud-native', 'Performance Optimized', 'Future-proof']',
  },
  {}
    title: 'Expert Guidance,',
    description: 'Mentorship and technical guidance from experienced entrepreneurs,',
    icon: Users,
    benefits: ['Technical Mentorship, 'Best Practices', 'Industry Insights', 'Ongoing Support']',
  }
;];
const services = [;
  { title: 'MVP Development, description: 'Minimum viable product development in 2-4 weeks' },',
  { title: 'Tech Stack Selection, description: 'Choose the right technologies for your startup' },',
  { title: 'UI/UX Design, description: 'User-centered design that converts visitors to customers' },',
  { title: 'API Development, description: 'Robust APIs for your mobile and web applications' },',
  { title: 'Cloud Setup, description: 'Scalable cloud infrastructure from day one' },',
  { title: 'Growth Hacking, description: 'Technical solutions to accelerate user acquisition' }',
;];
const stats = [;
  { number: '100+, label: 'Startups Helped' },',
  { number: '300+, label: 'Projects Delivered' },',
  { number: '300%, label: 'Average Growth' },',
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Startup <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Advantages</span>";
              </h2>;
              {features.map((feature, index) => (,
                <motion.div}),
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Comprehensive startup services designed to help you build, launch, and scale your business,
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
              {services.map((service, index) => (,
                <motion.div}),
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300""
                >;
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>"
                  <p className="text-gray-600">{service.description}</p>"
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;
        {/* CTA Section */}
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">";
                Let's turn your idea into a successful product with our rapid development and scaling solutions';
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">";
                <Link;
                  href="/contact"";
                  className="px-8 py-4 bg-white text-green-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"";
                >;
                  Start Your Project;
                  <ArrowRight className="ml-2 w-5 h-5" />";
                </Link>;
                <Link;
                  href="/solutions"";
                  className="px-8 py-4 border border-white text-white hover:bg-white hover:text-green-600 rounded-lg font-semibold transition-colors"";
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
