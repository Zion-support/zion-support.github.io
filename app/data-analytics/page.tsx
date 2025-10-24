'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import {BarChart}
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

  LineChart}} from 'lucide-react'
const DataAnalyticsPage: React.FC = () => {
    const features = [
    {
      icon: BarChart,
      title: 'Advanced Data Visualization',
      description: 'Transform complex data into clear, actionable insights with interactive dashboards and reports.'},
    {icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Leverage machine learning and artificial intelligence to uncover hidden patterns and trends.'},
    {icon: Database,
      title: 'Data Integration',
      description: 'Connect and analyze data from multiple sources to get a complete picture of your business.'},
    {icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Seamless integration with CI/CD pipelines and DevOps tools for streamlined operations.'
    }
  ];
const benefits = [
  ]

  const benefits = [
    'Make data-driven business decisions',
    'Identify new opportunities and trends',
    'Improve operational efficiency',
    'Reduce costs through optimization',
    'Enhance customer experience',
    'Comply with data regulations',
    'Real-time insights and reporting',
    'Custom analytics solutions'
  ]

    'Custom analytics solutions'
  ]
return(<>)
      <Helmet><title>Data Analytics Services - Zion Tech Group | Business Intelligence</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>

      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section$1>
        <section>
        <div>
          <div>
            <h2>Section Title</h2>
            <p>Section description</p>
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
              <div className="flexflex-colsm:flex-row gap-4 justify-center"></div>,
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

        {/* Features Section */}
        <section$1>
        <section>
        <div>
          <div>
            <h2>Section Title</h2>
            <p>Section description</p>
          </div>
        </div>
      </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Cloud Migration?</h2>
              <p>We provide comprehensive data analytics services to help you unlock the power of your data.,</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (
                <div key={index}className="bg-white/10backdrop-blur-smrounded-xlp-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,
                  <div className="flexitems-centerjustify-centerw-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                    <feature />
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description</p>}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

        {/* Benefits Section */}
        <section$1>
        <section>
        <div>
          <div>
            <h2>Section Title</h2>
            <p>Section description</p>
          </div>
        </div>
      </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Cloud Migration?</h2>
              <p>Drive business success with our comprehensive data analytics services.,</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>,
              {benefits.map((benefit, index) => (
                <div key={index}className="flexitems-startspace-x-3"></div>
                  <CheckCircle />
                  <p className="text-gray-300text-lg">{benefit</p>}</p>
                </div>
              ))}
            </div>
          ))
        </section>

        {/* CTA Section */}
        <section$1>
        <div$2>
            <div className="bg-gradient-to-rfrom-purple-600to-blue-600rounded-2xl p-8 md:p-12">
              <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
                Ready to Unlock Your Data?
              </h2>
              <p>Contact our analytics experts to discuss your data needs and get a customized solution.</p>
              </p>
              <div className="flexflex-colsm:flex-row gap-4 justify-center"></div>,
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

  )};
  return (
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20pb-16px-4sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Data Analytics <span className="bg-gradient-to-rfrom-cyan-400to-blue-500bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced analytics solutions. Make smarter decisions and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-rfrom-cyan-500to-purple-600text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <BarChart className="mr-2h-5w-5" />
                Get Analytics Now
              </button>
              <button className="borderborder-white/20text-whitepx-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2h-5w-5" />
                Call (302) 464-0950
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20px-4sm:px-6lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
              Our Analytics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive data analytics services to help you unlock the power of your data.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10backdrop-blur-smrounded-xlp-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flexitems-centerjustify-centerw-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                </div>
                <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20px-4sm:px-6lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Drive business success with our comprehensive data analytics services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flexitems-startspace-x-3">
                <CheckCircle className="h-6w-6text-purple-400mt-1 flex-shrink-0" />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20px-4sm:px-6lg:px-8">
        <div className="max-w-4xlmx-autotext-center">
          <div className="bg-gradient-to-rfrom-purple-600to-blue-600rounded-2xl p-8 md:p-12">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-6">
              Ready to Unlock Your Data?
            </h2>
            <p className="text-xltext-purple-100mb-8">
              Contact our analytics experts to discuss your data needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-whitetext-purple-600px-8py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2h-5w-5" />
                Call (302) 464-0950
              </button>
              <button className="borderborder-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2h-5w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PagePage;
