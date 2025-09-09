import React, { useState } from "react";
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
                Global IT Services
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight font-bold">
              24x7 Global <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">IT Onsite Services</span>
            </h1>
            
            <p className="text-lg text-zion-slate-light mb-8 max-w-md leading-relaxed">
              Request professional technicians anywhere in the world, anytime you need them. 
              Our certified experts are ready to handle your IT infrastructure needs.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-zion-blue-dark/30 rounded-lg border border-zion-cyan/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-zion-slate-light text-sm font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 text-zion-slate-light">
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan">150+</div>
                <div className="text-sm">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-purple">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan-light">500+</div>
                <div className="text-sm">Certified Techs</div>
              </div>
            </div>
          </motion.div>

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
                <h3 className="text-2xl font-bold text-white mb-2">
                  Request Onsite Service
                </h3>
                <p className="text-zion-slate-light">
                  Tell us where you need help
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Service Location
                  </label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter city, address, or coordinates"
                    className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-cyan focus:ring-zion-cyan text-white placeholder-zion-slate-light/50"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service-type" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Service Type
                  </label>
                  <select
                    id="service-type"
                    className="w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg focus:border-zion-cyan focus:ring-zion-cyan text-white"
                    defaultValue=""
                  >
                    <option value="" disabled>Select service type</option>
                    <option value="hardware-repair">Hardware Repair</option>
                    <option value="network-setup">Network Setup</option>
                    <option value="system-installation">System Installation</option>
                    <option value="emergency-support">Emergency Support</option>
                    <option value="preventive-maintenance">Preventive Maintenance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: 'low', label: 'Low', color: 'bg-green-500' },
                      { value: 'medium', label: 'Medium', color: 'bg-yellow-500' },
                      { value: 'high', label: 'High', color: 'bg-red-500' }
                    ].map((level) => (
                      <label key={level.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value={level.value}
                          className="sr-only"
                          defaultChecked={level.value === 'medium'}
                        />
                        <div className={`w-4 h-4 rounded-full border-2 border-zion-slate-light ${level.color} opacity-50`}></div>
                        <span className="text-sm text-zion-slate-light">{level.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white text-lg py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-zion-cyan/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Service'}
                </Button>

                <p className="text-xs text-center text-zion-slate-light">
                  Available worldwide, 24 hours a day • Response time: 2-4 hours
                </p>
              </form>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-zion-cyan rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-zion-purple rounded-full opacity-60 animate-pulse delay-1000"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>);
}
