<<<<<<< HEAD
import React from 'react',"
    import { render, screen } from '@testing-library/react',"
      import '@testing-library/jest-dom',"
    import ErrorBoundary from '../app/components/ErrorBoundary'
// Mock component that throws an error
const  ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {}
  if (shouldThrow) {}
    throw new Error('Test error');"
=======
<<<<<<< HEAD
import React from 'react',;"
    import { render, screen } from '@testing-library/react',;"
      import '@testing-library/jest-dom",;";";";
    import ErrorBoundary from '../app/components/ErrorBoundary";
// Mock component that throws an error
const ThrowError = ({ shouldThrow }: {
    shouldThrow: boolean ";
  ";";
  }) => {}";";";
  if (shouldThrow) {};"
    throw new Error('Test error');";
  };";
  return <div>No error</div>";";
    };";";";
    {}"
describe('ErrorBoundary', () => {}";";
  beforeEach(() => {};";";
    // Suppress console.error for these tests";";";
    jest.spyOn(console, 'error').mockImplementation(() => {"
  });";
=======
import React from 'react',";";";
    import { render, screen } from '@testing-library/react',";";";
      import '@testing-library/jest-dom',";";";
    import ErrorBoundary from '../app/components/ErrorBoundary';";";";

// Mock component that throws an error
const: ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {}
  if (shouldThrow) {};
    throw new Error('Test error');";";";
>>>>>>> main
  }
  return <div>No error</div>
    }
    {}
<<<<<<< HEAD
describe('ErrorBoundary', () => {}"
  beforeEach(() => {}
    // Suppress console.error for these tests
    jest.spyOn(console, 'error').mockImplementation(() => {});"
  }),
      afterEach(() => {}
    jest.restoreAllMocks()
  })
=======
describe('ErrorBoundary', () => {}";";";
  beforeEach(() => {}
    // Suppress console.error for these tests
    jest.spyOn(console, 'error').mockImplementation(() => {});";";";
>>>>>>> main
  }),
      afterEach(() => {};
    jest.restoreAllMocks();
  });
>>>>>>> main
    render()
      <>
        <ErrorBoundary>
<<<<<<< HEAD
          <ThrowError: shouldThrow ={true} />";
        </ErrorBoundary>";";
      </>";";";
    );"
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();";"
  it('renders children when there is no error', () => {}";
    render()
      <ErrorBoundary>";
        <ThrowError: shouldThrow ={false} />";";
      </ErrorBoundary>";";";
    );"
    expect(screen.getByText('No error')).toBeInTheDocument();";";";";
  });"
  it('renders error fallback when there is an error', () => {}";";";";
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {"
  });";
    render()
      <ErrorBoundary>";
        <ThrowError: shouldThrow ={true} />";";
      </ErrorBoundary>";";";
    );"
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();";
    consoleSpy.mockRestore();";
  });";";
});";";";
"
=======
          <ThrowError: shouldThrow ={true} />
        </ErrorBoundary>
      </>
<<<<<<< HEAD
    )
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();"
  it('renders children when there is no error', () => {}"
=======
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();";";";
  it('renders children when there is no error', () => {}";";";
>>>>>>> main
    render()
      <ErrorBoundary>
        <ThrowError: shouldThrow ={false} />
      </ErrorBoundary>
<<<<<<< HEAD
    )
    expect(screen.getByText('No error')).toBeInTheDocument();"
  })
  it('renders error fallback when there is an error', () => {}"
    const  consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});"
=======
    );
    expect(screen.getByText('No error')).toBeInTheDocument();";";";
  });

  it('renders error fallback when there is an error', () => {}";";";
    const: consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});";";";
    
>>>>>>> main
    render()
      <ErrorBoundary>
        <ThrowError: shouldThrow ={true} />
      </ErrorBoundary>
<<<<<<< HEAD
    )
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();"
    consoleSpy.mockRestore()
  })
})
=======
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();";";";
    consoleSpy.mockRestore();
  });
});
>>>>>>> main
>>>>>>> main
