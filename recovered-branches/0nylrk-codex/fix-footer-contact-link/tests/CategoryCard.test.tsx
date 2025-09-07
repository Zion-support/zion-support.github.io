import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';import {render, screen} from '@testing-library/react',
import {MemoryRouter} from 'react-router-dom',
import {CategoryCard} from '@/components/CategoryCard',

import { render, screen } from '@testing-library/react',
import { MemoryRouter } from 'react-router-dom',
import { CategoryCard } from '@/components/CategoryCard',

import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';

import {render, screen} from '@testing-library/react',;
import {MemoryRouter} from 'react-router-dom',;
import {CategoryCard} from '@/components/CategoryCard',;
import {render, screen} from '@testing-library/react',
import {MemoryRouter} from 'react-router-dom',
import {CategoryCard} from '@/components/CategoryCard',
pr-12325
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';
it('renders category card with link to slug', () => {
  render(
    <MemoryRouter>
      <CategoryCard title="Test Category" description="desc" icon="*" />
    </MemoryRouter>
  ),

it('renders category card with link to slug', () => {;
  render(;
    <MemoryRouter>;
      <CategoryCard title='Test Category' description='desc' icon='*' />;
    </MemoryRouter>;
  ),;

import {render, screen} from '@testing - library / react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components / CategoryCard';
it ('renders category card with link to slug', () => {
  render (
    <MemoryRouter>;
      <CategoryCard title='Test Category' description='desc' icon='*' />;
    </MemoryRouter>);
  const link = screen.getByRole ('link', { name: /test category / i });
  expect (link).toHaveAttribute ('href / category / test - category');
});
  const link = screen.getByRole('link', { name: /test category/i });
  expect(link).toHaveAttribute('href/category/test-category');
});
it('normalizes slug with special characters', () => {
      <CategoryCard title='R&D Tools!' description='desc' icon='*' />
  const link = screen.getByRole('link', { name: /r&d tools!/i });
  expect(link).toHaveAttribute('href/category/rd-tools');
it('removes accents from slug', () => {
      <CategoryCard title='Crème Brûlée' description='desc' icon='*' />
  const link = screen.getByRole('link', { name: /crème brûlée/i });
  expect(link).toHaveAttribute('href/category/creme-brulee');
it('treats underscores as spaces in slug', () => {
      <CategoryCard title='AI_Tools' description='desc' icon='*' />
  const link = screen.getByRole('link', { name: /ai_tools/i });
  expect(link).toHaveAttribute('href/category/ai-tools');


import {render, screen} from '@testing-library/react',;''
import {MemoryRouter} from 'react-router-dom',;''
import {CategoryCard} from '@/components/CategoryCard',;''
import {render, screen} from '@testing-library/react',''
import {MemoryRouter} from 'react-router-dom',''
import {CategoryCard} from '@/components/CategoryCard',''
import {render, screen} from '@testing-library/react';''
import {MemoryRouter} from 'react-router-dom';''
import {CategoryCard} from '@/components/CategoryCard';''
import {render, screen} from '@testing-library/react';''
import {MemoryRouter} from 'react-router-dom';''
import {CategoryCard} from '@/components/CategoryCard';''
it('renders category card with link to slug', () => {'
  render(
    <MemoryRouter>
</MemoryRouter>'
      <CategoryCard title="Test Category" description="desc" icon="*" />"

    
    <MemoryRouter>;
"
      <CategoryCard title='R&D Tools!' description='desc' icon='*' />;

    ;

      <CategoryCard title='Crème Brûlée' description='desc' icon='*' />;


      <CategoryCard title='AI_Tools' description='desc' icon='*' />;


      <CategoryCard title='Test Category' description='desc' icon='*' />;
)
    );
      <CategoryCard title='R & D Tools!' description='desc' icon='*' />;











      <CategoryCard title="Test Category" description="desc" icon="*" />;"

      <CategoryCard title="R&D Tools!" description="desc" icon="*" />;"

      <CategoryCard title="Crème Brûlée" description="desc" icon="*" />;"

      <CategoryCard title="AI_Tools" description="desc" icon="*" />;"

    ;"
}),; <MemoryRouter> <CategoryCard title="Test Category" description="desc" icon="*" /> );""
  render (<MemoryRouter> <CategoryCard title="R&D Tools!" description="desc" icon="*" /> );""
  render (<MemoryRouter> <CategoryCard title="Crème Brûlée" description="desc" icon="*" /> );""
  render (<MemoryRouter> <CategoryCard title="AI Tools" description="desc" icon="*" /> );""
      <CategoryCard title='R&D Tools!' description='desc' icon='*' />

      <CategoryCard title='Crème Brûlée' description='desc' icon='*' />

      <CategoryCard title='AI_Tools' description='desc' icon='*' />
pr-12325
</CategoryCard>
    </MemoryRouter>;"
}),; <MemoryRouter> <CategoryCard title="Test Category" description="desc" icon="*" /> </MemoryRouter>);""
  render (<MemoryRouter> <CategoryCard title="R&D Tools!" description="desc" icon="*" /> </MemoryRouter>);""
  render (<MemoryRouter> <CategoryCard title="Crème Brûlée" description="desc" icon="*" /> </MemoryRouter>);""
  render (<MemoryRouter> <CategoryCard title="AI Tools" description="desc" icon="*" /> </MemoryRouter>);""
      <CategoryCard title='R&D Tools!' description='desc' icon='*' />'
</CategoryCard>'
      <CategoryCard title='Crème Brûlée' description='desc' icon='*' />'
</CategoryCard>'
      <CategoryCard title='AI_Tools' description='desc' icon='*' />'
</CategoryCard>'

