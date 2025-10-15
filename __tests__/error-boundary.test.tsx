'


// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {}
  if (shouldThrow) {};
    throw new Error('Test error');'
  }

        <ErrorBoundary>
          <ThrowError shouldThrow ={true} />
        </ErrorBoundary>
      </>
    );
    

  });

  it('renders error fallback when there is an error', () => {}'
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});'
    
    render()
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();'
    consoleSpy.mockRestore();
  });
});

