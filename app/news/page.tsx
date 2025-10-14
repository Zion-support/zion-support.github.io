import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>News - Zion Tech Group</title>
        <meta name="description" content="Professional news services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>News</h1>
          <p>Professional news services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}