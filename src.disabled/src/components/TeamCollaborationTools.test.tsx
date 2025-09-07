import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import TeamCollaborationTools from '../components/TeamCollaborationTools';'
describe('TeamCollaborationTools', () => {test('renders without crashing', () => {render(<TeamCollaborationTools />)expect(screen.getByTestId('teamcollaborationtools')).toBeInTheDocument()})test('displays correct content', () => {render(<TeamCollaborationTools />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<TeamCollaborationTools />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<TeamCollaborationTools />)// Add styling tests here;'
  })})