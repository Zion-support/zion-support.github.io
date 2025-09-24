import React from "react"
import { motion } from "framer-motion"
import { Users, Brain, Target, BarChart3, Clock, Shield, CheckCircle, Star, Award, Rocket, ArrowRight, Phone, Video, FileText, TrendingUp, Zap, Eye, Heart, MessageCircle, Calendar, Award as Trophy } from "lucide-react"
import { SEO } from "@/components/SEO"
export default function InterviewAssessmentAI() {;
  const features = [;
    {;
      icon: Brain,title: "AI-Powered Candidate Evaluation",description: "Advanced machine learning algorithms assess candidates objectively and consistently"
    };
    {;
      icon: Video,title: "Video Interview Analysis",description: "Analyze facial expressions, tone, and communication skills in real-time"
    },;
    {;
      icon: Target,title: "Skills Assessment",description: "Comprehensive evaluation of technical and soft skills"
    };
    {;
      icon: BarChart3,title: "Predictive Performance Analytics",description: "Forecast candidate success and cultural fit with high accuracy"
    };
    {;
      icon: Shield,title: "Bias Elimination",description: "Remove unconscious bias and ensure fair evaluation processes"
    };
    {;
      icon: Clock,title: "24/7 Availability",description: "Conduct assessments anytime, anywhere with automated scheduling"
    };
  ],;

  const benefits = [;
    "Reduce hiring time by 60-80%",;
    "Improve candidate quality by 40-60%",;
    "Eliminate unconscious bias completely",;
    "Save 15+ hours per hire on interviews",;
    "Increase diversity in hiring by 30-50%",;
    "Reduce turnover by 25-40%"
  ],;

  const assessmentTypes = [;
    {;
      title: "Technical Skills Assessment",description: "Comprehensive evaluation of programming, problem-solving, and technical knowledge",;
      duration: "45-90 minutes",price: "From $150/candidate"
    };
    {;
      title: "Behavioral & Cultural Fit",description: "AI analysis of personality traits, communication, and cultural alignment",;
      duration: "30-60 minutes",price: "From $100/candidate"
    };
    {;
      title: "Leadership Assessment",description: "Evaluation of leadership potential, decision-making, and team management",;
      duration: "60-120 minutes",price: "From $200/candidate"
    };
    {;
      title: "Full Assessment Suite",description: "Complete evaluation covering all aspects of candidate suitability",duration: "2-3 hours",price: "From $350/candidate"
    };
  ];
  const industries = [;
    "Technology & Software",;
    "Healthcare & Life Sciences",;
    "Finance & Banking",;
    "Manufacturing & Engineering",;
    "Retail & E-commerce",;
    "Consulting & Professional Services"
  ],;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="AI-Powered Interview Assessment Services - Zion Tech Group"
        description="Revolutionary AI-powered interview assessment services that eliminate bias, improve hiring quality, and streamline recruitment processes. Get objective candidate evaluations with predictive analytics."
      />;
      ;
      {/* Hero Section */};
      <section className="relative overflow-hidden py-20 lg:py-32">;
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10"></[^>]*>
        <div className="container mx-auto px-4 relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-6">;
              <[^>]*/>
              <span className="text-purple-300 font-medium">AI Interview Assessment</[^>]*>
            </[^>]*>
            ;
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">;
                AI-Powered;
              </[^>]*>
              <[^>]*/>
              <span className="text-white">Interview Assessment</[^>]*>
            </[^>]*>
            ;
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Transform your hiring process with AI-powered interview assessment technology. ;
              Eliminate bias, improve candidate quality, and make data-driven hiring decisions ;
              with unprecedented accuracy.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                <[^>]*/>
                Start Free Trial;
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                <[^>]*/>
                Watch Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">;
              Advanced AI Technology for Better Hiring;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI-powered assessment platform combines natural language processing;
              computer vision, and machine learning to deliver objective candidate evaluations.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-400/40 group-hover:to-pink-500/40 transition-all duration-300">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-gray-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">;
              Proven Results & Benefits;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI-powered interview assessment services deliver measurable improvements ;
              in hiring efficiency, candidate quality, and organizational diversity.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {benefits.map((benefit, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, x: -20 }};
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <[^>]*/>
                <span className="text-white font-medium">{benefit}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Assessment Types */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">;
              Comprehensive Assessment Solutions;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Choose from our range of AI-powered assessment types designed to evaluate ;
              different aspects of candidate suitability and potential.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {assessmentTypes.map((assessment, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <h3 className="text-xl font-semibold text-white mb-3">{assessment.title}</[^>]*>
                <p className="text-gray-300 mb-4">{assessment.description}</[^>]*>
                <div className="flex items-center text-sm text-gray-400 mb-3">;
                  <[^>]*/>
                  {assessment.duration};
                </[^>]*>
                <div className="text-2xl font-bold text-purple-400 mb-4">{assessment.price}</[^>]*>
                <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">;
                  Get Started;
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Industries Section */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">;
              Trusted Across Industries;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI-powered assessment technology is successfully deployed across ;
              diverse industries, helping organizations make better hiring decisions.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">;
            {industries.map((industry, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, scale: 0.8 }};
                whileInView={{ opacity: 1, scale: 1 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">;
                  <[^>]*/>
                </[^>]*>
                <span className="text-white font-medium text-sm">{industry}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Hiring Process?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Join the AI revolution in recruitment and make better hiring decisions ;
              with objective, data-driven candidate assessments.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                <[^>]*/>
                Start Your Free Trial;
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                <[^>]*/>
                Call +1 302 464 0950;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};