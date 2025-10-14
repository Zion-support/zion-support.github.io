import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Custom Software - Zion Tech Group</title>
        <meta name="description" content="Professional custom software services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>Custom Software</h1>
          <p>Professional custom software services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}