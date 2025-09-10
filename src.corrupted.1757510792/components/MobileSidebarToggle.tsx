<<<<<<< HEAD:src.corrupted.1757510792/components/MobileSidebarToggle.tsx

      newExpanded.delete(section) } else {;
      newExpanded.add(section) }
    setExpandedSections(newExpanded) };
  const navigationSections = [{;

      title: "Main",
      icon: Home,
      items[ ";
        { name: "Home", href: "/", icon: Home },";
        { name: "About Us", href: "/about", icon: Users },";
        { name: "Contact", href: "/contact", icon: MessageCircle },";
        { name: "Partners", href: "/partners", icon: Users },";
        { name: "Careers", href: "/careers", icon: Briefcase }
      ];
},
    {;
";
      title: "Services",
      icon: Zap,
      items[ ";
        { name: "AI & Machine Learning", href: "/ai-services", icon: Brain },";
        { name: "Micro SAAS Solutions", href: "/micro-saas", icon: Cloud },";
        { name: "IT Infrastructure", href: "/it-services", icon: Server },";
        { name: "Emerging Technologies", href: "/emerging-tech", icon: Rocket }
      ];
},
    {;
";
      title: "Solutions",
      icon: Target,
      items[ ";
        { name: "Quantum Computing", href: "/emerging-tech/quantum", icon: Rocket },";
        { name: "Blockchain & Web3", href: "/emerging-tech/blockchain", icon: Cloud },";
        { name: "Edge Computing", href: "/emerging-tech/edge", icon: Server },";
        { name: "IoT Solutions", href: "/emerging-tech/iot", icon: Brain }
      ];
},
    {;
";
      title: "Resources",
      icon: BookOpen,
      items[ ";
        { name: "Documentation", href: "/docs", icon: FileText },";
        { name: "API Reference", href: "/api", icon: FileText },";
        { name: "Developer Portal", href: "/developer", icon: Server },";
        { name: "Support Center", href: "/support", icon: HelpCircle };
      ]};
  ];
  const quickActions = [ ";
    { name: "Get Quote", href: "/contact", icon: MessageCircle, variant: "primary" },";
    { name: "Book Demo", href: "/demo", icon: Users, variant: "secondary" },"    { name: "Support", href: "/support", icon: HelpCircle, variant: "secondary" };
