import React from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
import { motion } from 'framer-motion',
import { 
  Stethoscope, Brain, Eye, Heart,
  Microscope, Shield, BarChart3,
  TrendingUp, Target, Users, CheckCircle,
  ArrowRight, Cpu, Network, Database,
  Lock, Clock, DollarSign, PieChart,
  Activity, Zap, Pill, Syringe, Hospital, Ambulance
} from 'lucide-react',
import Link from 'next/link',
const AIHealthcareDiagnosticsPro: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: &quot;Advanced AI Diagnostics&quot;,
      description: &quot;Deep learning algorithms analyze medical images, lab results, and patient data with 99.2% accuracy for early disease detection.&quot;,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      icon: Eye,
      title: &quot;Multi-Modal Imaging&quot;,
      description: &quot;Process X-rays, CT scans, MRIs, ultrasounds, and pathology slides with specialized AI models for comprehensive analysis.&quot;,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      icon: Heart,
      title: &quot;Predictive Analytics&quot;,
      description: &quot;AI-powered risk assessment and early warning systems for cardiovascular, cancer, and chronic disease prevention.&quot;,
      color: &quot;from-red-500 to-orange-500&quot;
    },
    {
      icon: Shield,
      title: &quot;HIPAA Compliant&quot;,
      description: &quot;Enterprise-grade security with end-to-end encryption, audit trails, and compliance with healthcare data regulations.&quot;,
      color: &quot;from-green-500 to-emerald-500&quot;
    },
    {
      icon: BarChart3,
      title: &quot;Real-time Monitoring&quot;,
      description: &quot;Continuous patient monitoring with instant alerts for critical changes and automated reporting to healthcare providers.&quot;,
      color: &quot;from-indigo-500 to-blue-500&quot;
    },
    {
      icon: Zap,
      title: &quot;Automated Workflows&quot;,
      description: &quot;Streamline diagnostic processes with intelligent automation, reducing diagnosis time by up to 80%.&quot;,
      color: &quot;from-yellow-500 to-orange-500&quot;
    }
  ],

  const useCases = [
    {
      icon: Microscope,
      title: &quot;Radiology & Imaging&quot;,
      description: &quot;AI-powered analysis of X-rays, CT scans, MRIs, and ultrasounds for faster, more accurate diagnoses.&quot;,
      benefits: [&quot;95% accuracy rate&quot;, &quot;80% faster diagnosis&quot;, &quot;Reduced radiologist workload&quot;]
    },
    {
      icon: Heart,
      title: &quot;Cardiology&quot;,
      description: &quot;Early detection of heart disease, arrhythmias, and cardiovascular risks through AI analysis of ECG and imaging data.&quot;,
      benefits: [&quot;Early disease detection&quot;, &quot;Risk stratification&quot;, &quot;Preventive care&quot;]
    },
    {
      icon: Brain,
      title: &quot;Neurology&quot;,
      description: &quot;AI detection of brain tumors, strokes, Alzheimer's, and neurological disorders from imaging and clinical data.&quot;,
      benefits: [&quot;Early intervention&quot;, &quot;Treatment planning&quot;, &quot;Outcome prediction&quot;]
    },
    {
      icon: Microscope,
      title: &quot;Pathology&quot;,
      description: &quot;Digital pathology analysis for cancer detection, grading, and personalized treatment recommendations.&quot;,
      benefits: [&quot;Precision medicine&quot;, &quot;Faster results&quot;, &quot;Standardized analysis&quot;]
    }
  ],

  const pricingPlans = [
    {
      name: &quot;Starter&quot;,
      price: &quot;$4,999&quot;,
      period: &quot;/month&quot;,
      description: &quot;Perfect for small clinics and practices&quot;,
      features: [
        &quot;Up to 1,000 diagnostic scans/month&quot;,
        &quot;Basic AI diagnostic models&quot;,
        &quot;Standard reporting dashboard&quot;,
        &quot;Email support&quot;,
        &quot;HIPAA compliance&quot;,
        &quot;API access (5,000 calls/month)&quot;
      ],
      color: &quot;from-blue-500 to-cyan-500&quot;,
      popular: false
    },
    {
      name: &quot;Professional&quot;,
      price: &quot;$12,999&quot;,
      period: &quot;/month&quot;,
      description: &quot;Ideal for hospitals and medical centers&quot;,
      features: [
        &quot;Up to 10,000 diagnostic scans/month&quot;,
        &quot;Advanced AI diagnostic models&quot;,
        &quot;Multi-modal imaging support&quot;,
        &quot;Real-time monitoring & alerts&quot;,
        &quot;Priority support&quot;,
        &quot;API access (50,000 calls/month)&quot;,
        &quot;Custom integrations&quot;,
        &quot;Training & certification&quot;
      ],
      color: &quot;from-purple-500 to-pink-500&quot;,
      popular: true
    },
    {
      name: &quot;Enterprise&quot;,
      price: &quot;$29,999&quot;,
      period: &quot;/month&quot;,
      description: &quot;For large healthcare networks&quot;,
      features: [
        &quot;Unlimited diagnostic scans&quot;,
        &quot;Custom AI model development&quot;,
        &quot;Full multi-modal support&quot;,
        &quot;Dedicated account manager&quot;,
        &quot;24/7 phone support&quot;,
        &quot;Unlimited API access&quot;,
        &quot;White-label solutions&quot;,
        &quot;On-premise deployment&quot;,
        &quot;Custom compliance features&quot;
      ],
      color: &quot;from-green-500 to-emerald-500&quot;,
      popular: false
    }
  ],

  const integrations = [
    {
      name: &quot;PACS Systems&quot;,
      icon: Database,
      description: &quot;DICOM integration with major PACS vendors&quot;,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      name: &quot;EHR Platforms&quot;,
      icon: Database,
      description: &quot;Epic, Cerner, Allscripts, athenahealth&quot;,
      color: &quot;from-green-500 to-emerald-500&quot;
    },
    {
      name: &quot;LIS Systems&quot;,
      icon: Microscope,
      description: &quot;Lab information systems integration&quot;,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      name: &quot;RIS Systems&quot;,
      icon: BarChart3,
      description: &quot;Radiology information systems&quot;,
      color: &quot;from-orange-500 to-red-500&quot;
    },
    {
      name: &quot;Medical Devices&quot;,
      icon: Stethoscope,
      description: &quot;CT, MRI, X-ray, ultrasound machines&quot;,
      color: &quot;from-indigo-500 to-blue-500&quot;
    },
    {
      name: &quot;Cloud Platforms&quot;,
      icon: Cpu,
      description: &quot;AWS, Azure, Google Cloud, IBM Cloud&quot;,
      color: &quot;from-yellow-500 to-orange-500&quot;
    }
  ],

  const specialties = [
    {
      icon: Heart,
      name: &quot;Cardiology&quot;,
      description: &quot;Heart disease detection, ECG analysis, cardiovascular risk assessment&quot;,
      accuracy: &quot;99.1%&quot;
    },
    {
      icon: Brain,
      name: &quot;Neurology&quot;,
      description: &quot;Brain tumor detection, stroke diagnosis, neurological disorder analysis&quot;,
      accuracy: &quot;98.9%&quot;
    },
    {
      icon: Activity,
      name: &quot;Pulmonology&quot;,
      description: &quot;Lung cancer screening, pneumonia detection, respiratory disease analysis&quot;,
      accuracy: &quot;99.3%&quot;
    },
    {
      icon: Eye,
      name: &quot;Ophthalmology&quot;,
      description: &quot;Retinal disease detection, glaucoma screening, diabetic retinopathy&quot;,
      accuracy: &quot;98.7%&quot;
    },
    {
      icon: Shield,
      name: &quot;Hepatology&quot;,
      description: &quot;Liver disease detection, cirrhosis assessment, tumor identification&quot;,
      accuracy: &quot;99.0%&quot;
    },
    {
      icon: Microscope,
      name: &quot;Nephrology&quot;,
      description: &quot;Kidney disease detection, renal function analysis, transplant assessment&quot;,
      accuracy: &quot;98.8%&quot;
    }
  ],
  return (_<Layout>
      <Head>
        <title>AI Healthcare Diagnostics Pro - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Revolutionize healthcare with AI-powered diagnostics. Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and improve patient outcomes with our advanced AI platform.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI healthcare, medical diagnostics, medical imaging, disease detection, healthcare AI, medical AI, diagnostic accuracy&quot; />
        <meta property=&quot;og:title&quot; content=&quot;AI Healthcare Diagnostics Pro - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Revolutionize healthcare with AI-powered diagnostics. Achieve 99.2% accuracy in disease detection and reduce diagnosis time by 80%.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/ai-healthcare-diagnostics-pro&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ai-healthcare-diagnostics-pro&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-black&quot;>
        {/* Background Effects */}
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900&quot;></div>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]&quot;></div>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]&quot;></div>
        
        {/* Floating Elements */}
        <div className=&quot;absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse&quot;></div>
        <div className=&quot;absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000&quot;></div>
        <div className=&quot;absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-80 animate-pulse delay-500&quot;></div>        
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;          >
            <div className=&quot;inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6&quot;>
              <Brain className=&quot;w-4 h-4&quot; />
              <span>AI-Powered Healthcare</span>
            </div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;>
              <span className=&quot;bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                AI Healthcare
              </span>
              <br />
              <span className=&quot;text-white&quot;>Diagnostics Pro</span>
            </h1>
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
              Transform healthcare delivery with the world's most advanced AI diagnostic platform. 
              Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and save countless lives through early intervention.
            </p>
            
            {/* Key Metrics */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto&quot;>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className=&quot;bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm&quot;              >
                <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>99.2%</div>
                <div className=&quot;text-gray-300&quot;>Diagnostic Accuracy</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className=&quot;bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm&quot;              >
                <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>80%</div>
                <div className=&quot;text-gray-300&quot;>Faster Diagnosis</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className=&quot;bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm&quot;              >
                <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>24/7</div>
                <div className=&quot;text-gray-300&quot;>Continuous Monitoring</div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className=&quot;px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25&quot;              >
                Schedule Demo
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className=&quot;px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300&quot;              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-20 bg-gray-900 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]&quot;></div>
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Powered by <span className=&quot;bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent&quot;>Advanced AI</span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Our platform combines cutting-edge artificial intelligence with deep medical expertise to deliver unprecedented diagnostic accuracy and speed.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 group&quot;
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>{feature.title}</h3>
                <p className=&quot;text-gray-300 leading-relaxed&quot;>{feature.description}</p>              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Specialties Section */}
      <section className=&quot;py-20 bg-black relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]&quot;></div>
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Medical <span className=&quot;bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Specialties</span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Our AI platform covers all major medical specialties with specialized models trained on millions of cases for maximum accuracy.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300&quot;              >
                <div className=&quot;flex items-center justify-between mb-4&quot;>
                  <div className=&quot;w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center&quot;>
                    <specialty.icon className=&quot;w-8 h-8 text-white&quot; />
                  </div>
                  <div className=&quot;text-right&quot;>
                    <div className=&quot;text-2xl font-bold text-green-400&quot;>{specialty.accuracy}</div>
                    <div className=&quot;text-sm text-gray-400&quot;>Accuracy</div>
                  </div>
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{specialty.name}</h3>
                <p className=&quot;text-gray-300 leading-relaxed&quot;>{specialty.description}</p>              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className=&quot;py-20 bg-gray-900 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,73,153,0.06),transparent_50%)]&quot;></div>
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Transform Your <span className=&quot;bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent&quot;>Practice</span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              From radiology to pathology, our AI platform adapts to your specific medical specialty and workflow requirements.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm&quot;              >
                <div className=&quot;flex items-start space-x-4&quot;>
                  <div className=&quot;w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0&quot;>
                    <useCase.icon className=&quot;w-8 h-8 text-white&quot; />
                  </div>
                  <div className=&quot;flex-1&quot;>
                    <h3 className=&quot;text-2xl font-semibold text-white mb-3&quot;>{useCase.title}</h3>
                    <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>{useCase.description}</p>
                    <div className=&quot;space-y-2&quot;>
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className=&quot;flex items-center space-x-2 text-sm&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                          <span className=&quot;text-gray-300&quot;>{benefit}</span>                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className=&quot;py-20 bg-black relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]&quot;></div>
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Choose Your <span className=&quot;bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent&quot;>Plan</span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Flexible pricing options designed to scale with your healthcare practice. Start with our Starter plan and upgrade as you grow.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {pricingPlans.map((plan, index) => (              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className={_`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border rounded-2xl p-8 backdrop-blur-sm ${
                  plan.popular 
                    ? 'border-green-500/50 shadow-lg shadow-green-500/25' 
                    : 'border-gray-700/50'}`}
              >
                {plan.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                    <div className=&quot;bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium&quot;>                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className=&quot;text-center mb-8&quot;>
                  <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                  <div className=&quot;flex items-baseline justify-center space-x-1 mb-2&quot;>
                    <span className=&quot;text-4xl font-bold text-white&quot;>{plan.price}</span>
                    <span className=&quot;text-gray-400&quot;>{plan.period}</span>
                  </div>
                  <p className=&quot;text-gray-300&quot;>{plan.description}</p>
                </div>

                <ul className=&quot;space-y-4 mb-8&quot;>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center space-x-3&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-green-400 flex-shrink-0&quot; />
                      <span className=&quot;text-gray-300&quot;>{feature}</span>                    </li>
                  ))}
                </ul>

                <button className={_`w-full py-3 px-6 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className=&quot;py-20 bg-gray-900 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]&quot;></div>
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Seamless <span className=&quot;bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent&quot;>Integrations</span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Connect with your existing healthcare systems and workflows. Our platform integrates with all major EHR, PACS, and medical device platforms.
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm text-center hover:border-green-500/30 transition-all duration-300&quot;
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <integration.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>{integration.name}</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>{integration.description}</p>              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-cyan-900/20 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]&quot;></div>
        <div className=&quot;relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Transform</span> Healthcare?            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Join leading healthcare institutions worldwide who have already revolutionized patient care with AI-powered diagnostics.
            </p>
            
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <button className=&quot;px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25&quot;>
                Schedule Demo
              </button>
              <button className=&quot;px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300&quot;>
                Contact Sales
              </button>
            </div>
            
            <div className=&quot;mt-8 text-sm text-gray-400&quot;>
              <p>Questions? Call us at <a href=&quot;tel:+13024640950&quot; className=&quot;text-green-400 hover:text-green-300&quot;>+1 302 464 0950</Link> or email <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;text-green-400 hover:text-green-300&quot;>kleber@ziontechgroup.com</Link></p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
},

export default AIHealthcareDiagnosticsPro,