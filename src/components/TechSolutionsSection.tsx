
export function TechSolutionsSection() {
  return (""
    <section className = "py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">""
      <div className="max-w-7xl mx-auto px-6">"
        <motion.div ""
          className="text-center mb-16"
          initial = {

  { opacity: 0,
  y: 20 

}}
          whileInView = {

  { opacity: 1,
  y: 0 

}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}"
        >""
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technology Solutions"
          </h2>""
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive innovation,
            enhance security, and accelerate your digital transformation journey.
          </p>
        </motion.div>"
""
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techSolutions.map((solution, index) => (
            <motion.div"
              key={solution.title}""
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
              initial = {

  { opacity: 0,
  y: 30 

}}
              whileInView = {

  { opacity: 1,
  y: 0 

}}
              viewport={{ once: true }}
              transition = {

  { duration: 0.6,
  delay: index * 0.1 

}}
            >"
              <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>""
                <span className="text-3xl">{solution.icon}</span>
              </div>"
              ""
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                {solution.title}
              </h3>"
              ""
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {solution.description}
              </p>"
              ""
              <ul className="space-y-2">"
                {solution.benefits.map((benefit, benefitIndex) => (""
                  <li key={benefitIndex} className="flex items-center gap-2 text-sm">""
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>""
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>"
              ""
              <div className="mt-6 pt-4 border-t border-slate-700">""
                <div className="text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors duration-200">
                  Learn More →
                </div>"
""
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>"
""
                <ul className="space-y-3 mb-6">"
                  {solution.features.map((feature, featureIndex) => (""
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">""
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>) ) }
                </ul>
"
                <Link""
                  to="/services""
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group-hover:translate-x-1"
"
                  Learn More""
                  <Rocket className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"  />                </Link>
              </motion.div>) }) }
        </div>
"
        <motion.div ""
          className="mt-16 text-center"
          initial = {

  { opacity: 0,
  y: 20 

}}
          whileInView = {

  { opacity: 1,
  y: 0 

}}
          viewport={{ once: true }}
          transition = {

  { duration: 0.6,
  delay: 0.4 

}}"
        >""
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">""
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?"
            </h3>""
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve
              your business goals and stay ahead of the competition."
            </p>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link""
                to="/contact""
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
"
                Get Started""
                <Rocket className="ml-2 h-5 w-5"  />
              </Link>"
              <Link""
                to="/services""
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
"
                View All Services""
                <Code className="ml-2 h-5 w-5"  />              </Link>
            </div>
          </div>
        </motion.div>;
      </div>;
    </section>;) };
"
export default TechSolutionsSection;""
            <span className="text-2xl">→</span>;
          </div>;
        </motion.div>;
      </div>;
    </section>;) }
export default TechSolutionsSection;
export default TechSolutionsSection;'"`
'"`'"`