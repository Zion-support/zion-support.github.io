
=======


=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  ArrowRight, Check, Star, Users, Zap, Shield, Globe
  TrendingUp, Award, Clock, CheckCircle, ExternalLink
} from 'lucide-react'
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3';
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from 'react',;
import Head from 'next/head',;
import { motion } from 'framer-motion',;
import { 
  ArrowRight, Check, Star, Users, Zap, Shield, Globe, 
  TrendingUp, Award, Clock, CheckCircle, ExternalLink
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation',;
import EnhancedFooter from '../components/EnhancedFooter',;
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3',;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default function Pricing2025() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' }
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: '🧠' }
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', icon: '🔒' }
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', icon: '🌐' }
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', icon: '🚀' }
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', icon: '🧬' }
  ]
  const filteredServices = innovative2025MicroSaasExpansionV3.filter(service =>
    selectedCategory === 'all' |service.category.includes(selectedCategory)
  )
  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', ''))
    const annualPrice = price * 12 * 0.8, // 20% discount for annual
    return `$${Math.round(annualPrice)}`
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  }
  const containerVariants = {
    hidden: { opacity: 0 }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from 'react',
import Head from 'next / head',
import { motion } from 'framer-motion',
import {
  ArrowRight, Check, Star, Users, Zap, Shield, Globe,
  TrendingUp, Award, Clock, CheckCircle, ExternalLink;
} from 'lucide-react',
import EnhancedNavigation from '../components / EnhancedNavigation',
import EnhancedFooter from '../components / EnhancedFooter',
import { innovative2025MicroSaasExpansionV3 } from '../data / 2025 - innovative - micro - saas - expansion - v3',
export default /**
 * Pricing2025 - Function description
 */
function Pricing2025() {
  const [selected_category, setSelectedCategory] = useState ('all'),
  const [billing_cycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly'),
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: '🧠' },
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', icon: '🔒' },
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', icon: '🌐' },
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', icon: '🚀' },
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', icon: '🧬' }
  ],
<<<<<<< HEAD
  const filtered_services = innovative2025MicroSaasExpansionV3.filter (service =>;
=======
const filtered_services = innovative2025MicroSaasExpansionV3.filter (service =>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    selected_category === 'all' || service.category.includes (selected_category)),
  const getAnnualPrice = (monthly_price: string) =>: any {
    const price = parse_float (monthly_price.replace ('$', '')),
    const annual_price = price * 12 * 0.8, // 20% discount for annual;
    return `$${Math.round (annual_price)}`;
  },
  const container_variants = {
    hidden: { opacity: 0 },
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    visible: {
      opacity: 1
      transition: {
        stagger_children: 0.1;
      }
    }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  const item_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: {
      opacity: 1,
      coordinate_y: 0,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      transition: {
        duration: 0.5;
      }
    }
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {;
  ArrowRight, Check, Star, Users, Zap, Shield, Globe,;
  TrendingUp, Award, Clock, CheckCircle, ExternalLink;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3';
export default function Pricing2025(req, res) {
  try {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀' },;
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: '🧠' },;
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', icon: '🔒' },;
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', icon: '🌐' },;
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', icon: '🚀' },;
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', icon: '🧬'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const filteredServices = innovative2025MicroSaasExpansionV3.filter(service =>;
    selectedCategory === 'all' || service.category.includes(selectedCategory);
  );
  const getAnnualPrice = (monthlyPrice: string) => {;
    const price = parseFloat(monthlyPrice.replace('$', '')),;
    const annualPrice = price * 12 * 0.8, // 20% discount for annual;
    return `$${Math.round(annualPrice)}`;
  },;
  const containerVariants = {;
    hidden: { opacity: 0 };
    visible: {;
      opacity: 1;
      transition: {;
        staggerChildren: 0.1;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  const itemVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 0.5;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
  },

=======


  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>2025 Pricing & Services — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Transparent pricing with flexible plans." />
        <meta property="og:title" content="2025 Pricing & Services — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services." />
        <meta name="keywords" content="pricing, micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing-2025" />
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","headline":"2025 Pricing & Services — Zion Tech Group","url":"https://ziontechgroup.com/pricing-2025","isPartOf":{"@type":"WebSite","name":"Zion Tech Group","url":"https://ziontechgroup.com"}}</script></Head>
      <EnhancedNavigation />

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  return (
    <div className="min - h-screen bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950 text - white overflow - hidden">;
      <Head>;
        <title > 2025 Pricing & Services — Zion Tech Group</title>;
        <meta name="description" content="Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting - edge IT services. Transparent pricing with flexible plans." />;
        <meta property="og:title" content="2025 Pricing & Services — Zion Tech Group" />;
        <meta property="og:description" content="Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting - edge IT services." />;
        <meta name="keywords" content="pricing, micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />;
        <link rel="canonical" href="https://ziontechgroup.com / pricing - 2025" />;
        <script type="application / ld + json">{"@context":"https://schema.org", "@type":"WebPage", "headline":"2025 Pricing & Services — Zion Tech Group", "url":"https://ziontechgroup.com / pricing - 2025", "isPartOf":{"@type":"WebSite", "name":"Zion Tech Group", "url":"https://ziontechgroup.com"}}</script></Head>;
      <EnhancedNavigation />;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Hero Section */}
      <section className="relative py - 20 px - 6">;
        <div className="max - w-7xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD


      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2025 Pricing & Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">

<<<<<<< HEAD
              AI solutions, quantum technologies, and revolutionary IT services.
            </p>
            {/* Billing Toggle */}

=======

              Transparent pricing for our comprehensive collection of innovative micro SAAS services, 


              AI solutions, quantum technologies, and revolutionary IT services.
            </p>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >;
            <h1 className="text - 5xl md:text - 7xl font - bold mb - 6 bg - gradient - to - r from - white via - blue - 100 to - cyan - 100 bg - clip - text text - transparent">;
              2025 Pricing & Services;
            </h1>;
            <p className="text - xl md:text - 2xl text - white / 80 max - w-4xl mx - auto leading - relaxed mb - 8">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              Transparent pricing for our comprehensive collection of innovative micro SAAS services,
<<<<<<< HEAD

              AI solutions, quantum technologies, and revolutionary IT services.
            </p>
            {/* Billing Toggle */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${;
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-white/20';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                  billingCycle === 'annual' ? 'right-1' : 'left-1'
                }`} />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-white/60'}`}>
                Annual
                <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
=======
=======
              AI solutions, quantum technologies, and revolutionary IT services.;
            </p>;
            {/* Billing Toggle */}
            <div className="flex items - center justify - center gap - 4 mb - 12">;
              <span className={`text - lg ${billing_cycle === 'monthly' ? 'text - white' : 'text - white / 60'}`}>;
                Monthly;
              </span>;
              <button;
                on_click={() => setBillingCycle (billing_cycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w - 16 h - 8 rounded - full transition - all duration - 300 ${
                  billing_cycle === 'annual' ? 'bg - cyan - 500' : 'bg - white / 20';
                }`}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >;
                <div className={`absolute top - 1 w - 6 h - 6 bg - white rounded - full transition - all duration - 300 ${
                  billing_cycle === 'annual' ? 'right - 1' : 'left - 1';
                }`} />;
              </button>;
              <span className={`text - lg ${billing_cycle === 'annual' ? 'text - white' : 'text - white / 60'}`}>;
                Annual;
                <span className="ml - 2 px - 2 py - 1 bg - green - 500 / 20 text - green - 400 text - xs rounded - full">;
                  Save 20%;
                </span>;
              </span>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Category Filter */}
      <section className="py - 8 px - 6 bg - gradient - to - r from - white / 5 to - white / 10">;
        <div className="max - w-7xl mx - auto">;
          <div className="flex flex - wrap justify - center gap - 4">;
            {categories.map ((category) => (
              <button;
                key={category.id}
                on_click={() => setSelectedCategory (category.id)}
                className={`px - 6 py - 3 rounded - lg text - lg font - medium transition - all duration - 300 flex items - center gap - 2 ${
                  selected_category === category.id;
                    ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                    : 'bg - white / 10 text - white / 70 hover:bg - white / 20 hover:text - white';
                }`}
              >;
                <span>{category.icon}</span>;
                {category.name}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </button>))}
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Pricing Grid */}
      <section className="py - 16 px - 6">;
        <div className="max - w-7xl mx - auto">;
          <motion.div;
            variants={container_variants}
            initial="hidden";
            animate="visible";
            className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
          >;
            {filtered_services.map ((service, index) => (
              <motion.div;
                key={service.id}
                variants={item_variants}
                className={`group relative p - 8 rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl ${
                  service.popular ? 'ring - 2 ring - cyan - 400 / 50' : '';
                }`}
=======

      {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <section className="py-8 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button

<<<<<<< HEAD
=======
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
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 ${;
                  selectedCategory === category.id;
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white';
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >;
                <span>{category.icon}</span>;
                {category.name  } catch (error) {
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
        </div>;
      </section>;
      {/* Pricing Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                variants={itemVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${;
                  service.popular ? 'ring-2 ring-cyan-400/50' : '';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              >;
                {/* Popular Badge */}
                {service.popular && (
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full">
                    MOST POPULAR
                  </div>
=======

                  <div className="absolute -top - 4 left - 1/2 transform -translate - x-1 / 2 px - 6 py - 2 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black text - sm font - bold rounded - full">;
                    MOST POPULAR;
                  </div>)}

=======
                  <div className="absolute -top - 4 left - 1/2 transform -translate - x-1 / 2 px - 6 py - 2 bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black text - sm font - bold rounded - full">;
                    MOST POPULAR;
                  </div>)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Service Header */}
                <div className="text - center mb - 8">;
                  <div className={`w - 20 h - 20 rounded - 2xl bg - gradient - to - br ${service.color} p - 5 mx - auto mb - 4 flex items - center justify - center text - 3xl`}>;
                    {service.icon}
<<<<<<< HEAD


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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                <div className="text-center mb-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-5 mx-auto mb-4 flex items-center justify-center text-3xl`}>
                    {service.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{service.tagline}</p>
                </div>

<<<<<<< HEAD
=======

                {/* Pricing */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="text-center mb-8">
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-cyan-400">
                      {billingCycle === 'monthly' ? service.price : getAnnualPrice(service.price)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </span>
                    <span className="text-white/60 ml-2">
                      {billingCycle === 'monthly' ? service.period : '/year'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-green-400 text-sm">
                      Save ${Math.round(parseFloat(service.price.replace('$', '')) * 12 * 0.2)} annually
                    </p>

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>;
                  <h3 className="text - 2xl font - bold text - white mb - 2">{service.name}</h3>;
                  <p className="text - white / 70 text - sm leading - relaxed">{service.tagline}</p>;
                </div>;
                {/* Pricing */}
                <div className="text - center mb - 8">;
                  <div className="mb - 2">;
                    <span className="text - 4xl font - bold text - cyan - 400">;
                      {billing_cycle === 'monthly' ? service.price : getAnnualPrice (service.price)}
                    </span>;
                    <span className="text - white / 60 ml - 2">;
                      {billing_cycle === 'monthly' ? service.period : '/year'}
                    </span>;
                  </div>;
                  {billing_cycle === 'annual' && (
                    <p className="text - green - 400 text - sm">;
                      Save ${Math.round (parse_float (service.price.replace ('$', '')) * 12 * 0.2)} annually;
                    </p>)}
                </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Rating */}
                <div className="flex items - center justify - center gap - 2 mb - 6">;
                  <div className="flex items - center gap - 1">;
                    {[...Array (5)].map ((_, i) => (
                      <Star;
                        key={i}
                        className={`w - 4 h - 4 ${
                          i < Math.floor (service.rating) ? 'text - yellow - 400 fill - current' : 'text - white / 20';
                        }`}
<<<<<<< HEAD


                  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
                {/* Rating */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        className={`w-4 h-4 ${;
                          i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-white/20';
                        }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      />;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  </div>
                  <span className="text-white/60 text-sm">
                    {service.rating} ({service.reviews} reviews)
                  </span>
                </div>

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      />))}
                  </div>;
                  <span className="text - white / 60 text - sm">;
                    {service.rating} ({service.reviews} reviews);
                  </span>;
                </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Features */}
                <div className="mb - 8">;
                  <h4 className="text - white font - semibold mb - 4 text - center">Key Features:</h4>;
                  <div className="space - y-3">;
                    {service.features.slice (0, 5).map ((feature, idx) => (
                      <div key={idx} className="flex items - center gap - 3 text - sm text - white / 80">;
                        <CheckCircle className="w - 4 h - 4 text - cyan - 400 flex - shrink - 0" />;
                        <span>{feature}</span>;
                      </div>))}
=======

                {/* Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 text-center">Key Features:</h4>
                  <div className="space-y-3">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-white/80">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {service.features.length > 5 && (
<<<<<<< HEAD
<<<<<<< HEAD
                      <div className="text-cyan-400 text-sm font-medium text-center">
                        +{service.features.length - 5} more features
                      </div>
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>;
                </div>;
                {/* Market Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-white/60 mb-1">Market Size</div>
                    <div className="text-white font-medium">{service.marketSize}</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-white/60 mb-1">Growth Rate</div>
                    <div className="text-white font-medium">{service.growthRate}</div>
                  </div>
                </div>

=======


                {/* ROI and Setup */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <div className="mb-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-400/20">
                  <div className="text-cyan-400 font-semibold mb-2 text-center">🚀 Expected ROI:</div>
                  <p className="text-white/80 text-sm text-center">{service.roi}</p>
                  <div className="mt-3 grid grid-cols-2 gap-4 text-center text-sm">
                    <div>
                      <div className="text-white/60">Setup Time</div>
                      <div className="text-white font-medium">{service.setupTime}</div>
                    </div>
                    <div>
                      <div className="text-white/60">Trial Period</div>
                      <div className="text-white font-medium">{service.trialDays} days</div>
                    </div>
                  </div>
                </div>

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <div className="text - cyan - 400 text - sm font - medium text - center">;
                        +{service.features.length - 5} more features;
                      </div>)}
                  </div>;
                </div>;
                {/* Market Info */}
                <div className="grid grid - cols - 2 gap - 4 mb - 6 text - sm">;
                  <div className="text - center p - 3 bg - white / 5 rounded - lg">;
                    <div className="text - white / 60 mb - 1">Market Size</div>;
                    <div className="text - white font - medium">{service.market_size}</div>;
                  </div>;
                  <div className="text - center p - 3 bg - white / 5 rounded - lg">;
                    <div className="text - white / 60 mb - 1">Growth Rate</div>;
                    <div className="text - white font - medium">{service.growth_rate}</div>;
                  </div>;
                </div>;
                {/* ROI and Setup */}
                <div className="mb - 8 p - 4 bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 rounded - lg border border - cyan - 400 / 20">;
                  <div className="text - cyan - 400 font - semibold mb - 2 text - center">🚀 Expected ROI:</div>;
                  <p className="text - white / 80 text - sm text - center">{service.roi}</p>;
                  <div className="mt - 3 grid grid - cols - 2 gap - 4 text - center text - sm">;
                    <div>;
                      <div className="text - white / 60">Setup Time</div>;
                      <div className="text - white font - medium">{service.setup_time}</div>;
                    </div>;
                    <div>;
                      <div className="text - white / 60">Trial Period</div>;
                      <div className="text - white font - medium">{service.trial_days} days</div>;
                    </div>;
                  </div>;
                </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {/* Action Buttons */}
                <div className="space - y-3">;
                  <a;
                    href={service.link}
<<<<<<< HEAD


                {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="space-y-3">
                  <a
                    href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Get Started
                    <ExternalLink className="w-4 h-4" />

<<<<<<< HEAD
=======

                  </Link>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}&body=Hi, I'm interested in learning more about your ${service.name} service. Please provide more information about pricing, features, and implementation.`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                    className="w-full px-6 py-3 border border-white/20 hover:border-cyan-400/30 rounded-lg font-semibold text-white text-center transition-all duration-300 hover:bg-white/5"
                  >
                    Contact Sales
                  </a>
                </div>

<<<<<<< HEAD
=======

                {/* Contact Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <div className="text-white/60 text-sm mb-2">Need help? Contact us:</div>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <a href={`tel:${service.contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300">

<<<<<<< HEAD
=======

                      📞 {service.contactInfo.mobile  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </Link>
                    <a href={`mailto:${service.contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                      ✉️ {service.contactInfo.email  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </motion.div>;
          {/* No Results */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-white/70 mb-6">Try selecting a different category</p>
              <button

<<<<<<< HEAD
=======

                onClick={() => setSelectedCategory('all')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                View All Services
              </button>
            </div>

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    target="_blank";
                    rel="noopener noreferrer";
                    className="w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 rounded - lg font - semibold text - white text - center transition - all duration - 300 transform hover:scale - 105 flex items - center justify - center gap - 2";
                  >;
                    Get Started;
                    <ExternalLink className="w - 4 h - 4" />;
                  </a>;
                  <a;
                    href={`mailto:kleber@ziontechgroup.com?subject = Inquiry about ${service.name}&body = Hi, I'm interested in learning more about your ${service.name} service. Please provide more information about pricing, features, and implementation.`}
                    className="w - full px - 6 py - 3 border border - white / 20 hover:border - cyan - 400 / 30 rounded - lg font - semibold text - white text - center transition - all duration - 300 hover:bg - white / 5";
                  >;
                    Contact Sales;
                  </a>;
                </div>;
                {/* Contact Info */}
                <div className="mt - 6 pt - 4 border - t border - white / 10 text - center">;
                  <div className="text - white / 60 text - sm mb - 2">Need help? Contact us:</div>;
                  <div className="flex items - center justify - center gap - 4 text - sm">;
                    <a href={`tel:${service.contact_info.mobile}`} className="text - cyan - 400 hover:text - cyan - 300">;
                      📞 {service.contact_info.mobile}
                    </a>;
                    <a href={`mailto:${service.contact_info.email}`} className="text - cyan - 400 hover:text - cyan - 300">;
                      ✉️ {service.contact_info.email}
                    </a>;
                  </div>;
                </div>;
              </motion.div>))}
          </motion.div>;
          {/* No Results */}
          {filtered_services.length === 0 && (
            <div className="text - center py - 20">;
              <div className="text - 6xl mb - 4">🔍</div>;
              <h3 className="text - 2xl font - bold text - white mb - 2">No services found</h3>;
              <p className="text - white / 70 mb - 6">Try selecting a different category</p>;
              <button;
                on_click={() => setSelectedCategory ('all')}
                className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - lg font - semibold text - white hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300";
              >;
                View All Services;
              </button>;
            </div>)}
        </div>;
      </section>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Enterprise Solutions */}
      <section className="py - 20 px - 6 bg - gradient - to - r from - white / 5 to - white / 10">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD


          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </section>;
      {/* Enterprise Solutions */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Need Enterprise Solutions?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              for organizations requiring multiple services or specialized implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Inquiry&body=Hi, I'm interested in enterprise solutions and volume pricing. Please provide more information about your enterprise offerings, custom implementations, and dedicated support options."
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Contact Enterprise Sales
                <ArrowRight className="w-5 h-5" />

<<<<<<< HEAD
=======

              </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >;
            <h2 className="text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - white to - blue - 100 bg - clip - text text - transparent">;
              Need Enterprise Solutions?;
            </h2>;
            <p className="text - xl text - white / 70 mb - 8 max - w-2xl mx - auto">;
              We offer custom enterprise solutions, volume discounts, and dedicated support;
              for organizations requiring multiple services or specialized implementations.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <a;
                href="mailto:kleber@ziontechgroup.com?subject = Enterprise Solutions Inquiry & body = Hi, I'm interested in enterprise solutions and volume pricing. Please provide more information about your enterprise offerings, custom implementations, and dedicated support options.";
                className="px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center justify - center gap - 2";
              >;
                Contact Enterprise Sales;
                <ArrowRight className="w - 5 h - 5" />;
              </a>;
              <a;
                href="tel:+13024640950";
                className="px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 backdrop - blur - sm bg - white / 5 hover:bg - white / 10";
              >;
                Call Us Now;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* FAQ Section */}
      <section className="py - 20 px - 6">;
        <div className="max - w-4xl mx - auto">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD


      {/* FAQ Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-6">
            {[
              {

<<<<<<< HEAD
                } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            ].map((faq, index) => (;
              <motion.div;
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
                transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - white to - blue - 100 bg - clip - text text - transparent">;
              Frequently Asked Questions;
            </h2>;
          </motion.div>;
          <div className="space - y-6">;
            {[;
              {
=======


                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can arrange custom payment terms.";
              },
              {
                question: "Do you offer free trials?",
                answer: "Yes! All our services come with free trial periods ranging from 14 to 60 days, depending on the service complexity.";
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your service will remain active until the end of your billing period.";
              },
              {
                question: "Do you offer volume discounts?",
                answer: "Yes, we offer volume discounts for organizations using multiple services. Contact our sales team for custom pricing and enterprise solutions.";
              },
              {
                question: "What kind of support do you provide?",
                answer: "We provide comprehensive support including documentation, tutorials, email support, and priority support for enterprise customers. Some services include dedicated account managers.";
              },
              {
                question: "Can I upgrade or downgrade my plan?",
<<<<<<< HEAD

                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                className="p-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </motion.div>

<<<<<<< HEAD
=======

  );
};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}

=======
}

=======
=======
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.";
              }
            ].map ((faq, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className="p - 6 rounded - xl border border - white / 10 bg - gradient - to - r from - white / 5 to - white / 10 backdrop - blur - xl";
              >;
                <h3 className="text - xl font - bold text - white mb - 3">{faq.question}</h3>;
                <p className="text - white / 70 leading - relaxed">{faq.answer}</p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      <EnhancedFooter />;
<<<<<<< HEAD

    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD
=======
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    </div>);

  const _filteredServices = innovative2025MicroSaasExpansionV3.filter(service => 
    selectedCategory === 'all' || service.category.includes(selectedCategory)
  ),

  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', '')),
    const annualPrice = price * 12 * 0.8, // 20% discount for annual
    return `$${Math.round(annualPrice)}`
  },

  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.5}
    }
  },

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden&quot;>
      <Head>
        <title>2025 Pricing & Services — Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Transparent pricing with flexible plans.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;2025 Pricing & Services — Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;pricing, micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/pricing-2025&quot; />
      
        <script type=&quot;application/ld+json&quot;>{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;WebPage&quot;,&quot;headline&quot;:&quot;2025 Pricing & Services — Zion Tech Group&quot;,&quot;url&quot;:&quot;https://ziontechgroup.com/pricing-2025&quot;,&quot;isPartOf&quot;:{&quot;@type&quot;:&quot;WebSite&quot;,&quot;name&quot;:&quot;Zion Tech Group&quot;,&quot;url&quot;:&quot;https://ziontechgroup.com&quot;}}</script></Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent&quot;>
              2025 Pricing & Services
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8&quot;>
              Transparent pricing for our comprehensive collection of innovative micro SAAS services, 
              AI solutions, quantum technologies, and revolutionary IT services.
            </p>
            
            {/* Billing Toggle */}
            <div className=&quot;flex items-center justify-center gap-4 mb-12&quot;>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }
    visible: {
      opacity: 1
      y: 0
      transition: {
        duration: 0.5
      }
    }
  }
import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {;
  ArrowRight, Check, Star, Users, Zap, Shield, Globe,;
  TrendingUp, Award, Clock, CheckCircle, ExternalLink;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3';
export default function Pricing2025(req, res) {
  try {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀' },;
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: '🧠' },;
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', icon: '🔒' },;
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', icon: '🌐' },;
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', icon: '🚀' },;
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', icon: '🧬'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const filteredServices = innovative2025MicroSaasExpansionV3.filter(service =>;
    selectedCategory === 'all' || service.category.includes(selectedCategory);
  );
  const getAnnualPrice = (monthlyPrice: string) => {;
    const price = parseFloat(monthlyPrice.replace('$', '')),;
    const annualPrice = price * 12 * 0.8, // 20% discount for annual;
    return `$${Math.round(annualPrice)}`;
  },;
  const containerVariants = {;
    hidden: { opacity: 0 };
    visible: {;
      opacity: 1;
      transition: {;
        staggerChildren: 0.1;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  };
  const itemVariants = {;
    hidden: { opacity: 0, y: 20 },;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 0.5;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>2025 Pricing & Services — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Transparent pricing with flexible plans." />
        <meta property="og:title" content="2025 Pricing & Services — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services." />
        <meta name="keywords" content="pricing, micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing-2025" />
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","headline":"2025 Pricing & Services — Zion Tech Group","url":"https://ziontechgroup.com/pricing-2025","isPartOf":{"@type":"WebSite","name":"Zion Tech Group","url":"https://ziontechgroup.com"}}</script></Head>
      <EnhancedNavigation />
      {/* Hero Section */}
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2025 Pricing & Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Transparent pricing for our comprehensive collection of innovative micro SAAS services
              Transparent pricing for our comprehensive collection of innovative micro SAAS services, 
              AI solutions, quantum technologies, and revolutionary IT services.
            </p>
            {/* Billing Toggle */}
              Transparent pricing for our comprehensive collection of innovative micro SAAS services,
              AI solutions, quantum technologies, and revolutionary IT services.
            </p>
            {/* Billing Toggle */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex items-center justify-center gap-4 mb-12">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60'}`}>
                Monthly
              </span>
              <button
<<<<<<< HEAD
                onClick={_() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={_`relative w-16 h-8 rounded-full transition-all duration-300 ${
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-white/20'}`}
              >
                <div className={_`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                  billingCycle === 'annual' ? 'right-1' : 'left-1'}`} />
              </button>
              <span className={_`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-white/60'}`}>
                Annual
                <span className=&quot;ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full&quot;>
=======
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${;
                  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-white/20';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                  billingCycle === 'annual' ? 'right-1' : 'left-1'
                }`} />
              </button>
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-white/60'}`}>
                Annual
                <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD

      {/* Category Filter */}
      <section className=&quot;py-8 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={_() => setSelectedCategory(category.id)}
                className={_`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`}
              >
                <span>{_category.icon}</span>
                {_category.name}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {/* Category Filter */}
      {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-8 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </button>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Pricing Grid */}
      <section className=&quot;py-16 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            variants={containerVariants}
            initial=&quot;hidden&quot;
            animate=&quot;visible&quot;
            className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
          >
            {_filteredServices.map(_(service, _index) => (
              <motion.div
                key={service.id}
                variants={_itemVariants}
                className={_`group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  service.popular ? 'ring-2 ring-cyan-400/50' : ''}`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full&quot;>
                    MOST POPULAR
                  </div>
                )}

                {/* Service Header */}
                <div className=&quot;text-center mb-8&quot;>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-5 mx-auto mb-4 flex items-center justify-center text-3xl`}>
                    {service.icon}
                  </div>
                  <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{service.name}</h3>
                  <p className=&quot;text-white/70 text-sm leading-relaxed&quot;>{service.tagline}</p>
                </div>

                {/* Pricing */}
                <div className=&quot;text-center mb-8&quot;>
                  <div className=&quot;mb-2&quot;>
                    <span className=&quot;text-4xl font-bold text-cyan-400&quot;>
                      {billingCycle === 'monthly' ? service.price : getAnnualPrice(service.price)}
                    </span>
                    <span className=&quot;text-white/60 ml-2&quot;>
=======
      {/* Pricing Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
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
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 ${;
                  selectedCategory === category.id;
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white';
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >;
                <span>{category.icon}</span>;
                {category.name  } catch (error) {
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
        </div>;
      </section>;
      {/* Pricing Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                variants={itemVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${;
                  service.popular ? 'ring-2 ring-cyan-400/50' : '';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >;
                {/* Popular Badge */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                {/* Service Header */}
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
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-5 mx-auto mb-4 flex items-center justify-center text-3xl`}>
                    {service.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{service.tagline}</p>
                </div>
                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-cyan-400">
                      {billingCycle === 'monthly' ? service.price : getAnnualPrice(service.price)}
                    </span>
                    <span className="text-white/60 ml-2">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      {billingCycle === 'monthly' ? service.period : '/year'}
                {/* Pricing */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="text-center mb-8">
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-cyan-400">
                      {billingCycle === 'monthly' ? service.price : getAnnualPrice(service.price)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </span>
                    <span className="text-white/60 ml-2">
                      {billingCycle === 'monthly' ? service.period : '/year'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
<<<<<<< HEAD
                    <p className=&quot;text-green-400 text-sm&quot;>
=======
                    <p className="text-green-400 text-sm">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      Save ${Math.round(parseFloat(service.price.replace('$', '')) * 12 * 0.2)} annually
                    </p>
                  )}
                </div>
<<<<<<< HEAD

                {/* Rating */}
                <div className=&quot;flex items-center justify-center gap-2 mb-6&quot;>
                  <div className=&quot;flex items-center gap-1&quot;>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={_`w-4 h-4 ${
                          i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-white/20'}`}
                      />
                    ))}
                  </div>
                  <span className=&quot;text-white/60 text-sm&quot;>
                    {service.rating} ({service.reviews} reviews)
                  </span>
                </div>

                {/* Features */}
                <div className=&quot;mb-8&quot;>
                  <h4 className=&quot;text-white font-semibold mb-4 text-center&quot;>Key Features:</h4>
                  <div className=&quot;space-y-3&quot;>
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className=&quot;flex items-center gap-3 text-sm text-white/80&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-cyan-400 flex-shrink-0&quot; />
=======
                {/* Rating */}
                  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
                {/* Rating */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        className={`w-4 h-4 ${;
                          i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-white/20';
                        }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      />;
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
                  <span className="text-white/60 text-sm">
                    {service.rating} ({service.reviews} reviews)
                  </span>
                </div>
                {/* Features */}
                {/* Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 text-center">Key Features:</h4>
                  <div className="space-y-3">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-white/80">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        <span>{feature}</span>
                      </div>
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    {service.features.length > 5 && (
<<<<<<< HEAD
                      <div className=&quot;text-cyan-400 text-sm font-medium text-center&quot;>
=======
                      <div className="text-cyan-400 text-sm font-medium text-center">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                        +{service.features.length - 5} more features
                      </div>
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>;
                </div>;
                {/* Market Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-white/60 mb-1">Market Size</div>
                    <div className="text-white font-medium">{service.marketSize}</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-white/60 mb-1">Growth Rate</div>
                    <div className="text-white font-medium">{service.growthRate}</div>
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD

                {/* Market Info */}
                <div className=&quot;grid grid-cols-2 gap-4 mb-6 text-sm&quot;>
                  <div className=&quot;text-center p-3 bg-white/5 rounded-lg&quot;>
                    <div className=&quot;text-white/60 mb-1&quot;>Market Size</div>
                    <div className=&quot;text-white font-medium&quot;>{service.marketSize}</div>
                  </div>
                  <div className=&quot;text-center p-3 bg-white/5 rounded-lg&quot;>
                    <div className=&quot;text-white/60 mb-1&quot;>Growth Rate</div>
                    <div className=&quot;text-white font-medium&quot;>{service.growthRate}</div>
                  </div>
                </div>

                {/* ROI and Setup */}
                <div className=&quot;mb-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-400/20&quot;>
                  <div className=&quot;text-cyan-400 font-semibold mb-2 text-center&quot;>🚀 Expected ROI:</div>
                  <p className=&quot;text-white/80 text-sm text-center&quot;>{service.roi}</p>
                  <div className=&quot;mt-3 grid grid-cols-2 gap-4 text-center text-sm&quot;>
                    <div>
                      <div className=&quot;text-white/60&quot;>Setup Time</div>
                      <div className=&quot;text-white font-medium&quot;>{service.setupTime}</div>
                    </div>
                    <div>
                      <div className=&quot;text-white/60&quot;>Trial Period</div>
                      <div className=&quot;text-white font-medium&quot;>{service.trialDays} days</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className=&quot;space-y-3&quot;>
                  <a
                    href={service.link}
                    target=&quot;_blank&quot;
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2&quot;
                  >
                    Get Started
                    <ExternalLink className=&quot;w-4 h-4&quot; />
                  </Link>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}&body=Hi, I'm interested in learning more about your ${service.name} service. Please provide more information about pricing, features, and implementation.`}
                    className=&quot;w-full px-6 py-3 border border-white/20 hover:border-cyan-400/30 rounded-lg font-semibold text-white text-center transition-all duration-300 hover:bg-white/5&quot;
                  >
                    Contact Sales
                  </Link>
                </div>

                {/* Contact Info */}
                <div className=&quot;mt-6 pt-4 border-t border-white/10 text-center&quot;>
                  <div className=&quot;text-white/60 text-sm mb-2&quot;>Need help? Contact us:</div>
                  <div className=&quot;flex items-center justify-center gap-4 text-sm&quot;>
                    <a href={`tel:${service.contactInfo.mobile}`} className=&quot;text-cyan-400 hover:text-cyan-300&quot;>
                      📞 {service.contactInfo.mobile}
                    </Link>
                    <a href={`mailto:${service.contactInfo.email}`} className=&quot;text-cyan-400 hover:text-cyan-300&quot;>
                      ✉️ {service.contactInfo.email}
                    </Link>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {/* Market Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-white/60 mb-1">Market Size</div>
                    <div className="text-white font-medium">{service.marketSize}</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-white/60 mb-1">Growth Rate</div>
                    <div className="text-white font-medium">{service.growthRate}</div>
                  </div>
                </div>
                {/* ROI and Setup */}
                {/* ROI and Setup */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="mb-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-400/20">
                  <div className="text-cyan-400 font-semibold mb-2 text-center">🚀 Expected ROI:</div>
                  <p className="text-white/80 text-sm text-center">{service.roi}</p>
                  <div className="mt-3 grid grid-cols-2 gap-4 text-center text-sm">
                    <div>
                      <div className="text-white/60">Setup Time</div>
                      <div className="text-white font-medium">{service.setupTime}</div>
                    </div>
                    <div>
                      <div className="text-white/60">Trial Period</div>
                      <div className="text-white font-medium">{service.trialDays} days</div>
                    </div>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={service.link}
                {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="space-y-3">
                  <a
                    href={service.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold text-white text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Get Started
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}&body=Hi, I'm interested in learning more about your ${service.name} service. Please provide more information about pricing, features, and implementation.`}
                  </Link>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}&body=Hi, I'm interested in learning more about your ${service.name} service. Please provide more information about pricing, features, and implementation.`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className="w-full px-6 py-3 border border-white/20 hover:border-cyan-400/30 rounded-lg font-semibold text-white text-center transition-all duration-300 hover:bg-white/5"
                  >
                    Contact Sales
                  </a>
                </div>
                {/* Contact Info */}
                {/* Contact Info */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <div className="text-white/60 text-sm mb-2">Need help? Contact us:</div>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <a href={`tel:${service.contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300">
                      📞 {service.contactInfo.mobile}
                    </a>
                    <a href={`mailto:${service.contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                      ✉️ {service.contactInfo.email}
                    </a>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
<<<<<<< HEAD

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className=&quot;text-center py-20&quot;>
              <div className=&quot;text-6xl mb-4&quot;>🔍</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>No services found</h3>
              <p className=&quot;text-white/70 mb-6&quot;>Try selecting a different category</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300&quot;
=======
          {/* No Results */}
                      📞 {service.contactInfo.mobile  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </Link>
                    <a href={`mailto:${service.contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                      ✉️ {service.contactInfo.email  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </motion.div>;
          {/* No Results */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-white/70 mb-6">Try selecting a different category</p>
              <button
                onClick={() => setSelectedCategory('all')}
                onClick={() => setSelectedCategory('all')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              >
                View All Services
              </button>
            </div>
          )}
        </div>
      </section>
<<<<<<< HEAD

      {/* Enterprise Solutions */}
      <section className=&quot;py-20 px-6 bg-gradient-to-r from-white/5 to-white/10&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Need Enterprise Solutions?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              We offer custom enterprise solutions, volume discounts, and dedicated support 
              for organizations requiring multiple services or specialized implementations.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Inquiry&body=Hi, I'm interested in enterprise solutions and volume pricing. Please provide more information about your enterprise offerings, custom implementations, and dedicated support options.&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2&quot;
              >
                Contact Enterprise Sales
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;
              >
                Call Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <motion.div
=======
      {/* Enterprise Solutions */}
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      </section>;
      {/* Enterprise Solutions */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-6 bg-gradient-to-r from-white/5 to-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
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
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Need Enterprise Solutions?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              We offer custom enterprise solutions, volume discounts, and dedicated support
              We offer custom enterprise solutions, volume discounts, and dedicated support 
              We offer custom enterprise solutions, volume discounts, and dedicated support
              for organizations requiring multiple services or specialized implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Inquiry&body=Hi, I'm interested in enterprise solutions and volume pricing. Please provide more information about your enterprise offerings, custom implementations, and dedicated support options."
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Contact Enterprise Sales
                <ArrowRight className="w-5 h-5" />
              </a>
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className=&quot;space-y-6&quot;>
            {[
              {
                question: &quot;What payment methods do you accept?&quot;,
                answer: &quot;We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can arrange custom payment terms.&quot;
              },
              {
                question: &quot;Do you offer free trials?&quot;,
                answer: &quot;Yes! All our services come with free trial periods ranging from 14 to 60 days, depending on the service complexity.&quot;
              },
              {
                question: &quot;Can I cancel my subscription anytime?&quot;,
                answer: &quot;Absolutely. You can cancel your subscription at any time with no cancellation fees. Your service will remain active until the end of your billing period.&quot;
              },
              {
                question: &quot;Do you offer volume discounts?&quot;,
                answer: &quot;Yes, we offer volume discounts for organizations using multiple services. Contact our sales team for custom pricing and enterprise solutions.&quot;
              },
              {
                question: &quot;What kind of support do you provide?&quot;,
                answer: &quot;We provide comprehensive support including documentation, tutorials, email support, and priority support for enterprise customers. Some services include dedicated account managers.&quot;
              },
              {
                question: &quot;Can I upgrade or downgrade my plan?&quot;,
                answer: &quot;Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.&quot;
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {/* FAQ Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-6">
            {[
              {
                question: "What payment methods do you accept?"
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can arrange custom payment terms."
              }
              {
                question: "Do you offer free trials?"
                answer: "Yes! All our services come with free trial periods ranging from 14 to 60 days, depending on the service complexity."
              }
              {
                question: "Can I cancel my subscription anytime?"
                answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your service will remain active until the end of your billing period."
              }
              {
                question: "Do you offer volume discounts?"
                answer: "Yes, we offer volume discounts for organizations using multiple services. Contact our sales team for custom pricing and enterprise solutions."
              }
              {
                question: "What kind of support do you provide?"
                answer: "We provide comprehensive support including documentation, tutorials, email support, and priority support for enterprise customers. Some services include dedicated account managers."
              }
              {
                question: "Can I upgrade or downgrade my plan?"

                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                className=&quot;p-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl&quot;
              >
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{faq.question}</h3>
                <p className=&quot;text-white/70 leading-relaxed&quot;>{faq.answer}</p>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can arrange custom payment terms."
              },
              {
                question: "Do you offer free trials?",
                answer: "Yes! All our services come with free trial periods ranging from 14 to 60 days, depending on the service complexity."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your service will remain active until the end of your billing period."
              },
              {
                question: "Do you offer volume discounts?",
                answer: "Yes, we offer volume discounts for organizations using multiple services. Contact our sales team for custom pricing and enterprise solutions."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We provide comprehensive support including documentation, tutorials, email support, and priority support for enterprise customers. Some services include dedicated account managers."
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            ].map((faq, index) => (;
              <motion.div;
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
                transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="p-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <EnhancedFooter />
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD

}
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  );
};
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      <EnhancedFooter />;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
