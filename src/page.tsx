  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Cpu, 
  Target, 
  BarChart, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Award, 
  Lock, 
  Database, 
  Cloud, 
  Code, 
  Smartphone, 
  Settings, 
  FileText, 
  Search, 
  Bot, 
  Palette, 
  Camera, 
  Music, 
  Video, 
  Gamepad2, 
  ShoppingCart, 
  CreditCard, 
  Building, 
  Factory, 
  Car, 
  Plane, 
  Ship, 
  Train, 
  Home, 
  Heart, 
  Stethoscope, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  Scissors, 
  BookOpen, 
  Calculator, 
  Calendar, 
  Clock3, 
  Compass, 
  Navigation as NavIcon, 
  PieChart, 
  TrendingDown, 
  Activity, 
  Atom, 
  Rocket, 
  Microscope, 
  Layers, 
  Server, 
  Network, 
  HardDrive, 
  Wifi, 
  Monitor, 
  Keyboard, 
  Mouse, 
  Headphones, 
  Printer, 
  Scanner, 
  Router, 
  Switch, 
  Firewall, 
  Antivirus, 
  Backup, 
  Recovery, 
  Migration, 
  Integration, 
  Consulting, 
  Support, 
  Maintenance, 
  Upgrade, 
  Security as SecurityIcon, 
  Compliance, 
  Audit, 
  Training, 
  Documentation, 
  Testing, 
  Quality, 
  Performance, 
  Scalability, 
  Reliability, 
  Availability, 
  Monitoring, 
  Alerting, 
  Logging, 
  Analytics, 
  Reporting, 
  Dashboard 
} from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';
import { microSaasServices, aiServices, itServices, specializedServices } from '../data/2025-comprehensive-real-services-enhanced';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
    }, 100);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    preloadComponents();
    
    // Initialize performance optimizations
    initializePerformanceOptimizations();
    
    return () => clearTimeout(timer);
  }, []);

  }, []);

  // Enhanced Micro SAAS Services with real functionality and pricing
  const microSAASServices = microSaasServices.map(service => ({
    title: service.name,
    description: service.description,
    icon: service.icon,
    price: `$${service.pricing.starter.price}/month`,
    features: service.features.slice(0, 6),
    benefits: service.benefits,
    link: service.website.replace('https://ziontechgroup.com', ''),
    popular: service.pricing.starter.price < 200,
    category: service.category,
    marketPrice: service.marketPrice,
    savings: service.savings
  }));

  // Enhanced AI Services with real capabilities and market pricing
  const aiServicesData = aiServices.map(service => ({
    title: service.name,
    description: service.description,
    icon: Brain, // Default icon, can be customized per service
    price: `$${service.pricing.starter.price.toLocaleString()}/month`,
    features: service.features.slice(0, 8),
    color: 'text-purple-400',
    benefits: service.benefits,
    marketPrice: service.marketPrice,
    savings: service.savings,
    contact: service.contact.email
  }));

  // Enhanced IT Services with comprehensive capabilities
  const itServicesData = itServices.map(service => ({
    title: service.name,
    description: service.description,
    icon: Cloud, // Default icon, can be customized per service
    price: `$${service.pricing.starter.price.toLocaleString()}/month`,
    features: service.features.slice(0, 8),
    color: 'text-blue-400',
    benefits: service.benefits,
    marketPrice: service.marketPrice,
    savings: service.savings,
    contact: service.contact.phone
  }));

  // Specialized Services
  const specializedServicesData = specializedServices.map(service => ({
    title: service.name,
    description: service.description,
    icon: BarChart, // Default icon, can be customized per service
    price: `$${service.pricing.starter.price.toLocaleString()}/month`,
    features: service.features.slice(0, 8),
    color: 'text-orange-400',
    benefits: service.benefits,
    marketPrice: service.marketPrice,
    savings: service.savings,
    contact: service.contact.phone
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Performance Optimizer */}
      <PerformanceOptimizer />
      
      {/* SEO Optimizer */}
      <SEOOptimizer />
      
      {/* Accessibility Enhancer */}
      <AccessibilityEnhancer />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        }}></div>

            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8 font-light">
              AI-Powered Enterprise Solutions & Digital Transformation
            </p>
                </a>
              </div>
              <div className="flex items-center text-purple-400 text-lg">
                <Mail className="w-6 h-6 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-300 transition-colors">

            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      🔥 POPULAR
                    </div>
                  </p>
                </div>
                
                    </span>
                  </div>
                </div>
                
                  </ul>
                </div>
                
                  </ul>
                </div>
                
          </div>
        </div>
      </section>

            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServicesData.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  </p>
                </div>
                
                    </span>
                  </div>
                </div>
                
                  </ul>
                </div>
                
                  </ul>
                </div>
                
          </div>
        </div>
      </section>

            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServicesData.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-green-400/20 hover:border-green-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                  </p>
                </div>
                
                    </span>
                  </div>
                </div>
                
                  </ul>
                </div>
                
                  </ul>
                </div>
                
          </div>
        </div>
      </section>

            <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced specialized solutions for complex business challenges. 
              Cutting-edge technology meets practical business needs.
            </p>
          </div>
          
                  </p>
                </div>
                
                    </span>
                  </div>
                </div>
                
                  </ul>
                </div>
                
                  </ul>
                </div>
                
          </div>
        </div>
      </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our experts</p>
              <a href="tel:+13024640950" onClick={handlePhoneClick} className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              </a>
            </div>
            
            <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-pink-400/20 hover:border-pink-400/60 transition-all duration-300">
              <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              </p>
  );
};

export default HomePage;
