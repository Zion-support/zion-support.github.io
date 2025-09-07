<<<<<<< HEAD
<<<<<<< HEAD
=======
import { render, screen } from '@testing-library/react';
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CategoryCard} from '@/components/CategoryCard';import {render, screen} from '@testing-library/react',
=======
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {render, screen} from '@testing-library/react',;
import {MemoryRouter} from 'react-router-dom',;
import {CategoryCard} from '@/components/CategoryCard',;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {render, screen} from '@testing-library/react',

>>>>>>> origin/chore/fix-lint-and-merge
import {MemoryRouter} from 'react-router-dom',
import {CategoryCard} from '@/components/CategoryCard',

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
import {render, screen} from '@testing-library/react',
import {MemoryRouter} from 'react-router-dom',
import {CategoryCard} from '@/components/CategoryCard',
import { render, screen } from '@testing-library/react',
import { MemoryRouter } from 'react-router-dom',
import { CategoryCard } from '@/components/CategoryCard',
import { render, screen } from '@testing-library/react',
import { MemoryRouter } from 'react-router-dom',
import { CategoryCard } from '@/components/CategoryCard',
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { render, screen } from '@testing-library/react',
import { MemoryRouter } from 'react-router-dom',
import { CategoryCard } from '@/components/CategoryCard',

<<<<<<< HEAD
=======
import { render, screen  } from '@testing-library/react';
import { MemoryRouter  } from 'react-router-dom';
import { CategoryCard } from '@/components/CategoryCard';

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

>>>>>>> origin/chore/fix-lint-and-merge
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

>>>>>>> origin/chore/fix-lint-and-merge
  render(
    <MemoryRouter>
      <CategoryCard title="Test Category" description="desc" icon="*" />
    </MemoryRouter>
  ),
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

it('renders category card with link to slug', () => {;
=======
const link = screen && screen.getByRole('link', { name: /test category/i }),;
  expect(link).toHaveAttribute('href/category/test-category'),;
}),;
it('normalizes slug with special characters', () => {;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
  const link = screen && screen.getByRole('link', { name: /test category/i }),;
  expect(link).toHaveAttribute('href/category/test-category'),;
}),;
it('normalizes slug with special characters', () => {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

it('renders category card with link to slug', () => {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/chore/fix-lint-and-merge
      <CategoryCard title='Test Category' description='desc' icon='*' />;
    </MemoryRouter>);
  const link = screen.getByRole ('link', { name: /test category / i });
  expect (link).toHaveAttribute ('href / category / test - category');
});
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { MemoryRouter } from 'react-router-dom';
import { CategoryCard } from '@/components/CategoryCard';
it('renders category card with link to slug', () => {
  render($2);
  const link = screen.getByRole($2);
  expect(link).toHaveAttribute('href/category/test-category')
}),

it('normalizes slug with special characters', () => {
  render($2);
  const link = screen.getByRole($2);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

'
it('renders category card with link to slug', () => {;
  render(;
    <MemoryRouter>;'
      <CategoryCard title='Test Category' description='desc' icon='*' />;
    </MemoryRouter>;
  ),;

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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const link = screen.getByRole('link', { name: /test category/i }),
  expect(link).toHaveAttribute('href/category/test-category')
}),

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
it('normalizes slug with special characters', () => {
  render(
    <MemoryRouter>
      <CategoryCard title="R&D Tools!" description="desc" icon="*" />
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /r&d tools!/i }),
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  expect(link).toHaveAttribute('href/category/rd-tools')
}),

it('removes accents from slug', () => {
<<<<<<< HEAD
  render($2);
  const link = screen.getByRole($2);
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  render($2);
  const link = screen.getByRole($2);
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  render(
    <MemoryRouter>
      <CategoryCard title="Crème Brûlée" description="desc" icon="*" />
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /crème brûlée/i }),
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  expect(link).toHaveAttribute('href/category/creme-brulee')
}),

it('treats underscores as spaces in slug', () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  render($2);
  const link = screen.getByRole($2);
  expect(link).toHaveAttribute('href/category/ai-tools')
}),
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
  render(
    <MemoryRouter>
      <CategoryCard title="AI_Tools" description="desc" icon="*" />
    </MemoryRouter>
  ),

  const link = screen.getByRole('link', { name: /ai_tools/i }),
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  expect(link).toHaveAttribute('href/category/ai-tools')
}),

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

  );

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

  const link = screen.getByRole('link', { name: /test category/i });
  expect(link).toHaveAttribute('href/category/test-category');
});
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
