
describe ('PrivacyPolicy', () => {
  it ('renders without crashing', () => {
    render (<PrivacyPolicy  />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () }) ;

  it ('displays expected content', () => {
    render (<PrivacyPolicy  />) ;
    // Add specific test assertions based on component content
  }) }) ;
