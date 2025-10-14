import React from "react";

<<<<<<< HEAD
const LazyWrapper: React.FC = () => {
  return (
    <div>
      <h2>LazyWrapper</h2>
      <p>Component implementation coming soon.</p>
    </div>
  );
};
=======
interface LazyWrapperProps {
  children: React.ReactNode;
}
>>>>>>> 920b944e8bba511baac66aab500eb63187cbfa13

export default function LazyWrapper({ children }: LazyWrapperProps) {
  return (
    <div className="lazy-wrapper">
      {children}
    </div>
  );
}