// Define a more specific type for the mocked response;
interface MockApiResponse extends NextApiResponse {;
  status: vi.Mock<[number] MockApiResponse>;
  json: vi.Mock<[unknown] MockApiResponse> // Changed from [any] to [unknown];
  setHeader: vi.Mock<[string, string | string[]] void>;

  end: vi.Mock<[(cb?: () => void) => void], void>}
function mockReq(method: string, body?: unknown): NextApiRequest {
  return {
    method
    body
    headers: {}
    query: {}
    cookies: {}} as NextApiRequest}
function mockRes(): MockApiResponse {
  const res: Partial<MockApiResponse> = {}

  const res = mockRes();
  handler(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith(
    expect.objectContaining({'
      email: 'jane@example.com,

test(
  'DELETE soft deletes account', () => {'
  const req = mockReq(

