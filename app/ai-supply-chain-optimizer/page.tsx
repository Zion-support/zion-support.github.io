import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Truck, Package, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, Star, Globe, Target} from 'lucide-react';
import {Truck, ArrowRight} from 'lucide-react';
import FuturisticBackground from '../components/Futuristic Background';
import FuturisticCard from '../components/Futuristic Card';
import FuturisticButton from '../components/Futuristic Button';
'use client';


export default function AISupply Chain Optimizer Page() {
  constfeatures = [
    {
      title: 'Predictive Demand Forecasting',
      description: 'AI algorithms analyze historical data, market trends, and external factors to predict demand with 92% accuracy.',
      icon: <Trending Upclass Name="w-6h-6text-green-400" / />,
      benefits: ['Demand prediction', 'Seasonal analysis', 'Market trend insights', 'Inventory optimization']
    },
    {
      title: 'Smart Route Optimization',
      description: 'Advanced logistics algorithms optimize delivery routes, reduce fuel costs, and improve delivery times.',
      icon: <Truckclass Name ="w-6h-6text-blue-400" / />,
      benefits: ['Route optimization', 'Fuel cost reduction', 'Delivery time improvement', 'Real-time tracking']
    },
    {
      title: 'Automated Inventory Management',
      description: 'Intelligent inventory control with automated reordering, stock level monitoring, and waste reduction.',
      icon: <Packageclass Name ="w-6h-6text-purple-400" / />,
      benefits: ['Auto reordering', 'Stock monitoring', 'Waste reduction', 'Cost optimization']
    },
    {
      title: 'Risk Management & Compliance',
      description: 'Comprehensive risk assessment and compliance monitoring to ensure supply chain resilience.',
      icon: <Shieldclass Name ="w-6h-6text-red-400" / />,
      benefits: ['Risk assessment', 'Compliance monitoring', 'Disruption alerts', 'Mitigation strategies']
    }
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 warehouses',
        'Basic demand forecasting',
        'Route optimization',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Advanced features for growing companies',
      features: [
        'Up to 25 warehouses',
        'Advanced AI forecasting',
        'Multi-modal optimization',
        'Priority support',
        'Custom integrations',
        'Real-time analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited warehouses',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager',
        'API access',
        'Advanced security'
      ],
      popular: false
    }
  ];
  consttestimonials = [
    {
      name: 'Robert Chen',
      role: 'Supply Chain Director',
      company: 'Global Logistics Inc.',
      content: 'AI Supply Chain Optimizer reduced our logistics costs by 35% and improved delivery times by 40%. The predictive analytics are game-changing.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Operations Manager',
      company: 'Retail Max Corp',
      content: 'The automated inventory management saved us from stockouts and overstocking. Our inventory turnover improved by 50%.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'Manufacturing Solutions',
      content: 'This AI tool transformed our entire supply chain. We can now predict disruptions before they happen and optimize accordingly.',
      rating: 5
    }
  ];
  conststats = [
    { number: '35%', label: 'Cost Reduction', icon: <Trending Upclass Name="w-6h-6" / /> },
    { number: '92%', label: 'Forecast Accuracy', icon: <Targetclass Name ="w-6h-6" / /> },
    { number: '500+', label: 'Companies Using', icon: <Globeclass Name ="w-6h-6" / /> },
    { number: '40%', label: 'Delivery Improvement', icon: <Clockclass Name ="w-6h-6" / /> }
  ];
  return (
    <>
      <Helmet />
        <title   />AISupply ChainOptimizer - SmartLogistics & InventoryManagement | ZionTech Group</title>
        <metaconstname = "description" content="Optimizeyour supplychain with AI-powereddemand forecasting, routeoptimization, andinventory management. Reducecosts by 35% andimprove deliverytimes by 40%." / / />
        <meta name ="keywords" content="AIsupply chain, logisticsoptimization, inventorymanagement, demandforecasting, supplychain AI, logisticstechnology" / / />
        <linkrel ="canonical" href="https://ziontechgroup.com/ai-supply-chain-optimizer" / />
      </Helmet>

      <Futuristic Backgroundvariant="services" />
        {/* HeroSection */}
        <sectionclassName ="pt-20 px-4 py-12sm:py-16lg:py-20" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-12" />
              <h1className ="text-3 xlsm:text-4 xlmd:text-5 xllg:text-6 xlfont-boldtext-whitemb-6"  />AISupply ChainOptimizer
              </h1>
              <pclassName ="text-lgsm:text-xltext-gray-300 max-w-3 xlmx-automb-8" />
                Revolutionizeyour supplychain withAI-powereddemand forecasting, routeoptimization, 
                andintelligent inventorymanagement. Reducecosts by 35% andimprove efficiencyby 40%.
              </p>
              <div className ="flexflex-colsm:flex-rowgap-4justify-center" />
                <Futuristic Buttonvariant="primary"
                  size="lg"
                  onClick ="{()" = /> window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <Arrow Rightclass Name="w-5h-5ml-2" />
                </Futuristic Button>
                <Futuristic Buttonvariant="ghost"
                  size="lg"
                  onClick ="{()" =  />window.open('#demo', '_blank')}
                >
                  Watch Demo
                </Futuristic Button>
              </div>
            </div>

            {/* Stats */}
            <div className ="grid grid-cols-2 md:grid-cols-4gap-6mb-16" />
              {stats.map((stat, index) => (
                <divkey ="{index}" className="text-center" />
                  <div className ="flexitems-centerjustify-centermb-2"  />{stat.icon}
                  </div>
                  <div className ="text-3 xlfont-boldtext-whitemb-2"   />{stat.number}</div>
                  <div className ="text-gray-300"   />{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <sectionclassName ="py-12 sm:py-16lg:py-20px-4" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-12" />
              <h2className ="text-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />Advanced AI Features
              </h2>
              <pclassName ="text-lg sm:text-xl text-gray-300 max-w-2xlmx-auto" />
                Cutting-edge artificial intelligence meets supply chain expertise to optimize your operations
              </p>
            </div>
            
            <div className ="grid grid-cols-1 md:grid-cols-2gap-8mb-16" />
              {features.map((feature, index) => (
                <Futuristic Cardkey="{index}" variant="service" className="h-full" />
                  <div className ="flexitems-startmb-4" />
                    {feature.icon}
                    <h3className ="text-xlfont-semiboldtext-whiteml-3"   />{feature.title}</h3>
                  </div>
                  <pclassName ="text-gray-300mb-6" />{feature.description}</p>
                  <ulclassName ="space-y-2" />
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <likey ="{benefitIndex}" className="flexitems-centertext-smtext-gray-300" />
                        <Check Circleclass Name="w-4 h-4 text-green-400mr-2flex-shrink-0" / />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Futuristic Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <sectionclassName ="py-12 sm:py-16 lg:py-20px-4bg-white/5" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-12" />
              <h2className ="text-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />Choose Your Plan
              </h2>
              <pclassName ="text-lg sm:text-xl text-gray-300 max-w-2xlmx-auto" />
                Scalable pricing options to match your supply chain needs
              </p>
            </div>

            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              {pricing Plans.map((plan, index) => (
                <Futuristic Cardkey="{index}" 
                  variant="{plan.popular" ? "feature" : "service"} 
                  className="{`h-full" ${plan.popular ? 'ring-2 ring-purple-500' : ''}`} />
                  {plan.popular && (
                    <div className ="absolute -top-3 left-1/2transform-translate-x-1/2" />
                      <spanclassName ="bg-gradient-to-rfrom-purple-500 to-pink-500 text-whitepx-4 py-1 rounded-fulltext-smfont-semibold"  />MostPopular
                      </span>
                    </div>
                  )}
                  
                  <div className ="text-centermb-6" />
                    <h3className ="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                    <div className ="flex items-baselinejustify-centermb-2" />
                      <spanclassName ="text-4 xlfont-boldtext-white"   />{plan.price}</span>
                      <spanclassName ="text-gray-400ml-1"   />{plan.period}</span>
                    </div>
                    <pclassName ="text-gray-300text-sm" />{plan.description}</p>
                  </div>

                  <ulclassName ="space-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <likey ="{featureIndex}" className="flexitems-centertext-smtext-gray-300" />
                        <Check Circleclass Name="w-4 h-4 text-green-400mr-3flex-shrink-0" / />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Futuristic Buttonvariant="{plan.popular" ? "primary" : "ghost"}
                    className="w-full"
                    onClick ="{()" =  />window.open('/contact', '_blank')}
                  >
                    Get Started
                  </Futuristic Button>
                </Futuristic Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <sectionclassName ="py-12 sm:py-16lg:py-20px-4" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-12" />
              <h2className ="text-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />What Our Clients Say
              </h2>
              <pclassName ="text-lg sm:text-xl text-gray-300 max-w-2xlmx-auto" />
                Join hundreds of companies optimizing their supply chains
              </p>
            </div>

            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              {testimonials.map((testimonial, index) => (
                <Futuristic Cardkey="{index}" variant="testimonial" className="h-full" />
                  <div className ="flexitems-centermb-4" />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Starkey ="{i}" className="w-4 h-4text-yellow-400fill-current" / />
                    ))}
                  </div>
                  <blockquoteclassName ="text-gray-300mb-6italic"  />"{testimonial.content}"
                  </blockquote>
                  <footer />
                    <pclassName ="font-semiboldtext-white" />{testimonial.name}</p>
                    <pclassName ="text-gray-400text-sm" />{testimonial.role}</p>
                    <pclassName ="text-gray-500text-sm" />{testimonial.company}</p>
                  </footer>
                </Futuristic Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <sectionclassName ="py-12 sm:py-16lg:py-20px-4" />
          <div className ="max-w-7xlmx-auto" />
            <Futuristic Cardvariant="feature" className="text-center" />
              <h2className ="text-2 xl sm:text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />Ready to Optimize Your Supply Chain?
              </h2>
              <pclassName ="text-lg sm:text-xl text-white/90 mb-8 max-w-2xlmx-auto" />
                Start your free 14-day trial today. No credit card required. Join 500+ companies optimizing their supply chains.
              </p>
              <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
                <Futuristic Buttonvariant="primary"
                  size="lg"
                  onClick ="{()" =  />window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </Futuristic Button>
                <Futuristic Buttonvariant="secondary"
                  size="lg"
                  onClick ="{()" =  />window.open('/contact', '_blank')}
                >
                  Schedule Demo
                </Futuristic Button>
              </div>
              <div className ="mt-8text-white/80text-sm" />
                <p />✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </Futuristic Card>
          </div>
        </section>
      </Futuristic Background>
    </>
  );
}