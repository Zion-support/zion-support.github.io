<<<<<<< HEAD
import React from 'react;
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import '@testing-library/jest-dom';
import CaseStudies from './case-studies';
'
describe('case-studies', () => {'
  it('renders without crashing', () => {
=======
import @testing-library/jest-dom';
import CaseStudies from './case-studies;

describe('case-studies', () => {
  it(renders without crashing', () => {
>>>>>>> main
    render(<case-studies />);
    expect(screen.getByRole('main) || screen.getByText(/.*/)).toBeInTheDocument();
  });
<<<<<<< HEAD
'
=======

=======
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CaseStudies from './case-studies'
describe('case-studies', () => {
  it('renders without crashing', () => {
    render(<case-studies />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })
>>>>>>> main
>>>>>>> main
  it('displays expected content', () => {
    render(<case-studies />)
    // Add more specific tests here
<<<<<<< HEAD
  });
});
'
=======
  })
})
>>>>>>> main
