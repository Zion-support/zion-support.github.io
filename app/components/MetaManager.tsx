<<<<<<< HEAD
import React, { ReactNode }    from "react
interface MetaManagerProps {
  children: ReactNode;
}
;
const MetaManager: React.FC<MetaManagerProps> = ({ children }) => {
  return <div>{children}</div>;
}
export default MetaManager
=======
import React from 'react';

const MetaManager = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-white mb-4">MetaManager</h2>
      <p className="text-gray-300">This component is under construction.</p>
    </div>
  );
};

export default MetaManager;
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
