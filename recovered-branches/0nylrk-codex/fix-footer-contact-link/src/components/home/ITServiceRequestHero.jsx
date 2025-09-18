<<<<<<< HEAD
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
=======

const ITServiceRequestHero: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ITServiceRequestHero</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

export default ITServiceRequestHero;
