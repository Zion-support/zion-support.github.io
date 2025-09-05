
it(_'renders category card with link to slug', _() => {_render(
    <MemoryRouter>
      <CategoryCard title="Test Category" description="desc" icon="*" />
    </MemoryRouter>
  );

  const _link = screen.getByRole('link', _{ name: /test category/i});
  expect(link).toHaveAttribute('href', '/category/test-category');
});

it(_'normalizes slug with special characters', _() => {_render(
    <MemoryRouter>
      <CategoryCard title="R&D Tools!" description="desc" icon="*" />
    </MemoryRouter>
  );

  const _link = screen.getByRole('link', _{ name: /r&d tools!/i});
  expect(link).toHaveAttribute('href', '/category/rd-tools');
});

it(_'removes accents from slug', _() => {_render(
    <MemoryRouter>
      <CategoryCard title="Crème Brûlée" description="desc" icon="*" />
    </MemoryRouter>
  );

  const _link = screen.getByRole('link', _{ name: /crème brûlée/i});
  expect(link).toHaveAttribute('href', '/category/creme-brulee');
});

it(_'treats underscores as spaces in slug', _() => {_render(
    <MemoryRouter>
      <CategoryCard title="AI_Tools" description="desc" icon="*" />
    </MemoryRouter>
  );

  const _link = screen.getByRole('link', _{ name: /ai_tools/i});
  expect(link).toHaveAttribute('href', '/category/ai-tools');
});
