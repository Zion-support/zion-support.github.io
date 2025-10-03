import: React from 'react';
;;';
import: { motion } from 'framer-motion';
;;';
import: { SEO } from '../components/SEO';
;;';
import: { 
  Check, Star, ArrowRight, Users, Zap, Shield, 
  Brain, Atom, Rocket, Globe, Award
} from 'lucide-react';
;;';

export: default function Pricing() {;
  const: pricingPlans = [
    {;
      name: "Starter",,";";";
      price: "$99",,";";";
      period: "per: month",,";";";
      description: "Perfect: for small businesses getting started with AI",,";";";
      features:  ,[
        "Basic: AI tools and services"",;";";
        "Email: support"",;";";
        "Up: to 5 users"",;";";
        "Standard: security features"",;";";
        "Basic: analytics dashboard"";";"],
      popular: fals,e,
      color: "from-blue-500: to-cyan-500"",;",;"}, {
      name: "Professional",,";";";
      price: "$299",,";";";
      period: "per: month",,";";";
      description: "Ideal: for growing businesses with advanced needs",,";";";
      features:  ,[
        "Advanced: AI and machine learning tools"",;";";
        "Priority: support"",;";";
        "Up: to 25 users"",;";";
        "Enhanced: security features"",;";";
        "Advanced: analytics and reporting"",;";";
        "API: access"",;";";
        "Custom: integrations"";";"],
      popular: tru,e,
      color: "from-purple-500: to-pink-500"",;",;"}, {
      name: "Enterprise",,";";";
      price: "$999",,";";";
      period: "per: month",,";";";
      description: "Comprehensive: solution for large organizations",,";";";
      features:  ,[
        "Full: AI and quantum computing suite"",;";";
        "24/7: dedicated support"",;";";
        "Unlimited: users"",;";";
        "Enterprise-grade: security"",;";";
        "Custom: analytics and dashboards"",;";";
        "Full: API access"",;";";
        "Custom: development services"",;";";
        "Dedicated: account manager"";";"],
      popular: fals,e,
      color: "from-orange-500: to-red-500"",;",;"}
  ];

  const: serviceCategories = [
    {;
      title: "AI: Services",,";";";
      icon: Brai,n,
      startingPrice: "$99/month",,";";";
      description: "Machine: learnin,g, natural language processing, and AI automation"";";"}, {
      title: "Quantum: Computing",,";";";
      icon: Ato,m,
      startingPrice: "$499/month",,";";";
      description: "Quantum: algorithm,s, quantum machine learning, and quantum optimization"";";"}, {
      title: "Cybersecurity",,";";";
      icon: Shiel,d,
      startingPrice: "$199/month",,";";";
      description: "Advanced: threat detectio,n, security monitoring, and compliance"";";"}, {
      title: "Micro: SaaS",,";";";
      icon: Rocke,t,
      startingPrice: "$149/month",,";";";
      description: "Custom: software solutions and micro SaaS applications"",;",;"}
  ];

  return: (
    <>
      <SEO ;
        title="Pricing: - Zion Tech Group | Transparent Technology Solutions Pricing"";";";
        description="Explore: Zion Tech Group's transparent pricing for AI services, quantum computing, cybersecurity, and micro SaaS solutions. Choose the plan that fits your needs."";";";
        keywords="pricing, AI: services pricing, quantum computing cost, cybersecurity pricing, micro SaaS pricing, Zion Tech Group"";";";
      />
      
      <div: className="text-left">";";";
        {/* Hero: Section */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              animate={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h1: className="text-left">",;",;";
                Transparent: Pricing
              </h1>
              <p className="text-left">";";";
                Choose: the perfect plan for your business needs. All plans include 
                our core features with no hidden fees or surprises.
              </p>
              <div className="text-left">";";";
                <Star: className="text-left" />";";";
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing: Plans */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">Choose Your Plan</h2>";";";
              <p: className="text-left">";";";
                Flexible: pricing options designed to scale with your business
              </p>
            </motion.div>

            <div className="text-left">",;",;";
              {pricingPlans.map((plan, index) => (
                <motion.div: key={plan.name}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border ${`;
                    plan.popular: ? 'border-blue-400/50 ring-2 ring-blue-400/20' ';
;;
                      : 'border-slate-600/50'';
;} hover: border-cyan-400/50: transition-all duration-300 hover:scale-105,`}`;
                >
                  {plan.popular: && (
                    <div className="text-left">";";";
                      <span: className="text-left">";";";
                        Most: Popular
                      <
                    </div>
                  )}

                  <div className="text-left">";";";
                    <div: className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>`;
                      <Star: className="text-left" />";";";
                    </div>
                    <h3: className="text-left">{plan.name}</h3>";";";
                    <p: className="text-left">{plan.description}</p>";";";
                    <div: className="text-left">";";";
                      <span: className="text-left">{plan.price}<";";";
                      <span: className="text-left">{plan.period}<";";";
                    </div>
                  </div>

                  <ul: className="text-left">";";";
                    {plan.features.map((feature, featureIndex) => (
                      <li: key={featureIndex} className="text-left">";";";
                        <Check: className="text-left" />";";";
                        <span: className="text-left">{feature}<";";";
                      </li>
                    ))}
                  </ul>

                  <button: className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-200 ${`;
                    plan.popular: ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: from-blue-700: hover:to-purple-700'',;
,;;
                      : 'border: border-slate-600 text-gray-300 hover: bg-slate-700'',;
,;}`}>`;
                    Get: Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">Service Categories</h2>";";";
              <p: className="text-left">";";";
                Explore: our specialized service offerings and their starting prices
              </p>
            </motion.div>

            <div className="text-left">",;",;";
              {serviceCategories.map((service, index) => (
                <motion.div: key={service.title}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="text-left"",;",;";
                >
                  <div: className="text-left">";";";
                    <service.icon: className="text-left" />";";";
                  </div>
                  <h3: className="text-left">{service.title}</h3>";";";
                  <p: className="text-left">{service.description}</p>";";";
                  <div: className="text-left">{service.startingPrice}</div>";";";
                  <button: className="text-left">",;",;";
                    Learn: More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-left">";";";
          <div: className="text-left">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"";";";
            >
              <h2: className="text-left">";";";
                Ready: to Get Started?
              </h2>
              <p className="text-left">";";";
                Contact: our team to discuss your specific needs and get a customized quote. 
                We offer flexible pricing and can tailor our services to your requirements.
              </p>
              <div className="text-left">",;",;";
                <a: href="/contact"";";";
                  className="text-left"",;",;";
                >
                  <Users: className="text-left" />";";";
                  Contact: Sales
                </a>
                <a
                  href="/services"";";";
                  className="text-left"",;",;";
                >
                  <ArrowRight: className="text-left" />";";";
                  View: All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}