import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CategoryCard } from '@/components/CategoryCard';
it('renders category card with link to slug', () => {
  render($2);
  const link = screen.getByRole($2);
  expect(link).toHaveAttribute('href/category/test-category')
}),

it('normalizes slug with special characters', () => {
  render($2);
  const link = screen.getByRole($2);
  expect(link).toHaveAttribute('href/category/rd-tools')
}),

it('removes accents from slug', () => {
  render($2);
  const link = screen.getByRole($2);
  expect(link).toHaveAttribute('href/category/creme-brulee')
}),

it('treats underscores as spaces in slug', () => {
  render($2);
  const link = screen.getByRole($2);
  expect(link).toHaveAttribute('href/category/ai-tools')
}),
