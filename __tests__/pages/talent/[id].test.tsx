import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import TalentPage from '@/pages/talent/[id]';
import { TALENT_PROFILES, TalentProfileData } from '@/data/talentData'; // Adjust path if necessary
import { useRouter } from 'next/router'; // Correct import for useRouter

// Mock next/router
vi.mock('next/router', () => ({
  useRouter: vi.fn()
}));

// Helper to mock fetch
const mockFetch = <T,>(data: T, ok = true, status = 200) => {
  // Used generic T for data
  global.fetch = vi.fn().mockResolvedValue({
    ok,
    status,
    json: () => Promise.resolve(data),
    text: () =>
      Promise.resolve(typeof data === 'string' ? data : JSON.stringify(data))
  });
};

describe('TalentPage', () => {
  const mockUseRouter = useRouter as any;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders talent profile correctly', async () => {
    const mockTalent = TALENT_PROFILES[0];
    mockUseRouter.mockReturnValue({
      query: { id: mockTalent.id },
      isReady: true
    });

    mockFetch(mockTalent);

    render(<TalentPage />);

    await waitFor(() => {
      expect(screen.getByText(mockTalent.name)).toBeInTheDocument();
    });

    expect(screen.getByText(mockTalent.title)).toBeInTheDocument();
    expect(screen.getByText(mockTalent.bio)).toBeInTheDocument();
  });

  it('shows loading state initially', () => {
    mockUseRouter.mockReturnValue({
      query: { id: '1' },
      isReady: false
    });

    render(<TalentPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('handles talent not found', async () => {
    mockUseRouter.mockReturnValue({
      query: { id: 'nonexistent' },
      isReady: true
    });

    mockFetch(null, false, 404);

    render(<TalentPage />);

    await waitFor(() => {
      expect(screen.getByText(/not found/i)).toBeInTheDocument();
    });
  });

  it('displays talent skills', async () => {
    const mockTalent = TALENT_PROFILES[0];
    mockUseRouter.mockReturnValue({
      query: { id: mockTalent.id },
      isReady: true
    });

    mockFetch(mockTalent);

    render(<TalentPage />);

    await waitFor(() => {
      expect(screen.getByText(mockTalent.name)).toBeInTheDocument();
    });

    mockTalent.skills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it('shows contact information', async () => {
    const mockTalent = TALENT_PROFILES[0];
    mockUseRouter.mockReturnValue({
      query: { id: mockTalent.id },
      isReady: true
    });

    mockFetch(mockTalent);

    render(<TalentPage />);

    await waitFor(() => {
      expect(screen.getByText(mockTalent.name)).toBeInTheDocument();
    });

    expect(screen.getByText(mockTalent.email)).toBeInTheDocument();
    expect(screen.getByText(mockTalent.phone)).toBeInTheDocument();
  });

  it('handles network errors', async () => {
    mockUseRouter.mockReturnValue({
      query: { id: '1' },
      isReady: true
    });

    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    render(<TalentPage />);

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});