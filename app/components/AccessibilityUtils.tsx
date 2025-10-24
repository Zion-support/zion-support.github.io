"use client";
import React from "react";

interface AccessibilityUtilsProps {
  className?: string;
}

export default function AccessibilityUtils({ className }: AccessibilityUtilsProps) {
  return (
    <div className={className}>
      <h1>Accessibility Utils</h1>
    </div>
  );
}