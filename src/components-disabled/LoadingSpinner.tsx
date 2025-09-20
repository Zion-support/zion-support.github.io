<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
interface LoadingSpinnerProps {size?: "sm" | "md" | "lg"}
text?: string;}
interface LoadingSpinnerProps {
size?: "sm" | "md" | "lg",
text?: string;
=======
interface LoadingSpinnerProps {size?: "sm" | "md" | "lg",
}
=======

interface LoadingSpinnerProps {size?: "sm" | "md" | "lg"}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-5df3
text?: string;}
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
className?: string};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
size = "md",
text = "Loading...",
className = ""
}) => {
const sizeClasses = {;
<<<<<<< HEAD
sm: "h-6 w-6", md: "h-12 w-12",;
lg: "h-16 w-16",;
};
return (
<div className={`flex flex-col items-center justify-center ${className}`}>;
<div className={`animate-spin rounded-full border-b-2 border-purple-500 ${sizeClasses[size]} mb-4`}></div>;
<p className="text-gray-300 text-lg">{text}</p>;
</div>;
=======
sm: "h-6 w-6" md: "h-12 w-12";
lg: "h-16 w-16";
};
return (
<div className={`flex flex-col items-center justify-center ${className}`}>
<div className={`animate-spin rounded-full border-b-2 border-purple-500 ${sizeClasses[size]} mb-4`}></div>
<p className="text-gray-300 text-lg">{text}</p>
</div>
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
);
};

export default LoadingSpinner;
<<<<<<< HEAD
<//div><///div>;
=======
<<<<<<< HEAD
<//div><///div>
=======
<//div><///div>;

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-5df3
>>>>>>> 89dc065d06be7c6f791a12b1b01db05ffc95e4ff
