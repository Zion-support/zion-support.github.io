<<<<<<< HEAD
module.exports = function ErrorBanner($1) { return ( <div className="min-h-screen bg-white"> {msg} </div> )} export default ErrorBanner;""
=======
import React from 'react';

export function ErrorBanner({ message }) {
  return (
    <div className="min-h-screen bg-white">
      {message}
    </div>
  );
}

export default ErrorBanner;
>>>>>>> main
