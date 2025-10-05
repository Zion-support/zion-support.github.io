<<<<<<< HEAD
import { Link } from 'react-router-dom';
const October2025CuttingEdgeContentBanner = () => {
  const featuredArticles = [
    {
      title: "Next-Gen Autonomous Orchestration — Self-Healing Systems at Scale",
      subtitle: "99.99% Uptime, 85% Cost Reduction, Zero-Touch Operations",
      category: "Autonomous Systems",
      link: "/blog/ai-2025-oct-next-gen-autonomous-orchestration",
      gradient: "from-cyan-500 to-blue-600",
      icon: <Zap className="w-6 h-6" />,
      metrics: ["99.99% Uptime", "85% Cost Cut", "95% Faster Recovery"]
    },
    {
      title: "Advanced Prompt Engineering Mastery — 10x LLM Performance",
      subtitle: "95%+ Accuracy, 80% Cost Reduction, Production-Grade Techniques",
      category: "LLM Engineering",
      link: "/blog/ai-2025-oct-advanced-prompt-engineering-mastery",
      gradient: "from-purple-500 to-pink-600",
      icon: <Sparkles className="w-6 h-6" />,
      metrics: ["10x Performance", "95%+ Accuracy", "$990K Savings"]
    },
    {
      title: "Real-Time AI Personalization at Scale — 100M+ Users",
      subtitle: "340% Revenue Lift, Sub-50ms Latency, 10M Decisions/Second",
      category: "ML at Scale",
      link: "/blog/ai-2025-oct-real-time-personalization-at-scale",
      gradient: "from-orange-500 to-red-600",
      icon: <TrendingUp className="w-6 h-6" />,
      metrics: ["340% Revenue", "Sub-50ms Latency", "100M+ Users"]
    }
  ];
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-y border-purple-500/20">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              🔥 OCTOBER 1, 2025 — JUST PUBLISHED TODAY
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            3 Game-Changing Enterprise AI Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            🚀 <span className="font-semibold text-purple-300">Master autonomous systems</span> with self-healing capabilities, 
            <span className="font-semibold text-cyan-300"> unlock 10x LLM performance</span> with advanced prompting, and 
            <span className="font-semibold text-pink-300"> deliver personalization at massive scale</span> — Essential reading for technology leaders!
          </p>
        </div>
        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredArticles.map((article, index) => (
            <Link
              key={index}
              to={article.link}
              className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Card gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative p-6">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4" > <div className={`p-3 rounded-xl bg-gradient-to-br ${article.gradient} text-white shadow-lg`}>
                    {article.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {article.category}
                  </span>
                </div>
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {article.title}
                </h3>
                {/* Subtitle */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {article.subtitle}
                </p>
                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.metrics.map((metric, idx) => (
                    <span
key={idx}
                      className="text-xs px-2 py-1 rounded-md bg-slate-700/50 text-gray-300 border border-slate-600/50"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
                {/* Read More Link */}
                <div className="flex items-center text-sm font-semibold text-purple-400 group-hover:text-cyan-400 transition-colors">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              to="/blog"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Explore All Latest Content
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-800/80 backdrop-blur-sm text-white font-bold rounded-xl border border-purple-500/30 hover:border-purple-500 hover:bg-slate-700/80 transition-all duration-300"
            >
              Schedule Expert Consultation
            </Link>
          </div>
        </div>
        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            💡 <span className="text-gray-300 font-semibold">Join 50,000+ AI leaders</span> who get weekly insights on enterprise AI implementation
          </p>
        </div>
      </div>
      <style > {`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {",
      animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};
export default October2025CuttingEdgeContentBanner;
=======
import { Li n k } from ' react - rout e r - d o m ' ; const October2025CuttingEdgeContentBanner = ( ) = > { const featuredArticles = [ { tit l e: " Ne x t - Gen Autonomous Orchestration — Se l f - Healing Systems at S c a l e " subtit l e: " 99.99 % Upt i m e 85 % Cost Reductio n Ze r o - Touch Operation s " catego r y: " Autonomous Syste m s " li n k: " / blog / ai - 20 2 5 - o c t - ne x t - g e n - autonomo u s - orchestrat i o n " gradie n t: " from - cy a n - 500 t o - bl u e - 60 0 " ic o n: < Zap classNam e = " w - 6 h - 6 " / > metri c s: [ " 99.99 % Upt i m e " " 85 % Cost Cu t " " 95 % Faster Recover y " ] } { tit l e: " Advanced Prompt Engineering Maste r y — 10x LLM Performanc e " subtit l e: " 95 % + Accur a c y 80 % Cost Reductio n Producti o n - Grade Technique s " catego r y: " LLM Engineeri n g " li n k: " / blog / ai - 20 2 5 - o c t - advanc e d - prom p t - engineeri n g - mast e r y " gradie n t: " from - purp l e - 500 t o - pi n k - 60 0 " ic o n: < Sparkles classNam e = " w - 6 h - 6 " / > metri c s: [ " 10x Performan c e " " 95 % + Accura c y " " $990K Saving s " ] } { tit l e: " Re a l - Time AI Personalization at Scal e — 10 0 M + Us e r s " subtit l e: " 3 4 0 % Revenue Li f t S u b - 50ms Latenc y 10M Decision s / Seco n d " catego r y: " ML at Scal e " li n k: " / blog / ai - 20 2 5 - o c t - re a l - ti m e - personalizati o n - at - sc a l e " gradie n t: " from - oran g e - 500 t o - r e d - 60 0 " ic o n: < TrendingUp classNam e = " w - 6 h - 6 " / > metri c s: [ " 3 4 0 % Reve n u e " " S u b - 50ms Latenc y " " 10 0 M + Use r s " ] } ]; retu r n ( < div classNam e = " relative overflo w - hidden b g - gradie n t - to - br fro m - sla t e - 900 vi a - purp l e - 900 t o - sla t e - 900 borde r - y borde r - purp l e - 5 0 0 / 20 " > { / * Animated background effect * / } < div classNam e = " absolute inse t - 0 opacit y - 20 " > < div classNam e = " absolute to p - 0 - le f t - 4 w - 9 6 h - 96 b g - purp l e - 500 rounde d - full mi x - ble n d - multiply filter blur - 3xl animat e - bl o b " / > < div classNam e = " absolute to p - 0 - rig h t - 4 w - 9 6 h - 96 b g - cy a n - 500 rounde d - full mi x - ble n d - multiply filter blur - 3xl animat e - blob animatio n - del a y - 20 0 0 " / > < div classNam e = " absolu t e - bott o m - 8 lef t - 2 0 w - 9 6 h - 96 b g - pi n k - 500 rounde d - full mi x - ble n d - multiply filter blur - 3xl animat e - blob animatio n - del a y - 40 0 0 " / > < / d i v > < div classNam e = " relative container mx - auto p x - 4 p y - 12 " > { / * Header Sectio n * / } < div classNam e = " te x t - center m b - 10 " > < div classNam e = " inli n e - flex item s - center ga p - 2 p x - 4 p y - 2 b g - gradie n t - to - r fro m - purp l e - 5 0 0 / 20 t o - cy a n - 5 0 0 / 20 rounde d - full border border - purp l e - 5 0 0 / 30 m b - 4 " > < Sparkles classNam e = " w - 5 h - 5 tex t - cy a n - 400 animat e - pul s e " / > < span classNam e = " te x t - sm fon t - semibold tex t - transparent b g - cl i p - text b g - gradie n t - to - r fro m - cy a n - 400 t o - purp l e - 4 0 0 " > 🔥 OCTOB E R 1 20 2 5 — JUST PUBLISHED TODAY < / sp a n > < / d i v > < h2 classNam e = " te x t - 4xl m d: te x t - 5xl fon t - bold tex t - white m b - 4 leadin g - tig h t " > 3 Gam e - Changing Enterprise AI Breakthroug h s < / h2 > < p classNam e = " te x t - xl tex t - gr a y - 300 ma x - w - 4xl m x - au t o " > 🚀 < span classNam e = " fo n t - semibold tex t - purp l e - 3 0 0 " > Master autonomous systems < / sp a n > with sel f - healing capabilit i e s < span classNam e = " fo n t - semibold tex t - cy a n - 3 0 0 " > unlock 10x LLM performan c e < / sp a n > with advanced promptin g a n d < span classNam e = " fo n t - semibold tex t - pi n k - 3 0 0 " > deliver personalization at massive scal e < / sp a n > — Essential reading for technology leader s ! < / p > < / d i v > { / * Featured Articles Grid * / } < div classNam e = " grid m d: gr i d - co l s - 3 ga p - 6 m b - 8 " > { featuredArticl e s.m a p ( ( art i c l e ind e x ) = > ( < Link ke y = { in d e x } to = { artic l e.li n k } classNa m e = " group relative overflow - hidden b g - sla t e - 8 0 0 / 50 backdro p - bl u r - sm rounde d - 2xl border border - sla t e - 7 0 0 / 50 hove r: bord e r - purp l e - 5 0 0 / 50 transitio n - all duratio n - 300 hove r: sca l e - 105 hove r: shad o w - 2xl hove r: shad o w - purp l e - 5 0 0 / 20 " > { / * Card gradient overl a y * / } < div classNam e = { ` absolute inse t - 0 b g - gradie n t - to - br $ { artic l e.gradi e n t } opaci t y - 0 grou p - hov e r: opaci t y - 10 transitio n - opacity duratio n - 30 0 ` } / > < div classNam e = " relativ e p - 6 " > { / * Icon and Category * / } < div classNam e = " flex item s - center justif y - between m b - 4 " > < div classNam e = { ` p - 3 rounde d - xl b g - gradie n t - to - br $ { artic l e.gradi e n t } te x t - white shado w - lg ` } > { artic l e.ic o n } < / d i v > < span classNam e = " te x t - xs fon t - semibold p x - 3 p y - 1 rounde d - full b g - purp l e - 5 0 0 / 20 tex t - purp l e - 300 border border - purp l e - 5 0 0 / 30 " > { artic l e.catego r y } < / sp a n > < / d i v > { / * Tit l e * / } < h3 classNam e = " te x t - lg fon t - bold tex t - white m b - 2 lin e - cla m p - 2 grou p - hov e r: te x t - transparent grou p - hov e r: bg - cl i p - text grou p - hov e r: bg - gradie n t - to - r grou p - hov e r: from - purp l e - 400 grou p - hov e r: to - cy a n - 400 transitio n - all duratio n - 3 0 0 " > { artic l e.t i t l e } < / h3 > { / * Subtit l e * / } < p classNam e = " te x t - sm tex t - gr a y - 400 m b - 4 lin e - cla m p - 2 " > { artic l e.subtit l e } < / p > { / * Metri c s * / } < div classNam e = " flex fle x - wrap ga p - 2 m b - 4 " > { artic l e.metri c s.m a p ( ( met r i c i d x ) = > ( < span ke y = { id x } classNa m e = " te x t - xs p x - 2 p y - 1 rounde d - md b g - sla t e - 7 0 0 / 50 tex t - gr a y - 300 border border - sla t e - 6 0 0 / 50 " > { metric } < / s p a n > ) ) } < / d i v > { / * Read More Link * / } < div classNam e = " flex item s - center tex t - sm fon t - semibold tex t - purp l e - 400 grou p - hov e r: te x t - cy a n - 400 transitio n - colo r s " > Read Full Article < ArrowRight classNam e = " w - 4 h - 4 m l - 2 grou p - hov e r: transla t e - x - 1 transitio n - transfo r m " / > < / d i v > < / d i v > < / Li n k > ) ) } < / d i v > { / * CTA Sectio n * / } < div classNam e = " te x t - cent e r " > < div classNam e = " inli n e - flex fle x - col s m: fl e x - row ga p - 4 " > < Link t o = " / blog " classNa m e = " group p x - 8 p y - 4 b g - gradie n t - to - r fro m - purp l e - 600 t o - cy a n - 600 tex t - white fon t - bold rounde d - xl hove r: from - purp l e - 500 hove r: to - cy a n - 500 transitio n - all duratio n - 300 shado w - lg hove r: shad o w - purp l e - 5 0 0 / 50 hove r: sca l e - 1 0 5 " > < span classNam e = " flex item s - center ga p - 2 " > Explore All Latest Conte n t < ArrowRight classNam e = " w - 5 h - 5 grou p - hov e r: transla t e - x - 1 transitio n - transfo r m " / > < / sp a n > < / Li n k > < Link t o = " / conta c t " classNa m e = " px - 8 p y - 4 b g - sla t e - 8 0 0 / 80 backdro p - bl u r - sm tex t - white fon t - bold rounde d - xl border border - purp l e - 5 0 0 / 30 hove r: bord e r - purp l e - 500 hove r: bg - sla t e - 7 0 0 / 80 transitio n - all duratio n - 3 0 0 " > Schedule Expert Consultation < / Li n k > < / d i v > < / d i v > { / * Additional I n f o * / } < div classNam e = " mt - 8 tex t - cent e r " > < p classNam e = " te x t - sm tex t - gr a y - 4 0 0 " > 💡 < span classNam e = " te x t - gr a y - 300 fon t - semibo l d " > Joi n 5 0 0 0 0 + AI leader s < / sp a n > who get weekly insights on enterprise AI implementatio n < / p > < / d i v > < / d i v > < sty l e > { ` @ keyframes blo b { 0 % 1 0 0 % { transfo r m: transla t e ( 0 0 ) sca l e ( 1 ); } 33 % { transfo r m: transla t e ( 3 0 p x - 50 p x ) sca l e ( 1.1 ); } 66 % { transfo r m: transla t e ( - 2 0 p x 20 p x ) sca l e ( 0.9 ); } } .anima t e - bl o b { " animati o n: blob 7s infinit e; } .animati o n - del a y - 20 0 0 { animati o n - del a y: 2 s; } .animati o n - del a y - 40 0 0 { animati o n - del a y: 4 s; } ` } < / sty l e > < / d i v > ); }; export default October2025CuttingEdgeContentBanner; $ $ 
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
