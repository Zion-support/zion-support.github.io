<<<<<<< HEAD
import { Helmet } from "react-helmet-async";

import { Cloud, Shield,  } from "lucide-react";

const CloudMigrationProPage = () => {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Seamless Migration',
      description: 'Zero-downtime migration to cloud platforms with minimal business disruption'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security First',
      description: 'Enterprise-grade security protocols throughout the migration process'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Fast Migration',
      description: 'Accelerated migration timelines with automated tools and processes'
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: 'Data Migration',
      description: 'Safe and secure migration of databases and data warehouses'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock support during and after migration'
    },
    {
      icon: <Target className="w-6 h-6 text-pink-400" />,
      title: 'Custom Solutions',
      description: 'Tailored migration strategies for your specific business needs'
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive analysis of your current infrastructure and requirements'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Detailed migration strategy and timeline development'
    },
    {
      step: '03',
      title: 'Migration',
      description: 'Seamless execution of the migration with minimal downtime'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Post-migration optimization and performance tuning'
    }
  ];

  const migrationFeatures = [
    {
      category: 'Migration Types',
      items: ['Lift & Shift', 'Replatforming', 'Refactoring', 'Hybrid Cloud', 'Multi-Cloud', 'Cloud-to-Cloud']
    },
    {
      category: 'Platforms',
      items: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'Private Cloud', 'Hybrid Solutions', 'Multi-Cloud']
    },
    {
      category: 'Services',
      items: ['Application Migration', 'Database Migration', 'Data Migration', 'Workload Migration', 'Legacy Modernization', 'Cloud Native Development']
    },
    {
      category: 'Support',
      items: ['24/7 Monitoring', 'Migration Support', 'Training & Documentation', 'Post-Migration Support', 'Performance Optimization', 'Cost Optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Migration',
      price: '$2,999',
      period: '/project',
      description: 'Perfect for small applications',
      features: [
        'Up to 5 applications',
        'Basic migration support',
        'Email support',
        'Standard security',
        '30-day warranty'
      ],
      popular: false
    },
    {
      name: 'Professional Migration',
      price: '$7,999',
      period: '/project',
      description: 'Ideal for medium businesses',
      features: [
        'Up to 20 applications',
        'Advanced migration tools',
        '24/7 phone support',
        'Enhanced security',
        '90-day warranty',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: '$19,999',
      period: '/project',
      description: 'For large organizations',
      features: [
        'Unlimited applications',
        'Custom migration strategy',
        'Dedicated support team',
        'Enterprise security',
        '1-year warranty',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services with zero downtime. Expert migration to AWS, Azure, Google Cloud with enterprise-grade security." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cloud Migration
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Seamlessly migrate your applications and data to the cloud with zero downtime. 
                Our expert team ensures a smooth transition with enterprise-grade security.
>>>>>>> origin/main
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Migration
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Get Free Assessment
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12">"
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">"
              Get Started Today;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
=======
import React from "react";
import { Helmet } from "react-helmet-async";
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad

const PagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Professional services by Zion Tech Group." />
=======
        <meta name="description" content="Page - Zion Tech Group" />
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  ); }
>>>>>>> origin/main
            Page</h1>
          <p className="text-xl text-gray-600 mb-8">"
            Professional page solutions tailored to your business needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">"
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-blue-900 mb-2">"
                Expert Solutions</h3>
              <p className="text-blue-700">"
                Our team of experts delivers cutting-edge page solutions.</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-green-900 mb-2">"
                Custom Implementation</h3>
              <p className="text-green-700">"
                Tailored page implementations for your specific requirements.</p></div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-purple-900 mb-2">"
                24/7 Support</h3>
              <p className="text-purple-700">"
                Round-the-clock support for all your page needs.</p></div></div>
          <div className="mt-12">"
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">"
              Get Started Today</button></div></div></div></div>
  )
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
<<<<<<< HEAD
}''
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
=======
  );
};

export default PagePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
