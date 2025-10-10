import React from 'react';

// Mock the components that App depends on;
jest.mock('../components/ErrorBoundary', () => {
  return function MockErrorBoundary({ children }: { children: React.ReactNode }) {
    return <div data-testid="error-boundary">{children}</div>;
  };
});

}"
    return <div data-testid="seo">SEO Component</div>;
  };
});

}"
    return <div data-testid="loading">Loading...</div>;
  };
});

// Mock the pages;
jest.mock('../pages/Home', () => {
  return function MockHome() {
}"
    return <div data-testid="home-page">Home Page</div>;
  };
});

}"
    return <div data-testid="about-page">About Page</div>;
  };
});

}"
    return <div data-testid="services-page">Services Page</div>;
  };
});

}"
    return <div data-testid="blog-page">Blog Page</div>;
  };
});

}"
    return <div data-testid="contact-page">Contact Page</div>;
  };
});

}"
    return <div data-testid="team-page">Team Page</div>;
  };
});

}"
    return <div data-testid="privacy-page">Privacy Page</div>;
  };
});

}"
    return <div data-testid="terms-page">Terms Page</div>;
  };
});

  });

  });
});
"