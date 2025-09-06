



import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="Support - Zion Tech Group"
      description="Get support for our services"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Support</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  HelpCircle, MessageCircle, Phone, Mail, Clock
  BookOpen, Video, FileText, Search, Filter
  CheckCircle, ArrowRight, Brain, Atom, Rocket
  Shield, Zap, Users, Star, TrendingUp, Code
} from 'lucide-react'
export default function Support() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const supportCategories = [
    {
      id: 'ai-services'
      name: 'AI Services'
      icon: <Brain className="w-8 h-8 text-cyan-400" />
      description: 'Support for AI consciousness and autonomous systems'
import React, { useState } from 'react',;
import { motion } from 'framer-motion',;
  HelpCircle, MessageCircle, Phone, Mail, Clock, 
import React, { useState } from 'react',
import { motion } from 'framer-motion',
  HelpCircle, MessageCircle, Phone, Mail, Clock,
ursor/automate-test-improve-and-merge-code-646c
  HelpCircle, MessageCircle, Phone, Mail, Clock, 
  HelpCircle, MessageCircle, Phone, Mail, Clock,
  BookOpen, Video, FileText, Search, Filter,
  CheckCircle, ArrowRight, Brain, Atom, Rocket,
  Shield, Zap, Users, Star, TrendingUp, Code
} from 'lucide-react',
export default function Support() {
  const [searchQuery, setSearchQuery] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const supportCategories = [
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      description: 'Support for AI consciousness and autonomous systems',

      articles: 25
    }
    {


      id: 'quantum-solutions',
      name: 'Quantum Solutions',
      icon: <Atom className="w-8 h-8 text-purple-400" />,
      description: 'Help with quantum computing and cryptography',

      articles: 18
    }
    {

      id: 'autonomous-systems',
      name: 'Autonomous Systems',
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      description: 'Support for self-managing business operations',

      articles: 32
    }
    {

      id: 'enterprise-it',
      name: 'Enterprise IT',
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      description: 'Infrastructure and security support',

      articles: 28
    }
    {

      id: 'billing',
      name: 'Billing & Account',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      description: 'Payment, invoices, and account management',

      articles: 15
    }
    {



      articles: 25
    }
    {
ursor/automate-test-improve-and-merge-code-646c
      articles: 25
    }
    {
      id: 'technical',
      name: 'Technical Issues',
      icon: <Code className="w - 8 h - 8 text - orange - 400" />,
      description: 'Bug reports and technical troubleshooting',
      articles: 42
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const quickActions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="w - 8 h - 8 text - cyan - 400" />,
      action: 'Start Chat',

      color: 'from-cyan-500 to-blue-600',
      available: true


ursor/automate-test-improve-and-merge-code-646c
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',

      icon: <Phone className="w - 8 h - 8 text - green - 400" />,
      action: 'Call Now',
      color: 'from - green - 500 to - emerald - 600',
      available: true;

ursor/automate-test-improve-and-merge-code-646c
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',

      icon: <Mail className="w - 8 h - 8 text - purple - 400" />,
      action: 'Send Email',
      color: 'from - purple - 500 to - pink - 600',
      available: true;

ursor/automate-test-improve-and-merge-code-646c
    },
    {
      title: 'Video Call',
      description: 'Screen share and visual assistance',

      icon: <Video className="w - 8 h - 8 text - orange - 400" />,
      action: 'Schedule Call',
      color: 'from - orange - 500 to - red - 600',
      available: true;
    }
  ],
  const popular_articles = [;
    {
      title: 'Getting Started with AI Consciousness Platform',
      category: 'AI Services',
      read_time: '5 min read',
      views: '2.4k',
      helpful: '98%';
    },
    {
      title: 'Setting Up Quantum - Secure Infrastructure',
      category: 'Quantum Solutions',
      read_time: '8 min read',
      views: '1.8k',
      helpful: '95%';
    },
    {
      title: 'Troubleshooting Autonomous System Errors',
      category: 'Autonomous Systems',
read_time: '6 min read',
      views: '3.1k',
      helpful: '92%';
    },
    {
      title: 'API Integration Best Practices',
      category: 'Technical Issues',
read_time: '7 min read',
      views: '4.2k',
      helpful: '96%';
    },
    {
      title: 'Understanding Your Invoice and Billing',
      category: 'Billing & Account',
read_time: '3 min read',
      views: '1.5k',
      helpful: '89%';
    }
  ],
  const support_hours = [;
    {
      day: 'Monday - Friday',
      hours: '9:00 AM - 8:00 PM EST',
      status: 'Available';
    },
    {
      day: 'Saturday',
      hours: '10:00 AM - 6:00 PM EST',
status: 'Available';
    },
    {
      day: 'Sunday',
      hours: '12:00 PM - 6:00 PM EST',
status: 'Limited';
    }
  ],
  const filtered_categories = selected_category === 'all';
    ? support_categories;
    : support_categories.filter (cat => cat.id === selected_category),
  return (

    <div className="min-h-screen bg-black text-white">


  return (

    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
ursor/automate-test-improve-and-merge-code-646c
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div



ursor/automate-test-improve-and-merge-code-646c
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
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





ursor/automate-test-improve-and-merge-code-646c
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">


              Get the support you need for our AI consciousness, quantum computing, 

              and autonomous systems. Our expert team is here to help 24/7.
            </p>
            {/* Search Bar */}


              Get the support you need for our AI consciousness, quantum computing,
              and autonomous systems. Our expert team is here to help 24/7.
            </p>
            {/* Search Bar */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
ursor/automate-test-improve-and-merge-code-646c
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."



                  value={searchQuery  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSearchQuery(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




ursor/automate-test-improve-and-merge-code-646c
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <HelpCircle className="w-6 h-6" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Users className="w-6 h-6" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-6 h-6" />
                <span>Quick Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


            className="text - center max - w-4xl mx - auto";
          >;
            <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent mb - 6">;
              How Can We Help?;
            </h1>;
            <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 leading - relaxed">;
              Get the support you need for our AI consciousness, quantum computing,
              and autonomous systems. Our expert team is here to help 24 / 7.;
            </p>;
            {/* Search Bar */}
            <div className="max - w-2xl mx - auto mb - 8">;
              <div className="relative">;
                <Search className="absolute left - 4 top - 1/2 transform -translate - y-1 / 2 w - 6 h - 6 text - gray - 400" />;
                <input;
                  type="text";
                  placeholder="Search for help articles, guides, and solutions...";
                  value={search_query}
                  on_change={(e) => setSearchQuery (e.target.value)}
                  className="w - full pl - 12 pr - 4 py - 4 bg - gray - 800 / 50 border border - gray - 700 rounded - 2xl text - white placeholder - gray - 400 focus:outline - none focus:border - cyan - 500 / 50 focus:ring - 2 focus:ring - cyan - 500 / 20 transition - all duration - 300";
                />;
              </div>;
            </div>;
            <div className="flex flex - wrap justify - center gap - 6">;
              <div className="flex items - center gap - 2 text - cyan - 400">;
                <HelpCircle className="w - 6 h - 6" />;
                <span > 24 / 7 Support</span>;
              </div>;
              <div className="flex items - center gap - 2 text - purple - 400">;
                <Users className="w - 6 h - 6" />;
                <span > Expert Team</span>;
              </div>;
              <div className="flex items - center gap - 2 text - green - 400">;
                <CheckCircle className="w - 6 h - 6" />;
                <span > Quick Solutions</span>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;


ursor/automate-test-improve-and-merge-code-646c
      {/* Quick Actions */}
      <section className="py - 20">;
        <div className="container mx - auto px - 4">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}




ursor/automate-test-improve-and-merge-code-646c
      {/* Quick Actions */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20">
        <div className="container mx-auto px-4">
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





ursor/automate-test-improve-and-merge-code-646c
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get Help Fast
            </h2>
            <p className="text-xl text-gray-400">Choose your preferred support method</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickActions.map((action, index) => (
              <motion.div


            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl font - bold mb - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
              Get Help Fast;
            </h2>;
            <p className="text - xl text - gray - 400">Choose your preferred support method</p>;
          </motion.div>;
          <div className="grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
            {quick_actions.map ((action, index) => (
              <motion.div;


ursor/automate-test-improve-and-merge-code-646c
                key={action.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}

                className="group cursor - pointer";
              >;
                <div className="p - 6 bg - gradient - to - br from - gray - 900 / 50 to - black / 50 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300">;
                  <div className="flex justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300">;
                    {action.icon}



ursor/automate-test-improve-and-merge-code-646c
                key={action.title  } catch (error) {
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
                transition={{ duration: 0.8, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




ursor/automate-test-improve-and-merge-code-646c
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">



ursor/automate-test-improve-and-merge-code-646c
                    {action.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





ursor/automate-test-improve-and-merge-code-646c
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{action.title}</h3>
                  <p className="text-gray-300 mb-4 text-center leading-relaxed">{action.description}</p>
                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${action.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}>


                  </div>;
                  <h3 className="text - xl font - bold text - white mb - 3 text - center">{action.title}</h3>;
                  <p className="text - gray - 300 mb - 4 text - center leading - relaxed">{action.description}</p>;
                  <button className={`w - full py - 3 px - 4 bg - gradient - to - r ${action.color} text - white rounded - xl font - semibold hover:shadow - 2xl transition - all duration - 300`}>;
                    {action.action}

                    {action.action  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      {/* Support Categories */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
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
ursor/automate-test-improve-and-merge-code-646c
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Browse Help Categories
            </h2>
            <p className="text-xl text-gray-400">Find solutions organized by topic and service area</p>
          </motion.div>


            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl font - bold mb - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
              Browse Help Categories;
            </h2>;
            <p className="text - xl text - gray - 400">Find solutions organized by topic and service area</p>;
          </motion.div>;

          {/* Category Filter */}
          <div className="flex justify - center mb - 12">;
            <div className="flex flex - wrap gap - 3">;
              <button;
                on_click={() => setSelectedCategory ('all')}
                className={`px - 6 py - 3 rounded - xl font - medium transition - all duration - 300 ${
                  selected_category === 'all';
                    ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                    : 'bg - gray - 800 / 50 text - gray - 300 hover:bg - gray - 700 / 50';
                }`}

          {/* Category Filter */}
          {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
ursor/automate-test-improve-and-merge-code-646c
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${;
                  selectedCategory === 'all';
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white';
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              >;
                All Categories;
              </button>;
              {support_categories.map ((category) => (
                <button;
                  key={category.id}
                  on_click={() => setSelectedCategory (category.id)}
                  className={`px - 6 py - 3 rounded - xl font - medium transition - all duration - 300 ${
                    selected_category === category.id;
                      ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                      : 'bg - gray - 800 / 50 text - gray - 300 hover:bg - gray - 700 / 50';
                  }`}
                >;
                  {category.name}

                </button>))}
            </div>;
          </div>;
          <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {filtered_categories.map ((category, index) => (
              <motion.div;


              >;
                All Categories;
              </button>;
              {supportCategories.map((category) => (;
                <button;
ursor/automate-test-improve-and-merge-code-646c
                key={category.id}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}

                className="group cursor - pointer";
              >;
                <div className="p - 6 bg - gradient - to - br from - gray - 900 / 30 to - black / 30 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300">;
                  <div className="flex items - start gap - 4 mb - 4">;
                    <div className="flex - shrink - 0">{category.icon}</div>;
                    <div>;
                      <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300">;
                        {category.name}



ursor/automate-test-improve-and-merge-code-646c
                key={category.id  } catch (error) {
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
                transition={{ duration: 0.8, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




ursor/automate-test-improve-and-merge-code-646c
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">{category.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">



ursor/automate-test-improve-and-merge-code-646c
                        {category.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





ursor/automate-test-improve-and-merge-code-646c
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <span className="text-sm text-gray-400">{category.articles} articles</span>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Browse</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>




        {/* Support Channels */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
ursor/automate-test-improve-and-merge-code-646c
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-300">
                Multiple support channels to meet your needs
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div


              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
                How Can We Help?;
              </h2>;
              <p className="text - xl text - gray - 300">;
                Multiple support channels to meet your needs;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
              {support_channels.map ((channel, index) => (
                <motion.div;


ursor/automate-test-improve-and-merge-code-646c
import { HelpCircle, MessageCircle, Phone, Mail, Clock;
  BookOpen, Video, FileText, Search, Filter;
  CheckCircle, ArrowRight, Brain, Atom, Rocket;
  Shield, Zap, Users, Star, TrendingUp, Code
 } from 'lucide-react';
export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const supportCategories = null;
          </div>
        </section>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Support Channels */}
<section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Support</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the support channel that works best for you.
      title: 'Help Center', description: 'Browse our comprehensive knowledge base and FAQ',
      icon: BookOpen, features: ['Searchable articles', 'Step-by-step guides', 'Video tutorials', 'Troubleshooting'], link: '/help'
    },
    {
      title: 'Live Chat', description: 'Get instant help from our support team',
      icon: MessageCircle, features: ['24/7 availability', 'Instant responses', 'Screen sharing', 'File sharing'], link: '#'
    },
    {
      title: 'Phone Support', description: 'Speak directly with our technical experts',
      icon: Phone, features: ['Priority support', 'Technical consultation', 'Emergency assistance', 'Follow-up calls'], link: 'tel:+13024640950'
    },
    {
      title: 'Email Support', description: 'Send us detailed questions and get comprehensive answers',
      icon: Mail, features: ['Detailed responses', 'Documentation', 'Screenshots', 'Case tracking'], link: 'mailto:support@ziontechgroup.com'
    }
  ];

  const faqCategories = [
    {
      title: 'Getting Started', questions: [
        {
          question: 'How do I create an account?',
          answer: 'You can create an account by visiting our sign-up page and providing your email address and basic information. We\'ll send you a verification email to complete the process.''
        }, {
          question: 'What services do you offer?',
          answer: 'We offer AI services, cloud solutions, cybersecurity, and micro SaaS development. Visit our services page for detailed information about each offering.'
        },
        {
          question: 'How do I get my API key?', answer: 'Once you\'ve created an account, you can find your API key in the dashboard under the "API Keys" section. You can generate new keys or revoke existing ones as needed.''
        }
      ]
    }, {
      title: 'Billing & Pricing',
      questions: [
        {
          question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also arrange for invoicing and payment terms.'
        },
        {
          question: 'Can I change my plan anytime?', answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.''
        },
        {
          question: 'Do you offer refunds?', answer: 'We offer a 30-day money-back guarantee for all our services. If you\'re not satisfied, contact our support team for a full refund.''
        }
      ]
    }, {
      title: 'Technical Support',
      questions: [
        {
          question: 'How do I integrate your API?', answer: 'We provide comprehensive documentation and SDKs for popular programming languages. Check our API documentation for detailed integration guides.'
        },
        {
          question: 'What are your API rate limits?', answer: 'Rate limits vary by plan. Free plans have 1,000 requests per month, Professional plans have 100,000 requests per month, and Enterprise plans have unlimited requests.'
        },
        {
          question: 'How do I report a bug?', answer: 'You can report bugs through our support portal, email support@ziontechgroup.com, or use the feedback form in your dashboard.'
        }
      ]
    }
  ];

  const supportTiers = [
    {
      name: 'Community Support', description: 'Free support through our community forums and knowledge base',
      responseTime: '24-48 hours', features: [
        'Community forums',
        'Knowledge base access', 'Basic documentation',
        'Email support'
      ], price: 'Free'
    },
    {
      name: 'Standard Support', description: 'Professional support for business users',
      responseTime: '4-8 hours', features: [
        'Priority email support',
        'Live chat support', 'Phone support',
        'Advanced documentation', 'API support'
      ], price: 'Included with Professional Plan'
    },
    {
      name: 'Premium Support', description: 'Dedicated support for enterprise customers',
      responseTime: '1-2 hours', features: [
        'Dedicated support manager',
        '24/7 phone support', 'Priority ticket handling',
        'Custom integrations', 'SLA guarantees',
        'On-site support'
      ], price: 'Custom Pricing'
    }
  ];

  const contactMethods = [
    {
      title: 'General Inquiries', email: 'info@ziontechgroup.com',
      phone: '+1 302 464 0950', hours: 'Monday - Friday, 9 AM - 6 PM EST'
    }, {
      title: 'Technical Support',
      email: 'support@ziontechgroup.com', phone: '+1 302 464 0951',
      hours: '24/7 for Premium customers'
    }, {
      title: 'Sales & Partnerships',
      email: 'sales@ziontechgroup.com', phone: '+1 302 464 0952',
      hours: 'Monday - Friday, 9 AM - 6 PM EST'
    }
  ];

  return (
    <>
      <Head>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Access our knowledge base, contact support, and find answers to common questions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Support Center
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                We&apos;re here to help you succeed. Get the support you need, when you need it.''
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}

                  className="text - center p - 6 bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 rounded - 2xl border border - gray - 700 / 30 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <div className="flex justify - center mb - 4">;
ursor/automate-test-improve-and-merge-code-646c
                    {channel.icon}
                  key={channel.title  } catch (error) {
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
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {channel.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



ursor/automate-test-improve-and-merge-code-646c
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-cyan-400">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-green-400">{channel.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Priority:</span>
                      <span className="text-purple-400">{channel.priority}</span>
                    </div>
                  </div>
                </motion.div>



                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-6 h-6 text-blue-600" />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="text-sm text-blue-600 font-medium">
                    {channel.availability}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
ursor/automate-test-improve-and-merge-code-646c
        {/* Search and Filter */}
        <section className="py - 12 px - 4">;
          <div className="max - w-6xl mx - auto">;
            <div className="flex flex - col lg:flex - row gap - 6 items - center">;
              {/* Search Bar */}


              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Search and Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help topics, questions, or solutions..."


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



                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex - 1 w - full lg:w - auto">;
                <div className="relative">;
                  <Search className="absolute left - 4 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5" />;
                  <input;
                    type="text";
                    placeholder="Search for help topics, questions, or solutions...";
                    value={search_term}
                    on_change={(e) => setSearchTerm (e.target.value)}
                    className="w - full pl - 12 pr - 4 py - 3 bg - gray - 800 / 50 border border - gray - 600 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent";
                  />;
                </div>;
              </div>;

                    placeholder="Search for help topics, questions, or solutions..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Search for help..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus: outline-none focus:ring-2 focus:ring-blue-500"
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
                  />
                </div>
              </div>
              {/* Category Filter */}
              <div className="flex flex - wrap gap - 2">;
                {support_categories.map ((category) => (
                  <button;
                    key={category.id}
                    on_click={() => setSelectedCategory (category.id)}
                    className={`px - 4 py - 2 rounded - lg border transition - all duration - 300 flex items - center gap - 2 ${
                      selected_category === category.id;
                        ? 'bg - cyan - 500 / 20 border - cyan - 500 / 50 text - cyan - 400';
                        : 'bg - gray - 800 / 50 border - gray - 600 text - gray - 300 hover:bg - cyan - 500 / 20 hover:border - cyan - 500 / 50';

                    {channel.icon}

                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-cyan-400">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-green-400">{channel.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Priority:</span>
                      <span className="text-purple-400">{channel.priority}</span>
                    </div>
                  </div>
                </motion.div>

ursor/automate-test-improve-and-merge-code-646c
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Search and Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search Bar */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


ursor/automate-test-improve-and-merge-code-646c
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help topics, questions, or solutions..."




ursor/automate-test-improve-and-merge-code-646c
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50'


              {/* Category Filter */}
              <div className="flex flex - wrap gap - 2">;
                {support_categories.map ((category) => (
                  <button;
                    key={category.id}
ursor/automate-test-improve-and-merge-code-646c
                    }`}
                  >;
                    {category.icon}
                    {category.name}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is AI Consciousness Evolution?"
                answer: "AI Consciousness Evolution is our revolutionary platform that creates truly conscious, self-aware, and emotionally intelligent AI systems that transcend traditional artificial intelligence."
              }
              {
                question: "How does Quantum Neural Ecosystem work?"
                answer: "Our Quantum Neural Ecosystem combines quantum computing with neural networks to solve previously impossible problems, leveraging quantum superposition and entanglement for exponential computational power."
              }
              {
                question: "What makes Space Resource Intelligence unique?"
                answer: "Our space technology uses AI-powered autonomous exploration to discover and extract extraterrestrial resources, enabling sustainable space colonization and resource utilization."
              }
              {
                question: "How secure is your Quantum Cybersecurity platform?"
                answer: "Our quantum cybersecurity provides unbreakable encryption using quantum key distribution and quantum-resistant algorithms that future-proof your security beyond current technological limitations."
              }
              {
                question: "Can I integrate your AI with my existing systems?"
                answer: "Yes! We provide comprehensive integration support, APIs, and custom development services to seamlessly integrate our revolutionary AI solutions with your existing infrastructure."
              }
              {
                question: "What support do you offer for enterprise deployments?"
                answer: "We provide dedicated enterprise support including 24/7 technical assistance, custom training programs, and dedicated account managers for large-scale deployments."
              }
ursor/automate-test-improve-and-merge-code-646c


                    <span className="text - sm text - gray - 400">({category.count})</span>;
                  </button>))}


              {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="flex flex-wrap gap-2">
                {supportCategories.map((category) => (
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
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${;
                      selectedCategory === category.id;
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400';
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50';
                    }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  >;
                    {category.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    {category.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <span className="text-sm text-gray-400">({category.count})</span>
        {/* Support Options */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                How Can We Help?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support option that works best for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{option.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{option.description}</p>
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={option.link}>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Get Help
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Find quick answers to common questions
              </p>
            </div>
            
            <div className="space-y-12">
              {faqCategories.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Support Tiers
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support level that matches your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportTiers.map((tier, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-8 ${
                  tier.name === 'Standard Support' ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}>
                  {tier.name === 'Standard Support' && (
                    <div className="text-center mb-4">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{tier.price}</div>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      Response time: {tier.responseTime}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    tier.name === 'Standard Support' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: from-blue-700 hover:to-purple-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {tier.price === 'Free' ? 'Get Started' : 'Contact Sales'}
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
                  </button>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

              </div>;
            </div>;
          </div>;
        </section>;

        {/* FAQ Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
ursor/automate-test-improve-and-merge-code-646c
                question: "What is AI Consciousness Evolution?",
                answer: "AI Consciousness Evolution is our revolutionary platform that creates truly conscious, self - aware, and emotionally intelligent AI systems that transcend traditional artificial intelligence.";
              },
              {
                question: "How does Quantum Neural Ecosystem work?",
                answer: "Our Quantum Neural Ecosystem combines quantum computing with neural networks to solve previously impossible problems, leveraging quantum superposition and entanglement for exponential computational power.";
              },
              {
                question: "What makes Space Resource Intelligence unique?",
                answer: "Our space technology uses AI - powered autonomous exploration to discover and extract extraterrestrial resources, enabling sustainable space colonization and resource utilization.";
              },
              {
                question: "How secure is your Quantum Cybersecurity platform?",
                answer: "Our quantum cybersecurity provides unbreakable encryption using quantum key distribution and quantum - resistant algorithms that future - proof your security beyond current technological limitations.";
              },
              {
                question: "Can I integrate your AI with my existing systems?",
                answer: "Yes! We provide comprehensive integration support, APIs, and custom development services to seamlessly integrate our revolutionary AI solutions with your existing infrastructure.";
              },
              {
                question: "What support do you offer for enterprise deployments?",

                answer: "We provide dedicated enterprise support including 24/7 technical assistance, custom training programs, and dedicated account managers for large-scale deployments."
              }
                } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
      {/* FAQs */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Popular Articles */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
        <section id="knowledge-base" className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto">
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
              transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





ursor/automate-test-improve-and-merge-code-646c
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Quick answers to common questions and solutions
              </p>
            </motion.div>


              className="text-center mb-16"

{/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
                Frequently Asked Questions;
              </h2>;
              <p className="text - xl text - gray - 300">;
                Quick answers to common questions and solutions;
              </p>;
            </motion.div>;
            {filteredFAQs.length === 0 ? (
            ) : (
              <div className="space-y-6">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
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
                    transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 mb-4">{faq.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag) => (
                        <span
                          key={tag  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                        >
                          {tag  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </span>;
                      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
ursor/automate-test-improve-and-merge-code-646c
                    </div>;
                  </motion.div>))}
              </div>)}
          </div>;
        </section>;

        {/* Support Resources */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
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
              transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Support Resources
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive documentation and learning materials
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div


              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
                Support Resources;
              </h2>;
              <p className="text - xl text - gray - 300">;
                Comprehensive documentation and learning materials;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
              {resources.map ((resource, index) => (
                <motion.div;


ursor/automate-test-improve-and-merge-code-646c
                  key={resource.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}

                  className="p - 6 bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 rounded - 2xl border border - gray - 700 / 30 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <div className="flex justify - center mb - 4">;
                    {resource.icon}
                  </div>;
                  <h3 className="text - lg font - bold text - white mb - 2">{resource.title}</h3>;
                  <p className="text - gray - 300 text - sm mb - 4">{resource.description}</p>;
                  <div className="flex items - center justify - between">;
                    <span className="px - 2 py - 1 bg - gray - 700 / 50 text - gray - 300 rounded - full text - xs">;
                      {resource.category}
                    </span>;
                    <a;
                      href={resource.link}


                  key={resource.title  } catch (error) {
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
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {resource.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



ursor/automate-test-improve-and-merge-code-646c
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">



ursor/automate-test-improve-and-merge-code-646c
                      {resource.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </span>;
                    <a;
                      href={resource.link  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





ursor/automate-test-improve-and-merge-code-646c
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      Access
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-400">Most viewed and helpful support content</p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-4">
            {popularArticles.map((article, index) => (
              <motion.div


                      className="text - cyan - 400 hover:text - cyan - 300 transition - colors text - sm font - medium";
                    >;
                      Access;
                    </a>;
                  </div>;
                </motion.div>))}
            </div>;
            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl font - bold mb - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
              Popular Help Articles;
            </h2>;
            <p className="text - xl text - gray - 400">Most viewed and helpful support content</p>;
          </motion.div>;
          <div className="max - w-4xl mx - auto space - y-4">;
            {popular_articles.map ((article, index) => (
              <motion.div;


ursor/automate-test-improve-and-merge-code-646c
                key={article.title}
                initial={{ opacity: 0, coordinate_x: -20 }}
                whileInView={{ opacity: 1, coordinate_x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}

                className="group cursor - pointer";
              >;
                <div className="p - 6 bg - gradient - to - br from - gray - 900 / 50 to - black / 50 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300">;
                  <div className="flex items - start justify - between gap - 4">;
                    <div className="flex - 1">;
                      <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300">;
                        {article.title}
                      </h3>;
                      <div className="flex items - center gap - 4 text - sm text - gray - 400">;
                        <span className="flex items - center gap - 1">;
                          <BookOpen className="w - 4 h - 4" />;
                          {article.category}


                key={article.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, x: -20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.8, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



ursor/automate-test-improve-and-merge-code-646c
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">



ursor/automate-test-improve-and-merge-code-646c
                        {article.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}




ursor/automate-test-improve-and-merge-code-646c
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />



ursor/automate-test-improve-and-merge-code-646c
                          {article.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





ursor/automate-test-improve-and-merge-code-646c
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {article.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {article.helpful} helpful
                        </span>
                      </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Get in touch with the right team for your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-2" />
                      <a href={`mailto: ${method.email}`} className="text-blue-600 hover:text-blue-700">
                        {method.email}
                      </a>
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Read</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>


                        </span>;
                        <span className="flex items - center gap - 1">;
                          <Clock className="w - 4 h - 4" />;
                          {article.read_time}
                        </span>;
                        <span className="flex items - center gap - 1">;
                          <TrendingUp className="w - 4 h - 4" />;
                          {article.views} views;
                        </span>;
                        <span className="flex items - center gap - 1">;
                          <Star className="w - 4 h - 4" />;
                          {article.helpful} helpful;
                        </span>;
                      </div>;
                    </div>;
                    <div className="flex items - center gap - 2 text - cyan - 400 group - hover:text - cyan - 300 transition - colors duration - 300">;
                      <span className="text - sm font - medium">Read</span>;
                      <ArrowRight className="w - 5 h - 5 group - hover:translate - x-1 transition - transform duration - 300" />;
                    </div>;
                  </div>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;

      {/* Support Hours & Contact */}
      <section className="py - 20 bg - gradient - to - r from - gray - 900 / 50 to - black">;
        <div className="container mx - auto px - 4">;
          <div className="grid lg:grid - cols - 2 gap - 12 items - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_x: -20 }}
              whileInView={{ opacity: 1, coordinate_x: 0 }}
              transition={{ duration: 0.8 }}


            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Support Hours & Contact */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



ursor/automate-test-improve-and-merge-code-646c
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



ursor/automate-test-improve-and-merge-code-646c
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Support Hours & Availability
              </h2>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Immediate Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">




                revolutionary technology solutions.
              </p>
              <div className="space-y-4">
                {supportHours.map((schedule, index) => (
                  <div key={schedule.day} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                    <div>
                      <h3 className="font-semibold text-white">{schedule.day}</h3>
                      <p className="text-gray-400">{schedule.hours}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      schedule.status === 'Available'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>




ursor/automate-test-improve-and-merge-code-646c
                      {schedule.status  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </span>;
                  </div>;
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, x: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





ursor/automate-test-improve-and-merge-code-646c
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4 text-white">Need Immediate Help?</h3>
                <p className="text-gray-300 mb-6">


                  For urgent technical issues or critical support needs,




                  For urgent technical issues or critical support needs, 
                  For urgent technical issues or critical support needs,
ursor/automate-test-improve-and-merge-code-646c
                  For urgent technical issues or critical support needs, 
                  For urgent technical issues or critical support needs,
                  our team is available around the clock.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-white">support@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Live Chat Available</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-cyan-500/20">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    Contact Support
                    <ArrowRight className="w-5 h-5" />



                  </Link>




ursor/automate-test-improve-and-merge-code-646c
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


            >;
              <h2 className="text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
                Support Hours & Availability;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8 leading - relaxed">;
                Our expert support team is available to help you succeed with our;
                revolutionary technology solutions.;
              </p>;
              <div className="space - y-4">;
                {support_hours.map ((schedule, index) => (
                  <div key={schedule.day} className="flex items - center justify - between p - 4 bg - gray - 800 / 30 rounded - xl">;
                    <div>;
                      <h3 className="font - semibold text - white">{schedule.day}</h3>;
                      <p className="text - gray - 400">{schedule.hours}</p>;
                    </div>;
                    <span className={`px - 3 py - 1 rounded - full text - sm font - medium ${
                      schedule.status === 'Available';
                        ? 'bg - green - 500 / 20 text - green - 400';
                        : 'bg - yellow - 500 / 20 text - yellow - 400';
                    }`}>;
                      {schedule.status}
                    </span>;
                  </div>))}
              </div>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_x: 20 }}
              whileInView={{ opacity: 1, coordinate_x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative";
            >;
              <div className="bg - gradient - to - br from - cyan - 500 / 10 via - purple - 500 / 10 to - pink - 500 / 10 rounded - 2xl p - 8 border border - cyan - 500 / 20">;
                <h3 className="text - 2xl font - bold mb - 4 text - white">Need Immediate Help?</h3>;
                <p className="text - gray - 300 mb - 6">;
                  For urgent technical issues or critical support needs,
                  our team is available around the clock.;
                </p>;
                <div className="space - y-4">;
                  <div className="flex items - center gap - 3">;
                    <Phone className="w - 5 h - 5 text - cyan - 400" />;
                    <span className="text - white">+1 302 464 0950</span>;
                  </div>;
                  <div className="flex items - center gap - 3">;
                    <Mail className="w - 5 h - 5 text - purple - 400" />;
                    <span className="text - white">support@ziontechgroup.com</span>;
                  </div>;
                  <div className="flex items - center gap - 3">;
                    <MessageCircle className="w - 5 h - 5 text - green - 400" />;
                    <span className="text - white">Live Chat Available</span>;
                  </div>;
                </div>;
                <div className="mt - 6 pt - 6 border - t border - cyan - 500 / 20">;
                  <a;
                    href="/contact";
                    className="inline - flex items - center gap - 2 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 6 py - 3 rounded - xl font - semibold hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 300";
                  >;
                    Contact Support;
                    <ArrowRight className="w - 5 h - 5" />;
                  </a>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;

      {/* Contact CTA */}
      <section className="py - 20 bg - gradient - to - r from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20">;
        <div className="container mx - auto px - 4 text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}


      {/* Contact CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



ursor/automate-test-improve-and-merge-code-646c
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
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



ursor/automate-test-improve-and-merge-code-646c
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">




              revolutionary technology solutions. Don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Get Support
                <ArrowRight className="w-5 h-5" />



              </Link>




ursor/automate-test-improve-and-merge-code-646c
              <a
                href="/resources"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Browse Resources
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our support team is ready to help you succeed.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <a href="mailto:support@ziontechgroup.com">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Email Us
                </button>
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )


          >;
            <h2 className="text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
              Still Need Help?;
            </h2>;
            <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">;
              Our support team is dedicated to ensuring your success with our;
              revolutionary technology solutions. Don't hesitate to reach out.;
            </p>;
            <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
              <a;
                href="/contact";
                className="inline - flex items - center gap - 2 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 8 py - 4 rounded - 2xl font - semibold hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 300";
              >;
                Get Support;
                <ArrowRight className="w - 5 h - 5" />;
              </a>;
              <a;
                href="/resources";
                className="inline - flex items - center gap - 2 border border - cyan - 500 / 30 text - cyan - 400 px - 8 py - 4 rounded - 2xl font - semibold hover:bg - cyan - 500 / 10 transition - all duration - 300";
              >;
                Browse Resources;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>);
},
export default Support,
          </div>;
        </section>;

        {/* Contact Support */}
        <section id="contact - support" className="py - 20 px - 4 bg - gradient - to - r from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}



ursor/automate-test-improve-and-merge-code-646c
},
export default Support,
          </div>
        </section>



        {/* Contact Support */}
        {/* Contact Support */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
ursor/automate-test-improve-and-merge-code-646c
        <section id="contact-support" className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
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
              transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our expert support team is ready to assist you with any questions or technical issues
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />



                </Link>




ursor/automate-test-improve-and-merge-code-646c
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30">
                <h3 className="text-xl font-bold text-white mb-4">Emergency Support</h3>
                <p className="text-gray-300 mb-4">
                  For critical issues affecting production systems, contact our emergency support line: </p>
                <div className="text-2xl font-bold text-cyan-400">+1 (302) 464-0950</div>
                <p className="text-sm text-gray-400 mt-2">Available 24/7 for enterprise clients</p>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us now for urgent support needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/help"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                >
                  Help Center
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  )







      </main>
    </Layout>
  )
}
export default SupportPage;

export default SupportPage,
              className="relative";
            >;
              <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-cyan-500/20">;
                <h3 className="text-2xl font-bold mb-4 text-white">Need Immediate Help?</h3>;
                <p className="text-gray-300 mb-6">;
                  For urgent technical issues or critical support needs,;
                  our team is available around the clock.;
                </p>;
                <div className="space-y-4">;
                  <div className="flex items-center gap-3">;
                    <Phone className="w-5 h-5 text-cyan-400" />;
                    <span className="text-white">+1 302 464 0950</span>;
                  </div>;
                  <div className="flex items-center gap-3">;
                    <Mail className="w-5 h-5 text-purple-400" />;
                    <span className="text-white">support@ziontechgroup.com</span>;
                  </div>;
                  <div className="flex items-center gap-3">;
                    <MessageCircle className="w-5 h-5 text-green-400" />;
                    <span className="text-white">Live Chat Available</span>;
                  </div>;
                </div>;
                <div className="mt-6 pt-6 border-t border-cyan-500/20">;
                  <a;
                    href="/contact";
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300";
                  >;
                    Contact Support;
                    <ArrowRight className="w-5 h-5" />;
                  </a>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* Contact CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
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
          >;
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
              Still Need Help?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Our support team is dedicated to ensuring your success with our;
              revolutionary technology solutions. Don't hesitate to reach out.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="/contact";
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300";
              >;
                Get Support;
                <ArrowRight className="w-5 h-5" />;
              </a>;
              <a;
                href="/resources";
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300";
              >;
                Browse Resources;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
},;
export default Support,;
          </div>;
        </section>;
        {/* Contact Support */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section id="contact-support" className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion.div;
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
            >;
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                Still Need Help?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Our expert support team is ready to assist you with any questions or technical issues;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a;
                  href="/contact";
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center";
                >;
                  Contact Support;
                  <ArrowRight className="w-5 h-5 ml-2" />;
                </a>;
                <a;
                  href="tel:+13024640950";
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center";
                >;
                  <Phone className="w-5 h-5 mr-2" />;
                  Call Now;
                </a>;
              </div>;
              <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30">;
                <h3 className="text-xl font-bold text-white mb-4">Emergency Support</h3>;
                <p className="text-gray-300 mb-4">;
                  For critical issues affecting production systems, contact our emergency support line: </p>;
                <div className="text-2xl font-bold text-cyan-400">+1 (302) 464-0950</div>;
                <p className="text-sm text-gray-400 mt-2">Available 24/7 for enterprise clients</p>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </main>;
    </Layout>;
  );
};
export default SupportPage;

ursor/automate-test-improve-and-merge-code-646c
</div>
    </>
</>
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
