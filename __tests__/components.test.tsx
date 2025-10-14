import React from "react"
import { render } from "@testing-library/react"
import { HelmetProvider } from "react-helmet-async"
import SEOEnhancer from "../app/components/SEOEnhancer"
"
describe("Component Tests", () => {"
  test("SEOEnhancer renders without crashing", () => {
    render(
      <HelmetProvider></Helmet>
        <SEOEnhancer />
      </HelmetProvider>,)
    )
  })
})
"
