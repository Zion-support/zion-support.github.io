

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Page from './AIChatAssistant.js'
describe('Page'
  it('renders without crashing'
    expect(screen.getByRole('main'
  it('displays correct content'
  it('handles user interactions'
import { render,screen } from '@testing-library/react'; import { describe,it,expect } from 'vitest'; import Page from './AIChatAssistant.js'; ; describe('Page', () => {; it('renders without crashing', () => {; render(<Page />); expect(screen.getByRole('main')).toBeInTheDocument();,}); ; it('displays correct content', () => {; render(<Page />)}); ; it('handles user interactions'

