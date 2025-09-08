import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import FavoriteButton from '../components/FavoriteButton';'
describe('FavoriteButton', () => {test('renders without crashing', () => {render(<FavoriteButton />)expect(screen.getByTestId('favoritebutton')).toBeInTheDocument()})test('displays correct content', () => {render(<FavoriteButton />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<FavoriteButton />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<FavoriteButton />)// Add styling tests here;'
  })})