
 params - Function parameters
 * @returns {*} Function return value
 */
function GlobalPresenceSection () {
  return (<section className="py-20 bg-gradient - to - br from - slate - 900 via - slate - 800 to - slate -900">
      <div className="max - w-7xl mx - auto px-6">
        <motion.div
          className="text-center mb-16"
        <motion.div
          className="grid grid - cols - 2 md:grid - cols - 4 gap-8 mb-16"
        <motion.div
          className="mb-16";

          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap-8">
            {globalOffices.map((office, index) => (<motion.div
                key={office.city}
                className="bg-slate - 800 border border-slate - 700 rounded-xl p - 6 text-center hover:border-blue - 500 / 50 transition - all duration - 300 hover:shadow-lg hover:shadow-blue -500 / 25 group"

                <div className="mb-2">
                  <span className="px-3 py-1 bg-blue - 600 / 20 text-blue - 400 text-xs font - semibold rounded-full">
                    {office.type}
                  </span>
                </div>

                <h4 className="text-lg font - bold text-white mb-1">{office.city}</h4>
                <p className="text-gray - 400 text-sm mb-3">{office.country}</p>
                <p className="text-gray - 300 text-xs">{office.description}</p>
              </motion.div>) ) }
        <motion.div
          className="text-center mb-12"
        >
          <div className="bg-slate - 800 border border-slate - 700 rounded-2xl p -8">
            <div className="w-24 h-24 bg-gradient - to - br from - blue - 500 to - purple - 600 rounded-full flex items - center justify - center mx - auto mb-6">
              <span className="text-4xl">🌍</span>
            </div>
            <h3 className="text-2xl font - bold text-white mb-4">Worldwide Coverage</h3>
            <p className="text-gray - 300 text-lg max - w-2xl mx -auto">
              Our distributed team and cloud infrastructure ensure seamless service delivery
        <motion.div
          className="text-center"
