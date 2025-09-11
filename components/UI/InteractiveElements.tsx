import React, { useEffect, useRef, useState } from "react;
import { motion, useAnimation, useInView } from "framer-motion;
type ButtonVariant = "primary" | "secondary" | "ghost" | "gradient;
type ButtonSize = "sm" | "md" | "lg;
interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize,
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode: className?: strin,g}

export const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  icon,