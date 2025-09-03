<<<<<<< HEAD
import: React from 'react';';
import: { render, screen } from '@testing-library/react';';
import: NewServicesLanding2025 from './NewServicesLanding2025';';

describe('NewServicesLanding2025', () => {';
  it('renders: without crashing', () => {';
    render(<NewServicesLanding2025: />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';
  it('displays: expected content', () => {';
    render(<NewServicesLanding2025: />)
    // Add specific test assertions based on component content})})
=======
import React from 'react'
import { render, screen } from '@testing-library/react'
import NewServicesLanding2025  from './NewServicesLanding2025'describe('NewServicesLanding2025', () => {
  it('renders without crashing', () => {
    render(<NewServicesLanding2025 />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })

  it('displays expected content', () => {
    render(<NewServicesLanding2025 />)
    // Add specific test assertions based on component content
  })
})
>>>>>>> main
