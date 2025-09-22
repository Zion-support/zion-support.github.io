>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import React from "react";
type EnhancedLoadingProps = {;
  lines?: number;
}

export default function EnhancedLoading(): any ({ lines = 3 }: EnhancedLoadingProps) {;
  return ("
    <div className="space-y-2">;
      {Array && Array.from({ length: lines }).map((_, idx) => (;"
        <div key={idx} className="skeleton h-4 rounded" />;
      ))}
import React from './react';
type EnhancedLoadingProps = {
  lines?: number;
}
<<<<<<< HEAD
;
export default /**
 * EnhancedLoading - Function description
 */
function EnhancedLoading() {
  return (
    <div className="space - y-2">;
      {Array.from ({ length: lines }).map ((_, idx) => (
        <div key={idx} className="skeleton h - 4 rounded" />))}
    </div>);
      ))}

  );
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

  return (
    <div className="flex items-center justify-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  );
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
