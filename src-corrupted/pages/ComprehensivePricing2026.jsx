<<<<<<< HEAD
        </div>,
      </div>,
    </div>,
=======
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
      </div>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default ComprehensivePricing2026;