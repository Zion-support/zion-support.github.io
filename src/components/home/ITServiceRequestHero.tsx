import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, MapPin, Globe, Shield, Zap, CheckCircle, Users, Star } from "lucide-react";

export const ITServiceRequestHero = () => {
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Zap, value: '99.9%', label: 'Uptime' },
    { icon: Star, value: '4.9/5', label: 'Rating' },
    { icon: Shield, value: '24/7', label: 'Support' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
      }, 1500);
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
    { icon: Clock, text: "24/7 Global Support", color: "text-zion-cyan" },
    { icon: Globe, text: "Worldwide Coverage", color: "text-zion-purple-light" },
    { icon: Shield, text: "Certified Technicians", color: "text-zion-blue-light" },
    { icon: Zap, text: "Same Day Response", color: "text-zion-cyan-light" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-zion-cyan/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-zion-purple/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-zion-cyan/10 rounded-full blur-2xl"
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        {/* Hero Content */}
        <motion.div variants={itemVariants} className="mb-12">
          <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            IT Services at Your Doorstep
          </GradientHeading>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Professional IT technicians available 24/7 for on-site support, remote assistance, and emergency repairs. 
            Get same-day response and expert solutions for all your technology needs.
          </p>
        </motion.div>

        {/* Service Request Form */}
        <motion.div variants={itemVariants} className="mb-12">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="Enter your location or address"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8"
              >
                {isSubmitting ? "Requesting..." : "Request Service"}
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Success Message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
          >
            <div className="flex items-center justify-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>Service request submitted successfully!</span>
            </div>
          </motion.div>
        )}

        {/* Features Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-zion-blue-dark/30 flex items-center justify-center ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <p className="text-sm text-zion-slate-light">{feature.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-zion-cyan mb-1">{stat.value}</div>
              <div className="text-sm text-zion-slate-light">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};