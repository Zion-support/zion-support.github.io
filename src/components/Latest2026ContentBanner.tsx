import React from 'react';
<<<<<<< HEAD

const Latest2026ContentBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Latest2026 Content Banner
        </h2>
        <p className="text-lg mb-6">
          This component is being restored. Please check back later for full functionality.
        </p>
=======
import { Link } from 'react-router-dom';

const Latest2026ContentBanner: React.FC = () => {
  return (
    <div className="latest-2026-content-banner">
      <div className="banner-content">
        <h2>Latest 2026 Content</h2>
        <p>
          Discover the newest content and innovations for 2026.
        </p>
        <Link to="/blog/latest-2026">
          Explore Latest Content
        </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-99e9
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Latest2026ContentBanner;
=======
export default Latest2026ContentBanner;
>>>>>>> cursor/fix-errors-and-merge-to-main-99e9
