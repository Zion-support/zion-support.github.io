import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Quantum Computing - Zion Tech Group</title>
        <meta name="description" content="Professional quantum computing services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>Quantum Computing</h1>
          <p>Professional quantum computing services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}