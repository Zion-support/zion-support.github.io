import React, { useState, useEffect } from 'react';
export default Navigation;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  // Removed unused state variables;
  const [isScrolled, setIsScrolled] = useState(false);
 50);
    };
    window.addEventListener('scroll', handleScroll);
 window.removeEventListener('scroll', handleScroll);
  }, []);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };
    setIsMenuOpen(!isMenuOpen);
      closeAllMenus();
  };
    setIsServicesOpen(!isServicesOpen);
  };
<<<<<<< HEAD
=======

  const toggleAI = () => {
    setIsAIOpen(!isAIOpen);
    if (isAIOpen) {
      setIsITOpen(false);
      setIsSpecializedOpen(false);
    }
  };

  const toggleIT = () => {
    setIsITOpen(!isITOpen);
    if (isITOpen) {
      setIsAIOpen(false);
      setIsSpecializedOpen(false);
    }
  };

  const toggleSpecialized = () => {
    setIsSpecializedOpen(!isSpecializedOpen);
    if (isSpecializedOpen) {
      setIsAIOpen(false);
      setIsITOpen(false);
    }
  };

  const microSAASServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: BarChart },
    { name: 'AI Writing Assistant', href: '/ai-writing-assistant', icon: FileText },
    { name: 'AI CRM Intelligence', href: '/ai-crm', icon: Users },
    { name: 'AI Healthcare Assistant', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Fintech Analyzer', href: '/ai-fintech', icon: CreditCard },
    { name: 'AI Mobile App Builder', href: '/ai-mobile-app-development', icon: Smartphone },
    { name: 'AI Cybersecurity Shield', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Marketing Automation', href: '/ai-marketing', icon: Target },
    { name: 'AI Task Manager Pro', href: '/task-manager-pro', icon: Check },
    { name: 'AI Expense Tracker', href: '/expense-tracker', icon: Calculator },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Bot },
    { name: 'AI Data Analytics Pro', href: '/ai-data-analytics', icon: BarChart3 },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code },
    { name: 'AI Content Generator', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target },
    { name: 'AI Document Processor', href: '/ai-document-processing', icon: FileText },
    { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Search },
    { name: 'AI E-commerce Assistant', href: '/ai-ecommerce-solutions', icon: ShoppingCart },
    { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer', icon: Calculator },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation', icon: Video },
    { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning', icon: Music },
    { name: 'AI Music Composer', href: '/ai-music-composition', icon: Music },
    { name: 'AI Fashion Designer', href: '/ai-fashion-design', icon: Palette },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart },
    { name: 'AI 3D Generation Studio', href: '/ai-3d-generation', icon: Camera }
>>>>>>> 2e5e52a4eac9cfecef52ec8f7193a2474fdee36e
  ];
  ];
  ];
<<<<<<< HEAD
  // Removed specializedServices as it was unused;
=======

  const specializedServices = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Globe },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Robotics Solutions', href: '/robotics', icon: Settings },
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },
    { name: 'Analytics Tools', href: '/analytics-tools', icon: BarChart3 },
    { name: 'Business Apps', href: '/business-apps', icon: Briefcase },
    { name: 'Expense Tracker Pro', href: '/expense-tracker', icon: Calculator },
    { name: 'Task Manager Pro', href: '/task-manager-pro', icon: Check },
    { name: 'Smart Analytics', href: '/smart-analytics', icon: TrendingUp }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
>>>>>>> 2e5e52a4eac9cfecef52ec8f7193a2474fdee36e
          {/* Logo */}
            <span className = "text-xl font-bold text-white neon-text">Zion Tech Group</span>
          {/* Desktop Navigation */}
                <span>Services</span>;
                        Micro SAAS;
                            <span>{service.name}</span>
                        ))}
                        AI Services;
                            <span>{service.name}</span>
                        ))}
                        IT Services;
                            <span>{service.name}</span>
                        ))}
                        <span>View All Services</span>
                        <span>Specialized Solutions</span>
              )}
              About;
              Blog;
              Case Studies;
              Pricing;
              Contact;
                <span className = "hidden sm:inline">+1 302 464 0950</span>;
                Get Started;
          {/* Mobile Menu Button */}
            {isMenuOpen ? <X className="w-6 h-6" /&gt; : <Menu className="w-6 h-6" /&gt;}</X></X>
        {/* Mobile Menu */}
                  <span>Services</span>
                      <h4 className = "text-cyan-400 font-semibold mb-2">Micro SAAS</h4>
                            {service.name}
                        ))}
                      <h4 className="text-cyan-400 font-semibold mb-2">AI Services</h4>
                            {service.name}
                        ))}
                      View All Services →
                )};
                About;
                Blog;
                Case Studies;
                Pricing;
                Contact;
                  <span>+1 302 464 0950</span>
                  Get Started;
        )}
  );
};