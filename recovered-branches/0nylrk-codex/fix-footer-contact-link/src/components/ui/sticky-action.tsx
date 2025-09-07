<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import {cn} from "@/lib/utils";
import {motion, AnimatePresence} from "framer-motion";

interface StickyActionProps {

interface StickyActionProps {

import React, { useEffect, useState } from "react";
import {cn} from "@/lib/utils";

import {motion, AnimatePresence} from "framer-motion";

}
=======
<<<<<<< HEAD
import React, { useEffect, useState } from "react",
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
>>>>>>> origin/resolved-merge-conflicts
interface StickyActionProps {
}
interface StickyActionProps {
}
import React, { useEffect, useState } from "react";"
import {cn} from "@/lib/utils";"
import {motion, AnimatePresence} from "framer-motion";"
interface StickyActionProps {;
  }
  className?: string;
  "children": React && React.ReactNode,;
  showAfterScroll?: number;  children;

  showAfterScroll = 300;
  position = "bottom";"
}: StickyActionProps) {;
  }
  const [isVisible, setIsVisible] = useState(false);  useEffect(() => {
    }
    const handleScroll = () => {
      }
      if (window.scrollY > showAfterScroll) {
        }
        setIsVisible(true)  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
}
<<<<<<< HEAD
initial={ "opacity": 0, "y": position === "bottom" ? 20 : -20 }"
import React, { useEffect, useState } from "react";"
import { cn } from "@/lib/utils";"
import { motion, AnimatePresence } from "framer-motion",;"
=======
export function StickyAction({
<<<<<<< HEAD
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
=======
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useEffect, useState } from "react";
import {cn} from "@/lib/utils";
import {motion, AnimatePresence} from "framer-motion";

interface StickyActionProps {

interface StickyActionProps {

import React, { useEffect, useState } from "react";
import {cn} from "@/lib/utils";

import {motion, AnimatePresence} from "framer-motion";

}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
initial={{ "opacity": 0, "y": position === "bottom" ? 20 : -20 }}"
import { cn } from "@/lib/utils";"
import { motion, AnimatePresence } from "framer-motion",;"
=======
  // TODO: Implement
import React, { useEffect, useState } from "react";""
import {cn} from "@/lib/utils";""
import {motion, AnimatePresence} from "framer-motion";"
pr-12325
<<<<<<< HEAD
interface StickyActionProps {;
  className?: string;
  children: React && React.ReactNode,;

  position?: "bottom" | "top";
}

export function StickyAction(): any ({;

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

import { cn } from "@/lib/utils",

import { motion, AnimatePresence } from "framer-motion",

interface StickyActionProps {}
  className?: string,
  children: React.ReactNode,
  showAfterScroll?: number,
"
  position?: "bottom" | "top"
}

export function StickyAction(): any ({;

  className;
  children;

  position?: "bottom" | "top"
}

import { cn } from "@/lib/utils",
import { motion, AnimatePresence } from "framer-motion",

interface StickyActionProps {
  className?: string,
  children: React.ReactNode,
  showAfterScroll?: number,

  position?: "bottom" | "top"
}
export function StickyAction({
  position?: "bottom" | "top";
}
export function StickyAction(): any ({;
  className;
  children;

}: StickyActionProps) {;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true)

import React, { useEffect, useState } from './react';
import { cn } from '@/lib / utils';

import { motion, AnimatePresence } from './framer-motion';
interface StickyActionProps {}
  class_name?: string;
  children: React.ReactNode,
  showAfterScroll?: number;"
  position?: "bottom" | "top";
}
export /**;
 * StickyAction - Function description;
 */
function StickyAction() {}
  const [is_visible, setIsVisible] = useState (false);
      } else {}
        setIsVisible (false);
      }

    }

    return () => {"
      window.removeEventListener ("scroll", handle_scroll);
    }
  }, [showAfterScroll]);

    },
"
    window.addEventListener("scroll", handleScroll),
    return () => {"
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showAfterScroll]),

  return (

      if (window.scrollY > showAfterScroll) {

        setIsVisible(true)"
import React, { useEffect, useState } from './react';
import { cn } from '@/lib / utils';
import { motion, AnimatePresence } from './framer-motion';
  // TODO: Implement
  class_name?: string;
  showAfterScroll?: number;
export /**
 * StickyAction - Function description;
 */
function StickyAction() {
  const [is_visible, setIsVisible] = useState (false);
      } else {
  // TODO: Implement
        setIsVisible (false);

;"
    window.addEventListener ("scroll", handle_scroll);"
    return () => {"
      window.removeEventListener ("scroll", handle_scroll);"
  }, [showAfterScroll]);

    },
    window.addEventListener("scroll", handleScroll),"
      window.removeEventListener("scroll", handleScroll)"
  }, [showAfterScroll]),

  const positionClasses = {"
    bottom: "bottom-4"","
  top: "top-20""

  return (

    <AnimatePresence>

          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4";
            positionClasses[position];

          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
import React, { useEffect, useState } from "react",;
import { cn } from "@/lib/utils",;

import { motion, AnimatePresence } from "framer-motion",;
>>>>>>> origin/chore/fix-lint-and-merge
interface StickyActionProps {;
=======
>>>>>>> origin/resolved-merge-conflicts
interface StickyActionProps {;
  }
<<<<<<< HEAD
=======
  },

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      if (window.scrollY > showAfterScroll) {

        setIsVisible(true)"
import React, { useEffect, useState } from './react';
import { cn } from '@/lib / utils';
import { motion, AnimatePresence } from './framer-motion';
  // TODO: Implement
  class_name?: string;
  showAfterScroll?: number;
export /**
 * StickyAction - Function description;
 */
function StickyAction() {
  const [is_visible, setIsVisible] = useState (false);
      } else {
  // TODO: Implement
        setIsVisible (false);

;"
    window.addEventListener ("scroll", handle_scroll);"
    return () => {"
      window.removeEventListener ("scroll", handle_scroll);"
  }, [showAfterScroll]);

    },
    window.addEventListener("scroll", handleScroll),"
      window.removeEventListener("scroll", handleScroll)"
  }, [showAfterScroll]),

  const positionClasses = {"
    bottom: "bottom-4"","
  top: "top-20""

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (

    <AnimatePresence>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4";
            positionClasses[position];

<<<<<<< HEAD
=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
import React, { useEffect, useState } from "react",;
import { cn } from "@/lib/utils",;

import { motion, AnimatePresence } from "framer-motion",;
>>>>>>> origin/chore/fix-lint-and-merge
interface StickyActionProps {;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  className?: string,;
  "children": React.ReactNode,;
  showAfterScroll?: number,;
  position?: "bottom" | "top";"
}
;
<<<<<<< HEAD
export function StickyAction() {;
  }
  const [isVisible, setIsVisible] = useState(false),;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
export function StickyAction({;
  className,;
  children,;
  showAfterScroll = 300,;
  position = "bottom";
}: StickyActionProps) {;
  const [isVisible, setIsVisible] = useState(false),;
<<<<<<< HEAD
  useEffect(() => {;
    const handleScroll = () => {;
      if (window && window.scrollY > showAfterScroll) {;
  useEffect(() => {;
    const handleScroll = () => {;
      if (window.scrollY > showAfterScroll) {;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  useEffect(() => {;
    const handleScroll = () => {;
      if (window && window.scrollY > showAfterScroll) {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    const handleScroll = () => {;
      if (window && window.scrollY > showAfterScroll) {;
  useEffect(() => {;
    const handleScroll = () => {;
      if (window.scrollY > showAfterScroll) {;

        setIsVisible(true);

      } else {;
        setIsVisible(false);
      }

  return (
    <AnimatePresence>;
      {isVisible && (;
        <motion&& motion.div"
          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}

"
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4"
            positionClasses[position]

          animate={{ opacity: 1, y: 0 }}

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        setIsVisible(true);
      } else {;
        }
        setIsVisible(false);
<<<<<<< HEAD
      }          animate={ "opacity": 1, "y": 0 }
          exit={ "opacity": 0, "y": position === "bottom" ? 20 : -20 }"
          transition={ "duration": 0 && 0.2 }
=======
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
    <AnimatePresence>;
      {isVisible && (;
        <motion&& motion.div
          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}

            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4"
            positionClasses[position]

            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4"
            positionClasses[position]

          animate={{ opacity: 1, y: 0 }}

          exit={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          transition={{ duration: 0 && 0.2 }}
          className={cn(
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4"
            positionClasses[position]

            className
          )}>;

          <div className="rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center">;
            {children}
          </div>;
        </motion && motion.div>;
      )}

=======
    <AnimatePresence>;
      {isVisible && (;
        <motion&& motion.div
          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4"
            positionClasses[position]

<<<<<<< HEAD
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4"
            positionClasses[position]
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          animate={{ opacity: 1, y: 0 }}

          exit={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          transition={{ duration: 0 && 0.2 }}
>>>>>>> origin/resolved-merge-conflicts
          className={cn(
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4""
            }
            positionClasses[position]
;
  const position_classes = {
    }
    "bottom": "bottom - 4","
    "top": "top - 20";"
  }
;
return (;
    <AnimatePresence>;
      {is_visible && (
        <motion.div;
          }
          initial={ "opacity": 0, "coordinate_y": position === "bottom" ? 20 : -20 }"
          animate={ "opacity": 1, "coordinate_y": 0 }
          exit={ "opacity": 0, "coordinate_y": position === "bottom" ? 20 : -20 }"
          transition={ "duration": 0.2 }
          className={cn (
            "fixed left - 0 right - 0 z - 50 mx - auto flex justify - center px - 4";"
            }
            position_classes[position];
            class_name)}
        >;
<<<<<<< HEAD
          <div className="rounded - lg bg - zion - blue - dark border border - zion - blue - light shadow - lg shadow - zion - purple / 10 flex items-center">;"
=======
          <div className="rounded - lg bg - zion - blue - dark border border - zion - blue - light shadow - lg shadow - zion - purple / 10 flex items - center">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            {children}
          </div>;
        </motion.div>)}
    </AnimatePresence>);
}
<<<<<<< HEAD
  const positionClasses = $2;
    top: "top-20"
  },

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={ opacity: 0, y: position === "bottom" ? 20 : -20 }
          animate={ opacity: 1, y: 0}
          exit={ opacity: 0, y: position = $2;
            positionClasses[position],
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  showAfterScroll = 300,;"
  const [isVisible, setIsVisible] = useState(false),;

  useEffect(() => {;
</motion>
    <AnimatePresence>;

        <motion&& motion.div;"
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4""
            positionClasses[position]

          animate={{ opacity: 1, y: 0 }}"
          exit={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}"
          transition={{ duration: 0 && 0.2 }}
          className={cn("
            className;)
          )}>;
</motion>"
          <div className="rounded-lg bg-zion-blue-dark border border-zion-blue-light shadow-lg shadow-zion-purple/10 flex items-center">;"
</div>
          </div>;
        </motion && motion.div>;
<<<<<<< HEAD
      )}
    </AnimatePresence>
  )
}
=======
      )}
    </AnimatePresence>
  )
}
=======
<<<<<<< HEAD

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
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
