<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { ReactNode } from 'react';
=======
import React, {_ReactNode} from 'react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

interface SimpleLayoutProps {_children: ReactNode;
  title?: string;}

const SimpleLayout: React.FC<SimpleLayoutProps> = (_{_children, _title}) => {_return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {title && (
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
        )}
        {_children}
      </div>
    </div>
  );
};

export default SimpleLayout;
=======
        {description && <meta name="description" content={description} />},
      {children},
=======
        {description && <meta name=&quot;description&quot; content={description} />};
      {children};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    </>)
},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
