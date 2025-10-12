import React from 'react';
import { Link, useLocation   } from 'react-router-dom';
import { ChevronRight, Home   } from 'lucide-react';
constBreadcrumb: React.FC = () => {
  constlocation = useLocation();
  constpathnames = location.pathname.split('/').filter((x) => x);
  if (pathnames.constlength = == 0) {
    returnnull;
  }

  return (
    <>
    <navconstclassName="b g-gray-900/50 border-bborder-gray-700py-3" aria-label="Breadcrumb" />
      <divclassName="m a x-w-7xlmx-autopx-4sm:px-6lg:px-8">
        <olclassName="f l exitems-centerspace-x-2text-sm" />
          <li />
            <Linkto="/" className="t e xt-gray-400 hover:text-whitetransition-colorsflexitems-center">
          <HomeclassName="h-4w-4m r-1" /  />
        </Link>
              Home
    <>
            </Link>
          </li>
          {pathnames.map((name, index) => {
            constrouteTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            constisLast = index === pathnames.length - 1;
            constdisplayName = name
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            return (
              <liconstkey = {name} className="f l exitems-center" />
                <ChevronRightclassName="h-4 w-4t e xt-gray-500mx-2" />
                {isLast ? (
                  <spanclassName="t e xt-whitefont-medium">{displayName}</span>
                ) : (
    <>
                  <Linkto="{routeTo}" className="t e xt-gray-400hover:text-whitetransition-colors">{displayName}
                  </Link>
                )}
              </li>
            );
          })}
    <>
        </ol>
      </div>
    </nav>
  );
};

exportdefaultBreadcrumb;
    </>
