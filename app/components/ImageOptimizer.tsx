"use client";
import React from "react";

interface ImageOptimizerProps {
  className?: string;
}

export default function ImageOptimizer({ className }: ImageOptimizerProps) {
  return (
    <div className={className}>
      <h1>Image Optimizer</h1>
    </div>
  );
}