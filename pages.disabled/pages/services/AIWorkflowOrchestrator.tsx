import {

  Workflow,
  Brain,
  Zap,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Cloud,
  BarChart3,  CheckCircle,
  ArrowRight,
  Play,
  Code,
  Database,
  Globe,
  Lock,
  Target,
  Rocket,
  Star,
  Award,
  Phone,
  Mail,
  MapPin} from 'lucide-react';
;
const AIWorkflowOrchestrator: React.FC = props {

  return()    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
      {/* Hero Section */}""
      <div className="relative overflow-hidden">""
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>""
        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            className="text-center text-white""
          >""
            <div className="flex justify-center mb-6">""
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">""
                <Workflow className="w-8 h-8 text-white"  />              </div>"
            </div>""
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Workflow Orchestrator"
            </h1>""
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
              Intelligent workflow automation platform that orchestrates complex
              business processes with AI-powered optimization and real-time
              execution."
            </p>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link""
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105""
              >""
                <Play className="w-5 h-5 mr-2"  />                Start Free Trial
              </Link>"
              <Link""
                to="/demo""
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300""
              >""
                <ArrowRight className="w-5 h-5 mr-2"  />                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
"
      {/* Features Section */}""
      <section className="py-24 bg-black/20">""
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            className="text-center mb-16""
          >""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Modern Workflows"
            </h2>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides everything you need to automate,
              optimize, and orchestrate complex business processes.
            </p>
          </motion.div>"
""
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index()
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"
                transition={{ duration: 0.8, delay: index * 0.1 }}""
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300""
              >""
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg w-fit mb-6">""
                  <feature.icon className="w-6 h-6 text-white" />"
                </div>""
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}"
                </h3>""
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
"
      {/* Pricing Section */}""
      <section className="py-24">""
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            className="text-center mb-16""
          >""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing"
            </h2>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your workflow automation needs. All
              plans include our core AI optimization features.
            </p>
          </motion.div>"
""
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map(tier: unknown, index: unknown()
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
'
                  tier.popular''
                    ? 'border-blue-400/50 bg-gradient-to-br from-blue-500/10 to-purple-500/10'''`
                    : 'border-white/10'``
                }`}
              >"
                {tier.popular && (""
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">""
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}"
""
                <div className="text-center mb-8">""
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tier.name}"
                  </h3>""
                  <p className="text-gray-400 mb-4">{tier.description}</p>""
                  <div className="flex items-baseline justify-center">""
                    <span className="text-4xl font-bold text-white">
                      {tier.price}"
                    </span>""
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>"
""
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li"
                      key={featureIndex}""
                      className="flex items-center text-gray-300""
                    >""
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"  />                      {feature}
                    </li>
                  ))}
                </ul>
'
                <Link''`
                  to={tier.cta === 'Contact Sales' ? '/contact' : '/contact'}``
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
'
                    tier.popular''
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'''`
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'``
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
"
      {/* Benefits Section */}""
      <section className="py-24 bg-black/20">""
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            className="text-center mb-16""
          >""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose AI Workflow Orchestrator?"
            </h2>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business processes with intelligent automation that
              learns and improves over time.
            </p>
          </motion.div>"
""
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(benefit: unknown, index: unknown()
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"
                transition={{ duration: 0.8, delay: index * 0.1 }}""
                className="text-center""
              >""
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-fit mx-auto mb-6">""
                  <benefit.icon className="w-8 h-8 text-white" />"
                </div>""
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}"
                </h3>""
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
"
      {/* CTA Section */}""
      <section className="py-24">""
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            className="max-w-4xl mx-auto""
          >""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Workflows?"
            </h2>""
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have already automated their
              processes with AI-powered intelligence."
            </p>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link""
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105""
              >""
                <Rocket className="w-5 h-5 mr-2"  />                Start Free Trial
              </Link>"
              <Link""
                to="/demo""
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300""
              >""
                <Play className="w-5 h-5 mr-2"  />                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
"
      {/* Contact Information */}""
      <section className="py-16 bg-black/40">""
        <div className="container mx-auto px-4">""
          <div className="grid md:grid-cols-3 gap-8 text-center">""
            <div className="flex flex-col items-center">""
              <Phone className="w-8 h-8 text-blue-400 mb-4"  />""
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>""
              <p className="text-gray-300">+1 302 464 0950</p>"
            </div>""
            <div className="flex flex-col items-center">""
              <Mail className="w-8 h-8 text-blue-400 mb-4"  />""
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>""
              <p className="text-gray-300">kleber@ziontechgroup.com</p>"
            </div>""
            <div className="flex flex-col items-center">""
              <MapPin className="w-8 h-8 text-blue-400 mb-4"  />""
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>""
              <p className="text-gray-300">
                364 E Main St STE 1008
                <br />
                Middletown DE 19709
              </p>            </div>
          </div>
        </div>
      </section>
    </div>
  )};
;
export { AIWorkflowOrchestrator };export default AIWorkflowOrchestrator;'"`
'"`'"`