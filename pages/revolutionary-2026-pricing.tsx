


import React, { useState, useMemo } from 'react',;
import Head from 'next/head',;
import Link from 'next/link',;
import { motion, AnimatePresence } from 'framer-motion',;
import { 
  CheckCircle, Star, TrendingUp, DollarSign, Clock, Users, 
  ArrowRight, Rocket, Brain, Zap, Shield, Atom, Sparkles, 
  Target, Satellite, Globe, Cpu, Lock, Palette, Layers,
  Phone, Mail, MapPin, ExternalLink, Filter, Grid, List
} from 'lucide-react',;
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2',;
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-v2',;
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',;
import EnhancedNavigation2026 from '../components/layout/EnhancedNavigation2026',;
export default function Revolutionary2026Pricing() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),
  const [sortBy, setSortBy] = useState<string>('price-low'),

  // Combine all 2026 services
  const all2026Services = [
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2

import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';



import {;
  CheckCircle, Star, TrendingUp, DollarSign, Clock, Users,;
  ArrowRight, Rocket, Brain, Zap, Shield, Atom, Sparkles,;
  Target, Satellite, Globe, Cpu, Lock, Palette, Layers,;
  Phone, Mail, MapPin, ExternalLink, Filter, Grid, List;
} from 'lucide-react',;

import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-v2';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import EnhancedNavigation2026 from '../components/layout/EnhancedNavigation2026';


  // Filter services based on category and price
  const filteredServices = useMemo(() => {
    let filtered = all2026Services
    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai') {


import React, { useState, useMemo } from 'react',
import Head from 'next / head',
import Link from 'next / link',
import { motion, AnimatePresence } from 'framer-motion',
import {
  CheckCircle, Star, TrendingUp, DollarSign, Clock, Users,
  ArrowRight, Rocket, Brain, Zap, Shield, Atom, Sparkles,
  Target, Satellite, Globe, Cpu, Lock, Palette, Layers,
  Phone, Mail, MapPin, ExternalLink, Filter, Grid, List;
} from 'lucide-react',
import { innovative2026MicroSaasServicesV2 } from '../data / innovative - 2026 - micro - saas - v2',
import { emergingTech2026ServicesV2 } from '../data / emerging - tech - 2026 - v2',
import UltraAdvancedFuturisticBackground from '../components / ui / UltraAdvancedFuturisticBackground',
import EnhancedNavigation2026 from '../components / layout / EnhancedNavigation2026',
export default /**
 * Revolutionary2026Pricing - Function description
 */
function Revolutionary2026Pricing() {
  const [selected_category, setSelectedCategory] = useState < string>('all'),
  const [selectedPriceRange, setSelectedPriceRange] = useState < string>('all'),
  const [sort_by, setSortBy] = useState < string>('price - low'),
  // Combine all 2026 services;
  const all2026Services = [;
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2;
  ],
  // Filter services based on category and price;
  const filtered_services = useMemo (() => {
    let filtered = all2026Services,
    // Category filter;
    // Check condition
if ( {) {
  $2
}
      filtered = filtered.filter (service => {
        // Check condition
if ( {) {
  $2
}
          return service.category.includes ('AI') || service.category.includes ('Machine Learning');
        } else // Check condition
if ( {) {
  $2
}
          return service.category.includes ('Quantum') || service.category.includes ('Space');
        } else // Check condition
if ( {) {
  $2
}
          return service.category.includes ('Emerging') || service.category.includes ('Technology');
        } else // Check condition
if ( {) {
  $2
}
          return service.category.includes ('Enterprise') || service.category.includes ('Business');
        }

        return true;
      });

    }

        const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
        if (selectedPriceRange === 'low') return price < 1000;
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000;
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000;
        if (selectedPriceRange === 'premium') return price >= 20000;

        return true
      })
    }
  ],
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com'
  // Calculate pricing statistics
  const pricingStats = {
    totalServices: all2026Services.length
    averagePrice: all2026Services.reduce((acc, service) => {
      const price = parseFloat(service.price.replace(/[^0-9.]/g, '')) |0
      return acc + price
    }, 0) / all2026Services.length
    lowestPrice: Math.min(...all2026Services.map(s => parseFloat(s.price.replace(/[^0-9.]/g, '')) |0))
    highestPrice: Math.max(...all2026Services.map(s => parseFloat(s.price.replace(/[^0-9.]/g, '')) |0))
    popularServices: all2026Services.filter(s => s.popular).length
  return (
      colorScheme="neural-network"
      particleCount={500  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      animationSpeed={2.5  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      enableHolographic={true  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      enableQuantumEffects={true  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      enableNeuralNetwork={true  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    >
      <div className="min-h-screen">
        <Head>
          <title>Revolutionary 2026 Pricing - Zion Tech Group | Competitive AI, Quantum & Emerging Tech Pricing</title>
          <meta name="description" content="Discover competitive pricing for Zion Tech Group's revolutionary 2026 services: AI, quantum computing, emerging technologies, and enterprise solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="2026 pricing, AI services pricing, quantum computing pricing, emerging technologies pricing, enterprise solutions pricing, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Revolutionary 2026 Pricing - Zion Tech Group" />
          <meta property="og:description" content="Competitive pricing for cutting-edge AI, quantum computing, and emerging technology services" />
          <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2026-pricing" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2026-pricing" />
        </Head>
        {/* Enhanced Navigation */}
        <EnhancedNavigation2026 />;

        {/* Hero Section */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8 relative overflow - hidden">;
          <div className="absolute inset - 0 bg - gradient - to - r from - purple - 900 / 20 via - transparent to - cyan - 900 / 20"></div>;
          <div className="max - w-7xl mx - auto relative z - 10">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}


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
              transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Revolutionary 2026 Pricing
                </span>
              </h1>
              <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed mb-8">




              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-400">{pricingStats.totalServices}+</div>
                  <div className="text-gray-400 text-sm">Total Services</div>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-400">${Math.round(pricingStats.averagePrice).toLocaleString()}</div>
                  <div className="text-gray-400 text-sm">Average Price</div>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-400">${pricingStats.lowestPrice}</div>
                  <div className="text-gray-400 text-sm">Starting Price</div>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-yellow-400">{pricingStats.popularServices}</div>
                  <div className="text-gray-400 text-sm">Popular Services</div>
                </div>
              </div>
            </motion.div>

              className="text - center mb - 16";
            >;
              <h1 className="text - 5xl md:text - 6xl font - bold text - white mb - 6">;
                <span className="bg - gradient - to - r from - purple - 400 via - pink - 400 to - cyan - 400 bg - clip - text text - transparent">;
                  Revolutionary 2026 Pricing;
                </span>;
              </h1>;
              <p className="text - gray - 300 text - xl max - w-4xl mx - auto leading - relaxed mb - 8">;
                Transparent, competitive pricing for our cutting - edge AI, quantum computing, and emerging technology solutions.;
                Get maximum ROI with our revolutionary services.;
              </p>;
              {/* Pricing Statistics */}
              <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto">;
                <div className="bg - black / 40 backdrop - blur - xl border border - purple - 500 / 20 rounded - xl p - 4">;
                  <div className="text - 2xl font - bold text - purple - 400">{pricing_stats.total_services}+</div>;
                  <div className="text - gray - 400 text - sm">Total Services</div>;
                </div>;
                <div className="bg - black / 40 backdrop - blur - xl border border - purple - 500 / 20 rounded - xl p - 4">;
                  <div className="text - 2xl font - bold text - green - 400">${Math.round (pricing_stats.average_price).toLocaleString ()}</div>;
                  <div className="text - gray - 400 text - sm">Average Price</div>;
                </div>;
                <div className="bg - black / 40 backdrop - blur - xl border border - purple - 500 / 20 rounded - xl p - 4">;
                  <div className="text - 2xl font - bold text - blue - 400">${pricing_stats.lowest_price}</div>;
                  <div className="text - gray - 400 text - sm">Starting Price</div>;
                </div>;
                <div className="bg - black / 40 backdrop - blur - xl border border - purple - 500 / 20 rounded - xl p - 4">;
                  <div className="text - 2xl font - bold text - yellow - 400">{pricing_stats.popular_services}</div>;
                  <div className="text - gray - 400 text - sm">Popular Services</div>;
                </div>;
              </div>;
            </motion.div>;

            {/* Contact Information */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}


              className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">Need Custom Pricing?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-6">

              className="bg - black / 40 backdrop - blur - xl border border - purple - 500 / 20 rounded - 2xl p - 6 max - w-2xl mx - auto";
            >;
              <h3 className="text - xl font - bold text - white mb - 4 text - center">Need Custom Pricing?</h3>;
              <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4 text - center">;
                <div className="flex flex - col items - center space - y-2">;
                  <Phone className="w - 5 h - 5 text - purple - 400" />;
                  <span className="text - sm text - gray - 300">{contact_info.mobile}</span>;
                </div>;
                <div className="flex flex - col items - center space - y-2">;
                  <Mail className="w - 5 h - 5 text - purple - 400" />;
                  <span className="text - sm text - gray - 300">{contact_info.email}</span>;
                </div>;
                <div className="flex flex - col items - center space - y-2">;
                  <MapPin className="w - 5 h - 5 text - purple - 400" />;
                  <span className="text - sm text - gray - 300">{contact_info.address}</span>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;

        {/* Filters */}
        <section className="py - 8 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <div className="bg - black / 40 backdrop - blur - xl border border - purple - 500 / 20 rounded - 2xl p - 6">;
              <div className="flex flex - col lg:flex - row gap - 6">;
                {/* Category Filter */}
                <div className="flex flex - wrap gap - 2">;
                  {categories.map ((category) => (
                    <button;
                      key={category.id}
                      on_click={() => setSelectedCategory (category.id)}
                      className={`px - 4 py - 2 rounded - lg text - sm font - medium transition - all duration - 200 ${
                        selected_category === category.id;
                          ? 'bg - purple - 600 text - white';
                          : 'bg - black / 40 text - gray - 300 hover:bg - black / 60 hover:text - white';
                      }`}

        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Revolutionary 2026 Pricing
                </span>
              </h1>
              <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
                Transparent, competitive pricing for our cutting-edge AI, quantum computing, and emerging technology solutions.
                Get maximum ROI with our revolutionary services.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-400">{pricingStats.totalServices}+</div>
                  <div className="text-gray-400 text-sm">Total Services</div>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-400">${Math.round(pricingStats.averagePrice).toLocaleString()}</div>
                  <div className="text-gray-400 text-sm">Average Price</div>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-400">${pricingStats.lowestPrice}</div>
                  <div className="text-gray-400 text-sm">Starting Price</div>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-yellow-400">{pricingStats.popularServices}</div>
                  <div className="text-gray-400 text-sm">Popular Services</div>
                </div>
              </div>
            </motion.div>
              className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">Need Custom Pricing?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.mobile}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.email}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                      }`}
                    >;
                      {category.icon} {category.name} ({category.count});
                    </button>))}
                </div>;

                {/* Price Range Filter */}
                <div className="flex flex - wrap gap - 2">;
                  {price_ranges.map ((range) => (
                    <button;
                      key={range.id}
                      on_click={() => setSelectedPriceRange (range.id)}
                      className={`px - 3 py - 2 rounded - lg text - sm font - medium transition - all duration - 200 ${
                        selectedPriceRange === range.id;
                          ? 'bg - blue - 600 text - white';
                          : 'bg - black / 40 text - gray - 300 hover:bg - black / 60 hover:text - white';
                      }`}
                    >;
                      {range.name}


                {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      onClick={() => setSelectedCategory(category.id)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${;
                        selectedCategory === category.id;
                          ? 'bg-purple-600 text-white';
                          : 'bg-black/40 text-gray-300 hover:bg-black/60 hover:text-white';
                      }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    >;
                      {category.icon} {category.name} ({category.count});
                    </button>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
                {/* Price Range Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      onClick={() => setSelectedPriceRange(range.id)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${;
                        selectedPriceRange === range.id;
                          ? 'bg-blue-600 text-white';
                          : 'bg-black/40 text-gray-300 hover:bg-black/60 hover:text-white';
                      }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    >;
                      {range.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </button>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
                {/* Sort Options */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex items-center space-x-4">
                  <select
                    value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSortBy(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                    className="px-3 py-2 bg-black/60 border border-purple-500/30 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500/60"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>

                    </button>))}
                </div>;

                {/* Sort Options */}
                <div className="flex items - center space - x-4">;
                  <select;
                    value={sort_by}
                    on_change={(e) => setSortBy (e.target.value)}
                    className="px - 3 py - 2 bg - black / 60 border border - purple - 500 / 30 rounded - lg text - white text - sm focus:outline - none focus:border - purple - 500 / 60";
                  >;
                    {sort_options.map ((option) => (
                      <option key={option.id} value={option.id}>;
                        {option.name}


                        {option.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </option>;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </select>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Services Pricing Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {filteredServices.length} Services Available
              </h2>
              <p className="text-gray-400">
                Compare pricing and features to find the perfect solution for your business
              </p>
            </div>
            <AnimatePresence mode="wait">
              {filteredServices.length === 0 ? (
                <motion.div

                      </option>))}
                  </select>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;