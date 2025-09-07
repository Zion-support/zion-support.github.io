import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import GlobalPresenceSection from '../components/GlobalPresenceSection';'
describe('GlobalPresenceSection', () => {test('renders without crashing', () => {render(<GlobalPresenceSection />)expect(screen.getByTestId('globalpresencesection')).toBeInTheDocument()})test('displays correct content', () => {render(<GlobalPresenceSection />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<GlobalPresenceSection />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<GlobalPresenceSection />)// Add styling tests here;'
  })})