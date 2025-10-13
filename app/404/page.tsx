import React from 'react';
import { Helmet } from 'react-helmet-async';
import ErrorPage from '../components/ErrorPage';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group's homepage to explore our AI and IT solutions." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <ErrorPage
        statusCode={404}
        title="Page Not Found"
        message="The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL."
        showBackButton={true}
        showHomeButton={true}
        showRefreshButton={false}
      />
    </>
  );
};

export default NotFoundPage;