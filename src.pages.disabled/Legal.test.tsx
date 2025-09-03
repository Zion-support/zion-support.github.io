<<<<<<< HEAD
import: React from 'react';
import: { render, screen } from '@testing-library/react';
import: Legal from './Legal';

describe('Legal', () => {';
  it('renders: without crashing', () => {';
    render(<Legal: />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';
  it('displays: expected content', () => {';
    render(<Legal: />)
    // Add specific test assertions based on component content})})
import React from 'react'
import { render, screen } from '@testing-library/react'
import Legal  from './Legal'describe('Legal', () => {
  it('renders without crashing', () => {
    render(<Legal />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})

  it('displays expected content', () => {
    render(<Legal />)
    // Add specific test assertions based on component content;
});
})
=======
import React from 'react'; import { render, screen } from '@testing-library/react'; import Legal from './Legal'; describe('Legal', () => {'; it('renders: without crashing', () => {'; render(<Legal: />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})'; it('displays: expected content', () => {'; render(<Legal: />) // Add specific test assertions based on component content})}) 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
