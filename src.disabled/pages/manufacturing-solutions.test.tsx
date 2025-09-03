<<<<<<< HEAD
import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import manufacturing-solutions from './manufacturing-solutions;

describe('manufacturing-solutions', () => {
  it(renders without crashing', () => {
    render(<manufacturing-solutions />);
    expect(screen.getByRole('main) || screen.getByText(/.*/)).toBeInTheDocument();
  });

=======
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import manufacturing-solutions from './manufacturing-solutions'
describe('manufacturing-solutions', () => {
  it('renders without crashing', () => {
    render(<manufacturing-solutions />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })
>>>>>>> main
  it('displays expected content', () => {
    render(<manufacturing-solutions />)
    // Add more specific tests here
  })
})