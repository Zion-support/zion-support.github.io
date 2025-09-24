import React from "react"
import { motion } from "framer-motion"
import { ;
  Activity,;
  Heart, ;
  Brain, ;
  Zap, ;
  CheckCircle, ;
  Clock, ;
  DollarSign,;
  Users,;
  BarChart3,;
  Shield,;
  TrendingUp,;
  Award,;
  Star,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  Stethoscope,;
  Pill,;
  Microscope,;
  Database;
} from "lucide-react"
import { SEO } from "../../components/SEO"
export default function AIHealthcareAnalytics() {;
  const features = [;
    {;
      icon: <Brain className="w-6 h-6" />,title: "Predictive Patient Analytics",description: "AI algorithms predict patient outcomes, readmission risks, and treatment effectiveness with 96% accuracy"
    },;
    {;
      icon: <Activity className="w-6 h-6" />,title: "Real-time Health Monitoring",description: "Continuous monitoring of patient vitals with early warning systems and automated alerts for critical changes"
    };
    {;
      icon: <Database className="w-6 h-6" />,title: "Clinical Data Integration",description: "Seamless integration with EHR systems, medical devices, and wearable technology for comprehensive data analysis"
    },;
    {;
      icon: <Microscope className="w-6 h-6" />,title: "Medical Image Analysis",description: "Advanced AI-powered analysis of X-rays, MRIs, and CT scans for faster and more accurate diagnoses"
    },;
    {;
      icon: <Shield className="w-6 h-6" />,title: "HIPAA-Compliant Security",description: "Enterprise-grade security with end-to-end encryption and full HIPAA compliance for patient data protection"
    };
    {;
      icon: <BarChart3 className="w-6 h-6" />,title: "Population Health Insights",description: "Comprehensive analytics for population health management, disease trends, and preventive care strategies"
    };
  ],;

  const pricing = [;
    {;
      name: "Clinic",price: "$399",period: "/month",features: [;
        "Up to 1,000 patients",;
        "Basic predictive analytics",;
        "Standard reporting",;
        "Email support",;
        "HIPAA compliance"
      ],;
      popular: false;
    };
    {;
      name: "Hospital",price: "$1,199",;
      period: "/month",features: [;
        "Up to 10,000 patients",;
        "Advanced AI analytics",;
        "Real-time monitoring",;
        "Priority support",;
        "Custom dashboards",;
        "API access",;
        "Integration support"
      ],;
      popular: true;
    };
    {;
      name: "Health System",price: "$2,999",;
      period: "/month",features: [;
        "Unlimited patients"
        "Custom AI models",;
        "Advanced analytics",;
        "Dedicated support",;
        "White-label options",;
        "SLA guarantees",;
        "On-premise deployment"
      ],;
      popular: false;
    };
  ];
  const benefits = [;
    "Reduce readmission rates by 30%",;
    "Improve diagnostic accuracy by 25%",;
    "Reduce healthcare costs by 20-35%",;
    "Enhance patient outcomes and satisfaction",;
    "Streamline clinical workflows",;
    "Enable proactive patient care"
  ],;

  const useCases = [;
    {;
      specialty: "Cardiology",description: "Predict heart failure risks, monitor cardiac function, and optimize treatment plans",;
      improvement: "40% risk reduction"
    };
    {;
      specialty: "Oncology",description: "Personalized treatment recommendations, drug response prediction, and survival analysis",;
      improvement: "35% treatment efficacy"
    };
    {;
      specialty: "Emergency Medicine",description: "Triage optimization, resource allocation, and patient flow management",;
      improvement: "50% efficiency gain"
    };
    {;
      specialty: "Primary Care",description: "Preventive care planning, chronic disease management, and population health insights",;
      improvement: "45% preventive care"
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="AI-Powered Healthcare Analytics Platform - Zion Tech Group"
        description="Revolutionary AI platform for healthcare analytics, patient monitoring, and clinical insights. Improve patient outcomes while reducing healthcare costs by 20-35%."
      />;
      ;
      {/* Hero Section */};
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              AI-Powered Healthcare Analytics;
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
              Transform healthcare delivery with intelligent analytics, predictive insights, and real-time patient monitoring. ;
              Improve patient outcomes while reducing costs by 20-35%.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="https://ziontechgroup.com/contact"
                className="[^"]*"
              >;
                Transform Your Healthcare;
                <[^>]*/>
              </[^>]*>
              <a;
                href="#demo"
                className="[^"]*"
              >;
                Watch Demo;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Key Benefits */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why Choose Our Healthcare Analytics Platform?;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Built by healthcare experts and AI engineers, our platform delivers unprecedented insights and patient care improvements.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {benefits.map((benefit, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <[^>]*/>
                <p className="text-white text-lg font-medium">{benefit}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Powerful Features for Healthcare Excellence;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Everything you need to deliver better patient care and achieve operational excellence in healthcare.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="text-red-400 mb-4 group-hover:text-red-300 transition-colors duration-300">;
                  {feature.icon};
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-gray-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Use Cases */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Specialty-Specific Solutions;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Tailored AI analytics for different medical specialties and healthcare delivery models.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {useCases.map((useCase, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.specialty}</[^>]*>
                <p className="text-gray-300 mb-4">{useCase.description}</[^>]*>
                <div className="flex items-center">;
                  <[^>]*/>
                  <span className="text-red-400 font-semibold">{useCase.improvement}</[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Transparent Pricing;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Choose the plan that fits your healthcare organization size and analytics needs.;
            </[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricing.map((plan, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: index * 0.1 }};
                className={`relative bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 border ${;
                  plan.popular ;
                    ? 'border-red-500 ring-2 ring-red-500/20' ;
                    : 'border-slate-700'
                } hover:border-red-500 transition-all duration-300`};
              >;
                {plan.popular && (;&& (; (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </[^>]*>
                  </[^>]*>
                )};
                ;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</[^>]*>
                  <div className="mb-6">;
                    <span className="text-4xl font-bold text-white">{plan.price}</[^>]*>
                    <span className="text-gray-400">{plan.period}</[^>]*>
                  </[^>]*>
                </[^>]*>
                ;
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-300">;
                      <[^>]*/>
                      {feature};
                    </[^>]*>
                  ))};
                </[^>]*>
                ;
                <a;
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${;
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`};
                >;
                  Get Started;
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Market Information */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <motion.div
              initial={{ opacity: 0, x: -20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.8 }};
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Market-Leading Healthcare Solution;
              </[^>]*>
              <div className="space-y-6">;
                <div className="flex items-center">;
                  <[^>]*/>
                  <div>;
                    <p className="text-white font-semibold">Market Price Range</[^>]*>
                    <p className="text-gray-300">$600 - $4,000/month for similar solutions</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-center">;
                  <[^>]*/>
                  <div>;
                    <p className="text-white font-semibold">Implementation Time</[^>]*>
                    <p className="text-gray-300">6-10 weeks for full deployment</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-center">;
                  <[^>]*/>
                  <div>;
                    <p className="text-white font-semibold">ROI Timeline</[^>]*>
                    <p className="text-gray-300">350% return within 12 months</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="flex items-center">;
                  <[^>]*/>
                  <div>;
                    <p className="text-white font-semibold">Target Market</[^>]*>
                    <p className="text-gray-300">Hospitals, clinics, health systems, medical practices</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
            ;
            <motion.div
              initial={{ opacity: 0, x: 20 }};
              whileInView={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              <h3 className="text-2xl font-bold text-white mb-6">Clinical Performance Metrics</[^>]*>
              <div className="space-y-4">;
                <div className="flex items-center justify-between">;
                  <span className="text-gray-300">Readmission Reduction</[^>]*>
                  <span className="text-red-400 font-semibold">30%</[^>]*>
                </[^>]*>
                <div className="flex items-center justify-between">;
                  <span className="text-gray-300">Diagnostic Accuracy</[^>]*>
                  <span className="text-blue-400 font-semibold">+25%</[^>]*>
                </[^>]*>
                <div className="flex items-center justify-between">;
                  <span className="text-gray-300">Cost Reduction</[^>]*>
                  <span className="text-purple-400 font-semibold">20-35%</[^>]*>
                </[^>]*>
                <div className="flex items-center justify-between">;
                  <span className="text-gray-300">Patient Satisfaction</[^>]*>
                  <span className="text-yellow-400 font-semibold">+40%</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact CTA */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Transform Healthcare Delivery?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Join leading healthcare organizations who have already revolutionized patient care with AI analytics.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="https://ziontechgroup.com/contact"
                className="[^"]*"
              >;
                Schedule a Demo;
                <[^>]*/>
              </[^>]*>
              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call Now;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information */};
      <section className="py-16 px-4 sm: px-6 lg:px-8 bg-slate-900">;
        <div className="max-w-4xl mx-auto text-center">;
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <p className="text-white font-semibold mb-2">Phone</[^>]*>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-red-400 transition-colors">;
                +1 302 464 0950;
              </[^>]*>
            </[^>]*>
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <p className="text-white font-semibold mb-2">Email</[^>]*>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-red-400 transition-colors">;
                kleber@ziontechgroup.com
              </[^>]*>
            </[^>]*>
            <div className="flex flex-col items-center">;
              <[^>]*/>
              <p className="text-white font-semibold mb-2">Address</[^>]*>
              <p className="text-gray-300">;
                364 E Main St STE 1008<[^>]*/>
                Middletown DE 19709;
              </[^>]*>
            </[^>]*>
          </[^>]*>
          <div className="mt-8">;
            <a;
              href="https://ziontechgroup.com"
              className="[^"]*"
            >;
              Visit our website;
              <[^>]*/>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};