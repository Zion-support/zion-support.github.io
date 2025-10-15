// Mock the image loading
const mockImage = {
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  src: '',
  onload: null,
  onerror: null
