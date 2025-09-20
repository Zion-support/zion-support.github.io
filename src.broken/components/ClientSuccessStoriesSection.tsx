
 params - Function parameters
 * @returns {*} Function return value
 */
function ClientSuccessStoriesSection () {
  return (<section className="py-20 bg-gradient - to - br from - slate - 900 via - slate - 800 to - slate -900">
      <div className="max - w-7xl mx - auto px-6">
        <motion.div
          className="text-center mb-16"

              <div className="p -6">
                <h3 className="text-xl font - bold text-white mb-2">
                  {story.client}
                </h3>

                <div className="mb-4">
                  <h4 className="text-sm font - semibold text-gray - 300 mb-2">Challenge:</h4>
                  <p className="text-gray - 400 text-sm">{story.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font - semibold text-gray - 300 mb-2">Solution:</h4>
                  <p className="text-gray - 400 text-sm">{story.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font - semibold text-gray - 300 mb-2">Results:</h4>
                  <ul className="space - y-1">
                    {story.results.map((result, resultIndex) => (<li key={resultIndex} className="flex items - center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green - 400 rounded-full"></div>
                        <span className="text-gray -300">{result}</span>
                      </li>) ) }
                  </ul>
                </div>

                <div className="border-t border-slate - 700 pt -4">
                  <blockquote className="text-gray - 300 text-sm italic mb-3">
        <motion.div
          className="mb-16";

            <div className="grid grid - cols - 2 md:grid - cols - 4 gap-8">
              <div className="text-center">
                <div className="text-4xl font - bold text-blue - 400 mb-2">98%</div>
                <div className="text-gray - 300 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font - bold text-green - 400 mb-2">500+</div>
                <div className="text-gray - 300 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font - bold text-purple - 400 mb-2">25+</div>
                <div className="text-gray - 300 text-sm">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font - bold text-orange - 400 mb-2">99.9%</div>
                <div className="text-gray - 300 text-sm">Uptime Guarantee</div>
        <motion.div
          className="text-center"
