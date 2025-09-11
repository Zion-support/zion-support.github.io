<<<<<<< HEAD
<<<<<<< HEAD
  BookOpen, Video, FileText, Search, Filter,
  CheckCircle, ArrowRight, Brain, Atom, Rocket,
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  HelpCircle, MessageCircle, Phone, Mail, Clock
  BookOpen, Video, FileText, Search, Filter
  CheckCircle, ArrowRight, Brain, Atom, Rocket
  Shield, Zap, Users, Star, TrendingUp, Code
} from 'lucide-react',
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
import { 
  HelpCircle, MessageCircle, Phone, Mail, Clock, 
import React, { useState } from 'react',
import { motion } from 'framer-motion',
import {
  HelpCircle, MessageCircle, Phone, Mail, Clock,
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: 'quantum-solutions'
      name: 'Quantum Solutions'
      icon: <Atom className="w-8 h-8 text-purple-400" />
      description: 'Help with quantum computing and cryptography'
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: 'quantum-solutions',
      name: 'Quantum Solutions',
      icon: <Atom className="w-8 h-8 text-purple-400" />,
      description: 'Help with quantum computing and cryptography',
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      articles: 18
    }
    {
      id: 'autonomous-systems'
      name: 'Autonomous Systems'
      icon: <Rocket className="w-8 h-8 text-green-400" />
      description: 'Support for self-managing business operations'
<<<<<<< HEAD
=======

      articles: 18
    }
    {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: 'autonomous-systems',
      name: 'Autonomous Systems',
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      description: 'Support for self-managing business operations',
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      articles: 32
    }
    {
      id: 'enterprise-it'
      name: 'Enterprise IT'
      icon: <Shield className="w-8 h-8 text-blue-400" />
      description: 'Infrastructure and security support'
<<<<<<< HEAD
=======

      articles: 32
    }
    {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: 'enterprise-it',
      name: 'Enterprise IT',
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      description: 'Infrastructure and security support',
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      articles: 28
    }
    {
      id: 'billing'
      name: 'Billing & Account'
      icon: <Zap className="w-8 h-8 text-yellow-400" />
      description: 'Payment, invoices, and account management'
<<<<<<< HEAD
=======

      articles: 28
    }
    {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      id: 'billing',
      name: 'Billing & Account',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      description: 'Payment, invoices, and account management',
<<<<<<< HEAD
<<<<<<< HEAD
      id: 'technical',
      name: 'Technical Issues',
      icon: <Code className="w - 8 h - 8 text - orange - 400" />,
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      articles: 15
    }
    {
      id: 'technical'
      name: 'Technical Issues'
      icon: <Code className="w-8 h-8 text-orange-400" />
      description: 'Bug reports and technical troubleshooting'
      articles: 42
    }
  ]
  const quickActions = [
    {
      title: 'Live Chat'
      description: 'Get instant help from our support team'
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />
      action: 'Start Chat'
      color: 'from-cyan-500 to-blue-600'
      available: true
    }
    {
      title: 'Phone Support'
      description: 'Speak directly with our experts'
      icon: <Phone className="w-8 h-8 text-green-400" />
      action: 'Call Now'
      color: 'from-green-500 to-emerald-600'
      available: true
    }
    {
      title: 'Email Support'
      description: 'Send us a detailed message'
      icon: <Mail className="w-8 h-8 text-purple-400" />
      action: 'Send Email'
      color: 'from-purple-500 to-pink-600'
      available: true
    }
    {
      title: 'Video Call'
      description: 'Screen share and visual assistance'
      icon: <Video className="w-8 h-8 text-orange-400" />
      action: 'Schedule Call'
      color: 'from-orange-500 to-red-600'
      available: true
    }
  ]
  const popularArticles = [
    {
      title: 'Getting Started with AI Consciousness Platform'
      category: 'AI Services'
      readTime: '5 min read'
      views: '2.4k'
      helpful: '98%'
    }
    {
      title: 'Setting Up Quantum-Secure Infrastructure'
      category: 'Quantum Solutions'
      readTime: '8 min read'
      views: '1.8k'
      helpful: '95%'
    }
    {
      title: 'Troubleshooting Autonomous System Errors'
      category: 'Autonomous Systems'
      readTime: '6 min read'
      views: '3.1k'
      helpful: '92%'
    }
    {
      title: 'API Integration Best Practices'
      category: 'Technical Issues'
      readTime: '7 min read'
      views: '4.2k'
      helpful: '96%'
    }
    {
      title: 'Understanding Your Invoice and Billing'
      category: 'Billing & Account'
      readTime: '3 min read'
      views: '1.5k'
      helpful: '89%'
    }
  ]
  const supportHours = [
    {
      day: 'Monday - Friday'
      hours: '9:00 AM - 8:00 PM EST'
      status: 'Available'
    }
    {
      day: 'Saturday'
      hours: '10:00 AM - 6:00 PM EST'
      status: 'Available'
    }
    {
      day: 'Sunday'
      hours: '12:00 PM - 6:00 PM EST'
      status: 'Limited'
    }
  ]
  const filteredCategories = selectedCategory === 'all'
    ? supportCategories
    : supportCategories.filter(cat => cat.id === selectedCategory)
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      id: 'technical',
      name: 'Technical Issues',
<<<<<<< HEAD
      icon: <Code className="w-8 h-8 text-orange-400" />,
=======

      articles: 15
    }
    {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      id: 'technical',
      name: 'Technical Issues',
      icon: <Code className="w - 8 h - 8 text - orange - 400" />,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
=======
      icon: <MessageCircle className="w - 8 h - 8 text - cyan - 400" />,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      action: 'Start Chat',
      color: 'from-cyan-500 to-blue-600',
      available: true
=======
      icon: <Code className="w - 8 h - 8 text - orange - 400" />,
      description: 'Bug reports and technical troubleshooting',
      articles: 42;
    }
  ],
  const quick_actions = [;
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="w - 8 h - 8 text - cyan - 400" />,
      action: 'Start Chat',
      color: 'from - cyan - 500 to - blue - 600',
      available: true;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      icon: <Phone className="w - 8 h - 8 text - green - 400" />,
      action: 'Call Now',
      color: 'from - green - 500 to - emerald - 600',
      available: true;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      icon: <Phone className="w-8 h-8 text-green-400" />,
      action: 'Call Now',
      color: 'from-green-500 to-emerald-600',
      available: true
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      icon: <Mail className="w - 8 h - 8 text - purple - 400" />,
      action: 'Send Email',
      color: 'from - purple - 500 to - pink - 600',
      available: true;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      icon: <Mail className="w-8 h-8 text-purple-400" />,
      action: 'Send Email',
      color: 'from-purple-500 to-pink-600',
      available: true
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    {
      title: 'Video Call',
      description: 'Screen share and visual assistance',
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
read_time: '6 min read',
=======
      read_time: '6 min read',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      views: '3.1k',
      helpful: '92%';
    },
    {
      title: 'API Integration Best Practices',
      category: 'Technical Issues',
<<<<<<< HEAD
read_time: '7 min read',
=======
      read_time: '7 min read',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      views: '4.2k',
      helpful: '96%';
    },
    {
      title: 'Understanding Your Invoice and Billing',
      category: 'Billing & Account',
<<<<<<< HEAD
read_time: '3 min read',
=======
      read_time: '3 min read',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
status: 'Available';
=======
      status: 'Available';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    {
      day: 'Sunday',
      hours: '12:00 PM - 6:00 PM EST',
<<<<<<< HEAD
status: 'Limited';
=======
      status: 'Limited';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  ],
  const filtered_categories = selected_category === 'all';
    ? support_categories;
    : support_categories.filter (cat => cat.id === selected_category),
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (

    <div className="min-h-screen bg-black text-white">

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
    <div className="min - h-screen bg - black text - white">;
      {/* Hero Section */}
      <section className="relative pt - 32 pb - 20 overflow - hidden">;
        <div className="absolute inset - 0 bg - gradient - to - br from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20" />;
        <div className="relative z - 10 container mx - auto px - 4">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Quick Actions */}
      <section className="py - 20">;
        <div className="container mx - auto px - 4">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======


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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
      icon: <Video className="w-8 h-8 text-orange-400" />,
      action: 'Schedule Call',
      color: 'from-orange-500 to-red-600',
      available: true
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const popularArticles = [;
    {;
      title: 'Getting Started with AI Consciousness Platform';
      category: 'AI Services';
      readTime: '5 min read';
      views: '2.4k';
      helpful: '98%';
    },;
    {;
      title: 'Setting Up Quantum-Secure Infrastructure',;
      category: 'Quantum Solutions',;
      readTime: '8 min read',;
      views: '1.8k',;
      helpful: '95%';
    },;
    {;
      title: 'Troubleshooting Autonomous System Errors',;
      category: 'Autonomous Systems',;
      readTime: '6 min read',;
      views: '3.1k',;
      helpful: '92%';
    },;
    {;
      title: 'API Integration Best Practices',;
      category: 'Technical Issues',;
      readTime: '7 min read',;
      views: '4.2k',;
      helpful: '96%';
    },;
    {;
      title: 'Understanding Your Invoice and Billing',;
      category: 'Billing & Account',;
      readTime: '3 min read',;
      views: '1.5k',;
      helpful: '89%';
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const supportHours = [;
    {;
      day: 'Monday - Friday';
      hours: '9:00 AM - 8:00 PM EST';
      status: 'Available';
    };
    {;
      day: 'Saturday';
      hours: '10:00 AM - 6:00 PM EST',;
      status: 'Available';
    },;
    {;
      day: 'Sunday',;
      hours: '12:00 PM - 6:00 PM EST',;
      status: 'Limited';
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const filteredCategories = selectedCategory === 'all'
    ? supportCategories
    : supportCategories.filter(cat => cat.id === selectedCategory),
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
<<<<<<< HEAD
              Get the support you need for our AI consciousness, quantum computing
              Get the support you need for our AI consciousness, quantum computing, 
=======


              Get the support you need for our AI consciousness, quantum computing, 

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      {/* Quick Actions */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
=======
      <section className="py - 20">;
        <div className="container mx - auto px - 4">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            transition={{ duration: 0.8 }}
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                key={action.title}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
                className="group cursor - pointer";
              >;
                <div className="p - 6 bg - gradient - to - br from - gray - 900 / 50 to - black / 50 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300">;
                  <div className="flex justify - center mb - 4 group - hover:scale - 110 transition - transform duration - 300">;
                    {action.icon}


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    {action.icon}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {action.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
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

                  </button>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
      {/* Support Categories */}
      <section className="py - 20 bg - gradient - to - r from - gray - 900 / 50 to - black">;
        <div className="container mx - auto px - 4">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
=======

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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Browse Help Categories
            </h2>
            <p className="text-xl text-gray-400">Find solutions organized by topic and service area</p>
          </motion.div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className="text - center mb - 16";
          >;
            <h2 className="text - 4xl font - bold mb - 4 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
              Browse Help Categories;
            </h2>;
            <p className="text - xl text - gray - 400">Find solutions organized by topic and service area</p>;
          </motion.div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

          {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

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

<<<<<<< HEAD
                  {category.name}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </button>))}
            </div>;
          </div>;
          <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {filtered_categories.map ((category, index) => (
              <motion.div;
<<<<<<< HEAD
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
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {action.icon}
                    {action.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{action.title}</h3>
                  <p className="text-gray-300 mb-4 text-center leading-relaxed">{action.description}</p>
                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${action.color} text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300`}>
                    {action.action}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Support Categories */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
                    {action.action  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
                  </button>;
                </div>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
=======

                  </button>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Browse Help Categories
            </h2>
            <p className="text-xl text-gray-400">Find solutions organized by topic and service area</p>
          </motion.div>
          {/* Category Filter */}
          {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
              >;
                All Categories;
              </button>;
              {supportCategories.map((category) => (;
                <button;
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
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${;
                    selectedCategory === category.id;
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white';
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50';
                  }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >;
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
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                key={category.id}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
                className="group cursor - pointer";
              >;
                <div className="p - 6 bg - gradient - to - br from - gray - 900 / 30 to - black / 30 rounded - 2xl border border - gray - 800 / 50 hover:border - cyan - 500 / 30 transition - all duration - 300">;
                  <div className="flex items - start gap - 4 mb - 4">;
                    <div className="flex - shrink - 0">{category.icon}</div>;
                    <div>;
                      <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300">;
                        {category.name}


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">{category.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        {category.name}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {category.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
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

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      </h3>;
                      <p className="text - gray - 300 text - sm leading - relaxed">{category.description}</p>;
                    </div>;
                  </div>;
                  <div className="flex items - center justify - between pt - 4 border - t border - gray - 800 / 50">;
                    <span className="text - sm text - gray - 400">{category.articles} articles</span>;
                    <div className="flex items - center gap - 2 text - cyan - 400 group - hover:text - cyan - 300 transition - colors duration - 300">;
                      <span className="text - sm font - medium">Browse</span>;
                      <ArrowRight className="w - 4 h - 4 group - hover:translate - x-1 transition - transform duration - 300" />;
                    </div>;
                  </div>;
                </div>;
              </motion.div>))}
          </div>;
        </section>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Support Channels */}
        <section className="py - 20 px - 4 bg - gradient - to - r from - gray - 900 / 50 to - black / 50">;
          <div className="max - w-6xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
<<<<<<< HEAD
=======


            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        {/* Support Channels */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">{category.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {category.name}
                        {category.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            ))}
          </div>
        </section>
        {/* Support Channels */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        {/* Support Channels */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={channel.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD

                  </div>;
                  <h3 className="text - xl font - bold text - white mb - 3">{channel.title}</h3>;
                  <p className="text - gray - 300 text - sm mb - 4">{channel.description}</p>;
                  <div className="space - y-2 text - sm">;
                    <div className="flex justify - between">;
                      <span className="text - gray - 400">Availability:</span>;
                      <span className="text - cyan - 400">{channel.availability}</span>;
                    </div>;
                    <div className="flex justify - between">;
                      <span className="text - gray - 400">Response:</span>;
                      <span className="text - green - 400">{channel.response_time}</span>;
                    </div>;
                    <div className="flex justify - between">;
                      <span className="text - gray - 400">Priority:</span>;
                      <span className="text - purple - 400">{channel.priority}</span>;
                    </div>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="text - center p - 6 bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 rounded - 2xl border border - gray - 700 / 30 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <div className="flex justify - center mb - 4">;
                    {channel.icon}
<<<<<<< HEAD


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Search and Filter */}
        <section className="py - 12 px - 4">;
          <div className="max - w-6xl mx - auto">;
            <div className="flex flex - col lg:flex - row gap - 6 items - center">;
              {/* Search Bar */}
<<<<<<< HEAD
=======


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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help topics, questions, or solutions..."

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
                  className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              ))}
            </div>
          </div>
        </section>
        {/* Search and Filter */}
<<<<<<< HEAD
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
=======
        <section className="py - 12 px - 4">;
          <div className="max - w-6xl mx - auto">;
            <div className="flex flex - col lg:flex - row gap - 6 items - center">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help topics, questions, or solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
              {/* Category Filter */}
<<<<<<< HEAD
              <div className="flex flex-wrap gap-2">
                {supportCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-cyan-500/20 hover:border-cyan-500/50'
=======
              <div className="flex flex - wrap gap - 2">;
                {support_categories.map ((category) => (
                  <button;
                    key={category.id}
                    on_click={() => setSelectedCategory (category.id)}
                    className={`px - 4 py - 2 rounded - lg border transition - all duration - 300 flex items - center gap - 2 ${
                      selected_category === category.id;
                        ? 'bg - cyan - 500 / 20 border - cyan - 500 / 50 text - cyan - 400';
                        : 'bg - gray - 800 / 50 border - gray - 600 text - gray - 300 hover:bg - cyan - 500 / 20 hover:border - cyan - 500 / 50';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    }`}
                  >;
                    {category.icon}
                    {category.name}

<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <span className="text - sm text - gray - 400">({category.count})</span>;
                  </button>))}
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* FAQ Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
<<<<<<< HEAD
<<<<<<< HEAD
                    <span className="text-sm text-gray-400">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
<<<<<<< HEAD

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


              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Quick answers to common questions and solutions
              </p>
            </motion.div>
<<<<<<< HEAD
                answer: "We provide dedicated enterprise support including 24 / 7 technical assistance, custom training programs, and dedicated account managers for large - scale deployments.";
              }
            ].map ((faq, index) => (
              <div key={index} className="p - 6 rounded - 2xl bg - gradient - to - br from - white / 5 to - white / 10 border border - white / 10">;
                <h3 className="text - lg font - semibold mb - 3 text - white">{faq.question}</h3>;
                <p className="text - gray - 300 leading - relaxed">{faq.answer}</p>;
              </div>;
      {/* FAQs */}
      <section className="py - 20 bg - gradient - to - r from - gray - 900 / 50 to - black / 50">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
      {/* Popular Articles */}
      <section className="py - 20">;
        <div className="container mx - auto px - 4">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
        <section id="knowledge - base" className="py - 20 px - 4 bg - gradient - to - r from - black / 50 to - gray - 900 / 50">;
          <div className="max - w-6xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
              <div className="text - center py - 20">;
                <HelpCircle className="w - 16 h - 16 text - gray - 400 mx - auto mb - 4" />;
                <h3 className="text - 2xl font - semibold text - white mb - 4">No results found</h3>;
                <p className="text - gray - 300">Try adjusting your search terms or category filter.</p>;
              </div>) : (
              <div className="space - y-6">;
                {filteredFAQs.map ((faq, index) => (
                  <motion.div;
        {/* FAQ Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is AI Consciousness Evolution?",
                answer: "AI Consciousness Evolution is our revolutionary platform that creates truly conscious, self-aware, and emotionally intelligent AI systems that transcend traditional artificial intelligence."
              },
              {
                question: "How does Quantum Neural Ecosystem work?",
                answer: "Our Quantum Neural Ecosystem combines quantum computing with neural networks to solve previously impossible problems, leveraging quantum superposition and entanglement for exponential computational power."
              },
              {
                question: "What makes Space Resource Intelligence unique?",
                answer: "Our space technology uses AI-powered autonomous exploration to discover and extract extraterrestrial resources, enabling sustainable space colonization and resource utilization."
              },
              {
                question: "How secure is your Quantum Cybersecurity platform?",
                answer: "Our quantum cybersecurity provides unbreakable encryption using quantum key distribution and quantum-resistant algorithms that future-proof your security beyond current technological limitations."
              },
              {
                question: "Can I integrate your AI with my existing systems?",
                answer: "Yes! We provide comprehensive integration support, APIs, and custom development services to seamlessly integrate our revolutionary AI solutions with your existing infrastructure."
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* FAQs */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Popular Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        <section id="knowledge-base" className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Quick answers to common questions and solutions
              </p>
            </motion.div>
<<<<<<< HEAD
            {filteredFAQs.length === 0 ? (
=======

                        </span>))}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent">;
                Frequently Asked Questions;
              </h2>;
              <p className="text - xl text - gray - 300">;
                Quick answers to common questions and solutions;
              </p>;
            </motion.div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            {filteredFAQs.length === 0 ? (

                        </span>))}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="text-center py-20">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">No results found</h3>
                <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
                    key={index}
                    initial={{ opacity: 0, coordinate_y: 20 }}
                    whileInView={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
        {/* Support Resources */}
        <section className="py - 20 px - 4">;
          <div className="max - w-6xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 mb-4">{faq.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
        {/* Support Resources */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
<<<<<<< HEAD
                    </div>;
                  </motion.div>;
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    </div>;
                  </motion.div>))}
              </div>)}
          </div>;
        </section>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={resource.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    {resource.icon}
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
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className="p - 6 bg - gradient - to - br from - gray - 800 / 30 to - gray - 900 / 30 rounded - 2xl border border - gray - 700 / 30 hover:border - cyan - 500 / 50 transition - all duration - 300";
                >;
                  <div className="flex justify - center mb - 4">;
                    {resource.icon}
<<<<<<< HEAD
                  </div>;
                  <h3 className="text - lg font - bold text - white mb - 2">{resource.title}</h3>;
                  <p className="text - gray - 300 text - sm mb - 4">{resource.description}</p>;
                  <div className="flex items - center justify - between">;
                    <span className="px - 2 py - 1 bg - gray - 700 / 50 text - gray - 300 rounded - full text - xs">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {resource.category}
                    </span>;
                    <a;
                      href={resource.link}
<<<<<<< HEAD
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                      {resource.category}
                    </span>
                    <a
                      href={resource.link}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

<<<<<<< HEAD
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
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      Access
                    </a>
                  </div>
                </motion.div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                key={article.title}
                initial={{ opacity: 0, coordinate_x: -20 }}
                whileInView={{ opacity: 1, coordinate_x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
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


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        {article.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />

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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Support Hours & Contact */}
      <section className="py - 20 bg - gradient - to - r from - gray - 900 / 50 to - black">;
        <div className="container mx - auto px - 4">;
          <div className="grid lg:grid - cols - 2 gap - 12 items - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_x: -20 }}
              whileInView={{ opacity: 1, coordinate_x: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======


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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Support Hours & Availability
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



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


              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4 text-white">Need Immediate Help?</h3>
                <p className="text-gray-300 mb-6">


                  For urgent technical issues or critical support needs,

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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Contact CTA */}
      <section className="py - 20 bg - gradient - to - r from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20">;
        <div className="container mx - auto px - 4 text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
=======


      {/* Contact CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



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


              <a
                href="/resources"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Browse Resources
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Contact Support */}
        <section id="contact - support" className="py - 20 px - 4 bg - gradient - to - r from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}

<<<<<<< HEAD
                </Link>


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
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  )

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



},
export default SupportPage,
;
              <a
                href=&quot;/contact&quot;
                className=&quot;inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300&quot;
              >
                Get Support
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </Link>
              <a
                href=&quot;/resources&quot;
                className=&quot;inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300&quot;
              >
                Browse Resources
              </Link>
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
                className="group cursor-pointer"
              >
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {article.title}
                        {article.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
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
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Read</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Support Hours & Contact */}
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
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Support Hours & Availability
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
<<<<<<< HEAD
                Our expert support team is available to help you succeed with our 
                Our expert support team is available to help you succeed with our
=======




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                      {schedule.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4 text-white">Need Immediate Help?</h3>
                <p className="text-gray-300 mb-6">
<<<<<<< HEAD
                  For urgent technical issues or critical support needs
                  For urgent technical issues or critical support needs,
                  For urgent technical issues or critical support needs, 
                  For urgent technical issues or critical support needs,
=======


                  For urgent technical issues or critical support needs,

=======
                  For urgent technical issues or critical support needs, 
                  For urgent technical issues or critical support needs,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                  </a>
                  </Link>
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      {/* Contact CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
<<<<<<< HEAD
              Our support team is dedicated to ensuring your success with our
              Our support team is dedicated to ensuring your success with our 
              Our support team is dedicated to ensuring your success with our
=======




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              revolutionary technology solutions. Don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Get Support
                <ArrowRight className="w-5 h-5" />
              </a>
              </Link>
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <a
                href="/resources"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Browse Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default Support
          </div>
        </section>
        {/* Contact Support */}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
},
export default Support,
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Contact Support */}
        {/* Contact Support */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
                </a>
                </Link>
=======


                </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                </a>
                </Link>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export default SupportPage;

},
<<<<<<< HEAD
;
export default SupportPage,;
;
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
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

},

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
