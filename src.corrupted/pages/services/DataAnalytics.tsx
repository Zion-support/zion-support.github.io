import React from "react"
import { motion } from "framer-motion"
import {;
  BarChart3,;
  TrendingUp,;
  Database,;
  Zap,;
  Shield,;
  Globe,;
  Brain,;
  Cloud,;
  Lock,;
  Users,;
  Rocket,;
  CheckCircle,;
  ArrowRight,;
  PieChart,;
  LineChart,;
  Activity,;
  Target,;
  Lightbulb,;
  Eye,;
  Search,;
  Filter,;
  Download,;
  Share2,;
  Cpu,;
  Network,;
  FileText;
} from "lucide-react"
import { SEO } from "../../components/SEO"
export default function DataAnalytics() {;
  const features = [;
    {;
      icon: Database,title: 'Data Integration',description: 'Connect and consolidate data from multiple sources into a unified analytics platform.'
    };
    {;
      icon: Brain,title: 'Advanced Analytics',description: 'Leverage machine learning and AI for predictive insights and pattern recognition.'
    };
    {;
      icon: BarChart3,title: 'Real-time Dashboards',description: 'Interactive visualizations that provide instant insights into your business performance.'
    };
    {;
      icon: Zap,title: 'Automated Reporting',description: 'Generate comprehensive reports automatically, saving time and ensuring consistency.'
    };
  ],;

  const solutions = [;
    {;
      title: 'Business Intelligence',description: 'Transform raw data into actionable insights with interactive dashboards and reports',icon: BarChart3,benefits: ['Real-time monitoringCustom dashboards', 'Automated reportingMobile access']
    },;
    {;
      title: 'Predictive Analytics',description: 'Forecast future trends and outcomes using advanced statistical models and ML algorithms',icon: Brain,benefits: ['Trend forecastingRisk assessment', 'Opportunity identificationScenario planning']
    },;
    {;
      title: 'Data Mining',description: 'Discover hidden patterns and relationships in large datasets',icon: Search,benefits: ['Pattern recognitionAnomaly detection', 'Customer segmentationMarket insights']
    },;
    {;
      title: 'Performance Analytics',description: 'Monitor and optimize business performance across all key metrics',icon: Activity,benefits: ['KPI trackingPerformance optimization', 'BenchmarkingGoal alignment']
    };
  ],;

  const useCases = [;
    {;
      industry: 'Retail',description: 'Customer behavior analysis, inventory optimization, and sales forecasting',;
      icon: Users,metrics: ['Customer Lifetime ValueInventory Turnover', 'Sales GrowthConversion Rates']
    },;
    {;
      industry: 'Finance',description: 'Risk assessment, fraud detection, and investment portfolio optimization',;
      icon: Shield,metrics: ['Risk ScoreFraud Detection Rate', 'Portfolio PerformanceCompliance Metrics']
    },;
    {;
      industry: 'Healthcare',description: 'Patient outcome prediction, resource optimization, and treatment effectiveness',;
      icon: Activity,metrics: ['Patient OutcomesResource Utilization', 'Treatment Success RateCost Efficiency']
    },;
    {;
      industry: 'Manufacturing',description: 'Predictive maintenance, quality control, and production optimization',;
      icon: Cpu,metrics: ['Equipment UptimeQuality Score', 'Production EfficiencyCost Reduction']
    };
  ],;

  const benefits = [;
    {;
      icon: TrendingUp,title: 'Improved Decision Making',description: 'Make data-driven decisions with confidence using real-time insights and analytics'
    };
    {;
      icon: Zap,title: 'Operational Efficiency',description: 'Streamline processes and optimize operations based on data-driven insights'
    };
    {;
      icon: Eye,title: 'Better Visibility',description: 'Gain comprehensive visibility into all aspects of your business performance'
    };
    {;
      icon: Target,title: 'Strategic Planning',description: 'Develop informed strategies and plans based on predictive analytics and trends'
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO;
        title="Data Analytics Services - Zion Tech Group"
        description="Transform your business data into actionable insights with our comprehensive data analytics solutions. Real-time dashboards, predictive analytics, and automated reporting."
      />;

      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></[^>]*>
        <div className="container mx-auto px-6 relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center px-4 py-2 bg-blue-400/20 text-blue-400 rounded-full text-sm font-medium mb-6">;
              <[^>]*/>
              Data-Driven Insights;
            </[^>]*>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Data;
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Analytics</[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Transform your business data into actionable insights with our comprehensive;
              analytics solutions. Make data-driven decisions with confidence.;
            </[^>]*>
            <div className="flex flex-wrap justify-center gap-4">;
              <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-105">;
                Get Started;
              </[^>]*>
              <button className="px-8 py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">;
                Schedule Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* What is Data Analytics */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <motion.div
              initial={{ opacity: 0, x: -20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.6 }};
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                What is Data Analytics?;
              </[^>]*>
              <p className="text-lg text-gray-300 mb-6">;
                Data Analytics is the process of examining, cleaning, transforming, and modeling data;
                to discover useful information, draw conclusions, and support decision-making.;
                It combines statistical analysis, machine learning, and business intelligence.;
              </[^>]*>
              <div className="space-y-4">;
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="text-white font-semibold">Data Collection</[^>]*>
                    <p className="text-gray-300 text-sm">Gather data from multiple sources and systems</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="text-white font-semibold">Data Processing</[^>]*>
                    <p className="text-gray-300 text-sm">Clean, transform, and prepare data for analysis</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-start space-x-3">;
                  <[^>]*/>
                  <div>;
                    <h3 className="text-white font-semibold">Insight Generation</[^>]*>
                    <p className="text-gray-300 text-sm">Apply analytical techniques to extract valuable insights</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, x: 20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.6 }};
              className="[^"]*"
            >;
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">;
                <div className="flex items-center justify-between mb-6">;
                  <h3 className="text-xl font-semibold text-white">Analytics Dashboard</[^>]*>
                  <div className="flex space-x-2">;
                    <button className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">;
                      <[^>]*/>
                    </[^>]*>
                    <button className="p-2 bg-purple-500/20 text-purple-400 rounded-lg">;
                      <[^>]*/>
                    </[^>]*>
                    <button className="p-2 bg-green-500/20 text-green-400 rounded-lg">;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="space-y-4">;
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">;
                    <span className="text-gray-300">Revenue Growth</[^>]*>
                    <span className="text-green-400">+18.5%</[^>]*>
                  </[^>]*>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">;
                    <span className="text-gray-300">Customer Satisfaction</[^>]*>
                    <span className="text-blue-400">94.2%</[^>]*>
                  </[^>]*>
                  <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">;
                    <span className="text-gray-300">Market Share</[^>]*>
                    <span className="text-purple-400">22.7%</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Key Features */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Key Features;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our Data Analytics platform provides comprehensive capabilities for;
              data processing, analysis, and visualization.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</[^>]*>
                <p className="text-gray-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Core Solutions */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Core Solutions;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Comprehensive data analytics solutions designed to transform your business;
              data into actionable intelligence and insights.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {solutions.map((solution, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-center space-x-4 mb-6">;
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-2xl font-semibold text-white">{solution.title}</[^>]*>
                </[^>]*>
                <p className="text-gray-300 mb-6">{solution.description}</[^>]*>
                <div className="space-y-2">;
                  {solution.benefits.map((benefit, benefitIndex) => (;
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-400">;
                      <[^>]*/>
                      {benefit};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Industry Use Cases */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Industry Use Cases;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Data analytics is transforming industries across the globe;
              enabling data-driven decision making and operational excellence.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {useCases.map((useCase, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-center space-x-4 mb-6">;
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</[^>]*>
                </[^>]*>
                <p className="text-gray-300 mb-6">{useCase.description}</[^>]*>
                <div className="space-y-2">;
                  {useCase.metrics.map((metric, metricIndex) => (;
                    <div key={metricIndex} className="flex items-center text-sm text-gray-400">;
                      <[^>]*/>
                      {metric};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Business Benefits;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Discover how data analytics can transform your organization;
              and drive measurable business outcomes.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {benefits.map((benefit, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</[^>]*>
                <p className="text-gray-300">{benefit.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Implementation Process */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Implementation Process;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our proven methodology ensures successful data analytics deployment and rapid value realization.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">;
            {[;
              {;
                step: '01',title: 'Assessment',description: 'Evaluate your current data infrastructure and analytics needs'
              };
              {;
                step: '02',title: 'Strategy',description: 'Develop comprehensive analytics strategy and implementation roadmap'
              };
              {;
                step: '03',title: 'Implementation',description: 'Deploy analytics solutions and configure custom dashboards'
              };
              {;
                step: '04',title: 'Optimization',description: 'Monitor performance and continuously improve analytics capabilities'
              };
            ].map((phase, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">;
                  {phase.step};
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</[^>]*>
                <p className="text-gray-300">{phase.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Transform Your Data?;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Discover how data analytics can revolutionize your business intelligence;
              improve decision-making, and drive unprecedented growth.;
            </[^>]*>
            <div className="flex flex-wrap justify-center gap-4">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-semibold hover: from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-105">;
                Start Your Analytics Journey;
              </[^>]*>
              <button className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">;
                Schedule Consultation;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};