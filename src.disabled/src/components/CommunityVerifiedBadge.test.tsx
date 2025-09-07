import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import '@testing-library/jest-dom';'
import CommunityVerifiedBadge from '../components/CommunityVerifiedBadge';'
describe('CommunityVerifiedBadge', () => {test('renders without crashing', () => {render(<CommunityVerifiedBadge />)expect(screen.getByTestId('communityverifiedbadge')).toBeInTheDocument()})test('displays correct content', () => {render(<CommunityVerifiedBadge />)// Add specific content tests here;'
  })test('handles user interactions', () => {render(<CommunityVerifiedBadge />)// Add interaction tests here;'
  })test('applies correct styling', () => {render(<CommunityVerifiedBadge />)// Add styling tests here;'
  })})