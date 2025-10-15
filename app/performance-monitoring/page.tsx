import { 
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PerformanceMonitoringPage: React.FC = () => {
  const features = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description: "24/7 monitoring of your applications and infrastructure with instant alerts.",
      features: ["Live Dashboards", "Custom Metrics", "Alert Management", "Performance Tracking"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and detailed reports on system performance.",
      features: ["Performance Reports", "Trend Analysis", "Capacity Planning", "ROI Metrics"]
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Proactive Alerts",
      description: "Smart alerting system that prevents issues before they impact users.",
      features: ["Threshold Alerts", "Predictive Analysis", "Escalation Rules", "Notification Channels"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Continuous optimization recommendations to improve system performance.",
      features: ["Bottleneck Detection", "Resource Optimization", "Code Profiling", "Database Tuning"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Performance Monitoring - Zion Tech Group</title>
        <meta name="description" content="Advanced performance monitoring solutions with real-time analytics, proactive alerts, and optimization recommendations for your applications." />
        <meta name="keywords" content="performance monitoring, application monitoring, system monitoring, performance analytics, alerting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Activity className="w-4 h-4 mr-2" />
                Performance Monitoring
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Performance Monitoring
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Advanced monitoring solutions that provide real-time insights into your application 
                performance, helping you maintain optimal system health and user experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Activity className="w-5 h-5 mr-2" />
                  Start Monitoring
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Monitoring Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive monitoring solutions that give you complete visibility 
                into your application and infrastructure performance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.features.map((item, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Monitor Your Performance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to set up comprehensive performance monitoring 
                for your applications and infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PerformanceMonitoringPage;
