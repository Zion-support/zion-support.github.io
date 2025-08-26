import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Users, Star, TrendingUp, Shield } from "lucide-react";
import { useRef } from "react";
export function HeroSection() {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
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
        hidden: { y: 30, opacity: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };
    const floatingVariants = {
        animate: {
            y: [-15, 15, -15],
            rotate: [0, 5, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
    const pulseVariants = {
        animate: {
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
    const particleVariants = {
        animate: {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };
    return (
        <section ref={containerRef} className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
            {/* Enhanced background with parallax effect */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple opacity-90" 
                style={{ y, opacity }}
            />
            {/* Animated floating particles with better positioning and variety */}
            <div className="absolute inset-0">
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-purple-light opacity-60" 
                    variants={floatingVariants} 
                    animate="animate"
                />
                <motion.div 
                    className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-zion-cyan opacity-50" 
                    variants={floatingVariants} 
                    animate="animate" 
                    style={{ animationDelay: '1s' }}
                />
                <motion.div 
                    className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-zion-purple opacity-70" 
                    variants={floatingVariants} 
                    animate="animate" 
                    style={{ animationDelay: '2s' }}
                />
                <motion.div 
                    className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light" 
                    variants={particleVariants} 
                    animate="animate" 
                    style={{ animationDelay: '0.5s' }}
                />
                <motion.div 
                    className="absolute top-3/4 left-1/6 w-2 h-2 rounded-full bg-zion-purple-light opacity-80" 
                    variants={floatingVariants} 
                    animate="animate" 
                    style={{ animationDelay: '1.5s' }}
                />
                <motion.div 
                    className="absolute top-1/6 right-1/6 w-4 h-4 rounded-full bg-zion-cyan opacity-40" 
                    variants={floatingVariants} 
                    animate="animate" 
                    style={{ animationDelay: '2.5s' }}
                />
            </div>
            {/* Enhanced decorative geometric shapes with animations */}
            <motion.div 
                className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30" 
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
                className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 transform rotate-45 opacity-30" 
                animate={{ rotate: -360 }} 
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            {/* New floating elements */}
            <motion.div 
                className="absolute top-1/3 left-10 w-16 h-16 border border-zion-cyan/30 rounded-full opacity-20" 
                variants={pulseVariants} 
                animate="animate"
            />
            <motion.div 
                className="absolute bottom-1/3 right-10 w-20 h-20 border border-zion-purple/30 rounded-full opacity-20" 
                variants={pulseVariants} 
                animate="animate" 
                style={{ animationDelay: '1s' }}
            />
            <motion.div 
                className="container relative z-10 px-4 mx-auto text-center" 
                variants={containerVariants} 
                initial="hidden" 
                animate="visible"
            >
                {/* Enhanced title with better typography and animations */}
                <motion.div variants={itemVariants} className="mb-8">
                    <GradientHeading className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                        {t('home.hero_title') || "The Future of Tech & AI"}
                    </GradientHeading>
                </motion.div>
                {/* Enhanced subtitle with better spacing and animations */}
                <motion.p 
                    variants={itemVariants} 
                    className="text-xl md:text-2xl lg:text-3xl text-zion-slate-light mb-16 max-w-5xl mx-auto leading-relaxed font-light"
                >
                    {t('home.hero_subtitle') || "Discover the world's most advanced AI marketplace. Connect with top tech talent, cutting-edge services, and revolutionary equipment in one seamless platform."}
                </motion.p>
                {/* Enhanced feature highlights with icons and animations */}
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 mb-16 text-zion-slate-light">
                    <motion.div 
                        className="flex items-center gap-3 group" 
                        whileHover={{ scale: 1.05 }} 
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <div className="p-2 bg-zion-cyan/20 rounded-full group-hover:bg-zion-cyan/30 transition-colors">
                            <Sparkles className="w-6 h-6 text-zion-cyan"/>
                        </div>
                        <span className="font-medium">AI-Powered Solutions</span>
                    </motion.div>
                    <motion.div 
                        className="flex items-center gap-3 group" 
                        whileHover={{ scale: 1.05 }} 
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <div className="p-2 bg-zion-purple/20 rounded-full group-hover:bg-zion-purple/30 transition-colors">
                            <Zap className="w-6 h-6 text-zion-purple"/>
                        </div>
                        <span className="font-medium">Expert Talent</span>
                    </motion.div>
                    <motion.div 
                        className="flex items-center gap-3 group" 
                        whileHover={{ scale: 1.05 }} 
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <div className="p-2 bg-zion-cyan/20 rounded-full group-hover:bg-zion-cyan/30 transition-colors">
                            <Shield className="w-6 h-6 text-zion-cyan"/>
                        </div>
                        <span className="font-medium">Secure Platform</span>
                    </motion.div>
                </motion.div>
                {/* Enhanced CTA buttons with better animations */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8 shadow-lg hover:shadow-xl transform transition-all duration-300 group" 
                            size="lg" 
                            asChild
                        >
                            <Link to="/contact" role="button" aria-label="Get Started Today" className="flex items-center gap-2">
                                Get Started Today
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                            </Link>
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                            variant="outline" 
                            className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white text-lg py-6 px-8 transition-all duration-300" 
                            size="lg" 
                            asChild
                        >
                            <Link to="/services" role="button" aria-label="Explore Services">
                                Explore Services
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
                {/* Trust indicators with enhanced animations */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {[
                        { icon: Users, label: "10K+ Users", value: "Trusted by thousands" },
                        { icon: TrendingUp, label: "95% Success", value: "Project completion rate" },
                        { icon: Shield, label: "Enterprise", value: "Fortune 500 clients" },
                        { icon: Star, label: "24/7 Support", value: "Always available" }
                    ].map((metric, index) => (
                        <motion.div 
                            key={index}
                            className="text-center group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <div className="flex justify-center mb-2">
                                <metric.icon className="w-8 h-8 text-zion-cyan group-hover:text-zion-purple transition-colors"/>
                            </div>
                            <div className="text-white font-bold text-lg mb-1">{metric.label}</div>
                            <div className="text-zion-slate-light text-sm">{metric.value}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
