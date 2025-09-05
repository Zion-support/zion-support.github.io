
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from "react",
import { cn } from "@/lib/utils",
import { motion, AnimatePresence } from "framer-motion",

interface StickyActionProps {
  className?: string,
  children: React.ReactNode,
  showAfterScroll?: number,
  position?: "bottom" | "top"
=======
import React, { useEffect, useState } from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { motion, AnimatePresence } from &quot;framer-motion&quot;;

interface StickyActionProps {
  className?: string;
  children: React.ReactNode;
  showAfterScroll?: number;
  position?: &quot;bottom&quot; | &quot;top&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

export function StickyAction({
  className,
  children,
  showAfterScroll = 300,
  position = &quot;bottom&quot;
}: StickyActionProps) {
  const [isVisible, setIsVisible] = useState(false),

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    },

<<<<<<< HEAD
    window.addEventListener("scroll", handleScroll),
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showAfterScroll]),

  const positionClasses = {
    bottom: "bottom-4",
    top: "top-20"
  },
=======
    window.addEventListener(&quot;scroll&quot;, handleScroll);
    return () => {
      window.removeEventListener(&quot;scroll&quot;, handleScroll);
    };
  }, [showAfterScroll]);

  const positionClasses = {
    bottom: &quot;bottom-4&quot;,
    top: &quot;top-20&quot;
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: position === &quot;bottom&quot; ? 20 : -20 }}
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === &quot;bottom&quot; ? 20 : -20 }}
          transition={{ duration: 0.2 }}
<<<<<<< HEAD
          className={cn(
            &quot;fixed left-0 right-0 z-50 mx-auto flex justify-center px-4&quot;,
            positionClasses[position],
            className
          )}
        >
          <div className=&quot;rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center&quot;>
=======
          className={cn(;
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4";
            positionClasses[position];
            className;
          )}
        >;
          <div className="rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            {children}
          </div>;
        </motion.div>;
      )}
    </AnimatePresence>;
  );
}
;