import { render, screen } from '@testing-library/react';
export default function Page() {
);

jest.mock('../pages/Contact', () => {
  return function MockContact() {
"
    return <div data-testid="contact-page">Contact Page</div>;
  };
});

// Wrap App with Router for testing
const renderWithRouter = component => {

  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('App Component', () => {

  test('renders without crashing', () => {
    renderWithRouter(<App />);
    expect(screen.getByTestId('index-page')).toBeInTheDocument();
  });
});
'"