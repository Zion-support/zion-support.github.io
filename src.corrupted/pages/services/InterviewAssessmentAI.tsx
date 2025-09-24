import React from "react"
import { motion } from "framer-motion"
import { SEO } from "../../components/SEO"
import { ;
  Users,;
  Brain, ;
  Target, ;
  Zap, ;
  BarChart3, ;
  Clock, ;
  Award, ;
  Star,;
  Globe,;
  Cpu,;
  Database,;
  CheckCircle,;
  Eye,;
  MessageCircle,;
  FileText,;
  Shield,;
  TrendingUp,;
  UserCheck,;
  Calendar,;
  Video;
} from "lucide-react"
export default function InterviewAssessmentAI() {;
  const features = [;
    {;
      icon: Brain,title: "AI-Powered Assessment",description: "Intelligent evaluation of candidate skills, personality, and cultural fit."
    },;
    {;
      icon: Video,title: "Video Interview Analysis",description: "Advanced video processing for facial expressions, tone, and communication skills."
    },;
    {;
      icon: Target,title: "Skill Gap Analysis",description: "Comprehensive assessment of technical and soft skills with detailed reporting."
    };
    {;
      icon: Zap,title: "Automated Scheduling",description: "Intelligent interview scheduling and candidate communication automation."
    };
    {;
      icon: BarChart3,title: "Performance Analytics",description: "Data-driven insights into hiring effectiveness and candidate performance."
    };
    {;
      icon: Shield,title: "Bias-Free Evaluation",description: "Objective assessment algorithms that eliminate unconscious bias in hiring."
    };
  ];
  const benefits = [;
    "Reduce hiring time by 50-70% with automated assessments",;
    "Improve hiring quality by 40-60% through AI insights",;
    "Reduce bias in hiring decisions by 80-90%",;
    "Enhance candidate experience with 24/7 availability",;
    "Lower cost per hire by 30-50%",;
    "Improve retention rates by 25-40%"
  ],;

  const assessmentTypes = [;
    {;
      type: "Technical Skills",description: "Programming tests, problem-solving, and technical knowledge assessment",;
      icon: Cpu;
    };
    {;
      type: "Personality Assessment",description: "Behavioral analysis, cultural fit, and work style evaluation",;
      icon: Users;
    };
    {;
      type: "Communication Skills",description: "Verbal and written communication, presentation, and interpersonal skills",;
      icon: MessageCircle;
    };
    {;
      type: "Cognitive Ability",description: "Problem-solving, critical thinking, and analytical reasoning tests",;
      icon: Brain;
    };
    {;
      type: "Situational Judgment",description: "Real-world scenarios and decision-making assessment",icon: Target;
    };
    {;
      type: "Cultural Fit",description: "Values alignment, team dynamics, and organizational culture match",;
      icon: Globe;
    };
  ];
  const useCases = [;
    {;
      industry: "Technology",description: "Software developer hiring, technical skills assessment, and coding challenges"
    },;
    {;
      industry: "Finance",description: "Analyst recruitment, risk assessment, and financial modeling evaluation"
    },;
    {;
      industry: "Healthcare",description: "Medical staff hiring, patient care assessment, and clinical skills evaluation"
    },;
    {;
      industry: "Sales & Marketing",description: "Sales representative hiring, communication skills, and performance potential"
    },;
    {;
      industry: "Manufacturing",description: "Engineering recruitment, technical skills, and safety compliance assessment"
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Interview Assessment AI - Zion Tech Group"
        description="Transform your hiring process with AI-powered candidate evaluation, automated assessments, and bias-free recruitment solutions."
      />;
      ;
      {/* Hero Section */};
      <section className="relative overflow-hidden py-20 lg:py-32">;
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10"></[^>]*>
        <div className="container mx-auto px-4 relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-400/30 mb-6">;
              <[^>]*/>
              <span className="text-emerald-300 font-medium">Interview Assessment AI</[^>]*>
            </[^>]*>
            ;
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">;
              Revolutionize Hiring with;
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">;
                {" "}AI-Powered Assessment;
              </[^>]*>
            </[^>]*>
            ;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Transform your recruitment process with intelligent candidate evaluation, automated ;
              assessments, and data-driven hiring decisions that improve quality and reduce bias.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Start Free Trial;
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Schedule Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20 bg-slate-800/50">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Advanced Assessment Features;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI-powered interview assessment platform combines cutting-edge artificial intelligence ;
              with proven hiring methodologies to deliver exceptional recruitment results.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={feature.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-lg flex items-center justify-center mb-4">;
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
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Measurable Hiring Impact;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              See real results with our AI-powered assessment solutions that deliver quantifiable ;
              improvements across all aspects of your recruitment process.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            <div className="space-y-6">;
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</[^>]*>
              <div className="space-y-4">;
                {benefits.map((benefit, index) => (;
                  <motion.div
                    key={index};
                    initial={{ opacity: 0, x: -20 }};
                    whileInView={{ opacity: 1, x: 0 }};
                    transition={{ duration: 0.6, delay: index * 0.1 }};
                    className="[^"]*"
                  >;
                    <[^>]*/>
                    <span className="text-gray-300">{benefit}</[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-8 rounded-xl border border-emerald-400/20">;
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</[^>]*>
              <div className="space-y-4">;
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Industry-leading AI assessment algorithms</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Bias-free evaluation technology</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Global hiring expertise and compliance</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">24/7 assessment and support</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-3">;
                  <[^>]*/>
                  <span className="text-gray-300">Proven hiring success track record</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Assessment Types Section */};
      <section className="py-20 bg-slate-800/50">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Comprehensive Assessment Types;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI platform provides a wide range of assessment types to evaluate every aspect ;
              of candidate suitability and potential.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {assessmentTypes.map((assessment, index) => (;
              <motion.div
                key={assessment.type};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-lg flex items-center justify-center">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-lg font-semibold text-white">{assessment.type}</[^>]*>
                </[^>]*>
                <p className="text-gray-300 text-sm">{assessment.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Use Cases Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Industry Applications;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI-powered assessment solutions are designed to work across industries, providing ;
              tailored evaluation strategies for your specific hiring needs.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {useCases.map((useCase, index) => (;
              <motion.div
                key={useCase.industry};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-lg flex items-center justify-center">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</[^>]*>
                </[^>]*>
                <p className="text-gray-300 text-sm">{useCase.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;
              Ready to Transform Your Hiring?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join hundreds of companies that have already revolutionized their recruitment ;
              process with our AI-powered assessment solutions.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Start Free Trial;
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Contact Sales;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};