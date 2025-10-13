import { Link } from 'react-router-dom';
<<<<<<< HEAD

'use client'
=======
'use client'

=======
'use client''use client'
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
interface CriticalresourcepreloaderProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Criticalresourcepreloader({ className = '', children, ...props }: CriticalresourcepreloaderProps) {
  return (
    <div className={`criticalresourcepreloader-component ${className}`} {...props}>
      {children}
    </div>
  );
}