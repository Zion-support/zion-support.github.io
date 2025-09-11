<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import Head from 'next / head';

import { motion } from 'framer-motion';

import {

  BarChart3,
  Database,
  Zap,
  Shield,
  Rocket,
  Cpu,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  TrendingUp,

<<<<<<< HEAD
<<<<<<< HEAD
  BarChart3
  Database
  Zap
  Shield
  Rocket
  Cpu
  ArrowRight
  CheckCircle
  Star
  Users
  Clock
  TrendingUp;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';
export default function AnalyticsServicesPage() {
  const services = [
    {
<<<<<<< HEAD
=======
} from 'lucide-react';
import EnhancedNavigation from '../../components / EnhancedNavigation';
import EnhancedFooter from '../../components / EnhancedFooter';
export default /**
 * AnalyticsServicesPage - Function description
 */
function AnalyticsServicesPage() {
  const services = [;
    {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      title: 'Big Data Processing'
      description: 'Scalable data processing and analytics platforms'
      features: [
        'Data Pipeline Engineering'
        'Real-time Processing'
        'Batch Processing'
        'Data Quality'
      ]
      price: 'From $8,000'
      icon: Database
      color: 'from-indigo-500 to-purple-500'
    }
    {
      title: 'Business Intelligence'
      description: 'Interactive dashboards and reporting solutions'
      features: [
        'Custom Dashboards'
        'KPI Tracking'
        'Data Visualization'
        'Automated Reports'
      ]
      price: 'From $5,000'
      icon: BarChart3
      color: 'from-blue-500 to-cyan-500'
    }
    {
      title: 'Predictive Analytics'
      description: 'AI-powered predictive modeling and forecasting'
      features: [
        'Machine Learning Models'
        'Forecasting'
        'Risk Assessment'
        'Trend Analysis'
      ]
      price: 'From $12,000'
      icon: Zap
      color: 'from-purple-500 to-pink-500'
    }
    {
      title: 'Data Strategy & Governance'
      description: 'Comprehensive data strategy and governance frameworks'
      features: [
        'Data Architecture'
        'Governance Policies'
        'Compliance'
        'Data Quality'
      ]
      price: 'From $10,000'
      icon: Shield
      color: 'from-emerald-500 to-teal-500'
    }
  ];
  const stats = [
    { number: '1M+', label: 'Data Points Processed', icon: Database }
    { number: '95%', label: 'Accuracy Rate', icon: CheckCircle }
    { number: '24/7', label: 'Real-time Analytics', icon: Clock }
    { number: '300%', label: 'ROI Improvement', icon: TrendingUp }
  ];

=======
<<<<<<< HEAD


=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  BarChart3,
  Database,
  Zap,
  Shield,
  Rocket,
  Cpu,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  Clock,
  TrendingUp,
} from 'lucide-react';
import EnhancedNavigation from '../../components / EnhancedNavigation';
import EnhancedFooter from '../../components / EnhancedFooter';
export default /**
 * AnalyticsServicesPage - Function description
 */
function AnalyticsServicesPage() {
  const services = [;
    {
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      title: 'Big Data Processing',
      description: 'Scalable data processing and analytics platforms',
      features: [;
        'Data Pipeline Engineering',
        'Real - time Processing',
        'Batch Processing',
        'Data Quality',
      ],
      price: 'From $8, 000',
      icon: Database,
<<<<<<< HEAD
      color: 'from - indigo - 500 to - purple - 500',
    },
    {
      title: 'Business Intelligence',
      description: 'Interactive dashboards and reporting solutions',
      features: [;
        'Custom Dashboards',
        'KPI Tracking',
        'Data Visualization',
        'Automated Reports',
      ],
      price: 'From $5, 000',
      icon: BarChart3,
      color: 'from - blue - 500 to - cyan - 500',
    },
    {
      title: 'Predictive Analytics',
      description: 'AI - powered predictive modeling and forecasting',
      features: [;
        'Machine Learning Models',
        'Forecasting',
        'Risk Assessment',
        'Trend Analysis',
      ],
      price: 'From $12, 000',
      icon: Zap,
      color: 'from - purple - 500 to - pink - 500',
    },
    {
      title: 'Data Strategy & Governance',
      description: 'Comprehensive data strategy and governance frameworks',
      features: [;
        'Data Architecture',
        'Governance Policies',
        'Compliance',
        'Data Quality',
      ],
      price: 'From $10, 000',
      icon: Shield,
      color: 'from - emerald - 500 to - teal - 500',
    },
  ];
;
  const stats = [;
    { number: '1M+', label: 'Data Points Processed', icon: Database },
    { number: '95%', label: 'Accuracy Rate', icon: CheckCircle },
    { number: '24 / 7', label: 'Real - time Analytics', icon: Clock },
    { number: '300%', label: 'ROI Improvement', icon: TrendingUp },
  ];
;
  return (
<<<<<<< HEAD
          href='https://ziontechgroup && ziontechgroup.com/services/analytics'
        />      </Head>;
      <EnhancedNavigation />;
=======

          href='https://ziontechgroup && ziontechgroup.com/services/analytics'
        />      </Head>;
      <EnhancedNavigation />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 px-6'>;
        <div className='max-w-7xl mx-auto text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
import { 
  BarChart3, Database, Zap, Shield, Rocket, Cpu, 
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';
  Clock,;
  TrendingUp,;
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import {
  BarChart3, Database, Zap, Shield, Rocket, Cpu,
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp
} from 'lucide-react',
import EnhancedNavigation from '../../components/EnhancedNavigation',
import EnhancedFooter from '../../components/EnhancedFooter',
export default function AnalyticsServicesPage() {
  const services = [
    {
      title: "Big Data Processing",
      description: "Scalable data processing and analytics platforms",
      features: ["Data Pipeline Engineering", "Real-time Processing", "Batch Processing", "Data Quality"],
      price: "From $8,000",
      icon: Database,
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Business Intelligence",
      description: "Interactive dashboards and reporting solutions",
      features: ["Custom Dashboards", "KPI Tracking", "Data Visualization", "Automated Reports"],
      price: "From $5,000",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered predictive modeling and forecasting",
      features: ["Machine Learning Models", "Forecasting", "Risk Assessment", "Trend Analysis"],
      price: "From $12,000",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Strategy & Governance",
      description: "Comprehensive data strategy and governance frameworks",
      features: ["Data Architecture", "Governance Policies", "Compliance", "Data Quality"],
      price: "From $10,000",
      icon: Shield,
      color: 'from-emerald-500 to-teal-500',
    },;
  ];

      color: "from-emerald-500 to-teal-500"
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const stats = [
    { number: "1M+", label: "Data Points Processed", icon: Database },
    { number: "95%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "24/7", label: "Real-time Analytics", icon: Clock },
    { number: "300%", label: "ROI Improvement", icon: TrendingUp   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Data Analytics Services - Zion Tech Group</title>
        <meta
          name='description'
          content='Advanced data analytics solutions from Zion Tech Group. Big data processing, business intelligence, predictive analytics, and data strategy services.'
        />
        <meta
          property='og:title'
          content='Data Analytics Services - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Advanced data analytics solutions for data-driven decision making.'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/services/analytics'
        />      </Head>
      <EnhancedNavigation />
      {/* Hero Section */}
<<<<<<< HEAD
      <section className='relative pt-32 pb-20 px-6'>
        <div className='max-w-7xl mx-auto text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8'
        <meta name="description" content="Advanced data analytics solutions from Zion Tech Group. Big data processing, business intelligence, predictive analytics, and data strategy services." />
        <meta property="og:title" content="Data Analytics Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced data analytics solutions for data-driven decision making." />
        <link rel="canonical" href="https://ziontechgroup.com/services/analytics" />
      </Head>
      <EnhancedNavigation />
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
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
            className="mb-8"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <section className='relative pt-32 pb-20 px-6'>;
        <div className='max-w-7xl mx-auto text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              Data Analytics
            </h1>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Transform raw data into actionable insights that drive business growth


            </p>
            <button className='px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>
              Data Consultation
              <ArrowRight className='w-5 h-5' />            </button>
          </motion.div>
        </div>
      </section>
            transition={{ duration: 0 && 0.8 }}
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
              Transform raw data into actionable insights that drive business
              growth            </p>
          </motion.div>
          <motion.div
<<<<<<< HEAD
=======
            className='mb-8'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6'>;
              Data Analytics;
            </h1>;
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
              Transform raw data into actionable insights that drive business;
              growth            </p>;
          </motion && motion.div>;
          <motion&& motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
=======
            className='mb - 12';
          >;
            <p className='text - lg text - white / 70 max - w-2xl mx - auto mb - 8'>;
              From big data processing to predictive analytics, we help;
              businesses harness the power of their data to make informed;
              decisions and gain competitive advantages.;
            </p>;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From big data processing to predictive analytics, we help businesses harness the power 
=======
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='mb-12'
          >
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>
              From big data processing to predictive analytics, we help
              businesses harness the power of their data to make informed
              decisions and gain competitive advantages.
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Transform raw data into actionable insights that drive business growth
<<<<<<< HEAD
            </p>
          </motion.div>
          <motion.div
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
            transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From big data processing to predictive analytics, we help businesses harness the power
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            </p>
            <button className='px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>
              Data Consultation
              <ArrowRight className='w-5 h-5' />            </button>
          </motion.div>
        </div>
      </section>
=======
            transition={{ duration: 0 && 0.8 }}
            className='mb-8'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6'>;
              Data Analytics;
            </h1>;
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
              Transform raw data into actionable insights that drive business;
              growth            </p>;
          </motion && motion.div>;

          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
            className='mb-12'>;
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>;
=======
    <div className='min - h-screen bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950 text - white'>;
      <Head>;
        <title > Data Analytics Services - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Advanced data analytics solutions from Zion Tech Group. Big data processing, business intelligence, predictive analytics, and data strategy services.';
        />;
        <meta;
          property='og:title';
          content='Data Analytics Services - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Advanced data analytics solutions for data - driven decision making.';
        />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / services / analytics';
        />      </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */}
      <section className='relative pt - 32 pb - 20 px - 6'>;
        <div className='max - w-7xl mx - auto text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb - 8';
          >;
            <h1 className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - indigo - 400 via - purple - 400 to - indigo - 400 bg - clip - text text - transparent mb - 6'>;
              Data Analytics;
            </h1>;
            <p className='text - xl md:text - 2xl text - white / 80 max - w-3xl mx - auto leading - relaxed'>;
              Transform raw data into actionable insights that drive business;
              growth            </p>;
          </motion.div>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb - 12';
          >;
            <p className='text - lg text - white / 70 max - w-2xl mx - auto mb - 8'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              From big data processing to predictive analytics, we help;
              businesses harness the power of their data to make informed;
              decisions and gain competitive advantages.;
            </p>;

=======
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From big data processing to predictive analytics, we help businesses harness the power 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              of their data to make informed decisions and gain competitive advantages.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Data Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Stats Section */}
      <section className='py-16 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className='text-center'
      {/* Stats Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div;
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {;
  BarChart3, Database, Zap, Shield, Rocket, Cpu,;
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp;
} from 'lucide-react',;
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';
export default function AnalyticsServicesPage(req, res) {
  try {
  const services = [;
    {;
      title: "Big Data Processing";
      description: "Scalable data processing and analytics platforms";
      features: ["Data Pipeline Engineering", "Real-time Processing", "Batch Processing", "Data Quality"],;
      price: "From $8,000",;
      icon: Database,;
      color: "from-indigo-500 to-purple-500";
    },;
    {;
      title: "Business Intelligence",;
      description: "Interactive dashboards and reporting solutions",;
      features: ["Custom Dashboards", "KPI Tracking", "Data Visualization", "Automated Reports"],;
      price: "From $5,000",;
      icon: BarChart3,;
      color: "from-blue-500 to-cyan-500";
    },;
    {;
      title: "Predictive Analytics",;
      description: "AI-powered predictive modeling and forecasting",;
      features: ["Machine Learning Models", "Forecasting", "Risk Assessment", "Trend Analysis"],;
      price: "From $12,000",;
      icon: Zap,;
      color: "from-purple-500 to-pink-500";
    },;
    {;
      title: "Data Strategy & Governance",;
      description: "Comprehensive data strategy and governance frameworks",;
      features: ["Data Architecture", "Governance Policies", "Compliance", "Data Quality"],;
      price: "From $10,000",;
      icon: Shield,;
      color: "from-emerald-500 to-teal-500";
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const stats = [;
    { number: "1M+", label: "Data Points Processed", icon: Database },;
    { number: "95%", label: "Accuracy Rate", icon: CheckCircle },;
    { number: "24/7", label: "Real-time Analytics", icon: Clock };
    { number: "300%", label: "ROI Improvement", icon: TrendingUp   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ];
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;
      <Head>;
        <title>Data Analytics Services - Zion Tech Group</title>;
        <meta name="description" content="Advanced data analytics solutions from Zion Tech Group. Big data processing, business intelligence, predictive analytics, and data strategy services." />;
        <meta property="og:title" content="Data Analytics Services - Zion Tech Group" />;
        <meta property="og:description" content="Advanced data analytics solutions for data-driven decision making." />;
        <link rel="canonical" href="https://ziontechgroup.com/services/analytics" />;
      </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative pt-32 pb-20 px-6">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
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
            className="mb-8";
          >;
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">;
              Data Analytics;
            </h1>;
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">;
              Transform raw data into actionable insights that drive business growth;
            </p>;
          </motion.div>;
          <motion.div;
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
            transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="mb-12";
          >;
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">;
              From big data processing to predictive analytics, we help businesses harness the power;
              of their data to make informed decisions and gain competitive advantages.;
            </p>;
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">;
              Data Consultation;
              <ArrowRight className="w-5 h-5" />;
            </button>;
          </motion.div>;
        </div>;
      </section>;
      {/* Stats Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-16 px-6">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
            {stats.map((stat, index) => (;
              <motion.div;
                key={stat.label  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 20 }  } catch (error) {
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
                className="text-center"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}

          </div>;
        </div>;
      </section>;


      {/* Services Grid */}
      <section className='py-20 px-6'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className='text-3xl font-bold text-white mb-2'>
                  {stat.number}
                </div>
                <div className='text-white/70'>{stat.label}</div>              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>          <motion.div
<<<<<<< HEAD
=======
=======
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            ))}

          </div>;
        </div>;
      </section>;


      {/* Services Grid */}
      <section className='py-20 px-6'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='text-center mb-16'
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
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
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-4xl font-bold text-white mb-6">Data Analytics Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive analytics solutions designed to unlock the value of your data
            </p>
          </motion.div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
<<<<<<< HEAD
              <motion.div


          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {services.map((service, index) => (
              <motion.div
                key={service.title}
=======
=======
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300'
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              <motion.div


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Data Analytics Services;
            </h2>;
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>;
              Comprehensive analytics solutions designed to unlock the value of;
              your data;
            </p>;
          </motion && motion.div>;
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {services && services.map((service, index) => (;
              <motion&& motion.div
                key={service && service.title}
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {services && services.map((service, index) => (;
              <motion&& motion.div
                key={service && service.title}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300'
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <h3 className='text-2xl font-bold text-white mb-4'>
                  {service.title}
                </h3>
                <p className='text-white/70 mb-6'>{service.description}</p>
                <ul className='space-y-3 mb-6'>
                  {service.features.map(feature => (
                    <li
                      key={feature}
                      className='flex items-center text-white/80'
                    >
                      <CheckCircle className='w-5 h-5 text-purple-400 mr-3 flex-shrink-0' />                      {feature}
                    </li>
                  ))}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      {feature  } catch (error) {
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
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
<<<<<<< HEAD
            ))}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
=======
            ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className='py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
          </div>;
        </div>;
      </section>;
      {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
=======
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py-20 px-6'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div
=======

          </div>;
        </div>;
      </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* CTA Section */}
      <section className='py-20 px-6'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
          >
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          >

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our data analytics solutions can transform your business insights and drive data-driven decision making.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Data Assessment
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                View Demos
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </button>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <EnhancedFooter />
    </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <EnhancedFooter />
    </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


),

}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Data Analytics Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive analytics solutions designed to unlock the value of your data </p> </motion.div> Get Started </button> </div> </motion.div>) ) 


}</div> </div> </section> <motion.div initial= {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Ready to Unlock Your Data's Potential?;
            </h2>;
            <p className='text-xl text-white/70 mb-8 max-w-2xl mx-auto'>;
              Let's discuss how our data analytics solutions can transform your;
              business insights and drive data-driven decision making.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <button className='px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>;
                Data Assessment;
              </button>;
              <button className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>                View Demos;
              </button>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD
      <EnhancedFooter />;
    </div>;
  ),;
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Data Analytics Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive analytics solutions designed to unlock the value of your data </p> </motion && motion.div> Get Started </button> </div> </motion && motion.div>) ) ;
}</div> </div> </section> <motion&& motion.div initial= {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <EnhancedFooter />
    </div>
)
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Data Analytics Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive analytics solutions designed to unlock the value of your data </p> </motion.div> Get Started </button> </div> </motion.div>) )
),

}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Data Analytics Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive analytics solutions designed to unlock the value of your data </p> </motion.div> Get Started </button> </div> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
=======

      <EnhancedFooter />;
    </div>;
  ),;

}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Data Analytics Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive analytics solutions designed to unlock the value of your data </p> </motion && motion.div> Get Started </button> </div> </motion && motion.div>) ) ;
}</div> </div> </section> <motion&& motion.div initial= {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  duration: 0 && 0.8 
=======

  duration: 0 && 0.8 

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}viewport= {
  {
  once: true 

}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Unlock Your Data's Potential? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how our data analytics solutions can transform your business insights and drive data-driven decision making. </p> Data Assessment </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > View Demos </button> </div> </motion && motion.div> </div> </section> <EnhancedFooter /> </div>) ;

<<<<<<< HEAD
<<<<<<< HEAD
  once: true 
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Unlock Your Data's Potential? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how our data analytics solutions can transform your business insights and drive data-driven decision making. </p> Data Assessment </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > View Demos </button> </div> </motion && motion.div> </div> </section> <EnhancedFooter /> </div>) ;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  )
}
=======
=======
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <button className='px - 8 py - 4 bg - gradient - to - r from - indigo - 600 to - purple - 600 hover:from - indigo - 700 hover:to - purple - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center justify - center gap - 2 mx - auto'>;
              Data Consultation;
              <ArrowRight className='w - 5 h - 5' />            </button>;
          </motion.div>;
        </div>;
      </section>;
      {/* Stats Section */}
      <section className='py - 16 px - 6'>;
        <div className='max - w-7xl mx - auto'>;
          <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 8'>            {stats.map ((stat, index) => (
              <motion.div;
                key={stat.label}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text - center';
              >;
                <div className='w - 16 h - 16 bg - gradient - to - br from - indigo - 500 / 20 to - purple - 500 / 20 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                  <stat.icon className='w - 8 h - 8 text - purple - 400' />;
                </div>;
                <div className='text - 3xl font - bold text - white mb - 2'>;
                  {stat.number}
                </div>;
                <div className='text - white / 70'>{stat.label}</div>              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className='py - 20 px - 6'>;
        <div className='max - w-7xl mx - auto'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Data Analytics Services;
            </h2>;
            <p className='text - xl text - white / 70 max - w-3xl mx - auto'>;
              Comprehensive analytics solutions designed to unlock the value of;
              your data;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>            {services.map ((service, index) => (
              <motion.div;
                key={service.title}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg - gradient - to - br from - slate - 800 / 50 to - slate - 900 / 50 backdrop - blur - xl border border - white / 10 rounded - 2xl p - 8 hover:border - purple - 500 / 30 transition - all duration - 300';
              >;
                <div;
                  className={`w - 16 h - 16 bg - gradient - to - br ${service.color} rounded - 2xl flex items - center justify - center mb - 6`}
                >;
                  <service.icon className='w - 8 h - 8 text - white' />;
                </div>;
                <h3 className='text - 2xl font - bold text - white mb - 4'>;
                  {service.title}
                </h3>;
                <p className='text - white / 70 mb - 6'>{service.description}</p>;
                <ul className='space - y-3 mb - 6'>;
                  {service.features.map (feature => (
                    <li;
                      key={feature}
                      className='flex items - center text - white / 80';
                    >;
                      <CheckCircle className='w - 5 h - 5 text - purple - 400 mr - 3 flex - shrink - 0' />                      {feature}
                    </li>))}
                </ul>;
                <div className='flex items - center justify - between'>;
                  <span className='text - 2xl font - bold text - purple - 400'>;
                    {service.price}
                  </span>;
                  <button className='px - 6 py - 3 bg - gradient - to - r from - indigo - 600 to - purple - 600 hover:from - indigo - 700 hover:to - purple - 700 rounded - full font - semibold text - white transition - all duration - 300 transform hover:scale - 105'>                    Get Started;
                  </button>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py - 20 px - 6'>;
        <div className='max - w-4xl mx - auto text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Ready to Unlock Your Data's Potential?;
            </h2>;
            <p className='text - xl text - white / 70 mb - 8 max - w-2xl mx - auto'>;
              Let's discuss how our data analytics solutions can transform your;
              business insights and drive data - driven decision making.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <button className='px - 8 py - 4 bg - gradient - to - r from - indigo - 600 to - purple - 600 hover:from - indigo - 700 hover:to - purple - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105'>;
                Data Assessment;
              </button>;
              <button className='px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10'>                View Demos;
<<<<<<< HEAD
  once: true
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Unlock Your Data's Potential? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how our data analytics solutions can transform your business insights and drive data-driven decision making. </p> Data Assessment </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > View Demos </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>)

}
}
}
  )
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Unlock Your Data's Potential?;
            </h2>;
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">;
              Let's discuss how our data analytics solutions can transform your business insights and drive data-driven decision making.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">;
                Data Assessment;
              </button>;
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">;
                View Demos;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
