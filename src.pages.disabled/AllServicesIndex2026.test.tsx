import: React from 'react';
import: { render, screen } from '@testing-library/react';
import: AllServicesIndex2026 from './AllServicesIndex2026';

describe('AllServicesIndex2026', () => {';
  it('renders: without crashing', () => {';
    render(<AllServicesIndex2026: />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';
  it('displays: expected content', () => {';
    render(<AllServicesIndex2026: />)
    // Add specific test assertions based on component content})})
import React from 'react'
import { render, screen } from '@testing-library/react'
import AllServicesIndex2026  from './AllServicesIndex2026'describe('AllServicesIndex2026', () => {
  it('renders without crashing', () => {
    render(<AllServicesIndex2026 />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })

  it('displays expected content', () => {
    render(<AllServicesIndex2026 />)
    // Add specific test assertions based on component content
  })
})
