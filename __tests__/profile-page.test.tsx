import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Profile from '@/pages/Profile';
import { vi, expect, test, beforeEach, afterEach } from 'vitest'; // Added beforeEach, afterEach

// Define the UserProfile structure based on usage
interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  notifications: {
    email: boolean;
    push: boolean;
  };
  // Add other fields if present in the actual profile
}

// Store the original fetch
const originalFetch = global.fetch;

// Helper to mock fetch
// It should be typed to align with how global.fetch is typed or how it's used.
// global.fetch returns Promise<Response>, Response has a .json() method returning Promise<any>
// So, the mock should resolve to something that has a json method.
const mockFetchImplementation = (
  data: any,
  ok = true,
  status = 200
): Promise<Response> => {
  return Promise.resolve({
    ok,
    status,
    json: () => Promise.resolve(data),
    text: () => Promise.resolve(JSON.stringify(data))
  } as Response);
};

describe('Profile Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  test('renders profile information', async () => {
    const mockProfile: UserProfile = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      avatarUrl: 'https://example.com/avatar.jpg',
      notifications: {
        email: true,
        push: false
      }
    };

    global.fetch = vi.fn().mockImplementation(() =>
      mockFetchImplementation(mockProfile)
    );

    render(<Profile />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  test('allows editing profile information', async () => {
    const mockProfile: UserProfile = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      avatarUrl: 'https://example.com/avatar.jpg',
      notifications: {
        email: true,
        push: false
      }
    };

    global.fetch = vi.fn().mockImplementation(() =>
      mockFetchImplementation(mockProfile)
    );

    render(<Profile />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    const editButton = screen.getByText(/edit/i);
    fireEvent.click(editButton);

    const nameInput = screen.getByDisplayValue('John Doe');
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });

    const saveButton = screen.getByText(/save/i);
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });
  });

  test('handles profile update errors', async () => {
    const mockProfile: UserProfile = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      avatarUrl: 'https://example.com/avatar.jpg',
      notifications: {
        email: true,
        push: false
      }
    };

    global.fetch = vi.fn()
      .mockImplementationOnce(() => mockFetchImplementation(mockProfile))
      .mockImplementationOnce(() => mockFetchImplementation(null, false, 500));

    render(<Profile />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    const editButton = screen.getByText(/edit/i);
    fireEvent.click(editButton);

    const nameInput = screen.getByDisplayValue('John Doe');
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });

    const saveButton = screen.getByText(/save/i);
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });

  test('displays notification preferences', async () => {
    const mockProfile: UserProfile = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      avatarUrl: 'https://example.com/avatar.jpg',
      notifications: {
        email: true,
        push: false
      }
    };

    global.fetch = vi.fn().mockImplementation(() =>
      mockFetchImplementation(mockProfile)
    );

    render(<Profile />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    expect(screen.getByLabelText(/email notifications/i)).toBeChecked();
    expect(screen.getByLabelText(/push notifications/i)).not.toBeChecked();
  });
});