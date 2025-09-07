<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import AIChatbot from '../components/AIChatbot';
describe('AIChatbot', () => {test('renders without crashing', () => {render(<AIChatbot />)expect(screen.getByTestId('aichatbot')).toBeInTheDocument()})test('displays correct content', () => {render(<AIChatbot />)// Add specific content tests here;
  })test('handles user interactions', () => {render(<AIChatbot />)// Add interaction tests here;
  })test('applies correct styling', () => {render(<AIChatbot />)// Add styling tests here;
  })})
<<<<<<< HEAD
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
