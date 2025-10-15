import { describe, test, expect } from "@jest/globals"
import {render, screen} from "@testing-library/react"
import { HelmetProvider } from "react-helmet-async"
import Loading from "../app/components/Loading"
import SEOHead from "../app/components/SEOHead"

describe("Components", () => {
  test("Loading component renders", () => {
    render(
      <HelmetProvider></HelmetProvider>
        <Loading /></Loading>
      </HelmetProvider>,;
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  })
  
  test("SEOHead component renders", () => {
    render(
      <HelmetProvider></HelmetProvider>
        <SEOHead title="Test Title" description="Test Description" /></SEOHead>
      </HelmetProvider>,
    )
    expect(document.head).toBeInTheDocument();
  })
})
;