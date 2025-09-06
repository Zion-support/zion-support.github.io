<<<<<<< HEAD
import { render, screen } from '@testing-library/react',
import { MemoryRouter } from 'react-router-dom',
import { CategoryCard } from '@/components/CategoryCard',
it('renders category card with link to slug', () => {
  render(
    <MemoryRouter>
      <CategoryCard title="Test Category" description="desc" icon="*" />
=======
import {render, screen} from '@testing-library/react',
import {MemoryRouter} from 'react-router-dom',
import {CategoryCard} from '@/components/CategoryCard',

it('renders category card with link to slug', () => {
  render(
    <MemoryRouter>
      <CategoryCard title='Test Category' description='desc' icon='*' />
>>>>>>> main
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /test category/i }),
<<<<<<< HEAD
  expect(link).toHaveAttribute('href/category/test-category')
=======
  expect(link).toHaveAttribute('href/category/test-category'),
>>>>>>> main
}),

it('normalizes slug with special characters', () => {
  render(
    <MemoryRouter>
<<<<<<< HEAD
      <CategoryCard title="R&D Tools!" description="desc" icon="*" />
=======
      <CategoryCard title='R&D Tools!' description='desc' icon='*' />
>>>>>>> main
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /r&d tools!/i }),
<<<<<<< HEAD
  expect(link).toHaveAttribute('href/category/rd-tools')
=======
  expect(link).toHaveAttribute('href/category/rd-tools'),
>>>>>>> main
}),

it('removes accents from slug', () => {
  render(
    <MemoryRouter>
<<<<<<< HEAD
      <CategoryCard title="Crème Brûlée" description="desc" icon="*" />
=======
      <CategoryCard title='Crème Brûlée' description='desc' icon='*' />
>>>>>>> main
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /crème brûlée/i }),
<<<<<<< HEAD
  expect(link).toHaveAttribute('href/category/creme-brulee')
=======
  expect(link).toHaveAttribute('href/category/creme-brulee'),
>>>>>>> main
}),

it('treats underscores as spaces in slug', () => {
  render(
    <MemoryRouter>
<<<<<<< HEAD
      <CategoryCard title="AI_Tools" description="desc" icon="*" />
=======
      <CategoryCard title='AI_Tools' description='desc' icon='*' />
>>>>>>> main
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /ai_tools/i }),
<<<<<<< HEAD
  expect(link).toHaveAttribute('href/category/ai-tools')
=======
  expect(link).toHaveAttribute('href/category/ai-tools'),
>>>>>>> main
}),
