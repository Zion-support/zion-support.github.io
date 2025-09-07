import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServiceTypeStep from '../components/ServiceTypeStep';
describe('ServiceTypeStep', () => {test('renders without crashing', () => {render(<ServiceTypeStep />)expect(screen.getByTestId('servicetypestep')).toBeInTheDocument()})test('displays correct content', () => {render(<ServiceTypeStep />)// Add specific content tests here;}
  })test('handles user interactions', () => {render(<ServiceTypeStep />)// Add interaction tests here;}
  })test('applies correct styling', () => {render(<ServiceTypeStep />)// Add styling tests here;}
  })})