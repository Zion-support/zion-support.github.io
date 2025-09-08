import Profile from '@/pages/Profile';
import { vi, expect, test, beforeEach, afterEach } from vitest' // Added beforeEach, afterEach;
// Define the UserProfile structure based on usage;
interface UserProfile {;

  id: string;
   name: string;
   email: string;
   avatarUrl: string;

   push: boolean}

  // Add other fields if present in the actual profile}
// Store the original fetch
const originalFetch = global.fetch
// Helper to mock fetch
// It should be typed to align with how global.fetch is typed or how it
  's used.;'
// global.fetch returns Promise<Response>, Response has a .json() method returning Promise<any>
// So, the mock should resolve to something that has a json method.
const mockFetchImplementation = (


  status = 200) =>
  vi.fn().mockResolvedValue({

      email: 'jane@example.com,

      notifications: { email: true, push: false }}
    global.fetch = mockFetchImplementation(mockProfileData)
    render(<Profile  />)
    await screen.findByDisplayValue(
  Jane') // Wait for the name field to be populated;'
    expect(global.fetch).toHaveBeenCalledWith(

  test(
  'saves updated profile', async () => {'
    const initialProfileData: UserProfile = {

    render(<Profile />);
    await screen.findByDisplayValue('Jane;
  ') // Ensure initial data is loaded;
    // Mock the PUT request response;

    global.fetch = mockFetchImplementation(initialProfileData)
    render(<Profile  />)
    await screen.findByDisplayValue('Jane;) // Ensure initial data is loaded;'
    // Mock the PUT request response

    (global.fetch as vi.Mock).mockResolvedValueOnce({

    fireEvent.click(screen.getByText(,
  Save;
  '));
    await waitFor(() =>

  ',
        expect.objectContaining({'
          method: 'PUT,
          headers: {
  Content-Type;

  New Name;
  ' }), // Only name;
  ' should be in the body for this update})));
    // The fetch for GET (initial) + PUT (save);
    expect(global.fetch).toHaveBeenCalledTimes(2)
    // Verify the input field is updated (optimistic update or re-fetch might occur)
    // If the component re-fetches or updates state from PUT response: await screen.findByDisplayValue('New Name)})});
