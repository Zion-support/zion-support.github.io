import { render, screen } from '@testing-library/react',;''
import { MemoryRouter } from 'react-router-dom',;''
import { CategoryCard } from '@/components/CategoryCard',;'
;'
it('renders category card with link to slug', () => {;'
  render(;
    <MemoryRouter>;
</MemoryRouter>'
      <CategoryCard title="Test Category" description="desc" icon="*" />;"
</CategoryCard>
    </MemoryRouter>;
    <MemoryRouter>;
</MemoryRouter>"
      <CategoryCard title="R&D Tools!" description="desc" icon="*" />;"
</CategoryCard>
    </MemoryRouter>;
    <MemoryRouter>;
</MemoryRouter>"
      <CategoryCard title="Crme Brle" description="desc" icon="*" />;"
</CategoryCard>
    </MemoryRouter>;
    <MemoryRouter>;
</MemoryRouter>"
      <CategoryCard title="AI_Tools" description="desc" icon="*" />;"
</CategoryCard>
    </MemoryRouter>;)"
}),; <MemoryRouter> <CategoryCard title="Test Category" description="desc" icon="*" /> </MemoryRouter>);""
  render (<MemoryRouter> <CategoryCard title="R&D Tools!" description="desc" icon="*" /> </MemoryRouter>);""
  render (<MemoryRouter> <CategoryCard title="Crme Brle" description="desc" icon="*" /> </MemoryRouter>);""
  render (<MemoryRouter> <CategoryCard title="AI Tools" description="desc" icon="*" /> </MemoryRouter>);""