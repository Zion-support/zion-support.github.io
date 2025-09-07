<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Menu
  X
  ChevronDown
  ChevronRight
  Phone
  Mail
  MapPin
  Globe
  ArrowRight
  Sparkles
  Brain
  Atom
  Shield
  DollarSign
  FileText
  BarChart3
  MessageSquare
  Truck
  Users
  Database
  Cpu
  Cloud
  Play
  Search
  ShieldCheck
  TrendingUp
  Rocket
  Zap
  Check
  Star
  Clock
  Target
  Building
  Award
  ChartBar
  Lock
  Smartphone
  Palette
  Calendar
  CreditCard
  Settings
  Code
  BookOpen
  Activity
  Bot
  ChevronRight as ChevronRightIcon
  Eye
  FlaskConical
  Link as LinkIcon;
import Button from '../ui/Button';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Sparkles,
  Brain,
  Atom,
  Shield,
  DollarSign,
  FileText,
  BarChart3,
  MessageSquare,
  Truck,
  Users,
  Database,
  Cpu,
  Cloud,
  Play,
  Search,
  ShieldCheck,
  TrendingUp,
  Rocket,
  Zap,
  Check,
  Star,
  Clock,
  Target,
  Building,
  Award,
  ChartBar,
  Lock,
  Smartphone,
  Palette,
  Calendar,
  CreditCard,
  Settings,
  Code,
  BookOpen,
  Activity,
  Bot,
  ChevronRight as ChevronRightIcon,
  Eye,
  FlaskConical,;
  Link as LinkIcon,;
import Button from '../ui/Button';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React, { useState, useEffect } from 'react','
import Link from 'next/link';'
import { useRouter } from 'next/router';'

import { Menu;
	}
	X;
	ChevronDown;
	ChevronRight;
	Phone;
	Mail;
	MapPin;
	Globe;
	ArrowRight;
	Sparkles;
	Brain;
	Atom;
	Shield;
	DollarSign;
	FileText;
	BarChart3;
	MessageSquare;
	Truck;
	Users;
	Database;
	Cpu;
	Cloud;
	Play;
	Search;
	ShieldCheck;
	TrendingUp;
	Rocket;
	Zap;
	Check;
	Star;
	Clock;
	Target;
	Building;
	Award;
	ChartBar;
	Lock;
	Smartphone;
	Palette;
	Calendar;
	CreditCard;
	Settings;
	Code;
	BookOpen;
	Activity;
	Bot;
	ChevronRight as ChevronRightIcon;
	Eye;
	FlaskConical;
	Link as LinkIcon;
  } from 'lucide-react';'
import Button from '../ui/Button';'

export default function NeoFuturisticNavigation() {const [isOpen, setIsOpen] = useState(false);
  }
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),const router = null;
	return (<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-700/50' : 'bg-transparent';'		}`}>`
			{/* Scroll Progress Bar */}
			<div className="absolute top-0 left-0 h-1 w-full bg-transparent">;"
				<div;
					className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600";"
					style={{ "width": `${(typeof window !== 'undefined' && document.body.scrollHeight > 0) ? (Math.min(100, (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)) : 0}%` }}`				/>;
			</div>;
			<div className="max-w-7xl mx-auto px-4">;"
				<div className="flex items-center justify-between h-20">;"
					{/* Logo */}

					<Link href="/" className="flex items-center space-x-3 group">"
						<div className="relative">"
							<div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-"hover":scale-110 transition-transform duration-300">"
								<Sparkles className="w-6 h-6 text-white" />"
							</div>
							<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-"hover":opacity-75 transition-opacity duration-300"></div>"
						</div>
						<div className="hidden "sm":block">"
							<div className="text-xl font-bold text-white group-"hover":text-cyan-400 transition-colors duration-300">"
								Zion Tech Group
							</div>
							<div className="text-xs text-gray-400">Revolutionary Technology</div>"
						</div>
					</Link>


import {
  }
  Menu,
X
  ChevronDown,
ChevronRight
  Phone,
Mail
  MapPin,
Globe
  ArrowRight,
Sparkles
  Brain,
Atom
  Shield,
DollarSign
  FileText,
BarChart3
  MessageSquare,
Truck
  Users,
Database
  Cpu,
Cloud
  Play,
Search
  ShieldCheck,
TrendingUp
  Rocket,
Zap
  Check,
Star
  Clock,
Target
  Building,
Award
  ChartBar,
Lock
  Smartphone,
Palette
  Calendar,
CreditCard
  Settings,
Code
  BookOpen,
Activity
  Bot,
ChevronRight as ChevronRightIcon,
Eye
  FlaskConical,
Link as LinkIcon;
  Menu,X,ChevronDown,ChevronRight,Phone,Mail,MapPin,Globe,ArrowRight,Sparkles,Brain,Atom,Shield,DollarSign,FileText,BarChart3,MessageSquare,Truck,Users,Database,Cpu,Cloud,Play,Search,ShieldCheck,TrendingUp,Rocket,Zap,Check,Star,Clock,Target,Building,Award,ChartBar,Lock,Smartphone,Palette,Calendar,CreditCard,Settings,Code,BookOpen,Activity,Bot,ChevronRight as ChevronRightIcon,Eye,FlaskConical,Link as LinkIcon,export default function NeoFuturisticNavigation() {export default function NeoFuturisticNavigation() {const [isOpen, setIsOpen] = useState(false);
  }
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)const router = useRouter(;
const serviceCategories = [;
  {"name": 'Quantum Computing';'
      }
      "description": 'Revolutionary quantum computing solutions';'
      "icon": <Atom className='w-5 h-5' />;'
      "color": 'from-purple-500 to-pink-500';'
      "services": [;
        {"name": 'Quantum AI Platform';'
          }
          "description": 'AI-powered quantum computing';'
          "price": '$299/month';'
        }
        {"name": 'Quantum Optimization';'
          }
          "description": 'Quantum algorithms for complex problems';'
          "price": '$199/month';'
        }
        {"name": 'Quantum Simulation';'
          }
          "description": 'Advanced quantum simulations';'
          "price": '$399/month';'
        }
        {'
          name: 'Quantum Optimization''
          description: 'Quantum algorithms for complex problems''
          price: '$199/month'
        }
        {'
          name: 'Quantum Simulation''
          description: 'Advanced quantum simulations''
          price: '$399/month'
        }
      ]
    }
    {"name": 'AI & Machine Learning';'
      }
      "description": 'Advanced artificial intelligence and ML platforms';'
      "icon": <Brain className='w-5 h-5' />;'
      "color": 'from-blue-500 to-cyan-500';'
      "services": [;
        {"name": 'AI Content Generator';'
          }
          "description": 'Professional AI content creation';'
          "price": '$49/month';'
        }
        {"name": 'AI Analytics Platform';'
          }
          "description": 'Advanced business intelligence';'
          "price": '$99/month';'
        }
        {"name": 'AI Automation Suite';'
          }
          "description": 'Complete business automation';'
          "price": '$149/month';'
        }
        {'
          name: 'AI Analytics Platform''
          description: 'Advanced business intelligence''
          price: '$99/month'
        }
        {'
          name: 'AI Automation Suite''
          description: 'Complete business automation''
          price: '$149/month'
        }
      ]
    }
    {"name": 'Cybersecurity';'
      }
      "description": 'Next-generation security solutions';'
      "icon": <Shield className='w-5 h-5' />;'
      "color": 'from-red-500 to-orange-500';'
      "services": [;
        {"name": 'Quantum Cybersecurity';'
          }
          "description": 'Post-quantum era security';'
          "price": '$159/month';'
        }
        {"name": 'AI Threat Detection';'
          }
          "description": 'Intelligent security monitoring';'
          "price": '$89/month';'
        }
        {"name": 'Zero-Trust Platform';'
          }
          "description": 'Advanced access control';'
          "price": '$129/month';'
        }
        {'
          name: 'AI Threat Detection''
          description: 'Intelligent security monitoring''
          price: '$89/month'
        }
        {'
          name: 'Zero-Trust Platform''
          description: 'Advanced access control''
          price: '$129/month'
        }
      ]
    }
    {"name": 'Blockchain & Web3';'
      }
      "description": 'Future-proof blockchain and decentralized solutions';'
      "icon": <LinkIcon className='w-5 h-5' />;'
      "color": 'from-indigo-500 to-purple-500';'
      "services": [;
        {"name": 'Quantum Blockchain';'
          }
          "description": 'Post-quantum blockchain platform';'
          "price": '$349/month';'
        }
        {"name": 'DeFi Protocol Suite';'
          }
          "description": 'Complete DeFi solutions';'
          "price": '$199/month';'
        }
        {"name": 'NFT Marketplace';'
          }
          "description": 'AI-curated NFT platform';'
          "price": '$99/month';'
        }
        {'
          name: 'DeFi Protocol Suite''
          description: 'Complete DeFi solutions''
          price: '$199/month'
        }
        {'
          name: 'NFT Marketplace''
          description: 'AI-curated NFT platform''
          price: '$99/month'
        }
      ]
    }
    {"name": 'IoT & Smart Cities';'
      }
      "description": 'Connected devices and intelligent infrastructure';'
      "icon": <Globe className='w-5 h-5' />;'
      "color": 'from-teal-500 to-green-500';'
      "services": [;
        {"name": 'Quantum IoT Platform';'
          }
          "description": 'Quantum-secured IoT solutions';'
          "price": '$199/month';'
        }
        {"name": 'Smart City Suite';'
          }
          "description": 'Complete urban intelligence';'
          "price": '$299/month';'
        }
        {"name": 'Industrial IoT';'
          }
          "description": 'Manufacturing automation';'
          "price": '$249/month';'
        }
        {'
          name: 'Smart City Suite''
          description: 'Complete urban intelligence''
          price: '$299/month'
        }
        {'
          name: 'Industrial IoT''
          description: 'Manufacturing automation''
          price: '$249/month'
        }
      ]
    }
    {"name": 'Metaverse & VR/AR';'
      }
      "description": 'Immersive digital experiences and virtual worlds';'
      "icon": <Eye className='w-5 h-5' />;'
      "color": 'from-pink-500 to-rose-500';'
      "services": [;
        {"name": 'Quantum Metaverse';'
          }
          "description": 'Quantum-enhanced virtual reality';'
          "price": '$499/month';'
        }
        {"name": 'VR Development';'
          }
          "description": 'Complete VR platform';'
          "price": '$299/month';'
        }
        {"name": 'AR Solutions';'
          }
          "description": 'Augmented reality platform';'
          "price": '$199/month';'
        }
        {'
          name: 'VR Development''
          description: 'Complete VR platform''
          price: '$299/month'
        }
        {'
          name: 'AR Solutions''
          description: 'Augmented reality platform''
          price: '$199/month'
        }
      ]
    }
    {"name": 'Robotics & Automation';'
      }
      "description": 'Intelligent automation and robotic systems';'
      "icon": <Cpu className='w-5 h-5' />;'
      "color": 'from-orange-500 to-red-500';'
      "services": [;
        {"name": 'Quantum Robotics';'
          }
          "description": 'AI-powered robotics platform';'
          "price": '$799/month';'
        }
        {"name": 'Manufacturing AI';'
          }
          "description": 'Autonomous manufacturing';'
          "price": '$199/month';'
        }
        {"name": 'Service Robotics';'
          }
          "description": 'Intelligent service automation';'
          "price": '$349/month';'
        }
        {'
          name: 'Manufacturing AI''
          description: 'Autonomous manufacturing''
          price: '$199/month'
        }
        {'
          name: 'Service Robotics''
          description: 'Intelligent service automation''
          price: '$349/month'
        }
      ]
    }
    {"name": 'Energy & Sustainability';'
      }
      "description": 'Green technology and energy optimization';'
      "icon": <Zap className='w-5 h-5' />;'
      "color": 'from-yellow-500 to-orange-500';'
      "services": [;
        {"name": 'Quantum Energy';'
          }
          "description": 'AI-optimized energy management';'
          "price": '$299/month';'
        }
        {"name": 'Smart Grid';'
          }
          "description": 'Intelligent energy distribution';'
          "price": '$199/month';'
        }
        {"name": 'Sustainability AI';'
          }
          "description": 'Environmental impact optimization';'
          "price": '$149/month';'
        }
        {'
          name: 'Smart Grid''
          description: 'Intelligent energy distribution''
          price: '$199/month'
        }
        {'
          name: 'Sustainability AI''
          description: 'Environmental impact optimization''
          price: '$149/month'
        }
      ]
    }
    {"name": 'Financial Technology';'
      }
      "description": 'Innovative fintech and trading solutions';'
      "icon": <DollarSign className='w-5 h-5' />;'
      "color": 'from-violet-500 to-purple-500';'
      "services": [;
        {"name": 'Quantum Trading';'
          }
          "description": 'Quantum-enhanced algorithmic trading';'
          "price": '$899/month';'
        }
        {"name": 'AI Risk Management';'
          }
          "description": 'Intelligent financial risk analysis';'
          "price": '$399/month';'
        }
        {"name": 'Blockchain Finance';'
          }
          "description": 'DeFi and blockchain solutions';'
          "price": '$199/month';'
        }
        {'
          name: 'AI Risk Management''
          description: 'Intelligent financial risk analysis''
          price: '$399/month'
        }
        {'
          name: 'Blockchain Finance''
          description: 'DeFi and blockchain solutions''
          price: '$199/month'
        }
      ]
    }
    {"name": 'Biotechnology & Healthcare';'
      }
      "description": 'AI-powered healthcare and biotech solutions';'
      "icon": <FlaskConical className='w-5 h-5' />;'
      "color": 'from-emerald-500 to-teal-500';'
      "services": [;
        {"name": 'Biotech AI';'
          }
          "description": 'AI-powered drug discovery';'
          "price": '$599/month';'
        }
        {"name": 'Healthcare Analytics';'
          }
          "description": 'Medical data intelligence';'
          "price": '$299/month';'
        }
        {"name": 'Genomic AI';'
          }
          "description": 'Advanced genetic analysis';'
          "price": '$399/month';'
        }
        {'
          name: 'Healthcare Analytics''
          description: 'Medical data intelligence''
          price: '$299/month'
        }
        {'
          name: 'Genomic AI''
          description: 'Advanced genetic analysis''
          price: '$399/month'
        }
      ]
    }
  ];

const companyInfo = [;
  {"name": 'About Zion Tech Group';'
      }
      "description": 'Leading the global micro SaaS revolution';'
      "icon": <Rocket className='w-5 h-5' />;'
      "link": '/about';'
    }
    {"name": 'Careers';'
      }
      "description": 'Join our revolutionary team';'
      "icon": <Star className='w-5 h-5' />;'
      "link": '/careers';'
    }
    {"name": 'News & Updates';'
      }
      "description": 'Latest announcements and releases';'
      "icon": <TrendingUp className='w-5 h-5' />;'
      "link": '/news';'
    }
    {"name": 'Contact';'
      }
      "description": 'Talk to our team 24/7';'
      "icon": <Phone className='w-5 h-5' />;'
      "link": '/contact';'
    }
  ];

const resources = [;
  {"name": 'Documentation';'
      }
      "description": 'Comprehensive service guides';'
      "icon": <BookOpen className='w-5 h-5' />;'
      "link": '/docs';'
    }
    {"name": 'Blog & Insights';'
      }
      "description": 'Latest technology trends';'
      "icon": <FileText className='w-5 h-5' />;'
      "link": '/blog';'
    }
    {"name": 'Case Studies';'
      }
      "description": 'Real-world success stories';'
      "icon": <BarChart3 className='w-5 h-5' />;'
      "link": '/case-studies';'
    }
    {"name": 'Pricing';'
      }
      "description": 'Transparent and flexible plans';'
      "icon": <CreditCard className='w-5 h-5' />;'
      "link": '/pricing';'
    }
    {"name": 'Reports';'
      }
      "description": 'Live performance and audits';'
      "icon": <Activity className='w-5 h-5' />;'
      "link": '/reports';'
    }
  ];
  // Popular quick links to flagship services;

const popularServiceLinks = [;
  { "name": 'AI Content Generator', "href": '/ai-content-generator','
}
    { "name": 'AI Blockchain Analytics', "href": '/ai-blockchain-analytics','
}
    { "name": 'AI Legal Contract Analyzer', "href": '/ai-legal-contract-analyzer','
}
    { "name": 'AI HR Recruitment', "href": '/ai-hr-recruitment','
}
    { "name": 'AI Video Editing', "href": '/ai-video-editing','
}
    { "name": 'AI SEO Optimization', "href": '/ai-seo-optimization','
}
    { "name": 'AI IoT Platform', "href": '/ai-iot-platform','
}
    { "name": 'AI Sales Automation', "href": '/ai-sales-automation','
}
    { "name": 'AI Market Research', "href": '/ai-market-research','
}
  ];
  // Newly added real services quick links;

const newServiceLinks = [;
  {"name": 'Email Deliverability Monitor';'
      }
      "href": '/services/email-deliverability-monitor';'
    }
    {"name": 'Landing Page Experimentation';'
      }
      "href": '/services/landing-page-experimentation';'
    }
    {"name": 'Invoice Reconciliation Automation';'
      }
      "href": '/services/invoice-reconciliation-automation';'
    }
    {"name": 'GitHub Ops Health Dashboard';'
      }
      "href": '/services/github-ops-health-dashboard';'
    }
    {"name": 'Error Budget Automation';'
      }
      "href": '/services/error-budget-automation';'
    }
    { "name": 'LLM Usage Governance', "href": '/services/llm-usage-governance','
}
  ]>

<<<<<<< HEAD
=======

const contactInfo = {"mobile": '+1 302 464 0950',"email": 'kleber@ziontechgroup && ziontechgroup.com',"address": '364 E Main St STE 1008 Middletown DE 19709',"website": '"https"://ziontechgroup && ziontechgroup.com',;'
  }
  useEffect(() => {
}
const handleScroll = () => {setIsScrolled(window && window.scrollY > 20)}window && window.addEventListener('scroll', handleScroll;'
  return () => window && window.removeEventListener('scroll', handleScroll)}, [])const toggleDropdown = ("dropdown": string) => {setActiveDropdown(activeDropdown === dropdown ? null : dropdown;'
}

const closeMobileMenu = (setIsOpen(false)setActiveDropdown(null)) => {
  return $3;}
}
;
  const isActive  = ("path": string) => router && router.pathname === path;

const serviceCategories = [;
  {"name": 'Quantum Computing',,"description": 'Revolutionary quantum computing solutions',"icon": <Atom className='w-5 h-5' />,"color": 'from-purple-500 to-pink-500',"services": [;'
        {"name": 'Quantum AI Platform',,"description": 'AI-powered quantum computing',"price": '$299/month'},{"name": 'Quantum Optimization',,"description": 'Quantum algorithms for complex problems',"price": '$199/month'},{"name": 'Quantum Simulation',,"description": 'Advanced quantum simulations',"price": '$399/month'}]},{"name": 'AI & Machine Learning',,"description": 'Advanced artificial intelligence and ML platforms',"icon": <Brain className='w-5 h-5' />,"color": 'from-blue-500 to-cyan-500',"services": [;'
        {"name": 'AI Content Generator',,"description": 'Professional AI content creation',"price": '$49/month'},{"name": 'AI Analytics Platform',,"description": 'Advanced business intelligence',"price": '$99/month'},{"name": 'AI Automation Suite',,"description": 'Complete business automation',"price": '$149/month'}]},{"name": 'Cybersecurity',,"description": 'Next-generation security solutions',"icon": <Shield className='w-5 h-5' />,"color": 'from-red-500 to-orange-500',"services": [;'
        {"name": 'Quantum Cybersecurity',,"description": 'Post-quantum era security',"price": '$159/month'},{"name": 'AI Threat Detection',,"description": 'Intelligent security monitoring',"price": '$89/month'},{"name": 'Zero-Trust Platform',,"description": 'Advanced access control',"price": '$129/month'}]},{"name": 'Blockchain & Web3',,"description": 'Future-proof blockchain and decentralized solutions',"icon": <LinkIcon className='w-5 h-5' />,"color": 'from-indigo-500 to-purple-500',"services": [;'
        {"name": 'Quantum Blockchain',,"description": 'Post-quantum blockchain platform',"price": '$349/month'},{"name": 'DeFi Protocol Suite',,"description": 'Complete DeFi solutions',"price": '$199/month'},{"name": 'NFT Marketplace',,"description": 'AI-curated NFT platform',"price": '$99/month'}]},{"name": 'IoT & Smart Cities',,"description": 'Connected devices and intelligent infrastructure',"icon": <Globe className='w-5 h-5' />,"color": 'from-teal-500 to-green-500',"services": [;'
        {"name": 'Quantum IoT Platform',,"description": 'Quantum-secured IoT solutions',"price": '$199/month'},{"name": 'Smart City Suite',,"description": 'Complete urban intelligence',"price": '$299/month'},{"name": 'Industrial IoT',,"description": 'Manufacturing automation',"price": '$249/month'}]},{"name": 'Metaverse & VR/AR',,"description": 'Immersive digital experiences and virtual worlds',"icon": <Eye className='w-5 h-5' />,"color": 'from-pink-500 to-rose-500',"services": [;'
        {"name": 'Quantum Metaverse',,"description": 'Quantum-enhanced virtual reality',"price": '$499/month'},{"name": 'VR Development',,"description": 'Complete VR platform',"price": '$299/month'},{"name": 'AR Solutions',,"description": 'Augmented reality platform',"price": '$199/month'}]},{"name": 'Robotics & Automation',,"description": 'Intelligent automation and robotic systems',"icon": <Cpu className='w-5 h-5' />,"color": 'from-orange-500 to-red-500',"services": [;'
        {"name": 'Quantum Robotics',,"description": 'AI-powered robotics platform',"price": '$799/month'},{"name": 'Manufacturing AI',,"description": 'Autonomous manufacturing',"price": '$199/month'},{"name": 'Service Robotics',,"description": 'Intelligent service automation',"price": '$349/month'}]},{"name": 'Energy & Sustainability',,"description": 'Green technology and energy optimization',"icon": <Zap className='w-5 h-5' />,"color": 'from-yellow-500 to-orange-500',"services": [;'
        {"name": 'Quantum Energy',,"description": 'AI-optimized energy management',"price": '$299/month'},{"name": 'Smart Grid',,"description": 'Intelligent energy distribution',"price": '$199/month'},{"name": 'Sustainability AI',,"description": 'Environmental impact optimization',"price": '$149/month'}]},{"name": 'Financial Technology',,"description": 'Innovative fintech and trading solutions',"icon": <DollarSign className='w-5 h-5' />,"color": 'from-violet-500 to-purple-500',"services": [;'
        {"name": 'Quantum Trading',,"description": 'Quantum-enhanced algorithmic trading',"price": '$899/month'},{"name": 'AI Risk Management',,"description": 'Intelligent financial risk analysis',"price": '$399/month'},{"name": 'Blockchain Finance',,"description": 'DeFi and blockchain solutions',"price": '$199/month'}]},{"name": 'Biotechnology & Healthcare',,"description": 'AI-powered healthcare and biotech solutions',"icon": <FlaskConical className='w-5 h-5' />,"color": 'from-emerald-500 to-teal-500',"services": [;'
        {"name": 'Biotech AI',,"description": 'AI-powered drug discovery',"price": '$599/month'},{"name": 'Healthcare Analytics',,"description": 'Medical data intelligence',"price": '$299/month'},{"name": 'Genomic AI',,"description": 'Advanced genetic analysis',"price": '$399/month'}]}];'

const companyInfo = [;
  {"name": 'About Zion Tech Group',,"description": 'Leading the global micro SaaS revolution',"icon": <Rocket className='w-5 h-5' />,"link": '/about'},{"name": 'Careers',,"description": 'Join our revolutionary team',"icon": <Star className='w-5 h-5' />,"link": '/careers'},{"name": 'News & Updates',,"description": 'Latest announcements and releases',"icon": <TrendingUp className='w-5 h-5' />,"link": '/news'},{"name": 'Contact',,"description": 'Talk to our team 24/7',"icon": <Phone className='w-5 h-5' />,"link": '/contact'}];'

const resources = [;
  {"name": 'Documentation',,"description": 'Comprehensive service guides',"icon": <BookOpen className='w-5 h-5' />,"link": '/docs'},{"name": 'Blog & Insights',,"description": 'Latest technology trends',"icon": <FileText className='w-5 h-5' />,"link": '/blog'},{"name": 'Case Studies',,"description": 'Real-world success stories',"icon": <BarChart3 className='w-5 h-5' />,"link": '/case-studies'},{"name": 'Pricing',,"description": 'Transparent and flexible plans',"icon": <CreditCard className='w-5 h-5' />,"link": '/pricing'},{"name": 'Reports',,"description": 'Live performance and audits',"icon": <Activity className='w-5 h-5' />,"link": '/reports'}];// Popular quick links to flagship services;'

const popularServiceLinks = [;
    { "name": 'AI Content Generator', "href": '/ai-content-generator','
},
  { "name": 'AI Blockchain Analytics', "href": '/ai-blockchain-analytics','
},
  { "name": 'AI Legal Contract Analyzer', "href": '/ai-legal-contract-analyzer','
},
  { "name": 'AI HR Recruitment', "href": '/ai-hr-recruitment','
},
  { "name": 'AI Video Editing', "href": '/ai-video-editing','
},
  { "name": 'AI SEO Optimization', "href": '/ai-seo-optimization','
},
  { "name": 'AI IoT Platform', "href": '/ai-iot-platform','
},
  { "name": 'AI Sales Automation', "href": '/ai-sales-automation','
},
  { "name": 'AI Market Research', "href": '/ai-market-research','
}
];// Newly added real services quick links;

const newServiceLinks = [;
  {"name": 'Email Deliverability Monitor',"href": '/services/email-deliverability-monitor'},{"name": 'Landing Page Experimentation',"href": '/services/landing-page-experimentation'},{"name": 'Invoice Reconciliation Automation',"href": '/services/invoice-reconciliation-automation'},{"name": 'GitHub Ops Health Dashboard',"href": '/services/github-ops-health-dashboard'},{"name": 'Error Budget Automation',"href": '/services/error-budget-automation'},  { "name": 'LLM Usage Governance', "href": '/services/llm-usage-governance','
}
]>

      {/* Scroll Progress Bar */}
      <div className='absolute top-0 left-0 h-1 w-full bg-transparent'>;'
        <div;
          className='h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600';'
          style={{}} />;
      </div>;
      <div className='max-w-7xl mx-auto px-4'>;'
        <div className='flex items-center justify-between h-20'>;'

  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',
};

  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 20)
};

    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {;
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
};

  const closeMobileMenu = () => {;
    setIsOpen(false);
    setActiveDropdown(null)
};

  const isActive = (path: string) => router && router.pathname === path;

  const serviceCategories = [;
    {;
      name: 'Quantum Computing',,
  description: 'Revolutionary quantum computing solutions',;
      icon: <Atom className='w-5 h-5' />,;
      color: 'from-purple-500 to-pink-500',;
      services: [;
        {;
          name: 'Quantum AI Platform',,
  description: 'AI-powered quantum computing',;
          price: '$299/month',;
        },;
        {;
          name: 'Quantum Optimization',,
  description: 'Quantum algorithms for complex problems',;
          price: '$199/month',;
        },;
        {;
          name: 'Quantum Simulation',,
  description: 'Advanced quantum simulations',;
          price: '$399/month',;
        },;
      ],;
    },;
    {;
      name: 'AI & Machine Learning',,
  description: 'Advanced artificial intelligence and ML platforms',;
      icon: <Brain className='w-5 h-5' />,;
      color: 'from-blue-500 to-cyan-500',;
      services: [;
        {;
          name: 'AI Content Generator',,
  description: 'Professional AI content creation',;
          price: '$49/month',;
        },;
        {;
          name: 'AI Analytics Platform',,
  description: 'Advanced business intelligence',;
          price: '$99/month',;
        },;
        {;
          name: 'AI Automation Suite',,
  description: 'Complete business automation',;
          price: '$149/month',;
        },;
      ],;
    },;
    {;
      name: 'Cybersecurity',,
  description: 'Next-generation security solutions',;
      icon: <Shield className='w-5 h-5' />,;
      color: 'from-red-500 to-orange-500',;
      services: [;
        {;
          name: 'Quantum Cybersecurity',,
  description: 'Post-quantum era security',;
          price: '$159/month',;
        },;
        {;
          name: 'AI Threat Detection',,
  description: 'Intelligent security monitoring',;
          price: '$89/month',;
        },;
        {;
          name: 'Zero-Trust Platform',,
  description: 'Advanced access control',;
          price: '$129/month',;
        },;
      ],;
    },;
    {;
      name: 'Blockchain & Web3',,
  description: 'Future-proof blockchain and decentralized solutions',;
      icon: <LinkIcon className='w-5 h-5' />,;
      color: 'from-indigo-500 to-purple-500',;
      services: [;
        {;
          name: 'Quantum Blockchain',,
  description: 'Post-quantum blockchain platform',;
          price: '$349/month',;
        },;
        {;
          name: 'DeFi Protocol Suite',,
  description: 'Complete DeFi solutions',;
          price: '$199/month',;
        },;
        {;
          name: 'NFT Marketplace',,
  description: 'AI-curated NFT platform',;
          price: '$99/month',;
        },;
      ],;
    },;
    {;
      name: 'IoT & Smart Cities',,
  description: 'Connected devices and intelligent infrastructure',;
      icon: <Globe className='w-5 h-5' />,;
      color: 'from-teal-500 to-green-500',;
      services: [;
        {;
          name: 'Quantum IoT Platform',,
  description: 'Quantum-secured IoT solutions',;
          price: '$199/month',;
        },;
        {;
          name: 'Smart City Suite',,
  description: 'Complete urban intelligence',;
          price: '$299/month',;
        },;
        {;
          name: 'Industrial IoT',,
  description: 'Manufacturing automation',;
          price: '$249/month',;
        },;
      ],;
    },;
    {;
      name: 'Metaverse & VR/AR',,
  description: 'Immersive digital experiences and virtual worlds',;
      icon: <Eye className='w-5 h-5' />,;
      color: 'from-pink-500 to-rose-500',;
      services: [;
        {;
          name: 'Quantum Metaverse',,
  description: 'Quantum-enhanced virtual reality',;
          price: '$499/month',;
        },;
        {;
          name: 'VR Development',,
  description: 'Complete VR platform',;
          price: '$299/month',;
        },;
        {;
          name: 'AR Solutions',,
  description: 'Augmented reality platform',;
          price: '$199/month',;
        },;
      ],;
    },;
    {;
      name: 'Robotics & Automation',,
  description: 'Intelligent automation and robotic systems',;
      icon: <Cpu className='w-5 h-5' />,;
      color: 'from-orange-500 to-red-500',;
      services: [;
        {;
          name: 'Quantum Robotics',,
  description: 'AI-powered robotics platform',;
          price: '$799/month',;
        },;
        {;
          name: 'Manufacturing AI',,
  description: 'Autonomous manufacturing',;
          price: '$199/month',;
        },;
        {;
          name: 'Service Robotics',,
  description: 'Intelligent service automation',;
          price: '$349/month',;
        },;
      ],;
    },;
    {;
      name: 'Energy & Sustainability',,
  description: 'Green technology and energy optimization',;
      icon: <Zap className='w-5 h-5' />,;
      color: 'from-yellow-500 to-orange-500',;
      services: [;
        {;
          name: 'Quantum Energy',,
  description: 'AI-optimized energy management',;
          price: '$299/month',;
        },;
        {;
          name: 'Smart Grid',,
  description: 'Intelligent energy distribution',;
          price: '$199/month',;
        },;
        {;
          name: 'Sustainability AI',,
  description: 'Environmental impact optimization',;
          price: '$149/month',;
        },;
      ],;
    },;
    {;
      name: 'Financial Technology',,
  description: 'Innovative fintech and trading solutions',;
      icon: <DollarSign className='w-5 h-5' />,;
      color: 'from-violet-500 to-purple-500',;
      services: [;
        {;
          name: 'Quantum Trading',,
  description: 'Quantum-enhanced algorithmic trading',;
          price: '$899/month',;
        },;
        {;
          name: 'AI Risk Management',,
  description: 'Intelligent financial risk analysis',;
          price: '$399/month',;
        },;
        {;
          name: 'Blockchain Finance',,
  description: 'DeFi and blockchain solutions',;
          price: '$199/month',;
        },;
      ],;
    },;
    {;
      name: 'Biotechnology & Healthcare',,
  description: 'AI-powered healthcare and biotech solutions',;
      icon: <FlaskConical className='w-5 h-5' />,;
      color: 'from-emerald-500 to-teal-500',;
      services: [;
        {;
          name: 'Biotech AI',,
  description: 'AI-powered drug discovery',;
          price: '$599/month',;
        },;
        {;
          name: 'Healthcare Analytics',,
  description: 'Medical data intelligence',;
          price: '$299/month',;
        },;
        {;
          name: 'Genomic AI',,
  description: 'Advanced genetic analysis',;
          price: '$399/month',;
        },;
      ],;
    },;
  ];

  const companyInfo = [;
    {;
      name: 'About Zion Tech Group',,
  description: 'Leading the global micro SaaS revolution',;
      icon: <Rocket className='w-5 h-5' />,;
      link: '/about',;
    },;
    {;
      name: 'Careers',,
  description: 'Join our revolutionary team',;
      icon: <Star className='w-5 h-5' />,;
      link: '/careers',;
    },;
    {;
      name: 'News & Updates',,
  description: 'Latest announcements and releases',;
      icon: <TrendingUp className='w-5 h-5' />,;
      link: '/news',;
    },;
    {;
      name: 'Contact',,
  description: 'Talk to our team 24/7',;
      icon: <Phone className='w-5 h-5' />,;
      link: '/contact',;
    },;
  ];

  const resources = [;
    {;
      name: 'Documentation',,
  description: 'Comprehensive service guides',;
      icon: <BookOpen className='w-5 h-5' />,;
      link: '/docs',;
    },;
    {;
      name: 'Blog & Insights',,
  description: 'Latest technology trends',;
      icon: <FileText className='w-5 h-5' />,;
      link: '/blog',;
    },;
    {;
      name: 'Case Studies',,
  description: 'Real-world success stories',;
      icon: <BarChart3 className='w-5 h-5' />,;
      link: '/case-studies',;
    },;
    {;
      name: 'Pricing',,
  description: 'Transparent and flexible plans',;
      icon: <CreditCard className='w-5 h-5' />,;
      link: '/pricing',;
    },;
    {;
      name: 'Reports',,
  description: 'Live performance and audits',;
      icon: <Activity className='w-5 h-5' />,;
      link: '/reports',;
    },;
  ];

  // Popular quick links to flagship services;
  const popularServiceLinks = [;'
    { name: 'AI Content Generator', href: '/ai-content-generator' },;'
    { name: 'AI Blockchain Analytics', href: '/ai-blockchain-analytics' },;'
    { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },;'
    { name: 'AI HR Recruitment', href: '/ai-hr-recruitment' },;'
    { name: 'AI Video Editing', href: '/ai-video-editing' },;'
    { name: 'AI SEO Optimization', href: '/ai-seo-optimization' },;'
    { name: 'AI IoT Platform', href: '/ai-iot-platform' },;'
    { name: 'AI Sales Automation', href: '/ai-sales-automation' },;'
    { name: 'AI Market Research', href: '/ai-market-research' },;
  ];

  // Newly added real services quick links;
  const newServiceLinks = [;
    {;'
      name: 'Email Deliverability Monitor',;'
      href: '/services/email-deliverability-monitor',;
    },;
    {;'
      name: 'Landing Page Experimentation',;'
      href: '/services/landing-page-experimentation',;
    },;
    {;'
      name: 'Invoice Reconciliation Automation',;'
      href: '/services/invoice-reconciliation-automation',;
    },;
    {;'
      name: 'GitHub Ops Health Dashboard',;'
      href: '/services/github-ops-health-dashboard',;
    },;
    {;'
      name: 'Error Budget Automation',;'
      href: '/services/error-budget-automation',;
    },;'
    { name: 'LLM Usage Governance', href: '/services/llm-usage-governance' },;
  ];

    >;
      {/* Scroll Progress Bar */}'
      <div className='absolute top-0 left-0 h-1 w-full bg-transparent'>;
        <div'
          className='h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600'
          style={{}
          }}
        />;
      </div>;'
      <div className='max-w-7xl mx-auto px-4'>;'
        <div className='flex items-center justify-between h-20'>;
          {/* Logo */}

          <Link href='/' className='flex items-center space-x-3 group'>'
            <div className='relative'>'
              <div className='w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-"hover": scale-110 transition-transform duration-300'>'
                <Sparkles className='w-6 h-6 text-white' />'
              </div>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-"hover":opacity-75 transition-opacity duration-300'></div>'
            </div>
            <div className='hidden "sm":block'>'
              <div className='text-xl font-bold text-white group-"hover":text-cyan-400 transition-colors duration-300'>'
                Zion Tech Group
              </div>
              <div className='text-xs text-gray-400'>'
                Revolutionary Technology
              </div>
          </Link>
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
