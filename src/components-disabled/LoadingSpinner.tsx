import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
interface LoadingSpinnerProps {size?: "sm" | "md" | "lg",
}
=======
interface LoadingSpinnerProps {size?: "sm" | "md" | "lg"}
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
text?: string;}
interface LoadingSpinnerProps {
size?: "sm" | "md" | "lg",
text?: string;
className?: string};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
size = "md",
text = "Loading...",
className = ""
}) => {
const sizeClasses = {;
sm: "h-6 w-6", md: "h-12 w-12",;
lg: "h-16 w-16",;
};
return (
<div className={`flex flex-col items-center justify-center ${className}`}>;
<div className={`animate-spin rounded-full border-b-2 border-purple-500 ${sizeClasses[size]} mb-4`}></div>;
<p className="text-gray-300 text-lg">{text}</p>;
</div>;
);
};

export default LoadingSpinner;
<//div><///div>;
=======
<<<<<<< HEAD
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
