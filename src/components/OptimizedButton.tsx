import React from "react;";

interface ButtonProps {children: React.ReactNode;
onClick?: () => void;
<<<<<<< HEAD
variant?: "primary" | "secondary";
disabled?: boolean};
export const OptimizedButton = React.memo<ButtonProps>(({ ;
=======
}
variant?: "primary" | "secondary";}
disabled?: boolean};
export const OptimizedButton = React.memo<ButtonProps>(({;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
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
});

OptimizedButton.displayName = "OptimizedButton";
<//button><///button>