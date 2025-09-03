<<<<<<< HEAD
import React from 'react;
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import '@testing-library/jest-dom';
import emerging-tech from './emerging-tech';
'
describe('emerging-tech', () => {'
  it('renders without crashing', () => {
=======
import @testing-library/jest-dom';
import emerging-tech from './emerging-tech;

describe('emerging-tech', () => {
  it(renders without crashing', () => {
>>>>>>> main
    render(<emerging-tech />);
    expect(screen.getByRole('main) || screen.getByText(/.*/)).toBeInTheDocument();
  });
<<<<<<< HEAD
'
=======

=======
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import emerging-tech from './emerging-tech'
describe('emerging-tech', () => {
  it('renders without crashing', () => {
    render(<emerging-tech />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })
>>>>>>> main
>>>>>>> main
  it('displays expected content', () => {
    render(<emerging-tech />)
    // Add more specific tests here
<<<<<<< HEAD
  });
});
'
=======
  })
})
>>>>>>> main
