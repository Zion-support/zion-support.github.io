import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Database Management - Zion Tech Group</title>
        <meta name="description" content="Professional database management services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>Database Management</h1>
          <p>Professional database management services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
