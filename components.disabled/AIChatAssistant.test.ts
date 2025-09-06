
import { render, screen } from '@testing-library/
import AIChatAssistant from './
import { render, screen } from '@testing-library/
import AIChatAssistant from './
import { render,screen } from '@testing-library/react'; import { describe,it,expect } from 'vitest'; import AIChatAssistant from './AIChatAssistant'; describe('AIChatAssistant',() => {; it('renders without crashing',() => {; render(<AIChatAssistant />); expect(screen.getByRole('main').toBeInTheDocument();,}); it('displays correct content',() => {; render(
import { render,screen } from '@testing-library/react'; import { describe,it,expect } from 'vitest'; import AIChatAssistant from './AIChatAssistant'; describe('AIChatAssistant', () => {; it('renders without crashing', () => {; render(<AIChatAssistant />); expect(screen.getByRole('main').toBeInTheDocument();,}); it('displays correct content', () => {; render(