import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Globe, ArrowRight, Shield, Zap } from "lucide-react";
import { GradientHeading } from '../GradientHeading';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function ITServiceRequestHero() {
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
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

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20 md:py-28 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-zion-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-zion-purple rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div variants={itemVariants} className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zion-cyan/20 rounded-lg">
                <Zap className="w-6 h-6 text-zion-cyan" />
              </div>
              <span className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">
                Global IT Services
              </span>
            </div>
            
            <GradientHeading className="mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight">
              24/7 Global IT Onsite Services
            </GradientHeading>
            
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed max-w-lg">
              Request professional technicians anywhere in the world, anytime you need them. 
              Our certified experts are ready to solve your IT challenges on-site.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-zion-slate-light text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
                onClick={() => document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Service Request Form */}
          <motion.div variants={itemVariants} id="service-form">
            <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 shadow-2xl shadow-zion-cyan/10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Onsite Service</h3>
                <p className="text-zion-slate-light">Tell us where you need help</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Service Location
                  </label>
                  <Input
                    id="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter city, address, or coordinates"
                    className="w-full bg-zion-blue-dark/50 border-zion-cyan/30 focus:border-zion-cyan focus:ring-zion-cyan/20 text-white placeholder:text-zion-slate-light/50"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold py-4 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-zion-purple/25"
                >
                  {isSubmitting ? "Processing..." : "Request Service"}
                </Button>

                <p className="text-xs text-center text-zion-slate-light">
                  Available worldwide, 24 hours a day • Response within 2 hours
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom features section */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance" },
              { icon: Globe, title: "Global Reach", desc: "150+ countries covered" },
              { icon: Shield, title: "Certified Experts", desc: "Vetted professionals" },
              { icon: Zap, title: "Fast Response", desc: "2-hour response time" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-zion-slate-light text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
