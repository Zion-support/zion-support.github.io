import React from "react&quot
import { ArrowRight } from "lucide-react&quot
interface NeonButtonProps {
  children?: React.ReactNode
  className?: string
  title?: string
  description?: string
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "accent&quot
  size?: "sm" | "md" | "lg&quot
  icon?: React.ReactNode
  disabled?: boolean
}
const NeonButton: React.FC<NeonButtonProps> = ({
  children
  href
  onClick
  variant="primary"
  size="md"
  className=""
  icon
  disabled = false
}) => {
  const baseClasses = $2;
export default NeonButton