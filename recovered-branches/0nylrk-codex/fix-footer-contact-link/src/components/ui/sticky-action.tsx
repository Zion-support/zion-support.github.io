
import React, { useEffect, useState } from "react",
import { cn } from "@/lib/utils",
import { motion, AnimatePresence } from "framer-motion",

interface StickyActionProps {
  className?: string,
  children: React.ReactNode,
  showAfterScroll?: number,
  position?: "bottom" | "top"
interface StickyActionProps {className?: string;
  children: React.ReactNode;
  showAfterScroll?: number;
  position?: &quot;bottom&quot; | &quot;top&quot
}

export function StickyAction({
  className,
  children,
  showAfterScroll = 300,
  position = &quot;bottom&quot
}: StickyActionProps) {
  const [isVisible, setIsVisible] = useState(false),
  useEffect_(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    },

    window.addEventListener("scroll", handleScroll),
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showAfterScroll]),

  const positionClasses = {
    bottom: "bottom-4",
    top: "top-20"
  },        setIsVisible(true)} else {setIsVisible(false)}
    };

    window.addEventListener("scroll", handleScroll);
    return () => {window.removeEventListener("scroll", handleScroll)}
  }, [showAfterScroll]);

  const positionClasses = {bottom: "bottom-4", top: "top-20"};

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div,
initial={{ opacity: 0, y: position === &quot;bottom&quot; ? 20 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === &quot;bottom&quot; ? 20 : -20 }}
          transition={{ duration: 0.2 }}
          className={cn(
            &quot;fixed left-0 right-0 z-50 mx-auto flex justify-center px-4&quot;,
            positionClasses[position],
            className
          )}
        >
          <div className=&quot;rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center&quot;>
            {children}          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
