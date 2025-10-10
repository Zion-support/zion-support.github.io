'use client';
import React from 'react';
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        {/* Header */}
        <section className="text-center mb-16"></section>
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Cybersecurity"></h1>
            Cybersecurity;
          </h1>,
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">,
            Advanced security solutions with threat detection, prevention, and comprehensive protection for your digital assets.
          </p>
          <div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $1,599/month</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Cybersecurity">Cybersecurity</h1><p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">Advanced security solutions with threat detection, prevention, and comprehensive protection for your digital assets.</p><div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $1,599/month</section>
        </section>

        {/* Features */}
        <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">)
              Security Features;)
            </h2>)
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">),
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3"></div>
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (</div>
                <div key={index} className="flex items-center space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"></h2>
              Security Benefits;
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center"></div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}<p className="text-gray-300 text-sm">{benefit}</p>
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Benefits</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}</div><p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"></h2>
            Our Security Services;
          </h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-6 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our Security Services</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{services.map((service, index) => (</section>
              <div key={index} className="cyber-card p-6 text-center"></div>
                <service.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3><p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center"></section>
          <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Secure Your Business?</h2><p className="text-lg text-gray-300 mb-8">Contact us today for a comprehensive security assessment and custom protection plan.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              ></a>
                Get Free Security Assessment;
              </a>
              <a;
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ></a>
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950;
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />,
    </div>,
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CybersecurityPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business from threats. Advanced security measures and 24/7 monitoring." />
        <meta name="keywords" content="cybersecurity, security solutions, threat protection, network security, data protection" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 pt-20"></main>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text"></h1>
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-red-400 mb-8"></p>
              Protect your business with advanced security measures
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"></div>
            <div></div>
              <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Security Protection</h2>
              <p className="text-gray-300 mb-6 text-lg"></p>
                Our cybersecurity solutions provide multi-layered protection against evolving threats, 
                ensuring your data and systems remain secure 24/7.
              </p>
              <ul className="space-y-4 text-gray-300"></ul>
                <li className="flex items-center"></li>
                  <span className="text-red-400 mr-3">✓</span>
                  Advanced threat detection
                </li>
                <li className="flex items-center"></li>
                  <span className="text-red-400 mr-3">✓</span>
                  Real-time monitoring
                </li>
                <li className="flex items-center"></li>
                  <span className="text-red-400 mr-3">✓</span>
                  Incident response
                </li>
                <li className="flex items-center"></li>
                  <span className="text-red-400 mr-3">✓</span>
                  Compliance management
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-8 rounded-lg"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Security Services</h3>
              <div className="space-y-4"></div>
                <div className="bg-white/10 p-4 rounded-lg"></div>
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Network Security</h4>
                  <p className="text-gray-300">Protect your network infrastructure from intrusions</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg"></div>
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Data Protection</h4>
                  <p className="text-gray-300">Encrypt and secure your sensitive data</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg"></div>
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Security Audits</h4>
                  <p className="text-gray-300">Regular assessments and vulnerability testing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center"></div>
            <h2 className="text-3xl font-bold text-white mb-8">Secure Your Business Today</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300"
              ></a>
                Get Security Assessment
              </a>
              <a
                href="/cybersecurity-suite"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300"
              ></a>
                View Security Suite
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CybersecurityPage;