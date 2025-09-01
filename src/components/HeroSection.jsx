import React, { useRef } from 'react';'import { motion, useScroll, useTransform } from 'framer-motion';'import { ArrowRight, Sparkles, Star, Zap, Shield, Users, Clock, Target, TrendingUp, Award } from 'lucide-react';'import { Button } from "@/components/ui/button";"""import { GradientHeading } from "@/components/GradientHeading";"""import { Link } from "react-router-dom";"""import { useTranslation } from "react-i18next";"""import { motion, useScroll, useTransform } from "framer-motion";"""import { ArrowRight, Sparkles, Zap, Users, Star, TrendingUp, Shield } from "lucide-react";"""import { useRef } from "react";"import { useTranslation } from "react - i18next";"import { Button } from "@/components / ui / button";"import { GradientHeading } from "@/components / GradientHeading";"export function HeroSection () {"import { motion, useScroll, useTransform } from 'framer - motion';'import { motion, useScroll, useTransform } from "framer - motion";""

export function HeroSection() {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({

        target: containerRef, """        offset: ["start start", "end start"]"    });"""    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);"    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);"    
    const containerVariants = {;

        hidden: { opacity: 0 }, visible: {;

            opacity: 1,
            transition: {;

                staggerChildren: 0.2, delayChildren: 0.1
            }
        }
    };

    const itemVariants = {;

        hidden: { y: 30, opacity: 0 },;
        visible: {

            opacity: 1, y: 0,;
            transition: {

                duration: 0.8, """                ease: "easeOut""            }"        }
    };

    const floatingVariants = {;

        animate: {;

            y: [-15, 15, -15], rotate: [0, 5, 0], transition: {;

                duration: 4,
                repeat: Infinity, """                ease: "easeInOut""            }"        }
    };

    const pulseVariants = {;

        animate: {;

            scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5], transition: {;

                duration: 2,
                repeat: Infinity, """                ease: "easeInOut""            }"        }
    };

    const particleVariants = {;

        animate: {;

            scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3], transition: {;

                duration: 3,
                repeat: Infinity, """                ease: "easeInOut""            }"        }
    };

  const containerVariants = {;

    hidden: { opacity: 0 }, visible: {;

      opacity: 1,
      transition: {;

        staggerChildren: 0.2, delayChildren: 0.1
      }
    }
  };

  const itemVariants = {;


    hidden: {;

      y: 30, opacity: 0
    },;
    visible: {

      y: 0, opacity: 1,;
      transition: {

        duration: 0.8, """        ease: "easeOut""      }"    }
  };

  const floatingVariants = {;

    animate: {;

      y: [-15, 15, -15], rotate: [0, 5, 0], transition: {;

        duration: 4,
        repeat: Infinity, """        ease: "easeInOut""      }"    }
  };

  const pulseVariants = {;

    animate: {;

      scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5], transition: {;

        duration: 2,
        repeat: Infinity, """        ease: "easeInOut""      }"    }
  };

  const features = [;
    {
"""      icon: <Star className="w-6 h-6" />, """      text: "AI-Powered Solutions","""      color: "text-zion-cyan""    }, {""""      icon: <Zap className="w-6 h-6" />,"""      text: "24/7 Support", """      color: "text-zion-purple""    },"    {
"""      icon: <Shield className="w-6 h-6" />, """      text: "Enterprise Security","""      color: "text-zion-cyan-light""    }, {""""      icon: <Users className="w-6 h-6" />,"""      text: "Global Team", """      color: "text-zion-purple-light""    }"  ];

  const stats = ["""    { value: "500+", label: "Projects Delivered" },"""    { value: "50+", label: "Countries Served" },"""    { value: "24/7", label: "Support Available" },"""    { value: "99.9%", label: "Uptime Guarantee" }"  ];"

                {/* New stats section */}"""                <motion.div variants={itemVariants} className="mt-16 grid grid-cols-1 md: grid-cols-3 gap-8 max-w-4xl mx-auto">"                    <motion.div """                        className="text-center group" "                        whileHover={{ y: -5 }} """                        transition={{ type: "spring", stiffness: 400 }}"                    >"""                        <div className="text-4xl font-bold text-zion-cyan mb-2 group-hover:text-zion-cyan-light transition-colors">"                            10K+"                        </div>"""                        <div className="text-zion-slate-light">Active Users</div>"                    </motion.div>"
                    
                    <motion.div """                        className="text-center group" "                        whileHover={{ y: -5 }} """                        transition={{ type: "spring", stiffness: 400 }}"                    >"""                        <div className="text-4xl font-bold text-zion-purple mb-2 group-hover:text-zion-purple-light transition-colors">"                            500+"                        </div>"""                        <div className="text-zion-slate-light">AI Services</div>"                    </motion.div>"
                    
                    <motion.div """                        className="text-center group" "                        whileHover={{ y: -5 }} """                        transition={{ type: "spring", stiffness: 400 }}"                    >"""                        <div className="text-4xl font-bold text-zion-cyan-light mb-2 group-hover:text-zion-cyan transition-colors">"                            99.9%"                        </div>"""                        <div className="text-zion-slate-light">Uptime</div>"                    </motion.div>"                </motion.div>
            </motion.div>
        </section>) ;
}
'"'"""