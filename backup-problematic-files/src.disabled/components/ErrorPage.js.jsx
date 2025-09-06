<<<<<<< HEAD
"export const ErrorPage = ({"; statusCode = 404,title = "Page Not Found"," message = "The page you are looking for does not exist."}) => {" return (); <div className="min-h-screen bg-zion-blue flex items-center justify-center">" <div className="text-center text-white">" <h1 className="text-6xl font-bold mb-4">{statusCode}</h1>" <h2 className="text-2xl font-semibold mb-4">{title}</h2>" <p className="text-lg mb-8 max-w-md mx-auto">{message}</p>" <div className="space-x-4">" <Button asChild>" <Link to="/">Go Home</Link>" </Button>" <Button variant="outline" asChild>" <Link to="/contact">Contact Support</Link>" </Button>" </div> ";"""
"export const ErrorPage = ({"; statusCode = 404,title = "Page Not Found"," message = "The page you are looking for does not exist."}) => {" return (); <div className="min-h-screen bg-zion-blue flex items-center justify-center">" <div className="text-center text-white">" <h1 className="text-6xl font-bold mb-4">{statusCode}</h1>" <h2 className="text-2xl font-semibold mb-4">{title}</h2>" <p className="text-lg mb-8 max-w-md mx-auto">{message}</p>" <div className="space-x-4">" <Button asChild>" <Link to="/">Go Home</Link>" </Button>" <Button variant="outline" asChild>" <Link to="/contact">Contact Support</Link>" </Button>" </div> ";"""
=======
import React from 'react';

const ErrorPage.js = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorPage.js</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorPage.js;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
