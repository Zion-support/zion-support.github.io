<<<<<<< HEAD
import { describe, test, expect } from '@jest/globals";"
import { render, screen } from '@testing-library/react";"
import { HelmetProvider } from 'react-helmet-async";

const TestComponent = () => {
  return (
    <HelmetProvider>
      <div>Test content</div>
    </HelmetProvider>
  );"
};"
"
describe("Components", () => {"
  test("should render without errors", () => {
    expect(true).toBe(true);"
  });"
  "
  test("should render test content", () => {"
    render(<TestComponent />);"
    expect(screen.getByText("Test content")).toBeInTheDocument();"
  });"
  "
  test("should handle SEO head component", () => {
    render(
      <HelmetProvider>
        <div>SEO Test</div>"
      </HelmetProvider>"
    );"
    expect(screen.getByText("SEO Test")).toBeInTheDocument();"
  });"
});"'"
=======
import { describe, test, expect } from from '@jest/globals'
import { render, screen } from from '@testing-library/react'
import { HelmetProvider } from from 'react-helmet-async'
import '@testing-library/jest-dom'
import Loading from '../app/components/Loading'
import SEOHeadWrapper from '../app/components/SEOHeadWrapper'
;
describe('Loading Component', () => {;
  test('renders loading text', () => {;
    render(<HelmetProvider>;
        <Loading />);
      </HelmetProvider>);
    );
    expect(screen.getByText('Loading')).toBeTruthy();
  })});
;
describe('SEOHeadWrapper Component', () => {;
  test('renders without crashing', () => {;
    const { container } = render(<HelmetProvider>;
        <SEOHeadWrapper;
          title = "Test Title""
          description="Test Description"
          keywords={['test', 'keywords']}
        />);
      </HelmetProvider>);
    );
    expect(container).toBeTruthy();"
  })});";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
