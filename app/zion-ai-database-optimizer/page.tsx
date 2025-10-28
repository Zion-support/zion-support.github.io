    type: 'website',
  },
};

  );
}

export default function Wrapped(props: { [key: string]: unknown }) {
  return (
    <ErrorBoundary>
      <ZionaidatabaseoptimizerPage {...props} />
    </ErrorBoundary>
  );
}