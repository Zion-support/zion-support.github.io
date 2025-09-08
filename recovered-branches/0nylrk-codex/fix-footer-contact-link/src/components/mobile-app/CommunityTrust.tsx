


import React from "react",
import { Star } from "lucide-react",




export const CommunityTrust: React.FC = () => {
  // Stats display with social proof
  const stats = [
    { value: "4.8", label: "App Store Rating" }
    { value: "50K+", label: "Downloads" }
    { value: "96%", label: "User Satisfaction" }







    { value: "12M+", label: "Matches Made" }

  ],




  return (

import React from './react';
import { Star  } from './lucide-react';
export const CommunityTrust: React.FC = () => {
  // Stats display with social proof;
  const stats = [;
    { value: "4.8", label: "App Store Rating" },
    { value: "50K+", label: "Downloads" },
    { value: "96%", label: "User Satisfaction" },



        {/* Stats Grid */}
        <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto mb - 16">;
          {stats.map ((stat, index) => (






        {/* Rating display */}"
        <div className="max-w-3xl mx-auto bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6">"
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (

