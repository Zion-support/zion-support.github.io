
import Navigation from '../components/Navigation';


export const metadata = {
    type: 'website',
  },
};

    </div>
  );
}

export default function Wrapped(props: { [key: string]: unknown }) {
  return (
    <ErrorBoundary>
      <Page {...props} />
    </ErrorBoundary>
  );
}
