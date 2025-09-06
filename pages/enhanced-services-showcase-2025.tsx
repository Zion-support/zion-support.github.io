
import { innovative2025Services } from '../data/innovative-2025-services';
import { emergingTech2025Services } from '../data/emerging-tech-2025-services';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length }
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount }
    {
      id: 'quantum'
      name: 'Quantum Computing'
      icon: '⚛️'
      count: quantumCount
    }
    {
      id: 'blockchain'
      name: 'Blockchain & Web3'
      icon: '⛓️'
      count: blockchainCount
    }
    { id: 'iot', name: 'IoT & Edge Computing', icon: '🌐', count: iotCount }
    { id: 'space', name: 'Space Technology', icon: '🚀', count: spaceCount }
    {
      id: 'security'
      name: 'Cybersecurity'
      icon: '🔒'
      count: cybersecurityCount
    },  ];
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' }
    { id: 'low', name: 'Under $2K/month', range: 'Under $2K' }
    { id: 'medium', name: '$2K - $8K/month', range: '$2K - $8K' }
    { id: 'high', name: '$8K - $20K/month', range: '$8K - $20K' }
    { id: 'premium', name: '$20K+/month', range: '$20K+' },  ];
  const sortOptions = [
    { id: 'name', name: 'Name A-Z' }
    { id: 'price-low', name: 'Price Low to High' }
    { id: 'price-high', name: 'Price High to Low' }
    { id: 'rating', name: 'Rating' }
    { id: 'customers', name: 'Customer Count' },  ];
  // Filter and sort services
  const filteredServices = React.useMemo(() => {
    const parsePriceToNumber = (price: string | number): number => {
      if (typeof price === 'number') return price
      if (typeof price === 'string') {
        const match = price.replace(/[^0-9.]/g, '');
        const parsed = parseFloat(match |'0');
        return isNaN(parsed) ? 0 : parsed;
      }
      return 0;
    }
    let filtered = allServices.filter(service => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' |
        (selectedCategory === 'ai' && service.category.includes('AI')) |
        (selectedCategory === 'quantum' &&
          service.category.includes('Quantum')) |
        (selectedCategory === 'blockchain' &&
          service.category.includes('Blockchain')) |
        (selectedCategory === 'iot' && service.category.includes('IoT')) |
        (selectedCategory === 'space' && service.category.includes('Space')) |
        (selectedCategory === 'security' &&
          (service.category.includes('Security') |
            service.category.includes('Cybersecurity')));
      const matchesPrice =
        selectedPriceRange === 'all' |
        (selectedPriceRange === 'low' &&
          parsePriceToNumber(service.price) < 2000) |
        (selectedPriceRange === 'medium' &&
          parsePriceToNumber(service.price) >= 2000 &&
          parsePriceToNumber(service.price) < 8000) |
        (selectedPriceRange === 'high' &&
          parsePriceToNumber(service.price) >= 8000 &&
          parsePriceToNumber(service.price) < 20000) |
        (selectedPriceRange === 'premium' &&
          parsePriceToNumber(service.price) >= 20000);
      return matchesSearch && matchesCategory && matchesPrice;    });
    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort(
          (a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price)
        );
        break;
      case 'price-high':
        filtered.sort(
          (a, b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price)
        );        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'customers':
        filtered.sort((a, b) => b.customers - a.customers);
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    return filtered;  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, allServices]);
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    },  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }
    visible: {
      opacity: 1
      y: 0
      transition: {
        duration: 0.5
      }
    }
  }

import {;
  Search, Star, Users, TrendingUp,;
  DollarSign, Clock, CheckCircle, ArrowRight,;
  Rocket, Monitor, Cpu,;
  Zap, Database, Cloud, Lock, Code,;
  Sparkles, Target, Award, Lightbulb;
} from 'lucide-react',;
import { innovative2025Services } from '../data/innovative-2025-services';
import { emergingTech2025Services } from '../data/emerging-tech-2025-services';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
export default function EnhancedServicesShowcase2025(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const allServices = [;
    ...innovative2025Services;
    ...emergingTech2025Services;
  ];
  // Dynamic category counts;
  const aiCount = allServices.filter(service => service.category.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category.includes('Quantum')).length;
  const blockchainCount = allServices.filter(service => service.category.includes('Blockchain')).length;
  const iotCount = allServices.filter(service => service.category.includes('IoT')).length;
  const spaceCount = allServices.filter(service => service.category.includes('Space')).length;
  const cybersecurityCount = allServices.filter(service => service.category.includes('Security') || service.category.includes('Cybersecurity')).length;
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },;
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },;
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: quantumCount },;
    { id: 'blockchain', name: 'Blockchain & Web3', icon: '⛓️', count: blockchainCount },;
    { id: 'iot', name: 'IoT & Edge Computing', icon: '🌐', count: iotCount },;
    { id: 'space', name: 'Space Technology', icon: '🚀', count: spaceCount },;
    { id: 'security', name: 'Cybersecurity', icon: '🔒', count: cybersecurityCount   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'low', name: 'Under $2K/month', range: 'Under $2K' },;
    { id: 'medium', name: '$2K - $8K/month', range: '$2K - $8K' },;
    { id: 'high', name: '$8K - $20K/month', range: '$8K - $20K' },;
    { id: 'premium', name: '$20K+/month', range: '$20K+'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const sortOptions = [;
    { id: 'name', name: 'Name A-Z' },;
    { id: 'price-low', name: 'Price Low to High' },;
    { id: 'price-high', name: 'Price High to Low' },;
    { id: 'rating', name: 'Rating' },;
    { id: 'customers', name: 'Customer Count'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  // Filter and sort services;
  const filteredServices = React.useMemo(() => {;
    const parsePriceToNumber = (price: string | number): number => {;
      if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
        const match = price.replace(/[^0-9.]/g, '');
        const parsed = parseFloat(match || '0');
        return isNaN(parsed) ? 0 : parsed;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      return 0;
    };
    let filtered = allServices.filter(service => {;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' ||;
                             (selectedCategory === 'ai' && service.category.includes('AI')) ||;
                             (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||;
                             (selectedCategory === 'blockchain' && service.category.includes('Blockchain')) ||;
                             (selectedCategory === 'iot' && service.category.includes('IoT')) ||;
                             (selectedCategory === 'space' && service.category.includes('Space')) ||;
                             (selectedCategory === 'security' && (service.category.includes('Security') || service.category.includes('Cybersecurity')));
      const matchesPrice = selectedPriceRange === 'all' ||;
                          (selectedPriceRange === 'low' && parsePriceToNumber(service.price) < 2000) ||;
                          (selectedPriceRange === 'medium' && parsePriceToNumber(service.price) >= 2000 && parsePriceToNumber(service.price) < 8000) ||;
                          (selectedPriceRange === 'high' && parsePriceToNumber(service.price) >= 8000 && parsePriceToNumber(service.price) < 20000) ||;
                          (selectedPriceRange === 'premium' && parsePriceToNumber(service.price) >= 20000);
      return matchesSearch && matchesCategory && matchesPrice;
    });
    // Sort services;
    switch (sortBy) {;
      case 'price-low':;
        filtered.sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price)),;
        break,;
      case 'price-high':;
        filtered.sort((a, b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price)),;
        break,;
      case 'rating':;
        filtered.sort((a, b) => b.rating - a.rating),;
        break,;
      case 'customers':;
        filtered.sort((a, b) => b.customers - a.customers),;
        break,;
      default:;
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, allServices]),;
  const containerVariants = {;
    hidden: { opacity: 0 };
    visible: {;
      opacity: 1;
      transition: {;
        staggerChildren: 0.1;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  const itemVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: {;
      opacity: 1,;
      y: 0;
      transition: {;
        duration: 0.5;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },
  return (
    <EnhancedFuturisticBackground
      intensity="high"
      colorScheme="quantum"
      particleCount={300  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      animationSpeed={1.5  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

    >
      <div className="min-h-screen">
        <Head>
          <title>2025 Innovative Services Showcase - Zion Tech Group | Revolutionary AI, Quantum & Emerging Tech</title>
          <meta name="description" content="Explore Zion Tech Group's revolutionary 2025 services: AI platforms, quantum computing, blockchain infrastructure, IoT solutions, and cutting-edge emerging technologies. Contact: +1 302 464 0950" />
          <meta name="keywords" content="AI services 2025, quantum computing, blockchain, IoT, edge computing, 5G, cybersecurity, metaverse, space technology, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="2025 Innovative Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Revolutionary AI, quantum computing, and emerging technology services for 2025. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/enhanced-services-showcase-2025" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/enhanced-services-showcase-2025" />
        </Head>

            >
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-12 h-12 text-cyan-400 mr-4" />
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  2025 Innovation Showcase
                </h1>
                <Sparkles className="w-12 h-12 text-pink-400 ml-4" />
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI, Quantum Computing & Emerging Technology Services
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Discover our cutting-edge solutions that are transforming industries and driving the future of technology
              </p>

                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-400">{aiCount + quantumCount}</div>
                  <div className="text-gray-400">AI & Quantum</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-green-400">{blockchainCount + iotCount}</div>
                  <div className="text-gray-400">Emerging Tech</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-pink-400">{spaceCount + cybersecurityCount}</div>
                  <div className="text-gray-400">Specialized</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

            <motion.div
              variants={containerVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              initial="hidden"
              animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredServices.map((service) => (
                  <motion.div
                    key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    variants={itemVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    layout className="group relative bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                          <Star className="w-4 h-4 fill-current" />
                          <span>Popular</span>
                        </div>

                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{service.customers}</span>
                      </div>
                    </div>

                        <span>Average ROI</span>
                      </div>
                      <div className="flex items-center space-x-1 text-blue-400">
                        <Clock className="w-4 h-4" />
                        <span>{service.setupTime}</span>
                      </div>
                    </div>

                      <a
                        href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        target="_blank"
                        rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <a
                        href="/contact" className="flex-1 bg-gray-700/60 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:bg-gray-600/60 transition-all duration-300 border border-gray-600 hover:border-gray-500">
                        Contact Us
                      </Link>
                    </div>

                        <div>✉️ {service.contactInfo.email}</div>
                        <div>🌐 {service.contactInfo.website}</div>
                      </div>
                    </div>
                  </motion.div>

            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies achieving breakthrough results with our revolutionary services
              </p>

                  </div>
                  <span className="text-lg text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-lg text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-lg text-white">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>

                <a
                  href="/contact" className="inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white shadow-lg hover:shadow-xl border border-blue-500/20 no-underline">
                  <span className="relative">Start Your Transformation</span>
                  <Rocket className="ml-2 w-6 h-6" />
                </Link>
                <a
                  href="/pricing" className="inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 text-white shadow-lg hover:shadow-xl border border-gray-500/20 no-underline">
                  <span className="relative">View Pricing</span>
                  <DollarSign className="ml-2 w-6 h-6" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>

