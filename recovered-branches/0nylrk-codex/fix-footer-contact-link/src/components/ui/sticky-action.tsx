interface StickyActionProps {

interface StickyActionProps {

import React, { useEffect, useState } from "react";
import {cn} from "@/lib/utils";
import {motion, AnimatePresence} from "framer-motion";

interface StickyActionProps {;
  className?: string;
  children: React && React.ReactNode,;

  showAfterScroll?: number;  children;

  showAfterScroll = 300;
  position = "bottom";
}: StickyActionProps) {;
  const [isVisible, setIsVisible] = useState(false);  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true)  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div

          initial={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
import React, { useEffect, useState } from "react",;
import { cn } from "@/lib/utils",;

import { motion, AnimatePresence } from "framer-motion",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface StickyActionProps {;
  className?: string,;
  "children": React.ReactNode,;
  showAfterScroll?: number,;
  position?: "bottom" | "top";"
}
;

<<<<<<< HEAD
export function StickyAction({;
  className,;
  children,;
  showAfterScroll = 300,;
  position = "bottom";
}: StickyActionProps) {;
  const [isVisible, setIsVisible] = useState(false),;
        setIsVisible(true);
      } else {;
        setIsVisible(false);
      }          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === "bottom" ? 20 : -20 }}
          transition={{ duration: 0 && 0.2 }}
          className={cn(
            "fixed left-0 right-0 z-50 mx-auto flex justify-center px-4"
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
          <div className="rounded - lg bg - zion - blue - dark border border - zion - blue - light shadow - lg shadow - zion - purple / 10 flex items-center">;
            {children}
          </div>;
        </motion.div>)}
    </AnimatePresence>);
}
