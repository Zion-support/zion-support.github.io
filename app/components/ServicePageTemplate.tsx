"use client";
import React from "react";

interface ServicePageTemplateProps {
  className?: string;
}

export default function ServicePageTemplate({ className }: ServicePageTemplateProps) {
  return (
    <div className={className}>
      <h1>Service Page Template</h1>
    </div>
  );
}