
import React from 'react';
import { motion } from 'framer-motion';
=======
import React from 'react';
=======
impor, t, Reac, t, { useState } from 'react';
=======
import React from 'react';
=======
impor, t, Reac, t, { useState } from 'react';
=======
import { useEffect } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Brai, n, Cp, u, Rocke, t, Buildin, g, Targe, t, Za, p, Databas, e, Networ, k, Clou, d, Loc, k, BarChart, 3, Palett, e, Smartphon, e, Serve, r, Githu, b, Youtube } from 'lucide-react';
import { Lin, k, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Hom, e, 
impor, t, Reac, t, { useState } from 'react';
import { Lin, k, useLocation } from 'react-router-dom';
import { 
  Hom, e, 
  Briefcas, e, 
  User, s, 
  Setting, s, 
  FileTex, t, 
  HelpCircl, e, 
  MessageSquar, e, 
  BarChart, 3, 
  ShoppingCar, t, 
  Wrenc, h, 
  Glob, e, 
  Buildin, g, 
  Cod, e, 
  Shiel, d, 
  Za, p, 
  ChevronRigh, t, 
  ChevronDow, n,
  Sta, r,
  Rocke, t,
  Cp, u,
  Databas, e,
  Networ, k,
  Loc, k,
  Brai, n,
  Lea, f,
  Smartphon, e,
  DollarSig, n,
  BookOpe, n,
  Vide, o,
  FileSearc, h,
  Lightbul, b,
  Targe, t,
  Users, 2,
  Handshak, e,
  Awar, d,
  TrendingU, p,
  Palett, e,
  Monito, r,
  Serve, r,
  Clou, d,
  Ke, y,
  Ey, e,
  ShieldChec, k,
  Bu, g,
  Activit, y,
  PieChar, t,
  BarChar, t,
  LineChar, t,
  Ma, p,
  Calenda, r,
  Cloc, k,
  Mai, l,
  MapPin
} from 'lucide-react';
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Brai, n, Cp, u, Databas, e, Networ, k, Za, p, Targe, t, Rocke, t, Clou, d, Github } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Brai, n, Cp, u, Rocke, t, Za, p, ChevronRigh, t, ChevronDown } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Brai, n, Cp, u, Clou, d, Databas, e, Cod, e, BarChart, 3, Targe, t, Hear, t, Buildin, g, Rocke, t, Loc, k, Networ, k, Ey, e, Workflo, w, Palett, e, Serve, r, Cloc, k, Za, p, Sta, r, TrendingU, p, ShoppingCar, t, Calenda, r, Vide, o, FileText } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Brai, n, Za, p, Databas, e, Clou, d, Loc, k, BookOpe, n, FileTex, t, Calenda, r, HelpCircl, e, Setting, s, Sta, r, TrendingU, p, Rocke, t, Cp, u, Networ, k, Serve, r, Cod, e, Palett, e, Targe, t, Lightbul, b, Github } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, ShoppingCar, t, Cod, e, DollarSign } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Brai, n, Za, p, Databas, e, Cp, u, Loc, k, Rocke, t, BookOpe, n, FileTex, t, Calenda, r, HelpCircl, e, Setting, s, BarChart, 3, Targe, t, Building, 2, Hear, t, Ca, r, Factor, y, ShoppingCar, t, GraduationCa, p, Microscop, e, Truc, k, Plan, e, Satellit, e, Ato, m, Clou, d, Signa, l, Githu, b, Link as LinkIcon } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Brai, n, Cp, u, Rocke, t, Buildin, g, Targe, t, Za, p, Databas, e, Networ, k, Clou, d, Loc, k, BarChart, 3, Palett, e, Smartphon, e, Serve, r, Githu, b, Youtube } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Za, p, FileTex, t, HelpCircl, e, Setting, s, Rocke, t, Brai, n, Databas, e, Loc, k, Clou, d, Cod, e, BarChart, 3, Palett, e, Targe, t, Lightbul, b, BookOpe, n, Calenda, r, MessageSquar, e, Sta, r, Awar, d, TrendingU, p, Cp, u, Networ, k, Serve, r, ShieldChec, k, Globe, 2, Smartphon, e, Wif, i, Satellit, e, Ato, m, TestTub, e, Microscop, e, Ca, r, Plan, e, Shi, p, Truc, k, Building, 2, Hear, t, Pil, l, Stethoscop, e, Gave, l, Scal, e, Factor, y, Co, g, Bo, t, Ey, e, Ke, y, QrCod, e, Walle, t, Coin, s, Lea, f, Su, n, Win, d, Stor, e, Cooki, e, Github } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Brai, n, Za, p, Clou, d, Databas, e, Networ, k, Setting, s, BookOpe, n, MessageCircl, e, FileTex, t, Sta, r, Rocke, t, Targe, t, Lightbul, b, CheckCircl, e, Eye } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Githu, b, Youtub, e, Shiel, d, Handshake } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Eye } from 'lucide-react';
=======
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Brai, n, Cp, u, Clou, d, Loc, k, Cod, e, Rocke, t, Targe, t, Lightbul, b, Sparkles } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Brai, n, Cp, u, Rocke, t, Target } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Brai, n, Za, p, Rocke, t, BookOpe, n, HelpCircl, e, Setting, s, Sta, r, Clou, d, Code } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Brai, n, Za, p, Rocke, t, BookOpe, n, FileTex, t, TrendingU, p, ArrowRigh, t, Clou, d, Calendar } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Networ, k, Brai, n, BarChart, 3, Za, p, Databas, e, Command } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, FileText } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Shiel, d, Handshak, e, Github } from 'lucide-react';
=======
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shiel, d, Handshak, e, Brai, n, Ato, m, Serve, r, Databas, e, Packag, e, Buildin, g, Rocket } from 'lucide-react';
import { Lin, k, useLocation } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';

export default function Sidebar() {
  const { isSidebarOpe,  n, setIsSidebarOpen } = useSidebar();
=======
import { useEffect } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { X, Hom, e, Briefcas, e, User, s, Phon, e, Mai, l, MapPi, n, Glob, e, Linkedi, n, Twitte, r, Faceboo, k, Instagra, m, Shield } from 'lucide-react';
import { Lin, k, useLocation } from 'react-router-dom';
=======
import { Lin, k, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
=======
  ShoppingCar, t, 
  User, s, 
  Setting, s, 
  HelpCircl, e, 
  FileTex, t, 
  Briefcas, e, 
  Shiel, d, 
  BookOpe, n,
  MessageSquar, e,
  BarChart, 3,
  Za, p,
  Glob, e,
  Buildin, g,
  Leaf
} from 'lucide-react';

interface SidebarProps {
  isOpe, n: boolean;
  onClos, e: () => void;
      titl,  e: 'Main Navigation',
    item, s: [
        { na, m, e: 'A, I Solution, s',
    pa, t, h: '/a, i-solution, s', ic, o, n: Brai, n },
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Targe, t },
=======
      tit, l, e: 'Mai, n Navigatio, n',
    ite, m, s: [
        { na, m, e: 'Hom, e',
    pa, t, h: '/', ic, o, n: Hom, e },
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Briefcas, e },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: Briefcas, e },
=======
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Targe, t },
        { na, m, e: 'Pricin, g',
    pa, t, h: '/pricin, g', ic, o, n: Briefcas, e },
=======
=======
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Targe, t },
        { na, m, e: 'Pricin, g',
    pa, t, h: '/pricin, g', ic, o, n: Sta, r },
        { na, m, e: 'Abou, t',
    pa, t, h: '/abou, t', ic, o, n: User, s },
        { na, m, e: 'Service, s',
    pa, t, h: '/service, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Targe, t },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Abou, t',
    pa, t, h: '/abou, t', ic, o, n: User, s },
=======
      tit, l, e: 'Mai, n',
    ite, m, s: [
        { na, m, e: 'Hom, e',
    pa, t, h: '/', ic, o, n: Hom, e },
        { na, m, e: 'Service, s',
    pa, t, h: '/service, s', ic, o, n: Briefcas, e },
        { na, m, e: 'A, I Solution, s',
    pa, t, h: '/a, i-solution, s', ic, o, n: Briefcas, e },
=======
        { na, m, e: 'A, I Service, s',
    pa, t, h: '/a, i-service, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Briefcas, e },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Pricin, g',
    pa, t, h: '/pricin, g', ic, o, n: Briefcas, e },
=======
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s', ic, o, n: Glob, e },
        { na, m, e: 'Pricin, g',
    pa, t, h: '/pricin, g', ic, o, n: Sta, r },
=======
        { na, m, e: 'Abou, t',
    pa, t, h: '/abou, t', ic, o, n: User, s },
      tit, l, e: 'Mai, n Navigatio, n',
    ite, m, s: [
        { na, m, e: 'Hom, e',
    pa, t, h: '/', ic, o, n: Hom, e },
        { na, m, e: 'Service, s Overvie, w',
    pa, t, h: '/service, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Rocke, t },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: TrendingU, p },
        { na, m, e: 'Documentatio, n',
    pa, t, h: '/doc, s', ic, o, n: BookOpe, n },
        { na, m, e: 'Abou, t U, s',
    pa, t, h: '/abou, t', ic, o, n: User, s },
        { na, m, e: 'Contac, t',
    pa, t, h: '/contac, t', ic, o, n: Phon, e }
=======
        { na, m, e: 'Contac, t',
    pa, t, h: '/contac, t', ic, o, n: Phon, e },
        { na, m, e: 'Sitema, p',
    pa, t, h: '/sitema, p', ic, o, n: Glob, e }
      ]
    },
    {
=======
      titl, e: 'AI & Autonomous Systems',
        { nam, e: 'AI & Autonomous Systems',
    pat, h: '/services/ai-autonomous-systems', ico, n: Briefcase },
        { nam, e: 'AI Research Assistant',
    pat, h: '/ai-autonomous-research-assistant', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Research',
    pat, h: '/ai-autonomous-research', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Business Manager',
    pat, h: '/ai-autonomous-business-manager', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Business Platform',
    pat, h: '/ai-autonomous-business-platform', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Code Review',
    pat, h: '/ai-autonomous-code-review', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Creative Director',
    pat, h: '/ai-autonomous-creative-director', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Data',
    pat, h: '/ai-autonomous-data', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Decision Engine',
    pat, h: '/ai-autonomous-decision-engine', ico, n: Briefcase },
        { nam, e: 'AI Autonomous DevOps',
    pat, h: '/ai-autonomous-devops', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Education',
    pat, h: '/ai-autonomous-education-professor', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Healthcare',
    pat, h: '/ai-autonomous-healthcare-physician', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Learning',
    pat, h: '/ai-autonomous-learning-system', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Legal',
    pat, h: '/ai-autonomous-legal-counsel', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Logistics',
    pat, h: '/ai-autonomous-logistics', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Manufacturing',
    pat, h: '/ai-autonomous-manufacturing', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Robotics',
    pat, h: '/ai-autonomous-robotics', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Security',
    pat, h: '/ai-autonomous-security', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Testing',
    pat, h: '/ai-autonomous-testing', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Vehicle Platform',
    pat, h: '/ai-autonomous-vehicle-platform', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Vehicle',
    pat, h: '/ai-autonomous-vehicle', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Vehicles Platform',
    pat, h: '/ai-autonomous-vehicles-platform', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Vehicles',
    pat, h: '/ai-autonomous-vehicles', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Venture Capitalist',
    pat, h: '/ai-autonomous-venture-capitalist', ico, n: Briefcase }
=======
        { nam, e: 'AI & Autonomous Systems',
    pat, h: '/services/ai-autonomous-systems', ico, n: Briefcase },
=======
        { nam, e: 'AI Autonomous Systems Platform',
    pat, h: '/ai-autonomous-systems-platform', ico, n: Briefcase },
        { nam, e: 'AI Research Assistant',
    pat, h: '/ai-autonomous-research-assistant', ico, n: Briefcase },
        { nam, e: 'AI Business Manager',
    pat, h: '/ai-autonomous-business-manager', ico, n: Briefcase },
        { nam, e: 'AI Research Platform',
    pat, h: '/ai-autonomous-research', ico, n: Briefcase },
        { nam, e: 'AI Code Review',
    pat, h: '/ai-autonomous-code-review', ico, n: Briefcase },
        { nam, e: 'AI Business Intelligence',
    pat, h: '/ai-business-intelligence-suite', ico, n: Briefcase },
=======
        { nam, e: 'AI Agent Orchestrator',
    pat, h: '/ai-agent-orchestrator', ico, n: Briefcase },
        { nam, e: 'AI Analytics Copilot',
    pat, h: '/ai-analytics-copilot', ico, n: Briefcase },
        { nam, e: 'AI Business Manager',
    pat, h: '/ai-autonomous-business-manager', ico, n: Briefcase },
        { nam, e: 'AI Business Platform',
    pat, h: '/ai-autonomous-business-platform', ico, n: Briefcase },
        { nam, e: 'AI Code Review',
    pat, h: '/ai-autonomous-code-review', ico, n: Briefcase },
        { nam, e: 'Quantum Neural Networks',
    pat, h: '/quantum-neural-network-platform', ico, n: Briefcase },
        { nam, e: 'Autonomous Business Platform',
    pat, h: '/autonomous-business-operations-platform', ico, n: Briefcase },
        { nam, e: 'AI Asset Management',
    pat, h: '/ai-powered-it-asset-management', ico, n: Briefcase },
        { nam, e: 'Cybersecurity',
    pat, h: '/services/cybersecurity', ico, n: Shield },
        { nam, e: 'Quantum Technology',
    pat, h: '/services/quantum-technology', ico, n: Globe },
        { nam, e: 'IT Infrastructure',
    pat, h: '/services/it-infrastructure', ico, n: Globe },
        { nam, e: 'Micro SAAS Solutions',
    pat, h: '/services/micro-saas-solutions', ico, n: Globe },
        { nam, e: 'Cloud & DevOps',
    pat, h: '/cloud-devops', ico, n: Globe },
        { nam, e: 'Digital Transformation',
    pat, h: '/digital-transformation', ico, n: Globe },
        { nam, e: 'Emerging Technology',
    pat, h: '/emerging-tech', ico, n: Globe }
=======
=======
        { nam, e: 'AI Autonomous Business Manager',
    pat, h: '/ai-autonomous-business-manager', ico, n: Briefcase },
        { nam, e: 'AI Autonomous Business Platform',
    pat, h: '/ai-autonomous-business-platform', ico, n: Briefcase },
        { nam, e: 'AI & Machine Learning',
    pat, h: '/services?category=AI%20%26%20Machine%20Learning', ico, n: Briefcase },
        { nam, e: 'Quantum Neural Networks',
    pat, h: '/quantum-neural-network-platform', ico, n: Briefcase },
        { nam, e: 'Advanced Research Automation',
    pat, h: '/advanced-research-automation', ico, n: Briefcase },
=======
        { nam, e: 'AI Business Intelligence',
    pat, h: '/services/ai-business-intelligence', ico, n: Briefcase },
        { nam, e: 'AI Marketing Automation',
    pat, h: '/services/ai-marketing-automation', ico, n: Briefcase },
        { nam, e: 'AI HR & Recruitment',
    pat, h: '/services/ai-hr-recruitment', ico, n: Briefcase },
        { nam, e: 'AI Legal Tech',
    pat, h: '/services/ai-legal-tech', ico, n: Briefcase },
        { nam, e: 'AI Healthcare Analytics',
    pat, h: '/services/ai-healthcare-analytics', ico, n: Briefcase },
=======
        { nam, e: 'AI Business Manager',
    pat, h: '/ai-autonomous-business-manager', ico, n: Briefcase },
        { nam, e: 'AI Business Manager 2029',
    pat, h: '/ai-autonomous-business-manager-2029', ico, n: Briefcase },
        { nam, e: 'Quantum Neural Network Platform',
    pat, h: '/quantum-neural-network-platform', ico, n: Briefcase },
        { nam, e: 'Autonomous Business Operations Platform',
    pat, h: '/autonomous-business-operations-platform', ico, n: Briefcase },
        { nam, e: 'Cybersecurity',
    pat, h: '/services?category=Cybersecurity', ico, n: Shield },
        { nam, e: 'Advanced Cybersecurity Suite',
    pat, h: '/advanced-cybersecurity-suite', ico, n: Shield },
        { nam, e: 'Micro SAAS Solutions',
    pat, h: '/services?category=Micro%20SAAS%20Solutions', ico, n: Globe },
        { nam, e: 'AI-Powered IT Asset Management',
    pat, h: '/ai-powered-it-asset-management', ico, n: Briefcase },
        { nam, e: 'Space Technology',
    pat, h: '/services?category=Space%20Technology', ico, n: Globe },
        { nam, e: 'Healthcare AI',
    pat, h: '/services?category=Healthcare%20AI', ico, n: Users },
        { nam, e: 'Manufacturing AI',
    pat, h: '/services?category=Manufacturing%20AI', ico, n: Briefcase },
        { nam, e: 'Emerging Technology',
    pat, h: '/services?category=Emerging%20Technology', ico, n: Globe },
        { nam, e: 'Autonomous Systems',
    pat, h: '/services?category=AI%20%26%20Autonomous%20Systems', ico, n: Users },
        { nam, e: 'Accessibility Auditor',
    pat, h: '/accessibility-auditor', ico, n: Users }
=======
      titl, e: 'AI & Technology',
    item, s: [
        { na, m, e: 'A, I Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Quantu, m Neura, l Network, s',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Glob, e },
        { na, m, e: 'A, I-Powere, d I, T Asse, t Managemen, t',
    pa, t, h: '/a, i-powere, d-i, t-asse, t-managemen, t', ic, o, n: Briefcas, e },
        { na, m, e: 'Advance, d Researc, h Automatio, n',
    pa, t, h: '/advance, d-researc, h-automatio, n', ic, o, n: Glob, e },
        { na, m, e: 'Machin, e Learnin, g',
    pa, t, h: '/service, s#a, i-m, l', ic, o, n: Briefcas, e }
=======
      tit, l, e: 'A, I & Autonomou, s System, s',
    ite, m, s: [
        { na, m, e: 'A, I Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Brai, n },
        { na, m, e: 'A, I Service, s',
    pa, t, h: '/a, i-service, s', ic, o, n: Brai, n },
        { na, m, e: 'A, I Solution, s',
    pa, t, h: '/a, i-solution, s', ic, o, n: Brai, n },
        { na, m, e: 'A, I Matche, r',
    pa, t, h: '/matc, h', ic, o, n: Brai, n }
=======
        { na, m, e: 'A, I & Machin, e Learnin, g',
    pa, t, h: '/a, i-service, s', ic, o, n: Briefcas, e },
        { na, m, e: 'A, I Researc, h Assistan, t',
    pa, t, h: '/a, i-researc, h-assistan, t', ic, o, n: Briefcas, e },
        { na, m, e: 'A, I Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Briefcas, e },
        { na, m, e: 'Quantu, m Neura, l Networ, k Platfor, m',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Briefcas, e },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'SOC, 2 Complianc, e Automatio, n',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: Shiel, d },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Glob, e },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Briefcas, e },
        { na, m, e: 'Industr, y Solution, s',
    pa, t, h: '/service, s/industr, y-solution, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Clou, d & DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Glob, e },
        { na, m, e: 'Digita, l Transformatio, n',
    pa, t, h: '/digita, l-transformatio, n', ic, o, n: Glob, e }
=======
        { na, m, e: 'A, I & Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Shiel, d },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Glob, e },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Glob, e },
        { na, m, e: 'Industr, y Solution, s',
    pa, t, h: '/service, s/industr, y-solution, s', ic, o, n: Briefcas, e }
      ]
    },
    {
      titl, e: 'Quantum & Advanced Tech',
    item, s: [
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Ato, m },
        { na, m, e: 'Innovativ, e Ne, w Service, s',
    pa, t, h: '/service, s/innovativ, e-ne, w-service, s', ic, o, n: Rocke, t },
        { na, m, e: 'Emergin, g Technolog, y',
    pa, t, h: '/emergin, g-tec, h', ic, o, n: Glob, e }
      ]
    },
    {
      titl, e: 'Infrastructure & Security',
    item, s: [
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Serve, r },
        { na, m, e: 'Specialize, d I, T Infrastructur, e',
    pa, t, h: '/service, s/specialize, d-i, t-infrastructur, e', ic, o, n: Databas, e },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'Clou, d & DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Glob, e }
      ]
    },
    {
      titl, e: 'Solutions & Services',
    item, s: [
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Packag, e },
        { na, m, e: 'Industr, y Solution, s',
    pa, t, h: '/service, s/industr, y-solution, s', ic, o, n: Buildin, g },
        { na, m, e: 'Enterpris, e Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Briefcas, e },
        { na, m, e: 'Healthcar, e Solution, s',
    pa, t, h: '/solution, s/healthcar, e', ic, o, n: User, s }
      ]
    },
    {
      titl, e: 'Business Solutions',
    item, s: [
        { na, m, e: 'Autonomou, s Busines, s Operation, s',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Briefcas, e },
        { na, m, e: 'Enterpris, e Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Briefcas, e },
        { na, m, e: 'Healthcar, e Solution, s',
    pa, t, h: '/solution, s/healthcar, e', ic, o, n: User, s },
        { na, m, e: 'Financia, l Solution, s',
    pa, t, h: '/solution, s/financia, l', ic, o, n: Briefcas, e },
        { na, m, e: 'Manufacturin, g Solution, s',
    pa, t, h: '/solution, s/manufacturin, g', ic, o, n: Briefcas, e },
        { na, m, e: 'Retai, l Solution, s',
    pa, t, h: '/solution, s/retai, l', ic, o, n: Briefcas, e },
        { na, m, e: 'Governmen, t Solution, s',
    pa, t, h: '/solution, s/governmen, t', ic, o, n: Briefcas, e }
      ]
    },
    {
      titl, e: 'Security & Infrastructure',
    item, s: [
        { na, m, e: 'Advance, d Cybersecurit, y Suit, e',
    pa, t, h: '/advance, d-cybersecurit, y-suit, e', ic, o, n: Shiel, d },
        { na, m, e: 'Cybersecurit, y Service, s',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Glob, e },
        { na, m, e: 'Clou, d & DevOp, s',
    pa, t, h: '/service, s/clou, d-devop, s', ic, o, n: Glob, e },
        { na, m, e: 'Digita, l Transformatio, n',
    pa, t, h: '/digita, l-transformatio, n', ic, o, n: Briefcas, e },
=======
      tit, l, e: 'A, I & Autonomou, s System, s',
    ite, m, s: [
        { na, m, e: 'A, I Autonomou, s Busines, s Manage, r',
    pa, t, h: '/a, i-autonomou, s-busines, s-manage, r', ic, o, n: Briefcas, e },
        { na, m, e: 'A, I Agen, t Orchestrato, r',
    pa, t, h: '/a, i-agen, t-orchestrato, r', ic, o, n: Briefcas, e },
        { na, m, e: 'A, I Analytic, s Copilo, t',
    pa, t, h: '/a, i-analytic, s-copilo, t', ic, o, n: Briefcas, e },
        { na, m, e: 'Autonomou, s Busines, s Operation, s',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Briefcas, e },
        { na, m, e: 'A, I-Powere, d I, T Asse, t Managemen, t',
    pa, t, h: '/a, i-powere, d-i, t-asse, t-managemen, t', ic, o, n: Briefcas, e }
      ]
    },
    {
      titl, e: 'Quantum & Emerging Tech',
    item, s: [
        { na, m, e: 'Quantu, m Neura, l Networ, k Platfor, m',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Glob, e },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Glob, e },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Briefcas, e },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Glob, e }
      ]
    },
    {
        { nam, e: 'AI Business Manager',
    pat, h: '/ai-autonomous-business-manager', ico, n: Briefcase },
        { nam, e: 'AI Business Platform',
    pat, h: '/ai-autonomous-business-platform', ico, n: Briefcase },
=======
        { nam, e: 'Business Intelligence',
    pat, h: '/services/business-intelligence', ico, n: Briefcase },
        { nam, e: 'AI Marketing Automation',
    pat, h: '/services/ai-marketing-automation', ico, n: Briefcase },
        { nam, e: 'AI HR & Recruitment',
    pat, h: '/services/ai-hr-recruitment', ico, n: Briefcase },
        { nam, e: 'AI Legal Tech',
    pat, h: '/services/ai-legal-tech', ico, n: Briefcase },
        { nam, e: 'Quantum Neural Networks',
    pat, h: '/quantum-neural-network-platform', ico, n: Briefcase },
        { nam, e: 'Autonomous Business Platform',
    pat, h: '/autonomous-business-operations-platform', ico, n: Briefcase },
        { nam, e: 'AI Asset Management',
    pat, h: '/ai-powered-it-asset-management', ico, n: Briefcase },
      titl, e: 'AI & Technology',
    item, s: [
        { na, m, e: 'A, I & Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Brai, n },
        { na, m, e: 'A, I Researc, h Assistan, t',
    pa, t, h: '/a, i-autonomou, s-researc, h-assistan, t', ic, o, n: Brai, n },
        { na, m, e: 'Quantu, m Neura, l Network, s',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'Autonomou, s Busines, s Platfor, m',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'A, I Asse, t Managemen, t',
    pa, t, h: '/a, i-powere, d-i, t-asse, t-managemen, t', ic, o, n: Brai, n },
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    pa, t, h: '/service, s/a, i-busines, s-intelligenc, e', ic, o, n: Brai, n },
        { na, m, e: 'A, I Marketin, g Automatio, n',
    pa, t, h: '/service, s/a, i-marketin, g-automatio, n', ic, o, n: Brai, n },
        { na, m, e: 'A, I H, R & Recruitmen, t',
    pa, t, h: '/service, s/a, i-h, r-recruitmen, t', ic, o, n: Brai, n },
        { na, m, e: 'A, I Lega, l Tec, h',
    pa, t, h: '/service, s/a, i-lega, l-tec, h', ic, o, n: Brai, n },
        { na, m, e: 'A, I Healthcar, e Analytic, s',
    pa, t, h: '/service, s/a, i-healthcar, e-analytic, s', ic, o, n: Brai, n }
      ]
    },
    {
      titl, e: 'Infrastructure & Security',
    item, s: [
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
      tit, l, e: 'A, I Service, s',
    ite, m, s: [
        { na, m, e: 'A, I Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Brai, n },
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    pa, t, h: '/service, s/a, i-busines, s-intelligenc, e', ic, o, n: Cp, u },
        { na, m, e: 'A, I Marketin, g Automatio, n',
    pa, t, h: '/service, s/a, i-marketin, g-automatio, n', ic, o, n: Za, p },
        { na, m, e: 'A, I Workflo, w Automatio, n',
    pa, t, h: '/a, i-workflo, w-automatio, n', ic, o, n: Za, p },
        { na, m, e: 'A, I Conten, t Generatio, n',
    pa, t, h: '/a, i-conten, t-generato, r', ic, o, n: Brai, n },
        { na, m, e: 'A, I Cod, e Revie, w',
    pa, t, h: '/a, i-cod, e-revie, w', ic, o, n: Cp, u },
        { na, m, e: 'A, I Researc, h Assistan, t',
    pa, t, h: '/a, i-autonomou, s-researc, h-assistan, t', ic, o, n: Brai, n },
        { na, m, e: 'A, I Autonomou, s Busines, s Manage, r',
    pa, t, h: '/a, i-autonomou, s-busines, s-manage, r', ic, o, n: Brai, n },
        { na, m, e: 'A, I Autonomou, s Busines, s Platfor, m',
    pa, t, h: '/a, i-autonomou, s-busines, s-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'A, I Autonomou, s Researc, h',
    pa, t, h: '/a, i-autonomou, s-researc, h', ic, o, n: Brai, n },
        { na, m, e: 'A, I Autonomou, s System, s Platfor, m',
    pa, t, h: '/a, i-autonomou, s-system, s-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'A, I Autonomou, s Cod, e Revie, w',
    pa, t, h: '/a, i-autonomou, s-cod, e-revie, w', ic, o, n: Cp, u },
        { na, m, e: 'A, I Autonomou, s Creativ, e Directo, r',
    pa, t, h: '/a, i-autonomou, s-creativ, e-directo, r', ic, o, n: Brai, n },
        { na, m, e: 'A, I Autonomou, s Dat, a',
    pa, t, h: '/a, i-autonomou, s-dat, a', ic, o, n: Databas, e },
        { na, m, e: 'A, I Autonomou, s Decisio, n Engin, e',
    pa, t, h: '/a, i-autonomou, s-decisio, n-engin, e', ic, o, n: Brai, n },
        { na, m, e: 'A, I Autonomou, s Decisio, n Platfor, m',
    pa, t, h: '/a, i-autonomou, s-decisio, n-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'A, I Autonomou, s DevOp, s',
    pa, t, h: '/a, i-autonomou, s-devop, s', ic, o, n: Cp, u },
        { na, m, e: 'A, I Autonomou, s Educatio, n Professo, r',
    pa, t, h: '/a, i-autonomou, s-educatio, n-professo, r', ic, o, n: User, s },
        { na, m, e: 'A, I Autonomou, s Healthcar, e Physicia, n',
    pa, t, h: '/a, i-autonomou, s-healthcar, e-physicia, n', ic, o, n: User, s },
        { na, m, e: 'A, I Autonomou, s Learnin, g Syste, m',
    pa, t, h: '/a, i-autonomou, s-learnin, g-syste, m', ic, o, n: Brai, n },
        { na, m, e: 'A, I Autonomou, s Lega, l Counse, l',
    pa, t, h: '/a, i-autonomou, s-lega, l-counse, l', ic, o, n: User, s },
        { na, m, e: 'A, I Autonomou, s Logistic, s',
    pa, t, h: '/a, i-autonomou, s-logistic, s', ic, o, n: Glob, e },
        { na, m, e: 'A, I Autonomou, s Manufacturin, g',
    pa, t, h: '/a, i-autonomou, s-manufacturin, g', ic, o, n: Cp, u },
        { na, m, e: 'A, I Autonomou, s Robotic, s',
    pa, t, h: '/a, i-autonomou, s-robotic, s', ic, o, n: Cp, u },
        { na, m, e: 'A, I Autonomou, s Scientifi, c Researche, r',
    pa, t, h: '/a, i-autonomou, s-scientifi, c-researche, r', ic, o, n: Brai, n },
        { na, m, e: 'A, I Autonomou, s Securit, y',
    pa, t, h: '/a, i-autonomou, s-securit, y', ic, o, n: Shiel, d },
        { na, m, e: 'A, I Autonomou, s Testin, g',
    pa, t, h: '/a, i-autonomou, s-testin, g', ic, o, n: Cp, u },
        { na, m, e: 'A, I Autonomou, s Vehicl, e Platfor, m',
    pa, t, h: '/a, i-autonomou, s-vehicl, e-platfor, m', ic, o, n: Rocke, t },
        { na, m, e: 'A, I Autonomou, s Vehicl, e',
    pa, t, h: '/a, i-autonomou, s-vehicl, e', ic, o, n: Rocke, t },
        { na, m, e: 'A, I Autonomou, s Vehicle, s Platfor, m',
    pa, t, h: '/a, i-autonomou, s-vehicle, s-platfor, m', ic, o, n: Rocke, t },
        { na, m, e: 'A, I Autonomou, s Vehicle, s',
    pa, t, h: '/a, i-autonomou, s-vehicle, s', ic, o, n: Rocke, t },
        { na, m, e: 'A, I Autonomou, s Ventur, e Capitalis, t',
    pa, t, h: '/a, i-autonomou, s-ventur, e-capitalis, t', ic, o, n: User, s }
=======
        { na, m, e: 'SOC, 2 Complianc, e',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: Shiel, d },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Glob, e },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Glob, e }
=======
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Cp, u },
        { na, m, e: 'Clou, d DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Cp, u },
        { na, m, e: '5, G Enterpris, e Solution, s',
    pa, t, h: '/5, g-enterpris, e-solution, s', ic, o, n: Cp, u },
        { na, m, e: 'Networ, k Infrastructur, e',
    pa, t, h: '/service, s/networ, k-infrastructur, e', ic, o, n: Cp, u },
        { na, m, e: 'Manage, d I, T Service, s',
    pa, t, h: '/service, s/manage, d-i, t-service, s', ic, o, n: Cp, u },
        { na, m, e: 'DevOp, s Automatio, n',
    pa, t, h: '/service, s/devop, s-automatio, n', ic, o, n: Cp, u },
        { na, m, e: 'Clou, d Migratio, n',
    pa, t, h: '/service, s/clou, d-migratio, n', ic, o, n: Cp, u }
=======
      tit, l, e: 'Cor, e Service, s',
    ite, m, s: [
        { na, m, e: 'A, I Solution, s',
    pa, t, h: '/a, i-solution, s', ic, o, n: Brai, n },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'Clou, d & DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Clou, d },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/quantu, m-technolog, y', ic, o, n: Za, p },
        { na, m, e: 'Enterpris, e Solution, s',
    pa, t, h: '/enterpris, e-solution, s', ic, o, n: Briefcas, e },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/i, t-infrastructur, e', ic, o, n: Setting, s }
      ]
    },
    {
      titl, e: 'AI Autonomous Systems',
    item, s: [
        { na, m, e: 'A, I Busines, s Manage, r',
    pa, t, h: '/a, i-autonomou, s-busines, s-manage, r', ic, o, n: Brai, n },
        { na, m, e: 'A, I Researc, h Assistan, t',
    pa, t, h: '/a, i-autonomou, s-researc, h-assistan, t', ic, o, n: BookOpe, n },
        { na, m, e: 'A, I Cod, e Revie, w',
    pa, t, h: '/a, i-autonomou, s-cod, e-revie, w', ic, o, n: Cod, e },
        { na, m, e: 'A, I Creativ, e Directo, r',
    pa, t, h: '/a, i-autonomou, s-creativ, e-directo, r', ic, o, n: Sta, r },
        { na, m, e: 'A, I Decisio, n Engin, e',
    pa, t, h: '/a, i-autonomou, s-decisio, n-engin, e', ic, o, n: Za, p },
        { na, m, e: 'A, I Autonomou, s System, s Platfor, m',
    pa, t, h: '/a, i-autonomou, s-system, s-platfor, m', ic, o, n: Rocke, t }
      ]
    },
    {
      titl, e: 'Innovative Services',
    item, s: [
        { na, m, e: 'Innovativ, e Service, s Showcas, e',
    pa, t, h: '/innovativ, e-service, s-showcas, e', ic, o, n: Rocke, t },
        { na, m, e: 'Comprehensiv, e Service, s',
    pa, t, h: '/comprehensiv, e-service, s-overvie, w', ic, o, n: Briefcas, e },
        { na, m, e: 'Micr, o Saa, S Solution, s',
    pa, t, h: '/micr, o-saa, s-solution, s', ic, o, n: Glob, e },
        { na, m, e: 'Emergin, g Technolog, y',
    pa, t, h: '/emergin, g-tec, h', ic, o, n: Za, p },
        { na, m, e: 'Quantu, m Neura, l Network, s',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'Autonomou, s Busines, s Platfor, m',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Setting, s }
      ]
    },
    {
      titl, e: 'Industry Solutions',
    item, s: [
      ite, m, s: [
        { na, m, e: '5, G Enterpris, e Solution, s',
    pa, t, h: '/5, g-enterpris, e-solution, s', ic, o, n: Briefcas, e },
        { na, m, e: '5, G Enterpris, e Networ, k',
    pa, t, h: '/5, g-enterpris, e-networ, k', ic, o, n: Briefcas, e },
        { na, m, e: '5, G Networ, k Optimizatio, n',
    pa, t, h: '/5, g-networ, k-optimizatio, n', ic, o, n: Briefcas, e },
        { na, m, e: '5, G Privat, e Networ, k Solution, s',
    pa, t, h: '/5, g-privat, e-networ, k-solution, s', ic, o, n: Briefcas, e },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Briefcas, e },
        { na, m, e: 'Clou, d DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Briefcas, e }
      ]
    },
    {
      titl, e: 'Cybersecurity & Compliance',
    item, s: [
        { na, m, e: 'Cybersecurit, y Service, s',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'Advance, d Cybersecurit, y Suit, e',
    pa, t, h: '/advance, d-cybersecurit, y-suit, e', ic, o, n: Shiel, d },
        { na, m, e: 'SOC, 2 Complianc, e',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: Shiel, d },
        { na, m, e: 'Accessibilit, y Audito, r',
    pa, t, h: '/accessibilit, y-audito, r', ic, o, n: Ey, e }
      ]
    },
    {
      titl, e: 'Other Services',
    item, s: [
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Glob, e },
        { na, m, e: 'Emergin, g Technolog, y',
    pa, t, h: '/emergin, g-tec, h', ic, o, n: Glob, e },
        { na, m, e: 'Industr, y Solution, s',
    pa, t, h: '/service, s/industr, y-solution, s', ic, o, n: Glob, e }
      ]
    },
    {
      titl, e: 'Technology Services',
    item, s: [
        { na, m, e: 'Quantu, m Neura, l Network, s',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'Autonomou, s Busines, s Platfor, m',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Briefcas, e },
        { na, m, e: 'A, I Asse, t Managemen, t',
    pa, t, h: '/a, i-powere, d-i, t-asse, t-managemen, t', ic, o, n: Databas, e },
        { na, m, e: 'SOC, 2 Complianc, e',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: Shiel, d },
        { na, m, e: '5, G Enterpris, e Solution, s',
    pa, t, h: '/5, g-enterpris, e-solution, s', ic, o, n: Networ, k },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Glob, e },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Cp, u },
        { na, m, e: 'Clou, d & DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Clou, d },
        { na, m, e: 'Digita, l Transformatio, n',
    pa, t, h: '/digita, l-transformatio, n', ic, o, n: Za, p },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Emergin, g Technolog, y',
    pa, t, h: '/emergin, g-tec, h', ic, o, n: Rocke, t },
        { na, m, e: 'Spac, e Technolog, y',
    pa, t, h: '/spac, e-tec, h', ic, o, n: Rocke, t },
        { na, m, e: 'Researc, h & Developmen, t',
    pa, t, h: '/researc, h-developmen, t', ic, o, n: Brai, n }
      ]
    },
    {
      titl, e: 'AI Specialized Solutions',
    item, s: [
        { na, m, e: 'A, I Biomedica, l Researc, h',
    pa, t, h: '/a, i-biomedica, l-researc, h', ic, o, n: Hear, t },
        { na, m, e: 'A, I Biotec, h Dru, g Discover, y',
    pa, t, h: '/a, i-biotec, h-dru, g-discover, y', ic, o, n: TestTub, e },
        { na, m, e: 'A, I Blockchai, n Analytic, s',
    pa, t, h: '/a, i-blockchai, n-analytic, s', ic, o, n: Databas, e },
        { na, m, e: 'A, I Blockchai, n Governanc, e',
    pa, t, h: '/a, i-blockchai, n-governanc, e', ic, o, n: Shiel, d },
        { na, m, e: 'A, I Brai, n Compute, r Interfac, e',
    pa, t, h: '/a, i-brai, n-compute, r-interfac, e', ic, o, n: Brai, n },
        { na, m, e: 'A, I Brai, n Interfac, e',
    pa, t, h: '/a, i-brai, n-interfac, e', ic, o, n: Brai, n },
        { na, m, e: 'A, I Bran, d Personalit, y Generato, r',
    pa, t, h: '/a, i-bran, d-personalit, y-generato, r', ic, o, n: Palett, e },
        { na, m, e: 'A, I Busines, s Intelligenc, e Elit, e',
    pa, t, h: '/a, i-busines, s-intelligenc, e-elit, e', ic, o, n: BarChart, 3 },
        { na, m, e: 'A, I Busines, s Intelligenc, e Pr, o',
    pa, t, h: '/a, i-busines, s-intelligenc, e-pr, o', ic, o, n: BarChart, 3 },
        { na, m, e: 'A, I Busines, s Intelligenc, e Suit, e',
    pa, t, h: '/a, i-busines, s-intelligenc, e-suit, e', ic, o, n: BarChart, 3 },
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    pa, t, h: '/a, i-busines, s-intelligenc, e', ic, o, n: BarChart, 3 },
        { na, m, e: 'A, I Climat, e Predictio, n Engin, e',
    pa, t, h: '/a, i-climat, e-predictio, n-engin, e', ic, o, n: Glob, e },
        { na, m, e: 'A, I Climat, e Predictio, n Platfor, m',
    pa, t, h: '/a, i-climat, e-predictio, n-platfor, m', ic, o, n: Glob, e },
        { na, m, e: 'A, I Climat, e Predictio, n',
    pa, t, h: '/a, i-climat, e-predictio, n', ic, o, n: Glob, e },
        { na, m, e: 'A, I Cod, e Generatio, n Enterpris, e',
    pa, t, h: '/a, i-cod, e-generatio, n-enterpris, e', ic, o, n: Cod, e },
        { na, m, e: 'A, I Cod, e Revie, w Copilo, t',
    pa, t, h: '/a, i-cod, e-revie, w-copilo, t', ic, o, n: Cod, e },
        { na, m, e: 'A, I Cod, e Revie, w',
    pa, t, h: '/a, i-cod, e-revie, w', ic, o, n: Cod, e },
        { na, m, e: 'A, I Complianc, e Automatio, n',
    pa, t, h: '/a, i-complianc, e-automatio, n', ic, o, n: Shiel, d },
        { na, m, e: 'A, I Compute, r Visio, n Platfor, m',
    pa, t, h: '/a, i-compute, r-visio, n-platfor, m', ic, o, n: Ey, e },
        { na, m, e: 'A, I Consciousnes, s Evolutio, n',
    pa, t, h: '/a, i-consciousnes, s-evolutio, n', ic, o, n: Brai, n },
        { na, m, e: 'A, I Consciousnes, s Evolutio, n Platfor, m',
    pa, t, h: '/a, i-consciousnes, s-evolutio, n-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'A, I Consciousnes, s Simulatio, n Platfor, m',
    pa, t, h: '/a, i-consciousnes, s-simulatio, n-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'A, I Consciousnes, s Simulatio, n',
    pa, t, h: '/a, i-consciousnes, s-simulatio, n', ic, o, n: Brai, n },
        { na, m, e: 'A, I Consciousnes, s Simulato, r',
    pa, t, h: '/a, i-consciousnes, s-simulato, r', ic, o, n: Brai, n },
        { na, m, e: 'A, I Conten, t Creatio, n Revolutio, n',
    pa, t, h: '/a, i-conten, t-creatio, n-revolutio, n', ic, o, n: PenToo, l },
        { na, m, e: 'A, I Conten, t Creatio, n',
    pa, t, h: '/a, i-conten, t-creatio, n', ic, o, n: PenToo, l },
        { na, m, e: 'A, I Conten, t Factor, y',
    pa, t, h: '/a, i-conten, t-factor, y', ic, o, n: Building, 2 },
        { na, m, e: 'A, I Conten, t Generatio, n Automatio, n',
    pa, t, h: '/a, i-conten, t-generatio, n-automatio, n', ic, o, n: PenToo, l },
        { na, m, e: 'A, I Conten, t Generatio, n Pr, o',
    pa, t, h: '/a, i-conten, t-generatio, n-pr, o', ic, o, n: PenToo, l },
        { na, m, e: 'A, I Conten, t Generato, r',
    pa, t, h: '/a, i-conten, t-generato, r', ic, o, n: PenToo, l },
        { na, m, e: 'A, I Conten, t Marketin, g Automatio, n',
    pa, t, h: '/a, i-conten, t-marketin, g-automatio, n', ic, o, n: TrendingU, p },
        { na, m, e: 'A, I Conten, t Personalizatio, n Engin, e',
    pa, t, h: '/a, i-conten, t-personalizatio, n-engin, e', ic, o, n: Targe, t },
        { na, m, e: 'A, I Creativit, y Studi, o',
    pa, t, h: '/a, i-creativit, y-studi, o', ic, o, n: Palett, e },
        { na, m, e: 'A, I Marke, t Researc, h',
    pa, t, h: '/a, i-marke, t-researc, h', ic, o, n: Searc, h },
        { na, m, e: 'A, I Powere, d Enterpris, e Securit, y',
    pa, t, h: '/a, i-powere, d-enterpris, e-securit, y', ic, o, n: Shiel, d },
        { na, m, e: 'A, I Workflo, w Automatio, n',
    pa, t, h: '/a, i-workflo, w-automatio, n', ic, o, n: Za, p }
      ]
    },
    {
      titl, e: 'Core Services',
    item, s: [
        { na, m, e: 'A, I & Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Brai, n },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'Advance, d Cybersecurit, y Suit, e',
    pa, t, h: '/advance, d-cybersecurit, y-suit, e', ic, o, n: Shiel, d },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Serve, r },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Ato, m },
        { na, m, e: 'Quantu, m Neura, l Networ, k Platfor, m',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Glob, e },
        { na, m, e: 'Industr, y Solution, s',
    pa, t, h: '/service, s/industr, y-solution, s', ic, o, n: Buildin, g },
        { na, m, e: 'Accessibilit, y Audito, r',
    pa, t, h: '/accessibilit, y-audito, r', ic, o, n: Ey, e },
        { na, m, e: 'Affiliat, e Attributio, n Hu, b',
    pa, t, h: '/affiliat, e-attributio, n-hu, b', ic, o, n: BarChart, 3 },
        { na, m, e: 'SOC, 2 Complianc, e Automatio, n',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: Shiel, d },
        { na, m, e: '5, G Enterpris, e Solution, s',
    pa, t, h: '/5, g-enterpris, e-solution, s', ic, o, n: Networ, k },
        { na, m, e: 'Autonomou, s Busines, s Operation, s Platfor, m',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Briefcas, e },
        { na, m, e: 'A, I Powere, d I, T Asse, t Managemen, t',
    pa, t, h: '/a, i-powere, d-i, t-asse, t-managemen, t', ic, o, n: Databas, e }
      tit, l, e: 'A, I & Autonomou, s System, s',
    ite, m, s: [
        { na, m, e: 'A, I Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Brai, n },
        { na, m, e: 'A, I Researc, h Assistan, t',
    pa, t, h: '/a, i-autonomou, s-researc, h-assistan, t', ic, o, n: Brai, n },
        { na, m, e: 'A, I Busines, s Manage, r',
    pa, t, h: '/service, s/a, i-autonomou, s-busines, s-manage, r', ic, o, n: Brai, n },
        { na, m, e: 'A, I Busines, s Platfor, m',
    pa, t, h: '/service, s/a, i-autonomou, s-busines, s-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'A, I Cod, e Revie, w',
    pa, t, h: '/service, s/a, i-autonomou, s-cod, e-revie, w', ic, o, n: Cod, e },
        { na, m, e: 'A, I Creativ, e Directo, r',
    pa, t, h: '/service, s/a, i-autonomou, s-creativ, e-directo, r', ic, o, n: Palett, e },
        { na, m, e: 'A, I Workflo, w Automatio, n',
    pa, t, h: '/service, s/a, i-workflo, w-automatio, n', ic, o, n: Workflo, w },
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    pa, t, h: '/service, s/a, i-busines, s-intelligenc, e', ic, o, n: BarChart, 3 },
        { na, m, e: 'A, I Marketin, g Automatio, n',
    pa, t, h: '/service, s/a, i-marketin, g-automatio, n', ic, o, n: Targe, t },
        { na, m, e: 'A, I Conten, t Generatio, n',
    pa, t, h: '/service, s/a, i-conten, t-generatio, n-automatio, n', ic, o, n: Cod, e },
        { na, m, e: 'A, I Consciousnes, s Evolutio, n',
    pa, t, h: '/service, s/a, i-consciousnes, s-evolutio, n', ic, o, n: Brai, n }
      ]
    },
    {
      titl, e: 'Technology & Infrastructure',
    item, s: [
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Brai, n },
        { na, m, e: 'Quantu, m Neura, l Network, s',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'SOC, 2 Complianc, e',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: Loc, k },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Serve, r },
        { na, m, e: 'Clou, d DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Clou, d },
        { na, m, e: '5, G Enterpris, e Solution, s',
    pa, t, h: '/5, g-enterpris, e-solution, s', ic, o, n: Networ, k },
        { na, m, e: 'Networ, k Infrastructur, e',
    pa, t, h: '/service, s/networ, k-infrastructur, e', ic, o, n: Networ, k },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Glob, e }
      ]
    },
    {
      titl, e: 'Emerging Technologies',
    item, s: [
        { na, m, e: 'Blockchai, n Solution, s',
    pa, t, h: '/service, s/blockchai, n-enterpris, e-solution, s', ic, o, n: Brai, n },
        { na, m, e: 'Io, T Dat, a Analytic, s',
    pa, t, h: '/service, s/io, t-dat, a-analytic, s', ic, o, n: Networ, k },
        { na, m, e: 'A, R/V, R Solution, s',
    pa, t, h: '/service, s/a, r-v, r-solution, s', ic, o, n: Ey, e },
        { na, m, e: 'Autonomou, s Busines, s Platfor, m',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Buildin, g },
        { na, m, e: 'A, I Asse, t Managemen, t',
    pa, t, h: '/a, i-powere, d-i, t-asse, t-managemen, t', ic, o, n: Databas, e },
        { na, m, e: 'Emergin, g Technolog, y',
    pa, t, h: '/emergin, g-tec, h', ic, o, n: Rocke, t }
      ]
    },
    {
      titl, e: 'Solutions & Industries',
    item, s: [
        { na, m, e: 'Enterpris, e Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Buildin, g },
        { na, m, e: 'Healthcar, e Solution, s',
    pa, t, h: '/solution, s/healthcar, e', ic, o, n: Hear, t },
        { na, m, e: 'Financia, l Solution, s',
    pa, t, h: '/solution, s/financia, l', ic, o, n: TrendingU, p },
        { na, m, e: 'Manufacturin, g Solution, s',
    pa, t, h: '/solution, s/manufacturin, g', ic, o, n: Cp, u },
        { na, m, e: 'Retai, l Solution, s',
    pa, t, h: '/solution, s/retai, l', ic, o, n: ShoppingCar, t },
        { na, m, e: 'Governmen, t Solution, s',
    pa, t, h: '/solution, s/governmen, t', ic, o, n: Buildin, g },
        { na, m, e: 'Digita, l Transformatio, n',
    pa, t, h: '/digita, l-transformatio, n', ic, o, n: Rocke, t }
=======
      tit, l, e: 'A, I & Technolog, y Service, s',
    ite, m, s: [
        { na, m, e: 'A, I & Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Brai, n },
        { na, m, e: 'A, I Researc, h Assistan, t',
    pa, t, h: '/a, i-autonomou, s-researc, h-assistan, t', ic, o, n: Brai, n },
        { na, m, e: 'Agenti, c RA, G Helpdes, k',
    pa, t, h: '/agenti, c-ra, g-helpdes, k', ic, o, n: MessageCircl, e },
        { na, m, e: 'Quantu, m Neura, l Network, s',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Za, p },
        { na, m, e: 'Autonomou, s Busines, s Platfor, m',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Rocke, t },
        { na, m, e: 'A, I Asse, t Managemen, t',
    pa, t, h: '/a, i-powere, d-i, t-asse, t-managemen, t', ic, o, n: Databas, e },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Za, p },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Clou, d },
        { na, m, e: '5, G Enterpris, e Solution, s',
    pa, t, h: '/5, g-enterpris, e-solution, s', ic, o, n: Networ, k },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Glob, e },
        { na, m, e: 'Emergin, g Technolog, y',
    pa, t, h: '/emergin, g-tec, h', ic, o, n: Lightbul, b }
      ]
    },
    {
      titl, e: 'Security & Compliance',
    item, s: [
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'SOC, 2 Complianc, e',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: CheckCircl, e },
        { na, m, e: 'Accessibilit, y Audito, r',
    pa, t, h: '/accessibilit, y-audito, r', ic, o, n: Ey, e },
        { na, m, e: 'Securit, y Assessmen, t',
    pa, t, h: '/service, s#securit, y-assessmen, t', ic, o, n: Shiel, d },
        { na, m, e: 'Complianc, e & Audi, t',
    pa, t, h: '/service, s#complianc, e', ic, o, n: FileTex, t }
      ]
    },
    {
      titl, e: 'Company & Resources',
=======
      titl, e: 'Company & Support',
    item, s: [
        { na, m, e: 'Abou, t U, s',
    pa, t, h: '/abou, t', ic, o, n: User, s },
        { na, m, e: 'Ou, r Missio, n',
    pa, t, h: '/missio, n', ic, o, n: Targe, t },
        { na, m, e: 'Ou, r Tea, m',
    pa, t, h: '/tea, m', ic, o, n: User, s },
        { na, m, e: 'New, s',
    pa, t, h: '/new, s', ic, o, n: Glob, e },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: Glob, e }
=======
        { na, m, e: 'Ou, r Tea, m',
    pa, t, h: '/tea, m', ic, o, n: User, s },
        { na, m, e: 'Missio, n',
    pa, t, h: '/missio, n', ic, o, n: Targe, t },
        { na, m, e: 'Partner, s',
    pa, t, h: '/partner, s', ic, o, n: Handshak, e },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: Briefcas, e },
        { na, m, e: 'New, s',
    pa, t, h: '/new, s', ic, o, n: Glob, e },
        { na, m, e: 'Blo, g',
    pa, t, h: '/blo, g', ic, o, n: Glob, e },
        { na, m, e: 'Ou, r Missio, n',
    pa, t, h: '/missio, n', ic, o, n: User, s },
        { na, m, e: 'Partner, s',
    pa, t, h: '/partner, s', ic, o, n: Handshak, e }
=======
        { na, m, e: 'Ou, r Missio, n',
    pa, t, h: '/missio, n', ic, o, n: User, s },
        { na, m, e: 'Ou, r Tea, m',
    pa, t, h: '/tea, m', ic, o, n: User, s },
        { na, m, e: 'Partner, s',
    pa, t, h: '/partner, s', ic, o, n: Handshak, e }
      ]
    },
    {
      titl, e: 'Support & Resources',
        { nam, e: 'Our Mission',
    pat, h: '/mission', ico, n: Star },
        { nam, e: 'Team',
    pat, h: '/team', ico, n: Users },
        { nam, e: 'Partners',
    pat, h: '/partners', ico, n: Handshake },
        { nam, e: 'Case Studies',
    pat, h: '/case-studies', ico, n: Star },
        { nam, e: 'Blog',
    pat, h: '/blog', ico, n: Globe },
        { nam, e: 'News',
    pat, h: '/news', ico, n: Globe },
        { nam, e: 'Careers',
    pat, h: '/careers', ico, n: Briefcase }
      ]
    },
    {
      titl, e: 'Support & Help',
    item, s: [
=======
        { na, m, e: 'Hel, p Cente, r',
    pa, t, h: '/hel, p', ic, o, n: User, s },
        { na, m, e: 'Documentatio, n',
    pa, t, h: '/doc, s', ic, o, n: Glob, e },
      ic, o, n: Ho, m, e,
    ite, m, s: [
        { na, m, e: 'Hom, e',
    pa, t, h: '/', ic, o, n: Ho, m, e,
    descripti, o, n: 'Welcom, e t, o Zio, n Tec, h Grou, p' },
        { na, m, e: 'Service, s',
    pa, t, h: '/service, s', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Explor, e ou, r A, I service, s' },
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Rock, e, t,
    descripti, o, n: 'Industr, y solution, s' },
        { na, m, e: 'Pricin, g',
    pa, t, h: '/pricin, g', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Servic, e plan, s an, d pricin, g' },
        { na, m, e: 'Abou, t',
    pa, t, h: '/abou, t', ic, o, n: Use, r, s,
    descripti, o, n: 'Lear, n abou, t ou, r compan, y' },
        { na, m, e: 'Contac, t',
    pa, t, h: '/contac, t', ic, o, n: Pho, n, e,
    descripti, o, n: 'Ge, t i, n touc, h wit, h u, s' }
      ]
    },
    {
      titl, e: 'AI & Micro SAAS Services',
    ico, n: Brai, n,
      item, s: [
        { na, m, e: 'A, I & Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Brai, n },
        { na, m, e: 'A, I Workflo, w Automatio, n',
    pa, t, h: '/service, s/a, i-workflo, w-automatio, n', ic, o, n: Brai, n },
        { na, m, e: 'A, I Custome, r Intelligenc, e',
    pa, t, h: '/service, s/a, i-custome, r-intelligenc, e', ic, o, n: User, s },
        { na, m, e: 'A, I Predictiv, e Analytic, s',
    pa, t, h: '/service, s/a, i-predictiv, e-analytic, s', ic, o, n: BarChart, 3 },
        { na, m, e: 'A, I Researc, h Assistan, t',
    pa, t, h: '/a, i-autonomou, s-researc, h-assistan, t', ic, o, n: Brai, n },
        { na, m, e: 'Advance, d Researc, h Automatio, n',
    pa, t, h: '/advance, d-researc, h-automatio, n', ic, o, n: Brai, n },
        { na, m, e: 'Quantu, m Neura, l Network, s',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'Autonomou, s Busines, s Platfor, m',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Rocke, t },
        { na, m, e: 'A, I Asse, t Managemen, t',
    pa, t, h: '/a, i-powere, d-i, t-asse, t-managemen, t', ic, o, n: Databas, e },
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    pa, t, h: '/service, s/a, i-busines, s-intelligenc, e', ic, o, n: BarChart, 3 },
        { na, m, e: 'A, I Marketin, g Automatio, n',
    pa, t, h: '/service, s/a, i-marketin, g-automatio, n', ic, o, n: Targe, t },
        { na, m, e: 'Affiliat, e Attributio, n Hu, b',
    pa, t, h: '/affiliat, e-attributio, n-hu, b', ic, o, n: BarChart, 3 },
        { na, m, e: 'A, I H, R & Recruitmen, t',
    pa, t, h: '/service, s/a, i-h, r-recruitmen, t', ic, o, n: User, s },
        { na, m, e: 'A, I Lega, l Tec, h',
    pa, t, h: '/service, s/a, i-lega, l-tec, h', ic, o, n: Shiel, d },
        { na, m, e: 'Quantu, m-Secur, e Clou, d',
    pa, t, h: '/service, s/quantu, m-secur, e-clou, d', ic, o, n: Shiel, d },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'SOC, 2 Complianc, e',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: Shiel, d },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Glob, e },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Briefcas, e },
        { na, m, e: '5, G Enterpris, e Solution, s',
    pa, t, h: '/5, g-enterpris, e-solution, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Glob, e },
        { na, m, e: 'Clou, d DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Digita, l Transformatio, n',
    pa, t, h: '/digita, l-transformatio, n', ic, o, n: Briefcas, e },
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    pa, t, h: '/service, s/a, i-busines, s-intelligenc, e', ic, o, n: Briefcas, e },
        { na, m, e: 'Emergin, g Technolog, y',
    pa, t, h: '/emergin, g-tec, h', ic, o, n: Glob, e }
=======
      tit, l, e: 'A, I & Autonomou, s System, s',
    ite, m, s: [
        { na, m, e: 'A, I Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Brai, n },
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    pa, t, h: '/service, s/a, i-busines, s-intelligenc, e', ic, o, n: BarChart, 3 },
        { na, m, e: 'A, I Marketin, g Automatio, n',
    pa, t, h: '/service, s/a, i-marketin, g-automatio, n', ic, o, n: Targe, t },
        { na, m, e: 'A, I Workflo, w Automatio, n',
    pa, t, h: '/a, i-workflo, w-automatio, n', ic, o, n: Za, p },
        { na, m, e: 'A, I Autonomou, s Researc, h',
    pa, t, h: '/a, i-autonomou, s-researc, h-assistan, t', ic, o, n: Microscop, e },
        { na, m, e: 'A, I Conten, t Generatio, n',
    pa, t, h: '/a, i-conten, t-generato, r', ic, o, n: FileTex, t },
        { na, m, e: 'A, I Cod, e Revie, w',
    pa, t, h: '/a, i-cod, e-revie, w', ic, o, n: Cp, u },
        { na, m, e: 'A, I Autonomou, s Busines, s Manage, r',
    pa, t, h: '/a, i-autonomou, s-busines, s-manage, r', ic, o, n: Building, 2 },
        { na, m, e: 'A, I Autonomou, s Busines, s Platfor, m',
    pa, t, h: '/a, i-autonomou, s-busines, s-platfor, m', ic, o, n: Rocke, t },
        { na, m, e: 'A, I Autonomou, s Cod, e Revie, w',
    pa, t, h: '/a, i-autonomou, s-cod, e-revie, w', ic, o, n: Cp, u },
        { na, m, e: 'A, I Autonomou, s Creativ, e Directo, r',
    pa, t, h: '/a, i-autonomou, s-creativ, e-directo, r', ic, o, n: Brai, n },
        { na, m, e: 'A, I Autonomou, s Dat, a',
    pa, t, h: '/a, i-autonomou, s-dat, a', ic, o, n: Databas, e },
        { na, m, e: 'A, I Autonomou, s Decisio, n Engin, e',
    pa, t, h: '/a, i-autonomou, s-decisio, n-engin, e', ic, o, n: Targe, t },
        { na, m, e: 'A, I Autonomou, s Decisio, n Platfor, m',
    pa, t, h: '/a, i-autonomou, s-decisio, n-platfor, m', ic, o, n: Targe, t },
        { na, m, e: 'A, I Autonomou, s DevOp, s',
    pa, t, h: '/a, i-autonomou, s-devop, s', ic, o, n: Setting, s },
        { na, m, e: 'A, I Autonomou, s Educatio, n Professo, r',
    pa, t, h: '/a, i-autonomou, s-educatio, n-professo, r', ic, o, n: GraduationCa, p },
        { na, m, e: 'A, I Autonomou, s Healthcar, e Physicia, n',
    pa, t, h: '/a, i-autonomou, s-healthcar, e-physicia, n', ic, o, n: Hear, t },
        { na, m, e: 'A, I Autonomou, s Learnin, g Syste, m',
    pa, t, h: '/a, i-autonomou, s-learnin, g-syste, m', ic, o, n: BookOpe, n },
        { na, m, e: 'A, I Autonomou, s Lega, l Counse, l',
    pa, t, h: '/a, i-autonomou, s-lega, l-counse, l', ic, o, n: Shiel, d },
        { na, m, e: 'A, I Autonomou, s Logistic, s',
    pa, t, h: '/a, i-autonomou, s-logistic, s', ic, o, n: Truc, k },
        { na, m, e: 'A, I Autonomou, s Manufacturin, g',
    pa, t, h: '/a, i-autonomou, s-manufacturin, g', ic, o, n: Factor, y },
        { na, m, e: 'A, I Autonomou, s Researc, h',
    pa, t, h: '/a, i-autonomou, s-researc, h', ic, o, n: Microscop, e },
        { na, m, e: 'A, I Autonomou, s Robotic, s',
    pa, t, h: '/a, i-autonomou, s-robotic, s', ic, o, n: Cp, u },
        { na, m, e: 'A, I Autonomou, s Scientifi, c Researche, r',
    pa, t, h: '/a, i-autonomou, s-scientifi, c-researche, r', ic, o, n: Microscop, e },
        { na, m, e: 'A, I Autonomou, s Securit, y',
    pa, t, h: '/a, i-autonomou, s-securit, y', ic, o, n: Loc, k },
        { na, m, e: 'A, I Autonomou, s System, s Platfor, m',
    pa, t, h: '/a, i-autonomou, s-system, s-platfor, m', ic, o, n: Rocke, t },
        { na, m, e: 'A, I Autonomou, s Testin, g',
    pa, t, h: '/a, i-autonomou, s-testin, g', ic, o, n: Cp, u },
        { na, m, e: 'A, I Autonomou, s Vehicl, e Platfor, m',
    pa, t, h: '/a, i-autonomou, s-vehicl, e-platfor, m', ic, o, n: Ca, r },
        { na, m, e: 'A, I Autonomou, s Vehicl, e',
    pa, t, h: '/a, i-autonomou, s-vehicl, e', ic, o, n: Ca, r },
        { na, m, e: 'A, I Autonomou, s Vehicle, s Platfor, m',
    pa, t, h: '/a, i-autonomou, s-vehicle, s-platfor, m', ic, o, n: Ca, r },
        { na, m, e: 'A, I Autonomou, s Vehicle, s',
    pa, t, h: '/a, i-autonomou, s-vehicle, s', ic, o, n: Ca, r },
        { na, m, e: 'A, I Autonomou, s Ventur, e Capitalis, t',
    pa, t, h: '/a, i-autonomou, s-ventur, e-capitalis, t', ic, o, n: Targe, t },
=======
        { na, m, e: 'Healthcar, e',
    pa, t, h: '/solution, s/healthcar, e', ic, o, n: Shiel, d },
        { na, m, e: 'Financ, e',
    pa, t, h: '/solution, s/financ, e', ic, o, n: Briefcas, e },
        { na, m, e: 'Manufacturin, g',
    pa, t, h: '/solution, s/manufacturin, g', ic, o, n: Setting, s },
        { na, m, e: 'Retai, l',
    pa, t, h: '/solution, s/retai, l', ic, o, n: Glob, e },
        { na, m, e: 'Educatio, n',
    pa, t, h: '/solution, s/educatio, n', ic, o, n: BookOpe, n },
        { na, m, e: 'Governmen, t',
    pa, t, h: '/solution, s/governmen, t', ic, o, n: Shiel, d }
      ]
    },
    {
      titl, e: 'Quantum Technology',
=======
      titl, e: 'AI & Technology',
    item, s: [
        { na, m, e: 'A, I & Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Brai, n },
        { na, m, e: 'A, I Researc, h Assistan, t',
    pa, t, h: '/a, i-autonomou, s-researc, h-assistan, t', ic, o, n: Brai, n },
        { na, m, e: 'Quantu, m Neura, l Network, s',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'Autonomou, s Busines, s Platfor, m',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Rocke, t },
        { na, m, e: 'A, I Asse, t Managemen, t',
    pa, t, h: '/a, i-powere, d-i, t-asse, t-managemen, t', ic, o, n: Databas, e },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Glob, e },
        { na, m, e: 'Machin, e Learnin, g',
    pa, t, h: '/service, s/a, i-machin, e-learnin, g', ic, o, n: Brai, n },
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    pa, t, h: '/service, s/a, i-busines, s-intelligenc, e', ic, o, n: BarChart, 3 }
      ]
    },
    {
      titl, e: 'Infrastructure & Security',
    item, s: [
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Serve, r },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'SOC, 2 Complianc, e',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: Loc, k },
        { na, m, e: 'Clou, d DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Clou, d },
        { na, m, e: '5, G Enterpris, e Solution, s',
    pa, t, h: '/5, g-enterpris, e-solution, s', ic, o, n: Networ, k },
        { na, m, e: 'Networ, k Infrastructur, e',
    pa, t, h: '/service, s/networ, k-infrastructur, e', ic, o, n: Networ, k },
        { na, m, e: 'Manage, d I, T Service, s',
    pa, t, h: '/service, s/manage, d-i, t-service, s', ic, o, n: Serve, r },
        { na, m, e: 'Securit, y Assessmen, t',
    pa, t, h: '/service, s/securit, y-assessmen, t', ic, o, n: Shiel, d }
      ]
    },
    {
      titl, e: 'Industry Solutions',
    item, s: [
        { na, m, e: 'Enterpris, e Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Buildin, g },
        { na, m, e: 'Healthcar, e Solution, s',
    pa, t, h: '/solution, s/healthcar, e', ic, o, n: User, s },
        { na, m, e: 'Financia, l Solution, s',
    pa, t, h: '/solution, s/financia, l', ic, o, n: BarChart, 3 },
        { na, m, e: 'Manufacturin, g Solution, s',
    pa, t, h: '/solution, s/manufacturin, g', ic, o, n: Cp, u },
        { na, m, e: 'Retai, l Solution, s',
    pa, t, h: '/solution, s/retai, l', ic, o, n: Smartphon, e },
        { na, m, e: 'Governmen, t Solution, s',
    pa, t, h: '/solution, s/governmen, t', ic, o, n: Buildin, g },
        { na, m, e: 'Digita, l Transformatio, n',
    pa, t, h: '/digita, l-transformatio, n', ic, o, n: Za, p },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Glob, e }
      ]
    },
    {
      titl, e: 'Company & Resources',
    item, s: [
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Brai, n },
        { na, m, e: 'Quantu, m Neura, l Network, s',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'Quantu, m Clou, d Infrastructur, e',
    pa, t, h: '/quantu, m-clou, d-infrastructur, e', ic, o, n: Clou, d },
        { na, m, e: 'Quantu, m Financia, l Tradin, g',
    pa, t, h: '/quantu, m-financia, l-tradin, g', ic, o, n: BarChart, 3 },
        { na, m, e: 'Quantu, m Service, s',
    pa, t, h: '/quantu, m-service, s', ic, o, n: Glob, e },
      ]
    },
    {
      titl, e: 'Cybersecurity & Compliance',
    item, s: [
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'SOC, 2 Complianc, e',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: Loc, k },
        { na, m, e: 'A, I-Powere, d Securit, y',
    pa, t, h: '/a, i-powere, d-enterpris, e-securit, y', ic, o, n: Shiel, d },
        { na, m, e: 'Autonomou, s Securit, y',
    pa, t, h: '/a, i-autonomou, s-securit, y', ic, o, n: Loc, k },
      ]
    },
    {
      titl, e: 'Infrastructure & Solutions',
    item, s: [
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Cp, u },
        { na, m, e: '5, G Enterpris, e Solution, s',
    pa, t, h: '/5, g-enterpris, e-solution, s', ic, o, n: Signa, l },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Glob, e },
        { na, m, e: 'Blockchai, n Solution, s',
    pa, t, h: '/blockchai, n-enterpris, e-solution, s', ic, o, n: LinkIco, n },
        { na, m, e: 'Io, T Dat, a Analytic, s',
    pa, t, h: '/io, t-dat, a-analytic, s', ic, o, n: Databas, e },
        { na, m, e: 'Spac, e Technolog, y',
    pa, t, h: '/spac, e-tec, h', ic, o, n: Satellit, e },
        { na, m, e: 'A, I-Powere, d I, T Asse, t Managemen, t',
    pa, t, h: '/a, i-powere, d-i, t-asse, t-managemen, t', ic, o, n: Databas, e },
        { na, m, e: 'Autonomou, s Busines, s Operation, s Platfor, m',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Rocke, t },
      ]
    },
    {
      titl, e: 'Industry Solutions',
    item, s: [
        { na, m, e: 'Enterpris, e Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Building, 2 },
        { na, m, e: 'Healthcar, e Solution, s',
    pa, t, h: '/solution, s/healthcar, e', ic, o, n: Hear, t },
        { na, m, e: 'Financia, l Solution, s',
    pa, t, h: '/solution, s/financia, l', ic, o, n: BarChart, 3 },
        { na, m, e: 'Governmen, t Solution, s',
    pa, t, h: '/solution, s/governmen, t', ic, o, n: Shiel, d },
        { na, m, e: 'Manufacturin, g Solution, s',
    pa, t, h: '/solution, s/manufacturin, g', ic, o, n: Factor, y },
        { na, m, e: 'Retai, l Solution, s',
    pa, t, h: '/solution, s/retai, l', ic, o, n: ShoppingCar, t },
      ]
    },
    {
      titl, e: 'Cybersecurity & Quantum',
    ico, n: Shiel, d,
      item, s: [
        { na, m, e: 'Cybersecurit, y Service, s',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'Advance, d Cybersecurit, y Suit, e',
    pa, t, h: '/advance, d-cybersecurit, y-suit, e', ic, o, n: Shiel, d },
        { na, m, e: 'SOC, 2 Complianc, e',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: Loc, k },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Glob, e },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Cp, u },
        { na, m, e: '5, G Enterpris, e Solution, s',
    pa, t, h: '/5, g-enterpris, e-solution, s', ic, o, n: Networ, k },
        { na, m, e: 'Clou, d DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Clou, d },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Cod, e },
        { na, m, e: 'Networ, k Infrastructur, e',
    pa, t, h: '/service, s/networ, k-infrastructur, e', ic, o, n: Networ, k }
      ]
    },
    {
      titl, e: 'Industry Solutions',
    ico, n: Glob, e,
      item, s: [
        { na, m, e: 'Healthcar, e A, I',
    pa, t, h: '/solution, s/healthcar, e', ic, o, n: Shie, l, d,
    descripti, o, n: 'Medica, l technolog, y solution, s' },
        { na, m, e: 'Financia, l Service, s',
    pa, t, h: '/solution, s/financia, l', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Fintec, h an, d bankin, g solution, s' },
        { na, m, e: 'Manufacturin, g Intelligenc, e',
    pa, t, h: '/solution, s/manufacturin, g', ic, o, n: C, p, u,
    descripti, o, n: 'Industr, y 4.0 solution, s' },
        { na, m, e: 'Retai, l Technolog, y',
    pa, t, h: '/solution, s/retai, l', ic, o, n: Rock, e, t,
    descripti, o, n: 'E-commerc, e an, d retai, l tec, h' },
        { na, m, e: 'Governmen, t Solution, s',
    pa, t, h: '/solution, s/governmen, t', ic, o, n: Shie, l, d,
    descripti, o, n: 'Publi, c secto, r technolog, y' },
        { na, m, e: 'Educatio, n Technolog, y',
    pa, t, h: '/solution, s/educatio, n', ic, o, n: Bra, i, n,
    descripti, o, n: 'A, I-powere, d learnin, g platform, s' },
        { na, m, e: 'Rea, l Estat, e Tec, h',
    pa, t, h: '/solution, s/rea, l-estat, e', ic, o, n: Glo, b, e,
    descripti, o, n: 'Propert, y managemen, t solution, s' },
        { na, m, e: 'Transportatio, n & Logistic, s',
    pa, t, h: '/solution, s/transportatio, n', ic, o, n: Rock, e, t,
    descripti, o, n: 'Smar, t mobilit, y solution, s' }
=======
        { na, m, e: 'Suppor, t Cente, r',
    pa, t, h: '/suppor, t', ic, o, n: Phon, e },
        { na, m, e: 'FA, Q',
    pa, t, h: '/fa, q', ic, o, n: Glob, e },
        { na, m, e: 'Event, s',
    pa, t, h: '/event, s', ic, o, n: Calenda, r },
        { na, m, e: 'Webinar, s',
    pa, t, h: '/webinar, s', ic, o, n: Vide, o },
        { na, m, e: 'Whit, e Paper, s',
    pa, t, h: '/whit, e-paper, s', ic, o, n: FileTex, t },
        { na, m, e: 'Testimonial, s',
    pa, t, h: '/testimonial, s', ic, o, n: Sta, r }
=======
        { na, m, e: 'Hom, e',
    pa, t, h: '/', ic, o, n: Ho, m, e,
    descripti, o, n: 'Welcom, e t, o Zio, n Tec, h Grou, p' },
        { na, m, e: 'Service, s Overvie, w',
    pa, t, h: '/service, s', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Al, l ou, r service, s' },
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Targ, e, t,
    descripti, o, n: 'Industr, y solution, s' },
        { na, m, e: 'Pricin, g',
    pa, t, h: '/pricin, g', ic, o, n: St, a, r,
    descripti, o, n: 'Servic, e pricin, g' },
        { na, m, e: 'Abou, t',
    pa, t, h: '/abou, t', ic, o, n: Use, r, s,
    descripti, o, n: 'Abou, t ou, r compan, y' },
        { na, m, e: 'Contac, t',
    pa, t, h: '/contac, t', ic, o, n: Pho, n, e,
    descripti, o, n: 'Ge, t i, n touc, h' }
      ]
    },
    {
      titl, e: 'AI & Autonomous Systems',
    item, s: [
        { na, m, e: 'A, I Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Bra, i, n,
    descripti, o, n: 'Advance, d A, I solution, s' },
        { na, m, e: 'A, I Researc, h Assistan, t',
    pa, t, h: '/a, i-autonomou, s-researc, h-assistan, t', ic, o, n: Bra, i, n,
    descripti, o, n: 'A, I-powere, d researc, h' },
        { na, m, e: 'A, I Busines, s Manage, r',
    pa, t, h: '/a, i-autonomou, s-busines, s-manage, r', ic, o, n: Bra, i, n,
    descripti, o, n: 'Autonomou, s busines, s managemen, t' },
        { na, m, e: 'A, I Busines, s Platfor, m',
    pa, t, h: '/a, i-autonomou, s-busines, s-platfor, m', ic, o, n: Bra, i, n,
    descripti, o, n: 'Complet, e busines, s platfor, m' },
        { na, m, e: 'A, I Cod, e Revie, w',
    pa, t, h: '/a, i-autonomou, s-cod, e-revie, w', ic, o, n: Co, d, e,
    descripti, o, n: 'Automate, d cod, e revie, w' },
        { na, m, e: 'A, I Creativ, e Directo, r',
    pa, t, h: '/a, i-autonomou, s-creativ, e-directo, r', ic, o, n: Palet, t, e,
    descripti, o, n: 'A, I creativ, e solution, s' },
        { na, m, e: 'A, I Dat, a Managemen, t',
    pa, t, h: '/a, i-autonomou, s-dat, a', ic, o, n: Databa, s, e,
    descripti, o, n: 'Intelligen, t dat, a handlin, g' },
        { na, m, e: 'A, I Decisio, n Engin, e',
    pa, t, h: '/a, i-autonomou, s-decisio, n-engin, e', ic, o, n: Bra, i, n,
    descripti, o, n: 'Smar, t decisio, n makin, g' },
        { na, m, e: 'A, I DevOp, s',
    pa, t, h: '/a, i-autonomou, s-devop, s', ic, o, n: Serv, e, r,
    descripti, o, n: 'Automate, d DevOp, s' },
        { na, m, e: 'A, I Educatio, n',
    pa, t, h: '/a, i-autonomou, s-educatio, n-professo, r', ic, o, n: BookOp, e, n,
    descripti, o, n: 'A, I learnin, g system, s' },
        { na, m, e: 'A, I Healthcar, e',
    pa, t, h: '/a, i-autonomou, s-healthcar, e-physicia, n', ic, o, n: Use, r, s,
    descripti, o, n: 'Medica, l A, I solution, s' },
        { na, m, e: 'A, I Learnin, g Syste, m',
    pa, t, h: '/a, i-autonomou, s-learnin, g-syste, m', ic, o, n: Lightbu, l, b,
    descripti, o, n: 'Adaptiv, e learnin, g' },
        { na, m, e: 'A, I Lega, l Counse, l',
    pa, t, h: '/a, i-autonomou, s-lega, l-counse, l', ic, o, n: Shie, l, d,
    descripti, o, n: 'Lega, l A, I assistanc, e' },
        { na, m, e: 'A, I Logistic, s',
    pa, t, h: '/a, i-autonomou, s-logistic, s', ic, o, n: Netwo, r, k,
    descripti, o, n: 'Smar, t logistic, s' },
        { na, m, e: 'A, I Manufacturin, g',
    pa, t, h: '/a, i-autonomou, s-manufacturin, g', ic, o, n: Settin, g, s,
    descripti, o, n: 'Smar, t manufacturin, g' },
        { na, m, e: 'A, I Researc, h',
    pa, t, h: '/a, i-autonomou, s-researc, h', ic, o, n: Bra, i, n,
    descripti, o, n: 'Researc, h automatio, n' },
        { na, m, e: 'A, I Robotic, s',
    pa, t, h: '/a, i-autonomou, s-robotic, s', ic, o, n: C, p, u,
    descripti, o, n: 'Autonomou, s robotic, s' },
        { na, m, e: 'A, I Securit, y',
    pa, t, h: '/a, i-autonomou, s-securit, y', ic, o, n: Shie, l, d,
    descripti, o, n: 'Intelligen, t securit, y' },
        { na, m, e: 'A, I Testin, g',
    pa, t, h: '/a, i-autonomou, s-testin, g', ic, o, n: Co, d, e,
    descripti, o, n: 'Automate, d testin, g' },
        { na, m, e: 'A, I Vehicle, s',
    pa, t, h: '/a, i-autonomou, s-vehicl, e', ic, o, n: Rock, e, t,
    descripti, o, n: 'Autonomou, s vehicle, s' },
        { na, m, e: 'A, I Ventur, e Capita, l',
    pa, t, h: '/a, i-autonomou, s-ventur, e-capitalis, t', ic, o, n: Trending, U, p,
    descripti, o, n: 'A, I investmen, t' }
      ]
    },
    {
      titl, e: 'Core Services',
    item, s: [
        { na, m, e: 'Quantu, m Neura, l Network, s',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Z, a, p,
    descripti, o, n: 'Quantu, m computin, g' },
        { na, m, e: 'Autonomou, s Busines, s Operation, s',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Rock, e, t,
    descripti, o, n: 'Busines, s automatio, n' },
        { na, m, e: 'A, I Asse, t Managemen, t',
    pa, t, h: '/a, i-powere, d-i, t-asse, t-managemen, t', ic, o, n: Databa, s, e,
    descripti, o, n: 'I, T asse, t managemen, t' },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shie, l, d,
    descripti, o, n: 'Securit, y solution, s' },
        { na, m, e: 'SOC, 2 Complianc, e',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: Shie, l, d,
    descripti, o, n: 'Complianc, e automatio, n' },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Z, a, p,
    descripti, o, n: 'Quantu, m solution, s' },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Serv, e, r,
    descripti, o, n: 'Infrastructur, e service, s' },
        { na, m, e: '5, G Enterpris, e Solution, s',
    pa, t, h: '/5, g-enterpris, e-solution, s', ic, o, n: Netwo, r, k,
    descripti, o, n: '5, G technolog, y' },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Glo, b, e,
    descripti, o, n: 'SAA, S platform, s' },
        { na, m, e: 'Clou, d & DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Clo, u, d,
    descripti, o, n: 'Clou, d solution, s' },
        { na, m, e: 'A, I Workflo, w Automatio, n',
    pa, t, h: '/a, i-workflo, w-automatio, n', ic, o, n: Z, a, p,
    descripti, o, n: 'Workflo, w optimizatio, n' },
        { na, m, e: 'Blockchai, n Solution, s',
    pa, t, h: '/blockchai, n-enterpris, e-solution, s', ic, o, n: Lo, c, k,
    descripti, o, n: 'Blockchai, n technolog, y' },
        { na, m, e: 'Io, T Dat, a Analytic, s',
    pa, t, h: '/io, t-dat, a-analytic, s', ic, o, n: Databa, s, e,
    descripti, o, n: 'Io, T solution, s' },
        { na, m, e: 'Digita, l Transformatio, n',
    pa, t, h: '/digita, l-transformatio, n', ic, o, n: Glo, b, e,
    descripti, o, n: 'Digita, l strateg, y' },
        { na, m, e: 'Industr, y Solution, s',
    pa, t, h: '/service, s/industr, y-solution, s', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Industr, y-specifi, c' }
      ]
    },
    {
      titl, e: 'Company & Resources',
    item, s: [
        { na, m, e: 'Abou, t U, s',
    pa, t, h: '/abou, t', ic, o, n: Use, r, s,
    descripti, o, n: 'Ou, r stor, y' },
        { na, m, e: 'Ou, r Tea, m',
    pa, t, h: '/tea, m', ic, o, n: Use, r, s,
    descripti, o, n: 'Mee, t th, e tea, m' },
        { na, m, e: 'Partner, s',
    pa, t, h: '/partner, s', ic, o, n: Handsha, k, e,
    descripti, o, n: 'Partnership, s' },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: FileTe, x, t,
    descripti, o, n: 'Succes, s storie, s' },
        { na, m, e: 'New, s & Update, s',
    pa, t, h: '/new, s', ic, o, n: Glo, b, e,
    descripti, o, n: 'Lates, t new, s' },
        { na, m, e: 'Blo, g',
    pa, t, h: '/blo, g', ic, o, n: BookOp, e, n,
    descripti, o, n: 'Insight, s & article, s' },
        { na, m, e: 'Event, s',
    pa, t, h: '/event, s', ic, o, n: Calend, a, r,
    descripti, o, n: 'Upcomin, g event, s' },
        { na, m, e: 'Webinar, s',
    pa, t, h: '/webinar, s', ic, o, n: Glo, b, e,
    descripti, o, n: 'Educationa, l conten, t' },
        { na, m, e: 'Whit, e Paper, s',
    pa, t, h: '/whit, e-paper, s', ic, o, n: FileTe, x, t,
    descripti, o, n: 'Researc, h paper, s' },
        { na, m, e: 'Testimonial, s',
    pa, t, h: '/testimonial, s', ic, o, n: St, a, r,
    descripti, o, n: 'Clien, t feedbac, k' }
      ]
    },
    {
      titl, e: 'Support & Help',
    item, s: [
        { na, m, e: 'Hel, p Cente, r',
    pa, t, h: '/hel, p', ic, o, n: HelpCirc, l, e,
    descripti, o, n: 'Ge, t hel, p' },
        { na, m, e: 'Documentatio, n',
    pa, t, h: '/doc, s', ic, o, n: BookOp, e, n,
    descripti, o, n: 'Technica, l doc, s' },
        { na, m, e: 'Contac, t Suppor, t',
    pa, t, h: '/suppor, t', ic, o, n: Pho, n, e,
    descripti, o, n: 'Suppor, t tea, m' },
        { na, m, e: 'FA, Q',
    pa, t, h: '/fa, q', ic, o, n: HelpCirc, l, e,
    descripti, o, n: 'Frequentl, y aske, d' },
        { na, m, e: 'Pricin, g',
    pa, t, h: '/pricin, g', ic, o, n: St, a, r,
    descripti, o, n: 'Servic, e cost, s' },
        { na, m, e: 'Statu, s Pag, e',
    pa, t, h: '/statu, s', ic, o, n: Settin, g, s,
    descripti, o, n: 'Syste, m statu, s' }
=======
        { na, m, e: 'Abou, t U, s',
    pa, t, h: '/abou, t', ic, o, n: User, s },
        { na, m, e: 'Ou, r Missio, n',
    pa, t, h: '/missio, n', ic, o, n: Targe, t },
        { na, m, e: 'Ou, r Tea, m',
    pa, t, h: '/tea, m', ic, o, n: User, s },
        { na, m, e: 'Ou, r Missio, n',
    pa, t, h: '/missio, n', ic, o, n: Targe, t },
        { na, m, e: 'Partner, s',
    pa, t, h: '/partner, s', ic, o, n: Handshak, e },
        { na, m, e: 'Career, s',
    pa, t, h: '/career, s', ic, o, n: User, s },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: FileTex, t },
        { na, m, e: 'New, s',
    pa, t, h: '/new, s', ic, o, n: FileTex, t },
        { na, m, e: 'Blo, g',
    pa, t, h: '/blo, g', ic, o, n: BookOpe, n },
        { na, m, e: 'Testimonial, s',
    pa, t, h: '/testimonial, s', ic, o, n: User, s },
        { na, m, e: 'Event, s',
    pa, t, h: '/event, s', ic, o, n: Calenda, r },
        { na, m, e: 'Webinar, s',
    pa, t, h: '/webinar, s', ic, o, n: Calenda, r },
        { na, m, e: 'Whit, e Paper, s',
    pa, t, h: '/whit, e-paper, s', ic, o, n: FileTex, t },
=======
        { na, m, e: 'Hel, p Cente, r',
    pa, t, h: '/hel, p', ic, o, n: Glob, e },
        { na, m, e: 'New, s',
    pa, t, h: '/new, s', ic, o, n: Glob, e },
        { na, m, e: 'Blo, g',
    pa, t, h: '/blo, g', ic, o, n: Glob, e }
      ]
    },
    {
      titl, e: 'Support & Resources',
    item, s: [
        { na, m, e: 'Hel, p Cente, r',
    pa, t, h: '/hel, p', ic, o, n: HelpCircl, e },
        { na, m, e: 'Documentatio, n',
    pa, t, h: '/doc, s', ic, o, n: BookOpe, n },
        { na, m, e: 'Contac, t Suppor, t',
    pa, t, h: '/suppor, t', ic, o, n: Phon, e },
        { na, m, e: 'FA, Q',
    pa, t, h: '/fa, q', ic, o, n: Glob, e },
        { na, m, e: 'Statu, s Pag, e',
    pa, t, h: '/statu, s', ic, o, n: Glob, e }
      ]
    },
    {
      titl, e: 'Additional Services',
    item, s: [
        { na, m, e: 'Marketplac, e',
    pa, t, h: '/marketplac, e', ic, o, n: ShoppingCar, t },
        { na, m, e: 'Communit, y',
    pa, t, h: '/communit, y', ic, o, n: User, s },
        { na, m, e: 'Develope, r Porta, l',
    pa, t, h: '/develope, r-porta, l', ic, o, n: Cod, e },
        { na, m, e: 'Reques, t Quot, e',
    pa, t, h: '/reques, t-quot, e', ic, o, n: DollarSig, n },
        { na, m, e: 'Pricin, g',
    pa, t, h: '/pricin, g', ic, o, n: DollarSig, n }
=======
        { na, m, e: 'FA, Q',
    pa, t, h: '/fa, q', ic, o, n: HelpCircl, e },
        { na, m, e: 'Statu, s Pag, e',
    pa, t, h: '/statu, s', ic, o, n: Glob, e },
        { na, m, e: 'Privac, y Polic, y',
    pa, t, h: '/privac, y', ic, o, n: Shiel, d },
        { na, m, e: 'Term, s o, f Servic, e',
    pa, t, h: '/term, s', ic, o, n: FileTex, t },
        { na, m, e: 'Cooki, e Polic, y',
    pa, t, h: '/cookie, s', ic, o, n: Shiel, d },
        { na, m, e: 'Sitema, p',
    pa, t, h: '/sitema, p', ic, o, n: Glob, e },
=======
        { na, m, e: 'Blo, g',
    pa, t, h: '/blo, g', ic, o, n: Glob, e },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Hel, p Cente, r',
    pa, t, h: '/hel, p', ic, o, n: Glob, e }
      ]
    },
    {
      titl, e: 'Support & Legal',
=======
        { nam, e: 'News',
    pat, h: '/news', ico, n: Globe },
        { nam, e: 'Case Studies',
    pat, h: '/case-studies', ico, n: Briefcase },
        { nam, e: 'Events',
    pat, h: '/events', ico, n: Globe },
        { nam, e: 'Webinars',
    pat, h: '/webinars', ico, n: Globe }
      ]
    },
    {
      titl, e: 'Support & Resources',
    item, s: [
        { na, m, e: 'Hel, p Cente, r',
    pa, t, h: '/hel, p-cente, r', ic, o, n: User, s },
        { na, m, e: 'Documentatio, n',
    pa, t, h: '/doc, s', ic, o, n: Glob, e },
        { na, m, e: 'Contac, t Suppor, t',
    pa, t, h: '/contac, t', ic, o, n: Phon, e },
        { na, m, e: 'Statu, s Pag, e',
    pa, t, h: '/statu, s', ic, o, n: Glob, e },
        { na, m, e: 'Privac, y Polic, y',
    pa, t, h: '/privac, y', ic, o, n: Loc, k },
        { na, m, e: 'Term, s o, f Servic, e',
    pa, t, h: '/term, s', ic, o, n: Loc, k },
        { na, m, e: 'Cooki, e Polic, y',
    pa, t, h: '/cookie, s', ic, o, n: Loc, k }
=======
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Za, p },
=======
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Targe, t },
        { na, m, e: 'Pricin, g',
    pa, t, h: '/pricin, g', ic, o, n: Briefcas, e },
        { na, m, e: 'Abou, t',
    pa, t, h: '/abou, t', ic, o, n: User, s },
        { na, m, e: 'Contac, t',
    pa, t, h: '/contac, t', ic, o, n: Phon, e }
      ]
    },
    {
      titl, e: 'Main Navigation',
    item, s: [
        { na, m, e: 'Hom, e',
    pa, t, h: '/', ic, o, n: Ho, m, e,
    descripti, o, n: 'Welcom, e t, o Zio, n Tec, h Grou, p' },
        { na, m, e: 'Service, s',
    pa, t, h: '/service, s', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Explor, e ou, r comprehensiv, e service, s' },
        { na, m, e: 'A, I Solution, s',
    pa, t, h: '/a, i-solution, s', ic, o, n: Bra, i, n,
    descripti, o, n: 'Advance, d A, I an, d machin, e learnin, g' },
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Targ, e, t,
    descripti, o, n: 'Industr, y-specifi, c solution, s' },
        { na, m, e: 'Pricin, g',
    pa, t, h: '/pricin, g', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Transparen, t pricin, g plan, s' },
        { na, m, e: 'Abou, t',
    pa, t, h: '/abou, t', ic, o, n: Use, r, s,
    descripti, o, n: 'Lear, n abou, t ou, r compan, y' },
        { na, m, e: 'Contac, t',
    pa, t, h: '/contac, t', ic, o, n: Pho, n, e,
    descripti, o, n: 'Ge, t i, n touc, h wit, h u, s' }
      ]
    },
    {
      titl, e: 'AI & Technology Services',
    item, s: [
        { na, m, e: 'A, I & Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Bra, i, n,
    descripti, o, n: 'Advance, d A, I system, s' },
        { na, m, e: 'A, I Researc, h Assistan, t',
    pa, t, h: '/a, i-autonomou, s-researc, h-assistan, t', ic, o, n: Bra, i, n,
    descripti, o, n: 'A, I-powere, d researc, h' },
        { na, m, e: 'Quantu, m Neura, l Network, s',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: C, p, u,
    descripti, o, n: 'Quantu, m computin, g solution, s' },
        { na, m, e: 'Autonomou, s Busines, s Platfor, m',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Sel, f-operatin, g system, s' },
        { na, m, e: 'A, I Asse, t Managemen, t',
    pa, t, h: '/a, i-powere, d-i, t-asse, t-managemen, t', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Intelligen, t I, T managemen, t' },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: C, p, u,
    descripti, o, n: 'Quantu, m solution, s' },
        { na, m, e: '5, G Enterpris, e Solution, s',
    pa, t, h: '/5, g-enterpris, e-solution, s', ic, o, n: Glo, b, e,
    descripti, o, n: 'Hig, h-spee, d connectivit, y' },
        { na, m, e: 'Emergin, g Technolog, y',
    pa, t, h: '/emergin, g-tec, h', ic, o, n: Rock, e, t,
    descripti, o, n: 'Cuttin, g-edg, e tec, h' }
      ]
    },
    {
      titl, e: 'Infrastructure & Security',
    item, s: [
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Clo, u, d,
    descripti, o, n: 'Complet, e I, T solution, s' },
        { na, m, e: 'Clou, d & DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Clo, u, d,
    descripti, o, n: 'Clou, d developmen, t' },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shie, l, d,
    descripti, o, n: 'Securit, y solution, s' },
        { na, m, e: 'SOC, 2 Complianc, e',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: Lo, c, k,
    descripti, o, n: 'Complianc, e automatio, n' },
        { na, m, e: 'Edg, e Computin, g',
    pa, t, h: '/service, s#edg, e-computin, g', ic, o, n: C, p, u,
    descripti, o, n: 'Edg, e infrastructur, e' },
        { na, m, e: 'Networ, k Infrastructur, e',
    pa, t, h: '/service, s#networ, k', ic, o, n: Glo, b, e,
    descripti, o, n: 'Networ, k solution, s' },
        { na, m, e: 'Blockchai, n Platfor, m',
    pa, t, h: '/service, s#blockchai, n', ic, o, n: Co, d, e,
    descripti, o, n: 'Blockchai, n solution, s' },
        { na, m, e: 'Io, T Solution, s',
    pa, t, h: '/service, s#io, t', ic, o, n: Glo, b, e,
    descripti, o, n: 'Interne, t o, f Thing, s' }
      ]
    },
    {
      titl, e: 'Micro SAAS & Development',
    item, s: [
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Co, d, e,
    descripti, o, n: 'Scalabl, e softwar, e' },
        { na, m, e: 'Innovativ, e Micr, o Service, s',
    pa, t, h: '/innovativ, e-micr, o-saa, s-service, s', ic, o, n: Co, d, e,
    descripti, o, n: 'Custo, m solution, s' },
        { na, m, e: 'Custo, m Developmen, t',
    pa, t, h: '/service, s#custo, m-developmen, t', ic, o, n: Co, d, e,
    descripti, o, n: 'Tailore, d softwar, e' },
        { na, m, e: 'AP, I Integratio, n',
    pa, t, h: '/service, s#ap, i-integratio, n', ic, o, n: Co, d, e,
    descripti, o, n: 'Syste, m integratio, n' },
        { na, m, e: 'A, I Projec, t Managemen, t',
    pa, t, h: '/service, s#a, i-projec, t-managemen, t', ic, o, n: Bra, i, n,
    descripti, o, n: 'Smar, t projec, t tool, s' },
        { na, m, e: 'A, I Custome, r Suppor, t',
    pa, t, h: '/service, s#a, i-suppor, t', ic, o, n: Bra, i, n,
    descripti, o, n: 'Automate, d suppor, t' },
        { na, m, e: 'A, I H, R Automatio, n',
    pa, t, h: '/service, s#a, i-h, r', ic, o, n: Bra, i, n,
    descripti, o, n: 'H, R automatio, n' },
        { na, m, e: 'A, I Marketin, g Platfor, m',
    pa, t, h: '/service, s#a, i-marketin, g', ic, o, n: Bra, i, n,
    descripti, o, n: 'Marketin, g automatio, n' }
=======
      tit, l, e: 'A, I & Technolog, y Service, s',
    ite, m, s: [
        { na, m, e: 'A, I Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Brai, n },
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    pa, t, h: '/a, i-busines, s-intelligenc, e', ic, o, n: TrendingU, p },
        { na, m, e: 'A, I Conten, t Generatio, n',
    pa, t, h: '/a, i-conten, t-generato, r', ic, o, n: FileTex, t },
        { na, m, e: 'A, I Marketin, g Automatio, n',
    pa, t, h: '/a, i-conten, t-marketin, g-automatio, n', ic, o, n: Za, p },
        { na, m, e: 'A, I Cod, e Revie, w',
    pa, t, h: '/a, i-cod, e-revie, w', ic, o, n: Briefcas, e },
        { na, m, e: 'A, I Agent, s',
    pa, t, h: '/a, i-agent, s', ic, o, n: Brai, n },
        { na, m, e: 'A, I Analytic, s Copilo, t',
    pa, t, h: '/a, i-analytic, s-copilo, t', ic, o, n: TrendingU, p },
        { na, m, e: 'A, I Assistan, t',
    pa, t, h: '/a, i-assistan, t', ic, o, n: User, s }
      ]
    },
    {
      titl, e: 'Quantum & Advanced Tech',
    item, s: [
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Za, p },
        { na, m, e: 'Quantu, m Neura, l Network, s',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'Quantu, m Clou, d Infrastructur, e',
    pa, t, h: '/quantu, m-clou, d-infrastructur, e', ic, o, n: Glob, e },
        { na, m, e: 'Quantu, m Financia, l Tradin, g',
    pa, t, h: '/quantu, m-financia, l-tradin, g', ic, o, n: TrendingU, p },
        { na, m, e: 'A, I Brai, n Interfac, e',
    pa, t, h: '/a, i-brai, n-interfac, e', ic, o, n: Brai, n },
        { na, m, e: 'A, I Consciousnes, s Evolutio, n',
    pa, t, h: '/a, i-consciousnes, s-evolutio, n', ic, o, n: Rocke, t },
        { na, m, e: 'A, I Autonomou, s Researc, h',
    pa, t, h: '/a, i-autonomou, s-researc, h', ic, o, n: BookOpe, n },
        { na, m, e: 'A, I Autonomou, s Robotic, s',
    pa, t, h: '/a, i-autonomou, s-robotic, s', ic, o, n: Za, p }
      ]
    },
    {
      titl, e: 'Infrastructure & Security',
    item, s: [
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Glob, e },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'Clou, d & DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Clou, d },
        { na, m, e: 'A, I-Powere, d Securit, y',
    pa, t, h: '/a, i-powere, d-enterpris, e-securit, y', ic, o, n: Shiel, d },
        { na, m, e: 'Autonomou, s DevOp, s',
    pa, t, h: '/autonomou, s-devop, s-platfor, m', ic, o, n: Za, p },
        { na, m, e: 'Enterpris, e I, T',
    pa, t, h: '/enterpris, e-i, t', ic, o, n: Briefcas, e },
        { na, m, e: 'A, I Autonomou, s Securit, y',
    pa, t, h: '/a, i-autonomou, s-securit, y', ic, o, n: Shiel, d },
        { na, m, e: 'A, I Complianc, e Automatio, n',
    pa, t, h: '/a, i-complianc, e-automatio, n', ic, o, n: Shiel, d }
      ]
    },
    {
      titl, e: 'Industry Solutions',
    item, s: [
        { na, m, e: 'Blo, g',
    pa, t, h: '/blo, g', ic, o, n: BookOpe, n },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: FileTex, t },
        { na, m, e: 'New, s',
    pa, t, h: '/new, s', ic, o, n: Glob, e },
        { na, m, e: 'Webinar, s',
    pa, t, h: '/webinar, s', ic, o, n: MessageCircl, e },
        { na, m, e: 'Whit, e Paper, s',
    pa, t, h: '/whit, e-paper, s', ic, o, n: FileTex, t },
        { na, m, e: 'Testimonial, s',
    pa, t, h: '/testimonial, s', ic, o, n: Sta, r },
        { na, m, e: 'Affiliat, e Attributio, n Hu, b',
    pa, t, h: '/affiliat, e-attributio, n-hu, b', ic, o, n: Targe, t }
      ]
    },
    {
      titl, e: 'Support & Help',
    item, s: [
        { na, m, e: 'Hel, p Cente, r',
    pa, t, h: '/hel, p', ic, o, n: MessageCircl, e },
        { na, m, e: 'Documentatio, n',
    pa, t, h: '/doc, s', ic, o, n: FileTex, t },
        { na, m, e: 'FA, Q',
    pa, t, h: '/fa, q', ic, o, n: MessageCircl, e },
        { na, m, e: 'Contac, t Suppor, t',
    pa, t, h: '/suppor, t', ic, o, n: Phon, e },
      ]
    },
    {
      titl, e: 'Solutions & Industries',
    item, s: [
        { na, m, e: 'Enterpris, e Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Buildin, g },
        { na, m, e: 'Healthcar, e Solution, s',
    pa, t, h: '/solution, s/healthcar, e', ic, o, n: Hear, t },
        { na, m, e: 'Financia, l Solution, s',
    pa, t, h: '/solution, s/financia, l', ic, o, n: DollarSig, n },
        { na, m, e: 'Manufacturin, g Solution, s',
    pa, t, h: '/solution, s/manufacturin, g', ic, o, n: Building, 2 },
        { na, m, e: 'Retai, l Solution, s',
    pa, t, h: '/solution, s/retai, l', ic, o, n: ShoppingCar, t },
        { na, m, e: 'Governmen, t Solution, s',
    pa, t, h: '/solution, s/governmen, t', ic, o, n: Buildin, g },
        { na, m, e: 'Spac, e Technolog, y',
    pa, t, h: '/spac, e-tec, h', ic, o, n: Rocke, t },
        { na, m, e: 'Researc, h & Developmen, t',
    pa, t, h: '/researc, h-developmen, t', ic, o, n: Searc, h },
        { na, m, e: 'Quantu, m Clou, d Infrastructur, e',
    pa, t, h: '/quantu, m-clou, d-infrastructur, e', ic, o, n: Clou, d },
        { na, m, e: 'Quantu, m Financia, l Tradin, g',
    pa, t, h: '/quantu, m-financia, l-tradin, g', ic, o, n: DollarSig, n },
        { na, m, e: 'Quantu, m Service, s',
    pa, t, h: '/quantu, m-service, s', ic, o, n: Ato, m }
=======
        { na, m, e: 'Healthcar, e A, I',
    pa, t, h: '/a, i-autonomou, s-healthcar, e-physicia, n', ic, o, n: User, s },
        { na, m, e: 'Manufacturin, g A, I',
    pa, t, h: '/a, i-autonomou, s-manufacturin, g', ic, o, n: Briefcas, e },
        { na, m, e: 'Financia, l Service, s',
    pa, t, h: '/a, i-autonomou, s-busines, s-operation, s', ic, o, n: TrendingU, p },
        { na, m, e: 'Retai, l Solution, s',
    pa, t, h: '/a, i-marke, t-researc, h', ic, o, n: Glob, e },
        { na, m, e: 'Governmen, t Tec, h',
    pa, t, h: '/a, i-autonomou, s-ecosyste, m', ic, o, n: Shiel, d },
        { na, m, e: 'Educatio, n A, I',
    pa, t, h: '/a, i-autonomou, s-educatio, n-professo, r', ic, o, n: BookOpe, n },
        { na, m, e: 'Lega, l A, I',
    pa, t, h: '/a, i-autonomou, s-lega, l-counse, l', ic, o, n: Shiel, d },
        { na, m, e: 'Logistic, s A, I',
    pa, t, h: '/a, i-autonomou, s-logistic, s', ic, o, n: Glob, e }
=======
      tit, l, e: 'A, I & Technolog, y',
    ite, m, s: [
        { na, m, e: 'A, I & Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Brai, n },
        { na, m, e: 'A, I Researc, h Assistan, t',
    pa, t, h: '/a, i-autonomou, s-researc, h-assistan, t', ic, o, n: Brai, n },
        { na, m, e: 'Quantu, m Neura, l Network, s',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: Brai, n },
        { na, m, e: 'Autonomou, s Busines, s Platfor, m',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Rocke, t },
        { na, m, e: 'A, I Asse, t Managemen, t',
    pa, t, h: '/a, i-powere, d-i, t-asse, t-managemen, t', ic, o, n: Databas, e },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Glob, e },
        { na, m, e: 'Machin, e Learnin, g',
    pa, t, h: '/service, s/a, i-machin, e-learnin, g', ic, o, n: Brai, n },
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    pa, t, h: '/service, s/a, i-busines, s-intelligenc, e', ic, o, n: BarChart, 3 }
      ]
    },
    {
      titl, e: 'Infrastructure & Security',
    item, s: [
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Serve, r },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'SOC, 2 Complianc, e',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: Loc, k },
        { na, m, e: 'Clou, d DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Clou, d },
        { na, m, e: '5, G Enterpris, e Solution, s',
    pa, t, h: '/5, g-enterpris, e-solution, s', ic, o, n: Networ, k },
        { na, m, e: 'Networ, k Infrastructur, e',
    pa, t, h: '/service, s/networ, k-infrastructur, e', ic, o, n: Networ, k },
        { na, m, e: 'Manage, d I, T Service, s',
    pa, t, h: '/service, s/manage, d-i, t-service, s', ic, o, n: Serve, r },
        { na, m, e: 'Securit, y Assessmen, t',
    pa, t, h: '/service, s/securit, y-assessmen, t', ic, o, n: Shiel, d }
      ]
    },
    {
      titl, e: 'Industry Solutions',
    item, s: [
        { na, m, e: 'Enterpris, e Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Buildin, g },
        { na, m, e: 'Healthcar, e Solution, s',
    pa, t, h: '/solution, s/healthcar, e', ic, o, n: User, s },
        { na, m, e: 'Financia, l Solution, s',
    pa, t, h: '/solution, s/financia, l', ic, o, n: BarChart, 3 },
        { na, m, e: 'Manufacturin, g Solution, s',
    pa, t, h: '/solution, s/manufacturin, g', ic, o, n: Cp, u },
        { na, m, e: 'Retai, l Solution, s',
    pa, t, h: '/solution, s/retai, l', ic, o, n: Smartphon, e },
        { na, m, e: 'Governmen, t Solution, s',
    pa, t, h: '/solution, s/governmen, t', ic, o, n: Buildin, g },
        { na, m, e: 'Digita, l Transformatio, n',
    pa, t, h: '/digita, l-transformatio, n', ic, o, n: Za, p },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Glob, e }
      ]
    },
    {
      titl, e: 'Company & Resources',
    item, s: [
        { na, m, e: 'Enterpris, e Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Larg, e-scal, e solution, s' },
        { na, m, e: 'Healthcar, e Solution, s',
    pa, t, h: '/solution, s/healthcar, e', ic, o, n: Use, r, s,
    descripti, o, n: 'Medica, l technolog, y' },
        { na, m, e: 'Financia, l Solution, s',
    pa, t, h: '/solution, s/financia, l', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Fintec, h solution, s' },
        { na, m, e: 'Manufacturin, g Solution, s',
    pa, t, h: '/solution, s/manufacturin, g', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Smar, t manufacturin, g' },
        { na, m, e: 'Retai, l Solution, s',
    pa, t, h: '/solution, s/retai, l', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Digita, l retai, l' },
        { na, m, e: 'Governmen, t Solution, s',
    pa, t, h: '/solution, s/governmen, t', ic, o, n: Shie, l, d,
    descripti, o, n: 'Publi, c secto, r tec, h' },
        { na, m, e: 'Digita, l Transformatio, n',
    pa, t, h: '/digita, l-transformatio, n', ic, o, n: Rock, e, t,
    descripti, o, n: 'Busines, s modernizatio, n' },
        { na, m, e: 'Busines, s Intelligenc, e',
    pa, t, h: '/service, s#busines, s-intelligenc, e', ic, o, n: Lightbu, l, b,
    descripti, o, n: 'Dat, a insight, s' }
      ]
    },
    {
      titl, e: 'Company & Support',
    item, s: [
        { na, m, e: 'Abou, t U, s',
    pa, t, h: '/abou, t', ic, o, n: Use, r, s,
    descripti, o, n: 'Ou, r stor, y an, d missio, n' },
        { na, m, e: 'Ou, r Tea, m',
    pa, t, h: '/tea, m', ic, o, n: Use, r, s,
    descripti, o, n: 'Mee, t ou, r expert, s' },
        { na, m, e: 'Career, s',
    pa, t, h: '/career, s', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Joi, n ou, r tea, m' },
        { na, m, e: 'Partner, s',
    pa, t, h: '/partner, s', ic, o, n: Handsha, k, e,
    descripti, o, n: 'Partnershi, p opportunitie, s' },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: Lightbu, l, b,
    descripti, o, n: 'Succes, s storie, s' },
        { na, m, e: 'Hel, p Cente, r',
    pa, t, h: '/hel, p', ic, o, n: Glo, b, e,
    descripti, o, n: 'Suppor, t resource, s' },
        { na, m, e: 'Documentatio, n',
    pa, t, h: '/doc, s', ic, o, n: Glo, b, e,
    descripti, o, n: 'Technica, l guide, s' },
        { na, m, e: 'Statu, s Pag, e',
    pa, t, h: '/statu, s', ic, o, n: Glo, b, e,
    descripti, o, n: 'Syste, m statu, s' }
=======
        { na, m, e: 'Statu, s Pag, e',
    pa, t, h: '/statu, s', ic, o, n: Glob, e },
        { na, m, e: 'FA, Q',
    pa, t, h: '/fa, q', ic, o, n: User, s },
        { na, m, e: 'Privac, y Polic, y',
    pa, t, h: '/privac, y', ic, o, n: Shiel, d },
        { na, m, e: 'Term, s o, f Servic, e',
    pa, t, h: '/term, s', ic, o, n: Shiel, d },
        { na, m, e: 'Cooki, e Polic, y',
    pa, t, h: '/cookie, s', ic, o, n: Shiel, d },
        { na, m, e: 'Accessibilit, y',
    pa, t, h: '/accessibilit, y', ic, o, n: User, s }
=======
      ite, m, s: [
        { na, m, e: 'Missio, n & Visio, n',
    pa, t, h: '/missio, n', ic, o, n: Sta, r },
        { na, m, e: 'Partner, s',
    pa, t, h: '/partner, s', ic, o, n: Handshak, e },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: BookOpe, n },
        { na, m, e: 'Career, s',
    pa, t, h: '/career, s', ic, o, n: User, s }
      ]
    },
    {
      titl, e: 'Resources & Support',
    item, s: [
        { na, m, e: 'Hel, p Cente, r',
    pa, t, h: '/hel, p', ic, o, n: HelpCircl, e },
        { na, m, e: 'Documentatio, n',
    pa, t, h: '/doc, s', ic, o, n: BookOpe, n },
        { na, m, e: 'Webinar, s',
    pa, t, h: '/webinar, s', ic, o, n: Glob, e },
        { na, m, e: 'Whit, e Paper, s',
    pa, t, h: '/whit, e-paper, s', ic, o, n: BookOpe, n },
        { na, m, e: 'Blo, g & New, s',
    pa, t, h: '/new, s', ic, o, n: BookOpe, n },
        { na, m, e: 'FA, Q',
    pa, t, h: '/fa, q', ic, o, n: HelpCircl, e },
        { na, m, e: 'Suppor, t',
    pa, t, h: '/suppor, t', ic, o, n: HelpCircl, e }
=======
        { na, m, e: 'Ou, r Missio, n',
    pa, t, h: '/missio, n', ic, o, n: Rocke, t },
        { na, m, e: 'Tea, m',
    pa, t, h: '/tea, m', ic, o, n: User, s },
        { na, m, e: 'Blo, g',
    pa, t, h: '/blo, g', ic, o, n: FileTex, t },
        { na, m, e: 'New, s',
    pa, t, h: '/new, s', ic, o, n: TrendingU, p },
        { na, m, e: 'Webinar, s',
    pa, t, h: '/webinar, s', ic, o, n: Glob, e },
        { na, m, e: 'Whit, e Paper, s',
    pa, t, h: '/whit, e-paper, s', ic, o, n: BookOpe, n },
        { na, m, e: 'Event, s',
    pa, t, h: '/event, s', ic, o, n: Calenda, r },
        { na, m, e: 'Partner, s',
    pa, t, h: '/partner, s', ic, o, n: Handshak, e }
=======
        { na, m, e: 'Contac, t U, s',
    pa, t, h: '/contac, t', ic, o, n: Phon, e },
        { na, m, e: 'FA, Q',
    pa, t, h: '/fa, q', ic, o, n: User, s },
        { na, m, e: 'New, s',
    pa, t, h: '/new, s', ic, o, n: Glob, e }
=======
        { na, m, e: 'Contac, t Suppor, t',
    pa, t, h: '/suppor, t', ic, o, n: Phon, e },
        { na, m, e: 'Statu, s Pag, e',
    pa, t, h: '/statu, s', ic, o, n: Glob, e },
        { na, m, e: 'FA, Q',
    pa, t, h: '/hel, p#fa, q', ic, o, n: FileTex, t }
=======
        { na, m, e: 'Hel, p Cente, r',
    pa, t, h: '/hel, p-cente, r', ic, o, n: User, s },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: Glob, e },
        { na, m, e: 'New, s',
    pa, t, h: '/new, s', ic, o, n: Glob, e },
        { na, m, e: 'Webinar, s',
    pa, t, h: '/webinar, s', ic, o, n: Glob, e },
        { na, m, e: 'Whit, e Paper, s',
    pa, t, h: '/whit, e-paper, s', ic, o, n: Glob, e }
=======
        { na, m, e: 'Contac, t Suppor, t',
    pa, t, h: '/suppor, t', ic, o, n: Phon, e }
=======
        { na, m, e: 'Statu, s Pag, e',
    pa, t, h: '/statu, s', ic, o, n: Glob, e },
        { na, m, e: 'FA, Q',
    pa, t, h: '/fa, q', ic, o, n: User, s },
        { na, m, e: 'Sitema, p',
    pa, t, h: '/sitema, p', ic, o, n: Glob, e }
=======
        { na, m, e: 'Leadershi, p',
    pa, t, h: '/leadershi, p', ic, o, n: User, s },
        { na, m, e: 'Career, s',
    pa, t, h: '/career, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Partner, s',
    pa, t, h: '/partner, s', ic, o, n: User, s },
        { na, m, e: 'New, s',
    pa, t, h: '/new, s', ic, o, n: Glob, e }
=======
  classNam, e?: strin, g;
}

expor, t functio, n Sideba, r({ isOp, e, n, onClo, s, e, classNam, e }: SidebarProp, s) {
  cons, t locatio, n = useLocatio, n();
=======
  Use,  r, s, 
  MessageSqua, r, e, 
  Settin, g, s, 
  HelpCirc, l, e, 
  BookOp, e, n, 
  Briefca, s, e,
  Buildi, n, g,
  Glo, b, e,
  Z, a, p,
  ChevronRig, h, t,
  Me, n, u,
  X
=======
impo, r, t, Rea, c, t, { useSta, t, e, useEffec, t } fro, m 'reac, t';
impor, t { moti, o, n, AnimatePresenc, e } fro, m 'frame, r-motio, n';
impor, t { Li, n, k, useLocatio, n } fro, m 'reac, t-route, r-do, m';
impor, t { 
  X, Ho, m, e, Briefca, s, e, Use, r, s, Pho, n, e, Ma, i, l, MapP, i, n, Glo, b, e, Linked, i, n, Twitt, e, r, Facebo, o, k, Instagr, a, m, 
  Shie, l, d, Handsha, k, e, ChevronDo, w, n, ChevronRig, h, t, Bra, i, n, C, p, u, Databa, s, e, Netwo, r, k, Co, d, e, Palet, t, e, 
  Targ, e, t, Rock, e, t, E, y, e, DollarSi, g, n, ShoppingCa, r, t, Clo, c, k, Clo, u, d, Sear, c, h, Buildi, n, g, Z, a, p, Hea, r, t, 
  Lightbu, l, b, Trending, U, p, BarChar, t, 3, Lo, c, k, AlertTriang, l, e, Serv, e, r, CheckCirc, l, e, Tru, c, k, C, a, r, 
  TestTu, b, e, PenTo, o, l, Buildin, g, 2, At, o, m, FileTe, x, t, Quo, t, e, Newspap, e, r, Calend, a, r, Vid, e, o, HelpCirc, l, e, 
  LifeBu, o, y, Sto, r, e, PieCha, r, t, Shar, e, 2, Monit, o, r, Smartpho, n, e, Gith, u, b, Youtub, e
} fro, m 'lucid, e-reac, t';
impor, t { useAut, h } fro, m '@/hook, s/useAut, h';

interfac, e SidebarProp, s {
  isOp, e, n: boolea, n;
  onTogg, l, e: () => voi, d;
  classNam, e?: strin, g;
}

expor, t functio, n Sideba, r({ isOp,  e, n, onTogg, l, e, classNam, e }: SidebarProp, s) {
  cons, t locatio, n = useLocatio, n();
  cons,  t { use, r } = useAut, h();
  cons, t isAuthenticate, d = !!use, r;

  cons, t navigationItem, s = [
    {
      tit, l, e: 'Mai, n',
    ite, m, s: [
    onClos, e();
  },  [locatio, n.pathna, m, e, onClo, s, e]);

  const navigationItems = [
    {
      tit, l, e: 'A, I Service, s',
    ic, o, n: Bra, i, n,
      ite, m, s: [
        { na, m, e: 'A, I Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Briefcas, e },
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    pa, t, h: '/service, s/a, i-busines, s-intelligenc, e', ic, o, n: Briefcas, e },
        { na, m, e: 'A, I Marketin, g Automatio, n',
    pa, t, h: '/service, s/a, i-marketin, g-automatio, n', ic, o, n: Briefcas, e },
        { na, m, e: 'A, I H, R & Recruitmen, t',
    pa, t, h: '/service, s/a, i-h, r-recruitmen, t', ic, o, n: User, s },
        { na, m, e: 'A, I Lega, l Tec, h',
    pa, t, h: '/service, s/a, i-lega, l-tec, h', ic, o, n: Shiel, d },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: Glob, e },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shiel, d },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Glob, e },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Glob, e },
        { na, m, e: 'Industr, y Solution, s',
    pa, t, h: '/service, s/industr, y-solution, s', ic, o, n: Briefcas, e }
=======
        { na, m, e: 'A, I Conten, t Generatio, n',
    hr, e, f: '/a, i-service, s-showcas, e', ic, o, n: B, o, t,
    bad, g, e: 'Popula, r' },
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    hr, e, f: '/a, i-service, s-showcas, e', ic, o, n: BarChar, t, 3,
    bad, g, e: 'Ne, w' },
        { na, m, e: 'A, I Custome, r Suppor, t',
    hr, e, f: '/a, i-service, s-showcas, e', ic, o, n: MessageSqua, r, e,
    bad, g, e: 'Feature, d' },
        { na, m, e: 'A, I Recruitmen, t Platfor, m',
    hr, e, f: '/a, i-service, s-showcas, e', ic, o, n: Use, r, s,
    bad, g, e: 'Popula, r' },
        { na, m, e: 'Quantu, m A, I Platfor, m',
    hr, e, f: '/a, i-service, s-showcas, e', ic, o, n: CpuIc, o, n,
    bad, g, e: 'Premiu, m' },
        { na, m, e: 'A, I Ethic, s & Governanc, e',
    hr, e, f: '/a, i-service, s-showcas, e', ic, o, n: ShieldChe, c, k,
    bad, g, e: 'Enterpris, e' }
      ]
    },
    {
      titl, e: 'IT Solutions',
    ico, n: Serve, r,
      item, s: [
        { na, m, e: 'Edg, e Computin, g Platfor, m',
    hr, e, f: '/service, s', ic, o, n: Glob, e, 2,
    bad, g, e: 'Ne, w' },
        { na, m, e: 'DevOp, s Automatio, n',
    hr, e, f: '/service, s', ic, o, n: ZapIc, o, n,
    bad, g, e: 'Popula, r' },
        { na, m, e: 'AP, I Gatewa, y Managemen, t',
    hr, e, f: '/service, s', ic, o, n: Netwo, r, k,
    bad, g, e: 'Enterpris, e' },
        { na, m, e: 'Clou, d-Nativ, e Developmen, t',
    hr, e, f: '/service, s', ic, o, n: Clo, u, d,
    bad, g, e: 'Premiu, m' },
        { na, m, e: 'Lo, w-Cod, e Platfor, m',
    hr, e, f: '/service, s', ic, o, n: Laye, r, s,
    bad, g, e: 'Feature, d' },
        { na, m, e: 'PW, A Builde, r',
    hr, e, f: '/service, s', ic, o, n: Smartpho, n, e,
    bad, g, e: 'Ne, w' }
      ]
    },
    {
      titl, e: 'Development',
    ico, n: Cod, e,
      item, s: [
        { na, m, e: 'We, b Developmen, t',
    hr, e, f: '/service, s', ic, o, n: Glo, b, e,
    bad, g, e: 'Popula, r' },
        { na, m, e: 'Mobil, e Developmen, t',
    hr, e, f: '/service, s', ic, o, n: Smartpho, n, e,
    bad, g, e: 'Feature, d' },
        { na, m, e: 'Metavers, e Developmen, t',
    hr, e, f: '/service, s', ic, o, n: E, y, e,
    bad, g, e: 'Ne, w' },
        { na, m, e: 'Blockchai, n Developmen, t',
    hr, e, f: '/service, s', ic, o, n: Lo, c, k,
    bad, g, e: 'Premiu, m' },
        { na, m, e: 'Io, T Developmen, t',
    hr, e, f: '/service, s', ic, o, n: Wi, f, i,
    bad, g, e: 'Enterpris, e' }
      ]
    },
    {
      titl, e: 'Security',
    ico, n: Shiel, d,
      item, s: [
        { na, m, e: 'Cybe, r Threa, t Detectio, n',
    hr, e, f: '/service, s', ic, o, n: ShieldChe, c, k,
    bad, g, e: 'Premiu, m' },
        { na, m, e: 'Blockchai, n Identit, y',
    hr, e, f: '/service, s', ic, o, n: Lo, c, k,
    bad, g, e: 'Ne, w' },
        { na, m, e: 'Manage, d SO, C',
    hr, e, f: '/service, s', ic, o, n: E, y, e,
    bad, g, e: 'Enterpris, e' },
        { na, m, e: 'Complianc, e & Audi, t',
    hr, e, f: '/service, s', ic, o, n: Awa, r, d,
    bad, g, e: 'Feature, d' }
      ]
    },
    {
      titl, e: 'Enterprise',
    ico, n: Buildin, g,
      item, s: [
        { na, m, e: 'Digita, l Transformatio, n',
    hr, e, f: '/enterpris, e-solution, s', ic, o, n: Trending, U, p,
    bad, g, e: 'Enterpris, e' },
        { na, m, e: 'Legac, y Syste, m Migratio, n',
    hr, e, f: '/enterpris, e-solution, s', ic, o, n: Serv, e, r,
    bad, g, e: 'Premiu, m' },
        { na, m, e: 'Clou, d Migratio, n',
    hr, e, f: '/enterpris, e-solution, s', ic, o, n: Clo, u, d,
    bad, g, e: 'Popula, r' },
        { na, m, e: 'Dat, a Cente, r Solution, s',
    hr, e, f: '/enterpris, e-solution, s', ic, o, n: Databa, s, e,
    bad, g, e: 'Feature, d' }
      ]
    },
    {
      titl, e: 'Company',
    ico, n: User, s,
      item, s: [
        { na, m, e: 'Abou, t U, s',
    hr, e, f: '/abou, t', ic, o, n: Inf, o },
        { na, m, e: 'Ou, r Tea, m',
    hr, e, f: '/abou, t', ic, o, n: User, s },
        { na, m, e: 'Career, s',
    hr, e, f: '/career, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Blo, g',
    hr, e, f: '/blo, g', ic, o, n: FileTex, t },
        { na, m, e: 'New, s',
    hr, e, f: '/new, s', ic, o, n: MessageSquar, e },
        { na, m, e: 'Pres, s Ki, t',
    hr, e, f: '/pres, s', ic, o, n: FileTex, t }
      ]
    },
    {
      titl, e: 'Support',
    ico, n: HelpCircl, e,
      item, s: [
        { na, m, e: 'Hel, p Cente, r',
    hr, e, f: '/hel, p', ic, o, n: HelpCircl, e },
        { na, m, e: 'Reques, t Quot, e',
    hr, e, f: '/reques, t-quot, e', ic, o, n: FileTex, t },
        { na, m, e: 'Communit, y',
    hr, e, f: '/communit, y', ic, o, n: User, s },
        { na, m, e: 'Documentatio, n',
    hr, e, f: '/doc, s', ic, o, n: BookOpe, n },
        { na, m, e: 'AP, I Referenc, e',
    hr, e, f: '/ap, i', ic, o, n: Cod, e },
        { na, m, e: 'Statu, s Pag, e',
    hr, e, f: '/statu, s', ic, o, n: CheckCircl, e }
=======
        { na, m, e: 'Blo, g',
    hr, e, f: '/blo, g', ic, o, n: BookOpe, n },
        { na, m, e: 'Hel, p Cente, r',
    hr, e, f: '/hel, p-cente, r', ic, o, n: HelpCircl, e },
        { na, m, e: 'Gree, n I, T',
    hr, e, f: '/gree, n-i, t', ic, o, n: Lea, f },
        { na, m, e: 'Sitema, p',
    hr, e, f: '/sitema, p', ic, o, n: FileTex, t },
      ]
    },
    {
      titl, e: 'Legal',
    item, s: [
        { na, m, e: 'Privac, y Polic, y',
    hr, e, f: '/privac, y', ic, o, n: Shiel, d },
        { na, m, e: 'Term, s o, f Servic, e',
    hr, e, f: '/term, s', ic, o, n: FileTex, t },
=======
        { lab, e, l: 'Hom, e',
    hr, e, f: '/', ic, o, n: Hom, e },
        { lab, e, l: 'Marketplac, e',
    hr, e, f: '/marketplac, e', ic, o, n: Briefcas, e },
        { lab, e, l: 'Talen, t',
    hr, e, f: '/talen, t', ic, o, n: User, s },
        { lab, e, l: 'Communit, y',
    hr, e, f: '/communit, y', ic, o, n: Glob, e },
        { lab, e, l: 'Blo, g',
    hr, e, f: '/blo, g', ic, o, n: BookOpe, n },
        { lab, e, l: 'Abou, t',
    hr, e, f: '/abou, t', ic, o, n: Buildin, g },
      ]
    },
    {
      titl, e: 'Services',
    item, s: [
        { lab, e, l: 'A, I Matche, r',
    hr, e, f: '/a, i-matche, r', ic, o, n: Za, p },
        { lab, e, l: 'Service, s',
    hr, e, f: '/service, s', ic, o, n: Briefcas, e },
        { lab, e, l: 'Equipmen, t',
    hr, e, f: '/equipmen, t', ic, o, n: Briefcas, e },
        { lab, e, l: 'Gree, n I, T',
    hr, e, f: '/gree, n-i, t', ic, o, n: Glob, e },
        { lab, e, l: 'Reques, t Quot, e',
    hr, e, f: '/reques, t-quot, e', ic, o, n: MessageSquar, e },
      ]
    },
    ...(isAuthenticated ? [{
      tit,  l, e: 'Accoun, t',
    ite, m, s: [
        { lab, e, l: 'Dashboar, d',
    hr, e, f: '/dashboar, d', ic, o, n: Setting, s },
        { lab, e, l: 'Message, s',
    hr, e, f: '/message, s', ic, o, n: MessageSquar, e },
        { lab, e, l: 'Pos, t Jo, b',
    hr, e, f: '/pos, t-jo, b', ic, o, n: Briefcas, e },
        { lab, e, l: 'Publis, h Produc, t',
    hr, e, f: '/publis, h', ic, o, n: Briefcas, e },
      ]
    }] : []),
    {
      titl, e: 'Support',
    item, s: [
        { lab, e, l: 'Hel, p Cente, r',
    hr, e, f: '/hel, p', ic, o, n: HelpCircl, e },
        { lab, e, l: 'Contac, t',
    hr, e, f: '/contac, t', ic, o, n: MessageSquar, e },
        { lab, e, l: 'Sitema, p',
    hr, e, f: '/sitema, p', ic, o, n: Glob, e },
=======
        { na, m, e: 'Abou, t U, s',
    pa, t, h: '/abou, t', ic, o, n: User, s },
        { na, m, e: 'Ou, r Missio, n',
    pa, t, h: '/missio, n', ic, o, n: Targe, t },
        { na, m, e: 'Ou, r Tea, m',
    pa, t, h: '/tea, m', ic, o, n: User, s },
        { na, m, e: 'Career, s',
    pa, t, h: '/career, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Partner, s',
    pa, t, h: '/partner, s', ic, o, n: Handshak, e },
        { na, m, e: 'Blo, g',
    pa, t, h: '/blo, g', ic, o, n: Glob, e },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: Briefcas, e },
        { na, m, e: 'Hel, p Cente, r',
    pa, t, h: '/hel, p', ic, o, n: Glob, e }
      ]
    },
    {
      titl, e: 'Support & Legal',
    item, s: [
        { na, m, e: 'Hel, p Cente, r',
    pa, t, h: '/hel, p', ic, o, n: User, s },
        { na, m, e: 'Documentatio, n',
    pa, t, h: '/doc, s', ic, o, n: Glob, e },
        { na, m, e: 'Contac, t Suppor, t',
    pa, t, h: '/contac, t', ic, o, n: Phon, e },
        { na, m, e: 'Statu, s Pag, e',
    pa, t, h: '/statu, s', ic, o, n: Glob, e },
        { na, m, e: 'Privac, y Polic, y',
    pa, t, h: '/privac, y', ic, o, n: Loc, k },
        { na, m, e: 'Term, s o, f Servic, e',
    pa, t, h: '/term, s', ic, o, n: Loc, k },
        { na, m, e: 'Cooki, e Polic, y',
    pa, t, h: '/cookie, s', ic, o, n: Loc, k }
      ]
    }
  ];

    { ico, n: Linkedi, n,
    hre, f: 'http, s: //www.linkedin.com/company/ziontechgroup',
    labe, l: 'LinkedIn' },
    { ico, n: Twitte, r,
    hre, f: 'http, s: //twitter.com/ziontechgroup',
    labe, l: 'Twitter' },
    { ico, n: Faceboo, k,
    hre, f: 'http, s: //facebook.com/ziontechgroup',
    labe, l: 'Facebook' },
    { ico, n: Instagra, m,
    hre, f: 'http, s: //instagram.com/ziontechgroup',
    labe, l: 'Instagram' },
    { ico, n: Githu, b,
    hre, f: 'http, s: //github.com/ziontechgroup',
    labe, l: 'GitHub' },
    { ico, n: Youtub, e,
    hre, f: 'http, s: //youtube.com/@ziontechgroup',
    labe, l: 'YouTube' }
  ];

  const sidebarVariants = {
    close, d: {
      x: '-100%',
    transitio, n: {
        typ, e: 'spring' a, s, cons, t,
    stiffnes, s: 30, 0,
        dampin, g: 30
      }
    },
    ope, n: {
      x: 0,
    transitio, n: {
        typ, e: 'spring' a, s, cons, t,
    stiffnes, s: 30, 0,
        dampin, g: 30
      }
    }
  };

  const overlayVariants = {
    close, d: { opacit, y: 0 },
    ope, n: { opacit, y: 1 }
  };

  // Fixed contact information
  const contactInfo = [
    { ic, o, n: Linked, i, n,
    hr, e, f: 'htt, p, s: //linkedi, n.co, m/compan, y/ziontechgrou, p',
    lab, e, l: 'LinkedI, n' },
=======
    { ic, o, n: Linked, i, n,
    hr, e, f: 'htt, p, s: //linkedi, n.co, m/compan, y/ziontechgrou, p',
    lab, e, l: 'LinkedI, n' },
=======
    { ic, o, n: Linked, i, n,
    hr, e, f: 'htt, p, s: //ww, w.linkedi, n.co, m/compan, y/zio, n-tec, h-grou, p',
    lab, e, l: 'LinkedI, n' },
=======
    { ic, o, n: Pho, n, e,
    te, x, t: '+1 (30,  2) 46, 4-095, 0', hr, e, f: 't, e, l:+1302464095, 0' },
    { ic, o, n: Ma, i, l,
    te, x, t: 'klebe, r@ziontechgrou, p.co, m', hr, e, f: 'mail, t, o:klebe, r@ziontechgrou, p.co, m' },
    { ic, o, n: MapP, i, n,
    te, x, t: '36, 4 E Mai, n S, t S, T, E, 10, 0, 8, Middletow, n D, E 1970, 9', hr, e, f: '#' }
  ];

  // Fixed social media links with proper URLs
  const socialLinks = [
    { ic, o, n: Linked, i, n,
    hr, e, f: 'htt, p, s: //ww, w.linkedi, n.co, m/compan, y/ziontechgrou, p',
    lab, e, l: 'LinkedI, n' },
    { ic, o, n: Twitt, e, r,
    hr, e, f: 'htt, p, s: //twitte, r.co, m/ziontechgrou, p',
    lab, e, l: 'Twitte, r' },
=======
    { ic, o, n: Gith, u, b,
    hr, e, f: 'htt, p, s: //githu, b.co, m/Zio, n-Holding, s',
    lab, e, l: 'GitHu, b' },
    { ic, o, n: Youtu, b, e,
    hr, e, f: 'htt, p, s: //ww, w.youtub, e.co, m/@ziontechgrou, p',
    lab, e, l: 'YouTub, e' }
=======
    { ic, o, n: Linked, i, n,
    hr, e, f: 'htt, p, s: //ww, w.linkedi, n.co, m/compan, y/zio, n-tec, h-grou, p',
    lab, e, l: 'LinkedI, n' },
=======
    { ic, o, n: Linked, i, n,
    hr, e, f: 'htt, p, s: //ww, w.linkedi, n.co, m/compan, y/ziontechgrou, p',
    lab, e, l: 'LinkedI, n' },
    { ic, o, n: Twitt, e, r,
    hr, e, f: 'htt, p, s: //twitte, r.co, m/ziontechgrou, p',
    lab, e, l: 'Twitte, r' },
    { ic, o, n: Facebo, o, k,
    hr, e, f: 'htt, p, s: //faceboo, k.co, m/ziontechgrou, p',
    lab, e, l: 'Faceboo, k' },
    { ic, o, n: Linked, i, n,
    hr, e, f: 'htt, p, s: //ww, w.linkedi, n.co, m/compan, y/ziontechgrou, p',
    lab, e, l: 'LinkedI, n' },
    { ic, o, n: Twitt, e, r,
    hr, e, f: 'htt, p, s: //twitte, r.co, m/ziontechgrou, p',
    lab, e, l: 'Twitte, r' },
    { ic, o, n: Facebo, o, k,
    hr, e, f: 'htt, p, s: //ww, w.faceboo, k.co, m/ziontechgrou, p',
    lab, e, l: 'Faceboo, k' },
    { ic, o, n: Instagr, a, m,
    hr, e, f: 'htt, p, s: //ww, w.instagra, m.co, m/ziontechgrou, p',
    lab, e, l: 'Instagra, m' }
=======
    { ic, o, n: Linked, i, n,
    hr, e, f: 'htt, p, s: //ww, w.linkedi, n.co, m/compan, y/zio, n-tec, h-grou, p',
    lab, e, l: 'LinkedI, n' },
    { ic, o, n: Twitt, e, r,
    hr, e, f: 'htt, p, s: //twitte, r.co, m/ziontechgrou, p',
    lab, e, l: 'Twitte, r' },
    { ic, o, n: Facebo, o, k,
    hr, e, f: 'htt, p, s: //ww, w.faceboo, k.co, m/ziontechgrou, p',
    lab, e, l: 'Faceboo, k' },
    { ic, o, n: Instagr, a, m,
    hr, e, f: 'htt, p, s: //ww, w.instagra, m.co, m/ziontechgrou, p',
    lab, e, l: 'Instagra, m' },
    { ic, o, n: Glo, b, e,
    hr, e, f: 'htt, p, s: //ww, w.youtub, e.co, m/@ziontechgrou, p',
    lab, e, l: 'YouTub, e' },
    { ic, o, n: Briefca, s, e,
    hr, e, f: 'htt, p, s: //githu, b.co, m/ziontechgrou, p',
    lab, e, l: 'GitHu, b' }
=======
    { ic, o, n: Instagr, a, m,
    hr, e, f: 'htt, p, s: //instagra, m.co, m/ziontechgrou, p',
    lab, e, l: 'Instagra, m' },
    { ic, o, n: Use, r, s,
    hr, e, f: 'htt, p, s: //discor, d.g, g/ziontechgrou, p',
    lab, e, l: 'Discor, d' }
=======
    { ic, o, n: Linked, i, n,
    hr, e, f: 'htt, p, s: //ww, w.linkedi, n.co, m/compan, y/ziontechgrou, p',
    lab, e, l: 'LinkedI, n' },
    { ic, o, n: Twitt, e, r,
    hr, e, f: 'htt, p, s: //twitte, r.co, m/ziontechgrou, p',
    lab, e, l: 'Twitte, r' },
    { ic, o, n: Gith, u, b,
    hr, e, f: 'htt, p, s: //githu, b.co, m/ziontechgrou, p',
    lab, e, l: 'GitHu, b' },
    { ic, o, n: Glo, b, e,
    hr, e, f: 'htt, p, s: //ww, w.youtub, e.co, m/@ziontechgrou, p',
    lab, e, l: 'YouTub, e' }
=======
    { ic, o, n: Linked, i, n,
    hr, e, f: 'htt, p, s: //ww, w.linkedi, n.co, m/compan, y/zio, n-tec, h-grou, p',
    lab, e, l: 'LinkedI, n' },
    { ic, o, n: Twitt, e, r,
    hr, e, f: 'htt, p, s: //twitte, r.co, m/ziontechgrou, p',
    lab, e, l: 'Twitte, r' },
    { ic, o, n: Facebo, o, k,
    hr, e, f: 'htt, p, s: //ww, w.faceboo, k.co, m/ziontechgrou, p',
    lab, e, l: 'Faceboo, k' },
    { ic, o, n: Instagr, a, m,
    hr, e, f: 'htt, p, s: //ww, w.instagra, m.co, m/ziontechgrou, p',
    lab, e, l: 'Instagra, m' }
=======
    { ic, o, n: Linked, i, n,
    hr, e, f: 'htt, p, s: //ww, w.linkedi, n.co, m/compan, y/ziontechgrou, p',
    lab, e, l: 'LinkedI, n' },
    { ic, o, n: Twitt, e, r,
    hr, e, f: 'htt, p, s: //twitte, r.co, m/ziontechgrou, p',
    lab, e, l: 'Twitte, r' },
    { ic, o, n: Facebo, o, k,
    hr, e, f: 'htt, p, s: //ww, w.faceboo, k.co, m/ziontechgrou, p',
    lab, e, l: 'Faceboo, k' },
    { ic, o, n: Instagr, a, m,
    hr, e, f: 'htt, p, s: //ww, w.instagra, m.co, m/ziontechgrou, p',
    lab, e, l: 'Instagra, m' }
=======
    { ic, o, n: Linked, i, n,
    hr, e, f: 'htt, p, s: //ww, w.linkedi, n.co, m/compan, y/ziontechgrou, p',
    lab, e, l: 'LinkedI, n' },
    { ic, o, n: Twitt, e, r,
    hr, e, f: 'htt, p, s: //twitte, r.co, m/ziontechgrou, p',
    lab, e, l: 'Twitte, r' },
    { ic, o, n: Facebo, o, k,
    hr, e, f: 'htt, p, s: //ww, w.faceboo, k.co, m/ziontechgrou, p',
    lab, e, l: 'Faceboo, k' },
    { ic, o, n: Instagr, a, m,
    hr, e, f: 'htt, p, s: //ww, w.instagra, m.co, m/ziontechgrou, p',
    lab, e, l: 'Instagra, m' }
  ];

  const sidebarVariants = {
    close, d: {
      x: '-100%',
    transitio, n: {
        typ, e: 'spring' a, s, cons, t,
    stiffnes, s: 30, 0,
        dampin, g: 30
      }
    },
    ope, n: {
      x: 0,
    transitio, n: {
        typ, e: 'spring' a, s, cons, t,
    stiffnes, s: 30, 0,
        dampin, g: 30
      }
    }
  };

    { ico, n: Linkedi, n,
    hre, f: 'http, s: //www.linkedin.com/company/ziontechgroup',
    labe, l: 'LinkedIn' },
    { ico, n: Twitte, r,
    hre, f: 'http, s: //twitter.com/ziontechgroup',
    labe, l: 'Twitter' },
    { ico, n: Faceboo, k,
    hre, f: 'http, s: //facebook.com/ziontechgroup',
    labe, l: 'Facebook' },
    { ico, n: Instagra, m,
    hre, f: 'http, s: //instagram.com/ziontechgroup',
    labe, l: 'Instagram' }
  ];
=======
  const overlayVariants = {
    close, d: {
      opacit, y: 0,
    transitio, n: {
        duratio, n: 0.2
      }
    },
    ope, n: {
      opacit, y: 1,
    transitio, n: {
        duratio, n: 0.2
      }
    }
  };

=======
  return (return (
=======
  return (
=======
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          
          {/* Sidebar */}
=======
    <>
      <AnimatePresence>
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsSidebarOpen(false)}
          />

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
=======
          <motion.div
            initial={{ opacit,  y: 0 }}
            animate={{ opacit, y: 1 }}
            exit={{ opacit, y: 0 }}
            className="fixed inset-0 bg-black/50 z-40 l, g:hidden"
            onClick={onClose}
          />
=======
          <motion.div
            initial={{ opacit, y: 0 }}
            animate={{ opacit, y: 1 }}
            exit={{ opacit, y: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 l, g:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
=======
          <motion.div
            initial={{ opacit, y: 0 }}
            animate={{ opacit, y: 1 }}
            exit={{ opacit, y: 0 }}
            className="fixed inset-0 bg-black/50 z-40 l, g:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
=======
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 l, g:hidden"
=======
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 l, g:hidden"
            onClick={onClose}
          />

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
=======
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (<motion.div
=======

          {/* Sidebar */}
          <motion.aside
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-black to-blue-900 border-r border-cyan-500/30 shadow-2xl shadow-cyan-500/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-cyan-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/50">
                    Z
                  </div>
                  <div>
                    <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h2>
                    <p className="text-xs text-gray-400">Navigation Menu</p>
                  </div>
=======
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={onClose}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-black to-blue-900 text-white z-50 shadow-2xl border-r border-cyan-500/30"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    Z
                  </div>
                  <span className="text-lg font-semibold text-cyan-400">Zion Tech Group</span>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 futuristic-card hove,  r:bg-white/20 rounded-lg transition-colors group"
=======
            className="fixed left-0 top-0 h-full w-80 max-w-[90, v, w] bg-background border-r border-border z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
                  <div className="w-8 h-8 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-xl font-bold text-gradient">Zion Tech Group</span>
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-gray-400 hove, r:text-white hove, r:bg-gray-800/50 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
=======
                  className="p-2 rounded-lg text-gray-400 hove, r:text-white hove, r:bg-gray-800/50 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
=======
            className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-md border-r border-gray-800 z-50 l, g:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-white font-bold text-lg">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hove, r:text-white p-2 rounded-md transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

  const overlayVariants = {
    close, d: { opacit, y: 0 },
    ope, n: { opacit, y: 1 }
=======
  const handleSocialLinkClick = (socia, l: typeof socialLinks[0]) => {
    try {
      window.open(social.hre,  f, '_blank', 'noopene, r,noreferrer');
    } catch (error) {
      console.error(`Failed to open ${social.labe, l}:`,  error);
    }
  };

  return (<AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacit,  y: 0 }}
            animate={{ opacit, y: 1 }}
            exit={{ opacit, y: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 via-black to-blue-900 text-white z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-white font-bold text-lg">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hove, r:text-white p-2 rounded-lg hove, r:bg-white/10 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

                    <button
                      onClick={() => toggleSection(section.title)}
                      className="flex items-center justify-between w-full text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text hove,  r:bg-white/10 rounded-lg p-2 transition-colors"
                    >
                      <span>{section.title}</span>
                      {expandedSections.includes(section.title) ? (<ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedSections.includes(section.title) && (
                      <div className="space-y-1 ml-4">
                        {section.items.map((item) => {
                          const Icon = item.icon;
                          const isActive = location.pathname === item.path;
                          
                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                                isActive
                                  ? 'quantum-button shadow-lg shadow-zion-cyan/30'
                                  : 'futuristic-card text-zion-slate-light hove,  r:bg-white/20 hove, r:neon-tex, t'
                              }`}
                            >
                              <Icon className={`w-4 h-4 ${
                                isActive ? 'text-white' : 'text-zion-cyan group-hove, r:neon-tex, t'
                              }`} />
                              <span className="flex-1 text-sm">{item.name}</span>
                              {isActive && (
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                    <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
=======
              {/* Navigation */}
              <nav className="space-y-8">
                {navigationItems.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                              location.pathname === item.path
                                ? 'text-zion-cyan bg-zion-cyan/10'
                                : 'text-muted-foreground hove,  r:text-foreground hove, r:bg-mute, d'
                            }`}
                            onClick={onClose}
                          >
                            <item.icon className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate">{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
=======
                  </div>
                ))}
              </nav>

              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                    <Link
                      to="/contact"
                      className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hove, r:scale-105 transition-transform text-center"
                    >
                      Get Free Quote
                    </Link>
                    <button className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hove, r:bg-zion-cyan/10 transition-colors">
                      Schedule Demo
                    </button>
            {/* Navigation */}
            <div className="p-6 space-y-8">
              {navigationItems.map((sectio,  n, index) => (<div key={index}>
                  <h3 className="text-zion-cyan font-semibold mb-4 text-sm uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((ite,  m, itemIndex) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (<Link
                          key={itemIndex}
                          to={item.path}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                            isActive
                              ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                              : 'text-zion-slate-light hove,  r:text-white hove, r:bg-zion-blue-light/1, 0'
                          }`}
                          onClick={onClose}
                        >
                          <Icon className={`w-5 h-5 ${isActive ? 'text-zion-cyan' : 'text-zion-slate-light group-hove, r:text-whit, e'}`} />
                          <span className="text-sm font-medium">{item.name}</span>
                        </Link>
                      );
                    })}
=======
            variants={sidebarVariants}
            className="fixed left-0 top-0 h-full w-80 max-w-[90, v, w] bg-black/95 backdrop-blur-md border-r border-gray-800 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
=======
                    <Link 
                      to="/contact"
                      className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hove, r:scale-105 transition-transform text-center block"
                    >
                      Get Free Quote
                    </Link>
                    <Link 
                      to="/pricing"
                      className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hove, r:bg-zion-cyan/10 transition-colors text-center block"
                    >
                      View Pricing
                    </Link>
=======
            </div>

            {/* Navigation Items */}
            <div className="p-4 space-y-6">
              {navigationItems.map((sectio,  n, sectionIndex) => (<div key={sectionIndex} className="space-y-3">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide px-3">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((ite,  m, itemIndex) => (<Link
                        key={itemIndex}
                        to={item.path}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 group ${
                          location.pathname === item.path
                            ? 'text-cyan-400 bg-cyan-500/20 border border-cyan-400/50'
                            : 'text-gray-300 hove,  r:text-white hove, r:bg-gray-800/5, 0'
                        }`}
                      >
                        <item.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="flex-1">{item.name}</span>
                        {location.pathname === item.path && (
                          <ArrowRight className="w-3 h-3 text-cyan-400" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
                    <Link to="/contact" className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hove, r:scale-105 transition-transform text-center block">
                      Get Free Quote
                    </Link>
                    <Link to="/contact" className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hove, r:bg-zion-cyan/10 transition-colors text-center block">
                      Schedule Demo
                    </Link>
=======
=======
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 text-sm focu, s:outline-none focu, s:border-cyan-400 focu, s:ring-2 focu, s:ring-cyan-400/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Navigation Content */}
            <div className="p-6 space-y-8">
              {navigationItems.map((sectio,  n, sectionIndex) => (<div key={sectionIndex} className="space-y-4">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider neon-text-cyan">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((ite,  m, itemIndex) => (<Link
                        key={itemIndex}
                        to={item.path}
                        onClick={onClose}
                        className="flex items-start space-x-3 p-3 rounded-lg hove,  r:bg-cyan-500/10 transition-all duration-200 group"
                      >
                        <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg group-hove, r:border-cyan-400/50 transition-colors duration-200">
                          <item.icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-white group-hove, r:text-cyan-400 transition-colors duration-200">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-1 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
=======
            {/* Navigation */}
            <div className="p-6 space-y-8">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                          location.pathname === item.path
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'text-gray-300 hove,  r:text-white hove, r:bg-white/1, 0'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
=======
                  {contactInfo.map((contac,  t, index) => (<div key={index} className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <contact.icon className="h-4 w-4 text-zion-cyan" />
                      <a href={contact.href} className="hove,  r:text-zion-cyan transition-colors">
                        {contact.text}
                      </a>
                    </div>
                  ))}
                </div>
              {/* Navigation */}
              <div className="flex-1 overflow-y-auto py-6">
                <nav className="space-y-8">
                  {navigationItems.map((sectio,  n, index) => (<div key={index} className="px-6">
                      <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((ite,  m, itemIndex) => (<li key={itemIndex}>
                            <Link
                              to={item.path}
                              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                                location.pathname === item.path
                                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                  : 'text-gray-300 hove,  r:text-white hove, r:bg-gray-800/5, 0'
                              }`}
                            >
                              <item.icon className="w-4 h-4" />
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
=======
            className="fixed left-0 top-0 h-full w-80 max-w-[90, v, w] z-50 overflow-hidden"
          >
            {/* Futuristic Background */}
            <div className="absolute inset-0 futuristic-bg opacity-80"></div>
            <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
            
            {/* Neural Network Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="neural-line" style={{ to, p: '20%',
    widt, h: '60%', lef, t: '20%',
    animationDela, y: '0s' }}></div>
              <div className="neural-line" style={{ to, p: '40%',
    widt, h: '40%', lef, t: '10%',
    animationDela, y: '1s' }}></div>
              <div className="neural-line" style={{ to, p: '60%',
    widt, h: '70%', lef, t: '15%',
    animationDela, y: '2s' }}></div>
              <div className="neural-line" style={{ to, p: '80%',
    widt, h: '50%', lef, t: '25%',
    animationDela, y: '3s' }}></div>
            </div>

            {/* Floating Quantum Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="quantum-particle" style={{ to, p: '15%',
    lef, t: '80%', animationDela, y: '0s' }}></div>
              <div className="quantum-particle" style={{ to, p: '35%',
    lef, t: '85%', animationDela, y: '1s' }}></div>
              <div className="quantum-particle" style={{ to, p: '55%',
    lef, t: '90%', animationDela, y: '2s' }}></div>
              <div className="quantum-particle" style={{ to, p: '75%',
    lef, t: '88%', animationDela, y: '3s' }}></div>
            </div>

            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zion-cyan/30">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center animate-quantum-float">
                      <span className="text-white font-bold text-xl">Z</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold neon-text">Zion Tech</h2>
                    <p className="text-sm text-zion-slate-light">Navigation</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 futuristic-card hove, r:bg-white/20 rounded-lg transition-colors group"
                >
                  <X className="w-5 h-5 text-zion-slate-light group-hove, r:neon-text transition-colors" />
                </button>
              </div>

              {/* Navigation Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Main Navigation */}
                {navigationItems.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
                      {section.title}
                    </h3>
                    <div className="space-y-1">
                      {section.items.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        const isFeatured = item.featured;
                        
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group relative ${
                              isActive
                                ? 'quantum-button shadow-lg shadow-zion-cyan/30'
                                : 'futuristic-card text-zion-slate-light hove,  r:bg-white/20 hove, r:neon-text'
                            } ${isFeatured ? 'border-l-2 border-zion-cyan/5, 0' : ''}`}
                          >
                            {isFeatured && (
                              <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                            )}
                            <Icon className={`w-4 h-4 ${
                              isActive ? 'text-white' : 'text-zion-cyan group-hove, r:neon-tex, t'
                            }`} />
                            <span className="flex-1">{item.name}</span>
                            {isActive && (<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            )}
                            {isFeatured && (
                              <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((socia,  l, index) => (<a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zion-blue-light/20 hove,  r:bg-zion-cyan/20 rounded-lg flex items-center justify-center transition-all duration-300 hove, r:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-zion-slate-light hove, r:text-zion-cyan transition-colors" />
                  </a>
                ))}
=======
                className="p-2 text-gray-400 hove, r:text-white hove, r:bg-gray-800/50 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <div className="p-6 space-y-6">
              {navigationItems.map((section) => {
                const Icon = section.icon;
                const isExpanded = expandedSections.includes(section.title);
                
                return (
                  <div key={section.title} className="space-y-3">
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="flex items-center justify-between w-full p-3 text-left hove,  r:bg-gray-800/50 rounded-lg transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <Icon className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium text-white group-hove, r:text-cyan-400 transition-colors duration-200">
                          {section.title}
                        </span>
                      </div>
                      <ChevronDown 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          isExpanded ? 'rotate-18, 0' : ''
                        }`} 
                      />
                    </button>
                    
                    {isExpanded && (
                      <motion.div
                        initial={{ opacit, y: 0,
    heigh, t: 0 }}
                        animate={{ opacit, y: 1,
    heigh, t: 'auto' }}
                        exit={{ opacit, y: 0,
    heigh, t: 0 }}
                        transition={{ duratio, n: 0.2 }}
                        className="ml-6 space-y-2"
                      >
                        {section.items.map((item) => {
                          const ItemIcon = item.icon;
                          const isActive = location.pathname === item.path;
                          
                          return (<Link
                              key={item.path}
                              to={item.path}
                              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                                isActive 
                                  ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-400' 
                                  : 'text-gray-300 hove,  r:text-white hove, r:bg-gray-800/5, 0'
                              }`}
                              onClick={onClose}
                            >
                              <ItemIcon className="w-4 h-4" />
                              <div className="flex-1 min-w-0">
                                <div className="font-medium">{item.name}</div>
                                {item.description && (
                                  <div className="text-xs text-gray-400 mt-1 truncate">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                              <ChevronRight className="w-3 h-3 text-gray-500 group-hove, r:text-cyan-400 transition-colors duration-200" />
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact & Social */}
            <div className="p-6 border-t border-gray-800/50 space-y-6">
              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h4>
                <div className="space-y-2">
                  {contactInfo.map((contac,  t, index) => {
                    const Icon = contact.icon;
                    return (<a
                        key={index}
                        href={contact.href}
                        className="flex items-center space-x-3 text-sm text-gray-400 hove,  r:text-cyan-400 transition-colors duration-200"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{contact.label}</span>
                      </a>
                    );
                  })}
=======
            <div className="p-6 border-t border-gray-800 space-y-6">
              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Contact Info
                </h3>
                <div className="space-y-3">
                  {contactInfo.map((contac,  t, idx) => (<a
                      key={idx}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-300 hove,  r:text-cyan-400 transition-colors duration-200"
                    >
                      <contact.icon className="w-4 h-4" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  ))}
=======
            {/* Navigation */}
            <nav className="p-6 space-y-8">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center space-x-3 px-3 py-2 text-gray-300 hove,  r:text-white hove, r:bg-gray-800/50 rounded-md transition-all duration-200"
                      >
                        <item.icon className="w-5 h-5 text-cyan-500" />
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((socia,  l, idx) => (<a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hove,  r:text-cyan-400 hove, r:bg-cyan-400/10 rounded-lg transition-all duration-200"
                      title={social.label}
=======
              {/* Social Links */}
              <div className="pt-6 border-t border-cyan-500/20">
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4 neon-text-cyan">
                  Follow Us
                </h3>
                <div className="flex space-x-3">
                  {socialLinks.map((socia, l, index) => (<a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/30 border border-cyan-500/20 rounded-lg text-gray-400 hove,  r:text-cyan-400 hove, r:border-cyan-400/40 hove, r:bg-cyan-500/10 transition-all duration-200 hove, r:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
=======
              </div>

              {/* Footer */}
              <div className="border-t border-gray-700/50 p-6 space-y-6">
                {/* Contact Info */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-cyan-400">Contact Information</h4>
                  <div className="space-y-2">
            className="fixed left-0 top-0 h-full w-80 bg-background/95 backdrop-blur-md border-r border-border z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-lg font-bold text-gradient">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-md text-muted-foreground hove, r:text-foreground hove, r:bg-muted transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-8">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = location.pathname === item.path;
=======
=======

                {/* Quick Actions */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-zion-cyan uppercase tracking-wider neon-text">
                    Quick Actions
                  </h3>
                  <div className="space-y-2">
                    <button className="w-full quantum-button py-3 px-4 rounded-lg font-medium transform hove,  r:scale-105 transition-transform">
                      Get Free Quote
                    </button>
                    <button className="w-full futuristic-card border border-zion-cyan/30 text-zion-cyan py-3 px-4 rounded-lg font-medium hove, r:bg-zion-cyan/10 transition-colors">
                      Schedule Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-zion-cyan/30 p-6 space-y-4">
                {/* Contact Info */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zion-cyan neon-text">Contact Info</h4>
                  <div className="space-y-2">
                    {contactInfo.map((contac, t, index) => {
                      const Icon = contact.icon;
                      return (<a
                          key={index}
                          href={contact.href}
                          className="flex items-center gap-3 text-sm text-zion-slate-light hove,  r:neon-text transition-colors group"
                        >
                          <Icon className="w-4 h-4 text-zion-cyan group-hove, r:neon-text" />
                          <span className="flex-1">{contact.text}</span>
                        </a>
                          <IconComponent className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{item.name}</span>
                        </Link>
=======
                      );
                    })}
=======
                    {contactInfo.map((contac,  t, index) => (<a
                        key={index}
                        href={contact.href}
                        className="flex items-center space-x-2 text-xs text-gray-300 hove,  r:text-cyan-400 transition-colors"
                      >
                        <contact.icon className="w-3 h-3" />
                        <span>{contact.text}</span>
                      </a>
                    ))}
                  </div>
=======
=======
                          <Icon className="w-4 h-4 text-zion-cyan group-hove, r:neon-text" />
                          <span className="flex-1">{contact.text}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zion-cyan neon-text">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((socia,  l, index) => {
                      const Icon = social.icon;
                      return (<a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 futuristic-card hove,  r:bg-white/20 rounded-lg transition-colors group"
                          aria-label={social.label}
                        >
                          <Icon className="w-4 h-4 text-zion-slate-light group-hove, r:neon-text transition-colors" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Company Info */}
                <div className="text-center pt-4 border-t border-zion-cyan/20">
                  <p className="text-xs text-zion-slate-light">
                    © 2024 Zion Tech Group
                  </p>
                  <p className="text-xs text-zion-slate-light mt-1">
                    Transforming Business with AI & Tech
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hove,  r:text-zion-cyan transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
                ))}
              </div>
            </div>
            role="complementary"
            aria-label="Navigation sidebar"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-white font-semibold">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hove, r:text-white hove, r:bg-gray-800 rounded-lg transition-colors duration-200 focu, s:outline-none focu, s:ring-2 focu, s:ring-cyan-500"
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-8">
              {navigationItems.map((sectio,  n, sectionIndex) => (<div key={sectionIndex} className="space-y-3">
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((ite,  m, itemIndex) => (<li key={itemIndex}>
                        <Link
                          to={item.path}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                            location.pathname === item.path
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                              : 'text-gray-300 hove,  r:text-cyan-400 hove, r:bg-gray-800/5, 0'
                          }`}
                          onClick={onClose}
                        >
                          <item.icon className={`w-4 h-4 flex-shrink-0 ${
                            location.pathname === item.path ? 'text-cyan-400' : 'text-gray-400 group-hove, r:text-cyan-40, 0'
                          }`} />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            {/* Contact Information */}
            <div className="p-6 border-t border-gray-700 space-y-4">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((contac,  t, index) => (<div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <a
                      href={contact.href}
                      className="text-gray-300 hove,  r:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 border-t border-gray-700 space-y-4">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((socia,  l, index) => (<a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
            {/* Navigation */}
            <nav className="p-6 space-y-8">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center space-x-3 px-3 py-2 text-gray-300 hove,  r:text-white hove, r:bg-gray-800/50 rounded-md transition-all duration-200"
                      >
                        <item.icon className="w-5 h-5 text-cyan-500" />
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

=======
            {/* Contact Information */}
            <div className="p-6 border-t border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-300 hove,  r:text-cyan-400 transition-colors duration-200"
                  >
                    <contact.icon className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm">{contact.text}</span>
=======
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hove, r:text-white hove, r:bg-gray-700 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>


            {/* CTA Button */}
            <div className="p-6 border-t border-gray-800">
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-medium hove, r:from-cyan-600 hove, r:to-purple-700 transition-all duration-200 transform hove, r:scale-105"
              >
                Get Started
              </Link>
            </div>
          </motion.aside>
=======
            {/* Quick Actions */}
            <div className="p-6 border-t border-gray-700 space-y-4">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hove, r:from-cyan-600 hove, r:to-blue-700 transition-all duration-300"
                  onClick={onClose}
                >
                  Get Started
                </Link>
                <Link
                  to="/demo"
                  className="block w-full text-center px-4 py-2 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hove, r:bg-cyan-500/10 transition-all duration-300"
                  onClick={onClose}
                >
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-700 text-center">
              <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Zion Tech Group
              </p>
              <p className="text-gray-600 text-xs mt-1">
                AI-Powered Innovation
              </p>
            </div>
          </motion.aside>
=======
        </>
      )}
    </AnimatePresence>
=======
                </div>

                {/* Company Info */}
                <div className="text-center pt-4 border-t border-zion-cyan/20">
                  <p className="text-xs text-zion-slate-light">
                    © 2025 Zion Tech Group
                  </p>
                  <p className="text-xs text-zion-slate-light mt-1">
                    Transforming Business with AI & Tech
                  </p>
                </div>
=======
              ))}
            </div>

            {/* Contact Information */}
            <div className="p-4 border-t border-cyan-500/30 mt-6">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3 px-3">
                Contact Information
              </h3>
              <div className="space-y-2">
                {contactInfo.map((contac,  t, index) => (<a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-300 hove,  r:text-white hove, r:bg-gray-800/50 transition-all duration-300 group"
                  >
                    <contact.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-xs">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 border-t border-cyan-500/30">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3 px-3">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-2 px-3">
                {socialLinks.map((socia,  l, index) => (<a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-lg flex items-center justify-center text-cyan-400 hove,  r:from-cyan-400/30 hove, r:to-blue-400/30 hove, r:border-cyan-400/50 transition-all duration-300 hove, r:scale-110"
                    aria-label={`Follow us on ${social.labe, l}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-cyan-500/30">
              <div className="space-y-2">
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hove, r:from-cyan-400 hove, r:to-blue-400 transition-all duration-300 text-sm font-medium text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/contact"
                  className="block w-full px-4 py-2 border border-cyan-400/50 text-cyan-400 rounded-lg hove, r:bg-cyan-400/20 transition-all duration-300 text-sm font-medium text-center"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.aside>
=======
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
=======
              {/* CTA Button */}
              <div className="pt-6">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg text-center transition-all duration-200 transform hove, r:scale-105 hove, r:shadow-lg hove, r:shadow-cyan-500/25"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
=======
            {/* Social Links */}
            <div className="p-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.label}
                    onClick={() => handleSocialLinkClick(social)}
                    className="w-10 h-10 bg-gray-800 hove,  r:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hove, r:text-white" />
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="p-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Stay Updated</h3>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focu, s:outline-none focu, s:ring-2 focu, s:ring-cyan-500 focu, s:border-transparent text-sm"
                />
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hove, r:from-cyan-600 hove, r:to-purple-700 transition-all duration-200 font-medium text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
=======
          </motion.div>
        )}
      </AnimatePresence>
    </>
=======
  const quickActions = [
    { na, m, e: 'Ge, t Starte, d',
    hr, e, f: '/contac, t', ic, o, n: Rock, e, t,
    col, o, r: 'fro, m-zio, n-cya, n t, o-zio, n-blu, e' },
    { na, m, e: 'Reques, t Dem, o',
    hr, e, f: '/reques, t-quot, e', ic, o, n: Vid, e, o,
    col, o, r: 'fro, m-zio, n-purpl, e t, o-zio, n-cya, n' },
    { na, m, e: 'Suppor, t Cha, t',
    hr, e, f: '/suppor, t', ic, o, n: MessageSqua, r, e,
    col, o, r: 'fro, m-gree, n-40, 0 t, o-emeral, d-40, 0' }
  ];

  const containerVariants = {
    hidde, n: { opacit, y: 0,
    x: -20 },
    visibl, e: {
      opacit, y: 1,
    x: 0,
      transitio, n: {
        staggerChildre, n: 0.1
      }
    }
  };

  const itemVariants = {
    hidde, n: { opacit, y: 0,
    x: -10 },
    visibl, e: { opacit, y: 1,
    x: 0 }
  };

  return (<motion.aside 
      className={cn("w-80 bg-zion-blue-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 min-h-screen overflow-y-auto",  className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <div className="sticky top-0 bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="absolute inset-0 bg-zion-cyan rounded-xl blur-xl opacity-60"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-zion-cyan/70 text-xs font-medium">Innovation • Intelligence • Impact</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          {quickActions.map((action) => (
            <Link
              key={action.name}
              to={action.href}
              className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 hove,  r:border-zion-cyan/40 transition-all duration-300 group"
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center group-hove, r:scale-110 transition-transform duration-30, 0`}>
                <action.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-white group-hove, r:text-zion-cyan transition-colors duration-300">
                {action.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

// Add missing icons
const Database = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zM12 20c-4.42 0-8-1.79-8-4v-1.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V16c0 2.21-3.58 4-8 4z"/>
    <path d="M12 16c-4.42 0-8-1.79-8-4v-1.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V12c0 2.21-3.58 4-8 4z"/>
    <path d="M12 12c-4.42 0-8-1.79-8-4V6.5c2.21 1.86 5.74 2.5 8 2.5s5.79-.64 8-2.5V8c0 2.21-3.58 4-8 4z"/>
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);
=======
  MessageSquar,  e, 
  BarChart, 3,
  ShoppingCar, t,
  Wrenc, h,
  Glob, e,
  Buildin, g,
  Cod, e,
  Shiel, d,
  Za, p,
  ChevronRigh, t,
  ChevronDown
} from 'lucide-react';

interface SidebarProps {
  isOpe, n: boolean;
  onClos, e: () => void;
}

export default function Sidebar({ isOpe,  n, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedSectio,  n, s, setExpandedSectio, n, s] = useState<string[]>([]);

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  },  [locatio, n.pathna, m, e, onClo, s, e]);

  const toggleSection = (sectionTitl,  e: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(title => title !== sectionTitle)
        : [...pr,  e, v, sectionTit, l, e]
    );
  };

  const navigationItems = [
    {
      tit, l, e: 'Mai, n Navigatio, n',
    ite, m, s: [
        { na, m, e: 'Hom, e',
    pa, t, h: '/', ic, o, n: Ho, m, e,
    descripti, o, n: 'Welcom, e t, o Zio, n Tec, h Grou, p' },
        { na, m, e: 'Service, s Overvie, w',
    pa, t, h: '/service, s', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Al, l ou, r service, s' },
        { na, m, e: 'Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Rock, e, t,
    descripti, o, n: 'Industr, y solution, s' },
        { na, m, e: 'Pricin, g',
    pa, t, h: '/pricin, g', ic, o, n: DollarSi, g, n,
    descripti, o, n: 'Servic, e plan, s an, d pricin, g' },
        { na, m, e: 'Abou, t U, s',
    pa, t, h: '/abou, t', ic, o, n: Use, r, s,
    descripti, o, n: 'Lear, n abou, t ou, r compan, y' },
        { na, m, e: 'Contac, t',
    pa, t, h: '/contac, t', ic, o, n: Pho, n, e,
    descripti, o, n: 'Ge, t i, n touc, h wit, h u, s' }
      ]
    },
    {
      titl, e: 'AI & Autonomous Systems',
    item, s: [
        { na, m, e: 'A, I & Autonomou, s System, s',
    pa, t, h: '/service, s/a, i-autonomou, s-system, s', ic, o, n: Bra, i, n,
    descripti, o, n: 'Advance, d A, I solution, s' },
        { na, m, e: 'A, I Researc, h Assistan, t',
    pa, t, h: '/a, i-autonomou, s-researc, h-assistan, t', ic, o, n: Bra, i, n,
    descripti, o, n: 'A, I-powere, d researc, h' },
        { na, m, e: 'A, I Busines, s Manage, r',
    pa, t, h: '/a, i-autonomou, s-busines, s-manage, r', ic, o, n: Bra, i, n,
    descripti, o, n: 'Autonomou, s busines, s managemen, t' },
        { na, m, e: 'A, I Busines, s Platfor, m',
    pa, t, h: '/a, i-autonomou, s-busines, s-platfor, m', ic, o, n: Bra, i, n,
    descripti, o, n: 'Complet, e busines, s platfor, m' },
        { na, m, e: 'A, I Cod, e Revie, w',
    pa, t, h: '/a, i-autonomou, s-cod, e-revie, w', ic, o, n: Co, d, e,
    descripti, o, n: 'Automate, d cod, e revie, w' },
        { na, m, e: 'A, I Creativ, e Directo, r',
    pa, t, h: '/a, i-autonomou, s-creativ, e-directo, r', ic, o, n: Palet, t, e,
    descripti, o, n: 'A, I creativ, e solution, s' },
        { na, m, e: 'A, I Dat, a Managemen, t',
    pa, t, h: '/a, i-autonomou, s-dat, a', ic, o, n: Databa, s, e,
    descripti, o, n: 'Intelligen, t dat, a handlin, g' },
        { na, m, e: 'A, I Decisio, n Engin, e',
    pa, t, h: '/a, i-autonomou, s-decisio, n-engin, e', ic, o, n: Bra, i, n,
    descripti, o, n: 'Smar, t decisio, n makin, g' },
        { na, m, e: 'A, I DevOp, s',
    pa, t, h: '/a, i-autonomou, s-devop, s', ic, o, n: Serv, e, r,
    descripti, o, n: 'Automate, d DevOp, s' },
        { na, m, e: 'A, I Educatio, n',
    pa, t, h: '/a, i-autonomou, s-educatio, n-professo, r', ic, o, n: Use, r, s,
    descripti, o, n: 'A, I learnin, g system, s' },
        { na, m, e: 'A, I Healthcar, e',
    pa, t, h: '/a, i-autonomou, s-healthcar, e-physicia, n', ic, o, n: Hea, r, t,
    descripti, o, n: 'Medica, l A, I solution, s' },
        { na, m, e: 'A, I Learnin, g Syste, m',
    pa, t, h: '/a, i-autonomou, s-learnin, g-syste, m', ic, o, n: Lightbu, l, b,
    descripti, o, n: 'Adaptiv, e learnin, g' },
        { na, m, e: 'A, I Lega, l Counse, l',
    pa, t, h: '/a, i-autonomou, s-lega, l-counse, l', ic, o, n: Shie, l, d,
    descripti, o, n: 'Lega, l A, I assistanc, e' },
        { na, m, e: 'A, I Logistic, s',
    pa, t, h: '/a, i-autonomou, s-logistic, s', ic, o, n: Tru, c, k,
    descripti, o, n: 'Smar, t logistic, s' },
        { na, m, e: 'A, I Manufacturin, g',
    pa, t, h: '/a, i-autonomou, s-manufacturin, g', ic, o, n: Buildin, g, 2,
    descripti, o, n: 'Smar, t manufacturin, g' },
        { na, m, e: 'A, I Researc, h',
    pa, t, h: '/a, i-autonomou, s-researc, h', ic, o, n: Bra, i, n,
    descripti, o, n: 'Researc, h automatio, n' },
        { na, m, e: 'A, I Robotic, s',
    pa, t, h: '/a, i-autonomou, s-robotic, s', ic, o, n: C, p, u,
    descripti, o, n: 'Autonomou, s robotic, s' },
        { na, m, e: 'A, I Securit, y',
    pa, t, h: '/a, i-autonomou, s-securit, y', ic, o, n: Shie, l, d,
    descripti, o, n: 'Intelligen, t securit, y' },
        { na, m, e: 'A, I Testin, g',
    pa, t, h: '/a, i-autonomou, s-testin, g', ic, o, n: Co, d, e,
    descripti, o, n: 'Automate, d testin, g' },
        { na, m, e: 'A, I Vehicle, s',
    pa, t, h: '/a, i-autonomou, s-vehicl, e', ic, o, n: C, a, r,
    descripti, o, n: 'Autonomou, s vehicle, s' },
        { na, m, e: 'A, I Ventur, e Capita, l',
    pa, t, h: '/a, i-autonomou, s-ventur, e-capitalis, t', ic, o, n: Trending, U, p,
    descripti, o, n: 'A, I investmen, t' }
      ]
    },
    {
      titl, e: 'Core Services',
    item, s: [
        { na, m, e: 'Quantu, m Neura, l Network, s',
    pa, t, h: '/quantu, m-neura, l-networ, k-platfor, m', ic, o, n: At, o, m,
    descripti, o, n: 'Quantu, m computin, g' },
        { na, m, e: 'Autonomou, s Busines, s Operation, s',
    pa, t, h: '/autonomou, s-busines, s-operation, s-platfor, m', ic, o, n: Rock, e, t,
    descripti, o, n: 'Busines, s automatio, n' },
        { na, m, e: 'A, I Asse, t Managemen, t',
    pa, t, h: '/a, i-powere, d-i, t-asse, t-managemen, t', ic, o, n: Databa, s, e,
    descripti, o, n: 'I, T asse, t managemen, t' },
        { na, m, e: 'Cybersecurit, y',
    pa, t, h: '/service, s/cybersecurit, y', ic, o, n: Shie, l, d,
    descripti, o, n: 'Securit, y solution, s' },
        { na, m, e: 'SOC, 2 Complianc, e',
    pa, t, h: '/soc, 2-complianc, e-automatio, n', ic, o, n: Shie, l, d,
    descripti, o, n: 'Complianc, e automatio, n' },
        { na, m, e: 'Quantu, m Technolog, y',
    pa, t, h: '/service, s/quantu, m-technolog, y', ic, o, n: At, o, m,
    descripti, o, n: 'Quantu, m solution, s' },
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Serv, e, r,
    descripti, o, n: 'Infrastructur, e service, s' },
        { na, m, e: '5, G Enterpris, e Solution, s',
    pa, t, h: '/5, g-enterpris, e-solution, s', ic, o, n: Netwo, r, k,
    descripti, o, n: '5, G technolog, y' },
        { na, m, e: 'Micr, o SAA, S Solution, s',
    pa, t, h: '/service, s/micr, o-saa, s-solution, s', ic, o, n: Glo, b, e,
    descripti, o, n: 'SAA, S platform, s' },
        { na, m, e: 'Clou, d & DevOp, s',
    pa, t, h: '/clou, d-devop, s', ic, o, n: Clo, u, d,
    descripti, o, n: 'Clou, d solution, s' },
        { na, m, e: 'A, I Workflo, w Automatio, n',
    pa, t, h: '/a, i-workflo, w-automatio, n', ic, o, n: Z, a, p,
    descripti, o, n: 'Workflo, w optimizatio, n' },
        { na, m, e: 'Blockchai, n Solution, s',
    pa, t, h: '/blockchai, n-enterpris, e-solution, s', ic, o, n: Lo, c, k,
    descripti, o, n: 'Blockchai, n technolog, y' },
        { na, m, e: 'Io, T Dat, a Analytic, s',
    pa, t, h: '/io, t-dat, a-analytic, s', ic, o, n: Databa, s, e,
    descripti, o, n: 'Io, T solution, s' },
        { na, m, e: 'Digita, l Transformatio, n',
    pa, t, h: '/digita, l-transformatio, n', ic, o, n: Glo, b, e,
    descripti, o, n: 'Digita, l strateg, y' },
        { na, m, e: 'Industr, y Solution, s',
    pa, t, h: '/service, s/industr, y-solution, s', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Industr, y-specifi, c' }
      ]
    },
    {
      titl, e: 'Industry Solutions',
    item, s: [
        { na, m, e: 'Enterpris, e Solution, s',
    pa, t, h: '/solution, s/enterpris, e', ic, o, n: Buildi, n, g,
    descripti, o, n: 'Enterpris, e technolog, y' },
        { na, m, e: 'Healthcar, e Solution, s',
    pa, t, h: '/solution, s/healthcar, e', ic, o, n: Hea, r, t,
    descripti, o, n: 'Medica, l technolog, y' },
        { na, m, e: 'Financia, l Solution, s',
    pa, t, h: '/solution, s/financia, l', ic, o, n: DollarSi, g, n,
    descripti, o, n: 'Fintec, h solution, s' },
        { na, m, e: 'Manufacturin, g Solution, s',
    pa, t, h: '/solution, s/manufacturin, g', ic, o, n: Buildin, g, 2,
    descripti, o, n: 'Industr, y 4.0' },
        { na, m, e: 'Retai, l Solution, s',
    pa, t, h: '/solution, s/retai, l', ic, o, n: ShoppingCa, r, t,
    descripti, o, n: 'Retai, l technolog, y' },
        { na, m, e: 'Governmen, t Solution, s',
    pa, t, h: '/solution, s/governmen, t', ic, o, n: Shie, l, d,
    descripti, o, n: 'Publi, c secto, r tec, h' },
        { na, m, e: 'Educatio, n Solution, s',
    pa, t, h: '/solution, s/educatio, n', ic, o, n: Use, r, s,
    descripti, o, n: 'Educationa, l technolog, y' },
        { na, m, e: 'Energ, y Solution, s',
    pa, t, h: '/solution, s/energ, y', ic, o, n: Z, a, p,
    descripti, o, n: 'Energ, y technolog, y' },
        { na, m, e: 'Transportatio, n Solution, s',
    pa, t, h: '/solution, s/transportatio, n', ic, o, n: Tru, c, k,
    descripti, o, n: 'Mobilit, y solution, s' }
      ]
    },
    {
      titl, e: 'Company & Resources',
    item, s: [
        { na, m, e: 'Abou, t U, s',
    pa, t, h: '/abou, t', ic, o, n: Use, r, s,
    descripti, o, n: 'Ou, r stor, y' },
        { na, m, e: 'Ou, r Tea, m',
    pa, t, h: '/tea, m', ic, o, n: Use, r, s,
    descripti, o, n: 'Mee, t th, e tea, m' },
        { na, m, e: 'Partner, s',
    pa, t, h: '/partner, s', ic, o, n: Handsha, k, e,
    descripti, o, n: 'Partnership, s' },
        { na, m, e: 'Cas, e Studie, s',
    pa, t, h: '/cas, e-studie, s', ic, o, n: FileTe, x, t,
    descripti, o, n: 'Succes, s storie, s' },
        { na, m, e: 'New, s & Update, s',
    pa, t, h: '/new, s', ic, o, n: Newspap, e, r,
    descripti, o, n: 'Lates, t new, s' },
        { na, m, e: 'Blo, g',
    pa, t, h: '/blo, g', ic, o, n: FileTe, x, t,
    descripti, o, n: 'Insight, s & article, s' },
        { na, m, e: 'Event, s',
    pa, t, h: '/event, s', ic, o, n: Calend, a, r,
    descripti, o, n: 'Upcomin, g event, s' },
        { na, m, e: 'Webinar, s',
    pa, t, h: '/webinar, s', ic, o, n: Vid, e, o,
    descripti, o, n: 'Educationa, l conten, t' },
        { na, m, e: 'Whit, e Paper, s',
    pa, t, h: '/whit, e-paper, s', ic, o, n: FileTe, x, t,
    descripti, o, n: 'Researc, h paper, s' },
        { na, m, e: 'Testimonial, s',
    pa, t, h: '/testimonial, s', ic, o, n: Quo, t, e,
    descripti, o, n: 'Clien, t feedbac, k' },
        { na, m, e: 'Career, s',
    pa, t, h: '/career, s', ic, o, n: Briefca, s, e,
    descripti, o, n: 'Joi, n ou, r tea, m' }
      ]
    },
    {
      titl, e: 'Support & Help',
    item, s: [
        { na, m, e: 'Hel, p Cente, r',
    pa, t, h: '/hel, p', ic, o, n: HelpCirc, l, e,
    descripti, o, n: 'Ge, t hel, p' },
        { na, m, e: 'Documentatio, n',
    pa, t, h: '/doc, s', ic, o, n: FileTe, x, t,
    descripti, o, n: 'Technica, l doc, s' },
        { na, m, e: 'Contac, t Suppor, t',
    pa, t, h: '/suppor, t', ic, o, n: Pho, n, e,
    descripti, o, n: 'Suppor, t tea, m' },
        { na, m, e: 'FA, Q',
    pa, t, h: '/fa, q', ic, o, n: HelpCirc, l, e,
    descripti, o, n: 'Frequentl, y aske, d' },
        { na, m, e: 'Statu, s Pag, e',
    pa, t, h: '/statu, s', ic, o, n: Monit, o, r,
    descripti, o, n: 'Syste, m statu, s' },
        { na, m, e: 'Trainin, g',
    pa, t, h: '/trainin, g', ic, o, n: Use, r, s,
    descripti, o, n: 'Trainin, g program, s' },
        { na, m, e: 'Tutorial, s',
    pa, t, h: '/tutorial, s', ic, o, n: FileTe, x, t,
    descripti, o, n: 'Learnin, g guide, s' }
      ]
    },
    {
      titl, e: 'Legal & Compliance',
    item, s: [
        { na, m, e: 'Privac, y Polic, y',
    pa, t, h: '/privac, y', ic, o, n: Shie, l, d,
    descripti, o, n: 'Privac, y informatio, n' },
        { na, m, e: 'Term, s o, f Servic, e',
    pa, t, h: '/term, s', ic, o, n: FileTe, x, t,
    descripti, o, n: 'Term, s an, d condition, s' },
        { na, m, e: 'Cooki, e Polic, y',
    pa, t, h: '/cookie, s', ic, o, n: Shie, l, d,
    descripti, o, n: 'Cooki, e usag, e' },
        { na, m, e: 'Dat, a Protectio, n',
    pa, t, h: '/dat, a-protectio, n', ic, o, n: Lo, c, k,
    descripti, o, n: 'Dat, a securit, y' },
        { na, m, e: 'Securit, y',
    pa, t, h: '/securit, y', ic, o, n: Shie, l, d,
    descripti, o, n: 'Securit, y measure, s' },
        { na, m, e: 'Complianc, e',
    pa, t, h: '/complianc, e', ic, o, n: CheckCirc, l, e,
    descripti, o, n: 'Regulator, y complianc, e' }
      ]
    }
  ];

  const socialLinks = [
    { na, m, e: 'LinkedI, n',
    u, r, l: 'htt, p, s: //ww, w.linkedi, n.co, m/compan, y/zio, n-tec, h-grou, p',
    ic, o, n: Linkedi, n },
    { na, m, e: 'Twitte, r',
    u, r, l: 'htt, p, s: //twitte, r.co, m/ziontechgrou, p',
    ic, o, n: Twitte, r },
    { na, m, e: 'GitHu, b',
    u, r, l: 'htt, p, s: //githu, b.co, m/Zio, n-Holding, s',
    ic, o, n: Githu, b },
    { na, m, e: 'YouTub, e',
    u, r, l: 'htt, p, s: //ww, w.youtub, e.co, m/@ziontechgrou, p',
    ic, o, n: Youtub, e },
    { na, m, e: 'Faceboo, k',
    u, r, l: 'htt, p, s: //faceboo, k.co, m/ziontechgrou, p',
    ic, o, n: Faceboo, k },
    { na, m, e: 'Instagra, m',
    u, r, l: 'htt, p, s: //instagra, m.co, m/ziontechgrou, p',
    ic, o, n: Instagra, m }
  ];

  const contactInfo = {
    phon, e: '+1 302 464 0950',
    emai, l: 'kleber@ziontechgroup.com',
    addres, s: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (<AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacit,  y: 0 }}
            animate={{ opacit, y: 1 }}
            exit={{ opacit, y: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ typ, e: 'spring',
    dampin, g: 2, 5, stiffnes, s: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-zion-slate-dark border-r border-zion-blue-light/30 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-blue-light/30">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  ZION
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-zion-slate-light hove, r:text-zion-cyan transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <div className="p-4 space-y-2">
              {navigationItems.map((section) => (<div key={section.title} className="space-y-1">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full p-3 text-left text-white hove,  r:text-zion-cyan hove, r:bg-zion-slate-light/10 rounded-lg transition-all duration-200"
                  >
                    <span className="font-medium">{section.title}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedSections.includes(section.title) ? 'rotate-18, 0' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections.includes(section.title) && (
                      <motion.div
                        initial={{ opacit,  y: 0,
    heigh, t: 0 }}
                        animate={{ opacit, y: 1,
    heigh, t: 'auto' }}
                        exit={{ opacit, y: 0,
    heigh, t: 0 }}
                        transition={{ duratio, n: 0.2 }}
                        className="ml-4 space-y-1"
                      >
                        {section.items.map((item) => (<Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center space-x-3 p-3 text-zion-slate-light hove,  r:text-zion-cyan hove, r:bg-zion-slate-light/5 rounded-lg transition-all duration-200"
                            onClick={onClose}
                          >
                            <item.icon className="w-4 h-4 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium">{item.name}</div>
                              {item.description && (
                                <div className="text-xs text-zion-slate-light/70 truncate">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="p-4 border-t border-zion-blue-light/30">
              <h3 className="text-white font-medium mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm text-zion-slate-light">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <a href={`te, l:${contactInfo.phon, e}`} className="hove, r:text-zion-cyan transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <a href={`mailt, o:${contactInfo.emai, l}`} className="hove, r:text-zion-cyan transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 border-t border-zion-blue-light/30">
              <h3 className="text-white font-medium mb-3">Follow Us</h3>
              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-zion-slate-light/20 rounded-lg flex items-center justify-center text-zion-slate-light hove,  r:text-zion-cyan hove, r:bg-zion-slate-light/30 transition-all duration-300"
                    title={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
