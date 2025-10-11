'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart} from 'lucide-react'
const PagePage: React.FC = () => {const features = [
    {
      icon: Wifi,
      title: 'Feature 1',
      description: 'Description for feature 1.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ,
    {icon: BarChart,
      title: 'Feature 2',
      description: 'Description for feature 2.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ,
    {icon: CheckCircle,
      title: 'Feature 3',
      description: 'Description for feature 3.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ];

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];

  return (
    <>
      <Helmet></Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" /></meta>
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" /></meta>
      </Helmet>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation /></Navigation>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                Page Page;
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"></p>
                Transform your business with our cutting-edge AI and IT solutions designed for the modern enterprise.
              </p>
            </div>

      <Footer /></Footer>
    </>
          </div>

      <Footer /></Footer>
    </>
        </section>

        <section className="py-20"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Key Features;
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
                Discover the powerful features that make our solutions stand out.
              </p>

            <div className="></div>
    ,>
    d: grid-cols-2 l, g:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"></div>
                  <div className="flex items-center mb-4"></div>
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3"></feature>
                    <h3 className="text-xl font-semibold text-gray-900"></h3>
                  </div>
                  <p className="text-gray-600 mb-4"></p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600"></li>
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2"></CheckCircle>
                        {benefit}

                  </ul>;
              ))}
            </div>

      <Footer /></Footer>
    </>
          </div>

      <Footer /></Footer>
    </>
        </section>
      </div>

      <Footer /></Footer>
    </>
      <Footer /></Footer>
    </>
  );
export default PagePage
;