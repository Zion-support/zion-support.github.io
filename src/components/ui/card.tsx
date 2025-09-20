import React from "react";

interface CardProps {
className?: string;
children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = "", children }) => {
return (
<div className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>;
{children}
</div>;
);
};

export { Card };
export { Card as CardContent };
export { Card as CardHeader };
export { Card as CardFooter };
export { Card as CardTitle };
export { Card as CardDescription };