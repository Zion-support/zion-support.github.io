<<<<<<< HEAD
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from "../components/SEOHead"';
import { INNOVATIVE_SERVICES_2027 } from '@/data/innovativeServices2027';
import { 
  Check, 
  Star, 
  Brain, 
  Shield, 
  Zap, 
  Code, 
  Signal, 
  Users, 
  Truck,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  TrendingUp,
  Clock,
  Target,
  Award
} from 'lucide-react';

const ComprehensivePricing2027: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('monthly');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI Services', 'Cybersecurity', 'Emerging Technology', 'IT Services', 'Telecommunications'];

  const filteredServices = INNOVATIVE_SERVICES_2027.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  );

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
        duration: 0.5
      }
    }
  };

  return (
    <>
      <SEOHead 
        title="Comprehensive Pricing 2027 - Zion Tech Group"
        description="Explore our comprehensive pricing for cutting-edge AI, cybersecurity, quantum computing, and emerging technology solutions. Find the perfect plan for your business needs."
        canonical="/comprehensive-pricing-2027"
        url="https://ziontechgroup.com/comprehensive-pricing-2027"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            </div>
          </motion.div>
        </div>
      </section>

          </div>
        </div>
      </section>

          </div>
        </div>
      </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default ComprehensivePricing2027;