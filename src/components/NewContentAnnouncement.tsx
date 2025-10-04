<<<<<<< HEAD
import React from "react";

const NewContentAnnouncement: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">NewContentAnnouncement</h2>
      <p className="text-gray-400">NewContentAnnouncement component</p>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const NewContentAnnouncement: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white py-3">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="font-bold text-lg">
              🔥 OCTOBER 2025: MASSIVE CONTENT DROP!
            </span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <span className="text-pink-100">
            10 Breakthrough Articles + 8 Revolutionary Services
          </span>
          <Link
            to="/blog"
            className="bg-white text-purple-700 px-4 py-1.5 rounded-full font-semibold hover:bg-pink-50 transition-colors flex items-center gap-1 text-sm"
          >
            Explore Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
    </div>
  );
};

<<<<<<< HEAD
export default NewContentAnnouncement;
=======
export default NewContentAnnouncement;
>>>>>>> 83e4988d0b484747cc68fa307caba20f45af70a7
