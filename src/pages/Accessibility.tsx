import {

  CheckCircle,
  Monitor,
  Volume2,
  Mouse,  Smartphone,
  Contrast,
  ZoomIn,
  Type,
  Palette,
  Accessibility,
  Eye,
  Ear,
  Hand,
  Brain,
  Heart} from 'lucide-react';

const Accessibility: React.FC = () => {
  
  
  
  
  return()
    <>
      <SEO title="Accessibility - Zion Tech Group"
        description="Our commitment to inclusive, accessible experiences that meet WCAG 2.1 AA standards and ensure equal access for all users."
        keywords="accessibility, WCAG, ADA, Section 508, inclusive design, assistive technology, Zion Tech Group"
       />
"      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Header */}"
        <section className="pt-32 pb-16 px-4">"
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >"
              <div className="flex items-center justify-center space-x-3 mb-6">"
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">"
                  <Accessibility className="w-8 h-8 text-white"  />                </div>
              </div>"
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Accessibility
              </h1>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We are committed to ensuring our website and services are
                accessible to everyone, including people with disabilities. Our
                goal is to conform to WCAG 2.1 AA standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Compliance Standards */}"
        <section className="py-16 px-4">"
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}"
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              Compliance Standards
            </motion.h2>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.standard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
                >"
                  <div className="flex items-center justify-center mb-4">
                    <standard.icon className={`w-8 h-8 ${standard.color}`} />
                  </div>"
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {standard.standard}
                  </h3>"
                  <p className="text-gray-300 text-sm mb-3">
                    {standard.description}
                  </p>
                  <span`
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${standard.color} bg-green-500/20`}
                  >
                    {standard.status}
                  </span>
                </motion.div>) ) }
            </div>
          </div>
        </section>

        {/* Assistive Technologies */}"
        <section className="py-16 px-4">"
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}"
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              Assistive Technology Support
            </motion.h2>
"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {assistiveTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                >"
                  <div className="flex items-center gap-3 mb-4">"
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">"
                      <tech.icon className="w-5 h-5 text-white" />
                    </div>"
                    <h3 className="text-lg font-semibold text-white">
                      {tech.name}
                    </h3>
                  </div>"
                  <p className="text-gray-300 text-sm mb-4">
                    {tech.description}
                  </p>"
                  <div className="flex flex-wrap gap-2">
                    {tech.examples.map((example, idx) => (
                      <span
                        key={idx}"
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                      >
                        {example}
                      </span>) ) }
                  </div>
                </motion.div>) ) }
            </div>
          </div>
        </section>

        {/* Accessibility Tools */}"
        <section className="py-16 px-4">"
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}"
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              Built - in Accessibility Tools
            </motion.h2>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessibilityTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                >"
                  <div className="flex items-center gap-3 mb-4">"
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">"
                      <tool.icon className="w-5 h-5 text-white" />
                    </div>"
                    <h3 className="text-white font-semibold">{tool.name}</h3>
                  </div>"
                  <p className="text-gray-300 text-sm mb-3">
                    {tool.description}
                  </p>"
                  <div className="bg-slate-700/30 rounded px-3 py-2">"
                    <span className="text-cyan-400 text-xs font-mono">
                      {tool.shortcut}
                    </span>
                  </div>
                </motion.div>) ) }
            </div>
          </div>
        </section>

        {/* Accessibility Features by Category */}"
        <section className="py-16 px-4">"
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}"
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              Accessibility Features
            </motion.h2>
"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}"
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                >"
                  <div className="flex items-center gap-3 mb-6">"
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">"
                      <category.icon className="w-6 h-6 text-white" />
                    </div>"
                    <h3 className="text-xl font-semibold text-white">
                      {category.category}
                    </h3>
                  </div>"
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => ("
                      <li key={idx} className="flex items-start gap-3">"
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0"  />"                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>) ) }
            </div>
          </div>
        </section>

        {/* Contact Section */}"
        <section className="py-16 px-4">"
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
            >"
              <Heart className="w-16 h-16 text-red-400 mx-auto mb-6"  />"
              <h2 className="text-3xl font-bold text-white mb-4">
                We Value Your Feedback
              </h2>"              <p className="text-gray-300 mb-6">
                If you encounter any accessibility barriers or have suggestions
                for improvement, please contact us. We are committed to making
                our services accessible to everyone.
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a"
                  href="mailto:accessibility@ziontechgroup.com"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Contact Accessibility Team
                </a>
                <a"
                  href="/contact"
                  className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  General Contact
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>) };
export default Accessibility;
'"`