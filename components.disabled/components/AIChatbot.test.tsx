<<<<<<< HEAD
=======
import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import AIChatbot from '../components/AIChatbot';
describe('AIChatbot', () => {test('renders without crashing', () => {render(<AIChatbot />)expect(screen.getByTestId('aichatbot')).toBeInTheDocument()})test('displays correct content', () => {render(<AIChatbot />)// Add specific content tests here;
  })test('handles user interactions', () => {render(<AIChatbot />)// Add interaction tests here;
  })test('applies correct styling', () => {render(<AIChatbot />)// Add styling tests here;
  })})
>>>>>>> 19d1d1ef532f9e4690306331c74cc9ccbd0b556b
