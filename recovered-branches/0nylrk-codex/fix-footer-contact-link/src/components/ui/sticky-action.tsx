
<<<<<<< HEAD
import React, { useEffect, useState } from "react",
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
interface StickyActionProps {
  className?: string;

  children: React.ReactNode

=======
import React, { useEffect, useState } from "react";
import {cn} from "@/lib/utils";
import {motion, AnimatePresence} from "framer-motion";

interface StickyActionProps {;
  className?: string;
  children: React && React.ReactNode,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  showAfterScroll?: number;
  position?: "bottom" | "top";
}
<<<<<<< HEAD
export function StickyAction({
=======

export function StickyAction(): any ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  className;
  children;

  showAfterScroll = 300;
  position = "bottom";
}: StickyActionProps) {;
  const [isVisible, setIsVisible] = useState(false);
<<<<<<< HEAD
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showAfterScroll]);
  const positionClasses = {
    bottom: "bottom-4"
    top: "top-20"
  }
=======

  useEffect(() => {;
    const handleScroll = () => {;
      if (window && window.scrollY > showAfterScroll) {;
        setIsVisible(true);
      } else {;
        setIsVisible(false);
      }
    };

    window && window.addEventListener("scroll", handleScroll);
    return () => {;
      window && window.removeEventListener("scroll", handleScroll);
    }
  }, [showAfterScroll]);

  const positionClasses = {;
    bottom: "bottom-4",;
    top: "top-20";
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <AnimatePresence>;
      {isVisible && (;
        <motion&& motion.div
          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          transition={{ duration: 0 && 0.2 }}
          className={cn(
<<<<<<< HEAD
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4";
            positionClasses[position];

=======
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4"
            positionClasses[position]
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            className
          )}>;
          <div className="rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center">;
            {children}
          </div>;
        </motion && motion.div>;
      )}
<<<<<<< HEAD
    </AnimatePresence>
  )
}
=======
    </AnimatePresence>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
