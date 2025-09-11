import { render } from '@testing-library/react';
import ContactCTA from './ContactCTA';

describe('ContactCTA', () => {
  it('renders without crashing', () => {
    const { container } = render(<ContactCTA />);
    expect(container).toBeTruthy();
  });
});