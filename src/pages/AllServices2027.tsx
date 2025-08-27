<<<<<<< HEAD
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from "../components/SEOHead"';
import { INNOVATIVE_SERVICES_2027 } from '@/data/innovativeServices2027';
import { 
  Brain, 
  Shield, 
  Zap, 
  Code, 
  Signal, 
  Users, 
  Truck,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  TrendingUp,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Cloud,
  Rocket
} from 'lucide-react';

const AllServices2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { id: 'All', name: 'All Services', icon: Globe, color: 'from-cyan-500 to-blue-600' },
    { id: 'AI Services', name: 'AI Services', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'Emerging Technology', name: 'Emerging Technology', icon: Zap, color: 'from-yellow-500 to-orange-600' },
    { id: 'IT Services', name: 'IT Services', icon: Code, color: 'from-green-500 to-teal-600' },
    { id: 'Telecommunications', name: 'Telecommunications', icon: Signal, color: 'from-blue-500 to-indigo-600' }
  ];

  const filteredServices = INNOVATIVE_SERVICES_2027.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  );

  const getCategoryStats = (categoryId: string) => {
    if (categoryId === 'All') {
      return {
        count: INNOVATIVE_SERVICES_2027.length,
        avgPrice: Math.round(INNOVATIVE_SERVICES_2027.reduce((sum, s) => sum + s.price, 0) / INNOVATIVE_SERVICES_2027.length),
        avgRating: Math.round((INNOVATIVE_SERVICES_2027.reduce((sum, s) => sum + s.rating, 0) / INNOVATIVE_SERVICES_2027.length) * 10) / 10
      };
    }
    const services = INNOVATIVE_SERVICES_2027.filter(s => s.category === categoryId);
    return {
      count: services.length,
      avgPrice: Math.round(services.reduce((sum, s) => sum + s.price, 0) / services.length),
      avgRating: Math.round((services.reduce((sum, s) => sum + s.rating, 0) / services.length) * 10) / 10
    };
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
        duration: 0.5
      }
    }
  };

  return (
    <>
      <SEOHead 
        title="All Services 2027 - Zion Tech Group"
        description="Explore our complete portfolio of cutting-edge technology services. From AI and cybersecurity to quantum computing and 5G solutions, we have everything your business needs to succeed."
        canonical="/all-services-2027"
        url="https://ziontechgroup.com/all-services-2027"
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

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

            </div>
          )}
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

export default AllServices2027;