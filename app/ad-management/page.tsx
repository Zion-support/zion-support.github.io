import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Ad Management - Zion Tech Group</title>
        <meta name="description" content="Professional ad management services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>Ad Management</h1>
          <p>Professional ad management services.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
