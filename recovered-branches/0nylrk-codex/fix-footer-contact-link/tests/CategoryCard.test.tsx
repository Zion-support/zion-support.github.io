<<<<<<< HEAD
=======

import { render, screen  } from '@testing-library/react';
import { MemoryRouter  } from 'react-router-dom';
import { CategoryCard } from '@/components/CategoryCard';
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
import {MemoryRouter} from 'react-router-dom',
import {CategoryCard} from '@/components/CategoryCard',


=======
import { render, screen } from '@testing-library/react',;
import { MemoryRouter } from 'react-router-dom',;
import { CategoryCard } from '@/components/CategoryCard',;

import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';

import {render, screen} from '@testing-library/react',;
import {MemoryRouter} from 'react-router-dom',;
import {CategoryCard} from '@/components/CategoryCard',;

import {render, screen} from '@testing-library/react',

import {MemoryRouter} from 'react-router-dom',
import {CategoryCard} from '@/components/CategoryCard',


import { render, screen } from '@testing-library/react',
import { MemoryRouter } from 'react-router-dom',
import { CategoryCard } from '@/components/CategoryCard',

it('renders category card with link to slug', () => {
  render(
    <MemoryRouter>
      <CategoryCard title="Test Category" slug="test-category" />
    </MemoryRouter>
  );
  expect(screen.getByText('Test Category')).toBeInTheDocument();
});
import {render, screen} from '@testing-library/react',
import {MemoryRouter} from 'react-router-dom',
import {CategoryCard} from '@/components/CategoryCard',
import { render, screen } from '@testing-library/react',
import { MemoryRouter } from 'react-router-dom',
import { CategoryCard } from '@/components/CategoryCard',
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';
<<<<<<< HEAD


it('renders category card with link to slug', () => {


=======
it('renders category card with link to slug', () => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  render(
    <MemoryRouter>
      <CategoryCard title="Test Category" description="desc" icon="*" />
    </MemoryRouter>
  ),
<<<<<<< HEAD

=======


it('renders category card with link to slug', () => {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
const link = screen && screen.getByRole('link', { name: /test category/i }),;
  expect(link).toHaveAttribute('href/category/test-category'),;
}),;
it('normalizes slug with special characters', () => {;
<<<<<<< HEAD



it('renders category card with link to slug', () => {;


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  render(;
    <MemoryRouter>;
      <CategoryCard title='R&D Tools!' description='desc' icon='*' />;
    </MemoryRouter>;
  ),;
  const link = screen && screen.getByRole('link', { name: /r&d tools!/i }),;
  expect(link).toHaveAttribute('href/category/rd-tools'),;
}),;
it('removes accents from slug', () => {;
  render(;
    <MemoryRouter>;

<<<<<<< HEAD

=======
      <CategoryCard title='Crème Brûlée' description='desc' icon='*' />;
    </MemoryRouter>;
  ),;
  const link = screen && screen.getByRole('link', { name: /crème brûlée/i }),;
  expect(link).toHaveAttribute('href/category/creme-brulee'),;
}),;
it('treats underscores as spaces in slug', () => {;
  render(;
    <MemoryRouter>;
      <CategoryCard title='AI_Tools' description='desc' icon='*' />;
    </MemoryRouter>;
  ),;
  const link = screen && screen.getByRole('link', { name: /ai_tools/i }),;
  expect(link).toHaveAttribute('href/category/ai-tools'),;
}),;
import {render, screen} from '@testing - library / react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components / CategoryCard';
it ('renders category card with link to slug', () => {
  render (
    <MemoryRouter>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <CategoryCard title='Test Category' description='desc' icon='*' />;
    </MemoryRouter>);
  const link = screen.getByRole ('link', { name: /test category / i });
  expect (link).toHaveAttribute ('href / category / test - category');
});
<<<<<<< HEAD

=======
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
  expect(link).toHaveAttribute('href/category/ai-tools');import { render, screen } from '@testing-library/react';

it ('normalizes slug with special characters', () => {
      <CategoryCard title='R & D Tools!' description='desc' icon='*' />;
  const link = screen.getByRole ('link', { name: /r & d tools!/i });
  expect (link).toHaveAttribute ('href / category / rd - tools');
it ('removes accents from slug', () => {
      <CategoryCard title='Crème Brûlée' description='desc' icon='*' />;
  const link = screen.getByRole ('link', { name: /crème brûlée / i });
  expect (link).toHaveAttribute ('href / category / creme - brulee');
it ('treats underscores as spaces in slug', () => {
      <CategoryCard title='AI_Tools' description='desc' icon='*' />;
  const link = screen.getByRole ('link', { name: /ai_tools / i });
  expect (link).toHaveAttribute ('href / category / ai - tools');
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
it ('normalizes slug with special characters', () => {
      <CategoryCard title='R & D Tools!' description='desc' icon='*' />;
  const link = screen.getByRole ('link', { name: /r & d tools!/i });
  expect (link).toHaveAttribute ('href / category / rd - tools');
it ('removes accents from slug', () => {
      <CategoryCard title='Crème Brûlée' description='desc' icon='*' />;
  const link = screen.getByRole ('link', { name: /crème brûlée / i });
  expect (link).toHaveAttribute ('href / category / creme - brulee');
it ('treats underscores as spaces in slug', () => {
      <CategoryCard title='AI_Tools' description='desc' icon='*' />;
  const link = screen.getByRole ('link', { name: /ai_tools / i });
  expect (link).toHaveAttribute ('href / category / ai - tools');

it('normalizes slug with special characters', () => {
  render(
    <MemoryRouter>
      <CategoryCard title="R&D Tools!" description="desc" icon="*" />
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /r&d tools!/i }),
>>>>>>> origin/cursor/delete-old-data-records-6bba
  expect(link).toHaveAttribute('href/category/rd-tools')
}),

it('removes accents from slug', () => {
<<<<<<< HEAD


=======
  render($2);
  const link = screen.getByRole($2);
  render(
    <MemoryRouter>
      <CategoryCard title="Crème Brûlée" description="desc" icon="*" />
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /crème brûlée/i }),
>>>>>>> origin/cursor/delete-old-data-records-6bba
  expect(link).toHaveAttribute('href/category/creme-brulee')
}),

it('treats underscores as spaces in slug', () => {
<<<<<<< HEAD

=======

  render(
    <MemoryRouter>
      <CategoryCard title="AI_Tools" description="desc" icon="*" />
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /ai_tools/i }),
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
import { CategoryCard } from '@/components/CategoryCard',;
;'
it('renders category card with link to slug', () => {;
  render(;
    <MemoryRouter>;"
      <CategoryCard title="Test Category" description="desc" icon="*" />;
    </MemoryRouter>;
  ),;
;'
  const link = screen.getByRole('link', { name:/test category/i }),;'
  expect(link).toHaveAttribute('href/category/test-category'),;
}),;
;'
it('normalizes slug with special characters', () => {;
  render(;
    <MemoryRouter>;"
      <CategoryCard title="R&D Tools!" description="desc" icon="*" />;
    </MemoryRouter>;
  ),;
;'
  const link = screen.getByRole('link', { name:/r&d tools!/i }),;'
  expect(link).toHaveAttribute('href/category/rd-tools'),;
}),;
;'
it('removes accents from slug', () => {;
  render(;
    <MemoryRouter>;"
      <CategoryCard title="Crème Brûlée" description="desc" icon="*" />;
    </MemoryRouter>;
  ),;
;'
  const link = screen.getByRole('link', { name:/crème brûlée/i }),;'
  expect(link).toHaveAttribute('href/category/creme-brulee'),;
}),;
;'
it('treats underscores as spaces in slug', () => {;
  render(;
    <MemoryRouter>;"
      <CategoryCard title="AI_Tools" description="desc" icon="*" />;
    </MemoryRouter>;
  ),;
;'
  const link = screen.getByRole('link', { name:/ai_tools/i }),;'
  expect(link).toHaveAttribute('href/category/ai-tools'),;"
}),; <MemoryRouter> <CategoryCard title="Test Category" description="desc" icon="*" /> </MemoryRouter>);'
it ('normalizes slug with special characters', () => {"
  render (<MemoryRouter> <CategoryCard title="R&D Tools!" description="desc" icon="*" /> </MemoryRouter>);'
it ('removes accents from slug', () => {"
  render (<MemoryRouter> <CategoryCard title="Crème Brûlée" description="desc" icon="*" /> </MemoryRouter>);'
it ('treats underscores as spaces in slug', () => {"
  render (<MemoryRouter> <CategoryCard title="AI Tools" description="desc" icon="*" /> </MemoryRouter>);'
  expect(link).toHaveAttribute('href/category/ai-tools'),
}),;
;'
  expect(link).toHaveAttribute('href/category/ai-tools')
}),
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
  const link = screen.getByRole('link', { name: /test category/i });
  expect(link).toHaveAttribute('href/category/test-category');
});

>>>>>>> origin/cursor/delete-old-data-records-6bba
