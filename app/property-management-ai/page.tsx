    type: 'website',
  },
};

        </div>
      </div>
    </div>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <ErrorBoundary>
      <PropertyManagementAiPage {...props} />
    </ErrorBoundary>
  );
}

export default function Wrapped(props: { [key: string]: unknown }) {
  return (
    <ErrorBoundary>
      <PropertymanagementaiPage {...props} />
    </ErrorBoundary>
  );
}