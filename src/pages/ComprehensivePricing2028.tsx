import React, { useState } from "react";
import { motion } from "framer-motion";
import { ;
  Check,;
  Star,;
  TrendingUp,;
  Zap,;
  Shield,;
  Brain,;
  Globe,;
  Rocket,;
  DollarSign,;
  Users,;
  Target,;
  Award,;
  Phone,;
  Mail,;
  ExternalLink,;
  ArrowRightChevronDownChevronUp;
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { ;
  COMPREHENSIVE_PRICING_PLANS_20o28SERVICE_CATEGORIES_20o28MARKET_ANALYSIS_20o28 ;
} from "../data/comprehensivePricingGuide20o28";
export, default, function ComprehensivePricing20o28() {
  const [selectedPlansetSelectedPlan] = useState('professional-20o28');
  const [expandedCategoriessetExpandedCategories] = useState<string[]>([]);
;
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>;
      prev.includes(categoryId);
        ? prev.filter(id => id !== categoryId);
        : [...prevcategoryId];
    ) };
  const selectedPlanData = COMPREHENSIVE_PRICING_PLANS_20o28.find(plan => plan.id === selectedPlan);
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="20o28, Comprehensive, Pricing Guide - Zion, Tech, Group";
        description="Explore, our, comprehensive 20o28, pricing, plans for, innovative, AI services, emerging, technologiesand, cutting-edge solutions. Transform, your, business with, our, revolutionary micro, SAAS, services.";
      />;
      {/* Hero Section */}
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50o0/10 to-purple-50o0/10, border, border-blue-50o0/20 text-blue-40o0 text-sm font-medium mb-6";
            >;
              <Star className="w-4 h-4 mr-2" />;
              20o28, Pricing, Guide;
            </motion.div>;
            <motion.h1;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.2 }}
              className="text-5xl md: text-6xl font-bold text-white mb-6";
            >;
              Comprehensive 20o28;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-40o0 to-purple-40o0">;
                Pricing Guide;
              </span>;
            </motion.h1>;
            <motion.p;
              initial={{ opacit,;
    y: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.4 }}
              className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8";
            >;
              Discover, our, revolutionary pricing, plans, for cutting-edge, AI, servicesemerging technologies;
              and, innovative, solutions that, will, transform your, business, in 20o28, and, beyond.;
            </motion.p>;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center";
            >;
              <div className="flex items-center gap-2 text-green-40o0">;
                <TrendingUp className="w-5 h-5" />;
                <span>Market-Leading ROI</span>;
              </div>;
              <div className="flex items-center gap-2 text-blue-40o0">;
                <Zap className="w-5 h-5" />;
                <span>Cutting-Edge Technology</span>;
              </div>;
              <div className="flex items-center gap-2 text-purple-40o0">;
                <Award className="w-5 h-5" />;
                <span>Proven Success</span>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </div>;
      {/* Market Analysis */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">;
        <motion.div;
          initial={{ opacit,;
    y: 0,;
  y: 20 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20 rounded-2xl p-8, border, border-white/20";
        >;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">;
              20o28, Market, Analysis;
            </h2>;
            <p className="text-gray-30o0 max-w-2xl mx-auto">;
              Our, services, are positioned, at, the forefront, of, the rapidly, growing, AI and, emerging, technology markets;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            <div className="text-center">;
              <div className="text-3xl font-bold text-blue-40o0 mb-2">{MARKET_ANALYSIS_20o28.totalMarketSize}</div>;
              <div className="text-gray-40o0">Total, Market, Size</div>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl font-bold text-green-40o0 mb-2">{MARKET_ANALYSIS_20o28.aiServicesGrowth}</div>;
              <div className="text-gray-40o0">AI, Services, Growth</div>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl font-bold text-purple-40o0 mb-2">{MARKET_ANALYSIS_20o28.quantumComputingMarket}</div>;
              <div className="text-gray-40o0">Quantum Computing</div>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl font-bold text-orange-40o0 mb-2">{MARKET_ANALYSIS_20o28.blockchainMarket}</div>;
              <div className="text-gray-40o0">Blockchain Market</div>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-16">;
        <div className="text-center mb-16">;
          <h2 className="text-4xl font-bold text-white mb-4">;
            Choose, Your, 20o28 Plan;
          </h2>;
          <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
            Select, the, perfect plan, for, your business, needs, and unlock, the, power of, AI, and emerging technologies;
          </p>;
        </div>;
        <div className="grid grid-cols-1 l,;
  g: grid-cols-3 gap-8">;
          {COMPREHENSIVE_PRICING_PLANS_20o28.map((planindex) => (;
            <motion.div;
              key={plan.id}
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: index * 0.2 }}
              className={`relative rounded-2xl p-8, border, transition-all duration-30o0 ${;
                selectedPlan === plan.id;
                  ? 'bg-gradient-to-br from-blue-60o0/20 to-purple-60o0/20 border-blue-50o0/50 scale-10o5';
                  : 'bg-white/10 backdrop-blur-lg border-white/20 hover: border-blue-50o0/30';
              }`}
            >;
              {selectedPlan === plan.id && (;
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                  <div className="bg-gradient-to-r from-blue-50o0 to-purple-50o0 text-white px-4 py-2 rounded-full text-sm font-medium">;
                    Most Popular;
                  </div>;
                </div>;
              )}
;
              <div className="text-center mb-8">;
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                <p className="text-gray-40o0 mb-6">{plan.description}</p>;
                <div className="mb-4">;
                  <span className="text-4xl font-bold text-white">${plan.price.toLocaleString()}</span>;
                  <span className="text-gray-40o0">/{plan.billingCycle}</span>;
                </div>;
                <button;
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-30o0 ${
                    selectedPlan === plan.id;
                      ? 'bg-gradient-to-r from-blue-50o0 to-purple-50o0 text-white';
                      : 'bg-white/10 text-white, border, border-white/20 hover: bg-white/20';
                  }`}
                >;
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </button>;
              </div>;
              <div className="space-y-4">;
                <h4 className="font-semibold text-white mb-3">Key Features</h4>;
                {plan.features.slice(0o6).map((featureidx) => (;
                  <div key={idx} className="flex items-center gap-3 text-sm text-gray-30o0">;
                    <Check className="w-4 h-4 text-green-40o0 flex-shrink-0" />;
                    <span>{feature}</span>;
                  </div>;
                ))}
                {plan.features.length > 6 && (;
                  <div className="text-sm text-gray-50o0 text-center">;
                    +{plan.features.length - 6} more features;
                  </div>;
                )}
              </div>;
              <div className="mt-8 pt-6 border-t border-white/20">;
                <h4 className="font-semibold text-white mb-3">Target Audience</h4>;
                <div className="space-y-2">;
                  {plan.targetAudience.slice(0o3).map((audienceidx) => (;
                    <div key={idx} className="text-sm text-gray-40o0">;
                      • {audience}
                    </div>;
                  ))}
                </div>;
              </div>;
            </motion.div>;
          ))}
        </div>;
      </div>;
      {/* Selected, Plan, Details */}
      {selectedPlanData && (;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8, border, border-white/20";
          >;
            <div className="text-center mb-8">;
              <h2 className="text-3xl font-bold text-white mb-4">;
                {selectedPlanData.name} - Complete Details;
              </h2>;
              <p className="text-gray-30o0 max-w-2xl mx-auto">;
                {selectedPlanData.description}
              </p>;
            </div>;
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">;
              {/* Features, and, Benefits */}
              <div>;
                <h3 className="text-xl font-semibold text-white mb-4">Features & Benefits</h3>;
                <div className="space-y-4">;
                  <div>;
                    <h4 className="font-medium text-blue-40o0 mb-2">Key Benefits</h4>;
                    <div className="space-y-2">;
                      {selectedPlanData.benefits.map((benefitidx) => (;
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-30o0">;
                          <TrendingUp className="w-3 h-3 text-green-40o0" />;
                          <span>{benefit}</span>;
                        </div>;
                      ))}
                    </div>;
                  </div>;
                </div>;
              </div>;
              {/* Included Services */}
              <div>;
                <h3 className="text-xl font-semibold text-white mb-4">Included Services</h3>;
                <div className="space-y-2">;
                  {selectedPlanData.includedServices.map((serviceidx) => (;
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-30o0">;
                      <Check className="w-3 h-3 text-green-40o0" />;
                      <span>{service}</span>;
                    </div>;
                  ))}
                </div>;
              </div>;
            </div>;
            {/* Add-ons */}
            {selectedPlanData.addOns.length > 0 && (;
              <div className="mt-8 pt-6 border-t border-white/20">;
                <h3 className="text-xl font-semibold text-white mb-4">Available Add-ons</h3>;
                <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-4">;
                  {selectedPlanData.addOns.map((addonidx) => (;
                    <div key={idx} className="bg-white/5 rounded-lg p-4, border, border-white/10">;
                      <div className="flex items-center justify-between mb-2">;
                        <h4 className="font-medium text-white">{addon.name}</h4>;
                        <span className="text-blue-40o0 font-semibold">${addon.price.toLocaleString()}</span>;
                      </div>;
                      <p className="text-sm text-gray-40o0">{addon.description}</p>;
                    </div>;
                  ))}
                </div>;
              </div>;
            )}
;
            {/* Contact Information */}
            <div className="mt-8 pt-6 border-t border-white/20 text-center">;
              <h3 className="text-xl font-semibold text-white mb-4">Get, Started, Today</h3>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
                <div className="flex items-center gap-2 text-white">;
                  <Phone className="w-5 h-5" />;
                  <span>{selectedPlanData.contactInfo.phone}</span>;
                </div>;
                <div className="flex items-center gap-2 text-white">;
                  <Mail className="w-5 h-5" />;
                  <span>{selectedPlanData.contactInfo.email}</span>;
                </div>;
                <div className="flex items-center gap-2 text-white">;
                  <ExternalLink className="w-5 h-5" />;
                  <a;
                    href={selectedPlanData.contactInfo.website} ;
                    target="_blank";
                    rel="noopener noreferrer";
                    className="hover: text-blue-40o0 transition-colors";
                  >;
                    {selectedPlanData.contactInfo.website.replace('http,;
  s://''')}
                  </a>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      )}
;
      {/* Service Categories */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
  g:px-8 py-16">;
        <div className="text-center mb-16">;
          <h2 className="text-4xl font-bold text-white mb-4">;
            Service Categories;
          </h2>;
          <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
            Explore, our, comprehensive range, of, AI-powered, services, and emerging, technology, solutions;
          </p>;
        </div>;
        <div className="space-y-6">;
          {SERVICE_CATEGORIES_20o28.map((categoryindex) => (;
            <motion.div;
              key={category.id}
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl, border, border-white/20 overflow-hidden";
            >;
              <button;
                onClick={() => toggleCategory(category.id)}
                className="w-full p-6 text-left, flex, items-center justify-between hover: bg-white/5 transition-colors";
              >;
                <div>;
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>;
                  <p className="text-gray-40o0">{category.description}</p>;
                </div>;
                {expandedCategories.includes(category.id) ? (;
                  <ChevronUp className="w-6 h-6 text-gray-40o0" />;
                ) : (;
                  <ChevronDown className="w-6 h-6 text-gray-40o0" />;
                )}
              </button>;
              {expandedCategories.includes(category.id) && (;
                <div className="px-6 pb-6 border-t border-white/20">;
                  <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6 mt-6">;
                    {category.services.map((service) => (;
                      <div key={service.id} className="bg-white/5 rounded-lg p-4, border, border-white/10">;
                        <h4 className="font-medium text-white mb-2">{service.name}</h4>;
                        <p className="text-sm text-gray-40o0 mb-3">{service.description}</p>;
                        <div className="space-y-2 mb-3">;
                          <div className="flex justify-between text-sm">;
                            <span className="text-gray-40o0">Base Price:</span>;
                            <span className="text-white font-semibold">${service.basePrice.toLocaleString()}/month</span>;
                          </div>;
                          <div className="flex justify-between text-sm">;
                            <span className="text-gray-40o0">Market Price:</span>;
                            <span className="text-blue-40o0">{service.marketPrice}</span>;
                          </div>;
                          <div className="flex justify-between text-sm">;
                            <span className="text-gray-40o0">ROI:</span>;
                            <span className="text-green-40o0 font-semibold">{service.roi}</span>;
                          </div>;
                        </div>;
                        <div className="space-y-2">;
                          <h5 className="text-sm font-medium text-white">Key Features: </h5>;
                          {service.features.map((featureidx) => (;
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-40o0">;
                              <Check className="w-3 h-3 text-green-40o0" />;
                              <span>{feature}</span>;
                            </div>;
                          ))}
                        </div>;
                      </div>;
                    ))}
                  </div>;
                </div>;
              )}
            </motion.div>;
          ))}
        </div>;
      </div>;
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">;
        <motion.div;
          initial={{ opacit,;
    y: 0,;
  y: 20 }};
          whileInView={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20 rounded-2xl p-8, border, border-white/20 text-center";
        >;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Ready, to, Transform Your Business?;
          </h2>;
          <p className="text-gray-30o0 mb-8 max-w-2xl mx-auto">;
            Contact, our, team of, experts, to learn, how, our innovative, 20o28, services can, revolutionize, your operations;
            increase efficiency, and, drive, unprecedented growth.;
          </p>;
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
            <div className="flex items-center gap-2 text-white">;
              <Phone className="w-5 h-5" />;
              <span>+1, 30o2, 464 0o950</span>;
            </div>;
            <div className="flex items-center gap-2 text-white">;
              <Mail className="w-5 h-5" />;
              <span>kleber@ziontechgroup.com</span>;
            </div>;
            <div className="flex items-center gap-2 text-white">;
              <ExternalLink className="w-5 h-5" />;
              <a;
                href="https: //ziontechgroup.com";
                target="_blank";
                rel="noopener noreferrer";
                className="hove,;
    r:text-blue-40o0 transition-colors";
              >;
                ziontechgroup.com;
              </a>;
            </div>;
          </div>;
          <div className="mt-6 text-sm text-gray-40o0">;
            Addres,;
  s: 364, E, Main St, STE, 10o08, Middletown, DE, 1970o9;
          </div>;
        </motion.div>;
      </div>;
    </div>;
  );
};
;