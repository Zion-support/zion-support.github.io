<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
=======

<<<<<<< HEAD:pages.disabled/automation.tsx
import * as React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Settings, 
  Bot, 
  Workflow, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Shield,
  Globe,
=======
import React from 'react';
import Head from 'next / head';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {
  RefreshCw,
  Zap,
  Bot,
  Workflow,
  ArrowRight,
<<<<<<< HEAD
  Check,;
  BarChart3,;
} from 'lucide-react';
import React from 'react',
import React from 'react';
import Head from 'next / head';
import {
  RefreshCw,
  Zap,
  Bot,
  Workflow,
  ArrowRight,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Check,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
  BarChart3,
  Database
} from 'lucide-react';
import Layout from '../components/Layout';

const automationServices = [
  {
    title: "Process Automation",
    description: "Automate repetitive business processes to increase efficiency and reduce errors",
    icon: Workflow,
    features: [
      "Workflow Design",
      "Task Automation",
      "Approval Processes",
      "Document Processing",
      "Email Automation",
      "Data Entry Automation"
    ],
    price: "Starting at $1,500/month"
  },
  {
    title: "RPA Solutions",
    description: "Robotic Process Automation for complex business operations",
    icon: Bot,
    features: [
      "Bot Development",
      "Screen Scraping",
      "Data Extraction",
      "Form Filling",
      "Report Generation",
      "System Integration"
    ],
    price: "Starting at $2,000/month"
  },
  {
    title: "API Integration",
    description: "Connect disparate systems with seamless API integrations",
    icon: Settings,
    features: [
      "System Integration",
      "Data Synchronization",
      "Real-time Updates",
      "Error Handling",
      "Monitoring & Alerts",
      "Custom Connectors"
    ],
    price: "Starting at $1,800/month"
  },
  {
    title: "Workflow Management",
    description: "Streamline complex workflows with intelligent automation",
    icon: Zap,
    features: [
      "Visual Workflow Designer",
      "Conditional Logic",
      "Parallel Processing",
      "Exception Handling",
      "Performance Monitoring",
      "Scalable Architecture"
    ],
    price: "Starting at $2,200/month"
  },
  {
    title: "Data Automation",
    description: "Automate data processing, transformation, and analysis",
    icon: Database,
    features: [
      "ETL Processes",
      "Data Validation",
      "Report Generation",
      "Data Quality Checks",
      "Scheduled Processing",
      "Error Recovery"
    ],
    price: "Starting at $1,600/month"
  },
  {
    title: "Business Intelligence Automation",
    description: "Automate reporting and analytics for real-time insights",
    icon: BarChart3,
    features: [
      "Automated Reporting",
      "Dashboard Updates",
      "Alert Systems",
      "KPI Monitoring",
      "Trend Analysis",
      "Custom Metrics"
    ],
    price: "Starting at $2,500/month"
  }
];

const automationTypes = [
  {
    title: "IT Operations",
    description: "Server monitoring, backup automation, and system maintenance",
    icon: "💻"
  },
  {
    title: "HR Processes",
    description: "Employee onboarding, payroll processing, and performance tracking",
    icon: "👥"
  },
  {
    title: "Finance & Accounting",
    description: "Invoice processing, expense management, and financial reporting",
    icon: "💰"
  },
  {
    title: "Customer Service",
    description: "Ticket routing, response automation, and customer support workflows",
    icon: "🎧"
  },
  {
    title: "Marketing",
    description: "Campaign management, lead nurturing, and social media automation",
    icon: "📢"
  },
  {
    title: "Sales",
    description: "Lead qualification, follow-up automation, and pipeline management",
    icon: "📈"
  }
];

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Reduce manual work by up to 80% with intelligent automation",
    icon: "⚡"
  },
  {
    title: "Cost Savings",
    description: "Lower operational costs through reduced manual labor",
    icon: "💰"
  },
  {
    title: "Error Reduction",
    description: "Minimize human errors with consistent automated processes",
    icon: "🎯"
  },
  {
    title: "24/7 Operations",
    description: "Run automated processes around the clock without interruption",
    icon: "🕐"
  }
];

export default function AutomationPage() {

<<<<<<< HEAD:pages.disabled/automation.tsx
  return (
=======
<<<<<<< HEAD
import Head from 'next/head';

import {
  RefreshCw
  Zap
  Bot
  Workflow
  ArrowRight
  Check
  BarChart3;
} from 'lucide-react';
export default function AutomationPage() {
  const features = [
    {
      icon: <Workflow className='w-8 h-8 text-white' />
      title: 'Workflow Automation'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      description: 'Create complex workflows with drag-and-drop interface'
    }
    {
      icon: <Bot className='w-8 h-8 text-white' />
      title: 'AI-Powered Bots'
      description: 'Intelligent automation agents that learn and adapt'
    }
    {
      icon: <BarChart3 className='w-8 h-8 text-white' />
      title: 'Process Analytics'
      description: 'Real-time insights into your automation performance'
    }
    {
      icon: <Zap className='w-8 h-8 text-white' />
      title: 'Smart Triggers'
      description: 'Automated responses based on events and conditions'
    }
  ];
  const benefits = [
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
import Head from 'next/head';
import {;
  RefreshCw,;
  Zap,;
  Bot,;
  Workflow,;
  ArrowRight,;
  Check,;
  BarChart3,;
} from 'lucide-react';
export default function AutomationPage() {;
  const features = [;
    {;
      icon: <Workflow className='w-8 h-8 text-white' />,;
      title: 'Workflow Automation',;
      description: 'Create complex workflows with drag-and-drop interface',;
    },;
    {;
      icon: <Bot className='w-8 h-8 text-white' />,;
      title: 'AI-Powered Bots',;
      description: 'Intelligent automation agents that learn and adapt',;
    },;
    {;
      icon: <BarChart3 className='w-8 h-8 text-white' />,;
      title: 'Process Analytics',;
      description: 'Real-time insights into your automation performance',;
    },;
    {;
      icon: <Zap className='w-8 h-8 text-white' />,;
      title: 'Smart Triggers',;
      description: 'Automated responses based on events and conditions',;
    },;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export default function AutomationPage() {
  const features = [
    {
      icon: <Workflow className="w-8 h-8 text-white" />,
      title: 'Workflow Automation',
      description: 'Create complex workflows with drag-and-drop interface'
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Bots',
      description: 'Intelligent automation agents that learn and adapt'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Process Analytics',
      description: 'Real-time insights into your automation performance'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Smart Triggers',

      description: 'Automated responses based on events and conditions'
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],

  const benefits = [

<<<<<<< HEAD
    'Reduce manual tasks by 80%Improve process accuracyScale operations efficiently24/7 automated operationsReal-time monitoringCustom integration support'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    'Reduce manual tasks by 80%Improve process accuracyScale operations efficiently24/7 automated operationsReal-time monitoringCustom integration support'
  ];
  const benefits = [;
    'Reduce manual tasks by 80%',;
    'Improve process accuracy',;
    'Scale operations efficiently',;
    '24/7 automated operations',;
    'Real-time monitoring',;
      icon: <Workflow className='w - 8 h - 8 text - white' />,
      title: 'Workflow Automation',
      description: 'Create complex workflows with drag - and - drop interface',
    },
    {
      icon: <Bot className='w - 8 h - 8 text - white' />,
      title: 'AI - Powered Bots',
      description: 'Intelligent automation agents that learn and adapt',
    },
    {
      icon: <BarChart3 className='w - 8 h - 8 text - white' />,
      title: 'Process Analytics',
      description: 'Real - time insights into your automation performance',
    },
    {
      icon: <Zap className='w - 8 h - 8 text - white' />,
      title: 'Smart Triggers',
      description: 'Automated responses based on events and conditions',
    },
  ];
;
  const benefits = [;
    'Reduce manual tasks by 80%',
    'Improve process accuracy',
    'Scale operations efficiently',
    '24 / 7 automated operations',
    'Real - time monitoring',
    'Custom integration support',  ];
;
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
    <>
      <Head>
        <title>Automation Hub - Zion Tech Group</title>
<meta
          name='description'
          content='AI-powered workflow automation platform that streamlines your business processes and increases efficiency.'
        />
      </Head>
<<<<<<< HEAD:pages.disabled/automation.tsx
=======


export default function AutomationPage() {_const _features = [
    {
      icon: <Workflow className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Workflow Automation',
      description: 'Create complex workflows with drag-and-drop interface'
    },
    {
      icon: <Bot className=&quot;w-8 h-8 text-white&quot; />,
      title: 'AI-Powered Bots',
      description: 'Intelligent automation agents that learn and adapt'
    },
    {
      icon: <BarChart3 className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Process Analytics',
      description: 'Real-time insights into your automation performance'
    },
    {
      icon: <Zap className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Smart Triggers',
      description: 'Automated responses based on events and conditions'
    }
  ],

  const benefits = [
    'Reduce manual tasks by 80%Improve process accuracyScale operations efficiently24/7 automated operationsReal-time monitoringCustom integration support'
  ],
    'Reduce manual tasks by 80%'
    'Improve process accuracy'
    'Scale operations efficiently'
    '24/7 automated operations'
    'Real-time monitoring'
    'Custom integration support',  ];

import Head from 'next/head',
import { RefreshCw, Zap, Bot, Workflow, ArrowRight, Check, BarChart3 } from 'lucide-react',
export default function AutomationPage() {
  const features = [
    {
      icon: <Workflow className="w-8 h-8 text-white" />,
      title: 'Workflow Automation',
      description: 'Create complex workflows with drag-and-drop interface'
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Bots',
      description: 'Intelligent automation agents that learn and adapt'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Process Analytics',
      description: 'Real-time insights into your automation performance'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Smart Triggers',
      description: 'Automated responses based on events and conditions',
    },;
  ];

      description: 'Automated responses based on events and conditions'
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const benefits = [
    'Reduce manual tasks by 80%Improve process accuracyScale operations efficiently24/7 automated operationsReal-time monitoringCustom integration support'
  ],
  return (
=======
  return (

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <>
      <Head>
        <title>Automation Hub - Zion Tech Group</title>
        <meta name="description" content="AI-powered workflow automation platform that streamlines your business processes and increases efficiency." />
      </Head>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
      <div className='min-h-screen bg-black'>
        {/* Hero Section */}
        <section className='pt-32 pb-20 relative overflow-hidden'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]' />
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]' />
<<<<<<< HEAD:pages.disabled/automation.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          </div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
            <div className='mb-8'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>
                <RefreshCw className='w-4 h-4 mr-2' />
                Intelligent Automation
              </div>
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="min-h-screen bg-black">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <RefreshCw className="w-4 h-4 mr-2" />
                Intelligent Automation
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
<<<<<<< HEAD:pages.disabled/automation.tsx
=======
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
              Automation Hub
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              AI-powered workflow automation platform that streamlines your business processes and increases efficiency.
            </p>
<<<<<<< HEAD:pages.disabled/automation.tsx



=======
            <div className="flex flex-col sm:flex-row gap-6 justify-center">



<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <a href='/contact' className='shadow-2xl shadow-blue-500/25'>
                Start Automating
                <ArrowRight className='w-5 h-5 ml-2' />
              </a>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
              <a
                href="/contact" className="shadow-2xl shadow-blue-500/25">
                Start Automating
                <ArrowRight className="w-5 h-5 ml-2" />
<<<<<<< HEAD
        {/* Features Section */}
=======
<<<<<<< HEAD
              </a>
              <a
                href="/contact" className="border-white/20 hover:border-white/40">
                href='/contact'
                className='border-white/20 hover:border-white/40'
              >
origin/cursor/automate-test-improve-and-merge-code-2533
                View Demo
              </a>
            </div>
          </div>
        </section>

<<<<<<< HEAD:pages.disabled/automation.tsx


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        />;
      </Head>;
      <div className='min-h-screen bg-black'>;
        {/* Hero Section */}
        <section className='pt-32 pb-20 relative overflow-hidden'>;
          <div className='absolute inset-0'>;
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0 && 0.08),transparent_50%)]' />;
          </div>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>;
            <div className='mb-8'>;
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>;
                <RefreshCw className='w-4 h-4 mr-2' />;
                Intelligent Automation;
              </div>;
            </div>;
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>;
              Automation Hub;
            </h1>;
            <p className='text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed'>;
              AI-powered workflow automation platform that streamlines your;
              business processes and increases efficiency.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>;
              <a href='/contact' className='shadow-2xl shadow-blue-500/25'>;
                Start Automating;
                <ArrowRight className='w-5 h-5 ml-2' />;
              </a>;
              <a
                href='/contact'
                className='border-white/20 hover:border-white/40'>                View Demo;
              </a>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className='py-24'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='text-center mb-20'>;
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
                Automation Features;
              </h2>;
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>                Powerful tools to automate any business process;
              </p>;
            </div>;
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>;
              {features && features.map((feature, index) => (;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div
                  key={index}
                  className='p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300'>;
                  <div className='w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center'>;
                    {feature && feature.icon}
                  </div>;
                  <h3 className='text-xl font-bold text-white mb-4'>;
                    {feature && feature.title}
                  </h3>;
                  <p className='text-gray-400 leading-relaxed'>                    {feature && feature.description}
                  </p>;
                </div>;

<<<<<<< HEAD

              </Link>
              <a
                href="/contact" className="border-white/20 hover:border-white/40">
                View Demo
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className='py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
=======
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Features Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
                Automation Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        {/* Features Section */}
<section className='py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
                Automation Features
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
origin/cursor/automate-test-improve-and-merge-code-2533
                Powerful tools to automate any business process
              </p>
            </div>
<<<<<<< HEAD:pages.disabled/automation.tsx



=======
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">



<<<<<<< HEAD
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
              {features.map((feature, index) => (
                <div
                  key={index} className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
<<<<<<< HEAD:pages.disabled/automation.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </p>;
                </div>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            </div>;
<<<<<<< HEAD
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
</div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>;
        </section>;
<<<<<<< HEAD:pages.disabled/automation.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
        {/* Benefits Section */}
        <section className='py-24 bg-gray-900'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>;
              <div>;
                <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>;
                  Transform Your Business with Automation;
                </h2>;
                <div className='space-y-6'>;
                  {benefits && benefits.map((benefit, index) => (;
                    <div key={index} className='flex items-start'>;
                      <div className='w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1'>;
                        <Check className='w-4 h-4 text-blue-500' />;
                      </div>;
                      <span className='text-gray-300 text-lg'>{benefit}</span>                    </div>;
<<<<<<< HEAD:pages.disabled/automation.tsx

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
        {/* Benefits Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<<<<<<< HEAD:pages.disabled/automation.tsx
<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300'
                >
                  <div className='w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center'>
                    {feature.icon}
                  </div>
                  <h3 className='text-xl font-bold text-white mb-4'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-400 leading-relaxed'>
                    {feature.description}
=======
<<<<<<< HEAD
                    {feature.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </h3>
                  <p className='text-gray-400 leading-relaxed'>                    {feature.description}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
<<<<<<< HEAD:pages.disabled/automation.tsx
<section className='py-24 bg-gray-900'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
        <section className='py-24 bg-gray-900'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </p>;
                </div>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          </div>;
        </section>;
        {/* Benefits Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                  Transform Your Business with Automation
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                        <Check className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
<<<<<<< HEAD:pages.disabled/automation.tsx
=======
<<<<<<< HEAD
                  ))}
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>
              </div>
                  ))}

              


              <div className='relative'>
                <div className='bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20'>
                  <div className='text-center'>
                    <RefreshCw className='w-24 h-24 mx-auto mb-6 text-blue-400' />
                    <h3 className='text-2xl font-bold text-white mb-4'>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  ))}

              
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">
                  <div className="text-center">
                    <RefreshCw className="w-24 h-24 mx-auto mb-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white mb-4">
<<<<<<< HEAD:pages.disabled/automation.tsx
                      <span className='text-gray-300 text-lg'>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
<div className='relative'>
                <div className='bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20'>
                  <div className='text-center'>
                    <RefreshCw className='w-24 h-24 mx-auto mb-6 text-blue-400' />
                    <h3 className='text-2xl font-bold text-white mb-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
                      Smart Workflows
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Create intelligent automation workflows that adapt to your business needs
                    </p>
                    <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm'>
                      <Zap className='w-4 h-4 mr-2' />
                      AI-powered optimization
<<<<<<< HEAD:pages.disabled/automation.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD:pages.disabled/automation.tsx
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        {/* CTA Section */}
        <section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700'>
          <div className='max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD:pages.disabled/automation.tsx


        {/* CTA Section */}
<section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start automating your business processes today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Link>
              <a
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Demo
              </Link>
                href='/contact'
                className='border-white text-white hover:bg-white hover:text-blue-600'
              >
                Schedule Demo
              </a>
origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
          </div>
        </section>
      </div>
    </>


}

  )
        <section className="py-24 bg-gray-900">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">;
              <div>;
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">;
                  Transform Your Business with Automation;
                </h2>;
                <div className="space-y-6">;
                  {benefits.map((benefit, index) => (;
                    <div key={index} className="flex items-start">;
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">;
                        <Check className="w-4 h-4 text-blue-500" />;
                      </div>;
                      <span className="text-gray-300 text-lg">{benefit}</span>;
                    </div>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
<<<<<<< HEAD
</div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>;
              <div className='relative'>;
                <div className='bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20'>;
                  <div className='text-center'>;
                    <RefreshCw className='w-24 h-24 mx-auto mb-6 text-blue-400' />;
                    <h3 className='text-2xl font-bold text-white mb-4'>;
                      Smart Workflows;
                    </h3>;
                    <p className='text-gray-300 mb-6'>;
                      Create intelligent automation workflows that adapt to your;
                      business needs;
                    </p>;
                    <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm'>;
                      <Zap className='w-4 h-4 mr-2' />                      AI-powered optimization;
    <>;
      <Head>;
        <title > Automation Hub - Zion Tech Group</title>;
        <meta;
          name='description';
          content='AI - powered workflow automation platform that streamlines your business processes and increases efficiency.';
        />;
      </Head>;
      <div className='min - h-screen bg - black'>;
        {/* Hero Section */}
        <section className='pt - 32 pb - 20 relative overflow - hidden'>;
          <div className='absolute inset - 0'>;
            <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (59, 130, 246, 0.1), transparent_50%)]' />;
            <div className='absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (59, 130, 246, 0.08), transparent_50%)]' />;
          </div>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center relative z - 10'>;
            <div className='mb - 8'>;
              <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - blue - 500 / 10 border border - blue - 500 / 20 text - blue - 400 text - sm font - medium mb - 6'>;
                <RefreshCw className='w - 4 h - 4 mr - 2' />;
                Intelligent Automation;
              </div>;
            </div>;
            <h1 className='text - 4xl sm:text - 5xl lg:text - 6xl font - bold text - white mb - 8 leading - tight'>;
              Automation Hub;
            </h1>;
            <p className='text - xl sm:text - 2xl text - gray - 300 max - w-4xl mx - auto mb - 12 leading - relaxed'>;
              AI - powered workflow automation platform that streamlines your;
              business processes and increases efficiency.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 6 justify - center'>;
              <a href='/contact' className='shadow - 2xl shadow - blue - 500 / 25'>;
                Start Automating;
                <ArrowRight className='w - 5 h - 5 ml - 2' />;
              </a>;
              <a;
                href='/contact';
                className='border - white / 20 hover:border - white / 40';
              >                View Demo;
              </a>;
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className='py - 24'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 20'>;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 6'>;
                Automation Features;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>                Powerful tools to automate any business process;
              </p>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>;
              {features.map ((feature, index) => (
                <div;
                  key={index}
                  className='p - 8 bg - gray - 900 / 50 rounded - 2xl border border - gray - 800 hover:border - blue - 500 / 30 hover:bg - gray - 900 / 80 transition - all duration - 300';
                >;
                  <div className='w - 16 h - 16 mb - 6 rounded - 2xl bg - gradient - to - br from - blue - 500 to - blue - 600 flex items - center justify - center'>;
                    {feature.icon}
                  </div>;
                  <h3 className='text - xl font - bold text - white mb - 4'>;
                    {feature.title}
                  </h3>;
                  <p className='text - gray - 400 leading - relaxed'>                    {feature.description}
                  </p>;
                </div>))}
            </div>;
          </div>;
        </section>;
        {/* Benefits Section */}
        <section className='py - 24 bg - gray - 900'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 16 items - center'>;
              <div>;
                <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
                  Transform Your Business with Automation;
                </h2>;
                <div className='space - y-6'>;
                  {benefits.map ((benefit, index) => (
                    <div key={index} className='flex items - start'>;
                      <div className='w - 6 h - 6 rounded - full bg - blue - 500 / 20 flex items - center justify - center mr - 4 mt - 1'>;
                        <Check className='w - 4 h - 4 text - blue - 500' />;
                      </div>;
                      <span className='text - gray - 300 text - lg'>{benefit}</span>                    </div>))}
                </div>;
              </div>;
              <div className='relative'>;
                <div className='bg - gradient - to - br from - blue - 500 / 10 to - purple - 500 / 10 rounded - 3xl p - 8 border border - blue - 500 / 20'>;
                  <div className='text - center'>;
                    <RefreshCw className='w - 24 h - 24 mx - auto mb - 6 text - blue - 400' />;
                    <h3 className='text - 2xl font - bold text - white mb - 4'>;
                      Smart Workflows;
                    </h3>;
                    <p className='text - gray - 300 mb - 6'>;
                      Create intelligent automation workflows that adapt to your;
                      business needs;
                    </p>;
                    <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - blue - 500 / 20 text - blue - 400 text - sm'>;
                      <Zap className='w - 4 h - 4 mr - 2' />                      AI - powered optimization;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;

<<<<<<< HEAD:pages.disabled/automation.tsx
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start automating your business processes today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
              <a
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Demo
              </a>
                href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Link>
              <a
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
);

}
  )
        <section className="py-24 bg-gray-900">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">;
              <div>;
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">;
                  Transform Your Business with Automation;
                </h2>;
                <div className="space-y-6">;
                  {benefits.map((benefit, index) => (;
                    <div key={index} className="flex items-start">;
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">;
                        <Check className="w-4 h-4 text-blue-500" />;
                      </div>;
                      <span className="text-gray-300 text-lg">{benefit}</span>;
                    </div>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
              </div>;
              <div className="relative">;
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">;
                  <div className="text-center">;
                    <RefreshCw className="w-24 h-24 mx-auto mb-6 text-blue-400" />;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      Smart Workflows;
                    </h3>;
                    <p className="text-gray-300 mb-6">;
                      Create intelligent automation workflows that adapt to your business needs;
                    </p>;
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm">;
                      <Zap className="w-4 h-4 mr-2" />;
                      AI-powered optimization;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">;
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">;
              Ready to Automate Your Workflows?;
            </h2>;
            <p className="text-xl text-blue-100 mb-8">;
              Start automating your business processes today;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">;
                Start Free Trial;
              </a>;
              <a;
                href="/contact" className="border-white text-white hover:bg-white hover:text-blue-600">;
                Schedule Demo;
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
              <a
<<<<<<< HEAD
                href='/contact'
                className='bg-white text-blue-600 hover:bg-gray-100'>;
                Start Free Trial;
              </a>;
              <a


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </a>;
            </div>;
          </div>;
        </section>;
      </div>;
<<<<<<< HEAD
    </>);
;
    </>;
  );
=======


<<<<<<< HEAD:pages.disabled/automation.tsx
=======
=======
    </>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
=======

<<<<<<< HEAD:pages.disabled/automation.tsx
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Automation Services</h1>
          <p className="text-center text-gray-600">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default AutomationPage;
);
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/automation.tsx
