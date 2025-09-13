import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  ArrowRight, 
  X, 
  Star,
  Rocket,
  Sparkles
} from "lucide-react";

export default function NewContentPromotionBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-zion-purple via-zion-purple-dark to-zion-cyan text-white py-4 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Badge className="bg-white/20 text-white border-white/30 animate-pulse">
              <Sparkles className="h-3 w-3 mr-1" />
              NEW
            </Badge>
            <Star className="h-4 w-4 text-yellow-300 animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-zion-cyan" />
            <span className="font-semibold">Revolutionary New Services Available!</span>
            <span className="hidden sm:inline text-zion-purple-light">
              Discover AI Quantum Computing, Autonomous Research, and Supply Chain Optimization
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Link to="/new-services-showcase-2025">
            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              <Zap className="h-4 w-4 mr-1" />
              Explore Now
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
          <Button 
            size="sm" 
            variant="ghost" 
            className="text-white hover:bg-white/20 p-1"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-0 right-1/3 w-1 h-1 bg-zion-cyan/50 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-yellow-300/40 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}