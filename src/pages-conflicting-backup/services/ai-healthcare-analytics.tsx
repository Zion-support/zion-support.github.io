import, React, from "react";
import { motion } from "framer-motion";
import { ;
  Activity,;
  Heart,;
  Brain,;
  Zap,;
  CheckCircle,;
  Clock,;
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
  PillMicroscopeDatabase;
} from "lucide-react";
import { SEO } from "../../components/SEO";
export, default, function AIHealthcareAnalytics() {
  const features = [;
    {
      icon: <Brain className="w-6 h-6" />,title: "Predictive, Patient, Analytics",description: "AI, algorithms, predict patient, outcomesreadmission, risksand treatment, effectiveness, with 96% accuracy";
    },;
    {
      icon: <Activity className="w-6 h-6" />titl,;
    e: "Real-time, Health, Monitoring"descriptio,;
  n: "Continuous, monitoring, of patient, vitals, with early, warning, systems and, automated, alerts for, critical, changes";
    };
    {
      icon: <Database className="w-6 h-6" />,title: "Clinical, Data, Integration",description: "Seamless, integration, with EHR, systemsmedical, devicesand wearable, technology, for comprehensive, data, analysis";
    },;
    {
      icon: <Microscope className="w-6 h-6" />,title: "Medical, Image, Analysis",description: "Advanced AI-powered, analysis, of X-raysMRIsand, CT, scans for, faster, and more, accurate, diagnoses";
    },;
    {
      icon: <Shield className="w-6 h-6" />titl,;
    e: "HIPAA-Compliant Security"descriptio,;
  n: "Enterprise-grade, security, with end-to-end, encryption, and full, HIPAA, compliance for, patient, data protection";
    },;
    {
      icon: <BarChart3 className="w-6 h-6" />,title: "Population, Health, Insights"descriptio,;
  n: "Comprehensive, analytics, for population, health, managementdisease trendsand, preventive, care strategies";
    }
,  ],;
  const pricing = [;
    {
      name: "Clinic",price: "$399",period: "/month",features: [;
        "Up, to, 1,0o00 patients",;
        "Basic, predictive, analytics",;
        "Standard reporting""Email support""HIPAA compliance";
    ,  ]popular: false;
    };
    {
      name: "Hospital",price: "$1,199",;
      period: "/month",features: [;
        "Up, to, 10,0o00 patients",;
        "Advanced, AI, analytics",;
        "Real-time monitoring",;
        "Priority support",;
        "Custom dashboards""API access""Integration support";
    ,  ]popular: true;
    };
    {
      name: "Health System",price: "$2,999",;
      period: "/month",features: [;
        "Unlimited patients",;
        "Custom, AI, models",;
        "Advanced analytics",;
        "Dedicated support",;
        "White-label options""SLA guarantees""On-premise deployment";
    ,  ]popular: false;
    }
  ];
  const benefits = [;
    "Reduce, readmission, rates by 30%",;
    "Improve, diagnostic, accuracy by 25%",;
    "Reduce, healthcare, costs by 20-35%",;
    "Enhance, patient, outcomes and satisfaction",;
    "Streamline, clinical, workflows""Enable, proactive, patient care";
,  ],;
  const useCases = [;
    {
      specialty: "Cardiology",description: "Predict, heart, failure risks, monitor, cardiac, functionand optimize, treatment, plans"improvement: "40% risk reduction";
    };
    {
      specialty: "Oncology",description: "Personalized, treatment, recommendations, drug, response, predictionand survival analysis"improvement: "35% treatment efficacy";
    };
    {
      specialty: "Emergency Medicine",description: "Triage optimization, resource, allocationand, patient flow management"improvement: "50% efficiency gain";
    },;
    {
      specialty: "Primary Care",description: "Preventive, care, planningchronic disease, managementand, population health insights"improvemen,;
  t: "45% preventive care";
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="AI-Powered, Healthcare, Analytics Platform - Zion, Tech, Group";
        description="Revolutionary, AI, platform for, healthcare, analytics, patient, monitoringand, clinical insights. Improve, patient, outcomes while, reducing, healthcare costs, by, 20-35%.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              AI-Powered, Healthcare, Analytics;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Transform, healthcare, delivery with, intelligent, analytics, predictive insights, and real-time, patient, monitoring.;
              Improve, patient, outcomes while, reducing, costs by 20-35%.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="https: //ziontechgroup.com/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-60o0 to-pink-60o0 text-white font-semibold rounded-lg hover:from-red-70o0 hove,;
    r:to-pink-70o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                Transform, Your, Healthcare;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </a>;
              <a;
                href="#demo";
                className="inline-flex items-center px-8 py-4 border-2 border-red-50o0 text-red-40o0 font-semibold rounded-lg hover: bg-red-50o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                Watch Demo;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Key Benefits */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why, Choose, Our Healthcare, Analytics, Platform?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Built, by, healthcare experts, and, AI engineersour, platform, delivers unprecedented, insights, and patient, care, improvements.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {benefits.map((benefitindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50 backdrop-blur-sm rounded-xl p-6, border, border-slate-70o0 hover:border-red-50o0 transition-all duration-30o0";
              >;
                <CheckCircle className="w-8 h-8 text-red-40o0 mb-4" />;
                <p className="text-white text-lg font-medium">{benefit}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Features */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Powerful, Features, for Healthcare Excellence;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Everything, you, need to, deliver, better patient, care, and achieve, operational, excellence in healthcare.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-90o0/80 backdrop-blur-sm rounded-xl p-6, border, border-slate-70o0 hover: border-red-50o0 transition-all duration-30o0 group";
              >;
                <div className="text-red-40o0 mb-4 group-hove,;
  r:text-red-30o0 transition-colors duration-30o0">;
                  {feature.icon}
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Use Cases */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Specialty-Specific Solutions;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Tailored, AI, analytics for, different, medical specialties, and, healthcare delivery models.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 m,;
  d: grid-cols-2 gap-8">;
            {useCases.map((useCaseindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50 backdrop-blur-sm rounded-xl p-8, border, border-slate-70o0 hover:border-red-50o0 transition-all duration-30o0";
              >;
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.specialty}</h3>;
                <p className="text-gray-30o0 mb-4">{useCase.description}</p>;
                <div className="flex items-center">;
                  <TrendingUp className="w-5 h-5 text-red-40o0 mr-2" />;
                  <span className="text-red-40o0 font-semibold">{useCase.improvement}</span>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Pricing */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Transparent Pricing;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Choose, the, plan that, fits, your healthcare, organization, size and, analytics, needs.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 m,;
  d: grid-cols-3 gap-8">;
            {pricing.map((planindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className={`relative bg-slate-90o0/80 backdrop-blur-sm rounded-xl p-8 border ${;
                  plan.popular;
                    ? 'border-red-50o0 ring-2 ring-red-50o0/20';
                    : 'border-slate-70o0';
                } hover: border-red-50o0 transition-all duration-30o0`}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-red-50o0 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}
;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>;
                  <div className="mb-6">;
                    <span className="text-4xl font-bold text-white">{plan.price}</span>;
                    <span className="text-gray-40o0">{plan.period}</span>;
                  </div>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((featurefeatureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-30o0">;
                      <CheckCircle className="w-5 h-5 text-red-40o0 mr-3 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
                <a;
                  href="https: //ziontechgroup.com/contact";
                  className={`w-full, block, text-center py-3 px-6 rounded-lg font-semibold transition-all duration-30o0 ${;
                    plan.popular;
                      ? 'bg-gradient-to-r from-red-60o0 to-pink-60o0 text-white hover: from-red-70o0 hove,;
    r:to-pink-70o0';
                      : 'bg-slate-70o0 text-white hove,;
  r:bg-slate-60o0';
                  }`}
                >;
                  Get Started;
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Market Information */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  x: -20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Market-Leading, Healthcare, Solution;
              </h2>;
              <div className="space-y-6">;
                <div className="flex items-center">;
                  <DollarSign className="w-6 h-6 text-red-40o0 mr-4" />;
                  <div>;
                    <p className="text-white font-semibold">Market, Price, Range</p>;
                    <p className="text-gray-30o0">$60o0 - $4,0o00/month, for, similar solutions</p>;
                  </div>;
                </div>;
                <div className="flex items-center">;
                  <Clock className="w-6 h-6 text-blue-40o0 mr-4" />;
                  <div>;
                    <p className="text-white font-semibold">Implementation Time</p>;
                    <p className="text-gray-30o0">6-10, weeks, for full deployment</p>;
                  </div>;
                </div>;
                <div className="flex items-center">;
                  <Award className="w-6 h-6 text-yellow-40o0 mr-4" />;
                  <div>;
                    <p className="text-white font-semibold">ROI Timeline</p>;
                    <p className="text-gray-30o0">350% return, within, 12 months</p>;
                  </div>;
                </div>;
                <div className="flex items-center">;
                  <Users className="w-6 h-6 text-purple-40o0 mr-4" />;
                  <div>;
                    <p className="text-white font-semibold">Target Market</p>;
                    <p className="text-gray-30o0">Hospitals, clinics, health systems, medical practices</p>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0,;
  x: 20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-90o0/80 backdrop-blur-sm rounded-xl p-8, border, border-slate-70o0";
            >;
              <h3 className="text-2xl font-bold text-white mb-6">Clinical, Performance, Metrics</h3>;
              <div className="space-y-4">;
                <div className="flex items-center justify-between">;
                  <span className="text-gray-30o0">Readmission Reduction</span>;
                  <span className="text-red-40o0 font-semibold">30%</span>;
                </div>;
                <div className="flex items-center justify-between">;
                  <span className="text-gray-30o0">Diagnostic Accuracy</span>;
                  <span className="text-blue-40o0 font-semibold">+25%</span>;
                </div>;
                <div className="flex items-center justify-between">;
                  <span className="text-gray-30o0">Cost Reduction</span>;
                  <span className="text-purple-40o0 font-semibold">20-35%</span>;
                </div>;
                <div className="flex items-center justify-between">;
                  <span className="text-gray-30o0">Patient Satisfaction</span>;
                  <span className="text-yellow-40o0 font-semibold">+40%</span>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* Contact CTA */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-red-60o0/20 to-pink-60o0/20 backdrop-blur-sm rounded-2xl p-12, border, border-red-50o0/30";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Healthcare Delivery?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, leading, healthcare organizations, who, have already, revolutionized, patient care, with, AI analytics.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="https: //ziontechgroup.com/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-60o0 to-pink-60o0 text-white font-semibold rounded-lg hover:from-red-70o0 hove,;
    r:to-pink-70o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                Schedule, a, Demo;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </a>;
              <a;
                href="tel: +130o24640950";
                className="inline-flex items-center px-8 py-4 border-2 border-red-50o0 text-red-40o0 font-semibold rounded-lg hove,;
    r:bg-red-50o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                <Phone className="mr-2 w-5 h-5" />;
                Call Now;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Contact Information */}
      <section className="py-16 px-4 sm: px-6 l,;
    g:px-8 bg-slate-90o0">;
        <div className="max-w-4xl mx-auto text-center">;
          <h3 className="text-2xl font-bold text-white mb-8">Get, in, Touch</h3>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">;
            <div className="flex flex-col items-center">;
              <Phone className="w-8 h-8 text-red-40o0 mb-4" />;
              <p className="text-white font-semibold mb-2">Phone</p>;
              <a href="tel:+130o24640950" className="text-gray-30o0 hove,;
    r:text-red-40o0 transition-colors">;
                +1, 30o2, 464 0o950;
              </a>;
            </div>;
            <div className="flex flex-col items-center">;
              <Mail className="w-8 h-8 text-red-40o0 mb-4" />;
              <p className="text-white font-semibold mb-2">Email</p>;
              <a href="mailto: kleber@ziontechgroup.com" className="text-gray-30o0 hove,;
    r:text-red-40o0 transition-colors">;
                kleber@ziontechgroup.com;
              </a>;
            </div>;
            <div className="flex flex-col items-center">;
              <MapPin className="w-8 h-8 text-red-40o0 mb-4" />;
              <p className="text-white font-semibold mb-2">Address</p>;
              <p className="text-gray-30o0">;
                364, E, Main St, STE, 10o08<br />;
                Middletown, DE, 1970o9;
              </p>;
            </div>;
          </div>;
          <div className="mt-8">;
            <a;
              href="https: //ziontechgroup.com";
              className="inline-flex items-center text-red-40o0 hove,;
  r:text-red-30o0 transition-colors";
            >;
              Visit, our, website;
              <ExternalLink className="ml-2 w-4 h-4" />;
            </a>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
;