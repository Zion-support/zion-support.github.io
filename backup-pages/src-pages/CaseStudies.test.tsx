
describe ('CaseStudies', () => {
  it ('renders without crashing', () => {
    render (<CaseStudies  />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () }) ;

  it ('displays expected content', () => {
    render (<CaseStudies  />) ;
    // Add specific test assertions based on component content
  }) }) ;
