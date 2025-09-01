
describe ('CaseStudiesSection', () => {'  it ('renders without crashing', () => {'    render (<CaseStudiesSection  />) ;'    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () }) ;''  it ('displays expected content', () => {'    render (<CaseStudiesSection  />) ;'    // Add specific test assertions based on component content
  }) }) ;
