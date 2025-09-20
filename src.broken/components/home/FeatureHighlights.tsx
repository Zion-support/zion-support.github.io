import React from 'react';
import { motion  } from 'framer-motion';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from 'lucide-react'
import { cn } from "@/lib/utils";

      };
    };
  };

  const itemVariants = {
  hidden: { opacity: 0, y: 30,
  scale: 0.95

},
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      };
    };
  };

  const achievementVariants = {
  hidden: { opacity: 0,
  scale: 0.8

},
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 };
    };
  };

  const techVariants = {
  hidden: { opacity: 0,
  x: -20

},
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 };
    };
  };

        <motion.div

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                {feature.title}
              </h3>

        <motion.div
