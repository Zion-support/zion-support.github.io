
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

  return (
    <>
      <Head>
        <title>Automation Hub - Zion Tech Group</title>
<meta
          name='description'
          content='AI-powered workflow automation platform that streamlines your business processes and increases efficiency.'
        />
      </Head>
      <div className='min-h-screen bg-black'>
        {/* Hero Section */}
        <section className='pt-32 pb-20 relative overflow-hidden'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]' />
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]' />
origin/cursor/automate-test-improve-and-merge-code-2533
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <RefreshCw className="w-4 h-4 mr-2" />
                Intelligent Automation
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Automation Hub
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              AI-powered workflow automation platform that streamlines your business processes and increases efficiency.
            </p>



              <a
                href="/contact" className="shadow-2xl shadow-blue-500/25">
                Start Automating
                <ArrowRight className="w-5 h-5 ml-2" />
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



              {features.map((feature, index) => (
                <div
                  key={index} className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
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

        {/* Benefits Section */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
<section className='py-24 bg-gray-900'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
origin/cursor/automate-test-improve-and-merge-code-2533
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
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">
                  <div className="text-center">
                    <RefreshCw className="w-24 h-24 mx-auto mb-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white mb-4">
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
                      Smart Workflows
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Create intelligent automation workflows that adapt to your business needs
                    </p>
                    <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm'>
                      <Zap className='w-4 h-4 mr-2' />
                      AI-powered optimization
origin/cursor/automate-test-improve-and-merge-code-2533
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">


        {/* CTA Section */}
<section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
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

              <a
                href='/contact'
                className='bg-white text-blue-600 hover:bg-gray-100'>;
                Start Free Trial;
              </a>;
              <a


              </a>;
            </div>;
          </div>;
        </section>;
      </div>;


  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


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
