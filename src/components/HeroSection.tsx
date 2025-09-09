
import { Button } from "@/components/ui/Button";
import { GradientHeading } from "@/components/GradientHeading";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";

export function HeroSection() {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Enhanced background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-90"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <div className={`transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Icon */}
          <div className="mb-8">
            <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${currentSlideData.color} rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/25`}>
              <currentSlideData.icon className="w-12 h-12 text-white" />
            </div>
          </div>
          <GradientHeading className="text-5xl md:text-7xl font-bold leading-tight">
            {t('home.hero_title')}
          </GradientHeading>
        </motion.div>

        {/* Enhanced subtitle with better messaging */}
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
          {t('home.hero_subtitle')}
        </motion.p>

        {/* Enhanced feature highlights */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-12 text-zion-slate-light">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-zion-cyan" />
            <span>10,000+ AI Experts</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-zion-purple" />
            <span>24/7 Global Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-zion-cyan-light" />
            <span>Free to Use</span>
          </div>
        </motion.div>

        {/* Enhanced CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6">
          <Button
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            size="lg"
            asChild
          >
            <Link
              href="/signup"
              role="button"
              aria-label={t('auth.signup')}
              tabIndex={0}
              data-testid="hero-signup-btn"
            >
              {t('auth.signup')}
            </Link>
          </Button>
          <Link
            id="browse-marketplace"
            to="/marketplace"
            className="group border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark active:bg-zion-cyan-light text-lg py-6 px-8 rounded-md inline-flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
          >
            {t('home.browse_marketplace')}
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-zion-purple/20">
          <p className="text-zion-slate-light text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="w-20 h-8 bg-zion-slate-light rounded animate-pulse"></div>
            <div className="w-20 h-8 bg-zion-slate-light rounded animate-pulse"></div>
            <div className="w-20 h-8 bg-zion-slate-light rounded animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
