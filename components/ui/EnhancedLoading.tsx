<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import React from "react";
type EnhancedLoadingProps = {
  lines?: number;
}

export default function EnhancedLoading({ lines = 3 }: EnhancedLoadingProps) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, idx) => (
        <div key={idx} className="skeleton h-4 rounded" />
      ))}
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
