<<<<<<< HEAD
import React from "react";
export default function NotFoundPage() {
=======
import React from 'react';

interface 404Props {
  className?: string;
}

const 404: React.FC<404Props> = ({ className }) => {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className='container mx-auto px-4 py-20 text-center'>
      <h1 className='text-3xl font-semibold'>404 - Page Not Found</h1>
      <p className='mt-2 text-gray-600 dark:text-gray-300'>
        Sorry, we couldn’t find that page.
      </p>
    </div>
  );export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Sorry, we couldn’t find that page.</p>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default 404;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
