
  
  it('should render a basic structure', () => {

    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });



  });
});
import { render, screen } from '@testing-library/react;
import @testing-library/jest-dom';


it('renders without crashing, () => {
  render(<HomePage />);
  expect(screen.getByText(Welcome to Zion Tech Group')).toBeInTheDocument();

});






