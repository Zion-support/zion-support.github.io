import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const trustedCompanies = [
  {
    name: 'TechCorp',
    logo: '🚀',
    industry: 'Technology',
    testimonial: 'Zion Tech Group transformed our AI infrastructure completely.'
  },
  {
    name: 'SecureBank',
    logo: '🏦',
    industry: 'Finance',
    testimonial: 'Their cybersecurity solutions are unmatched in the industry.'
  },
  {
    name: 'CloudFlow',
    logo: '☁️',
    industry: 'Cloud Services',
    testimonial: 'Seamless cloud migration with zero downtime.'
  },
  {
    name: 'DataVault',
    logo: '💾',
    industry: 'Data Analytics',
    testimonial: 'Revolutionary insights through their AI-powered analytics.'
  },
  {
    name: 'InnovateLab',
    logo: '🔬',
    industry: 'Research',
    testimonial: 'Cutting-edge solutions that push the boundaries of possibility.'
  },
  {
    name: 'GlobalTech',
    logo: '🌍',
    industry: 'International',
    testimonial: 'World-class service with local expertise worldwide.'
  }
];

export function TrustedBySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-800 to-zion-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Join hundreds of companies that rely on Zion Tech Group for their digital transformation needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {trustedCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light hover:border-zion-cyan transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{company.logo}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{company.name}</h3>
                      <p className="text-zion-slate-light text-sm">{company.industry}</p>
                    </div>
                  </div>
                  <p className="text-zion-slate-light italic">
                    "{company.testimonial}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-blue-light rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Let's discuss how we can help transform your business with cutting-edge technology solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}