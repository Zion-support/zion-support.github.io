
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
import { useState, useEffect } from "react",
import { X } from "lucide-react",
=======
import { Button } from &quot;@/components/ui/button&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { useState, useEffect } from &quot;react&quot;;
import { X } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px

      if (scrollPosition > threshold && !isClosed) {
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
  }, [isClosed]),
=======
    window.addEventListener(&quot;scroll&quot;, handleScroll);
    return () => {
      window.removeEventListener(&quot;scroll&quot;, handleScroll);
    };
  }, [isClosed]);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const handleClose = () => {
    setIsClosed(true),
    setIsVisible(false)
  },

  if (!isVisible) return null,

  return (
    <div className=&quot;fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in&quot;>
      <div className=&quot;bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between&quot;>
        <div className=&quot;mr-4&quot;>
          <p className=&quot;text-white font-medium&quot;>Ready to explore Zion?</p>
          <p className=&quot;text-zion-slate-light text-sm&quot;>Register today to access all features!</p>
        </div>
        <div className=&quot;flex items-center gap-2&quot;>
          <Button 
            variant=&quot;default&quot; 
            size=&quot;sm&quot; 
            className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap&quot;
            asChild
          >
            <Link to=&quot;/signup&quot;>Register Now</Link>
          </Button>
          <button 
            onClick={handleClose}
<<<<<<< HEAD
            className="text-zion-slate hover: text-white p-1"
            aria-label="Close"
=======
            className=&quot;text-zion-slate hover:text-white p-1&quot;
            aria-label=&quot;Close&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          >
            <X className=&quot;w-5 h-5&quot; />
          </button>
        </div>
      </div>
    </div>
  )
}
