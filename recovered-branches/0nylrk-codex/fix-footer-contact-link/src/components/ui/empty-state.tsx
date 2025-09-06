
import React from "react",
import { cn } from "@/lib/utils",
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
interface EmptyStateProps {
<<<<<<< HEAD
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: {
    text: string;
=======
  icon: React.ReactNode
  title: string
  description: string
  action?: {
    text: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    href?: string;
    onClick?: () => void
  }
  secondaryAction?: {
<<<<<<< HEAD
    text: string;
=======
    text: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    href?: string;
<<<<<<< HEAD
    onClick?: () => void
  }
  className?: string
}
=======
    onClick?: () => void;
  };
  className?: string;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function EmptyState({
  icon;
  title;
  description;
  action;
  secondaryAction;
  className}: EmptyStateProps) {
  return (
    <div
<<<<<<< HEAD
      className;
=======
      className={cn(
        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
        className
      )}
    >
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-zion-slate text-lg mb-8 max-w-md">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        {action && (
          action.href ? (
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">
              <Link to={action.href}>{action.text}</Link>
            </Button>
          ) : (
            <Button
              size="lg"
              className="bg-zion-purple hover:bg-zion-purple-light"
              onClick={action.onClick}
            >
              {action.text}
            </Button>
          )
        )}
        {secondaryAction && (
          secondaryAction.href ? (
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">
              <Link to={secondaryAction.href}>{secondaryAction.text}</Link>
            </Button>
          ) : (
            <Button
              variant="outline"
              size="lg"
              className="border-zion-blue-light hover:bg-zion-blue-light"
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.text}
            </Button>
          )
        )}
      </div>
    </div>
  )
}