import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO, TechCorp Solutions",
    company: "TechCorp Solutions",
    avatar: "👩‍💼",
    rating: 5,
    content: "Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions reduced our operational costs by 40% and improved system reliability to 99.9%. The team's expertise in quantum computing and blockchain integration is unmatched.",
    category: "AI & Infrastructure",
    results: ["40% cost reduction", "99.9% uptime", "3x faster deployment"]
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "VP Engineering, FinTech Pro",
    company: "FinTech Pro",
    avatar: "👨‍💻",
    rating: 5,
    content: "The quantum neural network platform they built for us revolutionized our trading algorithms. We're seeing 25% better prediction accuracy and processing speeds that are 10x faster than traditional systems. Game-changing technology.",
    category: "Quantum Computing",
    results: ["25% better accuracy", "10x faster processing", "Real-time analytics"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    position: "Research Director, BioTech Innovations",
    company: "BioTech Innovations",
    avatar: "👩‍🔬",
    rating: 5,
    content: "Their AI-powered research assistant has accelerated our drug discovery process by 60%. The platform's ability to analyze complex biological data and generate insights has been invaluable to our breakthrough research.",
    category: "AI Research",
    results: ["60% faster discovery", "Advanced analytics", "Breakthrough insights"]
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Operations Manager, Manufacturing Plus",
    company: "Manufacturing Plus",
    avatar: "👨‍🏭",
    rating: 5,
    content: "The autonomous business operations platform streamlined our entire manufacturing process. We've seen a 35% increase in efficiency and 50% reduction in downtime. The IoT integration and real-time monitoring are exceptional.",
    category: "Manufacturing IoT",
    results: ["35% efficiency gain", "50% less downtime", "Real-time monitoring"]
  },
  {
    id: 5,
    name: "Lisa Wang",
    position: "Security Director, SecureNet",
    company: "SecureNet",
    avatar: "👩‍💻",
    rating: 5,
    content: "Their zero-trust security architecture and SOC 2 compliance automation have made our security posture bulletproof. We've achieved 100% compliance with all industry standards and zero security incidents.",
    category: "Cybersecurity",
    results: ["100% compliance", "Zero incidents", "Automated security"]
  }
];

const categories = ["All", "AI & Infrastructure", "Quantum Computing", "AI Research", "Manufacturing IoT", "Cybersecurity"];

export function InteractiveTestimonials() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const filteredTestimonials = selectedCategory === "All" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const currentTestimonial = filteredTestimonials[selectedTestimonial];

  const nextTestimonial = () => {
    setSelectedTestimonial((prev) => 
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setSelectedTestimonial((prev) => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-advance testimonials
  React.useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real clients. Discover how we've transformed businesses
            across industries with our innovative technology solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can transform your business with innovative
              technology solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200">
                Start Your Project
                <Award className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-medium transition-colors duration-200">
                Schedule Consultation
                <Users className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}