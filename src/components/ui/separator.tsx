import React from "react";

interface SeparatorProps {
className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className = "" }) => {
return (
<div className={`h-px bg-gray-200 dark:bg-gray-700 ${className}`} />
);
};

export { Separator };