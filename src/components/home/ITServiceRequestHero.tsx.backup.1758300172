import React, { useState } from "react";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Globe, Shield, CheckCircle } from "lucide-react";

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
    { icon: Clock, text: "24/7 Availability", color: "text-zion-cyan" },
    { icon: Globe, text: "Global Coverage", color: "text-zion-purple" },
    { icon: Shield, text: "Certified Technicians", color: "text-zion-cyan-light" },
    { icon: CheckCircle, text: "Guaranteed Service", color: "text-zion-purple-light" }
  ];

  return (
    <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light py-16 md:py-24 border-b border-zion-purple/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
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
