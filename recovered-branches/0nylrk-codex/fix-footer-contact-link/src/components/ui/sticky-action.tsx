import React, { useEffect, useState } from "react",
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
interface StickyActionProps {
  className?: string,
  children: React.ReactNode,
  showAfterScroll?: number,
  position?: "bottom" | "top"
}

  children: React.ReactNode

  showAfterScroll?: number;
import { cn } from "@/lib/utils",
import { motion, AnimatePresence } from "framer-motion",

interface StickyActionProps {
  className?: string,
  children: React.ReactNode,
  showAfterScroll?: number,
  position?: "bottom" | "top"
}
export function StickyAction({
  className,
  children,
  showAfterScroll = $2;
  position = "bottom"
}: StickyActionProps) {
  const [isVisible, setIsVisible] = useState($2);
  useEffect(() => {
    const handleScroll = $2;
    window.addEventListener($2);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showAfterScroll]),

  const positionClasses = $2;
    top: "top-20"
  },

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          animate={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, y: position = $2;
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
  )
}
