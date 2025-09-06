
<<<<<<< HEAD



=======




import React, { useEffect, useState } from "react";
import {cn} from "@/lib/utils";
import {motion, AnimatePresence} from "framer-motion";

interface StickyActionProps {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  className?: string;
  children: React && React.ReactNode,;

  showAfterScroll?: number;
<<<<<<< HEAD


import { cn } from "@/lib/utils",
import { motion, AnimatePresence } from "framer-motion",

interface StickyActionProps {
  className?: string,
  children: React.ReactNode,
  showAfterScroll?: number,



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  position?: "bottom" | "top"
}
export function StickyAction({

=======
  position?: "bottom" | "top";
}


export function StickyAction(): any ({;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  className;
  children;

  showAfterScroll = 300;
  position = "bottom";
}: StickyActionProps) {;
  const [isVisible, setIsVisible] = useState(false);
  className,
  children,
  showAfterScroll = 300,
  position = "bottom"
}: StickyActionProps) {
  const [isVisible, setIsVisible] = useState(false),

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true)

      } else {
        setIsVisible (false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener ("scroll", handle_scroll);
    }
  }, [showAfterScroll]);
    },

    window.addEventListener("scroll", handleScroll),
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showAfterScroll]),

  const positionClasses = {
    bottom: "bottom-4"
    top: "top-20"
  }
  },

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


=======


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4"
            positionClasses[position]

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
            className
          )}>;
          <div className="rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center">;
            {children}
          </div>;
        </motion && motion.div>;
      )}

    </AnimatePresence>;
  );
}


