
import React, {_useEffect, _useState} from "react";

interface StickyActionProps {_className?: string;
  children: React.ReactNode;
  showAfterScroll?: number;
  position?: "bottom" | "top";}

export function StickyAction(_{_className, _children, _showAfterScroll = 300, _position = "bottom"}: StickyActionProps) {_const [isVisible, _setIsVisible] = useState(false);

  useEffect__(() => {
    const _handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true);} else {_setIsVisible(false);}
    };

    window.addEventListener("scroll", handleScroll);
    return () => {_window.removeEventListener("scroll", _handleScroll);};
  }, [showAfterScroll]);

  const _positionClasses = {_bottom: "bottom-4", _top: "top-20"};

  return (
    <AnimatePresence>
      {_isVisible && (
        <motion.div
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
