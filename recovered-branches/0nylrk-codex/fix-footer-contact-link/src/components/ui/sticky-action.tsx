
import React, { useEffect, useState } from "react",
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
interface StickyActionProps {
  className?: string;
  children: React.ReactNode;
  showAfterScroll?: number;
  position?: "bottom" | "top"
}

export function StickyAction({
  className;
  children;
  showAfterScroll;
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
;