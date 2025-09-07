import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import SecurityComplianceSection from '../components/SecurityComplianceSection';'
describe('SecurityComplianceSection', () => {test('renders without crashing', () => {render(<SecurityComplianceSection />)expect(screen.getByTestId('securitycompliancesection')).toBeInTheDocument()})test('displays correct content', () => {render(<SecurityComplianceSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<SecurityComplianceSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<SecurityComplianceSection />)// Add styling tests here;'
  })})