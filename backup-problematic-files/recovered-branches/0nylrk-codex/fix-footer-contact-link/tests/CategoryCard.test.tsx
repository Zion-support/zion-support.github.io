<<<<<<< HEAD
<<<<<<< HEAD

=======
import { render, screen } from '@testing-library/react',;
import { MemoryRouter } from 'react-router-dom',;
import { CategoryCard } from '@/components/CategoryCard',;
=======
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CategoryCard } from '@/components/CategoryCard';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
it('renders category card with link to slug', () => {;
  render(;
    <MemoryRouter>;
<<<<<<< HEAD
      <CategoryCard title="Test Category" description="desc" icon="*" />;
    </MemoryRouter>;
  ),;
;
  const link = screen.getByRole('link', { name:/test category/i }),;
  expect(link).toHaveAttribute('href/category/test-category'),;
}),;
;
it('normalizes slug with special characters', () => {;
  render(;
    <MemoryRouter>;
      <CategoryCard title="R&D Tools!" description="desc" icon="*" />;
    </MemoryRouter>;
  ),;
;
  const link = screen.getByRole('link', { name:/r&d tools!/i }),;
  expect(link).toHaveAttribute('href/category/rd-tools'),;
}),;
;
it('removes accents from slug', () => {;
  render(;
    <MemoryRouter>;
      <CategoryCard title="Crme Brle" description="desc" icon="*" />;
    </MemoryRouter>;
  ),;
;
  const link = screen.getByRole('link', { name:/crme brle/i }),;
  expect(link).toHaveAttribute('href/category/creme-brulee'),;
}),;
;
it('treats underscores as spaces in slug', () => {;
  render(;
    <MemoryRouter>;
      <CategoryCard title="AI_Tools" description="desc" icon="*" />;
    </MemoryRouter>;
  ),;
;
  const link = screen.getByRole('link', { name:/ai_tools/i }),;
  expect(link).toHaveAttribute('href/category/ai-tools'),;
}),; <MemoryRouter> <CategoryCard title="Test Category" description="desc" icon="*" /> </MemoryRouter>);
it ('normalizes slug with special characters', () => {
  render (<MemoryRouter> <CategoryCard title="R&D Tools!" description="desc" icon="*" /> </MemoryRouter>);
it ('removes accents from slug', () => {
  render (<MemoryRouter> <CategoryCard title="Crme Brle" description="desc" icon="*" /> </MemoryRouter>);
it ('treats underscores as spaces in slug', () => {
  render (<MemoryRouter> <CategoryCard title="AI Tools" description="desc" icon="*" /> </MemoryRouter>);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

      <CategoryCard title="Test Category" description="desc" icon="*" />;"

"
      <CategoryCard title="R&D Tools!" description="desc" icon="*" />;"

      <CategoryCard title="Crme Brle" description="desc" icon="*" />;"

      <CategoryCard title="AI_Tools" description="desc" icon="*" />;"

    ;)"
}),; <MemoryRouter> <CategoryCard title="Test Category" description="desc" icon="*" /> );""
  render (<MemoryRouter> <CategoryCard title="R&D Tools!" description="desc" icon="*" /> );""
  render (<MemoryRouter> <CategoryCard title="Crme Brle" description="desc" icon="*" /> );""
  render (<MemoryRouter> <CategoryCard title="AI Tools" description="desc" icon="*" /> );""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
