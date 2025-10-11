import React from 'react'
import { motion } from 'framer-motion'
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
import { Link } from 'react-router-dom'
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
import { Link } from 'react-router-dom'
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
} from 'lucide-react'
export default function AIHealthcareAnalytics() {
  const features = [
    {
  LineChart,
} from 'lucide-react'
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
      description: "Continuous monitoring of patient vital signs and health metrics with instant alerts for critical changes.",
      benefits: ["24/7 monitoring", "Early warning systems", "Real-time alerts"]
    },
    {
      icon: BarChart3,
      title: "Population Health Insights",
      description: "Comprehensive analytics that identify health trends, risk factors, and opportunities for preventive care.",
      benefits: ["Trend analysis", "Risk stratification", "Preventive strategies"]
      description: "Comprehensive analysis of population health trends and patterns"
    },
    {
      icon: Zap,
      title: "Clinical Decision Support",
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
      description: "Intelligent systems that provide evidence-based recommendations to healthcare providers for better patient care.",
      benefits: ["Evidence-based guidance", "Clinical pathways", "Best practice recommendations"]
    }
  ]
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
    }
  ]
  const benefits = [
    "Improve diagnostic accuracy by 85%",
    "Reduce treatment costs by 30-40%",
    "Enhance patient outcomes by 60%",
    "Streamline clinical workflows by 70%",
    "Automate 75% of routine analytics tasks",
    "Enable proactive healthcare interventions"
  ]
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
    "Improve patient outcomes by 25-40% with predictive analytics",
    "Reduce hospital readmissions by 30-50% through risk prediction",
    "Cut healthcare costs by 20-35% with optimized care pathways",
    "Enhance diagnostic accuracy by 15-30% with AI assistance",
    "Increase operational efficiency by 40-60% through automation",
    "Achieve 95%+ accuracy in patient risk assessment"
  ]
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
  ]
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
  ]
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
  ]
  return (
        {/* Hero Section */}
            AI Healthcare Analytics
            Transform healthcare delivery with intelligent AI that predicts outcomes, 
            optimizes care pathways, and improves patient safety and satisfaction.
            <$2 />
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            <$2 />
              to="/request-quote"
              className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Request Demo

      {/* Hero Section */}
              AI-Powered Healthcare Analytics
              Transform Healthcare with
                {" "}AI Intelligence
              Revolutionize patient care with AI-powered analytics that predict health outcomes, 
              optimize treatments, and enable proactive healthcare interventions.
      {/* Hero Section */}
              AI-Powered Healthcare Analytics
              Transform Healthcare with
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent"> AI Intelligence</span>
              Revolutionize patient care with AI-powered healthcare analytics that predict outcomes, optimize treatments, 
              and improve population health. Make data-driven decisions that save lives and reduce costs.
              <$2 />
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              <$2 />
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
              >
                Schedule Demo
          
          {/* Key Metrics */}
              <div className="text-3xl font-bold text-red-400 mb-2">35%</div>
              <div className="text-gray-400">Better Outcomes</div>
              <div className="text-3xl font-bold text-pink-400 mb-2">25%</div>
              <div className="text-gray-400">Fewer Readmissions</div>
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-gray-400">Cost Reduction</div>
              <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-400">Efficiency Boost</div>

      {/* Features Section */}

      {/* Healthcare Processes Section */}
              The AI-Powered Healthcare Journey
              From data collection to treatment optimization, our AI streamlines every aspect of healthcare delivery.
          
            {healthcareProcesses.map((process, index) => (
              <$2 />
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
              >
                  <span className="text-white font-bold text-xl">{process.step}</span>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{process.title}</h3>
                <p className="text-gray-300 text-center">{process.description}</p>
            ))}

      {/* Benefits Section */}
              Why Choose AI Healthcare Analytics?
              Experience unprecedented improvements in patient care and healthcare efficiency.
              AI-Powered Features That Transform Healthcare
              Our AI healthcare analytics platform combines cutting-edge artificial intelligence with deep medical expertise 
              to deliver exceptional results for healthcare providers and patients.
          
            {features.map((feature, index) => (
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits.map((benefit, idx) => (
                      {benefit}
                  ))}
            ))}

      {/* Services Section */}
              Comprehensive Healthcare Analytics Solutions
              From patient analytics to clinical research, our AI platform covers every aspect of modern healthcare analytics.
          
            {services.map((service, index) => (
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  {service.features.map((feature, idx) => (
                      • {feature}
                  ))}
            ))}

      {/* Use Cases Section */}
              Designed for Every Healthcare Organization
              Our AI healthcare analytics solutions are tailored to meet the unique needs of different types of healthcare organizations.
          
            {useCases.map((useCase, index) => (
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                  {useCase.features.map((feature, idx) => (
                      • {feature}
                  ))}
        {/* Features Grid */}
            Advanced Healthcare Analytics Features
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
              )
            })}

        {/* Benefits Section */}
              Proven Healthcare Results
              {benefits.map((benefit, index) => (
                  <span className="text-zion-slate-light">{benefit}</span>
              ))}

        {/* Use Cases */}
            Healthcare Setting Applications
            {useCases.map((useCase, index) => (
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-zion-slate-light mb-4">{useCase.description}</p>
                  <h4 className="font-semibold text-zion-cyan">Key Metrics:</h4>
                  {useCase.metrics.map((metric, metricIndex) => (
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light text-sm">{metric}</span>
                  ))}
            ))}
              Choose Your Plan
              Flexible pricing options designed to scale with your healthcare organization's needs and growth.
          
            {pricing.map((plan, index) => (
              < key={index} className={`relative bg-gray-800/50 rounded-xl p-8 border transition-all duration-300 ${$2 />
                plan.popular 
                  ? 'border-red-500/50 scale-105' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}>
                {plan.popular && (

        {/* Pricing */}
            Transparent Pricing
            {pricing.map((plan, index) => (
              < key={index} className={`relative bg-zion-blue-dark/50 backdrop-blur-sm border rounded-2xl p-6 ${$2 />
                plan.popular ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' : 'border-zion-cyan/20'
              }`}>
                {plan.popular && (
                      Most Popular
                )}
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                
                  {plan.features.map((feature, idx) => (
                      {feature}
                  ))}
                
                <$2 />
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600'
                      : 'border border-gray-600 text-white hover:border-red-500 hover:text-red-400'
                  }`}
                >
                  Get Started
                <$2 />
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600'
                      : 'border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500'
                  }`}
                >
                  Get Started
            ))}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                  {plan.features.map((feature, featureIndex) => (
                      <span className="text-zion-slate-light">{feature}</span>
                  ))}
                <$2 />
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-light hover:to-zion-purple-light'
                      : 'bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  Get Started
            ))}

        {/* CTA Section */}
              Ready to Transform Healthcare?
              Join hundreds of healthcare organizations already using our AI-powered analytics platform 
              to improve patient outcomes and operational efficiency.
              <$2 />
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              <$2 />
                to="/request-quote"
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Consultation
    "Improve patient outcomes by 25-40%",
    "Reduce hospital readmissions by 30%",
    "Lower healthcare costs by 20-35%",
    "Enhance diagnostic accuracy",
    "Streamline clinical workflows",
    "Better resource allocation"
  ]
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
  ]
  const specialties = [
    "Cardiology",
    "Oncology",
    "Neurology",
    "Pediatrics",
    "Emergency Medicine",
    "Primary Care",
    "Surgery",
    "Mental Health"
  ]
  return (
      {/* Hero Section */}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
              AI Healthcare Analytics
              Transform healthcare delivery with intelligent analytics powered by artificial intelligence. 
              Improve patient outcomes, optimize operations, and advance medical research.
                Start Free Trial
                Schedule Demo

      {/* Features Section */}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              AI-Powered Healthcare Solutions
              Our comprehensive AI healthcare analytics platform combines advanced machine learning with 
              medical expertise to revolutionize patient care and healthcare operations.

            {features.map((feature, index) => (
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
            ))}

      {/* Benefits Section */}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              Why Choose AI Healthcare Analytics?
              Experience unprecedented insights and improvements in healthcare delivery with AI-powered analytics.

              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
                {benefits.map((benefit, index) => (
                    <span className="text-gray-300">{benefit}</span>
                ))}

              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Solutions</h3>
                {solutions.map((solution, index) => (
                    <h4 className="font-semibold text-cyan-400 mb-2">{solution.title}</h4>
                    <p className="text-gray-300 text-sm">{solution.description}</p>
                ))}

      {/* Specialties Section */}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              Medical Specialties
              Our AI healthcare analytics solutions are designed to support various medical specialties 
              and clinical areas.

            {specialties.map((specialty, index) => (
                key={specialty}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-cyan-500 transition-all duration-300"
              >
                <h3 className="font-semibold">{specialty}</h3>
            ))}

      {/* CTA Section */}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
              Ready to Transform Healthcare?
              Join the future of healthcare analytics and start improving patient outcomes today.
                <span>Get Started Today</span>
                Contact Sales

      {/* CTA Section */}
            Ready to Transform Healthcare?
            Join thousands of healthcare providers who have already revolutionized patient care with AI analytics.

      {/* CTA Section */}
            Ready to Transform Healthcare?
            Join forward-thinking healthcare organizations that have already revolutionized patient care with AI. 
            Start improving outcomes today with intelligent healthcare analytics.
            <$2 />
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            <$2 />
              to="/demo"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
            >
              Schedule Demo
  )
}
export default AIHealthcareAnalytics</$1>
  )
}
}
</div></div></div></div></div></div></span></p></p></p></section></section>