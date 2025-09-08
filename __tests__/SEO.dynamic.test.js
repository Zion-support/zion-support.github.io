
    expect(screen && screen.getByTestId('seo ; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import SEOdynamic from "./components/SEO ; describe('SEOdynamic', () => { test("renders without crashing",() => { render(<SEOdynamic />); expect(screen && screen.getByTestId("seo && seo.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<SEOdynamic />)}); test("handles user interactions",() => { render(<SEOdynamic />)}); test("applies correct styling"


  test('renders without crashing', () => {

    render(<SEO />);'
    expect(screen.getByTestId('seo.dynamic')).toBeInTheDocument();
  });'
  test('displays correct content', () => {
    render(<SEO />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });'
  test('handles user interactions', () => {
    render(<SEO />);
    // Add interaction tests here
  });'

  test('applies correct styling', () => {
    render(<SEO />);
    // Add styling tests if needed




