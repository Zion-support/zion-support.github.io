import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
export function TestimonialsSection() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CTO",
            company: "TechFlow Solutions",
            content: "Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 300% and reduced costs significantly.",
            rating: 5,
            avatar: "SJ"
        },
        {
            name: "Michael Chen",
            role: "VP of Engineering",
            company: "InnovateCorp",
            content: "The team's expertise in cloud migration was exceptional. They completed our transition in half the expected time with zero downtime.",
            rating: 5,
            avatar: "MC"
        },
        {
            name: "Emily Rodriguez",
            role: "Director of IT",
            company: "Global Manufacturing Inc.",
            content: "Their cybersecurity solutions gave us peace of mind. We're now SOC 2 compliant and have a robust security posture.",
            rating: 5,
            avatar: "ER"
        },
        {
            name: "David Thompson",
            role: "CEO",
            company: "StartupXYZ",
            content: "Zion Tech Group helped us build a scalable SaaS platform from scratch. Their microservices approach was game-changing.",
            rating: 5,
            avatar: "DT"
        }
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-quantum-mesh opacity-20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say 
            about their experience working with Zion Tech Group.
          </p>
        </motion.div>
=======

const TestimonialsSection: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">TestimonialsSection</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

export default TestimonialsSection;
