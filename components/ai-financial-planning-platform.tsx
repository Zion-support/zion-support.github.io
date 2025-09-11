<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from 'react';


import Head from 'next/head';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
=======
import React from 'react',
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import { 
  DollarSign, TrendingUp, Shield, Zap, Target, BarChart3, 
  CheckCircle, Star, Globe, Lock, Smartphone, Monitor, 
  Award, MessageCircle, Calculator
} from 'lucide-react';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {


=======
import {
  DollarSign
  TrendingUp
  Shield
  Zap
  Target
  BarChart3
  CheckCircle
  Star
  Globe
  Lock
  Smartphone
  Monitor
  Award
  MessageCircle
  Calculator;} from 'lucide-react';import {
  DollarSign, TrendingUp, Shield, Zap, Target, BarChart3
  CheckCircle, Star, Globe, Lock, Smartphone, Monitor
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  DollarSign,
  TrendingUp,
  Shield,
  Zap,
  Target,
  BarChart3,
  CheckCircle,
  Star,
  Globe,
  Lock,
  Smartphone,
  Monitor,
  Award,

  DollarSign, TrendingUp, Shield, Zap, Target, BarChart3, 
  CheckCircle, Star, Globe, Lock, Smartphone, Monitor, 
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Award, MessageCircle, Calculator
export default function AIFinancialPlanningPlatform() {
  const features = [
    {


        'Live financial data, market analysis, and personalized recommendations updated in real-time.',;
    },;


  ];
  const benefits = [
    'Increase investment returns by 25%'
    'Reduce financial planning time by 70%'
    'Improve risk-adjusted returns by 40%'
    'Optimize tax efficiency by 30%'
    'Reduce portfolio volatility by 35%'
    'Improve financial goal achievement by 50%'
    'Reduce financial planning costs by 60%'
    'Gain professional-grade financial insights'
  ];
  <div className='mt-12'>
    <h2 className='text-2xl font-semibold'>Pricing</h2>
    <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
      <div className='rounded-2xl border border-emerald-400/30 p-6'>
        <h3 className='text-xl font-bold'>Starter</h3>
        <p className='mt-2 text-gray-300'>
          Up to 5 users, core models, board pack.
        </p>
        <p className='mt-4 text-3xl font-bold'>
          $390<span className='text-base font-normal text-gray-300'>/mo</span>
        </p>
      </div>
      <div className='rounded-2xl border border-cyan-400/30 p-6'>
        <h3 className='text-xl font-bold'>Growth</h3>
        <p className='mt-2 text-gray-300'>
          25 users, consolidation, Snowflake/NetSuite.
        </p>
        <p className='mt-4 text-3xl font-bold'>
          $1,290<span className='text-base font-normal text-gray-300'>/mo</span>
        </p>
      </div>
      <div className='rounded-2xl border border-amber-400/30 p-6'>
        <h3 className='text-xl font-bold'>Enterprise</h3>
        <p className='mt-2 text-gray-300'>
          Advanced governance, custom models, SSO.
        </p>
        <p className='mt-4 text-3xl font-bold'>Custom</p>
      </div>
    </div>
    <p className='mt-4 text-sm text-gray-400'>
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
import { motion } from 'framer-motion';
import {;
  DollarSign,;
  TrendingUp,;
  Shield,;
  Zap,;
  Target,;
  BarChart3,;
  CheckCircle,;
  Star,;
  Globe,;
  Lock,;
  Smartphone,;
  Monitor,;
  Award,;
  MessageCircle,;
  Calculator,;} from 'lucide-react';import { ;
  DollarSign, TrendingUp, Shield, Zap, Target, BarChart3, ;
  CheckCircle, Star, Globe, Lock, Smartphone, Monitor, ;
  Award, MessageCircle, Calculator;
export default function AIFinancialPlanningPlatform() {;
  const features = [;
    {;
      icon: <DollarSign className='w-6 h-6' />,;
      description:;
        'Advanced financial modeling and analysis using machine learning to identify opportunities and risks.',;
    },;
    {;
      icon: <TrendingUp className='w-6 h-6' />,;
      title: 'Predictive Financial Planning',;
      description:;
        'Forecast financial outcomes and create data-driven financial plans with AI-powered insights.',;
    },;
    {;
      icon: <Target className='w-6 h-6' />,;
      title: 'Goal-Based Planning',;
      description:;
        'Personalized financial planning based on your specific goals, timeline, and risk tolerance.',;
    },;
    {;
      icon: <Zap className='w-6 h-6' />,;
      title: 'Automated Portfolio Management',;
      description:;
        'Intelligent portfolio optimization and rebalancing based on market conditions and your objectives.',;
    },;
    {;
      icon: <Shield className='w-6 h-6' />,;
      title: 'Risk Assessment & Management',;
      description:;
        'Comprehensive risk analysis and automated risk management strategies for your financial portfolio.',;
    },;
    {;
      icon: <BarChart3 className='w-6 h-6' />,;
      title: 'Real-Time Financial Insights',;
      description:;
        'Live financial data, market analysis, and personalized recommendations updated in real-time.',;
    },;
  ];
  const benefits = [;
    'Increase investment returns by 25%',;
    'Reduce financial planning time by 70%',;
    'Improve risk-adjusted returns by 40%',;
    'Optimize tax efficiency by 30%',;
    'Reduce portfolio volatility by 35%',;
    'Improve financial goal achievement by 50%',;
    'Reduce financial planning costs by 60%',;
    'Gain professional-grade financial insights',;
  ];
  <div className='mt-12'>;
    <h2 className='text-2xl font-semibold'>Pricing</h2>;
    <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>;
      <div className='rounded-2xl border border-emerald-400/30 p-6'>;
        <h3 className='text-xl font-bold'>Starter</h3>;
        <p className='mt-2 text-gray-300'>;
          Up to 5 users, core models, board pack.;
        </p>;
        <p className='mt-4 text-3xl font-bold'>;
          $390<span className='text-base font-normal text-gray-300'>/mo</span>;
        </p>;
      </div>;
      <div className='rounded-2xl border border-cyan-400/30 p-6'>;
        <h3 className='text-xl font-bold'>Growth</h3>;
        <p className='mt-2 text-gray-300'>;
          25 users, consolidation, Snowflake/NetSuite.;
        </p>;
        <p className='mt-4 text-3xl font-bold'>;
          $1,290<span className='text-base font-normal text-gray-300'>/mo</span>;
        </p>;
      </div>;
      <div className='rounded-2xl border border-amber-400/30 p-6'>;
        <h3 className='text-xl font-bold'>Enterprise</h3>;
        <p className='mt-2 text-gray-300'>;
          Advanced governance, custom models, SSO.;
        </p>;
        <p className='mt-4 text-3xl font-bold'>Custom</p>;
      </div>;
    </div>;
    <p className='mt-4 text-sm text-gray-400'>;
      Market references:{' '}
      <a
        className='underline hover:text-cyan-300'
        href='https://www && www.workday.com/en-us/products/planning/adaptive-planning && planning.html'
        target='_blank'
        rel='noreferrer'>;
        Workday Adaptive;
      </a>;
      ,{' '}
      <a
        className='underline hover:text-cyan-300'
        href='https://www && www.anaplan.com/pricing/'
        target='_blank'
        rel='noreferrer'>;
        Anaplan;
      </a>;
      ,{' '}
      <a
        className='underline hover:text-cyan-300'
        href='https://pigment && pigment.com/pricing'
        target='_blank'
        rel='noreferrer'>;
import React from 'react';
import Head from 'next / head';
import { motion } from 'framer-motion';
import {
  DollarSign,
  TrendingUp,
  Shield,
  Zap,
  Target,
  BarChart3,
  CheckCircle,
  Star,
  Globe,
  Lock,
  Smartphone,
  Monitor,
  Award,
  MessageCircle,
  Calculator,} from 'lucide-react';import {
  DollarSign, TrendingUp, Shield, Zap, Target, BarChart3,
  CheckCircle, Star, Globe, Lock, Smartphone, Monitor,
  Award, MessageCircle, Calculator;
export default /**
 * AIFinancialPlanningPlatform - Function description
 */
function AIFinancialPlanningPlatform() {
  const features = [;
    {
      icon: <DollarSign className='w - 6 h - 6' />,
      description:;
        'Advanced financial modeling and analysis using machine learning to identify opportunities and risks.',
    },
    {
      icon: <TrendingUp className='w - 6 h - 6' />,
      title: 'Predictive Financial Planning',
      description:;
        'Forecast financial outcomes and create data - driven financial plans with AI - powered insights.',
    },
    {
      icon: <Target className='w - 6 h - 6' />,
      title: 'Goal - Based Planning',
      description:;
        'Personalized financial planning based on your specific goals, timeline, and risk tolerance.',
    },
    {
      icon: <Zap className='w - 6 h - 6' />,
      title: 'Automated Portfolio Management',
      description:;
        'Intelligent portfolio optimization and rebalancing based on market conditions and your objectives.',
    },
    {
      icon: <Shield className='w - 6 h - 6' />,
      title: 'Risk Assessment & Management',
      description:;
        'Comprehensive risk analysis and automated risk management strategies for your financial portfolio.',
    },
    {
      icon: <BarChart3 className='w - 6 h - 6' />,
      title: 'Real - Time Financial Insights',
      description:;
        'Live financial data, market analysis, and personalized recommendations updated in real - time.',
    },
  ];
;
  const benefits = [;
    'Increase investment returns by 25%',
    'Reduce financial planning time by 70%',
    'Improve risk - adjusted returns by 40%',
    'Optimize tax efficiency by 30%',
    'Reduce portfolio volatility by 35%',
    'Improve financial goal achievement by 50%',
    'Reduce financial planning costs by 60%',
    'Gain professional - grade financial insights',
  ];
;
  <div className='mt - 12'>;
    <h2 className='text - 2xl font - semibold'>Pricing</h2>;
    <div className='mt - 6 grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
      <div className='rounded - 2xl border border - emerald - 400 / 30 p - 6'>;
        <h3 className='text - xl font - bold'>Starter</h3>;
        <p className='mt - 2 text - gray - 300'>;
          Up to 5 users, core models, board pack.;
        </p>;
        <p className='mt - 4 text - 3xl font - bold'>;
          $390 < span className='text - base font - normal text - gray - 300'>/mo</span>;
        </p>;
      </div>;
      <div className='rounded - 2xl border border - cyan - 400 / 30 p - 6'>;
        <h3 className='text - xl font - bold'>Growth</h3>;
        <p className='mt - 2 text - gray - 300'>;
          25 users, consolidation, Snowflake / NetSuite.;
        </p>;
        <p className='mt - 4 text - 3xl font - bold'>;
          $1, 290 < span className='text - base font - normal text - gray - 300'>/mo</span>;
        </p>;
      </div>;
      <div className='rounded - 2xl border border - amber - 400 / 30 p - 6'>;
        <h3 className='text - xl font - bold'>Enterprise</h3>;
        <p className='mt - 2 text - gray - 300'>;
          Advanced governance, custom models, SSO.;
        </p>;
        <p className='mt - 4 text - 3xl font - bold'>Custom</p>;
      </div>;
    </div>;
    <p className='mt - 4 text - sm text - gray - 400'>;
      Market references:{' '}
      <a;
        className='underline hover:text - cyan - 300';
        href='https://www.workday.com / en - us / products / planning / adaptive - planning.html';
        target='_blank';
        rel='noreferrer';
      >;
        Workday Adaptive;
      </a>;
      , {' '}
      <a;
        className='underline hover:text - cyan - 300';
        href='https://www.anaplan.com / pricing/';
        target='_blank';
        rel='noreferrer';
      >;
        Anaplan;
      </a>;
      , {' '}
      <a;
        className='underline hover:text - cyan - 300';
        href='https://pigment.com / pricing';
        target='_blank';
        rel='noreferrer';
      >;
        Pigment;
      </a>;
      .;
    </p>;
<<<<<<< HEAD
<<<<<<< HEAD
          href='https://ziontechgroup && ziontechgroup.com/ai-financial-planning-platform'
        />;
      </Head>;
      icon: <DollarSign className="w-6 h-6" />,
      title: 'AI-Powered Financial Analysis',
      description: 'Advanced financial modeling and analysis using machine learning to identify opportunities and risks.'
    };
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Predictive Financial Planning',
      description: 'Forecast financial outcomes and create data-driven financial plans with AI-powered insights.'
    };
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal-Based Planning',
      description: 'Personalized financial planning based on your specific goals, timeline, and risk tolerance.'
    };
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Portfolio Management',
      description: 'Intelligent portfolio optimization and rebalancing based on market conditions and your objectives.'
    };
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Risk Assessment & Management',
      description: 'Comprehensive risk analysis and automated risk management strategies for your financial portfolio.'
    };
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-Time Financial Insights',
      description: 'Live financial data, market analysis, and personalized recommendations updated in real-time.'
    }
  ];
  const benefits = [
    'Increase investment returns by 25%Reduce financial planning time by 70%Improve risk-adjusted returns by 40%Optimize tax efficiency by 30%Reduce portfolio volatility by 35%Improve financial goal achievement by 50%Reduce financial planning costs by 60%Gain professional-grade financial insights'
  ];
					<div className="mt-12">
						<h2 className="text-2xl font-semibold">Pricing</h2>
						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Up to 5 users, core models, board pack.</p>
								<p className="mt-4 text-3xl font-bold">$390<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">25 users, consolidation, Snowflake/NetSuite.</p>
								<p className="mt-4 text-3xl font-bold">$1,290<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-amber-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Advanced governance, custom models, SSO.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.workday.com/en-us/products/planning/adaptive-planning.html" target="_blank" rel="noreferrer">Workday Adaptive</a>, <a className="underline hover:text-cyan-300" href="https://www.anaplan.com/pricing/" target="_blank" rel="noreferrer">Anaplan</a>, <a className="underline hover:text-cyan-300" href="https://pigment.com/pricing" target="_blank" rel="noreferrer">Pigment</a>.</p>
					</div>
  return (
    <>
      <Head>
        <title>AI Financial Planning Platform | Zion Tech Group</title>
        <meta name="description" content="Intelligent financial planning and wealth management with AI. Personalized plans, portfolio optimization, and risk management." />
        <meta name="keywords" content="AI financial planning, financial planning, wealth management, portfolio optimization, investment planning, financial advisor" />
        <meta property="og:title" content="AI Financial Planning Platform | Zion Tech Group" />
        <meta property="og:description" content="Intelligent financial planning and wealth management with AI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-financial-planning-platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-financial-planning-platform" />
      </Head>
      <div className='min-h-screen bg-black text-white'>;
        {/* Hero Section */}
              transition={{ duration: 0 && 0.8 }}
              className='text-center'      </Head>;
      <div className="min-h-screen bg-black text-white">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          href='https://ziontechgroup && ziontechgroup.com/ai-financial-planning-platform'
        />;
      </Head>;

        {/* Hero Section */}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">;
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-amber-900/20 to-orange-900/20"></div>;
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-amber-900/20 to-orange-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

export default function AIFinancialPlanningPlatform() {_const _features = [
    {
      icon: <DollarSign className=&quot;w-6 h-6&quot; />,
      title: 'AI-Powered Financial Analysis',
      description: 'Advanced financial modeling and analysis using machine learning to identify opportunities and risks.'
    },
    {
      icon: <TrendingUp className=&quot;w-6 h-6&quot; />,
      title: 'Predictive Financial Planning',
      description: 'Forecast financial outcomes and create data-driven financial plans with AI-powered insights.'
    },
    {
      icon: <Target className=&quot;w-6 h-6&quot; />,
      title: 'Goal-Based Planning',
      description: 'Personalized financial planning based on your specific goals, timeline, and risk tolerance.'
    },
    {
      icon: <Zap className=&quot;w-6 h-6&quot; />,
      title: 'Automated Portfolio Management',
      description: 'Intelligent portfolio optimization and rebalancing based on market conditions and your objectives.'
    },
    {
      icon: <Shield className=&quot;w-6 h-6&quot; />,
      title: 'Risk Assessment & Management',
      description: 'Comprehensive risk analysis and automated risk management strategies for your financial portfolio.'
    },
    {
      icon: <BarChart3 className=&quot;w-6 h-6&quot; />,
      title: 'Real-Time Financial Insights',
      description: 'Live financial data, market analysis, and personalized recommendations updated in real-time.'
    }
  ],

  const benefits = [
    'Increase investment returns by 25%Reduce financial planning time by 70%Improve risk-adjusted returns by 40%Optimize tax efficiency by 30%Reduce portfolio volatility by 35%Improve financial goal achievement by 50%Reduce financial planning costs by 60%Gain professional-grade financial insights'
  ],

					<div className=&quot;mt-12&quot;>
						<h2 className=&quot;text-2xl font-semibold&quot;>Pricing</h2>
						<div className=&quot;mt-6 grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
							<div className=&quot;rounded-2xl border border-emerald-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Starter</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>Up to 5 users, core models, board pack.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>$390<span className=&quot;text-base font-normal text-gray-300&quot;>/mo</span></p>
							</div>
							<div className=&quot;rounded-2xl border border-cyan-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Growth</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>25 users, consolidation, Snowflake/NetSuite.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>$1,290<span className=&quot;text-base font-normal text-gray-300&quot;>/mo</span></p>
							</div>
							<div className=&quot;rounded-2xl border border-amber-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Enterprise</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>Advanced governance, custom models, SSO.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>Custom</p>
							</div>
						</div>
						<p className=&quot;mt-4 text-sm text-gray-400&quot;>Market references: <a className=&quot;underline hover:text-cyan-300&quot; href=&quot;https://www.workday.com/en-us/products/planning/adaptive-planning.html&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>Workday Adaptive</a>, <a className=&quot;underline hover:text-cyan-300&quot; href=&quot;https://www.anaplan.com/pricing/&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>Anaplan</a>, <a className=&quot;underline hover:text-cyan-300&quot; href=&quot;https://pigment.com/pricing&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>Pigment</a>.</p>
					</div>

  return (_<>
      <Head>
        <title>AI Financial Planning Platform | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Intelligent financial planning and wealth management with AI. Personalized plans, portfolio optimization, and risk management.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI financial planning, financial planning, wealth management, portfolio optimization, investment planning, financial advisor&quot; />
        <meta property=&quot;og:title&quot; content=&quot;AI Financial Planning Platform | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Intelligent financial planning and wealth management with AI.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/ai-financial-planning-platform&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ai-financial-planning-platform&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-black text-white&quot;>
        {/* Hero Section */}
        <section className=&quot;relative pt-32 pb-20 overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-amber-900/20 to-orange-900/20&quot;></div>
          <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>

import React from 'react',
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  DollarSign
  TrendingUp
  Shield
  Zap
  Target
  BarChart3
  CheckCircle
  Star
  Globe
  Lock
  Smartphone
  Monitor
  Award
  MessageCircle
  Calculator;} from 'lucide-react';import {
  DollarSign, TrendingUp, Shield, Zap, Target, BarChart3
  CheckCircle, Star, Globe, Lock, Smartphone, Monitor
  DollarSign,
  TrendingUp,
  Shield,
  Zap,
  Target,
  BarChart3,
  CheckCircle,
  Star,
  Globe,
  Lock,
  Smartphone,
  Monitor,
  Award,
  MessageCircle,
  Calculator,;} from 'lucide-react';import { 
  MessageCircle,;
  Calculator,;} from 'lucide-react';import {
  MessageCircle,
  Calculator,;} from 'lucide-react';import { 
  DollarSign, TrendingUp, Shield, Zap, Target, BarChart3, 
  CheckCircle, Star, Globe, Lock, Smartphone, Monitor, 
  Award, MessageCircle, Calculator
export default function AIFinancialPlanningPlatform() {
  const features = [
    {
      icon: <DollarSign className='w-6 h-6' />
      description:
        'Advanced financial modeling and analysis using machine learning to identify opportunities and risks.'
    }
    {
      icon: <TrendingUp className='w-6 h-6' />
      title: 'Predictive Financial Planning'
      description:
        'Forecast financial outcomes and create data-driven financial plans with AI-powered insights.'
    }
    {
      icon: <Target className='w-6 h-6' />
      title: 'Goal-Based Planning'
      description:
        'Personalized financial planning based on your specific goals, timeline, and risk tolerance.'
    }
    {
      icon: <Zap className='w-6 h-6' />
      title: 'Automated Portfolio Management'
      description:
        'Intelligent portfolio optimization and rebalancing based on market conditions and your objectives.'
    }
    {
      icon: <Shield className='w-6 h-6' />
      title: 'Risk Assessment & Management'
      description:
        'Comprehensive risk analysis and automated risk management strategies for your financial portfolio.'
    }
    {
      icon: <BarChart3 className='w-6 h-6' />
      title: 'Real-Time Financial Insights'
      description:
        'Live financial data, market analysis, and personalized recommendations updated in real-time.'
    }
        'Live financial data, market analysis, and personalized recommendations updated in real-time.',;
    },;
  ];
  const benefits = [
    'Increase investment returns by 25%'
    'Reduce financial planning time by 70%'
    'Improve risk-adjusted returns by 40%'
    'Optimize tax efficiency by 30%'
    'Reduce portfolio volatility by 35%'
    'Improve financial goal achievement by 50%'
    'Reduce financial planning costs by 60%'
    'Gain professional-grade financial insights'
  ];
  <div className='mt-12'>
    <h2 className='text-2xl font-semibold'>Pricing</h2>
    <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
      <div className='rounded-2xl border border-emerald-400/30 p-6'>
        <h3 className='text-xl font-bold'>Starter</h3>
        <p className='mt-2 text-gray-300'>
          Up to 5 users, core models, board pack.
        </p>
        <p className='mt-4 text-3xl font-bold'>
          $390<span className='text-base font-normal text-gray-300'>/mo</span>
        </p>
      </div>
      <div className='rounded-2xl border border-cyan-400/30 p-6'>
        <h3 className='text-xl font-bold'>Growth</h3>
        <p className='mt-2 text-gray-300'>
          25 users, consolidation, Snowflake/NetSuite.
        </p>
        <p className='mt-4 text-3xl font-bold'>
          $1,290<span className='text-base font-normal text-gray-300'>/mo</span>
        </p>
      </div>
      <div className='rounded-2xl border border-amber-400/30 p-6'>
        <h3 className='text-xl font-bold'>Enterprise</h3>
        <p className='mt-2 text-gray-300'>
          Advanced governance, custom models, SSO.
        </p>
        <p className='mt-4 text-3xl font-bold'>Custom</p>
      </div>
    </div>
    <p className='mt-4 text-sm text-gray-400'>
      Market references:{' '}
      <a
        className='underline hover:text-cyan-300'
        href='https://www.workday.com/en-us/products/planning/adaptive-planning.html'
        target='_blank'
        rel='noreferrer'
      >
        Workday Adaptive
      </a>
      ,{' '}
      <a
        className='underline hover:text-cyan-300'
        href='https://www.anaplan.com/pricing/'
        target='_blank'
        rel='noreferrer'
      >
        Anaplan
      </a>
      ,{' '}
      <a
        className='underline hover:text-cyan-300'
        href='https://pigment.com/pricing'
        target='_blank'
        rel='noreferrer'
      >
        Pigment
      </a>
      .
    </p>
  </div>;					<div className="mt-12">
						<h2 className="text-2xl font-semibold">Pricing</h2>
						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="rounded-2xl border border-emerald-400/30 p-6">
								<h3 className="text-xl font-bold">Starter</h3>
								<p className="mt-2 text-gray-300">Up to 5 users, core models, board pack.</p>
								<p className="mt-4 text-3xl font-bold">$390<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-cyan-400/30 p-6">
								<h3 className="text-xl font-bold">Growth</h3>
								<p className="mt-2 text-gray-300">25 users, consolidation, Snowflake/NetSuite.</p>
								<p className="mt-4 text-3xl font-bold">$1,290<span className="text-base font-normal text-gray-300">/mo</span></p>
							</div>
							<div className="rounded-2xl border border-amber-400/30 p-6">
								<h3 className="text-xl font-bold">Enterprise</h3>
								<p className="mt-2 text-gray-300">Advanced governance, custom models, SSO.</p>
								<p className="mt-4 text-3xl font-bold">Custom</p>
							</div>
						</div>
						<p className="mt-4 text-sm text-gray-400">Market references: <a className="underline hover:text-cyan-300" href="https://www.workday.com/en-us/products/planning/adaptive-planning.html" target="_blank" rel="noreferrer">Workday Adaptive</a>, <a className="underline hover:text-cyan-300" href="https://www.anaplan.com/pricing/" target="_blank" rel="noreferrer">Anaplan</a>, <a className="underline hover:text-cyan-300" href="https://pigment.com/pricing" target="_blank" rel="noreferrer">Pigment</a>.</p>
					</div>
  return (
    <>
      <Head>
        <title>AI Financial Planning Platform | Zion Tech Group</title>
        <meta
          name='description'
          content='Intelligent financial planning and wealth management with AI. Personalized plans, portfolio optimization, and risk management.'
        />
        <meta
          name='keywords'
          content='AI financial planning, financial planning, wealth management, portfolio optimization, investment planning, financial advisor'
        />
        <meta
          property='og:title'
          content='AI Financial Planning Platform | Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Intelligent financial planning and wealth management with AI.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/ai-financial-planning-platform'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/ai-financial-planning-platform'
        />
      </Head>
      <div className='min-h-screen bg-black text-white'>
        {/* Hero Section */}
        <section className='relative pt-32 pb-20 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-amber-900/20 to-orange-900/20'></div>
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center'      </Head>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-amber-900/20 to-orange-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center'
            >
              <div className='flex items-center justify-center mb-6'>
                <div className='w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4'>
                  <DollarSign className='w-8 h-8 text-white' />
                </div>
              </div>
              <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent mb-6'>
                AI Financial Planning Platform
              </h1>
              <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
                Intelligent financial planning and wealth management with AI.
                Get personalized plans, portfolio optimization, and risk
                management that drives financial success.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-yellow-500/25'                >            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent mb-6">
                AI Financial Planning Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Intelligent financial planning and wealth management with AI. Get personalized plans
                portfolio optimization, and risk management that drives financial success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-yellow-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-200'                >                  className="px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-200"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Features Section */}
        <section className='py-20 bg-gradient-to-b from-black to-gray-900'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center'      </Head>;
      <div className="min - h-screen bg - black text - white">;
        {/* Hero Section */}
        <section className="relative pt - 32 pb - 20 overflow - hidden">;
          <div className="absolute inset - 0 bg - gradient - to - br from - yellow - 900 / 20 via - amber - 900 / 20 to - orange - 900 / 20"></div>;
          <div className="relative z - 10 max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center';
            >;
              <div className='flex items - center justify - center mb - 6'>;
                <div className='w - 16 h - 16 bg - gradient - to - br from - yellow - 500 to - amber - 600 rounded - 2xl flex items - center justify - center mb - 4'>;
                  <DollarSign className='w - 8 h - 8 text - white' />;
                </div>;
              </div>;
              <h1 className='text - 5xl md:text - 6xl font - bold bg - gradient - to - r from - yellow - 400 via - amber - 400 to - orange - 400 bg - clip - text text - transparent mb - 6'>;
                AI Financial Planning Platform;
              </h1>;
              <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto'>;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Intelligent financial planning and wealth management with AI.;
                Get personalized plans, portfolio optimization, and risk;
                management that drives financial success.;
              </p>;
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
=======


        {/* Features Section */}
        <section className='py-20 bg-gradient-to-b from-black to-gray-900'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'        <section className="py-20 bg-gradient-to-b from-black to-gray-900">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Powerful Financial Planning Features
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                Our AI platform combines advanced financial modeling with
                machine learning to deliver comprehensive financial planning and
                wealth management solutions.
              </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>              {features.map((feature, index) => (            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Financial Planning Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI platform combines advanced financial modeling with machine learning to deliver
                comprehensive financial planning and wealth management solutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
<<<<<<< HEAD


=======


        {/* Features Section */}
        <section className='py-20 bg-gradient-to-b from-black to-gray-900'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'        <section className="py-20 bg-gradient-to-b from-black to-gray-900">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                Powerful Financial Planning Features;
              </h2>;
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className='px - 8 py - 4 bg - gradient - to - r from - yellow - 500 to - amber - 600 text - white rounded - xl font - semibold text - lg hover:from - yellow - 600 hover:to - amber - 700 transition - all duration - 200 shadow - lg shadow - yellow - 500 / 25'                >            >;
              <div className="flex items - center justify - center mb - 6">;
                <div className="w - 16 h - 16 bg - gradient - to - br from - yellow - 500 to - amber - 600 rounded - 2xl flex items - center justify - center mb - 4">;
                  <DollarSign className="w - 8 h - 8 text - white" />;
                </div>;
              </div>;
              <h1 className="text - 5xl md:text - 6xl font - bold bg - gradient - to - r from - yellow - 400 via - amber - 400 to - orange - 400 bg - clip - text text - transparent mb - 6">;
                AI Financial Planning Platform;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto">;
                Intelligent financial planning and wealth management with AI. Get personalized plans,
                portfolio optimization, and risk management that drives financial success.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className="px - 8 py - 4 bg - gradient - to - r from - yellow - 500 to - amber - 600 text - white rounded - xl font - semibold text - lg hover:from - yellow - 600 hover:to - amber - 700 transition - all duration - 200 shadow - lg shadow - yellow - 500 / 25";
                >;
                  Start Free Trial;
                </motion.button>;
                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className='px - 8 py - 4 border - 2 border - yellow - 500 / 30 text - yellow - 400 rounded - xl font - semibold text - lg hover:bg - yellow - 500 / 10 transition - all duration - 200'                >                  className="px - 8 py - 4 border - 2 border - yellow - 500 / 30 text - yellow - 400 rounded - xl font - semibold text - lg hover:bg - yellow - 500 / 10 transition - all duration - 200";
                >;
                  Watch Demo;
                </motion.button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className='py - 20 bg - gradient - to - b from - black to - gray - 900'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center mb - 16'        <section className="py - 20 bg - gradient - to - b from - black to - gray - 900">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                Powerful Financial Planning Features;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Our AI platform combines advanced financial modeling with;
                machine learning to deliver comprehensive financial planning and;
                wealth management solutions.;
              </p>;
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300 group'



<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                >
                  <div className='w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                    <div className='text-yellow-400'>{feature.icon}</div>
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-4'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-400 leading-relaxed'>
                    {feature.description}

                  </p>                </motion.div>

                </motion.div>


<<<<<<< HEAD
              ))}

            </div>;
          </div>;
        </section>;





                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300 group'

=======
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300 group'



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  <div className='w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                    <div className='text-yellow-400'>{feature.icon}</div>
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-4'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-400 leading-relaxed'>
                    {feature.description}
                  </p>                </motion.div>                >
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-yellow-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
                  </p>                </motion.div>

                </motion.div>

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              ))}

              className='text-center mb-16'



<<<<<<< HEAD
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              ))}
            </div>
          </div>
        </section>

            </div>;
          </div>;
        </section>;


=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        {/* Benefits Section */}
        <section className='py-20 bg-black'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8 }}
<<<<<<< HEAD

=======
              className='text-center mb-16'        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className='text-center mb-16'



            <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >

<<<<<<< HEAD
<<<<<<< HEAD
              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'        <section className="py-20 bg-black">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-20 bg-black'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              className='text-center mb-16'

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Transform Your Financial Future
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                Experience dramatic improvements in financial planning
                efficiency, investment returns, and goal achievement with our
                AI-powered financial planning platform.
              </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>              {benefits.map((benefit, index) => (            >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Financial Future
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience dramatic improvements in financial planning efficiency, investment returns, and
                goal achievement with our AI-powered financial planning platform.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                Transform Your Financial Future;
              </h2>;
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
                Experience dramatic improvements in financial planning;
                efficiency, investment returns, and goal achievement with our;
                AI-powered financial planning platform.;
              </p>;
            </motion && motion.div>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>              {benefits && benefits.map((benefit, index) => (            >;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Transform Your Financial Future;
              </h2>;
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                Experience dramatic improvements in financial planning efficiency, investment returns, and ;
                goal achievement with our AI-powered financial planning platform.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
              {benefits && benefits.map((benefit, index) => (;
                <motion&& motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group'
                >
                  <div className='flex items-center space-x-3'>
                    <CheckCircle className='w-5 h-5 text-yellow-400' />
                    <span className='text-white font-medium text-sm'>
                      {benefit}
                    </span>                  </div>                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium text-sm">{benefit}</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  </div>
                </motion.div>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </div>;
        </section>;


<<<<<<< HEAD



<<<<<<< HEAD
              ))}
            </div>;
          </div>;
        </section>;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Use Cases Section */}
        <section className='py-20 bg-gradient-to-b from-black to-gray-900'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8 }}
<<<<<<< HEAD

              className='text-center mb-16'



            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className='py-20 bg-gradient-to-b from-black to-gray-900'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className='text-center mb-16'        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              className='text-center mb-16'

<<<<<<< HEAD
=======
=======


            <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Comprehensive Financial Planning Solutions
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                From retirement planning to investment management, our platform
                provides AI-powered solutions for every aspect of your financial
                life.
              </p>
            </motion.div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>              {useCases.map((useCase, index) => (            >
=======
              className="text-center mb-16"
            >

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              className="text-center mb-16"
            >

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Financial Planning Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From retirement planning to investment management, our platform provides AI-powered
                solutions for every aspect of your financial life.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0 && 0.8 }}
              className='text-center mb-16'>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                Comprehensive Financial Planning Solutions;
              </h2>;
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>;
                From retirement planning to investment management, our platform;
                provides AI-powered solutions for every aspect of your financial;
                life.;
              </p>;
            </motion && motion.div>;
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>              {useCases && useCases.map((useCase, index) => (            >;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Comprehensive Financial Planning Solutions;
              </h2>;
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                From retirement planning to investment management, our platform provides AI-powered ;
                solutions for every aspect of your financial life.;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">;
              {useCases && useCases.map((useCase, index) => (;
                <motion&& motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={index}
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group text-center'>;
                  <div className='w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>;
                    <Calculator className='w-6 h-6 text-yellow-400' />;
                  </div>;
                  <span className='text-white font-medium text-sm'>;
                    {useCase}
                  </span>                </motion && motion.div>                >;
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">;
                    <Calculator className="w-6 h-6 text-yellow-400" />;
                  </div>;
                  <span className="text-white font-medium text-sm">{useCase}</span>;
                </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </motion.div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>              {features.map ((feature, index) => (            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
                Powerful Financial Planning Features;
              </h2>;
              <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
                Our AI platform combines advanced financial modeling with machine learning to deliver;
                comprehensive financial planning and wealth management solutions.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {features.map ((feature, index) => (
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className='bg - gradient - to - br from - gray - 900 / 50 to - gray - 800 / 50 backdrop - blur - xl border border - gray - 700 / 50 rounded - 2xl p - 8 hover:border - yellow - 500 / 30 transition - all duration - 300 group';
                >;
                  <div className='w - 14 h - 14 bg - gradient - to - br from - yellow - 500 / 20 to - amber - 600 / 20 rounded - xl flex items - center justify - center mb - 6 group - hover:scale - 110 transition - transform duration - 300'>;
                    <div className='text - yellow - 400'>{feature.icon}</div>;
                  </div>;
                  <h3 className='text - xl font - semibold text - white mb - 4'>;
                    {feature.title}
                  </h3>;
                  <p className='text - gray - 400 leading - relaxed'>;
                    {feature.description}
                  </p>                </motion.div>                >;
                  <div className="w - 14 h - 14 bg - gradient - to - br from - yellow - 500 / 20 to - amber - 600 / 20 rounded - xl flex items - center justify - center mb - 6 group - hover:scale - 110 transition - transform duration - 300">;
                    <div className="text - yellow - 400">;
                      {feature.icon}
                    </div>;
                  </div>;
                  <h3 className="text - xl font - semibold text - white mb - 4">{feature.title}</h3>;
                  <p className="text - gray - 400 leading - relaxed">{feature.description}</p>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Benefits Section */}
        <section className='py - 20 bg - black'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center mb - 16'        <section className="py - 20 bg - black">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                Transform Your Financial Future;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
                Experience dramatic improvements in financial planning;
                efficiency, investment returns, and goal achievement with our;
                AI - powered financial planning platform.;
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6'>              {benefits.map ((benefit, index) => (            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
                Transform Your Financial Future;
              </h2>;
              <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
                Experience dramatic improvements in financial planning efficiency, investment returns, and;
                goal achievement with our AI - powered financial planning platform.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
              {benefits.map ((benefit, index) => (
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className='bg - gradient - to - br from - gray - 900 / 50 to - gray - 800 / 50 backdrop - blur - xl border border - gray - 700 / 50 rounded - xl p - 6 hover:border - yellow - 500 / 30 transition - all duration - 300 group';
                >;
                  <div className='flex items - center space - x-3'>;
                    <CheckCircle className='w - 5 h - 5 text - yellow - 400' />;
                    <span className='text - white font - medium text - sm'>;
                      {benefit}
                    </span>                  </div>                  className="bg - gradient - to - br from - gray - 900 / 50 to - gray - 800 / 50 backdrop - blur - xl border border - gray - 700 / 50 rounded - xl p - 6 hover:border - yellow - 500 / 30 transition - all duration - 300 group";
                >;
                  <div className="flex items - center space - x-3">;
                    <CheckCircle className="w - 5 h - 5 text - yellow - 400" />;
                    <span className="text - white font - medium text - sm">{benefit}</span>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Use Cases Section */}
        <section className='py - 20 bg - gradient - to - b from - black to - gray - 900'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center mb - 16'        <section className="py - 20 bg - gradient - to - b from - black to - gray - 900">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                Comprehensive Financial Planning Solutions;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
                From retirement planning to investment management, our platform;
                provides AI - powered solutions for every aspect of your financial;
                life.;
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 2 md:grid - cols - 4 lg:grid - cols - 6 gap - 6'>              {use_cases.map ((use_case, index) => (            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
                Comprehensive Financial Planning Solutions;
              </h2>;
              <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
                From retirement planning to investment management, our platform provides AI - powered;
                solutions for every aspect of your financial life.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 2 md:grid - cols - 4 lg:grid - cols - 6 gap - 6">;
              {use_cases.map ((use_case, index) => (
                <motion.div;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

                  className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group text-center'




<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calculator className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{useCase}</span>
                </motion.div>

<<<<<<< HEAD




=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              ))}

            </div>;
          </div>;
        </section>;


<<<<<<< HEAD
<<<<<<< HEAD
</div>;
          </div>;
        </section>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-orange-900/20'>;
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>            <motion && motion.div        <section className="py-20 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-orange-900/20">;
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
            <motion&& motion.div
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group text-center'

                >
                  <div className='w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <Calculator className='w-6 h-6 text-yellow-400' />
                  </div>
                  <span className='text-white font-medium text-sm'>
                    {useCase}
                  </span>                </motion.div>                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calculator className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{useCase}</span>
                </motion.div>

              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-orange-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<<<<<<< HEAD

        {/* CTA Section */}
<<<<<<< HEAD
=======
        <section className="py-20 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-orange-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-orange-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-orange-900/20'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>            <motion.div


<<<<<<< HEAD
<<<<<<< HEAD
        <section className='py-20 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-orange-900/20'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>            <motion.div

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Financial Planning?
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Financial Planning?

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of individuals that have already revolutionized their financial planning
                with AI automation. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-yellow-500/25"
                >
                  Get Started Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-200'                >                  className="px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover: bg-yellow-500/10 transition-all duration-200"
=======

                  className="px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover: bg-yellow-500/10 transition-all duration-200"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                  className="px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover: bg-yellow-500/10 transition-all duration-200"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
<<<<<<< HEAD
              transition={{ duration: 0 && 0.8 }}>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              transition={{ duration: 0 && 0.8 }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                Ready to Transform Your Financial Planning?;
              </h2>;
              <p className='text-xl text-gray-300 mb-8'>;
                  className='bg - gradient - to - br from - gray - 900 / 50 to - gray - 800 / 50 backdrop - blur - xl border border - gray - 700 / 50 rounded - xl p - 6 hover:border - yellow - 500 / 30 transition - all duration - 300 group text - center';
                >;
                  <div className='w - 12 h - 12 bg - gradient - to - br from - yellow - 500 / 20 to - amber - 600 / 20 rounded - lg flex items - center justify - center mx - auto mb - 4 group - hover:scale - 110 transition - transform duration - 300'>;
                    <Calculator className='w - 6 h - 6 text - yellow - 400' />;
                  </div>;
                  <span className='text - white font - medium text - sm'>;
                    {use_case}
                  </span>                </motion.div>                >;
                  <div className="w - 12 h - 12 bg - gradient - to - br from - yellow - 500 / 20 to - amber - 600 / 20 rounded - lg flex items - center justify - center mx - auto mb - 4 group - hover:scale - 110 transition - transform duration - 300">;
                    <Calculator className="w - 6 h - 6 text - yellow - 400" />;
                  </div>;
                  <span className="text - white font - medium text - sm">{use_case}</span>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className='py - 20 bg - gradient - to - r from - yellow - 900 / 20 via - amber - 900 / 20 to - orange - 900 / 20'>;
          <div className='max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>            <motion.div        <section className="py - 20 bg - gradient - to - r from - yellow - 900 / 20 via - amber - 900 / 20 to - orange - 900 / 20">;
          <div className="max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                Ready to Transform Your Financial Planning?;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Join thousands of individuals that have already revolutionized;
                their financial planning with AI automation. Start your free;
                trial today.;
              </p>;
<<<<<<< HEAD
<<<<<<< HEAD

  );

  );
}
=======

  );
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

  );
}

=======

  );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className='px - 8 py - 4 bg - gradient - to - r from - yellow - 500 to - amber - 600 text - white rounded - xl font - semibold text - lg hover:from - yellow - 600 hover:to - amber - 700 transition - all duration - 200 shadow - lg shadow - yellow - 500 / 25'                >                Ready to Transform Your Financial Planning?;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8">;
                Join thousands of individuals that have already revolutionized their financial planning;
                with AI automation. Start your free trial today.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className="px - 8 py - 4 bg - gradient - to - r from - yellow - 500 to - amber - 600 text - white rounded - xl font - semibold text - lg hover:from - yellow - 600 hover:to - amber - 700 transition - all duration - 200 shadow - lg shadow - yellow - 500 / 25";
                >;
                  Get Started Now;
                </motion.button>;
                <motion.button;
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className='px - 8 py - 4 border - 2 border - yellow - 500 / 30 text - yellow - 400 rounded - xl font - semibold text - lg hover:bg - yellow - 500 / 10 transition - all duration - 200'                >                  className="px - 8 py - 4 border - 2 border - yellow - 500 / 30 text - yellow - 400 rounded - xl font - semibold text - lg hover: bg - yellow - 500 / 10 transition - all duration - 200";
                >;
                  Contact Sales;
                </motion.button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>);
<<<<<<< HEAD
);
  );
}
<<<<<<< HEAD

}
}
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
  );
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
