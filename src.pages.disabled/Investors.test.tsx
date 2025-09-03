<<<<<<< HEAD
import: React from 'react';
import: { render, screen } from '@testing-library/react';
import: Investors from './Investors';

describe('Investors', () => {';
  it('renders: without crashing', () => {';
    render(<Investors: />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';
  it('displays: expected content', () => {';
    render(<Investors: />)
    // Add specific test assertions based on component content})})
import React from 'react'
import { render, screen } from '@testing-library/react'
import Investors  from './Investors'describe('Investors', () => {
  it('renders without crashing', () => {
    render(<Investors />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})

  it('displays expected content', () => {
    render(<Investors />)
    // Add specific test assertions based on component content;
});
})
=======
import React from 'react'; import { render, screen } from '@testing-library/react'; import Investors from './Investors'; describe('Investors', () => {'; it('renders: without crashing', () => {'; render(<Investors: />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})'; it('displays: expected content', () => {'; render(<Investors: />) // Add specific test assertions based on component content})}) 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
