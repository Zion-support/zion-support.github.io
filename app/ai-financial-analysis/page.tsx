import { ArrowRight, BarChart3, Brain, Shield, Zap, Globe, Star, Users, Award, CheckCircle, TrendingUp, Clock, DollarSign, PieChart, Activity, Target } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIFinancialAnalysis = () => {
  const features = [
    {
      title: "Predictive Financial Modeling",
      description: "Build accurate financial models and forecasts using AI",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Risk Assessment",
      description: "Advanced risk analysis and portfolio optimization",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Market Analysis",
      description: "Monitor market trends and make informed decisions",
      icon: <Activity className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive financial reports automatically",
      icon: <FileText className="w-6 h-6" />,
    "50% more accurate predictions",
    "Real-time market monitoring",
    "Automated risk assessment",
    "Comprehensive financial reporting",
    "Portfolio optimization",
    "Regulatory compliance"
        title="AI Financial Analysis - Intelligent Financial Intelligence | Zion Tech Group"
        description="Transform your financial decision-making with AI-powered analysis. Predictive modeling, risk assessment, and automated reporting for modern finance teams."
        keywords="AI financial analysis, financial modeling, risk assessment, market analysis, portfolio optimization, financial intelligence"
            <DollarSign className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Financial Intelligence</span>
              AI Financial Analysis
            Transform your financial decision-making with AI-powered analysis. 
            Get predictive modeling, risk assessment, and automated reporting that drives better financial outcomes.
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
              Advanced Financial Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to make smarter financial decisions with AI-powered insights.
              <FuturisticCard
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
        <ResponsiveContainer>
          <div className="text-center mb-16">"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Financial Analysis?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven financial intelligence that delivers measurable results.
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
              Ready to Transform Your Financial Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading financial institutions using AI Financial Analysis to make smarter decisions and drive growth.
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
export default AIFinancialAnalysis;
