import React from "react;";
import { motion } from "framer-motion, ";

interface FuturisticNeonButtonProps {
  
children: React.ReactNode;
onClick?: () => void;
type?: "button" | "submit" | "reset";
variant?: "primary" | "secondary" | "success" | "warning" | "danger";
size?: "sm" | "md" | "lg" | "xl";
disabled?: boolean;
className?: string;
fullWidth?: boolean;
icon?: React.ReactNode;
loading?: boolean;
}
glowIntensity?: "low" | "medium" | "high";}
};
export const FuturisticNeonButton: React.FC<FuturisticNeonButtonProps> = ({;
children;
onClick;
type = "button",
variant = "primary",
size = "md",
disabled = false;
className = "",
fullWidth = false;
icon;
loading = false;
glowIntensity = "medium";
}) => {
const getVariantStyles: any = () => {
const intensityMultiplier = {;
low: 0.3;
medium: 0.5;
high: 0.8;
