import React from 'react';
import { Link } from 'react-router-dom';

const NewContentAnnouncement: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white py-3">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
<<<<<<< HEAD

            <span className="font-bold text-lg">
              🔥 OCTOBER 2025: MASSIVE CONTENT DROP!
            </span>

=======
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="font-bold text-lg">
              🔥 OCTOBER 2025: MASSIVE CONTENT DROP!
            </span>
            <Sparkles className="w-5 h-5 animate-pulse" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
          </div>
          <span className="text-pink-100">
            10 Breakthrough Articles + 8 Revolutionary Services
          </span>
          <Link
            to="/blog"
            className="bg-white text-purple-700 px-4 py-1.5 rounded-full font-semibold hover:bg-pink-50 transition-colors flex items-center gap-1 text-sm"
          >
            Explore Now
<<<<<<< HEAD

=======
            <ArrowRight className="w-4 h-4" />
>>>>>>> cursor/fix-errors-and-merge-to-main-619a
          </Link>
        </div>
      </div>
    </div > );
};

export default NewContentAnnouncement;