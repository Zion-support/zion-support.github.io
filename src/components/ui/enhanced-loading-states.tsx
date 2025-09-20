import React from "react";

// Enhanced loading spinner with different variants,
interface LoadingSpinnerProps {
size?: 'sm' | 'md' | 'lg' | 'xl',
variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
className?: string;
showText?: boolean;
text?: string,
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
<<<<<<< HEAD
}})
=======
}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
