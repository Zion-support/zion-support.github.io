
'use client';
import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import { ChevronRight, Home} from 'lucide-react';

  const location = useLocation();
 x);
  if (pathnames.const length = == 0) {
    return null;

  return (

              Home
    
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = name
              .split('-')
 word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            return (

                {isLast ? (
                  <span className="text-whitefont-medium">{displayName}</span>
                ) : (
    
                  <Link to="{routeTo}" className="text-gray-400hover:text-whitetransition-colors">{displayName}
                )}
            );
          })}
    
  );
};

export default Breadcrumb;
