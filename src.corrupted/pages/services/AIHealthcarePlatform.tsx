import React from "react"
import { motion } from "framer-motion"
import { ;
  Heart,;
  Brain, ;
  Target, ;
  BarChart3, ;
  CheckCircle,;
  ArrowRight,;
  Star,;
  Globe,;
  Cpu,;
  Database,;
  ChartBar,;
  PieChart,;
  Activity,;
  Eye,;
  Clock,;
  DollarSign,;
  Award,;
  MessageSquare,;
  Share2,;
  TrendingUp,;
  Zap,;
  Shield,;
  Users,;
  Stethoscope;
} from "lucide-react"
const AIHealthcarePlatform: React.FC = () => {
  const features = [;
    {;
      icon: Brain,title: 'AI-Powered Diagnosis',description: 'Advanced machine learning for accurate medical diagnosis and treatment recommendations'
    };
    {;
      icon: Heart,title: 'Patient Monitoring',description: 'Real-time health monitoring and early warning systems for critical conditions'
    };
    {;
      icon: Target,title: 'Treatment Optimization',description: 'Personalized treatment plans based on patient data and medical research'
    };
    {;
      icon: BarChart3,title: 'Health Analytics',description: 'Comprehensive health data analysis and predictive insights'
    };
    {;
      icon: Shield,title: 'Data Security',description: 'HIPAA-compliant security with end-to-end encryption'
    };
    {;
      icon: Stethoscope,title: 'Clinical Decision Support',description: 'AI-powered tools to assist healthcare professionals in decision making'
    };
  ];
  const benefits = [;
    'Improve diagnostic accuracy by 40%Reduce medical errors by 60%',;
    'Enhance patient outcomes by 35%Optimize treatment plans',;
    'Reduce healthcare costs by 25%Improve patient engagement'
  ],;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-500/30 text-pink-400 text-sm font-medium mb-6">;
              <[^>]*/>
              AI-Powered Healthcare;
            </[^>]*>
            ;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Revolutionize Healthcare with;
              <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent"> AI Intelligence</[^>]*>
            </[^>]*>
            ;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Transform patient care with our AI-powered healthcare platform. ;
              Improve diagnosis accuracy, optimize treatments, and enhance patient outcomes.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">;
                Start Free Trial;
              </[^>]*>
              <button className="px-8 py-4 border border-pink-500/30 text-pink-400 rounded-lg font-semibold hover:bg-pink-500/10 transition-all duration-300">;
                Schedule Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Advanced Healthcare Features;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Our AI platform provides comprehensive healthcare solutions for modern medical practices;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-4">;
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Why Choose AI Healthcare Platform?;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Experience measurable improvements in patient care and healthcare outcomes;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            <motion.div
              initial={{ opacity: 0, x: -20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
            >;
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</[^>]*>
              <div className="space-y-4">;
                {benefits.map((benefit, index) => (;
                  <div key={index} className="flex items-center space-x-3">;
                    <[^>]*/>
                    <span className="text-gray-300">{benefit}</[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
            ;
            <motion.div
              initial={{ opacity: 0, x: 20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to Transform Healthcare?</[^>]*>
              <p className="text-gray-300 mb-6">;
                Join thousands of healthcare providers already using AI to improve patient care.;
              </[^>]*>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300">;
                Get Started Today;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Ready to Revolutionize Healthcare?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Start your journey to AI-powered healthcare with our comprehensive platform.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300">;
                Start Free Trial;
              </[^>]*>
              <button className="px-8 py-4 border border-pink-500/30 text-pink-400 rounded-lg font-semibold hover:bg-pink-500/10 transition-all duration-300">;
                Contact Sales;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default AIHealthcarePlatform;