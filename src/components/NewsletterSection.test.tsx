
describe('NewsletterSection', () => {
  it('renders without crashing', () => {
    render(<NewsletterSection  />) ;
    expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ;

describe ('NewsletterSection', () => {
'
  it ('renders without crashing', () => {
    render (<NewsletterSection  />) ;'
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () }) ;
'
  it ('displays expected content', () => {
    render (<NewsletterSection  />) ;
    // Add specific test assertions based on component content
  }) }) ;
'