
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import Layout from '../components/Layout';
  return (
    <Layout
      title="Security - Zion Tech Group"
      description="Learn about our comprehensive security measures and how we protect your data and systems."
      keywords="security, data protection, encryption, compliance, cybersecurity">;
      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */}
        {/* Security Stats */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
              {securityStats && securityStats.map((stat, index) => (;
                <motion&& motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="text-center">;
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">;
                    {stat && stat.number}
                  </div>;
                  <div className="text-gray-600 font-medium">;
                    {stat && stat.label}
                  </div>;
                </motion && motion.div>;
              ))}
        {/* Security Features */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
                  key={index}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                          {detail}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                </motion && motion.div>;
              ))}
        {/* Compliance Section */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              </div>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">;
          <div className="container mx-auto px-4 text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}>;
              <h2 className="text-3xl md:text-4xl font-bold mb-6">;
                Questions About Our Security?;
              </h2>;
              <p className="text-xl mb-8 max-w-2xl mx-auto">;
                Our security team is available to answer any questions about our security measures and compliance.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center">;
                  Contact Security Team;
                </Link>;
                <Link
                  href="/compliance"
>>>>>>> origin/automation-improvements-final
=======
</Link>
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
              </div>
            </motion.div>
          </div>
        </section>
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">;
                  View Compliance Details;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
  );
}  )
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
=======
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white">;
          <div className="container mx - auto px - 4 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
                Questions About Our Security?;
              </h2>;
              <p className="text - xl mb - 8 max - w-2xl mx - auto">;
                Our security team is available to answer any questions about our security measures and compliance.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <Link;
                  href="/contact";
                  className="px - 8 py - 4 bg - white text - blue - 600 rounded - lg hover:bg - gray - 100 transition - all duration - 300 font - semibold inline - flex items - center justify - center";
                >;
                  Contact Security Team;
                </Link>;
                <Link;
                  href="/compliance";
                  className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - blue - 600 transition - all duration - 300 font - semibold";
                >;
                  View Compliance Details;
</Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
}  );
}
);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
