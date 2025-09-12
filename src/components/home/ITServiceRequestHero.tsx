    <section className="bg-zion-blue-dark py-16 md:py-24 border-b border-zion-purple/20 cyber-grid relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10"></div>
      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="float">
          <GradientHeading className="mb-6 text-4xl md:text-5xl glow">
            24x7 Global IT Onsite Services
          </GradientHeading>
          <p className="text-lg text-zion-slate-light mb-8 max-w-md text-center">
            Worldwide coverage and rapid dispatch of certified technicians.
          </p>
        </div>
        <div className="bg-zion-blue-light p-6 rounded-lg shadow-lg w-full max-w-md md:ml-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image
              src="/logos/zion-logo.png"
              alt="Zion logo"
              width={200}
              height={200}
              className="w-full h-auto md:w-40"
            />
            <form onSubmit={handleSubmit} className="space-y-4 flex-1">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.name_helper', 'Enter the main contact for this request.')}</p>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.email_helper', "We'll confirm your request here.")}</p>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.phone_helper', 'Include a direct line for urgent updates.')}</p>
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.company_helper', 'Who do you represent?')}</p>
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.location_helper', 'Where do you need on-site support?')}</p>
              <Textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]"
              />
              <p className="text-xs text-zion-slate-light">{t('onsite_form.details_helper', 'Share any important context for our technicians.')}</p>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105"
              >
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Request Service
              </Button>
            </form>
          </div>
          <p className="text-xs text-center text-zion-slate-light mt-3">
            {t('onsite_form.privacy_notice', 'Rest assured, your personal information stays private. We use it only to coordinate service and never share details outside our secure scheduling system with anyone.')}
          </p>
        </div>
=======
import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Globe, ArrowRight, Shield, Zap } from "lucide-react";

export function ITServiceRequestHero() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
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

  return (
    <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20 md:py-28 border-b border-zion-purple/20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-zion-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-zion-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-blue/5 rounded-full blur-3xl"></div>
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
              24x7 Global IT Onsite Services
            </GradientHeading>
            
            <p className="text-lg md:text-xl text-zion-slate-light mb-8 max-w-lg leading-relaxed">
              Request professional technicians anywhere in the world, anytime you need them. 
              Fast, reliable, and secure IT solutions for your business.
            </p>

            {/* Feature highlights */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                <span className="text-zion-cyan-light">Available 24/7 worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
                <span className="text-zion-purple-light">Certified technicians</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-zion-blue rounded-full"></div>
                <span className="text-zion-blue-light">Same-day response guarantee</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-cyan">150+</div>
                <div className="text-sm text-zion-slate-light">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-purple">24/7</div>
                <div className="text-sm text-zion-slate-light">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-blue">15min</div>
                <div className="text-sm text-zion-slate-light">Response</div>
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
                    <MapPin className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Service</h3>
                  <p className="text-zion-slate-light">Enter your location to get started</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <Input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter service location (e.g., New York, NY)"
                      className="w-full bg-white/10 border-white/30 focus:border-zion-cyan focus:ring-zion-cyan text-white placeholder-zion-slate-light rounded-xl py-4 px-4 text-lg backdrop-blur-sm"
                      required
                    />
                    <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-cyan/50" />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-lg py-4 rounded-xl shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <span className="flex items-center gap-2">
                      Request Service Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </Button>
                </form>

                {/* Trust indicators */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center gap-4 text-xs text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-zion-cyan" />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zion-purple" />
                      <span>Fast</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-3 h-3 text-zion-blue" />
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
    </section>
  );
}
