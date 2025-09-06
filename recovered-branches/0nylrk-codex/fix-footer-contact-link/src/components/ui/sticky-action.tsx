
<<<<<<< HEAD
import React, { useEffect, useState } from "react",
<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
=======
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import {cn} from "@/lib/utils";
import {motion, AnimatePresence} from "framer-motion";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface StickyActionProps {
  className?: string;

  children: React.ReactNode

  showAfterScroll?: number;
<<<<<<< HEAD
=======
=======
  position?: "bottom" | "top"
}

export function StickyAction({;
  className;
  children;
  showAfterScroll = 300;
=======
import React, { useEffect, useState } from "react",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { cn } from "@/lib/utils",
import { motion, AnimatePresence } from "framer-motion",

interface StickyActionProps {
  className?: string,
  children: React.ReactNode,
  showAfterScroll?: number,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  position?: "bottom" | "top"
}
export function StickyAction({
<<<<<<< HEAD
  className;
  children;

  showAfterScroll = 300;
  position = "bottom"
}: StickyActionProps) {
  const [isVisible, setIsVisible] = useState(false);
=======
  className,
  children,
  showAfterScroll = 300,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  position = "bottom"
}: StickyActionProps) {
  const [isVisible, setIsVisible] = useState(false),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
<<<<<<< HEAD
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showAfterScroll]);
=======
    },

    window.addEventListener("scroll", handleScroll),
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showAfterScroll]),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  const positionClasses = {
    bottom: "bottom-4"
    top: "top-20"
<<<<<<< HEAD
  }
=======
  },

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4";
            positionClasses[position];
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            className
          )}
        >
          <div className="rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}