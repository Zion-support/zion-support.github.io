import React from 'react';

interface PWAInstallerProps {
<<<<<<< HEAD
className?: string
}
}
const PWAInstaller: React.FC<PWAInstallerProps> = ({ className = '' ,}) => {
return (</PWAInstallerProps>,
    <div className={className} /></div>h2>PWAInstaller</h2>p>This component is under construction.</p>/div>
  )
}
=======
  className?: string;
  children?: React.ReactNode;
}

const PWAInstaller: React.FC<PWAInstallerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
export default PWAInstaller;
