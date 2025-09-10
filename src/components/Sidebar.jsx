import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Home, Zap, Shield, Cloud, Brain, Settings, Users, BarChart3, Mail, Phone, MapPin } from 'lucide-react';
;
export function Sidebar() {;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
;
  const navigation = [;
    { "name": 'Home', "href": '/', "icon": "Home "}
    { "name": 'Services', "href": '/services', "icon": "Zap "}
    { "name": 'AI Solutions', "href": '/ai-solutions', "icon": "Brain "}
    { "name": 'Cybersecurity', "href": '/services/cybersecurity', "icon": "Shield "}
    { "name": 'Cloud Services', "href": '/services/cloud-devops', "icon": "Cloud "}
    { "name": 'About', "href": '/about', "icon": "Users "}
    { "name": 'Contact', "href": '/contact', "icon": "Mail "}
  ];
;
  return (;
    <div className="hidden "lg": "flex "lg":flex-shrink-0">;
      <div className="flex flex-col w-80">;
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">;
          <div className="flex items-center flex-shrink-0 px-4">;
            <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>;
          </div>;
          <div className="mt-5 flex-grow flex flex-col">;
            <nav className="flex-1 px-2 space-y-1">;
              {navigation.map((item) => {;
                const isActive = location.pathname === item.href;
                return (;
                  <Link;
                    key={item.name"}
                    to={item.href}
                    className={`${;
                      isActive;
                        ? 'bg-blue-50 border-blue-500 text-blue-700';
                        : 'border-transparent text-gray-600 "hover": "bg-gray-50 "hover":text-gray-900';
                    "} group flex items-center px-2 py-2 text-sm font-medium rounded-md border-l-4`}
                  >;
                    <item.icon;
                      className={`${;
                        isActive ? 'text-blue-500' : 'text-gray-400 group-"hover": "text-gray-500';
                      "} mr-3 flex-shrink-0 h-6 w-6`}
                    />;
                    {item.name}
                  </Link>;
                );
              })}
            </nav>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
}
import {Link, useLocation} from 'react-router-dom';
import {ChevronDown, ChevronRight,
  Home, Zap,
  Brain, Shield,
  Cloud, Cpu,
  Users, ShoppingCart,
  BookOpen, MessageCircle,
  HelpCircle, DollarSign,
  Star, Target,
  TrendingUp, Award,
  Settings, Globe,
  Rocket, Heart,
  Lock, Database,
  Network, Palette,
  Video, PenTool,
  Atom, Server,
  Smartphone, BarChart3,
  Search, FileText,
  Calendar, Briefcase,;
  Info, Phone,;
  Mail, MapPin,;';
  Building, TestTube,;';';
  Newspaper, X,;';';';
  Code;", ";',';';
    ';';';} from 'lucide-react';';';
export function Sidebar(props: any) {';';';
  const location = useLocation();""',';';
    ';';';
import React, { useState } from 'react',;',';';
    ';';';';
import Link from 'next/link',;';';
    ';';';';
import {useRouter} from 'next/router';
import {ChevronDown,
  ChevronRight,
  Home,
  Zap,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Star,
  Target,
  TrendingUp,
  Award,
  Settings,
  Globe,
  Rocket,
  Heart,
  Lock,
  Database,
  Network,
  Palette,
  Video,
  PenTool,
  Atom,
  Server,
  Smartphone,
  BarChart3,
  Search,
  FileText,
  Calendar,
  Briefcase,
  Info,
  Phone,
  Mail,
  MapPin,
  Building,;';
  TestTube,;';';
  Newspaper,;';';';
  X,;',';';
    ';';';
  Code';';';
  Newspaper,;';';';
  X,;',';';
    ';';';
  Code} from 'lucide-react';';
export function Sidebar(props: any) {const location = useLocation();';';
export function Sidebar(props: any) {';';';
  const router = useRouter();',';';
    ';';';
  const [expandedSections, setExpandedSections] = useState(['services', 'solutions']);
  const toggleSection = (props: any) => {
    setExpandedSections(prev =>
      prev.includes(sectionName);
        ? prev.filter(s => s !== sectionName);
        : [...prev, sectionName]';
    );};';';
  const navigationSections = [';';';
    {""',';';
    ';';';
      title: 'Main', items: [""',';';
    ';';';
        { name: 'Home', href: '/', icon: Home },""',';';
    ';';';
        {name: 'About', href: '/about', icon: Building}, ""',';';
    ';';';
        {name: 'Services', href: '/services', icon: Briefcase},""',';';
    ';';';
        {name: 'Solutions', href: '/solutions', icon: Target}, ""',';';
    ';';';
        {name: 'AI Solutions', href: '/ai-solutions', icon: Brain},""',';';
    ';';';
        {name: 'Case Studies', href: '/case-studies', icon: FileText}, ""',';';
    ';';';
        {name: 'Research', href: '/research-development', icon: TestTube},""',';';
    ';';';
        {name: 'Events', href: '/events', icon: Video}, ""',';';
    ';';';
        {name: 'News', href: '/news', icon: Newspaper},""',';';
    ';';';
        {name: 'Contact', href: '/contact', icon: Mail}, ""',';';
    ';';';
        {name: 'Blog', href: '/blog', icon: FileText}';';
      ]},';';';
    {""',';';
    ';';';
      title: 'Core Services', items: [""',';';
    ';';';
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' }, ""',';';
    ';';';
        {name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Simulation & Monitoring'}, ""',';';
    ';';';
        {name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, description: 'Intelligent Solutions'}, ""',';';
    ';';';
        {name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protection & Compliance'}, ""',';';
    ';';';
        {name: 'IT Infrastructure', href: '/services/infrastructure', icon: Server, description: 'Hardware & Networks'}, ""',';';
    ';';';
        {name: 'Digital Transformation', href: '/services/transformation', icon: Rocket, description: 'Business Evolution'}';';
      ]},';';';
    {""',';';
    ';';';
      title: 'Industry Solutions', items: [""',';';
    ';';';
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu, description: 'Smart Factory Solutions' }, ""',';';
    ';';';
        {name: 'Financial Services', href: '/solutions/financial', icon: DollarSign, description: 'FinTech & Banking'}, ""',';';
    ';';';
        {name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Digital Health'}, ""',';';
    ';';';
        {name: 'Retail', href: '/solutions/retail', icon: ShoppingCart, description: 'E-commerce & Omnichannel'}, ""',';';
    ';';';
        {name: 'Education', href: '/solutions/education', icon: BookOpen, description: 'EdTech & Learning'}, ""',';';
    ';';';
        {name: 'Energy', href: '/solutions/energy', icon: Zap, description: 'Renewable & Smart Grid'}';';
      ]},';';';
    {""',';';
    ';';';
      title: 'Resources', items: [""',';';
    ';';';
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Industry Insights' }, ""',';';
    ';';';
        {name: 'Webinars', href: '/webinars', icon: Video, description: 'Expert Knowledge'}, ""',';';
    ';';';
        {name: 'Training', href: '/training', icon: Award, description: 'Skill Development'}, ""',';';
    ';';';
        {name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical Guides'}, ""',';';
    ';';';
        {name: 'API Reference', href: '/api', icon: Code, description: 'Developer Resources'}, ""',';';
    ';';';
        {name: 'Status Page', href: '/status', icon: BarChart3, description: 'System Health'}';';
      ]},';';';
    {""',';';
    ';';';
      title: 'Support', items: [""',';';
    ';';';
        { name: 'Help Center', href: '/support', icon: HelpCircle, description: 'Self-Service Support' }, ""',';';
    ';';';
        {name: 'Contact Us', href: '/contact', icon: MessageCircle, description: 'Get in Touch'}, ""',';';
    ';';';
        {name: 'Request Quote', href: '/request-quote', icon: DollarSign, description: 'Custom Pricing'}, ""',';';
    ';';';
        {name: 'Partnership', href: '/partners', icon: Users, description: 'Become a Partner'}, ""',';';
    ';';';
        {name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join Our Team'}';
      ]}';';
  ]';';';
  const isActive = (props: any) => {""',';';
    ';';';
    if (href === '/') {""',';';
    ';';';
      return location.pathname === '/';}
    return location.pathname.startsWith(href);};';
    );';';
  };';';';
  const navigationSections = [',';';
    ';';';
    {'';';';';
      title: 'Main',',';';
    ';';';
      items: ['';';';
        { nam,',';';
    ';';';
    e: 'Home', href: '/', icon: Home },',';';
    ';';';
  const navigationSections = [{title: 'Main',';';';
      items: [',';';
    ';';';
        { name: 'Home', href: '/', icon: Home },',';';
    ';';';
        {name: 'About', href: '/about', icon: Building},',';';
    ';';';
        {name: 'Services', href: '/services', icon: Briefcase},',';';
    ';';';
        {name: 'Solutions', href: '/solutions', icon: Target},',';';
    ';';';
        {name: 'AI Solutions', href: '/ai-solutions', icon: Brain},',';';
    ';';';
        {name: 'Case Studies', href: '/case-studies', icon: FileText},',';';
    ';';';
        {name: 'Research', href: '/research-development', icon: TestTube},',';';
    ';';';
        {name: 'Events', href: '/events', icon: Video},',';';
    ';';';
        {name: 'News', href: '/news', icon: Newspaper},',';';
    ';';';
        {name: 'Contact', href: '/contact', icon: Mail},',';';
    ';';';
        {name: 'Blog', href: '/blog', icon: FileText}';';
      ]';';';
},',';';
    ';';';
    {title: 'Core Services',',';';
    ';';';
      items: [{ name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },',';';
    ';';';
        {name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Simulation & Monitoring'},',';';
    ';';';
        {name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, description: 'Intelligent Solutions'},',';';
    ';';';
        {name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protection & Compliance'},',';';
    ';';';
        {name: 'IT Infrastructure', href: '/services/infrastructure', icon: Server, description: 'Hardware & Networks'},',';';
    ';';';
        {name: 'Digital Transformation', href: '/services/transformation', icon: Rocket, description: 'Business Evolution'}';';
      ]';';';
},',';';
    ';';';
    {title: 'Industry Solutions',',';';
    ';';';
      items: [{ name: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu, description: 'Smart Factory Solutions' },',';';
    ';';';
        {name: 'Financial Services', href: '/solutions/financial', icon: DollarSign, description: 'FinTech & Banking'},',';';
    ';';';
        {name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Digital Health'},',';';
    ';';';
        {name: 'Retail', href: '/solutions/retail', icon: ShoppingCart, description: 'E-commerce & Omnichannel'},',';';
    ';';';
        {name: 'Education', href: '/solutions/education', icon: BookOpen, description: 'EdTech & Learning'},',';';
    ';';';
        {name: 'Energy', href: '/solutions/energy', icon: Zap, description: 'Renewable & Smart Grid'}';';
      ]';';';
},',';';
    ';';';
    {title: 'Resources',',';';
    ';';';
      items: [{ name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Industry Insights' },',';';
    ';';';
        {name: 'Webinars', href: '/webinars', icon: Video, description: 'Expert Knowledge'},',';';
    ';';';
        {name: 'Training', href: '/training', icon: Award, description: 'Skill Development'},',';';
    ';';';
        {name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical Guides'},',';';
    ';';';
        {name: 'API Reference', href: '/api', icon: Code, description: 'Developer Resources'},',';';
    ';';';
        {name: 'Status Page', href: '/status', icon: BarChart3, description: 'System Health'}';';
      ]';';';
},',';';
    ';';';
    {title: 'Support',',';';
    ';';';
      items: [{ name: 'Help Center', href: '/support', icon: HelpCircle, description: 'Self-Service Support' },',';';
    ';';';
        {name: 'Contact Us', href: '/contact', icon: MessageCircle, description: 'Get in Touch'},',';';
    ';';';
        {name: 'Request Quote', href: '/request-quote', icon: DollarSign, description: 'Custom Pricing'},',';';
    ';';';
        {name: 'Partnership', href: '/partners', icon: Users, description: 'Become a Partner'},',';';
    ';';';
        {name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join Our Team'}',';';
    ';';';
        {name: 'About', href: '/about', icon: Building},',';';
    ';';';
        {name: 'Services', href: '/services', icon: Briefcase},',';';
    ';';';
        {name: 'Solutions', href: '/solutions', icon: Target},',';';
    ';';';
        {name: 'AI Services', href: '/ai-services', icon: Brain},',';';
    ';';';
        {name: 'Case Studies', href: '/case-studies', icon: FileText},',';';
    ';';';
        {name: 'Contact', href: '/contact', icon: Mail},',';';
    ';';';
        {name: 'Blog', href: '/blog', icon: FileText}';';
      ]';';';
},',';';
    ';';';
    {'';';';';
      title: 'Core Services',',';';
    ';';';
      items: ['';';';
        { nam,',';';
    ';';';
    e: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },',';';
    ';';';
        {name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Simulation & Monitoring'},',';';
    ';';';
        {name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, description: 'Intelligent Solutions'},',';';
    ';';';
        {name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protection & Compliance'},',';';
    ';';';
        {name: 'IT Infrastructure', href: '/services/infrastructure', icon: Server, description: 'Hardware & Networks'},',';';
    ';';';
        {name: 'Digital Transformation', href: '/services/transformation', icon: Rocket, description: 'Business Evolution'}';';
      ]';';';
},',';';
    ';';';
    {'';';';';
      title: 'Industry Solutions',',';';
    ';';';
      items: ['';';';
        { nam,',';';
    ';';';
    e: 'Manufacturing', href: '/solutions/manufacturing', icon: Cpu, description: 'Smart Factory Solutions' },',';';
    ';';';
        {name: 'Financial Services', href: '/solutions/financial', icon: DollarSign, description: 'FinTech & Banking'},',';';
    ';';';
        {name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, description: 'Digital Health'},',';';
    ';';';
        {name: 'Retail', href: '/solutions/retail', icon: ShoppingCart, description: 'E-commerce & Omnichannel'},',';';
    ';';';
        {name: 'Education', href: '/solutions/education', icon: BookOpen, description: 'EdTech & Learning'},',';';
    ';';';
        {name: 'Energy', href: '/solutions/energy', icon: Zap, description: 'Renewable & Smart Grid'}';';';
      items: [',';';
    ';';';
        {name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Intelligent Solutions'},',';';
    ';';';
        {name: 'IT Services', href: '/it-services', icon: Network, description: 'Comprehensive IT Solutions'},',';';
    ';';';
        {name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Scalable SaaS Solutions'},',';';
    ';';';
        {name: 'Web Development', href: '/services/web-development', icon: Code, description: 'Custom Web Applications'},',';';
    ';';';
        {name: 'Cloud Services', href: '/services/cloud-services', icon: Cloud, description: 'Cloud Infrastructure'},',';';
    ';';';
        {name: 'AI Development', href: '/services/ai-development', icon: Brain, description: 'AI Development Services'}';
      ]';';
},';';';
    {',';';
    ';';';
      title: 'Solutions',';';';
      items: [',';';
    ';';';
        { name: 'AI Content Creation', href: '/solutions/ai-content-creation', icon: Brain, description: 'AI-Powered Content' },',';';
    ';';';
        {name: 'Customer Support', href: '/solutions/customer-support', icon: MessageCircle, description: 'Support Automation'},',';';
    ';';';
        {name: 'Email Automation', href: '/solutions/email-automation', icon: Mail, description: 'Email Marketing'},',';';
    ';';';
        {name: 'Event Management', href: '/solutions/event-management', icon: Calendar, description: 'Event Planning'},',';';
    ';';';
        {name: 'Project Management', href: '/solutions/project-management', icon: Briefcase, description: 'Project Tracking'},',';';
    ';';';
        {name: 'Workflow Automation', href: '/solutions/workflow-automation', icon: Zap, description: 'Process Automation'}';';
      ]';';';
},',';';
    ';';';
    {'';';';';
      title: 'Resources',',';';
    ';';';
      items: ['';';';
        { nam,',';';
    ';';';
    e: 'White Papers', href: '/white-papers', icon: FileText, description: 'Industry Insights' },',';';
    ';';';
        {name: 'Webinars', href: '/webinars', icon: Video, description: 'Expert Knowledge'},',';';
    ';';';
        {name: 'Training', href: '/training', icon: Award, description: 'Skill Development'},';';';
      items: [',';';
    ';';';
        {name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical Guides'},',';';
    ';';';
        {name: 'API Reference', href: '/api', icon: Code, description: 'Developer Resources'},',';';
    ';';';
        {name: 'Training', href: '/training', icon: Award, description: 'Skill Development'},',';';
    ';';';
        {name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support Resources'},',';';
    ';';';
        {name: 'Search', href: '/search', icon: Search, description: 'Find Content'},',';';
    ';';';
        {name: 'Press', href: '/press', icon: Newspaper, description: 'News & Updates'}';';
      ]';';';
},',';';
    ';';';
    {'';';';';
      title: 'Support',',';';
    ';';';
      items: ['';';';
        { nam,',';';
    ';';';
    e: 'Help Center', href: '/support', icon: HelpCircle, description: 'Self-Service Support' },',';';
    ';';';
        {name: 'Contact Us', href: '/contact', icon: MessageCircle, description: 'Get in Touch'},',';';
    ';';';
        {name: 'Partners', href: '/partners', icon: Users, description: 'Become a Partner'},',';';
    ';';';
        {name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join Our Team'},',';';
    ';';';
        {name: 'Team', href: '/team', icon: Users, description: 'Meet Our Team'}';
      ]';';
}';';';
  ]',';';
    ';';';
  const isActive = (props: any) => {'';';';';
    if (href === '/') {'',';';
    ';';';
      return location.pathname === '/',',';';
    ';';';';
  const isActive = (props: any) => {if (href === '/') {',';';
    ';';';
      return location.pathname === '/';';';';
  const isActive = (props: any) => {',';';
    ';';';
    if (href === '/') {',';';
    ';';';
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };
  return (
    <>';
      {/* Overlay */}, {isOpen && (';';
        <div className={`fixed inset-0 bg-black/50 z-40 lg: hidden` onClick={onClose}  />';';';
      )}, {/* Sidebar */}',';';
    ';';';
      <div className={` fixed top-0 left-0 h-full w-64 bg-zion-blue-dark border-r border-zion-purple/20 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full lg: translate-x-0'} lg: relative lg:inset-0 `}>';';
      {/* Overlay */}';';';
      {isOpen && (',';';
    ';';';
        <div '
        <div ``}
          className="fixed inset-0 bg-black/50 z-40 lg: hidden"
          onClick={onClose}
        /" >"
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
         />
      )