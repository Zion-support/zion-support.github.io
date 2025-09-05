<<<<<<< HEAD
import React from 'react',
type EnhancedLoadingProps = {
  lines?: number
},

export default function EnhancedLoading({ lines = 3 }: EnhancedLoadingProps) {
  return (
    <div className=&quot;space-y-2&quot;>
      {Array.from({ length: lines }).map((_, idx) => (
        <div key={idx} className=&quot;skeleton h-4 rounded&quot; />
=======
import React from 'react',;
type EnhancedLoadingProps = {;
  lines?: number;
};
export default function EnhancedLoading({ lines = 3 }: EnhancedLoadingProps) {;
  return (;
    <div className="space-y-2">;
      {Array.from({ length: lines }).map((_, idx) => (;
        <div key={idx} className="skeleton h-4 rounded" />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      ))}
    </div>;
  );
}