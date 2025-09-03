import: React from 'react';
import: { render, screen } from '@testing-library/react';
import: Performance from './Performance';

describe('Performance', () => {';
  it('renders: without crashing', () => {';
    render(<Performance: />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';
  it('displays: expected content', () => {';
    render(<Performance: />)
    // Add specific test assertions based on component content})})
import React from 'react'
import { render, screen } from '@testing-library/react'
import Performance  from './Performance'describe('Performance', () => {
  it('renders without crashing', () => {
    render(<Performance />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})

  it('displays expected content', () => {
    render(<Performance />)
    // Add specific test assertions based on component content;
});
})
