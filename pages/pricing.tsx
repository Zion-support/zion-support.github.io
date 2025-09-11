<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react',
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';

import Head from 'next/head';
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final

const PricingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent, flexible pricing for AI, IT, and Micro SaaS services." />
      </Head>
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pricing</h1>
          <p className="text-gray-600 mb-10 max-w-3xl">
            We tailor solutions to your needs. Below are typical starting ranges observed in the market. Get a custom quote at any time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">AI Development</h3>
              <p className="text-gray-600 mb-4">Model prototyping, fine-tuning, RAG, and integrations.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>POC: $5,000–$15,000</li>
                <li>MVP: $20,000–$60,000</li>
                <li>Enterprise: $75,000+</li>
              </ul>
            </div>
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Micro SaaS</h3>
              <p className="text-gray-600 mb-4">Idea validation, build, payments, analytics, hosting.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Starter: $8,000–$25,000</li>
                <li>Growth: $30,000–$80,000</li>
                <li>Scale: $100,000+</li>
              </ul>
            </div>
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-600 mb-4">AWS/GCP/Azure architecture, IaC, observability.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Audit & Setup: $3,000–$12,000</li>
                <li>Migration: $10,000–$40,000</li>
                <li>Managed: from $2,000/mo</li>
              </ul>
            </div>
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">Pen-testing, hardening, SOC, compliance.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Security Audit: $4,000–$15,000</li>
                <li>Remediation: $8,000–$50,000</li>
                <li>Managed SOC: from $3,000/mo</li>
              </ul>
            </div>
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Data & Analytics</h3>
              <p className="text-gray-600 mb-4">Warehouses, pipelines, BI, ML ops.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Strategy & Setup: $5,000–$20,000</li>
                <li>Dashboards: $6,000–$25,000</li>
                <li>ML Ops: $25,000+</li>
              </ul>
            </div>
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Web & Mobile</h3>
              <p className="text-gray-600 mb-4">React/Next.js, React Native, APIs.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Website: $3,000–$15,000</li>
                <li>MVP App: $20,000–$70,000</li>
                <li>Enterprise: $80,000+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default PricingPage;

origin/cursor/integrate-build-improve-and-re-verify-242d
import React from 'react';
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
import React from 'react';
import Head from 'next/head';
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
import React from 'react';
=======
import {
  Check,
  Star,
  Zap,
  Shield,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Clock,
  Target,
  Building,
  Rocket,
  Award,
  DollarSign,
  ChartBar,
  Lock,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Search,
  MessageSquare,
  FileText,
  Calendar,
  CreditCard,
  BarChart3,
  Settings,
  Zap as ZapIcon,
  Code,
  BookOpen,
  Activity,
  Database as DatabaseIcon,
  Play,
  Mail,
  Phone,
  MapPin,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  Sparkles,
  FlaskConical,
  Dna,
  Car,
  Leaf,
  Factory,
  Truck,
  Microscope,
  GraduationCap,
  ShieldCheck,
  Brain,
  Atom,
  Globe2,
  Bot,
  ChevronRight,
  Crown,
  Infinity,
  Zap as ZapIcon2,
  Shield as ShieldIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon2,
  Cloud as CloudIcon,
  Smartphone as SmartphoneIcon,
  Palette as PaletteIcon,
  Search as SearchIcon,
  MessageSquare as MessageSquareIcon,
  FileText as FileTextIcon,
  Calendar as CalendarIcon,
  CreditCard as CreditCardIcon,
  BarChart3 as BarChart3Icon,
  Settings as SettingsIcon,
  Zap as ZapIcon3,
  Code as CodeIcon,
  BookOpen as BookOpenIcon,
  Activity as ActivityIcon,
  Database as DatabaseIcon3,
  Play as PlayIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Filter as FilterIcon,
  Grid as GridIcon,
  List as ListIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  Sparkles as SparklesIcon,
  FlaskConical as FlaskConicalIcon,
  Dna as DnaIcon,
  Car as CarIcon,
  Leaf as LeafIcon,
  Factory as FactoryIcon,
  Truck as TruckIcon,
  Microscope as MicroscopeIcon,
  GraduationCap as GraduationCapIcon,
  ShieldCheck as ShieldCheckIcon,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Globe2 as Globe2Icon,
  Bot as BotIcon,;
  ChevronRight as ChevronRightIcon,;
} from 'lucide-react';import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import {
  enhancedRealMicroSaasServices,
  getServicesByCategory,;
  getPopularServices,;
} from '../data/enhanced-real-micro-saas-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';
export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly';
  );  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
  };

  const popularServices = getPopularServices();

  // Combine all services for comprehensive pricing
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovativeMicroSaasV2Services,  ];

  // Enhanced service categories with pricing
  const serviceCategories = [
    {
      name: 'Next-Generation AI',
      description: 'Revolutionary AI platforms',
      services: [
        'AI Multimodal Fusion',
        'AI Autonomous Decision Engine',
        'AI Emotional Intelligence',
      ],
      avgPrice: '$3,199/month',
      savings: 'Save 60-80% vs. competitors',
    },
    {
      name: 'Cutting-Edge IT Infrastructure',
      description: 'Advanced infrastructure solutions',
      services: [
        'Zero Trust Architecture',
        'Edge Computing Orchestration',
        '5G Private Networks',
      ],
      avgPrice: '$4,999/month',
      savings: 'Save 50-70% vs. competitors',
    },
    {
      name: 'Innovative Micro SaaS',
      description: 'Creative and practical SaaS tools',
      services: [
        'AI Brand Personality',
        'Virtual Event Holograms',
        'AI Meeting Transcriber',
      ],
      avgPrice: '$199/month',
      savings: 'Save 40-60% vs. competitors',
    },
    {
      name: 'Quantum & Space Technology',
      description: 'Quantum computing and space solutions',
      services: [
        'Quantum AI Hybrid',
        'Space Technology Platform',
        'Quantum Cybersecurity',
      ],
      avgPrice: '$5,999/month',
      savings: 'Save 70-85% vs. competitors',
    },
    {
      name: 'Enterprise IT Services',
      description: 'Comprehensive enterprise solutions',
      services: ['Cloud Migration', 'DevOps Automation', 'Security Hardening'],
      avgPrice: '$2,999/month',
      savings: 'Save 45-65% vs. competitors',
    },  ];

=======
import React, { useState } from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next/head';
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
ursor/fix-lint-push-and-merge-to-main-ae4e
import React from 'react';
import {
  Check,
  Star,
  Zap,
  Shield,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Clock,
  Target,
  Building,
  Rocket,
  Award,
  DollarSign,
  ChartBar,
  Lock,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Search,
  MessageSquare,
  FileText,
  Calendar,
  CreditCard,
  BarChart3,
  Settings,
  Zap as ZapIcon,
  Code,
  BookOpen,
  Activity,
  Database as DatabaseIcon,
  Play,
  Mail,
  Phone,
  MapPin,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  Sparkles,
  FlaskConical,
  Dna,
  Car,
  Leaf,
  Factory,
  Truck,
  Microscope,
  GraduationCap,
  ShieldCheck,
  Brain,
  Atom,
  Globe2,
  Bot,
  ChevronRight,
  Crown,
  Infinity,
  Zap as ZapIcon2,
  Shield as ShieldIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon2,
  Cloud as CloudIcon,
  Smartphone as SmartphoneIcon,
  Palette as PaletteIcon,
  Search as SearchIcon,
  MessageSquare as MessageSquareIcon,
  FileText as FileTextIcon,
  Calendar as CalendarIcon,
  CreditCard as CreditCardIcon,
  BarChart3 as BarChart3Icon,
  Settings as SettingsIcon,
  Zap as ZapIcon3,
  Code as CodeIcon,
  BookOpen as BookOpenIcon,
  Activity as ActivityIcon,
  Database as DatabaseIcon3,
  Play as PlayIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Filter as FilterIcon,
  Grid as GridIcon,
  List as ListIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  Sparkles as SparklesIcon,
  FlaskConical as FlaskConicalIcon,
  Dna as DnaIcon,
  Car as CarIcon,
  Leaf as LeafIcon,
  Factory as FactoryIcon,
  Truck as TruckIcon,
  Microscope as MicroscopeIcon,
  GraduationCap as GraduationCapIcon,
  ShieldCheck as ShieldCheckIcon,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Globe2 as Globe2Icon,
  Bot as BotIcon,;
  ChevronRight as ChevronRightIcon,;
} from 'lucide-react';import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import {
  enhancedRealMicroSaasServices,
  getServicesByCategory,;
  getPopularServices,;
} from '../data/enhanced-real-micro-saas-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';
export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly';
  );  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
  };

  const popularServices = getPopularServices();

  // Combine all services for comprehensive pricing
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovativeMicroSaasV2Services,  ];

  // Enhanced service categories with pricing
  const serviceCategories = [
    {
      name: 'Next-Generation AI',
      description: 'Revolutionary AI platforms',
      services: [
        'AI Multimodal Fusion',
        'AI Autonomous Decision Engine',
        'AI Emotional Intelligence',
      ],
      avgPrice: '$3,199/month',
      savings: 'Save 60-80% vs. competitors',
    },
    {
      name: 'Cutting-Edge IT Infrastructure',
      description: 'Advanced infrastructure solutions',
      services: [
        'Zero Trust Architecture',
        'Edge Computing Orchestration',
        '5G Private Networks',
      ],
      avgPrice: '$4,999/month',
      savings: 'Save 50-70% vs. competitors',
    },
    {
      name: 'Innovative Micro SaaS',
      description: 'Creative and practical SaaS tools',
      services: [
        'AI Brand Personality',
        'Virtual Event Holograms',
        'AI Meeting Transcriber',
      ],
      avgPrice: '$199/month',
      savings: 'Save 40-60% vs. competitors',
    },
    {
      name: 'Quantum & Space Technology',
      description: 'Quantum computing and space solutions',
      services: [
        'Quantum AI Hybrid',
        'Space Technology Platform',
        'Quantum Cybersecurity',
      ],
      avgPrice: '$5,999/month',
      savings: 'Save 70-85% vs. competitors',
    },
    {
      name: 'Enterprise IT Services',
      description: 'Comprehensive enterprise solutions',
      services: ['Cloud Migration', 'DevOps Automation', 'Security Hardening'],
      avgPrice: '$2,999/month',
      savings: 'Save 45-65% vs. competitors',
    },  ];

import React, { useState } from 'react';
<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';

import Head from 'next/head';

const PricingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent, flexible pricing for AI, IT, and Micro SaaS services." />
      </Head>
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pricing</h1>
          <p className="text-gray-600 mb-10 max-w-3xl">
            We tailor solutions to your needs. Below are typical starting ranges observed in the market. Get a custom quote at any time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">AI Development</h3>
              <p className="text-gray-600 mb-4">Model prototyping, fine-tuning, RAG, and integrations.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>POC: $5,000–$15,000</li>
                <li>MVP: $20,000–$60,000</li>
                <li>Enterprise: $75,000+</li>
              </ul>
            </div>
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Micro SaaS</h3>
              <p className="text-gray-600 mb-4">Idea validation, build, payments, analytics, hosting.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Starter: $8,000–$25,000</li>
                <li>Growth: $30,000–$80,000</li>
                <li>Scale: $100,000+</li>
              </ul>
            </div>
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-600 mb-4">AWS/GCP/Azure architecture, IaC, observability.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Audit & Setup: $3,000–$12,000</li>
                <li>Migration: $10,000–$40,000</li>
                <li>Managed: from $2,000/mo</li>
              </ul>
            </div>
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">Pen-testing, hardening, SOC, compliance.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Security Audit: $4,000–$15,000</li>
                <li>Remediation: $8,000–$50,000</li>
                <li>Managed SOC: from $3,000/mo</li>
              </ul>
            </div>
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Data & Analytics</h3>
              <p className="text-gray-600 mb-4">Warehouses, pipelines, BI, ML ops.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Strategy & Setup: $5,000–$20,000</li>
                <li>Dashboards: $6,000–$25,000</li>
                <li>ML Ops: $25,000+</li>
              </ul>
            </div>
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Web & Mobile</h3>
              <p className="text-gray-600 mb-4">React/Next.js, React Native, APIs.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Website: $3,000–$15,000</li>
                <li>MVP App: $20,000–$70,000</li>
                <li>Enterprise: $80,000+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default PricingPage;

import React from 'react';
import Head from 'next/head';

import React from 'react';
import Head from 'next / head';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from 'react';

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import Head from 'next/head';


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Head from 'next / head';

import Head from 'next/head';

origin/automation-improvements-final
=======


=======

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
import React from 'react';
import Head from 'next / head';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {
  Check
  Star
  Zap
  Shield
  Users
  Globe
  ArrowRight
  ExternalLink
  TrendingUp
  Clock
  Target
  Building
  Rocket
  Award
  DollarSign
  ChartBar
  Lock
  Cpu
  Database
  Cloud
  Smartphone
  Palette
  Search
  MessageSquare
  FileText
  Calendar
  CreditCard
  BarChart3
  Settings
  Zap as ZapIcon
  Code
  BookOpen
  Activity
  Database as DatabaseIcon
  Play
  Mail
  Phone
  MapPin
  Filter
  Grid
  List
  ChevronDown
  ChevronUp
  Sparkles
  FlaskConical
  Dna
  Car
  Leaf
  Factory
  Truck
  Microscope
  GraduationCap
  ShieldCheck
  Brain
  Atom
  Globe2
  Bot
  ChevronRight
  Crown
  Infinity
  Zap as ZapIcon2
  Shield as ShieldIcon
  Users as UsersIcon
  Globe as GlobeIcon
  Cpu as CpuIcon
  Database as DatabaseIcon2
  Cloud as CloudIcon
  Smartphone as SmartphoneIcon
  Palette as PaletteIcon
  Search as SearchIcon
  MessageSquare as MessageSquareIcon
  FileText as FileTextIcon
  Calendar as CalendarIcon
  CreditCard as CreditCardIcon
  BarChart3 as BarChart3Icon
  Settings as SettingsIcon
  Zap as ZapIcon3
  Code as CodeIcon
  BookOpen as BookOpenIcon
  Activity as ActivityIcon
  Database as DatabaseIcon3
  Play as PlayIcon
  Mail as MailIcon
  Phone as PhoneIcon
  MapPin as MapPinIcon
  Filter as FilterIcon
  Grid as GridIcon
  List as ListIcon
  ChevronDown as ChevronDownIcon
  ChevronUp as ChevronUpIcon
  Sparkles as SparklesIcon
  FlaskConical as FlaskConicalIcon
  Dna as DnaIcon
  Car as CarIcon
  Leaf as LeafIcon
  Factory as FactoryIcon
  Truck as TruckIcon
  Microscope as MicroscopeIcon
  GraduationCap as GraduationCapIcon
  ShieldCheck as ShieldCheckIcon
  Brain as BrainIcon
  Atom as AtomIcon
  Globe2 as Globe2Icon
  Bot as BotIcon
    ChevronRight as ChevronRightIcon
} from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Zap as ZapIcon2, Shield as ShieldIcon, Users as UsersIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon2, Cloud as CloudIcon, Smartphone as SmartphoneIcon, Palette as PaletteIcon, Search as SearchIcon, MessageSquare as MessageSquareIcon, FileText as FileTextIcon, Calendar as CalendarIcon, CreditCard as CreditCardIcon, BarChart3 as BarChart3Icon, Settings as SettingsIcon, Zap as ZapIcon3, Code as CodeIcon, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon3, Play as PlayIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Filter as FilterIcon, Grid as GridIcon, List as ListIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Sparkles as SparklesIcon, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Brain as BrainIcon, Atom as AtomIcon, Globe2 as Globe2Icon, Bot as BotIcon, ChevronRight as ChevronRightIcon } from 'lucide-react';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity, Zap as ZapIcon2, Shield as ShieldIcon, Users as UsersIcon, Globe as GlobeIcon, Cpu as CpuIcon, Database as DatabaseIcon2, Cloud as CloudIcon, Smartphone as SmartphoneIcon, Palette as PaletteIcon, Search as SearchIcon, MessageSquare as MessageSquareIcon, FileText as FileTextIcon, Calendar as CalendarIcon, CreditCard as CreditCardIcon, BarChart3 as BarChart3Icon, Settings as SettingsIcon, Zap as ZapIcon3, Code as CodeIcon, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon3, Play as PlayIcon, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Filter as FilterIcon, Grid as GridIcon, List as ListIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Sparkles as SparklesIcon, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Brain as BrainIcon, Atom as AtomIcon, Globe2 as Globe2Icon, Bot as BotIcon, ChevronRight as ChevronRightIcon } from 'lucide-react';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Check,;
  Star,;
  Zap,;
  Shield,;
  Users,;
  Globe,;
  ArrowRight,;
  ExternalLink,;
  TrendingUp,;
  Clock,;
  Target,;
  Building,;
  Rocket,;
  Award,;
  DollarSign,;
  ChartBar,;
  Lock,;
  Cpu,;
  Database,;
  Cloud,;
  Smartphone,;
  Palette,;
  Search,;
  MessageSquare,;
  FileText,;
  Calendar,;
  CreditCard,;
  BarChart3,;
  Settings,;
  Zap as ZapIcon,;
  Code,;
  BookOpen,;
  Activity,;
  Database as DatabaseIcon,;
  Play,;
  Mail,;
  Phone,;
  MapPin,;
  Filter,;
  Grid,;
  List,;
  ChevronDown,;
  ChevronUp,;
  Sparkles,;
  FlaskConical,;
  Dna,;
  Car,;
  Leaf,;
  Factory,;
  Truck,;
  Microscope,;
  GraduationCap,;
  ShieldCheck,;
  Brain,;
  Atom,;
  Globe2,;
  Bot,;
  ChevronRight,;
  Crown,;
  Infinity,;
  Zap as ZapIcon2,;
  Shield as ShieldIcon,;
  Users as UsersIcon,;
  Globe as GlobeIcon,;
  Cpu as CpuIcon,;
  Database as DatabaseIcon2,;
  Cloud as CloudIcon,;
  Smartphone as SmartphoneIcon,;
  Palette as PaletteIcon,;
  Search as SearchIcon,;
  MessageSquare as MessageSquareIcon,;
  FileText as FileTextIcon,;
  Calendar as CalendarIcon,;
  CreditCard as CreditCardIcon,;
  BarChart3 as BarChart3Icon,;
  Settings as SettingsIcon,;
  Zap as ZapIcon3,;
  Code as CodeIcon,;
  BookOpen as BookOpenIcon,;
  Activity as ActivityIcon,;
  Database as DatabaseIcon3,;
  Play as PlayIcon,;
  Mail as MailIcon,;
  Phone as PhoneIcon,;
  MapPin as MapPinIcon,;
  Filter as FilterIcon,;
  Grid as GridIcon,;
  List as ListIcon,;
  ChevronDown as ChevronDownIcon,;
  ChevronUp as ChevronUpIcon,;
  Sparkles as SparklesIcon,;
  FlaskConical as FlaskConicalIcon,;
  Dna as DnaIcon,;
  Car as CarIcon,;
  Leaf as LeafIcon,;
  Factory as FactoryIcon,;
  Truck as TruckIcon,;
  Microscope as MicroscopeIcon,;
  GraduationCap as GraduationCapIcon,;
  ShieldCheck as ShieldCheckIcon,;
  Brain as BrainIcon,;
  Atom as AtomIcon,;
  Globe2 as Globe2Icon,;
  Bot as BotIcon,;
  ChevronRight as ChevronRightIcon,;
} from 'lucide-react';import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import {;
  enhancedRealMicroSaasServices,;
  getServicesByCategory,;
  getPopularServices,;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from '../data/enhanced-real-micro-saas-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices } from '../data/enhanced-real-micro-saas-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';
export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',

    website: 'https://ziontechgroup.com'
<<<<<<< HEAD
<<<<<<< HEAD
}
  const popularServices = getPopularServices();
  // Combine all services for comprehensive pricing
  const allServices = [
=======
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ...enhancedRealMicroSaasServices;
    ...nextGenerationAIServices;
    ...cuttingEdgeITServices;
    ...innovativeMicroSaasV2Services
  ];

  // Enhanced service categories with pricing
  const serviceCategories = [
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    {
      name: 'Next-Generation AI'
      description: 'Revolutionary AI platforms'
      services: [
        'AI Multimodal Fusion'
        'AI Autonomous Decision Engine'
        'AI Emotional Intelligence'
      ]
      avgPrice: '$3,199/month'
      savings: 'Save 60-80% vs. competitors'
    }
    {
      name: 'Cutting-Edge IT Infrastructure'
      description: 'Advanced infrastructure solutions'
      services: [
        'Zero Trust Architecture'
        'Edge Computing Orchestration'
        '5G Private Networks'
      ]
      avgPrice: '$4,999/month'
      savings: 'Save 50-70% vs. competitors'
    }
    {
      name: 'Innovative Micro SaaS'
      description: 'Creative and practical SaaS tools'
      services: [
        'AI Brand Personality'
        'Virtual Event Holograms'
        'AI Meeting Transcriber'
      ]
      avgPrice: '$199/month'
      savings: 'Save 40-60% vs. competitors'
    }
    {
      name: 'Quantum & Space Technology'
      description: 'Quantum computing and space solutions'
      services: [
        'Quantum AI Hybrid'
        'Space Technology Platform'
        'Quantum Cybersecurity'
      ]
      avgPrice: '$5,999/month'
      savings: 'Save 70-85% vs. competitors'
    }
    {
      name: 'Enterprise IT Services'
      description: 'Comprehensive enterprise solutions'
      services: ['Cloud Migration', 'DevOps Automation', 'Security Hardening']
      avgPrice: '$2,999/month'
      savings: 'Save 45-65% vs. competitors'
    },  ];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Button from '../components / ui / Button';
import Card from '../components / ui / Card';
import UltraFuturisticBackground from '../components / ui / UltraFuturisticBackground';
import UltraFuturisticCard from '../components / ui / UltraFuturisticCard';
import {
  enhancedRealMicroSaasServices,
  getServicesByCategory,
    getPopularServices;
} from '../data / enhanced - real - micro - saas - services';
import { nextGenerationAIServices } from '../data / next - generation - ai - services';
import { cuttingEdgeITServices } from '../data / cutting - edge - it - services';
import { innovativeMicroSaasV2Services } from '../data / innovative - micro - saas - v2';
export default /**
 * PricingPage - Function description
 */
function PricingPage() {
  const [billing_cycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly');
  const [selected_plan, setSelectedPlan] = useState < string | null>(null);
;
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
  }
;
  const popular_services = getPopularServices ();
;
  // Combine all services for comprehensive pricing;
  const all_services = [;
    ...enhancedRealMicroSaasServices,
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovativeMicroSaasV2Services,  ];
;
  // Enhanced service categories with pricing;
  const service_categories = [;
<<<<<<< HEAD
<<<<<<< HEAD
    {
      name: 'Next - Generation AI',
      description: 'Revolutionary AI platforms',
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    {
      name: 'Next - Generation AI',
      description: 'Revolutionary AI platforms',

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      services: [;
        'AI Multimodal Fusion',
        'AI Autonomous Decision Engine',
        'AI Emotional Intelligence',
      ],
      avg_price: '$3, 199 / month',
      savings: 'Save 60 - 80% vs. competitors',
    },
<<<<<<< HEAD
<<<<<<< HEAD
      services: [;
        'Zero Trust Architecture',
        'Edge Computing Orchestration',
        '5G Private Networks',
      ],
      avg_price: '$4, 999 / month',
      savings: 'Save 50 - 70% vs. competitors',
    {
      name: 'Cutting - Edge IT Infrastructure',
      description: 'Advanced infrastructure solutions',
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    {
      name: 'Cutting - Edge IT Infrastructure',
      description: 'Advanced infrastructure solutions',

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function PricingPage() {;
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(;
    'monthly';
  );  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',;
  };
<<<<<<< HEAD
<<<<<<< HEAD
  const popularServices = getPopularServices();
=======

  const popularServices = getPopularServices();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  const popularServices = getPopularServices();

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Combine all services for comprehensive pricing;
  const allServices = [;
    ...enhancedRealMicroSaasServices,;
    ...nextGenerationAIServices,;
    ...cuttingEdgeITServices,;
    ...innovativeMicroSaasV2Services,  ];
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Enhanced service categories with pricing;
  const serviceCategories = [;
    {;
      name: 'Next-Generation AI',;
      description: 'Revolutionary AI platforms',;
      services: [;
        'AI Multimodal Fusion',;
        'AI Autonomous Decision Engine',;
        'AI Emotional Intelligence',;
      ],;
      avgPrice: '$3,199/month',;
      savings: 'Save 60-80% vs. competitors',;
    },;
    {;
      name: 'Cutting-Edge IT Infrastructure',;
      description: 'Advanced infrastructure solutions',;
      services: [;
        'Zero Trust Architecture',;
        'Edge Computing Orchestration',;
        '5G Private Networks',;
      ],;
      avgPrice: '$4,999/month',;
      savings: 'Save 50-70% vs. competitors',;
    },;
    {;
      name: 'Innovative Micro SaaS',;
      description: 'Creative and practical SaaS tools',;
      services: [;
        'AI Brand Personality',;
        'Virtual Event Holograms',;
        'AI Meeting Transcriber',;
      ],;
      avgPrice: '$199/month',;
      savings: 'Save 40-60% vs. competitors',;
    },;
    {;
      name: 'Quantum & Space Technology',;
      description: 'Quantum computing and space solutions',;
      services: [;
        'Quantum AI Hybrid',;
        'Space Technology Platform',;
        'Quantum Cybersecurity',;
      ],;
      avgPrice: '$5,999/month',;
      savings: 'Save 70-85% vs. competitors',;
    },;
    {;
      name: 'Enterprise IT Services',;
      description: 'Comprehensive enterprise solutions',;
      services: ['Cloud Migration', 'DevOps Automation', 'Security Hardening'],;
      avgPrice: '$2,999/month',;
      savings: 'Save 45-65% vs. competitors',;
    },  ];
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Enhanced pricing tiers with more realistic and comprehensive offerings;
  const pricingTiers = [;
    {;
      name: 'Starter',;
      description: 'Perfect for small businesses and startups',;
      price: billingCycle === 'monthly' ? 49 : 39,;
      period: billingCycle === 'monthly' ? '/month' : '/month',;
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',;
      features: [;
        'Access to 50+ Core Services',;
        'Basic AI Integration',;
        'Standard Support (24/7)',;
        '30-Day Free Trial',;
        'Basic Analytics Dashboard',;
        'Email Support',;
        '99 && 99.5% Uptime Guarantee',;
        'Standard Security Features',;
      ],;
      icon: <Sparkles className='w-8 h-8' />,;
      variant: 'quantum' as const,;
      popular: false,;
      cta: 'Start Free Trial',;
      ctaVariant: 'secondary' as const,;
    },    {;
      name: 'Professional',;
      description: 'Ideal for growing businesses and teams',;
      price: billingCycle === 'monthly' ? 149 : 119,;
      period: billingCycle === 'monthly' ? '/month' : '/month',;
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',;
      features: [;
        'Access to 200+ Premium Services',;
        'Advanced AI & Quantum Computing',;
        'Priority Support (24/7)',;
        '60-Day Free Trial',;
        'Advanced Analytics & Reporting',;
        'Phone & Email Support',;
        '99 && 99.9% Uptime Guarantee',;
        'Enhanced Security & Compliance',;
        'Custom Integrations',;
        'Team Collaboration Tools',;
        'API Access',;
        'White-label Options',;
      ],;
      icon: <Crown className='w-8 h-8' />,;
      variant: 'holographic' as const,;
      popular: true,;
      cta: 'Start Free Trial',;
      ctaVariant: 'primary' as const,;
    },    {;
      name: 'Enterprise',;
      description: 'For large organizations and enterprises',;
      price: billingCycle === 'monthly' ? 499 : 399,;
      period: billingCycle === 'monthly' ? '/month' : '/month',;
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',;
      features: [;
        'Access to ALL 500+ Services',;
        'Full Quantum AI & Autonomous Systems',;
        'Dedicated Support Team (24/7)',;
        '90-Day Free Trial',;
        'Enterprise Analytics & AI Insights',;
        'Dedicated Account Manager',;
        '99 && 99.99% Uptime SLA',;
        'Enterprise Security & Compliance',;
        'Custom Development Services',;
        'Advanced Team Management',;
        'Full API & SDK Access',;
        'Custom Branding & White-label',;
        'On-premise Deployment Options',;
        'Advanced AI Training & Customization',;
        'Priority Feature Development',;
        'Global Infrastructure Access',;
      ],;
      icon: <Rocket className='w-8 h-8' />,;
      variant: 'neural' as const,;
      popular: false,;
      cta: 'Contact Sales',;
      ctaVariant: 'primary' as const,;
    },  ];
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Service category pricing examples;
  const serviceCategoryPricing = [;
    {;
      category: 'Quantum AI & Computing',;
      services: [;
        'Quantum AI Platform',;
        'Neural Network Training',;
        'Quantum Optimization',;
      ],;
      startingPrice: '$99/month',;
      icon: <Brain className='w-6 h-6' />,;
    },;
    {;
      category: 'Autonomous Systems',;
      services: [;
        'AI Factory Management',;
        'Robotic Process Automation',;
        'Smart Manufacturing',;
      ],;
      startingPrice: '$149/month',;
      icon: <Factory className='w-6 h-6' />,;
    },;
    {;
      category: 'Healthcare & Biotech',;
      services: [;
        'Drug Discovery AI',;
        'Medical Imaging Analysis',;
        'Genomic Research Platform',;
      ],;
      startingPrice: '$199/month',;
      icon: <FlaskConical className='w-6 h-6' />,;
    },;
    {;
      category: 'Cybersecurity',;
      services: [;
        'Quantum Encryption',;
        'Threat Intelligence',;
        'Zero-Trust Security',;
      ],;
      startingPrice: '$129/month',;
      icon: <Shield className='w-6 h-6' />,;
    },;
    {;
      category: 'Financial Technology',;
      services: [;
        'AI Trading Platform',;
        'Risk Management',;
        'Portfolio Optimization',;
      ],;
      startingPrice: '$179/month',;
      icon: <DollarSign className='w-6 h-6' />,;
    },;
    {;
      category: 'Space Technology',;
      services: [;
        'Satellite Management',;
        'Space Data Analytics',;
        'Mission Planning AI',;
      ],;
      startingPrice: '$299/month',;
      icon: <Rocket className='w-6 h-6' />,;
    },  ];
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Value propositions;
  const valuePropositions = [;
    {;
      title: 'Unprecedented ROI',;
      description: 'Average 300% ROI within 6 months',;
      icon: <TrendingUp className='w-8 h-8' />,;
      metric: '300%',;
      detail: 'Average ROI',;
    },;
    {;
      title: 'Time to Value',;
      description: 'Get up and running in under 24 hours',;
      icon: <Clock className='w-8 h-8' />,;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      services: [;
        'Zero Trust Architecture',
        'Edge Computing Orchestration',
        '5G Private Networks',
      ],
      avg_price: '$4, 999 / month',
      savings: 'Save 50 - 70% vs. competitors',
<<<<<<< HEAD
<<<<<<< HEAD
  
  // Combine all services for comprehensive pricing
  const _allServices = [
    ...enhancedRealMicroSaasServices,
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovativeMicroSaasV2Services
  ],

  // Enhanced service categories with pricing
  const serviceCategories = [
    {
      name: 'Next-Generation AI',
      description: 'Revolutionary AI platforms',
      services: ['AI Multimodal FusionAI Autonomous Decision EngineAI Emotional Intelligence'],
      avgPrice: '$3,199/month',
      savings: 'Save 60-80% vs. competitors'
    },
    {
      name: 'Cutting-Edge IT Infrastructure',
      description: 'Advanced infrastructure solutions',
      services: ['Zero Trust ArchitectureEdge Computing Orchestration5G Private Networks'],
      avgPrice: '$4,999/month',
      savings: 'Save 50-70% vs. competitors'

}
  ],

    {
      name: 'Next-Generation AI'
      description: 'Revolutionary AI platforms'
      services: [
        'AI Multimodal Fusion'
        'AI Autonomous Decision Engine'
        'AI Emotional Intelligence'
      ]
      avgPrice: '$3,199/month'
      savings: 'Save 60-80% vs. competitors'
    }
    {
      name: 'Cutting-Edge IT Infrastructure'
      description: 'Advanced infrastructure solutions'
      services: [
        'Zero Trust Architecture'
        'Edge Computing Orchestration'
        '5G Private Networks'
      ]
      avgPrice: '$4,999/month'
      savings: 'Save 50-70% vs. competitors'
    }
    {
      name: 'Innovative Micro SaaS'
      description: 'Creative and practical SaaS tools'
      services: [
        'AI Brand Personality'
        'Virtual Event Holograms'
        'AI Meeting Transcriber'
      ]
      avgPrice: '$199/month'
      savings: 'Save 40-60% vs. competitors'
    }
    {
      name: 'Quantum & Space Technology'
      description: 'Quantum computing and space solutions'
      services: [
        'Quantum AI Hybrid'
        'Space Technology Platform'
        'Quantum Cybersecurity'
      ]
      avgPrice: '$5,999/month'
      savings: 'Save 70-85% vs. competitors'
    }
    {
      name: 'Enterprise IT Services'
      description: 'Comprehensive enterprise solutions'
      services: ['Cloud Migration', 'DevOps Automation', 'Security Hardening']
      avgPrice: '$2,999/month'
      savings: 'Save 45-65% vs. competitors'
    },  ];

}
  ],
  // Enhanced pricing tiers with more realistic and comprehensive offerings
  const pricingTiers = [
    {
name: 'Starter'
      description: 'Perfect for small businesses and startups'
      price: billingCycle === 'monthly' ? 49 : 39
      period: billingCycle === 'monthly' ? '/month' : '/month'
      savings: billingCycle === 'yearly' ? 'Save 20%' : ''
      features: [
        'Access to 50+ Core Services'
        'Basic AI Integration'
        'Standard Support (24/7)'
        '30-Day Free Trial'
        'Basic Analytics Dashboard'
        'Email Support'
        '99.5% Uptime Guarantee'
        'Standard Security Features'
      ]
      icon: <Sparkles className='w-8 h-8' />
      variant: 'quantum' as const
      popular: false
      cta: 'Start Free Trial'
      ctaVariant: 'secondary' as const
    },    {
      name: 'Professional'
      description: 'Ideal for growing businesses and teams'
      price: billingCycle === 'monthly' ? 149 : 119
      period: billingCycle === 'monthly' ? '/month' : '/month'
      savings: billingCycle === 'yearly' ? 'Save 20%' : ''
      features: [
        'Access to 200+ Premium Services'
        'Advanced AI & Quantum Computing'
        'Priority Support (24/7)'
        '60-Day Free Trial'
        'Advanced Analytics & Reporting'
        'Phone & Email Support'
        '99.9% Uptime Guarantee'
        'Enhanced Security & Compliance'
        'Custom Integrations'
        'Team Collaboration Tools'
        'API Access'
        'White-label Options'
      ]
      icon: <Crown className='w-8 h-8' />
      variant: 'holographic' as const
      popular: true
      cta: 'Start Free Trial'
      ctaVariant: 'primary' as const
    },    {
      name: 'Enterprise'
      description: 'For large organizations and enterprises'
      price: billingCycle === 'monthly' ? 499 : 399
      period: billingCycle === 'monthly' ? '/month' : '/month'
      savings: billingCycle === 'yearly' ? 'Save 20%' : ''
      features: [
        'Access to ALL 500+ Services'
        'Full Quantum AI & Autonomous Systems'
        'Dedicated Support Team (24/7)'
        '90-Day Free Trial'
        'Enterprise Analytics & AI Insights'
        'Dedicated Account Manager'
        '99.99% Uptime SLA'
        'Enterprise Security & Compliance'
        'Custom Development Services'
        'Advanced Team Management'
        'Full API & SDK Access'
        'Custom Branding & White-label'
        'On-premise Deployment Options'
        'Advanced AI Training & Customization'
        'Priority Feature Development'
        'Global Infrastructure Access'
      ]
      icon: <Rocket className='w-8 h-8' />
      variant: 'neural' as const
      popular: false
      cta: 'Contact Sales'
      ctaVariant: 'primary' as const
    },  ];
  // Service category pricing examples
  const serviceCategoryPricing = [
    {
      category: 'Quantum AI & Computing'
      services: [
        'Quantum AI Platform'
        'Neural Network Training'
        'Quantum Optimization'
      ]
      startingPrice: '$99/month'
      icon: <Brain className='w-6 h-6' />
    }
    {
      category: 'Autonomous Systems'
      services: [
        'AI Factory Management'
        'Robotic Process Automation'
        'Smart Manufacturing'
      ]
      startingPrice: '$149/month'
      icon: <Factory className='w-6 h-6' />
    }
    {
      category: 'Healthcare & Biotech'
      services: [
        'Drug Discovery AI'
        'Medical Imaging Analysis'
        'Genomic Research Platform'
      ]
      startingPrice: '$199/month'
      icon: <FlaskConical className='w-6 h-6' />
    }
    {
      category: 'Cybersecurity'
      services: [
        'Quantum Encryption'
        'Threat Intelligence'
        'Zero-Trust Security'
      ]
      startingPrice: '$129/month'
      icon: <Shield className='w-6 h-6' />
    }
    {
      category: 'Financial Technology'
      services: [
        'AI Trading Platform'
        'Risk Management'
        'Portfolio Optimization'
      ]
      startingPrice: '$179/month'
      icon: <DollarSign className='w-6 h-6' />
    }
    {
      category: 'Space Technology'
      services: [
        'Satellite Management'
        'Space Data Analytics'
        'Mission Planning AI'
      ]
      startingPrice: '$299/month'
      icon: <Rocket className='w-6 h-6' />
    },  ];
  // Value propositions
  const valuePropositions = [
    {
      title: 'Unprecedented ROI'
      description: 'Average 300% ROI within 6 months'
      icon: <TrendingUp className='w-8 h-8' />
      metric: '300%'
      detail: 'Average ROI'
    }
    {
      title: 'Time to Value'
      description: 'Get up and running in under 24 hours'
      icon: <Clock className='w-8 h-8' />
      metric: '<24h'
      detail: 'Setup Time'
    }
    {
      title: 'Global Reach'
      description: 'Available in 150+ countries worldwide'
      icon: <Globe className='w-8 h-8' />
      metric: '150+'
      detail: 'Countries'
    }
    {
      title: 'Enterprise Security'
      description: 'Bank-level security with 99.99% uptime'
      icon: <Shield className='w-8 h-8' />
      metric: '99.99%'
      detail: 'Uptime SLA'
    }
  ];

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    {
      name: 'Innovative Micro SaaS',
      description: 'Creative and practical SaaS tools',
<<<<<<< HEAD
<<<<<<< HEAD
services: [;
=======
      services: [;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      services: [;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        'AI Brand Personality',
        'Virtual Event Holograms',
        'AI Meeting Transcriber',
      ],
      avg_price: '$199 / month',
      savings: 'Save 40 - 60% vs. competitors',
    },
    {
      name: 'Quantum & Space Technology',
      description: 'Quantum computing and space solutions',
<<<<<<< HEAD
<<<<<<< HEAD
services: [;
=======
      services: [;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      services: [;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        'Quantum AI Hybrid',
        'Space Technology Platform',
        'Quantum Cybersecurity',
      ],
      avg_price: '$5, 999 / month',
      savings: 'Save 70 - 85% vs. competitors',
    },
    {
      name: 'Enterprise IT Services',
      description: 'Comprehensive enterprise solutions',
<<<<<<< HEAD
<<<<<<< HEAD
services: ['Cloud Migration', 'DevOps Automation', 'Security Hardening'],
=======
      services: ['Cloud Migration', 'DevOps Automation', 'Security Hardening'],
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      services: ['Cloud Migration', 'DevOps Automation', 'Security Hardening'],
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      avg_price: '$2, 999 / month',
      savings: 'Save 45 - 65% vs. competitors',
    },  ];
;
  // Enhanced pricing tiers with more realistic and comprehensive offerings;
  const pricing_tiers = [;
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billing_cycle === 'monthly' ? 49 : 39,
      period: billing_cycle === 'monthly' ? '/month' : '/month',
      savings: billing_cycle === 'yearly' ? 'Save 20%' : '',
      features: [;
        'Access to 50+ Core Services',
        'Basic AI Integration',
        'Standard Support (24 / 7)',
        '30 - Day Free Trial',
        'Basic Analytics Dashboard',
        'Email Support',
        '99.5% Uptime Guarantee',
        'Standard Security Features',
      ],
      icon: <Sparkles className='w - 8 h - 8' />,
      variant: 'quantum' as const,
      popular: false,
      cta: 'Start Free Trial',
      cta_variant: 'secondary' as const,
    },    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billing_cycle === 'monthly' ? 149 : 119,
      period: billing_cycle === 'monthly' ? '/month' : '/month',
      savings: billing_cycle === 'yearly' ? 'Save 20%' : '',
      features: [;
        'Access to 200+ Premium Services',
        'Advanced AI & Quantum Computing',
        'Priority Support (24 / 7)',
        '60 - Day Free Trial',
        'Advanced Analytics & Reporting',
        'Phone & Email Support',
        '99.9% Uptime Guarantee',
        'Enhanced Security & Compliance',
        'Custom Integrations',
        'Team Collaboration Tools',
        'API Access',
        'White - label Options',
      ],
      icon: <Crown className='w - 8 h - 8' />,
      variant: 'holographic' as const,
      popular: true,
      cta: 'Start Free Trial',
      cta_variant: 'primary' as const,
    },    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: billing_cycle === 'monthly' ? 499 : 399,
      period: billing_cycle === 'monthly' ? '/month' : '/month',
      savings: billing_cycle === 'yearly' ? 'Save 20%' : '',
      features: [;
        'Access to ALL 500+ Services',
        'Full Quantum AI & Autonomous Systems',
        'Dedicated Support Team (24 / 7)',
        '90 - Day Free Trial',
        'Enterprise Analytics & AI Insights',
        'Dedicated Account Manager',
        '99.99% Uptime SLA',
        'Enterprise Security & Compliance',
        'Custom Development Services',
        'Advanced Team Management',
        'Full API & SDK Access',
        'Custom Branding & White - label',
        'On - premise Deployment Options',
        'Advanced AI Training & Customization',
        'Priority Feature Development',
        'Global Infrastructure Access',
      ],
      icon: <Rocket className='w - 8 h - 8' />,
      variant: 'neural' as const,
      popular: false,
      cta: 'Contact Sales',
      cta_variant: 'primary' as const,
    },  ];
;
  // Service category pricing examples;
  const serviceCategoryPricing = [;
    {
      category: 'Quantum AI & Computing',
      services: [;
        'Quantum AI Platform',
        'Neural Network Training',
        'Quantum Optimization',
      ],
      starting_price: '$99 / month',
      icon: <Brain className='w - 6 h - 6' />,
    },
    {
      category: 'Autonomous Systems',
      services: [;
        'AI Factory Management',
        'Robotic Process Automation',
        'Smart Manufacturing',
      ],
      starting_price: '$149 / month',
      icon: <Factory className='w - 6 h - 6' />,
    },
    {
      category: 'Healthcare & Biotech',
      services: [;
        'Drug Discovery AI',
        'Medical Imaging Analysis',
        'Genomic Research Platform',
      ],
      starting_price: '$199 / month',
      icon: <FlaskConical className='w - 6 h - 6' />,
    },
    {
      category: 'Cybersecurity',
      services: [;
        'Quantum Encryption',
        'Threat Intelligence',
        'Zero - Trust Security',
      ],
      starting_price: '$129 / month',
      icon: <Shield className='w - 6 h - 6' />,
    },
    {
      category: 'Financial Technology',
      services: [;
        'AI Trading Platform',
        'Risk Management',
        'Portfolio Optimization',
      ],
      starting_price: '$179 / month',
      icon: <DollarSign className='w - 6 h - 6' />,
    },
    {
      category: 'Space Technology',
      services: [;
        'Satellite Management',
        'Space Data Analytics',
        'Mission Planning AI',
      ],
      starting_price: '$299 / month',
      icon: <Rocket className='w - 6 h - 6' />,
    },  ];
;
  // Value propositions;
  const value_propositions = [;
    {
      title: 'Unprecedented ROI',
      description: 'Average 300% ROI within 6 months',
      icon: <TrendingUp className='w - 8 h - 8' />,
      metric: '300%',
      detail: 'Average ROI',
    },
    {
      title: 'Time to Value',
      description: 'Get up and running in under 24 hours',
      icon: <Clock className='w - 8 h - 8' />,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      metric: '<24h',
      detail: 'Setup Time',
    },
    {
      title: 'Global Reach',
      description: 'Available in 150+ countries worldwide',
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      icon: <Globe className='w - 8 h - 8' />,
      metric: '150+',
      detail: 'Countries',
    },
    {
      title: 'Enterprise Security',
      description: 'Bank - level security with 99.99% uptime',
      icon: <Shield className='w - 8 h - 8' />,
      metric: '99.99%',
      detail: 'Uptime SLA',
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];
;
  return (
    <UltraFuturisticBackground variant='quantum' intensity='high'>;
      <Head>;
        <title>;
          Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI &;
          Quantum Services;
        </title>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        <meta name='author' content='Zion Tech Group' />;
        <meta name='robots' content='index, follow' />;


        {/* Open Graph */}
        <meta
          property='og:title'
          content='Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services'
        />;
        <meta
          property='og:description'
          content='Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans.'
        />;
        <meta property='og:type' content='website' />;
        <meta property='og:url' content='https://ziontechgroup && ziontechgroup.com/pricing' />;
        <meta
          property='og:image'
<<<<<<< HEAD
<<<<<<< HEAD
          content='https://ziontechgroup && ziontechgroup.com/og-image && image.jpg'
        />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          content='https://ziontechgroup && ziontechgroup.com/og-image && image.jpg'
        />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />;
        <meta
          name='twitter:title'
          content='Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services'
        />;
        <meta
          name='twitter:description'
          content='Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans.'
        />;
        <meta
          name='twitter:image'

<<<<<<< HEAD
<<<<<<< HEAD
        <title>
          Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI &
          Quantum Services
        </title>
        <meta
          name='description'
          content='Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans with generous free trials.'
        />
        <meta
          name='keywords'
          content='pricing, micro SaaS pricing, AI services pricing, quantum computing pricing, enterprise pricing'
        />
        <meta name='author' content='Zion Tech Group' />
        <meta name='robots' content='index, follow' />
        {/* Open Graph */}
        <meta
          property='og:title'
          content='Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services'
        />
        <meta
          property='og:description'
          content='Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ziontechgroup.com/pricing' />
        <meta
          property='og:image'
          content='https://ziontechgroup.com/og-image.jpg'
        />
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services'
        />
        <meta
          name='twitter:description'
          content='Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans.'
        />
        <meta
          name='twitter:image'
          content='https://ziontechgroup.com/og-image.jpg'
        />
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];

  return (
    <UltraFuturisticBackground variant='quantum' intensity='high'>
      <Head>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


      </Head>
      <div className='container mx-auto px-4 py-12'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
      </Head>
      <div className='container mx-auto px-4 py-12'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
        <title>Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services</title>
        <meta name="description" content="Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans with generous free trials." />
        <meta name="keywords" content="pricing, micro SaaS pricing, AI services pricing, quantum computing pricing, enterprise pricing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <meta property="og:title" content="Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services" />
        <meta property="og:description" content="Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        {/* Twitter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services" />
        <meta name="twitter:description" content="Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Transparent Pricing
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
            Choose the perfect plan for your business. All plans include
            generous free trials and access to our revolutionary AI & quantum
            computing services.
          </p>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          content='https://ziontechgroup && ziontechgroup.com/og-image && image.jpg'
        />;
      </Head>;

      <div className='container mx-auto px-4 py-12'>;
        {/* Hero Section */}
        <div className='text-center mb-16'>;
          <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
            Transparent Pricing;
          </h1>;
          <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>;
=======
        <meta;
          name='description';
          content='Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49 / month), Professional ($149 / month), or Enterprise ($499 / month) plans with generous free trials.';
        />;
        <meta;
          name='keywords';
          content='pricing, micro SaaS pricing, AI services pricing, quantum computing pricing, enterprise pricing';
        />;
        <meta name='author' content='Zion Tech Group' />;
        <meta name='robots' content='index, follow' />;
        {/* Open Graph */}
        <meta;
          property='og:title';
          content='Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services';
        />;
        <meta;
          property='og:description';
          content='Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49 / month), Professional ($149 / month), or Enterprise ($499 / month) plans.';
        />;
        <meta property='og:type' content='website' />;
        <meta property='og:url' content='https://ziontechgroup.com / pricing' />;
        <meta;
          property='og:image';
          content='https://ziontechgroup.com / og - image.jpg';
        />;
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />;
        <meta;
          name='twitter:title';
          content='Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services';
        />;
        <meta;
          name='twitter:description';
          content='Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49 / month), Professional ($149 / month), or Enterprise ($499 / month) plans.';
        />;
        <meta;
          name='twitter:image';
          content='https://ziontechgroup.com / og - image.jpg';
        />;
      </Head>;
      <div className='container mx - auto px - 4 py - 12'>;
        {/* Hero Section */}
        <div className='text - center mb - 16'>;
          <h1 className='text - 5xl md:text - 6xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
            Transparent Pricing;
          </h1>;
          <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Choose the perfect plan for your business. All plans include;
            generous free trials and access to our revolutionary AI & quantum;
            computing services.;
          </p>;
<<<<<<< HEAD
<<<<<<< HEAD
          {/* New 2026 Pricing Link */}
          <div className='mb-8 p-6 bg-gradient-to-r from-purple-800/60 to-pink-800/60 border border-purple-700/50 rounded-2xl max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-white mb-4'>
          {/* New 2026 Pricing Link */}
          <div className='mb-8 p-6 bg-gradient-to-r from-purple-800/60 to-pink-800/60 border border-purple-700/50 rounded-2xl max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-white mb-4'>
          {/* New 2026 Pricing Link */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <div className="mb-8 p-6 bg-gradient-to-r from-purple-800/60 to-pink-800/60 border border-purple-700/50 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              🚀 New for 2026: Revolutionary Services
            </h3>
            <p className='text-gray-300 mb-6'>
              Experience our cutting-edge AI consciousness simulation, quantum
              neural interfaces, and advanced cybersecurity solutions with
              comprehensive pricing and detailed comparisons.
            </p>

            <Button
              href='/comprehensive-pricing-2026'
              variant='primary'
              size='lg'

              className='bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/30'>;
              <span className='flex items-center'>;
                <Rocket className='mr-3 w-6 h-6' />                View 2026 Comprehensive Pricing;
              </span>;
            </Button>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Billing Toggle */}
        'Access to 50+ Core ServicesBasic AI IntegrationStandard Support (24/7)30-Day Free TrialBasic Analytics DashboardEmail Support99.5% Uptime GuaranteeStandard Security Features'
      ];
      icon: <Sparkles className="w-8 h-8" />,
      variant: 'quantum' as const,
      popular: false,
      cta: 'Start Free Trial',
      ctaVariant: 'secondary' as const
};
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'monthly' ? 149 : 119,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
'Access to 200+ Premium ServicesAdvanced AI & Quantum ComputingPriority Support (24/7)60-Day Free TrialAdvanced Analytics & ReportingPhone & Email Support99.9% Uptime GuaranteeEnhanced Security & Compliance';
        'Custom IntegrationsTeam Collaboration ToolsAPI AccessWhite-label Options'
      ];
      icon: <Crown className="w-8 h-8" />,
      variant: 'holographic' as const,
      popular: true,
      cta: 'Start Free Trial',
      ctaVariant: 'primary' as const
};
    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: billingCycle === 'monthly' ? 499 : 399,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
'Access to ALL 500+ ServicesFull Quantum AI & Autonomous SystemsDedicated Support Team (24/7)90-Day Free TrialEnterprise Analytics & AI InsightsDedicated Account Manager99.99% Uptime SLAEnterprise Security & Compliance';
        'Custom Development ServicesAdvanced Team ManagementFull API & SDK AccessCustom Branding & White-labelOn-premise Deployment OptionsAdvanced AI Training & CustomizationPriority Feature DevelopmentGlobal Infrastructure Access'
      ];
      icon: <Rocket className="w-8 h-8" />,
      variant: 'neural' as const,
      popular: false,
      cta: 'Contact Sales',
      ctaVariant: 'primary' as const
    }
];
  // Service category pricing examples
  const serviceCategoryPricing = [
    {
      category: 'Quantum AI & Computing',
      services: ['Quantum AI PlatformNeural Network TrainingQuantum Optimization'],
      startingPrice: '$99/month',
icon: <Brain className="w-6 h-6" />
    };
    {
      category: 'Autonomous Systems',
      services: ['AI Factory ManagementRobotic Process AutomationSmart Manufacturing'],
      startingPrice: '$149/month',
icon: <Factory className="w-6 h-6" />
    };
    {
      category: 'Healthcare & Biotech',
      services: ['Drug Discovery AIMedical Imaging AnalysisGenomic Research Platform'],
      startingPrice: '$199/month',
icon: <FlaskConical className="w-6 h-6" />
    };
    {
      category: 'Cybersecurity',
      services: ['Quantum EncryptionThreat IntelligenceZero-Trust Security'],
      startingPrice: '$129/month',
icon: <Shield className="w-6 h-6" />
    };
    {
      category: 'Financial Technology',
      services: ['AI Trading PlatformRisk ManagementPortfolio Optimization'],
      startingPrice: '$179/month',
icon: <DollarSign className="w-6 h-6" />
    };
    {
      category: 'Space Technology',
      services: ['Satellite ManagementSpace Data AnalyticsMission Planning AI'],
      startingPrice: '$299/month',
icon: <Rocket className="w-6 h-6" />
    }
  ];
  // Value propositions
  const valuePropositions = [
    {
      title: 'Unprecedented ROI',
      description: 'Average 300% ROI within 6 months',
icon: <TrendingUp className="w-8 h-8" />,
      metric: '300%',
      detail: 'Average ROI'
    };
    {
      title: 'Time to Value',
      description: 'Get up and running in under 24 hours',
      icon: <Clock className="w-8 h-8" />,
      metric: '<24h',
      detail: 'Setup Time'
    };
    {
      title: 'Global Reach',
      description: 'Available in 150+ countries worldwide',
      icon: <Globe className="w-8 h-8" />,
      metric: '150+',
      detail: 'Countries'
    };
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.99% uptime',
      icon: <Shield className="w-8 h-8" />,
      metric: '99.99%',
      detail: 'Uptime SLA'
    }
  ];
  return (
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        />
</Head>

      <div className='container mx-auto px-4 py-12'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
        <title>Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services</title>
        <meta name="description" content="Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans with generous free trials." />
        <meta name="keywords" content="pricing, micro SaaS pricing, AI services pricing, quantum computing pricing, enterprise pricing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
{/* Open Graph */}
        <meta property="og:title" content="Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services" />
        <meta property="og:description" content="Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
{/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services" />
        <meta name="twitter:description" content="Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>
      <div className="container mx-auto px-4 py-12">
{/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">

            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Choose the perfect plan for your business. All plans include generous free trials and access to our revolutionary AI & quantum computing services.
          </p>
{/* New 2026 Pricing Link */}
<div className="mb-8 p-6 bg-gradient-to-r from-purple-800/60 to-pink-800/60 border border-purple-700/50 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">

              🚀 New for 2026: Revolutionary Services
            </h3>
            <p className="text-gray-300 mb-6">
              Experience our cutting-edge AI consciousness simulation, quantum neural interfaces, and advanced cybersecurity solutions with comprehensive pricing and detailed comparisons.
            </p>
            <Button 
              href="/comprehensive-pricing-2026"
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/30"
            >
              <span className="flex items-center">
<Rocket className="mr-3 w-6 h-6" />
                View 2026 Comprehensive Pricing
              </span>
            </Button>
          </div>
{/* Billing Toggle */}
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          {/* Billing Toggle */}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


          {/* Billing Toggle */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='flex items-center justify-center gap-4 mb-8'>;
            <span
              className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>;
              Monthly;
            </span>;
            <button
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


          {/* Billing Toggle */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
=======


=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === 'monthly' ? 'yearly' : 'monthly'
                )
              }
              className='relative inline-flex h-12 w-24 items-center rounded-full bg-slate-700/50 p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50'            >
<<<<<<< HEAD
<<<<<<< HEAD
onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-12 w-24 items-center rounded-full bg-slate-700/50 p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <span
                className={`inline-block h-10 w-10 transform rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-12' : 'translate-x-0'
                }`}
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Pricing Tiers */}
        <div className='mb-20'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>            {pricingTiers.map((tier, index) => (
              <UltraFuturisticCard
                key={tier.name}
                variant={tier.variant}
                interactive={true}
                glowIntensity={tier.popular ? 'high' : 'medium'}
                className={`relative h-full ${tier.popular ? 'scale-105' : ''}`}
        {/* Pricing Tiers */}
        <div className='mb-20'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>            {pricingTiers.map((tier, index) => (
              <UltraFuturisticCard
                key={tier.name}
                variant={tier.variant}
                interactive={true}
                glowIntensity={tier.popular ? 'high' : 'medium'}
                className={`relative h-full ${tier.popular ? 'scale-105' : ''}`}
        {/* Pricing Tiers */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <UltraFuturisticCard
                key={tier.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                variant={tier.variant  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                interactive={true  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                glowIntensity={tier.popular ? 'high' : 'medium'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`relative h-full ${tier.popular ? 'scale-105' : ''}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >
                {tier.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center'>
                      <Star className='w-4 h-4 mr-2' />                      Most Popular
                    </span>
                  </div>


              />
            </button>
<span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-2 text-sm text-green-400">Save 20%</span>
            </span>
          </div>
        </div>
className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>;
              Yearly;
              <span className='ml-2 text-sm text-green-400'>Save 20%</span>            </span>;
          </div>;
        </div>;
        {/* Pricing Tiers */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <UltraFuturisticCard
                key={tier && tier.name}
                variant={tier && tier.variant}
                interactive={true}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                )}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* New 2026 Pricing Link */}
          <div className='mb - 8 p - 6 bg - gradient - to - r from - purple - 800 / 60 to - pink - 800 / 60 border border - purple - 700 / 50 rounded - 2xl max - w-4xl mx - auto'>;
            <h3 className='text - 2xl font - bold text - white mb - 4'>;
              🚀 New for 2026: Revolutionary Services;
            </h3>;
            <p className='text - gray - 300 mb - 6'>;
              Experience our cutting - edge AI consciousness simulation, quantum;
              neural interfaces, and advanced cybersecurity solutions with;
              comprehensive pricing and detailed comparisons.;
            </p>;
            <Button;
              href='/comprehensive - pricing - 2026';
              variant='primary';
              size='lg';
              className='bg - gradient - to - r from - purple - 500 to - pink - 600 hover:from - purple - 600 hover:to - pink - 700 shadow - 2xl hover:shadow - purple - 500 / 30';
            >;
              <span className='flex items - center'>;
                <Rocket className='mr - 3 w - 6 h - 6' />                View 2026 Comprehensive Pricing;
              </span>;
            </Button>;
          </div>;
          {/* Billing Toggle */}
          <div className='flex items - center justify - center gap - 4 mb - 8'>;
            <span;
              className={`text - lg ${billing_cycle === 'monthly' ? 'text - white' : 'text - gray - 400'}`}
            >;
              Monthly;
            </span>;
            <button;
              on_click={() =>;
                setBillingCycle (
                  billing_cycle === 'monthly' ? 'yearly' : 'monthly');
              }
              className='relative inline - flex h - 12 w - 24 items - center rounded - full bg - slate - 700 / 50 p - 1 transition - colors focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50'            >;
              <span;
                className={`inline - block h - 10 w - 10 transform rounded - full bg - gradient - to - r from - cyan - 500 to - purple - 500 transition - transform ${
                  billing_cycle === 'yearly' ? 'translate - x-12' : 'translate - x-0';
                }`}
              />;
            </button>;
            <span;
              className={`text - lg ${billing_cycle === 'yearly' ? 'text - white' : 'text - gray - 400'}`}
            >;
              Yearly;
              <span className='ml - 2 text - sm text - green - 400'>Save 20%</span>            </span>;
          </div>;
        </div>;
        {/* Pricing Tiers */}
        <div className='mb - 20'>;
          <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 8 max - w-7xl mx - auto'>            {pricing_tiers.map ((tier, index) => (
              <UltraFuturisticCard;
                key={tier.name}
                variant={tier.variant}
                interactive={true}
                glow_intensity={tier.popular ? 'high' : 'medium'}
                className={`relative h - full ${tier.popular ? 'scale - 105' : ''}`}
              >;
                {tier.popular && (
                  <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                    <span className='bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black px - 4 py - 2 rounded - full text - sm font - bold flex items - center'>;
                      <Star className='w - 4 h - 4 mr - 2' />                      Most Popular;
                    </span>;
                  </div>)}
                <div className='text - center p - 8'>;
                  <div className='inline - flex items - center justify - center w - 20 h - 20 rounded - full bg - gradient - to - r from - cyan - 500 to - purple - 500 mb - 6'>;
                    {tier.icon}
                  </div>;
                  <h3 className='text - 2xl font - bold text - white mb - 2'>;
                    {tier.name}
                  </h3>;
                  <p className='text - gray - 300 mb - 6'>{tier.description}</p>;
                  <div className='mb - 6'>;
                    <div className='flex items - baseline justify - center'>;
                      <span className='text - 5xl font - bold text - cyan - 400'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        ${tier.price}
                      </span>;
                      <span className='text - xl text - gray - 400 ml - 2'>;
                        {tier.period}
                      </span>;
                    </div>;
<<<<<<< HEAD


                    </div>
=======
=======


                    </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {tier.savings && (
                      <div className='text - green - 400 text - sm mt - 2'>;
                        {tier.savings}




                    {tier.features.map((feature, idx) => (
                      <li key={idx} className='flex items-start'>
                        <Check className='w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0' />
                        <span className='text-gray-300'>{feature}</span>
                      </li>


                <div className='text-center p-8'>;
                  <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-6'>;
                    {tier && tier.icon}
                  </div>;

                  <h3 className='text-2xl font-bold text-white mb-2'>;
                    {tier && tier.name}
                  </h3>;
                  <p className='text-gray-300 mb-6'>{tier && tier.description}</p>;

                  <div className='mb-6'>;
                    <div className='flex items-baseline justify-center'>;
                      <span className='text-5xl font-bold text-cyan-400'>;
                        ${tier && tier.price}
                      </span>;
                      <span className='text-xl text-gray-400 ml-2'>;
                        {tier && tier.period}
                      </span>;
                    </div>;
                    {tier && tier.savings && (;
                      <div className='text-green-400 text-sm mt-2'>;
                        {tier && tier.savings}
                      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                glowIntensity={tier.popular ? 'high' : 'medium'}
                className={`relative h-full ${tier.popular ? 'scale-105' : ''}`}

{/* Pricing Tiers */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {" "}
            {pricingTiers.map((tier, index) => (
              <UltraFuturisticCard
                key={tier.name}
                variant={tier.variant}
                interactive={true}
glowIntensity={tier.popular ? 'high' : 'medium'}
                className={`relative h-full ${tier.popular ? 'scale-105' : ''}`}

              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center">
<Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
<div className="text-center p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-6">
                    {tier.icon}
                  </div>
<h3 className='text-2xl font-bold text-white mb-2'>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {tier.name}
                  </h3>
                  <p className='text-gray-300 mb-6'>{tier.description}</p>
                  <div className='mb-6'>
                    <div className='flex items-baseline justify-center'>
                      <span className='text-5xl font-bold text-cyan-400'>
                        ${tier.price}
                      </span>
                      <span className="text-xl text-gray-400 ml-2">
                        {tier.period}
                      </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">${tier.price}</span>
                      <span className="text-xl text-gray-400 ml-2">{tier.period}</span>
                    </div>
                    {tier.savings && (
<div className="text-green-400 text-sm mt-2">{tier.savings}</div>
                    )}
                  </div>
                  <ul className='text-left space-y-3 mb-8'>
                  <ul className='text-left space-y-3 mb-8'>
                  <ul className="text-left space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className='flex items-start'>
                        <Check className='w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0' />
                        <span className='text-gray-300'>{feature}</span>
                      </li>
                    ))}
                  </ul>;



                  <Button

                    href={tier.name === 'Enterprise' ? '/contact' : '/services'}
                    variant={tier.ctaVariant}
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </ul>;
                  <Button;
                    href={tier.name === 'Enterprise' ? '/contact' : '/services'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    variant={tier.ctaVariant  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    size="lg"

                  <ul className="text-left space-y-3 mb-8">

                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>

                    ))}
                  </ul>;
                  <Button
                    href={tier.name === "Enterprise" ? "/contact" : "/services"}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    )}
                  </div>;

                  <ul className='text-left space-y-3 mb-8'>;
                    {tier && tier.features.map((feature, idx) => (;
                      <li key={idx} className='flex items-start'>;
                        <Check className='w-5 h-5 text-green-400 mr-3 mt-0 && 0.5 flex-shrink-0' />;
                        <span className='text-gray-300'>{feature}</span>;
                      </li>;
                    ))}
                  </ul>;



                  <Button

=======
                    href={tier.name === 'Enterprise' ? '/contact' : '/services'}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    variant={tier.ctaVariant}
                    size="lg"
                    className="w-full"
<<<<<<< HEAD

                  >
                    {tier.cta}
                    <ArrowRight className='ml-2 w-5 h-5' />                  </Button>

                </div>
              </UltraFuturisticCard>
))}
</div>;
        </div>;
=======
=======
                    variant={tier.ctaVariant}
                    size="lg"
                    className="w-full"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </UltraFuturisticCard>

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}

          </div>;
        </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Value Propositions */}
        <div className='mb-20'>;
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>;
            Why Choose Zion Tech Group?;
          </h2>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>            {valuePropositions && valuePropositions.map((proposition, index) => (;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                  >
                    {tier.cta}
                    <ArrowRight className='ml-2 w-5 h-5' />                  </Button>
                </div>
              </UltraFuturisticCard>



<<<<<<< HEAD



            ))}
          </div>
        </div>

            ))}
          </div>
        </div>
        {/* Value Propositions */}
<<<<<<< HEAD
        {/* Value Propositions */}
        {/* Value Propositions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Choose Zion Tech Group?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>            {valuePropositions.map((proposition, index) => (
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
        {/* Value Propositions */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


=======

        {/* Value Propositions */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePropositions.map((proposition, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <UltraFuturisticCard
                key={index}
                variant={index % 2 === 0 ? 'quantum' : 'holographic'}
                interactive={true}
<<<<<<< HEAD
<<<<<<< HEAD
className="text-center p-6"
              >
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-4'>
                  {proposition.icon}
                </div>
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-4">
                  {proposition.icon}
                </div>

                <h3 className='text-xl font-bold text-white mb-2'>
                  {proposition.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {proposition.description}
                </p>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {proposition.metric}
                </div>
                <div className="text-sm text-gray-400">
                  {proposition.detail}
                </div>{" "}
              </UltraFuturisticCard>
            ))}
          </div>
        </div>

        {/* Service Category Pricing Examples */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            Service Category Pricing
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>


=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))}

          </div>;
        </div>;

<<<<<<< HEAD
<<<<<<< HEAD
            {serviceCategoryPricing.map((category, index) => (
              <UltraFuturisticCard
        {/* Service Category Pricing Examples */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Service Category Pricing
          </h2>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
<h3 className="text-xl font-bold text-white mb-2">{proposition.title}</h3>
                <h3 className="text-xl font-bold text-white mb-2">{proposition.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{proposition.description}</p>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{proposition.metric}</div>
                <div className="text-sm text-gray-400">{proposition.detail}</div>
              </UltraFuturisticCard>
))}
          </div>;
        </div>;
        {/* Service Category Pricing Examples */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Category Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {serviceCategoryPricing.map((category, index) => (
              <UltraFuturisticCard
<<<<<<< HEAD
=======
=======
            {serviceCategoryPricing.map((category, index) => (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <UltraFuturisticCard
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
                      </div>)}
                  </div>;
                  <ul className='text - left space - y-3 mb - 8'>;
                    {tier.features.map ((feature, idx) => (
                      <li key={idx} className='flex items - start'>;
                        <Check className='w - 5 h - 5 text - green - 400 mr - 3 mt - 0.5 flex - shrink - 0' />;
                        <span className='text - gray - 300'>{feature}</span>;
                      </li>))}
                  </ul>;
                  <Button;
                    href={tier.name === 'Enterprise' ? '/contact' : '/services'}
                    variant={tier.cta_variant}
                    size='lg';
                    className='w - full';
                  >;
                    {tier.cta}
                    <ArrowRight className='ml - 2 w - 5 h - 5' />                  </Button>;
                </div>;
              </UltraFuturisticCard>))}
          </div>;
        </div>;
        {/* Value Propositions */}
        <div className='mb - 20'>;
          <h2 className='text - 3xl font - bold text - white mb - 12 text - center'>;
            Why Choose Zion Tech Group?;
          </h2>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6'>            {value_propositions.map ((proposition, index) => (
              <UltraFuturisticCard;
                key={index}
                variant={index % 2 === 0 ? 'quantum' : 'holographic'}
                interactive={true}
                className='text - center p - 6';
              >;
                <div className='inline - flex items - center justify - center w - 16 h - 16 rounded - full bg - gradient - to - r from - cyan - 500 to - purple - 500 mb - 4'>;
                  {proposition.icon}
                </div>;
                <h3 className='text - xl font - bold text - white mb - 2'>;
                  {proposition.title}
                </h3>;
                <p className='text - gray - 300 text - sm mb - 4'>;
                  {proposition.description}
                </p>;
                <div className='text - 3xl font - bold text - cyan - 400 mb - 2'>;
                  {proposition.metric}
                </div>;
                <div className='text - sm text - gray - 400'>;
                  {proposition.detail}
                </div>              </UltraFuturisticCard>))}
          </div>;
        </div>;
        {/* Service Category Pricing Examples */}
        <div className='mb - 20'>;
          <h2 className='text - 3xl font - bold text - white mb - 12 text - center'>;
            Service Category Pricing;
          </h2>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
            {serviceCategoryPricing.map ((category, index) => (
              <UltraFuturisticCard;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                key={index}
                variant={
                  index % 3 === 0;
                    ? 'quantum';
                    : index % 3 === 1;
                      ? 'holographic';
                      : 'neural';
                }
                interactive={true}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='p - 6';
              >;
                <div className='flex items - center mb - 4'>;
                  <div className='inline - flex items - center justify - center w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 to - purple - 500 mr - 4'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    {category.icon}
                  </div>;
                  <div>;
                    <h3 className='text - lg font - bold text - white'>;
                      {category.category}
<<<<<<< HEAD
<<<<<<< HEAD
                <ul className='space-y-2 mb-4'>
                  {category.services.map((service, idx) => (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                className='p-6'>;
                <div className='flex items-center mb-4'>;
                  <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mr-4'>;
                    {category && category.icon}
                  </div>;
                  <div>;
                    <h3 className='text-lg font-bold text-white'>;
                      {category && category.category}
                    </h3>;
                    <div className='text-cyan-400 font-semibold'>;
                      {category && category.startingPrice}
                    </div>;
                  </div>;
                </div>;

                <ul className='space-y-2 mb-4'>;
                  {category && category.services.map((service, idx) => (;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <li
                      key={idx}
                      className='text-sm text-gray-300 flex items-center'>;
                      <Check className='w-4 h-4 text-green-400 mr-2' />                      {service}
                    </li>;
                  ))}
<<<<<<< HEAD
<<<<<<< HEAD
                <ul className="space-y-2 mb-4">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <Check className="w-4 h-4 text-green-400 mr-2" />
                      {service  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </li>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </ul>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




                </ul>
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </ul>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <Button
                  href='/services'
                  variant='secondary'
                  size='sm'
                  className='w-full'>;
                  Explore Services;
                  <ChevronRight className='ml-2 w-4 h-4' />                </Button>;
              </UltraFuturisticCard>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Category Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategoryPricing.map((category, index) => (
              <UltraFuturisticCard
                key={index}
                variant={index % 3 === 0 ? 'quantum' : index % 3 === 1 ? 'holographic' : 'neural'}
                interactive={true}
                className="p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{category.category}</h3>
                    <div className="text-cyan-400 font-semibold">{category.startingPrice}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <Check className="w-4 h-4 text-green-400 mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
                
                <Button
                  href="/services"
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  Explore Services
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </UltraFuturisticCard>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            ))}





            ))}
          </div>
        </div>

            ))}
          </div>
        </div>
        {/* Popular Services Pricing */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            Popular Services Pricing
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>            {popularServices.slice(0, 6).map((service, index) => (
=======
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </UltraFuturisticCard>

            ))}

=======



=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<ChevronRight className='ml-2 w-4 h-4' />                </Button>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        {/* Popular Services Pricing */}
        <div className='mb-20'>;
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>;
            Popular Services Pricing;
          </h2>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>            {popularServices && popularServices.slice(0, 6).map((service, index) => (;

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Popular Services Pricing */}
        {/* Popular Services Pricing */}
        {/* Popular Services Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Popular Services Pricing
          </h2>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>            {popularServices.slice(0, 6).map((service, index) => (

=======
=======

        {/* Popular Services Pricing */}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

        {/* Popular Services Pricing */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Popular Services Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.slice(0, 6).map((service, index) => (

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <UltraFuturisticCard
                key={service && service.id}
                variant={service && service.variant as any}
                interactive={true}
<<<<<<< HEAD
<<<<<<< HEAD
                    </h3>;
                    <div className='text - cyan - 400 font - semibold'>;
                      {category.starting_price}
                    </div>;
                  </div>;
                </div>;
                <ul className='space - y-2 mb - 4'>;
                  {category.services.map ((service, idx) => (
                    <li;
                      key={idx}
                      className='text - sm text - gray - 300 flex items - center';
                    >;
                      <Check className='w - 4 h - 4 text - green - 400 mr - 2' />                      {service}
                    </li>))}
                </ul>;
                <Button;
                  href='/services';
                  variant='secondary';
                  size='sm';
                  className='w - full';
                >;
                  Explore Services;
                  <ChevronRight className='ml - 2 w - 4 h - 4' />                </Button>;
              </UltraFuturisticCard>))}
          </div>;
        </div>;
        {/* Popular Services Pricing */}
        <div className='mb - 20'>;
          <h2 className='text - 3xl font - bold text - white mb - 12 text - center'>;
            Popular Services Pricing;
          </h2>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>            {popular_services.slice (0, 6).map ((service, index) => (
              <UltraFuturisticCard;
                key={service.id}
                variant={service.variant as any}
                interactive={true}
className='p - 6';
              >;
                <div className='text - center mb - 4'>;
                  <div className='text - 3xl mb - 3'>{service.icon}</div>;
                  <h3 className='text - lg font - bold text - white mb - 2'>;
                    {service.name}
                  </h3>
                  <div className='text-2xl font-bold text-cyan-400 mb-2'>
                    {service.price}
                  </div>
                  <div className='text-sm text-gray-400'>
                    {service.category}
                <div className='mb-4'>
                  <div className='text-xs text-gray-400 mb-2'>
                    Key Features:
                  </div>
                  <ul className='text-xs text-gray-300 space-y-1'>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className='flex items-center'>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                        <Check className='w-3 h-3 text-green-400 mr-2' />                        {feature}
                      </li>;

<<<<<<< HEAD
<<<<<<< HEAD
className='p-6'>;
                <div className='text-center mb-4'>;
                  <div className='text-3xl mb-3'>{service && service.icon}</div>;
                  <h3 className='text-lg font-bold text-white mb-2'>;
                    {service && service.name}
                  </h3>;
                  <div className='text-2xl font-bold text-cyan-400 mb-2'>;
                    {service && service.price}
                  </div>;
                  <div className='text-sm text-gray-400'>;
                    {service && service.category}
                  </div>;
                </div>;
                <div className='mb-4'>;
                  <div className='text-xs text-gray-400 mb-2'>;
                    Key Features:;
                  </div>;
                  <ul className='text-xs text-gray-300 space-y-1'>;
                    {service && service.features.slice(0, 3).map((feature, idx) => (;
                      <li key={idx} className='flex items-center'>;
                        <Check className='w-3 h-3 text-green-400 mr-2' />                        {feature}
                      </li>;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className="p-6"
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.category}</div>
                </div>
<<<<<<< HEAD
                
=======
                <Button
                  href={service.link}
                  variant='primary'
                  size='sm'
                  className='w-full'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-3 h-3 text-green-400 mr-2" />
                        {feature}
                      </li>
<<<<<<< HEAD
<<<<<<< HEAD
                    ))}
                  </ul>;
                </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    ))}

                  </ul>;
                </div>;


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Button
                  href={service && service.link}
                  variant='primary'
                  size='sm'
                  className='w-full'>;
                  Learn More;
                  <ExternalLink className='ml-2 w-4 h-4' />                </Button>;
              </UltraFuturisticCard>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                
                <Button
                  href={service.link}
                  variant="primary"
                  size="sm"
                  className="w-full"
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



                >
                  Learn More
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
<<<<<<< HEAD
<<<<<<< HEAD


                >
                  Learn More
                  <ExternalLink className='ml-2 w-4 h-4' />                </Button>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>

            ))}
          </div>
        </div>
        {/* FAQ Section */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            Frequently Asked Questions
          </h2>
          <div className='max-w-4xl mx-auto space-y-4'>
            <UltraFuturisticCard variant='quantum' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                What's included in the free trial?
              </h3>
              <p className='text-gray-300'>
                All plans include a generous free trial period with full access
                to the selected services. No credit card required to start your
                trial.
              </p>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </UltraFuturisticCard>




=======


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </UltraFuturisticCard>
            <UltraFuturisticCard variant='holographic' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                Can I change my plan later?
              </h3>
              <p className='text-gray-300'>
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately, and we'll prorate any billing
                adjustments.
              </p>
            </UltraFuturisticCard>
            <UltraFuturisticCard variant='neural' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                What support is included?
              </h3>
              <p className='text-gray-300'>
                All plans include 24/7 support. Professional and Enterprise
                plans include priority support with dedicated account managers.
              </p>
            </UltraFuturisticCard>
            <UltraFuturisticCard variant='quantum' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                Is there a setup fee?
              </h3>
              <p className='text-gray-300'>
                No setup fees for any plan. All services are designed for
                instant deployment with our AI-powered setup wizards.
              </p>            </UltraFuturisticCard>
<<<<<<< HEAD
<<<<<<< HEAD
=======
          </div>
        </div>
        {/* Contact Information */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>
            Get In Touch
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            <UltraFuturisticCard variant='quantum' className='text-center p-6'>
              <Phone className='w-12 h-12 text-cyan-400 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-white mb-3'>Phone</h3>
              <p className='text-cyan-400 text-lg font-semibold'>
                {contactInfo.mobile}
              </p>
              <p className='text-gray-400 text-sm mt-2'>Available 24/7</p>
            </UltraFuturisticCard>
            <UltraFuturisticCard
              variant='holographic'
              className='text-center p-6'
            >
              <Mail className='w-12 h-12 text-purple-400 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-white mb-3'>Email</h3>
              <p className='text-purple-400 text-lg font-semibold'>
                {contactInfo.email}
              </p>
              <p className='text-gray-400 text-sm mt-2'>
                Quick response guaranteed
              </p>
            </UltraFuturisticCard>
            <UltraFuturisticCard variant='neural' className='text-center p-6'>
              <MapPin className='w-12 h-12 text-green-400 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-white mb-3'>Address</h3>
              <p className='text-green-400 text-sm font-semibold leading-relaxed'>
                {contactInfo.address}
              </p>
              <p className='text-gray-400 text-sm mt-2'>Global operations</p>            </UltraFuturisticCard>
          </div>
        </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* CTA Section */}
        <div className='text-center'>
          <UltraFuturisticCard
            variant='quantum-holographic-advanced'
            className='p-12'
          >
            <h2 className='text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
        {/* FAQ Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <UltraFuturisticCard variant="quantum" className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">What's included in the free trial?</h3>
              <p className="text-gray-300">All plans include a generous free trial period with full access to the selected services. No credit card required to start your trial.</p>
<<<<<<< HEAD
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </UltraFuturisticCard>
            
            <UltraFuturisticCard variant="holographic" className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">Can I change my plan later?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.</p>
            </UltraFuturisticCard>
            
            <UltraFuturisticCard variant="neural" className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">What support is included?</h3>
              <p className="text-gray-300">All plans include 24/7 support. Professional and Enterprise plans include priority support with dedicated account managers.</p>
            </UltraFuturisticCard>
            
            <UltraFuturisticCard variant="quantum" className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">Is there a setup fee?</h3>
              <p className="text-gray-300">No setup fees for any plan. All services are designed for instant deployment with our AI-powered setup wizards.</p>
            </UltraFuturisticCard>
<<<<<<< HEAD
          </div>
        </div>
        {/* Contact Information */}

                <div className='mb-4'>
                  <div className='text-xs text-gray-400 mb-2'>

                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">

                    Key Features:
                  </div>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-3 h-3 text-green-400 mr-2" />{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  href={service.link}
variant='primary'
                  size='sm'
                  className='w-full'

                >
                  Learn More
                  <ExternalLink className='ml-2 w-4 h-4' />                </Button>

              </UltraFuturisticCard>
))}
<div className="mb-20">
=======
=======
        <div className="mb-20">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <UltraFuturisticCard variant="quantum" className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">What's included in the free trial?</h3>
              <p className="text-gray-300">All plans include a generous free trial period with full access to the selected services. No credit card required to start your trial.</p>
            </UltraFuturisticCard>
            
            <UltraFuturisticCard variant="holographic" className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">Can I change my plan later?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.</p>
            </UltraFuturisticCard>
            
            <UltraFuturisticCard variant="neural" className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">What support is included?</h3>
              <p className="text-gray-300">All plans include 24/7 support. Professional and Enterprise plans include priority support with dedicated account managers.</p>
            </UltraFuturisticCard>
            
            <UltraFuturisticCard variant="quantum" className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">Is there a setup fee?</h3>
              <p className="text-gray-300">No setup fees for any plan. All services are designed for instant deployment with our AI-powered setup wizards.</p>
            </UltraFuturisticCard>
<<<<<<< HEAD
          </div>
        </div>
          </div>
        </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          </div>
        </div>
        {/* Contact Information */}

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <UltraFuturisticCard variant="quantum" className="text-center p-6">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
              <p className="text-cyan-400 text-lg font-semibold">{contactInfo.mobile}</p>
              <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
            </UltraFuturisticCard>

            <UltraFuturisticCard variant="holographic" className="text-center p-6">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-purple-400 text-lg font-semibold">{contactInfo.email}</p>
              <p className="text-gray-400 text-sm mt-2">Quick response guaranteed</p>
            </UltraFuturisticCard>

            <UltraFuturisticCard variant="neural" className="text-center p-6">
              <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Address</h3>
              <p className="text-green-400 text-sm font-semibold leading-relaxed">{contactInfo.address}</p>
              <p className="text-gray-400 text-sm mt-2">Global operations</p>
            </UltraFuturisticCard>

          </div>
        </div>

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </div>;

        {/* FAQ Section */}
        <div className='mb-20'>;
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>;
            Frequently Asked Questions;
          </h2>;
          <div className='max-w-4xl mx-auto space-y-4'>;
            <UltraFuturisticCard variant='quantum' className='p-6'>;
              <h3 className='text-lg font-bold text-white mb-3'>;
                What's included in the free trial?;
              </h3>;
              <p className='text-gray-300'>;
                All plans include a generous free trial period with full access;
                to the selected services. No credit card required to start your;
                trial.;
              </p>;
            </UltraFuturisticCard>;

            <UltraFuturisticCard variant='holographic' className='p-6'>;
              <h3 className='text-lg font-bold text-white mb-3'>;
                Can I change my plan later?;
              </h3>;
              <p className='text-gray-300'>;
                Yes, you can upgrade or downgrade your plan at any time. Changes;
                take effect immediately, and we'll prorate any billing;
                adjustments.;
              </p>;
            </UltraFuturisticCard>;

            <UltraFuturisticCard variant='neural' className='p-6'>;
              <h3 className='text-lg font-bold text-white mb-3'>;
                What support is included?;
              </h3>;
              <p className='text-gray-300'>;
                All plans include 24/7 support. Professional and Enterprise;
                plans include priority support with dedicated account managers.;
              </p>;
            </UltraFuturisticCard>;

            <UltraFuturisticCard variant='quantum' className='p-6'>;
              <h3 className='text-lg font-bold text-white mb-3'>;
                Is there a setup fee?;
              </h3>;
              <p className='text-gray-300'>;
                No setup fees for any plan. All services are designed for;
                instant deployment with our AI-powered setup wizards.;
              </p>            </UltraFuturisticCard>;
          </div>;
        </div>;

        {/* Contact Information */}
        <div className='mb-16'>;
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>;
            Get In Touch;
          </h2>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>;
            <UltraFuturisticCard variant='quantum' className='text-center p-6'>;
              <Phone className='w-12 h-12 text-cyan-400 mx-auto mb-4' />;
              <h3 className='text-xl font-bold text-white mb-3'>Phone</h3>;
              <p className='text-cyan-400 text-lg font-semibold'>;
                {contactInfo && contactInfo.mobile}
              </p>;
              <p className='text-gray-400 text-sm mt-2'>Available 24/7</p>;
            </UltraFuturisticCard>;

            <UltraFuturisticCard
              variant='holographic'
              className='text-center p-6'>;
              <Mail className='w-12 h-12 text-purple-400 mx-auto mb-4' />;
              <h3 className='text-xl font-bold text-white mb-3'>Email</h3>;
              <p className='text-purple-400 text-lg font-semibold'>;
                {contactInfo && contactInfo.email}
              </p>;
              <p className='text-gray-400 text-sm mt-2'>;
                Quick response guaranteed;
              </p>;
            </UltraFuturisticCard>;

            <UltraFuturisticCard variant='neural' className='text-center p-6'>;
              <MapPin className='w-12 h-12 text-green-400 mx-auto mb-4' />;
              <h3 className='text-xl font-bold text-white mb-3'>Address</h3>;
              <p className='text-green-400 text-sm font-semibold leading-relaxed'>;
                {contactInfo && contactInfo.address}
              </p>;
              <p className='text-gray-400 text-sm mt-2'>Global operations</p>            </UltraFuturisticCard>;
          </div>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        {/* CTA Section */}
        <div className='text-center'>
          <UltraFuturisticCard
            variant='quantum-holographic-advanced'
            className='p-12'
          >
            <h2 className='text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        {/* CTA Section */}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="text-center">
          <UltraFuturisticCard variant="quantum-holographic-advanced" className="p-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Ready to Get Started?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Start your free trial today and experience the power of
              revolutionary AI & quantum computing services. No credit card
              required, instant setup, and full support included.
            </p>
<<<<<<< HEAD
<<<<<<< HEAD
        {/* CTA Section */}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='p-12'>;
            <h2 className='text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
              Ready to Get Started?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>;
=======
                  </div>;
                </div>;
                <div className='mb - 4'>;
                  <div className='text - xs text - gray - 400 mb - 2'>;
                    Key Features:;
                  </div>;
                  <ul className='text - xs text - gray - 300 space - y-1'>;
                    {service.features.slice (0, 3).map ((feature, idx) => (
                      <li key={idx} className='flex items - center'>;
                        <Check className='w - 3 h - 3 text - green - 400 mr - 2' />                        {feature}
                      </li>))}
                  </ul>;
                </div>;
                <Button;
                  href={service.link}
                  variant='primary';
                  size='sm';
                  className='w - full';
                >;
                  Learn More;
                  <ExternalLink className='ml - 2 w - 4 h - 4' />                </Button>;
              </UltraFuturisticCard>))}
          </div>;
        </div>;
        {/* FAQ Section */}
        <div className='mb - 20'>;
          <h2 className='text - 3xl font - bold text - white mb - 12 text - center'>;
            Frequently Asked Questions;
          </h2>;
          <div className='max - w-4xl mx - auto space - y-4'>;
            <UltraFuturisticCard variant='quantum' className='p - 6'>;
              <h3 className='text - lg font - bold text - white mb - 3'>;
                What's included in the free trial?;
              </h3>;
              <p className='text - gray - 300'>;
                All plans include a generous free trial period with full access;
                to the selected services. No credit card required to start your;
                trial.;
              </p>;
            </UltraFuturisticCard>;
            <UltraFuturisticCard variant='holographic' className='p - 6'>;
              <h3 className='text - lg font - bold text - white mb - 3'>;
                Can I change my plan later?;
              </h3>;
              <p className='text - gray - 300'>;
                Yes, you can upgrade or downgrade your plan at any time. Changes;
                take effect immediately, and we'll prorate any billing;
                adjustments.;
              </p>;
            </UltraFuturisticCard>;
            <UltraFuturisticCard variant='neural' className='p - 6'>;
              <h3 className='text - lg font - bold text - white mb - 3'>;
                What support is included?;
              </h3>;
              <p className='text - gray - 300'>;
                All plans include 24 / 7 support. Professional and Enterprise;
                plans include priority support with dedicated account managers.;
              </p>;
            </UltraFuturisticCard>;
            <UltraFuturisticCard variant='quantum' className='p - 6'>;
              <h3 className='text - lg font - bold text - white mb - 3'>;
                Is there a setup fee?;
              </h3>;
              <p className='text - gray - 300'>;
                No setup fees for any plan. All services are designed for;
                instant deployment with our AI - powered setup wizards.;
              </p>            </UltraFuturisticCard>;
          </div>;
        </div>;
        {/* Contact Information */}
        <div className='mb - 16'>;
          <h2 className='text - 3xl font - bold text - white mb - 8 text - center'>;
            Get In Touch;
          </h2>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 max - w-4xl mx - auto'>;
            <UltraFuturisticCard variant='quantum' className='text - center p - 6'>;
              <Phone className='w - 12 h - 12 text - cyan - 400 mx - auto mb - 4' />;
              <h3 className='text - xl font - bold text - white mb - 3'>Phone</h3>;
              <p className='text - cyan - 400 text - lg font - semibold'>;
                {contact_info.mobile}
              </p>;
              <p className='text - gray - 400 text - sm mt - 2'>Available 24 / 7</p>;
            </UltraFuturisticCard>;
            <UltraFuturisticCard;
              variant='holographic';
              className='text - center p - 6';
            >;
              <Mail className='w - 12 h - 12 text - purple - 400 mx - auto mb - 4' />;
              <h3 className='text - xl font - bold text - white mb - 3'>Email</h3>;
              <p className='text - purple - 400 text - lg font - semibold'>;
                {contact_info.email}
              </p>;
              <p className='text - gray - 400 text - sm mt - 2'>;
                Quick response guaranteed;
              </p>;
            </UltraFuturisticCard>;
            <UltraFuturisticCard variant='neural' className='text - center p - 6'>;
              <MapPin className='w - 12 h - 12 text - green - 400 mx - auto mb - 4' />;
              <h3 className='text - xl font - bold text - white mb - 3'>Address</h3>;
              <p className='text - green - 400 text - sm font - semibold leading - relaxed'>;
                {contact_info.address}
              </p>;
              <p className='text - gray - 400 text - sm mt - 2'>Global operations</p>            </UltraFuturisticCard>;
          </div>;
        </div>;
        {/* CTA Section */}
        <div className='text - center'>;
          <UltraFuturisticCard;
            variant='quantum - holographic - advanced';
            className='p - 12';
          >;
            <h2 className='text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
              Ready to Get Started?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto'>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Start your free trial today and experience the power of;
              revolutionary AI & quantum computing services. No credit card;
              required, instant setup, and full support included.;
            </p>;
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <div className="flex flex-col sm: flex-row gap-4 justify-center mb-8">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Button
                href='/services'
                variant='primary'
                size='lg'
                className='text-lg px-8 py-4'>;
                Start Free Trial;
                <Play className='ml-2 w-5 h-5' />;
              </Button>;
              <Button
                href='/contact'
                variant='secondary'
                size='lg'
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='text-sm text-gray-400'>
        <div className="text-center">
          <UltraFuturisticCard variant="quantum-holographic-advanced" className="p-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of revolutionary AI & quantum computing services. 
              No credit card required, instant setup, and full support included.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center mb-8">
              <Button
                href="/services"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Start Free Trial
                <Play className="ml-2 w-5 h-5" />
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Contact Sales
                <MessageSquare className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="text-sm text-gray-400">
              <p>✓ 30-90 Day Free Trials • ✓ No Credit Card Required • ✓ Instant Setup</p>
              <p className="mt-2">✓ 24/7 Support • ✓ 99.99% Uptime SLA • ✓ Global Infrastructure</p>
              <Button
                href=&quot;/services&quot;
                variant=&quot;primary&quot;
                size=&quot;lg&quot;
                className=&quot;text-lg px-8 py-4&quot;
              >
                Start Free Trial
                <Play className=&quot;ml-2 w-5 h-5&quot; />
              </Button>
              <Button
                href=&quot;/contact&quot;
                variant=&quot;secondary&quot;
                size=&quot;lg&quot;
                className=&quot;text-lg px-8 py-4&quot;
              >
                Contact Sales
                <MessageSquare className=&quot;ml-2 w-5 h-5&quot; />
              </Button>
            </div>
            
            <div className=&quot;text-sm text-gray-400&quot;>
              <p>✓ 30-90 Day Free Trials • ✓ No Credit Card Required • ✓ Instant Setup</p>
              <p className=&quot;mt-2&quot;>✓ 24/7 Support • ✓ 99.99% Uptime SLA • ✓ Global Infrastructure</p>

            </div>
        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <UltraFuturisticCard variant="quantum" className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                What's included in the free trial?
              </h3>
              <p className="text-gray-300">
                All plans include a generous free trial period with full access
                to the selected services. No credit card required to start your
                trial.
              </p>
Can I change my plan later?
              </h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately, and we'll prorate any billing
                adjustments.
              </p>
            </UltraFuturisticCard>
<UltraFuturisticCard variant='neural' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                What support is included?
              </h3>
              <p className="text-gray-300">
                All plans include 24/7 support. Professional and Enterprise
                plans include priority support with dedicated account managers.
              </p>
            </UltraFuturisticCard>
<UltraFuturisticCard variant='quantum' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                Is there a setup fee?
              </h3>
              <p className="text-gray-300">
                No setup fees for any plan. All services are designed for
                instant deployment with our AI-powered setup wizards.
              </p>{" "}
            </UltraFuturisticCard>
          </div>
        </div>
        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <UltraFuturisticCard variant="quantum" className="text-center p-6">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
              <p className="text-cyan-400 text-lg font-semibold">
                {contactInfo.mobile}
              </p>
              <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
            </UltraFuturisticCard>
            <UltraFuturisticCard
              variant="holographic"
              className="text-center p-6"
            >
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-purple-400 text-lg font-semibold">
                {contactInfo.email}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Quick response guaranteed
              </p>
            </UltraFuturisticCard>
<UltraFuturisticCard variant='neural' className='text-center p-6'>
              <MapPin className='w-12 h-12 text-green-400 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-white mb-3'>Address</h3>
              <p className='text-green-400 text-sm font-semibold leading-relaxed'>
                {contactInfo.address}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Global operations
              </p>{" "}
            </UltraFuturisticCard>
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <UltraFuturisticCard
            variant="quantum-holographic-advanced"
            className="p-12"
          >
<h2 className='text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
            </UltraFuturisticCard>
            <UltraFuturisticCard variant='holographic' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                Can I change my plan later?
              </h3>
              <p className='text-gray-300'>
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately, and we'll prorate any billing
                adjustments.
              </p>
            </UltraFuturisticCard>
            <UltraFuturisticCard variant='neural' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                What support is included?
              </h3>
              <p className='text-gray-300'>
                All plans include 24/7 support. Professional and Enterprise
                plans include priority support with dedicated account managers.
              </p>
            </UltraFuturisticCard>
            <UltraFuturisticCard variant='quantum' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                Is there a setup fee?
              </h3>
              <p className='text-gray-300'>
                No setup fees for any plan. All services are designed for
                instant deployment with our AI-powered setup wizards.
              </p>            </UltraFuturisticCard>
          </div>
        </div>
        {/* Contact Information */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>
            Get In Touch
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            <UltraFuturisticCard variant='quantum' className='text-center p-6'>
              <Phone className='w-12 h-12 text-cyan-400 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-white mb-3'>Phone</h3>
              <p className='text-cyan-400 text-lg font-semibold'>
                {contactInfo.mobile}
              </p>
              <p className='text-gray-400 text-sm mt-2'>Available 24/7</p>
            </UltraFuturisticCard>
            <UltraFuturisticCard
              variant='holographic'
              className='text-center p-6'
            >
              <Mail className='w-12 h-12 text-purple-400 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-white mb-3'>Email</h3>
              <p className='text-purple-400 text-lg font-semibold'>
                {contactInfo.email}
              </p>
              <p className='text-gray-400 text-sm mt-2'>
                Quick response guaranteed
              </p>
            </UltraFuturisticCard>
            <UltraFuturisticCard variant='neural' className='text-center p-6'>
              <MapPin className='w-12 h-12 text-green-400 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-white mb-3'>Address</h3>
              <p className='text-green-400 text-sm font-semibold leading-relaxed'>
                {contactInfo.address}
              </p>
              <p className='text-gray-400 text-sm mt-2'>Global operations</p>            </UltraFuturisticCard>
          </div>
        </div>
{/* CTA Section */}
        <div className='text-center'>
          <UltraFuturisticCard
            variant='quantum-holographic-advanced'
            className='p-12'
          >
            <h2 className='text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>

              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of
              revolutionary AI & quantum computing services. No credit card
              required, instant setup, and full support included.
            </p>
<div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>

              <Button
                href="/services"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Start Free Trial
                <Play className="ml-2 w-5 h-5" />
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Contact Sales
                <MessageSquare className="ml-2 w-5 h-5" />
              </Button>
            </div>
<div className='text-sm text-gray-400'>
              <p>
                ✓ 30-90 Day Free Trials • ✓ No Credit Card Required • ✓ Instant
                Setup
              </p>

              <p className="mt-2">
                ✓ 24/7 Support • ✓ 99.99% Uptime SLA • ✓ Global Infrastructure
</p>            </div>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            <div className="text-sm text-gray-400">
              <p>✓ 30-90 Day Free Trials • ✓ No Credit Card Required • ✓ Instant Setup</p>
              <p className="mt-2">✓ 24/7 Support • ✓ 99.99% Uptime SLA • ✓ Global Infrastructure</p>
            </div>
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </UltraFuturisticCard>
        </div>
      </div>
    </UltraFuturisticBackground>


                className='text-lg px-8 py-4'>;
<<<<<<< HEAD
<<<<<<< HEAD
className='text-lg px-8 py-4'>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Contact Sales;
                <MessageSquare className='ml-2 w-5 h-5' />;
              </Button>;
            </div>;

            <div className='text-sm text-gray-400'>;
              <p>;
                ✓ 30-90 Day Free Trials • ✓ No Credit Card Required • ✓ Instant;
                Setup;
              </p>;
              <p className='mt-2'>;
                ✓ 24/7 Support • ✓ 99 && 99.99% Uptime SLA • ✓ Global Infrastructure;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className='flex flex - col sm:flex - row gap - 4 justify - center mb - 8'>;
  );

    </UltraFuturisticBackground>
  )
  )
        <div className="mb-20">;
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>;
          <div className="max-w-4xl mx-auto space-y-4">;
            <UltraFuturisticCard variant="quantum" className="p-6">;
              <h3 className="text-lg font-bold text-white mb-3">What's included in the free trial?</h3>;
              <p className="text-gray-300">All plans include a generous free trial period with full access to the selected services. No credit card required to start your trial.</p>;
            </UltraFuturisticCard>;
            <UltraFuturisticCard variant="holographic" className="p-6">;
              <h3 className="text-lg font-bold text-white mb-3">Can I change my plan later?</h3>;
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.</p>;
            </UltraFuturisticCard>;
            <UltraFuturisticCard variant="neural" className="p-6">;
              <h3 className="text-lg font-bold text-white mb-3">What support is included?</h3>;
              <p className="text-gray-300">All plans include 24/7 support. Professional and Enterprise plans include priority support with dedicated account managers.</p>;
            </UltraFuturisticCard>;
            <UltraFuturisticCard variant="quantum" className="p-6">;
              <h3 className="text-lg font-bold text-white mb-3">Is there a setup fee?</h3>;
              <p className="text-gray-300">No setup fees for any plan. All services are designed for instant deployment with our AI-powered setup wizards.</p>;
            </UltraFuturisticCard>;
          </div>;
        </div>;
        {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="mb-16">;
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">;
            <UltraFuturisticCard variant="quantum" className="text-center p-6">;
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />;
              <h3 className="text-xl font-bold text-white mb-3">Phone</h3>;
              <p className="text-cyan-400 text-lg font-semibold">{contactInfo.mobile}</p>;
              <p className="text-gray-400 text-sm mt-2">Available 24/7</p>;
            </UltraFuturisticCard>;
            <UltraFuturisticCard variant="holographic" className="text-center p-6">;
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />;
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>;
              <p className="text-purple-400 text-lg font-semibold">{contactInfo.email}</p>;
              <p className="text-gray-400 text-sm mt-2">Quick response guaranteed</p>;
            </UltraFuturisticCard>;
            <UltraFuturisticCard variant="neural" className="text-center p-6">;
              <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />;
              <h3 className="text-xl font-bold text-white mb-3">Address</h3>;
              <p className="text-green-400 text-sm font-semibold leading-relaxed">{contactInfo.address}</p>;
              <p className="text-gray-400 text-sm mt-2">Global operations</p>;
            </UltraFuturisticCard>;
          </div>;
        </div>;
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="text-center">;
          <UltraFuturisticCard variant="quantum-holographic-advanced" className="p-12">;
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
              Ready to Get Started?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Start your free trial today and experience the power of revolutionary AI & quantum computing services.;
              No credit card required, instant setup, and full support included.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center mb-8">;
=======

=======
            <div className='flex flex - col sm:flex - row gap - 4 justify - center mb - 8'>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Button;
                href='/services';
                variant='primary';
                size='lg';
                className='text - lg px - 8 py - 4';
              >;
                Start Free Trial;
                <Play className='ml - 2 w - 5 h - 5' />;
              </Button>;
              <Button;
                href='/contact';
                variant='secondary';
                size='lg';
                className='text - lg px - 8 py - 4';
              >;
                Contact Sales;
                <MessageSquare className='ml - 2 w - 5 h - 5' />;
              </Button>;
            </div>;
            <div className='text - sm text - gray - 400'>;
              <p>;
                ✓ 30 - 90 Day Free Trials • ✓ No Credit Card Required • ✓ Instant;
                Setup;
              </p>;
              <p className='mt - 2'>;
                ✓ 24 / 7 Support • ✓ 99.99% Uptime SLA • ✓ Global Infrastructure;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </p>            </div>;
          </UltraFuturisticCard>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


}


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </UltraFuturisticBackground>

}



    </UltraFuturisticBackground>
  )

}
<<<<<<< HEAD
=======
>>>>>>> origin/main
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </UltraFuturisticBackground>);
}
<<<<<<< HEAD
  )

  )

}

}

  );
}

}

    </UltraFuturisticBackground>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

    </UltraFuturisticBackground>
=======

}



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </UltraFuturisticBackground>
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
origin/cursor/integrate-build-improve-and-re-verify-242d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}
origin/main
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
  );
}
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
