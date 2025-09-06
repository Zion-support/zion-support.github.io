<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx


<<<<<<< HEAD
interface StickyActionProps {
=======



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx
import React, { useEffect, useState } from "react";
import {cn} from "@/lib/utils";
import {motion, AnimatePresence} from "framer-motion";
interface StickyActionProps {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  className?: string;
  children: React && React.ReactNode,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx
  showAfterScroll?: number;
<<<<<<< HEAD

=======

import React, { useEffect, useState } from "react",
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import {cn} from "@/lib/utils";
import {motion, AnimatePresence} from "framer-motion";
interface StickyActionProps {
  className?: string;

  children: React.ReactNode

  showAfterScroll?: number;
  position?: "bottom" | "top"
}

export function StickyAction({;
  className;
  children;
  showAfterScroll = 300;
import React, { useEffect, useState } from "react",
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { cn } from "@/lib/utils",
import { motion, AnimatePresence } from "framer-motion",

interface StickyActionProps {
  className?: string,
  children: React.ReactNode,
  showAfterScroll?: number,
<<<<<<< HEAD
<<<<<<< HEAD

  position?: "bottom" | "top"
}
export function StickyAction({

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  position?: "bottom" | "top"
}
export function StickyAction({
  className;
  children;

  showAfterScroll = 300;
  position = "bottom"
}: StickyActionProps) {
  const [isVisible, setIsVisible] = useState(false);
  className,
  children,
  showAfterScroll = 300,
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  position = "bottom"
}: StickyActionProps) {
  const [isVisible, setIsVisible] = useState(false),

<<<<<<< HEAD
<<<<<<< HEAD
=======
  position?: "bottom" | "top";
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx


export function StickyAction(): any ({;

========
export function StickyAction(): any ({;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx
  className;
  children;
  showAfterScroll = 300;
  position = "bottom";
}: StickyActionProps) {;
  const [isVisible, setIsVisible] = useState(false);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true)
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx
import React, { useEffect, useState } from './react';
import { cn } from '@/lib / utils';
import { motion, AnimatePresence } from './framer-motion';
interface StickyActionProps {
  class_name?: string;
  children: React.ReactNode,
  showAfterScroll?: number;
  position?: "bottom" | "top";
}
export /**
 * StickyAction - Function description
 */
function StickyAction() {
  const [is_visible, setIsVisible] = useState (false);
;
  useEffect (() => {
    const handle_scroll = () =>: any {
      // Check condition
if ( {) {
  $2
}
        setIsVisible (true);
      } else {
        setIsVisible (false);
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx
<<<<<<< HEAD

  const positionClasses = {
    bottom: "bottom-4"
    top: "top-20"

=======

;
    window.addEventListener ("scroll", handle_scroll);

========
    }
;
    window.addEventListener ("scroll", handle_scroll);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx
    return () => {
      window.removeEventListener ("scroll", handle_scroll);
    }
  }, [showAfterScroll]);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx


=======

=======
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showAfterScroll]);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    },

    window.addEventListener("scroll", handleScroll),
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showAfterScroll]),

<<<<<<< HEAD
<<<<<<< HEAD

  const positionClasses = {
    bottom: "bottom-4"
    top: "top-20"

  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const positionClasses = {
    bottom: "bottom-4"
    top: "top-20"
  }
  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx
  useEffect(() => {;
    const handleScroll = () => {;
      if (window && window.scrollY > showAfterScroll) {;
=======
  useEffect(() => {;
    const handleScroll = () => {;
      if (window.scrollY > showAfterScroll) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        setIsVisible(true);
      } else {;
        setIsVisible(false);
      }
<<<<<<< HEAD
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
  return (
    <AnimatePresence>;
      {isVisible && (;
        <motion&& motion.div
          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx

<<<<<<< HEAD
=======
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4"
            positionClasses[position]

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          transition={{ duration: 0 && 0.2 }}
          className={cn(
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4"
            positionClasses[position]
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx
            className
          )}>;
          <div className="rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center">;
            {children}
          </div>;
        </motion && motion.div>;
      )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx

    </AnimatePresence>;
  );
}

=======
========
    </AnimatePresence>;
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sticky-action.tsx
;
  const position_classes = {
    bottom: "bottom - 4",
    top: "top - 20";
  }
;
  return (
    <AnimatePresence>;
      {is_visible && (
        <motion.div;
          initial={{ opacity: 0, coordinate_y: position === "bottom" ? 20 : -20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          exit={{ opacity: 0, coordinate_y: position === "bottom" ? 20 : -20 }}
          transition={{ duration: 0.2 }}
          className={cn (
            "fixed left - 0 right - 0 z - 50 mx - auto flex justify - center px - 4";
            position_classes[position];
            class_name)}
        >;
          <div className="rounded - lg bg - zion - blue - dark border border - zion - blue - light shadow - lg shadow - zion - purple / 10 flex items - center">;
            {children}
          </div>;
        </motion.div>)}
    </AnimatePresence>);
}
=======

import React, { useEffect, useState } from "react",;
import { cn } from "@/lib/utils",;
import { motion, AnimatePresence } from "framer-motion",;
;
interface StickyActionProps {;
  className?:string,;
  children:React.ReactNode,;
  showAfterScroll?:number,;
  position?:"bottom" | "top";
}
;
export function StickyAction({;
  className,;
  children,;
  showAfterScroll = 300,;
  position = "bottom";
} StickyActionProps) {;
  const [isVisible, setIsVisible] = useState(false),;
;
  useEffect(() => {;
    const handleScroll = () => {;
      if (window.scrollY > showAfterScroll) {;
        setIsVisible(true),;
      } else {;
        setIsVisible(false),;
      }
    },;
;
    window.addEventListener("scroll", handleScroll),;
    return () => {;
      window.removeEventListener("scroll", handleScroll),;
    },;
  }, [showAfterScroll]),;
;
  const positionClasses = {;
    bottom:"bottom-4",;
    top:"top-20";
  },;
;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (;
    <AnimatePresence>;
      {isVisible && (;
        <motion.div;
<<<<<<< HEAD
          initial={{ opacity:0, y:position === "bottom" ? 20 :-20 }}
          animate={{ opacity:1, y:0 }}
          exit={{ opacity:0, y:position === "bottom" ? 20 :-20 }}
          transition={{ duration:0.2 }}
          className={cn(;
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4",;
            positionClasses[position],;
            className;
          )}
        >;
          <div className="rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center">;
            {children}
          </div>;
        </motion.div>;
      )}
    </AnimatePresence>;
  ),;}
 interface StickyActionProps {
  className?: string;
children: React.ReactNode;
showAfterScroll?: number;
useEffect ( () => {
  const handleScroll = () => {
  if (window.scrollY > showAfterScroll) {
  isVisible && (<motion.div </div> </motion.div>) 
}</AnimatePresence>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
