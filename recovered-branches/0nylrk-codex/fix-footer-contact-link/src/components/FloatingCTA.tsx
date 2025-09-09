import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
import { useState, useEffect } from "react",

import { X } from "lucide-react",
export function FloatingCTA() {}

  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),

  useEffect(() => {
      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px

      if (scrollPosition > threshold && !isClosed) {        setIsVisible(true);
      } else {;
        setIsVisible(false);
      }    setIsClosed(true);
    setIsVisible(false);
  }
  if (!isVisible) return null;

  return (
    },
"
    window.addEventListener("scroll", handleScroll),
    return () => {"

