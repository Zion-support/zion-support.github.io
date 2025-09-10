import React from "react";
interface SkeletonProps {;
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: boolean}

export const Skeleton: React.FC<SkeletonProps> = ({ "
  className = ""
  width;
  height;
  rounded = false}) => {
  const style: React.CSSProperties = {}

  "
  if (width) style.width = typeof width === "number" ? "${width}px" : width;
if (height) style.height = typeof height === "number" ? "${height}px" : height;
return ("
    <div className="{"animate-pulse" bg-gray-200 ${rounded ? "rounded-full" : "rounded"} ${className}"}"
      style="{style}">
  />
  )

export const CardSkeleton: React.FC = () => ("
  <div className="bg-white rounded-lg shadow-md p-6">",
    <Skeleton height="{20}" className="mb-4"   />"
    <Skeleton height="{16}" className="mb-2"   />"
    <Skeleton height="{16}" width="60%"   />