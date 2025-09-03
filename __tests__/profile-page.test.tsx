<<<<<<< HEAD
import { render, screen, fireEvent, waitFor } from '@testing-library/react;
=======
<<<<<<< HEAD
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
>>>>>>> main
import Profile from '@/pages/Profile';
import { vi, expect, test, beforeEach, afterEach } from vitest' // Added beforeEach, afterEach;
// Define the UserProfile structure based on usage;
interface UserProfile {;
  id: string;
   name: string;
   email: string;
   avatarUrl: string;
<<<<<<< HEAD
   notifications: { emai,
    l: boolean;
   pus,
    h: boolean}
=======
   notifications: { email: boolean;
=======
import { render, screen, fireEvent, waitFor }   from '@testing-library/react''
import Profile   from '@/pages/Profile''
import { vi, expect, test, beforeEach, afterEach }  from 'vitest'// Added beforeEach, afterEach;'
// Define the UserProfile structure based on usage
interface UserProfile {
  id: string
   name: string
   email: string
   avatarUrl: string
   notifications: { email: boolean
>>>>>>> main
   push: boolean}
>>>>>>> main
  // Add other fields if present in the actual profile}
// Store the original fetch
const originalFetch = global.fetch
// Helper to mock fetch
// It should be typed to align with how global.fetch is typed or how it
  's used.;'
// global.fetch returns Promise<Response>, Response has a .json() method returning Promise<any>
// So, the mock should resolve to something that has a json method.
const mockFetchImplementation = (
<<<<<<< HEAD
  responseData: UserProfile | { succes,
    s: boolean } | Partial<UserProfile>,
  ok = true,
=======
  responseData: UserProfile | { success: boolean } | Partial<UserProfile>
  ok = true
>>>>>>> main
  status = 200) =>
  vi.fn().mockResolvedValue({
<<<<<<< HEAD
    ok,
    status,
    json: () => Promise.resolve(responseData),
    text: () => Promise.resolve(JSON.stringify(responseData)), // Add text() method for completeness});
describe(Profile Page;
  '', () => {
  beforeEach(() => {
    // Reset fetch mock before each test;
    global.fetch = vi.fn()});
  afterEach(() => {
    // Restore original fetch after all tests in this suite;
    global.fetch = originalFetch});
  test(fetches profile on mount;
  ', async () => {
    const mockProfileData: UserProfile = {'
      i,
    d: '1,
      name:,
<<<<<<< HEAD
  Jane
  ',
=======
  Jane;
  ,
>>>>>>> main
      email: 'jane@example.com,
<<<<<<< HEAD
      avatarUrl: '',
      notifications: { emai,
    l: true, push: false }}
    global.fetch = mockFetchImplementation(mockProfileData);
    render(<Profile />);
    await screen.findByDisplayValue(,
  Jane') // Wait for the name field to be populated;
    expect(global.fetch).toHaveBeenCalledWith('
  '/api/users/me');
    expect(global.fetch).toHaveBeenCalledTimes(1)})
  test('
  'saves updated profile', async () => {
    const initialProfileData: UserProfile = {
      i,
    d:;
  '1,
=======
      avatarUrl: ',
=======
    ok
    status
    json: () => Promise.resolve(responseData)
    text: () => Promise.resolve(JSON.stringify(responseData)), // Add text() method for completeness})
  describe('Profile Page', () => {
  beforeEach(() => {
    // Reset fetch mock before each test
    global.fetch = vi.fn()})
  afterEach(() => {
    // Restore original fetch after all tests in this suite
    global.fetch = originalFetch})
  test('fetches profile on mount;, async () => {'
    const mockProfileData: UserProfile = {
      id: '1,'
      name:
  Jane
  
      email: 'jane@example.com,'
      avatarUrl: '
>>>>>>> main
      notifications: { email: true, push: false }}
    global.fetch = mockFetchImplementation(mockProfileData)
    render(<Profile  />)
    await screen.findByDisplayValue(
  Jane') // Wait for the name field to be populated;'
    expect(global.fetch).toHaveBeenCalledWith(
<<<<<<< HEAD
  '/api/users/me);
    expect(global.fetch).toHaveBeenCalledTimes(1)});
=======
  '/api/users/me');'
    expect(global.fetch).toHaveBeenCalledTimes(1)})
>>>>>>> main
  test(
  'saves updated profile', async () => {'
    const initialProfileData: UserProfile = {
<<<<<<< HEAD
      id: ;
  1,
>>>>>>> main
      name:,
  Jane',
      email: 'jane@example.com,
      avatarUrl: ;
  ',
      notifications: { emai,
    l: true, push: false }}
    const updatedProfileData: UserProfile = {
      ...initialProfileData,
      name: 'New Name;
<<<<<<< HEAD
  '}
;
    // Mock initial fetch
    global.fetch = mockFetchImplementation(initialProfileData)
=======
  }
    // Mock initial fetch;
<<<<<<< HEAD
    global.fetch = mockFetchImplementation(initialProfileData);
>>>>>>> main
    render(<Profile />);
    await screen.findByDisplayValue('Jane;
  ') // Ensure initial data is loaded;
    // Mock the PUT request response;
=======
=======
      id:
  '1,'
      name:
  Jane
      email: 'jane@example.com,'
      avatarUrl: 
  
      notifications: { email: true, push: false }}
    const updatedProfileData: UserProfile = {
      ...initialProfileData
      name: 'New Name;}'
    // Mock initial fetch
>>>>>>> main
    global.fetch = mockFetchImplementation(initialProfileData)
    render(<Profile  />)
    await screen.findByDisplayValue('Jane;) // Ensure initial data is loaded;'
    // Mock the PUT request response
>>>>>>> main
    (global.fetch as vi.Mock).mockResolvedValueOnce({
<<<<<<< HEAD
      ok: true,
      status: 200,
      json: () => Promise.resolve(updatedProfileData), // This is the response for the PUT});
    fireEvent.change(screen.getByLabelText(,
  Name;
<<<<<<< HEAD
  '), {'
      target: { valu,
    e: 'New Name }})
=======
  ), {
      target: { value: 'New Name }});
>>>>>>> main
    fireEvent.click(screen.getByText(,
  Save;
  '));
    await waitFor(() =>
<<<<<<< HEAD
      expect(global.fetch).toHaveBeenCalledWith('
        '/api/users/me;
=======
      expect(global.fetch).toHaveBeenCalledWith(
        /api/users/me;
>>>>>>> main
  ',
        expect.objectContaining({'
          method: 'PUT,
          headers: {,
  Content-Type;
<<<<<<< HEAD
  ': 'application/json },
          body: JSON.stringify({ nam,
    e:,
=======
  : 'application/json },
          body: JSON.stringify({ name:,
>>>>>>> main
  New Name;
  ' }), // Only name;
  ' should be in the body for this update})));
    // The fetch for GET (initial) + PUT (save);
    expect(global.fetch).toHaveBeenCalledTimes(2)
    // Verify the input field is updated (optimistic update or re-fetch might occur)
    // If the component re-fetches or updates state from PUT response: await screen.findByDisplayValue('New Name)})});
=======
      ok: true
      status: 200
      json: () => Promise.resolve(updatedProfileData), // This is the response for the PUT})
    fireEvent.change(screen.getByLabelText(
  Name
  '), {'
      target: { value: 'New Name }})'
    fireEvent.click(screen.getByText(
  Save
  '));'
    await waitFor(() =>
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/users/me;,'
        expect.objectContaining({
          method: 'PUT,'
          headers: {
  Content-Type
  ': 'application/json },'
          body: JSON.stringify({ name:
  New Name
  ' }), // Only 'name; should be in the body for this update})));'
    // The fetch for GET (initial) + PUT (save)
    expect(global.fetch).toHaveBeenCalledTimes(2)
    // Verify the input field is updated (optimistic update or re-fetch might occur)
    // If the component re-fetches or updates state from PUT response: await screen.findByDisplayValue('New Name)})})'
>>>>>>> main
