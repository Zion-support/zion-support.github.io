<<<<<<< HEAD
import { renderscreen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CategoryCard } from '@/components/CategoryCard';

it('renders category card with link to slug'() => {
=======
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CategoryCard } from '@/components/CategoryCard';

it('renders category card with link to slug', () => {
>>>>>>> origin/auto/autonomy-17186719616
  render(
    <MemoryRouter>
      <CategoryCard title="Test Category" description="desc" icon="*" />
    </MemoryRouter>
  );

<<<<<<< HEAD
  const link = screen.getByRole('link'{ name: /test category/i });
  expect(link).toHaveAttribute('href'/category/test-category');
});

it('normalizes slug with special characters'() => {
=======
  const link = screen.getByRole('link', { name: /test category/i });
  expect(link).toHaveAttribute('href', '/category/test-category');
});

it('normalizes slug with special characters', () => {
>>>>>>> origin/auto/autonomy-17186719616
  render(
    <MemoryRouter>
      <CategoryCard title="R&D Tools!" description="desc" icon="*" />
    </MemoryRouter>
  );

<<<<<<< HEAD
  const link = screen.getByRole('link'{ name: /r&d tools!/i });
  expect(link).toHaveAttribute('href'/category/rd-tools');
});

it('removes accents from slug'() => {
=======
  const link = screen.getByRole('link', { name: /r&d tools!/i });
  expect(link).toHaveAttribute('href', '/category/rd-tools');
});

it('removes accents from slug', () => {
>>>>>>> origin/auto/autonomy-17186719616
  render(
    <MemoryRouter>
      <CategoryCard title="Crème Brûlée" description="desc" icon="*" />
    </MemoryRouter>
  );

<<<<<<< HEAD
  const link = screen.getByRole('link'{ name: /crème brûlée/i });
  expect(link).toHaveAttribute('href'/category/creme-brulee');
});

it('treats underscores as spaces in slug'() => {
=======
  const link = screen.getByRole('link', { name: /crème brûlée/i });
  expect(link).toHaveAttribute('href', '/category/creme-brulee');
});

it('treats underscores as spaces in slug', () => {
>>>>>>> origin/auto/autonomy-17186719616
  render(
    <MemoryRouter>
      <CategoryCard title="AI_Tools" description="desc" icon="*" />
    </MemoryRouter>
  );

<<<<<<< HEAD
  const link = screen.getByRole('link'{ name: /ai_tools/i });
  expect(link).toHaveAttribute('href'/category/ai-tools');
=======
  const link = screen.getByRole('link', { name: /ai_tools/i });
  expect(link).toHaveAttribute('href', '/category/ai-tools');
>>>>>>> origin/auto/autonomy-17186719616
});
