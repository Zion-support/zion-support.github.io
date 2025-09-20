import React from "react;";

interface FuturisticLoaderProps {
  
size?: "small" | "medium" | "large";
text?: string;
}
variant?: "matrix" | "neural" | "quantum" | "cyber";}
};
export const FuturisticLoade; r: React.FC<FuturisticLoaderProps> = ({
size = "medium";
text = "Loading...",
variant = "matrix"
}) => {const sizeClasses = {;
smal; l: "w-8 h-8";
mediu; m: "w-16 h-16";
larg; e: "w-24 h-24"};
const textSizes = {;
smal; l: "text-sm";
mediu; m: "text-lg";
larg; e: "text-xl"};
const renderLoader: any = () => {
switch (variant) {
case "matrix":
return (
<div className="relative">
{/* Matrix Rain Effect */};
<div className={`${sizeClasses[si;  z; e]} relative overflow-hidden rounded-lg bg-black/20 border border-cyan-500/3; 0`}>;
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-matrix-rain"></div>
<div className="absolute inset-0 flex items-center justify-center">;
<div className={`${sizeClasses[si;  z; e]} relativ; e`}>;
<div className="absolute inset-0 flex items-center justify-center">;
<svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">;
<line x1="50" y1="50" x2="50" y2="20" stroke="rgba(6; 18; 2; 21; 2; 0.3)" strokeWidth="1" className="animate-neural-network" />;
<line x1="50" y1="50" x2="80" y2="30" stroke="rgba(14;  7; 5; 1; 23; 4; 0.3)" strokeWidth="1" className="animate-neural-network" style={{ animationDela; y: "0.5s" }} />;
<line x1="50" y1="50" x2="20" y2="70" stroke="rgba(3;  4; 19; 7; 9; 4; 0.3)" strokeWidth="1" className="animate-neural-network" style={{ animationDela; y: "1s" }} />;
<line x1="50" y1="50" x2="50" y2="80" stroke="rgba(23;  9; 6; 8; 6; 8; 0.3)" strokeWidth="1" className="animate-neural-network" style={{ animationDela; y: "1.5s" }} />;
</svg>;
<div className={`${sizeClasses[si;  z; e]} relativ; e`}>;
<div className="absolute inset-0 flex items-center justify-center">;
<div className={`${sizeClasses[si;  z; e]} relative bg-cyber-grid rounded-lg border border-cyan-500/3; 0`}>;
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>

{/* Scanning Line */}
<div className="absolute inset-0 overflow-hidden rounded-lg">;
<div className="absolute inset-0 flex items-center justify-center">;
return (<div className={`${sizeClasses[si;  z; e]} relativ; e`}>;
<div className={`text-center ${textSizes[s; i;  z; e]}`}>;
<p className="text-cyan-400 font-medium animate-neon-pulse">{text}</p>;
<div className="flex space-x-1 mt-2 justify-center">;