<<<<<<< HEAD
import { render, screen } from '@testing-library/react',
import { MemoryRouter } from 'react-router-dom',
import { CategoryCard } from '@/components/CategoryCard',
it('renders category card with link to slug', () => {
  render(
=======

it(_'renders category card with link to slug', _() => {_render(
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <MemoryRouter>
      <CategoryCard title=&quot;Test Category&quot; description=&quot;desc&quot; icon=&quot;*&quot; />
    </MemoryRouter>
  ),

<<<<<<< HEAD
  const link = screen.getByRole('link', { name: /test category/i }),
  expect(link).toHaveAttribute('href/category/test-category')
}),
=======
  const _link = screen.getByRole('link', _{ name: /test category/i});
  expect(link).toHaveAttribute('href', '/category/test-category');
});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

it(_'normalizes slug with special characters', _() => {_render(
    <MemoryRouter>
      <CategoryCard title=&quot;R&D Tools!&quot; description=&quot;desc&quot; icon=&quot;*&quot; />
    </MemoryRouter>
  ),

<<<<<<< HEAD
  const link = screen.getByRole('link', { name: /r&d tools!/i }),
  expect(link).toHaveAttribute('href/category/rd-tools')
}),
=======
  const _link = screen.getByRole('link', _{ name: /r&d tools!/i});
  expect(link).toHaveAttribute('href', '/category/rd-tools');
});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

it(_'removes accents from slug', _() => {_render(
    <MemoryRouter>
      <CategoryCard title=&quot;Crème Brûlée&quot; description=&quot;desc&quot; icon=&quot;*&quot; />
    </MemoryRouter>
  ),

<<<<<<< HEAD
  const link = screen.getByRole('link', { name: /crème brûlée/i }),
  expect(link).toHaveAttribute('href/category/creme-brulee')
}),
=======
  const _link = screen.getByRole('link', _{ name: /crème brûlée/i});
  expect(link).toHaveAttribute('href', '/category/creme-brulee');
});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

it(_'treats underscores as spaces in slug', _() => {_render(
    <MemoryRouter>
      <CategoryCard title=&quot;AI_Tools&quot; description=&quot;desc&quot; icon=&quot;*&quot; />
    </MemoryRouter>
  ),

<<<<<<< HEAD
  const link = screen.getByRole('link', { name: /ai_tools/i }),
  expect(link).toHaveAttribute('href/category/ai-tools')
}),
=======
  const _link = screen.getByRole('link', _{ name: /ai_tools/i});
  expect(link).toHaveAttribute('href', '/category/ai-tools');
});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
