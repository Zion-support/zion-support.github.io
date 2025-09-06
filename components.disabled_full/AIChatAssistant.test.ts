<<<<<<< HEAD


<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import { render,screen } from '@testing-library/react'; import { describe,it,expect } from 'vitest'; import AIChatAssistant from './AIChatAssistant'; ; describe('AIChatAssistant',() => {; it('renders without crashing',() => {; render(<AIChatAssistant />); expect(screen.getByRole('main')).toBeInTheDocument(),}); ; it('displays correct content',() => {; render(<AIChatAssistant />)}); ; it('handles user interactions',() => {; render(<AIChatAssistant />)}),});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AIChatAssistant from './AIChatAssistant'
describe('AIChatAssistant'
  it('renders without crashing'
<<<<<<< HEAD
<<<<<<< HEAD
    expect(screen.getByRole('main'
  it('displays correct content'
  it('handles user interactions'
import { render,screen } from '@testing-library/react'; import { describe,it,expect } from 'vitest'; import AIChatAssistant from './AIChatAssistant'; ; describe('AIChatAssistant', () => {; it('renders without crashing', () => {; render(<AIChatAssistant />); expect(screen.getByRole('main')).toBeInTheDocument();,}); ; it('displays correct content', () => {; render(<AIChatAssistant />)}); ; it('handles user interactions'
=======

    expect(screen ; import { describe,it,expect } from 'vitest'; import AIChatAssistant from './AIChatAssistant'; ; describe('AIChatAssistant', () => {; it('renders without crashing', () => {; render(<AIChatAssistant />); expect(screen && screen.getByRole('main')).toBeInTheDocument();,}); ; it('displays correct content', () => {; render(<AIChatAssistant />)}); ; it('handles user interactions'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
    expect(screen ; import { describe,it,expect } from 'vitest'; import AIChatAssistant from './AIChatAssistant'; ; describe('AIChatAssistant', () => {; it('renders without crashing', () => {; render(<AIChatAssistant />); expect(screen && screen.getByRole('main')).toBeInTheDocument();,}); ; it('displays correct content', () => {; render(<AIChatAssistant />)}); ; it('handles user interactions'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
