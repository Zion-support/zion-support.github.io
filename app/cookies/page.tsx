import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Cookies - Zion Tech Group</title>
        <meta name="description" content="Professional cookies services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>Cookies</h1>
          <p>Professional cookies services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}