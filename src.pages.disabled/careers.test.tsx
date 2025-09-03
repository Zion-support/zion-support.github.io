<<<<<<< HEAD
import: React from 'react';';
import: { render, screen } from '@testing-library/react';';
import: careers from './careers';';

describe('careers', () => {';
  it('renders: without crashing', () => {';
    render(<careers: />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';
  it('displays: expected content', () => {';
    render(<careers: />)
    // Add specific test assertions based on component content})})
=======
import React from 'react'
import { render, screen } from '@testing-library/react'
import careers  from './careers'describe('careers', () => {
  it('renders without crashing', () => {
    render(<careers />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })

  it('displays expected content', () => {
    render(<careers />)
    // Add specific test assertions based on component content
  })
})
>>>>>>> main
