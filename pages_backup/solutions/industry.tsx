import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Heart, CreditCard, Globe, GraduationCap, Factory, Home } from 'lucide-react';
import React from 'react';import Link from 'next/link';';
import { motion } from 'framer-motion';
import { BarChart3, Shield, Users, Globe, ArrowRight, CheckCircle, Building, Heart, GraduationCap, Factory, Home, CreditCard } from 'lucide-react';
import Layout from "../../components/Layout";";
                <h1 className="text-5xl md:text-6xl font-bold">";
                  Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Solutions</span>";
                </h1>;
              </div>;"
              <p className=text-xl md:text-2xl text-gray-300 mb-8>";
                Specialized technology solutions tailored to meet the unique requirements of different industries;
              </p>;"
              <div className=flex flex-col sm:flex-row gap-4 justify-center>";
                <Link;"
                  href=/contact";"
                  className=px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center";
                >;
                  Discuss Your Industry;"
                  <ArrowRight className=ml-2 w-5 h-5 />";
                </Link>;
                <Link;"
                  href=/case-studies";"
                  className=px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition-colors";
                >;
                  Industry Case Studies;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Stats Section */}
        <section className="py-16 bg-white">"
          <div className="container mx-auto px-4">";
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center""
                >;
                  <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{stat.number}</div>"
                  <div className="text-gray-600 font-medium">{stat.label}</div>"
                </motion.div>;
              ))}
            </div>,
          </div>;
        </section>;
        {/* Industries Section */}
              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Expertise</span>";
              </h2>;
              {industries.map((industry, index) => (,
                <motion.div}),
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                    <div>;

              transition={{ duration: 0.8 }}
              className="text-center mb-16""
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Capabilities</span>";
              </h2>;

              <p className=text-xl text-gray-600 max-w-3xl mx-auto>";
                Industry-specific capabilities that ensure your solutions meet regulatory requirements and business objectives;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";

              transition={{ duration: 0.8 }}
            >,
              <h2 className="text-4xl md:text-5xl font-bold mb-6">";
                Ready for Industry-Specific Solutions?;
              </h2>;
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto>;
                Let's discuss how our industry expertise can help you build solutions that meet your specific regulatory and business requirements';
              </p>;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
