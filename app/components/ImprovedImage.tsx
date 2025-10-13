<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4fed


>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
import React from 'react';

interface ImprovedImageProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function ImprovedImage({ className = '', children }: ImprovedImageProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
export default function ImprovedImage({ className = '', children, ...props }: ImprovedImageProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
import { ImageIcon } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======

}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
