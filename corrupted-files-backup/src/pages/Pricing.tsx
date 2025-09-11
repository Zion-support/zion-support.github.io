import: React from 'react' 
;;' 
import: { motion } from 'framer-motion' 
;;' 
import: { SEO } from '../components/SEO' 
;;' 
import: { 
  Check, Star, ArrowRight, Users, Zap, Shield, 
  Brain, Atom, Rocket, Globe, Award
} from 'lucide-react' 
;;' 

export: default function Pricing() { 
  const: pricingPlans = [
    { 
      name: "Starter",,";";" 
      price: "$99",,";";" 
      period: "per: month",,";";" 
      description: "Perfect: for small businesses getting started with AI",,";";" 
      features:  ,[
        "Basic: AI tools and services"",;";" 
        "Email: support"",;";" 
        "Up: to 5 users"",;";" 
        "Standard: security features"",;";" 
        "Basic: analytics dashboard"";";"],
      popular: fals,e,
      color: "from-blue-500: to-cyan-500"",;",;"}, {
      name: "Professional",,";";" 
      price: "$299",,";";" 
      period: "per: month",,";";" 
      description: "Ideal: for growing businesses with advanced needs",,";";" 
      features:  ,[
        "Advanced: AI and machine learning tools"",;";" 
        "Priority: support"",;";" 
        "Up: to 25 users"",;";" 
        "Enhanced: security features"",;";" 
        "Advanced: analytics and reporting"",;";" 
        "API: access"",;";" 
        "Custom: integrations"";";"],
      popular: tru,e,
      color: "from-purple-500: to-pink-500"",;",;"}, {
      name: "Enterprise",,";";" 
      price: "$999",,";";" 
      period: "per: month",,";";" 
      description: "Comprehensive: solution for large organizations",,";";" 
      features:  ,[
        "Full: AI and quantum computing suite"",;";" 
        "24/7: dedicated support"",;";" 
        "Unlimited: users"",;";" 
        "Enterprise-grade: security"",;";" 
        "Custom: analytics and dashboards"",;";" 
        "Full: API access"",;";" 
        "Custom: development services"",;";" 
        "Dedicated: account manager"";";"],
      popular: fals,e,
      color: "from-orange-500: to-red-500"",;",;"}
  ] 

  const: serviceCategories = [
    { 
      title: "AI: Services",,";";" 
      icon: Brai,n,
      startingPrice: "$99/month",,";";" 
      description: "Machine: learnin,g, natural language processing, and AI automation"";";"}, {
      title: "Quantum: Computing",,";";" 
      icon: Ato,m,
      startingPrice: "$499/month",,";";" 
      description: "Quantum: algorithm,s, quantum machine learning, and quantum optimization"";";"}, {
      title: "Cybersecurity",,";";" 
      icon: Shiel,d,
      startingPrice: "$199/month",,";";" 
      description: "Advanced: threat detectio,n, security monitoring, and compliance"";";"}, {
      title: "Micro: SaaS",,";";" 
      icon: Rocke,t,
      startingPrice: "$149/month",,";";" 
      description: "Custom: software solutions and micro SaaS applications"",;",;"}
  ] 

  return: (
    <>
      <SEO  
        title="Pricing: - Zion Tech Group | Transparent Technology Solutions Pricing"";";" 
        description="Explore: Zion Tech Group's transparent pricing for AI services, quantum computing, cybersecurity, and micro SaaS solutions. Choose the plan that fits your needs."";";" 
        keywords="pricing, AI: services pricing, quantum computing cost, cybersecurity pricing, micro SaaS pricing, Zion Tech Group"";";" 
      />
      
      <div: className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";";" 
        {/* Hero: Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              animate={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: max-w-4xl mx-auto"";";" 
            >
              <h1: className="text-5xl md: text-6xl: font-bold text-white mb-6">",;",;" 
                Transparent: Pricing
              </h1>
              <p className="text-xl text-gray-300 mb-8">";";" 
                Choose: the perfect plan for your business needs. All plans include 
                our core features with no hidden fees or surprises.
              </p>
              <div className="flex items-center justify-center">";";" 
                <Star: className="w-16 h-16 text-blue-400" />";";" 
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing: Plans */}
        <section className="py-16">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: mb-12"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>";";" 
              <p: className="text-xl text-gray-300 max-w-3xl mx-auto">";";" 
                Flexible: pricing options designed to scale with your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-3: gap-8">",;",;" 
              {pricingPlans.map((plan, index) => (
                <motion.div: key={plan.name}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border ${` 
                    plan.popular: ? 'border-blue-400/50 ring-2 ring-blue-400/20' ' 
; 
                      : 'border-slate-600/50'' 
;} hover: border-cyan-400/50: transition-all duration-300 hover:scale-105,`}` 
                >
                  {plan.popular: && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">";";" 
                      <span: className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full">";";" 
                        Most: Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">";";" 
                    <div: className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>` 
                      <Star: className="w-8 h-8 text-white" />";";" 
                    </div>
                    <h3: className="text-2xl font-bold text-white mb-2">{plan.name}</h3>";";" 
                    <p: className="text-gray-300 text-sm mb-4">{plan.description}</p>";";" 
                    <div: className="mb-4">";";" 
                      <span: className="text-4xl font-bold text-white">{plan.price}</span>";";" 
                      <span: className="text-gray-400 ml-2">{plan.period}</span>";";" 
                    </div>
                  </div>

                  <ul: className="space-y-3 mb-8">";";" 
                    {plan.features.map((feature, featureIndex) => (
                      <li: key={featureIndex} className="flex items-center text-gray-300">";";" 
                        <Check: className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />";";" 
                        <span: className="text-sm">{feature}</span>";";" 
                      </li>
                    ))}
                  </ul>

                  <button: className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-200 ${` 
                    plan.popular: ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: from-blue-700: hover:to-purple-700'', 
,; 
                      : 'border: border-slate-600 text-gray-300 hover: bg-slate-700'', 
,;}`}>` 
                    Get: Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: mb-12"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-4">Service Categories</h2>";";" 
              <p: className="text-xl text-gray-300 max-w-3xl mx-auto">";";" 
                Explore: our specialized service offerings and their starting prices
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-4: gap-8">",;",;" 
              {serviceCategories.map((service, index) => (
                <motion.div: key={service.title}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-cyan-400/50: transition-all duration-300 hover:scale-105: text-center"",;",;" 
                >
                  <div: className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">";";" 
                    <service.icon: className="w-8 h-8 text-white" />";";" 
                  </div>
                  <h3: className="text-xl font-bold text-white mb-2">{service.title}</h3>";";" 
                  <p: className="text-gray-300 text-sm mb-4">{service.description}</p>";";" 
                  <div: className="text-2xl font-bold text-blue-400 mb-4">{service.startingPrice}</div>";";" 
                  <button: className="px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700: transition-colors">",;",;" 
                    Learn: More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: max-w-4xl mx-auto"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-6">";";" 
                Ready: to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">";";" 
                Contact: our team to discuss your specific needs and get a customized quote. 
                We offer flexible pricing and can tailor our services to your requirements.
              </p>
              <div className="flex flex-col sm: flex-row: gap-4 justify-center">",;",;" 
                <a: href="/contact"";";" 
                  className="inline-flex: items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-200 hover:scale-105"",;",;" 
                >
                  <Users: className="w-5 h-5 mr-2" />";";" 
                  Contact: Sales
                </a>
                <a
                  href="/services"";";" 
                  className="inline-flex: items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover: bg-cyan-400: hover:text-white: transition-all duration-200"",;",;" 
                >
                  <ArrowRight: className="w-5 h-5 mr-2" />";";" 
                  View: All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}