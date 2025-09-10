import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('renders without crashing', () => {
    const { container } = render(<ContactForm />);
    expect(container).toBeTruthy();
  });
});