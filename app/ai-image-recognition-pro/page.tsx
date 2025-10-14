import React from 'react';,

import { ArrowRight, Camera, Users, CheckCircle, Eye, Image, Target, Scan }    from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';,
import ResponsiveContainer from '../components/ResponsiveContainer';,
import FuturisticCard from '../components/FuturisticCard';,
import FuturisticButton from '../components/FuturisticButton';,

const AIImageRecognitionPro = () => {",
  const features = [",
    {",
      title: "Object Detection",
      description: "Identify and classify objects in images with high accuracy",
      icon: <Eye className="w-6 h-6" /></Eye>
      color: "from-blue-500 to-cyan-500"},
    {,

title: "Facial Recognition"}
      description: "Advanced facial recognition and analysis capabilities",
      icon: <Users className="w-6 h-6" /></Users>
      color: "from-green-500 to-emerald-500",
    },
    {,

title: "Text Extraction"}
      description: "Extract text from images using OCR technology",
      icon: <Scan className="w-6 h-6" /></Scan>
      color: "from-purple-500 to-pink-500",
    },
    {,

title: "Scene Analysis"}
      description: "Understand and analyze complex scenes and contexts",
      icon: <Image className="w-6 h-6" /></Image>
      color: "from-orange-500 to-red-500",
    }
  ];,

  const benefits = [,

    "99.2% recognition accuracy",
    "Real-time processing",
    "Multi-format support",
    "Advanced security",
    "Scalable infrastructure",
    "Easy integration"];,
import { Helmet }    from "react-helmet-async";
const HomePage = () => {",
  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Helmet><title>Home - Zion Tech Group</title><meta name="description" content="Home - Zion Tech Group" /></Helmet><div className="container mx-auto px-4 py-16"><div className="text-center"></div>
    </div>
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>
          <p className="text-gray-300 text-lg"></p>
            This page is under construction. Please check back later.,
          </p>
        </div>
    </div>
      </div>)
    </div>)
  );};,
export default HomePage;,