import { render } from '@testing-library/react';
import CaseStudies from './CaseStudies';

describe('CaseStudies', () => {
  it('renders without crashing', () => {
    const { container } = render(<CaseStudies />);
    expect(container).toBeTruthy();
  });
});