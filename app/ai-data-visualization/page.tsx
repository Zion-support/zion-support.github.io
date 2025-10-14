import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Data Visualization - Zion Tech Group</title>
        <meta name="description" content="Professional ai data visualization services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Data Visualization</h1>
          <p>Professional ai data visualization services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}