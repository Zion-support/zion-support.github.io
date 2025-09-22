<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { render, screen  } from '@testing-library/react';
import { MemoryRouter  } from 'react-router-dom';
import { CategoryCard } from '@/components/CategoryCard';

import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';import {render, screen} from '@testing-library/react',;
import {MemoryRouter} from 'react-router-dom',;
import {CategoryCard} from '@/components/CategoryCard',;

import { render, screen } from '@testing-library/react',;
import { MemoryRouter } from 'react-router-dom',;
import { CategoryCard } from '@/components/CategoryCard',;

import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';

import {render, screen} from '@testing-library/react',;
import {MemoryRouter} from 'react-router-dom',;
import {CategoryCard} from '@/components/CategoryCard',;
<<<<<<< HEAD
import {render, screen} from '@testing-library/react',
=======
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';import {render, screen} from '@testing-library/react',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {MemoryRouter} from 'react-router-dom',
import {CategoryCard} from '@/components/CategoryCard',

import { render, screen } from '@testing-library/react',
import { MemoryRouter } from 'react-router-dom',
import { CategoryCard } from '@/components/CategoryCard',

import { render, screen  } from '@testing-library/react';
import { MemoryRouter  } from 'react-router-dom';
import { CategoryCard } from '@/components/CategoryCard';
=======
import {render, screen} from '@testing-library/react',;
import {MemoryRouter} from 'react-router-dom',;
import {CategoryCard} from '@/components/CategoryCard',;
pr-12325
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
it('renders category card with link to slug', () => {
=======

import {render, screen} from '@testing-library/react','
import {MemoryRouter} from 'react-router-dom','
import {CategoryCard} from '@/components/CategoryCard',

';
import {render, screen} from '@testing-library/react';'
import {MemoryRouter} from 'react-router-dom';'
import {CategoryCard} from '@/components/CategoryCard';

'
import {render, screen} from '@testing-library/react';'
import {MemoryRouter} from 'react-router-dom';'
import {CategoryCard} from '@/components/CategoryCard';
'
it('renders category card with link to slug', () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  render(
    <MemoryRouter>
      <CategoryCard title="Test Category" description="desc" icon="*" />
    </MemoryRouter>
  ),
const link = screen && screen.getByRole('link', { name: /test category/i }),;
  expect(link).toHaveAttribute('href/category/test-category'),;
}),;
it('normalizes slug with special characters', () => {;
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
      <CategoryCard title='Test Category' description='desc' icon='*' />;
    </MemoryRouter>);
  const link = screen.getByRole ('link', { name: /test category / i });
  expect (link).toHaveAttribute ('href / category / test - category');
});
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

'
it('renders category card with link to slug', () => {;
  render(;
    <MemoryRouter>;'
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
<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD
it('normalizes slug with special characters', () => {
  render(
    <MemoryRouter>
      <CategoryCard title="R&D Tools!" description="desc" icon="*" />
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /r&d tools!/i }),
  expect(link).toHaveAttribute('href/category/rd-tools')
}),

it('removes accents from slug', () => {
  render(
    <MemoryRouter>
      <CategoryCard title="Crème Brûlée" description="desc" icon="*" />
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /crème brûlée/i }),
  expect(link).toHaveAttribute('href/category/creme-brulee')
}),

it('treats underscores as spaces in slug', () => {
  render(
    <MemoryRouter>
      <CategoryCard title="AI_Tools" description="desc" icon="*" />
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /ai_tools/i }),
<<<<<<< HEAD
  expect(link).toHaveAttribute('href/category/ai-tools')
}),
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  expect(link).toHaveAttribute('href/category/ai-tools')
}),

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  );
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======

  expect(link).toHaveAttribute('href/category/ai-tools')
}),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { render, screen } from '@testing-library/react',;
import { MemoryRouter } from 'react-router-dom',;
import { CategoryCard } from '@/components/CategoryCard',;
;
it('renders category card with link to slug', () => {;
  render(;
    <MemoryRouter>;
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
      <CategoryCard title="Crème Brûlée" description="desc" icon="*" />;
    </MemoryRouter>;
  ),;
;
  const link = screen.getByRole('link', { name:/crème brûlée/i }),;
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
  render (<MemoryRouter> <CategoryCard title="Crème Brûlée" description="desc" icon="*" /> </MemoryRouter>);
it ('treats underscores as spaces in slug', () => {
  render (<MemoryRouter> <CategoryCard title="AI Tools" description="desc" icon="*" /> </MemoryRouter>);
  expect(link).toHaveAttribute('href/category/ai-tools'),
}),;
;
  expect(link).toHaveAttribute('href/category/ai-tools')
}),
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
  expect(link).toHaveAttribute('href/category/ai-tools');
<<<<<<< HEAD
>>>>>>> main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  expect(link).toHaveAttribute('href/category/ai-tools');>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  );'
  const link = screen.getByRole('link', { name: /test category/i });'
  expect(link).toHaveAttribute('href/category/test-category');
});'
it('normalizes slug with special characters', () => {'
      <CategoryCard title='R&D Tools!' description='desc' icon='*' />'
  const link = screen.getByRole('link', { name: /r&d tools!/i });'
  expect(link).toHaveAttribute('href/category/rd-tools');'
it('removes accents from slug', () => {'
      <CategoryCard title='Crème Brûlée' description='desc' icon='*' />'
  const link = screen.getByRole('link', { name: /crème brûlée/i });'
  expect(link).toHaveAttribute('href/category/creme-brulee');'
it('treats underscores as spaces in slug', () => {'
      <CategoryCard title='AI_Tools' description='desc' icon='*' />'
  const link = screen.getByRole('link', { name: /ai_tools/i });'
  expect(link).toHaveAttribute('href/category/ai-tools');

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  expect(link).toHaveAttribute('href/category/ai-tools');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
