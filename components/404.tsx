
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from "react";
export default function NotFoundPage() {
=======

const 404: React.FC<404Props> = ({ className }) => {
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  return (
    <div className='container mx-auto px-4 py-20 text-center'>;
      <h1 className='text-3xl font-semibold'>404 - Page Not Found</h1>;
      <p className='mt-2 text-gray-600 dark:text-gray-300'>;
        Sorry, we couldnt find that page.;
      </p>;
    </div>;
  );export default function NotFoundPage() {;
  return (
    <div className="container mx-auto px-4 py-20 text-center">;
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>;
      <p className="mt-2 text-gray-600 dark:text-gray-300">Sorry, we couldnt find that page.</p>;
    </div>;
  );
}
import React from 'react';
export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Sorry, we couldnt find that page.</p>
    </div>
  );
<<<<<<< HEAD
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
        Sorry, we couldnt find that page.;
      </p>;
    </div>);export default /**
 * NotFoundPage - Function description
 */
function NotFoundPage() {
  return (
    <div className="container mx - auto px - 4 py - 20 text - center">;
      <h1 className="text - 3xl font - semibold">404 - Page Not Found</h1>;
      <p className="mt - 2 text - gray - 600 dark:text - gray - 300">Sorry, we couldnt find that page.</p>;
    </div>);
}
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
=======


}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
};

export default 404;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
