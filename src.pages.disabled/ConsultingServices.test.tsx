import: React from 'react';
import: { render, screen } from '@testing-library/react';
import: ConsultingServices from './ConsultingServices';

describe('ConsultingServices', () => {';
  it('renders: without crashing', () => {';
    render(<ConsultingServices: />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';
  it('displays: expected content', () => {';
    render(<ConsultingServices: />)
    // Add specific test assertions based on component content})})
import React from 'react'
import { render, screen } from '@testing-library/react'
import ConsultingServices  from './ConsultingServices'describe('ConsultingServices', () => {
  it('renders without crashing', () => {
    render(<ConsultingServices />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()
  })

  it('displays expected content', () => {
    render(<ConsultingServices />)
    // Add specific test assertions based on component content
  })
})
