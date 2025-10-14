<<<<<<< HEAD
import React from "react";
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
describe("Component Tests", () => {
  test("renders without crashing", () => {
    render(
      <HelmetProvider></HelmetProvider>
        <div>Test Component</div>
      </HelmetProvider>
    );
  });
});
=======
import React from "react":;
import { render } from "@testing-library/react":;
import { HelmetProvider } from "react-helmet-async":;
import SEOEnhancer from "../app/components/SEOEnhancer":
;
describe("Component Tests", () =>{;
test("SEOEnhancer renders without crashing", () =>{;
render(
      <HelmetProvider><SEOEnhancer /></HelmetProvider>,
    );
  });
});

  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
