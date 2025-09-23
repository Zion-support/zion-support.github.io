import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
export const ErrorPage = ({ statusCode = 404, title = 'Page Not Found', message = 'The page you are looking for does not exist.' }) => {
    return (<div className="min-h-screen bg-zion-blue flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">{statusCode}</h1>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-lg mb-8 max-w-md mx-auto">{message}</p>
        <div className="space-x-4">
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>);
};
export default ErrorPage;
