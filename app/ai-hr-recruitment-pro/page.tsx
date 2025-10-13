import React from 'react';
import { Helmet } from 'react-helmet-async';
import {ArrowRight,CheckFileText} from 'lucide-react';

const AIHRRecruitmentProPage = () => {
  const features = [
    {
      title: "Intelligent Candidate Matching",
      description: "AI-powered matching that finds the perfect candidates based on skills, experience, and cultural fit",
      icon: <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Automated Resume Screening",
      description: "Instantly screen and rank thousands of resumes using advanced AI algorithms",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Hiring Analytics",
      description: "Predict candidate success and retention with 90% accuracy using machine learning",
      icon: <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Bias-Free Recruitment",
      description: "Eliminate unconscious bias and ensure fair, diverse hiring practices",
      icon: <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Reduce time-to-hire by 70%",
    "Improve candidate quality by 50%",
    "Eliminate hiring bias completely",
    "Automate 80% of recruitment tasks",
    "Increase retention rates by 40%",
    "Scale recruitment across all departments"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>AI HR & Recruitment Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered HR and recruitment platform with intelligent candidate matching, automated screening, and bias-free hiring processes." />
        <meta name="keywords" content="AI recruitment, HR automation, talent acquisition, candidate matching, resume screening, hiring analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-hr-recruitment-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Intelligent HR Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI HR & Recruitment Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionize your hiring process with AI-powered recruitment that finds the best talent, 
            eliminates bias, and reduces time-to-hire by 70%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Getted Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
            <to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced HR Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI HR platform combines machine learning, natural language processing, 
              and behavioral analytics to transform your recruitment process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Hiring Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of recruitment with AI-powered HR solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <CheckclassName="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Revolutionize Your Hiring?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of companies using our AI HR platform to find and hire the best talent.t your recruitment transformation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >t Hiring Better
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
            <to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHRRecruitmentProPage;