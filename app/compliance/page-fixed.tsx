import { ArrowRight, CheckCircle, Star, ImageIcon, Upload, Zap, Download, Clock, X, Circle } from 'lucide-react';
&apos;use client&apos;;

import React from &apos;react&apos;;
import Navigation from &apos;../components/Navigation&apos;;
import Footer from &apos;../components/Footer&apos;;
import { ArrowRight } from &apos;lucide-react&apos;;
import { CheckCircle } from &apos;lucide-react&apos;;
import { ArrowRight } from &apos;lucide-react&apos;;
import { CheckCircle } from &apos;lucide-react&apos;;


const CompliancePageFixed: React.FC = () => {

  const features = [
    {
      icon: Shield,
      title: &apos;Data Protection&apos;,
      description: &apos;Advanced encryption and security measures to protect your valuable data.&apos;,
      benefits: [&apos;End-to-end encryption&apos;, &apos;Secure data transmission&apos;, &apos;Regular security audits&apos;]
    },
    {
      icon: Database,
      title: &apos;Automated Backups&apos;,
      description: &apos;Intelligent backup scheduling and management for continuous data protection.&apos;,
      benefits: [&apos;Automated scheduling&apos;, &apos;Incremental backups&apos;, &apos;Real-time monitoring&apos;]
    },
    {
      icon: Lock,
      title: &apos;Compliance Standards&apos;,
      description: &apos;Meet industry standards and regulatory requirements with ease.&apos;,
      benefits: [&apos;GDPR compliance&apos;, &apos;SOC 2 certified&apos;, &apos;HIPAA ready&apos;]
    }
  ];

  const stats = [
    { label: &apos;Data Protected&apos;, value: &apos;99.9%&apos;, icon: Shield },
    { label: &apos;Backup Success Rate&apos;, value: &apos;100%&apos;, icon: CheckCircle },
    { label: &apos;Recovery Time&apos;, value: &apos;< 1 min&apos;, icon: Clock }
  ];

  return (
    <div>
      <Navigation />
      
      <main className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></main>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse&quot; /></div>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse&quot; style={{ animationDelay: &apos;1s&apos}} /></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;>
              Page Fixed
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced page backup solutions powered by AI technology.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300&quot;>
                Learn More
              </button>
            </div>
          </div>



              {stats.map((stat, index) => (
                <div key={index} className=&quot;text-center&quot;></div>
                  <div className=&quot;flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4&quot;></div>
                    <stat.icon className=&quot;h-8 w-8 text-white&quot; />
                  </div>
                  <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.value}</div>
                  <div className=&quot;text-gray-300&quot;>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
                Advanced Backup Features
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Comprehensive backup solutions designed for modern businesses.
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300&quot;></div>
                  <div className=&quot;flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-6&quot;></div>
                    <feature.icon className=&quot;h-8 w-8 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-6&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className=&quot;flex items-center text-gray-300&quot;>
                        <CheckCircle className=&quot;h-5 w-5 text-green-400 mr-3 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
              Ready to Secure Your Data?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Get started with our advanced backup solutions today.
            </p>
            <button className=&quot;bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300&quot;>
              Start Free Trial
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )};

export default CompliancePageFixed;