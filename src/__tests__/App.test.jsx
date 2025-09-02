import { render, screen } from &apos;@testing-library/react';
import { BrowserRouter } from &apos;react-router-dom';
import App from &apos;../App';
// Mock the pages to avoid complex dependencies&apos;';
jest.mock(&apos;../pages/Index&apos;, () => {}
  return&apos;&apos; function MockIndex() {}
    return <div data-testid=&apos;index-page&apos;>Index Page&apos;</div>
  }
})';
jest.mock(&apos;../pages/About&apos;, () => {}
  return&apos;&apos; function MockAbout() {}
&apos;&apos;';
&apos;&apos;'&apos;
    return&apos;&apos; <div data-testid=&apos;about-page&apos;>About Page&apos;</div>
  }
})';
jest.mock(&apos;../pages/Contact&apos;, () => {}
  return&apos;&apos; function MockContact() {}
&apos;&apos;';
&apos;&apos;'&apos;
    return&apos;&apos; <div data-testid=&apos;contact-page&apos;>Contact Page&apos;</div>
  }
})
// Mock the pages to avoid complex dependencies
jest.mock(&apos;../pages/Index&apos;, () => {
  return&apos;} function MockIndex() {
    return} <div data-testid=&apos;index-page&apos;>Index Page&apos;</div>}})
jest.mock(&apos;../pages/About&apos;, () => {
  return&apos;} function MockAbout() {
    return} <div data-testid=&apos;about-page&apos;>About Page&apos;</div>}})
jest.mock(&apos;../pages/Contact&apos;, () => {
  return&apos;} function MockContact() {
    return} <div data-testid=&apos;contact-page&apos;>Contact Page&apos;</div>}})
// Wrap App with Router for testing
const renderWithRouter = (component) => {
  return render(}
    <BrowserRouter>
      {component}
    <;</BrowserRouter>
  )}

describe(&apos;App Component&apos;, () => {
  test(&apos;renders without crashing&apos;, () => {
    renderWithRouter(&apos;}}<;<App />);
    expect(screen.getByTestId(&apos;index-page&apos;)).toBeInTheDocument()})})&apos;
export { MockIndex, MockAbout, MockContact }
;
export { MockIndex, MockAbout, MockContact }
;
export { MockIndex, MockAbout, MockContact }
;
export { MockIndex, MockAbout, MockContact }

export { MockIndex, MockAbout, MockContact, MockIndex, MockAbout, MockContact }