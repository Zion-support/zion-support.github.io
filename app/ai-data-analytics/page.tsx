import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional ai data analytics services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Data Analytics</h1>
          <p>Professional ai data analytics services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}