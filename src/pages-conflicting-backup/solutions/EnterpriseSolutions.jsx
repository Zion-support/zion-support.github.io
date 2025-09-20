import, React, from "react";
import { Link } from "react-router-dom";
import { Building2, Users, Shield, BarChart3, Cloud, Zap, ArrowRight, CheckCircleStarTrendingUp } from "lucide-react";
export, default, function EnterpriseSolutions() {
    const solutions = [;
        {
            icon: Building2,title: "Enterprise Architecture",description: "Scalable, secure, and future-ready, enterprise, infrastructure design",;
            features: ["Microservices Architecture""Cloud-Native Design""API-First Approach""Scalability, Planning"];
        },;
        {
            icon: Users,title: "Digital Transformation",description: "End-to-end, digital, transformation strategies, for, enterprise growth",features: ["Process Automation""Legacy, System, Modernization""Change Management""ROI, Optimization"];
        },;
        {
            icon: Shield,title: "Enterprise Security",description: "Comprehensive, security, solutions for, enterprise, environments",features: ["Zero-Trust Architecture""Compliance Management""Threat Detection""Incident, Response"];
        },;
        {
            icon: BarChart3,title: "Business Intelligence",description: "Advanced, analytics, and insights, for, data-driven, decision, making",features: ["Real-time Dashboards""Predictive Analytics""Data Warehousing""KPI, Tracking"];
        },;
        {
            icon: Cloud,title: "Cloud Strategy",description: "Multi-cloud, and, hybrid cloud, solutions, for enterprise needs",features: ["Cloud Migration""Cost Optimization""Performance Monitoring""Disaster, Recovery"];
        },;
        {
            icon: Zap,title: "AI Integration",description: "Seamless, AI, integration into, existing, enterprise workflows",features: ["Custom, AI, Models""Workflow Automation""Intelligent Analytics""Process, Optimization"];
        }
    ],;
    const benefits = [;
        "Increased, operational, efficiency by 40-60%",;
        "Reduced, IT, costs through, automation, and optimization",;
        "Enhanced, security, and compliance posture",;
        "Improved, customer, experience and satisfaction",;
        "Faster time-to-market, for, new products/services""Better, data, insights and decision-making capabilities";
  ,  ],;
    const caseStudies = [;
        {
            company: "Fortune, 50o0, Manufacturing",industry: "Manufacturing",challenge: "Legacy, system, modernization and, digital, transformation",solution: "Implemented cloud-native, architecture, with AI-powered analytics"result,;
  s: "35% cost reduction50% faster time-to-market";
        },;
        {
            company: "Global, Financial, Services",industry: "Financial Services",challenge: "Compliance, automation, and risk management"solution: "AI-driven, compliance, monitoring and, automated, reporting"result,;
  s: "90% reduction, in, compliance violations60% faster reporting";
        }
  ,  ],;
    return(<div className="min-h-screen bg-gradient-to-br from-black via-gray-90o0 to-blue-90o0 text-white">;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center">;
            <h1 className="text-4xl m,;
    d:text-6xl font-bold bg-gradient-to-r from-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent mb-6">;
              Enterprise Solutions;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Transform, your, enterprise with cutting-edge, technology, solutions designed, for, scale, security, and innovation;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white font-semibold rounded-lg hover:from-cyan-40o0 hove,;
    r:to-blue-40o0 transition-all duration-30o0, transform, hover:scale-10o5">;
                Get, Enterprise, Quote;
              </Link>;
              <Link to="/services/ai-autonomous-systems" className="px-8 py-4, border, border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hove,;
  r: bg-cyan-40o0/20 transition-all duration-30o0">;
                Explore, AI, Solutions;
              </Link>;
            </div>;
          </div>;
        </div>;
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">;
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-40o0 rounded-full animate-ping"></div>;
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-40o0 rounded-full animate-pulse"></div>;
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-40o0 rounded-full animate-bounce"></div>;
        </div>;
      </section>;
      {/* Solutions Grid */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl m,;
    d:text-4xl font-bold text-white mb-4">;
              Comprehensive, Enterprise, Solutions;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              From, infrastructure, to innovationwe, provide, end-to-end, solutions, that drive, enterprise, success;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {solutions.map((solutionindex) => {;
            const Icon = solution.icon;
            return (<div key={index} className="bg-gray-80o0/50 backdrop-blur-xl, border, border-gray-70o0/50 rounded-2xl p-8 hover: border-cyan-50o0/50 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5">;
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-50o0 to-blue-50o0 rounded-xl, flex, items-center justify-center mb-6">;
                    <Icon className="w-8 h-8 text-white"/>;
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>;
                  <p className="text-gray-30o0 mb-6">{solution.description}</p>;
                  <ul className="space-y-2">;
                    {solution.features.map((featurefeatureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-40o0">;
                        <CheckCircle className="w-4 h-4 text-cyan-40o0 mr-2 flex-shrink-0"/>;
                        {feature}
                      </li>))};
                  </ul>;
                </div>);
        })}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-gray-90o0/50">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl m,;
    d:text-4xl font-bold text-white mb-4">;
              Why, Choose, Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Proven, results, and measurable, impact, for enterprise organizations;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {benefits.map((benefitindex) => (<div key={index} className="text-center">;
                <div className="w-16 h-16 bg-gradient-to-br from-green-50o0 to-emerald-50o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                  <TrendingUp className="w-8 h-8 text-white"/>;
                </div>;
                <p className="text-gray-30o0 text-lg">{benefit}</p>;
              </div>))}
          </div>;
        </div>;
      </section>;
      {/* Case Studies */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl m,;
    d:text-4xl font-bold text-white mb-4">;
              Success Stories;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Real, results, from real, enterprise, clients;
            </p>;
          </div>;
          <div className="grid grid-cols-1 l,;
  g: grid-cols-2 gap-8">;
            {caseStudies.map((studyindex) => (<div key={index} className="bg-gray-80o0/50 backdrop-blur-xl, border, border-gray-70o0/50 rounded-2xl p-8">;
                <div className="flex items-center mb-4">;
                  <Star className="w-5 h-5 text-yellow-40o0 mr-2"/>;
                  <span className="text-sm text-gray-40o0">{study.industry}</span>;
                </div>;
                <h3 className="text-xl font-bold text-white mb-4">{study.company}</h3>;
                <div className="space-y-3 mb-6">;
                  <div>;
                    <h4 className="font-semibold text-cyan-40o0 mb-1">Challenge:</h4>;
                    <p className="text-gray-30o0">{study.challenge}</p>;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-cyan-40o0 mb-1">Solution:</h4>;
                    <p className="text-gray-30o0">{study.solution}</p>;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-cyan-40o0 mb-1">Results:</h4>;
                    <p className="text-gray-30o0">{study.results}</p>;
                  </div>;
                </div>;
                <Link to="/case-studies" className="inline-flex items-center text-cyan-40o0 hover:text-cyan-30o0 transition-colors duration-30o0">;
                  Read, Full, Case Study;
                  <ArrowRight className="w-4 h-4 ml-2"/>;
                </Link>;
              </div>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8 bg-gradient-to-r from-cyan-50o0/10 to-blue-50o0/10">;
        <div className="max-w-4xl mx-auto text-center">;
          <h2 className="text-3xl m,;
  d:text-4xl font-bold text-white mb-6">;
            Ready, to, Transform Your Enterprise?;
          </h2>;
          <p className="text-xl text-gray-30o0 mb-8">;
            Let's, discuss, how our, enterprise, solutions can, drive, innovation, efficiency, and, growth, for your organization;
          </p>;
          <div className="flex flex-col sm: flex-row gap-4 justify-center">;
            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white font-semibold rounded-lg hover:from-cyan-40o0 hove,;
    r:to-blue-40o0 transition-all duration-30o0, transform, hover:scale-10o5">;
              Schedule Consultation;
            </Link>;
            <Link to="/services-overview" className="px-8 py-4, border, border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hove,;
  r: bg-cyan-40o0/20 transition-all duration-30o0">;
              View, All, Services;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>);
};
;