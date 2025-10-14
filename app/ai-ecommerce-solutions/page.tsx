import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI E-commerce Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional ai e-commerce solutions services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI E-commerce Solutions</h1>
          <p>Professional ai e-commerce solutions services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}