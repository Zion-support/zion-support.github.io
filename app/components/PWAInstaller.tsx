
interface PWAInstallerProps {
  className?: string;
  children?: React.ReactNode;
}

const PWAInstaller = ({ 
  className = '', 
  children 
}: PWAInstallerProps) => {
  return (
    <div className={'pwainstaller ' + className}>
      {children || <p>PWAInstaller component</p>}
    </div>
  );
};

export default PWAInstaller;