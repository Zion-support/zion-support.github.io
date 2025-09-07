import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import LanguageDetectionPopup from '../components/LanguageDetectionPopup';'
describe('LanguageDetectionPopup', () => {test('renders without crashing', () => {render(<LanguageDetectionPopup />)expect(screen.getByTestId('languagedetectionpopup')).toBeInTheDocument()})test('displays correct content', () => {render(<LanguageDetectionPopup />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<LanguageDetectionPopup />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<LanguageDetectionPopup />)// Add styling tests here;'
  })})