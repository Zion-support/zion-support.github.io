<<<<<<< HEAD

interface ContentPromotionBannerProps {},
      title?: string;
description?: string;
ctaText?: string;
ctaLink?: string;
variant?: "primary" | "secondary" | "success"""
  className?: string
      const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({},)
      title = "Transform Your Business with AI", description = "Discover how our cutting-edge AI solutions can revolutionize your operations and drive unprecedented growth.", ctaText = "Get Started Today", ctaLink = "/contact", variant = "primary", className = ""}) => {},""
      const  getVariantStyles = () => {},
      switch (variant) {},
      case "primary":""
        return "bg-gradient-to-r from-cyan-500 to-purple-600"""
      case "secondary":""
        return "bg-gradient-to-r from-blue-500 to-indigo-600"""
      case "success":""
        return "bg-gradient-to-r from-green-500 to-emerald-600"""
      default:
        return "bg-gradient-to-r from-cyan-500 to-purple-600"""


  const  getIcon = () => {}
}switch (variant) {},
      case "primary":""
        return <className="w-6 h-6" />""
      case "secondary":""
        return <Star: className ="w-6 h-6" />""
      case "success":""
        return <Star: className ="w-6 h-6" />""
      default:
        return <className="w-6 h-6" />""


  return ()
    <divclassName={`relative overflow-hidden rounded-lg p-8 text-white ${getVariantStyles()} ${className}`};>
    ></div
      <div  className ="relative z-10"></div>""
        <div  className ="flex items-center justify-center mb-4">{getIcon()}</div>""
        <h2  className ="text-3xl font-bold text-center mb-4">{title}</h2>""
        <p  className ="text-lg text-center mb-6 opacity-90 max-w-2xl mx-auto"></p>""
          {description}
        </p>
        <div  className ="text-center"></div>""
            to={ctaLink},
      className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"""
          ></>


          </>
        </div>
      </div>
    </>



=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContentPromotionBanner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ContentPromotionBanner - Zion Tech Group</title>
        <meta name="description" content="Advanced ContentPromotionBanner solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            ContentPromotionBanner <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive ContentPromotionBanner solutions designed to transform your business
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - ContentPromotionBanner Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
