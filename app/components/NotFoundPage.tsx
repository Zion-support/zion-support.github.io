'use client';

import React, { memo } from 'react';

const NotFoundPage: React.FC = memo(() => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
});

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;