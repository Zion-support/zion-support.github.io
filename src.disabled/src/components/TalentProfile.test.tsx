import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import TalentProfile from '../components/TalentProfile';'
describe('TalentProfile', () => {test('renders without crashing', () => {render(<TalentProfile />)expect(screen.getByTestId('talentprofile')).toBeInTheDocument()})test('displays correct content', () => {render(<TalentProfile />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<TalentProfile />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<TalentProfile />)// Add styling tests here;'
  })})