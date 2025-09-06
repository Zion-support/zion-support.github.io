
} from 'lucide-react';
import UltraQuantumHolographicBackground from '../components / ui / UltraQuantumHolographicBackground';
import UltraAdvancedNavigation from '../components / layout / UltraAdvancedNavigation';
import {revolutionaryAI2025Services} from '../data / revolutionary - 2025 - ai - services';
import {revolutionaryITInfrastructure2025Services} from '../data / revolutionary - 2025 - it - infrastructure';
import {revolutionary2025MicroSaasServices} from '../data / revolutionary - 2025 - micro - saas';
export default /**
 * Revolutionary2025Pricing - Function description
 */
function Revolutionary2025Pricing() {
  const [billing_cycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly');  const [selected_category, setSelectedCategory] = useState < string>('all');
;
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',  }
;
  // Combine all revolutionary services;
  const allRevolutionaryServices = [;
    ...revolutionaryAI2025Services,
    ...revolutionaryITInfrastructure2025Services,
    ...revolutionary2025MicroSaasServices,  ];
;
  // Service categories;
  const service_categories = [;

    {
      id: 'all'
      name: 'All Services'
      icon: Sparkles
      count: allRevolutionaryServices.length
    }
    {
      id: 'ai'
      name: 'AI & Machine Learning'
      icon: Brain
      count: revolutionaryAI2025Services.length
    }
    {
      id: 'infrastructure'
      name: 'IT Infrastructure'
      icon: Cpu
      count: revolutionaryITInfrastructure2025Services.length
    }
    {
      id: 'saas'
      name: 'Micro SaaS'
      icon: Zap
      count: revolutionary2025MicroSaasServices.length
    }
  ];

export default function Revolutionary2025Pricing() {;
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(;
    'monthly';
  );  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',  };

  // Combine all revolutionary services;
  const allRevolutionaryServices = [;
    ...revolutionaryAI2025Services,;
    ...revolutionaryITInfrastructure2025Services,;
    ...revolutionary2025MicroSaasServices,  ];

  // Service categories;
  const serviceCategories = [;
    {;
      id: 'all',;
      name: 'All Services',;
      icon: Sparkles,;
      count: allRevolutionaryServices && allRevolutionaryServices.length,;
    },;
    {;
      id: 'ai',;
      name: 'AI & Machine Learning',;
      icon: Brain,;
      count: revolutionaryAI2025Services && revolutionaryAI2025Services.length,;
    },;
    {;
      id: 'infrastructure',;
      name: 'IT Infrastructure',;
      icon: Cpu,;
      count: revolutionaryITInfrastructure2025Services && revolutionaryITInfrastructure2025Services.length,;
    },;
    {;
      id: 'saas',;
      name: 'Micro SaaS',;
      icon: Zap,;
      count: revolutionary2025MicroSaasServices && revolutionary2025MicroSaasServices.length,;
    },;
  ];

  // Filter services based on selected category;
  const filteredServices =;
    selectedCategory === 'all';
      ? allRevolutionaryServices;
      : allRevolutionaryServices && allRevolutionaryServices.filter(service => {;
          if (selectedCategory === 'ai') return service && service.category.includes('AI');
          if (selectedCategory === 'infrastructure');
            return (
              service && service.category.includes('IT') ||;
              service && service.category.includes('Network') ||;
              service && service.category.includes('Computing');

            );
          if (selectedCategory === 'saas');
            return (
              service.category.includes('AI') |
              service.category.includes('Virtual') |
              service.category.includes('Creative')
            );
          return true;
        });
  // Calculate pricing with billing cycle
  const getPrice = (service: any) => {
    const basePrice = parseInt(service.price.replace('$', '').replace(',', ''));
    if (billingCycle === 'yearly') {
      return Math.floor(basePrice * 0.8); // 20% discount for yearly
    }

import { Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Check, X, AlertTriangle, Info, Zap as ZapIcon, Shield as ShieldIcon, Users as UsersIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon, Cloud as CloudIcon, Smartphone as SmartphoneIcon, Palette as PaletteIcon, Search as SearchIcon, MessageSquare as MessageSquareIcon, FileText as FileTextIcon, Calendar as CalendarIcon, CreditCard as CreditCardIcon, BarChart3 as BarChart3Icon, Settings as SettingsIcon, Code as CodeIcon, BookOpen as BookIcon, Activity as ActivityIcon, Database as DatabaseIcon2, Play as PlayIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Filter as FilterIcon, Grid as GridIcon, List as ListIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Sparkles as SparklesIcon, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Brain as BrainIcon, Atom as AtomIcon, Globe2 as Globe2Icon, Bot as BotIcon, ChevronRight as ChevronRightIcon, Eye, Heart, Share2, Download, Bookmark, ThumbsUp, MessageCircle, Share, Users as UsersIcon2, Target as TargetIcon, Zap as ZapIcon2 } from 'lucide-react';

import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { revolutionaryAI2025Services } from '../data/revolutionary-2025-ai-services';
import { revolutionaryITInfrastructure2025Services } from '../data/revolutionary-2025-it-infrastructure';
import { revolutionary2025MicroSaasServices } from '../data/revolutionary-2025-micro-saas';
export default function Revolutionary2025Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionaryAI2025Services;
    ...revolutionaryITInfrastructure2025Services;
    ...revolutionary2025MicroSaasServices
  ];

  // Service categories
  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: revolutionaryAI2025Services.length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, count: revolutionaryITInfrastructure2025Services.length },
          { id: 'saas', name: 'Micro SaaS', icon: Zap, count: revolutionary2025MicroSaasServices.length }
  ];

  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all' 
    ? allRevolutionaryServices 
    : allRevolutionaryServices.filter(service => {
        if (selectedCategory === 'ai') return service.category.includes('AI');
        if (selectedCategory === 'infrastructure') return service.category.includes('IT') || service.category.includes('Network') || service.category.includes('Computing');
        if (selectedCategory === 'saas') return service.category.includes('AI') || service.category.includes('Virtual') || service.category.includes('Creative');
        return true
      });

  // Calculate pricing with billing cycle
  const getPrice = (service: any) => {
    const basePrice = parseInt(service.price.replace('$', '').replace(',', ''));
    if (billingCycle === 'yearly') {
      return Math.floor(basePrice * 0.8); // 20% discount for yearly
    }
    return basePrice
  },

  // Pricing tiers for comparison
  const pricingTiers = [
    {
      name: 'Starter'
      description: 'Perfect for small businesses and startups'
      price: billingCycle === 'monthly' ? 99 : 79
      period: billingCycle === 'monthly' ? '/month' : '/month'
      savings: billingCycle === 'yearly' ? 'Save 20%' : ''
      features: [

  return (
    <UltraQuantumHolographicBackground intensity={2.0}>
      <div className="min-h-screen">
        <Head>

            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Revolutionary 2025 Pricing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of technology at competitive prices. Our revolutionary services
                deliver 10x better performance at 50% lower costs than traditional solutions.
              </p>

                  />
                </button>
                <span className='text-gray-400'>Yearly (Save 20%)</span>
              </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }} className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400">{marketAnalysis.totalMarketSize}</div>
                  <div className="text-xs text-gray-400">Market Size</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }} className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400">{marketAnalysis.growthRate}</div>
                  <div className="text-xs text-gray-400">Growth Rate</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }} className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-400">{marketAnalysis.customerSatisfaction}</div>
                  <div className="text-xs text-gray-400">Satisfaction</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }} className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/30">
                  <div className="text-2xl font-bold text-orange-400">{marketAnalysis.averageROI}</div>
                  <div className="text-xs text-gray-400">Average ROI</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }} className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/30">
                  <div className="text-2xl font-bold text-cyan-400">{marketAnalysis.timeToValue}</div>
                  <div className="text-xs text-gray-400">Time to Value</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }} className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-2xl p-4 border border-pink-500/30">
                  <div className="text-2xl font-bold text-pink-400">{marketAnalysis.globalReach}</div>
                  <div className="text-xs text-gray-400">Global Reach</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

                Choose Your Transformation Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our starter plan and scale up as you grow. All plans include 
                our revolutionary AI and quantum computing services.
              </p>
            </motion.div>

                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>

                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                Individual Service Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose individual services or bundle them for maximum savings. 
                All services include free trials and comprehensive support.
              </p>
            </motion.div>

                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Popular
                      </div>

                      </span>
                      <span className='text-gray-400'>{service.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>

                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-500 mt-1">
                          +{service.features.length - 3} more features
                        </div>

                      Learn More
                    </button>
                    <button className="border-blue-500 text-blue-400 hover:bg-blue-500/20">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>

            >

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss your specific needs and get a custom quote. 
                We offer flexible pricing and payment options to fit your budget.
              </p>

                  Get Custom Quote
                </button>
                <button className="border-blue-500 text-blue-400 hover:bg-blue-500/20">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Download Pricing Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraQuantumHolographicBackground>

  )
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;

                Ready to Get Started?;
              </h2>;
              <p className='text-xl text-gray-300 mb-8'>;
                  </p>;
                  {/* Price and Rating */}
                  <div className='flex items - center justify - between mb - 4'>;
                    <div className='flex items - center gap - 2'>;
                      <span className='text - 2xl font - bold text - blue - 400'>;
                        ${get_price (service)}
                      </span>;
                      <span className='text - gray - 400'>{service.period}</span>;
                    </div>;
                    <div className='flex items - center gap - 1'>;
                      <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />;
                      <span className='text - white'>{service.rating}</span>;
                      <span className='text - gray - 400 text - sm'>;
                        ({service.reviews});
                      </span>                    </div>;
                  </div>;
                  {/* Key Features */}
                  <div className='mb - 4'>;
                    <h4 className='text - sm font - semibold text - gray - 300 mb - 2'>;
                      Key Features:;
                    </h4>;
                    <div className='grid grid - cols - 1 gap - 1'>;
                      {service.features.slice (0, 3).map ((feature, idx) => (
                        <div;
                          key={idx}
                          className='flex items - center gap - 2 text - sm text - gray - 400';
                        >;
                          <div className='w - 1.5 h - 1.5 bg - blue - 500 rounded - full'></div>                          {feature}
                        </div>))}
                      {service.features.length > 3 && (
                        <div className='text - xs text - gray - 500 mt - 1'>                          +{service.features.length - 3} more features;
                        </div>)}
                    </div>;
                  </div>;
                  {/* Market Position */}
                  <div className='mb - 4 p - 3 bg - gray - 800 / 50 rounded - lg'>;
                    <h4 className='text - xs font - semibold text - gray - 300 mb - 1'>;
                      Market Position:;
                    </h4>;
                    <p className='text - xs text - gray - 400 line - clamp - 2'>;
                      {service.market_position}
                    </p>;
                  </div>;
                  {/* Actions */}
                  <div className='flex items - center gap - 3'>;
                    <button className='flex - 1 bg - gradient - to - r from - blue - 600 to - purple - 600 hover:from - blue - 700 hover:to - purple - 700'>;
                      <ExternalLink className='w - 4 h - 4 mr - 2' />;
                      Learn More;
                    </button>;
                    <button className='border - blue - 500 text - blue - 400 hover:bg - blue - 500 / 20'>;
                      <Phone className='w - 4 h - 4' />                    </button>;
                  </div>;
                  {/* Hover Effects */}
                  <div className='absolute inset - 0 bg - gradient - to - r from - blue - 600 / 5 to - purple - 600 / 5 rounded - 2xl opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300 pointer - events - none'></div>                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Contact Section */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-4xl mx - auto text - center'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                Ready to Get Started?;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8'>;
                Contact our team to discuss your specific needs and get a custom;
                quote. We offer flexible pricing and payment options to fit your;
                budget.;
              </p>;

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>;
                <div className='bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30'>;
                  <Phone className='w-8 h-8 text-blue-400 mx-auto mb-3' />;
                  <h3 className='text-lg font-semibold text-white mb-2'>;
                    Call Us;
                  </h3>;
                  <p className='text-blue-400 font-mono'>;
                    {contactInfo && contactInfo.mobile}
                  </p>;
                </div>;

  )
}
              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8'>;
                <div className='bg - gradient - to - br from - blue - 600 / 20 to - purple - 600 / 20 backdrop - blur - sm rounded - 2xl p - 6 border border - blue - 500 / 30'>;
                  <Phone className='w - 8 h - 8 text - blue - 400 mx - auto mb - 3' />;
                  <h3 className='text - lg font - semibold text - white mb - 2'>;
                    Call Us;
                  </h3>;
                  <p className='text - blue - 400 font - mono'>;
                    {contact_info.mobile}
                  </p>;
                </div>;
                <div className='bg - gradient - to - br from - green - 600 / 20 to - emerald - 600 / 20 backdrop - blur - sm rounded - 2xl p - 6 border border - green - 500 / 30'>;
                  <Mail className='w - 8 h - 8 text - green - 400 mx - auto mb - 3' />;
                  <h3 className='text - lg font - semibold text - white mb - 2'>;
                    Email Us;
                  </h3>;
                  <p className='text - green - 400'>{contact_info.email}</p>;
                </div>;
                <div className='bg - gradient - to - br from - purple - 600 / 20 to - pink - 600 / 20 backdrop - blur - sm rounded - 2xl p - 6 border border - purple - 500 / 30'>;
                  <MapPin className='w - 8 h - 8 text - purple - 400 mx - auto mb - 3' />;
                  <h3 className='text - lg font - semibold text - white mb - 2'>;
                    Visit Us;
                  </h3>;
                  <p className='text - purple - 400 text - sm'>;
                    {contact_info.address}
                  </p>;
                </div>;
              </div>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
                <button className='bg - gradient - to - r from - blue - 600 to - purple - 600 hover:from - blue - 700 hover:to - purple - 700'>;
                  <Phone className='w - 5 h - 5 mr - 2' />;
                  Get Custom Quote;
                </button>;
                <button className='border - blue - 500 text - blue - 400 hover:bg - blue - 500 / 20'>;
                  <BookOpen className='w - 5 h - 5 mr - 2' />                  Download Pricing Guide;
                </button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;

    </UltraQuantumHolographicBackground>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

