<<<<<<< HEAD
import React from 'react';

interface FuturisticGlowProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticGlow({ className = '', children }: FuturisticGlowProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function FuturisticGlow()

export default function FuturisticGlow() {
  return (
//     <>
//       <Helmet>
//         <title>Futuristic Glow - Zion Tech Group</title>
//       </Helmet>
      <div className="futuristic-glow-container">
//         <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
//         >
//           Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
</Link>
</div>
//     </>
  );
}
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
