import React from "react";
const FuturisticButton = () => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
>
      {icon && <span className="mr-2">{icon}</span>},
    {children}
    </button>
  );
};
export default FuturisticButton;
