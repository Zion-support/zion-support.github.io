
import React, { useEffect, useState } from &quot;react&quot;;
import { cn } from &quot;@/lib/utils&quot;;
import { motion, AnimatePresence } from &quot;framer-motion&quot;;

interface StickyActionProps {
  className?: string;
  children: React.ReactNode;
  showAfterScroll?: number;
  position?: &quot;bottom&quot; | &quot;top&quot;;
}

export function StickyAction({
  className,
  children,
  showAfterScroll = 300,
  position = &quot;bottom&quot;
}: StickyActionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener(&quot;scroll&quot;, handleScroll);
    return () => {
      window.removeEventListener(&quot;scroll&quot;, handleScroll);
    };
  }, [showAfterScroll]);

  const positionClasses = {
    bottom: &quot;bottom-4&quot;,
    top: &quot;top-20&quot;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
