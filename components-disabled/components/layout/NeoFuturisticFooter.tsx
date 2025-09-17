    <footer className="relative mt-20 border-t border-slate-800/60 bg-black/60 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-x-10 -top-32 h-64 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-neural-dots opacity-20 animate-shimmer" />
      <div className="relative container mx-auto px-4 py-12 text-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xl font-semibold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
              Zion Tech Group
            </motion.h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Productized AI, IT and micro SaaS solutions with transparent pricing and fast onboarding. Built for outcomes, delivered with reliability.
            </p>
          <div className="space-y-2 text-sm">
            <div className="font-semibold text-slate-100 mb-2">Resources</div>
            <a className="flex items-center gap-2 text-slate-300 hover:text-cyan-300" href="/market-pricing"><ExternalLink className="w-4 h-4" /> Market Pricing</a>
            <a className="flex items-center gap-2 text-slate-300 hover:text-cyan-300" href="/services"><ExternalLink className="w-4 h-4" /> Services</a>
            <a className="flex items-center gap-2 text-slate-300 hover:text-cyan-300" href="/contact"><ExternalLink className="w-4 h-4" /> Contact</a>
            <div className="flex items-center gap-3 pt-2">
              <a aria-label="GitHub" href="https://github.com/Zion-Holdings" className="text-slate-400 hover:text-white"><Github className="w-5 h-5" /></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/company/zion-tech-group/" className="text-slate-400 hover:text-white"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-800/60 pt-6">
