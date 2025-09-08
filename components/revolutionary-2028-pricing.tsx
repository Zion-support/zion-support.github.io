

  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles;
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale;
  Building, Factory, Camera, Video, Music, Gamepad2;
  Crown, Award, Target, Users, Clock, Globe2



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
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {;
  CheckCircle,;
  ArrowRight,;
  Star,;
  TrendingUp,;
  Phone,;
  Zap,;
  DollarSign,;
  Shield,;
  Mail,;
  MapPin,;
  Rocket,;
  Brain,;
  Sparkles,;
  Globe,;
  Atom,;
  Heart,;
  Leaf,;
  Car,;
  GraduationCap,;
  Scale,;
  Building,;
  Factory,;
  Camera,;
  Video,;
  Music,;
  Gamepad2,;
  Crown,;
  Award,;
  Target,;
  Users,;
  Clock,;
  Globe2,;} from 'lucide-react';import { ;
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, ;
  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles;
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale;
  Building, Factory, Camera, Video, Music, Gamepad2;
  Crown, Award, Target, Users, Clock, Globe2;

import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2028Services  } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';


const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};




const pricingTiers = [



    description: 'Ideal for growing businesses and enterprises',

    color: 'from - purple - 600 to - pink - 600',
    cta: 'Start Free Trial',
    href: '/contact',
  },  {      'Advanced AI capabilities_priority support_full feature access_phone & email support_advanced analyticsAPI access_custom integrations_training & onboarding';

    name: 'Enterprise',
  price: 'Custom',
    period: '',

    description: 'Tailored solutions for large organizations',

    color: 'from - indigo - 600 to - purple - 600',
    cta: 'Contact Sales',
    href: '/contact',
  }, ];      'Custom AI development_dedicated support team_white - label solutions24 / 7 phone support_custom analytics_full API access_custom integrations_dedicated account manager';
      'SLA guarantees_on - premise deployment';
    category: '🚀 2028 Futuristic Innovations',}
  services: futuristic2028Services.slice(0, 6),}
  },
  {
    category: '🏙️ Smart City & Infrastructure',
  services: emergingTech2028Services;
      .filter(
        s =>
          s.category.includes('Smart City') |
          s.category.includes('Infrastructure')
      )}
      .slice(0, 4)}



    <>

        <meta name="description" content="Competitive pricing for our cutting-edge 2028 services. Transparent pricing with flexible plans for AI, quantum computing, and futuristic technology solutions." />


            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'    />;
              <Link;
                href='/contact';
                className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2'    />

                <span    />Get Started</span>;
                <ArrowRight className='w-5 h-5'    />;
              </Link>;
              <Link;
                href='/2028-services-showcase';
                className='px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2'    />

            </h2>


          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'    />            {pricingTiers && pricingTiers.map((tier, index) => (            </h2>;
            <p className=\"text-xl text-purple-200 max-w-3xl mx-auto\"    />;
              Flexible pricing plans designed to scale with your business. Start small and grow with us.;
            </p>;
          </div>;
          <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\"    />;}
            {pricingTiers && pricingTiers.map((tier, index) => (<motion&& motion.div;}

                key={tier && tier.name}
                initial={{ opacity: 0, y: 30 ,}
}
                whileInView={{ opacity: 1, y: 0 ,}
}

                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}

                viewport={{ once: true }}

                    <div className="mb-8">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-white">{tier.price}</span>
                        <span className="text-purple-300">{tier.period}</span>
                      </div>
                      {tier.name === 'Enterprise' && (
                        <p className="text-sm text-purple-300 mt-2">Contact us for custom pricing</p>
                      )}
                    </div>;

                        </li>

                      ))}


                    <Link

<section className='py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10'    />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />;
          <div className='text-center mb-16'    />;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'    />;
              Service{' '}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'    />;
                Pricing;
              </span>;
            </h2>;
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'    />;
              Detailed pricing for our individual services. Mix and match to;
              create your perfect solution.;
            </p>;
          </div>;
          {servicePricing.map((category, categoryIndex) => (<div key={category.category} className='mb-16'    />;
              <h3 className='text-3xl font-bold text-white mb-8 text-center'    />;
                {category.category}
              </h3>;
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'    />;
                {category.services.map((service, serviceIndex) => (<motion.div;}
                    key={service.id}initial={{{service.price}
                            </div    />;
                            <div className='text - sm text - purple - 300'    />;
                              {service.period}

                      opacity: 0,
                      coordinate_x: service_index % 2 === 0 ? -30 : 30,
                    }}
                    whileInView={{ opacity: 1, coordinate_x: 0 }}
                    transition={{ duration: 0.6, delay: service_index * 0.1 }}
                    viewport={{ once: true }}
                    className='group relative';
                  >;
                    <div className='relative p - 6 bg - black / 40 backdrop - blur - sm border border - purple - 500 / 30 rounded - xl hover:border - purple - 500 / 60 transition - all duration - 300 hover:transform hover:scale - 105'>;
                      <div className='absolute inset - 0 bg - gradient - to - br from - purple - 500 / 5 to - blue - 500 / 5 rounded - xl opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300'></div>;
                      <div className='relative z - 10'>;
                        <div className='flex items - start justify - between mb - 4'>;
                          <div className='text - 3xl'>{service.icon}</div>;
                          <div className='text - right'>;
                            <div className='text - xl font - bold text - purple - 400'>;



                              {service.price}
                            </div>;
                            <div className='text - sm text - purple - 300'>;
                              {service.period}



                            </div>;
                          </div>;
                        </div>;
                        <h4 className='text - xl font - bold text - white mb - 2'>;






                        </p>
                        <div className='mb-4'    />
                          <div className='flex items-center space-x-2 mb-2'    />
                            <Star className='w-4 h-4 text-yellow-400'    />
                            <span className='text-white font-medium'    />










                        <div className='flex items-center justify-between'>;






                          <Link




                ),
}
              </div>;

                ))}
</div>;

            </div>;

          ))}

<section className='py-20 bg-black/50'    />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />;
          <div className='text-center mb-16'    />;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'    />;
              Why Choose{' '}

              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'    />
                Our Pricing;
              </span>



                    initial={{ opacity: 0, coordinate_x: service_index % 2 === 0 ? -30 : 30 ,}
}
                    whileInView={{ opacity: 1, coordinate_x: 0 ,}
}
                    transition={{ duration: 0.6, delay: service_index * 0.1 }}
                    viewport={{ once: true ,}
}
                    className=\"group relative\"    />

                    <div className=\"relative p - 6 bg - black / 40 backdrop - blur - sm border border - purple - 500 / 30 rounded - xl hover:border - purple - 500 / 60 transition - all duration - 300 hover:transform hover:scale - 105\"    />;
                      <div className=\"absolute inset - 0 bg - gradient - to - br from - purple - 500 / 5 to - blue - 500 / 5 rounded - xl opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300\"    /></div>;
                      <div className=\"relative z - 10\"    />;
                        <div className=\"flex items - start justify - between mb - 4\"    />;
                          <div className=\"text - 3xl\"    />{service.icon}</div>;
                          <div className=\"text - right\"    />;
                            <div className=\"text - xl font - bold text - purple - 400\"    />{service.price}</div>;
                            <div className=\"text - sm text - purple - 300\"    />{service.period}</div>;
                          </div>;
                        </div>;
                        <h4 className=\"text - xl font - bold text - white mb - 2\"    />{service.name}</h4>;
                        <p className=\"text - purple - 300 mb - 4 text - sm\"    />{service.description}</p>;
                        <div className=\"mb - 4\"    />;
                          <div className=\"flex items - center space - x-2 mb - 2\"    />;
                            <Star className=\"w - 4 h - 4 text - yellow - 400\"    />;
                            <span className=\"text - white font - medium\"    />{service.rating}</span>;
                            <span className=\"text - purple - 300 text - sm\"    />({service.reviews} reviews)</span>;
                          </div>;
                          <div className=\"text - sm text - purple - 300\"    />;
                            <span className=\"font - medium\"    />Setup: </span> {service.setup_tim,}
}
                          </div>;
                        </div>;
                        <div className=\"flex items - center justify - between\"    />;
                          <Link;
                            href={service.link}
                            className=\"px - 4 py - 2 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 text - sm\"    />

                            Learn More;
                          </Link>;
                          <div className=\"text - right\"    />;
                            <div className=\"text - xs text - purple - 300\"    />Trial</div>;
                            <div className=\"text - white font - medium\"    />{service.trial_days} days</div>;

                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </motion.div>))}
              </div>;
            </div>))}
        </div>;
      </section>;
      {/* Value Proposition */}

      <section className='py - 20 bg - black / 50'    />;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'    />;
          <div className='text - center mb - 16'    />;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'    />;
              Why Choose{' '}
              <span className='bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent'    />;
                Our Pricing;
              </span>;
            </h2>;





            >

              <Target className='w-16 h-16 text-green-400 mx-auto mb-6'    />
              <h3 className='text-2xl font-bold text-white mb-4'    />
                Competitive Pricing;
              </h3>
              <p className='text-purple-300 mb-6'    />
                Our prices are 30% lower than market average while providing;
superior technology and features.
              </p>

              className='text-center p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl'>;
              <Target className='w-16 h-16 text-green-400 mx-auto mb-6' />;
              <h3 className='text-2xl font-bold text-white mb-4'>;

            </motion && motion.div>;

            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              <Shield className='w-16 h-16 text-blue-400 mx-auto mb-6'    />
              <h3 className='text-2xl font-bold text-white mb-4'    />
                No Hidden Costs;
              </h3>
              <p className='text-blue-300 mb-6'    />
                Transparent pricing with no surprise fees. What you see is what;
you pay, with clear value for every dollar.
              </p>
              <div className='text-3xl font-bold text-blue-400'    />100%</div>

              <div className='text-blue-300'    />Transparent Pricing</div>

            </motion && motion.div>;

            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}







          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to{' '}

              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            <motion.div            </h2>;
            <p className="text - xl text - purple - 200 max - w-3xl mx - auto">;









