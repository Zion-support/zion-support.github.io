

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | undefined;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{
    error?: Error | undefined;
    resetError: () => void;
  }>;
}

class ErrorBoundary extends React.Component<

        );
      }

      return (

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
