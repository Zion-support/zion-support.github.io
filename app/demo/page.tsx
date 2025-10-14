import React from 'react'
import { Helmet } from 'react-helmet-async'

const DemoPage = () => {
  return (
    <>
      <Helmet>
        <title>Demo Page - Zion Tech Group</title>
        <meta name="description" content="Demo Page - Zion Tech Group" />
      </Helmet>
      <div>
        <div>
          <h1>Demo Page</h1>
          <p>This page is under development.</p>
        </div>
      </div>
    </>
  );
}

export default DemoPage