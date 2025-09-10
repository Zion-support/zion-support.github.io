<<<<<<< HEAD
;export function ITServiceRequestHero(...args[]): "{;
  const [location", setLocation] = useState<any>("");
  const [isSubmitting, setIsSubmitting] = useState<any>(false);
;
  const handleSubmit = async "e": "React.FormEvent {;    e.preventDefault();
    if(location.trim()) {;      setIsSubmitting(true);
      // Simulate API call
      setTimeout(: unknown {
        setIsSubmitting(false);
        router(`/it-onsite-services?location = ${encodeURIComponent(location)"}`)}, 1000)}}}}}}}}}};
;
  const containerVariants = {;
  "hidden": "{ "opacity": 0",;
  "y": "2 0;
"},;
    "visible": "{;
      "opacity": 1",;
      "y": "0",;
      "transition": "{;
        "duration": 0.6",;
        "staggerChildren": "0.2;
      "};
    };
  };
;
  const itemVariants = {;
  "hidden": "{ "opacity": 0",;
  "y": "2 0;
"},;
    "visible": "{;
      "opacity": 1",;
      "y": "0",;
      "transition": "{ "duration": 0.5 "};
    };
  };
;
  const features = [{ icon: Cloc k, text: "24/7 Availability", color: "text-zion-cyan" },;
    { icon: Glob e, text: "Global Coverage", color: "text-zion-purple" },;
<<<<<<< HEAD
    { icon: Shiel d, text: "Certified Technicians", color: "text-zion-cyan-light" }, { icon: Za p, text: "Fast Response", color: "text-zion-purple-light" };
=======
    { icon: Shiel d, text: "Certified Technicians", color: "text-zion-cyan-light" }, { icon: Za p, text: "Fast Response", color: "text-zion-purple-light" };
  ];
import React, { useState } from 'react';';';
import { motion  } from 'framer-motion';';';
;
import React, { useState } from 'react';
import { motion  } from 'framer-motion';  const features = [{ "icon": "Cloc k", "text": "24/7 Availability", "color": "text-zion-cyan" },;
    { "icon": "Glob e", "text": "Global Coverage", "color": "text-zion-purple" },;
    { "icon": "Shiel d", "text": "Certified Technicians", "color": "text-zion-cyan-light" }, { "icon": "Za p", "text": "Fast Response", "color": "text-zion-purple-light" };
        router(`/it-onsite-services?location = ${encodeURIComponent(location)}`)}, 1000)}}}}}}}}}};
  const containerVariants = {
  hidden: { opacity: 0,
  y: 2 0
},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      };
    };
  };
  const itemVariants = {
  hidden: { opacity: 0,
  y: 2 0
},
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 };
    };
  };
  const features = [{ icon: Cloc k, text: "24/7 Availability", color: "text-zion-cyan" },
    { icon: Glob e, text: "Global Coverage", color: "text-zion-purple" },
    { icon: Shiel d, text: "Certified Technicians", color: "text-zion-cyan-light" }, { icon: Za p, text: "Fast Response", color: "text-zion-purple-light" };
  ];
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { Link  } from 'react-router-dom';
;
,";
    { "icon": "Glob e", "text": "Global Coverage", "color": "text-zion-purple" },";
    { "icon": "Shiel d", "text": "Certified Technicians", "color": "text-zion-cyan-light" },;";
    { "icon": "Za p", "text": "Fast Response", "color": "text-zion-purple-light" };
  ];
;
export function ITServiceRequestHero("props": "any) {;
  return (";
    <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 relative overflow-hidden">;
      {/* Background Elements */"}";
      <div className="absolute inset-0">";
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>";
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>;
      </div>;
      <motion.div";
        className="container mx-auto px-4 relative z-10";
        variants={containerVariants}";
        initial="hidden";
        whileInView="visible";
        viewport={{ once: tru e }}
"
        <div className="grid grid-cols-1 lg: gri d-cols-2 gap-16 items-center">
          {/* Left content */}"
          <motion.div variants={itemVariants} className="text-white">"
            <div className="flex items-center gap-3 mb-6">"
              <div className="p-2 bg-zion-cyan/20 rounded-lg">"
                <Zap className="w-6 h-6 text-zion-cyan"   />
              </div>"              <span className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">
=======
import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Globe, Shield, Zap, MapPin } from "lucide-react";
export function ITServiceRequestHero() {
    const [location, setLocation] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (location.trim()) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
            }, 1000);
        }
    };
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };
    const features = [
        { icon: Clock, text: "24/7 Availability", color: "text-zion-cyan" },
        { icon: Globe, text: "Global Coverage", color: "text-zion-purple" },
        { icon: Shield, text: "Certified Technicians", color: "text-zion-cyan-light" },
        { icon: Zap, text: "Fast Response", color: "text-zion-purple-light" }
    ];
    return (<section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20 md:py-28 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-zion-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-zion-purple rounded-full blur-3xl"></div>
      </div>

      <motion.div className="container mx-auto px-4 relative z-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div variants={itemVariants} className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zion-cyan/20 rounded-lg">
                <Zap className="w-6 h-6 text-zion-cyan"/>
              </div>
              <span className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">
>>>>>>> origin/backup-improvements-20250827-015311
                Global IT Services
              </span>
            </div>
"
            <GradientHeading className="mb-6 text-4xl md: tex t-5xl lg: tex t-6xl leading-tight">
              24/7 Global IT Onsite Services
            </GradientHeading>
"';
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl leading-relaxed">';';
              Get professional IT technicians anywhere in the world, anytime you need them.'';';
              From emergency repairs to scheduled maintenance, we're there when you need us most.</p>
"
            <div className="space-y-4 mb-8">"
              <div className="flex items-center gap-3">"
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">"
                  <span className="text-white text-sm">✓</span>
                </div>"
                <span className="text-gray-200">24/7 Technical Support</span>
              </div>"
              <div className="flex items-center gap-3">"
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">"
                  <span className="text-white text-sm">✓</span>
                </div>"
                <span className="text-gray-200">Certified IT Professionals</span>
              </div>"
              <div className="flex items-center gap-3">"
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">"
                  <span className="text-white text-sm">✓</span>
                </div>"
                <span className="text-gray-200">Custom Solutions for Your Business</span>
              </div>
            </div>
"';
            <div className="flex flex-col sm: fle x-row gap-4">';';
              <Button'';';
                onClick={() => document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' })}"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue hover: fro m-zion-cyan-dark hover: t o-zion-blue-dark text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover: shado w-xl transition-all duration-300"
                Request Service Now"
                <MapPin className="w-5 h-5 ml-2"   />              </Button>
              <Button"
                variant="outline"
                className="border-zion-cyan/30 text-zion-cyan hover: b g-zion-cyan/10 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                Learn More
              </Link>
            </div>
          </motion.div>
<<<<<<< HEAD
          <motion.div
            initial = {
  { opacity: 0,
  x: 3 0        viewport={{ "once": "tru e "}}
";
        <div className="grid grid-cols-1 "lg": "gri d-cols-2 gap-16 items-center">;
          {/* Left content */"}";
          <motion.div variants={itemVariants} className="text-white">";
            <div className="flex items-center gap-3 mb-6">";
              <div className="p-2 bg-zion-cyan/20 rounded-lg">";
                <Zap className="w-6 h-6 text-zion-cyan"   />;
              </div>"              <span className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">;
                Global IT Services;
              </span>;
            </div>;
";
            <GradientHeading className="mb-6 text-4xl "md": "tex t-5xl "lg": tex t-6xl leading-tight">;
              24/7 Global IT Onsite Services;
            </GradientHeading>;
";
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl leading-relaxed">;
              Get professional IT technicians anywhere in the world", anytime you need them.';
              From emergency repairs to scheduled maintenance, we're there when you need us most.</p>;
";
            <div className="space-y-4 mb-8">";
              <div className="flex items-center gap-3">";
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">";
                  <span className="text-white text-sm">✓</span>;
                </div>";
                <span className="text-gray-200">24/7 Technical Support</span>;
              </div>";
              <div className="flex items-center gap-3">";
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">";
                  <span className="text-white text-sm">✓</span>;
                </div>";
                <span className="text-gray-200">Certified IT Professionals</span>;
              </div>";
              <div className="flex items-center gap-3">";
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">";
                  <span className="text-white text-sm">✓</span>;
                </div>";
                <span className="text-gray-200">Custom Solutions for Your Business</span>;
              </div>;
            </div>;
";
            <div className="flex flex-col "sm": "fle x-row gap-4">;
              <Button';
                onClick={() => document.getElementById('service-form')?.scrollIntoView({ "behavior": 'smooth' "})}";
                className="bg-gradient-to-r from-zion-cyan to-zion-blue "hover": "fro m-zion-cyan-dark "hover": t o-zion-blue-dark text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg "hover": shado w-xl transition-all duration-300";
                Request Service Now";
                <MapPin className="w-5 h-5 ml-2"   />              </Button>;
              <Button";
                variant="outline";
                className="border-zion-cyan/30 text-zion-cyan "hover": b g-zion-cyan/10 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300";
                Learn More;
              </Link>;
            </div>;
          </motion.div>;
          <motion.div;
            initial = {;
  { opacity: 0,;
  x: 3 0;
}}    </section>;
  )}
'"`
</motion>
</Button>
</motion>
</any>';
</any>;';;';
=======

          {/* Right form */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Glassmorphism form container */}
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-zion-cyan"/>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Service</h3>
                  <p className="text-zion-slate-light">Enter your location to get started</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter service location (e.g., New York, NY)" className="w-full bg-white/10 border-white/30 focus:border-zion-cyan focus:ring-zion-cyan text-white placeholder-zion-slate-light rounded-xl py-4 px-4 text-lg backdrop-blur-sm" required/>
                    <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan/50"/>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-lg py-4 rounded-xl shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 group">
                    <span className="flex items-center gap-2">
                      Request Service Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"/>
                    </span>
                  </Button>
                </form>

                {/* Trust indicators */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center gap-4 text-xs text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-zion-cyan"/>
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zion-purple"/>
                      <span>Fast</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-3 h-3 text-zion-blue"/>
                      <span>Global</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-zion-cyan/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-zion-purple/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>);
}
>>>>>>> origin/backup-improvements-20250827-015311
>>>>>>> 51ecdee898e0f4ef436b73e6c8197c3d4a98485c
