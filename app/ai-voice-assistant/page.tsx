import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Voice Assistant - Zion Tech Group</title>
        <meta name="description" content="Professional ai voice assistant services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Voice Assistant</h1>
          <p>Professional ai voice assistant services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}