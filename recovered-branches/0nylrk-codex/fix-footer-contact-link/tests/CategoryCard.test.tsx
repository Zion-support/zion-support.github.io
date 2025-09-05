import { render, screen } from '@testing-library/react',
import { MemoryRouter } from 'react-router-dom',
import { CategoryCard } from '@/components/CategoryCard',
it('renders category card with link to slug', () => {
  render(    <MemoryRouter>
      <CategoryCard title=&quot;Test Category&quot; description=&quot;desc&quot; icon=&quot;*&quot; />
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /test category/i }),
  expect(link).toHaveAttribute('href/category/test-category')
}),
it(_'normalizes slug with special characters', _() => {render(
    <MemoryRouter>
      <CategoryCard title=&quot;R&D Tools!&quot; description=&quot;desc&quot; icon=&quot;*&quot; />
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /r&d tools!/i }),
  expect(link).toHaveAttribute('href/category/rd-tools')
}),
it(_'removes accents from slug', _() => {render(
    <MemoryRouter>
      <CategoryCard title=&quot;Crème Brûlée&quot; description=&quot;desc&quot; icon=&quot;*&quot; />
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /crème brûlée/i }),
  expect(link).toHaveAttribute('href/category/creme-brulee')
}),
it(_'treats underscores as spaces in slug', _() => {render(
    <MemoryRouter>
      <CategoryCard title=&quot;AITools&quot; description=&quot;desc&quot; icon=&quot;*&quot; />
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /aitools/i }),
  expect(link).toHaveAttribute('href/category/ai-tools')
}),