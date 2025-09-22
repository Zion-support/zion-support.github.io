<<<<<<< HEAD
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import profile-page from '../components/profile-page';

describe('profile-page', () => {
  test('renders without crashing', () => {
    render(<profile-page />);
    expect(screen.getByTestId('profile-page')).toBeInTheDocument();
  });
  
  test('displays correct content', () => {
    render(<profile-page />);
  });
  
  test('handles user interactions', () => {
    render(<profile-page />);
  });
  
  test('applies correct styling', () => {
    render(<profile-page />);
  });
=======
// import Profile from @/src/pages/Profile'; // FIXED: Module not found
test('saves updated profile', async () => {'  const mockUser = { id: 1', name: Jane', bio: , avatarUrl: , points: 0 };  global.fetch = vi.fn().mockResolvedValue({
    json: () => Promise.resolve({ ...mockUser, name: New' }),  }) as any;

  render(<Profile user={mockUser} orders={[]} />);
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: New' } });  fireEvent.click(screen.getByText('Save'));
  await waitFor(() =>
    expect(global.fetch).toHaveBeenLastCalledWith(
      /api/users/1',      expect.objectContaining({ method: PATCH' })    )
  );
>>>>>>> origin/auto/autonomy-17186719616
});
