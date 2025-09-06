import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CategoryCard } from '@/components/CategoryCard';

it('renders category card with link to slug', () => {
  render(
    <MemoryRouter>
      <CategoryCard title='Test Category' description='desc' icon='*' />
    </MemoryRouter>
  );

  const link = screen.getByRole('link', { name: /test category/i });
  expect(link).toHaveAttribute('href', '/category/test-category');
});

it('normalizes slug with special characters', () => {
  render(
    <MemoryRouter>
      <CategoryCard title='R&D Tools!' description='desc' icon='*' />
    </MemoryRouter>
  );

  const link = screen.getByRole('link', { name: /r&d tools!/i });
  expect(link).toHaveAttribute('href', '/category/rd-tools');
});

it('handles empty title gracefully', () => {
  render(
    <MemoryRouter>
      <CategoryCard title='' description='desc' icon='*' />
    </MemoryRouter>
  );

  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('href', '/category/');
});