


import React, { useState } from 'react',;
import Head from 'next/head',;
import { motion, AnimatePresence } from 'framer-motion',;
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity } from 'lucide-react',;
import Button from '../components/ui/Button',;
import Card from '../components/ui/Card',;
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',;
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard',;
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices } from '../data/enhanced-real-micro-saas-services',;
import { nextGenerationAIServices } from '../data/next-generation-ai-services',;
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services',;
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2',;
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2',;
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2',;
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2',;
import { innovative2026AIServicesV3 } from '../data/innovative-2026-ai-services-v3',;
import { emergingTech2026ServicesV3 } from '../data/emerging-tech-2026-services-v3',;
import { enterpriseIT2026ServicesV3 } from '../data/enterprise-it-2026-services-v3',;
export default function PricingEnhanced2026Page() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly'),
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  const popularServices = getPopularServices(),
  
  // Combine all services for comprehensive pricing
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovativeMicroSaasV2Services,
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
    ...innovative2026AIServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3

import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices } from '../data/enhanced-real-micro-saas-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2';
import { innovative2026AIServicesV3 } from '../data/innovative-2026-ai-services-v3';
import { emergingTech2026ServicesV3 } from '../data/emerging-tech-2026-services-v3';
import { enterpriseIT2026ServicesV3 } from '../data/enterprise-it-2026-services-v3';


    {
                      <p className="text-gray-400 mb-6">{tier.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-cyan-400">${tier.price}</span>
                        <span className="text-gray-400">{tier.period}</span>
                        {tier.savings && (
                          <div className="text-sm text-green-400 mt-1">{tier.savings}</div>


                        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                      </div>
                      <ul className="text-left space-y-3 mb-8">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </ul>
                                             <Button
                                                   variant="primary"
                         size="lg"
                         className="w-full"
                         onClick={() => {
                           if (tier.name === 'Enterprise') {
                             window.open(`mailto:${contactInfo.email}?subject=Enterprise Pricing Inquiry`, '_blank')
                           } else {
                             window.open(`mailto:${contactInfo.email}?subject=Start Free Trial - ${tier.name}`, '_blank')

                      <div className="absolute -top - 4 left - 1/2 transform -translate - x-1 / 2">;
                        <div className="bg - gradient - to - r from - cyan - 500 to - purple - 500 text - white px - 4 py - 2 rounded - full text - sm font - semibold">;
                          Most Popular;
                        </div>;
                      </div>)}
                    <div className="p - 8 text - center">;
                      <div className="flex justify - center mb - 4">;
                        <div className={`p - 3 rounded - full bg - gradient - to - r ${tier.color}`}>;
                          {tier.icon}
                        </div>;
                      </div>;
                      <h3 className="text - 2xl font - bold text - white mb - 2">{tier.name}</h3>;
                      <p className="text - gray - 400 mb - 6">{tier.description}</p>;
                      <div className="mb - 6">;
                        <span className="text - 4xl font - bold text - cyan - 400">${tier.price}</span>;
                        <span className="text - gray - 400">{tier.period}</span>;
                        {tier.savings && (
                          <div className="text - sm text - green - 400 mt - 1">{tier.savings}</div>)}
                      </div>;
                      <ul className="text - left space - y-3 mb - 8">;
                        {tier.features.map ((feature, idx) => (
                          <li key={idx} className="flex items - start">;
                            <Check className="w - 5 h - 5 text - green - 400 mr - 3 mt - 0.5 flex - shrink - 0" />;
                            <span className="text - gray - 300">{feature}</span>;
                          </li>))}
                      </ul>;
                                            <Button;
                                                  variant="primary";
                        size="lg";
                        className="w - full";
                        on_click={() => {
                          // Check condition
if ( {) {
  $2

                             } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
                            window.open (`mailto:${contact_info.email}?subject = Enterprise Pricing Inquiry`, '_blank');
                          } else {
                            window.open (`mailto:${contact_info.email}?subject = Start Free Trial - ${tier.name}`, '_blank');
                          }
                          }}
                        >;
                        {tier.cta}
                        </Button>;
                    </div>;
                  </UltraFuturisticCard>;
                </motion.div>))}
            </div>;
          </div>;
        </div>;

        {/* Enhanced Service Categories */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Service Categories & Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive service categories with transparent pricing and competitive advantages
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories.map((category, index) => (
                <motion.div
              className="text - center mb - 12";
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 4">;
                Service Categories & Pricing;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                Explore our comprehensive service categories with transparent pricing and competitive advantages;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
              {service_categories.map ((category, index) => (
                <motion.div;
                  key={category.name}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}


                      </ul>


                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full"


                        onClick={() => window.open(`/2026-services-showcase-enhanced`, '_blank')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                      >
                        View Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>

                >;
                  <UltraFuturisticCard variant="quantum - advanced" className="h - full">;
                    <div className="p - 6">;
                      <div className="flex items - center mb - 4">;
                        <div className={`p - 3 rounded - full bg - gradient - to - r ${category.color} mr - 4`}>;
                          <category.icon className="w - 6 h - 6 text - white" />;
                        </div>;
                        <h3 className="text - xl font - bold text - white">{category.name}</h3>;
                      </div>;
                      <p className="text - gray - 400 mb - 4">{category.description}</p>;
                      <div className="mb - 4">;
                        <span className="text - 2xl font - bold text - cyan - 400">{category.avg_price}</span>;
                        <div className="text - sm text - green - 400">{category.savings}</div>;
                      </div>;
                      <ul className="space - y-2 mb - 4">;
                        {category.services.map ((service, idx) => (
                          <li key={idx} className="flex items - center text - sm text - gray - 300">;
                            <Check className="w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0" />;
                            {service}
                          </li>))}
                      </ul>;
                      <Button;
                        variant="primary";
                        size="sm";
                        className="w - full";
                        on_click={() => window.open (`/2026 - services - showcase - enhanced`, '_blank')}
                      >;
                        View Services;
                        <ArrowRight className="w - 4 h - 4 ml - 2" />;
                      </Button>;
                    </div>;
                  </UltraFuturisticCard>;
                </motion.div>))}
            </div>;
          </div>;
        </div>;

        {/* Featured Services Showcase */}
        <div className="relative z - 10 px - 4 sm:px - 6 lg:px - 8 mb - 20">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}


              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </div>;
        {/* Featured Services Showcase */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular and innovative services that are transforming businesses worldwide
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredServices.map((service, index) => (
                <motion.div
              className="text - center mb - 12";
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 4">;
                Featured Services;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                Discover our most popular and innovative services that are transforming businesses worldwide;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
              {featured_services.map ((service, index) => (
                <motion.div;
                  key={service.name}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}


                      </ul>


                      <div className="flex space-x-2">
                        <Button
                          variant="primary"
                          size="sm"
                          className="flex-1"


                          onClick={() => window.open(service.link, '_blank')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"

                >;
                  <UltraFuturisticCard variant="holographic" className="h - full">;
                    <div className="p - 6">;
                      <div className="flex items - start justify - between mb - 4">;
                        <div className="text - 4xl">{service.icon}</div>;
                        <div className="text - right">;
                          <div className="text - 2xl font - bold text - cyan - 400">{service.price}</div>;
                          <div className="text - sm text - gray - 400">Starting price</div>;
                        </div>;
                      </div>;
                      <h3 className="text - xl font - bold text - white mb - 2">{service.name}</h3>;
                      <p className="text - gray - 400 mb - 4">{service.description}</p>;
                      <ul className="space - y-2 mb - 4">;
                        {service.features.map ((feature, idx) => (
                          <li key={idx} className="flex items - center text - sm text - gray - 300">;
                            <Check className="w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0" />;
                            {feature}
                          </li>))}
                      </ul>;
                      <div className="flex space - x-2">;
                        <Button;
                          variant="primary";
                          size="sm";
                          className="flex - 1";
                          on_click={() => window.open (service.link, '_blank')}
                        >;
                          Learn More;
                          <ArrowRight className="w - 4 h - 4 ml - 1" />;
                        </Button>;
                        <Button;
                          variant="secondary";
                          size="sm";
                          on_click={() => window.open (`mailto:${contact_info.email}?subject = Inquiry about ${service.name}`, '_blank')}

                          onClick={() => window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`, '_blank')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                        >;
                          Contact;
                        </Button>;
                      </div>;
                    </div>;
                  </UltraFuturisticCard>;
                </motion.div>))}
            </div>;
          </div>;
        </div>;

        {/* Enhanced Footer CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              className="bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our innovative services to gain competitive advantages and achieve remarkable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"


                  onClick={() => window.open(`mailto:${contactInfo.email}?subject=Business Transformation Consultation`, '_blank')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button
                  variant="secondary"
                  size="lg"


                  onClick={() => window.open(`tel:${contactInfo.mobile}`, '_blank')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>Contact: {contactInfo.mobile} | {contactInfo.email}</p>
                <p>{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>

}

              className="bg - gradient - to - r from - cyan - 900 / 50 via - purple - 900 / 50 to - pink - 900 / 50 backdrop - blur - sm rounded - 2xl p - 8 border border - cyan - 500 / 30 text - center";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8">;
                Join thousands of businesses already using our innovative services to gain competitive advantages and achieve remarkable ROI.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <Button;
                  variant="primary";
                  size="lg";
                  on_click={() => window.open (`mailto:${contact_info.email}?subject = Business Transformation Consultation`, '_blank')}
                >;
                  <Mail className="w - 5 h - 5 mr - 2" />;
                  Schedule Consultation;
                </Button>;
                <Button;
                  variant="secondary";
                  size="lg";
                  on_click={() => window.open (`tel:${contact_info.mobile}`, '_blank')}
                >;
                  <Phone className="w - 5 h - 5 mr - 2" />;
                  Call Now;
                </Button>;
              </div>;
              <div className="mt - 8 text - sm text - gray - 400">;
                <p > Contact: {contact_info.mobile} | {contact_info.email}</p>;
                <p>{contact_info.address}</p>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </div>;
    </UltraFuturisticBackground>);
}


