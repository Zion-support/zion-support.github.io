import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
// ;
// ;
const ComprehensivePricing2026 = (props: any) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [billingCycle, setBillingCycle] = useState('monthly');
    // Combine all services
    const allServices = [...ultimateInnovativeServices2026, ...enterpriseITInfrastructureServices2026];
    const categories = [
        'all',
        'AI & Business Solutions',
        'IT Infrastructure',
        'Cybersecurity',
        'Cloud & DevOps',
        'Specialized Industry'
    ];
    const getCategoryServices = (props: any) => {
        switch (category) {
            case 'AI & Business Solutions':
                return allServices.filter(service => ['Business Intelligence', 'Marketing Automation', 'Customer Service', 'Workflow Automation'].includes(service.category));
            case 'IT Infrastructure':
                return allServices.filter(service => ['Data Center Management', 'Storage Management', 'Virtualization', 'IT Asset Management'].includes(service.category));
            case 'Cybersecurity':
                return allServices.filter(service => ['Cybersecurity', 'Network Security'].includes(service.category));
            case 'Cloud & DevOps':
                return allServices.filter(service => ['Cloud Infrastructure', 'DevOps', 'Performance Monitoring'].includes(service.category));
            case 'Specialized Industry':
                return allServices.filter(service => ['Supply Chain Management', 'Financial Technology', 'Healthcare Technology', 'Legal Technology', 'Blockchain Technology', 'Internet of Things', 'Quantum Computing'].includes(service.category));
            default:
                return allServices;
        }
    };
    const filteredServices = getCategoryServices(selectedCategory);
    const getAnnualPrice = (props: any) => {
        const price = parseInt(monthlyPrice.replace(/[^0-9]/g, ''));
        const annualPrice = price * 12 * 0.8; // 20% discount for annual
        return `$${annualPrice.toLocaleString()}`;
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Pricing 2026            </span>
          </motion.h1>"""
          <motion.p""""
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transparent pricing for all our innovative services.Choose the plan;
            that fits your business needs with flexible billing options and;
            enterprise - grade support.</motion.p>

          {/* Billing Toggle */}"""
          <motion.div""""
            className="flex items-center justify-center gap-4 mb-8"""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}'`
            transition={{ duration: 0.8, delay: 0.4 }}'`'`
          >'`'`'`
            <span'`'`'`'`
              className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}
>
              Get Started,
            </a>
          </div>
    </div>;,
  )}

{/* No Results */}
          {filteredServices.length === 0 && ("""
            <motion.div""""
              className="text-center py-16"""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}"""
            >""""
              <div className="text-6xl mb-4">🔍</div>""""
              <h3 className="text-2xl font-bold text-white mb-2">
                No services found"""
              </h3>""""
              <p className="text-gray-300">
                Try selecting a different category or browse all services.
              </p>
            </motion.div>
          )}
        </div>
      </section>
"""
      {/* Enterprise Plans */}""""
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">""""
        <div className="max-w-7xl mx-auto text-center">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}"""
          >""""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">'"""
              Enterprise{' '}""""
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Solutions;
              </span>"""
            </h2>""""
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Need custom solutions or enterprise-grade implementations? We;
              offer tailored packages with dedicated support, custom;
              development, and white-label options.
            </p>"""
""""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">""""
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">""""
                <div className="text-4xl mb-4">🏢</div>""""
                <h3 className="text-xl font-bold text-white mb-2">
                  Custom Development"""
                </h3>""""
                <p className="text-gray-300 text-sm mb-4">
                  Tailored solutions built specifically for your business;
                  requirements"""
                </p>""""
                <div className="text-2xl font-bold text-cyan-400 mb-2">
                  Custom Pricing"""
                </div>""""
                <p className="text-xs text-gray-400">
                  Based on scope and complexity;
                </p>
              </div>"""
""""
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">""""
                <div className="text-4xl mb-4">🤝</div>""""
                <h3 className="text-xl font-bold text-white mb-2">
                  White Label"""
                </h3>""""
                <p className="text-gray-300 text-sm mb-4">
                  Rebrand our solutions as your own with full customization"""
                </p>""""
                <div className="text-2xl font-bold text-cyan-400 mb-2">
                  From $5,000"""
                </div>""""
                <p className="text-xs text-gray-400">Monthly + setup fees</p>
              </div>"""
""""
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">""""
                <div className="text-4xl mb-4">💎</div>""""
                <h3 className="text-xl font-bold text-white mb-2">
                  Premium Support"""
                </h3>""""
                <p className="text-gray-300 text-sm mb-4">
                  24/7 dedicated support with dedicated account managers"""
                </p>""""
                <div className="text-2xl font-bold text-cyan-400 mb-2">
                  From $2,000"""
                </div>""""
                <p className="text-xs text-gray-400">Monthly per service</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
"""
      {/* CTA Section */}""""
      <section className="py-20 px-4 sm:px-6 lg:px-8">""""
        <div className="max-w-4xl mx-auto text-center">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}"""
          >""""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">'"""
              Ready to{' '}""""
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Get Started;
              </span>
              ?"""
            </h2>""""
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a personalized consultation, demo, or custom;
              quote. Our team is ready to help you choose the perfect solution;
              for your business."""
            </p>""""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >"""
                <Link""""
                  to="/contact""""
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/60""""
                >""""
                  <span className="text-xl">🚀</span>"""
                  Get Custom Quote""""
                  <span className="text-xl">→</span>
                </Link>
              </motion.div>
              <motion.div;
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >"""
                <a""""
                  href="tel:+13024640950""""
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white font-semibold text-lg py-4 px-8 rounded-xl border border-white/30 hover:border-cyan-400/50 hover:bg-white/20 transition-all duration-300 shadow-lg""""
                >""""
                  <span className="text-xl">📞</span>
                  Call Now;
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
"""
      {/* Footer Info */}""""
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">""""
        <div className="max-w-7xl mx-auto text-center">""""
          <h3 className="text-2xl font-bold text-white mb-6">
            Why Choose Our Pricing?"""
          </h3>""""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">""""
            <div className="text-center">""""
              <div className="text-4xl mb-4">💰</div>""""
              <h4 className="text-lg font-semibold text-white mb-2">
                Transparent Pricing"""
              </h4>""""
              <p className="text-gray-300 text-sm">
                No hidden fees, clear pricing structure, and flexible billing;
                options.
              </p>"""
            </div>""""
            <div className="text-center">""""
              <div className="text-4xl mb-4">🎯</div>""""
              <h4 className="text-lg font-semibold text-white mb-2">
                Proven ROI"""
              </h4>""""
              <p className="text-gray-300 text-sm">
                All services deliver measurable business value with documented;
                ROI.
              </p>"""
            </div>""""
            <div className="text-center">""""
              <div className="text-4xl mb-4">💎</div>""""
              <h4 className="text-lg font-semibold text-white mb-2">
                Enterprise Support"""
              </h4>""""
              <p className="text-gray-300 text-sm">
                24/7 support, dedicated account managers, and custom solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>);
};
export default ComprehensivePricing2026;

export {ComprehensivePricing2026};

export {ComprehensivePricing2026};

export {ComprehensivePricing2026};

export {ComprehensivePricing2026};

export {ComprehensivePricing2026};

</motion>
</motion>
</motion>
</motion>
</motion>
</span>
</motion>
</motion>
</motion>