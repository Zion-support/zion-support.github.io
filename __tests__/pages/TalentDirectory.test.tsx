}));

// Mock fetch API (used by useTalentData via useTalentDirectory)
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
describe('TalentDirectory Page', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        ok: true,
    );
  });

  it('renders without throwing errors and displays a heading', async () => {
    render(
  });

  it('displays talent profiles when API returns data', async () => {
    const mockTalents = [
    ];
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
    );

    await waitFor(() => {
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
      expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
      expect(screen.getAllByTestId('talent-profile-card')).toHaveLength(2);
    });
  });

  it('renders empty state when API returns no talent profiles', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
  it('handles API error when fetching talent profiles', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
    });
  });
});
