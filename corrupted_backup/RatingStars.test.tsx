import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import RatingStars from '../components/RatingStars';
describe('RatingStars', () => {test('renders without crashing', () => {render(<RatingStars />)expect(screen.getByTestId('ratingstars')).toBeInTheDocument()})test('displays correct content', () => {render(<RatingStars />)// Add specific content tests here;
  })test('handles user interactions', () => {render(<RatingStars />)// Add interaction tests here;
  })test('applies correct styling', () => {render(<RatingStars />)// Add styling tests here;
  })})