import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Globe, Shield, Zap, MapPin, CheckCircle } from "lucide-react";

export function ITServiceRequestHero() {
  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
      }, 1000);
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

  const features = [
    { icon: Clock, text: "24/7 Availability", color: "text-zion-cyan" },
    { icon: Globe, text: "Global Coverage", color: "text-zion-purple" },
    { icon: Shield, text: "Certified Technicians", color: "text-zion-cyan-light" },
    { icon: CheckCircle, text: "Guaranteed Service", color: "text-zion-purple-light" }
  ];

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20 md:py-28 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-zion-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-zion-purple rounded-full blur-3xl"></div>
  return (
    <section className="bg-zion-blue-dark py-16 md:py-24 border-b border-zion-purple/20 cyber-grid relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10"></div>
      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="float">
          <GradientHeading className="mb-6 text-4xl md:text-5xl glow">
            24x7 Global IT Onsite Services
          </GradientHeading>
          <p className="text-lg text-zion-slate-light mb-8 max-w-md">
            Request professional technicians anywhere in the world, anytime you need them.
          </p>
        </div>
        <div className="bg-zion-blue-light/80 backdrop-blur-sm p-6 rounded-lg shadow-lg neon-border float">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter service location"
              className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
            />
            <Button type="submit" className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6">
              Request Service
            </Button>
          </form>
          <p className="text-xs text-center text-zion-slate-light mt-3">
            Available worldwide, 24 hours a day
          </p>
        </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5db4
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Request Free Quote
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-blue transition-colors"
          >
            View All Services
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-white mb-2">Free Consultation</div>
            <div className="text-zion-slate-light">No obligation assessment</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-2">24/7 Support</div>
            <div className="text-zion-slate-light">Always here to help</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-2">Custom Solutions</div>
            <div className="text-zion-slate-light">Tailored to your needs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { ArrowRight, Zap, Shield, Brain, Cloud } from 'lucide-react';

export const ITServiceRequestHero: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            IT Services & Solutions
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Advanced Technology</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Zion Tech Group delivers cutting-edge AI, cybersecurity, cloud, and quantum computing 
            solutions that drive innovation and accelerate your digital transformation journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Request IT Services
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </a>
            <a
              href="/services"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Explore Solutions
            </a>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm text-gray-300">AI Solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm text-gray-300">Cybersecurity</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm text-gray-300">Cloud & DevOps</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm text-gray-300">Innovation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 text-slate-800"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
