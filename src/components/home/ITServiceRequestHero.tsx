import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Globe, Shield } from "lucide-react";

export function ITServiceRequestHero() {
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitting(false);
      navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
    }
  };

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Round-the-clock support worldwide"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Coverage",
      description: "Technicians available in 150+ countries"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Experts",
      description: "Vetted and certified professionals"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20 md:py-28 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GradientHeading className="mb-6 text-4xl md:text-6xl font-bold leading-tight">
              24x7 Global IT Onsite Services
            </GradientHeading>
            
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Get professional IT technicians anywhere in the world, anytime you need them. 
              From emergency repairs to scheduled maintenance, we've got you covered.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                  <span className="text-zion-slate-light font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-zion-blue-light/10 to-zion-purple/10 backdrop-blur-sm p-8 rounded-2xl border border-zion-purple/20 shadow-2xl shadow-zion-purple/10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Service</h3>
                <p className="text-zion-slate-light">Enter your location to get started</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter service location (city, country)"
                    className="bg-zion-blue-dark/50 border-zion-purple/30 focus:border-zion-purple focus:ring-zion-purple/20 text-white placeholder-zion-slate-light text-lg py-4 px-6 rounded-xl h-14"
                    required
                  />
                  <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-purple/50" />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !location.trim()}
                  className="w-full bg-gradient-to-r from-zion-purple via-zion-purple-dark to-zion-purple hover:from-zion-purple-light hover:via-zion-purple hover:to-zion-purple-dark text-lg py-4 rounded-xl h-14 font-semibold shadow-lg shadow-zion-purple/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    'Request Service Now'
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-zion-slate-light">
                  Available worldwide, 24 hours a day
                </p>
                <div className="flex items-center justify-center mt-2 text-zion-purple/60">
                  <div className="w-2 h-2 bg-zion-purple rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs">Average response time: 15 minutes</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-zion-purple rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-zion-cyan rounded-full opacity-60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}