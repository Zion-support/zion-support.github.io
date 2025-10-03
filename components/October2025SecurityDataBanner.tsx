export default function October2025SecurityDataBanner() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-10 px-6 mb-10 rounded-xl shadow-xl border border-purple-500/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold mb-3">
            NEW TODAY • OCTOBER 1, 2025
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-3">
            🛡️ Security + 🧠 Data Intelligence = Enterprise Excellence
          </h3>
          <p className="text-xl text-gray-300">
            Two revolutionary platforms delivering $7.5B combined value
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Security Mesh */}
          <div className="bg-gradient-to-br from-red-900/40 to-pink-900/40 rounded-lg p-6 border border-pink-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🛡️</div>
              <h4 className="text-2xl font-bold text-pink-300">Adaptive Security Mesh</h4>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>99.8% threat prevention rate</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>$2.7B breach prevention value</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Sub-100ms autonomous response</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Zero false positives</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 font-bold py-2 px-4 rounded-lg transition">
              Secure Your Enterprise →
            </button>
          </div>

          {/* Data Fabric */}
          <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 rounded-lg p-6 border border-emerald-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-4xl">🧠</div>
              <h4 className="text-2xl font-bold text-emerald-300">Cognitive Data Fabric</h4>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>97% autonomous data quality</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>$4.8B value generation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>75% workload reduction</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Self-managing operations</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 font-bold py-2 px-4 rounded-lg transition">
              Transform Your Data →
            </button>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-lg p-4 backdrop-blur-sm">
          <p className="text-lg font-semibold">
            ⚡ <strong>Limited Time:</strong> Get comprehensive implementation guides + case studies + ROI calculators
          </p>
        </div>
      </div>
    </div>
  );
}
