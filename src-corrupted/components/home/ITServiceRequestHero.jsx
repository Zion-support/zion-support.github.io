<<<<<<< HEAD
import React, {useState} from "react";
import {GradientHeading} from "@/components/GradientHeading";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {Clock, Globe, Shield, Zap, MapPin, ArrowRight} from 'lucide-react';
export function ITServiceRequestHero(props: any) {
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (props: any) => {
    e.preventDefault();
    if (!location.trim()) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate(`/it-onsite-services?location=${encodeURIComponent(location)}`);
    }, 1000);
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
    {icon: Clock, text: "24/7 Availability", color: "text-zion-cyan"},
    {icon: Globe, text: "Global Coverage", color: "text-zion-purple"},
    {icon: Shield, text: "Certified Technicians", color: "text-zion-cyan-light"},
    {icon: Zap, text: "Fast Response", color: "text-zion-purple-light"}
  ];
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const ITServiceRequestHero: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ITServiceRequestHero</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ITServiceRequestHero;
