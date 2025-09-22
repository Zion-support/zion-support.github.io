<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from 'react',;
import Head from 'next/head',;
import Link from 'next/link',;
=======

import React, { useState } from 'react',;'
import Head from 'next/head',;'
import Link from 'next/link',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { motion } from 'framer-motion',;
import {}
  Star, TrendingUp, Users, Award, Zap, Brain, Atom, Shield, Rocket, 
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Globe, Cpu, Target,
  Search, Filter, Grid, List, ChevronDown, ChevronUp, ExternalLink,
  Play, Pause, Eye, Heart, Share2, Download, BookOpen, Code, Palette';
} from 'lucide-react',;'
import Layout from '../components/layout/Layout',;'
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services',;'
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced',;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const stats = ['
  { number: '50+', label: 'Innovative Services', icon: Star, color: 'text-cyan-400' },'
  { number: '1000+', label: 'Companies Served', icon: Users, color: 'text-purple-400' },'
  { number: '99.9%', label: 'Uptime', icon: Award, color: 'text-green-400' },'
  { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400' }
],

const categories = ['
  { name: 'All Services', value: 'all', icon: Globe, color: 'from-blue-500 to-cyan-600' },'
  { name: 'AI & Consciousness', value: 'ai', icon: Brain, color: 'from-purple-500 to-pink-600' },'
  { name: 'Quantum & Emerging Tech', value: 'quantum', icon: Atom, color: 'from-indigo-500 to-blue-600' },'
  { name: 'Enterprise IT', value: 'enterprise', icon: Shield, color: 'from-green-500 to-emerald-600' },'
  { name: 'Micro SAAS', value: 'saas', icon: Rocket, color: 'from-orange-500 to-red-600' },'
  { name: 'Creativity & Design', value: 'creativity', icon: Palette, color: 'from-pink-500 to-rose-600' },'
  { name: 'Healthcare & Biotech', value: 'healthcare', icon: Heart, color: 'from-teal-500 to-cyan-600' },'
  { name: 'Finance & Trading', value: 'finance', icon: TrendingUp, color: 'from-yellow-500 to-orange-600' }
],

export default function InnovativeMicroSaasShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [searchTerm, setSearchTerm] = useState(''),
  const [viewMode, setViewMode] = useState('grid'),
  const [sortBy, setSortBy] = useState('popularity'),

  // Combine all services
  const allServices = [
    ...innovativeRealMicroSaasServices2025,
    ...emergingTechServicesEnhanced2025
  ],

  // Filter services based on category and search
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory) ||
      service.name.toLowerCase().includes(selectedCategory),

    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase()),

    return matchesCategory && matchesSearch
<<<<<<< HEAD
  }),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';
const contactInfo = {

=======
export default function InnovativeMicroSaasShowcase() { return null; }
import React, { useState } from 'react';'
import Head from 'next/head';'
import Link from 'next/link';'
import { motion } from 'framer-motion';'
import Layout from '../components/layout/Layout';'
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';'
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';
const contactInfo = {}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  website: 'https://ziontechgroup.com'
}
const stats = ['
  { number: '50+', label: 'Innovative Services', icon: Star, color: 'text-cyan-400' }'
  { number: '1000+', label: 'Companies Served', icon: Users, color: 'text-purple-400' }'
  { number: '99.9%', label: 'Uptime', icon: Award, color: 'text-green-400' }'
  { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400' }
]
const categories = ['
  { name: 'All Services', value: 'all', icon: Globe, color: 'from-blue-500 to-cyan-600' }'
  { name: 'AI & Consciousness', value: 'ai', icon: Brain, color: 'from-purple-500 to-pink-600' }'
  { name: 'Quantum & Emerging Tech', value: 'quantum', icon: Atom, color: 'from-indigo-500 to-blue-600' }'
  { name: 'Enterprise IT', value: 'enterprise', icon: Shield, color: 'from-green-500 to-emerald-600' }'
  { name: 'Micro SAAS', value: 'saas', icon: Rocket, color: 'from-orange-500 to-red-600' }'
  { name: 'Creativity & Design', value: 'creativity', icon: Palette, color: 'from-pink-500 to-rose-600' }'
  { name: 'Healthcare & Biotech', value: 'healthcare', icon: Heart, color: 'from-teal-500 to-cyan-600' }'
  { name: 'Finance & Trading', value: 'finance', icon: TrendingUp, color: 'from-yellow-500 to-orange-600' }
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function InnovativeMicroSaasShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('popularity')
  // Combine all services
  const allServices = [

=======
...innovativeRealMicroSaasServices2025,
    ...emergingTechServicesEnhanced2025,
  ];

  // Filter services based on category and search
  const filteredServices = allServices.filter(service => {
const matchesCategory =
      selectedCategory === 'all' ||
      service.category.toLowerCase().includes(selectedCategory) ||
      service.name.toLowerCase().includes(selectedCategory);

    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
=======

export default function InnovativeMicroSaasShowcase() { return null; }
  const sortedServices = [...filteredServices].sort((a, b) => {}
    switch (sortBy) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0)'
      case 'price-low':
<<<<<<< HEAD

=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {;
  Star, TrendingUp, Users, Award, Zap, Brain, Atom, Shield, Rocket,;
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Globe, Cpu, Target,;
  Search, Filter, Grid, List, ChevronDown, ChevronUp, ExternalLink,;
  Play, Pause, Eye, Heart, Share2, Download, BookOpen, Code, Palette;'
} from 'lucide-react',;'
import Layout from '../components/layout/Layout';'
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';'
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';
const contactInfo = {;'
  mobile: '+1 302 464 0950';'
  email: 'kleber@ziontechgroup.com';'
  address: '364 E Main St STE 1008 Middletown DE 19709';'
  website: 'https://ziontechgroup.com';
};
const stats = [;'
  { number: '50+', label: 'Innovative Services', icon: Star, color: 'text-cyan-400' },;'
  { number: '1000+', label: 'Companies Served', icon: Users, color: 'text-purple-400' },;'
  { number: '99.9%', label: 'Uptime', icon: Award, color: 'text-green-400' },;'
  { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400'   } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const categories = [;'
  { name: 'All Services', value: 'all', icon: Globe, color: 'from-blue-500 to-cyan-600' },;'
  { name: 'AI & Consciousness', value: 'ai', icon: Brain, color: 'from-purple-500 to-pink-600' },;'
  { name: 'Quantum & Emerging Tech', value: 'quantum', icon: Atom, color: 'from-indigo-500 to-blue-600' },;'
  { name: 'Enterprise IT', value: 'enterprise', icon: Shield, color: 'from-green-500 to-emerald-600' },;'
  { name: 'Micro SAAS', value: 'saas', icon: Rocket, color: 'from-orange-500 to-red-600' },;'
  { name: 'Creativity & Design', value: 'creativity', icon: Palette, color: 'from-pink-500 to-rose-600' },;'
  { name: 'Healthcare & Biotech', value: 'healthcare', icon: Heart, color: 'from-teal-500 to-cyan-600' },;'
  { name: 'Finance & Trading', value: 'finance', icon: TrendingUp, color: 'from-yellow-500 to-orange-600'   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
export default function InnovativeMicroSaasShowcase(req, res) {}
  try {';
  const [selectedCategory, setSelectedCategory] = useState('all');'
  const [searchTerm, setSearchTerm] = useState('');'
  const [viewMode, setViewMode] = useState('grid');'
  const [sortBy, setSortBy] = useState('popularity');
  // Combine all services;
  const allServices = [;
    ...innovativeRealMicroSaasServices2025;
    ...emergingTechServicesEnhanced2025;
  ];
  // Filter services based on category and search;
  const filteredServices = allServices.filter(service => {;'
    const matchesCategory = selectedCategory === 'all' ||;
      service.category.toLowerCase().includes(selectedCategory) ||;
      service.name.toLowerCase().includes(selectedCategory);
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  // Sort services;
  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;'
      case 'popularity':;
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0),;'
      case 'price-low':;'
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')),;'
      case 'price-high':;'
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')),;'
      case 'rating':;
        return b.rating - a.rating,;'
      case 'newest':;
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default: return 0;
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }),
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <Layout>
      <Head>
        <title>Innovative Micro SAAS Services Showcase 2025 | Zion Tech Group</title>"
        <meta name="description" content="Discover our comprehensive portfolio of innovative micro SAAS services, AI solutions, quantum computing platforms, and emerging technology solutions. Transform your business with cutting-edge technology." />"
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, emerging technology, business solutions, innovation" />"
        <link rel="canonical" href="https://ziontechgroup.com/innovative-micro-saas-showcase" />
      </Head>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  return (
    <Layout>
      <Head>
<title>
          Innovative Micro SAAS Services Showcase 2025 | Zion Tech Group
        </title>
        <meta
          name='description'
          content='Discover our comprehensive portfolio of innovative micro SAAS services, AI solutions, quantum computing platforms, and emerging technology solutions. Transform your business with cutting-edge technology.'
        />
        <meta
          name='keywords'
          content='micro SAAS, AI services, quantum computing, emerging technology, business solutions, innovation'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/innovative-micro-saas-showcase'
        />
      </Head>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Innovative Micro SAAS Services;
            </h1>"
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge micro SAAS solutions, AI platforms, quantum computing services, and emerging technology innovations designed to transform your business.
            </p>"
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
<motion.div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                <motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
<<<<<<< HEAD

"
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
                >
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />"
                  <span className="text-white font-semibold">{stat.number}</span>"
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                </motion.div>
"
            <div className="flex items-center space-x-4">"
              <MapPin className="w-5 h-5 text-white" />"
              <span className="text-white text-sm">{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </section>

"
                  className="flex items - center space - x-2 bg - white / 10 backdrop - blur - sm rounded - full px - 6 py - 3 border border - white / 20";
                >;`
                  <stat.icon className={`w - 5 h - 5 ${stat.color}`} />;"
                  <span className="text - white font - semibold">{stat.number}</span>;"
                  <span className="text - gray - 300 text - sm">{stat.label}</span>;
                </motion.div>))}

                  key={stat.label  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, scale: 0.8 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1, scale: 1 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
                >`
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />"
                  <span className="text-white font-semibold">{stat.number}</span>"
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                </motion.div>
              ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </div>;
          </motion.div>;
        </div>;
      </section>;
{/* Search */}

                  key={category.value}
                  on_click={() => setSelectedCategory (category.value)}`
                  className={`flex items - center space - x-2 px - 4 py - 2 rounded - lg border transition - all duration - 300 ${}
                    selected_category === category.value;`
                      ? `bg - gradient - to - r ${category.color} border - transparent text - white`;'
                      : 'bg - white / 10 border - white / 20 text - gray - 300 hover:bg - white / 20';`
                  }`}

"
            <div className="flex items-center space-x-4">"
              <div className="flex bg-white/10 rounded-lg p-1">
                <button'
                  onClick={() => setViewMode('grid')}'`
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >"
                  <Grid className="w-5 h-5" />
                </button>
                <button'
                  onClick={() => setViewMode('list')}'`
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >"
                  <List className="w-5 h-5" />
                </button>
              </div>
              <select;
                value={sortBy  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                onChange={(e) => setSortBy(e.target.value)  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >"
                <option value="popularity">Most Popular</option>"
                <option value="rating">Highest Rated</option>"
                <option value="price-low">Price: Low to High</option>"
                <option value="price-high">Price: High to Low</option>"
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

"
      <section className="py-16">"
        <div className="container mx-auto px-4">"
          <div className="mb-8">"
            <h2 className="text-3xl font-bold text-white mb-2">

'`
              {selectedCategory === 'all' ? 'All Services' : `${categories.find(c => c.value === selectedCategory)?.name}`  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

            </h2>"
            <p className="text-gray-400">
              {filteredServices.length} services found;
            </p>
          </div>'
          {viewMode === 'grid' ? ("
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedServices.map((service, index) => (
                <motion.div;
                  key={service.id  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

"
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                >

                >;"
                  <category.icon className="w - 4 h - 4" />;"
                  <span className="text - sm font - medium">{category.name}</span>;
                </button>))}
            </div>;
            {/* View Mode and Sort */}"
            <div className="flex items - center space - x-4">;"
              <div className="flex bg - white / 10 rounded - lg p - 1">;
                <button;'
                  on_click={() => setViewMode ('grid')}'`
                  className={`p - 2 rounded ${view_mode === 'grid' ? 'bg - purple - 600 text - white' : 'text - gray - 400 hover:text - white'}`}
                >;"
                  <Grid className="w - 5 h - 5" />;
                </button>;
                <button;'
                  on_click={() => setViewMode ('list')}'`
                  className={`p - 2 rounded ${view_mode === 'list' ? 'bg - purple - 600 text - white' : 'text - gray - 400 hover:text - white'}`}
                >;"
                  <List className="w - 5 h - 5" />;
                </button>;
              </div>;
              <select;
                value={sort_by}
                on_change={(e) => setSortBy (e.target.value)}"
                className="bg - white / 10 border border - white / 20 rounded - lg px - 4 py - 2 text - white focus:outline - none focus:ring - 2 focus:ring - purple - 500";
              >;"
                <option value="popularity">Most Popular</option>;"
                <option value="rating">Highest Rated</option>;"
                <option value="price - low">Price: Low to High</option>;"
                <option value="price - high">Price: High to Low</option>;"
                <option value="newest">Newest First</option>;
              </select>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}"
      <section className="py - 16">;"
        <div className="container mx - auto px - 4">;"
          <div className="mb - 8">;"
            <h2 className="text - 3xl font - bold text - white mb - 2">;'`
              {selected_category === 'all' ? 'All Services' : `${categories.find (c => c.value === selected_category)?.name}`}
            </h2>;"
            <p className="text - gray - 400">;
              {filtered_services.length} services found;
            </p>;
          </div>;'
          {view_mode === 'grid' ? ("
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 6">;
              {sorted_services.map ((service, index) => (
                <motion.div;

      {/* Contact Bar */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-4">"
        <div className="container mx-auto px-4">"
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">"
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">"
              <Phone className="w-5 h-5 text-white" />"
              <span className="text-white font-semibold">{contactInfo.mobile}</span>"
              <Mail className="w-5 h-5 text-white" />"
              <span className="text-white font-semibold">{contactInfo.email}</span>
            </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          </motion.div>
        </div>
      </section>
      {/* Contact Bar */}
<section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{contactInfo.mobile}</span>
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{contactInfo.email}</span>
            </div>

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white text-sm">{contactInfo.address}</span>
            </div>
{/* Filters and Search */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-8 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="relative flex-1 max-w-md">
=======
"
            <div className="flex items-center space-x-4">"
              <MapPin className="w-5 h-5 text-white" />"
              <span className="text-white text-sm">{contactInfo.address}</span>
            </div>

"
            <div className="relative flex-1 max-w-md">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input"
                type="text""
                placeholder="Search services..."
<div className="relative flex - 1 max - w-md">;
              <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />;
              <input;
                type="text";
                placeholder="Search services...";
                value={search_term}
                on_change={(e) => setSearchTerm (e.target.value)}
                className="w - full pl - 10 pr - 4 py - 3 bg - white / 10 border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - purple - 500 focus:border - transparent";
              />;
            </div>;

            {/* Category Filter */}
              <input
                type='text'
                placeholder='Search services...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
              />
            </div>
            {/* Category Filter */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                value={searchTerm  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                onChange={(e) => setSearchTerm(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  on_click={() => setSelectedCategory (category.value)}
                  className={`flex items - center space - x-2 px - 4 py - 2 rounded - lg border transition - all duration - 300 ${
                    selected_category === category.value;
                      ? `bg - gradient - to - r ${category.color} border - transparent text - white`;
                      : 'bg - white / 10 border - white / 20 text - gray - 300 hover:bg - white / 20';
                  }`}

            <div className="flex items-center space-x-4">
              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">

              {selectedCategory === 'all' ? 'All Services' : `${categories.find(c => c.value === selectedCategory)?.name}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            </h2>
            <p className="text-gray-400">
              {filteredServices.length} services found
            </p>
          </div>
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedServices.map((service, index) => (
                <motion.div

                  key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                >
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Bar */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
            <div className="flex items-center space-x-4 mb-4 lg:mb-0">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{contactInfo.mobile}</span>
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">{contactInfo.email}</span>
            </div>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-white text-sm">{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </section>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
=======
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
=======
<div className='flex flex-wrap gap-2'>
              {categories.map(category => (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <button
                  key={category.value  } catch (error) {
    console.error("Error:", error);
=======

"
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button;
                  key={category.value  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onClick={() => setSelectedCategory(category.value)  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}`
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${;
                    selectedCategory === category.value;`
                      ? `bg-gradient-to-r ${category.color} border-transparent text-white`;'
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20';`
                  }`  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
>
<category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <div className="flex flex - wrap gap - 2">;
              {categories.map ((category) => (
                <button;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  key={category.value}
                  on_click={() => setSelectedCategory (category.value)}
                  className={`flex items - center space - x-2 px - 4 py - 2 rounded - lg border transition - all duration - 300 ${
                    selected_category === category.value;
                      ? `bg - gradient - to - r ${category.color} border - transparent text - white`;
                      : 'bg - white / 10 border - white / 20 text - gray - 300 hover:bg - white / 20';
                  }`}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="flex items-center space-x-4">
              <div className="flex bg-white/10 rounded-lg p-1">
=======
            <div className="flex items-center space-x-4">
              <div className="flex bg-white/10 rounded-lg p-1">
=======
              ))}
            </div>
            {/* View Mode and Sort */}
<div className='flex items-center space-x-4'>
              <div className='flex bg-white/10 rounded-lg p-1'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <button
                  onClick={() => setViewMode('grid')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >

                  <Grid className="w-5 h-5" />
=======
<Grid className='w-5 h-5' />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                </button>
                <button'
                  onClick={() => setViewMode('list')  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}'`
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >
<List className="w-5 h-5" />
                </button>
              </div>
<select
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              <select;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >"
                <option value="popularity">Most Popular</option>"
                <option value="rating">Highest Rated</option>"
                <option value="price-low">Price: Low to High</option>"
                <option value="price-high">Price: High to Low</option>"
                <option value="newest">Newest First</option>
=======

                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
=======
                value={sortBy}
onChange={e => setSortBy(e.target.value)}
                className='bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              >
                <option value='popularity'>Most Popular</option>
                <option value='rating'>Highest Rated</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
                <option value='newest'>Newest First</option>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </select>
            </div>
          </div>
        </div>
      </section>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </h2>
            <p className="text-gray-400">
=======

=======
      {/* Services Grid */}
<section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='mb-8'>
            <h2 className='text-3xl font-bold text-white mb-2'>
              {selectedCategory === 'all'
                ? 'All Services'
                : `${categories.find(c => c.value === selectedCategory)?.name}`}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            </h2>
            <p className='text-gray-400'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              {filteredServices.length} services found
            </p>
          </div>
          {viewMode === 'grid' ? (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedServices.map((service, index) => (
                <motion.div
className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  {/* Popular Badge */  } catch (error) {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                >
                  {/* Popular Badge */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  {service.popular && (
<div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  {/* Service Icon */}
<div className="text-4xl mb-4">{service.icon}</div>
                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {service.tagline}
                  </p>
                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-purple-400">
                      {service.price}
                  {/* Popular Badge */}
                  {service.popular && (

"
                    <div className="absolute -top - 3 -right - 3 bg - gradient - to - r from - purple - 500 to - pink - 500 text - white text - xs font - bold px - 3 py - 1 rounded - full">;
                      Popular;
                    </div>)}
                  {/* Service Icon */}"
                  <div className="text - 4xl mb - 4">{service.icon}</div>;

                  {/* Service Info */}"
                  <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - purple - 400 transition - colors">;
                    {service.name}
                  </h3>;"
                  <p className="text - gray - 400 text - sm mb - 4 line - clamp - 2">;
                    {service.tagline}

                  </p>;

                  {/* Price */}"
                  <div className="flex items - center justify - between mb - 4">;"
                    <div className="text - 2xl font - bold text - purple - 400">;

                      {service.price}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                  )  } catch (error) {
    console.error("Error:", error);
=======

                  )  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
                  {/* Service Icon */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                  <div className="text-4xl mb-4">{service.icon}</div>
                  {/* Service Info */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {service.name  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </h3>"
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {service.tagline  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </p>;
                  {/* Price */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                  <div className="flex items-center justify-between mb-4">"
                    <div className="text-2xl font-bold text-purple-400">
{service.price  } catch (error) {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
{service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                    </div>"
                    <div className="flex items-center space-x-1">"
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />"
                      <span className="text-sm text-gray-300">{service.rating}</span>"
                      <span className="text-xs text-gray-500">({service.reviews})</span>
                    </div>
                  </div>
{/* Features */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features:</div>
=======

"
                  <div className="mb-4">"
                    <div className="text-sm text-gray-400 mb-2">Key Features:</div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => ("
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">"
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    </div>
                    <div className='flex items-center space-x-1'>
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />
                      <span className='text-sm text-gray-300'>
                        {service.rating}
                      </span>
                      <span className='text-xs text-gray-500'>
                        ({service.reviews})
                      </span>
                    </div>
                  </div>
<div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div
                          key={idx}
                          className='flex items-center space-x-2 text-xs text-gray-300'
                        >
                          <CheckCircle className='w-3 h-3 text-green-400' />
                          <span>{feature}</span>
                        </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="bg-white/10 px-2 py-1 rounded">{service.category}</span>
                    <span>Setup: {service.setupTime}</span>
                  </div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

                      href={service.link}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                  {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                  <div className="flex space-x-2">
                    <Link;
                      href={service.link  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
                    >
                      Learn More;
                    </Link>"
                    <button className="p-2 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300">"
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
<<<<<<< HEAD

                  {/* Hover Overlay */}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                    >
                      Learn More
                    </Link>
                    <button className='p-2 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300'>
                      <Heart className='w-4 h-4' />
                    </button>
                  </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  {/* Hover Overlay */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-6">
                    <div className="text-center w-full">
                      <p className="text-white text-sm mb-3 line-clamp-3">{service.description}</p>
                      <Link
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                        href={service.link  } catch (error) {
    console.error("Error:", error);
=======
"
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-6">"
                    <div className="text-center w-full">"
                      <p className="text-white text-sm mb-3 line-clamp-3">{service.description}</p>
                      <Link;
                        href={service.link  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        <span>View Details</span>"
                        <ArrowRight className="w-4 h-4" />
                      >
                        <span>View Details</span>
                        <ArrowRight className='w-4 h-4' />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      </Link>
                    </div>
                  </div>
                </motion.div>
<<<<<<< HEAD
            </div>
          ) : ("
            <div className="space-y-4">
              {sortedServices.map((service, index) => (
<motion.div
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                <motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  key={service.id}
                  initial={{ opacity: 0, coordinate_x: -20 }}
                  animate={{ opacity: 1, coordinate_x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
{/* Service Details */}
<<<<<<< HEAD
                  key={service.id  } catch (error) {
    console.error("Error:", error);
=======

                  key={service.id  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, x: -20 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1, x: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >"
                  <div className="flex items-start space-x-6">
                    {/* Service Icon */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                    <div className="text-4xl">{service.icon}</div>
                    {/* Service Details */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    <div className="flex-1">
=======
"
                    <div className="flex-1">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      <div className="flex items-start justify-between mb-3">
                        <div>"
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                            {service.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                          </h3>
                          <p className="text-gray-400 text-sm">{service.tagline}</p>
                        </div>"
                        <div className="text-right">"
                          <div className="text-2xl font-bold text-purple-400">

                          </h3>
                          <p className='text-gray-400 text-sm'>
                            {service.tagline}
                          </p>
                        </div>
<div className="text-right">
                          <div className="text-2xl font-bold text-purple-400">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                            {service.price  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                            <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                          </div>"
                          <div className="flex items-center justify-end space-x-1 mt-1">"
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />"
                            <span className="text-sm text-gray-300">{service.rating}</span>"
                            <span className="text-xs text-gray-500">({service.reviews})</span>
                          </div>
                        </div>
                      </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="bg-white/10 px-2 py-1 rounded">{service.category}</span>
                          <span>Setup: {service.setupTime}</span>
                          <span>Trial: {service.trialDays} days</span>
                        </div>"
                        <div className="flex space-x-2">
<Link
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
                          >
                            Learn More;
                          </Link>"
                          <button className="p-2 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300">"
                            <Heart className="w-4 h-4" />
=======
                            <span className="text-sm text-gray-400 font-normal">{service.period}</span>
=======
                        <div className='text-right'>
                          <div className='text-2xl font-bold text-purple-400'>
                            {service.price}
                            <span className='text-sm text-gray-400 font-normal'>
                              {service.period}
                            </span>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                          </div>
                          <div className='flex items-center justify-end space-x-1 mt-1'>
                            <Star className='w-4 h-4 text-yellow-400 fill-current' />
                            <span className='text-sm text-gray-300'>
                              {service.rating}
                            </span>
                            <span className='text-xs text-gray-500'>
                              ({service.reviews})
                            </span>
                          </div>
                        </div>
                      </div>

<p className='text-gray-300 text-sm mb-4 line-clamp-2'>
                        {service.description}
                      </p>

                      <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-4 text-xs text-gray-500'>
                          <span className='bg-white/10 px-2 py-1 rounded'>
                            {service.category}
                          </span>
                          <span>Setup: {service.setupTime}</span>
                          <span>Trial: {service.trialDays} days</span>
                        </div>
                        <div className='flex space-x-2'>
                          <Link
className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium"
                          >
                            Learn More
                          </Link>
                          <button className='p-2 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300'>
                            <Heart className='w-4 h-4' />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
<<<<<<< HEAD

              ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20">
        <div className="container mx-auto px-4 text-center">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
          >
<h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our innovative services to gain competitive advantages and drive growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link

              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
)
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                            <span className="text - sm text - gray - 400 font - normal">{service.period}</span>;
                          </div>;"
                          <div className="flex items - center justify - end space - x-1 mt - 1">;"
                            <Star className="w - 4 h - 4 text - yellow - 400 fill - current" />;"
                            <span className="text - sm text - gray - 300">{service.rating}</span>;"
                            <span className="text - xs text - gray - 500">({service.reviews})</span>;
                          </div>;
                        </div>;
                      </div>;"
                      <p className="text - gray - 300 text - sm mb - 4 line - clamp - 2">{service.description}</p>;"
                      <div className="flex items - center justify - between">;"
                        <div className="flex items - center space - x-4 text - xs text - gray - 500">;"
                          <span className="bg - white / 10 px - 2 py - 1 rounded">{service.category}</span>;
                          <span > Setup: {service.setup_time}</span>;
                          <span > Trial: {service.trial_days} days</span>;
                        </div>;"
                        <div className="flex space - x-2">;
                          <Link;
                            href={service.link}"
                            className="bg - gradient - to - r from - purple - 600 to - pink - 600 text - white px - 4 py - 2 rounded - lg hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 300 font - medium";
                          >;
                            Learn More;
                          </Link>;"
                          <button className="p - 2 bg - white / 10 border border - white / 20 rounded - lg text - gray - 400 hover:text - white hover:bg - white / 20 transition - all duration - 300">;"
                            <Heart className="w - 4 h - 4" />;
                          </button>;
                        </div>;
                      </div>;
                    </div>;
                  </div>;
                </motion.div>))}
            </div>)}
        </div>;
      </section>;
      {/* CTA Section */}"
      <section className="py - 20 bg - gradient - to - r from - purple - 900 / 20 via - pink - 900 / 20 to - red - 900 / 20">;"
        <div className="container mx - auto px - 4 text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >;
=======

          >;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <h2 className="text - 4xl font - bold text - white mb - 6">;
              Ready to Transform Your Business?;
            </h2>;"
            <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">;
              Join thousands of companies already using our innovative services to gain competitive advantages and drive growth.;
            </p>;"
            <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
              <Link;"
                href="/contact";"
                className="bg - gradient - to - r from - purple - 600 to - pink - 600 text - white px - 8 py - 4 rounded - lg text - lg font - semibold hover:from - purple - 700 hover:to - pink - 700 transition - all duration - 300 hover:scale - 105";
              >;
                Get Started Today;
              </Link>;
              <Link;"
                href="/pricing";
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              >;
                View Pricing;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
</Layout>;
  );
  } catch (error) {

    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
