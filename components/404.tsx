import React from "react";
export default function NotFoundPage() {
import React from 'react';

<<<<<<< HEAD

<<<<<<< HEAD
const 404: React.FC<404Props> = ({ className }) => {
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return (
    <div className='container mx-auto px-4 py-20 text-center'>
      <h1 className='text-3xl font-semibold'>404 - Page Not Found</h1>
      <p className='mt-2 text-gray-600 dark:text-gray-300'>
        Sorry, we couldn’t find that page.
      </p>
    </div>;
    </div>
  );export default function NotFoundPage() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
<<<<<<< HEAD
=======
    <div className='container mx-auto px-4 py-20 text-center'>
      <h1 className='text-3xl font-semibold'>404 - Page Not Found</h1>
      <p className='mt-2 text-gray-600 dark:text-gray-300'>
        Sorry, we couldn’t find that page.
      </p>
<<<<<<< HEAD
    </div>;
=======
    </div>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  );export default function NotFoundPage() {
  return (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Sorry, we couldn’t find that page.</p>
    </div>;
  );
}
<<<<<<< HEAD


}
};

export default 404;
=======

=======


}

=======
};

export default 404;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
import React from './react';
;
export default /**
 * NotFoundPage - Function description
 */
function NotFoundPage() {
  return (
    <div className='container mx - auto px - 4 py - 20 text - center'>;
      <h1 className='text - 3xl font - semibold'>404 - Page Not Found</h1>;
      <p className='mt - 2 text - gray - 600 dark:text - gray - 300'>;
        Sorry, we couldn’t find that page.;
      </p>;
    </div>);export default /**
 * NotFoundPage - Function description
 */
function NotFoundPage() {
  return (
    <div className="container mx - auto px - 4 py - 20 text - center">;
      <h1 className="text - 3xl font - semibold">404 - Page Not Found</h1>;
      <p className="mt - 2 text - gray - 600 dark:text - gray - 300">Sorry, we couldn’t find that page.</p>;
    </div>);
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
