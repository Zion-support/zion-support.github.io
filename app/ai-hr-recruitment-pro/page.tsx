import React from 'react';,

import { ArrowRight, Users, CheckCircle, TrendingUp, Clock, UserCheck, FileText, Target }    from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';,
import ResponsiveContainer from '../components/ResponsiveContainer';,
import FuturisticCard from '../components/FuturisticCard';,
import FuturisticButton from '../components/FuturisticButton';,

const AIHRRecruitmentPro = () => {",
  const features = [",
    {",
      title: "AI Resume Screening",
      description: "Automatically screen and rank resumes using advanced AI algorithms",
      icon: <FileText className="w-6 h-6" /></FileText>
      color: "from-blue-500 to-cyan-500"},
    {,

title: "Candidate Matching"}
      description: "Match candidates to job requirements with 95% accuracy",
      icon: <Target className="w-6 h-6" /></Target>
      color: "from-green-500 to-emerald-500",
    },
    {,

title: "Interview Scheduling"}
      description: "Automated interview scheduling and calendar management",
      icon: <Clock className="w-6 h-6" /></Clock>
      color: "from-purple-500 to-pink-500",
    },
    {,

title: "Talent Analytics"}
      description: "Comprehensive analytics on recruitment performance and trends",
      icon: <TrendingUp className="w-6 h-6" /></TrendingUp>
      color: "from-orange-500 to-red-500",
    }
  ];,

  const benefits = [,

    "60% faster hiring process",
    "95% candidate matching accuracy",
    "Automated resume screening",
    "Intelligent interview scheduling",
    "Comprehensive talent analytics",
    "Reduced bias in hiring"];,
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