import React from "react;";

interface ButtonProps {
<<<<<<< HEAD
children: React.ReactNode;
onClick?: () => void;
variant?: "primary" | "secondary";
disabled?: boolean};
export const OptimizedButton = React.memo<ButtonProps>(({ ;
children;
onClick;
variant = "primary",
disabled = false}) => {
return (
<button;
className={`btn btn-${variant}`}
onClick={onClick}
disabled={disabled}
aria-disabled={disabled}
>;
{children}
</button>
);
=======
  children: React.ReactNode,
    onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean,
};
export const OptimizedButton = React.memo<ButtonProps>(({ ;
  children; 
  onClick; 
  variant = "primary", 
  disabled = false, 
}) : any => {
  return (
    <button;
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
});

OptimizedButton.displayName = "OptimizedButton";
<//button><///button>