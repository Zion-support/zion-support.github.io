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
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
