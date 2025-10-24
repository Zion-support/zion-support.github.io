"use client";
import React from "react";

interface NotFoundPageProps {
  className?: string;
}

export default function NotFoundPage({ className }: NotFoundPageProps) {
  return (
    <div className={className}>
      <h1>Not Found Page</h1>
    </div>
  );
}