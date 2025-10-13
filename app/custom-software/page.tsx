<<<<<<< HEAD
<<<<<<< HEAD
export default function CustomSoftware() {
=======
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CustomSoftwareZionTechGroup() {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>CustomSoftware - Zion Tech Group</title>
        <meta name="description" content="Advanced customsoftware solutions" />
=======
import React from 'react';
import { Helmet } from 'react-helmet-async'
const CustomSoftwarePage: React.FC = () => {
  return (
    <>
  <Helmet />
        <title>Custom Software Development - Zion Tech Group</title>
        <meta name="description" content="Tailored custom software solutions designed specifically for your business needs including web applications, mobile apps, and enterprise software." />
        <meta name="keywords" content="custom software development, tailored solutions, web applications, mobile apps, enterprise software, bespoke development" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Custom Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive customsoftware solutions designed to transform your business
          </p>
        </div>
<<<<<<< HEAD
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - CustomSoftware Solutions</p>

=======
      </div>
    </>
  )
}

export default CustomSoftwarePage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
