"use client";
import React from "react";

interface AccessibilityComponentsProps {
  className?: string;
}

export default function AccessibilityComponents({ className }: AccessibilityComponentsProps) {
  return (
    <div className={className}>
      <h1>Accessibility Components</h1>
    </div>
  );
}