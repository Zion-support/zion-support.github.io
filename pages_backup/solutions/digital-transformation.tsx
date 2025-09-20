import React from 'react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import { Rocket, RefreshCw, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
export default function DigitalTransformationPage() {
  const transformationServices = [;
    {}
      title: "Process Automation","
      description: "Streamline operations with intelligent automation","
      icon: RefreshCw,
      features: ["Workflow Automation", "Document Processing", "Task Optimization"]"
    },
    {}
      title: "Digital Strategy","
      description: "Comprehensive digital transformation roadmap","
      icon: Target,
      features: ["Strategic Planning", "Technology Assessment", "Change Management"]"
    },
    {}
      title: "Technology Integration","
      description: "Seamlessly integrate new technologies with existing systems","
      icon: Rocket,
      features: ["System Integration", "API Development", "Data Migration"]"
    },
    {}
      title: "Performance Optimization","
      description: "Enhance efficiency and drive measurable results","
      icon: TrendingUp,
      features: ["KPI Tracking", "Performance Analytics", "Continuous Improvement"]"
    }
  ];
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">digital-transformation</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export default digital-transformation;