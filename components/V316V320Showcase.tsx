'use client';
export default function V316V320Showcase() {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">🧠 Email Intelligence V316-V320</h2>
        <p className="text-gray-300 mb-6">Advanced AI email engines with case-by-case analysis and reply-all enforcement.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {[0,1,2,3,4].map(idx => (
            <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10 w-36">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-white font-medium text-sm">V{316 + idx}</div>
              <div className="text-green-400 text-xs mt-1">✅ Reply-All</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6">📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </section>
  );
}