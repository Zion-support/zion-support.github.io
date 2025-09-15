
<<<<<<< HEAD
import React{ useEffectuseState } from "react";
import { cn } from "@/lib/utils";
import { motionAnimatePresence } from "framer-motion";
=======
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
>>>>>>> origin/auto/autonomy-17186719616

interface StickyActionProps {
  className?: string;
  children: React.ReactNode;
  showAfterScroll?: number;
  position?: "bottom" | "top";
}

export function StickyAction({
  className,
  children,
  showAfterScroll = 300,
  position = "bottom"
}: StickyActionProps) {
<<<<<<< HEAD
  const [isVisiblesetIsVisible] = useState(false);
=======
  const [isVisible, setIsVisible] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

<<<<<<< HEAD
    window.addEventListener("scroll"handleScroll);
    return () => {
      window.removeEventListener("scroll"handleScroll);
    };
  }[showAfterScroll]);
=======
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAfterScroll]);
>>>>>>> origin/auto/autonomy-17186719616

  const positionClasses = {
    bottom: "bottom-4",
    top: "top-20"
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0y: position === "bottom" ? 20 : -20 }}
          animate={{ opacity: 1y: 0 }}
          exit={{ opacity: 0y: position === "bottom" ? 20 : -20 }}
=======
          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
>>>>>>> origin/auto/autonomy-17186719616
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4",
            positionClasses[position],
            className
          )}
        >
          <div className="rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
