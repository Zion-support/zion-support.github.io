class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';


} from 'lucide-react';

interface Service {;
import {;
  Brain,;
  Shield,;
  Rocket,;
  Cpu,;
  Database,;
  Atom,;
  Users,;
  CheckCircle,;
  TrendingUp,;
  Clock,;
  Star,;
  Filter,;
  ChevronDown,;
import React, { useState } from 'react';

import React, { useState } from 'react';

import {

  Brain
  Shield
  Rocket
  Cpu
  Database
  Atom
  Users
  CheckCircle
  TrendingUp
  Clock
  Star
  Filter
  ChevronDown;
  Brain,
  Shield,
  Rocket,
  Cpu,
  Database,
  Atom,
  Users,
  CheckCircle,
  TrendingUp,
  Clock,
  Star,
  Filter,;
  ChevronDown,;

} from 'lucide-react';

interface Service {;
        {/* Filters */}

const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [searchTerm, setSearchTerm] = useState($2);
  const services: Service[] = [
    {
      id: 'ai-bi',
      name: 'AI Business Intelligence',
      tagline: 'Transform data into actionable insights with AI-powered analytics',
      category: 'AI & Analytics',
      price: '$499',
      period: '/month',
      setupTime: '2-3 weeks',
      customers: '150+',
      features: ['AI-powered dashboardsPredictive analyticsReal-time insightsCustom reporting'],
      benefits: ['30% faster decision makingImproved data accuracyCost reduction'],
      roi: 'Average 3.2x ROI within 6 months',
      marketSize: '$25B',
      growthRate: '25% YoY',
      popular: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'quantum-cyber',
      name: 'Quantum Cybersecurity',
      tagline: 'Future-proof security with quantum-resistant encryption and AI threat detection',
      category: 'Security',
      price: '$799',
      period: '/month',
      setupTime: '4-6 weeks',
      customers: '75+',
      features: ['Quantum-resistant encryptionAI threat detectionZero-trust architecture24/7 monitoring'],
      benefits: ['99.99% threat preventionCompliance readyReduced security incidents'],
      roi: 'Average 4.1x ROI within 8 months',
      marketSize: '$18B',
      growthRate: '32% YoY',
      popular: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Orchestration',
      tagline: 'Deploy and manage applications at the edge with intelligent orchestration',
      category: 'Infrastructure',
      price: '$349',
      period: '/month',
      setupTime: '1-2 weeks',
      customers: '200+',
      features: ['Edge node managementIoT device managementReal-time monitoringAuto-scaling'],
      benefits: ['50% latency reductionImproved reliabilityCost optimization'],
      roi: 'Average 2.8x ROI within 4 months',
      marketSize: '$12B',
      growthRate: '28% YoY',
      popular: false,
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'space-tech',
      name: 'Space Technology Innovation',
      tagline: 'Accelerate space exploration with cutting-edge technology solutions',
      category: 'Space Tech',
      price: '$2,499',
      period: '/month',
      setupTime: '8-12 weeks',
      customers: '25+',
      features: ['Satellite managementAI mission planningQuantum communicationSpace analytics'],
      benefits: ['Mission success rate 95%+Reduced launch costsAdvanced capabilities'],
      roi: 'Average 5.2x ROI within 12 months',
      marketSize: '$8B',
      growthRate: '45% YoY',
      popular: true,
      icon: Rocket,
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface Development',
      tagline: 'Build the future of human-computer interaction with neural interfaces',
      category: 'Emerging Tech',
      price: '$899',
      period: '/month',
      setupTime: '6-8 weeks',
      customers: '40+',
      features: ['BCI development toolsNeural signal processingAI pattern recognitionSafety protocols'],
      benefits: ['Revolutionary UXAccessibility improvementsResearch advancement'],
      roi: 'Average 6.8x ROI within 18 months',
      marketSize: '$3B',
      growthRate: '67% YoY',
      popular: false,
      icon: Brain,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'quantum-ai',
      name: 'Quantum AI Neural Networks',
      tagline: 'Quantum-powered AI with advanced consciousness capabilities',
      category: 'Quantum AI',
      price: '$1,299',
      period: '/month',
      setupTime: '10-14 weeks',
      customers: '15+',
      features: ['Quantum neural networksConsciousness simulationAdvanced learningQuantum optimization'],
      benefits: ['Unprecedented AI capabilitiesBreakthrough researchCompetitive advantage'],
      roi: 'Average 8.5x ROI within 24 months',
      marketSize: '$2B',
      growthRate: '89% YoY',
      popular: true,
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    }
  ],

  const categories = ['all', ...Array.from(new Set(services.map(s = $2;
  const filteredServices = $2;
    const matchesSearch = $2;
    return matchesCategory && matchesSearch
  }),

  const getCategoryIcon = $2;
      'Security': Shield,
      'Infrastructure': Cpu,
      'Space Tech': Rocket,
      'Emerging Tech': Brain,
      'Quantum AI': Atom
    },
    return iconMap[category] || Brain
  },

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology solutions designed to transform your business and accelerate innovation
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
          {/* Category Filter */}
          <div className='relative'    />;
            <select;
              value={selectedCategory}
              onChange={e =    /> setSelectedCategory(e.target.value)}
              className='px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 appearance-none pr-12';
            >;
              {categories.map(category => { return (<option; }
                  }
                  key={category}
                  value={category}
                  className='bg-slate-800 text-white'
                >                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none' />          {/* Category Filter */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 appearance-none pr-12">{categories.map((category) => (
                <option key={category} value={category} className="bg-slate-800 text-white">
              {categories.map((category) => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
                  {category === 'all' ? 'All Categories' : category}
                </option>;
              ))}


            </select>;
            <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none' />;
          </div>;

          {/* Search */}
          <div className='relative'>;
            <input
              type='text'
              placeholder='Search services...'
              value={searchTerm}

              onChange={e => setSearchTerm(e && e.target.value)}
              className='px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300 w-64';
            />;
            <Filter className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50'    />;
          </div>;
        </div>;
        {/* Services Grid */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>          </div>;

          {/* Search */}
          <div className="relative">;
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}



        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Popular
                    </div>
                  </div>
                </div>
              )}

              {/* Service Content */}
              <div className='p-8'>
        </div>
              {/* Service Content */}
                {/* Icon and Category */}
                <div className='flex items-center justify-between mb-4'>;'
                  <div;
      'color': 'from - blue - 500 to - cyan - 500'}];const categories = [;'
    'all',...Array.from (new Set (services.map (string => s.category))),const filtered_services = services.filter ((service) => {const matches_category =;'
      }
      'color': 'from - blue - 500 to - cyan - 500'}];'


                  <div;
      color: 'from - blue - 500 to - cyan - 500',},];const categories = [;
    'all',...Array.from (new Set (services.map (string =    /> s.category))),const filtered_services = services.filter (service => {const matches_category =;}
      color: 'from - blue - 500 to - cyan - 500',},];

const categories = [
  'all',...Array.from (new Set (services.map (string = > s.category))),const filtered_services = services.filter (service => ;
  const matches_category =;
      selected_category === 'all' || service.category === selected_category;

const matches_search =;
      service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.tagline.toLowerCase ().includes (search_term.toLowerCase ())return matches_category && matches_search;  })const getCategoryIcon = (category: string) =>: any {const icon_map: { [key: string]: React.ComponentType < any> } = {    const matches_category = selected_category === 'all' || service.category === selected_category;
    const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;}
                        service.tagline.toLowerCase ().includes (search_term.toLowerCase ())return matches_category && matches_search;}
  const getCategoryIcon = (category: string) =>: any {const icon_map: { [key: string]: React.ComponentType < any> } = {'AI & Analytics': Brain,Security: Shield,Infrastructure: Cpu,'Space Tech': Rocket,'Emerging Tech': Brain,'Quantum AI': Atom,}
      service.tagline.toLowerCase ().includes (search_term.toLowerCase ())return matches_category && matches_search;  })const getCategoryIcon = (category: string) =>: any {const icon_map: { [key: string]: React.ComponentType < any>,}
} = {   ;
  const matches_category = selected_category === 'all' || service.category === selected_category;

const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.tagline.toLowerCase ().includes (search_term.toLowerCase ())return matches_category && matches_search;

const getCategoryIcon = ('category': string) =>: any ;
const 'icon_map': { ['key': string]: React.ComponentType < any>,;
} = {'AI & Analytics': Brain,'Security': Shield,'Infrastructure': Cpu,'Space Tech': Rocket,'Emerging Tech': Brain,'Quantum AI': Atom}'
    return icon_map[category] || Brain;
  }return (<section id='services' className='py - 24 px - 6 relative overflow - hidden'>;'
      {/* Background */}
      <div className='absolute inset - 0 bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950'>;'
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (59, 130, 246, 0.1), transparent_50%)]' />;'
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (168, 85, 247, 0.1), transparent_50%)]' />;'
      </div>;
      <div className='max - w-7xl mx - auto relative z - 10'>;'
        {/* Header */}
        <div className='text - center mb - 16'>;'
          <h2 className='text - 4xl 'md':text - 5xl font - bold text - white mb - 6'>;'
            <span className='bg - gradient - to - r from - blue - 400 to - cyan - 400 bg - clip - text text - transparent'>;'
              Our Services;
            </span>;
          </h2>;
            </div>))}
        </div>;
        </div>;{/* CTA Section */}{/* CTA Section */}
<div className='text-center mt-16'>;'
          <div className='bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20'>;'
            <h3 className='text-2xl font-bold text-white mb-4'>;'
              Ready to Transform Your Business?;
            </h3>;
            <p className='text-white/70 mb-6 max-w-2xl mx-auto'>;'
              Let's discuss how our cutting-edge technology solutions can;'
              accelerate your digital transformation journey.;
            </p>;
            <div className='flex flex-col 'sm':flex-row gap-4 justify-center'>;'
          ))}
        {/* CTA Section */}
        <div className='text-center mt-16'>;'
          <div className='bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20'>;'
            <h3 className='text-2xl font-bold text-white mb-4'>;'
              Ready to Transform Your Business?;
            </h3>;
            <p className='text-white/70 mb-6 max-w-2xl mx-auto'>;'
              Let's discuss how our cutting-edge technology solutions can;'
              accelerate your digital transformation journey.;
            </p>;
            <div className='flex flex-col 'sm':flex-row gap-4 justify-center'>;'
              <a;
                href=''mailto':kleber@ziontechgroup && ziontechgroup.com?subject=Consultation Request';'
                className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 'hover':from-blue-700 'hover':to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform 'hover':scale-105 'hover':shadow-2xl'>;'
                Schedule Consultation;
              </a>;
              <a;
                href=''tel':+13024640950';'
                className='px-8 py-4 border border-white/20 'hover':border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 'hover':bg-white/10'>              Ready to Transform Your Business?;'
            </h3>;
            <p className='text-white/70 mb-6 max-w-2xl mx-auto'>;'
              Let's discuss how our cutting-edge technology solutions can accelerate your digital transformation journey.;'
            </p>;
            <div className='flex flex-col 'sm': flex-row gap-4 justify-center'>;'
              <a;
                href=''mailto':kleber@ziontechgroup && ziontechgroup.com?subject=Consultation Request';'
                className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 'hover':from-blue-700 'hover':to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform 'hover':scale-105 'hover':shadow-2xl'>;'
                Schedule Consultation;
              </a>;
              <a;
                href=''tel':+13024640950';'
                className='px-8 py-4 border border-white/20 'hover':border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 'hover':bg-white/10'                href=''tel':+13024640950';'
            </div>))}
        </div>;
        {/* CTA Section */}
        <div className='text - center mt - 16'>;'
          <div className='bg - gradient - to - r from - blue - 600 / 20 to - cyan - 600 / 20 rounded - 3xl p - 8 border border - blue - 500 / 20'>;'
            <h3 className='text - 2xl font - bold text - white mb - 4'>;'
              Ready to Transform Your Business?;
            </h3>;
            <p className='text - white / 70 mb - 6 max - w-2xl mx - auto'>;'
              Let's discuss how our cutting - edge technology solutions can;'
              accelerate your digital transformation journey.;
            </p>;
            <div className='flex flex - col 'sm':flex - row gap - 4 justify - center'>;'
              <a;
                href=''mailto':kleber@ziontechgroup.com?subject = Consultation Request';'
                className='px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 'hover':from - blue - 700 'hover':to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform 'hover':scale - 105 'hover':shadow - 2xl'              >;'
                Schedule Consultation;
              </a>;
              <a;
                href=''tel':+13024640950';'
                className='px - 8 py - 4 border border - white / 20 'hover':border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 'hover':bg - white / 10'              >              Ready to Transform Your Business?;'
            </h3>;
            <p className="text - white / 70 mb - 6 max-w-2xl mx-auto">;
              Let's discuss how our cutting - edge technology solutions can accelerate your digital transformation journey.;
            </p>;
            <div className="flex flex - col sm: flex - row gap-4 justify-center">;
              <a;
                href="mailto:kleber@ziontechgroup.com?subject = Consultation Request";
                className="px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale-105 hover:shadow-2xl";
              >;
                Schedule Consultation;
              </a>;
              <a;
                href='tel:+13024640950';
                className='px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10'                href="tel:+13024640950";
                className="px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg-white / 5 hover:bg-white / 10";
              >;
                Call Now;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;


};

export default EnhancedServicesShowcase;  );
};

export default EnhancedServicesShowcase;


    </section>);
export default EnhancedServicesShowcase;  )}export default EnhancedServicesShowcase;
    </section>)}export default EnhancedServicesShowcase)}export default EnhancedServicesShowcase;)export default EnhancedServicesShowcase;  )}
export default EnhancedServicesShowcase;}
}
;
export default EnhancedServicesShowcase);
}
;
export default EnhancedServicesShowcase;
;
  );
  );
  );
}
};

  );
export default EnhancedServicesShowcase;  )
}
export default EnhancedServicesShowcase;


};


export default EnhancedServicesShowcase;

}
}
export default EnhancedServicesShowcase;
