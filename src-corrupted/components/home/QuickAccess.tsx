<<<<<<< HEAD
import React from 'react',

const QuickAccess: React.FC = () => {,
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">QuickAccess</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
  ),};
export default QuickAccess;
=======
import React, { useState } from 'react';
import { motion  } from 'framer-motion';
export default function Page(props: any) {
,"
    { name: "Consulting", count: 6, color: "from-yellow-500 to-orange-500" },"
    { name: "Innovation", count: 1 0, color: "from-green-500 to-teal-500" },;"
    { name: "Business", count: 1 4, color: "from-indigo-500 to-purple-500" };      scale: 1,;
      transition: {
        duration: 0.5,;"
        ease: "easeOut"}}};

  const hoverVariants = {
  hover: {
      y: -8,      scale: 1.02,
      transition: {

        duration: 0.3,;"  ease: "easeOut";
      ;
}}};

const QuickAccess: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">QuickAccess</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default QuickAccess;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
