
import React, { useState } from 'react;
import { Brain, Shield, Rocket, Cpu, Database, Atom, Users;
  CheckCircle, TrendingUp, Clock, Star, Filter, ChevronDown;
  } from lucide-react';
import { Brain;
  Shield;
  Rocket;
  Cpu;
  Database;
  Atom;
  Users;
  CheckCircle;
  TrendingUp;
  Clock;
  Star;
  Filter;
  ChevronDown;
  Brain,Shield,Rocket,Cpu,Database,Atom,Users,CheckCircle,TrendingUp,Clock,Star,Filter,ChevronDown} from 'lucide-react;
interface Service  {Brain,Shield,Rocket,Cpu,Database,Atom,Users,CheckCircle,TrendingUp,Clock,Star} from lucide-react';
interface Service  {id: string;

  }
  CheckCircle, TrendingUp, Clock, Star, Filter, ChevronDown;

  }
  Shield;
  Rocket;
  Cpu;
  Database;
  Atom;
  Users;
  CheckCircle;
  TrendingUp;
  Clock;
  Star;
  Filter;
  ChevronDown;

      {/* Background */}
import React, { useState } from react';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, 
  CheckCircle, TrendingUp, Clock, Star, Filter, ChevronDown
} from 'lucide-react,

interface Service {
  id: string,
  name: string,
  tagline: string,
  category: string,
  price: string,
  period: string,
  setupTime: string,
  customers: string,
  features: string[],
  benefits: string[],
  roi: string,
  marketSize: string,
  growthRate: string,
  popular?: boolean,
  icon: React.ComponentType<any>,
  color: string}

const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(all'),
  const [searchTerm, setSearchTerm] = useState($2);
  const services: Service[] = [
    {
      id: 'ai-bi,
      name: AI Business Intelligence',
      tagline: 'Transform data into actionable insights with AI-powered analytics,
      category: AI & Analytics',
      price: '$499,
      period: /month',
      setupTime: '2-3 weeks,
      customers: 150+',
      features: ['AI-powered dashboardsPredictive analyticsReal-time insightsCustom reporting],
      benefits: [30% faster decision makingImproved data accuracyCost reduction'],
      roi: 'Average 3.2x ROI within 6 months,
      marketSize: $25B',
      growthRate: '25% YoY,
      popular: true,
      icon: Brain,
      color: from-purple-500 to-pink-500'
    },
    {
      id: 'quantum-cyber,
      name: Quantum Cybersecurity',
      tagline: 'Future-proof security with quantum-resistant encryption and AI threat detection,
      category: Security',
      price: '$799,
      period: /month',
      setupTime: '4-6 weeks,
      customers: 75+',
      features: ['Quantum-resistant encryptionAI threat detectionZero-trust architecture24/7 monitoring],
      benefits: [99.99% threat preventionCompliance readyReduced security incidents'],
      roi: 'Average 4.1x ROI within 8 months,
      marketSize: $18B',
      growthRate: '32% YoY,
      popular: false,
      icon: Shield,
      color: from-red-500 to-orange-500'
    },
    {
      id: 'edge-computing,
      name: Edge Computing Orchestration',
      tagline: 'Deploy and manage applications at the edge with intelligent orchestration,
      category: Infrastructure',
      price: '$349,
      period: /month',
      setupTime: '1-2 weeks,
      customers: 200+',
      features: ['Edge node managementIoT device managementReal-time monitoringAuto-scaling],
      benefits: [50% latency reductionImproved reliabilityCost optimization'],
      roi: 'Average 2.8x ROI within 4 months,
      marketSize: $12B',
      growthRate: '28% YoY,
      popular: false,
      icon: Cpu,
      color: from-emerald-500 to-teal-500'
    },
    {
      id: 'space-tech,
      name: Space Technology Innovation',
      tagline: 'Accelerate space exploration with cutting-edge technology solutions,
      category: Space Tech',
      price: '$2,499,
      period: /month',
      setupTime: '8-12 weeks,
      customers: 25+',
      features: ['Satellite managementAI mission planningQuantum communicationSpace analytics],
      benefits: [Mission success rate 95%+Reduced launch costsAdvanced capabilities'],
      roi: 'Average 5.2x ROI within 12 months,
      marketSize: $8B',
      growthRate: '45% YoY,
      popular: true,
      icon: Rocket,
      color: from-violet-500 to-purple-500'
    },
    {
      id: 'neural-interface,
      name: Neural Interface Development',
      tagline: 'Build the future of human-computer interaction with neural interfaces,
      category: Emerging Tech',
      price: '$899,
      period: /month',
      setupTime: '6-8 weeks,
      customers: 40+',
      features: ['BCI development toolsNeural signal processingAI pattern recognitionSafety protocols],
      benefits: [Revolutionary UXAccessibility improvementsResearch advancement'],
      roi: 'Average 6.8x ROI within 18 months,
      marketSize: $3B',
      growthRate: '67% YoY,
      popular: false,
      icon: Brain,
      color: from-pink-500 to-rose-500'
    },
    {
      id: 'quantum-ai,
      name: Quantum AI Neural Networks',
      tagline: 'Quantum-powered AI with advanced consciousness capabilities,
      category: Quantum AI',
      price: '$1,299,
      period: /month',
      setupTime: '10-14 weeks,
      customers: 15+',
      features: ['Quantum neural networksConsciousness simulationAdvanced learningQuantum optimization],
      benefits: [Unprecedented AI capabilitiesBreakthrough researchCompetitive advantage'],
      roi: 'Average 8.5x ROI within 24 months,
      marketSize: $2B',
      growthRate: '89% YoY,
      popular: true,
      icon: Atom,
      color: from-blue-500 to-cyan-500'
    }
  ],

  const categories = ['all, ...Array.from(new Set(services.map(s = $2;
  const filteredServices = $2;
    const matchesSearch = $2;
    return matchesCategory && matchesSearch
  }),

  const getCategoryIcon = $2;
      Security': Shield,
      'Infrastructure: Cpu,
      Space Tech': Rocket,
      'Emerging Tech: Brain,
      Quantum AI': Atom
    },
    return iconMap[category] || Brain
  },

  return (
    <section id="services className=py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950>
        <div className=absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)] />
      </div>

      <div className=max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16>
          <h2 className=text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent>
              Our Services
            </span>
          </h2>
          <p className=text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology solutions designed to transform your business and accelerate innovation
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center>
          {/* Category Filter */}
          <div className=relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
        {/* Filters */}
          {/* Category Filter */}

            Cutting-edge technology solutions designed to transform your;
            business and accelerate innovation;
          </p>;
        </div>;
        {/* Filters */}

            >;
              {categories.map(category => { return (<option; }
                  }
                  key={category}
                  value={category}

          {filteredServices && filteredServices.map((service, index) => (<div;
              }
              key={service && service.id}

                    Popular;
                  </div>;
                </div>;
              )}

            Cutting - edge technology solutions designed to transform your;
            business and accelerate innovation          </p>;
        </div>;
        {/* Filters */}

            Cutting - edge technology solutions designed to transform your business and accelerate innovation;
          </p>;
        </div>;
        {/* Filters */}

            >;
              className='px - 6 py - 3 bg - white / 5 border border - white / 10 rounded - xl text - white "focus":outline - none "focus":border - blue - 400 transition - colors duration - 300 appearance - none pr - 12'>'

              {categories.map (category => { return (<option; }
                  }
                  key={category}
                  value={category}

          {filtered_services.map ((service, index) => (<div;
              }
              key={service.id}

                    Popular;
                  </div>;
                </div>)}
              {/* Service Content */}

        </div>;
        {/* Services Grid */}Popular;
                  </div>;
                </div>;
              )}{/* Service Content */}

                      {service && service.category}
                    </div>                  </div>;
                </div>;
                {/* Service Info */}                {/* Icon and Category */}

                      {service.category}
                      })}
                    </div>;
                    </div>;
                  </div>;
                </div>;

                        {feature}
                      </div>
                    ))}
                  </div>;
                </div>;
                {/* Benefits */}

                    {service.benefits.slice(0, 2).map((benefit, idx) => (<div;
                        }
                        key={idx}

                        {benefit}
                      </div>;
                  </div>;
                </div>;{/* Benefits */}))}
                  </div>;
                </div>;

                </div>;
                  </div>;
                </div>;
                {/* ROI and Market Info */}

                  </div>;
                </div>;
                {/* Action Buttons */}>;
                    Demo;
                  </button>;
                </div>;
              </div>;

                  >;
                    Get Started;
                  </button>;
                  <button;

                  >;
                    Demo;
                  </button>;
                </div>;
              </div>;
                <div className="flex gap-3">;"
                  <button;
                    onClick={() => window.location.href = `"mailto": kleber@ziontechgroup.com?subject=Inquiry about ${service.name},`}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 "hover":from-blue-700 "hover":to-cyan-700 rounded-xl font-semibold text-white transition-all duration-300 transform "hover":scale-105";"
<div className='flex gap-3'>;'
                  <button;
                    onClick={() =>;
                      (window.location.href = `"mailto": kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`,`}
                    className='flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 "hover":from-blue-700 "hover":to-cyan-700 rounded-xl font-semibold text-white transition-all duration-300 transform "hover":scale-105'>'

                    Get Started;
                  </button>;
                  <button;
                    className="px-4 py-3 border border-white/20 "hover":border-white/40 rounded-xl font-semibold text-white transition-all duration-300 backdrop-blur-sm bg-white/5 "hover":bg-white/10";"
onClick={() =>;
                      (window.location.href = `"mailto": kleber@ziontechgroup.com?subject=Demo request for ${service.name}`,`
}
                    className='px-4 py-3 border border-white/20 "hover":border-white/40 rounded-xl font-semibold text-white transition-all duration-300 backdrop-blur-sm bg-white/5 "hover":bg-white/10'>'

                    Demo;
                  </button>;
                </div>;
              </div>;
            </div>;
          ))}
        </div>;
        </div>;{/* CTA Section */}{/* CTA Section */}

                Call Now;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
export default EnhancedServicesShowcase;  )}export default EnhancedServicesShowcase;
    </section>)}export default EnhancedServicesShowcase)}export default EnhancedServicesShowcase;)export default EnhancedServicesShowcase;  )}
export default EnhancedServicesShowcase;}
}


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
