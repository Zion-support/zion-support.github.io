import { ArrowRight, Users, Brain, Shield, Zap, Globe, Star, Award, CheckCircle, TrendingUp, Clock, UserCheck, FileText, Target, Search } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIHRRecruitmentPro = () => {
  const features = [
    {
      title: "AI Resume Screening",
      description: "Automatically screen and rank resumes using advanced AI algorithms",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Candidate Matching",
      description: "Match candidates to job requirements with 95% accuracy",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Interview Scheduling",
      description: "Automated interview scheduling and calendar management",
      icon: <Clock className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Talent Analytics",
      description: "Comprehensive analytics on recruitment performance and trends",
      icon: <TrendingUp className="w-6 h-6" />,
    "60% faster hiring process",
    "95% candidate matching accuracy",
    "Automated resume screening",
    "Intelligent interview scheduling",
    "Comprehensive talent analytics",
    "Reduced bias in hiring"
        title="AI HR & Recruitment Pro - Intelligent Talent Management | Zion Tech Group"
        description="Revolutionize your hiring process with AI-powered recruitment tools. Automated screening, candidate matching, and talent analytics for modern HR teams."
        keywords="AI recruitment, HR automation, talent management, candidate screening, hiring software, recruitment analytics"
            <Users className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered HR</span>
              AI HR & Recruitment Pro
            Revolutionize your hiring process with AI-powered recruitment tools. 
            Find the best talent faster with automated screening, intelligent matching, and comprehensive analytics.
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
              icon={<Users className="w-5 h-5" />}
            >
              View Demo
              Intelligent Recruitment Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to streamline your hiring process and find the best talent.
              <FuturisticCard
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI HR & Recruitment Pro?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of talent acquisition with AI-powered recruitment tools.
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
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading companies using AI HR & Recruitment Pro to find and hire the best talent faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<UserCheck className="w-5 h-5" />}
              >
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
export default AIHRRecruitmentPro;
