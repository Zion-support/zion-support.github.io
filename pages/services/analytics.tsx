<<<<<<< HEAD
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
      title: &quot;Big Data Processing&quot;,
      description: &quot;Scalable data processing and analytics platforms&quot;,
      features: [&quot;Data Pipeline Engineering&quot;, &quot;Real-time Processing&quot;, &quot;Batch Processing&quot;, &quot;Data Quality&quot;],
      price: &quot;From $8,000&quot;,
      icon: Database,
      color: &quot;from-indigo-500 to-purple-500&quot;
    },
    {
      title: &quot;Business Intelligence&quot;,
      description: &quot;Interactive dashboards and reporting solutions&quot;,
      features: [&quot;Custom Dashboards&quot;, &quot;KPI Tracking&quot;, &quot;Data Visualization&quot;, &quot;Automated Reports&quot;],
      price: &quot;From $5,000&quot;,
      icon: BarChart3,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      title: &quot;Predictive Analytics&quot;,
      description: &quot;AI-powered predictive modeling and forecasting&quot;,
      features: [&quot;Machine Learning Models&quot;, &quot;Forecasting&quot;, &quot;Risk Assessment&quot;, &quot;Trend Analysis&quot;],
      price: &quot;From $12,000&quot;,
      icon: Zap,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      title: &quot;Data Strategy & Governance&quot;,
      description: &quot;Comprehensive data strategy and governance frameworks&quot;,
      features: [&quot;Data Architecture&quot;, &quot;Governance Policies&quot;, &quot;Compliance&quot;, &quot;Data Quality&quot;],
      price: &quot;From $10,000&quot;,
      icon: Shield,
      color: &quot;from-emerald-500 to-teal-500&quot;
    }
  ],

  const stats = [
<<<<<<< HEAD
    { number: "1M+", label: "Data Points Processed", icon: Database },
    { number: "95%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "24/7", label: "Real-time Analytics", icon: Clock },
    { number: "300%", label: "ROI Improvement", icon: TrendingUp }
  ],
=======
    { number: &quot;1M+&quot;, label: &quot;Data Points Processed&quot;, icon: Database },
    { number: &quot;95%&quot;, label: &quot;Accuracy Rate&quot;, icon: CheckCircle },
    { number: &quot;24/7&quot;, label: &quot;Real-time Analytics&quot;, icon: Clock },
    { number: &quot;300%&quot;, label: &quot;ROI Improvement&quot;, icon: TrendingUp }
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>Data Analytics Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Advanced data analytics solutions from Zion Tech Group. Big data processing, business intelligence, predictive analytics, and data strategy services.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Data Analytics Services - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Advanced data analytics solutions for data-driven decision making.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services/analytics&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6&quot;>
              Data Analytics
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed&quot;>
              Transform raw data into actionable insights that drive business growth
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;mb-12&quot;
          >
            <p className=&quot;text-lg text-white/70 max-w-2xl mx-auto mb-8&quot;>
              From big data processing to predictive analytics, we help businesses harness the power 
              of their data to make informed decisions and gain competitive advantages.
            </p>
            <button className=&quot;px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto&quot;>
              Data Consultation
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=&quot;py-16 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
            {stats.map((stat, index) => (
              <motion.div
=======
import React from 'react',;
import Head from 'next/head',;
import { motion } from 'framer-motion',;
import {;
  BarChart3, Database, Zap, Shield, Rocket, Cpu,;
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp;
} from 'lucide-react',;
import EnhancedNavigation from '../../components/EnhancedNavigation',;
import EnhancedFooter from '../../components/EnhancedFooter',;
export default function AnalyticsServicesPage() {;
  const services = [;
    {;
      title: "Big Data Processing",;
      description: "Scalable data processing and analytics platforms",;
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
    }
  ],;
  const stats = [;
    { number: "1M+", label: "Data Points Processed", icon: Database },;
    { number: "95%", label: "Accuracy Rate", icon: CheckCircle },;
    { number: "24/7", label: "Real-time Analytics", icon: Clock };
    { number: "300%", label: "ROI Improvement", icon: TrendingUp }
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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
      {/* Stats Section */}
      <section className="py-16 px-6">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
            {stats.map((stat, index) => (;
              <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className=&quot;text-center&quot;
              >
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                  <stat.icon className=&quot;w-8 h-8 text-purple-400&quot; />
                </div>
                <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.number}</div>
                <div className=&quot;text-white/70&quot;>{stat.label}</div>
              </motion.div>
=======
                className="text-center";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                  <stat.icon className="w-8 h-8 text-purple-400" />;
                </div>;
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>;
                <div className="text-white/70">{stat.label}</div>;
              </motion.div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            ))}
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
<<<<<<< HEAD
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
=======
      <section className="py-20 px-6">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Data Analytics Services</h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Comprehensive analytics solutions designed to unlock the value of your data
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {services.map((service, index) => (
              <motion.div
=======
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">Data Analytics Services</h2>;
            <p className="text-xl text-white/70 max-w-3xl mx-auto">;
              Comprehensive analytics solutions designed to unlock the value of your data;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {services.map((service, index) => (;
              <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300&quot;
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{service.description}</p>
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {service.features.map((feature) => (
                    <li key={feature} className=&quot;flex items-center text-white/80&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-purple-400 mr-3 flex-shrink-0&quot; />
=======
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300";
              >;
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>;
                  <service.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>;
                <p className="text-white/70 mb-6">{service.description}</p>;
                <ul className="space-y-3 mb-6">;
                  {service.features.map((feature) => (;
                    <li key={feature} className="flex items-center text-white/80">;
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      {feature}
                    </li>;
                  ))}
<<<<<<< HEAD
                </ul>
                <div className=&quot;flex items-center justify-between&quot;>
                  <span className=&quot;text-2xl font-bold text-purple-400&quot;>{service.price}</span>
                  <button className=&quot;px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105&quot;>
                    Get Started
                  </button>
                </div>
              </motion.div>
=======
                </ul>;
                <div className="flex items-center justify-between">;
                  <span className="text-2xl font-bold text-purple-400">{service.price}</span>;
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">;
                    Get Started;
                  </button>;
                </div>;
              </motion.div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
<<<<<<< HEAD
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
=======
      <section className="py-20 px-6">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how our data analytics solutions can transform your business insights and drive data-driven decision making.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <button className=&quot;px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                Data Assessment
              </button>
              <button className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;>
                View Demos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
=======
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
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}