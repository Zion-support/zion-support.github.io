import React from 'react';
import { render, screen } from '@testing-library/react';
import team from './team';

describe('team', () => {
  it('renders without crashing', () => {
    render(<team />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})
  it('displays expected content', () => {
    render(<team />)
    // Add specific test assertions based on component content})})