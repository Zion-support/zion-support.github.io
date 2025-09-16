import React from 'react';
=======
import { motion } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Briefcase,
  Award,
  TrendingUp,
  Stethoscope,
  Database
=======
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Activity, 
  Zap, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Shield,
  Users,
  TrendingUp,
  Lock,
  Eye,
  Database,
  Network,
  Calendar,
  DollarSign,
  Target,
  Stethoscope,
  Pill,
  Microscope,
  FileText,
  AlertTriangle,
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Activity, 
  Brain, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Zap,
  Target
=======
} from 'lucide-react';

export default function AIHealthcareAnalytics() {
  const features = [
    {
  LineChart,
  Building
} from 'lucide-react';

const AIHealthcareAnalytics: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Patient Analytics",
      description: "Advanced machine learning algorithms that analyze patient data to predict outcomes and optimize treatment plans.",
      benefits: ["Predictive modeling", "Treatment optimization", "Risk assessment"]
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
=======
      icon: Brain,
      title: "Predictive Patient Analytics",
      description: "AI-powered prediction of patient outcomes and risk assessment"
    },
    {
      icon: Activity,
      title: "Real-time Health Monitoring",
      description: "Continuous monitoring and alerting for critical health indicators"
    },
    {
      icon: Target,
      title: "Personalized Treatment Plans",
      description: "AI-generated treatment recommendations based on patient data"
    },
    {
      icon: BarChart3,
      title: "Population Health Analytics",
      description: "Comprehensive analysis of population health trends and patterns"
=======
      description: "Continuous monitoring of patient vital signs and health metrics with instant alerts for critical changes.",
      benefits: ["24/7 monitoring", "Early warning systems", "Real-time alerts"]
    },
    {
      icon: BarChart3,
      title: "Population Health Insights",
      description: "Comprehensive analytics that identify health trends, risk factors, and opportunities for preventive care.",
      benefits: ["Trend analysis", "Risk stratification", "Preventive strategies"]
=======
      description: "Comprehensive analysis of population health trends and patterns"
    },
    {
      icon: Zap,
      title: "Clinical Decision Support",
=======
      description: "Intelligent assistance for healthcare professionals"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Security",
      description: "Enterprise-grade security with full HIPAA compliance"
      title: "AI-Powered Patient Analytics",
      description: "Advanced machine learning algorithms that analyze patient data for predictive insights."
    },
    {
      icon: Activity,
      title: "Real-Time Health Monitoring",
      description: "Continuous monitoring and analysis of patient vital signs and health metrics."
    },
    {
      icon: BarChart3,
      title: "Predictive Health Analytics",
      description: "Data-driven predictions for disease progression and treatment outcomes."
    },
    {
      icon: Zap,
      title: "Automated Diagnosis Support",
      description: "AI-assisted diagnostic tools that help healthcare professionals make informed decisions."
    },
    {
      icon: Users,
      title: "Population Health Management",
      description: "Comprehensive analytics for managing health outcomes across patient populations."
    },
    {
      icon: Clock,
      title: "Treatment Optimization",
      description: "AI-powered recommendations for personalized treatment plans and medication management."
=======
      description: "Intelligent systems that provide evidence-based recommendations to healthcare providers for better patient care.",
      benefits: ["Evidence-based guidance", "Clinical pathways", "Best practice recommendations"]
    }
  ];

  const services = [
    {
      title: "Patient Analytics",
      description: "Comprehensive patient data analysis for personalized care and improved outcomes.",
      icon: Users,
      features: ["Individual risk assessment", "Treatment response prediction", "Personalized care plans", "Outcome tracking"]
    },
    {
      title: "Clinical Analytics",
      description: "Advanced analytics for clinical operations, quality improvement, and evidence-based medicine.",
      icon: Stethoscope,
      features: ["Clinical performance metrics", "Quality indicators", "Evidence synthesis", "Best practice identification"]
    },
    {
      title: "Operational Analytics",
      description: "Healthcare operations optimization through data-driven insights and predictive modeling.",
      icon: Activity,
      features: ["Resource optimization", "Capacity planning", "Efficiency metrics", "Cost analysis"]
    },
    {
      title: "Research Analytics",
      description: "Research support tools that accelerate medical discoveries and clinical trial optimization.",
      icon: Microscope,
      features: ["Clinical trial analytics", "Research data mining", "Biomarker discovery", "Drug development support"]
=======
      icon: Heart,
      title: "Patient Outcome Prediction",
      description: "AI models that predict patient outcomes and treatment effectiveness based on medical data."
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Continuous patient monitoring with AI-powered alerts for critical health indicators."
    },
    {
      icon: Brain,
      title: "Diagnostic Assistance",
      description: "Machine learning algorithms that assist healthcare providers in accurate diagnosis."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Predictive risk models that identify patients at high risk for complications."
    },
    {
      icon: TrendingUp,
      title: "Population Health Analytics",
      description: "Comprehensive analysis of population health trends and disease patterns."
    },
    {
      icon: Users,
      title: "Care Coordination",
      description: "AI-powered care coordination that optimizes patient care pathways and resource allocation."
=======
    }
  ];

  const benefits = [
    "Improve diagnostic accuracy by 85%",
    "Reduce treatment costs by 30-40%",
    "Enhance patient outcomes by 60%",
    "Streamline clinical workflows by 70%",
    "Automate 75% of routine analytics tasks",
    "Enable proactive healthcare interventions"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$599",
      period: "/month",
      description: "Perfect for small clinics",
      features: [
        "Basic AI patient analytics",
        "Health monitoring tools",
        "Basic reporting dashboard",
        "Up to 1,000 patients",
        "Email support",
        "Standard integrations"
      ]
    },
    {
      name: "Professional",
      price: "$1,199",
      period: "/month",
      description: "Ideal for growing practices",
      features: [
        "Advanced AI analytics",
        "Predictive health insights",
        "Population health management",
        "Up to 10,000 patients",
        "Priority support",
        "Custom integrations",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large healthcare systems",
      features: [
        "Full AI healthcare suite",
        "Custom AI models",
        "Advanced analytics",
        "Dedicated account manager",
        "Unlimited patients",
        "24/7 phone support",
        "Custom development"
      ]
=======
    {
      title: "Improve Patient Outcomes",
      value: "35%",
      description: "Better treatment effectiveness and patient recovery rates"
    },
    {
      title: "Reduce Readmissions",
      value: "25%",
      description: "Lower hospital readmission rates through predictive care"
    },
    {
      title: "Lower Healthcare Costs",
      value: "40%",
      description: "Reduced costs through preventive care and optimized treatments"
    },
    {
      title: "Increase Efficiency",
      value: "50%",
      description: "Improved operational efficiency and resource utilization"
    }
=======
    "Improve patient outcomes by 25-40% with predictive analytics",
    "Reduce hospital readmissions by 30-50% through risk prediction",
    "Cut healthcare costs by 20-35% with optimized care pathways",
    "Enhance diagnostic accuracy by 15-30% with AI assistance",
    "Increase operational efficiency by 40-60% through automation",
    "Achieve 95%+ accuracy in patient risk assessment"
  ];

  const useCases = [
    {
      title: "Clinical Decision Support",
      description: "AI-powered diagnostic assistance and treatment recommendations for healthcare providers.",
      icon: Stethoscope
    },
    {
      title: "Patient Risk Assessment",
      description: "Predictive analytics for identifying high-risk patients and preventive interventions.",
      icon: AlertTriangle
    },
    {
      title: "Treatment Optimization",
      description: "Personalized treatment plans based on patient data and AI analysis.",
      icon: Pill
    },
    {
      title: "Population Health",
      description: "Comprehensive analytics for managing health outcomes across patient populations.",
      icon: Users
    }
  ];

  const healthcareProcesses = [
    {
      step: "01",
      title: "Data Collection",
      description: "Secure collection of patient data from multiple sources"
    },
    {
      step: "02",
      title: "AI Analysis",
      description: "Advanced AI algorithms analyze health patterns and trends"
    },
    {
      step: "03",
      title: "Risk Assessment",
      description: "Predictive modeling for patient risk identification"
    },
    {
      step: "04",
      title: "Treatment Planning",
      description: "AI-powered treatment recommendations and optimization"
    },
    {
      step: "05",
      title: "Monitoring & Tracking",
      description: "Continuous health monitoring and outcome tracking"
    },
    {
      step: "06",
      title: "Performance Analytics",
      description: "Comprehensive reporting and performance insights"
=======
      title: "Hospitals",
      description: "Comprehensive healthcare analytics for large medical centers and hospital systems.",
      icon: Building,
      features: ["Patient flow optimization", "Resource management", "Quality improvement", "Cost reduction"]
    },
    {
      title: "Clinics",
      description: "Analytics solutions for outpatient clinics and medical practices.",
      icon: Stethoscope,
      features: ["Patient management", "Appointment optimization", "Care coordination", "Outcome tracking"]
    },
    {
      title: "Research Institutions",
      description: "Advanced analytics for medical research and clinical trials.",
      icon: Microscope,
      features: ["Data analysis", "Trial optimization", "Biomarker discovery", "Publication support"]
    },
    {
      title: "Health Insurance",
      description: "Risk assessment and cost prediction for insurance companies.",
      icon: Shield,
      features: ["Risk modeling", "Cost prediction", "Fraud detection", "Claims optimization"]
=======
      industry: "Hospitals",
      description: "Patient monitoring, readmission prediction, and resource optimization",
      metrics: ["Patient Outcomes", "Readmission Rate", "Resource Utilization"]
    },
    {
      industry: "Primary Care",
      description: "Preventive care, chronic disease management, and early intervention",
      metrics: ["Prevention Rate", "Disease Progression", "Patient Engagement"]
    },
    {
      industry: "Specialty Clinics",
      description: "Treatment optimization, outcome prediction, and patient stratification",
      metrics: ["Treatment Success", "Patient Satisfaction", "Clinical Efficiency"]
    },
    {
      industry: "Health Systems",
      description: "Population health management, care coordination, and quality improvement",
      metrics: ["Population Health", "Care Coordination", "Quality Metrics"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$4,000",
      period: "/month",
      description: "Perfect for small healthcare practices starting with AI analytics",
      features: [
        "Up to 1,000 patients",
        "Basic predictive analytics",
        "Patient monitoring",
        "Standard reporting",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$12,000",
      period: "/month",
      description: "Ideal for growing healthcare organizations with advanced analytics needs",
      features: [
        "Up to 10,000 patients",
        "Advanced AI models",
        "Real-time monitoring",
        "Population analytics",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large health systems with complex analytics requirements",
      features: [
        "Unlimited patients",
        "Custom AI models",
        "White-label solutions",
        "Dedicated support",
        "Advanced security",
        "API access"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Healthcare Analytics
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform healthcare delivery with intelligent AI that predicts outcomes, 
            optimizes care pathways, and improves patient safety and satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/request-quote"
              className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>

    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-red-300 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Analytics
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Healthcare with
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {" "}AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize patient care with AI-powered analytics that predict health outcomes, 
              optimize treatments, and enable proactive healthcare interventions.
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Analytics
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Healthcare with
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize patient care with AI-powered healthcare analytics that predict outcomes, optimize treatments, 
              and improve population health. Make data-driven decisions that save lives and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">35%</div>
              <div className="text-gray-400">Better Outcomes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">25%</div>
              <div className="text-gray-400">Fewer Readmissions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-400">Efficiency Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
      </section>

      {/* Healthcare Processes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The AI-Powered Healthcare Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From data collection to treatment optimization, our AI streamlines every aspect of healthcare delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareProcesses.map((process, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{process.title}</h3>
                <p className="text-gray-300 text-center">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose AI Healthcare Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented improvements in patient care and healthcare efficiency.
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Features That Transform Healthcare
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI healthcare analytics platform combines cutting-edge artificial intelligence with deep medical expertise 
              to deliver exceptional results for healthcare providers and patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-red-500/20 mr-4">
                    <feature.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare Analytics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From patient analytics to clinical research, our AI platform covers every aspect of modern healthcare analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-red-500/20 inline-block mb-4">
                  <service.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-1 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Designed for Every Healthcare Organization
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI healthcare analytics solutions are tailored to meet the unique needs of different types of healthcare organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 text-center">
                <div className="p-4 rounded-lg bg-red-500/20 inline-block mb-4">
                  <useCase.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1 text-sm">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
=======
        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Healthcare Analytics Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Proven Healthcare Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Healthcare Setting Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-zion-slate-light mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-zion-cyan">Key Metrics:</h4>
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your healthcare organization's needs and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-red-500/50 scale-105' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
=======

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-zion-blue-dark/50 backdrop-blur-sm border rounded-2xl p-6 ${
                plan.popular ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' : 'border-zion-cyan/20'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
=======
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600'
                      : 'border border-gray-600 text-white hover:border-red-500 hover:text-red-400'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
=======
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600'
                      : 'border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-light hover:to-zion-purple-light'
                      : 'bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of healthcare organizations already using our AI-powered analytics platform 
              to improve patient outcomes and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/request-quote"
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
=======
    "Improve patient outcomes by 25-40%",
    "Reduce hospital readmissions by 30%",
    "Lower healthcare costs by 20-35%",
    "Enhance diagnostic accuracy",
    "Streamline clinical workflows",
    "Better resource allocation"
  ];

  const solutions = [
    {
      title: "Patient Analytics",
      description: "Comprehensive patient data analysis and insights"
    },
    {
      title: "Clinical Analytics",
      description: "Clinical performance metrics and quality improvement"
    },
    {
      title: "Operational Analytics",
      description: "Healthcare operations optimization and efficiency"
    },
    {
      title: "Research Analytics",
      description: "Advanced analytics for medical research and trials"
    }
  ];

  const specialties = [
    "Cardiology",
    "Oncology",
    "Neurology",
    "Pediatrics",
    "Emergency Medicine",
    "Primary Care",
    "Surgery",
    "Mental Health"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Healthcare Analytics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform healthcare delivery with intelligent analytics powered by artificial intelligence. 
              Improve patient outcomes, optimize operations, and advance medical research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI-Powered Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI healthcare analytics platform combines advanced machine learning with 
              medical expertise to revolutionize patient care and healthcare operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose AI Healthcare Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented insights and improvements in healthcare delivery with AI-powered analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Solutions</h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">{solution.title}</h4>
                    <p className="text-gray-300 text-sm">{solution.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Medical Specialties
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI healthcare analytics solutions are designed to support various medical specialties 
              and clinical areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-cyan-500 transition-all duration-300"
              >
                <Stethoscope className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                <h3 className="font-semibold">{specialty}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of healthcare analytics and start improving patient outcomes today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of healthcare providers who have already revolutionized patient care with AI analytics.
=======
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking healthcare organizations that have already revolutionized patient care with AI. 
            Start improving outcomes today with intelligent healthcare analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
            >
              Schedule Demo
            </Link>
          </div>
=======
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalytics;
=======
    </div>
  );
}
=======
}
