<<<<<<< HEAD
=======
import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import AIChatbotSystem from '../components/AIChatbotSystem';
describe('AIChatbotSystem', () => {test('renders without crashing', () => {render(<AIChatbotSystem />)expect(screen.getByTestId('aichatbotsystem')).toBeInTheDocument()})test('displays correct content', () => {render(<AIChatbotSystem />)// Add specific content tests here;
  })test('handles user interactions', () => {render(<AIChatbotSystem />)// Add interaction tests here;
  })test('applies correct styling', () => {render(<AIChatbotSystem />)// Add styling tests here;
  })})
>>>>>>> 19d1d1ef532f9e4690306331c74cc9ccbd0b556b
