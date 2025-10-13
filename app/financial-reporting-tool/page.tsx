import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  DollarSign, 
  Settings, 
  Zap, 
  ArrowRight, 
  Star, 
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Database,
  CheckCircle,
  FileText,
  Calculator
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const FinancialReportingToolPage = () => {
  const features = [
    {
      title: "Real-time Financial Dashboards",
      description: "Comprehensive dashboards with real-time financial data and key performance indicators",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Automated Report Generation",
      description: "Generate financial reports automatically with customizable templates and schedules",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-currency Support",
      description: "Handle multiple currencies with real-time exchange rate updates",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Budget Planning & Forecasting",
      description: "Create budgets and financial forecasts with advanced modeling tools",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Compliance Reporting",
      description: "Generate compliance reports for tax, audit, and regulatory requirements",
      icon: <Shield className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Data Visualization",
      description: "Interactive charts and graphs for better financial insights",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      title: "Time Savings",
      description: "Automate report generation and save hours of manual work",
      icon: <Zap className="w-6 h-6" />,
      stat: "80% time saved"
    },
    {
      title: "Better Accuracy",
      description: "Eliminate manual errors with automated calculations",
      icon: <CheckCircle className="w-6 h-6" />,
      stat: "99.9% accuracy"
    },
    {
      title: "Improved Insights",
      description: "Get deeper insights with advanced analytics and visualization",
      icon: <TrendingUp className="w-6 h-6" />,
      stat: "50% better insights"
    },
    {
      title: "Compliance Ready",
      description: "Stay compliant with automated regulatory reporting",
      icon: <Shield className="w-6 h-6" />,
      stat: "100% compliant"
    }
  ];

  const reportTypes = [
    { name: "Income Statement", icon: <TrendingUp className="w-6 h-6" /> },
    { name: "Balance Sheet", icon: <BarChart3 className="w-6 h-6" /> },
    { name: "Cash Flow", icon: <DollarSign className="w-6 h-6" /> },
    { name: "Budget Reports", icon: <Calculator className="w-6 h-6" /> },
    { name: "Tax Reports", icon: <FileText className="w-6 h-6" /> },
    { name: "Audit Reports", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Financial Reporting Tool - Zion Tech Group | Automated Financial Reports & Analytics</title>
        <meta name="description" content="Comprehensive financial reporting tool for automated report generation, financial dashboards, and compliance reporting. Streamline your financial processes." />
        <meta name="keywords" content="financial reporting, financial dashboards, automated reports, financial analytics, compliance reporting, budget planning" />
        <link rel="canonical" href="https://ziontechgroup.com/financial-reporting-tool" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Financial Reporting Tool
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Streamline your financial reporting with our comprehensive tool. 
            Generate automated reports, create financial dashboards, and ensure compliance with powerful analytics and visualization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete Financial Reporting Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Everything you need to manage financial reporting efficiently and accurately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Financial Reporting Tool?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transform your financial reporting with measurable improvements in efficiency and accuracy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Report Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Report Types
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Generate all the financial reports you need with our comprehensive reporting suite.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {reportTypes.map((report, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {report.icon}
                </div>
                <h3 className="text-sm font-semibold text-white">{report.name}</h3>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Financial Reporting?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our financial reporting tool to save time and improve accuracy. 
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/micro-saas-services"
              variant="outline"
              size="lg"
              icon={<Settings className="w-5 h-5" />}
            >
              View All Tools
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default FinancialReportingToolPage;