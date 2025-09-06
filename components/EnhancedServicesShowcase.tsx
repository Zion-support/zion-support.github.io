import React, { useState } from 'react';
import {
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
  Filter,
  ChevronDown,;

} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: string;
  period: string;
  setupTime: string;
  customers: string;
  features: string[];
  benefits: string[];
  roi: string;
  marketSize: string;
  growthRate: string;
  popular?: boolean;
  icon: React.ComponentType<any>;
  color: string;

const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services: Service[] = [
    {
      id: 'ai-bi',
      name: 'AI Business Intelligence',
      tagline:
        'Transform data into actionable insights with AI-powered analytics',      category: 'AI & Analytics',

      category: 'AI & Analytics',

      price: '$499',
      period: '/month',
      setupTime: '2-3 weeks',
      customers: '150+',
      features: [
        'AI-powered dashboards',
        'Predictive analytics',
        'Real-time insights',
        'Custom reporting',
      ],
      benefits: [
        '30% faster decision making',
        'Improved data accuracy',
        'Cost reduction',
      ],      roi: 'Average 3.2x ROI within 6 months',

      roi: 'Average 3.2x ROI within 6 months',

      marketSize: '$25B',
      growthRate: '25% YoY',
      popular: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'quantum-cyber',
      name: 'Quantum Cybersecurity',
      tagline:
        'Future-proof security with quantum-resistant encryption and AI threat detection',      category: 'Security',

      category: 'Security',

      price: '$799',
      period: '/month',
      setupTime: '4-6 weeks',
      customers: '75+',
      features: [
        'Quantum-resistant encryption',
        'AI threat detection',
        'Zero-trust architecture',
        '24/7 monitoring',
      ],
      benefits: [
        '99.99% threat prevention',
        'Compliance ready',
        'Reduced security incidents',
      ],      roi: 'Average 4.1x ROI within 8 months',

      roi: 'Average 4.1x ROI within 8 months',

      marketSize: '$18B',
      growthRate: '32% YoY',
      popular: false,
      icon: Shield,
      color: 'from-red-500 to-orange-500',
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Orchestration',
      tagline:
        'Deploy and manage applications at the edge with intelligent orchestration',      category: 'Infrastructure',

      category: 'Infrastructure',

      price: '$349',
      period: '/month',
      setupTime: '1-2 weeks',
      customers: '200+',
      features: [
        'Edge node management',
        'IoT device management',
        'Real-time monitoring',
        'Auto-scaling',
      ],
      benefits: [
        '50% latency reduction',
        'Improved reliability',
        'Cost optimization',
      ],      roi: 'Average 2.8x ROI within 4 months',

      roi: 'Average 2.8x ROI within 4 months',

      marketSize: '$12B',
      growthRate: '28% YoY',
      popular: false,
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500',
    },

    {
      id: 'space-tech',
      name: 'Space Technology Innovation',
      tagline:
        'Accelerate space exploration with cutting-edge technology solutions',
      category: 'Space Tech',
      price: '$2,499',
      period: '/month',
      setupTime: '8-12 weeks',
      customers: '25+',
      features: [
        'Satellite management',
        'AI mission planning',
        'Quantum communication',
        'Space analytics',
      ],
      benefits: [
        'Mission success rate 95%+',
        'Reduced launch costs',
        'Advanced capabilities',
      ],      roi: 'Average 5.2x ROI within 12 months',

      roi: 'Average 5.2x ROI within 12 months',

      marketSize: '$8B',
      growthRate: '45% YoY',
      popular: true,
      icon: Rocket,
      color: 'from-violet-500 to-purple-500',
    },
    {
      id: 'neural-interface',
      name: 'Neural Interface Development',
      tagline:
        'Build the future of human-computer interaction with neural interfaces',      category: 'Emerging Tech',

      category: 'Emerging Tech',

      price: '$899',
      period: '/month',
      setupTime: '6-8 weeks',
      customers: '40+',
      features: [
        'BCI development tools',
        'Neural signal processing',
        'AI pattern recognition',
        'Safety protocols',
      ],
      benefits: [
        'Revolutionary UX',
        'Accessibility improvements',
        'Research advancement',
      ],      roi: 'Average 6.8x ROI within 18 months',

      roi: 'Average 6.8x ROI within 18 months',

      marketSize: '$3B',
      growthRate: '67% YoY',
      popular: false,
      icon: Brain,
      color: 'from-pink-500 to-rose-500',
    },    {

    {

      id: 'quantum-ai',
      name: 'Quantum AI Neural Networks',
      tagline: 'Quantum-powered AI with advanced consciousness capabilities',
      category: 'Quantum AI',
      price: '$1,299',
      period: '/month',
      setupTime: '10-14 weeks',
      customers: '15+',
      features: [
        'Quantum neural networks',
        'Consciousness simulation',
        'Advanced learning',
        'Quantum optimization',
      ],
      benefits: [
        'Unprecedented AI capabilities',
        'Breakthrough research',
        'Competitive advantage',
      ],      roi: 'Average 8.5x ROI within 24 months',

      roi: 'Average 8.5x ROI within 24 months',

      marketSize: '$2B',
      growthRate: '89% YoY',
      popular: true,
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const categories = [
    'all',
    ...Array.from(new Set(services.map(s => s.category))),

  ];

  const filteredServices = services.filter(service => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch

  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {

          </p>
        </div>

        {/* Filters */}

                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

          </div>
        </div>

        {/* Services Grid */}

                    Popular

                  </div>
                </div>
              )}

              {/* Service Content */}
              <div className='p-8'>

                {/* Icon and Category */}
                <div className='flex items-center justify-between mb-4'>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center text-2xl`}
                  >
                    <service.icon className='w-8 h-8 text-white' />
                  </div>
                  <div className='text-right'>
                    <div className='text-xs text-white/60 mb-1'>
                      {getCategoryIcon(service.category)({
                        className: 'w-3 h-3',
                      })}
                    </div>
                    <div className='text-xs text-white/40'>
                      {service.category}
                    </div>                  </div>
                </div>

                {/* Service Info */}

                  </div>
                </div>

                {/* Service Info */}

                      {service.customers} customers

                    </span>
                  </div>
                </div>

                {/* Key Features */}
                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-white mb-3'>
                    Key Features:
                  </h4>
                  <div className='space-y-2'>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-2 text-xs text-white/70'
                      >
                        <CheckCircle className='w-3 h-3 text-green-400' />                        {feature}

                        {feature}

                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-white mb-3'>
                    Key Benefits:
                  </h4>
                  <div className='space-y-2'>
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-2 text-xs text-white/70'
                      >
                        <TrendingUp className='w-3 h-3 text-blue-400' />                        {benefit}

                        {benefit}

                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI and Market Info */}
                <div className='mb-6 p-4 bg-white/5 rounded-lg'>
                  <div className='text-xs text-white/60 mb-2'>
                    ROI & Market Position
                  </div>
                  <div className='text-xs text-white/80 leading-relaxed'>
                    {service.roi}
                  </div>
                  <div className='mt-2 text-xs text-white/60'>                    Market: {service.marketSize} • Growth: {service.growthRate}
                <div className="mb-6 p-4 bg-white/5 rounded-lg">
                  <div className="text-xs text-white/60 mb-2">ROI & Market Position</div>
                  <div className="text-xs text-white/80 leading-relaxed">{service.roi}</div>
                  <div className="mt-2 text-xs text-white/60">

                    Market: {service.marketSize} • Growth: {service.growthRate}

                  </div>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-3'>
                  <button
                    onClick={() =>
                      (window.location.href = `mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`)
                    }
                    className='flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105'                  >
                    Get Started
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = `mailto:kleber@ziontechgroup.com?subject=Demo request for ${service.name}`)
                    }
                    className='px-4 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'                  >

                  >
                    Get Started
                  </button>
                  <button

                  >

                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20'>
            <h3 className='text-2xl font-bold text-white mb-4'>

              Ready to Transform Your Business?
            </h3>
            <p className='text-white/70 mb-6 max-w-2xl mx-auto'>
              Let's discuss how our cutting-edge technology solutions can
              accelerate your digital transformation journey.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='mailto:kleber@ziontechgroup.com?subject=Consultation Request'
                className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'              >
                Schedule Consultation
              </a>
              <a
                href='tel:+13024640950'
                className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'              >

              >
                Schedule Consultation
              </a>
              <a

              >

                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesShowcase;