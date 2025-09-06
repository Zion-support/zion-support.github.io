 <MemoryRouter> <CategoryCard title="Test Category" description="desc" icon="*" /> </MemoryRouter>);
it ('normalizes slug with special characters', () => {
  render (<MemoryRouter> <CategoryCard title="R&D Tools!" description="desc" icon="*" /> </MemoryRouter>);
it ('removes accents from slug', () => {
  render (<MemoryRouter> <CategoryCard title="Crème Brûlée" description="desc" icon="*" /> </MemoryRouter>);
it ('treats underscores as spaces in slug', () => {
  render (<MemoryRouter> <CategoryCard title="AI Tools" description="desc" icon="*" /> </MemoryRouter>);
