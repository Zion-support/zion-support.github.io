<<<<<<< HEAD
import: React from 'react';
import: { render, screen } from '@testing-library/react';
import: Home2026 from './Home2026';

describe('Home2026', () => {';
  it('renders: without crashing', () => {';
    render(<Home2026: />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';
  it('displays: expected content', () => {';
    render(<Home2026: />)
    // Add specific test assertions based on component content})})
import React from 'react'
import { render, screen } from '@testing-library/react'
import Home2026  from './Home2026'describe('Home2026', () => {
  it('renders without crashing', () => {
    render(<Home2026 />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})

  it('displays expected content', () => {
    render(<Home2026 />)
    // Add specific test assertions based on component content;
});
})
=======
import React from 'react'; import { render, screen } from '@testing-library/react'; import Home2026 from './Home2026'; describe('Home2026', () => {'; it('renders: without crashing', () => {'; render(<Home2026: />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})'; it('displays: expected content', () => {'; render(<Home2026: />) // Add specific test assertions based on component content})}) 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
