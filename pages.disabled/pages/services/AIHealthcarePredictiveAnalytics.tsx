import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Heart,
  Brain,
  TrendingUp,
  Users,
  Database,
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  Target,
  Globe,
  Lock,
  Search,
  Calendar,
  MessageSquare,
  Bell,
  Phone,
  Mail,
  MapPin,
  Scale,
  AlertTriangle,
  BookOpen,
  CreditCard,
  Building,
  Eye,
  Clock,
  Award,
  Gauge,
  PieChart,
  Activity,
  Stethoscope,
  Pill,
  Microscope,
  Shield,
  Activity as Heartbeat,
  FileText,
  UserCheck,
  Clipboard,
  TestTube
} from 'lucide-react';
import { SEO } from "../../components/SEO";

export default function AIHealthcarePredictiveAnalytics(...args[]):  {
  const contactInfo = {
  phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',;
  ;
  ;
  ;
  ;
  website: 'https://ziontechgroup.com';
  ;

};

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Disease Prediction',
      description: 'Predict disease onset with 94% accuracy using advanced machine learning on patient data'
    },
    {
      icon: Heart,
      title: 'Early Risk Detection',
      description: 'Identify high-risk patients before symptoms appear with predictive risk scoring'
    },
    {
      icon: TrendingUp,
      title: 'Treatment Outcome Prediction',
      description: 'Forecast treatment effectiveness and patient response with 89% accuracy'
    },
    {
      icon: Users,
      title: 'Population Health Analytics',
      description: 'Analyze population health trends and identify at-risk demographics'
    },
    {
      icon: Database,
      title: 'Real-time Patient Monitoring',
      description: 'Continuous monitoring and alerting for critical health indicators';
    },;
    {;
      icon: BarChart3,;
      title: 'Advanced Clinical Insights',;
      description: 'Generate actionable insights from complex medical data and research';
    };
  ];

  const benefits = [;
    'Reduce readmission rates by 35%',;
    'Improve early detection by 60%',;
    'Cut healthcare costs by 25%',;
    'Enhance patient outcomes by 45%',;
    'Streamline clinical workflows',;
    'Enable proactive care delivery';
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$899',
      period: '/month',
      description: 'Perfect for small clinics and practices',
      features[;
        'Up to 1,000 patients',
        'Basic predictive analytics',
        'Standard risk scoring',
        'Email support',
        'Basic reporting',
        'Up to 10 user licenses',
        'Core integrations'
      ],;
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,799',
      period: '/month',
      description: 'Ideal for growing healthcare organizations',
      features[;
        'Up to 10,000 patients',
        'Advanced AI analytics',
        'Real-time monitoring',
        'Priority support',
        'Custom reporting',
        'Up to 50 user licenses',
        'Advanced integrations',
        'API access',
        'Custom workflows',
        'Advanced AI models'
      ],;
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large healthcare systems with complex needs',
      features[;
        'Unlimited patients',
        'Premium AI analytics',
        '24/7 dedicated support',
        'Custom dashboards',
        'Unlimited user licenses',
        'Enterprise integrations',
        'Advanced AI models',
        'On-premise deployment option',
        'Dedicated healthcare consultant',
        'Custom training programs',;
        'White-label solutions',;
        'Multi-tenant architecture';
      ],;
      cta: 'Contact Sales',;
      popular: false;
    };
  ];

  const clinicalApplications = [
    {
      title: 'Cardiology',
      description: 'Predict heart disease risk and optimize cardiac care pathways',
      icon: Heart
    },
    {
      title: 'Oncology',
      description: 'Early cancer detection and treatment response prediction',
      icon: Microscope
    },
    {
      title: 'Neurology',
      description: 'Predict neurological disorders and cognitive decline',
      icon: Brain
    },
    {
      title: 'Emergency Medicine',
      description: 'Triage optimization and critical care outcome prediction',
      icon: AlertTriangle
    },
    {
      title: 'Pediatrics',
      description: 'Childhood disease prediction and growth monitoring',
      icon: Users;
    },;
    {;
      title: 'Geriatrics',;
      description: 'Aging-related health decline prediction and prevention',;
      icon: UserCheck;
    };
  ];

  const useCases = [
    {
      title: 'Hospitals & Health Systems',
      description: 'Comprehensive predictive analytics for large healthcare networks',
      icon: Building
    },
    {
      title: 'Specialty Clinics',
      description: 'Focused predictive insights for specialized medical practices',
      icon: Stethoscope
    },
    {
      title: 'Research Institutions',
      description: 'Advanced analytics for clinical research and drug development',
      icon: TestTube;
    },;
    {;
      title: 'Insurance Companies',;
      description: 'Risk assessment and claims prediction for health insurers',;
      icon: Shield;
    };
  ];

  const complianceFeatures = [;
    'HIPAA Compliance',;
    'HITECH Act Support',;
    'SOC 2 Type II Certified',;
    'GDPR Compliance',;
    'FDA Guidelines Adherence',;
    'Clinical Trial Compliance';
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEO
        title="AI Healthcare Predictive Analytics Platform | Zion Tech Group"
        description="Revolutionize healthcare with AI-powered predictive analytics. Predict diseases, optimize treatments, and improve patient outcomes with 94% accuracy."
        keywords="AI healthcare analytics, predictive medicine, disease prediction, patient risk assessment, clinical analytics, healthcare AI"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20

}}
            animate = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100/10 border border-red-200/20 text-red-200 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Analytics
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                Predictive Analytics
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform healthcare with AI-powered predictive analytics. Predict diseases with 94% accuracy,
              optimize treatments, and improve patient outcomes through intelligent data analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-red-200/20 text-red-200 font-semibold rounded-lg hover:bg-red-200/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>;

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Intelligence
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to predict, prevent, and optimize healthcare delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20

}}
                whileInView = {
  { opacity: 1,
  y: 0

}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1

}}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"

                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Clinical Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Specialized AI solutions for every medical specialty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicalApplications.map((application, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20

}}
                whileInView = {
  { opacity: 1,
  y: 0

}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1

}}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"

                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <application.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{application.title}</h3>
                <p className="text-slate-300">{application.description}</p>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Healthcare Analytics?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Transform your healthcare delivery and unlock new levels of patient care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  x: -20

}}
                whileInView = {
  { opacity: 1,
  x: 0

}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1

}}
                viewport={{ once: true }}
                className="flex items-start space-x-3"

                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-lg">{benefit}</span>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built with healthcare-grade security and compliance standards
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceFeatures.map((feature, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20

}}
                whileInView = {
  { opacity: 1,
  y: 0

}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1

}}
                viewport={{ once: true }}
                className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-red-500/50 transition-all duration-300"

                <Shield className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <span className="text-slate-300 font-medium text-sm">{feature}</span>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Healthcare Organization
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From small clinics to large health systems, our platform scales with your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20

}}
                whileInView = {
  { opacity: 1,
  y: 0

}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1

}}
                viewport={{ once: true }}
                className="text-center"

                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-slate-300">{useCase.description}</p>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your healthcare organization size and needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            {pricingPlans.map((plan, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20

}}
                whileInView = {
  { opacity: 1,
  y: 0

}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1

}}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular
                    ? 'border-red-500/50 bg-gradient-to-br from-red-900/20 to-pink-900/20'
                    : 'border-slate-700/50'
                }`}

                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of healthcare organizations who have already improved patient care with AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-red-200/20 text-red-200 font-semibold rounded-lg hover:bg-red-200/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>

            <p className="text-slate-400 mt-6">
              No credit card required • 14-day free trial • Cancel time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have Questions?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our healthcare experts are here to help you get started and answer  questions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-red-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-slate-300">{contactInfo.phone}</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-red-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-slate-300">{contactInfo.email}</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-red-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">{contactInfo.address}</p>
              </div>
            </div>

            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300"

              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}
