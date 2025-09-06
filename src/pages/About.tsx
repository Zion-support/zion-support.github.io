import React from 'react';
import { SEO } from "../components/SEO";
import { GradientHeading } from "../components/GradientHeading";
import { ContactSection } from "../components/ContactSection";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn more about Zion Tech Group and our mission to revolutionize technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
