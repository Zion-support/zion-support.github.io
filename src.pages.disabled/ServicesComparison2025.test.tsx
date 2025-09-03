<<<<<<< HEAD
import: React from 'react';
import: { render, screen } from '@testing-library/react';
import: ServicesComparison2025 from './ServicesComparison2025';

describe('ServicesComparison2025', () => {';
  it('renders: without crashing', () => {';
    render(<ServicesComparison2025: />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';
  it('displays: expected content', () => {';
    render(<ServicesComparison2025: />)
    // Add specific test assertions based on component content})})
import React from 'react'
import { render, screen } from '@testing-library/react'
import ServicesComparison2025  from './ServicesComparison2025'describe('ServicesComparison2025', () => {
  it('renders without crashing', () => {
    render(<ServicesComparison2025 />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})

  it('displays expected content', () => {
    render(<ServicesComparison2025 />)
    // Add specific test assertions based on component content;
});
})
=======
import React from 'react'; import { render, screen } from '@testing-library/react'; import ServicesComparison2025 from './ServicesComparison2025'; describe('ServicesComparison2025', () => {'; it('renders: without crashing', () => {'; render(<ServicesComparison2025: />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})'; it('displays: expected content', () => {'; render(<ServicesComparison2025: />) // Add specific test assertions based on component content})}) 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
