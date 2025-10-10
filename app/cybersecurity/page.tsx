'use client';
import React from 'react';
import { Shield, Lock, Eye, CheckCircle, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CybersecurityPage: React.FC = () => {
  const features = [
    'Threat Detection & Prevention',
    'Vulnerability Assessment',
    'Security Monitoring',
    'Incident Response',
    'Penetration Testing',
    'Security Audits',
    'Compliance Management',
    '24/7 Security Operations Center'
  ];

  const benefits = [
    '99.9% threat detection accuracy',
    '60% reduction in security incidents',
    '100% compliance achievement',
    '24/7 security monitoring'
  ];

  const services = [
    {
      title: 'Network Security',
      description: 'Comprehensive network protection with firewalls, intrusion detection, and monitoring',
      icon: Shield
    },
    {
      title: 'Endpoint Protection',
      description: 'Advanced endpoint security for all devices and workstations',
      icon: Lock
    },
    {
      title: 'Security Training',
      description: 'Employee security awareness training and phishing simulation',
      icon: Eye
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"> </div><Navigation />

     </Navigation /> </Navigation /><main className="container mx-auto px-4 py-16 pt-24">{/* Header *</main className="container mx-auto px-4 py-16 pt-24">/</main className="container mx-auto px-4 py-16 pt-24">}</main>
       <//main> <//main><section className="text-center mb-16">
         </section className="text-center mb-16"> </section className="text-center mb-16"><h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Cybersecurity">Cybersecuri</h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Cybersecurity">t</h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Cybersecurity">y</h1><p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">Advanced security solutions with threat detection, prevention, and comprehensive protection for your digital assets</p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">.</p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"><div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $1,599/mo</div className="text-2xl font-bold text-cyan-400 mb-8">n</div className="text-2xl font-bold text-cyan-400 mb-8">t</div>h</div>
      <//div> <//div> </section>

        {/* Features */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Feature</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">s</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> </div>(</div>
               <//div> <//div><div key={index} className="flex items-center space-x-3">
                </div key={index} className="flex items-center space-x-3"> </div key={index} className="flex items-center space-x-3"> </div><CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                 </CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" /> </CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" /><span className="text-gray-300">{featu</span className="text-gray-300">r</span className="text-gray-300">e</span>}</span>
              <//span> <//span> </div>
              ))}
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Benefits */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Benefit</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">s</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> </div>(</div>
               <//div> <//div><div key={index} className="text-center">
                 </div key={index} className="text-center"> </div key={index} className="text-center"><div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0</div className="text-3xl font-bold text-cyan-400 mb-2">]</div className="text-3xl font-bold text-cyan-400 mb-2">}</div><p className="text-gray-300 text-sm">{benefi</p className="text-gray-300 text-sm">t</p className="text-gray-300 text-sm">}</p>
              <//p> <//p> </div>
              ))}
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Services */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our Security Service</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">s</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{services.map((service, index) =</div className="grid grid-cols-1 md:grid-cols-3 gap-8">></div className="grid grid-cols-1 md:grid-cols-3 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="cyber-card p-6 text-center">
              </div key={index} className="cyber-card p-6 text-center"> </div key={index} className="cyber-card p-6 text-center"> </div><service.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
               </service.icon className="w-12 h-12 text-red-400 mx-auto mb-4" /> </service.icon className="w-12 h-12 text-red-400 mx-auto mb-4" /><h3 className="text-xl font-bold text-white mb-3">{service.title</h3 className="text-xl font-bold text-white mb-3">}</h3 className="text-xl font-bold text-white mb-3"><p className="text-gray-300">{service.descriptio</p className="text-gray-300">n</p className="text-gray-300">}</p>
            <//p> <//p> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Contact CTA */}
       <//section> <//section><section className="text-center">
         </section className="text-center"> </section className="text-center"><div className="cyber-card p-8 max-w-4xl mx-auto">
          </div className="cyber-card p-8 max-w-4xl mx-auto"> </div className="cyber-card p-8 max-w-4xl mx-auto"> </div><h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Secure Your Busines</h2 className="text-3xl font-bold text-white mb-4 neon-text">s</h2 className="text-3xl font-bold text-white mb-4 neon-text">?</h2>
           <//h2> <//h2><p className="text-lg text-gray-300 mb-8">Contact us today for a comprehensive security assessment and custom protection pla</p className="text-lg text-gray-300 mb-8">n</p className="text-lg text-gray-300 mb-8">.</p>
           <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >Get Free Security Assessme</a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >n</a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >t</a>
            <//a> <//a> </a>
             <//a> <//a><a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
               </a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              > </a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ><Phone className="w-5 h-5" >Call +1 302 464 09</Phone className="w-5 h-5" >5</Phone className="w-5 h-5" >0</Phone>
            <//Phone> <//Phone> </Phone>
          <//Phone> <//Phone> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>
    <//section> <//section> </main>

     <//main> <//main><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default CybersecurityPage<//div>;<//div>