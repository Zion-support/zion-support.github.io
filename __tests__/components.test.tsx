import { describe, test, expect } from "@jest/globals"
import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom';
import { HelmetProvider } from "react-helmet-async"
import LoadingSpinner from "../app/components/LoadingSpinner"
import SEOHead from "../app/components/SEOHead"

describe("Components", () => {
  test("LoadingSpinner component renders", () => {
    render(
      <HelmetProvider>
        <LoadingSpinner />
      </HelmetProvider>,
    )
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument()
  })
  
  test("SEOHead component renders", () => {
    render(
      <HelmetProvider>
        <SEOHead title="Test Title" description="Test Description" />
      </HelmetProvider>,
    )
    expect(document.head).toBeInTheDocument()
  })
});
