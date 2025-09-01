
describe('LazyLoader', () => {
  it('renders without crashing', () => {
    render(<LazyLoader  />) ;
    expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ;

describe ('LazyLoader', () => {
'
  it ('renders without crashing', () => {
    render (<LazyLoader  />) ;'
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () }) ;
'
  it ('displays expected content', () => {
    render (<LazyLoader  />) ;
    // Add specific test assertions based on component content
  }) }) ;
'