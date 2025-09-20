import React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps {
  
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export function Separator({ className = "", orientation = "horizontal" }: SeparatorProps) {
  return (
