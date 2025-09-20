import React from "react;";

interface ButtonProps {children: React.ReactNode;
onClick?: () => void;
}
variant?: "primary" | "secondary";}
disabled?: boolean};
export const OptimizedButton = React.memo<ButtonProps>(({;