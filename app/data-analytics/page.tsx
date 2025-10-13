<<<<<<< HEAD
=======
'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import {BarChart,}
=======
import { Helmet } from 'react-helmet-async'
import {
    BarChart,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  TrendingUp,
  Database,
  CheckCircle,
  Brain,
  Clock,
  Users,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Globe,
  Lock,
  Activity,
  Settings,
<<<<<<< HEAD

  Target,

  Eye,

  PieChart,

  LineChart;} from 'lucide-react'
const DataAnalyticsPage: React.FC = () => {
  const features = [
=======
  Target,
  Eye,
  PieChart,
<<<<<<< HEAD
  LineChart
  }
} from 'lucide-react'
const DataAnalyticsPage: React.FC = () => {
const features = [
=======
} from 'lucide-react';
;
const DataAnalyticsPage: React.FC = () => {
const features = [
];
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    {
      icon: BarChart,
      title: 'Advanced Data Visualization',
      description: 'Transform complex data into clear, actionable insights with interactive dashboards and reports.'},
    {icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Leverage machine learning and artificial intelligence to uncover hidden patterns and trends.',},
    {icon: Database,
      title: 'Data Integration',
      description: 'Connect and analyze data from multiple sources to get a complete picture of your business.',},
    {icon: TrendingUp,
      title: 'Predictive Analytics',
<<<<<<< HEAD
      description: 'Forecast future trends and make data-driven decisions with predictive modeling.',}}
  ]
=======
<<<<<<< HEAD
      description: 'Forecast future trends and make data-driven decisions with predictive modeling.'  }
  }]
=======
      description: 'Forecast future trends and make data-driven decisions with predictive modeling.'
    };
  ];
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
const benefits = [
];
    'Make data-driven business decisions',
    'Identify new opportunities and trends',
    'Improve operational efficiency',
    'Reduce costs through optimization',
<<<<<<< HEAD

    'Enhance customer experience',

    'Comply with data regulations',

    'Real-time insights and reporting',

    'Custom analytics solutions'
  ]
return (
    <>
  <Helmet />
        <title>Data Analytics Services - Zion Tech Group | Business Intelligence</title>
        <meta name="description" content="AI-powered solution" />
=======
    'Enhance customer experience',
    'Comply with data regulations',
    'Real-time insights and reporting',
    'Custom analytics solutions'
<<<<<<< HEAD
  ]
return (
    <>
=======
  ];
  return (
    <React .Fragment>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <Helmet>
        <title>Data Analytics Services - Zion Tech Group | Business Intelligence</title>
        <meta name="description" content="Advanced AI solutions" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
<<<<<<< HEAD
              <h1>Data Analytics Services;</h1>
              </h1>
              <p>Transform your data into actionable insights with our advanced analytics solutions.;</p>
=======
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Data Analytics Services</h1>
              <p>
                Transform your data into actionable insights with our advanced analytics solutions.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                Make smarter decisions and drive business growth with AI-powered data analysis.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <button>
                  <BarChart>
                  Get Analytics Now;
                </button>
                <button>
                  <Phone>
                  Call (302) 464-0950,
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Our Analytics Solutions;</h2>
              </h2>
              <p>We provide comprehensive data analytics services to help you unlock the power of your data.,</p>
              </p>
            </div>
<<<<<<< HEAD
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (
                <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                    <feature />
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                    <feature.icon className="w-8 h-8 text-white" />
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section *
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
                Data Analytics Services
              <
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced analytics solutions. 
                Make smarter decisions and drive business growth with AI-powered data analysis.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Analytics Solutions
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive data analytics services to help you unlock the power of your data.
              <
            <
            <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8">
              {features.map((feature, index) => (<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    <feature .icon className="h-6 w-6 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
=======
<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5"></section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Key Benefits;</h2>
              </h2>
              <p>Drive business success with our comprehensive data analytics services.,</p>
              </p>
            </div>
<<<<<<< HEAD
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
              {benefits.map((benefit, index) => (
                <div key={index}className="flex items-start space-x-3"></div>
                  <CheckCircle />
                  <p className="text-gray-300 text-lg">{benefit</p>}</p>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
=======
        {/* Benefits Section *
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Drive business success with our comprehensive data analytics services.
              <
            <
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3"></div>
                  <CheckCircle>
                  <p className="text-gray-300 text-lg">{benefit}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12"></div>,
              <h2>Ready to Unlock Your Data?</h2>
              </h2>
              <p>Contact our analytics experts to discuss your data needs and get a customized solution.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
=======
<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Unlock Your Data?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Contact our analytics experts to discuss your data needs and get a customized solution.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                <button>
                  <Phone>
                  Call (302) 464-0950
                </button>
                <button>
                  <Mail>
<<<<<<< HEAD
                  Email Us;
=======
=======
        {/* CTA Section *
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Unlock Your Data?
              <
              <p className="text-xl text-purple-100 mb-8">
                Contact our analytics experts to discuss your data needs and get a customized solution.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" 
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  Email Us
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </>
<<<<<<< HEAD
  ),
};

export default DataAnalyticsPage;

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
  )
}
export default DataAnalyticsPage
=======
    </React.Fragment>)
export default DataAnalyticsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
