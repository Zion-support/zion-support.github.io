import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import ProjectManagementTimeline from '../components/ProjectManagementTimeline';'
describe('ProjectManagementTimeline', () => {test('renders without crashing', () => {render(<ProjectManagementTimeline />)expect(screen.getByTestId('projectmanagementtimeline')).toBeInTheDocument()})test('displays correct content', () => {render(<ProjectManagementTimeline />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<ProjectManagementTimeline />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<ProjectManagementTimeline />)// Add styling tests here;'
  })})