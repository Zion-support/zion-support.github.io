
<<<<<<< HEAD
import React, { useEffect, useState } from "react",
import { cn } from "@/lib/utils",
import { motion, AnimatePresence } from "framer-motion",

interface StickyActionProps {
  className?: string,
  children: React.ReactNode,
  showAfterScroll?: number,
=======
import React, { useEffect, useState } from "react";
import {cn} from "@/lib/utils";
import {motion, AnimatePresence} from "framer-motion";

interface StickyActionProps {
  className?: string;
  children: React.ReactNode,
  showAfterScroll?: number;
>>>>>>> main
  position?: "bottom" | "top"
}

export function StickyAction({
<<<<<<< HEAD
  className,
  children,
  showAfterScroll = 300,
  position = "bottom"
}: StickyActionProps) {
  const [isVisible, setIsVisible] = useState(false),
=======
  className;
  children;
  showAfterScroll = 300;
  position = "bottom"
}: StickyActionProps) {
  const [isVisible, setIsVisible] = useState(false);
>>>>>>> main

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
<<<<<<< HEAD
    },

    window.addEventListener("scroll", handleScroll),
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showAfterScroll]),
=======
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showAfterScroll]);
>>>>>>> main

  const positionClasses = {
    bottom: "bottom-4",
    top: "top-20"
<<<<<<< HEAD
  },
=======
  };
>>>>>>> main

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
<<<<<<< HEAD
import React, { useEffect, useState } from "react",;
import { cn } from "@/lib/utils",;
import { motion, AnimatePresence } from "framer-motion",;
interface StickyActionProps {;
  className?: string,;
  children: React.ReactNode,;
  showAfterScroll?: number,;
  position?: "bottom" | "top";
}
;
export function StickyAction({;
  className,;
  children,;
  showAfterScroll = 300,;
  position = "bottom";
}: StickyActionProps) {;
  const [isVisible, setIsVisible] = useState(false),;
  useEffect(() => {;
    const handleScroll = () => {;
      if (window.scrollY > showAfterScroll) {;
        setIsVisible(true);
      } else {;
        setIsVisible(false);
      }
    },;
    window.addEventListener("scroll", handleScroll),;
    return () => {;
      window.removeEventListener("scroll", handleScroll);
    }
  }, [showAfterScroll]),;
  const positionClasses = {;
    bottom: "bottom-4",;
    top: "top-20";
  },;
  return (;
    <AnimatePresence>;
      {isVisible && (;
        <motion.div;
          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
=======
>>>>>>> main
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          transition={{ duration: 0.2 }}
          className={cn(
<<<<<<< HEAD
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4",
            positionClasses[position],
=======
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4";
            positionClasses[position];
>>>>>>> main
            className
          )}
        >
          <div className="rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center">
            {children}
<<<<<<< HEAD
          </div>;
        </motion.div>;
      )}
    </AnimatePresence>;
  );
=======
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
>>>>>>> main
}
;