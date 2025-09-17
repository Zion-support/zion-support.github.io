
import { GradientHeading } from "./GradientHeading";
import { FeatureCard } from "./FeatureCard";
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react'
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface BenefitsSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const getBenefits = (t: any) => [
  {
    title: t('benefits.ai_matchmaking'),
    description: t('benefits.ai_matchmaking_desc'),
    icon: <Bot className="w-8 h-8" />,
  },
  {
    title: t('benefits.global_availability'),
    description: t('benefits.global_availability_desc'),
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: t('benefits.support_24_7'),
    description: t('benefits.support_24_7_desc'),
    icon: <Clock className="w-8 h-8" />,
  },
  {
    title: t('benefits.cost_reduction'),
    description: t('benefits.cost_reduction_desc'),
    icon: <TrendingDown className="w-8 h-8" />,
  },
];

<<<<<<< HEAD
export function BenefitsSection({ className, style }: BenefitsSectionProps) {
  const { t } = useTranslation();
  const benefits = getBenefits(t);
  
  return (
    <section className={cn("py-20 bg-zion-blue-light", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>{t('home.benefits_title')}</GradientHeading>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            {t('home.benefits_subtitle')}
=======
export function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-light via-zion-blue to-zion-blue-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 border border-zion-cyan/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-zion-purple/10 rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-zion-cyan/5 rounded-full opacity-20"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-zion-cyan" />
            <span className="text-zion-cyan text-sm font-medium">Why Choose Zion</span>
            <Sparkles className="w-6 h-6 text-zion-cyan" />
          </div>
          
          <GradientHeading className="text-4xl md:text-5xl mb-6">Why Zion?</GradientHeading>
          <p className="text-zion-slate-light text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value
>>>>>>> origin/website-improvements-v2
          </p>
        </div>
        
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
=======
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
>>>>>>> origin/website-improvements-v2
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
<<<<<<< HEAD
=======
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <div className={`h-full rounded-2xl border-2 ${benefit.borderColor} ${benefit.bgColor} bg-zion-blue/80 backdrop-blur-sm p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 hover:border-zion-purple/50`}>
                <div className={`rounded-2xl w-16 h-16 bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-zion-cyan transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed text-lg">
                  {benefit.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-zion-cyan font-semibold bg-zion-cyan/10 px-3 py-1 rounded-full">
                    {benefit.stats}
                  </span>
                  <div className="w-8 h-8 bg-zion-purple/20 rounded-full flex items-center justify-center group-hover:bg-zion-purple/40 transition-colors">
                    <Zap className="w-4 h-4 text-zion-purple" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional trust indicators */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-8 bg-zion-blue-dark/50 backdrop-blur-sm px-8 py-6 rounded-2xl border border-zion-purple/20">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-slate-light">Enterprise Security</span>
            </div>
            <div className="w-px h-8 bg-zion-purple/30"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-zion-purple" />
              <span className="text-zion-slate-light">10K+ Users</span>
            </div>
            <div className="w-px h-8 bg-zion-purple/30"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-slate-light">99.9% Uptime</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
>>>>>>> origin/website-improvements-v2
