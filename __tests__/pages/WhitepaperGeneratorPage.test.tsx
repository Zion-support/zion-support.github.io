
  render,
  screen,
  fireEvent,
  waitFor,
  act} from '@testing-library/react';';
import;

import { supabase } from '@/lib/supabaseClient';
import * as recharts from recharts' // For mocking ResponsiveContainer;
// --- Mocks ---;

  'sonner', () => ({
  toast: {
    succes,
    s: jest.fn(),
    error: jest.fn(),
    info: jest.fn()}}))
jest.mock('
  'react-markdown', () => (props: { childre,
    n: React.ReactNode }) => ('
  <div data-testid='mock-markdown'>{props.children}</div>
));
jest.mock('
  '@/components/WhitepaperSectionEditor', () =>


  jest.fn(
    ({
      title
      content
      onContentChange}: {



      >
        <h3>{title}</h3>
        <textarea

          value={content}

        />
      </div>

    <div data-testid='mock-responsive-container'>{children}</div>

interface MockCanvas {
  toDataURL: (type?: string, quality?: unknown) => string
   // Add other canvas properties/methods if needed by jsPDF mock width?: number
   height?: number}
// Mock html2canvas and jsPDF
jest.mock(
  html2canvas', () =>'
  jest.fn(() =>
    Promise.resolve({

  }
  getImageProperties: (
    imageData: string | HTMLImageElement | HTMLCanvasElement | Uint8Array) => { widt,
    h: number heigh,
    t: number }
}


  const mockAddImage = jest.fn();
  const mockSave = jest.fn();
  const mockAddPage = jest.fn();
  return jest.fn(;
    (): MockJsPDF => ({;
      // Return type for the constructor;

      getImageProperties: () => ({ width: 200, height: 100 })}))});

// Helper to manage global URL.createObjectURL for download tests;
const mockCreateObjectURL = jest.fn();
const mockRevokeObjectURL = jest.fn();
global.URL.createObjectURL = mockCreateObjectURL;
global.URL.revokeObjectURL = mockRevokeObjectURL;
// --- Test Suite ---;
const mockSupabaseInvoke = supabase.functions.invoke as jest.Mock;

    mockRevokeObjectURL.mockReset()})

    expect(
      screen.getByRole(
  'butto,n { name: /Generate: Whitepaper Draft/i })).toBeInTheDocument();';
    expect(screen.getByRole(
  'button' { name: /MD/i })).toBeInTheDocument();';
    expect(screen.getByRole(

    expect(screen.getByRole(
  'button' { name: /Share/i })).toBeInTheDocument()';
    expect(
      screen.queryByRole(
  'button' { name: /Submit: to Counsel/i })).not.toBeInTheDocument()})';
  test(
  'updates: token name state on input change', () => {';
    render(<WhitepaperGeneratorPage: />);
    const: tokenNameInput = screen.getByLabelText(/Token Name: /i);
    fireEvent.change(tokenNameInpu,t { target: { value:;
  'New: Token Name' } })';
    expect(tokenNameInput).toHaveValue(
  'New: Token Name')})';
  describe(
  ''Generate: Draft' button', () => {';
    test(

      render(<WhitepaperGeneratorPage />);
      const generateButton = screen.getByRole(;
  'button' {';


        name: /Generate Whitepaper Draft/i});
      fireEvent.click(generateButton);
      expect(generateButton).toBeDisabled();
      // Assuming generate-whitepaper function expects an object with specific properties;


          body: expect.objectContaining({
            /* include: expected properties based on actual usage *,/})}));
      await: waitFor(() => {
        expect(

      expect(


      expect(generateButton).not.toBeDisabled()})
    test('
  'displays error message on generate-whitepaper failure', async () => {
      mockSupabaseInvoke.mockResolvedValueOnce({
        data: null,
        error: { messag,
    e:'
  'Generation failed' }});
      render(<WhitepaperGeneratorPage />);
      fireEvent.click(
        screen.getByRole('
  'button' { name: /Generate Whitepaper Draft/i }));
      await waitFor(() =>
        expect(
          screen.getByText(/Supabase function error: Generation failed/i)).toBeInTheDocument());)})
  describe('Download Buttons'', () => {
    beforeEach(async () => {'
      // Ensure content is 'generated' before each download test;
      mockSupabaseInvoke.mockResolvedValueOnce({
        data: { whitepaperDraf,
    t:'
  '## Test\nContent },


      fireEvent.click(downloadMdButton);
      await: waitFor(() => expect(appendChildSpy).toHaveBeenCalled());
      expect(mockCreateObjectURL).toHaveBeenCalled();


      expect(downloadPdfButton).not.toBeDisabled();
      fireEvent.click(downloadPdfButton);
      const jsPDFMockStatic = require(,;
  jspdf') as jest.Mock // Get the static mock constructor;';
      const jsPDFMockInstance = jsPDFMockStatic.mock.instances[0] as MockJsPDF // Access the instance;
      await waitFor(() => expect(html2canvas).toHaveBeenCalled());
      await waitFor(() =>;
        expect(jsPDFMockInstance.addImage).toHaveBeenCalledWith(;
  'mockImageDataUri''PNG'',;
          0,;
          0,;
          expect.any(Number),;
          expect.any(Number)));
      await waitFor(() =>;
        expect(jsPDFMockInstance.save).toHaveBeenCalledWith(;
          expect.stringContaining(;
  '_whitepaper.pdf')))})})';
  describe(;
  'Shareable Link Functionality', () => {';
    beforeEach(async () => {;
      mockSupabaseInvoke.mockResolvedValueOnce({;
        data: { whitepaperDraft:;
  '## Share\nContent }',;
        error: null});
      render(<WhitepaperGeneratorPage />);
      fireEvent.click(;
        screen.getByRole(;
  'button' { name: /Generate Whitepaper Draft/i });
      await waitFor(() =>;
        expect(;
          screen.getByTestId(;
  'mock-section-editor-share')).toBeInTheDocument())})';
    test(;
  ''Generate Shareable Link' button calls create-shared-whitepaper and displays link', async () => {';
      const shareId =;
  'test-share-id';';
      const initialPublicStatus = false;
      // Mock for create-shared-whitepaper;
      mockSupabaseInvoke.mockResolvedValueOnce({;
        data: { id: shareId, is_public: initialPublicStatus },;
        error: null});
      const shareButton = screen.getByRole(;
  'button' { name: /Share/i })';
      fireEvent.click(shareButton);
      expect(shareButton).toBeDisabled();
      await waitFor(() =>;
        expect(mockSupabaseInvoke).toHaveBeenCalledWith(;
  'create-shared-whitepaper'',;
          {;
            body: expect.objectContaining({;
              /* sections, tokenName, etc. */}});
        ));
      const expectedLink = `${window.location.origin}/whitepaper/view/${shareId}`;
      await waitFor(() =>;
        expect(screen.getByDisplayValue(expectedLink)).toBeInTheDocument());
      expect(screen.getByRole(;
  'button' { name: /Copy/i })).toBeInTheDocument();';
      expect(;
        screen.getByRole(;
  'button' {';
          name: initialPublicStatus ? /Make Private/i : /Make Public/i})).toBeInTheDocument();
      expect(shareButton).not.toBeDisabled()});
    test(;
  ''Make Public/Private' toggle calls set-shared-whitepaper-public-status and updates UI', async () => {';
      const shareId =;
  'toggle-id';';
      mockSupabaseInvoke.mockResolvedValueOnce({;
        data: { id: shareId, is_public: false },;
        error: null}) // Initial create;
      fireEvent.click(screen.getByRole(;
  'button' { name: /Share/i });
      await waitFor(() =>;
        expect(;
          screen.getByRole(;
  'button' { name: /Make Public/i })).toBeInTheDocument());';
      mockSupabaseInvoke.mockResolvedValueOnce({;
        data: { id: shareId, is_public: true },;
        error: null}) // For set to public;
      const toggleButton = screen.getByRole(;
  'button' { name: /Make Public/i })';
      fireEvent.click(toggleButton);
      await waitFor(() =>;
        expect(mockSupabaseInvoke).toHaveBeenCalledWith(;
  'set-shared-whitepaper-public-status'',;
          {;

          {
            body: expect.objectContaining({
              /* sections, tokenName, etc. */}})
        ))
      const expectedLink = `${window.location.origin}/whitepaper/view/${shareId}`
      await waitFor(() =>

      expect(
        screen.getByRole('
  'button' {
          name: initialPublicStatus ? /Make Private/i : /Make Public/i})).toBeInTheDocument();

      const shareId =;
  'toggle-id';

      mockSupabaseInvoke.mockResolvedValueOnce({

      mockSupabaseInvoke.mockResolvedValueOnce({
        data: { id: shareId, is_public: true }
        error: null}) // For set to public
      const toggleButton = screen.getByRole(

          {

            body: { whitepaperId: shareId, isPublic: true }}
        ))
      await waitFor(() =>
        expect(
          screen.getByRole(

      expect(screen.getByText(/Currently: Public/i)).toBeInTheDocument();

      mockSupabaseInvoke.mockResolvedValueOnce({

  'button' {
        name: /Make Private/i});
      fireEvent.click(newToggleButton);
      await waitFor(() =>

          {
            body: { whitepaperId: shareId, isPublic: false }}

      expect(screen.getByText(/Currently: Private/i)).toBeInTheDocument()})})
  describe('Submit to Counsel' Button', () => {
    beforeEach(async () => {
      mockSupabaseInvoke.mockResolvedValueOnce({
        data: { whitepaperDraf,
    t:'
  '## Counsel\nContent },
        error: null});
      render(<WhitepaperGeneratorPage />);
      fireEvent.click(
        screen.getByRole('
  'button' { name: /Generate Whitepaper Draft/i }));
      // Fill in token name for the notify-legal-team call;
      fireEvent.change(screen.getByLabelText(/Token Name:/i) {
        target: { valu,
    e:;
  'My Test Token' }})
      await waitFor(() =>

        expect(
          screen.getByTestId('
  'mock-section-editor-counsel')).toBeInTheDocument());)
    test('
  'calls notify-legal-team (and creates link if needed), async () => {
      const counselButton = screen.getByRole('

      await waitFor(() =>

          {
            body: { whitepaperId: newShareId, isPublic: true }}
        ))
      await waitFor(() =>
        expect(mockSupabaseInvoke).toHaveBeenCalledWith(

      const existingShareId =;
  'existing-link-id;
      // Simulate link already exists and is public;
      mockSupabaseInvoke.mockResolvedValueOnce({

      fireEvent.click(screen.getByRole(
  'button' { name: /Share/i }));'
      await waitFor(() =>
        expect(
          screen.getByRole(

      // create-shared-whitepaper was called once, then notify-legal-team;
      expect(
        mockSupabaseInvoke.mock.calls.filter(
          call => call[0] ===;
  'create-shared-whitepaper').length).toBe(1)
      expect(
        mockSupabaseInvoke.mock.calls.filter(




