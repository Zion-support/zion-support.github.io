import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Clock, 
  Users, 
  BarChart3, 
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
  Calendar,
  Timer
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const EmployeeTimeTrackerPage = () => {
  const features = [
    {
      title: "Time Tracking",
      description: "Track time spent on projects and tasks with simple start/stop functionality",
      icon: <Timer className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Project Management",
      description: "Assign employees to projects and track time allocation across multiple projects",
      icon: <Settings className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Team Dashboard",
      description: "Real-time dashboard showing team activity and productivity metrics",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Reports",
      description: "Generate detailed reports on employee hours, project costs, and productivity",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Mobile Access",
      description: "Track time on the go with our mobile app for iOS and Android",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Integration Ready",
      description: "Integrate with popular project management and payroll systems",
      icon: <Zap className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      title: "Increased Productivity",
      description: "Better time management leads to improved productivity",
      icon: <Zap className="w-6 h-6" />,
      stat: "25% more productive"
    },
    {
      title: "Accurate Billing",
      description: "Precise time tracking ensures accurate client billing",
      icon: <CheckCircle className="w-6 h-6" />,
      stat: "100% accurate"
    },
    {
      title: "Better Insights",
      description: "Detailed analytics help identify productivity patterns",
      icon: <BarChart3 className="w-6 h-6" />,
      stat: "50% better insights"
    },
    {
      title: "Cost Savings",
      description: "Reduce administrative overhead with automated tracking",
      icon: <Clock className="w-6 h-6" />,
      stat: "30% cost reduction"
    }
  ];

  const useCases = [
    { name: "Remote Teams", icon: <Globe className="w-6 h-6" /> },
    { name: "Freelancers", icon: <Users className="w-6 h-6" /> },
    { name: "Consulting", icon: <Settings className="w-6 h-6" /> },
    { name: "Agencies", icon: <BarChart3 className="w-6 h-6" /> },
    { name: "Startups", icon: <Zap className="w-6 h-6" /> },
    { name: "Enterprises", icon: <Database className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Employee Time Tracker - Zion Tech Group | Time Tracking & Productivity Management</title>
        <meta name="description" content="Comprehensive employee time tracking solution for monitoring productivity, project time allocation, and team performance. Boost efficiency with detailed analytics." />
        <meta name="keywords" content="time tracking, employee time tracker, productivity management, project time tracking, team management, time analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/employee-time-tracker" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Employee Time Tracker
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Track employee time and boost productivity with our comprehensive time tracking solution. 
            Monitor project hours, analyze productivity patterns, and optimize team performance.
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
              Complete Time Tracking Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Everything you need to track time, monitor productivity, and optimize team performance.
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
              Why Choose Our Time Tracker?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transform your time management with measurable improvements in productivity and efficiency.
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

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perfect for Every Team
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our time tracker works for teams of all sizes and industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-sm font-semibold text-white">{useCase.name}</h3>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Team Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of teams already using our time tracker to improve productivity and efficiency. 
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

export default EmployeeTimeTrackerPage;