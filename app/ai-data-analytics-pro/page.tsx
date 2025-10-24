<<<<<<< HEAD
import { ArrowRight, BarChart3, Brain, Shield, Zap, Globe, Star, Users, Award, CheckCircle, TrendingUp, Clock, Database, PieChart, Activity, Target } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, Target, CheckCircle, ArrowRight, Star, Users, Clock, Shield } from 'lucide-react';

const AIDataAnalyticsProPage = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis with machine learning insights.',
      color: "from-orange-500 to-red-500"
    }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-fe66

const AIDataAnalyticsPro = () => {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Process and analyze data in real-time with advanced AI algorithms",
      icon: <Activity className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Modeling",
      description: "Build accurate predictive models using machine learning",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Visualization",
      description: "Create stunning interactive dashboards and reports",
      icon: <PieChart className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Insights",
      description: "Get AI-powered insights and recommendations automatically",
      icon: <Brain className="w-6 h-6" />,
    "40% faster data processing",
    "99.9% accuracy in predictions",
    "Real-time dashboard updates",
    "Automated report generation",
    "Multi-source data integration",
    "Advanced security protocols"
        title="AI Data Analytics Pro - Advanced Analytics Platform | Zion Tech Group"
        description="Transform your data into actionable insights with our AI-powered analytics platform. Real-time processing, predictive modeling, and automated insights for modern businesses."
        keywords="AI data analytics, business intelligence, predictive analytics, data visualization, machine learning, real-time analytics"
            <BarChart3 className="w-4 h-4 text-cyan-400 mr-2" />
            Transform your data into actionable insights with our advanced AI-powered analytics platform. 
            Get real-time processing, predictive modeling, and automated insights that drive business growth.
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to turn your data into business intelligence and actionable insights.
              <FuturisticCard
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
        <ResponsiveContainer>
              Experience the power of AI-driven analytics that delivers measurable results.
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">"
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses using AI Data Analytics Pro to make data-driven decisions and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Free Trial;
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5" />}
              >
                View Pricing;
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
<<<<<<< HEAD
export default AIDataAnalyticsPro;
=======
      </section>
    </div>
  );
};

export default AIDataAnalyticsProPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-fe66
