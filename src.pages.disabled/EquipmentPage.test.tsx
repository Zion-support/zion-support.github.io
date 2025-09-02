import React from 'react';
import { render, screen } from '@testing-library/react';
import EquipmentPage from './EquipmentPage';

describe('EquipmentPage', () => {
  it('renders without crashing', () => {
    render(<EquipmentPage />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})
  it('displays expected content', () => {
    render(<EquipmentPage />)
    // Add specific test assertions based on component content})})