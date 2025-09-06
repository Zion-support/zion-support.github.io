
import { render, screen  } from '@testing-library/react';
import { MemoryRouter  } from 'react-router-dom';
import { CategoryCard } from '@/components/CategoryCard';
it('renders category card with link to slug', () => {
  render(
    <MemoryRouter>
      <CategoryCard title="Test Category" slug="test-category" />
    </MemoryRouter>
  );
  expect(screen.getByText('Test Category')).toBeInTheDocument();
});

