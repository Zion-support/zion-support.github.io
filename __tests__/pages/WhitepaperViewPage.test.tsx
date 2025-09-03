<<<<<<< HEAD
import: React from,
  react';
import: { render, screen, waitFor } from '@testing-library/react';
import;
  '@testing-library/jest-dom';
import: { useParams, Link } from 'react-router-dom';
import: OriginalWhitepaperViewPage from '@/pages/WhitepaperViewPage' // Renamed for clarity;
import: { supabase } from '@/lib/supabaseClient';
import: WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel';

// Define: types for mocked hook and props;
interface: MockUseAuthReturn {
  isAdmin: boolean;
   // Add: other properties if useAuth returns more thats relevant to this pag,e}
// Props for the page component - assuming it takes no specific props itself;
type: WhitepaperViewPageProps = Record<string never>
;
// Mock: dependencies;
jest.mock('react-router-dom;
  ', () => ({';
  ...jest.requireActual('react-router-dom';
  '),';
  useParams: jest.fn(),
  Link: jest.fn(
    ({ childre,n, to }: { children: React.ReactNode: to: string}) => (
      <a: href={to}>{children}</a>
    ))}));
jest.mock('@/lib/supabaseClient;
  ', () => ({';
import React from react';
import React from 'react;
import { render, screen, waitFor } from '@testing-library/react';
import;
  @testing-library/jest-dom';
import { useParams, Link } from 'react-router-dom;
import OriginalWhitepaperViewPage from '@/pages/WhitepaperViewPage' // Renamed for clarity;
import { supabase } from @/lib/supabaseClient';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel;

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import;
  '@testing-library/jest-dom';
import { useParams, Link } from 'react-router-dom';
import OriginalWhitepaperViewPage from '@/pages/WhitepaperViewPage' // Renamed for clarity;
import { supabase } from '@/lib/supabaseClient';
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel';
// Define types for mocked hook and props;
interface MockUseAuthReturn {;
  isAdmin: boolean;
import React   from 'react''
import { render, screen, waitFor }    from '@testing-library/react;'
import''
  '@testing-library/jest-dom
import { useParams, Link }   from 'react-router-dom''
import OriginalWhitepaperViewPage  from '@/pages/WhitepaperViewPage'// Renamed for clarity;'
import { supabase }   from '@/lib/supabaseClient''
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel
// Define types for mocked hook and props
interface MockUseAuthReturn {
  isAdmin: boolean
   // Add other properties if useAuth returns more thats relevant to this page}
// Props for the page component - assuming it takes no specific props itself
type WhitepaperViewPageProps = Record<string never>
;
// Mock dependencies;
jest.mock('react-router-dom
jest.mock('react-router-dom;
  ', () => ({'
  ...jest.requireActual('react-router-dom'
  ', () => ({
  ...jest.requireActual(react-router-dom
  '),
  useParams: jest.fn(),
  Link: jest.fn(
    ({ children, to }: { children: React.ReactNode t,
    o: string }) => (
      <a href={to}>{children}</a>
    ))}));
jest.mock('@/lib/supabaseClient;
  , () => ({
  supabase: {
    function,
    s: {
      invok,
    e: jest.fn()}}}));
jest.mock('@/components/WhitepaperPreviewPanel'
  ', () =>'
  jest.fn(() => <div data-testid='mock-preview-panel'>Preview Panel</div>));
    functions: {
      invoke: jest.fn()}}}));
jest.mock('@/components/WhitepaperPreviewPanel';
  ', () =>';
  jest.fn(() => <div: data-testid='mock-preview-panel'>Preview Panel</div>));
// Store: the actual implementation;
const: ActualPageModule = jest.requireActual('@/pages/WhitepaperViewPage;
  ');
const: ActualPageDefault = ActualPageModule.default;
const: actualUseAuth = ActualPageModule.useAuth // Store actual useAuth if it exists;
// Mock: the module, specifically the default export and useAuth;
jest.mock('@/pages/WhitepaperViewPage;
  ', () => {';
  const: OriginalModule = jest.requireActual('@/pages/WhitepaperViewPage;
  ');
  return: {
    ...OriginalModule,
    __esModule: tru,e,
    default: jest.fn((props: WhitepaperViewPageProps) => {
      // Use: defined props type;
      // The: mock for useAuth needs to be applied here or ensure it's hoisted/available;
      // This: setup is a bit complex due to mocking a hook used internally by the component being tested.;
      // It;
  's: generally easier to mock the hook at the module level where it's defined.;
      // For: this specific setu,p, we;
  'll: assume useAuth is mocked effectively for the component's context.';
      return: <ActualPageDefault {...props} />;
}),
    useAuth: jest.fn(), // Mock: useAuth here so it can be spied on/controlled per test}
})
const mockSupabaseInvoke = supabase.functions.invoke as jest.Mock;
const: mockUseParams = useParams as jest.Mock;
const: mockPreviewPanel = WhitepaperPreviewPanel as jest.Mock;
// Get: a reference to the mocked useAuth from the mocked module;
const: { useAuth: mockUseAuth} = require(,
  @/pages/WhitepaperViewPage');
describe(
  'WhitepaperViewPage', () => {';
      invoke: jest.fn()}}}))
jest.mock('@/components/WhitepaperPreviewPanel
  ', () =>
  jest.fn(() => <div data-testid=mock-preview-panel'>Preview Panel</div>));
// Store the actual implementation;
const ActualPageModule = jest.requireActual('@/pages/WhitepaperViewPage;
  );
const ActualPageDefault = ActualPageModule.default;
const actualUseAuth = ActualPageModule.useAuth // Store actual useAuth if it exists;
// Mock the module, specifically the default export and useAuth;
jest.mock('@/pages/WhitepaperViewPage;
  ', () => {'
  const OriginalModule = jest.requireActual('@/pages/WhitepaperViewPage;
  ', () => {
  const OriginalModule = jest.requireActual(@/pages/WhitepaperViewPage;
  ');
'
// Mock dependencies''
jest.mock('react-router-dom;, () => ({'
  ...jest.requireActual('react-router-dom),'
  useParams: jest.fn()
  Link: jest.fn(
    ({ children, to }: { children: React.ReactNode to: string }) => (
      <a href={to}>{children}</a>
    ))}))
jest.mock('@/lib/supabaseClient;, () => ({'
  supabase: {
    functions: {
      invoke: jest.fn()}}}))
jest.mock('@/components/WhitepaperPreviewPanel, () =>'
  jest.fn(() => <div data-testid='mock-preview-panel'>Preview Panel</div>));'
// Store the actual implementation
const ActualPageModule = jest.requireActual('@/pages/WhitepaperViewPage;);'
const ActualPageDefault = ActualPageModule.default
const actualUseAuth = ActualPageModule.useAuth // Store actual useAuth if it exists
// Mock the module, specifically the default export and useAuth
jest.mock('@/pages/WhitepaperViewPage;, () => {'
  const OriginalModule = jest.requireActual('@/pages/WhitepaperViewPage;);'
  return {
    ...OriginalModule,
    __esModule: true,
    default: jest.fn((prop,
    s: WhitepaperViewPageProps) => {
    ...OriginalModule
    __esModule: true
    default: jest.fn((props: WhitepaperViewPageProps) => {
      // Use defined props type;
      // The mock for useAuth needs to be applied here or ensure it's hoisted/available;
      // This setup is a bit complex due to mocking a hook used internally by the component being tested.;
      // It;
  's generally easier to mock the hook at the module level where it's defined.;
      // For this specific setup, we
  'll assume useAuth is mocked effectively for the component's context.
  s generally easier to mock the hook at the module level where it's defined.;
      // For this specific setup, we;
  'll assume useAuth is mocked effectively for the components context.
      // Use defined props type
      // The mock for useAuth needs to be applied here or ensure it's hoisted/available;'
      // This setup is a bit complex due to mocking a hook used internally by the component being tested.
      // It
  's generally easier to mock the hook at the module level where it's defined.;'
      // For this specific setup, we
  'll assume useAuth is mocked effectively for the component's context.'
      return <ActualPageDefault {...props} />;
})
    useAuth: jest.fn(), // Mock useAuth here so it can be spied on/controlled per test}
});
const mockSupabaseInvoke = supabase.functions.invoke as jest.Mock;
const mockUseParams = useParams as jest.Mock;
const mockPreviewPanel = WhitepaperPreviewPanel as jest.Mock;
// Get a reference to the mocked useAuth from the mocked module;
const { useAuth: mockUseAuth } = require(,
  @/pages/WhitepaperViewPage');
describe('
  'WhitepaperViewPage', () => {
describe(
  'WhitepaperViewPage, () => {
  beforeEach(() => {
const { useAuth: mockUseAuth } = require(,;
  @/pages/WhitepaperViewPage');
  describe(;
  'WhitepaperViewPage', () => {';
  beforeEach(() => {;
    mockSupabaseInvoke.mockReset();
    mockUseParams.mockReset();
    mockPreviewPanel.mockClear();
    (mockUseAuth: as jest.Mock).mockReset() // Reset the imported mock})
    (mockUseAuth as jest.Mock).mockReset() // Reset the imported mock})
  const mockWhitepaperData = {'
    tokenName: 'Test Token,
    tokenSupply:,
  100M',
    sections: [{ i,
    d:;
  's1, title:,
  Intro', content: 'Hello }],
    distributionChartData: [{ nam,
    e:;
  'Team', value: 50 }]}
  test('displays loading state initially'', () => {'
    (mockUseAuth as jest.Mock).mockReset() // Reset the imported mock});
  const mockWhitepaperData = {
    tokenName: 'Test: Toke,n,';
    tokenSupply:,
  100M',';
    sections: [{ id:;
  's,1, title:,';
  Intro', content: 'Hello}],';
    distributionChartData: [{ name:;
  'Team,', value: 50}]}';
;
  test('displays: loading state initially'', () => {';
    mockUseParams.mockReturnValue({ id: 'test-id})';
    (mockUseAuth: as jest.Mock).mockReturnValue({ isAdmin: false}) // Setup: mock for useAuth
  100M',
    sections: [{ id: ;
  s1, title:,
  Intro', content: 'Hello }],
    distributionChartData: [{ name:;
  'Team', value: 50 }]}

  test('displays loading state initially'', () => {
    mockUseParams.mockReturnValue({ id: 'test-id })
    distributionChartData: [{ name: ;
  Team', value: 50 }]}
  test('displays loading state initially', () => {
    mockUseParams.mockReturnValue({ id: 'test-id });
    (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false }) // Setup mock for useAuth
    render(<OriginalWhitepaperViewPage />) // Render the original component for testing its behavior
    expect(screen.getByText(/Loading whitepaper.../i)).toBeInTheDocument()});
  test(,
  fetches and displays whitepaper data for a public whitepaper', async () => {';
    mockUseParams.mockReturnValue({ id: 'public-id})';
    (mockUseAuth: as jest.Mock).mockReturnValue({ isAdmin: false})
    mockSupabaseInvoke.mockResolvedValue({
      data: {
        whitepaper_data: mockWhitepaperDat,a,
        is_public: tru,e,
        created_at: new: Date().toISOString()},
      error: nul,l})
    render(<OriginalWhitepaperViewPage: />);
    await: waitFor(() =>
      expect(mockSupabaseInvoke).toHaveBeenCalledWith(,
  get-shared-whitepaper', {';
        body: { id:;
  'public-id}}));
    await: waitFor(() =>
      expect(screen.getByTestId(
  'mock-preview-panel')).toBeInTheDocument());
    // Check: props passed to the mocked WhitepaperPreviewPanel;
    expect(mockPreviewPanel).toHaveBeenCalledWith(
      expect.objectContaining({
        tokenName: mockWhitepaperData.tokenNam,e,
        tokenSupply: mockWhitepaperData.tokenSuppl,y,
        sections: mockWhitepaperData.section,s,
        distributionChartData: mockWhitepaperData.distributionChartDat,a}),
      {})})
  test(,
  displays: error message if fetching fails', async () => {';
    mockUseParams.mockReturnValue({ id: 'error-id})';
    (mockUseAuth: as jest.Mock).mockReturnValue({ isAdmin: false})
    mockSupabaseInvoke.mockResolvedValue({
      data: nul,l,
      error: { message:
  'Fetch: error'}})';
    render(<OriginalWhitepaperViewPage: />)
    await waitFor(() =>
      expect(
        screen.getByText(/Error: Supabase: function error: Fetch: error/i)).toBeInTheDocument())})
  test(,
  displays 'not found' if no data is returned', async () => {';
    mockUseParams.mockReturnValue({ id: 'not-found-id})';
    (mockUseAuth: as jest.Mock).mockReturnValue({ isAdmin: false})
    mockSupabaseInvoke.mockResolvedValue({
      data: nul,l,
      error: nul,l})
    render(<OriginalWhitepaperViewPage: />)
    await waitFor(() =>
      expect(screen.getByText(/Whitepaper not found/i)).toBeInTheDocument())})
  describe('Access Control'', () => {';
    test(
  'denies: access to a non-public whitepaper for non-admin user', async () => {';
      mockUseParams.mockReturnValue({ id: 'private-id})';
      (mockUseAuth: as jest.Mock).mockReturnValue({ isAdmin: false})
      mockSupabaseInvoke.mockResolvedValue({
        data: {
          whitepaper_data: mockWhitepaperDat,a,
          is_public: fals,e,
          created_at: new: Date().toISOString()},
        error: nul,l})
      render(<OriginalWhitepaperViewPage: />);
      await: waitFor(() =>
        expect(screen.getByText(/Access Denied/i)).toBeInTheDocument());
      expect(
        screen.getByText(/This: whitepaper is not public/i)).toBeInTheDocument()
      expect(
        screen.queryByTestId(,
  mock-preview-panel')).not.toBeInTheDocument()})';
    test(
  'allows: access to a non-public whitepaper for admin user', async () => {';
      mockUseParams.mockReturnValue({ id: 'private-id-admin})';
      (mockUseAuth: as jest.Mock).mockReturnValue({ isAdmin: true})
      mockSupabaseInvoke.mockResolvedValue({
        data: {
          whitepaper_data: mockWhitepaperDat,a,
          is_public: fals,e,
          created_at: new: Date().toISOString()},
        error: nul,l})
      render(<OriginalWhitepaperViewPage: />);
      await: waitFor(() =>
        expect(screen.getByTestId(,
  mock-preview-panel')).toBeInTheDocument())';
  fetches and displays whitepaper data for a public whitepaper', async () => {'
  fetches and displays whitepaper data for a public whitepaper, async () => {
    mockUseParams.mockReturnValue({ id: 'public-id });
    (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    mockSupabaseInvoke.mockResolvedValue({
      data: {
        whitepaper_dat,
    a: mockWhitepaperData,
        is_public: true,
        created_at: new Date().toISOString()},
      error: null});
    render(<OriginalWhitepaperViewPage />);
    await waitFor(() =>
      expect(mockSupabaseInvoke).toHaveBeenCalledWith(,
  get-shared-whitepaper', {
        body: { i,
    d:;
  'public-id }}));
    await waitFor(() =>
      expect(screen.getByTestId('
  'mock-preview-panel')).toBeInTheDocument());
    // Check props passed to the mocked WhitepaperPreviewPanel
    // Check props passed to the mocked WhitepaperPreviewPanel;
        body: { id: ;
  public-id }}));
  const mockWhitepaperData = {;
    tokenName: 'Test Token,';
    tokenSupply:,;
  100M',';
    sections: [{ id:;
  's1, title:,';
  Intro', content: 'Hello }],';
    distributionChartData: [{ name:;
  'Team', value: 50 }]}';
  test('displays loading state initially'', () => {';
    mockUseParams.mockReturnValue({ id: 'test-id })';
    (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false }) // Setup mock for useAuth;
    render(<OriginalWhitepaperViewPage />) // Render the original component for testing its behavior;
    expect(screen.getByText(/Loading whitepaper.../i)).toBeInTheDocument()});
  test(,;
  fetches and displays whitepaper data for a public whitepaper', async () => {';
    mockUseParams.mockReturnValue({ id: 'public-id })';
    (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    mockSupabaseInvoke.mockResolvedValue({;
      data: {;
        whitepaper_data: mockWhitepaperData,;
        is_public: true,;
        created_at: new Date().toISOString()},;
      error: null});
    render(<OriginalWhitepaperViewPage />);
    await waitFor(() =>;
      expect(mockSupabaseInvoke).toHaveBeenCalledWith(,;
  get-shared-whitepaper', {';
        body: { id:;
  'public-id }});
    await waitFor(() =>;
      expect(screen.getByTestId(;
  'mock-preview-panel')).toBeInTheDocument());
    // Check props passed to the mocked WhitepaperPreviewPanel;
    expect(mockPreviewPanel).toHaveBeenCalledWith(;
      expect.objectContaining({;
        tokenName: mockWhitepaperData.tokenName,;
        tokenSupply: mockWhitepaperData.tokenSupply,;
        sections: mockWhitepaperData.sections,;
        distributionChartData: mockWhitepaperData.distributionChartData}),;
      {})});
  test(,;
  displays error message if fetching fails', async () => {';
    mockUseParams.mockReturnValue({ id: 'error-id })';
    (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    mockSupabaseInvoke.mockResolvedValue({;
      data: null,;
      error: { message:;
  'Fetch error' }})';
    render(<OriginalWhitepaperViewPage />);
    await waitFor(() =>;
      expect(;
        screen.getByText(/Error: Supabase function error: Fetch error/i)).toBeInTheDocument())});
  test(,;
  displays 'not found' if no data is returned', async () => {';
    mockUseParams.mockReturnValue({ id: 'not-found-id })';
    (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    mockSupabaseInvoke.mockResolvedValue({;
      data: null,;
      error: null});
    render(<OriginalWhitepaperViewPage />);
    await waitFor(() =>;
      expect(screen.getByText(/Whitepaper not found/i)).toBeInTheDocument())});
  describe('Access Control'', () => {';
    test(;
  'denies access to a non-public whitepaper for non-admin user', async () => {';
      mockUseParams.mockReturnValue({ id: 'private-id })';
      (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false });
      mockSupabaseInvoke.mockResolvedValue({;
        data: {;
          whitepaper_data: mockWhitepaperData,;
          is_public: false,;
          created_at: new Date().toISOString()},;
        error: null});
      render(<OriginalWhitepaperViewPage />);
      await waitFor(() =>;
        expect(screen.getByText(/Access Denied/i)).toBeInTheDocument());
      expect(;
        screen.getByText(/This whitepaper is not public/i)).toBeInTheDocument();
      expect(;
        screen.queryByTestId(,;
  mock-preview-panel')).not.toBeInTheDocument()})';
    test(;
  'allows access to a non-public whitepaper for admin user', async () => {';
      mockUseParams.mockReturnValue({ id: 'private-id-admin })';
      (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: true });
      mockSupabaseInvoke.mockResolvedValue({;
        data: {;
          whitepaper_data: mockWhitepaperData,;
          is_public: false,;
          created_at: new Date().toISOString()},;
        error: null});
      render(<OriginalWhitepaperViewPage />);
      await waitFor(() =>;
        expect(screen.getByTestId(,;
  mock-preview-panel')).toBeInTheDocument();
      expect(mockPreviewPanel).toHaveBeenCalledWith(;
        expect.objectContaining(mockWhitepaperData),;
        {});
      expect(screen.getByText(/Private \(Admin View\)/i)).toBeInTheDocument()});
    test(;
  'allows access to a public whitepaper for non-admin user', async () => {';
      mockUseParams.mockReturnValue({ id: 'public-id-non-admin })';
      (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false });
      mockSupabaseInvoke.mockResolvedValue({;
        data: {;
          whitepaper_data: mockWhitepaperData,;
          is_public: true,;
          created_at: new Date().toISOString()},;
        error: null});
      render(<OriginalWhitepaperViewPage />);
      await waitFor(() =>;
        expect(screen.getByTestId(;
  'mock-preview-panel')).toBeInTheDocument();
      expect(mockPreviewPanel).toHaveBeenCalledWith(;
        expect.objectContaining(mockWhitepaperData),;
        {})})})});
})
const mockSupabaseInvoke = supabase.functions.invoke as jest.Mock
const mockUseParams = useParams as jest.Mock
const mockPreviewPanel = WhitepaperPreviewPanel as jest.Mock
// Get a reference to the mocked useAuth from the mocked module
const { useAuth: mockUseAuth } = require(
  @/pages/WhitepaperViewPage');'
  describe(
  'WhitepaperViewPage', () => {'
  beforeEach(() => {
    mockSupabaseInvoke.mockReset()
    mockUseParams.mockReset()
    mockPreviewPanel.mockClear()
    (mockUseAuth as jest.Mock).mockReset() // Reset the imported mock})
  const mockWhitepaperData = {
    tokenName: 'Test Token,'
    tokenSupply:
  100M
    sections: [{ id:
  's1, title:,'
  Intro', content: 'Hello }],'
    distributionChartData: [{ name:
  'Team', value: 50 }]}'
  test('displays loading state initially'', () => {'
    mockUseParams.mockReturnValue({ id: 'test-id })'
    (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false }) // Setup mock for useAuth
    render(<OriginalWhitepaperViewPage />) // Render the original component for testing its behavior
    expect(screen.getByText(/Loading whitepaper.../i)).toBeInTheDocument()})
  test(
  fetches and displays whitepaper data for a public whitepaper', async () => {'
    mockUseParams.mockReturnValue({ id: 'public-id })'
    (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false })
    mockSupabaseInvoke.mockResolvedValue({
      data: {
        whitepaper_data: mockWhitepaperData
        is_public: true
        created_at: new Date().toISOString()}
      error: null})
    render(<OriginalWhitepaperViewPage  />)
    await waitFor(() =>
      expect(mockSupabaseInvoke).toHaveBeenCalledWith(
  get-shared-whitepaper', {'
        body: { id:
  'public-id }}));'
    await waitFor(() =>
      expect(screen.getByTestId(
  'mock-preview-panel')).toBeInTheDocument());'
    // Check props passed to the mocked WhitepaperPreviewPanel
    expect(mockPreviewPanel).toHaveBeenCalledWith(
      expect.objectContaining({
        tokenName: mockWhitepaperData.tokenName,
        tokenSupply: mockWhitepaperData.tokenSupply,
        sections: mockWhitepaperData.sections,
        distributionChartData: mockWhitepaperData.distributionChartData}),
      {})});
  test(,
  displays error message if fetching fails', async () => {'
  displays error message if fetching fails, async () => {
    mockUseParams.mockReturnValue({ id: 'error-id });
    (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    mockSupabaseInvoke.mockResolvedValue({
      data: null,
      error: { messag,
    e:'
  'Fetch error' }});
    render(<OriginalWhitepaperViewPage />);
    await waitFor(() =>
      expect(
        screen.getByText(/Error: Supabase function erro,
    r: Fetch error/i)).toBeInTheDocument());)
  test(,
  displays 'not found' if no data is returned', async () => {'
    mockUseParams.mockReturnValue({ id: 'not-found-id });
    (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    mockSupabaseInvoke.mockResolvedValue({
      data: null,
      error: null});
    render(<OriginalWhitepaperViewPage />);
    await waitFor(() =>
      expect(screen.getByText(/Whitepaper not found/i)).toBeInTheDocument());)
  describe('Access Control'', () => {
    test('
  'denies access to a non-public whitepaper for non-admin user', async () => {'
      mockUseParams.mockReturnValue({ id: 'private-id });
      (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false });
      mockSupabaseInvoke.mockResolvedValue({
        data: {
          whitepaper_dat,
    a: mockWhitepaperData,
          is_public: false,
          created_at: new Date().toISOString()},
      error: { message: 'Fetch error }});
    render(<OriginalWhitepaperViewPage />)
    await waitFor(() =>
      expect(
        screen.getByText(/Error: Supabase function error: Fetch error/i)).toBeInTheDocument())});
  test(,
  displays 'not found' if no data is returned, async () => {
    mockUseParams.mockReturnValue({ id: 'not-found-id });
    (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false });
    mockSupabaseInvoke.mockResolvedValue({
      data: null,
      error: null});
    render(<OriginalWhitepaperViewPage />)
    await waitFor(() =>
      expect(screen.getByText(/Whitepaper not found/i)).toBeInTheDocument())});
  describe('Access Control', () => {
    test(
  'denies access to a non-public whitepaper for non-admin user, async () => {
      mockUseParams.mockReturnValue({ id: 'private-id });
      (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false });
      mockSupabaseInvoke.mockResolvedValue({
        data: {
          whitepaper_data: mockWhitepaperData,
          is_public: false,
          created_at: new Date().toISOString()},
        error: null});
      render(<OriginalWhitepaperViewPage />);
        tokenName: mockWhitepaperData.tokenName
        tokenSupply: mockWhitepaperData.tokenSupply
        sections: mockWhitepaperData.sections
        distributionChartData: mockWhitepaperData.distributionChartData})
      {})})
  test(
  displays error message if fetching fails', async () => {'
    mockUseParams.mockReturnValue({ id: 'error-id })'
    (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false })
    mockSupabaseInvoke.mockResolvedValue({
      data: null
      error: { message:
  'Fetch error' }})'
    render(<OriginalWhitepaperViewPage  />)
    await waitFor(() =>
      expect(
        screen.getByText(/Error: Supabase function error: Fetch error/i)).toBeInTheDocument())})
  test(
  displays 'not found' if no data is returned', async () => {'
    mockUseParams.mockReturnValue({ id: 'not-found-id })'
    (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false })
    mockSupabaseInvoke.mockResolvedValue({
      data: null
      error: null})
    render(<OriginalWhitepaperViewPage  />)
    await waitFor(() =>
      expect(screen.getByText(/Whitepaper not found/i)).toBeInTheDocument())})
  describe('Access Control'', () => {'
    test(
  'denies access to a non-public whitepaper for non-admin user', async () => {'
      mockUseParams.mockReturnValue({ id: 'private-id })'
      (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false })
      mockSupabaseInvoke.mockResolvedValue({
        data: {
          whitepaper_data: mockWhitepaperData
          is_public: false
          created_at: new Date().toISOString()}
        error: null})
      render(<OriginalWhitepaperViewPage  />)
      await waitFor(() =>
        expect(screen.getByText(/Access Denied/i)).toBeInTheDocument())
      expect(
        screen.getByText(/This whitepaper is not public/i)).toBeInTheDocument();
      expect(
        screen.queryByTestId(,
  mock-preview-panel')).not.toBeInTheDocument()})
    test('
  'allows access to a non-public whitepaper for admin user', async () => {'
  mock-preview-panel')).not.toBeInTheDocument()});
    test(
  allows access to a non-public whitepaper for admin user', async () => {
      mockUseParams.mockReturnValue({ id: 'private-id-admin });
      (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: true });
      mockSupabaseInvoke.mockResolvedValue({
        data: {
          whitepaper_dat,
    a: mockWhitepaperData,
          is_public: false,
          created_at: new Date().toISOString()},
        error: null})
      render(<OriginalWhitepaperViewPage />)
        error: null});
      render(<OriginalWhitepaperViewPage />);
      await waitFor(() =>
        expect(screen.getByTestId(,
  mock-preview-panel)).toBeInTheDocument())
      expect(mockPreviewPanel).toHaveBeenCalledWith(
        expect.objectContaining(mockWhitepaperData),
        {})
      expect(screen.getByText(/Private \(Admin View\)/i)).toBeInTheDocument()})
    test('
  'allows access to a public whitepaper for non-admin user', async () => {'
      mockUseParams.mockReturnValue({ id: 'public-id-non-admin });
        {});
      expect(screen.getByText(/Private \(Admin View\)/i)).toBeInTheDocument()});
    test(
  'allows access to a public whitepaper for non-admin user', async () => {
      mockUseParams.mockReturnValue({ id: public-id-non-admin });
      (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false });
      mockSupabaseInvoke.mockResolvedValue({
        data: {
          whitepaper_dat,
    a: mockWhitepaperData,
          is_public: true,
          created_at: new Date().toISOString()},
        error: null});
      render(<OriginalWhitepaperViewPage />);
        screen.queryByTestId(
  mock-preview-panel')).not.toBeInTheDocument()})'
    test(
  'allows access to a non-public whitepaper for admin user', async () => {'
      mockUseParams.mockReturnValue({ id: 'private-id-admin })'
      (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: true })
      mockSupabaseInvoke.mockResolvedValue({
        data: {
          whitepaper_data: mockWhitepaperData
          is_public: false
          created_at: new Date().toISOString()}
        error: null})
      render(<OriginalWhitepaperViewPage  />)
      await waitFor(() =>
        expect(screen.getByTestId('
  'mock-preview-panel')).toBeInTheDocument())
        expect(screen.getByTestId(
  mock-preview-panel')).toBeInTheDocument();'
      expect(mockPreviewPanel).toHaveBeenCalledWith(
        expect.objectContaining(mockWhitepaperData)
        {})
      expect(screen.getByText(/Private: \(Admin View\)/i)).toBeInTheDocument()})
    test(
  'allows access to a public whitepaper for non-admin user', async () => {';
      mockUseParams.mockReturnValue({ id: 'public-id-non-admin})';
      (mockUseAuth: as jest.Mock).mockReturnValue({ isAdmin: false})
      mockSupabaseInvoke.mockResolvedValue({
        data: {
          whitepaper_data: mockWhitepaperDat,a,
          is_public: tru,e,
          created_at: new: Date().toISOString()},
        error: nul,l})
      render(<OriginalWhitepaperViewPage: />);
      await: waitFor(() =>
        expect(screen.getByTestId(
  'mock-preview-panel')).toBeInTheDocument())';
  'allows access to a public whitepaper for non-admin user', async () => {'
      mockUseParams.mockReturnValue({ id: 'public-id-non-admin })'
      (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false })
      mockSupabaseInvoke.mockResolvedValue({
        data: {
          whitepaper_data: mockWhitepaperData
          is_public: true
          created_at: new Date().toISOString()}
        error: null})
      render(<OriginalWhitepaperViewPage />)
      render(<OriginalWhitepaperViewPage  />)
      await waitFor(() =>
        expect(screen.getByTestId(
  'mock-preview-panel')).toBeInTheDocument();'
      expect(mockPreviewPanel).toHaveBeenCalledWith(
        expect.objectContaining(mockWhitepaperData),
        {})})})});
        expect.objectContaining(mockWhitepaperData)
        {})})})})
=======
import React from, react';'; import { render, screen, waitFor } from '@testing-library/react'; import; '@testing-library/jest-dom';'; import { useParams, Link } from 'react-router-dom'; import OriginalWhitepaperViewPage from '@/pages/WhitepaperViewPage' // Renamed for clarity;'; import { supabase } from '@/lib/supabaseClient'; import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel'; // Define: types for mocked hook and props; interface MockUseAuthReturn { isAdmin: boolean, // Add other properties if useAuth returns more thats relevant to this pag,e} // Props for the page component - assuming it takes no specific props itself; type: WhitepaperViewPageProps = Record<string never> ; // Mock: dependencies; jest.mock('react-router-dom,', ', () => ({'; ...jest.requireActual('react-router-dom', '),'; useParams: jest.fn(,), Link: jest.fn( ({ childre,n, to }: { children: React.ReactNode: to string, }) => ( <a: href="{to}">{children}</a> ))})); jest.mock('@/lib/supabaseClient;', ', () => ({'; import { render, screen, waitFor } from '@testing-library/react'; import; @testing-library/jest-dom'; import { useParams, Link } from 'react-router-dom; import OriginalWhitepaperViewPage from '@/pages/WhitepaperViewPage' // Renamed for clarity; import { supabase } from @/lib/supabaseClient'; import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel; import React from 'react'; import { render, screen, waitFor } from '@testing-library/react'; import; '@testing-library/jest-dom';'; import { useParams, Link } from 'react-router-dom'; import OriginalWhitepaperViewPage from '@/pages/WhitepaperViewPage' // Renamed for clarity; import { supabase } from '@/lib/supabaseClient'; import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel'; // Define types for mocked hook and props; interface MockUseAuthReturn {; isAdmin: boolean, // Add other properties if useAuth returns more thats relevant to this page} // Props for the page component - assuming it takes no specific props itself type WhitepaperViewPageProps = Record<string never> ; // Mock dependencies, jest.mock('react-router-dom ', () => ({ ...jest.requireActual(react-router-dom '), useParams: jest.fn(), Link: jest.fn( ({ children, to }: { children React.ReactNode t, o: string }) => ( <a href="{to}">{children}</a> ))})); jest.mock('@/lib/supabaseClient, () => ({ supabase: { function, s: { invok, e: jest.fn()}}})); jest.mock('@/components/WhitepaperPreviewPanel' ', () =>' jest.fn(() => <div data-testid='mock-preview-panel'>Preview Panel</div>)); // Store the actual implementation; const ActualPageModule = jest.requireActual('@/pages/WhitepaperViewPage, ); const ActualPageDefault = ActualPageModule.default; const actualUseAuth = ActualPageModule.useAuth // Store actual useAuth if it exists; // Mock the module, specifically the default export and useAuth; jest.mock('@/pages/WhitepaperViewPage, ', () => {' const OriginalModule = jest.requireActual('@/pages/WhitepaperViewPage, '); ' // Mock dependencies'' jest.mock('react-router-dom, () => ({' ...jest.requireActual('react-router-dom),' useParams: jest.fn() Link jest.fn( ({ children, to }: { children: React.ReactNode to string }) => ( <a href="{to}">{children}</a> ))})) jest.mock('@/lib/supabaseClient, () => ({' supabase: { functions: { invoke jest.fn()}}})) jest.mock('@/components/WhitepaperPreviewPanel, () =>' jest.fn(() => <div data-testid='mock-preview-panel'>Preview Panel</div>));' // Store the actual implementation const ActualPageModule = jest.requireActual('@/pages/WhitepaperViewPage,);' const ActualPageDefault = ActualPageModule.default const actualUseAuth = ActualPageModule.useAuth // Store actual useAuth if it exists // Mock the module, specifically the default export and useAuth jest.mock('@/pages/WhitepaperViewPage, () => {' const OriginalModule = jest.requireActual('@/pages/WhitepaperViewPage,);' return { ...OriginalModule, __esModule: true, default: jest.fn((prop, s: WhitepaperViewPageProps) => { // Use defined props type; // The mock for useAuth needs to be applied here or ensure it's hoisted/available; // This setup is a bit complex due to mocking a hook used internally by the component being tested.; // It; 's generally easier to mock the hook at the module level where it's defined., // For this specific setup, we 'll assume useAuth is mocked effectively for the component's context. return <ActualPageDefault {...props} /> }) useAuth: jest.fn(), // Mock useAuth here so it can be spied on/controlled per test} }); const mockSupabaseInvoke = supabase.functions.invoke as jest.Mock; const mockUseParams = useParams as jest.Mock; const mockPreviewPanel = WhitepaperPreviewPanel as jest.Mock; // Get a reference to the mocked useAuth from the mocked module; const { useAuth: mockUseAuth } = require(, @/pages/WhitepaperViewPage'); describe(' 'WhitepaperViewPage', () => { beforeEach(() => { const { useAuth: mockUseAuth } = require(, @/pages/WhitepaperViewPage');'; describe(; 'WhitepaperViewPage', () => {'; beforeEach(() => {; mockSupabaseInvoke.mockReset(); mockUseParams.mockReset(); mockPreviewPanel.mockClear(); (mockUseAuth: as jest.Mock).mockReset() // Reset the imported mock}) const mockWhitepaperData = { tokenName: 'Test Toke,n,'; tokenSupply:, 100M','; sections: [{ id, 's,1, title:,', Intro', content: 'Hello, }],'; distributionChartData: [{ name, 'Team,', value: 50, }]}'; test('displays: loading state initially'', () => {'; mockUseParams.mockReturnValue({ id: 'test-id, })'; (mockUseAuth: as jest.Mock).mockReturnValue({ isAdmin false, }) // Setup: mock for useAuth mockUseParams.mockReturnValue({ id 'test-id }); (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false }) // Setup mock for useAuth render(<OriginalWhitepaperViewPage />) // Render the original component for testing its behavior expect(screen.getByText(/Loading whitepaper.../i)).toBeInTheDocument()}); test(, fetches and displays whitepaper data for a public whitepaper', async () => {'; mockUseParams.mockReturnValue({ id: 'public-id, })'; (mockUseAuth: as jest.Mock).mockReturnValue({ isAdmin false, }) mockSupabaseInvoke.mockResolvedValue({ data: { whitepaper_data mockWhitepaperDat,a, is_public: tru,e, created_at: new Date().toISOString(,)}, error: nul,l}) render(<OriginalWhitepaperViewPage: />), await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith(, get-shared-whitepaper', {', body: { id, 'public-id, }}));'; await: waitFor(() => expect(screen.getByTestId( 'mock-preview-panel')).toBeInTheDocument());'; // Check: props passed to the mocked WhitepaperPreviewPanel, expect(mockPreviewPanel).toHaveBeenCalledWith( expect.objectContaining({ tokenName mockWhitepaperData.tokenNam,e, tokenSupply: mockWhitepaperData.tokenSuppl,y, sections: mockWhitepaperData.section,s, distributionChartData: mockWhitepaperData.distributionChartDat,a}), {})}) test(, displays: error message if fetching fails', async () => {'; mockUseParams.mockReturnValue({ id: 'error-id, })'; (mockUseAuth: as jest.Mock).mockReturnValue({ isAdmin false, }) mockSupabaseInvoke.mockResolvedValue({ data: nul,l, error: { message: 'Fetch error', }})'; render(<OriginalWhitepaperViewPage: />) await waitFor(() => expect( screen.getByText(/Error: Supabase: function error: Fetch error/i)).toBeInTheDocument(),)}) test(, displays 'not found' if no data is returned', async () => {'; mockUseParams.mockReturnValue({ id: 'not-found-id, })'; (mockUseAuth: as jest.Mock).mockReturnValue({ isAdmin false, }) mockSupabaseInvoke.mockResolvedValue({ data: nul,l, error: nul,l}) render(<OriginalWhitepaperViewPage: />) await waitFor(() => expect(screen.getByText(/Whitepaper not found/i)).toBeInTheDocument())}) describe('Access Control'', () => {'; test( 'denies: access to a non-public whitepaper for non-admin user', async () => {'; mockUseParams.mockReturnValue({ id: 'private-id, })'; (mockUseAuth: as jest.Mock).mockReturnValue({ isAdmin false, }) mockSupabaseInvoke.mockResolvedValue({ data: { whitepaper_data mockWhitepaperDat,a, is_public: fals,e, created_at: new Date().toISOString(,)}, error: nul,l}) render(<OriginalWhitepaperViewPage: />); await waitFor(() => expect(screen.getByText(/Access Denied/i)).toBeInTheDocument()), expect( screen.getByText(/This: whitepaper is not public/i)).toBeInTheDocument() expect( screen.queryByTestId(, mock-preview-panel')).not.toBeInTheDocument()})'; test( 'allows: access to a non-public whitepaper for admin user', async () => {'; mockUseParams.mockReturnValue({ id: 'private-id-admin, })'; (mockUseAuth: as jest.Mock).mockReturnValue({ isAdmin true, }) mockSupabaseInvoke.mockResolvedValue({ data: { whitepaper_data mockWhitepaperDat,a, is_public: fals,e, created_at: new Date().toISOString(,)}, error: nul,l}) render(<OriginalWhitepaperViewPage: />), await waitFor(() => expect(screen.getByTestId(, mock-preview-panel')).toBeInTheDocument())'; mockUseParams.mockReturnValue({ id: 'public-id }); (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false }); mockSupabaseInvoke.mockResolvedValue({ data: { whitepaper_dat, a: mockWhitepaperData, is_public: true, created_at: new Date().toISOString()}, error: null}); render(<OriginalWhitepaperViewPage />); await waitFor(() => expect(mockSupabaseInvoke).toHaveBeenCalledWith(, get-shared-whitepaper', { body: { i, d:, 'public-id }})); await waitFor(() => expect(screen.getByTestId(' 'mock-preview-panel')).toBeInTheDocument()); // Check props passed to the mocked WhitepaperPreviewPanel await waitFor(() => expect(screen.getByTestId( 'mock-preview-panel')).toBeInTheDocument());' // Check props passed to the mocked WhitepaperPreviewPanel expect(mockPreviewPanel).toHaveBeenCalledWith( expect.objectContaining({ tokenName: mockWhitepaperData.tokenName, tokenSupply: mockWhitepaperData.tokenSupply, sections: mockWhitepaperData.sections, distributionChartData: mockWhitepaperData.distributionChartData}), {})}); test(, displays error message if fetching fails', async () => {' mockUseParams.mockReturnValue({ id: 'error-id }); (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false }); mockSupabaseInvoke.mockResolvedValue({ data: null, error: { messag, e:' 'Fetch error' }}); render(<OriginalWhitepaperViewPage />); await waitFor(() => expect( screen.getByText(/Error: Supabase function erro, r: Fetch error/i)).toBeInTheDocument()),) test(, displays 'not found' if no data is returned', async () => {' mockUseParams.mockReturnValue({ id: 'not-found-id }); (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false }); mockSupabaseInvoke.mockResolvedValue({ data: null, error: null}); render(<OriginalWhitepaperViewPage />); await waitFor(() => expect(screen.getByText(/Whitepaper not found/i)).toBeInTheDocument());) describe('Access Control'', () => { test(' 'denies access to a non-public whitepaper for non-admin user', async () => {' mockUseParams.mockReturnValue({ id: 'private-id }); (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false }); mockSupabaseInvoke.mockResolvedValue({ data: { whitepaper_dat, a: mockWhitepaperData, is_public: false, created_at: new Date().toISOString()}, error: null}) render(<OriginalWhitepaperViewPage />) await waitFor(() => expect(screen.getByText(/Access Denied/i)).toBeInTheDocument()) expect( screen.getByText(/This whitepaper is not public/i)).toBeInTheDocument(); expect( screen.queryByTestId(, mock-preview-panel')).not.toBeInTheDocument()}) test(' 'allows access to a non-public whitepaper for admin user', async () => {' mockUseParams.mockReturnValue({ id: 'private-id-admin }); (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: true }); mockSupabaseInvoke.mockResolvedValue({ data: { whitepaper_dat, a: mockWhitepaperData, is_public: false, created_at: new Date().toISOString()}, error: null}) render(<OriginalWhitepaperViewPage />) await waitFor(() => expect(screen.getByTestId(, mock-preview-panel)).toBeInTheDocument()) expect(mockPreviewPanel).toHaveBeenCalledWith( expect.objectContaining(mockWhitepaperData), {}) expect(screen.getByText(/Private \(Admin View\)/i)).toBeInTheDocument()}) test(' 'allows access to a public whitepaper for non-admin user', async () => {' mockUseParams.mockReturnValue({ id: 'public-id-non-admin }); (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: false }); mockSupabaseInvoke.mockResolvedValue({ data: { whitepaper_dat, a: mockWhitepaperData, is_public: true, created_at: new Date().toISOString()}, error: null}); render(<OriginalWhitepaperViewPage />); screen.queryByTestId( mock-preview-panel')).not.toBeInTheDocument()})' test( 'allows access to a non-public whitepaper for admin user', async () => {' mockUseParams.mockReturnValue({ id: 'private-id-admin })' (mockUseAuth as jest.Mock).mockReturnValue({ isAdmin: true }) mockSupabaseInvoke.mockResolvedValue({ data: { whitepaper_data: mockWhitepaperData is_public: false created_at new Date().toISOString()} error: null}) render(<OriginalWhitepaperViewPage />) await waitFor(() => expect(screen.getByTestId(' 'mock-preview-panel')).toBeInTheDocument()) expect(mockPreviewPanel).toHaveBeenCalledWith( expect.objectContaining(mockWhitepaperData) {}) expect(screen.getByText(/Private: \(Admin View\)/i)).toBeInTheDocument()}) test( 'allows access to a public whitepaper for non-admin user', async () => {'; mockUseParams.mockReturnValue({ id: 'public-id-non-admin, })'; (mockUseAuth: as jest.Mock).mockReturnValue({ isAdmin false, }) mockSupabaseInvoke.mockResolvedValue({ data: { whitepaper_data mockWhitepaperDat,a, is_public: tru,e, created_at: new Date().toISOString(,)}, error: nul,l}) render(<OriginalWhitepaperViewPage: />); await waitFor(() => expect(screen.getByTestId( 'mock-preview-panel')).toBeInTheDocument())'; await waitFor(() => expect(screen.getByTestId( 'mock-preview-panel')).toBeInTheDocument(),' expect(mockPreviewPanel).toHaveBeenCalledWith( expect.objectContaining(mockWhitepaperData), {})})})}); 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
