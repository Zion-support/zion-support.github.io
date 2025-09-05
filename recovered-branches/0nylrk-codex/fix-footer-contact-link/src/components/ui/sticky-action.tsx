
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
=======
import React, {_useEffect, _useState} from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

interface StickyActionProps {_className?: string;
  children: React.ReactNode;
  showAfterScroll?: number;
<<<<<<< HEAD
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
=======
  position?: "bottom" | "top";}

export function StickyAction(_{_className, _children, _showAfterScroll = 300, _position = "bottom"}: StickyActionProps) {_const [isVisible, _setIsVisible] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    const _handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
<<<<<<< HEAD
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
=======
        setIsVisible(true);} else {_setIsVisible(false);}
    };

    window.addEventListener("scroll", handleScroll);
    return () => {_window.removeEventListener("scroll", _handleScroll);};
  }, [showAfterScroll]);

  const _positionClasses = {_bottom: "bottom-4", _top: "top-20"};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <AnimatePresence>
      {_isVisible && (
        <motion.div
<<<<<<< HEAD
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
            {children}
=======
          initial={{ opacity: 0, _y: position === "bottom" ? 20 : -20}}
          animate={_{ opacity: 1, _y: 0}}
          exit={_{ opacity: 0, _y: position === "bottom" ? 20 : -20}}
          transition={_{ duration: 0.2}}
          className={_cn(
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4", _positionClasses[position], _className
          )}
        >
          <div className="rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center">
            {_children}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
