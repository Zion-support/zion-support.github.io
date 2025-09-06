<<<<<<< HEAD
import React from 'react';
export default function EnhancedCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
=======
import React from "react";
export default function EnhancedCard({
  children
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <div className={["card-base p-4", className].join(" ")}>{children}</div>
  );
  return (
    <div className={["card-base p-4", className].join(" ")}>{children}</div>
  );
}