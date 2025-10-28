    type: 'website',
  },
};

function TestPage() {
  return (
        </div>
      </div>
    </div>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <ErrorBoundary>
      <TestPage {...props} />
    </ErrorBoundary>
  );
}

export default function Wrapped(props: { [key: string]: unknown }) {
  return (
    <ErrorBoundary>
      <TestPage {...props} />
    </ErrorBoundary>
  );
}