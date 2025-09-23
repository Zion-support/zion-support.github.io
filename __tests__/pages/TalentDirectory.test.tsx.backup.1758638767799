<<<<<<< HEAD
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TalentDirectory from '@/pages/TalentDirectory';

// Mock child components and hooks
jest.mock('@/components/talent/FilterSidebar', () => ({ FilterSidebar: (props: any) => <div data-testid="filter-sidebar">Filter Sidebar</div> }));
jest.mock('@/components/talent/TalentResults', () => ({
  TalentResults: (props: any) => (
    <div data-testid="talent-results">
      {props.talents.map((talent: any) => (
        <div key={talent.id} data-testid="talent-profile-card">{talent.name}</div>
      ))}
      {props.totalCount === 0 && !props.isLoading && <div>No results based on filters</div>}
    </div>
  )
}));
jest.mock('@/components/talent/TalentSkeleton', () => ({ TalentSkeleton: () => <div data-testid="talent-skeleton">Loading...</div> }));
jest.mock('@/components/talent/ErrorBanner', () => ({ ErrorBanner: (props: any) => <div data-testid="error-banner">{props.msg}</div> }));
jest.mock('@/components/GlobalErrorBoundary', () => ({ children }: { children: React.ReactNode }) => <>{children}</>);
jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({ user: { id: 'test-user' }, isAuthenticated: true }),
=======
import React from react';
import { render, screen, waitFor } from @testing-library/react';
import { MemoryRouterProvider } from next-router-mock/MemoryRouterProvider';
import TalentDirectory from @/src/pages/TalentDirectory';

// Mock child components and hooks
jest.mock('@/components/talent/FilterSidebar', () => ({
  FilterSidebar: (_props: unknown) => (
    <div data-testid="filter-sidebar">Filter Sidebar</div>"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  )
}));
jest.mock('@/components/talent/TalentResults', () => ({
  TalentResults: (props: unknown) => (
    <div data-testid="talent-results">"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      {props.talents.map((talent: unknown) => (
        <div key={talent.id} data-testid="talent-profile-card">"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
          {talent.name}
        </div>
      ))}
      {props.totalCount === 0 && !props.isLoading && (
        <div>No results based on filters</div>
      )}
    </div>
  )
}));
jest.mock('@/components/talent/TalentSkeleton', () => ({
  TalentSkeleton: () => <div data-testid="talent-skeleton">Loading...</div>,"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
}));
jest.mock('@/components/talent/ErrorBanner', () => ({
  ErrorBanner: (props: unknown) => (
    <div data-testid="error-banner">{props.msg}</div>"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  )
}));
jest.mock('@/components/GlobalErrorBoundary', () => {
  const MockGlobalErrorBoundary = ({
    children
  }: {
    children: React.ReactNode;
  }) => <>{children}</>;
  MockGlobalErrorBoundary.displayName = MockGlobalErrorBoundary';
  return { GlobalErrorBoundary: MockGlobalErrorBoundary };
});
jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({ user: { id: test-user' }, isAuthenticated: true })
>>>>>>> origin/auto/autonomy-17186719616
}));

// Mock fetch API (used by useTalentData via useTalentDirectory)
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
<<<<<<< HEAD
    json: () => Promise.resolve({ talents: [], total: 0 }),
  })
) as jest.Mock;


=======
    json: () => Promise.resolve({ talents: [], total: 0 })
  }),
) as jest.Mock;

>>>>>>> origin/auto/autonomy-17186719616
describe('TalentDirectory Page', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        ok: true,
<<<<<<< HEAD
        json: () => Promise.resolve({ talents: [], total: 0 }),
      })
=======
        json: () => Promise.resolve({ talents: [], total: 0 })
      }),
>>>>>>> origin/auto/autonomy-17186719616
    );
  });

  it('renders without throwing errors and displays a heading', async () => {
    render(
<<<<<<< HEAD
      <MemoryRouter>
        <TalentDirectory />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText(/AI & Tech Talent Directory/i)).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/api/talent'), expect.any(Object));
=======
      <MemoryRouterProvider>
        <TalentDirectory />
      </MemoryRouterProvider>,
    );
    await waitFor(() => {
      expect(
        screen.getByText(/AI & Tech Talent Directory/i),
      ).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/api/talent'),
      expect.any(Object),
    );
>>>>>>> origin/auto/autonomy-17186719616
  });

  it('displays talent profiles when API returns data', async () => {
    const mockTalents = [
<<<<<<< HEAD
      { id: '1', name: 'John Doe', title: 'AI Developer' },
      { id: '2', name: 'Jane Smith', title: 'Data Scientist' },
=======
      { id: 1', name: John Doe', title: AI Developer' },
      { id: 2', name: Jane Smith', title: Data Scientist' }
>>>>>>> origin/auto/autonomy-17186719616
    ];
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
<<<<<<< HEAD
        json: () => Promise.resolve({ talents: mockTalents, total: 2 }),
      })
    );

    render(
      <MemoryRouter>
        <TalentDirectory />
      </MemoryRouter>
=======
        json: () => Promise.resolve({ talents: mockTalents, total: 2 })
      }),
    );

    render(
      <MemoryRouterProvider>
        <TalentDirectory />
      </MemoryRouterProvider>,
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
        json: () => Promise.resolve({ talents: [], total: 0 }),
      })
    );
    render(
      <MemoryRouter>
        <TalentDirectory />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Talent Directory Currently Empty/i)).toBeInTheDocument();
    });
  });

  it('displays skeleton loader during initial fetch and then empty state if no data', async () => {
    // 1. Create a promise that we can control
    let resolveFetchPromise: (value: any) => void;
    const mockFetchPromise = new Promise((resolve) => {
      resolveFetchPromise = resolve;
    });

    (global.fetch as jest.Mock).mockImplementationOnce(() => mockFetchPromise);

    render(
      <MemoryRouter>
        <TalentDirectory />
      </MemoryRouter>
    );

    // 2. Assert skeleton is visible and empty message is not (while promise is pending)
    expect(screen.getByTestId('talent-skeleton')).toBeInTheDocument();
    expect(screen.queryByText(/Talent Directory Currently Empty/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId('error-banner')).not.toBeInTheDocument();

    // 3. Resolve the fetch promise (simulating API response)
    resolveFetchPromise!({ // Use non-null assertion as it's guaranteed to be set
      ok: true,
      json: () => Promise.resolve({ talents: [], total: 0 }),
    });

    // 4. Wait for updates and assert skeleton is gone and empty message is now visible
    await waitFor(() => {
      expect(screen.queryByTestId('talent-skeleton')).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/Talent Directory Currently Empty/i)).toBeInTheDocument();
    });
    expect(screen.queryByTestId('error-banner')).not.toBeInTheDocument();
  });

=======
        json: () => Promise.resolve({ talents: [], total: 0 })
      }),
    );
    render(
      <MemoryRouterProvider>
        <TalentDirectory />
      </MemoryRouterProvider>,
    );

    await waitFor(() => {
      expect(
        screen.getByText(/Talent Directory Currently Empty/i),
      ).toBeInTheDocument();
    });
  });

>>>>>>> origin/auto/autonomy-17186719616
  it('handles API error when fetching talent profiles', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
<<<<<<< HEAD
        statusText: 'Server Error',
        json: () => Promise.resolve({ message: 'Failed to fetch talent' }),
      })
    );

    render(
      <MemoryRouter>
        <TalentDirectory />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId('error-banner')).toHaveTextContent('Unable to load talent profiles.');
=======
        statusText: Server Error',
        json: () => Promise.resolve({ message:' 'Failed to fetch talent' })
      }),
    );

    render(
      <MemoryRouterProvider>
        <TalentDirectory />
      </MemoryRouterProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('error-banner')).toHaveTextContent(
        Unable to load talent profiles.',
      );
>>>>>>> origin/auto/autonomy-17186719616
    });
  });
});
