<<<<<<< HEAD
'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import {BarChart,}
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

  Target,

  Eye,

  PieChart,

  LineChart;}} from 'lucide-react'
const DataAnalyticsPage: React.FC = () => {,
    const features = [
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
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { BarChart, CheckCircle, ArrowRight, Phone, Mail, TrendingUp, Database, Brain, PieChart, LineChart } from 'lucide-react'

const DataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Data Visualization',
      description: 'Transform complex data into clear, actionable insights with interactive dashboards and reports.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Leverage machine learning and artificial intelligence to uncover hidden patterns and trends.'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect and analyze data from multiple sources to get a complete picture of your business.'
    },
    {
      icon: TrendingUp,
>>>>>>> origin/main
      title: 'Predictive Analytics',
<<<<<<< HEAD
      description: 'Forecast future trends and make data-driven decisions with predictive modeling.',}}
  ]
=======
      description: 'Forecast future trends and make data-driven decisions with predictive modeling.'
    }
<<<<<<< HEAD
  ];];];
>>>>>>> origin/main
const benefits = [
=======
  ]

  const benefits = [
>>>>>>> origin/main
    'Make data-driven business decisions',
    'Identify new opportunities and trends',
    'Improve operational efficiency',
    'Reduce costs through optimization',
    'Enhance customer experience',
    'Comply with data regulations',
    'Real-time insights and reporting',
    'Custom analytics solutions'
  ]

<<<<<<< HEAD
<<<<<<< HEAD
    'Custom analytics solutions'
  ]
return(<>)
      <Helmet />
=======
    'Custom analytics solutions';
  ];
return (
    <>
  </>
      <Helmet>
>>>>>>> origin/main
        <title>Data Analytics Services - Zion Tech Group | Business Intelligence</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
<<<<<<< HEAD

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
        </section>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */} <section className="py-20 px-4">
>>>>>>> origin/main
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1>Data Analytics Services;</h1>
              </h1>
              <p>Transform your data into actionable insights with our advanced analytics solutions.;</p>
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
<<<<<<< HEAD

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        </section>
=======
        {/* Features Section */} <section className="py-20 px-4">
>>>>>>> origin/main
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
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (
                <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                    <feature />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        </section>
=======
        {/* Benefits Section */} <section className="py-20 px-4">
>>>>>>> origin/main
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Key Benefits;</h2>
              </h2>
              <p>Drive business success with our comprehensive data analytics services.,</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
              {benefits.map((benefit, index) => (
                <div key={index}className="flex items-start space-x-3"></div>
                  <CheckCircle />
                  <p className="text-gray-300 text-lg">{benefit</p>}</p>
                </div>
              ))}
            </div>
          ))
        </section>
<<<<<<< HEAD

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        </section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Unlock Your Data?
=======
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
>>>>>>> origin/main
              </h2>
              <p>Contact our analytics experts to discuss your data needs and get a customized solution.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <button>
                  <Phone>
                  Call (302) 464-0950;
                </button>
                <button>
                  <Mail>
                  Email Us;
                </button>
              </div>
            </div>
          ))
        </section>
      </div>
<<<<<<< HEAD

  );
=======
    </>
  ),
>>>>>>> origin/main
};
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Data Analytics <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced analytics solutions. Make smarter decisions and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <BarChart className="mr-2 h-5 w-5" />
                Get Analytics Now
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (302) 464-0950
              </button>
            </div>
          </div>
        </div>
      </section>
>>>>>>> origin/main

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Analytics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive data analytics services to help you unlock the power of your data.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Drive business success with our comprehensive data analytics services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our analytics experts to discuss your data needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (302) 464-0950
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DataAnalyticsPage