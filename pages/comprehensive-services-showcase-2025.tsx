
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',

  'All Services',
  'AI & Machine Learning',
  'Customer Success',
  'Supply Chain',
  'Financial Planning',
  'Sales Intelligence',
  'HR Analytics',
  'Decision Intelligence',
  'Content Marketing',
  'CRM & Customer Intelligence',
  'Business Intelligence',
];

  'All Prices',
  'Under $300',
  '$300 - $500',
  '$500 - $800',

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

  const getPriceRange = (price: string) => {
    const numPrice = parseInt(price.replace('$', '')),
    if (numPrice < 300) return 'Under $300',
    if (numPrice <= 500) return '$300 - $500',
    if (numPrice <= 800) return '$500 - $800',
    return '$800+'
  },

      category.toLowerCase().includes(cat.id.toLowerCase())
    ),
    return categoryData ? categoryData.icon : Globe
  },

      category.toLowerCase().includes(cat.id.toLowerCase())
    ),
    return categoryData ? categoryData.color : 'from-gray-500 to-gray-600'
  },

  return (
    <>
      <Head>
        <title>Comprehensive Services Showcase 2025 | Zion Tech Group</title>

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
