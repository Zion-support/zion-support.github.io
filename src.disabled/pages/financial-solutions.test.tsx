<<<<<<< HEAD
import React from 'react;
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import '@testing-library/jest-dom';
import financial-solutions from './financial-solutions';
'
describe('financial-solutions', () => {'
  it('renders without crashing', () => {
=======
import @testing-library/jest-dom';
import financial-solutions from './financial-solutions;

describe('financial-solutions', () => {
  it(renders without crashing', () => {
>>>>>>> main
    render(<financial-solutions />);
    expect(screen.getByRole('main) || screen.getByText(/.*/)).toBeInTheDocument();
  });
<<<<<<< HEAD
'
=======

=======
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import financial-solutions from './financial-solutions'
describe('financial-solutions', () => {
  it('renders without crashing', () => {
    render(<financial-solutions />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })
>>>>>>> main
>>>>>>> main
  it('displays expected content', () => {
    render(<financial-solutions />)
    // Add more specific tests here
<<<<<<< HEAD
  });
});
'
=======
  })
})
>>>>>>> main
