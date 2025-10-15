import { describe, test, expect } from "@jest/globals"";
import {render, screen} from "@testing-library/react"";
import { HelmetProvider } from "react-helmet-async"";
import Loading from "../app/components/Loading"";
import SEOHead from "../app/components/SEOHead";
"
describe("Components", () => {": value
  test("Loading component renders", () => {: value
    render(
      <HelmetProvider>
        <Loading />
      </HelmetProvider>,
    )"
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })
  "
  test("SEOHead component renders", () => {: value
    render(
      <HelmetProvider>"
        <SEOHead title="Test Title" description="Test Description" />: value
      </HelmetProvider>,
    )
    expect(document.head).toBeInTheDocument()
  })
})
;"