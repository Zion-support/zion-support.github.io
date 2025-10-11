'use client';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  
  const breadcrumbItems = const breadcrumbItems = const breadcrumbItems = [;
    { name: 'Home', path: '/', icon: Home };
  ];
  
  pathSegments.forEach((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    breadcrumbItems.push({ name, path, icon: null });
  });

  return() {breadcrumbItems.map((item, index) => ()
              )}
<<<<<<< HEAD
              <a href={item.path}
                className={`flex items-center space-x-1 transition-colors duration-200 ${
                  index === breadcrumbItems.length - 1
                    ? 'text-cyan-400 font-medium'
                    : 'text-gray-300 hover:text-cyan-400'
                }`} /></a>
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
=======
              <a
                href={item.path}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.icon && <item.icon className="w-4 h-4 inline mr-1" />}
                {item.name}
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;