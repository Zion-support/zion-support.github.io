<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD
=======

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

import Layout from '../components/layout/Layout';

import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',}
const serviceHighlights = [
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  {
    title: '80% Reduction in Manual Work'
    description: 'Automate repetitive tasks and focus on high-value activities'
    icon: Zap
    color: 'text-emerald-400'
  }
  {
    title: '300% ROI Improvement'
    description:
      'Significant returns through increased efficiency and productivity'
    icon: TrendingUp
    color: 'text-blue-400'
  },  {
    title: '24/7 Operation'
    description: 'Round-the-clock automation without human intervention'
    icon: Clock
    color: 'text-purple-400'
  },  {
    title: 'Real-time Insights'
    description: 'Instant analytics and decision-making support'
    icon: BarChart3
    color: 'text-pink-400'
  },];
<<<<<<< HEAD
=======

    title: 'AI Code Generation',
    description: 'Generate production-ready code across multiple languages with AI intelligence',
    icon: Code,
    color: 'from-emerald-500 to-teal-600',
    features: ['Multi-language supportSecurity scanningPerformance optimizationTeam collaboration']
  };
  {
    title: 'DevOps Automation',
    description: 'Intelligent automation for modern DevOps workflows with predictive analytics',
    icon: Cpu,
    color: 'from-purple-500 to-indigo-600',
    features: ['CI/CD optimizationSelf-healing infrastructureCost optimizationMulti-cloud support']
  };
  {
    title: 'Customer Support AI',
    description: 'Transform customer support with intelligent automation and sentiment analysis',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
    features: ['Intelligent chatbotsMulti-language supportPredictive resolution24/7 availability']
  };
  {
    title: 'Marketing Automation',
    description: 'AI-powered marketing automation with predictive analytics and optimization',
    icon: BarChart3,
    color: 'from-pink-500 to-rose-600',
    features: ['Campaign optimizationCustomer personalizationROI trackingMulti-channel automation']
  };
  {
    title: 'Sales Intelligence',
    description: 'Boost sales performance with AI-powered insights and predictive analytics',
    icon: TrendingUp,
    color: 'from-yellow-500 to-orange-600',
    features: ['Lead scoringSales forecastingCustomer insightsPerformance optimization']
  }
];

const benefits = [
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {motion} from 'framer-motion';
import {Zap, Brain, Code, Shield, Users, TrendingUp, CheckCircle, ArrowRight, Star, Clock, Target, Cpu, Rocket, Globe, BarChart3, Settings, } from 'lucide-react';
import Layout from '../components / layout / Layout';
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com', }
;
const service_highlights = [;
  {
    title: 'AI Code Generation',
    description:;
      'Generate production - ready code across multiple languages with AI intelligence',
    icon: Code,
<<<<<<< HEAD
<<<<<<< HEAD
    color: 'from - emerald - 500 to - teal - 600',
    features: [;
      'Multi - language support',
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
    color: 'from-emerald-500 to-teal-600',
    features: [
      'Multi-language support',
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    color: 'from - emerald - 500 to - teal - 600',
    features: [;
      'Multi - language support',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      'Security scanning',
      'Performance optimization',
      'Team collaboration',
    ],
  },
  {
    title: 'DevOps Automation',
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
    description:;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    description:;
      'Intelligent automation for modern DevOps workflows with predictive analytics',
    icon: Cpu,
    color: 'from - purple - 500 to - indigo - 600',
    features: [;
      'CI / CD optimization',
      'Self - healing infrastructure',
      'Cost optimization',
      'Multi - cloud support',
<<<<<<< HEAD
=======
    description:
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      'Intelligent automation for modern DevOps workflows with predictive analytics',
    icon: Cpu,
    color: 'from - purple - 500 to - indigo - 600',
    features: [;
      'CI / CD optimization',
      'Self - healing infrastructure',
      'Cost optimization',
<<<<<<< HEAD
      'Multi - cloud support',
=======
      'Multi-cloud support',
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    ],
  },
  {
    title: 'Customer Support AI',
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
    description:;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    description:;
      'Transform customer support with intelligent automation and sentiment analysis',
    icon: Users,
    color: 'from - blue - 500 to - cyan - 600',
    features: [;
      'Intelligent chatbots',
      'Multi - language support',
      'Predictive resolution',
      '24 / 7 availability',
<<<<<<< HEAD
=======
    description:
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      'Transform customer support with intelligent automation and sentiment analysis',
    icon: Users,
    color: 'from - blue - 500 to - cyan - 600',
    features: [;
      'Intelligent chatbots',
      'Multi - language support',
      'Predictive resolution',
<<<<<<< HEAD
      '24 / 7 availability',
=======
      '24/7 availability',
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    ],
  },
  {
    title: 'Marketing Automation',
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
    description:;
      'AI - powered marketing automation with predictive analytics and optimization',
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    description:;
      'AI - powered marketing automation with predictive analytics and optimization',
    icon: BarChart3,
    color: 'from - pink - 500 to - rose - 600',
    features: [;
      'Campaign optimization',
      'Customer personalization',
      'ROI tracking',
      'Multi - channel automation',
<<<<<<< HEAD
=======
    description:
      'AI-powered marketing automation with predictive analytics and optimization',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    icon: BarChart3,
    color: 'from - pink - 500 to - rose - 600',
    features: [;
      'Campaign optimization',
      'Customer personalization',
      'ROI tracking',
<<<<<<< HEAD
      'Multi - channel automation',
=======
      'Multi-channel automation',
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    ],
  },
  {
    title: 'Sales Intelligence',
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    description:;
      'Boost sales performance with AI - powered insights and predictive analytics',
    icon: TrendingUp,
    color: 'from - yellow - 500 to - orange - 600',
    features: [;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    description:;
      'Boost sales performance with AI - powered insights and predictive analytics',
    icon: TrendingUp,
    color: 'from - yellow - 500 to - orange - 600',
    features: [;
=======
    description:
      'Boost sales performance with AI-powered insights and predictive analytics',
    icon: TrendingUp,
    color: 'from-yellow-500 to-orange-600',
    features: [
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      'Lead scoring',
      'Sales forecasting',
      'Customer insights',
      'Performance optimization',
    ],
<<<<<<< HEAD

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  }, ];
;
const benefits = [;

  {
    title: '80% Reduction in Manual Work',
    description: 'Automate repetitive tasks and focus on high - value activities',
    icon: Zap,

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { motion } from 'framer-motion';
import {;
  Zap, Brain, Code, Shield, Users, TrendingUp,;
  CheckCircle, ArrowRight, Star, Clock, Target,;
  Cpu, Rocket, Globe, BarChart3, Settings;
} from 'lucide-react',;
import Layout from '../components/layout/Layout';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
<<<<<<< HEAD
<<<<<<< HEAD
const contactInfo = {;
  mobile: '+1 302 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709';
  website: 'https://ziontechgroup.com';
};
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const serviceHighlights = [;
  {;
    title: 'AI Code Generation';
    description: 'Generate production-ready code across multiple languages with AI intelligence';
    icon: Code;
    color: 'from-emerald-500 to-teal-600';
    features: ['Multi-language supportSecurity scanningPerformance optimizationTeam collaboration'];
  },;
  {;
    title: 'DevOps Automation',;
    description: 'Intelligent automation for modern DevOps workflows with predictive analytics',;
    icon: Cpu,;
    color: 'from-purple-500 to-indigo-600',;
    features: ['CI/CD optimizationSelf-healing infrastructureCost optimizationMulti-cloud support'];
  },;
  {;
    title: 'Customer Support AI',;
    description: 'Transform customer support with intelligent automation and sentiment analysis',;
    icon: Users,;
    color: 'from-blue-500 to-cyan-600',;
    features: ['Intelligent chatbotsMulti-language supportPredictive resolution24/7 availability'];
  },;
  {;
    title: 'Marketing Automation',;
    description: 'AI-powered marketing automation with predictive analytics and optimization',;
    icon: BarChart3,;
    color: 'from-pink-500 to-rose-600',;
    features: ['Campaign optimizationCustomer personalizationROI trackingMulti-channel automation'];
  },;
  {;
    title: 'Sales Intelligence',;
    description: 'Boost sales performance with AI-powered insights and predictive analytics',;
    icon: TrendingUp,;
    color: 'from-yellow-500 to-orange-600',;
    features: ['Lead scoringSales forecastingCustomer insightsPerformance optimization'];
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const benefits = [;
  {;
    title: '80% Reduction in Manual Work';
    description: 'Automate repetitive tasks and focus on high-value activities';
    icon: Zap;
    color: 'text-emerald-400';
  };
  {;
    title: '300% ROI Improvement',;
    description: 'Significant returns through increased efficiency and productivity',;
    icon: TrendingUp,;
    color: 'text-blue-400';
  },;
  {;
    title: '24/7 Operation',;
    description: 'Round-the-clock automation without human intervention',;
    icon: Clock,;
    color: 'text-purple-400';
  },;
  {;
    title: 'Real-time Insights',;
    description: 'Instant analytics and decision-making support',;
    icon: BarChart3,;
<<<<<<< HEAD
    color: 'text-pink-400';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],

export default function AIAutomationServices() {
  return (
    <Layout>
      <Head>

=======
=======
const serviceHighlights = [;
  {;
    title: 'AI Code Generation',;
    description:;
      'Generate production-ready code across multiple languages with AI intelligence',;
    icon: Code,;
    color: 'from-emerald-500 to-teal-600',;
    features: [;
      'Multi-language support',;
      'Security scanning',;
      'Performance optimization',;
      'Team collaboration',;
    ],;
  },;
  {;
    title: 'DevOps Automation',;
    description:;
      'Intelligent automation for modern DevOps workflows with predictive analytics',;
    icon: Cpu,;
    color: 'from-purple-500 to-indigo-600',;
    features: [;
      'CI/CD optimization',;
      'Self-healing infrastructure',;
      'Cost optimization',;
      'Multi-cloud support',;
    ],;
  },;
  {;
    title: 'Customer Support AI',;
    description:;
      'Transform customer support with intelligent automation and sentiment analysis',;
    icon: Users,;
    color: 'from-blue-500 to-cyan-600',;
    features: [;
      'Intelligent chatbots',;
      'Multi-language support',;
      'Predictive resolution',;
      '24/7 availability',;
    ],;
  },;
  {;
    title: 'Marketing Automation',;
    description:;
      'AI-powered marketing automation with predictive analytics and optimization',;
    icon: BarChart3,;
    color: 'from-pink-500 to-rose-600',;
    features: [;
      'Campaign optimization',;
      'Customer personalization',;
      'ROI tracking',;
      'Multi-channel automation',;
    ],;
  },;
  {;
    title: 'Sales Intelligence',;
    description:;
      'Boost sales performance with AI-powered insights and predictive analytics',;
    icon: TrendingUp,;
    color: 'from-yellow-500 to-orange-600',;
    features: [;
      'Lead scoring',;
      'Sales forecasting',;
      'Customer insights',;
      'Performance optimization',;
    ],;
  },];

const benefits = [;
  {;
    title: '80% Reduction in Manual Work',;
    description: 'Automate repetitive tasks and focus on high-value activities',;
    icon: Zap,;
    color: 'text-emerald-400',;
  },;
  {;
    title: '300% ROI Improvement',;
    description:;
      'Significant returns through increased efficiency and productivity',;
    icon: TrendingUp,;
    color: 'text-blue-400',;
  },  {;
    title: '24/7 Operation',;
    description: 'Round-the-clock automation without human intervention',;
    icon: Clock,;
    color: 'text-purple-400',;
  },  {;
    title: 'Real-time Insights',;
    description: 'Instant analytics and decision-making support',;
    icon: BarChart3,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    color: 'text-pink-400',;
  },];

export default function AIAutomationServices() {;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
<<<<<<< HEAD
    <Layout>
      <Head>
        <title>
=======
=======
import React from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion } from 'framer-motion';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
const contactInfo = null;
              automate everything with intelligent AI that learns and adapts to your needs.
export default function AIAutomationServices() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <Layout>
      <Head>
<title>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          AI Automation Services - Zion Tech Group | Advanced AI-Powered
          Automation Solutions
        </title>
        <meta
          name='description'
          content='Transform your business with our advanced AI automation services. From code generation to DevOps automation, customer support to marketing - automate everything with AI intelligence.'
        />;
        <meta
          name='keywords'
          content='AI automation, code generation, DevOps automation, customer support AI, marketing automation, sales intelligence, Zion Tech Group'
        />
        <meta name='author' content='Zion Tech Group' />
        <meta name='robots' content='index, follow' />
<<<<<<< HEAD
=======

        />;
        <meta name='author' content='Zion Tech Group' />;
        <meta name='robots' content='index, follow' />;
=======
  },];


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        {/* Open Graph */}
        <meta
          property='og:title'
          content='AI Automation Services - Zion Tech Group'
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        />;
        <meta
          property='og:description'
          content='Advanced AI-powered automation solutions for modern businesses.'
        />;
        <meta property='og:type' content='website' />;
        <meta
          property='og:url'
          content='https://ziontechgroup && ziontechgroup.com/ai-automation-services'
        />;
        <meta
          property='og:image'

          content='https://ziontechgroup && ziontechgroup.com/og-image && image.jpg'
        />;


        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />;
        <meta
          name='twitter:title'
          content='AI Automation Services - Zion Tech Group'
        />;
        <meta
          name='twitter:description'
          content='Advanced AI-powered automation solutions for modern businesses.'
        />;
        <meta
          name='twitter:image'

          content='https://ziontechgroup && ziontechgroup.com/twitter-image && image.jpg'
        />;


        {/* Contact Information */}
        <meta name='contact:mobile' content='+1 302 464 0950' />;
        <meta name='contact:email' content='kleber@ziontechgroup && ziontechgroup.com' />;
        <meta
          name='contact:address'
          content='364 E Main St STE 1008 Middletown DE 19709'
<<<<<<< HEAD
=======
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
=======
        />
        <meta
          property='og:description'
          content='Advanced AI-powered automation solutions for modern businesses.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/ai-automation-services'
        />
        <meta
          property='og:image'
          content='https://ziontechgroup.com/og-image.jpg'
        />
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='AI Automation Services - Zion Tech Group'
        />
        <meta
          name='twitter:description'
          content='Advanced AI-powered automation solutions for modern businesses.'
        />
        <meta
          name='twitter:image'
          content='https://ziontechgroup.com/twitter-image.jpg'
        />
        {/* Contact Information */}
        <meta name='contact:mobile' content='+1 302 464 0950' />
        <meta name='contact:email' content='kleber@ziontechgroup.com' />
        <meta
          name='contact:address'
          content='364 E Main St STE 1008 Middletown DE 19709'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        />
        <meta name='contact:website' content='https://ziontechgroup.com' />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Automation Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our advanced AI automation solutions designed to streamline operations and boost productivity.
          </p>
        </div>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg'>
        <div className='absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent'></div>
<<<<<<< HEAD
        <div className='relative z-10 container mx-auto px-4 text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-4xl mx-auto'
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AIAutomationServices() {
  return (
    <Layout>
      <Head>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <title>AI Automation Services - Zion Tech Group | Advanced AI-Powered Automation Solutions</title>
        <meta name="description" content="Transform your business with our advanced AI automation services. From code generation to DevOps automation, customer support to marketing - automate everything with AI intelligence." />
        <meta name="keywords" content="AI automation, code generation, DevOps automation, customer support AI, marketing automation, sales intelligence, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <meta property="og:title" content="AI Automation Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered automation solutions for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-automation-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        {/* Twitter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation Services - Zion Tech Group" />
        <meta name="twitter:description" content="Advanced AI-powered automation solutions for modern businesses." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <meta name="contact:mobile" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        <meta name="contact:website" content="https://ziontechgroup.com" />
      </Head>
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
<<<<<<< HEAD
=======
            initial={{ opacity: 0, y: 30 }  } catch (error) {
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
            className="max-w-4xl mx-auto"
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

        <div className='relative z-10 container mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className='max-w-4xl mx-auto'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          >
            <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full px-6 py-3 mb-8'>
              <Zap className='w-5 h-5 text-emerald-400' />
              <span className='text-emerald-400 font-medium'>
                AI Automation Services
              </span>
            </div>


            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text text-white">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">


                AI Automation
              </span>
              <br />
              <span className='text-white'>Revolution</span>
            </h1>
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======



=======
<<<<<<< HEAD




=======
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>
              Transform your business operations with cutting-edge AI
              automation. From code generation to customer support, automate
              everything with intelligent AI that learns and adapts to your
              needs.
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link href='#services' className='group'>
                <button className='bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2'>
                  <span>Explore Services</span>
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </button>
              </Link>
              <Link href='/contact' className='group'>
                <button className='border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2'>
                  <span>Get Started</span>
<<<<<<< HEAD
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />                </button>
<<<<<<< HEAD
    <Layout>
      <Head>
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />                </button>
    <Layout>
      <Head>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <title>AI Automation Services - Zion Tech Group | Advanced AI-Powered Automation Solutions</title>
        <meta name="description" content="Transform your business with our advanced AI automation services. From code generation to DevOps automation, customer support to marketing - automate everything with AI intelligence." />
        <meta name="keywords" content="AI automation, code generation, DevOps automation, customer support AI, marketing automation, sales intelligence, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
<<<<<<< HEAD

=======
        
        {/* Open Graph */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <meta property="og:title" content="AI Automation Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered automation solutions for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-automation-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
<<<<<<< HEAD

=======
        
        {/* Twitter */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation Services - Zion Tech Group" />
        <meta name="twitter:description" content="Advanced AI-powered automation solutions for modern businesses." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
<<<<<<< HEAD

=======
        
        {/* Contact Information */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <meta name="contact:mobile" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        <meta name="contact:website" content="https://ziontechgroup.com" />
      </Head>

<<<<<<< HEAD
=======
      {/* Hero Section */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
            initial={{ opacity: 0, y: 30 }  } catch (error) {
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
            className="max-w-4xl mx-auto"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">AI Automation Services</span>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text text-white">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
=======
<<<<<<< HEAD
            <h1 className='text-5xl md:text-7xl font-bold mb-6 neon-text text-white'>
              <span className='bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'>
=======
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text text-white">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                AI Automation
              </span>
              <br />
              <span className="text-white">Revolution</span>
            </h1>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>
              Transform your business operations with cutting-edge AI
              automation. From code generation to customer support, automate
              everything with intelligent AI that learns and adapts to your
              needs.
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link href='#services' className='group'>
                <button className='bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2'>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business operations with cutting-edge AI automation. From code generation to customer support,
              automate everything with intelligent AI that learns and adapts to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#services" className="group">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f




<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
              <Link href="/contact" className="group">
                <button className="border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
=======
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                </button>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </Link>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Floating Elements */}
        <div className='absolute top-20 left-10 opacity-20 animate-float'>
          <div className='w-4 h-4 bg-emerald-400 rounded-full'></div>
        {/* Floating Elements */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

        />;
        <meta name='contact:website' content='https://ziontechgroup && ziontechgroup.com' />;
      </Head>;
      <main className="max-w-7xl mx-auto px-4 py-8">;
        <div className="text-center mb-12">;
          <h1 className="text-4xl font-bold mb-4">AI Automation Services</h1>;
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Transform your business with our advanced AI automation solutions designed to streamline operations and boost productivity.;
          </p>;
        </div>;

      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden futuristic-bg'>;
        <div className='absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent'></div>;

        <div className='relative z-10 container mx-auto px-4 text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='max-w-4xl mx-auto'>;
            <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full px-6 py-3 mb-8'>;
              <Zap className='w-5 h-5 text-emerald-400' />;
              <span className='text-emerald-400 font-medium'>;
                AI Automation Services;
              </span>;
            </div>;


            <h1 className='text-5xl md:text-7xl font-bold mb-6 neon-text text-white'>;
              <span className='bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'>;
                AI Automation;
              </span>;
              <br />;
              <span className='text-white'>Revolution</span>;
            </h1>;

            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>;
              Transform your business operations with cutting-edge AI;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
    color: 'text - emerald - 400',
  },
  {
    title: '300% ROI Improvement',
    description:;
      'Significant returns through increased efficiency and productivity',
    icon: TrendingUp,
    color: 'text - blue - 400',
  },  {
    title: '24 / 7 Operation',
    description: 'Round - the - clock automation without human intervention',
    icon: Clock,
    color: 'text - purple - 400',
  },  {
    title: 'Real - time Insights',
    description: 'Instant analytics and decision - making support',
    icon: BarChart3,
    color: 'text - pink - 400',
  }, ];
;
export default /**
 * AIAutomationServices - Function description
 */
function AIAutomationServices() {
  return (
    <Layout>;
      <Head>;
        <title>;
          AI Automation Services - Zion Tech Group | Advanced AI - Powered;
          Automation Solutions;
        </title>;
        <meta;
          name='description';
          content='Transform your business with our advanced AI automation services. From code generation to DevOps automation, customer support to marketing - automate everything with AI intelligence.';
        />;
        <meta;
          name='keywords';
          content='AI automation, code generation, DevOps automation, customer support AI, marketing automation, sales intelligence, Zion Tech Group';
        />;
        <meta name='author' content='Zion Tech Group' />;
        <meta name='robots' content='index, follow' />;
        {/* Open Graph */}
        <meta;
          property='og:title';
          content='AI Automation Services - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Advanced AI - powered automation solutions for modern businesses.';
        />;
        <meta property='og:type' content='website' />;
        <meta;
          property='og:url';
          content='https://ziontechgroup.com / ai - automation - services';
        />;
        <meta;
          property='og:image';
          content='https://ziontechgroup.com / og - image.jpg';
        />;
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />;
        <meta;
          name='twitter:title';
          content='AI Automation Services - Zion Tech Group';
        />;
        <meta;
          name='twitter:description';
          content='Advanced AI - powered automation solutions for modern businesses.';
        />;
        <meta;
          name='twitter:image';
          content='https://ziontechgroup.com / twitter - image.jpg';
        />;
        {/* Contact Information */}
        <meta name='contact:mobile' content='+1 302 464 0950' />;
        <meta name='contact:email' content='kleber@ziontechgroup.com' />;
        <meta;
          name='contact:address';
          content='364 E Main St STE 1008 Middletown DE 19709';
        />;
        <meta name='contact:website' content='https://ziontechgroup.com' />;
      </Head>;
      <main className="max - w-7xl mx - auto px - 4 py - 8">;
        <div className="text - center mb - 12">;
          <h1 className="text - 4xl font - bold mb - 4">AI Automation Services</h1>;
          <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
            Transform your business with our advanced AI automation solutions designed to streamline operations and boost productivity.;
          </p>;
        </div>;
      {/* Hero Section */}
      <section className='relative min - h-screen flex items - center justify - center overflow - hidden futuristic - bg'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - black / 50 via - black / 30 to - transparent'></div>;
        <div className='relative z - 10 container mx - auto px - 4 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='max - w-4xl mx - auto';
          >;
            <div className='inline - flex items - center space - x-2 bg - gradient - to - r from - emerald - 500 / 20 to - teal - 500 / 20 border border - emerald - 500 / 30 rounded - full px - 6 py - 3 mb - 8'>;
              <Zap className='w - 5 h - 5 text - emerald - 400' />;
              <span className='text - emerald - 400 font - medium'>;
                AI Automation Services;
              </span>;
            </div>;
            <h1 className='text - 5xl md:text - 7xl font - bold mb - 6 neon - text text - white'>;
              <span className='bg - gradient - to - r from - emerald - 400 via - teal - 400 to - cyan - 400 bg - clip - text text - transparent'>;
                AI Automation;
              </span>;
              <br />;
              <span className='text - white'>Revolution</span>;
            </h1>;
            <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-3xl mx - auto leading - relaxed'>;
              Transform your business operations with cutting - edge AI;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              automation. From code generation to customer support, automate;
              everything with intelligent AI that learns and adapts to your;
              needs.;
            </p>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


        {/* Floating Elements */}
        <div className='absolute top-20 left-10 opacity-20 animate-float'>;
          <div className='w-4 h-4 bg-emerald-400 rounded-full'></div>;
        </div>;
        <div
          className='absolute top-40 right-20 opacity-30 animate-float'
          style={{ animationDelay: '1s' }}>;
          <div className='w-6 h-6 bg-teal-400 rounded-full'></div>;
        </div>;
        <div
          className='absolute bottom-40 left-20 opacity-25 animate-float'


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
{/* Floating Elements */}
        <div className='absolute top-20 left-10 opacity-20 animate-float'>
          <div className='w-4 h-4 bg-emerald-400 rounded-full'></div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        </div>
        <div className="absolute top-40 right-20 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-teal-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-40 left-20 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
        </div>
<<<<<<< HEAD
      </section>
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
      {/* Service Highlights */}
      <section
        id='services'
        className='py-20 bg-gradient-to-b from-black to-gray-900'
      >
        <div className='container mx-auto px-4'>          <motion.div
=======
<<<<<<< HEAD
=======
        <div
          className='absolute bottom-40 left-20 opacity-25 animate-float'
          style={{ animationDelay: '2s' }}
        >
          <div className='w-3 h-3 bg-cyan-400 rounded-full'></div>
        </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      </section>
      {/* Service Highlights */}
<section
        id='services'
        className='py-20 bg-gradient-to-b from-black to-gray-900'
      >
        <div className='container mx-auto px-4'>
          <motion.div
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            className='text-center mb-16'
      {/* Service Highlights */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
<<<<<<< HEAD
          <motion.div
=======


          style={{ animationDelay: '2s' }}>;
          <div className='w-3 h-3 bg-cyan-400 rounded-full'></div>        </div>;
      </section>;



      {/* Service Highlights */}

=======
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Automation <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Services</span>
            </h2>
<<<<<<< HEAD
=======
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI automation solutions that transform every aspect of your business operations
            </p>
          </motion.div>

<<<<<<< HEAD
=======
=======
className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              AI Automation{' '}
              <span className='bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>
                Services
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Comprehensive AI automation solutions that transform every aspect
              of your business operations
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {serviceHighlights.map((service, index) => (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              <motion.div
                key={service.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
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
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="futuristic-card p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
=======


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((service, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
className='futuristic-card p-6 group hover:scale-105 transition-all duration-300'
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className='w-full h-full text-white' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  {service.title}
                </h3>
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  {service.description}
                </p>
                <ul className='space-y-2'>
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-center text-gray-300'
                    >
                      <CheckCircle className='w-5 h-5 text-emerald-400 mr-3 flex-shrink-0' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
{/* Detailed Services */}
      <section className='py-20 bg-black'>
        <div className='container mx-auto px-4'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Automation <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Services</span>
            </h2>
<<<<<<< HEAD
=======
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Discover our comprehensive range of AI automation services
              designed for modern enterprises
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {advancedAIAutomationServices2025.map((service, index) => (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <motion.div

              <span className='bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>;
                Services;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Comprehensive AI automation solutions that transform every aspect;
              of your business operations;
            </p>;
          </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {serviceHighlights && serviceHighlights.map((service, index) => (;
              <motion&& motion.div
                key={service && service.title}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
=======



                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <ul className="space-y-2">



<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />

                      <span>{feature}</span>
                    </li>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                </ul>;
              </motion && motion.div>;
            ))}


      {/* Detailed Services */}

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">AI Automation</span> Portfolio
            </h2>
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of AI automation services designed for modern enterprises
            </p>
          </motion.div>

<<<<<<< HEAD
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              <motion.div
                key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="animated-border"
=======


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advancedAIAutomationServices2025.map((service, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <motion.div


              Portfolio;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Discover our comprehensive range of AI automation services;
              designed for modern enterprises;
            </p>;
          </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {advancedAIAutomationServices2025 && advancedAIAutomationServices2025.map((service, index) => (;
              <motion&& motion.div
                key={service && service.id}


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
className='animated-border'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              >
                <div className="h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <p className="text-emerald-400 font-medium">{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
<<<<<<< HEAD
=======
                        Popular
                      </span>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======


                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-emerald-400">
                      {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
=======
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-emerald-400">
                      {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
=======
                      <span className='bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                        Popular
                      </span>
                    )}
                  </div>
<p className='text-gray-300 mb-4 leading-relaxed'>
                    {service.description}
                  </p>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='text-2xl font-bold text-emerald-400'>
                      {service.price}
                      <span className='text-gray-400 text-lg'>
                        {service.period}
                      </span>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < service.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                      ))}
=======
                      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                      <span className="text-gray-400 text-sm ml-2">({service.reviews})</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-emerald-400 font-bold">{service.customers}+</div>
                      <div className="text-gray-400 text-sm">Customers</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-emerald-400 font-bold">{service.trialDays}</div>
                      <div className="text-gray-400 text-sm">Trial Days</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        {feature}
                      </span>
                    ))}
                  </div>
<div className="flex items-center justify-between">
                    <Link href={service.link} className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center space-x-2 group">
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
                    <Link
                      href='/contact'
                      className='bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105'
                    >                      Get Started
                    <Link href="/contact" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                      Get Started
=======

                    <Link href="/contact" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                      Get Started

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                    <Link
                      href='/contact'
                      className='bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105'
<<<<<<< HEAD
                    >                      Get Started
                    <Link href="/contact" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
=======
                    >
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                      Get Started
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    </Link>
                  </div>
                </div>
              </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
        </div>;
      </section>;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Benefits Section */}
      <section className='py-20 bg-gradient-to-b from-gray-900 to-black'>;
        <div className='container mx-auto px-4'>          <motion&& motion.div

<<<<<<< HEAD
=======
=======
      {/* Benefits Section */}
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-b from-gray-900 to-black'>;
        <div className='container mx-auto px-4'>          <motion&& motion.div

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div

<<<<<<< HEAD
=======
=======
<section className='py-20 bg-gradient-to-b from-gray-900 to-black'>
        <div className='container mx-auto px-4'>
          <motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD


=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">AI Automation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with intelligent automation that delivers measurable results
            </p>
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              <motion.div
                key={benefit.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
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
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="text-center group"
=======
<<<<<<< HEAD
=======



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {benefits.map((benefit, index) => (
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <motion.div

              <span className='bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>;
                AI Automation;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Transform your business with intelligent automation that delivers;
              measurable results;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {benefits && benefits.map((benefit, index) => (;
              <motion&& motion.div
                key={benefit && benefit.title}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
className='text-center group'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-full h-full ${benefit.color}`} />
                </div>
<<<<<<< HEAD
<<<<<<< HEAD

            ))}
          </div>
        </div>
      </section>
=======
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-emerald-900/20 via-teal-900/20 to-cyan-900/20'>
        <div className='container mx-auto px-4 text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='max-w-4xl mx-auto'
=======
<<<<<<< HEAD
=======

                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <benefit && benefit.icon className={`w-full h-full ${benefit && benefit.color}`} />;
                </div>;
                <h3 className='text-xl font-bold text-white mb-4'>;
                  {benefit && benefit.title}
                </h3>;
                <p className='text-gray-300 leading-relaxed'>;
                  {benefit && benefit.description}
                </p>              </motion && motion.div>;
            ))}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
        </div>;
      </section>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-emerald-900/20 via-teal-900/20 to-cyan-900/20'>;
        <div className='container mx-auto px-4 text-center'>          <motion&& motion.div

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 via-teal-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======

=======
                <h3 className='text-xl font-bold text-white mb-4'>
                  {benefit.title}
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
<section className='py-20 bg-gradient-to-r from-emerald-900/20 via-teal-900/20 to-cyan-900/20'>
        <div className='container mx-auto px-4 text-center'>
          <motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD

          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Automate</span> Your Business?

            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already transforming their operations with AI automation.
              Get started today and see the difference intelligent automation can make.
            </p>

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
className='max-w-4xl mx-auto'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to{' '}
              <span className='bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>
                Automate
              </span>{' '}
              Your Business?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join thousands of companies already transforming their operations
              with AI automation. Get started today and see the difference
              intelligent automation can make.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link href='/contact' className='group'>
                <button className='bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <span>Start Your Automation Journey</span>
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </button>
              </Link>

            className="max-w-4xl mx-auto"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Automate</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
=======
              Join thousands of companies already transforming their operations with AI automation. 
              Get started today and see the difference intelligent automation can make.
            </p>
            
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="group">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <span>Start Your Automation Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <Link
                href='/comprehensive-services-showcase-2025'
                className='group'
              >
                <button className='border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2'>
              <Link href="/comprehensive-services-showcase-2025" className="group">
                <button className="border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2">
<<<<<<< HEAD
=======
              
              <Link href="/comprehensive-services-showcase-2025" className="group">
                <button className="border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2">
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

              <Link href="/comprehensive-services-showcase-2025" className="group">
                <button className="border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2">


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <div className="text-3xl font-bold text-emerald-400 mb-2">350%</div>
                <div className="text-gray-300">Average ROI</div>
<<<<<<< HEAD

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                <div className='text-3xl font-bold text-emerald-400 mb-2'>
                  350%
                </div>
                <div className='text-gray-300'>Average ROI</div>
              </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
    </Layout>
);
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    </Layout>;
);

}
    </Layout>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  )
            className="max-w-4xl mx-auto";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready to <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Automate</span> Your Business?;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

              Your Business?;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

              Your Business?;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
                </p>              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py - 20 bg - gradient - to - r from - emerald - 900 / 20 via - teal - 900 / 20 to - cyan - 900 / 20'>;
        <div className='container mx - auto px - 4 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='max - w-4xl mx - auto';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to{' '}
              <span className='bg - gradient - to - r from - emerald - 400 to - teal - 400 bg - clip - text text - transparent'>;
                Automate;
              </span>{' '}
              Your Business?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;

              Join thousands of companies already transforming their operations;
              with AI automation. Get started today and see the difference;
              intelligent automation can make.;
            </p>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center'>;
              <Link href='/contact' className='group'>;
                <button className='bg - gradient - to - r from - emerald - 500 to - teal - 600 hover:from - emerald - 600 hover:to - teal - 700 text - white px - 8 py - 4 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center space - x-2'>;
                  <span > Start Your Automation Journey</span>;
                  <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />;
                </button>;
              </Link>;
              <Link;
                href='/comprehensive - services - showcase - 2025';
                className='group';
              >;
                <button className='border - 2 border - emerald - 500 / 50 hover:border - emerald - 400 text - emerald - 400 hover:text - emerald - 300 px - 8 py - 4 rounded - full font - semibold text - lg transition - all duration - 300 hover:bg - emerald - 500 / 10 flex items - center space - x-2'>;
                  <span > View All Services</span>;
                  <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />;
                </button>;
              </Link>;
            </div>;
            <div className='mt - 12 grid grid - cols - 1 md:grid - cols - 3 gap - 8 text - center'>;
              <div>;
                <div className='text - 3xl font - bold text - emerald - 400 mb - 2'>;
                  24 / 7;
                </div>;
                <div className='text - gray - 300'>AI Monitoring</div>;
              </div>;
              <div>;
                <div className='text - 3xl font - bold text - emerald - 400 mb - 2'>;
                  99.9%;
                </div>;
                <div className='text - gray - 300'>Uptime Guarantee</div>;
              </div>;
              <div>;
                <div className='text - 3xl font - bold text - emerald - 400 mb - 2'>;
                  350%;
                </div>;
                <div className='text - gray - 300'>Average ROI</div>              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
);
=======
=======
<<<<<<< HEAD
    </Layout>;
);

}
=======
    </Layout>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  )
            className="max-w-4xl mx-auto";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready to <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Automate</span> Your Business?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join thousands of companies already transforming their operations with AI automation.;
              Get started today and see the difference intelligent automation can make.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <Link href="/contact" className="group">;
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">;
                  <span>Start Your Automation Journey</span>;
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />;
                </button>;
              </Link>;
              <Link href="/comprehensive-services-showcase-2025" className="group">;
                <button className="border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-emerald-500/10 flex items-center space-x-2">;
                  <span>View All Services</span>;
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />;
                </button>;
              </Link>;
            </div>;
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">;
              <div>;
                <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>;
                <div className="text-gray-300">AI Monitoring</div>;
              </div>;
              <div>;
                <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>;
                <div className="text-gray-300">Uptime Guarantee</div>;
              </div>;
              <div>;
                <div className="text-3xl font-bold text-emerald-400 mb-2">350%</div>;
                <div className="text-gray-300">Average ROI</div>;
              </div>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </div>;
          </motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


=======
<<<<<<< HEAD
    </Layout>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
