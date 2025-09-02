import React from 'react';
import { render, screen } from '@testing-library/react';
import about from './about';

describe('about', () => {
  it('renders without crashing', () => {
    render(<about />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})
  it('displays expected content', () => {
    render(<about />)
    // Add specific test assertions based on component content})})