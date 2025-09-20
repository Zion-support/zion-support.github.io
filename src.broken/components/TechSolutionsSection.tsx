
 params - Function parameters
 * @returns {*} Function return value
 */
function TechSolutionsSection () {
  return (<section className="py-20 bg-gradient - to - br from - slate - 900 via - slate - 800 to - slate -900">
      <div className="max - w-7xl mx - auto px-6">
        <motion.div
          className="text-center mb-16"

              <h3 className="text-xl font - bold text-white mb-3 group - hover:text-blue - 400 transition - colors duration -200">
                {solution.title}
              </h3>

              <p className="text-gray - 400 text-sm mb-6 leading -relaxed">
                {solution.description}
              </p>

              <ul className="space - y-2">
                {solution.benefits.map((benefit, benefitIndex) => (<li key={benefitIndex} className="flex items - center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue - 400 rounded-full"></div>
                    <span className="text-gray -300">{benefit}</span>
                  </li>) ) }
              </ul>

              <div className="mt-6 pt - 4 border-t border-slate -700">
                <div className="text-blue - 400 text-sm font - semibold group - hover:text-blue - 300 transition - colors duration -200">
        <motion.div
          className="mt-16 text-center"
