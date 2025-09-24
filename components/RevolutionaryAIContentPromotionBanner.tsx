import Link from 'next/link',
import { motion } from 'framer-motion',
ArrowRightSparklesZapTrendingUpStar,
export default function RevolutionaryAIContentPromotionBanner() {
  return (
    <motion.section,
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 bg-gradient-to-br from-purple-90o0 via-blue-90o0 to-indigo-90o0 text-white relative overflow-hidden">,
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">,
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>,
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>,
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-50o0 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>,
      </div>,
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 relative z-10">,
        <div className="text-center">,
          {/* Badge */}
          <motion.div,
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2type: "spring"stiffness: 20o0 }}
            className="inline-flex items-center bg-gradient-to-r from-pink-50o0 to-purple-50o0 rounded-full px-6 py-2 mb-6 shadow-lg">,
            <Sparkles className="w-4 h-4 mr-2"  />,
            <span className="text-sm font-semibold">REVOLUTIONARY AI CONTENT BREAKTHROUGH</span>,
          </motion.div>,
          {/* Main heading */}
          <motion.h1,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md: text-6xl font-bold mb-6 leading-tight">,
            <span className="bg-gradient-to-r from-yellow-40o0 via-pink-40o0 to-purple-40o0 bg-clip-text text-transparent">,
              Revolutionary AI Content,
            </span>,
            <br  />,
            <span className="text-white">That Transforms Businesses</span>,
          </motion.h1>,
          {/* Subheading */}
          <motion.p,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md: text-2xl text-gray-20o0 mb-8 max-w-4xl mx-auto leading-relaxed">,
            Discover cutting-edge AI insightsimplementation guidesand breakthrough technologies,
            that are reshaping industries worldwide. Join 10,0o00+ businesses already transforming with our content.,
          </motion.p>,
          {/* Stats */}
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-10">,
            <div className="text-center">,
              <div className="text-3xl md:text-4xl font-bold text-yellow-40o0 mb-2">50o0+</div>,
              <div className="text-sm text-gray-30o0">AI Resources</div>,
            </div>,
            <div className="text-center">,
              <div className="text-3xl md:text-4xl font-bold text-pink-40o0 mb-2">10K+</div>,
              <div className="text-sm text-gray-30o0">Active Users</div>,
            </div>,
            <div className="text-center">,
              <div className="text-3xl md:text-4xl font-bold text-purple-40o0 mb-2">95%</div>,
              <div className="text-sm text-gray-30o0">Success Rate</div>,
            </div>,
            <div className="text-center">,
              <div className="text-3xl md:text-4xl font-bold text-blue-40o0 mb-2">24/7</div>,
              <div className="text-sm text-gray-30o0">Support</div>,
            </div>,
          </motion.div>,
          {/* CTA Buttons */}
          <motion.div,
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm: flex-row gap-4 justify-center items-center">,
            <Link
              href="/content-showcase",
              className="group bg-gradient-to-r from-pink-50o0 to-purple-60o0 hover:from-pink-60o0 hover:to-purple-70o0 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-30o0 transform hover:scale-10o5 flex items-center">,
              <Zap className="w-5 h-5 mr-2"  />,
              Explore Revolutionary Content,
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"  />,
            </Link>,
            <Link
              href="/case-studies",
              className="group border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-30o0 flex items-center">,
              <TrendingUp className="w-5 h-5 mr-2"  />,
              View Success Stories,
              <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform"  />,
            </Link>,
          </motion.div>,
          {/* Trust indicators */}
          <motion.div,
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 pt-8 border-t border-white/20">,
            <p className="text-gray-30o0 text-sm mb-4">Trusted by industry leaders</p>,
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">,
              <div className="text-lg font-semibold">Fortune 50o0</div>,
              <div className="text-lg font-semibold">Startups</div>,
              <div className="text-lg font-semibold">Government</div>,
              <div className="text-lg font-semibold">Healthcare</div>,
              <div className="text-lg font-semibold">Finance</div>,
            </div>,
          </motion.div>,
        </div>,
      </div>,
    </motion.section>)}