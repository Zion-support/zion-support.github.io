import React from "react"
import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { ;
  Heart,;
  Brain, ;
  Shield, ;
  Activity, ;
  Users, ;
  Zap, ;
  ArrowRight,;
  CheckCircle,;
  Star,;
  TrendingUp,;
  Award,;
  Globe,;
  Lock,;
  Database,;
  Cpu,;
  Network,;
  BarChart3,;
  FileText,;
  MessageCircle,;
  Phone,;
  Mail,;
  MapPin,;
  Building,;
  Video,;
  Eye;
} from "lucide-react"
export default function AIHealthcarePlatform() {;
  const features = [;
    {;
      icon: Brain,title: 'AI-Powered Diagnostics',description: 'Advanced machine learning algorithms for accurate disease detection and diagnosis',color: 'from-blue-500 to-cyan-500'
    };
    {;
      icon: Heart,title: 'Patient Monitoring',description: 'Real-time health monitoring with predictive analytics and early warning systems',color: 'from-red-500 to-pink-500'
    };
    {;
      icon: Shield,title: 'HIPAA Compliant Security',description: 'Enterprise-grade security with end-to-end encryption and compliance standards',color: 'from-green-500 to-emerald-500'
    };
    {;
      icon: Activity,title: 'Predictive Analytics',description: 'Proactive health insights using historical data and AI forecasting models',color: 'from-purple-500 to-indigo-500'
    };
    {;
      icon: Users,title: 'Care Team Collaboration',description: 'Seamless communication and coordination between healthcare providers',color: 'from-orange-500 to-red-500'
    };
    {;
      icon: Zap,title: 'Real-time Processing',description: 'Instant data analysis and decision support for critical care situations',color: 'from-yellow-500 to-orange-500'
    };
  ];
  const benefits = [;
    'Reduce diagnostic errors by up to 85%Improve patient outcomes by 40%',;
    'Cut healthcare costs by 30%Streamline administrative processes',;
    'Enhance patient engagementEnsure regulatory compliance'
  ],;

  const useCases = [;
    {;
      title: 'Hospital Management',description: 'Comprehensive hospital information system with AI-powered decision support',icon: Building;
    };
    {;
      title: 'Telemedicine Platform',description: 'Virtual care delivery with AI-assisted diagnosis and treatment planning',icon: Video;
    };
    {;
      title: 'Medical Imaging',description: 'AI-enhanced radiology and pathology analysis for accurate diagnosis',icon: Eye;
    };
    {;
      title: 'Patient Records',description: 'Intelligent electronic health records with predictive insights',icon: FileText;
    };
  ];
  return (
    <>;
      <SEO ;
        title="AI Healthcare Platform - Zion Tech Group"
        description="Revolutionary AI-powered healthcare platform with advanced diagnostics, patient monitoring, and predictive analytics. Transform healthcare delivery with cutting-edge technology."
        keywords="AI healthcare, medical AI, healthcare platform, patient monitoring, predictive analytics, medical diagnostics"
      />;
      ;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */};
        <section className="relative overflow-hidden py-20 lg:py-32">;
          <div className="container-responsive">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">;
                <[^>]*/>
                Healthcare Innovation;
              </[^>]*>
              ;
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">;
                AI-Powered;
                <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">;
                  Healthcare Platform;
                </[^>]*>
              </[^>]*>
              ;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
                Transform healthcare delivery with our revolutionary AI platform. ;
                Advanced diagnostics, predictive analytics, and intelligent patient monitoring ;
                that saves lives and improves outcomes.;
              </[^>]*>
              ;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  Schedule Demo;
                </[^>]*>
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  Learn More;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
          ;
          {/* Background Elements */};
          <div className="absolute inset-0 overflow-hidden pointer-events-none">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></[^>]*>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Features Section */};
        <section className="py-20">;
          <div className="container-responsive">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
                Revolutionary Healthcare Features;
              </[^>]*>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                Our AI platform combines cutting-edge technology with healthcare expertise ;
                to deliver unprecedented accuracy and efficiency.;
              </[^>]*>
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {features.map((feature, index) => (;
                <motion.div
                  key={feature.title};
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  viewport={{ once: true }};
                  className="[^"]*"
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                    <[^>]*/>
                  </[^>]*>
                  ;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">;
                    {feature.title};
                  </[^>]*>
                  ;
                  <p className="text-gray-400 leading-relaxed">;
                    {feature.description};
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Benefits Section */};
        <section className="py-20 bg-slate-800/30">;
          <div className="container-responsive">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">;
              <motion.div
                initial={{ opacity: 0, x: -30 }};
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.8 }};
                viewport={{ once: true }};
              >;
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;
                  Transform Your Healthcare Delivery;
                </[^>]*>
                ;
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">;
                  Our AI healthcare platform delivers measurable improvements in patient care;
                  operational efficiency, and cost reduction while maintaining the highest ;
                  standards of security and compliance.;
                </[^>]*>
                ;
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
                  {benefits.map((benefit, index) => (;
                    <motion.div
                      key={benefit};
                      initial={{ opacity: 0, x: -20 }};
                      whileInView={{ opacity: 1, x: 0 }};
                      transition={{ duration: 0.5, delay: index * 0.1 }};
                      viewport={{ once: true }};
                      className="[^"]*"
                    >;
                      <[^>]*/>
                      <span className="text-gray-300">{benefit}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
              ;
              <motion.div
                initial={{ opacity: 0, x: 30 }};
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.8 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-3xl p-8 border border-red-500/30">;
                  <div className="text-center">;
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">;
                      <[^>]*/>
                    </[^>]*>
                    ;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      Proven Results;
                    </[^>]*>
                    ;
                    <div className="grid grid-cols-2 gap-6">;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-red-400 mb-2">85%</[^>]*>
                        <div className="text-sm text-gray-400">Error Reduction</[^>]*>
                      </[^>]*>
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-pink-400 mb-2">40%</[^>]*>
                        <div className="text-sm text-gray-400">Better Outcomes</[^>]*>
                      </[^>]*>
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-purple-400 mb-2">30%</[^>]*>
                        <div className="text-sm text-gray-400">Cost Savings</[^>]*>
                      </[^>]*>
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-cyan-400 mb-2">60%</[^>]*>
                        <div className="text-sm text-gray-400">Faster Diagnosis</[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Use Cases Section */};
        <section className="py-20">;
          <div className="container-responsive">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
                Healthcare Use Cases;
              </[^>]*>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                Our AI platform adapts to various healthcare settings and requirements;
                providing tailored solutions for different medical environments.;
              </[^>]*>
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              {useCases.map((useCase, index) => (;
                <motion.div
                  key={useCase.title};
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  viewport={{ once: true }};
                  className="[^"]*"
                >;
                  <div className="flex items-start gap-4">;
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">;
                      <[^>]*/>
                    </[^>]*>
                    ;
                    <div className="flex-1">;
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">;
                        {useCase.title};
                      </[^>]*>
                      <p className="text-gray-400 leading-relaxed">;
                        {useCase.description};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* CTA Section */};
        <section className="py-20 bg-gradient-to-r from-red-500/10 to-pink-500/10">;
          <div className="container-responsive">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;
                Ready to Transform Healthcare?;
              </[^>]*>
              ;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
                Join leading healthcare institutions that are already using our AI platform ;
                to improve patient care and operational efficiency.;
              </[^>]*>
              ;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  Get Started Today;
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
    </[^>]*>
  );
};