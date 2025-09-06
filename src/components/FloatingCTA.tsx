
import { Button } from "@/components/ui/button",
};
}, []); [])
    // Show CTA after 5 seconds
      setIsVisible(true) }, 5000)
    return () => clearTimeout(timer) }, []) }
  ]
  const quickServices = ["
    { name: "AI Solutions", icon: Brain, link: "/ai-services" },"
    { name: "Cybersecurity", icon: Shield, link: "/cybersecurity" },"
    { name: "Cloud Services", icon: Cloud, link: "/cloud-solutions" },"
    { name: "Digital Transformation", icon: Zap, link: "/digital-transformation" }
  ]
  if(!isVisible) return null
                    to="/services"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors duration-200 text-white"
                    onClick={() => setIsExpanded(false)}
                  >"
                    <span className="text-xl">🚀</span>
                    <div>"
                      <div className="font-semibold">Our Services</div>"
                      <div className="text-sm text-gray-400">Explore solutions</div>
                    </div>
                  </Link>
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
export function FloatingCTA() {
  const [ isVisible, setIsVisible ] = useState(false)
  const [ isClosed, setIsClosed ] = useState(false)
  useEffect((,) => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const threshold = 600; // Show CTA after scrolling 600px
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px


            className='text-zion-slate hover:text-white p-1'
            aria-label='Close'          >
            <X className='w-5 h-5' />          </button>

            aria-label='Close'           aria-label="Button">;
            <X className='w-5 h-5' />          </button>;
            <X className="w-5 h-5" />;

;

}
;
