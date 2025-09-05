import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import {_Stethoscope, _Brain, _Eye, _Heart, _Microscope, _Shield, _BarChart3, _TrendingUp, _Target, _Users, _CheckCircle, _ArrowRight, _Cpu, _Network, _Database, _Lock, _Clock, _DollarSign, _PieChart, _Activity, _Zap, _Pill, _Syringe, _Hospital, _Ambulance} from 'lucide-react';
import Link from 'next/link';

const AIHealthcareDiagnosticsPro: React.FC = () => {_const _features = [
    {
      icon: Brain, _title: "Advanced AI Diagnostics", _description: "Deep learning algorithms analyze medical images, _lab results, _and patient data with 99.2% accuracy for early disease detection.", _color: "from-blue-500 to-cyan-500"},
    {_icon: Eye, _title: "Multi-Modal Imaging", _description: "Process X-rays, _CT scans, _MRIs, _ultrasounds, _and pathology slides with specialized AI models for comprehensive analysis.", _color: "from-purple-500 to-pink-500"},
    {_icon: Heart, _title: "Predictive Analytics", _description: "AI-powered risk assessment and early warning systems for cardiovascular, _cancer, _and chronic disease prevention.", _color: "from-red-500 to-orange-500"},
    {_icon: Shield, _title: "HIPAA Compliant", _description: "Enterprise-grade security with end-to-end encryption, _audit trails, _and compliance with healthcare data regulations.", _color: "from-green-500 to-emerald-500"},
    {_icon: BarChart3, _title: "Real-time Monitoring", _description: "Continuous patient monitoring with instant alerts for critical changes and automated reporting to healthcare providers.", _color: "from-indigo-500 to-blue-500"},
    {_icon: Zap, _title: "Automated Workflows", _description: "Streamline diagnostic processes with intelligent automation, _reducing diagnosis time by up to 80%.", _color: "from-yellow-500 to-orange-500"}
  ];

  const _useCases = [
    {_icon: Microscope, _title: "Radiology & Imaging", _description: "AI-powered analysis of X-rays, _CT scans, _MRIs, _and ultrasounds for faster, _more accurate diagnoses.", _benefits: ["95% accuracy rate", _"80% faster diagnosis", _"Reduced radiologist workload"]},
    {_icon: Heart, _title: "Cardiology", _description: "Early detection of heart disease, _arrhythmias, _and cardiovascular risks through AI analysis of ECG and imaging data.", _benefits: ["Early disease detection", _"Risk stratification", _"Preventive care"]},
    {_icon: Brain, _title: "Neurology", _description: "AI detection of brain tumors, _strokes, _Alzheimer's, _and neurological disorders from imaging and clinical data.", _benefits: ["Early intervention", _"Treatment planning", _"Outcome prediction"]},
    {_icon: Microscope, _title: "Pathology", _description: "Digital pathology analysis for cancer detection, _grading, _and personalized treatment recommendations.", _benefits: ["Precision medicine", _"Faster results", _"Standardized analysis"]}
  ];

  const _pricingPlans = [
    {_name: "Starter", _price: "$4, _999", _period: "/month", _description: "Perfect for small clinics and practices", _features: [
        "Up to 1, _000 diagnostic scans/month", _"Basic AI diagnostic models", _"Standard reporting dashboard", _"Email support", _"HIPAA compliance", _"API access (5, _000 calls/month)"
      ], _color: "from-blue-500 to-cyan-500", _popular: false},
    {_name: "Professional", _price: "$12, _999", _period: "/month", _description: "Ideal for hospitals and medical centers", _features: [
        "Up to 10, _000 diagnostic scans/month", _"Advanced AI diagnostic models", _"Multi-modal imaging support", _"Real-time monitoring & alerts", _"Priority support", _"API access (50, _000 calls/month)", _"Custom integrations", _"Training & certification"
      ], _color: "from-purple-500 to-pink-500", _popular: true},
    {_name: "Enterprise", _price: "$29, _999", _period: "/month", _description: "For large healthcare networks", _features: [
        "Unlimited diagnostic scans", _"Custom AI model development", _"Full multi-modal support", _"Dedicated account manager", _"24/7 phone support", _"Unlimited API access", _"White-label solutions", _"On-premise deployment", _"Custom compliance features"
      ], _color: "from-green-500 to-emerald-500", _popular: false}
  ];

  const _integrations = [
    {_name: "PACS Systems", _icon: Database, _description: "DICOM integration with major PACS vendors", _color: "from-blue-500 to-cyan-500"},
    {_name: "EHR Platforms", _icon: Database, _description: "Epic, _Cerner, _Allscripts, _athenahealth", _color: "from-green-500 to-emerald-500"},
    {_name: "LIS Systems", _icon: Microscope, _description: "Lab information systems integration", _color: "from-purple-500 to-pink-500"},
    {_name: "RIS Systems", _icon: BarChart3, _description: "Radiology information systems", _color: "from-orange-500 to-red-500"},
    {_name: "Medical Devices", _icon: Stethoscope, _description: "CT, _MRI, _X-ray, _ultrasound machines", _color: "from-indigo-500 to-blue-500"},
    {_name: "Cloud Platforms", _icon: Cpu, _description: "AWS, _Azure, _Google Cloud, _IBM Cloud", _color: "from-yellow-500 to-orange-500"}
  ];

  const _specialties = [
    {_icon: Heart, _name: "Cardiology", _description: "Heart disease detection, _ECG analysis, _cardiovascular risk assessment", _accuracy: "99.1%"},
    {_icon: Brain, _name: "Neurology", _description: "Brain tumor detection, _stroke diagnosis, _neurological disorder analysis", _accuracy: "98.9%"},
    {_icon: Activity, _name: "Pulmonology", _description: "Lung cancer screening, _pneumonia detection, _respiratory disease analysis", _accuracy: "99.3%"},
    {_icon: Eye, _name: "Ophthalmology", _description: "Retinal disease detection, _glaucoma screening, _diabetic retinopathy", _accuracy: "98.7%"},
    {_icon: Shield, _name: "Hepatology", _description: "Liver disease detection, _cirrhosis assessment, _tumor identification", _accuracy: "99.0%"},
    {_icon: Microscope, _name: "Nephrology", _description: "Kidney disease detection, _renal function analysis, _transplant assessment", _accuracy: "98.8%"}
  ];

  return (_<Layout>
      <Head>
        <title>AI Healthcare Diagnostics Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionize healthcare with AI-powered diagnostics. Achieve 99.2% accuracy in disease detection, _reduce diagnosis time by 80%, _and improve patient outcomes with our advanced AI platform." />
        <meta name="keywords" content="AI healthcare, _medical diagnostics, _medical imaging, _disease detection, _healthcare AI, _medical AI, _diagnostic accuracy" />
        <meta property="og:title" content="AI Healthcare Diagnostics Pro - Zion Tech Group" />
        <meta property="og:description" content="Revolutionize healthcare with AI-powered diagnostics. Achieve 99.2% accuracy in disease detection and reduce diagnosis time by 80%." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-healthcare-diagnostics-pro" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-healthcare-diagnostics-pro" />
      </Head>

      {_/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {_/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%, _rgba(56, _189, _248, _0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        {_/* Floating Elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-80 animate-pulse delay-500"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Healthcare</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                AI Healthcare
              </span>
              <br />
              <span className="text-white">Diagnostics Pro</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform healthcare delivery with the world's most advanced AI diagnostic platform. 
              Achieve 99.2% accuracy in disease detection, reduce diagnosis time by 80%, and save countless lives through early intervention.
            </p>
            
            {_/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <motion.div
                initial={_{ opacity: 0, _scale: 0.8}}
                animate={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.6, _delay: 0.2}}
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">99.2%</div>
                <div className="text-gray-300">Diagnostic Accuracy</div>
              </motion.div>
              <motion.div
                initial={_{ opacity: 0, _scale: 0.8}}
                animate={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.6, _delay: 0.4}}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                <div className="text-gray-300">Faster Diagnosis</div>
              </motion.div>
              <motion.div
                initial={_{ opacity: 0, _scale: 0.8}}
                animate={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.6, _delay: 0.6}}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Continuous Monitoring</div>
              </motion.div>
            </div>

            {_/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: 0.8}}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Schedule Demo
              </motion.button>
              <motion.button
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: 1.0}}
                className="px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Features Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Advanced AI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge artificial intelligence with deep medical expertise to deliver unprecedented diagnostic accuracy and speed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_features.map(_(feature, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className={_`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{_feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{_feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Medical Specialties Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Medical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Specialties</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform covers all major medical specialties with specialized models trained on millions of cases for maximum accuracy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_specialties.map(_(specialty, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <specialty.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{_specialty.accuracy}</div>
                    <div className="text-sm text-gray-400">Accuracy</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{_specialty.name}</h3>
                <p className="text-gray-300 leading-relaxed">{_specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Use Cases Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,73,153,0.06),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Practice</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From radiology to pathology, our AI platform adapts to your specific medical specialty and workflow requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_useCases.map(_(useCase, _index) => (_<motion.div
                key={index}
                initial={_{ opacity: 0, _x: index % 2 === 0 ? -30 : 30}}
                whileInView={_{ opacity: 1, _x: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">{_useCase.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{_useCase.description}</p>
                    <div className="space-y-2">
                      {_useCase.benefits.map((benefit, _benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">{_benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Pricing Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your healthcare practice. Start with our Starter plan and upgrade as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_pricingPlans.map(_(plan, _index) => (
              <motion.div
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
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{_plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-2">
                    <span className="text-4xl font-bold text-white">{_plan.price}</span>
                    <span className="text-gray-400">{_plan.period}</span>
                  </div>
                  <p className="text-gray-300">{_plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {_plan.features.map(_(feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{_feature}</span>
                    </li>
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

      {_/* Integrations Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing healthcare systems and workflows. Our platform integrates with all major EHR, PACS, and medical device platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_integrations.map(_(integration, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm text-center hover:border-green-500/30 transition-all duration-300"
              >
                <div className={_`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{_integration.name}</h3>
                <p className="text-gray-300 text-sm">{_integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-cyan-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Transform</span> Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading healthcare institutions worldwide who have already revolutionized patient care with AI-powered diagnostics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Call us at <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 302 464 0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AIHealthcareDiagnosticsPro;