
import { motion, AnimatePresence } from 'framer-motion';
import {;
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin,;
  Rocket, Brain, Atom, Shield, Award, Zap, Cloud, Target, Search,;
  Filter, Grid, List, DollarSign, Users, Clock, Eye, Heart;
} from 'lucide-react',;
import { comprehensiveRealServices2025 } from '../data/2025-comprehensive-real-services';
const contactInfo = {;
  mobile: '+1 302 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709';
  website: 'https://ziontechgroup.com';
};
const categories = [;
  'All ServicesAI & Machine LearningCustomer SuccessSupply ChainFinancial PlanningSales IntelligenceHR AnalyticsDecision Intelligence';
  'Content MarketingCRM & Customer IntelligenceBusiness Intelligence';
];
const pricingRanges = [;
  'All PricesUnder $300$300 - $500$500 - $800$800+';
];
export default function ComprehensiveServicesShowcase2025(req, res) {
  try {

  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');
  // Filter services based on selections;
  const filteredServices = comprehensiveRealServices2025.filter(service => {;
    const categoryMatch = selectedCategory === 'All Services' || service.category.includes(selectedCategory);
    let priceMatch = true;
    if (selectedPriceRange !== 'All Prices') {;
      const price = parseInt(service.price.replace('$', '')),;
      switch (selectedPriceRange) {;
        case 'Under $300':;
          priceMatch = price < 300;
          break,;
        case '$300 - $500':;
          priceMatch = price >= 300 && price <= 500;
          break,;
        case '$500 - $800':;
          priceMatch = price > 500 && price <= 800;
          break,;
        case '$800+':;
          priceMatch = price > 800;
          break;
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
;
    const searchMatch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                       service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                       service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && priceMatch && searchMatch;
  });
  // Sort services;
  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'name':;
        return a.name.localeCompare(b.name);
      case 'price':;
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')),;
      case 'rating':;
        return b.rating - a.rating,;
      case 'popularity':;
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),;
      default: return 0;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }),

  const getPriceRange = (price: string) => {
    const numPrice = parseInt(price.replace('$', '')),
    if (numPrice < 300) return 'Under $300',
    if (numPrice <= 500) return '$300 - $500',
    if (numPrice <= 800) return '$500 - $800',
    return '$800+'
  },
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat =>
      category.toLowerCase().includes(cat.id.toLowerCase())
    ),
    return categoryData ? categoryData.icon : Globe
  },
  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat =>
      category.toLowerCase().includes(cat.id.toLowerCase())
    ),
    return categoryData ? categoryData.color : 'from-gray-500 to-gray-600'
  },

  return (
    <>
      <Head>
        <title>Comprehensive Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of real, innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, business automation, customer success, supply chain optimization, financial planning, sales intelligence" />
        <meta property="og:title" content="Comprehensive Services Showcase 2025 | Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive portfolio of real, innovative micro SAAS services, IT solutions, and AI platforms." />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
      </Head>

                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$2.5B+</div>
                  <div className="text-gray-400">Market Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-gray-400">AI Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">400%</div>
                  <div className="text-gray-400">Average ROI</div>
                </div>
              </div>

                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </Link>
                    </div>

                <a
                  href={`tel:${contactInfo.mobile}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {contactInfo.mobile  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </Link>
                <a
                  href={`mailto:${contactInfo.email}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="flex items-center px-6 py-3 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {contactInfo.email  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </Link>
              </div>
              <div className="text-center text-gray-400">
                <p className="mb-2">{contactInfo.address}</p>
                <p>Visit us at: <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">{contactInfo.website}</Link></p>
              </div>
            </motion.div>
          </div>
        </section>
    </>

  )
},
export default ComprehensiveServicesShowcase2025,

