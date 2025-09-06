<<<<<<< HEAD

<<<<<<< HEAD
=======
import React from 'react';
import Head from 'next / head';
import Link from 'next / link';

=======

import React from 'react';
import Head from 'next/head';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import Link from 'next/link';
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { motion } from 'framer-motion';
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next / head';
import Link from 'next / link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, 
=======
<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
=======
import React from 'react';
import Head from 'next/head';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import Link from 'next/link';
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD
import {
=======
<<<<<<< HEAD
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Phone,
  Zap,
  DollarSign,
  Shield,
  Mail,
  MapPin,
  Rocket,
  Brain,
  Sparkles,
  Globe,
  Atom,
  Heart,
  Leaf,
  Car,
  GraduationCap,
  Scale,
  Building,
  Factory,
  Camera,
  Video,
  Music,
  Gamepad2,
  Crown,
  Award,
  Target,
  Users,
  Clock,;
  Globe2,;} from 'lucide-react';import {
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, ;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles;
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale;
  Building, Factory, Camera, Video, Music, Gamepad2;
  Crown, Award, Target, Users, Clock, Globe2
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
import Link from 'next/link';
import { motion } from 'framer-motion';
import {;
  CheckCircle,;
  ArrowRight,;
  Star,;
  TrendingUp,;
  Phone,;
  Zap,;
  DollarSign,;
  Shield,;
  Mail,;
  MapPin,;
  Rocket,;
  Brain,;
  Sparkles,;
  Globe,;
  Atom,;
  Heart,;
  Leaf,;
  Car,;
  GraduationCap,;
  Scale,;
  Building,;
  Factory,;
  Camera,;
  Video,;
  Music,;
  Gamepad2,;
  Crown,;
  Award,;
  Target,;
  Users,;
  Clock,;
  Globe2,;} from 'lucide-react';import { ;
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, ;
  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles;
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale;
  Building, Factory, Camera, Video, Music, Gamepad2;
  Crown, Award, Target, Users, Clock, Globe2;
<<<<<<< HEAD

import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2028Services  } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};


=======
} from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028';
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2028Services  } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
=======
 } from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028',
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2028Services  } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';

const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',  website: 'https://ziontechgroup.com'
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const pricingTiers = [
  {
    name: 'Starter'
    price: '$299'
    period: '/month'
    description: 'Perfect for small businesses and startups'
    features: [
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Phone,
  Zap,
  DollarSign,
  Shield,
  Mail,
  MapPin,
  Rocket,
  Brain,
  Sparkles,
  Globe,
  Atom,
  Heart,
  Leaf,
  Car,
  GraduationCap,
  Scale,
  Building,
  Factory,
  Camera,
  Video,
  Music,
  Gamepad2,
  Crown,
  Award,
  Target,
  Users,

  Clock,;
  Globe2,;} from 'lucide-react';import {
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, ;


  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles;
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale;
  Building, Factory, Camera, Video, Music, Gamepad2;
  Crown, Award, Target, Users, Clock, Globe2;
import UltraFuturisticNavigation2028 from '../components / layout / UltraFuturisticNavigation2028';
import UltraFuturisticFooter2028 from '../components / layout / UltraFuturisticFooter2028';
import { futuristic2028Services } from '../data / 2028 - futuristic - innovations';
import { emergingTech2028Services } from '../data / 2028 - emerging - tech - services';
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',  website: 'https://ziontechgroup.com';
}
;
const pricing_tiers = [;
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small businesses and startups',
<<<<<<< HEAD
    features: [;
=======
features: [;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Basic AI integration',
      'Standard support',
      'Core features access',
      'Email support',
      'Basic analytics',
      'Mobile app access',
    ],
    popular: false,
    color: 'from - blue - 600 to - cyan - 600',
    cta: 'Get Started',
    href: '/contact',
  },  {      'Basic AI integration_standard support_core features access_email support_basic analytics_mobile app access';
    ];
    popular: false
    color: 'from-blue-600 to-cyan-600'
    cta: 'Get Started'
    href: '/contact'
  }
    name: 'Professional'
    price: '$999'
    period: '/month'
    description: 'Ideal for growing businesses and enterprises'
    features: [
      'Advanced AI capabilities'
      'Priority support'
      'Full feature access'
      'Phone & email support'
      'Advanced analytics'
      'API access'
      'Custom integrations'
      'Training & onboarding'
    ]
    popular: true
    color: 'from-purple-600 to-pink-600'
    cta: 'Start Free Trial'
    href: '/contact'
  },  {      'Advanced AI capabilitiesPriority supportFull feature accessPhone & email supportAdvanced analyticsAPI accessCustom integrationsTraining & onboarding'
    ];
    popular: true
    color: 'from-purple-600 to-pink-600'
    cta: 'Start Free Trial'
    href: '/contact'
  }
    name: 'Enterprise'
    price: 'Custom'
    period: ''
    description: 'Tailored solutions for large organizations'
    features: [
      'Custom AI development'
      'Dedicated support team'
      'White-label solutions'
      '24/7 phone support'
      'Custom analytics'
      'Full API access'
      'Custom integrations'
      'Dedicated account manager'
      'SLA guarantees'
      'On-premise deployment'
    ]
    popular: false
    color: 'from-indigo-600 to-purple-600'
    cta: 'Contact Sales'
    href: '/contact'
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',  website: 'https://ziontechgroup && ziontechgroup.com';
};
      'Basic AI integrationStandard supportCore features accessEmail supportBasic analyticsMobile app access'
    ];
    popular: false,
    color: 'from - blue - 600 to - cyan - 600',
    cta: 'Get Started',
<<<<<<< HEAD

    href: '/contact';
  }

=======
    href: '/contact';
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    name: 'Professional',
    price: '$999',
    period: '/month',
    description: 'Ideal for growing businesses and enterprises',
<<<<<<< HEAD

    features: [;
=======
features: [;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Advanced AI capabilities',
      'Priority support',
      'Full feature access',
      'Phone & email support',
      'Advanced analytics',
      'API access',
      'Custom integrations',
      'Training & onboarding',
    ],
    popular: true,
    color: 'from - purple - 600 to - pink - 600',
    cta: 'Start Free Trial',
    href: '/contact',
  },  {      'Advanced AI capabilities_priority support_full feature access_phone & email support_advanced analyticsAPI access_custom integrations_training & onboarding';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ];
    popular: true,
    color: 'from - purple - 600 to - pink - 600',
    cta: 'Start Free Trial',
<<<<<<< HEAD

    href: '/contact';
  }

=======
    href: '/contact';
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
<<<<<<< HEAD

    features: [;
=======
features: [;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Custom AI development',
      'Dedicated support team',
      'White - label solutions',
      '24 / 7 phone support',
      'Custom analytics',
      'Full API access',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantees',
      'On - premise deployment',
    ],
    popular: false,
    color: 'from - indigo - 600 to - purple - 600',
    cta: 'Contact Sales',
    href: '/contact',
  }, ];      'Custom AI development_dedicated support team_white - label solutions24 / 7 phone support_custom analytics_full API access_custom integrations_dedicated account manager';
      'SLA guarantees_on - premise deployment';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ];
    popular: false,
    color: 'from - indigo - 600 to - purple - 600',
    cta: 'Contact Sales',
    href: '/contact';
  }
<<<<<<< HEAD

    category: '🚀 2028 Futuristic Innovations',
    services: futuristic2028Services.slice(0, 6)
  };

=======
    category: '🚀 2028 Futuristic Innovations',
    services: futuristic2028Services.slice(0, 6)
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {
    category: '⚛️ Quantum & Advanced Tech'
    services: futuristic2028Services.filter(s => s.category.includes('Quantum')).slice(0, 4)
  }
  {
    category: '🤖 AI & Machine Learning'
    services: emergingTech2028Services.filter(s => s.category.includes('AI')).slice(0, 4)
const service_pricing = [;
  {
    category: '🚀 2028 Futuristic Innovations',
    services: futuristic2028Services.slice (0, 6),
  },
  {
    category: '🏙️ Smart City & Infrastructure',
    services: emergingTech2028Services;
      .filter (
        string =>;
          s.category.includes ('Smart City') ||;
          s.category.includes ('Infrastructure'));
      .slice (0, 4),
  },
  {
    category: '⚛️ Quantum & Advanced Tech',
    services: futuristic2028Services;
      .filter (string => s.category.includes ('Quantum'));
      .slice (0, 4),
  },
  {
    category: '🤖 AI & Machine Learning',
    services: emergingTech2028Services;
      .filter (string => s.category.includes ('AI'));
      .slice (0, 4),
  }, ];  {
    category: '🏙️ Smart City & Infrastructure',
    services: emergingTech2028Services.filter (string => s.category.includes ('Smart City') || s.category.includes ('Infrastructure')).slice (0, 4);
  }
  {
    category: '⚛️ Quantum & Advanced Tech',
    services: futuristic2028Services.filter (string => s.category.includes ('Quantum')).slice (0, 4);
  }
  {
    category: '🤖 AI & Machine Learning',
    services: emergingTech2028Services.filter (string => s.category.includes ('AI')).slice (0, 4);
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    popular: false,;
    color: 'from-indigo-600 to-purple-600',;
    cta: 'Contact Sales',;
    href: '/contact';
  }
const servicePricing = [;
  {;
    category: '🚀 2028 Futuristic Innovations',;
    services: futuristic2028Services && futuristic2028Services.slice(0, 6),;
  },;
  {;
    category: '🏙️ Smart City & Infrastructure',;
    services: emergingTech2028Services;
      .filter(;
        s =>;
          s && s.category.includes('Smart City') ||;
          s && s.category.includes('Infrastructure');
      );
      .slice(0, 4),;
  },;
  {;
    category: '⚛️ Quantum & Advanced Tech',;
    services: futuristic2028Services;
      .filter(s => s && s.category.includes('Quantum'));
      .slice(0, 4),;
  },;
  {;
    category: '🤖 AI & Machine Learning',;
    services: emergingTech2028Services;
      .filter(s => s && s.category.includes('AI'));
      .slice(0, 4),;
  },];  {;
    category: '🏙️ Smart City & Infrastructure',;
    services: emergingTech2028Services && emergingTech2028Services.filter(s => s && s.category.includes('Smart City') || s && s.category.includes('Infrastructure')).slice(0, 4);
  };
  {;
    category: '⚛️ Quantum & Advanced Tech',;
    services: futuristic2028Services && futuristic2028Services.filter(s => s && s.category.includes('Quantum')).slice(0, 4);
  };
  {;
    category: '🤖 AI & Machine Learning',;
    services: emergingTech2028Services && emergingTech2028Services.filter(s => s && s.category.includes('AI')).slice(0, 4);
  }
<<<<<<< HEAD
<<<<<<< HEAD
];

=======
=======

];




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default function Revolutionary2028Pricing() {

  return (

=======
];
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function Revolutionary2028Pricing() {
  return (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <>
      <Head>
        <title>2028 Revolutionary Pricing - Zion Tech Group</title>
        <meta name="description" content="Competitive pricing for our cutting-edge 2028 services. Transparent pricing with flexible plans for AI, quantum computing, and futuristic technology solutions." />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <meta name="keywords" content="2028 pricing, AI services pricing, quantum computing pricing, technology pricing, Zion Tech Group pricing" />
        <meta property="og:title" content="2028 Revolutionary Pricing - Zion Tech Group" />
        <meta property="og:description" content="Competitive pricing for our cutting-edge 2028 services with transparent plans and flexible options." />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2028-pricing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2028-pricing" />
<<<<<<< HEAD

      </Head>


=======
      </Head>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <UltraFuturisticNavigation2028 />
          href='https://ziontechgroup && ziontechgroup.com/revolutionary-2028-pricing'
        />      </Head>        <meta name="description" content="Competitive pricing for our cutting-edge 2028 services. Transparent pricing with flexible plans for AI, quantum computing, and futuristic technology solutions." />;
        <meta name="keywords" content="2028 pricing, AI services pricing, quantum computing pricing, technology pricing, Zion Tech Group pricing" />;
        <meta property="og:title" content="2028 Revolutionary Pricing - Zion Tech Group" />;
        <meta property="og:description" content="Competitive pricing for our cutting-edge 2028 services with transparent plans and flexible options." />;
        <meta property="og:url" content="https://ziontechgroup && ziontechgroup.com/revolutionary-2028-pricing" />;
        <meta property="og:type" content="website" />;
        <link rel="canonical" href="https://ziontechgroup && ziontechgroup.com/revolutionary-2028-pricing" />;
      <UltraFuturisticNavigation2028 />;
      {/* Hero Section */}
<<<<<<< HEAD


=======
        <div className='absolute inset-0'>;
          <div className='absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse'></div>;
          <div className='absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>;
          <div className='absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000'></div>;
        </div>;
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='space-y-8'        {/* Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<<<<<<< HEAD

export default function Revolutionary2028Pricing() {_return (_<>
      <Head>
        <title>2028 Revolutionary Pricing - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Competitive pricing for our cutting-edge 2028 services. Transparent pricing with flexible plans for AI, quantum computing, and futuristic technology solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;2028 pricing, AI services pricing, quantum computing pricing, technology pricing, Zion Tech Group pricing&quot; />
        <meta property=&quot;og:title&quot; content=&quot;2028 Revolutionary Pricing - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Competitive pricing for our cutting-edge 2028 services with transparent plans and flexible options.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/revolutionary-2028-pricing&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/revolutionary-2028-pricing&quot; />
      </Head>

      <UltraFuturisticNavigation2028 />

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 overflow-hidden&quot;>
        {/* Animated Background */}
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse&quot;></div>
          <div className=&quot;absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000&quot;></div>
          <div className=&quot;absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000&quot;></div>
        </div>

        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
<div className="absolute inset-0">;
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>;
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>;
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>;
        </div>;
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='space-y-8'>;
            <div className='inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-3 text-purple-300 text-sm'>;
              <DollarSign className='w-4 h-4' />;
              <span>Transparent Pricing</span>;
            </div>;
            <h1 className='text-5xl md:text-7xl font-bold text-white leading-tight'>;
              <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>;
                Revolutionary;
              </span>;
              <br />;
              <span className='text-white'>2028 Pricing</span>;
            </h1>;
            <p className='text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed'>;
              Experience cutting-edge technology at competitive prices. Our;
              transparent pricing model ensures you get maximum value for your;
              investment in the future.;
            </p>;
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>;
=======
            className='space-y-8'
          >
            <div className='inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-3 text-purple-300 text-sm'>
              <DollarSign className='w-4 h-4' />
              <span>Transparent Pricing</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold text-white leading-tight'>
              <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
                Revolutionary
              </span>
              <br />
              <span className='text-white'>2028 Pricing</span>
            </h1>
            <p className='text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed'>
              Experience cutting-edge technology at competitive prices. Our
              transparent pricing model ensures you get maximum value for your
              investment in the future.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2'>;
                <span>Get Started</span>;
                <ArrowRight className='w-5 h-5' />;
              </Link>;
              <Link
                href='/2028-services-showcase'
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-3 text-purple-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>Transparent Pricing</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">2028 Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
              Experience cutting-edge technology at competitive prices. Our transparent pricing model
              ensures you get maximum value for your investment in the future.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className='px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2'>;
                <span>View Services</span>;
                <Rocket className='w-5 h-5' />              </Link>;
            </div>;
            {/* Pricing Stats */}          >;
            <div className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-3 text-purple-300 text-sm">;
              <DollarSign className="w-4 h-4" />;
              <span>Transparent Pricing</span>;
            </div>;
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">;
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">;
                Revolutionary;
              </span>;
              <br />;
              <span className="text-white">2028 Pricing</span>;
            </h1>;
            <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">;
              Experience cutting-edge technology at competitive prices. Our transparent pricing model ;
              ensures you get maximum value for your investment in the future.;
            </p>;
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">;
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2">;
                <span>Get Started</span>;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
              <Link
                href="/2028-services-showcase"
<<<<<<< HEAD


                className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2">;
=======
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">30%</div>
                <div className="text-purple-300">Lower than Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">99.9%</div>
                <div className="text-blue-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">24/7</div>
                <div className="text-pink-300">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">30-Day</div>
                <div className="text-cyan-300">Free Trial</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <span>View Services</span>;
                <Rocket className="w-5 h-5" />;
              </Link>;
            </div>;
            {/* Pricing Stats */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 pt-16'>;
              <div className='text-center'>;
                <div className='text-3xl font-bold text-purple-400'>30%</div>;
                <div className='text-purple-300'>Lower than Market</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-3xl font-bold text-blue-400'>99 && 99.9%</div>;
                <div className='text-blue-300'>Uptime Guarantee</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-3xl font-bold text-pink-400'>24/7</div>;
                <div className='text-pink-300'>Expert Support</div>;
              </div>;
              <div className='text-center'>;
                <div className='text-3xl font-bold text-cyan-400'>30-Day</div>;
                <div className='text-cyan-300'>Free Trial</div>              </div>              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-blue-400">99 && 99.9%</div>;
                <div className="text-blue-300">Uptime Guarantee</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-pink-400">24/7</div>;
                <div className="text-pink-300">Expert Support</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-cyan-400">30-Day</div>;
                <div className="text-cyan-300">Free Trial</div>;
              </div>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
      {/* Pricing Tiers */}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Plan</span>
            </h2>
<<<<<<< HEAD

=======
=======
      {/* Pricing Tiers */}
      <section className='py-20 bg-black/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Choose Your{' '}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                Plan
              </span>
            </h2>
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>
              Flexible pricing plans designed to scale with your business. Start
              small and grow with us.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingTiers.map((tier, index) => (            </h2>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your business. Start small and grow with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>;
                Plan;
              </span>;
            </h2>;
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>;
              Flexible pricing plans designed to scale with your business. Start;
              small and grow with us.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingTiers && pricingTiers.map((tier, index) => (            </h2>;
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">;
              Flexible pricing plans designed to scale with your business. Start small and grow with us.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricingTiers && pricingTiers.map((tier, index) => (;
              <motion&& motion.div
                key={tier && tier.name}
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                className={`relative ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <div className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2'>
                      <Crown className='w-4 h-4' />                      <span>Most Popular</span>                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                      <Crown className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                <div
                  className={`relative p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-2 ${tier.popular ? 'border-purple-500/60' : 'border-purple-500/30'} rounded-2xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105`}
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='relative z-10'>
                    <h3 className='text-2xl font-bold text-white mb-2'>
                      {tier.name}
                    </h3>
                    <p className='text-purple-300 mb-6'>{tier.description}</p>
                    <div className='mb-8'>
                      <div className='flex items-baseline space-x-2'>
                        <span className='text-4xl font-bold text-white'>
=======
;
export default /**
 * Revolutionary2028Pricing - Function description
 */
function Revolutionary2028Pricing() {
  return (
    <>;
      <Head>;
        <title > 2028 Revolutionary Pricing - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Competitive pricing for our cutting - edge 2028 services. Transparent pricing with flexible plans for AI, quantum computing, and futuristic technology solutions.';
        />;
        <meta;
          name='keywords';
          content='2028 pricing, AI services pricing, quantum computing pricing, technology pricing, Zion Tech Group pricing';
        />;
        <meta;
          property='og:title';
          content='2028 Revolutionary Pricing - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Competitive pricing for our cutting - edge 2028 services with transparent plans and flexible options.';
        />;
        <meta;
          property='og:url';
          content='https://ziontechgroup.com / revolutionary - 2028 - pricing';
        />;
        <meta property='og:type' content='website' />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / revolutionary - 2028 - pricing';
        />      </Head>        <meta name="description" content="Competitive pricing for our cutting - edge 2028 services. Transparent pricing with flexible plans for AI, quantum computing, and futuristic technology solutions." />;
        <meta name="keywords" content="2028 pricing, AI services pricing, quantum computing pricing, technology pricing, Zion Tech Group pricing" />;
        <meta property="og:title" content="2028 Revolutionary Pricing - Zion Tech Group" />;
        <meta property="og:description" content="Competitive pricing for our cutting - edge 2028 services with transparent plans and flexible options." />;
        <meta property="og:url" content="https://ziontechgroup.com / revolutionary - 2028 - pricing" />;
        <meta property="og:type" content="website" />;
        <link rel="canonical" href="https://ziontechgroup.com / revolutionary - 2028 - pricing" />;
      <UltraFuturisticNavigation2028 />;
      {/* Hero Section */}
      <section className='relative min - h-screen flex items - center justify - center bg - gradient - to - br from - black via - purple - 900 / 20 to - blue - 900 / 20 overflow - hidden'>;
        {/* Animated Background */}
        <div className='absolute inset - 0'>;
          <div className='absolute top - 0 left - 0 w - 96 h - 96 bg - purple - 500 / 10 rounded - full blur - 3xl animate - pulse'></div>;
          <div className='absolute top - 1/2 right - 0 w - 96 h - 96 bg - blue - 500 / 10 rounded - full blur - 3xl animate - pulse delay - 1000'></div>;
          <div className='absolute bottom - 0 left - 1/2 w - 96 h - 96 bg - pink - 500 / 10 rounded - full blur - 3xl animate - pulse delay - 2000'></div>;
        </div>;
        <div className='relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='space - y-8'        {/* Animated Background */}
        <div className="absolute inset - 0">;
          <div className="absolute top - 0 left - 0 w - 96 h - 96 bg - purple - 500 / 10 rounded - full blur - 3xl animate - pulse"></div>;
          <div className="absolute top - 1/2 right - 0 w - 96 h - 96 bg - blue - 500 / 10 rounded - full blur - 3xl animate - pulse delay - 1000"></div>;
          <div className="absolute bottom - 0 left - 1/2 w - 96 h - 96 bg - pink - 500 / 10 rounded - full blur - 3xl animate - pulse delay - 2000"></div>;
        </div>;
        <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='space - y-8';
          >;
            <div className='inline - flex items - center space - x-2 bg - purple - 900 / 30 border border - purple - 500 / 30 rounded - full px - 6 py - 3 text - purple - 300 text - sm'>;
              <DollarSign className='w - 4 h - 4' />;
              <span > Transparent Pricing</span>;
            </div>;
            <h1 className='text - 5xl md:text - 7xl font - bold text - white leading - tight'>;
              <span className='bg - gradient - to - r from - purple - 400 via - pink - 400 to - blue - 400 bg - clip - text text - transparent'>;
                Revolutionary;
              </span>;
              <br />;
              <span className='text - white'>2028 Pricing</span>;
            </h1>;
            <p className='text - xl md:text - 2xl text - purple - 200 max - w-4xl mx - auto leading - relaxed'>;
              Experience cutting - edge technology at competitive prices. Our;
              transparent pricing model ensures you get maximum value for your;
              investment in the future.;
            </p>;
            <div className='flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6'>;
              <Link;
                href='/contact';
                className='px - 8 py - 4 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - xl hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 shadow - 2xl hover:shadow - purple - 500 / 25 flex items - center space - x-2';
              >;
                <span > Get Started</span>;
                <ArrowRight className='w - 5 h - 5' />;
              </Link>;
              <Link;
                href='/2028 - services - showcase';
                className='px - 8 py - 4 border border - purple - 500 / 30 text - purple - 300 rounded - xl hover:bg - purple - 900 / 30 transition - all duration - 300 flex items - center space - x-2';
              >;
                <span > View Services</span>;
                <Rocket className='w - 5 h - 5' />              </Link>;
            </div>;
            {/* Pricing Stats */}          >;
            <div className="inline - flex items - center space - x-2 bg - purple - 900 / 30 border border - purple - 500 / 30 rounded - full px - 6 py - 3 text - purple - 300 text - sm">;
              <DollarSign className="w - 4 h - 4" />;
              <span > Transparent Pricing</span>;
            </div>;
            <h1 className="text - 5xl md:text - 7xl font - bold text - white leading - tight">;
              <span className="bg - gradient - to - r from - purple - 400 via - pink - 400 to - blue - 400 bg - clip - text text - transparent">;
                Revolutionary;
              </span>;
              <br />;
              <span className="text - white">2028 Pricing</span>;
            </h1>;
            <p className="text - xl md:text - 2xl text - purple - 200 max - w-4xl mx - auto leading - relaxed">;
              Experience cutting - edge technology at competitive prices. Our transparent pricing model;
              ensures you get maximum value for your investment in the future.;
            </p>;
            <div className="flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6">;
              <Link;
                href="/contact";
                className="px - 8 py - 4 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - xl hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 shadow - 2xl hover:shadow - purple - 500 / 25 flex items - center space - x-2";
              >;
                <span > Get Started</span>;
                <ArrowRight className="w - 5 h - 5" />;
              </Link>;
              <Link;
                href="/2028 - services - showcase";
                className="px - 8 py - 4 border border - purple - 500 / 30 text - purple - 300 rounded - xl hover:bg - purple - 900 / 30 transition - all duration - 300 flex items - center space - x-2";
              >;
                <span > View Services</span>;
                <Rocket className="w - 5 h - 5" />;
              </Link>;
            </div>;
            {/* Pricing Stats */}
            <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 8 pt - 16'>;
              <div className='text - center'>;
                <div className='text - 3xl font - bold text - purple - 400'>30%</div>;
                <div className='text - purple - 300'>Lower than Market</div>;
              </div>;
              <div className='text - center'>;
                <div className='text - 3xl font - bold text - blue - 400'>99.9%</div>;
                <div className='text - blue - 300'>Uptime Guarantee</div>;
              </div>;
              <div className='text - center'>;
                <div className='text - 3xl font - bold text - pink - 400'>24 / 7</div>;
                <div className='text - pink - 300'>Expert Support</div>;
              </div>;
              <div className='text - center'>;
                <div className='text - 3xl font - bold text - cyan - 400'>30 - Day</div>;
                <div className='text - cyan - 300'>Free Trial</div>              </div>              </div>;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - blue - 400">99.9%</div>;
                <div className="text - blue - 300">Uptime Guarantee</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - pink - 400">24 / 7</div>;
                <div className="text - pink - 300">Expert Support</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - cyan - 400">30 - Day</div>;
                <div className="text - cyan - 300">Free Trial</div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Pricing Tiers */}
      <section className='py - 20 bg - black / 50'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Choose Your{' '}
              <span className='bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent'>;
                Plan;
              </span>;
            </h2>;
            <p className='text - xl text - purple - 200 max - w-3xl mx - auto'>;
              Flexible pricing plans designed to scale with your business. Start;
              small and grow with us.;
            </p>;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            {pricing_tiers.map ((tier, index) => (            </h2>;
            <p className="text - xl text - purple - 200 max - w-3xl mx - auto">;
              Flexible pricing plans designed to scale with your business. Start small and grow with us.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            {pricing_tiers.map ((tier, index) => (
              <motion.div;
                key={tier.name}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${tier.popular ? 'scale - 105' : ''}`}
              >;
                {tier.popular && (
                  <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                    <div className='bg - gradient - to - r from - purple - 600 to - pink - 600 text - white px - 6 py - 2 rounded - full text - sm font - medium flex items - center space - x-2'>;
                      <Crown className='w - 4 h - 4' />                      <span > Most Popular</span>                  <div className="absolute -top - 4 left - 1/2 transform -translate - x-1 / 2">;
                    <div className="bg - gradient - to - r from - purple - 600 to - pink - 600 text - white px - 6 py - 2 rounded - full text - sm font - medium flex items - center space - x-2">;
                      <Crown className="w - 4 h - 4" />;
                      <span > Most Popular</span>;
                    </div>;
                  </div>)}
                <div;
                  className={`relative p - 8 bg - gradient - to - br from - purple - 900 / 20 to - blue - 900 / 20 border - 2 ${tier.popular ? 'border - purple - 500 / 60' : 'border - purple - 500 / 30'} rounded - 2xl hover:border - purple - 500 / 60 transition - all duration - 300 hover:transform hover:scale - 105`}
                >;
                  <div className='absolute inset - 0 bg - gradient - to - br from - purple - 500 / 5 to - blue - 500 / 5 rounded - 2xl opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300'></div>;
                  <div className='relative z - 10'>;
                    <h3 className='text - 2xl font - bold text - white mb - 2'>;
                      {tier.name}
                    </h3>;
                    <p className='text - purple - 300 mb - 6'>{tier.description}</p>;
                    <div className='mb - 8'>;
                      <div className='flex items - baseline space - x-2'>;
                        <span className='text - 4xl font - bold text - white'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          {tier.price}
                        </span>
                        <span className='text-purple-300'>{tier.period}</span>
                      </div>
                      {tier.name === 'Enterprise' && (
<<<<<<< HEAD
                        <p className='text-sm text-purple-300 mt-2'>
                          Contact us for custom pricing
                        </p>
                      )}
                    </div>
                    <ul className='space-y-3 mb-8'>
                      {tier.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
=======
                  className={`relative p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-2 ${tier && tier.popular ? 'border-purple-500/60' : 'border-purple-500/30'} rounded-2xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105`}>;
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>;
                  <div className='relative z-10'>;
                    <h3 className='text-2xl font-bold text-white mb-2'>;
                      {tier && tier.name}
                    </h3>;
                    <p className='text-purple-300 mb-6'>{tier && tier.description}</p>;
                    <div className='mb-8'>;
                      <div className='flex items-baseline space-x-2'>;
                        <span className='text-4xl font-bold text-white'>;
                          {tier && tier.price}
                        </span>;
                        <span className='text-purple-300'>{tier && tier.period}</span>;
                      </div>;
                      {tier && tier.name === 'Enterprise' && (;
                        <p className='text-sm text-purple-300 mt-2'>;
                          Contact us for custom pricing;
                        </p>;
                      )}
                    </div>;
                    <ul className='space-y-3 mb-8'>;
                      {tier && tier.features.map((feature, featureIndex) => (;
                        <li
                          key={featureIndex}
                          className='flex items-center space-x-3'>;
                          <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />;
                          <span className='text-purple-200'>{feature}</span>                        </li>;
                    <div className="mb-8">;
                      <div className="flex items-baseline space-x-2">;
                        <span className="text-4xl font-bold text-white">{tier && tier.price}</span>;
                        <span className="text-purple-300">{tier && tier.period}</span>;
                      </div>;
                      {tier && tier.name === 'Enterprise' && (;
                        <p className="text-sm text-purple-300 mt-2">Contact us for custom pricing</p>;
                className={`relative ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                      <Crown className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
<<<<<<< HEAD
<div className={`relative p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-2 ${tier.popular ? 'border-purple-500/60' : 'border-purple-500/30'} rounded-2xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-purple-300 mb-6">{tier.description}</p>
=======
                <div
                  className={`relative p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-2 ${tier.popular ? 'border-purple-500/60' : 'border-purple-500/30'} rounded-2xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105`}
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='relative z-10'>
                    <h3 className='text-2xl font-bold text-white mb-2'>
                      {tier.name}
                    </h3>
                    <p className='text-purple-300 mb-6'>{tier.description}</p>
                    <div className='mb-8'>
                      <div className='flex items-baseline space-x-2'>
                        <span className='text-4xl font-bold text-white'>
                          {tier.price}
                        </span>
                        <span className='text-purple-300'>{tier.period}</span>
                      </div>
                      {tier.name === 'Enterprise' && (
                        <p className='text-sm text-purple-300 mt-2'>
                          Contact us for custom pricing
                        </p>
                      )}
                    </div>
                    <ul className='space-y-3 mb-8'>
                      {tier.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          className='flex items-center space-x-3'
                        >
                          <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />
                          <span className='text-purple-200'>{feature}</span>                        </li>
<<<<<<< HEAD

=======



=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    <div className="mb-8">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-white">{tier.price}</span>
                        <span className="text-purple-300">{tier.period}</span>
                      </div>
                      {tier.name === 'Enterprise' && (
                        <p className="text-sm text-purple-300 mt-2">Contact us for custom pricing</p>
                      )}
                    </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <ul className="space-y-3 mb-8">;
                      {tier && tier.features.map((feature, featureIndex) => (;
                        <li key={featureIndex} className="flex items-center space-x-3">;
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />;
                          <span className="text-purple-200">{feature}</span>;
                        </li>;
                      ))}
<<<<<<< HEAD
                    </ul>;
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <Link
                      href={tier && tier.href}
                      className={`block w-full text-center px-6 py-3 bg-gradient-to-r ${tier && tier.color} text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>;
                      {tier && tier.cta}
                    </Link>;
                  </div>;
                </div>;
              </motion && motion.div>;
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
          </div>
        </div>
      </section>

      {/* Service Pricing */}
=======
          </div>;
        </div>;
      </section>;
      {/* Service Pricing */}
      <section className="py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
=======
                    </ul>
=======

                        </li>

                      ))}
                    </ul>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    <Link
                      href={tier.href}
                      className={`block w-full text-center px-6 py-3 bg-gradient-to-r ${tier.color} text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Service Pricing */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <section className='py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Service{' '}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                Pricing
              </span>
            </h2>
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>
              Detailed pricing for our individual services. Mix and match to
              create your perfect solution.            </p>
          </div>
          {servicePricing.map((category, categoryIndex) => (      <section className="py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Detailed pricing for our individual services. Mix and match to create your perfect solution.
<<<<<<< HEAD
          </div>
          {servicePricing.map((category, categoryIndex) => (

=======

=======
            </p>
          </div>
          {servicePricing.map((category, categoryIndex) => (
<<<<<<< HEAD
                        <p className='text - sm text - purple - 300 mt - 2'>;
                          Contact us for custom pricing;
                        </p>)}
                    </div>;
                    <ul className='space - y-3 mb - 8'>;
                      {tier.features.map ((feature, feature_index) => (
                        <li;
                          key={feature_index}
                          className='flex items - center space - x-3';
                        >;
                          <CheckCircle className='w - 5 h - 5 text - green - 400 flex - shrink - 0' />;
                          <span className='text - purple - 200'>{feature}</span>                        </li>;
                    <div className="mb - 8">;
                      <div className="flex items - baseline space - x-2">;
                        <span className="text - 4xl font - bold text - white">{tier.price}</span>;
                        <span className="text - purple - 300">{tier.period}</span>;
                      </div>;
                      {tier.name === 'Enterprise' && (
                        <p className="text - sm text - purple - 300 mt - 2">Contact us for custom pricing</p>)}
                    </div>;
                    <ul className="space - y-3 mb - 8">;
                      {tier.features.map ((feature, feature_index) => (
                        <li key={feature_index} className="flex items - center space - x-3">;
                          <CheckCircle className="w - 5 h - 5 text - green - 400 flex - shrink - 0" />;
                          <span className="text - purple - 200">{feature}</span>;
                        </li>))}
                    </ul>;
                    <Link;
                      href={tier.href}
                      className={`block w - full text - center px - 6 py - 3 bg - gradient - to - r ${tier.color} text - white rounded - lg hover:opacity - 90 transition - all duration - 300 transform hover:scale - 105`}
                    >;
                      {tier.cta}
                    </Link>;
                  </div>;
                </div>;
              </motion.div>))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
        </div>;
      </section>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Service Pricing */}
<<<<<<< HEAD


                    initial={{

=======
      <section className='py - 20 bg - gradient - to - br from - purple - 900 / 10 to - blue - 900 / 10'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Service{' '}
              <span className='bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent'>;
                Pricing;
              </span>;
            </h2>;
            <p className='text - xl text - purple - 200 max - w-3xl mx - auto'>;
              Detailed pricing for our individual services. Mix and match to;
              create your perfect solution.            </p>;
          </div>;
          {service_pricing.map ((category, category_index) => (      <section className="py - 20 bg - gradient - to - br from - purple - 900 / 10 to - blue - 900 / 10">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="text - center mb - 16">;
            <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
              Service <span className="bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent">Pricing</span>;
            </h2>;
            <p className="text - xl text - purple - 200 max - w-3xl mx - auto">;
              Detailed pricing for our individual services. Mix and match to create your perfect solution.;
          </div>;
          {service_pricing.map ((category, category_index) => (
            <div key={category.category} className='mb - 16'>;
              <h3 className='text - 3xl font - bold text - white mb - 8 text - center'>;
=======
<<<<<<< HEAD
            <div key={category.category} className='mb-16'>
              <h3 className='text-3xl font-bold text-white mb-8 text-center'>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {category.category}
              </h3>;
              <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
                {category.services.map ((service, service_index) => (
                  <motion.div;
                    key={service.id}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>;
                Pricing;
              </span>;
            </h2>;
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>;
              Detailed pricing for our individual services. Mix and match to;
              create your perfect solution.            </p>;
          </div>;
          {servicePricing && servicePricing.map((category, categoryIndex) => (      <section className="py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Service <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>;
            </h2>;
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">;
              Detailed pricing for our individual services. Mix and match to create your perfect solution.;
          </div>;
          {servicePricing && servicePricing.map((category, categoryIndex) => (;
            <div key={category && category.category} className='mb-16'>;
              <h3 className='text-3xl font-bold text-white mb-8 text-center'>;
                {category && category.category}
              </h3>;
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
                {category && category.services.map((service, serviceIndex) => (;
                  <motion&& motion.div
                    key={service && service.id}
                    initial={{
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      opacity: 0,
                      coordinate_x: service_index % 2 === 0 ? -30 : 30,
                    }}
                    whileInView={{ opacity: 1, coordinate_x: 0 }}
                    transition={{ duration: 0.6, delay: service_index * 0.1 }}
                    viewport={{ once: true }}
                    className='group relative';
                  >;
                    <div className='relative p - 6 bg - black / 40 backdrop - blur - sm border border - purple - 500 / 30 rounded - xl hover:border - purple - 500 / 60 transition - all duration - 300 hover:transform hover:scale - 105'>;
                      <div className='absolute inset - 0 bg - gradient - to - br from - purple - 500 / 5 to - blue - 500 / 5 rounded - xl opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300'></div>;
                      <div className='relative z - 10'>;
                        <div className='flex items - start justify - between mb - 4'>;
                          <div className='text - 3xl'>{service.icon}</div>;
                          <div className='text - right'>;
                            <div className='text - xl font - bold text - purple - 400'>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                              {service.price}
                            </div>;
                            <div className='text - sm text - purple - 300'>;
                              {service.period}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                            </div>;
                          </div>;
                        </div>;
                        <h4 className='text - xl font - bold text - white mb - 2'>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          {service.name}
                        </h4>;
                        <p className='text - purple - 300 mb - 4 text - sm'>;
                          {service.description}
<<<<<<< HEAD

                    className='group relative'>;
                    <div className='relative p-6 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105'>;
                      <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>;

=======
                    className='group relative'>;
                    <div className='relative p-6 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105'>;
                      <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <div className='relative z-10'>;
                        <div className='flex items-start justify-between mb-4'>;
                          <div className='text-3xl'>{service && service.icon}</div>;
                          <div className='text-right'>;
                            <div className='text-xl font-bold text-purple-400'>;
                              {service && service.price}
                            </div>;
                            <div className='text-sm text-purple-300'>;
                              {service && service.period}
                            </div>;
                          </div>;
                        </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        <h4 className='text-xl font-bold text-white mb-2'>;
                          {service && service.name}
                        </h4>;
                        <p className='text-purple-300 mb-4 text-sm'>;
                          {service && service.description}
                        </p>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        <div className='mb-4'>;
                          <div className='flex items-center space-x-2 mb-2'>;
                            <Star className='w-4 h-4 text-yellow-400' />;
                            <span className='text-white font-medium'>;
                              {service && service.rating}
                            </span>;
                            <span className='text-purple-300 text-sm'>;
                              ({service && service.reviews} reviews);
                            </span>;
                          </div>;
                          <div className='text-sm text-purple-300'>;
                            <span className='font-medium'>Setup:</span>{' '}
                            {service && service.setupTime}
                          </div>;
                        </div>;
<<<<<<< HEAD

                        <div className='flex items-center justify-between'>;

=======
                        <div className='flex items-center justify-between'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          <Link
                            href={service && service.link}
                            className='px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm'>;
                            Learn More;
                          </Link>;
                          <div className='text-right'>;
                            <div className='text-xs text-purple-300'>Trial</div>;
                            <div className='text-white font-medium'>;
                              {service && service.trialDays} days;
                            </div>                          </div>                {category && category.services.map((service, serviceIndex) => (;
                  <motion&& motion.div
                    key={service && service.id}
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div key={category.category} className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">{category.category}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                    initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0 && 0.6, delay: serviceIndex * 0 && 0.1 }}
                    viewport={{ once: true }}

                    className="group relative">;
                    <div className="relative p-6 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105">;
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>;

=======
<<<<<<< HEAD
=======
                    initial={{
                      opacity: 0
                      x: serviceIndex % 2 === 0 ? -30 : 30
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className='group relative'
                  >
                    <div className='relative p-6 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105'>
                      <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      <div className='relative z-10'>
                        <div className='flex items-start justify-between mb-4'>
                          <div className='text-3xl'>{service.icon}</div>
                          <div className='text-right'>
                            <div className='text-xl font-bold text-purple-400'>
                              {service.price}
                            </div>
                            <div className='text-sm text-purple-300'>
                              {service.period}
                            </div>
                          </div>
                        </div>
                        <h4 className='text-xl font-bold text-white mb-2'>
                          {service.name}
                        </h4>
                        <p className='text-purple-300 mb-4 text-sm'>
                          {service.description}
                        </p>
                        <div className='mb-4'>
                          <div className='flex items-center space-x-2 mb-2'>
                            <Star className='w-4 h-4 text-yellow-400' />
                            <span className='text-white font-medium'>
                              {service.rating}
                            </span>
                            <span className='text-purple-300 text-sm'>
                              ({service.reviews} reviews)
                            </span>
                          </div>
                          <div className='text-sm text-purple-300'>
                            <span className='font-medium'>Setup:</span>{' '}
                            {service.setupTime}
                          </div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <Link
                            href={service.link}
                            className='px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm'
                          >
                            Learn More
                          </Link>
                          <div className='text-right'>
                            <div className='text-xs text-purple-300'>Trial</div>
                            <div className='text-white font-medium'>
                              {service.trialDays} days
                            </div>                          </div>                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0 && 0.6, delay: serviceIndex * 0 && 0.1 }}
                    viewport={{ once: true }}
<<<<<<< HEAD
                    className="group relative">;
                    <div className="relative p-6 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105">;
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <div className="relative z-10">;
                        <div className="flex items-start justify-between mb-4">;
                          <div className="text-3xl">{service && service.icon}</div>;
                          <div className="text-right">;
                            <div className="text-xl font-bold text-purple-400">{service && service.price}</div>;
                            <div className="text-sm text-purple-300">{service && service.period}</div>;
                          </div>;
                        </div>;
<<<<<<< HEAD

                        <h4 className="text-xl font-bold text-white mb-2">{service && service.name}</h4>;
                        <p className="text-purple-300 mb-4 text-sm">{service && service.description}</p>;

=======
                        <h4 className="text-xl font-bold text-white mb-2">{service && service.name}</h4>;
                        <p className="text-purple-300 mb-4 text-sm">{service && service.description}</p>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        <div className="mb-4">;
                          <div className="flex items-center space-x-2 mb-2">;
                            <Star className="w-4 h-4 text-yellow-400" />;
                            <span className="text-white font-medium">{service && service.rating}</span>;
                            <span className="text-purple-300 text-sm">({service && service.reviews} reviews)</span>;
                          </div>;
                          <div className="text-sm text-purple-300">;
                            <span className="font-medium">Setup:</span> {service && service.setupTime}
                          </div>;
                        </div>;
<<<<<<< HEAD

                        <div className="flex items-center justify-between">;

                          <Link


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                        <div className="flex items-center justify-between">;
=======
                    className="group relative"
                  >
                    <div className="relative p-6 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-3xl">{service.icon}</div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-purple-400">{service.price}</div>
                            <div className="text-sm text-purple-300">{service.period}</div>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                        <p className="text-purple-300 mb-4 text-sm">{service.description}</p>
                        <div className="mb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-white font-medium">{service.rating}</span>
                            <span className="text-purple-300 text-sm">({service.reviews} reviews)</span>
                          </div>
                          <div className="text-sm text-purple-300">
                            <span className="font-medium">Setup:</span> {service.setupTime}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          <Link
                            href={service.link}
                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm"
                          >
                            Learn More
                          </Link>
                          <div className="text-right">
                            <div className="text-xs text-purple-300">Trial</div>
                            <div className="text-white font-medium">{service.trialDays} days</div>
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                ))}
</div>;
            </div>;
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
      </section>

      {/* Value Proposition */}
=======
        </div>;
      </section>;
      {/* Value Proposition */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Our Pricing</span>
            </h2>
=======
        </div>
      </section>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {/* Value Proposition */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <section className='py-20 bg-black/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Why Choose{' '}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                Our Pricing
              </span>
<<<<<<< HEAD

=======

        </div>;
      </section>;


=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Value Proposition */}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </h2>
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>
              We offer the best value in the market with transparent pricing and
              unmatched features.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            <motion.div            </h2>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              We offer the best value in the market with transparent pricing and unmatched features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>;
                Our Pricing;
              </span>;
            </h2>;
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>;
                        </p>;
                        <div className='mb - 4'>;
                          <div className='flex items - center space - x-2 mb - 2'>;
                            <Star className='w - 4 h - 4 text - yellow - 400' />;
                            <span className='text - white font - medium'>;
                              {service.rating}
                            </span>;
                            <span className='text - purple - 300 text - sm'>;
                              ({service.reviews} reviews);
                            </span>;
                          </div>;
                          <div className='text - sm text - purple - 300'>;
                            <span className='font - medium'>Setup:</span>{' '}
                            {service.setup_time}
                          </div>;
                        </div>;
                        <div className='flex items - center justify - between'>;
                          <Link;
                            href={service.link}
                            className='px - 4 py - 2 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 text - sm';
                          >;
                            Learn More;
                          </Link>;
                          <div className='text - right'>;
                            <div className='text - xs text - purple - 300'>Trial</div>;
                            <div className='text - white font - medium'>;
                              {service.trial_days} days;
                            </div>                          </div>                {category.services.map ((service, service_index) => (
                  <motion.div;
                    key={service.id}
                    initial={{ opacity: 0, coordinate_x: service_index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, coordinate_x: 0 }}
                    transition={{ duration: 0.6, delay: service_index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative";
                  >;
                    <div className="relative p - 6 bg - black / 40 backdrop - blur - sm border border - purple - 500 / 30 rounded - xl hover:border - purple - 500 / 60 transition - all duration - 300 hover:transform hover:scale - 105">;
                      <div className="absolute inset - 0 bg - gradient - to - br from - purple - 500 / 5 to - blue - 500 / 5 rounded - xl opacity - 0 group - hover:opacity - 100 transition - opacity duration - 300"></div>;
                      <div className="relative z - 10">;
                        <div className="flex items - start justify - between mb - 4">;
                          <div className="text - 3xl">{service.icon}</div>;
                          <div className="text - right">;
                            <div className="text - xl font - bold text - purple - 400">{service.price}</div>;
                            <div className="text - sm text - purple - 300">{service.period}</div>;
                          </div>;
                        </div>;
                        <h4 className="text - xl font - bold text - white mb - 2">{service.name}</h4>;
                        <p className="text - purple - 300 mb - 4 text - sm">{service.description}</p>;
                        <div className="mb - 4">;
                          <div className="flex items - center space - x-2 mb - 2">;
                            <Star className="w - 4 h - 4 text - yellow - 400" />;
                            <span className="text - white font - medium">{service.rating}</span>;
                            <span className="text - purple - 300 text - sm">({service.reviews} reviews)</span>;
                          </div>;
                          <div className="text - sm text - purple - 300">;
                            <span className="font - medium">Setup:</span> {service.setup_time}
                          </div>;
                        </div>;
                        <div className="flex items - center justify - between">;
                          <Link;
                            href={service.link}
                            className="px - 4 py - 2 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - lg hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 text - sm";
                          >;
                            Learn More;
                          </Link>;
                          <div className="text - right">;
                            <div className="text - xs text - purple - 300">Trial</div>;
                            <div className="text - white font - medium">{service.trial_days} days</div>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </motion.div>))}
              </div>;
            </div>))}
        </div>;
      </section>;
      {/* Value Proposition */}
      <section className='py - 20 bg - black / 50'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 16'>;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Why Choose{' '}
              <span className='bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent'>;
                Our Pricing;
              </span>;
            </h2>;
            <p className='text - xl text - purple - 200 max - w-3xl mx - auto'>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              We offer the best value in the market with transparent pricing and;
              unmatched features.;
            </p>;
          </div>;
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              className="text-center p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl"
            >
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              className='text-center p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            >
              <Target className='w-16 h-16 text-green-400 mx-auto mb-6' />
              <h3 className='text-2xl font-bold text-white mb-4'>
                Competitive Pricing
              </h3>
              <p className='text-purple-300 mb-6'>
                Our prices are 30% lower than market average while providing
                superior technology and features.
              </p>
              <div className='text-3xl font-bold text-green-400'>30%</div>
              <div className='text-purple-300'>Lower than Market</div>            </motion.div>            >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <Target className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Pricing</h3>
              <p className="text-purple-300 mb-6">
                Our prices are 30% lower than market average while providing
                superior technology and features.
              </p>
              <div className="text-3xl font-bold text-green-400">30%</div>
              <div className="text-purple-300">Lower than Market</div>
            </motion.div>
            <motion.div
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className='text-center p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl'>;
              <Target className='w-16 h-16 text-green-400 mx-auto mb-6' />;
              <h3 className='text-2xl font-bold text-white mb-4'>;
                Competitive Pricing;
              </h3>;
              <p className='text-purple-300 mb-6'>;
                Our prices are 30% lower than market average while providing;
                superior technology and features.;
              </p>;
              <div className='text-3xl font-bold text-green-400'>30%</div>;
              <div className='text-purple-300'>Lower than Market</div>            </motion && motion.div>            >;
              <Target className="w-16 h-16 text-green-400 mx-auto mb-6" />;
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Pricing</h3>;
              <p className="text-purple-300 mb-6">;
                Our prices are 30% lower than market average while providing ;
                superior technology and features.;
              </p>;
              <div className="text-3xl font-bold text-green-400">30%</div>;
              <div className="text-purple-300">Lower than Market</div>;
            </motion && motion.div>;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              className="text-center p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl"
            >
=======
              className='text-center p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            >
              <Shield className='w-16 h-16 text-blue-400 mx-auto mb-6' />
              <h3 className='text-2xl font-bold text-white mb-4'>
                No Hidden Costs
              </h3>
              <p className='text-blue-300 mb-6'>
                Transparent pricing with no surprise fees. What you see is what
                you pay, with clear value for every dollar.
              </p>
              <div className='text-3xl font-bold text-blue-400'>100%</div>
              <div className='text-blue-300'>Transparent Pricing</div>            </motion.div>            >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">No Hidden Costs</h3>
              <p className="text-blue-300 mb-6">
                Transparent pricing with no surprise fees. What you see is what you pay
                with clear value for every dollar.
              </p>
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-blue-300">Transparent Pricing</div>
            </motion.div>
            <motion.div
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className='text-center p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl'>;
              <Shield className='w-16 h-16 text-blue-400 mx-auto mb-6' />;
              <h3 className='text-2xl font-bold text-white mb-4'>;
                No Hidden Costs;
              </h3>;
              <p className='text-blue-300 mb-6'>;
                Transparent pricing with no surprise fees. What you see is what;
                you pay, with clear value for every dollar.;
              </p>;
              <div className='text-3xl font-bold text-blue-400'>100%</div>;
              <div className='text-blue-300'>Transparent Pricing</div>            </motion && motion.div>            >;
              <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />;
              <h3 className="text-2xl font-bold text-white mb-4">No Hidden Costs</h3>;
              <p className="text-blue-300 mb-6">;
                Transparent pricing with no surprise fees. What you see is what you pay,;
                with clear value for every dollar.;
              </p>;
              <div className="text-3xl font-bold text-blue-400">100%</div>;
              <div className="text-blue-300">Transparent Pricing</div>;
            </motion && motion.div>;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.6, delay: 0 && 0.4 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center p-8 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              className="text-center p-8 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl"
            >
=======
              className='text-center p-8 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            >
              <Award className='w-16 h-16 text-pink-400 mx-auto mb-6' />
              <h3 className='text-2xl font-bold text-white mb-4'>
                Premium Quality
              </h3>
              <p className='text-pink-300 mb-6'>
                Enterprise-grade technology with premium support and features
                that justify every penny of investment.
              </p>
              <div className='text-3xl font-bold text-pink-400'>5x</div>
              <div className='text-pink-300'>ROI Guarantee</div>            </motion.div>            >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <Award className="w-16 h-16 text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Premium Quality</h3>
              <p className="text-pink-300 mb-6">
                Enterprise-grade technology with premium support and features
                that justify every penny of investment.
              </p>
              <div className="text-3xl font-bold text-pink-400">5x</div>
              <div className="text-pink-300">ROI Guarantee</div>
            </motion.div>
          </div>
        </div>
      </section>
<<<<<<< HEAD


              className='text-center p-8 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl'>;
=======
<<<<<<< HEAD
className='text-center p-8 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Award className='w-16 h-16 text-pink-400 mx-auto mb-6' />;
              <h3 className='text-2xl font-bold text-white mb-4'>;
                Premium Quality;
              </h3>;
              <p className='text-pink-300 mb-6'>;
                Enterprise-grade technology with premium support and features;
                that justify every penny of investment.;
              </p>;
              <div className='text-3xl font-bold text-pink-400'>5x</div>;
              <div className='text-pink-300'>ROI Guarantee</div>            </motion && motion.div>            >;
              <Award className="w-16 h-16 text-pink-400 mx-auto mb-6" />;
              <h3 className="text-2xl font-bold text-white mb-4">Premium Quality</h3>;
              <p className="text-pink-300 mb-6">;
                Enterprise-grade technology with premium support and features ;
                that justify every penny of investment.;
              </p>;
              <div className="text-3xl font-bold text-pink-400">5x</div>;
              <div className="text-pink-300">ROI Guarantee</div>;
            </motion && motion.div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion && motion.div      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <motion&& motion.div

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='space-y-8'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              Ready to{' '}
<<<<<<< HEAD
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                Get Started
              </span>
              ?
            </h2>
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>
              Join hundreds of companies already leveraging our futuristic
              services to gain competitive advantages and drive innovation.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2'
              >
                <span>Start Free Trial</span>
                <ArrowRight className='w-5 h-5' />
              </Link>
              <Link
                href='/contact'
                className='px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2'
              >
                <span>Schedule Demo</span>
                <Clock className='w-5 h-5' />
              </Link>
            </div>
            <div className='flex items-center justify-center space-x-8 text-purple-300'>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />                <span>30-Day Free Trial</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />
                <span>No Credit Card Required</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />                <span>Cancel Anytime</span>              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <UltraFuturisticFooter2028 />

}
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            <motion.div            </h2>;
            <p className="text - xl text - purple - 200 max - w-3xl mx - auto">;
              We offer the best value in the market with transparent pricing and unmatched features.;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text - center p - 8 bg - gradient - to - br from - purple - 900 / 20 to - blue - 900 / 20 border border - purple - 500 / 30 rounded - 2xl';
            >;
              <Target className='w - 16 h - 16 text - green - 400 mx - auto mb - 6' />;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
                Competitive Pricing;
              </h3>;
              <p className='text - purple - 300 mb - 6'>;
                Our prices are 30% lower than market average while providing;
                superior technology and features.;
              </p>;
              <div className='text - 3xl font - bold text - green - 400'>30%</div>;
              <div className='text - purple - 300'>Lower than Market</div>            </motion.div>            >;
              <Target className="w - 16 h - 16 text - green - 400 mx - auto mb - 6" />;
              <h3 className="text - 2xl font - bold text - white mb - 4">Competitive Pricing</h3>;
              <p className="text - purple - 300 mb - 6">;
                Our prices are 30% lower than market average while providing;
                superior technology and features.;
              </p>;
              <div className="text - 3xl font - bold text - green - 400">30%</div>;
              <div className="text - purple - 300">Lower than Market</div>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='text - center p - 8 bg - gradient - to - br from - blue - 900 / 20 to - cyan - 900 / 20 border border - blue - 500 / 30 rounded - 2xl';
            >;
              <Shield className='w - 16 h - 16 text - blue - 400 mx - auto mb - 6' />;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
                No Hidden Costs;
              </h3>;
              <p className='text - blue - 300 mb - 6'>;
                Transparent pricing with no surprise fees. What you see is what;
                you pay, with clear value for every dollar.;
              </p>;
              <div className='text - 3xl font - bold text - blue - 400'>100%</div>;
              <div className='text - blue - 300'>Transparent Pricing</div>            </motion.div>            >;
              <Shield className="w - 16 h - 16 text - blue - 400 mx - auto mb - 6" />;
              <h3 className="text - 2xl font - bold text - white mb - 4">No Hidden Costs</h3>;
              <p className="text - blue - 300 mb - 6">;
                Transparent pricing with no surprise fees. What you see is what you pay,
                with clear value for every dollar.;
              </p>;
              <div className="text - 3xl font - bold text - blue - 400">100%</div>;
              <div className="text - blue - 300">Transparent Pricing</div>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='text - center p - 8 bg - gradient - to - br from - pink - 900 / 20 to - rose - 900 / 20 border border - pink - 500 / 30 rounded - 2xl';
            >;
              <Award className='w - 16 h - 16 text - pink - 400 mx - auto mb - 6' />;
              <h3 className='text - 2xl font - bold text - white mb - 4'>;
                Premium Quality;
              </h3>;
              <p className='text - pink - 300 mb - 6'>;
                Enterprise - grade technology with premium support and features;
                that justify every penny of investment.;
              </p>;
              <div className='text - 3xl font - bold text - pink - 400'>5x</div>;
              <div className='text - pink - 300'>ROI Guarantee</div>            </motion.div>            >;
              <Award className="w - 16 h - 16 text - pink - 400 mx - auto mb - 6" />;
              <h3 className="text - 2xl font - bold text - white mb - 4">Premium Quality</h3>;
              <p className="text - pink - 300 mb - 6">;
                Enterprise - grade technology with premium support and features;
                that justify every penny of investment.;
              </p>;
              <div className="text - 3xl font - bold text - pink - 400">5x</div>;
              <div className="text - pink - 300">ROI Guarantee</div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py - 20 bg - gradient - to - r from - purple - 900 / 30 to - blue - 900 / 30'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>          <motion.div      <section className="py - 20 bg - gradient - to - r from - purple - 900 / 30 to - blue - 900 / 30">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className='space - y-8';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to{' '}
              <span className='bg - gradient - to - r from - purple - 400 to - blue - 400 bg - clip - text text - transparent'>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                Get Started;
              </span>;
              ?;
            </h2>;
<<<<<<< HEAD


=======
=======
            className="space-y-8"
          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Get Started</span>?
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Join hundreds of companies already leveraging our futuristic services 
              to gain competitive advantages and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Schedule Demo</span>
                <Clock className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-8 text-purple-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>30-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
            </h2>
            <p className=&quot;text-xl text-purple-200 max-w-3xl mx-auto&quot;>
              Join hundreds of companies already leveraging our futuristic services 
              to gain competitive advantages and drive innovation.
            </p>

            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2&quot;
              >
                <span>Start Free Trial</span>
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </a>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2&quot;
              >
                <span>Schedule Demo</span>
                <Clock className=&quot;w-5 h-5&quot; />
              </a>
            </div>

            <div className=&quot;flex items-center justify-center space-x-8 text-purple-300&quot;>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                <span>30-Day Free Trial</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                <span>No Credit Card Required</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />

=======
            className='space-y-8'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to{' '}
              <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                Get Started
              </span>
              ?
            </h2>
            <p className='text-xl text-purple-200 max-w-3xl mx-auto'>
              Join hundreds of companies already leveraging our futuristic
              services to gain competitive advantages and drive innovation.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
              <Link
                href='/contact'
                className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2'
              >
                <span>Start Free Trial</span>
                <ArrowRight className='w-5 h-5' />
              </Link>
              <Link
                href='/contact'
                className='px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2'
              >
                <span>Schedule Demo</span>
                <Clock className='w-5 h-5' />
              </Link>
            </div>
            <div className='flex items-center justify-center space-x-8 text-purple-300'>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />                <span>30-Day Free Trial</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />
                <span>No Credit Card Required</span>
              </div>
              <div className='flex items-center space-x-2'>
                <CheckCircle className='w-5 h-5 text-green-400' />                <span>Cancel Anytime</span>              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <span>Cancel Anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
<UltraFuturisticFooter2028 />
    </>
                className='px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2'>;
                <span>Schedule Demo</span>;
                <Clock className='w-5 h-5' />;
              </Link>;
            </div>;
            <div className='flex items-center justify-center space-x-8 text-purple-300'>;
              <div className='flex items-center space-x-2'>;
                <CheckCircle className='w-5 h-5 text-green-400' />                <span>30-Day Free Trial</span>;
              </div>;
              <div className='flex items-center space-x-2'>;
                <CheckCircle className='w-5 h-5 text-green-400' />;
                <span>No Credit Card Required</span>;
              </div>;
              <div className='flex items-center space-x-2'>;
                <CheckCircle className='w-5 h-5 text-green-400' />                <span>Cancel Anytime</span>              <div className="flex items-center space-x-2">;
                <CheckCircle className="w-5 h-5 text-green-400" />;
                <span>Cancel Anytime</span>;
              </div>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
      <UltraFuturisticFooter2028 />;
    </>;
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
}
            <p className='text - xl text - purple - 200 max - w-3xl mx - auto'>;
              Join hundreds of companies already leveraging our futuristic;
              services to gain competitive advantages and drive innovation.;
            </p>;
            <div className='flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6'>;
              <Link;
                href='/contact';
                className='px - 8 py - 4 bg - gradient - to - r from - purple - 600 to - blue - 600 text - white rounded - xl hover:from - purple - 700 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105 shadow - 2xl hover:shadow - purple - 500 / 25 flex items - center space - x-2';
              >;
                <span > Start Free Trial</span>;
                <ArrowRight className='w - 5 h - 5' />;
              </Link>;
              <Link;
                href='/contact';
                className='px - 8 py - 4 border border - purple - 500 / 30 text - purple - 300 rounded - xl hover:bg - purple - 900 / 30 transition - all duration - 300 flex items - center space - x-2';
              >;
                <span > Schedule Demo</span>;
                <Clock className='w - 5 h - 5' />;
              </Link>;
            </div>;
            <div className='flex items - center justify - center space - x-8 text - purple - 300'>;
              <div className='flex items - center space - x-2'>;
                <CheckCircle className='w - 5 h - 5 text - green - 400' />                <span > 30 - Day Free Trial</span>;
              </div>;
              <div className='flex items - center space - x-2'>;
                <CheckCircle className='w - 5 h - 5 text - green - 400' />;
                <span > No Credit Card Required</span>;
              </div>;
              <div className='flex items - center space - x-2'>;
                <CheckCircle className='w - 5 h - 5 text - green - 400' />                <span > Cancel Anytime</span>              <div className="flex items - center space - x-2">;
                <CheckCircle className="w - 5 h - 5 text - green - 400" />;
                <span > Cancel Anytime</span>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <UltraFuturisticFooter2028 />;
    </>);
=======
      <UltraFuturisticFooter2028 />
<<<<<<< HEAD
    </>
<<<<<<< HEAD
);
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
    </>;
);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );

=======

    </>
  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

}
=======
    </>
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
