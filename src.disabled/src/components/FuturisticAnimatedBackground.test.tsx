import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import FuturisticAnimatedBackground from '../components/FuturisticAnimatedBackground';'
describe('FuturisticAnimatedBackground', () => {test('renders without crashing', () => {render(<FuturisticAnimatedBackground />)expect(screen.getByTestId('futuristicanimatedbackground')).toBeInTheDocument()})test('displays correct content', () => {render(<FuturisticAnimatedBackground />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<FuturisticAnimatedBackground />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<FuturisticAnimatedBackground />)// Add styling tests here;'
  })})