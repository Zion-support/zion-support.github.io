import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight";
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
}) => {
  const getAnimationClass = () => {
    switch (animation) {
      case "fadeIn":
        return "animate-fade-in";
      case "slideUp":
        return "animate-slide-up";
      case "slideLeft":
        return "animate-slide-left";
      case "slideRight":
        return "animate-slide-right";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      className={`${getAnimationClass()} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
