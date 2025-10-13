<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function LinkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Link - Zion Tech Group</title>
        <meta name="description" content="Advanced Link solutions by Zion Tech Group" />
      </Helmet>
      
=======
export default function linkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Link - Zion Tech Group</title>
        <meta name="description" content="Advanced link solutions by Zion Tech Group" />
      </Helmet>

>>>>>>> cursor/fix-errors-and-merge-to-main-6053
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Link
          </h1>
          <p className="text-xl text-gray-600 mb-8">
<<<<<<< HEAD
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
=======
  href: string;

  children: React.ReactNode;,
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  'aria-label'?: string,}'
}
export const Link: React.FC<LinkProps>= ({,}export const Link: React.FC<LinkProps> = ({,}href,
  href: string,
  children: React.ReactNode;,
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  'aria-label'?: string,}'
}
export const Link: React.FC<LinkProps> = ({,
    ,
  href
  children,
  className,
  target,
  rel,
  onClick,
  return(<a />)
      href={href}className={className}target={target}rel={rel}onClick={handleClick}aria-label={ariaLabel}{...props}
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
      aria-label={ariaLabel},
    {...props}
    >{children}</a></a>
      aria-label={ariaLabel})
      {...props})
    >)
      {children})
    </a>);
  );
};
;
export default Link;
    >;
      {children} </a>);
  );
};
;
export default Link;
>>>>>>> cursor/delete-records-a75e
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
