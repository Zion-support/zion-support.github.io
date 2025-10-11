'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        </Helmet><title>About - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        </div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          </div><div className="text-center mb-16">
            </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About </h1><span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are passionate about transforming businesses through cutting-edge AI and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            </div><div>
              </div><h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                To empower businesses with innovative AI and IT solutions that drive growth, efficiency, and competitive advantage in the digital age.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe technology should be accessible, powerful, and transformative. Our team of experts works tirelessly to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              </div><h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                </ul><li className="flex items-start">
                  </li><span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Expert team with 10+ years experience</span>
                </li>
                <li className="flex items-start">
                  </li><span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Cutting-edge AI and IT solutions</span>
                </li>
                <li className="flex items-start">
                  </li><span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">24/7 support and maintenance</span>
                </li>
                <li className="flex items-start">
                  </li><span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Proven track record of success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
