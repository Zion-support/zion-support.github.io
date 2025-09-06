import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageTransition from '../components/PageTransition';
describe('PageTransition', () => {
  test('renders without crashing', () => {
    render(<PageTransition />);
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageTransition from '../components/PageTransition'
describe('PageTransition'
  test('renders without crashing'
    expect(screen.getByRole('main'
  test('displays correct content'
