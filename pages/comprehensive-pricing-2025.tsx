  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown
} from 'lucide-react'
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';

import React, { useState } from 'react',;
import Head from 'next/head',;
import { motion, AnimatePresence } from 'framer-motion',;
import { 
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom,
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown
} from 'lucide-react',;
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion',;
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025',;
export default function ComprehensivePricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [expandedService, setExpandedService] = useState<string | null>(null)
  // Combine all services
  ]
  const filteredServices = selectedCategory === 'all'
    ? allServices
    : allServices.filter(service => service.category === selectedCategory)
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category)
    return categoryData?.icon |''
  }
import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {;
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom,;
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown;
} from 'lucide-react',;
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';
export default function ComprehensivePricingPage(req, res) {
  try {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  // Combine all services;
  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices],;
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀' },;
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠' },;
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥' },;
    { id: 'Fintech AI', name: 'Fintech', icon: '💰' },;
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️' },;
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️' },;
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗' },;
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️' },;
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀' },;
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖' },;
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: '🥽' },;
    { id: '5G/6G Networks', name: '5G/6G', icon: '📡' },;
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬' },;
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡' },;
    { id: 'Edge Computing', name: 'Edge', icon: '🌐' },;
    { id: 'Quantum Internet', name: 'Q-Internet', icon: '🌍' },;
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const filteredServices = selectedCategory === 'all'
    ? allServices
    : allServices.filter(service => service.category === selectedCategory),
  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category),
    return categoryData?.icon || '🚀'
  },

  },
  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  },
  return (
    <>
      <Head>
        <title>Comprehensive Pricing 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary micro SAAS services pricing for 2025. AI, quantum computing, cybersecurity, and emerging technology solutions." />
        <meta name="keywords" content="micro SAAS pricing, AI services, quantum computing, cybersecurity, emerging technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-pricing-2025" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

        {/* Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              {/* Billing Toggle */}
              <div className="flex items - center justify - center gap - 4 mb - 12">;
                <span className="text - white / 60">Monthly</span>;
                <button;
                  on_click={() => setBillingCycle (billing_cycle === 'monthly' ? 'yearly' : 'monthly')}
                  className={`relative w - 16 h - 8 rounded - full transition - all duration - 300 ${
                    billing_cycle === 'yearly' ? 'bg - blue - 600' : 'bg - white / 20';
                  }`}
                >;
                  <div className={`absolute top - 1 w - 6 h - 6 bg - white rounded - full transition - all duration - 300 ${
                    billing_cycle === 'yearly' ? 'translate - x-8' : 'translate - x-1';
                  }`} />;
                </button>;
                <span className="text - white / 60">Yearly</span>;
                {billing_cycle === 'yearly' && (
                  <span className="bg - green - 500 / 20 text - green - 400 px - 3 py - 1 rounded - full text - sm font - medium">;
                    Save 20%;
                  </span>)}
              </div>;
              {/* Stats */}
              <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto">;
                <div className="bg - white / 5 rounded - 2xl p - 6 border border - white / 10">;
                  <div className="text - 3xl font - bold text - blue - 400">{all_services.length}+</div>;
                  <div className="text - white / 60">Services Available</div>;
                </div>;
                <div className="bg - white / 5 rounded - 2xl p - 6 border border - white / 10">;
                  <div className="text - 3xl font - bold text - green - 400">99.9%</div>;
                  <div className="text - white / 60">Uptime Guarantee</div>;
                </div>;
                <div className="bg - white / 5 rounded - 2xl p - 6 border border - white / 10">;
                  <div className="text - 3xl font - bold text - purple - 400">24 / 7</div>;
                  <div className="text - white / 60">Support Available</div>;
                </div>;
                <div className="bg - white / 5 rounded - 2xl p - 6 border border - white / 10">;
                  <div className="text - 3xl font - bold text - orange - 400">500%+</div>;
                  <div className="text - white / 60">Average ROI</div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Category Filter */}
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 6 py - 3 rounded - full font - medium transition - all duration - 300 flex items - center gap - 2 ${
                    selected_category === category.id;
                      ? 'bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white shadow - lg';
                      : 'bg - white / 10 text - white / 70 hover:bg - white / 20 hover:text - white';
                  }`}
                >;
                  <span>{category.icon}</span>;
                  {category.name}
                    key={service.id}
                    initial={{ opacity: 0, coordinate_y: 30 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: -30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300";
                  >;
                    {/* Popular Badge */}
                    {service.popular && (


                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
                    {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white">
                            {billingCycle === 'yearly' ? '/year' : service.period  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="line-clamp-2">{feature}</span>
                          </div>
                      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                        <div>
                          <div className="text-lg font-bold text-blue-400">{service.rating}</div>
                          <div className="text-xs text-white/60">Rating</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-400">{service.customers}+</div>
                          <div className="text-xs text-white/60">Customers</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-purple-400">{service.trialDays}d</div>
                          <div className="text-xs text-white/60">Trial</div>
                        </div>
                      </div>
                      <div className="absolute top - 4 right - 4 bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full flex items - center gap - 1 z - 10">;
                        <Star className="w - 3 h - 3" />;
                        Popular;
                      </div>)}
                    {/* Service Header */}
                    <div className="p - 6">;
                      <div className="flex items - start justify - between mb - 4">;
                        <div className="text - 4xl">{service.icon}</div>;
                        <div className="text - right">;
                          <div className="text - 3xl font - bold text - white">;
                            {billing_cycle === 'yearly' ? calculateYearlyPrice (service.price) : service.price}
                          </div>;
                          <div className="text - white / 60">;
                            {billing_cycle === 'yearly' ? '/year' : service.period}
                          </div>;
                        </div>;
                      </div>;
                      <h3 className="text - xl font - bold text - white mb - 2">{service.name}</h3>;
                      <p className="text - white / 70 text - sm mb - 4">{service.tagline}</p>;
                      {/* Key Features */}
                      <div className="space - y-2 mb - 6">;
                        {service.features.slice (0, 4).map ((feature, idx) => (
                          <div key={idx} className="flex items - center gap - 2 text - sm text - white / 60">;
                            <Check className="w - 4 h - 4 text - green - 400 flex - shrink - 0" />;
                            <span className="line - clamp - 2">{feature}</span>;
                          </div>))}
                      </div>;
                      {/* Service Stats */}
                      <div className="grid grid - cols - 3 gap - 4 mb - 6 text - center">;
                        <div>;
                          <div className="text - lg font - bold text - blue - 400">{service.rating}</div>;
                          <div className="text - xs text - white / 60">Rating</div>;
                        </div>;
                        <div>;
                          <div className="text - lg font - bold text - green - 400">{service.customers}+</div>;
                          <div className="text - xs text - white / 60">Customers</div>;
                        </div>;
                        <div>;
                          <div className="text - lg font - bold text - purple - 400">{service.trial_days}d</div>;
                          <div className="text - xs text - white / 60">Trial</div>;
                        </div>;
                      </div>;
                      {/* Expand / Collapse Button */}
                      <button;
                        on_click={() => toggleServiceExpansion (service.id)}
                        className="w - full bg - white / 10 text - white py - 3 px - 4 rounded - xl font - medium hover:bg - white / 20 transition - all duration - 300 flex items - center justify - center gap - 2 mb - 4";
                      >;
                        {expanded_service === service.id ? 'Show Less' : 'View Details'}
                        <ChevronDown className={`w - 4 h - 4 transition - transform duration - 300 ${
                          expanded_service === service.id ? 'rotate - 180' : '';
                        }`} />;
                      </button>;
                      {/* CTA Button */}
                      <a;
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Get Started
                        <ExternalLink className="w-4 h-4" />
                        target="_blank";
                        rel="noopener noreferrer";
                        className="w - full bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white py - 3 px - 4 rounded - xl font - medium text - center block hover:from - blue - 700 hover:to - cyan - 700 transition - all duration - 300 flex items - center justify - center gap - 2";
                      >;
                        Get Started;
                        <ExternalLink className="w - 4 h - 4" />;
                      </a>;
                    </div>;
                    {/* Expanded Details */}
                    <AnimatePresence>;
                      {expanded_service === service.id && (
                        <motion.div;
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                                    {useCase  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                                  </div>;
                                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                              </div>;
                            </div>;
                            {/* ROI and Benefits */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-white mb-2">ROI & Benefits</h4>
                              <p className="text-white/70 text-sm mb-3">{service.roi}</p>
                              <div className="grid grid-cols-2 gap-2">
                                {service.benefits.map((benefit, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                                    <TrendingUp className="w-3 h-3 text-green-400" />
                            {/* ROI and Benefits */}
                            <div className="mb - 6">;
                              <h4 className="text - lg font - semibold text - white mb - 2">ROI & Benefits</h4>;
                              <p className="text - white / 70 text - sm mb - 3">{service.roi}</p>;
                              <div className="grid grid - cols - 2 gap - 2">;
                                {service.benefits.map ((benefit, idx) => (
                                  <div key={idx} className="flex items - center gap - 2 text - sm text - white / 60">;
                                    <TrendingUp className="w - 3 h - 3 text - green - 400" />;
                                    {benefit}
                            <div className="bg-white/5 rounded-xl p-4">
                              <h4 className="text-lg font-semibold text-white mb-3">Contact Information</h4>
                              <div className="space-y-2 text-sm text-white/60">
                                <div> {service.contactInfo.mobile}</div>
                                <div> {service.contactInfo.email}</div>
                                <div> {service.contactInfo.address}</div>
                                <div> {service.contactInfo.website}</div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
              initial={{ opacity: 0, y: 30 }  } catch (error) {
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
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Contact our sales team to discuss your specific needs and get a customized quote for our revolutionary micro SAAS services.
                </p>
                <div className="flex flex-col sm: flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Contact Sales Team
                    <ArrowRight className="w-5 h-5" />
                  <a
                    href="tel:+13024640950"
                    className="bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
                  >;
                    Call +1 302 464 0950;
                  </a>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
}
