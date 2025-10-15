import React from "react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <div className={className}>
      <h2>Footer</h2>
      <p>This component is under construction.</p>
    </div>
  );
}
