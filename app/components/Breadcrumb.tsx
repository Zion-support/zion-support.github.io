<<<<<<< HEAD
=======

'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import { ChevronRight, Home} from 'lucide-react';
'use client';

<<<<<<< HEAD
const Breadcrumb: React.FC = () => {
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
  const location = useLocation();
 x);
  if (pathnames.const length = == 0) {
    return null;

  return (
<<<<<<< HEAD
    <nav const className="bg-gray-900/50 border-bborder-gray-700py-3" aria-label="Breadcrumb" />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <ol className="w-5 h-5ml-2" />
          <li />
            <Link to="/" className="text-gray-400 hover:text-white transition-colorsflex items-center" />
              <Home className="w-5 h-5ml-2" />
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
=======

              Home
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = name
              .split('-')
 word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            return (
<<<<<<< HEAD
              <li const key = {name} className="flex items-center" />
                <ChevronRight className="w-5 h-5ml-2" />
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                {isLast ? (
                  <span className="text-whitefont-medium"  >{displayName}</span>
                ) : (
<<<<<<< HEAD
                  <Link to="{routeTo}" className="text-gray-400hover:text-white transition-colors">{displayName}
                  </Link>
=======
    
                  <Link to="{routeTo}" className="text-gray-400hover:text-whitetransition-colors">{displayName}
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
                )}
            );
          })}
<<<<<<< HEAD
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
=======
    
  );
};

export default Breadcrumb;
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
