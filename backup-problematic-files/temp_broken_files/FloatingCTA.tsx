
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { useState, useEffect } from "react",;
import { X } from "lucide-react",;
;
export function FloatingCTA() {;
  const [isVisible, setIsVisible] = useState(false),;
  const [isClosed, setIsClosed] = useState(false),;
;
  useEffect(() => {;
    const handleScroll = () => {;
      const scrollPosition = window.scrollY,;
      const threshold = 600, // Show CTA after scrolling 600px;
;
      if (scrollPosition > threshold && !isClosed) {;
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
  }, [isClosed]),;
;
  const handleClose = () => {;
    setIsClosed(true),;
    setIsVisible(false),;
  },;
;
  if (!isVisible) return null,;
;
  return (;
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">;
        <div className="mr-4">;
          <p className="text-white font-medium">Ready to explore Zion?</p>;

            <X className="w-5 h-5" />;
          </button>;
        </div>;
      </div>;
    </div>;

}