

interface StickyActionProps {
  className?: string;

  children: React.ReactNode

  showAfterScroll?: number;

import { cn } from "@/lib/utils",
import { motion, AnimatePresence } from "framer-motion",

interface StickyActionProps {
  className?: string,
  children: React.ReactNode,
  showAfterScroll?: number,

  position?: "bottom" | "top"
}
export function StickyAction({

  position = "bottom"
}: StickyActionProps) {
  const [isVisible, setIsVisible] = useState(false),

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showAfterScroll) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

  const positionClasses = {
    bottom: "bottom-4"
    top: "top-20"

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div

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