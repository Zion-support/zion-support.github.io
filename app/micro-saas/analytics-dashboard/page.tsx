<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GDataAnalyticsZionTechGroupPage() {
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
import { BarChart, TrendingUp, Users, DollarSign, Zap, Target, ArrowRight, CheckCircle, Star, Award, Clock, Shield } from 'lucide-react';

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Live data visualization with instant updates and interactive charts.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Insights',
      description: 'AI-powered forecasting and trend analysis for better decision making.',
    },
    {
      icon: Users,
      title: 'User Behavior Tracking',
      description: 'Comprehensive user analytics and engagement metrics tracking.',
    },
    {
      icon: DollarSign,
      title: 'Revenue Analytics',
      description: 'Detailed financial metrics and revenue optimization insights.',
    },
    {
      icon: Zap,
      title: 'Custom Dashboards',
      description: 'Build personalized dashboards tailored to your business needs.',
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Monitor KPIs and business objectives with automated alerts.',
    }
  ];

  const benefits = [
    'Real-time data visualization and reporting',
    'AI-powered predictive analytics',
    'Customizable dashboard widgets',
    'Automated report generation',
    'Multi-platform data integration',
    'Mobile-responsive design'
  ];

  const metrics = [
    { label: 'Data Sources', value: '50+', icon: BarChart; },
    { label: 'Update Frequency', value: 'Real-time', icon: Clock; },
    { label: 'Accuracy Rate', value: '99.9%', icon: Shield; },
    { label: 'User Satisfaction', value: '4.9/5', icon: Star; }
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

const AnalyticsDashboardPage: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Analytics Dashboard - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Analytics Dashboard solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Analytics Dashboard</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive analytics dashboard solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
        <meta name="description" content="Comprehensive analytics dashboard for your business." />
        <meta name="keywords" content="analytics, dashboard, business intelligence" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive analytics dashboard for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
      <Footer />
    </>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
};

export default AnalyticsDashboardPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AnalyticsdashboardPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Analytics Dashboard - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Analytics Dashboard</h1>
        <p className="text-lgtext-gray-300mb-8">Professional analytics dashboard services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React  from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AnalyticsdashboardPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      <Helmet>
        <title>Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Professional analytics dashboard services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Analytics Dashboard</h1>
          <p className="text-lg text-gray-300 mb-8">Professional analytics dashboard services coming soon.</p>
          
<<<<<<< HEAD
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
=======
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      </div>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
