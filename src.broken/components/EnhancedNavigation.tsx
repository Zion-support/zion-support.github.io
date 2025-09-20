import { Link, useLocation  } from 'react-router-dom';

export default function Page() {
,
  {
    label: 'AI & Machine Learning',
    href: '/ai - services',
    icon: <Brain className="w-4 h-4" />,
    children: [
      { label: 'AI Workflow Orchestrator', href: '/services / ai - workflow-orchestrator' },
      { label: 'AI Data Governance Platform', href: '/services / ai - data - governance - platform' },
      { label: 'AI Customer Experience Analytics', href: '/services / ai - customer - experience - analytics' },
      { label: 'AI Financial Risk Management', href: '/services / ai - financial - risk - management' },
      { label: 'AI Code Review Security Scanner', href: '/services / ai - code - review-security - scanner' },
      { label: 'AI Quantum Hybrid Platform', href: '/services / ai - quantum - hybrid - platform' },
      { label: 'AI Autonomous Supply Chain', href: '/services / ai - autonomous - supply - chain' },
      { label: 'AI Cybersecurity Threat Intelligence', href: '/services / ai - cybersecurity - threat - intelligence' },
      { label: 'AI Business Intelligence Analytics', href: '/services / ai - business - intelligence - analytics' },
      { label: 'AI Compliance Assistant', href: '/services / ai - compliance - assistant' },
      { label: 'AI Sales Copilot', href: '/services / ai - sales - copilot' },
      { label: 'AI - Powered SEO', href: '/services / ai - powered - seo' },
      { label: 'Interview Assessment AI', href: '/services / interview-assessment - ai' },
      { label: 'AI Content Marketing Suite', href: '/services / ai - content - marketing - suite' },
      { label: 'AI Customer Support Automation', href: '/services / ai - customer - support - automation' },
      { label: 'AI Project Management', href: '/services / ai - project - management' },
      { label: 'AI Financial Analytics', href: '/services / ai - financial - analytics' },
      { label: 'AI Marketing Automation', href: '/services / ai - marketing - automation' },
      { label: 'AI Legal Document Automation', href: '/services / ai - legal - document - automation' },
      { label: 'AI Healthcare Analytics', href: '/services / ai - healthcare - analytics' },
      { label: 'AI Financial Trading', href: '/services / ai - financial - trading' },
      { label: 'AI Content Creation Suite', href: '/services / ai - content - creation - suite' }
    ]
  },
  {
    label: 'Cloud & Infrastructure',
    href: '/it - services',
    icon: <Cloud className="w-4 h-4" />,
    children: [{ label: 'Cloud DevOps', href: '/services / cloud - devops' },
      { label: 'IT Infrastructure', href: '/services / it - infrastructure' },
      { label: 'FinOps Advisor', href: '/services / finops - advisor' },
      { label: 'Cloud FinOps Optimizer', href: '/services / cloud - finops - optimizer' },
      { label: 'IT Consulting', href: '/it - consulting' },
      { label: 'Enterprise Solutions', href: '/solutions / enterprise' },
      { label: 'Healthcare Solutions', href: '/solutions / healthcare' },
      { label: 'Digital Twin', href: '/services / digital - twin' },
      { label: 'Data Analytics', href: '/services / data - analytics' },
      { label: 'Digital Transformation', href: '/services / digital - transformation' }
    ]
  },
  {
    label: 'Cybersecurity & Privacy',
    href: '/services / cybersecurity',
    icon: <Shield className="w-4 h-4" />,
    children: [{ label: 'AI Cybersecurity Platform', href: '/services / ai - cybersecurity - platform' },
      { label: 'Security Headers & CSP', href: '/services / security - headers - csp' },
      { label: 'DSR Privacy Portal', href: '/services / dsr - portal' },
      { label: 'Zero Trust Network Access', href: '/services / zero - trust - network - access' },
      { label: 'AI Compliance Assistant', href: '/services / ai - compliance - assistant' }
    ]
  },
  {
    label: 'Emerging Technologies',
    href: '/emerging - tech',
    icon: <Atom className="w-4 h-4" />,
    children: [{ label: 'Quantum Computing', href: '/services / quantum - computing' },
      { label: 'IoT Edge Computing', href: '/services / iot - edge - computing' },
      { label: 'AI Quantum Hybrid Platform', href: '/services / ai - quantum - hybrid - platform' },
      { label: 'Space Technology', href: '/space - tech' },
      { label: 'Quantum Machine Learning', href: '/services / quantum - machine - learning' },
      { label: 'AI Predictive Maintenance', href: '/services / ai - predictive - maintenance' },
      { label: 'Sustainable Technology', href: '/services / sustainable - technology' }
    ]
  },
  {
    label: 'Micro SaaS Solutions',
    href: '/micro - saas',
    icon: <ShoppingCart className="w-4 h-4" />,
    children: [{ label: 'Micro CRM', href: '/services / micro - crm' },
      { label: 'Helpdesk Platform', href: '/services / helpdesk - platform' },
      { label: 'Website Analytics', href: '/services / website - analytics' },
      { label: 'IT Helpdesk', href: '/services / it - helpdesk' },
      { label: 'Affiliate Tracking', href: '/services / affiliate - tracking' },
      { label: 'Mobile Survey', href: '/services / mobile - survey' },
      { label: 'Podcast Transcription', href: '/services / podcast - transcription' },
      { label: 'Email Sequencer', href: '/services / email - sequencer' },
      { label: 'Returns Management', href: '/services / returns - management' },
      { label: 'LLM Content Studio', href: '/services / llm - content - studio' }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    icon: <Building className="w-4 h-4" />,
    children: [{ label: 'Enterprise Solutions', href: '/solutions / enterprise' },
      { label: 'Healthcare Solutions', href: '/solutions / healthcare' },
      { label: 'Manufacturing Solutions', href: '/manufacturing - solutions' },
      { label: 'Financial Solutions', href: '/financial - solutions' },
      { label: '5G Enterprise Solutions', href: '/5g - enterprise - solutions' },
      { label: 'Industry Solutions', href: '/industry - solutions' }
    ]
  },
  {
    label: 'Comp',
    href: '/about',
    icon: <Users className="w-4 h-4" />,
      { label: 'About Us', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Careers', href: '/careers' },
      { label: 'Partners', href: '/partners' },
      { label: 'News', href: '/news' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' }
    label: 'Resources',
    href: '/resources',
    icon: <BarChart3 className="w-4 h-4" />,
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 10) ;
    };

    window.addEventListener('scroll', handleScroll) ;
    return () => window.removeEventListener('scroll', handleScroll) ;
  }, []) ;

  useEffect(() => {
    setIsOpen(false) ;
    setActiveDropdown(null) ;
  }, [location]) ;

  const handleThemeChange = useCallback((newTheme: any'light' | 'dark' | 'system') => {;
    setTheme(newTheme) ;
    onThemeChange?.(newTheme) ;

    const root = document.documentElement;
    root.classList.remove('light', 'dark') ;

    if(newTheme = == 'system') {;
      const systemTheme = window.matchMedia(' (prefers - color - scheme: dark) ') .matches ? 'dark' : 'light';
      root.classList.add(systemTheme) ;
    } else {
      root.classList.add(newTheme) ;
    }

    localStorage.setItem('zion - theme', newTheme) ;
  }, [onThemeChange]) ;
  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (<nav className = {`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${isScrolled
        ? 'bg-white / 95 dark:bg-slate - 900 / 95 backdrop - blur - md shadow-lg'
        : 'bg-transparent'
    } ${className}`}>
      <div  className="max - w-7xl mx - auto px-4 sm:px-6 lg:px-8">
        <div  className="flex justify - between items - center h-16">
          {/* Logo */}
          <div  className="flex - shrink -0">
            <Link to="/" className="flex items - center space - x-2">
              <div  className="w-8 h-8 bg-gradient - to - r from - blue - 600 to - purple - 600 rounded-lg flex items - center justify -center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font - bold text-gray - 900 dark:text-white">
          {/* Right Side Actions */}
          <div  className="hidden lg:flex items - center space - x-4">
            {/* Theme Toggle */}
            <div  className="flex items - center space - x-2 bg-gray - 100 dark:bg-slate - 800 rounded-lg p -1">
              <button     onClick={ () => handleThemeChange('light') }
                className={`p - 2 rounded-md transition - colors ${theme === 'light'
                    ? 'bg-white dark:bg-slate - 700 text-blue - 600 shadow-sm'
                    : 'text-gray - 500 dark:text-gray - 400 hover:text-gray - 700 dark:hover:text-gray - 300'
                }`}
              >
                <Sun className="w-4 h-4" />
              </button>
              <button     onClick={ () => handleThemeChange('dark') }
                className={`p - 2 rounded-md transition - colors ${theme === 'dark'
                    ? 'bg-white dark:bg-slate - 700 text-blue - 600 shadow-sm'
                    : 'text-gray - 500 dark:text-gray - 400 hover:text-gray - 700 dark:hover:text-gray - 300'
                }`}
              >
                <Moon className="w-4 h-4" />
              </button>
              <button     onClick={ () => handleThemeChange('system') }
                className={`p - 2 rounded-md transition - colors ${theme === 'system'
                    ? 'bg-white dark:bg-slate - 700 text-blue - 600 shadow-sm'
                    : 'text-gray - 500 dark:text-gray - 400 hover:text-gray - 700 dark:hover:text-gray - 300'
                                </div>
                                <ChevronDown className={`w-5 h-5 transition - transform duration - 200 ${activeDropdown === item.label ? 'rotate - 180' : ''
                                }`} />
                              </button>

